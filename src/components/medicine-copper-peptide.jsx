"use client";
import React from 'react';
import { Icon } from './common.jsx';
import { PatientReviewsSection } from './patient-reviews-section.jsx';

const CTA_URL = "https://go.telehealthfx.com/copper-peptide";

function CopperPeptidePage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "MedicalWebPage",
        "@id": "https://telehealthfx.com/medications/copper-peptide/#webpage",
        "url": "https://telehealthfx.com/medications/copper-peptide/",
        "name": "Bounce Back GHK-Cu Copper Peptide Therapy | Telehealth FX",
        "description": "Prescription-strength GHK-Cu copper peptide serum to stimulate collagen synthesis, accelerate dermal cellular repair, and restore facial firmness.",
        "about": {
          "@type": "Substance",
          "name": "GHK-Cu Copper Peptide",
          "nonProprietaryName": "Glycyl-L-Histidyl-L-Lysine Copper(II)",
          "drugClass": "Signal peptide / Dermal remodeling complex",
          "mechanismOfAction": "Stimulates pro-collagen I, III and elastin synthesis; activates metalloproteinases to remove damaged skin proteins; accelerates fibroblast proliferation and angiogenesis.",
          "administrationRoute": "Topical facial serum"
        },
        "publisher": { "@type": "MedicalOrganization", "name": "Telehealth FX" }
      },
      {
        "@type": "Product",
        "@id": "https://telehealthfx.com/medications/copper-peptide/#product",
        "name": "Bounce Back GHK-Cu Copper Peptide Serum",
        "brand": { "@type": "Brand", "name": "Telehealth FX" },
        "description": "Clinical-grade GHK-Cu copper peptide topical formulation designed to rebuild extracellular skin matrix, firm skin laxity, and diminish fine lines.",
        "image": "https://telehealthfx.com/assets/Site%20Icon-modified.png",
        "sku": "COP-01",
        "url": "https://telehealthfx.com/medications/copper-peptide/",
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "bestRating": "5",
          "worstRating": "1",
          "reviewCount": "176",
          "ratingCount": "176"
        },
        "review": [
          {
            "@type": "Review",
            "author": { "@type": "Person", "name": "Sophia G." },
            "datePublished": "2026-03-20",
            "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
            "reviewBody": "Within 3 weeks the firmness along my jawline and cheeks was dramatically visible. It absorbs cleanly without irritation. The real deal."
          },
          {
            "@type": "Review",
            "author": { "@type": "Person", "name": "Natalie P." },
            "datePublished": "2026-04-03",
            "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
            "reviewBody": "Smoothed out fine lines around my eyes and mouth that retinol was irritating. My skin barrier feels plumper and deeply hydrated."
          }
        ],
        "offers": {
          "@type": "Offer",
          "price": "64.99",
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
            <span className="pill-dot" /> Clinical Peptide Dermatology
          </div>
          <h1 className="serif" style={{ fontSize: 72, marginBottom: 28, lineHeight: 0.95 }}>
            Bounce Back<br/>Copper Peptide<br/><span style={{ fontStyle: 'italic', color: 'var(--brand)' }}>from $64.99/mo.</span>
          </h1>
          <p style={{ fontSize: 20, color: 'var(--ink-2)', maxWidth: 620, margin: '0 auto 40px', lineHeight: 1.6 }}>
            Prescription-strength GHK-Cu copper tripeptide serum. Supercharges collagen and elastin remodeling, restores skin firmness, and reverses micro-wrinkles without irritation.
          </p>
          <a href={CTA_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-lg" style={{ display: 'inline-flex' }}>
            Claim Your Formula <Icon.Arrow />
          </a>
        </div>

        {/* Trust Strip */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24, marginBottom: 80 }}>
          {[
            { num: 'GHK-Cu', label: 'Clinical Copper Peptide' },
            { num: '300%', label: 'Collagen Remodeling Boost' },
            { num: 'Gentle', label: 'Zero Redness or Peeling' },
          ].map((s, i) => (
            <div key={i} className="card" style={{ padding: 28, textAlign: 'center' }}>
              <div className="serif" style={{ fontSize: 36, color: 'var(--brand)', marginBottom: 4 }}>{s.num}</div>
              <div style={{ fontSize: 13, color: 'var(--ink-3)' }}>{s.label}</div>
            </div>
          ))}
        </div>

        {/* Content */}
        <div className="blog-content" style={{ fontSize: 18, lineHeight: 1.7, color: 'var(--ink-2)' }}>

          <h2 className="serif" style={{ fontSize: 40, marginTop: 0, marginBottom: 24, color: 'var(--ink)' }}>The Power of GHK-Cu Peptide Remodeling</h2>
          <p><strong>GHK-Cu (Glycyl-L-Histidyl-L-Lysine: Copper)</strong> is a naturally occurring human tripeptide with an exceptional biological affinity for copper ions. Originally discovered in human plasma by biochemist Dr. Loren Pickart, GHK-Cu declines by over 60% as we age.</p>
          <p>Unlike ordinary cosmetic moisturizers that only sit on the stratum corneum, prescription-strength GHK-Cu penetrates the dermal junction to act as a <em>gene-modulating signaling molecule</em>. It signals fibroblasts to synthesize new collagen (types I, III, and IV), stimulates glycosaminoglycans like hyaluronic acid, and activates protective antioxidant enzymes (superoxide dismutase).</p>

          {/* CTA 1 */}
          <div className="card" style={{ padding: 40, margin: '48px 0', textAlign: 'center', background: '#FFFDF9', borderColor: 'var(--brand)' }}>
            <h3 className="serif" style={{ fontSize: 28, marginBottom: 16, color: 'var(--ink)' }}>Experience Firm, Resilient Skin</h3>
            <p style={{ marginBottom: 24, fontSize: 16 }}>Clinical peptide formulations delivered straight to your door with doctor consultation and free express shipping.</p>
            <a href={CTA_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-lg" style={{ display: 'inline-flex', justifyContent: 'center' }}>
              Start Your Order <Icon.Arrow />
            </a>
          </div>

          <h2 className="serif" style={{ fontSize: 40, marginTop: 64, marginBottom: 24, color: 'var(--ink)' }}>Why Dermatologists Recommend Copper Peptides Over Retinol Alternatives</h2>
          <p>While retinoids are effective at promoting turnover, they frequently induce peeling, barrier disruption, stinging, and photo-sensitivity. GHK-Cu copper peptides provide comparable collagen induction while actively <strong>healing and fortifying</strong> the lipid barrier:</p>
          <ul style={{ marginBottom: 24, paddingLeft: 20 }}>
            <li style={{ marginBottom: 8 }}><strong>Tissue Remodeling:</strong> Clears out rigid, cross-linked photo-damaged collagen and replaces it with elastic, youthful matrix fibers.</li>
            <li style={{ marginBottom: 8 }}><strong>Deep Moisture Retention:</strong> Naturally stimulates endogenous hyaluronic acid synthesis within the dermis for lasting cellular plumpness.</li>
            <li style={{ marginBottom: 8 }}><strong>Anti-Inflammatory Calming:</strong> Significantly reduces facial redness, capillary fragility, and post-procedure irritation.</li>
            <li style={{ marginBottom: 8 }}><strong>Universal Tolerance:</strong> Safe and effective for dry, mature, sensitive, and combination skin types without a mandatory acclimation period.</li>
          </ul>

          <h2 className="serif" style={{ fontSize: 40, marginTop: 64, marginBottom: 24, color: 'var(--ink)' }}>Frequently Asked Questions</h2>
          {[
            { q: 'How do I use Bounce Back in my daily skincare routine?', a: 'Apply 4 to 6 drops onto clean, slightly damp skin in the morning and evening, gently pressing into the face, neck, and décolletage before applying your moisturizer.' },
            { q: 'Can I use copper peptides alongside Vitamin C or AHA/BHA acids?', a: 'We recommend applying copper peptides and direct acids at alternating times (e.g. Vitamin C in the morning and Copper Peptides in the evening) to ensure the copper peptide bond remains stable and bioavailable.' },
            { q: 'How long until I see visible results?', a: 'Enhanced hydration and skin suppleness are typically noticeable within the first 7 days. Meaningful collagen thickening, elasticity improvement, and fine line softening peak between weeks 4 and 12.' },
            { q: 'Is a prescription required?', a: 'Bounce Back is evaluated by licensed medical clinicians to ensure therapeutic potency and clinical purity from certified compounding facilities.' },
          ].map((faq, i) => (
            <div key={i} style={{ padding: '24px 0', borderBottom: '1px solid var(--line-soft)' }}>
              <h3 style={{ fontSize: 18, marginBottom: 10, color: 'var(--ink)' }}>{faq.q}</h3>
              <p style={{ margin: 0, fontSize: 16, color: 'var(--ink-2)', lineHeight: 1.6 }}>{faq.a}</p>
            </div>
          ))}

          {/* Patient Reviews */}
          <PatientReviewsSection
            productName="Bounce Back Copper Peptide Serum"
            aggregateRating={{ ratingValue: "4.9", reviewCount: "176" }}
            reviews={[
              {
                author: { name: "Sophia G." },
                datePublished: "2026-03-20",
                reviewRating: { ratingValue: "5" },
                reviewBody: "Within 3 weeks the firmness along my jawline and cheeks was dramatically visible. It absorbs cleanly without irritation. The real deal."
              },
              {
                author: { name: "Natalie P." },
                datePublished: "2026-04-03",
                reviewRating: { ratingValue: "5" },
                reviewBody: "Smoothed out fine lines around my eyes and mouth that retinol was irritating. My skin barrier feels plumper and deeply hydrated."
              }
            ]}
          />

          {/* Final CTA */}
          <div style={{ padding: 40, marginTop: 60, borderRadius: 20, background: 'var(--ink)', color: '#FBF8F3', textAlign: 'center' }}>
            <h2 className="serif" style={{ fontSize: 40, marginBottom: 20, color: '#FBF8F3' }}>Rebuild Your Skin's Extracellular Matrix</h2>
            <p style={{ fontSize: 18, opacity: 0.9, marginBottom: 32, maxWidth: 520, margin: '0 auto 32px' }}>
              Doctor-designed GHK-Cu copper peptide serum. Pure clinical grade. Free expedited shipping.
            </p>
            <a href={CTA_URL} target="_blank" rel="noopener noreferrer" className="btn btn-lg" style={{ background: '#FBF8F3', color: 'var(--ink)', display: 'inline-flex', justifyContent: 'center', width: '100%', maxWidth: 300 }}>
              Claim Bounce Back Today <Icon.Arrow />
            </a>
          </div>

          <p style={{ fontSize: 13, color: 'var(--ink-3)', marginTop: 40, borderTop: '1px solid var(--line-soft)', paddingTop: 20 }}>
            Disclaimer: Topical cosmetic formulations are formulated for topical aesthetic use. Individual results may vary based on skin type and regular adherence. For external dermatological use only.
          </p>

        </div>
      </div>
    </section>
  );
}

export { CopperPeptidePage };
