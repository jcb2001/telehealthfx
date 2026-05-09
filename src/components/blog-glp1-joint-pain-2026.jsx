"use client";
import React from 'react';
import Image from 'next/image';
import { Icon } from './common.jsx';
const S = "https://go.telehealthfx.com/start";
function BlogGLP1JointPain() {
  return (<><section className="section" style={{ minHeight: '60vh', paddingTop: 120 }}><div className="container" style={{ maxWidth: 800 }}>
    <div className="eyebrow" style={{ marginBottom: 20 }}>Joint Health</div>
    <h1 className="serif" style={{ fontSize: 52, marginBottom: 24, lineHeight: 1.08 }}>GLP-1 and Joint Pain: <span style={{ fontStyle: 'italic', color: 'var(--brand)' }}>How Weight Loss Medication Restores Mobility</span></h1>
    <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 48, paddingBottom: 24, borderBottom: '1px solid var(--line-soft)' }}><div style={{ width: 40, height: 40, borderRadius: '50%', background: 'var(--brand)' }}><Image src="/assets/jm-profile.jpg" alt="Julian Mercer" width={1024} height={1024} style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%', height: "auto"}} priority={true} /></div><div><div style={{ fontWeight: 500, fontSize: 14 }}><a href="/about" style={{ color: "var(--ink)", textDecoration: "none" }}>Julian Mercer, M.S.</a></div><div style={{ fontSize: 13, color: 'var(--ink-3)' }}>Lead Bio-Systems Analyst · Updated May 2026 · 12 min read</div></div></div>
    <div className="blog-content" style={{ fontSize: 18, lineHeight: 1.7, color: 'var(--ink-2)' }}>
      <Image src="/assets/glp1-joint-pain-mobility-featured.png" alt="Person walking freely with knee X-ray overlay" width={1024} height={1024} style={{ width: '100%', borderRadius: 16, marginBottom: 40, border: '1px solid var(--line-soft)', height: "auto"}} priority={true} />
      <p>Every pound of body weight puts <strong>4 pounds of pressure on your knees</strong>. Losing 50 pounds on tirzepatide removes 200 pounds of force from your knees with every step. Add GLP-1{"'"}s direct <a href="/blog/glp-1-and-inflammation-arthritis-sleep-apnea-chron" style={{ color: 'var(--brand)', fontWeight: 500 }}>anti-inflammatory effects</a>, and the impact on joint health is transformative.</p>
      <h2 className="serif" style={{ fontSize: 32, marginTop: 48, marginBottom: 24, color: 'var(--ink)' }}>The Dual Mechanism</h2>
      <ul>
        <li style={{ marginBottom: 12 }}><strong>Mechanical relief:</strong> Reduced body weight directly reduces joint loading. 10% weight loss reduces knee osteoarthritis symptoms by 28%.</li>
        <li style={{ marginBottom: 12 }}><strong>Anti-inflammatory:</strong> GLP-1 reduces systemic CRP and IL-6 — inflammatory markers that drive cartilage degradation.</li>
        <li style={{ marginBottom: 12 }}><strong>Mobility cascade:</strong> Less pain → more <a href="/blog/glp-1-and-exercise-how-to-combine-medication-with" style={{ color: 'var(--brand)', fontWeight: 500 }}>exercise</a> → more weight loss → even less pain.</li>
      </ul>
      <div className="card" style={{ padding: 40, margin: '48px 0', textAlign: 'center', background: '#FFFDF9', borderColor: 'var(--brand)' }}>
        <h3 className="serif" style={{ fontSize: 28, marginBottom: 16, color: 'var(--ink)' }}>Move Without Pain Again.</h3>
        <p style={{ marginBottom: 24, fontSize: 16 }}>50 lbs lost = 200 lbs less pressure on your knees. From $199/month.</p>
        <a href={S} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-lg" style={{ display: 'inline-flex', justifyContent: 'center' }}>Start Your Evaluation <Icon.Arrow /></a>
      </div>
      <div style={{ padding: 40, marginTop: 60, borderRadius: 20, background: 'var(--ink)', color: '#FBF8F3', textAlign: 'center' }}>
        <h2 className="serif" style={{ fontSize: 40, marginBottom: 20, color: '#FBF8F3' }}>Your Knees Will Thank You.</h2>
        <p style={{ fontSize: 18, opacity: 0.9, marginBottom: 32, maxWidth: 500, margin: '0 auto 32px' }}>Compounded GLP-1 from $199/mo. Month-to-month. Clinician-guided.</p>
        <a href={S} target="_blank" rel="noopener noreferrer" className="btn btn-lg" style={{ background: '#FBF8F3', color: 'var(--ink)', display: 'inline-flex', justifyContent: 'center', width: '100%', maxWidth: 250 }}>Get Started <Icon.Arrow /></a>
      </div>
    </div>
  </div></section></>);
}
export { BlogGLP1JointPain };
