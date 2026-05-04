"use client";
import React from 'react';
import Image from 'next/image';
import { Icon } from './common.jsx';

const START_URL = "https://go.telehealthfx.com/start";

function BlogGLP1AndPregnancy() {
  return (
    <>
      <section className="section" style={{ minHeight: '60vh', paddingTop: 120 }}>
      <div className="container" style={{ maxWidth: 800 }}>
        <div className="eyebrow" style={{ marginBottom: 20 }}>Safety &amp; Fertility</div>
        <h1 className="serif" style={{ fontSize: 56, marginBottom: 24, lineHeight: 1.1 }}>
          GLP-1 Medications and Pregnancy: <span style={{ fontStyle: 'italic', color: 'var(--brand)' }}>Fertility, the "Ozempic Baby" Phenomenon, and When to Stop</span>
        </h1>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 48, paddingBottom: 24, borderBottom: '1px solid var(--line-soft)' }}>
          <div style={{ width: 40, height: 40, borderRadius: '50%', background: 'var(--brand)' }}>
            <Image src="/assets/jm-profile.jpg" alt="Julian Mercer" width={1024} height={1024} style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%', height: "auto"}} priority={true} />
          </div>
          <div>
            <div style={{ fontWeight: 500, fontSize: 14 }}><a href="/about" style={{ color: "var(--ink)", textDecoration: "none" }}>Julian Mercer, M.S.</a></div>
            <div style={{ fontSize: 13, color: 'var(--ink-3)' }}>Lead Bio-Systems Analyst · Updated May 2026 · 28 min read</div>
          </div>
        </div>

        <div className="blog-content" style={{ fontSize: 18, lineHeight: 1.7, color: 'var(--ink-2)' }}>
          <Image src="/assets/glp1-pregnancy-featured.png" alt="GLP-1 injection pen beside pregnancy test" width={1024} height={1024} style={{ width: '100%', borderRadius: 16, marginBottom: 40, border: '1px solid var(--line-soft)', background: '#111', height: "auto"}} priority={true} />

          <p>The term "Ozempic babies" has dominated social media and mainstream news throughout 2025–2026. Women who had struggled with infertility for years—many with <a href="/blog/glp-1-for-pcos-2026" style={{ color: 'var(--brand)', fontWeight: 500 }}>PCOS</a>—are reporting unexpected pregnancies after starting <a href="/blog/what-is-a-glp-1-medication" style={{ color: 'var(--brand)', fontWeight: 500 }}>GLP-1 medications</a>. But alongside these hopeful stories comes a critical clinical question: <strong>are GLP-1 medications safe during pregnancy?</strong></p>

          <p>The answer is unequivocal: <strong>No. GLP-1 medications must be discontinued before conception and are contraindicated during pregnancy.</strong> But the full story—why GLP-1s boost fertility, the recommended washout period, and how to plan a safe transition—requires a deeper understanding.</p>

          <h2 className="serif" style={{ fontSize: 32, marginTop: 48, marginBottom: 24, color: 'var(--ink)' }}>Why GLP-1 Medications Increase Fertility</h2>

          <p>The surge in unexpected pregnancies among GLP-1 users is not a side effect of the medication—it is a <em>consequence of restored metabolic health</em>. Several interconnected mechanisms explain why:</p>

          <ol>
            <li style={{ marginBottom: 16 }}><strong>Weight Loss Restores Ovulation:</strong> Obesity is strongly associated with anovulation (failure to release eggs). Even a 5–10% reduction in body weight can restore regular ovulatory cycles. GLP-1 medications produce 15–22% weight loss, dramatically increasing the likelihood of spontaneous ovulation in previously anovulatory women.</li>
            <li style={{ marginBottom: 16 }}><strong>Insulin Sensitization:</strong> Elevated insulin levels directly stimulate ovarian androgen production, disrupting the hypothalamic-pituitary-ovarian axis. By reducing hyperinsulinemia, GLP-1 agonists normalize the hormonal cascade required for follicular development and ovulation.</li>
            <li style={{ marginBottom: 16 }}><strong>Reduced Inflammation:</strong> Chronic low-grade inflammation associated with obesity impairs implantation and early pregnancy maintenance. GLP-1 agonists have demonstrated anti-inflammatory properties that improve the uterine environment.</li>
            <li style={{ marginBottom: 16 }}><strong>Oral Contraceptive Interference:</strong> GLP-1 medications slow gastric emptying, which can reduce the absorption of oral contraceptive pills—potentially reducing their efficacy. This is a critical safety consideration for sexually active women on GLP-1 therapy.</li>
          </ol>

          <div style={{ background: '#FFF3E0', border: '1px solid #FF9800', borderRadius: 12, padding: '24px 32px', margin: '40px 0' }}>
            <p style={{ margin: 0, fontWeight: 600, color: '#E65100', fontSize: 16 }}>⚠️ Important Safety Warning</p>
            <p style={{ margin: '8px 0 0', fontSize: 16, color: '#BF360C' }}>GLP-1 medications may reduce the effectiveness of oral contraceptive pills due to delayed gastric emptying. Women on GLP-1 therapy who do not wish to become pregnant should use non-oral contraception methods (IUD, implant, patch, or ring).</p>
          </div>

          <div className="card" style={{ padding: 40, margin: '48px 0', textAlign: 'center', background: '#FFFDF9', borderColor: 'var(--brand)' }}>
            <h3 className="serif" style={{ fontSize: 28, marginBottom: 16, color: 'var(--ink)' }}>Fertility-Aware GLP-1 Prescribing</h3>
            <p style={{ marginBottom: 24, fontSize: 16 }}>TelehealthFX clinicians discuss contraception and pregnancy planning with every female patient of reproductive age before initiating GLP-1 therapy.</p>
            <a href={START_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-lg" style={{ display: 'inline-flex', justifyContent: 'center' }}>
              Start Your Evaluation <Icon.Arrow />
            </a>
          </div>

          <h2 className="serif" style={{ fontSize: 32, marginTop: 48, marginBottom: 24, color: 'var(--ink)' }}>The Mandatory Washout Period</h2>

          <p>All GLP-1 medications carry FDA black-box pregnancy warnings based on animal reproductive toxicity studies showing embryofetal harm. While human data is limited (randomized trials intentionally exclude pregnant women), the precautionary principle demands conservative action:</p>

          <div style={{ overflowX: 'auto', margin: '24px 0' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 16 }}>
              <thead>
                <tr style={{ borderBottom: '2px solid var(--ink)' }}>
                  <th style={{ textAlign: 'left', padding: '12px 16px', fontWeight: 600 }}>Medication</th>
                  <th style={{ textAlign: 'left', padding: '12px 16px', fontWeight: 600 }}>Half-Life</th>
                  <th style={{ textAlign: 'left', padding: '12px 16px', fontWeight: 600 }}>Recommended Washout</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ borderBottom: '1px solid var(--line-soft)' }}><td style={{ padding: '12px 16px' }}>Semaglutide (Ozempic/Wegovy)</td><td style={{ padding: '12px 16px' }}>~7 days</td><td style={{ padding: '12px 16px', fontWeight: 600 }}>≥2 months before conception</td></tr>
                <tr style={{ borderBottom: '1px solid var(--line-soft)' }}><td style={{ padding: '12px 16px' }}>Tirzepatide (Mounjaro/Zepbound)</td><td style={{ padding: '12px 16px' }}>~5 days</td><td style={{ padding: '12px 16px', fontWeight: 600 }}>≥1 month before conception</td></tr>
                <tr><td style={{ padding: '12px 16px' }}>Liraglutide (Saxenda/Victoza)</td><td style={{ padding: '12px 16px' }}>~13 hours</td><td style={{ padding: '12px 16px', fontWeight: 600 }}>≥2 weeks before conception</td></tr>
              </tbody>
            </table>
          </div>

          <p>The recommended washout period ensures that at least <strong>5 half-lives</strong> have elapsed, reducing circulating drug levels to less than 3% of therapeutic concentration. For semaglutide, with its 7-day half-life, this means a minimum of 5 weeks—but most reproductive endocrinologists recommend <strong>2 full months</strong> for an additional safety margin.</p>

          <h2 className="serif" style={{ fontSize: 32, marginTop: 48, marginBottom: 24, color: 'var(--ink)' }}>Using GLP-1 as a Pre-Conception Strategy</h2>

          <p>The most clinically sophisticated approach is to use GLP-1 therapy as a <strong>deliberate pre-conception optimization tool</strong>. The protocol:</p>
          <ol>
            <li style={{ marginBottom: 12 }}><strong>Phase 1 (6–12 months):</strong> Use GLP-1 therapy to achieve 10–15% body weight reduction and restore metabolic health. Monitor ovulatory status.</li>
            <li style={{ marginBottom: 12 }}><strong>Phase 2 (Washout):</strong> Discontinue GLP-1 medication and maintain the required washout period. Transition to metformin or <a href="/medications/berberine" style={{ color: 'var(--brand)', fontWeight: 500 }}>berberine</a> for continued insulin sensitization.</li>
            <li style={{ marginBottom: 12 }}><strong>Phase 3 (Conception):</strong> Attempt conception from a healthier metabolic baseline, with improved ovulation, reduced androgen levels, and a healthier BMI.</li>
          </ol>

          <p>Maintaining weight loss after discontinuing GLP-1 is a legitimate concern. Review our <a href="/blog/what-happens-when-you-stop-glp-1-medication-the-re" style={{ color: 'var(--brand)', fontWeight: 500 }}>GLP-1 discontinuation guide</a> and the <a href="/blog/glp-1-food-guide-what-to-eat" style={{ color: 'var(--brand)', fontWeight: 500 }}>nutrition framework</a> for strategies to sustain results during the washout period.</p>

          <div className="card" style={{ padding: 40, margin: '48px 0', textAlign: 'center', background: '#FFFDF9', borderColor: 'var(--brand)' }}>
            <div style={{ width: 48, height: 48, borderRadius: '50%', background: 'var(--brand-soft)', color: 'var(--brand)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px' }}><Icon.Check size={24} /></div>
            <h3 className="serif" style={{ fontSize: 28, marginBottom: 16, color: 'var(--ink)' }}>Plan Your Path to Parenthood</h3>
            <p style={{ marginBottom: 24, fontSize: 16 }}>TelehealthFX clinicians work with you to optimize metabolic health before conception and create a safe, structured GLP-1 discontinuation plan.</p>
            <a href={START_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-lg" style={{ display: 'inline-flex', justifyContent: 'center' }}>
              Check Eligibility <Icon.Arrow />
            </a>
          </div>

          <h2 className="serif" style={{ fontSize: 32, marginTop: 48, marginBottom: 24, color: 'var(--ink)' }}>Frequently Asked Questions</h2>

          <h4 style={{ fontSize: 20, marginTop: 24, marginBottom: 8, color: 'var(--ink)' }}>What should I do if I get pregnant while on semaglutide?</h4>
          <p style={{ marginBottom: 24 }}>Stop taking the medication immediately and contact your healthcare provider. While animal studies showed adverse fetal effects, the limited human case data available has not demonstrated a clear pattern of birth defects. Your clinician will assess risk based on gestational timing, dose, and duration of exposure.</p>

          <h4 style={{ fontSize: 20, marginTop: 24, marginBottom: 8, color: 'var(--ink)' }}>Can GLP-1 medications affect oral birth control?</h4>
          <p style={{ marginBottom: 24 }}>Yes. GLP-1 agonists slow gastric emptying, which can reduce the absorption rate and potentially the efficacy of oral contraceptive pills. The FDA-approved labels for Ozempic, Wegovy, Mounjaro, and Zepbound all note this interaction. Women on GLP-1 therapy should discuss switching to non-oral contraception with their clinician.</p>

          <h4 style={{ fontSize: 20, marginTop: 24, marginBottom: 8, color: 'var(--ink)' }}>How long after stopping Ozempic can I try to get pregnant?</h4>
          <p style={{ marginBottom: 24 }}>The manufacturer (Novo Nordisk) recommends discontinuing semaglutide at least 2 months before a planned pregnancy. This allows approximately 8–9 half-lives to elapse, ensuring near-complete drug clearance from the body. Your reproductive endocrinologist may provide personalized guidance based on your clinical situation.</p>

          <h4 style={{ fontSize: 20, marginTop: 24, marginBottom: 8, color: 'var(--ink)' }}>Can I breastfeed while on GLP-1 medication?</h4>
          <p style={{ marginBottom: 24 }}>GLP-1 medications are not recommended during breastfeeding. There is insufficient data on whether semaglutide or tirzepatide passes into breast milk or what effects it could have on a nursing infant. Discuss the risks and benefits with your clinician before resuming GLP-1 therapy postpartum.</p>

          <div style={{ padding: 40, marginTop: 60, borderRadius: 20, background: 'var(--ink)', color: '#FBF8F3', textAlign: 'center' }}>
            <h2 className="serif" style={{ fontSize: 40, marginBottom: 20, color: '#FBF8F3' }}>Your Health, Your Family, Your Timeline</h2>
            <p style={{ fontSize: 18, opacity: 0.9, marginBottom: 32, maxWidth: 500, margin: '0 auto 32px' }}>Optimize your metabolic health with GLP-1 therapy on your terms. Expert clinical guidance for every stage of your journey.</p>
            <a href={START_URL} target="_blank" rel="noopener noreferrer" className="btn btn-lg" style={{ background: '#FBF8F3', color: 'var(--ink)', display: 'inline-flex', justifyContent: 'center', width: '100%', maxWidth: 250 }}>
              Get Started <Icon.Arrow />
            </a>
          </div>

          <div style={{ marginTop: 80, paddingTop: 40, borderTop: '1px solid var(--line-soft)', fontSize: 14, color: 'var(--ink-3)' }}>
            <h3 className="serif" style={{ fontSize: 24, marginBottom: 24, color: 'var(--ink)' }}>Academic References &amp; Clinical Citations</h3>
            <ol style={{ paddingLeft: 20, display: 'flex', flexDirection: 'column', gap: 16 }}>
              <li>Novo Nordisk. (2025). <em>Wegovy (semaglutide) prescribing information: Use in pregnancy</em>. FDA. <a href="https://www.accessdata.fda.gov/drugsatfda_docs/label/2021/215256s000lbl.pdf" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--brand)', textDecoration: 'underline' }}>https://www.accessdata.fda.gov/drugsatfda_docs/label/2021/215256s000lbl.pdf</a></li>
              <li>Eli Lilly. (2025). <em>Zepbound (tirzepatide) prescribing information: Use in pregnancy</em>. FDA. <a href="https://www.accessdata.fda.gov/drugsatfda_docs/label/2023/217806s000lbl.pdf" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--brand)', textDecoration: 'underline' }}>https://www.accessdata.fda.gov/drugsatfda_docs/label/2023/217806s000lbl.pdf</a></li>
              <li>Cena, H., et al. (2020). Obesity, polycystic ovary syndrome, and infertility: A new avenue for GLP-1 receptor agonists. <em>Journal of Clinical Endocrinology &amp; Metabolism</em>, 105(8), e2695–e2709. <a href="https://doi.org/10.1210/clinem/dgaa285" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--brand)', textDecoration: 'underline' }}>https://doi.org/10.1210/clinem/dgaa285</a></li>
              <li>ACOG Committee Opinion No. 757. (2018). Screening and diagnosis of gestational diabetes mellitus. <em>Obstetrics &amp; Gynecology</em>, 132(2), e228–e232. <a href="https://doi.org/10.1097/AOG.0000000000002960" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--brand)', textDecoration: 'underline' }}>https://doi.org/10.1097/AOG.0000000000002960</a></li>
            </ol>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}

export { BlogGLP1AndPregnancy };
