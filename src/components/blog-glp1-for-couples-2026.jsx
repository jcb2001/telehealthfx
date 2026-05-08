"use client";
import React from 'react';
import Image from 'next/image';
import { Icon } from './common.jsx';
const START_URL = "https://go.telehealthfx.com/start";

function BlogGLP1ForCouples() {
  return (<><section className="section" style={{ minHeight: '60vh', paddingTop: 120 }}><div className="container" style={{ maxWidth: 800 }}>
    <div className="eyebrow" style={{ marginBottom: 20 }}>Couples</div>
    <h1 className="serif" style={{ fontSize: 52, marginBottom: 24, lineHeight: 1.08 }}>GLP-1 for Couples: <span style={{ fontStyle: 'italic', color: 'var(--brand)' }}>Can You and Your Partner Lose Weight Together on Semaglutide?</span></h1>
    <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 48, paddingBottom: 24, borderBottom: '1px solid var(--line-soft)' }}><div style={{ width: 40, height: 40, borderRadius: '50%', background: 'var(--brand)' }}><Image src="/assets/jm-profile.jpg" alt="Julian Mercer" width={1024} height={1024} style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%', height: "auto"}} priority={true} /></div><div><div style={{ fontWeight: 500, fontSize: 14 }}><a href="/about" style={{ color: "var(--ink)", textDecoration: "none" }}>Julian Mercer, M.S.</a></div><div style={{ fontSize: 13, color: 'var(--ink-3)' }}>Lead Bio-Systems Analyst · Updated May 2026 · 12 min read</div></div></div>
    <div className="blog-content" style={{ fontSize: 18, lineHeight: 1.7, color: 'var(--ink-2)' }}>
      <Image src="/assets/glp1-for-couples-featured.png" alt="Couple preparing healthy food together" width={1024} height={1024} style={{ width: '100%', borderRadius: 16, marginBottom: 40, border: '1px solid var(--line-soft)', background: '#111', height: "auto"}} priority={true} />
      <p>Research consistently shows that couples who pursue weight loss together are <strong>significantly more likely to succeed</strong>. A 2018 study in <em>Obesity</em> found that when one partner lost weight, the other lost an average of 5% body weight without any formal intervention. When both partners are on GLP-1 medication, the results compound.</p>
      <h2 className="serif" style={{ fontSize: 32, marginTop: 48, marginBottom: 24, color: 'var(--ink)' }}>Can Both Partners Qualify?</h2>
      <p>Each partner undergoes their own clinical evaluation. Eligibility is individual — BMI 30+ or BMI 27+ with a weight-related condition. It is common for both partners to qualify. See our <a href="/blog/glp-1-bmi-27-30-eligibility-2026" style={{ color: 'var(--brand)', fontWeight: 500 }}>eligibility guide</a>.</p>
      <h2 className="serif" style={{ fontSize: 32, marginTop: 48, marginBottom: 24, color: 'var(--ink)' }}>Different Bodies, Different Dosing</h2>
      <p>Your clinician prescribes individually. One partner may start on semaglutide, the other on tirzepatide. Dosing, escalation schedules, and medication choices are independent. See our <a href="/blog/semaglutide-vs-tirzepatide-decision-2026" style={{ color: 'var(--brand)', fontWeight: 500 }}>decision guide</a> for how your clinician chooses.</p>
      <h2 className="serif" style={{ fontSize: 32, marginTop: 48, marginBottom: 24, color: 'var(--ink)' }}>The Practical Advantages</h2>
      <ul>
        <li style={{ marginBottom: 12 }}><strong>Shared meal planning:</strong> Both partners eating the same <a href="/blog/glp-1-food-guide-what-to-eat" style={{ color: 'var(--brand)', fontWeight: 500 }}>GLP-1 friendly meals</a></li>
        <li style={{ marginBottom: 12 }}><strong>Injection day accountability:</strong> Same weekly schedule, reminding each other</li>
        <li style={{ marginBottom: 12 }}><strong>Reduced food temptation:</strong> No partner eating trigger foods at home</li>
        <li style={{ marginBottom: 12 }}><strong>Shared <a href="/blog/glp-1-and-exercise-how-to-combine-medication-with" style={{ color: 'var(--brand)', fontWeight: 500 }}>exercise routines</a>:</strong> Walking, gym, or movement together</li>
      </ul>
      <div className="card" style={{ padding: 40, margin: '48px 0', textAlign: 'center', background: '#FFFDF9', borderColor: 'var(--brand)' }}>
        <h3 className="serif" style={{ fontSize: 28, marginBottom: 16, color: 'var(--ink)' }}>Two Evaluations. One Household. Twice the Results.</h3>
        <p style={{ marginBottom: 24, fontSize: 16 }}>Each partner gets their own clinical evaluation and personalized treatment plan.</p>
        <a href={START_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-lg" style={{ display: 'inline-flex', justifyContent: 'center' }}>Start Together <Icon.Arrow /></a>
      </div>
      <div style={{ padding: 40, marginTop: 60, borderRadius: 20, background: 'var(--ink)', color: '#FBF8F3', textAlign: 'center' }}>
        <h2 className="serif" style={{ fontSize: 40, marginBottom: 20, color: '#FBF8F3' }}>Better Together.</h2>
        <p style={{ fontSize: 18, opacity: 0.9, marginBottom: 32, maxWidth: 500, margin: '0 auto 32px' }}>Compounded semaglutide from $199/mo per person. Tirzepatide from $349/mo.</p>
        <a href={START_URL} target="_blank" rel="noopener noreferrer" className="btn btn-lg" style={{ background: '#FBF8F3', color: 'var(--ink)', display: 'inline-flex', justifyContent: 'center', width: '100%', maxWidth: 250 }}>Get Started <Icon.Arrow /></a>
      </div>
    </div>
  </div></section></>);
}
export { BlogGLP1ForCouples };
