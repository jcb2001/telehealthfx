"use client";
import React from 'react';
import Image from 'next/image';
import { Icon } from './common.jsx';
const START_URL = "https://go.telehealthfx.com/start";

function BlogGLP1BMI2730() {
  return (<>
    <section className="section" style={{ minHeight: '60vh', paddingTop: 120 }}>
    <div className="container" style={{ maxWidth: 800 }}>
      <div className="eyebrow" style={{ marginBottom: 20 }}>Eligibility</div>
      <h1 className="serif" style={{ fontSize: 56, marginBottom: 24, lineHeight: 1.1 }}>GLP-1 for BMI 27–30: <span style={{ fontStyle: 'italic', color: 'var(--brand)' }}>Do You Qualify If You Are Not Clinically Obese?</span></h1>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 48, paddingBottom: 24, borderBottom: '1px solid var(--line-soft)' }}>
        <div style={{ width: 40, height: 40, borderRadius: '50%', background: 'var(--brand)' }}><Image src="/assets/jm-profile.jpg" alt="Julian Mercer" width={1024} height={1024} style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%', height: "auto"}} priority={true} /></div>
        <div><div style={{ fontWeight: 500, fontSize: 14 }}><a href="/about" style={{ color: "var(--ink)", textDecoration: "none" }}>Julian Mercer, M.S.</a></div><div style={{ fontSize: 13, color: 'var(--ink-3)' }}>Lead Bio-Systems Analyst · Updated May 2026 · 22 min read</div></div>
      </div>
      <div className="blog-content" style={{ fontSize: 18, lineHeight: 1.7, color: 'var(--ink-2)' }}>
        <Image src="/assets/glp1-bmi-27-30-featured.png" alt="Scale and measuring tape for BMI assessment with GLP-1 pen" width={1024} height={1024} style={{ width: '100%', borderRadius: 16, marginBottom: 40, border: '1px solid var(--line-soft)', background: '#111', height: "auto"}} priority={true} />

        <p>You know you are overweight. You have tried dieting, exercise programs, and lifestyle modifications. You want <a href="/blog/what-is-a-glp-1-medication" style={{ color: 'var(--brand)', fontWeight: 500 }}>GLP-1 medication</a> — but your BMI is between 27 and 30, which means you are classified as "overweight," not "obese." <strong>Does that mean you do not qualify?</strong></p>

        <p>The answer is nuanced. The FDA-approved label, the off-label clinical landscape, and the compounded medication pathway each have different eligibility criteria. This guide explains all three — and why more clinicians are prescribing GLP-1 therapy for patients in the BMI 27–30 range than ever before.</p>

        <h2 className="serif" style={{ fontSize: 32, marginTop: 48, marginBottom: 24, color: 'var(--ink)' }}>The Official FDA Eligibility Criteria</h2>
        <p>The FDA-approved labels for Wegovy (<a href="/medications/semaglutide" style={{ color: 'var(--brand)', fontWeight: 500 }}>semaglutide</a>) and Zepbound (<a href="/medications/tirzepatide" style={{ color: 'var(--brand)', fontWeight: 500 }}>tirzepatide</a>) specify:</p>
        <ul>
          <li style={{ marginBottom: 12 }}>✅ <strong>BMI ≥ 30</strong> (obesity) — qualifies without additional conditions</li>
          <li style={{ marginBottom: 12 }}>✅ <strong>BMI ≥ 27</strong> (overweight) with at least one weight-related comorbidity</li>
        </ul>

        <h3 style={{ fontSize: 24, marginTop: 32, marginBottom: 16, color: 'var(--ink)' }}>Qualifying Comorbidities for BMI 27–30</h3>
        <p>If your BMI is between 27 and 30, you qualify for FDA-approved GLP-1 therapy if you have <em>any one</em> of the following documented conditions:</p>
        <div style={{ overflowX: 'auto', margin: '24px 0' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 16 }}>
            <thead><tr style={{ borderBottom: '2px solid var(--ink)' }}><th style={{ textAlign: 'left', padding: '12px 16px', fontWeight: 600 }}>Condition</th><th style={{ textAlign: 'left', padding: '12px 16px', fontWeight: 600 }}>How Common</th></tr></thead>
            <tbody>
              <tr style={{ borderBottom: '1px solid var(--line-soft)' }}><td style={{ padding: '12px 16px' }}>Type 2 diabetes or prediabetes</td><td style={{ padding: '12px 16px' }}>~38% of US adults have prediabetes</td></tr>
              <tr style={{ borderBottom: '1px solid var(--line-soft)' }}><td style={{ padding: '12px 16px' }}>Hypertension (high blood pressure)</td><td style={{ padding: '12px 16px' }}>~47% of US adults</td></tr>
              <tr style={{ borderBottom: '1px solid var(--line-soft)' }}><td style={{ padding: '12px 16px' }}>Dyslipidemia (high cholesterol/triglycerides)</td><td style={{ padding: '12px 16px' }}>~53% of US adults</td></tr>
              <tr style={{ borderBottom: '1px solid var(--line-soft)' }}><td style={{ padding: '12px 16px' }}>Obstructive sleep apnea</td><td style={{ padding: '12px 16px' }}>~25% of overweight adults</td></tr>
              <tr style={{ borderBottom: '1px solid var(--line-soft)' }}><td style={{ padding: '12px 16px' }}>Cardiovascular disease</td><td style={{ padding: '12px 16px' }}>Leading cause of death in US</td></tr>
              <tr><td style={{ padding: '12px 16px' }}>PCOS (polycystic ovary syndrome)</td><td style={{ padding: '12px 16px' }}>~10% of reproductive-age women</td></tr>
            </tbody>
          </table>
        </div>
        <p>The reality: <strong>the vast majority of adults with a BMI of 27–30 have at least one of these conditions</strong> — many have several. Prediabetes alone affects 96 million American adults, most of whom are unaware they have it. A simple fasting glucose or HbA1c test can confirm eligibility. Learn more about the GLP-1 connection to <a href="/blog/glp-1-and-type-2-diabetes-beyond-weight-loss-2026" style={{ color: 'var(--brand)', fontWeight: 500 }}>type 2 diabetes</a>, <a href="/blog/glp-1-and-your-heart-the-select-trial-cardiovascul" style={{ color: 'var(--brand)', fontWeight: 500 }}>cardiovascular health</a>, and <a href="/blog/glp-1-for-pcos-2026" style={{ color: 'var(--brand)', fontWeight: 500 }}>PCOS</a>.</p>

        <div className="card" style={{ padding: 40, margin: '48px 0', textAlign: 'center', background: '#FFFDF9', borderColor: 'var(--brand)' }}>
          <h3 className="serif" style={{ fontSize: 28, marginBottom: 16, color: 'var(--ink)' }}>Not Sure If You Qualify?</h3>
          <p style={{ marginBottom: 24, fontSize: 16 }}>Complete a free clinical intake. Our clinicians evaluate your full metabolic profile — not just a BMI number — to determine eligibility.</p>
          <a href={START_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-lg" style={{ display: 'inline-flex', justifyContent: 'center' }}>Check Your Eligibility <Icon.Arrow /></a>
        </div>

        <h2 className="serif" style={{ fontSize: 32, marginTop: 48, marginBottom: 24, color: 'var(--ink)' }}>Beyond BMI: Why the Number Alone Is Insufficient</h2>
        <p>BMI is a screening tool, not a diagnostic one. It does not account for body composition, visceral fat distribution, metabolic health markers, or ethnic variations in cardiometabolic risk. A growing body of evidence — and an increasing number of clinicians — recognize that metabolic dysfunction can exist well below the BMI 30 threshold.</p>
        <p>Patients with "normal weight obesity" (high body fat percentage despite normal BMI) and patients with insulin resistance, elevated fasting glucose, or inflammatory markers may benefit significantly from GLP-1 therapy even if their BMI does not reach the traditional cutoff. This is particularly relevant for patients with <a href="/blog/glp-1-and-inflammation-arthritis-sleep-apnea-chron" style={{ color: 'var(--brand)', fontWeight: 500 }}>chronic inflammation</a> and <a href="/blog/ozempic-insulin-resistance" style={{ color: 'var(--brand)', fontWeight: 500 }}>insulin resistance</a>.</p>

        <h2 className="serif" style={{ fontSize: 32, marginTop: 48, marginBottom: 24, color: 'var(--ink)' }}>What Results to Expect at BMI 27–30</h2>
        <p>Clinical trials included patients with BMI ≥27, and the data shows meaningful outcomes at lower BMIs:</p>
        <ul>
          <li style={{ marginBottom: 12 }}><strong>Weight loss:</strong> 12–18% body weight reduction is typical with semaglutide 2.4 mg; 18–22% with tirzepatide at higher doses</li>
          <li style={{ marginBottom: 12 }}><strong>Timeline:</strong> Most patients see significant results by weeks 12–16. Review our <a href="/blog/your-first-90-days-on-glp-1-week-by-week-what-to-e" style={{ color: 'var(--brand)', fontWeight: 500 }}>first 90 days guide</a></li>
          <li style={{ marginBottom: 12 }}><strong>Metabolic improvements:</strong> HbA1c reduction, blood pressure improvement, lipid panel optimization often occur before reaching goal weight</li>
          <li style={{ marginBottom: 12 }}><strong>Muscle preservation:</strong> Combining GLP-1 with <a href="/blog/glp-1-and-exercise-how-to-combine-medication-with" style={{ color: 'var(--brand)', fontWeight: 500 }}>resistance training</a> is critical to prevent <a href="/blog/glp-1-muscle-loss-the-hidden-risk-nobodys-talking" style={{ color: 'var(--brand)', fontWeight: 500 }}>lean mass loss</a></li>
        </ul>

        <div className="card" style={{ padding: 40, margin: '48px 0', textAlign: 'center', background: '#FFFDF9', borderColor: 'var(--brand)' }}>
          <div style={{ width: 48, height: 48, borderRadius: '50%', background: 'var(--brand-soft)', color: 'var(--brand)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px' }}><Icon.Check size={24} /></div>
          <h3 className="serif" style={{ fontSize: 28, marginBottom: 16, color: 'var(--ink)' }}>Your Metabolic Health Matters More Than a Number</h3>
          <p style={{ marginBottom: 24, fontSize: 16 }}>TelehealthFX clinicians evaluate the complete picture — not just BMI. Insulin resistance, inflammation, and metabolic markers all factor into your eligibility.</p>
          <a href={START_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-lg" style={{ display: 'inline-flex', justifyContent: 'center' }}>Get Evaluated <Icon.Arrow /></a>
        </div>

        <h2 className="serif" style={{ fontSize: 32, marginTop: 48, marginBottom: 24, color: 'var(--ink)' }}>Frequently Asked Questions</h2>
        <h4 style={{ fontSize: 20, marginTop: 24, marginBottom: 8, color: 'var(--ink)' }}>Can I get Ozempic with a BMI of 28?</h4>
        <p style={{ marginBottom: 24 }}>Yes, if you have at least one weight-related comorbidity (hypertension, prediabetes, high cholesterol, sleep apnea, PCOS, or cardiovascular disease). A clinician must document this condition to prescribe on-label.</p>
        <h4 style={{ fontSize: 20, marginTop: 24, marginBottom: 8, color: 'var(--ink)' }}>What if I have no diagnosed comorbidities?</h4>
        <p style={{ marginBottom: 24 }}>Many people have undiagnosed prediabetes or dyslipidemia. A basic metabolic panel or lipid panel can reveal conditions you did not know you had. Your TelehealthFX clinician can order labs if needed to evaluate your metabolic health comprehensively.</p>
        <h4 style={{ fontSize: 20, marginTop: 24, marginBottom: 8, color: 'var(--ink)' }}>Is GLP-1 medication worth it for only 20–30 pounds?</h4>
        <p style={{ marginBottom: 24 }}>Absolutely. A 10–15% reduction from a starting weight of 200 lbs (20–30 lbs) produces clinically significant improvements in blood pressure, blood sugar, cholesterol, inflammation, and overall cardiovascular risk. The metabolic benefits extend far beyond the number on the scale.</p>

        <div style={{ padding: 40, marginTop: 60, borderRadius: 20, background: 'var(--ink)', color: '#FBF8F3', textAlign: 'center' }}>
          <h2 className="serif" style={{ fontSize: 40, marginBottom: 20, color: '#FBF8F3' }}>You Do Not Have to Be "Obese" to Qualify</h2>
          <p style={{ fontSize: 18, opacity: 0.9, marginBottom: 32, maxWidth: 500, margin: '0 auto 32px' }}>BMI 27+ with a metabolic concern? You are likely eligible. Find out in minutes.</p>
          <a href={START_URL} target="_blank" rel="noopener noreferrer" className="btn btn-lg" style={{ background: '#FBF8F3', color: 'var(--ink)', display: 'inline-flex', justifyContent: 'center', width: '100%', maxWidth: 250 }}>Check Now <Icon.Arrow /></a>
        </div>

        <div style={{ marginTop: 80, paddingTop: 40, borderTop: '1px solid var(--line-soft)', fontSize: 14, color: 'var(--ink-3)' }}>
          <h3 className="serif" style={{ fontSize: 24, marginBottom: 24, color: 'var(--ink)' }}>References</h3>
          <ol style={{ paddingLeft: 20, display: 'flex', flexDirection: 'column', gap: 16 }}>
            <li>Centers for Disease Control and Prevention. (2025). <em>National Diabetes Statistics Report</em>. <a href="https://www.cdc.gov/diabetes/data/statistics-report/index.html" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--brand)', textDecoration: 'underline' }}>https://www.cdc.gov/diabetes/data/statistics-report/index.html</a></li>
            <li>Wilding, J. P. H., et al. (2021). Once-weekly semaglutide in adults with overweight or obesity (STEP 1). <em>NEJM</em>, 384(11), 989–1002. <a href="https://doi.org/10.1056/NEJMoa2032183" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--brand)', textDecoration: 'underline' }}>https://doi.org/10.1056/NEJMoa2032183</a></li>
            <li>AMA Council on Science and Public Health. (2023). <em>Limitations of BMI as a clinical metric</em>. <a href="https://www.ama-assn.org/delivering-care/public-health/ama-bmi-report" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--brand)', textDecoration: 'underline' }}>https://www.ama-assn.org/delivering-care/public-health/ama-bmi-report</a></li>
          </ol>
        </div>
      </div>
    </div>
      <p style={{ fontSize: 13, color: 'var(--ink-3)', marginTop: 32, paddingTop: 20, borderTop: '1px solid var(--line-soft)' }}>Disclaimer: Mounjaro®, Zepbound®, Ozempic®, and Wegovy® are registered trademarks of their respective owners (Eli Lilly and Company, Novo Nordisk). Telehealth FX is an independent telehealth platform and is not affiliated with, endorsed by, or sponsored by these trademark owners. Compounded medications are prepared by state-licensed compounding pharmacies pursuant to a patient-specific prescription and are not reviewed or approved by the FDA for safety or efficacy.</p>
    </section>
  </>);
}
export { BlogGLP1BMI2730 };
