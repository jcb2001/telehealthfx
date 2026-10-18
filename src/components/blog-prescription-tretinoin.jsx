"use client";
import React from 'react';
import { Icon } from './common.jsx';

const AFF_URL = "https://go.telehealthfx.com/anti-aging-cream?aff_sub=tfx_blog_tretinoin&subId1=tfx_blog_tretinoin";

export function BlogPrescriptionTretinoin() {
  return (
    <section className="section" style={{ minHeight: '60vh', paddingTop: 120 }}>
      <div className="container" style={{ maxWidth: 880 }}>
        
        <div className="eyebrow" style={{ marginBottom: 20 }}>Dermatological Pharmacology & Cellular Turnover</div>
        <h1 className="serif" style={{ fontSize: 46, marginBottom: 24, lineHeight: 1.15, letterSpacing: '-0.02em' }}>
          Prescription Tretinoin Online: <span style={{ fontStyle: 'italic', color: 'var(--brand)' }}>Telehealth Retinoid, Strength Guide & Price Comparison</span>
        </h1>

        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 40, paddingBottom: 24, borderBottom: '1px solid var(--line-soft)' }}>
          <div style={{ width: 44, height: 44, borderRadius: '50%', background: 'var(--brand)', overflow: 'hidden' }}>
            <img src="/assets/jm-profile.jpg" alt="Julian Mercer, M.S." style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
          <div>
            <div style={{ fontWeight: 600, fontSize: 15 }}>Julian Mercer, M.S. · Medically Reviewed by Marcus Vance, M.D.</div>
            <div style={{ fontSize: 13, color: 'var(--ink-3)' }}>Clinical Dermatology Review · Updated October 2026 · 14 min read</div>
          </div>
        </div>

        {/* Featured Hero Image */}
        <div style={{ position: 'relative', borderRadius: 20, overflow: 'hidden', marginBottom: 40, border: '1px solid var(--line-soft)', boxShadow: '0 12px 36px rgba(0,0,0,0.06)' }}>
          <img 
            src="/assets/prescription-tretinoin-featured.jpg" 
            alt="Golden retinoid emulsion cream swirl on black granite surface beside frosted apothecary glass and laboratory pipette" 
            style={{ width: '100%', height: 'auto', display: 'block' }} 
          />
          <div style={{ position: 'absolute', bottom: 12, right: 16, background: 'rgba(0,0,0,0.65)', color: '#fff', fontSize: 11, padding: '4px 10px', borderRadius: 6, backdropFilter: 'blur(4px)' }}>
            Clinical Macro Still-Life · Archival Photographic Standard
          </div>
        </div>

        {/* Direct Clinical Answer Box */}
        <div className="direct-answer-snippet" style={{ background: '#FAF8F5', borderLeft: '4px solid var(--brand)', padding: '24px 28px', borderRadius: '0 12px 12px 0', marginBottom: 48 }}>
          <div style={{ fontWeight: 700, textTransform: 'uppercase', fontSize: 12, letterSpacing: '0.08em', color: 'var(--brand)', marginBottom: 8 }}>
            Direct Clinical Answer
          </div>
          <p style={{ fontSize: 18, lineHeight: 1.65, color: 'var(--ink)', margin: 0, fontWeight: 500 }}>
            Prescription tretinoin (all-trans retinoic acid) is approximately 20 times more biologically active than over-the-counter retinol because it directly binds to nuclear retinoic acid receptors (RARs) without requiring metabolic conversion by the skin. Telehealth platforms allow patients to submit an asynchronous medical photo-consultation, obtain a doctor's prescription, and receive custom compounded tretinoin formulations (micro-encapsulated with niacinamide or hyaluronic acid to eliminate peeling) delivered directly to their home for $42 per month—avoiding $250 dermatologist copays and $180 retail pharmacy charges for branded Retin-A.
          </p>
        </div>

        {/* Clinical Comparison Table */}
        <h2 className="serif" style={{ fontSize: 32, marginTop: 40, marginBottom: 20, color: 'var(--ink)' }}>
          Prescription Tretinoin vs OTC Retinol vs Branded Retin-A
        </h2>
        <p style={{ fontSize: 18, lineHeight: 1.7, color: 'var(--ink-2)' }}>
          Examining biological potency, cellular conversion steps, side effect mitigation, and real-world costs:
        </p>

        <div style={{ overflowX: 'auto', margin: '32px 0' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 15, textAlign: 'left' }}>
            <thead>
              <tr style={{ background: '#111827', color: '#fff' }}>
                <th style={{ padding: '14px 16px', border: '1px solid #374151' }}>Dermatological Dimension</th>
                <th style={{ padding: '14px 16px', border: '1px solid #374151', background: 'var(--brand)', color: '#fff' }}>Compounded Tretinoin (Telehealth FX)</th>
                <th style={{ padding: '14px 16px', border: '1px solid #374151' }}>Branded Retin-A / Altreno (Retail Rx)</th>
                <th style={{ padding: '14px 16px', border: '1px solid #374151' }}>Over-the-Counter Retinol</th>
              </tr>
            </thead>
            <tbody>
              <tr style={{ background: '#FFFFFF' }}>
                <td style={{ padding: '12px 16px', border: '1px solid #E5E7EB', fontWeight: 600 }}>Active Molecule</td>
                <td style={{ padding: '12px 16px', border: '1px solid #E5E7EB', color: '#059669', fontWeight: 700, background: '#ECFDF5' }}>Pure All-Trans Retinoic Acid (Direct RAR Binder)</td>
                <td style={{ padding: '12px 16px', border: '1px solid #E5E7EB' }}>All-Trans Retinoic Acid</td>
                <td style={{ padding: '12px 16px', border: '1px solid #E5E7EB' }}>Retinol / Retinyl Palmitate (Requires 2 enzymatic steps)</td>
              </tr>
              <tr style={{ background: '#F9FAFB' }}>
                <td style={{ padding: '12px 16px', border: '1px solid #E5E7EB', fontWeight: 600 }}>Biological Potency</td>
                <td style={{ padding: '12px 16px', border: '1px solid #E5E7EB', color: '#059669', fontWeight: 700, background: '#ECFDF5' }}>20x stronger than OTC retinol</td>
                <td style={{ padding: '12px 16px', border: '1px solid #E5E7EB' }}>20x stronger than OTC retinol</td>
                <td style={{ padding: '12px 16px', border: '1px solid #E5E7EB' }}>Weak (~1x baseline)</td>
              </tr>
              <tr style={{ background: '#FFFFFF' }}>
                <td style={{ padding: '12px 16px', border: '1px solid #E5E7EB', fontWeight: 600 }}>Formulation Buffer</td>
                <td style={{ padding: '12px 16px', border: '1px solid #E5E7EB', color: '#059669', fontWeight: 700, background: '#ECFDF5' }}>Compounded with 4% Niacinamide &amp; Hyaluronic Acid</td>
                <td style={{ padding: '12px 16px', border: '1px solid #E5E7EB' }}>Standard unbuffered vehicle (Dry / Peeling)</td>
                <td style={{ padding: '12px 16px', border: '1px solid #E5E7EB' }}>Cosmetic lotion base with preservatives</td>
              </tr>
              <tr style={{ background: '#F9FAFB' }}>
                <td style={{ padding: '12px 16px', border: '1px solid #E5E7EB', fontWeight: 600 }}>Doctor Consultation</td>
                <td style={{ padding: '12px 16px', border: '1px solid #E5E7EB', color: '#059669', fontWeight: 700, background: '#ECFDF5' }}>$0 (Included in monthly treatment)</td>
                <td style={{ padding: '12px 16px', border: '1px solid #E5E7EB' }}>$150 – $275 in-office copay</td>
                <td style={{ padding: '12px 16px', border: '1px solid #E5E7EB' }}>None (Cosmetic store purchase)</td>
              </tr>
              <tr style={{ background: '#FFFFFF' }}>
                <td style={{ padding: '12px 16px', border: '1px solid #E5E7EB', fontWeight: 600 }}>Cash Monthly Price</td>
                <td style={{ padding: '12px 16px', border: '1px solid #E5E7EB', color: '#059669', fontWeight: 800 }}>$42 / month flat rate</td>
                <td style={{ padding: '12px 16px', border: '1px solid #E5E7EB' }}>$160 – $220 per tube at retail pharmacy</td>
                <td style={{ padding: '12px 16px', border: '1px solid #E5E7EB' }}>$35 – $95 per jar (Department store)</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Commercial Bridge CTA */}
        <div className="card" style={{ padding: '36px 32px', margin: '48px 0', background: '#FFFDF9', borderColor: 'var(--brand)', borderRadius: 16, textAlign: 'center' }}>
          <div style={{ display: 'inline-flex', padding: '6px 16px', background: 'var(--brand-soft)', color: 'var(--brand)', borderRadius: 20, fontWeight: 700, fontSize: 12, textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 16 }}>
            Prescription Clinical Skincare
          </div>
          <h3 className="serif" style={{ fontSize: 32, marginBottom: 16, color: 'var(--ink)' }}>
            Custom Compounded Tretinoin for $42/Month
          </h3>
          <p style={{ fontSize: 17, lineHeight: 1.6, color: 'var(--ink-2)', maxWidth: 640, margin: '0 auto 24px' }}>
            Formulated with soothing niacinamide and hyaluronic acid to accelerate epidermal cell turnover without redness or flaking. Doctor review and free shipping included.
          </p>
          <a href={AFF_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-lg" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '14px 28px', fontSize: 16 }}>
            Start Doctor Skincare Evaluation <Icon.Arrow />
          </a>
        </div>

        {/* Deep Clinical Content */}
        <div className="blog-content" style={{ fontSize: 18, lineHeight: 1.75, color: 'var(--ink-2)' }}>
          <h2 className="serif" style={{ fontSize: 30, marginTop: 44, marginBottom: 18, color: 'var(--ink)' }}>
            1. Why OTC Retinol Fails Compared to Tretinoin
          </h2>
          <p>
            The fundamental difference between drugstore cosmetic retinol and prescription tretinoin lies in cellular receptor affinity:
          </p>
          <ul>
            <li><strong>Over-the-Counter Retinol:</strong> Chemically inert until absorbed. Keratinocytes must first oxidize retinol into retinaldehyde, which is then oxidized a second time into retinoic acid. During this conversion, more than 85% of active potency is lost, and individual metabolic enzyme variation means results are unpredictable.</li>
            <li><strong>Prescription Tretinoin:</strong> Already 100% active retinoic acid. It immediately enters the cell nucleus, binds directly to RAR-alpha, beta, and gamma receptors, and triggers immediate transcription of genes responsible for pro-collagen type I synthesis and epidermal mitosis.</li>
          </ul>
          <p>
            Within 8 to 12 weeks of consistent use, tretinoin thickens the viable epidermal layer, compacts the hyperkeratotic stratum corneum, dispenses melanin clusters to fade hyperpigmentation, and upregulates dermal collagen synthesis.
          </p>

          <h2 className="serif" style={{ fontSize: 30, marginTop: 44, marginBottom: 18, color: 'var(--ink)' }}>
            2. Strength Guide & Step-Up Titration Protocol
          </h2>
          <p>
            Tretinoin is compounded in three standard concentrations:
          </p>

          <div style={{ overflowX: 'auto', margin: '28px 0' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 15, textAlign: 'left' }}>
              <thead>
                <tr style={{ background: '#111827', color: '#fff' }}>
                  <th style={{ padding: '12px 16px', border: '1px solid #374151' }}>Concentration</th>
                  <th style={{ padding: '12px 16px', border: '1px solid #374151' }}>Primary Patient Profile</th>
                  <th style={{ padding: '12px 16px', border: '1px solid #374151' }}>Recommended Application Routine</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ background: '#FFFFFF' }}>
                  <td style={{ padding: '12px 16px', border: '1px solid #E5E7EB', fontWeight: 600 }}>0.025% (Starter Strength)</td>
                  <td style={{ padding: '12px 16px', border: '1px solid #E5E7EB' }}>Sensitive skin, first-time retinoid users, rosacea-prone</td>
                  <td style={{ padding: '12px 16px', border: '1px solid #E5E7EB' }}>2 to 3 nights per week for first 4 weeks</td>
                </tr>
                <tr style={{ background: '#F9FAFB' }}>
                  <td style={{ padding: '12px 16px', border: '1px solid #E5E7EB', fontWeight: 600 }}>0.05% (Standard Gold Standard)</td>
                  <td style={{ padding: '12px 16px', border: '1px solid #E5E7EB' }}>Fine lines, photo-damage, adult acne, mild melasma</td>
                  <td style={{ padding: '12px 16px', border: '1px solid #E5E7EB' }}>Every other night, escalating to nightly as tolerated</td>
                </tr>
                <tr style={{ background: '#FFFFFF' }}>
                  <td style={{ padding: '12px 16px', border: '1px solid #E5E7EB', fontWeight: 600 }}>0.1% (High Potency)</td>
                  <td style={{ padding: '12px 16px', border: '1px solid #E5E7EB' }}>Stubborn cystic acne, deep rhytids, severe hyperpigmentation</td>
                  <td style={{ padding: '12px 16px', border: '1px solid #E5E7EB' }}>Nightly application for acclimated skin</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="serif" style={{ fontSize: 30, marginTop: 44, marginBottom: 18, color: 'var(--ink)' }}>
            3. The "Sandwich Technique" for Zero Peeling
          </h2>
          <p>
            The hallmark side effect of starting retinoic acid is the "retinization period"—temporary redness, peeling, and dryness lasting 2 to 4 weeks. To completely eliminate irritation:
          </p>
          <ol>
            <li><strong>Apply a Base Hydrator:</strong> After cleansing, apply a thin layer of ceramide-rich moisturizer or hyaluronic acid serum.</li>
            <li><strong>Apply Pea-Sized Tretinoin:</strong> Dispense only a single pea-sized amount for the entire face (forehead, cheeks, chin). Never apply to wet skin.</li>
            <li><strong>Top with Barrier Cream:</strong> Seal with a gentle barrier cream. This "sandwich" buffers penetration speed while preserving 100% of biological receptor activation.</li>
          </ol>

          {/* Related Articles & Location Mesh */}
          <div style={{ background: '#F9FAFB', border: '1px solid #E5E7EB', borderRadius: 16, padding: '24px 28px', margin: '40px 0' }}>
            <h4 style={{ margin: '0 0 12px', fontSize: 16, textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--ink)' }}>Related Dermatological Guides & Regional Telehealth Clinics</h4>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 12, fontSize: 14 }}>
              <a href="/medications/smooth-move/" style={{ color: 'var(--brand)', textDecoration: 'underline' }}>Smooth Move Retinoid Overview</a>
              <a href="/medications/copper-peptide/" style={{ color: 'var(--brand)', textDecoration: 'underline' }}>GHK-Cu Copper Peptide Therapy</a>
              <a href="/medications/spot-on/" style={{ color: 'var(--brand)', textDecoration: 'underline' }}>Spot-On Hyperpigmentation Cream</a>
              <a href="/locations/arizona/phoenix/" style={{ color: 'var(--brand)', textDecoration: 'underline' }}>Phoenix, AZ Telehealth Clinic</a>
              <a href="/locations/washington/seattle/" style={{ color: 'var(--brand)', textDecoration: 'underline' }}>Seattle, WA Telehealth Clinic</a>
            </div>
          </div>

          {/* Bottom Conversion Card */}
          <div className="card" style={{ padding: '40px 36px', margin: '48px 0', background: '#111827', color: '#fff', borderRadius: 20, textAlign: 'center' }}>
            <h3 className="serif" style={{ fontSize: 32, marginBottom: 16, color: '#fff' }}>
              Transform Your Skin with Prescription Retinoic Acid
            </h3>
            <p style={{ fontSize: 16, lineHeight: 1.6, color: '#D1D5DB', maxWidth: 620, margin: '0 auto 24px' }}>
              No in-person doctor appointments, no pharmacy markup. Prescribed online by board-certified dermatologists for $42/month with free discreet delivery.
            </p>
            <a href={AFF_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-lg" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '14px 28px', fontSize: 16 }}>
              Order Prescription Tretinoin ($42/Month) <Icon.Arrow />
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}
