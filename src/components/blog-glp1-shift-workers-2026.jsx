"use client";
import React from 'react';
import Image from 'next/image';
import { Icon } from './common.jsx';
const START_URL = "https://go.telehealthfx.com/start";

function BlogGLP1ShiftWorkers() {
  return (<><section className="section" style={{ minHeight: '60vh', paddingTop: 120 }}><div className="container" style={{ maxWidth: 800 }}>
    <div className="eyebrow" style={{ marginBottom: 20 }}>For Professionals</div>
    <h1 className="serif" style={{ fontSize: 52, marginBottom: 24, lineHeight: 1.08 }}>GLP-1 for Nurses, Teachers &amp; Shift Workers: <span style={{ fontStyle: 'italic', color: 'var(--brand)' }}>Managing Medication on Irregular Schedules</span></h1>
    <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 48, paddingBottom: 24, borderBottom: '1px solid var(--line-soft)' }}><div style={{ width: 40, height: 40, borderRadius: '50%', background: 'var(--brand)' }}><Image src="/assets/jm-profile.jpg" alt="Julian Mercer" width={1024} height={1024} style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%', height: "auto"}} priority={true} /></div><div><div style={{ fontWeight: 500, fontSize: 14 }}><a href="/about" style={{ color: "var(--ink)", textDecoration: "none" }}>Julian Mercer, M.S.</a></div><div style={{ fontSize: 13, color: 'var(--ink-3)' }}>Lead Bio-Systems Analyst · Updated May 2026 · 14 min read</div></div></div>
    <div className="blog-content" style={{ fontSize: 18, lineHeight: 1.7, color: 'var(--ink-2)' }}>
      <Image src="/assets/glp1-shift-workers-featured.png" alt="Nurse at hospital station with healthy meal prep and medication" width={1024} height={1024} style={{ width: '100%', borderRadius: 16, marginBottom: 40, border: '1px solid var(--line-soft)', background: '#111', height: "auto"}} priority={true} />
      <p>You work 12-hour night shifts. Or you teach 6 classes, eat lunch in 8 minutes, and collapse at home. You do not have time for a doctor{"'"}s office, a meal plan that requires 2 hours of prep, or a schedule that demands consistency you cannot provide. That is exactly why telehealth GLP-1 was designed for you.</p>
      <h2 className="serif" style={{ fontSize: 32, marginTop: 48, marginBottom: 24, color: 'var(--ink)' }}>Why Shift Workers Struggle With Traditional Weight Loss</h2>
      <ul>
        <li style={{ marginBottom: 12 }}><strong>Disrupted circadian rhythm</strong> increases cortisol, insulin resistance, and hunger hormones — shift workers have 29% higher obesity rates</li>
        <li style={{ marginBottom: 12 }}><strong>Irregular meal timing</strong> makes calorie counting and meal planning impractical</li>
        <li style={{ marginBottom: 12 }}><strong>Stress eating</strong> — high-stress professions trigger <a href="/blog/glp1-emotional-eating-food-addiction-2026" style={{ color: 'var(--brand)', fontWeight: 500 }}>emotional eating patterns</a></li>
        <li style={{ marginBottom: 12 }}><strong>No time for appointments</strong> — you cannot take time off for a weight loss clinic visit</li>
      </ul>
      <h2 className="serif" style={{ fontSize: 32, marginTop: 48, marginBottom: 24, color: 'var(--ink)' }}>GLP-1 Solves the Schedule Problem</h2>
      <ul>
        <li style={{ marginBottom: 12 }}><strong>Once-weekly injection:</strong> Pick any day. Not time-sensitive. Works with rotating schedules.</li>
        <li style={{ marginBottom: 12 }}><strong>No meal timing requirements:</strong> Unlike oral medications, injectable GLP-1 has no fasting requirements</li>
        <li style={{ marginBottom: 12 }}><strong>Appetite regulation works 24/7:</strong> Whether you{"'"}re on day shift or night shift, GLP-1 reduces hunger hormones continuously</li>
        <li style={{ marginBottom: 12 }}><strong>Telehealth = no time off work:</strong> <a href="/blog/semaglutide-prescribed-24-hours-2026" style={{ color: 'var(--brand)', fontWeight: 500 }}>5-minute online intake</a>. No appointment. No waiting room.</li>
      </ul>
      <h2 className="serif" style={{ fontSize: 32, marginTop: 48, marginBottom: 24, color: 'var(--ink)' }}>Practical Tips for Irregular Schedules</h2>
      <ul>
        <li style={{ marginBottom: 12 }}><strong>Pick injection day by your off-day:</strong> If you work Mon-Wed, inject Thursday morning. Any mild <a href="/blog/tirzepatide-side-effects-2026" style={{ color: 'var(--brand)', fontWeight: 500 }}>side effects</a> resolve before your shift.</li>
        <li style={{ marginBottom: 12 }}><strong>Prep high-protein meals:</strong> Follow our <a href="/blog/glp-1-food-guide-what-to-eat" style={{ color: 'var(--brand)', fontWeight: 500 }}>food guide</a> with batch-cook meals you can eat cold if needed</li>
        <li style={{ marginBottom: 12 }}><strong>Store medication at work:</strong> Semaglutide can be kept at room temp for up to 28 days after first use</li>
      </ul>
      <div className="card" style={{ padding: 40, margin: '48px 0', textAlign: 'center', background: '#FFFDF9', borderColor: 'var(--brand)' }}>
        <h3 className="serif" style={{ fontSize: 28, marginBottom: 16, color: 'var(--ink)' }}>Designed for People Who Can{"'"}t Take Time Off</h3>
        <p style={{ marginBottom: 24, fontSize: 16 }}>5-minute online intake. No appointment. Medication shipped to your door. Clinician messaging anytime.</p>
        <a href={START_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-lg" style={{ display: 'inline-flex', justifyContent: 'center' }}>Start Your Intake <Icon.Arrow /></a>
      </div>
      <div style={{ padding: 40, marginTop: 60, borderRadius: 20, background: 'var(--ink)', color: '#FBF8F3', textAlign: 'center' }}>
        <h2 className="serif" style={{ fontSize: 40, marginBottom: 20, color: '#FBF8F3' }}>Your Schedule Is Irregular. Your Results Don{"'"}t Have to Be.</h2>
        <p style={{ fontSize: 18, opacity: 0.9, marginBottom: 32, maxWidth: 500, margin: '0 auto 32px' }}>Compounded semaglutide from $199/mo. Once weekly. No appointments.</p>
        <a href={START_URL} target="_blank" rel="noopener noreferrer" className="btn btn-lg" style={{ background: '#FBF8F3', color: 'var(--ink)', display: 'inline-flex', justifyContent: 'center', width: '100%', maxWidth: 250 }}>Get Started <Icon.Arrow /></a>
      </div>
    </div>
  </div></section></>);
}
export { BlogGLP1ShiftWorkers };
