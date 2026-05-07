"use client";
import React from 'react';
import Image from 'next/image';
import { Icon } from './common.jsx';
const START_URL = "https://go.telehealthfx.com/start";

function BlogPrescribed24Hours() {
  return (<><section className="section" style={{ minHeight: '60vh', paddingTop: 120 }}><div className="container" style={{ maxWidth: 800 }}>
    <div className="eyebrow" style={{ marginBottom: 20 }}>Step-by-Step</div>
    <h1 className="serif" style={{ fontSize: 52, marginBottom: 24, lineHeight: 1.08 }}>How to Get Semaglutide Prescribed Online <span style={{ fontStyle: 'italic', color: 'var(--brand)' }}>in 24 Hours (Step-by-Step Process)</span></h1>
    <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 48, paddingBottom: 24, borderBottom: '1px solid var(--line-soft)' }}><div style={{ width: 40, height: 40, borderRadius: '50%', background: 'var(--brand)' }}><Image src="/assets/jm-profile.jpg" alt="Julian Mercer" width={1024} height={1024} style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%', height: "auto"}} priority={true} /></div><div><div style={{ fontWeight: 500, fontSize: 14 }}><a href="/about" style={{ color: "var(--ink)", textDecoration: "none" }}>Julian Mercer, M.S.</a></div><div style={{ fontSize: 13, color: 'var(--ink-3)' }}>Lead Bio-Systems Analyst · Updated May 2026 · 14 min read</div></div></div>
    <div className="blog-content" style={{ fontSize: 18, lineHeight: 1.7, color: 'var(--ink-2)' }}>
      <Image src="/assets/semaglutide-prescribed-24-hours-featured.png" alt="24-hour clock with medical intake, injection pen, and shipping box" width={1024} height={1024} style={{ width: '100%', borderRadius: 16, marginBottom: 40, border: '1px solid var(--line-soft)', background: '#111', height: "auto"}} priority={true} />
      <p>You want semaglutide. You do not want to wait 3 weeks for a primary care appointment, then another 2 weeks for insurance prior authorization, only to get denied. The telehealth path takes <strong>under 24 hours from intake to prescription</strong>. Here is exactly how it works, step by step.</p>

      <h2 className="serif" style={{ fontSize: 32, marginTop: 48, marginBottom: 24, color: 'var(--ink)' }}>The 4-Step Process</h2>

      <div style={{ position: 'relative', paddingLeft: 48, marginBottom: 40 }}>
        <div style={{ position: 'absolute', left: 0, top: 0, width: 36, height: 36, borderRadius: '50%', background: 'var(--brand)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: 18 }}>1</div>
        <h3 style={{ fontSize: 24, marginBottom: 12, color: 'var(--ink)' }}>Complete the Health Intake (5–10 minutes)</h3>
        <p>A comprehensive online questionnaire covering your medical history, current medications, allergies, weight loss history, and health goals. This is not a checkbox form — it is a genuine clinical assessment that your provider reviews before prescribing.</p>
        <p style={{ fontSize: 15, color: 'var(--ink-3)' }}><strong>What you need:</strong> Current weight and height, list of medications, known allergies. No labs or bloodwork required to start (though your clinician may recommend them).</p>
      </div>

      <div style={{ position: 'relative', paddingLeft: 48, marginBottom: 40 }}>
        <div style={{ position: 'absolute', left: 0, top: 0, width: 36, height: 36, borderRadius: '50%', background: 'var(--brand)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: 18 }}>2</div>
        <h3 style={{ fontSize: 24, marginBottom: 12, color: 'var(--ink)' }}>Clinician Review (1–24 hours)</h3>
        <p>A licensed healthcare provider in your state reviews your intake. They assess eligibility (<a href="/blog/glp-1-bmi-27-30-eligibility-2026" style={{ color: 'var(--brand)', fontWeight: 500 }}>BMI criteria</a>), contraindications, and the best medication/dose for your situation. If they have questions, they{"'"}ll message you through the platform.</p>
        <p style={{ fontSize: 15, color: 'var(--ink-3)' }}><strong>Typical timeline:</strong> Same-day review for intakes completed before 2 PM local time. Next-day for evening submissions.</p>
      </div>

      <div style={{ position: 'relative', paddingLeft: 48, marginBottom: 40 }}>
        <div style={{ position: 'absolute', left: 0, top: 0, width: 36, height: 36, borderRadius: '50%', background: 'var(--brand)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: 18 }}>3</div>
        <h3 style={{ fontSize: 24, marginBottom: 12, color: 'var(--ink)' }}>Prescription Sent to Pharmacy (Same day)</h3>
        <p>Once approved, your prescription is sent electronically to a licensed 503A compounding pharmacy. Your first month{"'"}s supply is prepared and packaged with cold-chain shipping to maintain medication integrity.</p>
      </div>

      <div style={{ position: 'relative', paddingLeft: 48, marginBottom: 40 }}>
        <div style={{ position: 'absolute', left: 0, top: 0, width: 36, height: 36, borderRadius: '50%', background: 'var(--brand)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: 18 }}>4</div>
        <h3 style={{ fontSize: 24, marginBottom: 12, color: 'var(--ink)' }}>Medication Delivered (3–5 business days)</h3>
        <p>Your semaglutide arrives at your door in insulated, temperature-controlled packaging with everything you need: medication vial, syringes, alcohol swabs, and injection instructions. Your clinician is available via messaging for any questions about your <a href="/blog/first-week-semaglutide-2026" style={{ color: 'var(--brand)', fontWeight: 500 }}>first week</a>.</p>
      </div>

      <div className="card" style={{ padding: 40, margin: '48px 0', textAlign: 'center', background: '#FFFDF9', borderColor: 'var(--brand)' }}>
        <h3 className="serif" style={{ fontSize: 28, marginBottom: 16, color: 'var(--ink)' }}>Start Step 1 Right Now</h3>
        <p style={{ marginBottom: 24, fontSize: 16 }}>The intake takes 5–10 minutes. Your clinician reviews it within hours. No appointment needed.</p>
        <a href={START_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-lg" style={{ display: 'inline-flex', justifyContent: 'center' }}>Begin Your Intake <Icon.Arrow /></a>
      </div>

      <h2 className="serif" style={{ fontSize: 32, marginTop: 48, marginBottom: 24, color: 'var(--ink)' }}>Who Qualifies?</h2>
      <ul>
        <li style={{ marginBottom: 8 }}>BMI 30+ (obesity), OR</li>
        <li style={{ marginBottom: 8 }}>BMI 27+ with at least one weight-related condition (type 2 diabetes, hypertension, high cholesterol, sleep apnea, PCOS)</li>
        <li style={{ marginBottom: 8 }}>No history of medullary thyroid cancer or MEN2 syndrome</li>
        <li style={{ marginBottom: 8 }}>No active pancreatitis</li>
        <li style={{ marginBottom: 8 }}>Not currently pregnant or planning pregnancy within 2 months</li>
      </ul>
      <p>Not sure if you qualify? The intake is free — your clinician will determine eligibility during review. See our <a href="/blog/glp-1-bmi-27-30-eligibility-2026" style={{ color: 'var(--brand)', fontWeight: 500 }}>detailed eligibility guide</a>.</p>

      <h2 className="serif" style={{ fontSize: 32, marginTop: 48, marginBottom: 24, color: 'var(--ink)' }}>Telehealth vs. Traditional Doctor: Speed Comparison</h2>
      <div style={{ overflowX: 'auto', margin: '24px 0' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 15 }}>
          <thead><tr style={{ borderBottom: '2px solid var(--ink)' }}><th style={{ textAlign: 'left', padding: '12px 16px', fontWeight: 600 }}>Step</th><th style={{ textAlign: 'left', padding: '12px 16px', fontWeight: 600 }}>Traditional</th><th style={{ textAlign: 'left', padding: '12px 16px', fontWeight: 600, color: 'var(--brand)' }}>TelehealthFX</th></tr></thead>
          <tbody>
            <tr style={{ borderBottom: '1px solid var(--line-soft)' }}><td style={{ padding: '12px 16px', fontWeight: 500 }}>Schedule appointment</td><td style={{ padding: '12px 16px' }}>1–3 weeks wait</td><td style={{ padding: '12px 16px', color: 'green', fontWeight: 600 }}>Instant (online intake)</td></tr>
            <tr style={{ borderBottom: '1px solid var(--line-soft)' }}><td style={{ padding: '12px 16px', fontWeight: 500 }}>Clinical evaluation</td><td style={{ padding: '12px 16px' }}>15-min office visit</td><td style={{ padding: '12px 16px', color: 'green', fontWeight: 600 }}>Same-day async review</td></tr>
            <tr style={{ borderBottom: '1px solid var(--line-soft)' }}><td style={{ padding: '12px 16px', fontWeight: 500 }}>Insurance prior auth</td><td style={{ padding: '12px 16px' }}>1–4 weeks (if needed)</td><td style={{ padding: '12px 16px', color: 'green', fontWeight: 600 }}>Not required (cash pay)</td></tr>
            <tr style={{ borderBottom: '1px solid var(--line-soft)' }}><td style={{ padding: '12px 16px', fontWeight: 500 }}>Fill prescription</td><td style={{ padding: '12px 16px' }}>1–7 days (pharmacy stock)</td><td style={{ padding: '12px 16px', color: 'green', fontWeight: 600 }}>3–5 days (shipped to door)</td></tr>
            <tr><td style={{ padding: '12px 16px', fontWeight: 500, fontSize: 16 }}>Total time to first dose</td><td style={{ padding: '12px 16px', fontWeight: 700, fontSize: 16 }}>3–8 weeks</td><td style={{ padding: '12px 16px', color: 'green', fontWeight: 700, fontSize: 16 }}>5–7 days</td></tr>
          </tbody>
        </table>
      </div>

      <h2 className="serif" style={{ fontSize: 32, marginTop: 48, marginBottom: 24, color: 'var(--ink)' }}>Frequently Asked Questions</h2>
      <h4 style={{ fontSize: 20, marginTop: 24, marginBottom: 8, color: 'var(--ink)' }}>Can I get semaglutide without a doctor visit?</h4>
      <p style={{ marginBottom: 24 }}>You still need a clinical evaluation — that{"'"}s non-negotiable for safety. But with telehealth, it{"'"}s an online intake form + async clinician review, not an in-office appointment. No waiting room, no scheduling conflicts.</p>
      <h4 style={{ fontSize: 20, marginTop: 24, marginBottom: 8, color: 'var(--ink)' }}>Is the prescription legitimate?</h4>
      <p style={{ marginBottom: 24 }}>Yes. The prescription is written by a licensed healthcare provider in your state, just like an in-person doctor. Telehealth prescribing is legal in all 50 states. Read our <a href="/blog/is-telehealthfx-legit-2026" style={{ color: 'var(--brand)', fontWeight: 500 }}>legitimacy guide</a> and <a href="/blog/telehealth-vs-inperson-glp1-2026" style={{ color: 'var(--brand)', fontWeight: 500 }}>telehealth vs in-person comparison</a>.</p>

      <div style={{ padding: 40, marginTop: 60, borderRadius: 20, background: 'var(--ink)', color: '#FBF8F3', textAlign: 'center' }}>
        <h2 className="serif" style={{ fontSize: 40, marginBottom: 20, color: '#FBF8F3' }}>5 Minutes Now. Medication at Your Door This Week.</h2>
        <p style={{ fontSize: 18, opacity: 0.9, marginBottom: 32, maxWidth: 500, margin: '0 auto 32px' }}>No appointment. No insurance. No waiting. Just a 5-minute intake and a licensed clinician.</p>
        <a href={START_URL} target="_blank" rel="noopener noreferrer" className="btn btn-lg" style={{ background: '#FBF8F3', color: 'var(--ink)', display: 'inline-flex', justifyContent: 'center', width: '100%', maxWidth: 250 }}>Start Your Intake <Icon.Arrow /></a>
      </div>
      <div style={{ marginTop: 80, paddingTop: 40, borderTop: '1px solid var(--line-soft)', fontSize: 14, color: 'var(--ink-3)' }}>
        <h3 className="serif" style={{ fontSize: 24, marginBottom: 24, color: 'var(--ink)' }}>References</h3>
        <ol style={{ paddingLeft: 20, display: 'flex', flexDirection: 'column', gap: 16 }}>
          <li>American Telemedicine Association. (2026). <em>Telehealth prescribing guidelines by state</em>. <a href="https://www.americantelemed.org" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--brand)', textDecoration: 'underline' }}>americantelemed.org</a></li>
        </ol>
      </div>
    </div>
  </div></section></>);
}
export { BlogPrescribed24Hours };
