"use client";
import React from 'react';
import Image from 'next/image';
import { Icon } from './common.jsx';
const S = "https://go.telehealthfx.com/start";
function BlogCompoundedDosingGuide() {
  return (<><section className="section" style={{ minHeight: '60vh', paddingTop: 120 }}><div className="container" style={{ maxWidth: 800 }}>
    <div className="eyebrow" style={{ marginBottom: 20 }}>Dosing Guide</div>
    <h1 className="serif" style={{ fontSize: 52, marginBottom: 24, lineHeight: 1.08 }}>Compounded Semaglutide Dosing: <span style={{ fontStyle: 'italic', color: 'var(--brand)' }}>How Vials Work, Titration Schedules &amp; What Your Clinician Customizes</span></h1>
    <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 48, paddingBottom: 24, borderBottom: '1px solid var(--line-soft)' }}><div style={{ width: 40, height: 40, borderRadius: '50%', background: 'var(--brand)' }}><Image src="/assets/jm-profile.jpg" alt="Julian Mercer" width={1024} height={1024} style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%', height: "auto"}} priority={true} /></div><div><div style={{ fontWeight: 500, fontSize: 14 }}><a href="/about" style={{ color: "var(--ink)", textDecoration: "none" }}>Julian Mercer, M.S.</a></div><div style={{ fontSize: 13, color: 'var(--ink-3)' }}>Lead Bio-Systems Analyst · Updated May 2026 · 14 min read</div></div></div>
    <div className="blog-content" style={{ fontSize: 18, lineHeight: 1.7, color: 'var(--ink-2)' }}>
      <Image src="/assets/compounded-glp1-dosing-guide-featured.png" alt="Compounded GLP-1 vial with titration schedule" width={1024} height={1024} style={{ width: '100%', borderRadius: 16, marginBottom: 40, border: '1px solid var(--line-soft)', height: "auto"}} priority={true} />
      <p>Compounded semaglutide comes in multi-dose vials, not pre-filled pens. This gives your clinician <strong>more dosing flexibility</strong> than brand-name Ozempic/Wegovy — including custom titration speeds, micro-doses, and maintenance doses not available in pen format.</p>
      <h2 className="serif" style={{ fontSize: 32, marginTop: 48, marginBottom: 24, color: 'var(--ink)' }}>Standard Titration Schedule</h2>
      <div style={{ overflowX: 'auto', margin: '24px 0' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 15 }}>
          <thead><tr style={{ borderBottom: '2px solid var(--ink)' }}><th style={{ textAlign: 'left', padding: '12px 16px', fontWeight: 600 }}>Weeks</th><th style={{ textAlign: 'left', padding: '12px 16px', fontWeight: 600 }}>Dose</th><th style={{ textAlign: 'left', padding: '12px 16px', fontWeight: 600 }}>Purpose</th></tr></thead>
          <tbody>
            <tr style={{ borderBottom: '1px solid var(--line-soft)' }}><td style={{ padding: '12px 16px', fontWeight: 500 }}>1–4</td><td style={{ padding: '12px 16px' }}>0.25 mg</td><td style={{ padding: '12px 16px', fontSize: 14 }}>GI tolerance. Minimal weight loss expected.</td></tr>
            <tr style={{ borderBottom: '1px solid var(--line-soft)' }}><td style={{ padding: '12px 16px', fontWeight: 500 }}>5–8</td><td style={{ padding: '12px 16px' }}>0.5 mg</td><td style={{ padding: '12px 16px', fontSize: 14 }}>Appetite suppression begins. 2–4% weight loss.</td></tr>
            <tr style={{ borderBottom: '1px solid var(--line-soft)' }}><td style={{ padding: '12px 16px', fontWeight: 500 }}>9–12</td><td style={{ padding: '12px 16px' }}>1.0 mg</td><td style={{ padding: '12px 16px', fontSize: 14 }}>Therapeutic range. Significant appetite change.</td></tr>
            <tr style={{ borderBottom: '1px solid var(--line-soft)' }}><td style={{ padding: '12px 16px', fontWeight: 500 }}>13–16</td><td style={{ padding: '12px 16px' }}>1.7 mg</td><td style={{ padding: '12px 16px', fontSize: 14 }}>Near-max dose. Strong appetite control.</td></tr>
            <tr style={{ background: '#F0FDF4' }}><td style={{ padding: '12px 16px', fontWeight: 700 }}>17+</td><td style={{ padding: '12px 16px', fontWeight: 700, color: 'green' }}>2.4 mg</td><td style={{ padding: '12px 16px', fontSize: 14 }}>Maximum therapeutic dose.</td></tr>
          </tbody>
        </table>
      </div>
      <p>Your clinician may adjust this schedule based on <a href="/blog/tirzepatide-side-effects-2026" style={{ color: 'var(--brand)', fontWeight: 500 }}>side effect tolerance</a> and response. Compounded vials allow doses brand-name pens cannot — like 0.375 mg, 0.75 mg, or 1.25 mg — enabling <strong>slower escalation</strong> for sensitive patients.</p>
      <h2 className="serif" style={{ fontSize: 32, marginTop: 48, marginBottom: 24, color: 'var(--ink)' }}>Storage and Handling</h2>
      <ul>
        <li style={{ marginBottom: 12 }}><strong>Refrigerate:</strong> Unopened vials at 36–46°F. Once opened, good for 28 days at room temperature.</li>
        <li style={{ marginBottom: 12 }}><strong>Needles:</strong> 30-gauge insulin syringes. Your kit includes everything. See our <a href="/blog/best-time-inject-semaglutide-2026" style={{ color: 'var(--brand)', fontWeight: 500 }}>injection timing guide</a>.</li>
        <li style={{ marginBottom: 12 }}><strong>Travel:</strong> Use an insulated pouch with ice packs. TSA allows medical syringes with prescription documentation.</li>
      </ul>
      <div className="card" style={{ padding: 40, margin: '48px 0', textAlign: 'center', background: '#FFFDF9', borderColor: 'var(--brand)' }}>
        <h3 className="serif" style={{ fontSize: 28, marginBottom: 16, color: 'var(--ink)' }}>Custom Dosing. Clinician-Guided.</h3>
        <p style={{ marginBottom: 24, fontSize: 16 }}>Your clinician tailors your titration schedule — slower if you{"'"}re sensitive, faster if you{"'"}re tolerating well.</p>
        <a href={S} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-lg" style={{ display: 'inline-flex', justifyContent: 'center' }}>Start Your Evaluation <Icon.Arrow /></a>
      </div>
      <div style={{ padding: 40, marginTop: 60, borderRadius: 20, background: 'var(--ink)', color: '#FBF8F3', textAlign: 'center' }}>
        <h2 className="serif" style={{ fontSize: 40, marginBottom: 20, color: '#FBF8F3' }}>More Flexibility Than Ozempic Pens.</h2>
        <p style={{ fontSize: 18, opacity: 0.9, marginBottom: 32, maxWidth: 500, margin: '0 auto 32px' }}>From $199/month. Custom doses. Everything shipped to your door.</p>
        <a href={S} target="_blank" rel="noopener noreferrer" className="btn btn-lg" style={{ background: '#FBF8F3', color: 'var(--ink)', display: 'inline-flex', justifyContent: 'center', width: '100%', maxWidth: 250 }}>Get Started <Icon.Arrow /></a>
      </div>
    </div>
  </div></section></>);
}
export { BlogCompoundedDosingGuide };
