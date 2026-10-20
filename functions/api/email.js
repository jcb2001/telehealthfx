/**
 * Cloudflare Pages Function: /api/email
 * Handles:
 *  - GET /api/email?action=unsubscribe&email=... : Processes RFC 8058 One-Click or direct link unsubscriptions
 *  - POST /api/email : Processes RFC 8058 One-Click list-unsubscribe POST requests
 */

const CORS_HEADERS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type",
  "Content-Type": "text/html; charset=utf-8"
};

export async function onRequestOptions() {
  return new Response(null, { status: 204, headers: CORS_HEADERS });
}

export async function onRequestGet(context) {
  const { request, env } = context;
  const url = new URL(request.url);
  const email = (url.searchParams.get("email") || "").trim().toLowerCase();

  if (email && env.DB) {
    try {
      await env.DB.prepare(
        `INSERT OR IGNORE INTO email_unsubscribes (email, reason) VALUES (?, 'user_direct_click')`
      ).bind(email).run();

      await env.DB.prepare(
        `UPDATE webinar_registrations SET unsubscribed_at = datetime('now') WHERE LOWER(email) = LOWER(?)`
      ).bind(email).run();
    } catch (_) {}
  }

  const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>Unsubscribed — Telehealth FX</title>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    body { background: #0d1117; color: #c9d1d9; font-family: -apple-system, sans-serif; display: flex; align-items: center; justify-content: center; min-height: 100vh; margin: 0; padding: 20px; box-sizing: border-box; }
    .box { background: #161b22; border: 1px solid #30363d; border-radius: 8px; padding: 32px; max-width: 480px; width: 100%; text-align: center; }
    h1 { color: #f0f6fc; font-size: 20px; margin-bottom: 12px; }
    p { font-size: 14px; line-height: 1.6; color: #8b949e; }
    .email { color: #58a6ff; font-weight: 600; }
  </style>
</head>
<body>
  <div class="box">
    <h1>You have been unsubscribed</h1>
    <p>The address <span class="email">${email || "provided"}</span> has been removed from all educational briefings and updates.</p>
    <p>Telehealth FX Clinical Desk • 4100 Eldorado Parkway, McKinney, TX 75070</p>
  </div>
</body>
</html>`;

  return new Response(html, { status: 200, headers: CORS_HEADERS });
}

export async function onRequestPost(context) {
  const { request, env } = context;
  const url = new URL(request.url);
  const email = (url.searchParams.get("email") || "").trim().toLowerCase();

  if (email && env.DB) {
    try {
      await env.DB.prepare(
        `INSERT OR IGNORE INTO email_unsubscribes (email, reason) VALUES (?, 'rfc8058_one_click')`
      ).bind(email).run();

      await env.DB.prepare(
        `UPDATE webinar_registrations SET unsubscribed_at = datetime('now') WHERE LOWER(email) = LOWER(?)`
      ).bind(email).run();
    } catch (_) {}
  }

  return new Response("Unsubscribed successfully", {
    status: 200,
    headers: { "Content-Type": "text/plain" }
  });
}
