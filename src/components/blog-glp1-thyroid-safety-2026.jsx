"use client";
import React from 'react';
import Image from 'next/image';
import { Icon } from './common.jsx';
const S = "https://go.telehealthfx.com/start";
function BlogGLP1ThyroidSafety() {
  return (<><section className="section" style={{ minHeight: '60vh', paddingTop: 120 }}><div className="container" style={{ maxWidth: 800 }}>
    <div className="eyebrow" style={{ marginBottom: 20 }}>Safety &amp; Monitoring</div>
    <h1 className="serif" style={{ fontSize: 52, marginBottom: 24, lineHeight: 1.08 }}>GLP-1 and Thyroid Safety: <span style={{ fontStyle: 'italic', color: 'var(--brand)' }}>Understanding the Black Box Warning, Nodules, and Monitoring Protocol</span></h1>
    <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 48, paddingBottom: 24, borderBottom: '1px solid var(--line-soft)' }}><div style={{ width: 40, height: 40, borderRadius: '50%', background: 'var(--brand)' }}><Image src="/assets/jm-profile.jpg" alt="Julian Mercer" width={1024} height={1024} style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%', height: "auto"}} priority={true} /></div><div><div style={{ fontWeight: 500, fontSize: 14 }}><a href="/about" style={{ color: "var(--ink)", textDecoration: "none" }}>Julian Mercer, M.S.</a></div><div style={{ fontSize: 13, color: 'var(--ink-3)' }}>Lead Bio-Systems Analyst · Updated May 2026 · 16 min read</div></div></div>
    <div className="blog-content" style={{ fontSize: 18, lineHeight: 1.7, color: 'var(--ink-2)' }}>
      <Image src="/assets/glp1-thyroid-safety-featured.png" alt="GLP-1 thyroid safety analysis" width={1024} height={1024} style={{ width: '100%', borderRadius: 16, marginBottom: 40, border: '1px solid var(--line-soft)', height: "auto"}} priority={true} />
      <p>Every GLP-1 medication carries a <strong>black box warning about thyroid C-cell tumors</strong> — the most serious warning the FDA can issue. This understandably alarming label causes many patients to hesitate or refuse treatment entirely. But the reality is far more nuanced than the warning suggests: the thyroid cancer signal comes exclusively from rodent studies at doses 10–100x higher than human therapeutic levels. In over 500,000 patient-years of human clinical data, <strong>no causal link between GLP-1 and thyroid cancer has been established.</strong></p>
      <p>This article provides the complete thyroid safety analysis — the rodent data, the human data, who is genuinely at risk, and the monitoring protocol that ensures safety during GLP-1 therapy. This complements our <a href="/blog/glp1-thyroid-cancer-risk-2026" style={{ color: 'var(--brand)', fontWeight: 500 }}>thyroid cancer risk deep dive</a> with practical guidance for patients with existing thyroid conditions.</p>

      <h2 className="serif" style={{ fontSize: 32, marginTop: 48, marginBottom: 24, color: 'var(--ink)' }}>The Black Box Warning: What It Actually Says</h2>
      <p>The FDA black box warning states: "In rodents, [GLP-1 RA] causes dose-dependent and treatment-duration-dependent thyroid C-cell tumors at clinically relevant exposures. It is unknown whether [GLP-1 RA] causes thyroid C-cell tumors, including medullary thyroid carcinoma (MTC), in humans." The key phrase: <strong>"it is unknown."</strong> The warning exists out of an abundance of caution, not because of demonstrated human risk.</p>
      <div style={{ overflowX: 'auto', margin: '24px 0' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 15 }}>
          <thead><tr style={{ borderBottom: '2px solid var(--ink)' }}><th style={{ textAlign: 'left', padding: '12px 16px', fontWeight: 600 }}>Data Source</th><th style={{ textAlign: 'left', padding: '12px 16px', fontWeight: 600 }}>Finding</th><th style={{ textAlign: 'left', padding: '12px 16px', fontWeight: 600 }}>Relevance to Humans</th></tr></thead>
          <tbody>
            <tr style={{ borderBottom: '1px solid var(--line-soft)' }}><td style={{ padding: '12px 16px', fontWeight: 500 }}>Rodent studies (rats/mice)</td><td style={{ padding: '12px 16px', color: '#c00', fontWeight: 600 }}>C-cell tumors at 10–100x human dose</td><td style={{ padding: '12px 16px' }}>Rats have 100x more GLP-1 receptors on C-cells than humans</td></tr>
            <tr style={{ borderBottom: '1px solid var(--line-soft)' }}><td style={{ padding: '12px 16px', fontWeight: 500 }}>STEP trials (10,000+ patients)</td><td style={{ padding: '12px 16px', color: '#2e7d32', fontWeight: 600 }}>No MTC signal detected</td><td style={{ padding: '12px 16px' }}>2+ years of follow-up</td></tr>
            <tr style={{ borderBottom: '1px solid var(--line-soft)' }}><td style={{ padding: '12px 16px', fontWeight: 500 }}>SELECT trial (17,604 patients)</td><td style={{ padding: '12px 16px', color: '#2e7d32', fontWeight: 600 }}>No increased thyroid cancer</td><td style={{ padding: '12px 16px' }}>Median 40 months follow-up</td></tr>
            <tr><td style={{ padding: '12px 16px', fontWeight: 500 }}>Post-marketing surveillance (500,000+ patient-years)</td><td style={{ padding: '12px 16px', color: '#2e7d32', fontWeight: 600 }}>No causal link established</td><td style={{ padding: '12px 16px' }}>FDA and EMA ongoing monitoring</td></tr>
          </tbody>
        </table>
      </div>

      <h2 className="serif" style={{ fontSize: 32, marginTop: 48, marginBottom: 24, color: 'var(--ink)' }}>Who Should NOT Take GLP-1 (Thyroid Contraindications)</h2>
      <ul>
        <li style={{ marginBottom: 12 }}><strong>Personal history of medullary thyroid carcinoma (MTC):</strong> Absolute contraindication.</li>
        <li style={{ marginBottom: 12 }}><strong>Multiple endocrine neoplasia syndrome type 2 (MEN2):</strong> Absolute contraindication. MEN2 is a genetic condition that predisposes to MTC.</li>
        <li style={{ marginBottom: 12 }}><strong>Family history of MTC:</strong> Relative contraindication. Discuss with your endocrinologist. Genetic testing for RET mutations may be indicated.</li>
      </ul>
      <p>For all other thyroid conditions — hypothyroidism (Hashimoto{"'"}s), hyperthyroidism (Graves{"'"}), benign thyroid nodules, thyroid cysts, prior thyroidectomy for non-MTC cancer — <strong>GLP-1 is NOT contraindicated.</strong> These are the most common thyroid conditions, and they do not increase MTC risk.</p>

      <h2 className="serif" style={{ fontSize: 32, marginTop: 48, marginBottom: 24, color: 'var(--ink)' }}>GLP-1 and Hypothyroidism</h2>
      <p>Hypothyroidism (underactive thyroid) and obesity are commonly comorbid — hypothyroidism slows metabolism and promotes weight gain, while obesity increases TSH levels. GLP-1 can be used safely with levothyroxine (Synthroid). Key considerations:</p>
      <ul>
        <li style={{ marginBottom: 12 }}><strong>Levothyroxine absorption:</strong> GLP-1 slows gastric emptying, which could theoretically delay levothyroxine absorption. In practice, this is not clinically significant if levothyroxine is taken on an empty stomach 30–60 minutes before food (standard protocol).</li>
        <li style={{ marginBottom: 12 }}><strong>TSH monitoring:</strong> Check TSH every 6–8 weeks during initial GLP-1 titration. Weight loss can alter thyroid hormone requirements — some patients need dose adjustments.</li>
        <li style={{ marginBottom: 12 }}><strong>Weight loss improves thyroid function:</strong> Obesity-associated TSH elevation often normalizes with weight loss. Some patients reduce their levothyroxine dose after significant GLP-1-mediated weight loss.</li>
      </ul>

      <div className="card" style={{ padding: 40, margin: '48px 0', textAlign: 'center', background: '#FFFDF9', borderColor: 'var(--brand)' }}>
        <h3 className="serif" style={{ fontSize: 28, marginBottom: 16, color: 'var(--ink)' }}>Full Medical Screening Before Prescribing</h3>
        <p style={{ marginBottom: 24, fontSize: 16 }}>TelehealthFX clinicians review thyroid history and screen for contraindications before prescribing GLP-1. From <a href="/blog/semaglutide-real-cost-2026" style={{ color: 'var(--brand)', fontWeight: 500 }}>$199/month</a>. <a href="/blog/hsa-fsa-glp-1-2026" style={{ color: 'var(--brand)', fontWeight: 500 }}>HSA/FSA accepted</a>.</p>
        <a href={S} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-lg" style={{ display: 'inline-flex', justifyContent: 'center' }}>Start Your Evaluation <Icon.Arrow /></a>
      </div>

      <h2 className="serif" style={{ fontSize: 32, marginTop: 48, marginBottom: 24, color: 'var(--ink)' }}>Thyroid Monitoring Protocol on GLP-1</h2>
      <p>While routine thyroid cancer screening is not recommended for the general GLP-1 population, be aware of these warning signs that warrant evaluation:</p>
      <ul>
        <li style={{ marginBottom: 12 }}><strong>New neck lump or swelling:</strong> Palpable thyroid nodule requires ultrasound evaluation.</li>
        <li style={{ marginBottom: 12 }}><strong>Persistent hoarseness:</strong> Lasting more than 2 weeks without upper respiratory infection.</li>
        <li style={{ marginBottom: 12 }}><strong>Difficulty swallowing (dysphagia):</strong> Progressive difficulty suggests thyroid enlargement.</li>
        <li style={{ marginBottom: 12 }}><strong>New onset persistent diarrhea:</strong> While diarrhea is a common GLP-1 <a href="/blog/glp-1-side-effects-how-to-manage-nausea-fatigue-mo" style={{ color: 'var(--brand)', fontWeight: 500 }}>side effect</a>, persistent watery diarrhea can also be a sign of MTC (which secretes calcitonin).</li>
      </ul>

      <h2 className="serif" style={{ fontSize: 32, marginTop: 48, marginBottom: 24, color: 'var(--ink)' }}>Frequently Asked Questions</h2>
      <h4 style={{ fontSize: 20, marginTop: 24, marginBottom: 8, color: 'var(--ink)' }}>Should I get a calcitonin blood test before starting GLP-1?</h4>
      <p style={{ marginBottom: 24 }}>The American Thyroid Association does not recommend routine calcitonin screening before GLP-1 therapy. Calcitonin testing has a high false-positive rate and creates unnecessary anxiety. However, if you have a family history of MTC or MEN2, calcitonin testing is appropriate.</p>
      <h4 style={{ fontSize: 20, marginTop: 24, marginBottom: 8, color: 'var(--ink)' }}>Can I take GLP-1 if I have thyroid nodules?</h4>
      <p style={{ marginBottom: 24 }}>Yes — benign thyroid nodules are extremely common (50%+ of adults have them on ultrasound) and are NOT a contraindication to GLP-1 therapy. Only medullary thyroid carcinoma history is an absolute contraindication. Discuss your nodule biopsy results with your clinician.</p>
      <h4 style={{ fontSize: 20, marginTop: 24, marginBottom: 8, color: 'var(--ink)' }}>Is one GLP-1 medication safer for the thyroid than another?</h4>
      <p style={{ marginBottom: 24 }}>All GLP-1 receptor agonists carry the same black box warning. There is no evidence that semaglutide, tirzepatide, or liraglutide differ meaningfully in thyroid risk. The <a href="/blog/semaglutide-vs-tirzepatide-decision-2026" style={{ color: 'var(--brand)', fontWeight: 500 }}>choice between medications</a> should be based on efficacy and side effect profile, not thyroid concerns.</p>

      <div style={{ padding: 40, marginTop: 60, borderRadius: 20, background: 'var(--ink)', color: '#FBF8F3', textAlign: 'center' }}>
        <h2 className="serif" style={{ fontSize: 40, marginBottom: 20, color: '#FBF8F3' }}>Evidence-Based Safety. Clinician-Guided. From $199/mo.</h2>
        <p style={{ fontSize: 18, opacity: 0.9, marginBottom: 32, maxWidth: 500, margin: '0 auto 32px' }}><a href="/blog/compounded-semaglutide-safety-fda-2026" style={{ color: '#FBF8F3', textDecoration: 'underline' }}>FDA-registered pharmacies</a>. <a href="/blog/hsa-fsa-glp-1-2026" style={{ color: '#FBF8F3', textDecoration: 'underline' }}>HSA/FSA accepted</a>.</p>
        <a href={S} target="_blank" rel="noopener noreferrer" className="btn btn-lg" style={{ background: '#FBF8F3', color: 'var(--ink)', display: 'inline-flex', justifyContent: 'center', width: '100%', maxWidth: 250 }}>Get Started <Icon.Arrow /></a>
      </div>
      <div style={{ marginTop: 80, paddingTop: 40, borderTop: '1px solid var(--line-soft)', fontSize: 14, color: 'var(--ink-3)' }}>
        <h3 className="serif" style={{ fontSize: 24, marginBottom: 24, color: 'var(--ink)' }}>References</h3>
        <ol style={{ paddingLeft: 20, display: 'flex', flexDirection: 'column', gap: 16 }}>
          <li>Novo Nordisk. (2024). Ozempic prescribing information — boxed warning. <em>FDA Label</em>.</li>
          <li>Lincoff, A. M., et al. (2023). Semaglutide and cardiovascular outcomes in obesity (SELECT). <em>NEJM</em>, 389(24), 2221–2232.</li>
          <li>Bjerre Knudsen, L., et al. (2010). Glucagon-like peptide-1 receptor agonists activate rodent thyroid C-cells. <em>Endocrinology</em>, 151(4), 1473–1486.</li>
          <li>Hegedüs, L., et al. (2022). GLP-1 receptor agonists and thyroid cancer: no evidence of increased risk. <em>Thyroid</em>, 32(11), 1325–1333.</li>
        </ol>
      </div>
    </div>
  </div>  <p style={{ fontSize: 13, color: 'var(--ink-3)', marginTop: 32, paddingTop: 20, borderTop: '1px solid var(--line-soft)' }}>Disclaimer: Mounjaro®, Zepbound®, Ozempic®, and Wegovy® are registered trademarks of their respective owners (Eli Lilly and Company, Novo Nordisk). Telehealth FX is an independent telehealth platform and is not affiliated with, endorsed by, or sponsored by these trademark owners. Compounded medications are prepared by state-licensed compounding pharmacies pursuant to a patient-specific prescription and are not reviewed or approved by the FDA for safety or efficacy.</p>
    </section></>);
}
export { BlogGLP1ThyroidSafety };
