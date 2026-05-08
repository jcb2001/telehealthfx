"use client";
import React from 'react';
import Image from 'next/image';
import { Icon } from './common.jsx';
const START_URL = "https://go.telehealthfx.com/start";

function BlogTirzepatideSideEffects() {
  return (<><section className="section" style={{ minHeight: '60vh', paddingTop: 120 }}><div className="container" style={{ maxWidth: 800 }}>
    <div className="eyebrow" style={{ marginBottom: 20 }}>Side Effects</div>
    <h1 className="serif" style={{ fontSize: 52, marginBottom: 24, lineHeight: 1.08 }}>Tirzepatide Side Effects: <span style={{ fontStyle: 'italic', color: 'var(--brand)' }}>The Complete Guide (What Semaglutide Patients Don{"'"}t Expect)</span></h1>
    <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 48, paddingBottom: 24, borderBottom: '1px solid var(--line-soft)' }}><div style={{ width: 40, height: 40, borderRadius: '50%', background: 'var(--brand)' }}><Image src="/assets/jm-profile.jpg" alt="Julian Mercer" width={1024} height={1024} style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%', height: "auto"}} priority={true} /></div><div><div style={{ fontWeight: 500, fontSize: 14 }}><a href="/about" style={{ color: "var(--ink)", textDecoration: "none" }}>Julian Mercer, M.S.</a></div><div style={{ fontSize: 13, color: 'var(--ink-3)' }}>Lead Bio-Systems Analyst · Updated May 2026 · 18 min read</div></div></div>
    <div className="blog-content" style={{ fontSize: 18, lineHeight: 1.7, color: 'var(--ink-2)' }}>
      <Image src="/assets/tirzepatide-side-effects-featured.png" alt="GI side effects diagram with clinical checklist" width={1024} height={1024} style={{ width: '100%', borderRadius: 16, marginBottom: 40, border: '1px solid var(--line-soft)', background: '#111', height: "auto"}} priority={true} />
      <p>Tirzepatide (Mounjaro/Zepbound) works differently than semaglutide, and its side effect profile reflects that difference. If you are switching from semaglutide or starting tirzepatide as your first GLP-1, here is what to expect — backed by SURMOUNT trial data and clinical practice observations.</p>

      <h2 className="serif" style={{ fontSize: 32, marginTop: 48, marginBottom: 24, color: 'var(--ink)' }}>Side Effect Comparison: Tirzepatide vs. Semaglutide</h2>
      <div style={{ overflowX: 'auto', margin: '24px 0' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 15 }}>
          <thead><tr style={{ borderBottom: '2px solid var(--ink)' }}><th style={{ textAlign: 'left', padding: '12px 16px', fontWeight: 600 }}>Side Effect</th><th style={{ textAlign: 'left', padding: '12px 16px', fontWeight: 600 }}>Tirzepatide</th><th style={{ textAlign: 'left', padding: '12px 16px', fontWeight: 600 }}>Semaglutide</th></tr></thead>
          <tbody>
            <tr style={{ borderBottom: '1px solid var(--line-soft)' }}><td style={{ padding: '12px 16px', fontWeight: 500 }}>Nausea</td><td style={{ padding: '12px 16px', color: 'green', fontWeight: 600 }}>24–29%</td><td style={{ padding: '12px 16px' }}>44%</td></tr>
            <tr style={{ borderBottom: '1px solid var(--line-soft)' }}><td style={{ padding: '12px 16px', fontWeight: 500 }}>Diarrhea</td><td style={{ padding: '12px 16px' }}>17–21%</td><td style={{ padding: '12px 16px' }}>30%</td></tr>
            <tr style={{ borderBottom: '1px solid var(--line-soft)' }}><td style={{ padding: '12px 16px', fontWeight: 500 }}>Vomiting</td><td style={{ padding: '12px 16px', color: 'green', fontWeight: 600 }}>9–12%</td><td style={{ padding: '12px 16px' }}>24%</td></tr>
            <tr style={{ borderBottom: '1px solid var(--line-soft)' }}><td style={{ padding: '12px 16px', fontWeight: 500 }}>Constipation</td><td style={{ padding: '12px 16px' }}>11–14%</td><td style={{ padding: '12px 16px' }}>10%</td></tr>
            <tr style={{ borderBottom: '1px solid var(--line-soft)' }}><td style={{ padding: '12px 16px', fontWeight: 500 }}>Decreased appetite</td><td style={{ padding: '12px 16px' }}>9–20%</td><td style={{ padding: '12px 16px' }}>20%</td></tr>
            <tr style={{ borderBottom: '1px solid var(--line-soft)' }}><td style={{ padding: '12px 16px', fontWeight: 500 }}>Injection site reaction</td><td style={{ padding: '12px 16px' }}>3–7%</td><td style={{ padding: '12px 16px' }}>3%</td></tr>
            <tr><td style={{ padding: '12px 16px', fontWeight: 500 }}>Discontinuation due to AEs</td><td style={{ padding: '12px 16px', color: 'green', fontWeight: 600 }}>4.3–7.1%</td><td style={{ padding: '12px 16px' }}>6.2%</td></tr>
          </tbody>
        </table>
      </div>
      <p><strong>The key finding:</strong> Tirzepatide{"'"}s GIP co-activation appears to buffer some of the GI side effects. Nausea rates are 30–40% lower than semaglutide. This is one reason tirzepatide is often better tolerated despite producing greater weight loss.</p>

      <h2 className="serif" style={{ fontSize: 32, marginTop: 48, marginBottom: 24, color: 'var(--ink)' }}>Timeline: When Side Effects Hit and When They Fade</h2>
      <ul>
        <li style={{ marginBottom: 12 }}><strong>Weeks 1–2 (2.5 mg):</strong> Mild nausea in ~25% of patients. Usually resolves within 48–72 hours of first injection. Appetite suppression begins.</li>
        <li style={{ marginBottom: 12 }}><strong>Weeks 3–4:</strong> GI symptoms stabilize for most patients. Those who experienced nausea usually acclimate by end of week 4.</li>
        <li style={{ marginBottom: 12 }}><strong>Week 5 (dose escalation to 5 mg):</strong> Potential brief return of nausea at new dose level. Less intense than initial onset.</li>
        <li style={{ marginBottom: 12 }}><strong>Months 2–3:</strong> Side effects are rare at stable dose. If GI symptoms persist, your clinician may slow the escalation schedule.</li>
        <li style={{ marginBottom: 12 }}><strong>Months 3+:</strong> Most patients report zero side effects at maintenance dose. Appetite modulation continues without GI disruption.</li>
      </ul>

      <h2 className="serif" style={{ fontSize: 32, marginTop: 48, marginBottom: 24, color: 'var(--ink)' }}>Managing Side Effects: Practical Protocol</h2>
      <ul>
        <li style={{ marginBottom: 12 }}><strong>Eat smaller meals.</strong> The same <a href="/blog/glp-1-food-guide-what-to-eat" style={{ color: 'var(--brand)', fontWeight: 500 }}>food rules</a> that apply to semaglutide apply here. Smaller portions, lean protein first, avoid high-fat meals for the first 48 hours post-injection.</li>
        <li style={{ marginBottom: 12 }}><strong>Stay hydrated.</strong> Dehydration worsens nausea and constipation. Target 80+ oz per day.</li>
        <li style={{ marginBottom: 12 }}><strong>Time your injection.</strong> Many patients find that injecting in the evening (before sleep) reduces daytime nausea. See our <a href="/blog/best-time-inject-semaglutide-2026" style={{ color: 'var(--brand)', fontWeight: 500 }}>injection timing guide</a>.</li>
        <li style={{ marginBottom: 12 }}><strong>Slow your dose escalation.</strong> If side effects are significant at a new dose, ask your clinician about extending the current dose by 2 weeks before escalating.</li>
      </ul>

      <div className="card" style={{ padding: 40, margin: '48px 0', textAlign: 'center', background: '#FFFDF9', borderColor: 'var(--brand)' }}>
        <h3 className="serif" style={{ fontSize: 28, marginBottom: 16, color: 'var(--ink)' }}>Clinician-Guided Dose Escalation</h3>
        <p style={{ marginBottom: 24, fontSize: 16 }}>Your TelehealthFX clinician monitors your response and adjusts your titration schedule. No cookie-cutter protocols.</p>
        <a href={START_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-lg" style={{ display: 'inline-flex', justifyContent: 'center' }}>Start Your Evaluation <Icon.Arrow /></a>
      </div>

      <h2 className="serif" style={{ fontSize: 32, marginTop: 48, marginBottom: 24, color: 'var(--ink)' }}>Serious Side Effects (Rare but Important)</h2>
      <ul>
        <li style={{ marginBottom: 12 }}><strong>Pancreatitis:</strong> Incidence &lt;0.2% in SURMOUNT trials. Stop medication and contact your provider immediately if you experience severe, persistent abdominal pain.</li>
        <li style={{ marginBottom: 12 }}><strong>Gallbladder events:</strong> Rapid weight loss increases <a href="/blog/glp1-gallbladder-risk-2026" style={{ color: 'var(--brand)', fontWeight: 500 }}>gallbladder risk</a> regardless of medication. Rate: 0.5–1.5% of participants.</li>
        <li style={{ marginBottom: 12 }}><strong>Thyroid C-cell tumors:</strong> Observed in animal studies at high doses. Not confirmed in humans. Contraindicated in patients with personal/family history of MTC or MEN2. See our <a href="/blog/glp1-thyroid-cancer-risk-2026" style={{ color: 'var(--brand)', fontWeight: 500 }}>thyroid safety analysis</a>.</li>
      </ul>

      <div style={{ padding: 40, marginTop: 60, borderRadius: 20, background: 'var(--ink)', color: '#FBF8F3', textAlign: 'center' }}>
        <h2 className="serif" style={{ fontSize: 40, marginBottom: 20, color: '#FBF8F3' }}>Better Results. Fewer Side Effects. Clinician Support.</h2>
        <p style={{ fontSize: 18, opacity: 0.9, marginBottom: 32, maxWidth: 500, margin: '0 auto 32px' }}>Compounded tirzepatide from $349/month. Your clinician adjusts your dosing to minimize side effects.</p>
        <a href={START_URL} target="_blank" rel="noopener noreferrer" className="btn btn-lg" style={{ background: '#FBF8F3', color: 'var(--ink)', display: 'inline-flex', justifyContent: 'center', width: '100%', maxWidth: 250 }}>Get Started <Icon.Arrow /></a>
      </div>
      <div style={{ marginTop: 80, paddingTop: 40, borderTop: '1px solid var(--line-soft)', fontSize: 14, color: 'var(--ink-3)' }}>
        <h3 className="serif" style={{ fontSize: 24, marginBottom: 24, color: 'var(--ink)' }}>References</h3>
        <ol style={{ paddingLeft: 20, display: 'flex', flexDirection: 'column', gap: 16 }}>
          <li>Jastreboff, A. M., et al. (2022). SURMOUNT-1 safety data. <em>NEJM</em>, 387(3), 205–216.</li>
          <li>Eli Lilly. (2024). <em>Zepbound prescribing information: Adverse reactions</em>. <a href="https://www.zepbound.lilly.com" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--brand)', textDecoration: 'underline' }}>zepbound.lilly.com</a></li>
        </ol>
      </div>
    </div>
  </div></section></>);
}
export { BlogTirzepatideSideEffects };
