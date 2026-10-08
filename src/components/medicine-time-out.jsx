"use client";
import React from 'react';
import { Icon } from './common.jsx';
import { PatientReviewsSection } from './patient-reviews-section.jsx';

const CTA_URL = "https://go.telehealthfx.com/time-out";

function TimeOutPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "MedicalWebPage",
        "@id": "https://telehealthfx.com/medications/time-out/#webpage",
        "url": "https://telehealthfx.com/medications/time-out/",
        "name": "Time Out Anti-Aging Peptide Firming & Line Relaxing Serum | Telehealth FX",
        "description": "Advanced prescription-grade biomimetic peptide serum formulated to relax repetitive facial micro-contractions, lift dermal sagging, and visibly smooth expression lines.",
        "about": {
          "@type": "Substance",
          "name": "Time Out Neuromodulating Biomimetic Peptide Complex",
          "drugClass": "Topical neurotransmitter-inhibiting peptide formulation",
          "mechanismOfAction": "Modulates the SNARE receptor complex to attenuate repetitive micro-contractions of facial mimetic muscles, reducing dynamic expression lines while restoring extracellular tensile firmness.",
          "administrationRoute": "Topical facial serum"
        },
        "publisher": { "@type": "MedicalOrganization", "name": "Telehealth FX" }
      },
      {
        "@type": "Product",
        "@id": "https://telehealthfx.com/medications/time-out/#product",
        "name": "Time Out Peptide Line Relaxing & Firming Serum",
        "brand": { "@type": "Brand", "name": "Telehealth FX" },
        "description": "Doctor-designed peptide complex that mimics injectable line relaxers to smooth forehead furrows, laugh lines, and neck laxity without needles.",
        "image": "https://telehealthfx.com/assets/Site%20Icon-modified.png",
        "sku": "TIM-01",
        "url": "https://telehealthfx.com/medications/time-out/",
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "bestRating": "5",
          "worstRating": "1",
          "reviewCount": "188",
          "ratingCount": "188"
        },
        "review": [
          {
            "@type": "Review",
            "author": { "@type": "Person", "name": "Brooke S." },
            "datePublished": "2026-03-08",
            "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
            "reviewBody": "I was looking for an alternative to needles between treatments. Time Out genuinely softened my 11 lines between the brows and lifted the skin under my jawline. Remarkable."
          },
          {
            "@type": "Review",
            "author": { "@type": "Person", "name": "Sarah W." },
            "datePublished": "2026-03-27",
            "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
            "reviewBody": "Firming effect is palpable almost immediately. Within a month, the crepey skin on my neck and dynamic laugh lines were dramatically tightened."
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
            <span className="pill-dot" /> Advanced Biomimetic Peptides
          </div>
          <h1 className="serif" style={{ fontSize: 72, marginBottom: 28, lineHeight: 0.95 }}>
            Time Out<br/>Peptide Firming Serum<br/><span style={{ fontStyle: 'italic', color: 'var(--brand)' }}>from $69/mo.</span>
          </h1>
          <p style={{ fontSize: 20, color: 'var(--ink-2)', maxWidth: 620, margin: '0 auto 40px', lineHeight: 1.6 }}>
            Topical expression-line relaxing peptide technology. Formulated to calm repetitive facial tension, lift contour sagging, and restore youthful elasticity without injections.
          </p>
          <a href={CTA_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-lg" style={{ display: 'inline-flex' }}>
            Claim Time Out Peptide Serum <Icon.Arrow />
          </a>
        </div>

        {/* Trust Strip */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24, marginBottom: 80 }}>
          {[
            { num: 'Needle-Free', label: 'Biomimetic Neuro-Peptides' },
            { num: 'Instant', label: 'Tensile Lift & Hydration' },
            { num: '-47%', label: 'Expression Line Depth Reduction' },
          ].map((s, i) => (
            <div key={i} className="card" style={{ padding: 28, textAlign: 'center' }}>
              <div className="serif" style={{ fontSize: 36, color: 'var(--brand)', marginBottom: 4 }}>{s.num}</div>
              <div style={{ fontSize: 13, color: 'var(--ink-3)' }}>{s.label}</div>
            </div>
          ))}
        </div>

        {/* Content */}
        <div className="blog-content" style={{ fontSize: 18, lineHeight: 1.7, color: 'var(--ink-2)' }}>

          <h2 className="serif" style={{ fontSize: 40, marginTop: 0, marginBottom: 24, color: 'var(--ink)' }}>The Science of Dynamic Expression Wrinkles</h2>
          <p>Every facial expression—squinting, smiling, frowning—causes thousands of micro-contractions across the mimetic musculature of the face. Over decades, as collagen and elastin stores deplete, the skin can no longer rebound smoothly, transforming temporary dynamic expression folds into permanent, deep static creases.</p>
          <p><strong>Time Out</strong> incorporates advanced biomimetic neuro-peptides that target the biochemical cascade of muscle contraction. By attenuating repetitive micro-tensions at the neuromuscular junction, Time Out allows the overlying dermis to rest, relax, and rebuild its structural matrix.</p>

          {/* CTA 1 */}
          <div className="card" style={{ padding: 40, margin: '48px 0', textAlign: 'center', background: '#FFFDF9', borderColor: 'var(--brand)' }}>
            <h3 className="serif" style={{ fontSize: 28, marginBottom: 16, color: 'var(--ink)' }}>Smooth Dynamic Expression Lines</h3>
            <p style={{ marginBottom: 24, fontSize: 16 }}>Clinical peptide formulations compounded to order with medical review and free fast shipping.</p>
            <a href={CTA_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-lg" style={{ display: 'inline-flex', justifyContent: 'center' }}>
              Order Time Out Online <Icon.Arrow />
            </a>
          </div>

          <h2 className="serif" style={{ fontSize: 40, marginTop: 64, marginBottom: 24, color: 'var(--ink)' }}>Key Clinical Benefits of Time Out</h2>
          <ul style={{ marginBottom: 24, paddingLeft: 20 }}>
            <li style={{ marginBottom: 8 }}><strong>Expression Relaxation:</strong> Softens persistent forehead furrows, glabellar '11' lines, and periorbital crow's feet.</li>
            <li style={{ marginBottom: 8 }}><strong>Dermal Tensile Firming:</strong> Synergistic peptide signals stimulate pro-collagen and hyaluronic acid synthesis to firm skin laxity along the jawline and neck.</li>
            <li style={{ marginBottom: 8 }}><strong>Deep Volumizing Moisture:</strong> Multi-molecular weight hyaluronic acid binds water deep in the cellular matrix to visibly plump micro-depressions.</li>
            <li style={{ marginBottom: 8 }}><strong>Zero Downtime or Bruising:</strong> Provides non-invasive peptide support that can be used independently or to extend the lifespan of in-office aesthetic procedures.</li>
          </ul>

          <h2 className="serif" style={{ fontSize: 40, marginTop: 64, marginBottom: 24, color: 'var(--ink)' }}>Frequently Asked Questions</h2>
          {[
            { q: 'How do I use Time Out serum?', a: 'Dispense 3 to 5 drops and gently press into targeted expression areas (forehead, between brows, around eyes, and neck) morning and evening before applying moisturizer.' },
            { q: 'Can I use Time Out if I already get injectable neurotoxin treatments?', a: 'Yes. In fact, many dermatologists recommend peptide serums like Time Out between appointments to extend the smooth, relaxed appearance of the skin.' },
            { q: 'Is Time Out suitable for sensitive skin?', a: 'Yes. Unlike aggressive chemical peels or retinoids, biomimetic peptides are gentle, non-irritating, and naturally compatible with all skin types.' },
            { q: 'How quickly do results appear?', a: 'Patients notice an immediate smoothing and firming sensation within minutes of application. Long-term reduction of expression wrinkle depth is clinically evident within 3 to 6 weeks.' },
          ].map((faq, i) => (
            <div key={i} style={{ padding: '24px 0', borderBottom: '1px solid var(--line-soft)' }}>
              <h3 style={{ fontSize: 18, marginBottom: 10, color: 'var(--ink)' }}>{faq.q}</h3>
              <p style={{ margin: 0, fontSize: 16, color: 'var(--ink-2)', lineHeight: 1.6 }}>{faq.a}</p>
            </div>
          ))}

          {/* Patient Reviews */}
          <PatientReviewsSection
            productName="Time Out Peptide Firming Serum"
            aggregateRating={{ ratingValue: "4.9", reviewCount: "188" }}
            reviews={[
              {
                author: { name: "Brooke S." },
                datePublished: "2026-03-08",
                reviewRating: { ratingValue: "5" },
                reviewBody: "I was looking for an alternative to needles between treatments. Time Out genuinely softened my 11 lines between the brows and lifted the skin under my jawline. Remarkable."
              },
              {
                author: { name: "Sarah W." },
                datePublished: "2026-03-27",
                reviewRating: { ratingValue: "5" },
                reviewBody: "Firming effect is palpable almost immediately. Within a month, the crepey skin on my neck and dynamic laugh lines were dramatically tightened."
              }
            ]}
          />

          {/* Final CTA */}
          <div style={{ padding: 40, marginTop: 60, borderRadius: 20, background: 'var(--ink)', color: '#FBF8F3', textAlign: 'center' }}>
            <h2 className="serif" style={{ fontSize: 40, marginBottom: 20, color: '#FBF8F3' }}>Put Dynamic Aging on Pause</h2>
            <p style={{ fontSize: 18, opacity: 0.9, marginBottom: 32, maxWidth: 520, margin: '0 auto 32px' }}>
              Advanced peptide firming and line-relaxing serum. Pure clinical grade with fast, discreet shipping.
            </p>
            <a href={CTA_URL} target="_blank" rel="noopener noreferrer" className="btn btn-lg" style={{ background: '#FBF8F3', color: 'var(--ink)', display: 'inline-flex', justifyContent: 'center', width: '100%', maxWidth: 300 }}>
              Claim Time Out Today <Icon.Arrow />
            </a>
          </div>

          <p style={{ fontSize: 13, color: 'var(--ink-3)', marginTop: 40, borderTop: '1px solid var(--line-soft)', paddingTop: 20 }}>
            Disclaimer: Formulated for topical aesthetic care. Individual outcomes vary based on skin condition and consistency of use. For external dermatological use only.
          </p>

        </div>
      </div>
    </section>
  );
}

export { TimeOutPage };
