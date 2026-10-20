/**
 * Cloudflare Pages Function: /api/register
 * Handles:
 *  - POST /api/register :
 *      1) Saves webinar registration + VSL telemetry into D1 (`telehealth-crm-db`)
 *      2) Dispatches immediate Fable-clean confirmation email
 *      3) Ingests medical pre-qualification questionnaire submissions
 *  - PATCH /api/register : Updates watch-time heartbeats (watch_percent, max_watch_seconds, unmuted_audio, cta_clicked)
 *  - GET /api/register : Returns live registration, watch-time, and qualification questionnaire metrics (secured via ADMIN_API_KEY)
 */

import { sendWebinarEmail } from "./_email.js";

const CORS_HEADERS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, PATCH, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Admin-Key",
  "Content-Type": "application/json; charset=utf-8"
};

function computeAttendanceSegment({ maxWatchSec, watchPct, clickedCta, scheduledForMs }) {
  if (clickedCta) return "clicked_cta";
  if (watchPct >= 75) return "watched_75_plus";
  if (watchPct >= 25) return "mid_dropoff_25_to_74";
  if (maxWatchSec > 0 || watchPct > 0) return "early_dropoff_under_25";
  if (scheduledForMs && Date.now() > scheduledForMs + 20 * 60 * 1000) {
    return "missed_session";
  }
  return "registered";
}

export async function onRequestOptions() {
  return new Response(null, { status: 204, headers: CORS_HEADERS });
}

export async function onRequestPost(context) {
  const { request, env } = context;

  try {
    const body = await request.json();
    const cf = request.cf || {};
    const ipCountry = cf.country || request.headers.get("CF-IPCountry") || "";
    const userAgent = request.headers.get("User-Agent") || "";
    const brandId = (body.brandId || "telehealthfx").trim().toLowerCase();

    // 1. Medical Pre-Qualification Screener Submission
    if (body.leadType === "qualification_quiz") {
      const email = (body.email || "").trim().toLowerCase();
      const calculatedBmi = Number(body.calculatedBmi) || null;
      const hasPriorGlp1 = body.hasPriorGlp1 ? 1 : 0;
      const preferredFormat = body.preferredFormat || "injectable";
      const contraindicationFlag = body.contraindicationFlag ? 1 : 0;
      const qualified = (!contraindicationFlag && (calculatedBmi >= 27 || body.isOverweight)) ? 1 : 0;
      const matchedOfferId = preferredFormat === "sublingual_tablet" ? 1325 : 1548; // Willow or Embody
      let regId = Number(body.registrationId) || null;

      if (env.DB) {
        const quizRes = await env.DB.prepare(
          `INSERT INTO qualification_submissions (
            registration_id, brand_id, email, calculated_bmi, has_prior_glp1,
            preferred_format, contraindication_flag, qualified, matched_offer_id, answers_json
          ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`
        )
          .bind(
            regId,
            brandId,
            email,
            calculatedBmi,
            hasPriorGlp1,
            preferredFormat,
            contraindicationFlag,
            qualified,
            matchedOfferId,
            JSON.stringify(body.answers || {})
          )
          .run();

        if (regId) {
          await env.DB.prepare(
            `UPDATE webinar_registrations
             SET clicked_cta_at = COALESCE(clicked_cta_at, datetime('now')),
                 cta_click_type = 'qualification_quiz_submitted',
                 attendance_segment = 'clicked_cta'
             WHERE id = ?`
          ).bind(regId).run();
        }
      }

      return new Response(
        JSON.stringify({ ok: true, qualified: qualified === 1, matchedOfferId }),
        { status: 200, headers: CORS_HEADERS }
      );
    }

    // 2. Standard Webinar Registration
    const webinarSlug = (body.webinarSlug || "food-noise-metabolic-reset").trim();
    const vslVideoName = body.vslVideoName || "glp1_food_noise_vsl.mp4";
    const vslAngle = body.vslAngle || "Flagship: Food Noise & Satiety Reset";
    const vslDurationSec = Number(body.vslDurationSec) || 420;
    const firstName = (body.firstName || "Friend").trim();
    const email = (body.email || "").trim().toLowerCase();
    const phone = (body.phone || "").trim();
    const startingWeight = Number(body.startingWeight) || null;
    const goalWeight = Number(body.goalWeight) || null;
    const scheduleType = body.scheduleType || "just_in_time";
    const scheduledForMs = Number(body.scheduledForMs) || Date.now();

    if (!email || !email.includes("@")) {
      return new Response(JSON.stringify({ ok: false, error: "Valid email is required" }), {
        status: 400,
        headers: CORS_HEADERS
      });
    }

    let regId = Date.now();

    if (env.DB) {
      const insRes = await env.DB.prepare(
        `INSERT INTO webinar_registrations (
          brand_id, webinar_slug, vsl_video_name, vsl_angle, vsl_duration_sec,
          first_name, email, phone, starting_weight, goal_weight,
          schedule_type, scheduled_for_ms, ip_country, user_agent
        ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`
      )
        .bind(
          brandId,
          webinarSlug,
          vslVideoName,
          vslAngle,
          vslDurationSec,
          firstName,
          email,
          phone,
          startingWeight,
          goalWeight,
          scheduleType,
          scheduledForMs,
          ipCountry,
          userAgent
        )
        .run();

      regId = insRes.meta?.last_row_id || regId;
    }

    // Send immediate Fable-clean confirmation email
    const regObj = {
      id: regId,
      first_name: firstName,
      email,
      webinar_slug: webinarSlug,
      brand_id: brandId
    };

    let emailStatus = { ok: false };
    try {
      emailStatus = await sendWebinarEmail({ env, reg: regObj, templateKey: "confirmation" });
    } catch (_) {}

    return new Response(
      JSON.stringify({
        ok: true,
        registrationId: regId,
        firstName,
        email,
        emailStatus
      }),
      { status: 200, headers: CORS_HEADERS }
    );
  } catch (err) {
    return new Response(JSON.stringify({ ok: false, error: err.message }), {
      status: 500,
      headers: CORS_HEADERS
    });
  }
}

export async function onRequestPatch(context) {
  const { request, env } = context;

  try {
    const body = await request.json();
    const regId = Number(body.registrationId);
    if (!regId || !env.DB) {
      return new Response(JSON.stringify({ ok: false, error: "Missing registrationId or DB" }), {
        status: 400,
        headers: CORS_HEADERS
      });
    }

    const event = body.event || "heartbeat";
    const maxWatchSec = Number(body.maxWatchSeconds) || 0;
    const watchPct = Math.min(100, Math.max(0, Number(body.watchPercent) || 0));
    const segment = computeAttendanceSegment({
      maxWatchSec,
      watchPct,
      clickedCta: event === "clicked_cta" || event === "clicked_final_intake"
    });

    if (event === "enter_waiting_room") {
      await env.DB.prepare(
        `UPDATE webinar_registrations
         SET entered_waiting_room_at = COALESCE(entered_waiting_room_at, datetime('now')),
             updated_at = datetime('now')
         WHERE id = ?`
      ).bind(regId).run();
    } else if (event === "enter_broadcast_room") {
      await env.DB.prepare(
        `UPDATE webinar_registrations
         SET entered_broadcast_room_at = COALESCE(entered_broadcast_room_at, datetime('now')),
             updated_at = datetime('now')
         WHERE id = ?`
      ).bind(regId).run();
    } else if (event === "unmuted_audio") {
      await env.DB.prepare(
        `UPDATE webinar_registrations
         SET unmuted_audio_at = COALESCE(unmuted_audio_at, datetime('now')),
             updated_at = datetime('now')
         WHERE id = ?`
      ).bind(regId).run();
    } else if (event === "heartbeat") {
      await env.DB.prepare(
        `UPDATE webinar_registrations
         SET max_watch_seconds = MAX(max_watch_seconds, ?),
             watch_percent = MAX(watch_percent, ?),
             attendance_segment = ?,
             updated_at = datetime('now')
         WHERE id = ?`
      ).bind(maxWatchSec, watchPct, segment, regId).run();
    } else if (event === "clicked_cta") {
      const ctaType = (body.ctaType || "primary_quiz_intake").trim();
      await env.DB.prepare(
        `UPDATE webinar_registrations
         SET clicked_cta_at = COALESCE(clicked_cta_at, datetime('now')),
             cta_click_type = ?,
             attendance_segment = 'clicked_cta',
             updated_at = datetime('now')
         WHERE id = ?`
      ).bind(ctaType, regId).run();
    }

    return new Response(
      JSON.stringify({ ok: true, registrationId: regId, attendanceSegment: segment }),
      { status: 200, headers: CORS_HEADERS }
    );
  } catch (err) {
    return new Response(JSON.stringify({ ok: false, error: err.message }), {
      status: 500,
      headers: CORS_HEADERS
    });
  }
}

export async function onRequestGet(context) {
  const { request, env } = context;

  try {
    const url = new URL(request.url);
    const secret = env.ADMIN_API_KEY || "KailiKyle3133$";
    const authHeader = request.headers.get("Authorization") || "";
    const keyParam = url.searchParams.get("key") || "";

    if (authHeader !== `Bearer ${secret}` && keyParam !== secret) {
      return new Response(JSON.stringify({ ok: false, error: "Unauthorized" }), {
        status: 401,
        headers: CORS_HEADERS
      });
    }

    if (!env.DB) {
      return new Response(JSON.stringify({ ok: true, registrations: [] }), {
        status: 200,
        headers: CORS_HEADERS
      });
    }

    const brand = url.searchParams.get("brand");
    let query = `SELECT * FROM webinar_registrations`;
    const binds = [];
    if (brand) {
      query += ` WHERE brand_id = ?`;
      binds.push(brand);
    }
    query += ` ORDER BY id DESC LIMIT 50`;

    const rows = await env.DB.prepare(query).bind(...binds).all();
    const stats = await env.DB.prepare(
      `SELECT
         COUNT(*) AS total_registrations,
         SUM(CASE WHEN entered_waiting_room_at IS NOT NULL THEN 1 ELSE 0 END) AS total_waiting_room,
         SUM(CASE WHEN entered_broadcast_room_at IS NOT NULL THEN 1 ELSE 0 END) AS total_attended,
         SUM(CASE WHEN attendance_segment = 'watched_75_plus' THEN 1 ELSE 0 END) AS total_watched_75_plus,
         SUM(CASE WHEN clicked_cta_at IS NOT NULL THEN 1 ELSE 0 END) AS total_clicked_cta,
         ROUND(AVG(watch_percent), 1) AS avg_watch_percent
       FROM webinar_registrations`
    ).first();

    return new Response(
      JSON.stringify({ ok: true, stats, registrations: rows.results || [] }),
      { status: 200, headers: CORS_HEADERS }
    );
  } catch (err) {
    return new Response(JSON.stringify({ ok: false, error: err.message }), {
      status: 500,
      headers: CORS_HEADERS
    });
  }
}
