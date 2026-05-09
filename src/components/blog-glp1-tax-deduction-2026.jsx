"use client";
import React from 'react';
import Image from 'next/image';
import { Icon } from './common.jsx';
const S = "https://go.telehealthfx.com/start";
function BlogGLP1TaxDeduction() {
  return (<><section className="section" style={{ minHeight: '60vh', paddingTop: 120 }}><div className="container" style={{ maxWidth: 800 }}>
    <div className="eyebrow" style={{ marginBottom: 20 }}>Financial Guide</div>
    <h1 className="serif" style={{ fontSize: 52, marginBottom: 24, lineHeight: 1.08 }}>Is Weight Loss Medication Tax Deductible? <span style={{ fontStyle: 'italic', color: 'var(--brand)' }}>GLP-1 Costs, HSA, FSA &amp; Medical Expense Deductions (2026)</span></h1>
    <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 48, paddingBottom: 24, borderBottom: '1px solid var(--line-soft)' }}><div style={{ width: 40, height: 40, borderRadius: '50%', background: 'var(--brand)' }}><Image src="/assets/jm-profile.jpg" alt="Julian Mercer" width={1024} height={1024} style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%', height: "auto"}} priority={true} /></div><div><div style={{ fontWeight: 500, fontSize: 14 }}><a href="/about" style={{ color: "var(--ink)", textDecoration: "none" }}>Julian Mercer, M.S.</a></div><div style={{ fontSize: 13, color: 'var(--ink-3)' }}>Lead Bio-Systems Analyst · Updated May 2026 · 12 min read</div></div></div>
    <div className="blog-content" style={{ fontSize: 18, lineHeight: 1.7, color: 'var(--ink-2)' }}>
      <Image src="/assets/glp1-tax-deduction-featured.png" alt="Medical receipt next to tax form and medication" width={1024} height={1024} style={{ width: '100%', borderRadius: 16, marginBottom: 40, border: '1px solid var(--line-soft)', height: "auto"}} priority={true} />
      <p>If you{"'"}re paying $199–$499/month out-of-pocket for compounded GLP-1, you may be able to recover <strong>20–37% of those costs</strong> through tax deductions, HSA/FSA accounts, or both. Here is how.</p>
      <h2 className="serif" style={{ fontSize: 32, marginTop: 48, marginBottom: 24, color: 'var(--ink)' }}>Three Ways to Reduce Your Effective Cost</h2>
      <h3 style={{ fontSize: 22, marginTop: 32, marginBottom: 12, color: 'var(--ink)' }}>1. HSA/FSA (Pre-Tax Dollars)</h3>
      <p>GLP-1 medication prescribed for obesity is an eligible medical expense. Paying with HSA/FSA saves you your marginal tax rate — typically 22–37%. $199/month becomes effectively $146–$155/month. Full details in our <a href="/blog/hsa-fsa-glp-1-2026" style={{ color: 'var(--brand)', fontWeight: 500 }}>HSA/FSA guide</a>.</p>
      <h3 style={{ fontSize: 22, marginTop: 32, marginBottom: 12, color: 'var(--ink)' }}>2. Medical Expense Deduction (Schedule A)</h3>
      <p>If your total medical expenses exceed 7.5% of AGI, the excess is deductible. At $199/month ($2,388/year), GLP-1 alone may push you over the threshold when combined with other medical costs.</p>
      <h3 style={{ fontSize: 22, marginTop: 32, marginBottom: 12, color: 'var(--ink)' }}>3. Self-Employed Health Deduction</h3>
      <p>Self-employed individuals can deduct health insurance premiums and qualifying medical costs above the line — no itemizing required. If you{"'"}re self-employed, GLP-1 costs are deductible against your business income.</p>
      <div className="card" style={{ padding: 40, margin: '48px 0', textAlign: 'center', background: '#FFFDF9', borderColor: 'var(--brand)' }}>
        <h3 className="serif" style={{ fontSize: 28, marginBottom: 16, color: 'var(--ink)' }}>Effective Cost: As Low as $146/Month</h3>
        <p style={{ marginBottom: 24, fontSize: 16 }}>$199/month compounded semaglutide, paid with HSA/FSA at a 37% tax bracket.</p>
        <a href={S} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-lg" style={{ display: 'inline-flex', justifyContent: 'center' }}>Start Your Evaluation <Icon.Arrow /></a>
      </div>
      <div style={{ padding: 40, marginTop: 60, borderRadius: 20, background: 'var(--ink)', color: '#FBF8F3', textAlign: 'center' }}>
        <h2 className="serif" style={{ fontSize: 40, marginBottom: 20, color: '#FBF8F3' }}>Already Affordable. Now Tax-Advantaged.</h2>
        <p style={{ fontSize: 18, opacity: 0.9, marginBottom: 32, maxWidth: 500, margin: '0 auto 32px' }}>From $199/month. HSA/FSA accepted. Month-to-month.</p>
        <a href={S} target="_blank" rel="noopener noreferrer" className="btn btn-lg" style={{ background: '#FBF8F3', color: 'var(--ink)', display: 'inline-flex', justifyContent: 'center', width: '100%', maxWidth: 250 }}>Get Started <Icon.Arrow /></a>
      </div>
    </div>
  </div></section></>);
}
export { BlogGLP1TaxDeduction };
