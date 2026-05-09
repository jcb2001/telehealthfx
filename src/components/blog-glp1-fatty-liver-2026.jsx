"use client";
import React from 'react';
import Image from 'next/image';
import { Icon } from './common.jsx';
const S = "https://go.telehealthfx.com/start";
function BlogGLP1FattyLiver() {
  return (<><section className="section" style={{ minHeight: '60vh', paddingTop: 120 }}><div className="container" style={{ maxWidth: 800 }}>
    <div className="eyebrow" style={{ marginBottom: 20 }}>Liver Health</div>
    <h1 className="serif" style={{ fontSize: 52, marginBottom: 24, lineHeight: 1.08 }}>GLP-1 and Fatty Liver Disease: <span style={{ fontStyle: 'italic', color: 'var(--brand)' }}>How Semaglutide Reverses NAFLD/MASH (Emerging Evidence)</span></h1>
    <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 48, paddingBottom: 24, borderBottom: '1px solid var(--line-soft)' }}><div style={{ width: 40, height: 40, borderRadius: '50%', background: 'var(--brand)' }}><Image src="/assets/jm-profile.jpg" alt="Julian Mercer" width={1024} height={1024} style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%', height: "auto"}} priority={true} /></div><div><div style={{ fontWeight: 500, fontSize: 14 }}><a href="/about" style={{ color: "var(--ink)", textDecoration: "none" }}>Julian Mercer, M.S.</a></div><div style={{ fontSize: 13, color: 'var(--ink-3)' }}>Lead Bio-Systems Analyst · Updated May 2026 · 16 min read</div></div></div>
    <div className="blog-content" style={{ fontSize: 18, lineHeight: 1.7, color: 'var(--ink-2)' }}>
      <Image src="/assets/glp1-fatty-liver-featured.png" alt="Liver before and after GLP-1 treatment" width={1024} height={1024} style={{ width: '100%', borderRadius: 16, marginBottom: 40, border: '1px solid var(--line-soft)', height: "auto"}} priority={true} />
      <p>100 million Americans have non-alcoholic fatty liver disease (NAFLD). Until recently, the only treatment was {"'"}lose weight.{"'"} Now, GLP-1 medications are showing the most promising liver-specific results of any pharmaceutical intervention — <strong>semaglutide resolved MASH (the inflammatory form) in 59% of patients</strong> in clinical trials.</p>
      <h2 className="serif" style={{ fontSize: 32, marginTop: 48, marginBottom: 24, color: 'var(--ink)' }}>The Evidence</h2>
      <ul>
        <li style={{ marginBottom: 12 }}><strong>59% MASH resolution:</strong> Semaglutide 2.4 mg resolved steatohepatitis without worsening fibrosis in the phase 2 trial (Newsome et al., NEJM 2021).</li>
        <li style={{ marginBottom: 12 }}><strong>ALT/AST normalization:</strong> Liver enzyme levels normalized in 60–70% of patients, indicating reduced liver inflammation.</li>
        <li style={{ marginBottom: 12 }}><strong>Liver fat reduction:</strong> MRI-PDFF showed 50–70% reduction in liver fat content within 48 weeks.</li>
      </ul>
      <p>This adds to the growing list of {"'"}beyond weight loss{"'"} benefits alongside <a href="/blog/glp-1-and-your-heart-the-select-trial-cardiovascul" style={{ color: 'var(--brand)', fontWeight: 500 }}>cardiovascular protection</a> and <a href="/blog/glp1-kidney-health-2026" style={{ color: 'var(--brand)', fontWeight: 500 }}>kidney benefits</a>.</p>
      <div className="card" style={{ padding: 40, margin: '48px 0', textAlign: 'center', background: '#FFFDF9', borderColor: 'var(--brand)' }}>
        <h3 className="serif" style={{ fontSize: 28, marginBottom: 16, color: 'var(--ink)' }}>Weight Loss + Liver Healing. One Medication.</h3>
        <p style={{ marginBottom: 24, fontSize: 16 }}>GLP-1 addresses NAFLD at the root — by reducing visceral fat and hepatic insulin resistance simultaneously.</p>
        <a href={S} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-lg" style={{ display: 'inline-flex', justifyContent: 'center' }}>Start Your Evaluation <Icon.Arrow /></a>
      </div>
      <div style={{ padding: 40, marginTop: 60, borderRadius: 20, background: 'var(--ink)', color: '#FBF8F3', textAlign: 'center' }}>
        <h2 className="serif" style={{ fontSize: 40, marginBottom: 20, color: '#FBF8F3' }}>59% MASH Resolution. The Data Speaks.</h2>
        <p style={{ fontSize: 18, opacity: 0.9, marginBottom: 32, maxWidth: 500, margin: '0 auto 32px' }}>From $199/month. Clinician-guided. No insurance required.</p>
        <a href={S} target="_blank" rel="noopener noreferrer" className="btn btn-lg" style={{ background: '#FBF8F3', color: 'var(--ink)', display: 'inline-flex', justifyContent: 'center', width: '100%', maxWidth: 250 }}>Get Started <Icon.Arrow /></a>
      </div>
      <div style={{ marginTop: 80, paddingTop: 40, borderTop: '1px solid var(--line-soft)', fontSize: 14, color: 'var(--ink-3)' }}><h3 className="serif" style={{ fontSize: 24, marginBottom: 24, color: 'var(--ink)' }}>References</h3><ol style={{ paddingLeft: 20, display: 'flex', flexDirection: 'column', gap: 16 }}><li>Newsome, P. N., et al. (2021). Semaglutide in NASH. <em>NEJM</em>, 384(12), 1113–1124.</li></ol></div>
    </div>
  </div></section></>);
}
export { BlogGLP1FattyLiver };
