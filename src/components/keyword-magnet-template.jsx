'use client';

import React, { useState } from 'react';
import Image from 'next/image';

export function KeywordMagnetTemplate({ data }) {
  const [selectedDose, setSelectedDose] = useState(
    data.medication === 'Tirzepatide' ? '5.0 mg' :
    data.medication === 'TRT' ? '200 mg/mL' :
    data.medication === 'Enclomiphene' ? '25 mg' : '1.0 mg'
  );

  const doses = data.medication === 'Tirzepatide'
    ? ['2.5 mg', '5.0 mg', '7.5 mg', '10.0 mg', '12.5 mg', '15.0 mg']
    : data.medication === 'TRT'
    ? ['100 mg/wk', '150 mg/wk', '200 mg/wk', 'Topical Cream', 'Enclomiphene']
    : data.medication === 'Enclomiphene'
    ? ['12.5 mg', '25 mg', '50 mg']
    : ['0.25 mg', '0.5 mg', '1.0 mg', '1.7 mg', '2.4 mg'];

  const ctaUrl = data.ctaUrl || 'https://go.telehealthfx.com/start';

  return (
    <section className="section" style={{ minHeight: '60vh', paddingTop: '120px', paddingBottom: '100px' }}>
      <div className="container" style={{ maxWidth: '840px' }}>
        
        {/* Breadcrumb Navigation */}
        <div style={{ fontSize: '13px', color: 'var(--ink-3)', marginBottom: '16px' }}>
          <a href="/" style={{ color: 'inherit', textDecoration: 'none' }}>Home</a>
          <span style={{ margin: '0 8px' }}>/</span>
          <a href="/compare/" style={{ color: 'inherit', textDecoration: 'none' }}>Compare</a>
          <span style={{ margin: '0 8px' }}>/</span>
          <span style={{ color: 'var(--brand)', fontWeight: 600 }}>{data.category}</span>
        </div>

        {/* Eyebrow Category Badge */}
        <div style={{ display: 'inline-block', padding: '4px 12px', borderRadius: '6px', backgroundColor: 'rgba(46, 74, 59, 0.08)', color: 'var(--brand)', fontSize: '12px', fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '16px' }}>
          {data.category} · 2026 Clinical Verification
        </div>

        {/* H1 Heading */}
        <h1 className="serif" style={{ fontSize: '46px', marginBottom: '20px', lineHeight: 1.12, color: 'var(--ink)' }}>
          {data.h1}
        </h1>

        {/* Author / Clinical Review Strip */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '36px', paddingBottom: '20px', borderBottom: '1px solid var(--line-soft)' }}>
          <div style={{ width: '40px', height: '40px', borderRadius: '50%', overflow: 'hidden', backgroundColor: 'var(--brand)' }}>
            <Image src="/assets/jm-profile.jpg" alt="Julian Mercer" width={80} height={80} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
          <div>
            <div style={{ fontWeight: 600, fontSize: '14px', color: 'var(--ink)' }}>
              <a href="/about/" style={{ color: 'inherit', textDecoration: 'none' }}>Julian Mercer, M.S.</a>
              <span style={{ fontSize: '12px', color: 'var(--ink-3)', marginLeft: '8px' }}>• Medically Reviewed</span>
            </div>
            <div style={{ fontSize: '12px', color: 'var(--ink-3)' }}>Lead Bio-Systems Analyst · Updated September 2026 · 12 min read</div>
          </div>
        </div>

        {/* Above-the-Fold Featured Snippet Direct Answer Card */}
        <div style={{ backgroundColor: '#F8FAF8', border: '2px solid var(--brand)', borderRadius: '16px', padding: '26px 28px', marginBottom: '36px', boxShadow: '0 4px 18px rgba(46, 74, 59, 0.08)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '10px' }}>
            <span style={{ fontSize: '18px' }}>⚡</span>
            <span style={{ fontSize: '11px', fontWeight: 800, color: 'var(--brand)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
              DIRECT CLINICAL ANSWER &amp; SUMMARY
            </span>
          </div>
          <p style={{ fontSize: '16px', color: 'var(--ink)', lineHeight: 1.6, margin: '0 0 18px', fontWeight: 500 }}>
            {data.directAnswer}
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '12px', marginBottom: '18px' }}>
            <div style={{ background: '#FFFFFF', padding: '12px 14px', borderRadius: '10px', border: '1px solid var(--line-soft)' }}>
              <span style={{ fontSize: '11px', color: 'var(--ink-3)', display: 'block', textTransform: 'uppercase' }}>First Month Promo</span>
              <strong style={{ fontSize: '16px', color: '#15803D' }}>{data.price}</strong>
            </div>
            <div style={{ background: '#FFFFFF', padding: '12px 14px', borderRadius: '10px', border: '1px solid var(--line-soft)' }}>
              <span style={{ fontSize: '11px', color: 'var(--ink-3)', display: 'block', textTransform: 'uppercase' }}>Payment Flexibility</span>
              <strong style={{ fontSize: '15px', color: '#4E00FF' }}>{data.financing || 'Affirm Pay Over Time'}</strong>
            </div>
            <div style={{ background: '#FFFFFF', padding: '12px 14px', borderRadius: '10px', border: '1px solid var(--line-soft)' }}>
              <span style={{ fontSize: '11px', color: 'var(--ink-3)', display: 'block', textTransform: 'uppercase' }}>Fulfillment &amp; Care</span>
              <strong style={{ fontSize: '15px', color: 'var(--brand)' }}>$0 Consult + Free Cold Ship</strong>
            </div>
          </div>
          <a
            href={ctaUrl}
            className="btn btn-primary"
            style={{
              backgroundColor: 'var(--brand)',
              color: '#FFFFFF',
              padding: '12px 22px',
              fontSize: '14px',
              fontWeight: 700,
              borderRadius: '8px',
              textDecoration: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
            }}
          >
            <span>Claim First Month Pricing ({data.price})</span>
            <span>➔</span>
          </a>
        </div>

        {/* Head-to-Head Comparison Table */}
        <div style={{ backgroundColor: '#FFFFFF', border: '1px solid var(--line)', borderRadius: '16px', padding: '28px 24px', marginBottom: '40px', boxShadow: '0 4px 16px rgba(0, 0, 0, 0.04)' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '8px', marginBottom: '16px' }}>
            <h3 className="serif" style={{ fontSize: '24px', color: 'var(--ink)', margin: 0 }}>
              Head-to-Head Service &amp; Pricing Comparison
            </h3>
            <span style={{ fontSize: '11px', fontWeight: 700, backgroundColor: '#DCFCE7', color: '#15803D', padding: '4px 10px', borderRadius: '999px' }}>
              VERIFIED 2026 RATES
            </span>
          </div>

          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '14px', textAlign: 'left' }}>
              <thead>
                <tr style={{ borderBottom: '2px solid var(--line)' }}>
                  <th style={{ padding: '12px 10px', color: 'var(--ink-3)', fontWeight: 600 }}>Dimension / Feature</th>
                  <th style={{ padding: '12px 10px', color: 'var(--ink-2)', fontWeight: 600 }}>{data.competitorName || 'Standard Clinic / Competitor'}</th>
                  <th style={{ padding: '12px 10px', color: 'var(--brand)', fontWeight: 800, backgroundColor: 'rgba(46, 74, 59, 0.06)', borderRadius: '8px 8px 0 0' }}>Telehealth FX Partner</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ borderBottom: '1px solid var(--line-soft)' }}>
                  <td style={{ padding: '12px 10px', fontWeight: 600, color: 'var(--ink)' }}>First Month Cost</td>
                  <td style={{ padding: '12px 10px', color: 'var(--ink-2)' }}>{data.competitorPrice || '$300 - $600 / mo'}</td>
                  <td style={{ padding: '12px 10px', fontWeight: 800, color: '#15803D', backgroundColor: 'rgba(46, 74, 59, 0.06)' }}>{data.price}</td>
                </tr>
                <tr style={{ borderBottom: '1px solid var(--line-soft)' }}>
                  <td style={{ padding: '12px 10px', fontWeight: 600, color: 'var(--ink)' }}>Payment Options</td>
                  <td style={{ padding: '12px 10px', color: 'var(--ink-2)' }}>Upfront full charge only</td>
                  <td style={{ padding: '12px 10px', fontWeight: 700, color: '#4E00FF', backgroundColor: 'rgba(46, 74, 59, 0.06)' }}>Pay over time with Affirm</td>
                </tr>
                <tr style={{ borderBottom: '1px solid var(--line-soft)' }}>
                  <td style={{ padding: '12px 10px', fontWeight: 600, color: 'var(--ink)' }}>Platform / Membership Dues</td>
                  <td style={{ padding: '12px 10px', color: '#DC2626' }}>$79 - $129 / month extra</td>
                  <td style={{ padding: '12px 10px', fontWeight: 700, color: '#15803D', backgroundColor: 'rgba(46, 74, 59, 0.06)' }}>$0 — No Membership Fees</td>
                </tr>
                <tr style={{ borderBottom: '1px solid var(--line-soft)' }}>
                  <td style={{ padding: '12px 10px', fontWeight: 600, color: 'var(--ink)' }}>Clinical Oversight &amp; Prescribing</td>
                  <td style={{ padding: '12px 10px', color: 'var(--ink-2)' }}>Billed per visit or restricted messaging</td>
                  <td style={{ padding: '12px 10px', fontWeight: 700, color: '#15803D', backgroundColor: 'rgba(46, 74, 59, 0.06)' }}>Licensed US Physician ($0 Fee)</td>
                </tr>
                <tr style={{ borderBottom: '1px solid var(--line-soft)' }}>
                  <td style={{ padding: '12px 10px', fontWeight: 600, color: 'var(--ink)' }}>Dose Continuation Policy</td>
                  <td style={{ padding: '12px 10px', color: 'var(--ink-2)' }}>Often forces titration restart</td>
                  <td style={{ padding: '12px 10px', fontWeight: 700, color: '#15803D', backgroundColor: 'rgba(46, 74, 59, 0.06)' }}>Guaranteed Dose-Match</td>
                </tr>
                <tr>
                  <td style={{ padding: '12px 10px', fontWeight: 600, color: 'var(--ink)' }}>Medication Fulfillment Speed</td>
                  <td style={{ padding: '12px 10px', color: 'var(--ink-2)' }}>5 to 10 business days</td>
                  <td style={{ padding: '12px 10px', fontWeight: 700, color: '#15803D', backgroundColor: 'rgba(46, 74, 59, 0.06)', borderRadius: '0 0 8px 8px' }}>Free Cold-Chain Express Shipping</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Dose Match Guarantee & Interactive Selector */}
        <div style={{ backgroundColor: '#FAF6F0', border: '2px solid var(--brand)', borderRadius: '16px', padding: '26px 24px', marginBottom: '40px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '10px' }}>
            <span style={{ fontSize: '11px', fontWeight: 800, backgroundColor: '#DCFCE7', color: '#15803D', padding: '4px 10px', borderRadius: '999px' }}>
              ✓ NO GAP IN THERAPY GUARANTEE
            </span>
          </div>
          <h3 className="serif" style={{ fontSize: '22px', color: 'var(--ink)', margin: '0 0 8px' }}>
            Transfer Your Dose Without Restarting Titration
          </h3>
          <p style={{ fontSize: '14px', color: 'var(--ink-2)', lineHeight: 1.6, margin: '0 0 16px' }}>
            If you are currently taking {data.medication} through another clinic or local pharmacy, our partner clinicians will match your established maintenance dose upon intake verification—saving you weeks of lost progress.
          </p>

          <div style={{ marginBottom: '16px' }}>
            <span style={{ fontSize: '12px', fontWeight: 600, color: 'var(--ink)', display: 'block', marginBottom: '8px' }}>
              Select Your Current Dose Protocol:
            </span>
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
              {doses.map((dose) => (
                <button
                  key={dose}
                  type="button"
                  onClick={() => setSelectedDose(dose)}
                  style={{
                    padding: '8px 14px',
                    borderRadius: '8px',
                    fontSize: '13px',
                    fontWeight: selectedDose === dose ? 700 : 500,
                    backgroundColor: selectedDose === dose ? 'var(--brand)' : '#FFFFFF',
                    color: selectedDose === dose ? '#FFFFFF' : 'var(--ink)',
                    border: '1px solid',
                    borderColor: selectedDose === dose ? 'var(--brand)' : 'var(--line-soft)',
                    cursor: 'pointer',
                  }}
                >
                  {dose}
                </button>
              ))}
            </div>
            <div style={{ fontSize: '13px', color: '#15803D', fontWeight: 600, marginTop: '8px' }}>
              ✓ Protocol Confirmed: Clinician will maintain your {selectedDose} prescription seamlessly.
            </div>
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px', paddingTop: '16px', borderTop: '1px solid var(--line-soft)' }}>
            <div>
              <span style={{ fontSize: '11px', color: 'var(--ink-3)', display: 'block', textTransform: 'uppercase' }}>Introductory Program</span>
              <strong className="mono" style={{ fontSize: '22px', color: '#15803D' }}>{data.price}</strong>
            </div>
            <a
              href={ctaUrl}
              className="btn btn-primary"
              style={{
                backgroundColor: 'var(--brand)',
                color: '#FFFFFF',
                padding: '10px 20px',
                fontSize: '14px',
                fontWeight: 700,
                borderRadius: '8px',
                textDecoration: 'none',
              }}
            >
              Claim First Month Pricing ➔
            </a>
          </div>
        </div>

        {/* Detailed Clinical & Regulatory Content */}
        <div style={{ fontSize: '16px', lineHeight: 1.7, color: 'var(--ink-2)', marginBottom: '48px' }}>
          <h2 className="serif" style={{ fontSize: '30px', color: 'var(--ink)', marginBottom: '16px' }}>
            Why Patients Choose Telehealth FX for {data.medication}
          </h2>
          <p>
            Traditional healthcare systems and high-overhead digital clinics frequently impose artificial barriers on patients seeking metabolic or hormone wellness. Between multi-week appointment wait times, complicated insurance prior authorization rejections, and recurring platform membership fees, patients are often forced to overpay by thousands of dollars each year.
          </p>
          <p>
            At Telehealth FX, our care model is anchored in three clinical and economic commitments:
          </p>
          <ul>
            <li style={{ marginBottom: '10px' }}>
              <strong>Zero Hidden Subscription Fees:</strong> We do not charge monthly membership fees, subscription platform access fees, or per-message fees. Your flat-rate payment of {data.price} covers your entire medical care.
            </li>
            <li style={{ marginBottom: '10px' }}>
              <strong>Accredited 503A US Compounding:</strong> All compounded formulations are prepared exclusively by state-licensed 503A compounding pharmacies operating under federal oversight. Each batch undergoes rigorous testing to verify high chemical purity and sterility.
            </li>
            <li style={{ marginBottom: '10px' }}>
              <strong>48-Hour Cold-Chain Fulfillment:</strong> Medications are shipped directly to your door in specialized temperature-monitored, insulated medical packaging to ensure full biological potency upon arrival.
            </li>
          </ul>

          <h2 className="serif" style={{ fontSize: '28px', color: 'var(--ink)', marginTop: '36px', marginBottom: '16px' }}>
            How the Online Clinical Intake Works
          </h2>
          <ol style={{ paddingLeft: '20px' }}>
            <li style={{ marginBottom: '12px' }}>
              <strong>Complete the Online Medical Assessment:</strong> Answer key questions regarding your health history, current medications, weight loss or hormone goals, and prior treatment experience in under 3 minutes.
            </li>
            <li style={{ marginBottom: '12px' }}>
              <strong>Licensed Physician Review:</strong> A board-certified clinician licensed in your state evaluates your medical profile within 24 hours to determine clinical eligibility and prescribe your personalized protocol.
            </li>
            <li style={{ marginBottom: '12px' }}>
              <strong>Cold-Chain Home Delivery:</strong> Your medication and complete administration kit (including medical syringes and alcohol wipes) are dispatched via express cold shipping directly to your doorstep.
            </li>
            <li>
              <strong>Ongoing Physician Oversight:</strong> Message your medical provider at any time through your patient portal for dosage adjustments, progress reviews, or side effect guidance with zero additional fees.
            </li>
          </ol>
        </div>

        {/* 503A Quality & Regulatory Standard Card */}
        <div style={{ backgroundColor: '#FFFFFF', border: '2px solid #16A34A', borderRadius: '16px', padding: '26px 24px', marginBottom: '48px', boxShadow: '0 6px 20px rgba(22, 163, 74, 0.07)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '10px' }}>
            <span style={{ fontSize: '20px' }}>🛡️</span>
            <span style={{ fontSize: '11px', fontWeight: 800, color: '#15803D', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
              503A COMPOUNDING PHARMACY SAFETY STANDARD
            </span>
          </div>
          <h3 className="serif" style={{ fontSize: '22px', color: 'var(--ink)', margin: '0 0 10px' }}>
            Medical Purity, Legal Compliance &amp; Patient Safety
          </h3>
          <p style={{ fontSize: '14px', color: 'var(--ink-2)', lineHeight: 1.6, margin: '0 0 16px' }}>
            Telehealth FX works exclusively with state-licensed 503A compounding pharmacies that compound patient-specific medications pursuant to valid medical prescriptions under Section 503A of the Federal Food, Drug, and Cosmetic Act (21 U.S.C. § 353a).
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '12px', fontSize: '13px' }}>
            <div style={{ backgroundColor: '#F0FDF4', border: '1px solid #BBF7D0', padding: '12px', borderRadius: '8px' }}>
              <strong style={{ color: '#15803D', display: 'block', marginBottom: '2px' }}>⚖️ Section 503A Compliance</strong>
              Patient-specific prescriptions fulfilling individual medical necessity.
            </div>
            <div style={{ backgroundColor: '#F0FDF4', border: '1px solid #BBF7D0', padding: '12px', borderRadius: '8px' }}>
              <strong style={{ color: '#15803D', display: 'block', marginBottom: '2px' }}>🔬 USP &lt;797&gt; Cleanrooms</strong>
              Prepared in ISO Class 5 laminar airflow sterile cleanrooms.
            </div>
            <div style={{ backgroundColor: '#F0FDF4', border: '1px solid #BBF7D0', padding: '12px', borderRadius: '8px' }}>
              <strong style={{ color: '#15803D', display: 'block', marginBottom: '2px' }}>📋 Certificate of Analysis</strong>
              HPLC-verified chemical purity and potency verification per batch.
            </div>
          </div>
        </div>

        {/* Final Conversion Call to Action */}
        <div style={{ background: 'linear-gradient(135deg, #1F3529 0%, #2E4A3B 100%)', color: '#FBF8F3', borderRadius: '20px', padding: '40px 32px', textAlign: 'center', marginBottom: '60px' }}>
          <div style={{ fontSize: '12px', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#86EFAC', marginBottom: '10px' }}>
            Fast 24-Hour Approval · 48-Hour Cold Delivery
          </div>
          <h2 className="serif" style={{ fontSize: '36px', color: '#FBF8F3', margin: '0 0 16px', lineHeight: 1.2 }}>
            Start Your {data.medication} Protocol Today
          </h2>
          <p style={{ fontSize: '16px', opacity: 0.9, maxWidth: '540px', margin: '0 auto 24px', lineHeight: 1.6 }}>
            Board-certified physician care. Licensed 503A compounding. Seamless dose matching and transparent flat-rate billing from {data.price}.
          </p>
          <a
            href={ctaUrl}
            className="btn btn-lg"
            style={{
              backgroundColor: '#FBF8F3',
              color: 'var(--brand)',
              padding: '14px 32px',
              fontSize: '16px',
              fontWeight: 700,
              borderRadius: '10px',
              textDecoration: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
            }}
          >
            <span>Check Your Eligibility in 60 Seconds</span>
            <span>➔</span>
          </a>
          <div style={{ fontSize: '12px', opacity: 0.7, marginTop: '16px' }}>
            HSA/FSA Accepted · Pay Over Time with Affirm · No Insurance Required · Pause or Cancel Anytime
          </div>
        </div>

        {/* Legal Disclaimer */}
        <p style={{ fontSize: '12px', color: 'var(--ink-3)', lineHeight: 1.6, borderTop: '1px solid var(--line-soft)', paddingTop: '24px' }}>
          Disclaimer: Ozempic®, Wegovy®, Mounjaro®, and Zepbound® are registered trademarks of their respective owners (Novo Nordisk, Eli Lilly and Company). Telehealth FX is an independent telehealth platform and is not affiliated with, endorsed by, or sponsored by these trademark holders. Compounded medications are prepared by state-licensed compounding pharmacies pursuant to a patient-specific prescription and are not reviewed or approved by the FDA for safety or efficacy.
        </p>

      </div>
    </section>
  );
}
