"use client";
import React from 'react';
import Image from 'next/image';
import { Icon } from './common.jsx';
const S = "https://go.telehealthfx.com/start";
function BlogGLP1KidneyHealth() {
  return (<><section className="section" style={{ minHeight: '60vh', paddingTop: 120 }}><div className="container" style={{ maxWidth: 800 }}>
    <div className="eyebrow" style={{ marginBottom: 20 }}>Kidney Health</div>
    <h1 className="serif" style={{ fontSize: 52, marginBottom: 24, lineHeight: 1.08 }}>GLP-1 and Kidney Health: <span style={{ fontStyle: 'italic', color: 'var(--brand)' }}>How Semaglutide Protects Renal Function (FLOW Trial Results)</span></h1>
    <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 48, paddingBottom: 24, borderBottom: '1px solid var(--line-soft)' }}><div style={{ width: 40, height: 40, borderRadius: '50%', background: 'var(--brand)' }}><Image src="/assets/jm-profile.jpg" alt="Julian Mercer" width={1024} height={1024} style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%', height: "auto"}} priority={true} /></div><div><div style={{ fontWeight: 500, fontSize: 14 }}><a href="/about" style={{ color: "var(--ink)", textDecoration: "none" }}>Julian Mercer, M.S.</a></div><div style={{ fontSize: 13, color: 'var(--ink-3)' }}>Lead Bio-Systems Analyst · Updated May 2026 · 14 min read</div></div></div>
    <div className="blog-content" style={{ fontSize: 18, lineHeight: 1.7, color: 'var(--ink-2)' }}>
      <Image src="/assets/glp1-kidney-health-featured.png" alt="Kidney with protective GLP-1 shield effect" width={1024} height={1024} style={{ width: '100%', borderRadius: 16, marginBottom: 40, border: '1px solid var(--line-soft)', height: "auto"}} priority={true} />
      <p>The FLOW trial was stopped early for overwhelming benefit. Semaglutide reduced the risk of major kidney events by <strong>24%</strong> in patients with chronic kidney disease (CKD) and type 2 diabetes. This is the first GLP-1 trial designed specifically for kidney outcomes — and it changes the treatment landscape.</p>
      <h2 className="serif" style={{ fontSize: 32, marginTop: 48, marginBottom: 24, color: 'var(--ink)' }}>Key FLOW Trial Results</h2>
      <ul>
        <li style={{ marginBottom: 12 }}><strong>24% reduction</strong> in composite kidney endpoint (kidney failure, sustained GFR decline, renal death)</li>
        <li style={{ marginBottom: 12 }}><strong>Preserved GFR:</strong> Slowed the rate of kidney function decline by 1.16 mL/min/year</li>
        <li style={{ marginBottom: 12 }}><strong>Reduced albuminuria:</strong> Less protein leaking into urine = less kidney damage</li>
        <li style={{ marginBottom: 12 }}><strong>Cardiovascular co-benefit:</strong> 18% reduction in MACE events (aligning with the <a href="/blog/glp-1-and-your-heart-the-select-trial-cardiovascul" style={{ color: 'var(--brand)', fontWeight: 500 }}>SELECT trial</a>)</li>
      </ul>
      <p>This adds to the growing evidence of GLP-1{"'"}s {"'"}beyond weight loss{"'"} benefits — joining <a href="/blog/glp1-fatty-liver-2026" style={{ color: 'var(--brand)', fontWeight: 500 }}>liver protection</a> and <a href="/blog/glp1-longevity-2026" style={{ color: 'var(--brand)', fontWeight: 500 }}>longevity data</a>.</p>
      <div className="card" style={{ padding: 40, margin: '48px 0', textAlign: 'center', background: '#FFFDF9', borderColor: 'var(--brand)' }}>
        <h3 className="serif" style={{ fontSize: 28, marginBottom: 16, color: 'var(--ink)' }}>Weight Loss + Kidney Protection. One Medication.</h3>
        <p style={{ marginBottom: 24, fontSize: 16 }}>GLP-1 reduces kidney disease progression while improving overall metabolic health.</p>
        <a href={S} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-lg" style={{ display: 'inline-flex', justifyContent: 'center' }}>Start Your Evaluation <Icon.Arrow /></a>
      </div>
      <div style={{ padding: 40, marginTop: 60, borderRadius: 20, background: 'var(--ink)', color: '#FBF8F3', textAlign: 'center' }}>
        <h2 className="serif" style={{ fontSize: 40, marginBottom: 20, color: '#FBF8F3' }}>Protect Your Kidneys. Lose Weight. One Injection.</h2>
        <p style={{ fontSize: 18, opacity: 0.9, marginBottom: 32, maxWidth: 500, margin: '0 auto 32px' }}>Compounded semaglutide from $199/mo. Clinician-guided.</p>
        <a href={S} target="_blank" rel="noopener noreferrer" className="btn btn-lg" style={{ background: '#FBF8F3', color: 'var(--ink)', display: 'inline-flex', justifyContent: 'center', width: '100%', maxWidth: 250 }}>Get Started <Icon.Arrow /></a>
      </div>
      <div style={{ marginTop: 80, paddingTop: 40, borderTop: '1px solid var(--line-soft)', fontSize: 14, color: 'var(--ink-3)' }}><h3 className="serif" style={{ fontSize: 24, marginBottom: 24, color: 'var(--ink)' }}>References</h3><ol style={{ paddingLeft: 20, display: 'flex', flexDirection: 'column', gap: 16 }}><li>Perkovic, V., et al. (2024). FLOW Trial. <em>NEJM</em>, 391(2), 109–121.</li></ol></div>
    </div>
  </div></section></>);
}
export { BlogGLP1KidneyHealth };
