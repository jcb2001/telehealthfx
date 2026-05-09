"use client";
import React from 'react';
import Image from 'next/image';
import { Icon } from './common.jsx';
const S = "https://go.telehealthfx.com/start";
function BlogGLP1Longevity() {
  return (<><section className="section" style={{ minHeight: '60vh', paddingTop: 120 }}><div className="container" style={{ maxWidth: 800 }}>
    <div className="eyebrow" style={{ marginBottom: 20 }}>Longevity Science</div>
    <h1 className="serif" style={{ fontSize: 52, marginBottom: 24, lineHeight: 1.08 }}>GLP-1 and Longevity: <span style={{ fontStyle: 'italic', color: 'var(--brand)' }}>Why Semaglutide May Be the Most Important Anti-Aging Drug Ever Discovered</span></h1>
    <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 48, paddingBottom: 24, borderBottom: '1px solid var(--line-soft)' }}><div style={{ width: 40, height: 40, borderRadius: '50%', background: 'var(--brand)' }}><Image src="/assets/jm-profile.jpg" alt="Julian Mercer" width={1024} height={1024} style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%', height: "auto"}} priority={true} /></div><div><div style={{ fontWeight: 500, fontSize: 14 }}><a href="/about" style={{ color: "var(--ink)", textDecoration: "none" }}>Julian Mercer, M.S.</a></div><div style={{ fontSize: 13, color: 'var(--ink-3)' }}>Lead Bio-Systems Analyst · Updated May 2026 · 16 min read</div></div></div>
    <div className="blog-content" style={{ fontSize: 18, lineHeight: 1.7, color: 'var(--ink-2)' }}>
      <Image src="/assets/glp1-longevity-anti-aging-featured.png" alt="DNA helix with GLP-1 molecule and cellular renewal" width={1024} height={1024} style={{ width: '100%', borderRadius: 16, marginBottom: 40, border: '1px solid var(--line-soft)', height: "auto"}} priority={true} />
      <p>GLP-1 medications simultaneously address <strong>6 of the 9 hallmarks of aging</strong>: chronic inflammation, metabolic dysfunction, cardiovascular disease, cellular senescence signaling, insulin resistance, and nutrient sensing deregulation. No other single medication touches this many aging pathways at once.</p>
      <h2 className="serif" style={{ fontSize: 32, marginTop: 48, marginBottom: 24, color: 'var(--ink)' }}>The Longevity Evidence</h2>
      <ul>
        <li style={{ marginBottom: 12 }}><strong>20% cardiovascular mortality reduction:</strong> The <a href="/blog/glp-1-and-your-heart-the-select-trial-cardiovascul" style={{ color: 'var(--brand)', fontWeight: 500 }}>SELECT trial</a> proved semaglutide reduces heart attacks, strokes, and cardiovascular death — the #1 killer of Americans.</li>
        <li style={{ marginBottom: 12 }}><strong>Reduced systemic inflammation:</strong> CRP drops 30–40% on GLP-1. Chronic inflammation drives nearly every age-related disease.</li>
        <li style={{ marginBottom: 12 }}><strong><a href="/blog/glp1-fatty-liver-2026" style={{ color: 'var(--brand)', fontWeight: 500 }}>Liver protection</a>:</strong> 59% MASH resolution. Fatty liver disease is a growing cause of liver failure.</li>
        <li style={{ marginBottom: 12 }}><strong><a href="/blog/glp1-kidney-health-2026" style={{ color: 'var(--brand)', fontWeight: 500 }}>Kidney protection</a>:</strong> Reduced albuminuria and preserved GFR in CKD patients.</li>
        <li style={{ marginBottom: 12 }}><strong>Improved metabolic health:</strong> Normalizes insulin, glucose, triglycerides, blood pressure — the full <a href="/blog/glp1-metabolic-syndrome-2026" style={{ color: 'var(--brand)', fontWeight: 500 }}>metabolic syndrome</a> panel.</li>
      </ul>
      <div className="card" style={{ padding: 40, margin: '48px 0', textAlign: 'center', background: '#FFFDF9', borderColor: 'var(--brand)' }}>
        <h3 className="serif" style={{ fontSize: 28, marginBottom: 16, color: 'var(--ink)' }}>Weight Loss Is Just the Beginning.</h3>
        <p style={{ marginBottom: 24, fontSize: 16 }}>GLP-1 improves cardiovascular, hepatic, renal, and metabolic health — simultaneously.</p>
        <a href={S} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-lg" style={{ display: 'inline-flex', justifyContent: 'center' }}>Start Your Evaluation <Icon.Arrow /></a>
      </div>
      <div style={{ padding: 40, marginTop: 60, borderRadius: 20, background: 'var(--ink)', color: '#FBF8F3', textAlign: 'center' }}>
        <h2 className="serif" style={{ fontSize: 40, marginBottom: 20, color: '#FBF8F3' }}>Live Longer. Live Better.</h2>
        <p style={{ fontSize: 18, opacity: 0.9, marginBottom: 32, maxWidth: 500, margin: '0 auto 32px' }}>From $199/month. Clinician-guided. No insurance required.</p>
        <a href={S} target="_blank" rel="noopener noreferrer" className="btn btn-lg" style={{ background: '#FBF8F3', color: 'var(--ink)', display: 'inline-flex', justifyContent: 'center', width: '100%', maxWidth: 250 }}>Get Started <Icon.Arrow /></a>
      </div>
    </div>
  </div></section></>);
}
export { BlogGLP1Longevity };
