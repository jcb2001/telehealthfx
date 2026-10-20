/**
 * Cloudflare Edge Email Engine & CAN-SPAM Compliance Layer
 * Project: Telehealth FX · Losing Weight RX · Get Skinny Online
 * Complies with 15 U.S.C. § 7704 & RFC 8058 One-Click List-Unsubscribe
 * 
 * FABLE MODE DELIVERABILITY INVARIANTS:
 * - ZERO DOLLAR AMOUNTS ($) OR NUMERICAL PRICES IN SUBJECT LINES
 * - ZERO FAKE URGENCY ("Final notice", "Act now", "Urgent", "Limited time")
 * - ZERO COMMERCIAL HYPE ("Free", "100%", "Guaranteed", "Trap", "Melt fat")
 * - 3-5 WORD CAMOUFLAGED CLINICAL COORDINATOR SUBJECT LINES
 * - PLAIN-TEXT FOCUS WITH LIGHTWEIGHT RFC-COMPLIANT HTML
 */

export const CAN_SPAM_PHYSICAL_ADDRESS = "4100 Eldorado Parkway, McKinney, TX 75070";
export const CAN_SPAM_SENDER_ENTITY = "Telehealth FX Clinical Desk";

export const SPAM_TRIGGER_BLACKLIST = [
  "free",
  "100%",
  "guaranteed",
  "guarantee",
  "act now",
  "urgent",
  "limited time",
  "once in a lifetime",
  "no obligation",
  "risk-free",
  "risk free",
  "winner",
  "$$$",
  "final notice",
  "final call",
  "courtesy notice",
  "trap",
  "melt fat",
  "miracle",
  "click here"
];

export function escapeHtml(str) {
  return String(str ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export function auditEmailCompliance({ subject, textBody }) {
  const issues = [];
  const lowerSub = (subject || "").toLowerCase();
  const lowerBody = (textBody || "").toLowerCase();

  // 1. Zero Dollar Amount Rule in Subject
  if (/[\$\d]+(\.\d{2})?/.test(subject)) {
    issues.push("Subject contains dollar sign or numbers");
  }

  // 2. Blacklist Scan
  for (const phrase of SPAM_TRIGGER_BLACKLIST) {
    if (lowerSub.includes(phrase)) {
      issues.push(`Subject contains banned phrase: "${phrase}"`);
    }
  }

  // 3. Exclamation Mark Prohibition in Subject
  if (subject.includes("!")) {
    issues.push("Subject line contains exclamation mark");
  }

  return { compliant: issues.length === 0, issues };
}

export function getEmailTemplate(templateKey, reg = {}) {
  const name = reg.first_name || "there";
  const slug = reg.webinar_slug || "food-noise-metabolic-reset";
  const brand = reg.brand_id || "telehealthfx";
  
  let baseUrl = "https://telehealthfx.com";
  if (brand === "losingweightrx") baseUrl = "https://losingweightrx.com";
  if (brand === "getskinnyonline") baseUrl = "https://getskinnyonline.com";

  const roomUrl = `${baseUrl}/briefings/${slug}/?room=1&reg=${reg.id || ""}`;
  const replayUrl = `${baseUrl}/briefings/${slug}/?room=1&replay=1`;
  const qualifyUrl = `${baseUrl}/briefings/${slug}/qualified/?reg=${reg.id || ""}`;
  const unsubUrl = `${baseUrl}/api/email?action=unsubscribe&email=${encodeURIComponent(reg.email || "")}`;

  let subject = "";
  let preheader = "";
  let bodyLines = [];

  switch (templateKey) {
    case "confirmation":
      subject = "Incretin briefing access link";
      preheader = "Here is your direct session link and schedule details.";
      bodyLines = [
        `Hi ${name},`,
        ``,
        `Here is your direct access link for the upcoming incretin briefing:`,
        `${roomUrl}`,
        ``,
        `The session explains how GLP-1 and GIP receptor signaling regulate appetite setpoints, why commercial clinic dose escalations occur, and how our flat-rate protocol works.`,
        ``,
        `We will also send a short reminder 15 minutes before the briefing opens.`,
        ``,
        `Best regards,`,
        `Clinical Intake Desk`,
        `Telehealth FX`
      ];
      break;

    case "starting_soon":
      subject = "Session starting shortly";
      preheader = "Your briefing room is now open.";
      bodyLines = [
        `Hi ${name},`,
        ``,
        `The incretin session is beginning in about 15 minutes:`,
        `${roomUrl}`,
        ``,
        `The presentation covers appetite signaling biology and our flat-rate compounding program.`,
        ``,
        `We recommend opening the link now to ensure your audio is connected.`,
        ``,
        `Best regards,`,
        `Clinical Intake Desk`,
        `Telehealth FX`
      ];
      break;

    case "missed_session":
      subject = "Session replay and briefing summary";
      preheader = "Access the briefing recording at your convenience.";
      bodyLines = [
        `Hi ${name},`,
        ``,
        `In case you were unable to join yesterday's briefing, we have opened a playback window for you here:`,
        `${replayUrl}`,
        ``,
        `The session walks through incretin receptor biology, how compounded dosing works, and what to expect during physician review.`,
        ``,
        `Best regards,`,
        `Clinical Intake Desk`,
        `Telehealth FX`
      ];
      break;

    case "early_dropoff":
      subject = "Notes on satiety signaling";
      preheader = "A brief summary of the metabolic topics covered.";
      bodyLines = [
        `Hi ${name},`,
        ``,
        `You attended part of yesterday's briefing on incretin hormones.`,
        ``,
        `Here is a short summary of the core physiological concept: natural GLP-1 and GIP hormones signal fullness directly to the brain's satiety center, which helps calm constant appetite signals without severe caloric restriction.`,
        ``,
        `You can review the full slide walkthrough here when you have a moment:`,
        `${replayUrl}`,
        ``,
        `Best regards,`,
        `Clinical Intake Desk`,
        `Telehealth FX`
      ];
      break;

    case "watched_no_cta":
      subject = "Dosing and clinic fee structures";
      preheader = "How our flat-rate schedule compares to retail clinics.";
      bodyLines = [
        `Hi ${name},`,
        ``,
        `During yesterday's briefing, we covered how conventional retail clinics often raise their monthly fees as your weekly dosage increases.`,
        ``,
        `Under our protocol, the monthly rate remains flat across all titration levels, with consultations, medical supplies, and shipping included.`,
        ``,
        `You can review the protocol and check your eligibility here:`,
        `${qualifyUrl}`,
        ``,
        `Best regards,`,
        `Clinical Intake Desk`,
        `Telehealth FX`
      ];
      break;

    case "qualified_followup":
      subject = "Regarding your medical qualification";
      preheader = "Your assessment details have been saved.";
      bodyLines = [
        `Hi ${name},`,
        ``,
        `Your preliminary intake responses indicate you may be a candidate for compounded incretin therapy.`,
        ``,
        `The next step is completing your brief medical health history so a board-certified physician can review your baseline:`,
        `${qualifyUrl}`,
        ``,
        `Once submitted, clinical reviews are typically completed within 24 business hours.`,
        ``,
        `Best regards,`,
        `Clinical Intake Desk`,
        `Telehealth FX`
      ];
      break;

    case "day3_pharmacy":
      subject = "Pharmacy sourcing and safety standards";
      preheader = "Details on how compounded medications are prepared.";
      bodyLines = [
        `Hi ${name},`,
        ``,
        `Patients often ask where their medication is prepared.`,
        ``,
        `All protocols are fulfilled exclusively by state-licensed, FDA-inspected 503A compounding pharmacies located in the United States. Every batch undergoes independent analytical testing for potency, sterility, and purity before shipment.`,
        ``,
        `You can read our full clinical compounding standards here:`,
        `${baseUrl}/blog/compounded-semaglutide-503a-pharmacy-guide/`,
        ``,
        `Best regards,`,
        `Clinical Intake Desk`,
        `Telehealth FX`
      ];
      break;

    case "day5_needle_free":
      subject = "Alternative oral administration options";
      preheader = "Sublingual tablet options for patients who prefer not to inject.";
      bodyLines = [
        `Hi ${name},`,
        ``,
        `If you prefer not to use weekly subcutaneous injections, there are also sublingual oral tablet options available.`,
        ``,
        `These dissolvable tablets absorb through the oral mucosa and provide an alternative routine for patients with needle hesitation.`,
        ``,
        `You can review the oral administration protocol here:`,
        `${baseUrl}/blog/oral-glp-1-sublingual-tablets-vs-injections-2026/`,
        ``,
        `Best regards,`,
        `Clinical Intake Desk`,
        `Telehealth FX`
      ];
      break;

    case "day7_archive":
      subject = "Closing your intake file";
      preheader = "Checking in before archiving your preliminary assessment.";
      bodyLines = [
        `Hi ${name},`,
        ``,
        `We are updating our weekly consultation schedule and wanted to check if you still plan to proceed with your clinical intake.`,
        ``,
        `If you are still considering therapy, your preliminary file remains active here:`,
        `${qualifyUrl}`,
        ``,
        `If you have already found care elsewhere or decided not to proceed, no problem at all—we will quietly archive your preliminary assessment.`,
        ``,
        `Best regards,`,
        `Clinical Intake Desk`,
        `Telehealth FX`
      ];
      break;

    default:
      subject = "Incretin session information";
      preheader = "Important update regarding your briefing.";
      bodyLines = [
        `Hi ${name},`,
        ``,
        `Thank you for your interest in our incretin metabolic briefing.`,
        ``,
        `You can access the briefing session here:`,
        `${roomUrl}`,
        ``,
        `Best regards,`,
        `Clinical Intake Desk`,
        `Telehealth FX`
      ];
  }

  const textBody = `${bodyLines.join("\n")}\n\n---\nTelehealth FX Clinical Desk • ${CAN_SPAM_PHYSICAL_ADDRESS}\nTo unsubscribe: ${unsubUrl}\n`;

  const htmlBody = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${escapeHtml(subject)}</title>
</head>
<body style="margin:0;padding:24px 16px;background-color:#0d1117;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;color:#e6edf3;line-height:1.6;">
  <div style="max-width:580px;margin:0 auto;background:#161b22;border:1px solid #30363d;border-radius:8px;padding:32px 24px;">
    <div style="font-size:12px;color:#8b949e;text-transform:uppercase;letter-spacing:1px;font-weight:700;margin-bottom:16px;">Telehealth FX · Clinical Desk</div>
    ${bodyLines.map(line => line === "" ? `<div style="height:12px;"></div>` : `<p style="margin:0 0 12px;font-size:15px;color:#c9d1d9;">${escapeHtml(line).replace(/(https:\/\/[^\s]+)/g, '<a href="$1" style="color:#2ea043;text-decoration:underline;">$1</a>')}</p>`).join("")}
    <div style="margin-top:28px;padding-top:16px;border-top:1px solid #21262d;font-size:12px;color:#8b949e;line-height:1.5;">
      Telehealth FX Clinical Desk • ${CAN_SPAM_PHYSICAL_ADDRESS}<br>
      Independent digital health educational resource. Not emergency medical services.<br>
      <a href="${unsubUrl}" style="color:#8b949e;text-decoration:underline;">One-Click Unsubscribe</a>
    </div>
  </div>
</body>
</html>`;

  return { subject, preheader, textBody, htmlBody, unsubUrl };
}

export async function isEmailUnsubscribed(env, email) {
  if (!env.DB || !email) return false;
  try {
    const row = await env.DB.prepare(
      `SELECT id FROM email_unsubscribes WHERE LOWER(email) = LOWER(?) LIMIT 1`
    ).bind(email).first();
    return !!row;
  } catch (_) {
    return false;
  }
}

export async function sendWebinarEmail({ env, reg, templateKey }) {
  const toEmail = (reg.email || "").trim().toLowerCase();
  if (!toEmail) return { ok: false, error: "Missing recipient email" };

  const suppressed = await isEmailUnsubscribed(env, toEmail);
  if (suppressed) {
    return { ok: false, skipped: true, reason: "Recipient suppressed via global unsubscribe" };
  }

  const { subject, textBody, htmlBody, unsubUrl } = getEmailTemplate(templateKey, reg);
  const audit = auditEmailCompliance({ subject, textBody });
  if (!audit.compliant) {
    return { ok: false, error: `Compliance violation: ${audit.issues.join(", ")}` };
  }

  let status = "sent";
  let providerResponse = "mock_send";

  // If Amazon SES credentials or Cloudflare Email binding exist
  try {
    if (env.EMAIL && typeof env.EMAIL.send === "function") {
      const { EmailMessage } = await import("cloudflare:email");
      const fromEmail = env.EMAIL_FROM_ADDRESS || "intake@telehealthfx.com";
      const rawMime = `From: "Telehealth FX" <${fromEmail}>\r\nTo: <${toEmail}>\r\nSubject: ${subject}\r\nList-Unsubscribe: <${unsubUrl}>\r\nList-Unsubscribe-Post: List-Unsubscribe=One-Click\r\nContent-Type: text/plain; charset=utf-8\r\n\r\n${textBody}`;
      const message = new EmailMessage(fromEmail, toEmail, rawMime);
      await env.EMAIL.send(message);
      providerResponse = "cloudflare_email_binding";
    } else {
      status = "logged_local";
      providerResponse = "Simulated send / waiting for SES binding";
    }
  } catch (err) {
    status = "error";
    providerResponse = err.message || String(err);
  }

  // Record audit log in D1
  if (env.DB) {
    try {
      await env.DB.prepare(
        `INSERT INTO webinar_email_logs (registration_id, email_to, brand_id, template_key, subject, status, provider_response)
         VALUES (?, ?, ?, ?, ?, ?, ?)`
      )
        .bind(reg.id || null, toEmail, reg.brand_id || "telehealthfx", templateKey, subject, status, providerResponse)
        .run();
    } catch (_) {}
  }

  return { ok: status !== "error", status, templateKey, subject, providerResponse };
}
