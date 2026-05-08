"use client";
import React from 'react';
import Image from 'next/image';
import { Icon } from './common.jsx';
const START_URL = "https://go.telehealthfx.com/start";

function BlogTirzepatideTimeline() {
  return (<><section className="section" style={{ minHeight: '60vh', paddingTop: 120 }}><div className="container" style={{ maxWidth: 800 }}>
    <div className="eyebrow" style={{ marginBottom: 20 }}>Results Timeline</div>
    <h1 className="serif" style={{ fontSize: 52, marginBottom: 24, lineHeight: 1.08 }}>Tirzepatide Weight Loss Timeline: <span style={{ fontStyle: 'italic', color: 'var(--brand)' }}>Month-by-Month Results from SURMOUNT Data</span></h1>
    <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 48, paddingBottom: 24, borderBottom: '1px solid var(--line-soft)' }}><div style={{ width: 40, height: 40, borderRadius: '50%', background: 'var(--brand)' }}><Image src="/assets/jm-profile.jpg" alt="Julian Mercer" width={1024} height={1024} style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%', height: "auto"}} priority={true} /></div><div><div style={{ fontWeight: 500, fontSize: 14 }}><a href="/about" style={{ color: "var(--ink)", textDecoration: "none" }}>Julian Mercer, M.S.</a></div><div style={{ fontSize: 13, color: 'var(--ink-3)' }}>Lead Bio-Systems Analyst · Updated May 2026 · 16 min read</div></div></div>
    <div className="blog-content" style={{ fontSize: 18, lineHeight: 1.7, color: 'var(--ink-2)' }}>
      <Image src="/assets/tirzepatide-weight-loss-timeline-featured.png" alt="Weight loss curve showing month-by-month tirzepatide results" width={1024} height={1024} style={{ width: '100%', borderRadius: 16, marginBottom: 40, border: '1px solid var(--line-soft)', background: '#111', height: "auto"}} priority={true} />
      <p>The SURMOUNT-1 trial documented the most dramatic weight loss results of any pharmaceutical intervention in history. Here is exactly what happened, month by month, at each dose level — so you know what to expect on your own timeline.</p>

      <h2 className="serif" style={{ fontSize: 32, marginTop: 48, marginBottom: 24, color: 'var(--ink)' }}>Month-by-Month Timeline (15 mg — Highest Dose)</h2>
      <div style={{ overflowX: 'auto', margin: '24px 0' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 15 }}>
          <thead><tr style={{ borderBottom: '2px solid var(--ink)' }}><th style={{ textAlign: 'left', padding: '12px 16px', fontWeight: 600 }}>Month</th><th style={{ textAlign: 'left', padding: '12px 16px', fontWeight: 600 }}>Avg Weight Loss</th><th style={{ textAlign: 'left', padding: '12px 16px', fontWeight: 600 }}>For 220 lb Person</th><th style={{ textAlign: 'left', padding: '12px 16px', fontWeight: 600 }}>What{"'"}s Happening</th></tr></thead>
          <tbody>
            <tr style={{ borderBottom: '1px solid var(--line-soft)' }}><td style={{ padding: '12px 16px', fontWeight: 500 }}>Month 1</td><td style={{ padding: '12px 16px' }}>2–3%</td><td style={{ padding: '12px 16px' }}>~5 lbs</td><td style={{ padding: '12px 16px', fontSize: 14 }}>Appetite suppression begins. Starting 2.5 mg.</td></tr>
            <tr style={{ borderBottom: '1px solid var(--line-soft)' }}><td style={{ padding: '12px 16px', fontWeight: 500 }}>Month 2</td><td style={{ padding: '12px 16px' }}>4–6%</td><td style={{ padding: '12px 16px' }}>~10 lbs</td><td style={{ padding: '12px 16px', fontSize: 14 }}>Dose escalation to 5 mg. Noticeable appetite change.</td></tr>
            <tr style={{ borderBottom: '1px solid var(--line-soft)' }}><td style={{ padding: '12px 16px', fontWeight: 500 }}>Month 3</td><td style={{ padding: '12px 16px', fontWeight: 600, color: 'green' }}>7–9%</td><td style={{ padding: '12px 16px', fontWeight: 600 }}>~18 lbs</td><td style={{ padding: '12px 16px', fontSize: 14 }}>Visible body change. Dose to 7.5–10 mg.</td></tr>
            <tr style={{ borderBottom: '1px solid var(--line-soft)' }}><td style={{ padding: '12px 16px', fontWeight: 500 }}>Month 6</td><td style={{ padding: '12px 16px', fontWeight: 600, color: 'green' }}>14–17%</td><td style={{ padding: '12px 16px', fontWeight: 600 }}>~35 lbs</td><td style={{ padding: '12px 16px', fontSize: 14 }}>Major transformation. A1C improvement if diabetic.</td></tr>
            <tr style={{ borderBottom: '1px solid var(--line-soft)' }}><td style={{ padding: '12px 16px', fontWeight: 500 }}>Month 9</td><td style={{ padding: '12px 16px', fontWeight: 600, color: 'green' }}>19–21%</td><td style={{ padding: '12px 16px', fontWeight: 600 }}>~43 lbs</td><td style={{ padding: '12px 16px', fontSize: 14 }}>Nearing max response. Metabolic health markers normalized.</td></tr>
            <tr style={{ background: '#F0FDF4' }}><td style={{ padding: '12px 16px', fontWeight: 700 }}>Month 12</td><td style={{ padding: '12px 16px', fontWeight: 700, color: 'green', fontSize: 20 }}>22.5%</td><td style={{ padding: '12px 16px', fontWeight: 700, fontSize: 20 }}>~50 lbs</td><td style={{ padding: '12px 16px', fontSize: 14, fontWeight: 600 }}>Peak response. Maintenance phase.</td></tr>
          </tbody>
        </table>
      </div>

      <h2 className="serif" style={{ fontSize: 32, marginTop: 48, marginBottom: 24, color: 'var(--ink)' }}>Tirzepatide vs. Semaglutide: Timeline Comparison</h2>
      <p>At every time point, tirzepatide outperformed semaglutide in SURMOUNT vs. STEP trials:</p>
      <ul>
        <li style={{ marginBottom: 8 }}><strong>Month 3:</strong> Tirzepatide ~9% vs. Semaglutide ~6%</li>
        <li style={{ marginBottom: 8 }}><strong>Month 6:</strong> Tirzepatide ~17% vs. Semaglutide ~11%</li>
        <li style={{ marginBottom: 8 }}><strong>Month 12:</strong> Tirzepatide ~22.5% vs. Semaglutide ~14.9%</li>
      </ul>
      <p>The gap widens over time because tirzepatide{"'"}s dual mechanism (GIP + GLP-1) continues producing results after semaglutide{"'"}s single-agonist effect plateaus. See our <a href="/blog/semaglutide-vs-tirzepatide-decision-2026" style={{ color: 'var(--brand)', fontWeight: 500 }}>decision guide</a> for help choosing.</p>

      <div className="card" style={{ padding: 40, margin: '48px 0', textAlign: 'center', background: '#FFFDF9', borderColor: 'var(--brand)' }}>
        <h3 className="serif" style={{ fontSize: 28, marginBottom: 16, color: 'var(--ink)' }}>Your Month 1 Starts When You Do.</h3>
        <p style={{ marginBottom: 24, fontSize: 16 }}>Compounded tirzepatide from $349/month. Same-day clinical evaluation. Medication shipped to your door.</p>
        <a href={START_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-lg" style={{ display: 'inline-flex', justifyContent: 'center' }}>Start Your Evaluation <Icon.Arrow /></a>
      </div>

      <h2 className="serif" style={{ fontSize: 32, marginTop: 48, marginBottom: 24, color: 'var(--ink)' }}>What Affects Your Individual Timeline?</h2>
      <ul>
        <li style={{ marginBottom: 12 }}><strong>Starting BMI:</strong> Higher starting BMI typically means faster initial weight loss in absolute pounds, though percentage may be similar.</li>
        <li style={{ marginBottom: 12 }}><strong>Insulin resistance:</strong> Patients with significant insulin resistance often see the most dramatic response to tirzepatide{"'"}s dual mechanism.</li>
        <li style={{ marginBottom: 12 }}><strong>Dose escalation speed:</strong> Faster escalation = faster results but more side effects. Your clinician will balance both. See <a href="/blog/tirzepatide-side-effects-2026" style={{ color: 'var(--brand)', fontWeight: 500 }}>side effects guide</a>.</li>
        <li style={{ marginBottom: 12 }}><strong>Diet and exercise:</strong> <a href="/blog/glp-1-and-exercise-how-to-combine-medication-with" style={{ color: 'var(--brand)', fontWeight: 500 }}>Exercise</a> and <a href="/blog/glp-1-food-guide-what-to-eat" style={{ color: 'var(--brand)', fontWeight: 500 }}>nutrition</a> amplify results. Protein intake is critical for preserving <a href="/blog/glp-1-muscle-loss-the-hidden-risk-nobodys-talking" style={{ color: 'var(--brand)', fontWeight: 500 }}>lean muscle</a>.</li>
      </ul>

      <div style={{ padding: 40, marginTop: 60, borderRadius: 20, background: 'var(--ink)', color: '#FBF8F3', textAlign: 'center' }}>
        <h2 className="serif" style={{ fontSize: 40, marginBottom: 20, color: '#FBF8F3' }}>22.5% Weight Loss. 12 Months. From $349/Month.</h2>
        <p style={{ fontSize: 18, opacity: 0.9, marginBottom: 32, maxWidth: 500, margin: '0 auto 32px' }}>The most effective GLP-1 available — compounded and accessible without insurance.</p>
        <a href={START_URL} target="_blank" rel="noopener noreferrer" className="btn btn-lg" style={{ background: '#FBF8F3', color: 'var(--ink)', display: 'inline-flex', justifyContent: 'center', width: '100%', maxWidth: 250 }}>Get Started <Icon.Arrow /></a>
      </div>
      <div style={{ marginTop: 80, paddingTop: 40, borderTop: '1px solid var(--line-soft)', fontSize: 14, color: 'var(--ink-3)' }}>
        <h3 className="serif" style={{ fontSize: 24, marginBottom: 24, color: 'var(--ink)' }}>References</h3>
        <ol style={{ paddingLeft: 20, display: 'flex', flexDirection: 'column', gap: 16 }}>
          <li>Jastreboff, A. M., et al. (2022). SURMOUNT-1. <em>NEJM</em>, 387(3), 205–216.</li>
          <li>Wadden, T. A., et al. (2023). SURMOUNT-2. <em>Lancet</em>, 402(10402), 613–626.</li>
        </ol>
      </div>
    </div>
  </div></section></>);
}
export { BlogTirzepatideTimeline };
