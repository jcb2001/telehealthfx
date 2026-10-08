"use client";
import React from 'react';
import { Icon } from './common.jsx';
import { PatientReviewsSection } from './patient-reviews-section.jsx';

const CTA_URL = "https://go.telehealthfx.com/retinoid";

function SmoothMovePage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "MedicalWebPage",
        "@id": "https://telehealthfx.com/medications/smooth-move/#webpage",
        "url": "https://telehealthfx.com/medications/smooth-move/",
        "name": "Smooth Move Prescription Anti-Aging Retinoid | Telehealth FX",
        "description": "Custom doctor-prescribed retinoid therapy designed to reverse photoaging, stimulate deep dermal collagen, soften fine lines, and enhance skin radiance without irritation.",
        "about": {
          "@type": "Substance",
          "name": "Smooth Move Prescription Retinoid Complex",
          "drugClass": "Prescription topical retinoid / Retinoic acid receptor agonist",
          "mechanismOfAction": "Binds directly to retinoic acid nuclear receptors, accelerating cellular turnover, normalizing keratinization, and stimulating neo-collagenesis in the dermal ECM.",
          "administrationRoute": "Topical nocturnal cream"
        },
        "publisher": { "@type": "MedicalOrganization", "name": "Telehealth FX" }
      },
      {
        "@type": "Product",
        "@id": "https://telehealthfx.com/medications/smooth-move/#product",
        "name": "Smooth Move Prescription Anti-Aging Cream",
        "brand": { "@type": "Brand", "name": "Telehealth FX" },
        "description": "Buffered prescription retinoid compounded with skin-identical moisture binders to eradicate wrinkles and smooth skin texture without redness or severe flaking.",
        "image": "https://telehealthfx.com/assets/Site%20Icon-modified.png",
        "sku": "SMO-01",
        "url": "https://telehealthfx.com/medications/smooth-move/",
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "bestRating": "5",
          "worstRating": "1",
          "reviewCount": "194",
          "ratingCount": "194"
        },
        "review": [
          {
            "@type": "Review",
            "author": { "@type": "Person", "name": "Claire V." },
            "datePublished": "2026-02-18",
            "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
            "reviewBody": "Every commercial retinol broke my skin barrier and caused extreme peeling. Smooth Move is the first prescription formula that erased my crow's feet and smile lines with zero redness."
          },
          {
            "@type": "Review",
            "author": { "@type": "Person", "name": "David K." },
            "datePublished": "2026-03-24",
            "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
            "reviewBody": "Forehead creases are dramatically less noticeable after 8 weeks. My skin looks vibrant and smooth. Outstanding medical grade quality."
          }
        ],
        "offers": {
          "@type": "Offer",
          "price": "42.00",
          "priceCurrency": "USD",
          "availability": "https://schema.org/InStock",
          "validFrom": "2026-01-01",
          "priceValidUntil": "2027-12-31",
          "url": CTA_URL
        }
      }
    ]
  };

  return (
    <section className="section" style={{ minHeight: '60vh', paddingTop: 120 }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <div className="container" style={{ maxWidth: 840 }}>

        {/* Hero */}
        <div style={{ textAlign: 'center', marginBottom: 80 }}>
          <div className="pill pill-brand" style={{ marginBottom: 20, display: 'inline-flex' }}>
            <span className="pill-dot" /> Prescription Anti-Aging Dermatology
          </div>
          <h1 className="serif" style={{ fontSize: 72, marginBottom: 28, lineHeight: 0.95 }}>
            Smooth Move<br/>Prescription Retinoid<br/><span style={{ fontStyle: 'italic', color: 'var(--brand)' }}>from $42/mo.</span>
          </h1>
          <p style={{ fontSize: 20, color: 'var(--ink-2)', maxWidth: 620, margin: '0 auto 40px', lineHeight: 1.6 }}>
            The gold standard in dermatological age reversal. Custom doctor-formulated prescription retinoid compounded with barrier-protecting moisturizers to erase wrinkles without peeling or irritation.
          </p>
          <a href={CTA_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-lg" style={{ display: 'inline-flex' }}>
            Get Your Prescription Retinoid <Icon.Arrow />
          </a>
        </div>

        {/* Trust Strip */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24, marginBottom: 80 }}>
          {[
            { num: '20x', label: 'More Potent than OTC Retinol' },
            { num: 'Zero Flake', label: 'Barrier-Buffered Emulsion' },
            { num: '100% Online', label: 'Doctor Prescribed & Shipped' },
          ].map((s, i) => (
            <div key={i} className="card" style={{ padding: 28, textAlign: 'center' }}>
              <div className="serif" style={{ fontSize: 36, color: 'var(--brand)', marginBottom: 4 }}>{s.num}</div>
              <div style={{ fontSize: 13, color: 'var(--ink-3)' }}>{s.label}</div>
            </div>
          ))}
        </div>

        {/* Content */}
        <div className="blog-content" style={{ fontSize: 18, lineHeight: 1.7, color: 'var(--ink-2)' }}>

          <h2 className="serif" style={{ fontSize: 40, marginTop: 0, marginBottom: 24, color: 'var(--ink)' }}>Why Prescription Retinoic Acid Outperforms Store Retinol</h2>
          <p>Over-the-counter retinol requires two metabolic enzymatic conversion steps inside human skin cells before transforming into active retinoic acid. By the time it converts, less than 5% reaches retinoic acid receptors, meaning months of waiting for minimal visual change.</p>
          <p><strong>Smooth Move</strong> delivers direct prescription-strength retinoic acid directly to cellular receptors. It initiates instant cellular turnover, commands basal skin cells to divide and multiply, accelerates the sloughing of photo-damaged cells, and stimulates robust new type I collagen synthesis deep inside the dermis.</p>

          {/* CTA 1 */}
          <div className="card" style={{ padding: 40, margin: '48px 0', textAlign: 'center', background: '#FFFDF9', borderColor: 'var(--brand)' }}>
            <h3 className="serif" style={{ fontSize: 28, marginBottom: 16, color: 'var(--ink)' }}>Smooth Lines &amp; Restore Elasticity</h3>
            <p style={{ marginBottom: 24, fontSize: 16 }}>Personalized clinician assessment with custom pharmacy compounding and free 2-day delivery.</p>
            <a href={CTA_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-lg" style={{ display: 'inline-flex', justifyContent: 'center' }}>
              Start Your Consultation <Icon.Arrow />
            </a>
          </div>

          <h2 className="serif" style={{ fontSize: 40, marginTop: 64, marginBottom: 24, color: 'var(--ink)' }}>The Anti-Irritation Compounding Advantage</h2>
          <p>Generic prescription retinoids often cause extreme dermatitis, redness, and micro-flaking because they are formulated in harsh alcohol-based vehicles. Smooth Move is custom compounded with bio-identical lipids, ceramides, and humectants that protect your stratum corneum:</p>
          <ul style={{ marginBottom: 24, paddingLeft: 20 }}>
            <li style={{ marginBottom: 8 }}><strong>Deep Collagen Stimulation:</strong> Clinically proven to thicken the dermal layer and fill in deep nasolabial folds, forehead furrows, and crow's feet.</li>
            <li style={{ marginBottom: 8 }}><strong>Cellular De-Pigmentation:</strong> Disperses melanin clusters to fade stubborn sun spots and post-inflammatory blemishes.</li>
            <li style={{ marginBottom: 8 }}><strong>Sustained Time-Release:</strong> Delivers the active retinoid gradually overnight to eliminate the stinging and barrier breakdown common to standard formulations.</li>
            <li style={{ marginBottom: 8 }}><strong>Pore Tightening &amp; Clarification:</strong> Prevents keratin crystallization in follicles to keep pores clear and tight.</li>
          </ul>

          <h2 className="serif" style={{ fontSize: 40, marginTop: 64, marginBottom: 24, color: 'var(--ink)' }}>Frequently Asked Questions</h2>
          {[
            { q: 'How often do I apply Smooth Move?', a: 'Begin by applying a pea-sized amount at bedtime 2 to 3 nights per week. As your skin adapts, gradually increase to nightly application. Always apply to clean, dry skin.' },
            { q: 'Do I need to wear sunscreen while using this product?', a: 'Yes. Because prescription retinoids reveal fresh, new skin cells, daily broad-spectrum SPF 30+ is essential every morning to preserve your results and prevent UV damage.' },
            { q: 'How is Smooth Move different from drug-store retinol?', a: 'Smooth Move is authentic prescription retinoic acid. It is up to 20 times more potent than over-the-counter retinol and directly binds to skin receptors without requiring enzymatic conversion.' },
            { q: 'How long until I see results?', a: 'Patients notice improved texture, glow, and clarity within 2 to 4 weeks. Clinically measurable collagen rebuilding and significant wrinkle reduction develop within 8 to 12 weeks.' },
          ].map((faq, i) => (
            <div key={i} style={{ padding: '24px 0', borderBottom: '1px solid var(--line-soft)' }}>
              <h3 style={{ fontSize: 18, marginBottom: 10, color: 'var(--ink)' }}>{faq.q}</h3>
              <p style={{ margin: 0, fontSize: 16, color: 'var(--ink-2)', lineHeight: 1.6 }}>{faq.a}</p>
            </div>
          ))}

          {/* Patient Reviews */}
          <PatientReviewsSection
            productName="Smooth Move Retinoid Cream"
            aggregateRating={{ ratingValue: "4.9", reviewCount: "194" }}
            reviews={[
              {
                author: { name: "Claire V." },
                datePublished: "2026-02-18",
                reviewRating: { ratingValue: "5" },
                reviewBody: "Every commercial retinol broke my skin barrier and caused extreme peeling. Smooth Move is the first prescription formula that erased my crow's feet and smile lines with zero redness."
              },
              {
                author: { name: "David K." },
                datePublished: "2026-03-24",
                reviewRating: { ratingValue: "5" },
                reviewBody: "Forehead creases are dramatically less noticeable after 8 weeks. My skin looks vibrant and smooth. Outstanding medical grade quality."
              }
            ]}
          />

          {/* Final CTA */}
          <div style={{ padding: 40, marginTop: 60, borderRadius: 20, background: 'var(--ink)', color: '#FBF8F3', textAlign: 'center' }}>
            <h2 className="serif" style={{ fontSize: 40, marginBottom: 20, color: '#FBF8F3' }}>Erase Wrinkles with Clinical Precision</h2>
            <p style={{ fontSize: 18, opacity: 0.9, marginBottom: 32, maxWidth: 520, margin: '0 auto 32px' }}>
              Doctor-prescribed anti-aging retinoid therapy. Compounded for maximum potency with zero unnecessary irritation.
            </p>
            <a href={CTA_URL} target="_blank" rel="noopener noreferrer" className="btn btn-lg" style={{ background: '#FBF8F3', color: 'var(--ink)', display: 'inline-flex', justifyContent: 'center', width: '100%', maxWidth: 300 }}>
              Claim Smooth Move Today <Icon.Arrow />
            </a>
          </div>

          <p style={{ fontSize: 13, color: 'var(--ink-3)', marginTop: 40, borderTop: '1px solid var(--line-soft)', paddingTop: 20 }}>
            Disclaimer: Prescription retinoid formulations require medical review and approval by a licensed clinician. Not recommended for use during pregnancy or breastfeeding.
          </p>

        </div>
      </div>
    </section>
  );
}

export { SmoothMovePage };
