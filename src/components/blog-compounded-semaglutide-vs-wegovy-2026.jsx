"use client";
import React from 'react';
import Image from 'next/image';
import { Icon } from './common.jsx';
const START_URL = "https://go.telehealthfx.com/start";

function BlogCompoundedVsWegovy() {
  return (<>
    <section className="section" style={{ minHeight: '60vh', paddingTop: 120 }}>
    <div className="container" style={{ maxWidth: 800 }}>
      <div className="eyebrow" style={{ marginBottom: 20 }}>Head-to-Head Comparison</div>
      <h1 className="serif" style={{ fontSize: 56, marginBottom: 24, lineHeight: 1.1 }}>Compounded Semaglutide vs. Wegovy Self-Pay: <span style={{ fontStyle: 'italic', color: 'var(--brand)' }}>Which Saves You More in 2026?</span></h1>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 48, paddingBottom: 24, borderBottom: '1px solid var(--line-soft)' }}>
        <div style={{ width: 40, height: 40, borderRadius: '50%', background: 'var(--brand)' }}><Image src="/assets/jm-profile.jpg" alt="Julian Mercer" width={1024} height={1024} style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%', height: "auto"}} priority={true} /></div>
        <div><div style={{ fontWeight: 500, fontSize: 14 }}><a href="/about" style={{ color: "var(--ink)", textDecoration: "none" }}>Julian Mercer, M.S.</a></div><div style={{ fontSize: 13, color: 'var(--ink-3)' }}>Lead Bio-Systems Analyst · Updated May 2026 · 24 min read</div></div>
      </div>
      <div className="blog-content" style={{ fontSize: 18, lineHeight: 1.7, color: 'var(--ink-2)' }}>
        <Image src="/assets/compounded-semaglutide-vs-wegovy-featured.png" alt="Wegovy branded pen vs compounded semaglutide vial comparison" width={1024} height={1024} style={{ width: '100%', borderRadius: 16, marginBottom: 40, border: '1px solid var(--line-soft)', background: '#111', height: "auto"}} priority={true} />

        <p>You have narrowed your decision down to two options: <strong>branded Wegovy (self-pay)</strong> or <strong>compounded semaglutide through telehealth.</strong> Both deliver the same active molecule — semaglutide. Both require a prescription from a licensed clinician. But the cost, convenience, and regulatory protections differ significantly. This guide provides a transparent, side-by-side comparison so you can make the right choice for your situation.</p>

        <h2 className="serif" style={{ fontSize: 32, marginTop: 48, marginBottom: 24, color: 'var(--ink)' }}>The Complete Comparison</h2>

        <div style={{ overflowX: 'auto', margin: '40px 0' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 15 }}>
            <thead><tr style={{ borderBottom: '2px solid var(--ink)' }}><th style={{ textAlign: 'left', padding: '12px 16px', fontWeight: 600 }}>Factor</th><th style={{ textAlign: 'left', padding: '12px 16px', fontWeight: 600 }}>Wegovy (Self-Pay)</th><th style={{ textAlign: 'left', padding: '12px 16px', fontWeight: 600 }}>Compounded Semaglutide</th></tr></thead>
            <tbody>
              <tr style={{ borderBottom: '1px solid var(--line-soft)' }}><td style={{ padding: '12px 16px', fontWeight: 500 }}>Active molecule</td><td style={{ padding: '12px 16px' }}>Semaglutide</td><td style={{ padding: '12px 16px' }}>Semaglutide</td></tr>
              <tr style={{ borderBottom: '1px solid var(--line-soft)' }}><td style={{ padding: '12px 16px', fontWeight: 500 }}>Manufacturer</td><td style={{ padding: '12px 16px' }}>Novo Nordisk</td><td style={{ padding: '12px 16px' }}>Licensed 503A pharmacy</td></tr>
              <tr style={{ borderBottom: '1px solid var(--line-soft)' }}><td style={{ padding: '12px 16px', fontWeight: 500 }}>FDA-approved?</td><td style={{ padding: '12px 16px', color: 'green', fontWeight: 600 }}>Yes</td><td style={{ padding: '12px 16px', color: '#b45309' }}>No (legally compounded)</td></tr>
              <tr style={{ borderBottom: '1px solid var(--line-soft)' }}><td style={{ padding: '12px 16px', fontWeight: 500 }}>Monthly cost</td><td style={{ padding: '12px 16px' }}>$500–$1,350</td><td style={{ padding: '12px 16px', color: 'var(--brand)', fontWeight: 600 }}>$150–$399</td></tr>
              <tr style={{ borderBottom: '1px solid var(--line-soft)' }}><td style={{ padding: '12px 16px', fontWeight: 500 }}>Annual cost (12 months)</td><td style={{ padding: '12px 16px' }}>$6,000–$16,200</td><td style={{ padding: '12px 16px', color: 'var(--brand)', fontWeight: 600 }}>$1,800–$4,788</td></tr>
              <tr style={{ borderBottom: '1px solid var(--line-soft)' }}><td style={{ padding: '12px 16px', fontWeight: 500 }}>Delivery device</td><td style={{ padding: '12px 16px' }}>Pre-filled pen</td><td style={{ padding: '12px 16px' }}>Vial + syringe</td></tr>
              <tr style={{ borderBottom: '1px solid var(--line-soft)' }}><td style={{ padding: '12px 16px', fontWeight: 500 }}>Where to fill</td><td style={{ padding: '12px 16px' }}>Retail pharmacy (CVS, Walgreens)</td><td style={{ padding: '12px 16px' }}>Direct-to-door from compounder</td></tr>
              <tr style={{ borderBottom: '1px solid var(--line-soft)' }}><td style={{ padding: '12px 16px', fontWeight: 500 }}>Availability</td><td style={{ padding: '12px 16px', color: '#c00' }}>Subject to shortages</td><td style={{ padding: '12px 16px', color: 'green' }}>Generally stable supply</td></tr>
              <tr><td style={{ padding: '12px 16px', fontWeight: 500 }}>Dose flexibility</td><td style={{ padding: '12px 16px' }}>Fixed doses (0.25–2.4 mg)</td><td style={{ padding: '12px 16px', color: 'green' }}>Custom doses available</td></tr>
            </tbody>
          </table>
        </div>

        <h2 className="serif" style={{ fontSize: 32, marginTop: 48, marginBottom: 24, color: 'var(--ink)' }}>When Wegovy Self-Pay Makes Sense</h2>
        <ul>
          <li style={{ marginBottom: 12 }}><strong>You prioritize FDA approval:</strong> Wegovy has undergone full FDA manufacturing review, clinical trials (STEP program), and post-market surveillance. This provides the highest regulatory assurance.</li>
          <li style={{ marginBottom: 12 }}><strong>You want pen convenience:</strong> Pre-filled pens are simpler to use — no drawing from vials, no measuring doses.</li>
          <li style={{ marginBottom: 12 }}><strong>You can afford the premium:</strong> At $6,000–$16,200/year, Wegovy self-pay is a significant financial commitment.</li>
          <li style={{ marginBottom: 12 }}><strong>Your insurance may eventually cover it:</strong> Having an established Wegovy prescription can streamline a future insurance prior authorization.</li>
        </ul>

        <h2 className="serif" style={{ fontSize: 32, marginTop: 48, marginBottom: 24, color: 'var(--ink)' }}>When Compounded Semaglutide Makes Sense</h2>
        <ul>
          <li style={{ marginBottom: 12 }}><strong>Cost is a primary factor:</strong> At $1,800–$4,788/year, compounded semaglutide saves $4,200–$11,400 annually compared to Wegovy self-pay.</li>
          <li style={{ marginBottom: 12 }}><strong>Wegovy is out of stock:</strong> Branded GLP-1 <a href="/blog/glp-1-shortage-update-may-2026" style={{ color: 'var(--brand)', fontWeight: 500 }}>shortages</a> have been chronic since 2023. Compounded pharmacies maintain dedicated inventory.</li>
          <li style={{ marginBottom: 12 }}><strong>You want dose flexibility:</strong> Compounded semaglutide can be prepared at custom concentrations, enabling more granular dose titration.</li>
          <li style={{ marginBottom: 12 }}><strong>You prefer direct-to-door delivery:</strong> No pharmacy lines, no stock issues, no insurance paperwork.</li>
        </ul>

        <p>For a deeper dive into compounded medication safety, read our <a href="/blog/is-compounded-semaglutide-safe-what-you-need-to-kn" style={{ color: 'var(--brand)', fontWeight: 500 }}>compounded semaglutide safety guide</a> and understand the <a href="/blog/fda-compounding-ban" style={{ color: 'var(--brand)', fontWeight: 500 }}>current FDA regulatory landscape</a>. For cost optimization strategies, see our <a href="/blog/glp-1-cost-without-insurance-2026" style={{ color: 'var(--brand)', fontWeight: 500 }}>cost without insurance guide</a> and <a href="/blog/hsa-fsa-glp-1-2026" style={{ color: 'var(--brand)', fontWeight: 500 }}>HSA/FSA payment guide</a>.</p>

        <div className="card" style={{ padding: 40, margin: '48px 0', textAlign: 'center', background: '#FFFDF9', borderColor: 'var(--brand)' }}>
          <h3 className="serif" style={{ fontSize: 28, marginBottom: 16, color: 'var(--ink)' }}>Compounded Semaglutide. Fraction of the Price.</h3>
          <p style={{ marginBottom: 24, fontSize: 16 }}>TelehealthFX provides compounded semaglutide from licensed 503A pharmacies at all-inclusive pricing. No membership fees, no hidden charges.</p>
          <a href={START_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-lg" style={{ display: 'inline-flex', justifyContent: 'center' }}>See Your Pricing <Icon.Arrow /></a>
        </div>

        <h2 className="serif" style={{ fontSize: 32, marginTop: 48, marginBottom: 24, color: 'var(--ink)' }}>The 12-Month Cost Breakdown</h2>
        <p>Here is what each pathway costs over a full year of treatment at maintenance dose:</p>
        <div style={{ overflowX: 'auto', margin: '24px 0' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 16 }}>
            <thead><tr style={{ borderBottom: '2px solid var(--ink)' }}><th style={{ textAlign: 'left', padding: '12px 16px', fontWeight: 600 }}>Pathway</th><th style={{ textAlign: 'left', padding: '12px 16px', fontWeight: 600 }}>Monthly</th><th style={{ textAlign: 'left', padding: '12px 16px', fontWeight: 600 }}>12-Month Total</th></tr></thead>
            <tbody>
              <tr style={{ borderBottom: '1px solid var(--line-soft)' }}><td style={{ padding: '12px 16px' }}>Wegovy self-pay (list price)</td><td style={{ padding: '12px 16px' }}>$1,350</td><td style={{ padding: '12px 16px', fontWeight: 600 }}>$16,200</td></tr>
              <tr style={{ borderBottom: '1px solid var(--line-soft)' }}><td style={{ padding: '12px 16px' }}>Wegovy self-pay (savings program)</td><td style={{ padding: '12px 16px' }}>~$500</td><td style={{ padding: '12px 16px', fontWeight: 600 }}>~$6,000</td></tr>
              <tr style={{ background: 'var(--brand-soft)' }}><td style={{ padding: '12px 16px', fontWeight: 600 }}>Compounded (all-inclusive telehealth)</td><td style={{ padding: '12px 16px', fontWeight: 600, color: 'var(--brand)' }}>$199–$399</td><td style={{ padding: '12px 16px', fontWeight: 700, color: 'var(--brand)' }}>$2,388–$4,788</td></tr>
              <tr style={{ background: '#f0fdf4' }}><td style={{ padding: '12px 16px', fontWeight: 600 }}>Compounded + HSA/FSA (32% bracket)</td><td style={{ padding: '12px 16px', fontWeight: 600, color: 'green' }}>$135–$271</td><td style={{ padding: '12px 16px', fontWeight: 700, color: 'green' }}>$1,624–$3,256</td></tr>
            </tbody>
          </table>
        </div>

        <p>At the most optimized level (compounded semaglutide + HSA/FSA tax savings), you can access GLP-1 therapy for as little as <strong>$1,624/year</strong> — a 90% reduction from Wegovy list price.</p>

        <div className="card" style={{ padding: 40, margin: '48px 0', textAlign: 'center', background: '#FFFDF9', borderColor: 'var(--brand)' }}>
          <div style={{ width: 48, height: 48, borderRadius: '50%', background: 'var(--brand-soft)', color: 'var(--brand)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px' }}><Icon.Check size={24} /></div>
          <h3 className="serif" style={{ fontSize: 28, marginBottom: 16, color: 'var(--ink)' }}>Make the Smart Financial Choice</h3>
          <p style={{ marginBottom: 24, fontSize: 16 }}>Same semaglutide. Licensed pharmacy. Up to 90% less than branded self-pay.</p>
          <a href={START_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-lg" style={{ display: 'inline-flex', justifyContent: 'center' }}>Get Started <Icon.Arrow /></a>
        </div>

        <h2 className="serif" style={{ fontSize: 32, marginTop: 48, marginBottom: 24, color: 'var(--ink)' }}>Frequently Asked Questions</h2>
        <h4 style={{ fontSize: 20, marginTop: 24, marginBottom: 8, color: 'var(--ink)' }}>How does compounded semaglutide differ from branded options?</h4>
        <p style={{ marginBottom: 24 }}>When sourced from a licensed 503A pharmacy using pure semaglutide base at equivalent doses, both contain semaglutide, though compounded versions are not FDA-approved and are not therapeutically equivalent to branded products. The difference is manufacturing oversight, not molecular chemistry.</p>
        <h4 style={{ fontSize: 20, marginTop: 24, marginBottom: 8, color: 'var(--ink)' }}>Why is compounded so much cheaper?</h4>
        <p style={{ marginBottom: 24 }}>Branded Wegovy's price includes Novo Nordisk's R&D recovery, FDA approval costs, marketing budget, and profit margin. Compounded semaglutide is formulated with semaglutide but bypasses brand-name markups while still requiring legitimate pharmacy licensing and clinician oversight.</p>
        <h4 style={{ fontSize: 20, marginTop: 24, marginBottom: 8, color: 'var(--ink)' }}>Can I switch from Wegovy to compounded?</h4>
        <p style={{ marginBottom: 24 }}>Yes. Your new clinician will prescribe compounded semaglutide at your current established dose. No re-titration needed. See our <a href="/blog/switch-glp-1-providers-2026" style={{ color: 'var(--brand)', fontWeight: 500 }}>provider switching guide</a> for a seamless transition process.</p>

        <div style={{ padding: 40, marginTop: 60, borderRadius: 20, background: 'var(--ink)', color: '#FBF8F3', textAlign: 'center' }}>
          <h2 className="serif" style={{ fontSize: 40, marginBottom: 20, color: '#FBF8F3' }}>Save Thousands Without Sacrificing Quality</h2>
          <p style={{ fontSize: 18, opacity: 0.9, marginBottom: 32, maxWidth: 500, margin: '0 auto 32px' }}>Licensed pharmacy. Compounded semaglutide is not FDA-approved. All-inclusive pricing from $199/month.</p>
          <a href={START_URL} target="_blank" rel="noopener noreferrer" className="btn btn-lg" style={{ background: '#FBF8F3', color: 'var(--ink)', display: 'inline-flex', justifyContent: 'center', width: '100%', maxWidth: 250 }}>Get Started <Icon.Arrow /></a>
        </div>

        <div style={{ marginTop: 80, paddingTop: 40, borderTop: '1px solid var(--line-soft)', fontSize: 14, color: 'var(--ink-3)' }}>
          <h3 className="serif" style={{ fontSize: 24, marginBottom: 24, color: 'var(--ink)' }}>References</h3>
          <ol style={{ paddingLeft: 20, display: 'flex', flexDirection: 'column', gap: 16 }}>
            <li>Novo Nordisk. (2026). <em>Wegovy list price and savings programs</em>. <a href="https://www.novocare.com/wegovy/savings-card.html" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--brand)', textDecoration: 'underline' }}>https://www.novocare.com/wegovy/savings-card.html</a></li>
            <li>U.S. Food and Drug Administration. (2026). <em>503A compounding requirements</em>. <a href="https://www.fda.gov/drugs/human-drug-compounding/drug-quality-and-security-act" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--brand)', textDecoration: 'underline' }}>https://www.fda.gov/drugs/human-drug-compounding/drug-quality-and-security-act</a></li>
            <li>Wilding, J. P. H., et al. (2021). Once-weekly semaglutide (STEP 1). <em>NEJM</em>, 384(11), 989–1002. <a href="https://doi.org/10.1056/NEJMoa2032183" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--brand)', textDecoration: 'underline' }}>https://doi.org/10.1056/NEJMoa2032183</a></li>
          </ol>
        </div>
      </div>
    </div>
      <p style={{ fontSize: 13, color: 'var(--ink-3)', marginTop: 32, paddingTop: 20, borderTop: '1px solid var(--line-soft)' }}>Disclaimer: Mounjaro®, Zepbound®, Ozempic®, and Wegovy® are registered trademarks of their respective owners (Eli Lilly and Company, Novo Nordisk). Telehealth FX is an independent telehealth platform and is not affiliated with, endorsed by, or sponsored by these trademark owners. Compounded medications are prepared by state-licensed compounding pharmacies pursuant to a patient-specific prescription and are not reviewed or approved by the FDA for safety or efficacy.</p>
    </section>
  </>);
}
export { BlogCompoundedVsWegovy };
