"use client";
import React from 'react';
import Image from 'next/image';
import { Icon } from './common.jsx';
const START_URL = "https://go.telehealthfx.com/start";

function BlogSemaglutideWeightLossTimeline() {
  return (<>
    <section className="section" style={{ minHeight: '60vh', paddingTop: 120 }}>
    <div className="container" style={{ maxWidth: 800 }}>
      <div className="eyebrow" style={{ marginBottom: 20 }}>Results &amp; Expectations</div>
      <h1 className="serif" style={{ fontSize: 56, marginBottom: 24, lineHeight: 1.1 }}>How Much Weight Will I Lose on Semaglutide? <span style={{ fontStyle: 'italic', color: 'var(--brand)' }}>Realistic Results by Month (With Clinical Data)</span></h1>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 48, paddingBottom: 24, borderBottom: '1px solid var(--line-soft)' }}>
        <div style={{ width: 40, height: 40, borderRadius: '50%', background: 'var(--brand)' }}><Image src="/assets/jm-profile.jpg" alt="Julian Mercer" width={1024} height={1024} style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%', height: "auto"}} priority={true} /></div>
        <div><div style={{ fontWeight: 500, fontSize: 14 }}><a href="/about" style={{ color: "var(--ink)", textDecoration: "none" }}>Julian Mercer, M.S.</a></div><div style={{ fontSize: 13, color: 'var(--ink-3)' }}>Lead Bio-Systems Analyst · Updated May 2026 · 20 min read</div></div>
      </div>
      <div className="blog-content" style={{ fontSize: 18, lineHeight: 1.7, color: 'var(--ink-2)' }}>
        <Image src="/assets/semaglutide-weight-loss-timeline-featured.png" alt="Weight loss progress chart months 1-12 on semaglutide" width={1024} height={1024} style={{ width: '100%', borderRadius: 16, marginBottom: 40, border: '1px solid var(--line-soft)', background: '#111', height: "auto"}} priority={true} />

        <p>This is the question everyone asks first. Not "how does it work" or "what are the side effects" — but <strong>"how much weight will I lose, and how fast?"</strong> Here is the honest, data-driven answer based on the STEP clinical trial program and real-world patient outcomes.</p>

        <h2 className="serif" style={{ fontSize: 32, marginTop: 48, marginBottom: 24, color: 'var(--ink)' }}>Month-by-Month Weight Loss on Semaglutide 2.4 mg</h2>
        <p>The following data is derived from the STEP 1 trial (n=1,961) and represents the average trajectory at the maximum approved Wegovy dose of 2.4 mg/week. Starting weight in the trial averaged approximately 232 lbs (105 kg).</p>

        <div style={{ overflowX: 'auto', margin: '40px 0' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 16 }}>
            <thead><tr style={{ borderBottom: '2px solid var(--ink)' }}><th style={{ textAlign: 'left', padding: '12px 16px', fontWeight: 600 }}>Timepoint</th><th style={{ textAlign: 'left', padding: '12px 16px', fontWeight: 600 }}>Avg % Lost</th><th style={{ textAlign: 'left', padding: '12px 16px', fontWeight: 600 }}>Example (230 lb start)</th><th style={{ textAlign: 'left', padding: '12px 16px', fontWeight: 600 }}>What's Happening</th></tr></thead>
            <tbody>
              <tr style={{ borderBottom: '1px solid var(--line-soft)' }}><td style={{ padding: '12px 16px' }}>Month 1</td><td style={{ padding: '12px 16px' }}>2–3%</td><td style={{ padding: '12px 16px', fontWeight: 600 }}>225 lbs</td><td style={{ padding: '12px 16px', fontSize: 14, color: 'var(--ink-3)' }}>Titration phase (0.25 mg). Appetite reduction begins.</td></tr>
              <tr style={{ borderBottom: '1px solid var(--line-soft)' }}><td style={{ padding: '12px 16px' }}>Month 3</td><td style={{ padding: '12px 16px' }}>5–7%</td><td style={{ padding: '12px 16px', fontWeight: 600 }}>216 lbs</td><td style={{ padding: '12px 16px', fontSize: 14, color: 'var(--ink-3)' }}>Reached 1.0 mg. Significant appetite suppression.</td></tr>
              <tr style={{ borderBottom: '1px solid var(--line-soft)' }}><td style={{ padding: '12px 16px' }}>Month 6</td><td style={{ padding: '12px 16px' }}>10–12%</td><td style={{ padding: '12px 16px', fontWeight: 600 }}>205 lbs</td><td style={{ padding: '12px 16px', fontSize: 14, color: 'var(--ink-3)' }}>Maintenance dose reached. Steady loss.</td></tr>
              <tr style={{ borderBottom: '1px solid var(--line-soft)' }}><td style={{ padding: '12px 16px' }}>Month 9</td><td style={{ padding: '12px 16px' }}>12–14%</td><td style={{ padding: '12px 16px', fontWeight: 600 }}>198 lbs</td><td style={{ padding: '12px 16px', fontSize: 14, color: 'var(--ink-3)' }}>Metabolic improvements accelerating.</td></tr>
              <tr style={{ background: 'var(--brand-soft)' }}><td style={{ padding: '12px 16px', fontWeight: 600 }}>Month 12</td><td style={{ padding: '12px 16px', fontWeight: 700, color: 'var(--brand)' }}>14.9%</td><td style={{ padding: '12px 16px', fontWeight: 700, color: 'var(--brand)' }}>196 lbs</td><td style={{ padding: '12px 16px', fontSize: 14 }}>STEP 1 trial endpoint. ~34 lbs lost.</td></tr>
              <tr style={{ background: '#f0fdf4' }}><td style={{ padding: '12px 16px', fontWeight: 600 }}>Month 16+</td><td style={{ padding: '12px 16px', fontWeight: 600 }}>15–17%</td><td style={{ padding: '12px 16px', fontWeight: 600 }}>191 lbs</td><td style={{ padding: '12px 16px', fontSize: 14 }}>STEP 5 extension data. Continued slow loss.</td></tr>
            </tbody>
          </table>
        </div>

        <div style={{ background: '#FFF3E0', border: '1px solid #FF9800', borderRadius: 12, padding: '24px 32px', margin: '40px 0' }}>
          <p style={{ margin: 0, fontWeight: 600, color: '#E65100', fontSize: 16 }}>⚠️ Important Context</p>
          <p style={{ margin: '8px 0 0', fontSize: 16, color: '#BF360C' }}>These are trial averages. Individual results vary based on starting weight, metabolic health, diet quality, exercise, medication adherence, and genetics. Some patients lose 20%+. Some plateau at 8–10%. Your clinician will adjust your plan based on your individual response.</p>
        </div>

        <h2 className="serif" style={{ fontSize: 32, marginTop: 48, marginBottom: 24, color: 'var(--ink)' }}>Tirzepatide Comparison</h2>
        <p>For context, <a href="/medications/tirzepatide" style={{ color: 'var(--brand)', fontWeight: 500 }}>tirzepatide</a> (the dual GLP-1/GIP agonist in Mounjaro/Zepbound) produces higher average weight loss at maximum dose:</p>
        <ul>
          <li style={{ marginBottom: 8 }}>Tirzepatide 15 mg: <strong>22.5%</strong> body weight loss at 72 weeks (SURMOUNT-1)</li>
          <li style={{ marginBottom: 8 }}>Semaglutide 2.4 mg: <strong>14.9%</strong> body weight loss at 68 weeks (STEP 1)</li>
        </ul>
        <p>If maximum weight loss is your priority, explore our <a href="/blog/tirzepatide-without-diabetes-2026" style={{ color: 'var(--brand)', fontWeight: 500 }}>tirzepatide eligibility guide</a>.</p>

        <div className="card" style={{ padding: 40, margin: '48px 0', textAlign: 'center', background: '#FFFDF9', borderColor: 'var(--brand)' }}>
          <h3 className="serif" style={{ fontSize: 28, marginBottom: 16, color: 'var(--ink)' }}>See Your Projected Results</h3>
          <p style={{ marginBottom: 24, fontSize: 16 }}>Start your clinical intake and your clinician will provide personalized expectations based on your starting weight, metabolic profile, and health goals.</p>
          <a href={START_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-lg" style={{ display: 'inline-flex', justifyContent: 'center' }}>Start Your Evaluation <Icon.Arrow /></a>
        </div>

        <h2 className="serif" style={{ fontSize: 32, marginTop: 48, marginBottom: 24, color: 'var(--ink)' }}>Factors That Accelerate Results</h2>
        <ul>
          <li style={{ marginBottom: 12 }}><strong>Protein-prioritized nutrition:</strong> 0.7–1.0 g protein per pound of goal body weight. See our <a href="/blog/glp-1-food-guide-what-to-eat" style={{ color: 'var(--brand)', fontWeight: 500 }}>nutrition guide</a></li>
          <li style={{ marginBottom: 12 }}><strong>Resistance training:</strong> Preserves muscle mass, increases metabolic rate, improves body composition. See our <a href="/blog/glp-1-and-exercise-how-to-combine-medication-with" style={{ color: 'var(--brand)', fontWeight: 500 }}>exercise protocol</a></li>
          <li style={{ marginBottom: 12 }}><strong>Consistent medication adherence:</strong> Weekly injections on the same day at consistent intervals</li>
          <li style={{ marginBottom: 12 }}><strong>Hydration:</strong> Minimum 64 oz daily; dehydration mimics hunger signals</li>
          <li style={{ marginBottom: 12 }}><strong>Sleep optimization:</strong> 7–9 hours nightly. Sleep deprivation increases ghrelin and reduces GLP-1 effectiveness. See our <a href="/blog/glp-1-and-sleep-the-surprising-connection-between" style={{ color: 'var(--brand)', fontWeight: 500 }}>GLP-1 and sleep guide</a></li>
        </ul>

        <h2 className="serif" style={{ fontSize: 32, marginTop: 48, marginBottom: 24, color: 'var(--ink)' }}>When to Expect a Plateau</h2>
        <p>Most patients experience a weight loss plateau between months 8 and 14. This is normal and expected — it does not mean the medication has stopped working. Your body is recalibrating its metabolic setpoint. Options at this stage include dose optimization, adding <a href="/blog/glp-1-and-exercise-how-to-combine-medication-with" style={{ color: 'var(--brand)', fontWeight: 500 }}>structured exercise</a>, or discussing a <a href="/blog/glp-1-plateau-when-weight-loss-stalls-what-to-do-2" style={{ color: 'var(--brand)', fontWeight: 500 }}>plateau intervention plan</a> with your clinician.</p>

        <h2 className="serif" style={{ fontSize: 32, marginTop: 48, marginBottom: 24, color: 'var(--ink)' }}>Frequently Asked Questions</h2>
        <h4 style={{ fontSize: 20, marginTop: 24, marginBottom: 8, color: 'var(--ink)' }}>How much weight will I lose in the first month?</h4>
        <p style={{ marginBottom: 24 }}>Typically 5–7 lbs (2–3% of body weight) during the titration phase. The first month uses the lowest dose (0.25 mg), so weight loss accelerates significantly in months 2–4 as the dose increases.</p>
        <h4 style={{ fontSize: 20, marginTop: 24, marginBottom: 8, color: 'var(--ink)' }}>Can I lose 50 pounds on semaglutide?</h4>
        <p style={{ marginBottom: 24 }}>If your starting weight supports it, yes. A patient starting at 280 lbs who achieves the trial average of 15% would lose approximately 42 lbs. Patients who add structured exercise and optimized nutrition frequently exceed the trial average.</p>
        <h4 style={{ fontSize: 20, marginTop: 24, marginBottom: 8, color: 'var(--ink)' }}>Do I gain the weight back if I stop?</h4>
        <p style={{ marginBottom: 24 }}>Without behavioral changes, approximately two-thirds of lost weight returns within a year of discontinuation. This is why we emphasize building sustainable habits during the active treatment period. Read our <a href="/blog/what-happens-when-you-stop-glp-1-medication-the-re" style={{ color: 'var(--brand)', fontWeight: 500 }}>discontinuation guide</a>.</p>

        <div style={{ padding: 40, marginTop: 60, borderRadius: 20, background: 'var(--ink)', color: '#FBF8F3', textAlign: 'center' }}>
          <h2 className="serif" style={{ fontSize: 40, marginBottom: 20, color: '#FBF8F3' }}>Your Transformation Starts This Week</h2>
          <p style={{ fontSize: 18, opacity: 0.9, marginBottom: 32, maxWidth: 500, margin: '0 auto 32px' }}>Month 1 patients are already seeing results. Where will you be 90 days from now?</p>
          <a href={START_URL} target="_blank" rel="noopener noreferrer" className="btn btn-lg" style={{ background: '#FBF8F3', color: 'var(--ink)', display: 'inline-flex', justifyContent: 'center', width: '100%', maxWidth: 250 }}>Get Started <Icon.Arrow /></a>
        </div>

        <div style={{ marginTop: 80, paddingTop: 40, borderTop: '1px solid var(--line-soft)', fontSize: 14, color: 'var(--ink-3)' }}>
          <h3 className="serif" style={{ fontSize: 24, marginBottom: 24, color: 'var(--ink)' }}>References</h3>
          <ol style={{ paddingLeft: 20, display: 'flex', flexDirection: 'column', gap: 16 }}>
            <li>Wilding, J. P. H., et al. (2021). Once-weekly semaglutide in adults with overweight or obesity (STEP 1). <em>NEJM</em>, 384(11), 989–1002. <a href="https://doi.org/10.1056/NEJMoa2032183" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--brand)', textDecoration: 'underline' }}>https://doi.org/10.1056/NEJMoa2032183</a></li>
            <li>Garvey, W. T., et al. (2022). Two-year effects of semaglutide in adults with overweight or obesity (STEP 5). <em>Nature Medicine</em>, 28(10), 2083–2091. <a href="https://doi.org/10.1038/s41591-022-02026-4" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--brand)', textDecoration: 'underline' }}>https://doi.org/10.1038/s41591-022-02026-4</a></li>
            <li>Jastreboff, A. M., et al. (2022). Tirzepatide once weekly (SURMOUNT-1). <em>NEJM</em>, 387(3), 205–216. <a href="https://doi.org/10.1056/NEJMoa2206038" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--brand)', textDecoration: 'underline' }}>https://doi.org/10.1056/NEJMoa2206038</a></li>
          </ol>
        </div>
      </div>
    </div>
      <p style={{ fontSize: 13, color: 'var(--ink-3)', marginTop: 32, paddingTop: 20, borderTop: '1px solid var(--line-soft)' }}>Disclaimer: Mounjaro®, Zepbound®, Ozempic®, and Wegovy® are registered trademarks of their respective owners (Eli Lilly and Company, Novo Nordisk). Telehealth FX is an independent telehealth platform and is not affiliated with, endorsed by, or sponsored by these trademark owners. Compounded medications are prepared by state-licensed compounding pharmacies pursuant to a patient-specific prescription and are not reviewed or approved by the FDA for safety or efficacy.</p>
    </section>
  </>);
}
export { BlogSemaglutideWeightLossTimeline };
