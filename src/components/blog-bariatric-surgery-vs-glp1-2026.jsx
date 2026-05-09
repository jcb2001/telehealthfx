"use client";
import React from 'react';
import Image from 'next/image';
import { Icon } from './common.jsx';
const S = "https://go.telehealthfx.com/start";
function BlogBariatricVsGLP1() {
  return (<><section className="section" style={{ minHeight: '60vh', paddingTop: 120 }}><div className="container" style={{ maxWidth: 800 }}>
    <div className="eyebrow" style={{ marginBottom: 20 }}>Surgery vs. Medication</div>
    <h1 className="serif" style={{ fontSize: 52, marginBottom: 24, lineHeight: 1.08 }}>Bariatric Surgery vs. GLP-1: <span style={{ fontStyle: 'italic', color: 'var(--brand)' }}>Which Produces Better Long-Term Results? (Cost, Risk &amp; Data)</span></h1>
    <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 48, paddingBottom: 24, borderBottom: '1px solid var(--line-soft)' }}><div style={{ width: 40, height: 40, borderRadius: '50%', background: 'var(--brand)' }}><Image src="/assets/jm-profile.jpg" alt="Julian Mercer" width={1024} height={1024} style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%', height: "auto"}} priority={true} /></div><div><div style={{ fontWeight: 500, fontSize: 14 }}><a href="/about" style={{ color: "var(--ink)", textDecoration: "none" }}>Julian Mercer, M.S.</a></div><div style={{ fontSize: 13, color: 'var(--ink-3)' }}>Lead Bio-Systems Analyst · Updated May 2026 · 18 min read</div></div></div>
    <div className="blog-content" style={{ fontSize: 18, lineHeight: 1.7, color: 'var(--ink-2)' }}>
      <Image src="/assets/bariatric-surgery-vs-glp1-featured.png" alt="Operating room vs home injection comparison" width={1024} height={1024} style={{ width: '100%', borderRadius: 16, marginBottom: 40, border: '1px solid var(--line-soft)', height: "auto"}} priority={true} />
      <p>For decades, bariatric surgery was the only proven intervention for severe obesity. GLP-1 medications are now closing the gap — tirzepatide{"'"}s 22.5% weight loss approaches the 25–30% seen with gastric sleeve. Here is the honest comparison.</p>
      <h2 className="serif" style={{ fontSize: 32, marginTop: 48, marginBottom: 24, color: 'var(--ink)' }}>The Comparison</h2>
      <div style={{ overflowX: 'auto', margin: '24px 0' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 15 }}>
          <thead><tr style={{ borderBottom: '2px solid var(--ink)' }}><th style={{ textAlign: 'left', padding: '12px 16px', fontWeight: 600 }}>Factor</th><th style={{ textAlign: 'left', padding: '12px 16px', fontWeight: 600 }}>Gastric Sleeve</th><th style={{ textAlign: 'left', padding: '12px 16px', fontWeight: 600 }}>GLP-1 Medication</th></tr></thead>
          <tbody>
            <tr style={{ borderBottom: '1px solid var(--line-soft)' }}><td style={{ padding: '12px 16px', fontWeight: 500 }}>Avg weight loss</td><td style={{ padding: '12px 16px', fontWeight: 600 }}>25–30%</td><td style={{ padding: '12px 16px' }}>15–22.5%</td></tr>
            <tr style={{ borderBottom: '1px solid var(--line-soft)' }}><td style={{ padding: '12px 16px', fontWeight: 500 }}>Cost</td><td style={{ padding: '12px 16px', color: '#DC2626' }}>$15,000–$35,000</td><td style={{ padding: '12px 16px', color: 'green', fontWeight: 600 }}>$199–$499/mo</td></tr>
            <tr style={{ borderBottom: '1px solid var(--line-soft)' }}><td style={{ padding: '12px 16px', fontWeight: 500 }}>Reversible</td><td style={{ padding: '12px 16px', color: '#DC2626' }}>No (permanent)</td><td style={{ padding: '12px 16px', color: 'green' }}>Yes (stop anytime)</td></tr>
            <tr style={{ borderBottom: '1px solid var(--line-soft)' }}><td style={{ padding: '12px 16px', fontWeight: 500 }}>Recovery time</td><td style={{ padding: '12px 16px' }}>4–6 weeks</td><td style={{ padding: '12px 16px', color: 'green', fontWeight: 600 }}>None</td></tr>
            <tr style={{ borderBottom: '1px solid var(--line-soft)' }}><td style={{ padding: '12px 16px', fontWeight: 500 }}>Complication risk</td><td style={{ padding: '12px 16px' }}>10–15% (surgical)</td><td style={{ padding: '12px 16px', color: 'green' }}>GI side effects only</td></tr>
            <tr><td style={{ padding: '12px 16px', fontWeight: 500 }}>Maintenance</td><td style={{ padding: '12px 16px' }}>Lifelong dietary restrictions</td><td style={{ padding: '12px 16px' }}>Ongoing medication</td></tr>
          </tbody>
        </table>
      </div>
      <p>For patients with BMI 40+ or BMI 35+ with comorbidities, surgery may still produce superior results. But for BMI 27–40, GLP-1 medication offers comparable outcomes with dramatically lower risk, cost, and lifestyle disruption. Already had surgery? See our <a href="/blog/glp1-after-bariatric-surgery-2026" style={{ color: 'var(--brand)', fontWeight: 500 }}>post-bariatric GLP-1 guide</a>.</p>
      <div className="card" style={{ padding: 40, margin: '48px 0', textAlign: 'center', background: '#FFFDF9', borderColor: 'var(--brand)' }}>
        <h3 className="serif" style={{ fontSize: 28, marginBottom: 16, color: 'var(--ink)' }}>Try Medication Before Surgery.</h3>
        <p style={{ marginBottom: 24, fontSize: 16 }}>Reversible. No downtime. No surgical risk. $199/month vs $25,000.</p>
        <a href={S} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-lg" style={{ display: 'inline-flex', justifyContent: 'center' }}>Start Your Evaluation <Icon.Arrow /></a>
      </div>
      <div style={{ padding: 40, marginTop: 60, borderRadius: 20, background: 'var(--ink)', color: '#FBF8F3', textAlign: 'center' }}>
        <h2 className="serif" style={{ fontSize: 40, marginBottom: 20, color: '#FBF8F3' }}>Same Results. No Scalpel.</h2>
        <p style={{ fontSize: 18, opacity: 0.9, marginBottom: 32, maxWidth: 500, margin: '0 auto 32px' }}>Compounded semaglutide from $199/mo. Tirzepatide from $349/mo.</p>
        <a href={S} target="_blank" rel="noopener noreferrer" className="btn btn-lg" style={{ background: '#FBF8F3', color: 'var(--ink)', display: 'inline-flex', justifyContent: 'center', width: '100%', maxWidth: 250 }}>Get Started <Icon.Arrow /></a>
      </div>
    </div>
  </div></section></>);
}
export { BlogBariatricVsGLP1 };
