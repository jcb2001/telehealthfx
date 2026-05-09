"use client";
import React from 'react';
import Image from 'next/image';
import { Icon } from './common.jsx';
const START_URL = "https://go.telehealthfx.com/start";

function BlogCompoundedDosingGuide() {
  return (<><section className="section" style={{ minHeight: '60vh', paddingTop: 120 }}><div className="container" style={{ maxWidth: 800 }}>
    <div className="eyebrow" style={{ marginBottom: 20 }}>Dosing Guide</div>
    <h1 className="serif" style={{ fontSize: 52, marginBottom: 24, lineHeight: 1.08 }}>Compounded Semaglutide Dosing: <span style={{ fontStyle: 'italic', color: 'var(--brand)' }}>How Vials Work, Titration Schedules &amp; What Your Clinician Customizes</span></h1>
    <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 48, paddingBottom: 24, borderBottom: '1px solid var(--line-soft)' }}><div style={{ width: 40, height: 40, borderRadius: '50%', background: 'var(--brand)' }}><Image src="/assets/jm-profile.jpg" alt="Julian Mercer" width={1024} height={1024} style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%', height: "auto"}} priority={true} /></div><div><div style={{ fontWeight: 500, fontSize: 14 }}><a href="/about" style={{ color: "var(--ink)", textDecoration: "none" }}>Julian Mercer, M.S.</a></div><div style={{ fontSize: 13, color: 'var(--ink-3)' }}>Lead Bio-Systems Analyst · Updated May 2026 · 18 min read</div></div></div>
    <div className="blog-content" style={{ fontSize: 18, lineHeight: 1.7, color: 'var(--ink-2)' }}>
      <Image src="/assets/compounded-glp1-dosing-guide-featured.png" alt="Compounded GLP-1 vial with titration schedule" width={1024} height={1024} style={{ width: '100%', borderRadius: 16, marginBottom: 40, border: '1px solid var(--line-soft)', height: "auto"}} priority={true} />
      <p>Compounded semaglutide comes in multi-dose vials, not pre-filled pens. This is not a disadvantage — it is actually a significant clinical advantage. Multi-dose vials give your clinician <strong>more dosing flexibility</strong> than brand-name Ozempic/Wegovy, including custom titration speeds, micro-doses, and maintenance doses that are simply not available in pen format.</p>

      <h2 className="serif" style={{ fontSize: 32, marginTop: 48, marginBottom: 24, color: 'var(--ink)' }}>How Compounded Vials Differ from Ozempic Pens</h2>
      <p>Ozempic and Wegovy come in pre-filled, fixed-dose pens. You click to a dose marking and inject. Compounded semaglutide comes in a vial — you draw the exact dose your clinician prescribes using an insulin syringe. This matters because:</p>
      <ul>
        <li style={{ marginBottom: 12 }}><strong>Infinite dose precision:</strong> Pens offer fixed increments (0.25, 0.5, 1.0, 1.7, 2.4 mg). Vials allow any dose — 0.125 mg, 0.375 mg, 0.75 mg, 1.25 mg — whatever your clinician determines is optimal.</li>
        <li style={{ marginBottom: 12 }}><strong>Slower titration for sensitive patients:</strong> If standard dose jumps cause nausea, your clinician can prescribe 0.125 mg increments instead of 0.25 mg jumps. See our <a href="/blog/glp-1-side-effects-how-to-manage-nausea-fatigue-mo" style={{ color: 'var(--brand)', fontWeight: 500 }}>side effects management guide</a>.</li>
        <li style={{ marginBottom: 12 }}><strong>Custom maintenance doses:</strong> After reaching your goal, a maintenance dose of 0.5 mg or 0.75 mg may sustain results at lower cost. Pens do not allow these doses. See our <a href="/blog/glp1-weight-regain-prevention-2026" style={{ color: 'var(--brand)', fontWeight: 500 }}>rebound prevention guide</a>.</li>
        <li style={{ marginBottom: 12 }}><strong>Cost flexibility:</strong> Lower doses = less active ingredient = potentially lower cost per month. See <a href="/blog/semaglutide-real-cost-2026" style={{ color: 'var(--brand)', fontWeight: 500 }}>real cost breakdown</a>.</li>
      </ul>

      <h2 className="serif" style={{ fontSize: 32, marginTop: 48, marginBottom: 24, color: 'var(--ink)' }}>Standard Titration Schedule</h2>
      <p>This is the standard escalation schedule based on Wegovy{"'"}s FDA-approved titration. Your clinician may adjust based on your response:</p>
      <div style={{ overflowX: 'auto', margin: '24px 0' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 15 }}>
          <thead><tr style={{ borderBottom: '2px solid var(--ink)' }}><th style={{ textAlign: 'left', padding: '12px 16px', fontWeight: 600 }}>Weeks</th><th style={{ textAlign: 'left', padding: '12px 16px', fontWeight: 600 }}>Dose</th><th style={{ textAlign: 'left', padding: '12px 16px', fontWeight: 600 }}>Volume (5mg/mL vial)</th><th style={{ textAlign: 'left', padding: '12px 16px', fontWeight: 600 }}>What to Expect</th></tr></thead>
          <tbody>
            <tr style={{ borderBottom: '1px solid var(--line-soft)' }}><td style={{ padding: '12px 16px', fontWeight: 500 }}>1–4</td><td style={{ padding: '12px 16px' }}>0.25 mg</td><td style={{ padding: '12px 16px', fontSize: 14 }}>0.05 mL (5 units)</td><td style={{ padding: '12px 16px', fontSize: 14 }}>GI tolerance period. Minimal weight loss. Mild appetite change.</td></tr>
            <tr style={{ borderBottom: '1px solid var(--line-soft)' }}><td style={{ padding: '12px 16px', fontWeight: 500 }}>5–8</td><td style={{ padding: '12px 16px' }}>0.5 mg</td><td style={{ padding: '12px 16px', fontSize: 14 }}>0.10 mL (10 units)</td><td style={{ padding: '12px 16px', fontSize: 14 }}>Appetite suppression begins. 2–4% weight loss expected.</td></tr>
            <tr style={{ borderBottom: '1px solid var(--line-soft)' }}><td style={{ padding: '12px 16px', fontWeight: 500 }}>9–12</td><td style={{ padding: '12px 16px' }}>1.0 mg</td><td style={{ padding: '12px 16px', fontSize: 14 }}>0.20 mL (20 units)</td><td style={{ padding: '12px 16px', fontSize: 14 }}>Therapeutic range. Significant appetite change. 5–7% weight loss.</td></tr>
            <tr style={{ borderBottom: '1px solid var(--line-soft)' }}><td style={{ padding: '12px 16px', fontWeight: 500 }}>13–16</td><td style={{ padding: '12px 16px' }}>1.7 mg</td><td style={{ padding: '12px 16px', fontSize: 14 }}>0.34 mL (34 units)</td><td style={{ padding: '12px 16px', fontSize: 14 }}>Near-max. Strong appetite control. 8–11% weight loss.</td></tr>
            <tr style={{ background: '#F0FDF4' }}><td style={{ padding: '12px 16px', fontWeight: 700 }}>17+</td><td style={{ padding: '12px 16px', fontWeight: 700, color: 'green' }}>2.4 mg</td><td style={{ padding: '12px 16px', fontSize: 14, fontWeight: 600 }}>0.48 mL (48 units)</td><td style={{ padding: '12px 16px', fontSize: 14 }}>Maximum therapeutic dose. 14.9% avg weight loss at 68 weeks.</td></tr>
          </tbody>
        </table>
      </div>
      <p>For complete timeline data, see our <a href="/blog/semaglutide-weight-loss-timeline-2026" style={{ color: 'var(--brand)', fontWeight: 500 }}>semaglutide weight loss timeline</a> and <a href="/blog/first-week-semaglutide-2026" style={{ color: 'var(--brand)', fontWeight: 500 }}>first week guide</a>.</p>

      <h2 className="serif" style={{ fontSize: 32, marginTop: 48, marginBottom: 24, color: 'var(--ink)' }}>How to Draw and Inject from a Vial</h2>
      <p>Your kit includes everything you need: vial, alcohol swabs, 30-gauge insulin syringes, and sharps container. The process takes under 2 minutes:</p>
      <ol>
        <li style={{ marginBottom: 12 }}><strong>Wash hands.</strong> Clean the vial rubber stopper with an alcohol swab.</li>
        <li style={{ marginBottom: 12 }}><strong>Draw air.</strong> Pull the syringe plunger to your prescribed dose marking (e.g., 10 units for 0.5 mg). Inject this air into the vial to equalize pressure.</li>
        <li style={{ marginBottom: 12 }}><strong>Draw medication.</strong> Turn the vial upside down. Pull the plunger past your dose, then push back to the exact dose marking to remove air bubbles.</li>
        <li style={{ marginBottom: 12 }}><strong>Inject.</strong> Choose an injection site (abdomen, thigh, or upper arm). Clean with alcohol. Pinch skin, insert needle at 90°. Inject slowly. Hold 5 seconds. Remove.</li>
        <li style={{ marginBottom: 12 }}><strong>Rotate sites.</strong> Alternate between left/right abdomen, thighs, and arms. Do not inject in the same spot consecutively.</li>
      </ol>
      <p>For optimal injection timing, see our <a href="/blog/best-time-inject-semaglutide-2026" style={{ color: 'var(--brand)', fontWeight: 500 }}>injection timing guide</a>. The 30-gauge needle is thinner than a human hair — most patients describe it as less painful than a mosquito bite.</p>

      <div className="card" style={{ padding: 40, margin: '48px 0', textAlign: 'center', background: '#FFFDF9', borderColor: 'var(--brand)' }}>
        <h3 className="serif" style={{ fontSize: 28, marginBottom: 16, color: 'var(--ink)' }}>Custom Dosing. Clinician-Guided. Everything Shipped.</h3>
        <p style={{ marginBottom: 24, fontSize: 16 }}>Your clinician tailors your titration schedule — slower if you{"'"}re sensitive, faster if you{"'"}re tolerating well. Complete kit delivered to your door.</p>
        <a href={START_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-lg" style={{ display: 'inline-flex', justifyContent: 'center' }}>Start Your Evaluation <Icon.Arrow /></a>
      </div>

      <h2 className="serif" style={{ fontSize: 32, marginTop: 48, marginBottom: 24, color: 'var(--ink)' }}>Storage, Handling &amp; Travel</h2>
      <ul>
        <li style={{ marginBottom: 12 }}><strong>Refrigerate unopened vials:</strong> 36–46°F (2–8°C). Keep in original packaging away from light.</li>
        <li style={{ marginBottom: 12 }}><strong>Room temperature after opening:</strong> Once the vial is punctured, it can be kept at room temperature (up to 86°F / 30°C) for up to 28 days.</li>
        <li style={{ marginBottom: 12 }}><strong>Do not freeze:</strong> Freezing denatures the peptide and renders it ineffective. Discard any vial that has been frozen.</li>
        <li style={{ marginBottom: 12 }}><strong>Travel:</strong> Use an insulated medication pouch with gel ice packs. TSA allows medical syringes and vials with prescription documentation — carry a copy of your prescription or pharmacy label.</li>
        <li style={{ marginBottom: 12 }}><strong>Discard:</strong> After 28 days post-opening or if the solution appears cloudy, discolored, or contains particles.</li>
      </ul>

      <h2 className="serif" style={{ fontSize: 32, marginTop: 48, marginBottom: 24, color: 'var(--ink)' }}>Frequently Asked Questions</h2>
      <h4 style={{ fontSize: 20, marginTop: 24, marginBottom: 8, color: 'var(--ink)' }}>What concentration should I expect?</h4>
      <p style={{ marginBottom: 24 }}>Common compounded semaglutide concentrations are 2.5 mg/mL, 5 mg/mL, and 10 mg/mL. Higher concentrations mean smaller injection volumes. Your pharmacy label will specify the concentration and your clinician will provide exact unit markings for your dose.</p>
      <h4 style={{ fontSize: 20, marginTop: 24, marginBottom: 8, color: 'var(--ink)' }}>Is compounded semaglutide the same as Ozempic?</h4>
      <p style={{ marginBottom: 24 }}>Same active molecule (semaglutide), different manufacturer. Compounded by a licensed <a href="/blog/compounded-semaglutide-safety-fda-2026" style={{ color: 'var(--brand)', fontWeight: 500 }}>503A pharmacy</a> under USP 797 sterile compounding standards. Same mechanism, same receptor, same dose range.</p>
      <h4 style={{ fontSize: 20, marginTop: 24, marginBottom: 8, color: 'var(--ink)' }}>Can I adjust my own dose?</h4>
      <p style={{ marginBottom: 24 }}>Never adjust your dose without clinician guidance. If you{"'"}re experiencing persistent side effects, contact your provider to discuss a slower escalation. Self-adjusting can lead to under-dosing (wasted time) or over-escalation (unnecessary side effects).</p>

      <div style={{ padding: 40, marginTop: 60, borderRadius: 20, background: 'var(--ink)', color: '#FBF8F3', textAlign: 'center' }}>
        <h2 className="serif" style={{ fontSize: 40, marginBottom: 20, color: '#FBF8F3' }}>More Flexibility Than Ozempic Pens. At a Fraction of the Cost.</h2>
        <p style={{ fontSize: 18, opacity: 0.9, marginBottom: 32, maxWidth: 500, margin: '0 auto 32px' }}>From $199/month. Custom doses. Everything shipped to your door. Month-to-month.</p>
        <a href={START_URL} target="_blank" rel="noopener noreferrer" className="btn btn-lg" style={{ background: '#FBF8F3', color: 'var(--ink)', display: 'inline-flex', justifyContent: 'center', width: '100%', maxWidth: 250 }}>Get Started <Icon.Arrow /></a>
      </div>
      <div style={{ marginTop: 80, paddingTop: 40, borderTop: '1px solid var(--line-soft)', fontSize: 14, color: 'var(--ink-3)' }}>
        <h3 className="serif" style={{ fontSize: 24, marginBottom: 24, color: 'var(--ink)' }}>References</h3>
        <ol style={{ paddingLeft: 20, display: 'flex', flexDirection: 'column', gap: 16 }}>
          <li>Novo Nordisk. (2024). <em>Wegovy prescribing information — dosing and administration</em>. <a href="https://www.wegovy.com" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--brand)', textDecoration: 'underline' }}>wegovy.com</a></li>
          <li>USP. (2023). <em>USP Chapter 797: Pharmaceutical Compounding — Sterile Preparations</em>.</li>
        </ol>
      </div>
    </div>
  </div></section></>);
}
export { BlogCompoundedDosingGuide };
