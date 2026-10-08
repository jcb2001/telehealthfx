"use client";
import React from 'react';
import { Icon } from './common.jsx';
import { PatientReviewsSection } from './patient-reviews-section.jsx';

const CTA_URL = "https://go.telehealthfx.com/pore-favor";

function PoreFavorPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "MedicalWebPage",
        "@id": "https://telehealthfx.com/medications/pore-favor/#webpage",
        "url": "https://telehealthfx.com/medications/pore-favor/",
        "name": "Pore Favor Prescription Pore Minimizer & Sebum Clarifier | Telehealth FX",
        "description": "Prescription-grade pore refining and sebum balancing topical therapy. Tightens enlarged facial pores, prevents micro-congestion, and refines dermal texture.",
        "about": {
          "@type": "Substance",
          "name": "Pore Favor Dermatological Refining Complex",
          "drugClass": "Prescription keratolytic & sebum-regulating topical",
          "mechanismOfAction": "Accelerates follicular desquamation, dissolves oxidised sebum plugs within the pilosebaceous unit, and tightens surrounding extracellular pore structure.",
          "administrationRoute": "Topical facial solution"
        },
        "publisher": { "@type": "MedicalOrganization", "name": "Telehealth FX" }
      },
      {
        "@type": "Product",
        "@id": "https://telehealthfx.com/medications/pore-favor/#product",
        "name": "Pore Favor Pore Minimizing Treatment",
        "brand": { "@type": "Brand", "name": "Telehealth FX" },
        "description": "Custom doctor-prescribed clarifying formula designed to tighten visible pores, control excessive oil production, and smooth skin micro-relief.",
        "image": "https://telehealthfx.com/assets/Site%20Icon-modified.png",
        "sku": "POR-01",
        "url": "https://telehealthfx.com/medications/pore-favor/",
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.8",
          "bestRating": "5",
          "worstRating": "1",
          "reviewCount": "142",
          "ratingCount": "142"
        },
        "review": [
          {
            "@type": "Review",
            "author": { "@type": "Person", "name": "Chloe M." },
            "datePublished": "2026-03-12",
            "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
            "reviewBody": "My nose and inner cheek pores were noticeable even with primer and makeup. After 4 weeks with Pore Favor, my skin looks airbrushed and stays matte all day."
          },
          {
            "@type": "Review",
            "author": { "@type": "Person", "name": "Marcus R." },
            "datePublished": "2026-03-29",
            "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
            "reviewBody": "Zero greasiness by midday. Cleared out blackheads that aesthetician facials couldn't keep away. Incredible prescription formulation."
          }
        ],
        "offers": {
          "@type": "Offer",
          "price": "69.00",
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
            <span className="pill-dot" /> Clinical Pore Refinement
          </div>
          <h1 className="serif" style={{ fontSize: 72, marginBottom: 28, lineHeight: 0.95 }}>
            Pore Favor<br/>Pore Minimizer<br/><span style={{ fontStyle: 'italic', color: 'var(--brand)' }}>from $69/mo.</span>
          </h1>
          <p style={{ fontSize: 20, color: 'var(--ink-2)', maxWidth: 620, margin: '0 auto 40px', lineHeight: 1.6 }}>
            Prescription-strength pore refining and sebum balancing therapy. Decongests follicular pores, curbs daytime shine, and re-establishes smooth, glass-like dermal texture.
          </p>
          <a href={CTA_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-lg" style={{ display: 'inline-flex' }}>
            Get Your Prescription Formula <Icon.Arrow />
          </a>
        </div>

        {/* Trust Strip */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24, marginBottom: 80 }}>
          {[
            { num: '-68%', label: 'Visible Pore Diameter Reduction' },
            { num: '24-Hr', label: 'Continuous Sebum Regulation' },
            { num: 'Glass Skin', label: 'Micro-Texture Smoothing' },
          ].map((s, i) => (
            <div key={i} className="card" style={{ padding: 28, textAlign: 'center' }}>
              <div className="serif" style={{ fontSize: 36, color: 'var(--brand)', marginBottom: 4 }}>{s.num}</div>
              <div style={{ fontSize: 13, color: 'var(--ink-3)' }}>{s.label}</div>
            </div>
          ))}
        </div>

        {/* Content */}
        <div className="blog-content" style={{ fontSize: 18, lineHeight: 1.7, color: 'var(--ink-2)' }}>

          <h2 className="serif" style={{ fontSize: 40, marginTop: 0, marginBottom: 24, color: 'var(--ink)' }}>The Biology of Enlarged Pores and Sebum Congestion</h2>
          <p>Enlarged facial pores are primarily driven by three physiological factors: <strong>excessive glandular sebum excretion</strong>, <strong>follicular cellular debris plugging</strong>, and <strong>degraded dermal elasticity</strong> surrounding the pore opening. When dead keratinocytes fuse with oxidized sebum, they stretch the pore cavity outward, creating visible shadows and rough skin texture.</p>
          <p>Over-the-counter pore strips and cosmetic toners provide only superficial, temporary stripping that triggers rebound oil production. <strong>Pore Favor</strong> works at the cellular source by combining clinical-strength keratolytics with prescription-grade sebum regulators to unclog the pilosebaceous canal and stimulate structural tightening of the collagen walls surrounding each pore.</p>

          {/* CTA 1 */}
          <div className="card" style={{ padding: 40, margin: '48px 0', textAlign: 'center', background: '#FFFDF9', borderColor: 'var(--brand)' }}>
            <h3 className="serif" style={{ fontSize: 28, marginBottom: 16, color: 'var(--ink)' }}>Achieve Refined, Shine-Free Skin</h3>
            <p style={{ marginBottom: 24, fontSize: 16 }}>Board-certified medical evaluation and custom compounding delivered with discrete express shipping.</p>
            <a href={CTA_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-lg" style={{ display: 'inline-flex', justifyContent: 'center' }}>
              Claim Pore Favor Online <Icon.Arrow />
            </a>
          </div>

          <h2 className="serif" style={{ fontSize: 40, marginTop: 64, marginBottom: 24, color: 'var(--ink)' }}>Clinical Advantages of Pore Favor</h2>
          <ul style={{ marginBottom: 24, paddingLeft: 20 }}>
            <li style={{ marginBottom: 8 }}><strong>Deep Follicular Clarification:</strong> Dissolves oxidized lipid plugs deep inside pores before they can stretch the epidermal orifice or oxidize into blackheads.</li>
            <li style={{ marginBottom: 8 }}><strong>Periporal Elasticity Support:</strong> Stimulates collagen synthesis around pore borders to physically cinch dilated openings.</li>
            <li style={{ marginBottom: 8 }}><strong>Non-Stripping Oil Control:</strong> Regulates sebocyte hyperactivity without stripping the epidermal moisture barrier, preventing greasy midday rebound.</li>
            <li style={{ marginBottom: 8 }}><strong>Micro-Exfoliation:</strong> Gently accelerates keratin turnover to eliminate dull, rough surface flakiness and create an even canvas.</li>
          </ul>

          <h2 className="serif" style={{ fontSize: 40, marginTop: 64, marginBottom: 24, color: 'var(--ink)' }}>Frequently Asked Questions</h2>
          {[
            { q: 'How is Pore Favor applied?', a: 'Apply a pea-sized amount over clean, dry facial skin in the morning or evening, focusing particularly on the T-zone (forehead, nose, chin) and inner cheeks where pores are most pronounced.' },
            { q: 'Will this cause skin peeling or dryness?', a: 'Pore Favor is formulated in a nourishing, lipid-compatible base that buffers cellular delivery. Most patients experience zero peeling or redness.' },
            { q: 'Can I wear sunscreen and makeup over Pore Favor?', a: 'Yes. Allow Pore Favor to absorb for 60 seconds before applying your broad-spectrum daily SPF and cosmetics. It acts as an exceptional smoothing primer.' },
            { q: 'How quickly do pore sizes appear reduced?', a: 'Immediate mattifying and oil-balancing results occur within 48 hours. Significant structural pore shrinkage and micro-texture refinement are achieved within 3 to 6 weeks of continuous use.' },
          ].map((faq, i) => (
            <div key={i} style={{ padding: '24px 0', borderBottom: '1px solid var(--line-soft)' }}>
              <h3 style={{ fontSize: 18, marginBottom: 10, color: 'var(--ink)' }}>{faq.q}</h3>
              <p style={{ margin: 0, fontSize: 16, color: 'var(--ink-2)', lineHeight: 1.6 }}>{faq.a}</p>
            </div>
          ))}

          {/* Patient Reviews */}
          <PatientReviewsSection
            productName="Pore Favor Treatment"
            aggregateRating={{ ratingValue: "4.8", reviewCount: "142" }}
            reviews={[
              {
                author: { name: "Chloe M." },
                datePublished: "2026-03-12",
                reviewRating: { ratingValue: "5" },
                reviewBody: "My nose and inner cheek pores were noticeable even with primer and makeup. After 4 weeks with Pore Favor, my skin looks airbrushed and stays matte all day."
              },
              {
                author: { name: "Marcus R." },
                datePublished: "2026-03-29",
                reviewRating: { ratingValue: "5" },
                reviewBody: "Zero greasiness by midday. Cleared out blackheads that aesthetician facials couldn't keep away. Incredible prescription formulation."
              }
            ]}
          />

          {/* Final CTA */}
          <div style={{ padding: 40, marginTop: 60, borderRadius: 20, background: 'var(--ink)', color: '#FBF8F3', textAlign: 'center' }}>
            <h2 className="serif" style={{ fontSize: 40, marginBottom: 20, color: '#FBF8F3' }}>Minimize Pores &amp; Master Your Skin Texture</h2>
            <p style={{ fontSize: 18, opacity: 0.9, marginBottom: 32, maxWidth: 520, margin: '0 auto 32px' }}>
              Doctor-prescribed clarifying therapy. Custom compounded with 100% online consultation and free home delivery.
            </p>
            <a href={CTA_URL} target="_blank" rel="noopener noreferrer" className="btn btn-lg" style={{ background: '#FBF8F3', color: 'var(--ink)', display: 'inline-flex', justifyContent: 'center', width: '100%', maxWidth: 300 }}>
              Claim Pore Favor Today <Icon.Arrow />
            </a>
          </div>

          <p style={{ fontSize: 13, color: 'var(--ink-3)', marginTop: 40, borderTop: '1px solid var(--line-soft)', paddingTop: 20 }}>
            Disclaimer: Prescription dermatological formulations require an online evaluation by a licensed healthcare practitioner. Formulated exclusively for topical facial use.
          </p>

        </div>
      </div>
    </section>
  );
}

export { PoreFavorPage };
