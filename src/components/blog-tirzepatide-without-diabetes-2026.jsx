"use client";
import React from 'react';
import Image from 'next/image';
import { Icon } from './common.jsx';

const START_URL = "https://go.telehealthfx.com/start";

function BlogTirzepatideWithoutDiabetes() {
  return (
    <>
      <section className="section" style={{ minHeight: '60vh', paddingTop: 120 }}>
      <div className="container" style={{ maxWidth: 800 }}>
        <div className="eyebrow" style={{ marginBottom: 20 }}>Eligibility &amp; Access</div>
        <h1 className="serif" style={{ fontSize: 56, marginBottom: 24, lineHeight: 1.1 }}>
          Can I Get Tirzepatide Without a Diabetes Diagnosis? <span style={{ fontStyle: 'italic', color: 'var(--brand)' }}>2026 Eligibility Guide</span>
        </h1>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 48, paddingBottom: 24, borderBottom: '1px solid var(--line-soft)' }}>
          <div style={{ width: 40, height: 40, borderRadius: '50%', background: 'var(--brand)' }}>
            <Image src="/assets/jm-profile.jpg" alt="Julian Mercer" width={1024} height={1024} style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%', height: "auto"}} priority={true} />
          </div>
          <div>
            <div style={{ fontWeight: 500, fontSize: 14 }}><a href="/about" style={{ color: "var(--ink)", textDecoration: "none" }}>Julian Mercer, M.S.</a></div>
            <div style={{ fontSize: 13, color: 'var(--ink-3)' }}>Lead Bio-Systems Analyst · Updated May 2026 · 22 min read</div>
          </div>
        </div>

        <div className="blog-content" style={{ fontSize: 18, lineHeight: 1.7, color: 'var(--ink-2)' }}>
          <Image src="/assets/tirzepatide-without-diabetes-featured.png" alt="Tirzepatide eligibility checklist with Mounjaro pen" width={1024} height={1024} style={{ width: '100%', borderRadius: 16, marginBottom: 40, border: '1px solid var(--line-soft)', background: '#111', height: "auto"}} priority={true} />

          <p><strong>Short answer: yes.</strong> <a href="/medications/tirzepatide" style={{ color: 'var(--brand)', fontWeight: 500 }}>Tirzepatide</a> is available for weight management without a diabetes diagnosis through its FDA-approved weight loss indication (Zepbound) and through compounded formulations prescribed off-label. You do not need to be diabetic. You do need to meet specific clinical criteria. This guide explains every pathway available in 2026.</p>

          <h2 className="serif" style={{ fontSize: 32, marginTop: 48, marginBottom: 24, color: 'var(--ink)' }}>Understanding the Two FDA Approvals</h2>

          <p>Tirzepatide is sold under two brand names with two separate FDA approvals:</p>
          <ul>
            <li style={{ marginBottom: 16 }}><strong>Mounjaro:</strong> FDA-approved for <em>type 2 diabetes management</em>. Requires a diabetes diagnosis. Doses: 2.5 mg to 15 mg weekly.</li>
            <li style={{ marginBottom: 16 }}><strong>Zepbound:</strong> FDA-approved for <em>chronic weight management</em>. <strong>Does NOT require diabetes.</strong> Same molecule, same manufacturer (Eli Lilly), same doses. Approved for adults with BMI ≥30 or BMI ≥27 with at least one weight-related comorbidity.</li>
          </ul>
          <p>This dual-approval structure means non-diabetic patients have a clear, FDA-sanctioned pathway to tirzepatide. For a detailed comparison of these brands and their compounded alternatives, see our <a href="/blog/zepbound-vs-mounjaro-compounded-tirzepatide" style={{ color: 'var(--brand)', fontWeight: 500 }}>Zepbound vs. Mounjaro vs. Compounded</a> analysis.</p>

          <h2 className="serif" style={{ fontSize: 32, marginTop: 48, marginBottom: 24, color: 'var(--ink)' }}>The Eligibility Criteria</h2>

          <h3 style={{ fontSize: 24, marginTop: 32, marginBottom: 16, color: 'var(--ink)' }}>For Branded Zepbound</h3>
          <ul>
            <li style={{ marginBottom: 8 }}>BMI ≥ 30 (obesity), OR</li>
            <li style={{ marginBottom: 8 }}>BMI ≥ 27 (overweight) with at least one of: hypertension, type 2 diabetes, dyslipidemia, obstructive sleep apnea, or cardiovascular disease</li>
          </ul>

          <h3 style={{ fontSize: 24, marginTop: 32, marginBottom: 16, color: 'var(--ink)' }}>For Compounded Tirzepatide</h3>
          <ul>
            <li style={{ marginBottom: 8 }}>Clinical eligibility is determined by the prescribing clinician based on individual assessment</li>
            <li style={{ marginBottom: 8 }}>Most telehealth providers follow the same BMI criteria as the FDA label</li>
            <li style={{ marginBottom: 8 }}>Some clinicians may prescribe for patients with BMI 25–27 who have documented metabolic dysfunction (insulin resistance, prediabetes, metabolic syndrome)</li>
          </ul>

          <div style={{ background: '#E8F5E9', border: '1px solid #4CAF50', borderRadius: 12, padding: '24px 32px', margin: '40px 0' }}>
            <p style={{ margin: 0, fontWeight: 600, color: '#2E7D32', fontSize: 16 }}>✅ Quick Eligibility Check</p>
            <p style={{ margin: '8px 0 0', fontSize: 16, color: '#1B5E20' }}>If you weigh 190+ lbs and are 5'4" or shorter, or 210+ lbs and are 5'8" or shorter, you likely meet the BMI ≥30 threshold. A clinician can confirm your exact eligibility in minutes.</p>
          </div>

          <div className="card" style={{ padding: 40, margin: '48px 0', textAlign: 'center', background: '#FFFDF9', borderColor: 'var(--brand)' }}>
            <h3 className="serif" style={{ fontSize: 28, marginBottom: 16, color: 'var(--ink)' }}>Check Your Eligibility in 5 Minutes</h3>
            <p style={{ marginBottom: 24, fontSize: 16 }}>Complete a free clinical intake with TelehealthFX. A licensed clinician will confirm your eligibility and recommend the best medication pathway for your goals.</p>
            <a href={START_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-lg" style={{ display: 'inline-flex', justifyContent: 'center' }}>
              Start Free Eligibility Check <Icon.Arrow />
            </a>
          </div>

          <h2 className="serif" style={{ fontSize: 32, marginTop: 48, marginBottom: 24, color: 'var(--ink)' }}>Tirzepatide vs. Semaglutide: Why Choose Tirzepatide?</h2>

          <p>If you are eligible for GLP-1 therapy, you have two primary molecular options. Tirzepatide offers distinct advantages for certain patient profiles:</p>

          <ul>
            <li style={{ marginBottom: 12 }}><strong>Superior weight loss:</strong> The SURMOUNT-1 trial demonstrated 22.5% body weight reduction with tirzepatide 15 mg vs. 14.9% with semaglutide 2.4 mg in the STEP 1 trial.</li>
            <li style={{ marginBottom: 12 }}><strong>Dual-agonist mechanism:</strong> Tirzepatide activates both GLP-1 and GIP receptors, providing complementary metabolic pathways. Read our <a href="/blog/tirzepatide-vs-semaglutide-dual-agonist-mechanism" style={{ color: 'var(--brand)', fontWeight: 500 }}>dual-agonist deep dive</a> for the full pharmacology.</li>
            <li style={{ marginBottom: 12 }}><strong>Better GI tolerability (for some):</strong> Some patients who experience persistent nausea on <a href="/medications/semaglutide" style={{ color: 'var(--brand)', fontWeight: 500 }}>semaglutide</a> tolerate tirzepatide better due to the GIP component's gastric protective effects.</li>
            <li style={{ marginBottom: 12 }}><strong>Potential for better glucose control:</strong> The dual-agonist approach provides more comprehensive metabolic improvement, particularly relevant for patients with prediabetes or insulin resistance.</li>
          </ul>

          <p>For a head-to-head comparison, see our <a href="/blog/tirzepatide-vs-semaglutide-which-glp-1-is-right-fo" style={{ color: 'var(--brand)', fontWeight: 500 }}>consumer guide to tirzepatide vs. semaglutide</a>.</p>

          <h2 className="serif" style={{ fontSize: 32, marginTop: 48, marginBottom: 24, color: 'var(--ink)' }}>How to Access Tirzepatide in 2026</h2>

          <ol>
            <li style={{ marginBottom: 16 }}><strong>Branded Zepbound (self-pay):</strong> LillyDirect vials start at $299/month. Pen injectors at list price (~$1,060/month) but savings programs available.</li>
            <li style={{ marginBottom: 16 }}><strong>Insurance coverage:</strong> Variable. Many insurers cover Mounjaro for T2D but deny Zepbound for weight loss. Prior authorization often required. If denied, see our approach to working through the process.</li>
            <li style={{ marginBottom: 16 }}><strong>Compounded tirzepatide via telehealth:</strong> $199–$449/month from licensed 503A pharmacies. Same molecule, individual prescription required. Available through providers like TelehealthFX with <a href="/blog/get-semaglutide-online-2026" style={{ color: 'var(--brand)', fontWeight: 500 }}>full telehealth access</a>.</li>
          </ol>

          <div className="card" style={{ padding: 40, margin: '48px 0', textAlign: 'center', background: '#FFFDF9', borderColor: 'var(--brand)' }}>
            <div style={{ width: 48, height: 48, borderRadius: '50%', background: 'var(--brand-soft)', color: 'var(--brand)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px' }}><Icon.Check size={24} /></div>
            <h3 className="serif" style={{ fontSize: 28, marginBottom: 16, color: 'var(--ink)' }}>No Diabetes Required</h3>
            <p style={{ marginBottom: 24, fontSize: 16 }}>TelehealthFX prescribes tirzepatide for weight management under the Zepbound indication. No diabetes diagnosis necessary. All-inclusive pricing.</p>
            <a href={START_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-lg" style={{ display: 'inline-flex', justifyContent: 'center' }}>
              Get Started Today <Icon.Arrow />
            </a>
          </div>

          <h2 className="serif" style={{ fontSize: 32, marginTop: 48, marginBottom: 24, color: 'var(--ink)' }}>Frequently Asked Questions</h2>

          <h4 style={{ fontSize: 20, marginTop: 24, marginBottom: 8, color: 'var(--ink)' }}>Do I need to be diabetic to get Mounjaro?</h4>
          <p style={{ marginBottom: 24 }}>Mounjaro is FDA-approved for type 2 diabetes only. However, the identical molecule (tirzepatide) is also sold as Zepbound, which is FDA-approved specifically for chronic weight management without requiring a diabetes diagnosis. Compounded tirzepatide can also be prescribed for weight loss by a licensed clinician.</p>

          <h4 style={{ fontSize: 20, marginTop: 24, marginBottom: 8, color: 'var(--ink)' }}>What BMI do I need for tirzepatide?</h4>
          <p style={{ marginBottom: 24 }}>The FDA-approved criteria for Zepbound require BMI ≥30 or BMI ≥27 with at least one weight-related comorbidity. For compounded tirzepatide, your clinician evaluates your individual metabolic profile and may consider additional factors beyond BMI alone.</p>

          <h4 style={{ fontSize: 20, marginTop: 24, marginBottom: 8, color: 'var(--ink)' }}>Is tirzepatide stronger than semaglutide?</h4>
          <p style={{ marginBottom: 24 }}>In terms of weight loss, yes. Clinical trials show tirzepatide 15 mg produces approximately 22.5% body weight loss vs. 14.9% for semaglutide 2.4 mg. The dual GLP-1/GIP agonist mechanism provides additional metabolic pathways beyond what single-agonist semaglutide can achieve.</p>

          <div style={{ padding: 40, marginTop: 60, borderRadius: 20, background: 'var(--ink)', color: '#FBF8F3', textAlign: 'center' }}>
            <h2 className="serif" style={{ fontSize: 40, marginBottom: 20, color: '#FBF8F3' }}>You Qualify. Start Today.</h2>
            <p style={{ fontSize: 18, opacity: 0.9, marginBottom: 32, maxWidth: 500, margin: '0 auto 32px' }}>No diabetes needed. No waiting room. Licensed clinician evaluation from home.</p>
            <a href={START_URL} target="_blank" rel="noopener noreferrer" className="btn btn-lg" style={{ background: '#FBF8F3', color: 'var(--ink)', display: 'inline-flex', justifyContent: 'center', width: '100%', maxWidth: 250 }}>
              Check Eligibility <Icon.Arrow />
            </a>
          </div>

          <div style={{ marginTop: 80, paddingTop: 40, borderTop: '1px solid var(--line-soft)', fontSize: 14, color: 'var(--ink-3)' }}>
            <h3 className="serif" style={{ fontSize: 24, marginBottom: 24, color: 'var(--ink)' }}>Academic References &amp; Clinical Citations</h3>
            <ol style={{ paddingLeft: 20, display: 'flex', flexDirection: 'column', gap: 16 }}>
              <li>Jastreboff, A. M., et al. (2022). Tirzepatide once weekly for the treatment of obesity. <em>NEJM</em>, 387(3), 205–216. <a href="https://doi.org/10.1056/NEJMoa2206038" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--brand)', textDecoration: 'underline' }}>https://doi.org/10.1056/NEJMoa2206038</a></li>
              <li>Eli Lilly. (2023). <em>Zepbound (tirzepatide) prescribing information</em>. FDA. <a href="https://www.accessdata.fda.gov/drugsatfda_docs/label/2023/217806s000lbl.pdf" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--brand)', textDecoration: 'underline' }}>https://www.accessdata.fda.gov/drugsatfda_docs/label/2023/217806s000lbl.pdf</a></li>
              <li>Frías, J. P., et al. (2021). Tirzepatide versus semaglutide once weekly in patients with type 2 diabetes (SURPASS-2). <em>NEJM</em>, 385(6), 503–515. <a href="https://doi.org/10.1056/NEJMoa2107519" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--brand)', textDecoration: 'underline' }}>https://doi.org/10.1056/NEJMoa2107519</a></li>
              <li>Eli Lilly. (2025). <em>LillyDirect self-pay program</em>. <a href="https://www.lillydirect.com" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--brand)', textDecoration: 'underline' }}>https://www.lillydirect.com</a></li>
            </ol>
          </div>
        </div>
      </div>
      <p style={{ fontSize: 13, color: 'var(--ink-3)', marginTop: 32, paddingTop: 20, borderTop: '1px solid var(--line-soft)' }}>Disclaimer: Mounjaro®, Zepbound®, Ozempic®, and Wegovy® are registered trademarks of their respective owners (Eli Lilly and Company, Novo Nordisk). Telehealth FX is an independent telehealth platform and is not affiliated with, endorsed by, or sponsored by these trademark owners. Compounded medications are prepared by state-licensed compounding pharmacies pursuant to a patient-specific prescription and are not reviewed or approved by the FDA for safety or efficacy.</p>
    </section>
    </>
  );
}

export { BlogTirzepatideWithoutDiabetes };
