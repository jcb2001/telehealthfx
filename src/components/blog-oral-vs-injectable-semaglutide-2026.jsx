"use client";
import React from 'react';
import Image from 'next/image';
import { Icon } from './common.jsx';
const START_URL = "https://go.telehealthfx.com/start";

function BlogOralVsInjectableSemaglutide() {
  return (<><section className="section" style={{ minHeight: '60vh', paddingTop: 120 }}><div className="container" style={{ maxWidth: 800 }}>
    <div className="eyebrow" style={{ marginBottom: 20 }}>Pill vs. Injection</div>
    <h1 className="serif" style={{ fontSize: 52, marginBottom: 24, lineHeight: 1.08 }}>Oral Semaglutide vs. Injectable: <span style={{ fontStyle: 'italic', color: 'var(--brand)' }}>Is the GLP-1 Pill Worth It?</span></h1>
    <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 48, paddingBottom: 24, borderBottom: '1px solid var(--line-soft)' }}><div style={{ width: 40, height: 40, borderRadius: '50%', background: 'var(--brand)' }}><Image src="/assets/jm-profile.jpg" alt="Julian Mercer" width={1024} height={1024} style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%', height: "auto"}} priority={true} /></div><div><div style={{ fontWeight: 500, fontSize: 14 }}><a href="/about" style={{ color: "var(--ink)", textDecoration: "none" }}>Julian Mercer, M.S.</a></div><div style={{ fontSize: 13, color: 'var(--ink-3)' }}>Lead Bio-Systems Analyst · Updated May 2026 · 14 min read</div></div></div>
    <div className="blog-content" style={{ fontSize: 18, lineHeight: 1.7, color: 'var(--ink-2)' }}>
      <Image src="/assets/oral-vs-injectable-semaglutide-featured.png" alt="Pill vs injection bioavailability" width={1024} height={1024} style={{ width: '100%', borderRadius: 16, marginBottom: 40, border: '1px solid var(--line-soft)', background: '#111', height: "auto"}} priority={true} />
      <p>Oral semaglutide (Rybelsus) has ~1% bioavailability — 99% gets destroyed in your stomach. Injectable has ~89%. The result: oral produces 7–10% weight loss vs injectable{"'"}s 14.9%, costs $900+/month vs $199 compounded, and requires daily fasting compliance vs one weekly injection.</p>
      <h2 className="serif" style={{ fontSize: 32, marginTop: 48, marginBottom: 24, color: 'var(--ink)' }}>Head-to-Head</h2>
      <div style={{ overflowX: 'auto', margin: '24px 0' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 15 }}>
          <thead><tr style={{ borderBottom: '2px solid var(--ink)' }}><th style={{ textAlign: 'left', padding: '12px 16px', fontWeight: 600 }}>Factor</th><th style={{ textAlign: 'left', padding: '12px 16px', fontWeight: 600 }}>Oral (Rybelsus)</th><th style={{ textAlign: 'left', padding: '12px 16px', fontWeight: 600 }}>Injectable</th></tr></thead>
          <tbody>
            <tr style={{ borderBottom: '1px solid var(--line-soft)' }}><td style={{ padding: '12px 16px', fontWeight: 500 }}>Weight loss</td><td style={{ padding: '12px 16px' }}>7–10%</td><td style={{ padding: '12px 16px', fontWeight: 600, color: 'green' }}>14.9%</td></tr>
            <tr style={{ borderBottom: '1px solid var(--line-soft)' }}><td style={{ padding: '12px 16px', fontWeight: 500 }}>Bioavailability</td><td style={{ padding: '12px 16px', color: '#DC2626' }}>~1%</td><td style={{ padding: '12px 16px', color: 'green', fontWeight: 600 }}>~89%</td></tr>
            <tr style={{ borderBottom: '1px solid var(--line-soft)' }}><td style={{ padding: '12px 16px', fontWeight: 500 }}>Cost</td><td style={{ padding: '12px 16px' }}>$900–$1,000</td><td style={{ padding: '12px 16px', color: 'green', fontWeight: 600 }}>$199–$399 compounded</td></tr>
            <tr><td style={{ padding: '12px 16px', fontWeight: 500 }}>Dosing</td><td style={{ padding: '12px 16px', color: '#DC2626' }}>Daily + 30 min fast</td><td style={{ padding: '12px 16px', color: 'green', fontWeight: 600 }}>Once weekly, any time</td></tr>
          </tbody>
        </table>
      </div>
      <p>The injection uses a 30-gauge needle — thinner than a human hair. Most patients describe it as less painful than a mosquito bite. See our <a href="/blog/first-week-semaglutide-2026" style={{ color: 'var(--brand)', fontWeight: 500 }}>first week guide</a>.</p>
      <div style={{ padding: 40, marginTop: 60, borderRadius: 20, background: 'var(--ink)', color: '#FBF8F3', textAlign: 'center' }}>
        <h2 className="serif" style={{ fontSize: 40, marginBottom: 20, color: '#FBF8F3' }}>The Math Is Clear. Injectable Wins.</h2>
        <p style={{ fontSize: 18, opacity: 0.9, marginBottom: 32, maxWidth: 500, margin: '0 auto 32px' }}>$199/month. Once weekly. 89% bioavailability. 14.9% weight loss.</p>
        <a href={START_URL} target="_blank" rel="noopener noreferrer" className="btn btn-lg" style={{ background: '#FBF8F3', color: 'var(--ink)', display: 'inline-flex', justifyContent: 'center', width: '100%', maxWidth: 250 }}>Start Now <Icon.Arrow /></a>
      </div>
      <div style={{ marginTop: 80, paddingTop: 40, borderTop: '1px solid var(--line-soft)', fontSize: 14, color: 'var(--ink-3)' }}>
        <h3 className="serif" style={{ fontSize: 24, marginBottom: 24, color: 'var(--ink)' }}>References</h3>
        <ol style={{ paddingLeft: 20, display: 'flex', flexDirection: 'column', gap: 16 }}>
          <li>Bucheit, J. D., et al. (2020). Oral semaglutide: A review. <em>Diabetes Therapy</em>, 11(9), 1867–1886.</li>
        </ol>
      </div>
    </div>
  </div></section></>);
}
export { BlogOralVsInjectableSemaglutide };
