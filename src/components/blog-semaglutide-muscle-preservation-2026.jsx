"use client";
import React from 'react';
import Image from 'next/image';
import { Icon } from './common.jsx';
const START_URL = "https://go.telehealthfx.com/start";

function BlogSemaglutideMusclePreservation() {
  return (<><section className="section" style={{ minHeight: '60vh', paddingTop: 120 }}><div className="container" style={{ maxWidth: 800 }}>
    <div className="eyebrow" style={{ marginBottom: 20 }}>Body Composition</div>
    <h1 className="serif" style={{ fontSize: 52, marginBottom: 24, lineHeight: 1.08 }}>Semaglutide and Muscle Preservation: <span style={{ fontStyle: 'italic', color: 'var(--brand)' }}>The Complete Protein & Resistance Training Protocol</span></h1>
    <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 48, paddingBottom: 24, borderBottom: '1px solid var(--line-soft)' }}><div style={{ width: 40, height: 40, borderRadius: '50%', background: 'var(--brand)' }}><Image src="/assets/jm-profile.jpg" alt="Julian Mercer" width={1024} height={1024} style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%', height: "auto"}} priority={true} /></div><div><div style={{ fontWeight: 500, fontSize: 14 }}><a href="/about" style={{ color: "var(--ink)", textDecoration: "none" }}>Julian Mercer, M.S.</a></div><div style={{ fontSize: 13, color: 'var(--ink-3)' }}>Lead Bio-Systems Analyst · Updated May 2026 · 20 min read</div></div></div>
    <div className="blog-content" style={{ fontSize: 18, lineHeight: 1.7, color: 'var(--ink-2)' }}>
      <Image src="/assets/semaglutide-muscle-preservation-featured.png" alt="Muscle fiber visualization with protein synthesis" width={1024} height={1024} style={{ width: '100%', borderRadius: 16, marginBottom: 40, border: '1px solid var(--line-soft)', height: "auto"}} priority={true} />
      <p>Here is the uncomfortable truth about GLP-1 weight loss: approximately <strong>25–40% of the weight you lose is lean mass</strong> (muscle, bone, water) — not fat. In the STEP 1 trial, semaglutide patients lost an average of 14.9% of body weight, but DXA scans revealed that ~39% of that loss was lean mass. For a 250-pound patient losing 37 pounds, that means roughly 14 pounds of muscle lost alongside 23 pounds of fat. This is preventable — but only with a deliberate, evidence-based protocol executed from day one.</p>

      <h2 className="serif" style={{ fontSize: 32, marginTop: 48, marginBottom: 24, color: 'var(--ink)' }}>Lean Mass Loss by Treatment: The Data</h2>
      <div style={{ overflowX: 'auto', margin: '24px 0' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 15 }}>
          <thead><tr style={{ borderBottom: '2px solid var(--ink)' }}><th style={{ textAlign: 'left', padding: '12px 16px', fontWeight: 600 }}>Treatment</th><th style={{ textAlign: 'left', padding: '12px 16px', fontWeight: 600 }}>Total Weight Loss</th><th style={{ textAlign: 'left', padding: '12px 16px', fontWeight: 600 }}>Fat Mass Lost</th><th style={{ textAlign: 'left', padding: '12px 16px', fontWeight: 600 }}>Lean Mass Lost</th><th style={{ textAlign: 'left', padding: '12px 16px', fontWeight: 600 }}>Lean % of Total</th></tr></thead>
          <tbody>
            <tr style={{ borderBottom: '1px solid var(--line-soft)' }}><td style={{ padding: '12px 16px', fontWeight: 500 }}>Caloric restriction alone</td><td style={{ padding: '12px 16px' }}>5–10%</td><td style={{ padding: '12px 16px' }}>60–65%</td><td style={{ padding: '12px 16px', color: '#c00' }}>35–40%</td><td style={{ padding: '12px 16px', color: '#c00', fontWeight: 600 }}>~37%</td></tr>
            <tr style={{ borderBottom: '1px solid var(--line-soft)' }}><td style={{ padding: '12px 16px', fontWeight: 500 }}>Semaglutide (no exercise)</td><td style={{ padding: '12px 16px' }}>14.9%</td><td style={{ padding: '12px 16px' }}>61%</td><td style={{ padding: '12px 16px', color: '#c00' }}>39%</td><td style={{ padding: '12px 16px', color: '#c00', fontWeight: 600 }}>~39%</td></tr>
            <tr style={{ borderBottom: '1px solid var(--line-soft)' }}><td style={{ padding: '12px 16px', fontWeight: 500 }}>Tirzepatide (no exercise)</td><td style={{ padding: '12px 16px' }}>22.5%</td><td style={{ padding: '12px 16px' }}>~67%</td><td style={{ padding: '12px 16px', color: '#e67700' }}>~33%</td><td style={{ padding: '12px 16px', color: '#e67700', fontWeight: 600 }}>~33%</td></tr>
            <tr style={{ background: '#F0FDF4' }}><td style={{ padding: '12px 16px', fontWeight: 700 }}>GLP-1 + protein + resistance</td><td style={{ padding: '12px 16px' }}>12–18%</td><td style={{ padding: '12px 16px', color: 'green', fontWeight: 700 }}>~80%</td><td style={{ padding: '12px 16px', color: 'green', fontWeight: 700 }}>~20%</td><td style={{ padding: '12px 16px', color: 'green', fontWeight: 700 }}>~20%</td></tr>
          </tbody>
        </table>
      </div>
      <p>The bottom row is the goal. With proper nutrition and resistance training, lean mass loss can be reduced from ~39% to ~20% of total weight loss — cutting muscle loss in half. For an in-depth analysis of the risk, see our <a href="/blog/glp-1-muscle-loss-the-hidden-risk-nobodys-talking" style={{ color: 'var(--brand)', fontWeight: 500 }}>muscle loss deep dive</a>.</p>

      <h2 className="serif" style={{ fontSize: 32, marginTop: 48, marginBottom: 24, color: 'var(--ink)' }}>Pillar 1: The Protein Protocol</h2>
      <p>Protein is the single most important dietary factor for muscle preservation during GLP-1 therapy. Here is the evidence-based protocol:</p>
      <ul>
        <li style={{ marginBottom: 16 }}><strong>Target:</strong> 1.0–1.2g protein per pound of <em>target</em> body weight per day. For a 250-pound patient targeting 180 pounds: 180–216g protein daily.</li>
        <li style={{ marginBottom: 16 }}><strong>Distribution:</strong> Spread across 3–4 meals, minimum 30g per meal. Protein synthesis maxes out per meal — eating 100g in one sitting wastes amino acids. See our <a href="/blog/glp-1-food-guide-what-to-eat" style={{ color: 'var(--brand)', fontWeight: 500 }}>food guide</a> for protein-first meal planning.</li>
        <li style={{ marginBottom: 16 }}><strong>Leucine threshold:</strong> Each meal should contain 2.5–3g of leucine (the amino acid that triggers muscle protein synthesis). High-leucine sources: whey protein, chicken, eggs, Greek yogurt, beef.</li>
        <li style={{ marginBottom: 16 }}><strong>Supplementation:</strong> GLP-1 suppresses appetite dramatically — getting 180+ grams of protein from whole food alone is often impossible. Whey protein isolate (25–30g per shake, 1–2 shakes daily) is the most practical supplement.</li>
        <li style={{ marginBottom: 16 }}><strong>Timing:</strong> Consume 30–40g protein within 2 hours of resistance training. Pre-bed protein (casein or cottage cheese) provides sustained amino acid release during overnight fasting.</li>
      </ul>

      <h2 className="serif" style={{ fontSize: 32, marginTop: 48, marginBottom: 24, color: 'var(--ink)' }}>Pillar 2: The Resistance Training Protocol</h2>
      <p>Cardiovascular exercise is important for health, but <strong>resistance training is non-negotiable for muscle preservation</strong>. Walking alone will not protect your lean mass. Here is the minimum effective protocol:</p>
      <ul>
        <li style={{ marginBottom: 12 }}><strong>Frequency:</strong> 3 sessions per week (Monday/Wednesday/Friday is the classic split). 2 sessions is the absolute minimum.</li>
        <li style={{ marginBottom: 12 }}><strong>Exercise selection:</strong> Prioritize compound movements that work multiple muscle groups: squats (or leg press), deadlifts (or hip hinge), bench press, overhead press, rows, and pull-downs.</li>
        <li style={{ marginBottom: 12 }}><strong>Intensity:</strong> Work within 65–85% of your one-rep max, or RPE 7–9 (2–3 reps from failure). Light weights with high reps are insufficient to trigger the muscle protein synthesis signal.</li>
        <li style={{ marginBottom: 12 }}><strong>Volume:</strong> 10–15 working sets per muscle group per week. For beginners, start with 2–3 sets of 8–12 reps per exercise.</li>
        <li style={{ marginBottom: 12 }}><strong>Progressive overload:</strong> Increase weight or reps every 1–2 weeks. If you are lifting the same weight at the same reps after 4 weeks, the stimulus is insufficient.</li>
      </ul>
      <p>For the complete exercise framework, see our <a href="/blog/glp-1-and-exercise-how-to-combine-medication-with" style={{ color: 'var(--brand)', fontWeight: 500 }}>GLP-1 and exercise guide</a>. For seniors, our <a href="/blog/glp-1-for-seniors-weight-loss-after-60-safely-2026" style={{ color: 'var(--brand)', fontWeight: 500 }}>weight loss after 60 guide</a> modifies this protocol for safety.</p>

      <div className="card" style={{ padding: 40, margin: '48px 0', textAlign: 'center', background: '#FFFDF9', borderColor: 'var(--brand)' }}>
        <h3 className="serif" style={{ fontSize: 28, marginBottom: 16, color: 'var(--ink)' }}>Lose Fat. Keep Muscle. Clinician-Guided Protocol.</h3>
        <p style={{ marginBottom: 24, fontSize: 16 }}>Your TelehealthFX clinician monitors body composition, not just scale weight. From <a href="/blog/semaglutide-real-cost-2026" style={{ color: 'var(--brand)', fontWeight: 500 }}>$199/month</a>.</p>
        <a href={START_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-lg" style={{ display: 'inline-flex', justifyContent: 'center' }}>Start Your Evaluation <Icon.Arrow /></a>
      </div>

      <h2 className="serif" style={{ fontSize: 32, marginTop: 48, marginBottom: 24, color: 'var(--ink)' }}>Pillar 3: Monitoring and Adjustment</h2>
      <ul>
        <li style={{ marginBottom: 12 }}><strong>Body composition tracking:</strong> Scale weight is misleading. Use a body composition scale, waist measurements, or (ideally) DXA scan at baseline and every 3 months.</li>
        <li style={{ marginBottom: 12 }}><strong>Strength tracking:</strong> If your lifts are maintaining or increasing, your muscle is being preserved. If your strength drops significantly, increase protein and reduce your <a href="/blog/compounded-semaglutide-dosing-guide-2026" style={{ color: 'var(--brand)', fontWeight: 500 }}>GLP-1 dose</a> tempo.</li>
        <li style={{ marginBottom: 12 }}><strong>Metabolic rate:</strong> Excessive lean mass loss drops your BMR and creates <a href="/blog/glp-1-plateau-when-weight-loss-stalls-what-to-do-2" style={{ color: 'var(--brand)', fontWeight: 500 }}>plateaus</a>. Muscle preservation protects metabolic rate.</li>
        <li style={{ marginBottom: 12 }}><strong>Skin health:</strong> Muscle provides a structural scaffold underneath skin. Significant muscle loss alongside fat loss worsens <a href="/blog/ozempic-face-loose-skin-prevention-treatment-what" style={{ color: 'var(--brand)', fontWeight: 500 }}>loose skin outcomes</a>.</li>
      </ul>

      <h2 className="serif" style={{ fontSize: 32, marginTop: 48, marginBottom: 24, color: 'var(--ink)' }}>Frequently Asked Questions</h2>
      <h4 style={{ fontSize: 20, marginTop: 24, marginBottom: 8, color: 'var(--ink)' }}>Can creatine help preserve muscle on GLP-1?</h4>
      <p style={{ marginBottom: 24 }}>Yes. Creatine monohydrate (5g daily) is the most studied and effective supplement for muscle preservation and strength. It is safe, cheap, and has no negative interactions with GLP-1 medications. Highly recommended for all GLP-1 patients engaged in resistance training.</p>
      <h4 style={{ fontSize: 20, marginTop: 24, marginBottom: 8, color: 'var(--ink)' }}>Is tirzepatide better for muscle preservation than semaglutide?</h4>
      <p style={{ marginBottom: 24 }}>SURMOUNT data suggests tirzepatide may preserve slightly more lean mass proportionally (~33% lean loss vs. ~39% for semaglutide), possibly due to the GIP receptor{"'"}s direct effects on adipocytes. However, both drugs require the same protein and resistance training protocol. See our <a href="/blog/semaglutide-vs-tirzepatide-decision-2026" style={{ color: 'var(--brand)', fontWeight: 500 }}>decision guide</a>.</p>
      <h4 style={{ fontSize: 20, marginTop: 24, marginBottom: 8, color: 'var(--ink)' }}>How much protein is realistic when GLP-1 kills my appetite?</h4>
      <p style={{ marginBottom: 24 }}>This is the #1 challenge. GLP-1 suppresses appetite so effectively that many patients struggle to eat enough protein. Strategies: protein shakes (low volume, high protein), protein-first eating at every meal, Greek yogurt and cottage cheese as snacks, and pre-bed casein. If you genuinely cannot meet protein targets, discuss <a href="/blog/compounded-semaglutide-dosing-guide-2026" style={{ color: 'var(--brand)', fontWeight: 500 }}>dose titration</a> with your clinician — sometimes a slightly lower GLP-1 dose allows better nutritional compliance.</p>

      <div style={{ padding: 40, marginTop: 60, borderRadius: 20, background: 'var(--ink)', color: '#FBF8F3', textAlign: 'center' }}>
        <h2 className="serif" style={{ fontSize: 40, marginBottom: 20, color: '#FBF8F3' }}>The Goal Is Fat Loss, Not Weight Loss. Start With Protocol.</h2>
        <p style={{ fontSize: 18, opacity: 0.9, marginBottom: 32, maxWidth: 500, margin: '0 auto 32px' }}>Compounded semaglutide from $199/mo. Tirzepatide from $349/mo. Clinician-guided body composition monitoring.</p>
        <a href={START_URL} target="_blank" rel="noopener noreferrer" className="btn btn-lg" style={{ background: '#FBF8F3', color: 'var(--ink)', display: 'inline-flex', justifyContent: 'center', width: '100%', maxWidth: 250 }}>Get Started <Icon.Arrow /></a>
      </div>
      <div style={{ marginTop: 80, paddingTop: 40, borderTop: '1px solid var(--line-soft)', fontSize: 14, color: 'var(--ink-3)' }}>
        <h3 className="serif" style={{ fontSize: 24, marginBottom: 24, color: 'var(--ink)' }}>References</h3>
        <ol style={{ paddingLeft: 20, display: 'flex', flexDirection: 'column', gap: 16 }}>
          <li>Wilding, J. P. H., et al. (2021). Once-weekly semaglutide in adults with overweight or obesity — body composition sub-analysis (STEP 1). <em>NEJM</em>, 384(11), 989–1002.</li>
          <li>Heymsfield, S. B., et al. (2023). Mechanisms, pathophysiology, and management of obesity. <em>NEJM</em>, 386(22), 2092–2103.</li>
          <li>Morton, R. W., et al. (2018). A systematic review and meta-analysis of protein supplementation during resistance training. <em>British Journal of Sports Medicine</em>, 52(6), 376–384.</li>
        </ol>
      </div>
    </div>
  </div></section></>);
}
export { BlogSemaglutideMusclePreservation };
