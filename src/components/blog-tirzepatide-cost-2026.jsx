"use client";
import React from 'react';
import Image from 'next/image';
import { Icon } from './common.jsx';
const START_URL = "https://go.telehealthfx.com/start";

function BlogTirzepatideCost() {
  return (<><section className="section" style={{ minHeight: '60vh', paddingTop: 120 }}><div className="container" style={{ maxWidth: 800 }}>
    <div className="eyebrow" style={{ marginBottom: 20 }}>Pricing Guide</div>
    <h1 className="serif" style={{ fontSize: 52, marginBottom: 24, lineHeight: 1.08 }}>How Much Does Tirzepatide Cost? <span style={{ fontStyle: 'italic', color: 'var(--brand)' }}>Zepbound vs. Mounjaro vs. Compounded (2026 Pricing)</span></h1>
    <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 48, paddingBottom: 24, borderBottom: '1px solid var(--line-soft)' }}><div style={{ width: 40, height: 40, borderRadius: '50%', background: 'var(--brand)' }}><Image src="/assets/jm-profile.jpg" alt="Julian Mercer" width={1024} height={1024} style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%', height: "auto"}} priority={true} /></div><div><div style={{ fontWeight: 500, fontSize: 14 }}><a href="/about" style={{ color: "var(--ink)", textDecoration: "none" }}>Julian Mercer, M.S.</a></div><div style={{ fontSize: 13, color: 'var(--ink-3)' }}>Lead Bio-Systems Analyst · Updated May 2026 · 16 min read</div></div></div>
    <div className="blog-content" style={{ fontSize: 18, lineHeight: 1.7, color: 'var(--ink-2)' }}>
      <Image src="/assets/tirzepatide-cost-2026-featured.png" alt="Tirzepatide pricing comparison from brand to compounded" width={1024} height={1024} style={{ width: '100%', borderRadius: 16, marginBottom: 40, border: '1px solid var(--line-soft)', background: '#111', height: "auto"}} priority={true} />
      <p>Tirzepatide produces 50% more weight loss than semaglutide. But brand-name prices make it inaccessible for most Americans. Here is every pricing option available in 2026 — from the $1,060 Zepbound list price down to $349 compounded.</p>

      <h2 className="serif" style={{ fontSize: 32, marginTop: 48, marginBottom: 24, color: 'var(--ink)' }}>Complete Price Comparison</h2>
      <div style={{ overflowX: 'auto', margin: '24px 0' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 15 }}>
          <thead><tr style={{ borderBottom: '2px solid var(--ink)' }}><th style={{ textAlign: 'left', padding: '12px 16px', fontWeight: 600 }}>Option</th><th style={{ textAlign: 'left', padding: '12px 16px', fontWeight: 600 }}>Monthly</th><th style={{ textAlign: 'left', padding: '12px 16px', fontWeight: 600 }}>Annual</th><th style={{ textAlign: 'left', padding: '12px 16px', fontWeight: 600 }}>Notes</th></tr></thead>
          <tbody>
            <tr style={{ borderBottom: '1px solid var(--line-soft)' }}><td style={{ padding: '12px 16px', fontWeight: 500 }}>Zepbound (list)</td><td style={{ padding: '12px 16px', color: '#DC2626', fontWeight: 600 }}>$1,060</td><td style={{ padding: '12px 16px', color: '#DC2626' }}>$12,720</td><td style={{ padding: '12px 16px', fontSize: 13 }}>Weight loss indication. Limited insurance.</td></tr>
            <tr style={{ borderBottom: '1px solid var(--line-soft)' }}><td style={{ padding: '12px 16px', fontWeight: 500 }}>Mounjaro (list)</td><td style={{ padding: '12px 16px', color: '#DC2626', fontWeight: 600 }}>$1,023</td><td style={{ padding: '12px 16px', color: '#DC2626' }}>$12,276</td><td style={{ padding: '12px 16px', fontSize: 13 }}>Diabetes indication. Broader insurance.</td></tr>
            <tr style={{ borderBottom: '1px solid var(--line-soft)' }}><td style={{ padding: '12px 16px', fontWeight: 500 }}>Zepbound (with insurance)</td><td style={{ padding: '12px 16px', color: '#b45309' }}>$25–$500</td><td style={{ padding: '12px 16px', color: '#b45309' }}>Varies</td><td style={{ padding: '12px 16px', fontSize: 13 }}>Most plans deny. <a href="/blog/insurance-coverage-glp1-2026" style={{ color: 'var(--brand)' }}>Coverage guide</a>.</td></tr>
            <tr style={{ borderBottom: '1px solid var(--line-soft)' }}><td style={{ padding: '12px 16px', fontWeight: 500 }}>Eli Lilly savings card</td><td style={{ padding: '12px 16px', color: '#b45309' }}>$0–$550</td><td style={{ padding: '12px 16px', color: '#b45309' }}>Varies</td><td style={{ padding: '12px 16px', fontSize: 13 }}>Requires commercial insurance. Caps apply.</td></tr>
            <tr style={{ borderBottom: '1px solid var(--line-soft)' }}><td style={{ padding: '12px 16px', fontWeight: 500 }}>Lilly Direct</td><td style={{ padding: '12px 16px', color: '#b45309' }}>$399–$549</td><td style={{ padding: '12px 16px', color: '#b45309' }}>$4,788–$6,588</td><td style={{ padding: '12px 16px', fontSize: 13 }}>Eli Lilly{"'"}s cash-pay program for singles vials.</td></tr>
            <tr style={{ background: '#F0FDF4' }}><td style={{ padding: '12px 16px', fontWeight: 700 }}>Compounded tirzepatide</td><td style={{ padding: '12px 16px', color: 'green', fontWeight: 700, fontSize: 20 }}>$349–$499</td><td style={{ padding: '12px 16px', color: 'green', fontWeight: 600 }}>$4,188–$5,988</td><td style={{ padding: '12px 16px', fontSize: 13 }}>503A pharmacy. No insurance. <a href="/blog/hsa-fsa-glp-1-2026" style={{ color: 'var(--brand)' }}>HSA/FSA</a>.</td></tr>
          </tbody>
        </table>
      </div>

      <h2 className="serif" style={{ fontSize: 32, marginTop: 48, marginBottom: 24, color: 'var(--ink)' }}>Why Tirzepatide Costs More Than Semaglutide</h2>
      <p>Even compounded, tirzepatide costs $150–$200 more per month than compounded semaglutide. Two reasons:</p>
      <ul>
        <li style={{ marginBottom: 12 }}><strong>Raw ingredient cost:</strong> Tirzepatide raw material is more expensive to produce than semaglutide due to its larger, more complex molecular structure (39 amino acids with a C20 fatty diacid moiety).</li>
        <li style={{ marginBottom: 12 }}><strong>Dosing:</strong> Tirzepatide{"'"}s therapeutic doses (5–15 mg/week) are significantly higher by mass than semaglutide (0.25–2.4 mg/week), requiring more active ingredient per vial.</li>
      </ul>

      <div className="card" style={{ padding: 40, margin: '48px 0', textAlign: 'center', background: '#FFFDF9', borderColor: 'var(--brand)' }}>
        <h3 className="serif" style={{ fontSize: 28, marginBottom: 16, color: 'var(--ink)' }}>50% More Weight Loss. 67% Less Cost.</h3>
        <p style={{ marginBottom: 24, fontSize: 16 }}>Compounded tirzepatide from $349/month — versus $1,060 for Zepbound. All-inclusive pricing. <a href="/blog/hsa-fsa-glp-1-2026" style={{ color: 'var(--brand)', fontWeight: 500 }}>HSA/FSA accepted</a>.</p>
        <a href={START_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-lg" style={{ display: 'inline-flex', justifyContent: 'center' }}>See Your Price <Icon.Arrow /></a>
      </div>

      <h2 className="serif" style={{ fontSize: 32, marginTop: 48, marginBottom: 24, color: 'var(--ink)' }}>Is It Worth the Extra Cost Over Semaglutide?</h2>
      <p>The cost-per-pound math favors tirzepatide. If semaglutide at $199/month produces 15% weight loss and tirzepatide at $349/month produces 22.5% weight loss, the cost per percentage point of weight loss is roughly equal. You{"'"}re paying more for more results. For patients with higher starting BMI, significant insulin resistance, or prior semaglutide plateau, tirzepatide often delivers the breakthrough. See our <a href="/blog/semaglutide-vs-tirzepatide-decision-2026" style={{ color: 'var(--brand)', fontWeight: 500 }}>complete decision guide</a>.</p>

      <h2 className="serif" style={{ fontSize: 32, marginTop: 48, marginBottom: 24, color: 'var(--ink)' }}>Frequently Asked Questions</h2>
      <h4 style={{ fontSize: 20, marginTop: 24, marginBottom: 8, color: 'var(--ink)' }}>Can I use HSA/FSA for compounded tirzepatide?</h4>
      <p style={{ marginBottom: 24 }}>Yes. Tirzepatide prescribed for a medical condition qualifies as an eligible HSA/FSA expense. <a href="/blog/hsa-fsa-glp-1-2026" style={{ color: 'var(--brand)', fontWeight: 500 }}>Full HSA/FSA guide</a>.</p>
      <h4 style={{ fontSize: 20, marginTop: 24, marginBottom: 8, color: 'var(--ink)' }}>What is Lilly Direct?</h4>
      <p style={{ marginBottom: 24 }}>Eli Lilly launched a direct-to-consumer cash-pay program for brand-name Zepbound and Mounjaro. Prices start around $399/month for lower doses — competitive with compounded, but limited dose flexibility and only available in select states.</p>

      <div style={{ padding: 40, marginTop: 60, borderRadius: 20, background: 'var(--ink)', color: '#FBF8F3', textAlign: 'center' }}>
        <h2 className="serif" style={{ fontSize: 40, marginBottom: 20, color: '#FBF8F3' }}>The Most Effective GLP-1. At a Price That Makes Sense.</h2>
        <p style={{ fontSize: 18, opacity: 0.9, marginBottom: 32, maxWidth: 500, margin: '0 auto 32px' }}>Compounded tirzepatide. All-inclusive. No insurance required.</p>
        <a href={START_URL} target="_blank" rel="noopener noreferrer" className="btn btn-lg" style={{ background: '#FBF8F3', color: 'var(--ink)', display: 'inline-flex', justifyContent: 'center', width: '100%', maxWidth: 250 }}>Get Started <Icon.Arrow /></a>
      </div>
      <div style={{ marginTop: 80, paddingTop: 40, borderTop: '1px solid var(--line-soft)', fontSize: 14, color: 'var(--ink-3)' }}>
        <h3 className="serif" style={{ fontSize: 24, marginBottom: 24, color: 'var(--ink)' }}>References</h3>
        <ol style={{ paddingLeft: 20, display: 'flex', flexDirection: 'column', gap: 16 }}>
          <li>Eli Lilly. (2026). <em>Zepbound and Mounjaro pricing</em>. <a href="https://www.lilly.com" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--brand)', textDecoration: 'underline' }}>lilly.com</a></li>
          <li>GoodRx. (2026). <em>Tirzepatide price comparison</em>. <a href="https://www.goodrx.com/tirzepatide" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--brand)', textDecoration: 'underline' }}>goodrx.com/tirzepatide</a></li>
        </ol>
      </div>
    </div>
  </div></section></>);
}
export { BlogTirzepatideCost };
