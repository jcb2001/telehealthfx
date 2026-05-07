"use client";
import React from 'react';
import Image from 'next/image';
import { Icon } from './common.jsx';
const START_URL = "https://go.telehealthfx.com/start";

function BlogFirstWeekSemaglutide() {
  return (<><section className="section" style={{ minHeight: '60vh', paddingTop: 120 }}><div className="container" style={{ maxWidth: 800 }}>
    <div className="eyebrow" style={{ marginBottom: 20 }}>Getting Started</div>
    <h1 className="serif" style={{ fontSize: 52, marginBottom: 24, lineHeight: 1.08 }}>Your First Week on Semaglutide: <span style={{ fontStyle: 'italic', color: 'var(--brand)' }}>A Day-by-Day Guide to What Actually Happens</span></h1>
    <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 48, paddingBottom: 24, borderBottom: '1px solid var(--line-soft)' }}><div style={{ width: 40, height: 40, borderRadius: '50%', background: 'var(--brand)' }}><Image src="/assets/jm-profile.jpg" alt="Julian Mercer" width={1024} height={1024} style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%', height: "auto"}} priority={true} /></div><div><div style={{ fontWeight: 500, fontSize: 14 }}><a href="/about" style={{ color: "var(--ink)", textDecoration: "none" }}>Julian Mercer, M.S.</a></div><div style={{ fontSize: 13, color: 'var(--ink-3)' }}>Lead Bio-Systems Analyst · Updated May 2026 · 16 min read</div></div></div>
    <div className="blog-content" style={{ fontSize: 18, lineHeight: 1.7, color: 'var(--ink-2)' }}>
      <Image src="/assets/first-week-semaglutide-featured.png" alt="Week 1 calendar with semaglutide pen and wellness items" width={1024} height={1024} style={{ width: '100%', borderRadius: 16, marginBottom: 40, border: '1px solid var(--line-soft)', background: '#111', height: "auto"}} priority={true} />

      <p>You just got prescribed semaglutide. The pen is in the fridge. You have questions. <em>When do I inject? Will I feel nauseous? How fast will it work? What should I eat?</em> This is the no-fluff, day-by-day guide based on real patient timelines and clinical data.</p>

      <h2 className="serif" style={{ fontSize: 32, marginTop: 48, marginBottom: 24, color: 'var(--ink)' }}>Day 1: Injection Day</h2>
      <p><strong>Your starting dose is 0.25 mg</strong> — this is a sub-therapeutic "onboarding" dose designed to let your body acclimate. It will not produce significant weight loss on its own. That is intentional.</p>
      <ul>
        <li style={{ marginBottom: 8 }}><strong>Where to inject:</strong> Abdomen, thigh, or upper arm. Rotate sites each week.</li>
        <li style={{ marginBottom: 8 }}><strong>When to inject:</strong> Any time of day. <a href="/blog/best-time-inject-semaglutide-2026" style={{ color: 'var(--brand)', fontWeight: 500 }}>Timing doesn{"'"}t matter clinically</a> — just pick a consistent day.</li>
        <li style={{ marginBottom: 8 }}><strong>Pain level:</strong> Minimal. The needle is 31-gauge (thinner than an acupuncture needle). Most patients describe it as a brief pinch.</li>
        <li style={{ marginBottom: 8 }}><strong>What you feel:</strong> Usually nothing for the first 6–12 hours.</li>
      </ul>

      <h2 className="serif" style={{ fontSize: 32, marginTop: 48, marginBottom: 24, color: 'var(--ink)' }}>Days 2–3: First Effects</h2>
      <p>This is when GLP-1{"'"}s appetite suppression starts to manifest:</p>
      <ul>
        <li style={{ marginBottom: 8 }}><strong>Appetite change:</strong> You may notice you are not thinking about food as much. The "food noise" — that constant background hum of cravings — starts to quiet. This is the <a href="/blog/glp1-emotional-eating-food-addiction-2026" style={{ color: 'var(--brand)', fontWeight: 500 }}>neurological effect</a> kicking in.</li>
        <li style={{ marginBottom: 8 }}><strong>Mild nausea:</strong> ~20% of patients experience mild nausea in the first 48 hours. It is usually manageable. Eat small, bland meals. Stay hydrated. See our <a href="/blog/glp-1-side-effects-how-to-manage-nausea-fatigue-mo" style={{ color: 'var(--brand)', fontWeight: 500 }}>side effects management guide</a>.</li>
        <li style={{ marginBottom: 8 }}><strong>Fullness:</strong> You may feel full faster at meals. This is GLP-1 slowing gastric emptying — exactly what it is designed to do.</li>
      </ul>

      <h2 className="serif" style={{ fontSize: 32, marginTop: 48, marginBottom: 24, color: 'var(--ink)' }}>Days 4–5: Settling In</h2>
      <ul>
        <li style={{ marginBottom: 8 }}>Nausea (if present) usually peaks day 2–3 and improves by day 4</li>
        <li style={{ marginBottom: 8 }}>Appetite suppression stabilizes — you eat smaller portions naturally</li>
        <li style={{ marginBottom: 8 }}>Energy levels may feel different — some patients report slight fatigue (eating less = fewer calories), others feel more energetic (less post-meal sluggishness)</li>
        <li style={{ marginBottom: 8 }}>Focus on <a href="/blog/glp-1-food-guide-what-to-eat" style={{ color: 'var(--brand)', fontWeight: 500 }}>high-protein meals</a> — your body needs protein even though your appetite is reduced</li>
      </ul>

      <h2 className="serif" style={{ fontSize: 32, marginTop: 48, marginBottom: 24, color: 'var(--ink)' }}>Days 6–7: Pre-Second Dose</h2>
      <ul>
        <li style={{ marginBottom: 8 }}>The first dose is wearing off — you may notice appetite returning slightly before your next injection. This is normal at 0.25 mg.</li>
        <li style={{ marginBottom: 8 }}>If you tolerated the first dose well, your clinician will keep you at 0.25 mg for 4 weeks before increasing to 0.5 mg.</li>
        <li style={{ marginBottom: 8 }}>Scale change: Do not expect it yet. Meaningful weight loss begins at 0.5–1.0 mg for most patients. The <a href="/blog/semaglutide-weight-loss-timeline-2026" style={{ color: 'var(--brand)', fontWeight: 500 }}>full timeline</a> typically shows 2–4 lbs in month 1 (at 0.25 mg).</li>
      </ul>

      <div className="card" style={{ padding: 40, margin: '48px 0', textAlign: 'center', background: '#FFFDF9', borderColor: 'var(--brand)' }}>
        <h3 className="serif" style={{ fontSize: 28, marginBottom: 16, color: 'var(--ink)' }}>Ready for Day 1?</h3>
        <p style={{ marginBottom: 24, fontSize: 16 }}>Complete your clinical intake today. Your TelehealthFX clinician walks you through injection technique, dose timing, and exactly what to eat in week 1.</p>
        <a href={START_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-lg" style={{ display: 'inline-flex', justifyContent: 'center' }}>Start Your Evaluation <Icon.Arrow /></a>
      </div>

      <h2 className="serif" style={{ fontSize: 32, marginTop: 48, marginBottom: 24, color: 'var(--ink)' }}>Week 1 Mistakes to Avoid</h2>
      <ol>
        <li style={{ marginBottom: 12 }}><strong>Eating too little.</strong> Appetite suppression does not mean you should skip meals. Your body needs 1,200+ calories minimum, with priority on protein (0.7–1.0g per lb of goal body weight). See our <a href="/blog/maximize-glp1-weight-loss-2026" style={{ color: 'var(--brand)', fontWeight: 500 }}>optimization guide</a>.</li>
        <li style={{ marginBottom: 12 }}><strong>Expecting dramatic results at 0.25 mg.</strong> This dose is about tolerability, not transformation. Patience here pays off at higher doses.</li>
        <li style={{ marginBottom: 12 }}><strong>Not drinking enough water.</strong> GLP-1 reduces thirst cues. Force 64+ oz daily. Dehydration worsens every side effect.</li>
        <li style={{ marginBottom: 12 }}><strong>Skipping the post-injection walk.</strong> Light movement (15-minute walk) after injection reduces injection-site discomfort and nausea.</li>
      </ol>

      <h2 className="serif" style={{ fontSize: 32, marginTop: 48, marginBottom: 24, color: 'var(--ink)' }}>Frequently Asked Questions</h2>
      <h4 style={{ fontSize: 20, marginTop: 24, marginBottom: 8, color: 'var(--ink)' }}>How much weight will I lose in the first week?</h4>
      <p style={{ marginBottom: 24 }}>At 0.25 mg, expect 0–2 lbs in week 1, mostly from reduced caloric intake. Significant weight loss (1–2 lbs/week) begins at 0.5–1.0 mg, typically weeks 5–8.</p>
      <h4 style={{ fontSize: 20, marginTop: 24, marginBottom: 8, color: 'var(--ink)' }}>What if I feel nothing after the first injection?</h4>
      <p style={{ marginBottom: 24 }}>Some patients feel minimal effects at 0.25 mg. This is normal and not a sign that the medication is not working. The dose will be increased at your next titration step.</p>

      <div style={{ padding: 40, marginTop: 60, borderRadius: 20, background: 'var(--ink)', color: '#FBF8F3', textAlign: 'center' }}>
        <h2 className="serif" style={{ fontSize: 40, marginBottom: 20, color: '#FBF8F3' }}>Week 1 Is the Start. We Walk You Through Every Step.</h2>
        <p style={{ fontSize: 18, opacity: 0.9, marginBottom: 32, maxWidth: 500, margin: '0 auto 32px' }}>Clinician-guided onboarding. No guessing. No Googling side effects at 2 AM.</p>
        <a href={START_URL} target="_blank" rel="noopener noreferrer" className="btn btn-lg" style={{ background: '#FBF8F3', color: 'var(--ink)', display: 'inline-flex', justifyContent: 'center', width: '100%', maxWidth: 250 }}>Start Now <Icon.Arrow /></a>
      </div>
      <div style={{ marginTop: 80, paddingTop: 40, borderTop: '1px solid var(--line-soft)', fontSize: 14, color: 'var(--ink-3)' }}>
        <h3 className="serif" style={{ fontSize: 24, marginBottom: 24, color: 'var(--ink)' }}>References</h3>
        <ol style={{ paddingLeft: 20, display: 'flex', flexDirection: 'column', gap: 16 }}>
          <li>Novo Nordisk. (2026). <em>Wegovy (semaglutide) prescribing information: dose titration schedule</em>.</li>
          <li>Wilding, J. P. H., et al. (2021). STEP 1: Once-weekly semaglutide in adults with overweight or obesity. <em>NEJM</em>, 384(11), 989–1002.</li>
        </ol>
      </div>
    </div>
  </div></section></>);
}
export { BlogFirstWeekSemaglutide };
