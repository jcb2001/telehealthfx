"use client";
import React from 'react';
import Image from 'next/image';
import { Icon } from './common.jsx';
const START_URL = "https://go.telehealthfx.com/start";

function BlogGLP1TaxDeduction() {
  return (<><section className="section" style={{ minHeight: '60vh', paddingTop: 120 }}><div className="container" style={{ maxWidth: 800 }}>
    <div className="eyebrow" style={{ marginBottom: 20 }}>Financial Guide</div>
    <h1 className="serif" style={{ fontSize: 52, marginBottom: 24, lineHeight: 1.08 }}>Is Weight Loss Medication Tax Deductible? <span style={{ fontStyle: 'italic', color: 'var(--brand)' }}>GLP-1 Costs, HSA/FSA &amp; Medical Expense Deductions (2026 Guide)</span></h1>
    <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 48, paddingBottom: 24, borderBottom: '1px solid var(--line-soft)' }}><div style={{ width: 40, height: 40, borderRadius: '50%', background: 'var(--brand)' }}><Image src="/assets/jm-profile.jpg" alt="Julian Mercer" width={1024} height={1024} style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%', height: "auto"}} priority={true} /></div><div><div style={{ fontWeight: 500, fontSize: 14 }}><a href="/about" style={{ color: "var(--ink)", textDecoration: "none" }}>Julian Mercer, M.S.</a></div><div style={{ fontSize: 13, color: 'var(--ink-3)' }}>Lead Bio-Systems Analyst · Updated May 2026 · 16 min read</div></div></div>
    <div className="blog-content" style={{ fontSize: 18, lineHeight: 1.7, color: 'var(--ink-2)' }}>
      <Image src="/assets/glp1-tax-deduction-featured.png" alt="Medical receipt next to tax form and medication" width={1024} height={1024} style={{ width: '100%', borderRadius: 16, marginBottom: 40, border: '1px solid var(--line-soft)', height: "auto"}} priority={true} />
      <p>If you are paying $199–$499/month out-of-pocket for compounded GLP-1 medication, you may be able to recover <strong>20–37% of those costs</strong> through HSA/FSA accounts, medical expense tax deductions, or both. Over a year of treatment, this can save $500–$2,000+. Here is exactly how — and what documentation you need.</p>

      <h2 className="serif" style={{ fontSize: 32, marginTop: 48, marginBottom: 24, color: 'var(--ink)' }}>Three Ways to Reduce Your Effective GLP-1 Cost</h2>
      <div style={{ overflowX: 'auto', margin: '24px 0' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 15 }}>
          <thead><tr style={{ borderBottom: '2px solid var(--ink)' }}><th style={{ textAlign: 'left', padding: '12px 16px', fontWeight: 600 }}>Method</th><th style={{ textAlign: 'left', padding: '12px 16px', fontWeight: 600 }}>Tax Savings</th><th style={{ textAlign: 'left', padding: '12px 16px', fontWeight: 600 }}>Effective Monthly Cost ($199)</th><th style={{ textAlign: 'left', padding: '12px 16px', fontWeight: 600 }}>Requirements</th></tr></thead>
          <tbody>
            <tr style={{ borderBottom: '1px solid var(--line-soft)', background: '#F0FDF4' }}><td style={{ padding: '12px 16px', fontWeight: 700 }}>HSA/FSA</td><td style={{ padding: '12px 16px', color: 'green', fontWeight: 700 }}>22–37%</td><td style={{ padding: '12px 16px', color: 'green', fontWeight: 700, fontSize: 18 }}>$125–$155</td><td style={{ padding: '12px 16px', fontSize: 14 }}>Active HSA/FSA account</td></tr>
            <tr style={{ borderBottom: '1px solid var(--line-soft)' }}><td style={{ padding: '12px 16px', fontWeight: 500 }}>Schedule A deduction</td><td style={{ padding: '12px 16px' }}>12–37%</td><td style={{ padding: '12px 16px' }}>$125–$175</td><td style={{ padding: '12px 16px', fontSize: 14 }}>Itemize + exceed 7.5% AGI</td></tr>
            <tr><td style={{ padding: '12px 16px', fontWeight: 500 }}>Self-employed deduction</td><td style={{ padding: '12px 16px' }}>22–37%</td><td style={{ padding: '12px 16px' }}>$125–$155</td><td style={{ padding: '12px 16px', fontSize: 14 }}>Self-employed or 1099 income</td></tr>
          </tbody>
        </table>
      </div>

      <h2 className="serif" style={{ fontSize: 32, marginTop: 48, marginBottom: 24, color: 'var(--ink)' }}>Method 1: HSA/FSA (Pre-Tax Dollars)</h2>
      <p>This is the simplest and most impactful way to reduce your GLP-1 cost. We cover this in depth in our <a href="/blog/hsa-fsa-glp-1-2026" style={{ color: 'var(--brand)', fontWeight: 500 }}>complete HSA/FSA guide</a>, but here is the summary:</p>
      <ul>
        <li style={{ marginBottom: 12 }}><strong>How it works:</strong> HSA and FSA contributions are pre-tax — money goes in before income tax, Social Security tax, and Medicare tax are calculated. When you pay for GLP-1 with these funds, you effectively reduce the cost by your marginal tax rate.</li>
        <li style={{ marginBottom: 12 }}><strong>Is GLP-1 eligible?</strong> Yes. Prescription medication for a diagnosed medical condition (obesity, BMI 30+, or BMI 27+ with comorbidity) is an eligible expense under IRS Publication 502.</li>
        <li style={{ marginBottom: 12 }}><strong>The math:</strong> At a 24% federal tax bracket + 7.65% FICA = ~32% effective savings. $199/month becomes ~$135/month in after-tax terms. At the 37% bracket, your effective cost drops to ~$125/month.</li>
        <li style={{ marginBottom: 12 }}><strong>2026 HSA contribution limits:</strong> $4,300 (individual) or $8,550 (family). This covers your full GLP-1 cost and then some.</li>
      </ul>

      <h2 className="serif" style={{ fontSize: 32, marginTop: 48, marginBottom: 24, color: 'var(--ink)' }}>Method 2: Medical Expense Deduction (Schedule A)</h2>
      <p>If your total qualified medical expenses exceed 7.5% of your adjusted gross income (AGI), the excess is deductible as an itemized deduction:</p>
      <ul>
        <li style={{ marginBottom: 12 }}><strong>AGI $60,000:</strong> 7.5% threshold = $4,500. If your total medical expenses (GLP-1 + everything else) exceed $4,500, the excess is deductible.</li>
        <li style={{ marginBottom: 12 }}><strong>GLP-1 alone:</strong> At $199/month, that is $2,388/year. Combined with insurance premiums, dental work, vision, other prescriptions, and doctor visits, many households exceed the threshold.</li>
        <li style={{ marginBottom: 12 }}><strong>What qualifies:</strong> The medication itself, telehealth consultation fees, shipping costs for medication, supplies (syringes, alcohol swabs), and any related lab work ordered by your clinician.</li>
        <li style={{ marginBottom: 12 }}><strong>Key requirement:</strong> You must itemize deductions (Schedule A) rather than taking the standard deduction. This is advantageous only if your total itemized deductions exceed $14,600 (single) or $29,200 (married filing jointly) for 2026.</li>
      </ul>

      <h2 className="serif" style={{ fontSize: 32, marginTop: 48, marginBottom: 24, color: 'var(--ink)' }}>Method 3: Self-Employed Health Deduction</h2>
      <p>Self-employed individuals (sole proprietors, LLC members, 1099 contractors, S-corp owners) have an additional advantage:</p>
      <ul>
        <li style={{ marginBottom: 12 }}><strong>Above-the-line deduction:</strong> Health insurance premiums and qualifying medical expenses can be deducted on Schedule 1 — you do not need to itemize. This reduces AGI directly.</li>
        <li style={{ marginBottom: 12 }}><strong>How GLP-1 qualifies:</strong> If your GLP-1 is prescribed as part of your medical care and you are not eligible for employer-subsidized insurance, the cost is deductible against your business income.</li>
        <li style={{ marginBottom: 12 }}><strong>Tax savings:</strong> Self-employment income is subject to both income tax AND self-employment tax (15.3%). The deduction saves you on both, making it even more valuable than W-2 employee HSA contributions.</li>
      </ul>

      <div className="card" style={{ padding: 40, margin: '48px 0', textAlign: 'center', background: '#FFFDF9', borderColor: 'var(--brand)' }}>
        <h3 className="serif" style={{ fontSize: 28, marginBottom: 16, color: 'var(--ink)' }}>Effective Cost: As Low as $125/Month</h3>
        <p style={{ marginBottom: 24, fontSize: 16 }}>$199/month compounded semaglutide, paid with HSA at a 37% tax bracket. Even less with tirzepatide at higher brackets. <a href="/blog/hsa-fsa-glp-1-2026" style={{ color: 'var(--brand)', fontWeight: 500 }}>Full HSA/FSA guide →</a></p>
        <a href={START_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-lg" style={{ display: 'inline-flex', justifyContent: 'center' }}>Start Your Evaluation <Icon.Arrow /></a>
      </div>

      <h2 className="serif" style={{ fontSize: 32, marginTop: 48, marginBottom: 24, color: 'var(--ink)' }}>Documentation You Need</h2>
      <p>For any tax-advantaged method, keep these records:</p>
      <ul>
        <li style={{ marginBottom: 12 }}><strong>Prescription documentation:</strong> Your clinician{"'"}s prescription and any letters of medical necessity. TelehealthFX provides standard documentation with every prescription.</li>
        <li style={{ marginBottom: 12 }}><strong>Receipts and invoices:</strong> Monthly payment records from your pharmacy/provider. Digital records are acceptable.</li>
        <li style={{ marginBottom: 12 }}><strong>Diagnosis documentation:</strong> Your BMI at the time of prescription, any comorbidity documentation (hypertension, prediabetes, etc.), and the telehealth consultation records.</li>
        <li style={{ marginBottom: 12 }}><strong>HSA/FSA statements:</strong> Transaction records showing eligible medical expenses were paid from these accounts.</li>
      </ul>

      <h2 className="serif" style={{ fontSize: 32, marginTop: 48, marginBottom: 24, color: 'var(--ink)' }}>Frequently Asked Questions</h2>
      <h4 style={{ fontSize: 20, marginTop: 24, marginBottom: 8, color: 'var(--ink)' }}>Can I deduct compounded medication, or only brand-name?</h4>
      <p style={{ marginBottom: 24 }}>Both. The IRS does not distinguish between brand-name and compounded prescriptions. If it is prescribed by a licensed clinician for a medical condition, it is an eligible medical expense.</p>
      <h4 style={{ fontSize: 20, marginTop: 24, marginBottom: 8, color: 'var(--ink)' }}>What if I am using GLP-1 for {"'"}cosmetic{"'"} weight loss?</h4>
      <p style={{ marginBottom: 24 }}>GLP-1 is prescribed for medical weight management — obesity (BMI 30+) or overweight with comorbidity (BMI 27+). This is a medical treatment, not cosmetic. The distinction matters for tax purposes. If your clinician prescribed it, it qualifies. See our <a href="/blog/glp-1-bmi-27-30-eligibility-2026" style={{ color: 'var(--brand)', fontWeight: 500 }}>eligibility guide</a>.</p>
      <h4 style={{ fontSize: 20, marginTop: 24, marginBottom: 8, color: 'var(--ink)' }}>Can I use HSA/FSA to pay for compounded semaglutide?</h4>
      <p style={{ marginBottom: 24 }}>Yes. Compounded semaglutide prescribed for a medical condition is HSA/FSA eligible. Payment can be made directly from your HSA/FSA debit card. If you pay out-of-pocket, you can reimburse yourself from your HSA. Full details in our <a href="/blog/hsa-fsa-glp-1-2026" style={{ color: 'var(--brand)', fontWeight: 500 }}>HSA/FSA guide</a>.</p>
      <h4 style={{ fontSize: 20, marginTop: 24, marginBottom: 8, color: 'var(--ink)' }}>Are the telehealth consultation fees also deductible?</h4>
      <p style={{ marginBottom: 24 }}>Yes. Telehealth visits with a licensed clinician are qualified medical expenses for HSA/FSA and Schedule A purposes.</p>

      <div style={{ padding: 40, marginTop: 60, borderRadius: 20, background: 'var(--ink)', color: '#FBF8F3', textAlign: 'center' }}>
        <h2 className="serif" style={{ fontSize: 40, marginBottom: 20, color: '#FBF8F3' }}>Already Affordable. Now Tax-Advantaged.</h2>
        <p style={{ fontSize: 18, opacity: 0.9, marginBottom: 32, maxWidth: 500, margin: '0 auto 32px' }}>Compounded semaglutide from $199/mo. <a href="/blog/hsa-fsa-glp-1-2026" style={{ color: '#FBF8F3', textDecoration: 'underline' }}>HSA/FSA accepted</a>. Month-to-month. Cancel anytime.</p>
        <a href={START_URL} target="_blank" rel="noopener noreferrer" className="btn btn-lg" style={{ background: '#FBF8F3', color: 'var(--ink)', display: 'inline-flex', justifyContent: 'center', width: '100%', maxWidth: 250 }}>Get Started <Icon.Arrow /></a>
      </div>
      <div style={{ marginTop: 80, paddingTop: 40, borderTop: '1px solid var(--line-soft)', fontSize: 14, color: 'var(--ink-3)' }}>
        <h3 className="serif" style={{ fontSize: 24, marginBottom: 24, color: 'var(--ink)' }}>References</h3>
        <ol style={{ paddingLeft: 20, display: 'flex', flexDirection: 'column', gap: 16 }}>
          <li>IRS. (2025). <em>Publication 502: Medical and Dental Expenses</em>. <a href="https://www.irs.gov/publications/p502" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--brand)', textDecoration: 'underline' }}>irs.gov/publications/p502</a></li>
          <li>IRS. (2025). <em>Publication 969: Health Savings Accounts</em>. <a href="https://www.irs.gov/publications/p969" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--brand)', textDecoration: 'underline' }}>irs.gov/publications/p969</a></li>
        </ol>
      </div>
    </div>
  </div></section></>);
}
export { BlogGLP1TaxDeduction };
