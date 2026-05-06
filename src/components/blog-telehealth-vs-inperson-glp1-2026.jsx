"use client";
import React from 'react';
import Image from 'next/image';
import { Icon } from './common.jsx';
const START_URL = "https://go.telehealthfx.com/start";
function BlogTelehealthVsInPerson() {
  return (<><section className="section" style={{ minHeight: '60vh', paddingTop: 120 }}><div className="container" style={{ maxWidth: 800 }}>
    <div className="eyebrow" style={{ marginBottom: 20 }}>Access &amp; Convenience</div>
    <h1 className="serif" style={{ fontSize: 56, marginBottom: 24, lineHeight: 1.1 }}>Telehealth vs. In-Person Doctor for GLP-1: <span style={{ fontStyle: 'italic', color: 'var(--brand)' }}>Pros, Cons, and What Most Patients Choose</span></h1>
    <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 48, paddingBottom: 24, borderBottom: '1px solid var(--line-soft)' }}><div style={{ width: 40, height: 40, borderRadius: '50%', background: 'var(--brand)' }}><Image src="/assets/jm-profile.jpg" alt="Julian Mercer" width={1024} height={1024} style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%', height: "auto"}} priority={true} /></div><div><div style={{ fontWeight: 500, fontSize: 14 }}><a href="/about" style={{ color: "var(--ink)", textDecoration: "none" }}>Julian Mercer, M.S.</a></div><div style={{ fontSize: 13, color: 'var(--ink-3)' }}>Lead Bio-Systems Analyst · Updated May 2026 · 18 min read</div></div></div>
    <div className="blog-content" style={{ fontSize: 18, lineHeight: 1.7, color: 'var(--ink-2)' }}>
      <Image src="/assets/telehealth-vs-inperson-glp1-featured.png" alt="Split view of doctor waiting room vs home telehealth consultation" width={1024} height={1024} style={{ width: '100%', borderRadius: 16, marginBottom: 40, border: '1px solid var(--line-soft)', background: '#111', height: "auto"}} priority={true} />
      <p>You have decided to start <a href="/blog/what-is-a-glp-1-medication" style={{ color: 'var(--brand)', fontWeight: 500 }}>GLP-1 therapy</a>. Now the question: <strong>telehealth or in-person?</strong> Both deliver the same medications, both require licensed clinicians, and both involve genuine medical evaluations. But the patient experience — cost, convenience, privacy, and ongoing support — differs significantly.</p>

      <h2 className="serif" style={{ fontSize: 32, marginTop: 48, marginBottom: 24, color: 'var(--ink)' }}>The Comparison</h2>
      <div style={{ overflowX: 'auto', margin: '40px 0' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 15 }}>
          <thead><tr style={{ borderBottom: '2px solid var(--ink)' }}><th style={{ textAlign: 'left', padding: '12px 16px', fontWeight: 600 }}>Factor</th><th style={{ textAlign: 'left', padding: '12px 16px', fontWeight: 600 }}>In-Person</th><th style={{ textAlign: 'left', padding: '12px 16px', fontWeight: 600 }}>Telehealth</th></tr></thead>
          <tbody>
            <tr style={{ borderBottom: '1px solid var(--line-soft)' }}><td style={{ padding: '12px 16px', fontWeight: 500 }}>Initial wait time</td><td style={{ padding: '12px 16px' }}>2–6 week appointment wait</td><td style={{ padding: '12px 16px', color: 'green', fontWeight: 600 }}>Same-day evaluation available</td></tr>
            <tr style={{ borderBottom: '1px solid var(--line-soft)' }}><td style={{ padding: '12px 16px', fontWeight: 500 }}>Visit duration</td><td style={{ padding: '12px 16px' }}>30–90 min (including waiting room)</td><td style={{ padding: '12px 16px', color: 'green' }}>5–10 min intake, async review</td></tr>
            <tr style={{ borderBottom: '1px solid var(--line-soft)' }}><td style={{ padding: '12px 16px', fontWeight: 500 }}>Office visit cost</td><td style={{ padding: '12px 16px' }}>$150–$350 per visit (copay or self-pay)</td><td style={{ padding: '12px 16px', color: 'green', fontWeight: 600 }}>Included in subscription</td></tr>
            <tr style={{ borderBottom: '1px solid var(--line-soft)' }}><td style={{ padding: '12px 16px', fontWeight: 500 }}>Medication cost</td><td style={{ padding: '12px 16px' }}>Branded: $500–$1,350/mo</td><td style={{ padding: '12px 16px', color: 'green', fontWeight: 600 }}>Compounded: $199–$399/mo all-inclusive</td></tr>
            <tr style={{ borderBottom: '1px solid var(--line-soft)' }}><td style={{ padding: '12px 16px', fontWeight: 500 }}>Ongoing support</td><td style={{ padding: '12px 16px' }}>$150+ per follow-up visit</td><td style={{ padding: '12px 16px', color: 'green' }}>Unlimited messaging included</td></tr>
            <tr style={{ borderBottom: '1px solid var(--line-soft)' }}><td style={{ padding: '12px 16px', fontWeight: 500 }}>Physical exam</td><td style={{ padding: '12px 16px', color: 'green', fontWeight: 600 }}>Yes (in-person)</td><td style={{ padding: '12px 16px' }}>No (comprehensive health questionnaire)</td></tr>
            <tr style={{ borderBottom: '1px solid var(--line-soft)' }}><td style={{ padding: '12px 16px', fontWeight: 500 }}>Lab work</td><td style={{ padding: '12px 16px', color: 'green' }}>Ordered and drawn on-site</td><td style={{ padding: '12px 16px' }}>Ordered remotely, drawn at local lab</td></tr>
            <tr><td style={{ padding: '12px 16px', fontWeight: 500 }}>Privacy</td><td style={{ padding: '12px 16px' }}>Waiting room exposure</td><td style={{ padding: '12px 16px', color: 'green', fontWeight: 600 }}>Complete privacy from home</td></tr>
          </tbody>
        </table>
      </div>

      <h2 className="serif" style={{ fontSize: 32, marginTop: 48, marginBottom: 24, color: 'var(--ink)' }}>When In-Person Is Better</h2>
      <ul>
        <li style={{ marginBottom: 12 }}>Complex medical history requiring physical examination</li>
        <li style={{ marginBottom: 12 }}>Need for same-visit blood draws or imaging</li>
        <li style={{ marginBottom: 12 }}>Preference for face-to-face interaction with your provider</li>
        <li style={{ marginBottom: 12 }}>Insurance covers in-person obesity medicine visits</li>
      </ul>

      <h2 className="serif" style={{ fontSize: 32, marginTop: 48, marginBottom: 24, color: 'var(--ink)' }}>When Telehealth Is Better</h2>
      <ul>
        <li style={{ marginBottom: 12 }}>Cost is a primary concern — <a href="/blog/cheapest-compounded-semaglutide-2026" style={{ color: 'var(--brand)', fontWeight: 500 }}>all-inclusive pricing</a> vs. stacked fees</li>
        <li style={{ marginBottom: 12 }}>No nearby obesity medicine specialist</li>
        <li style={{ marginBottom: 12 }}>Privacy concerns about weight loss treatment</li>
        <li style={{ marginBottom: 12 }}>Busy schedule — <a href="/blog/same-day-glp-1-prescription-2026" style={{ color: 'var(--brand)', fontWeight: 500 }}>same-day evaluations</a> without time off work</li>
        <li style={{ marginBottom: 12 }}>You want ongoing clinician access without per-visit charges</li>
      </ul>

      <div className="card" style={{ padding: 40, margin: '48px 0', textAlign: 'center', background: '#FFFDF9', borderColor: 'var(--brand)' }}>
        <h3 className="serif" style={{ fontSize: 28, marginBottom: 16, color: 'var(--ink)' }}>The Smarter Way to Start GLP-1</h3>
        <p style={{ marginBottom: 24, fontSize: 16 }}>Licensed clinicians. All-inclusive pricing. No waiting rooms. No insurance battles. Medication delivered to your door.</p>
        <a href={START_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-lg" style={{ display: 'inline-flex', justifyContent: 'center' }}>Start Your Evaluation <Icon.Arrow /></a>
      </div>

      <h2 className="serif" style={{ fontSize: 32, marginTop: 48, marginBottom: 24, color: 'var(--ink)' }}>Frequently Asked Questions</h2>
      <h4 style={{ fontSize: 20, marginTop: 24, marginBottom: 8, color: 'var(--ink)' }}>Is a telehealth GLP-1 prescription legally valid?</h4>
      <p style={{ marginBottom: 24 }}>Yes. Telehealth prescribing is legal in all 50 states when conducted by a licensed clinician with a valid patient-provider relationship. Learn more about <a href="/blog/is-telehealthfx-legit-2026" style={{ color: 'var(--brand)', fontWeight: 500 }}>telehealth legitimacy</a>.</p>
      <h4 style={{ fontSize: 20, marginTop: 24, marginBottom: 8, color: 'var(--ink)' }}>Can I switch from in-person to telehealth?</h4>
      <p style={{ marginBottom: 24 }}>Absolutely. Your new telehealth clinician reviews your treatment history and continues your current dose. See our <a href="/blog/switch-glp-1-providers-2026" style={{ color: 'var(--brand)', fontWeight: 500 }}>provider switching guide</a>.</p>

      <div style={{ padding: 40, marginTop: 60, borderRadius: 20, background: 'var(--ink)', color: '#FBF8F3', textAlign: 'center' }}>
        <h2 className="serif" style={{ fontSize: 40, marginBottom: 20, color: '#FBF8F3' }}>Skip the Waiting Room</h2>
        <p style={{ fontSize: 18, opacity: 0.9, marginBottom: 32, maxWidth: 500, margin: '0 auto 32px' }}>Same licensed clinicians. Better access. Lower cost. Complete from your couch.</p>
        <a href={START_URL} target="_blank" rel="noopener noreferrer" className="btn btn-lg" style={{ background: '#FBF8F3', color: 'var(--ink)', display: 'inline-flex', justifyContent: 'center', width: '100%', maxWidth: 250 }}>Get Started <Icon.Arrow /></a>
      </div>
      <div style={{ marginTop: 80, paddingTop: 40, borderTop: '1px solid var(--line-soft)', fontSize: 14, color: 'var(--ink-3)' }}>
        <h3 className="serif" style={{ fontSize: 24, marginBottom: 24, color: 'var(--ink)' }}>References</h3>
        <ol style={{ paddingLeft: 20, display: 'flex', flexDirection: 'column', gap: 16 }}>
          <li>American Telemedicine Association. (2025). <em>State of telehealth in the United States</em>. <a href="https://www.americantelemed.org" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--brand)', textDecoration: 'underline' }}>americantelemed.org</a></li>
          <li>Lee, J., et al. (2023). Telehealth-delivered obesity treatment outcomes. <em>Obesity</em>, 31(8), 2075–2083. <a href="https://doi.org/10.1002/oby.23815" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--brand)', textDecoration: 'underline' }}>doi:10.1002/oby.23815</a></li>
        </ol>
      </div>
    </div>
  </div></section></>);
}
export { BlogTelehealthVsInPerson };
