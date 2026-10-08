"use client";
import React from 'react';
import { Icon } from './common.jsx';
import { PatientReviewsSection } from './patient-reviews-section.jsx';

const CTA_URL = "https://go.telehealthfx.com/thyroid";

function ThyroidPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "MedicalWebPage",
        "@id": "https://telehealthfx.com/medications/thyroid/#webpage",
        "url": "https://telehealthfx.com/medications/thyroid/",
        "name": "Thyroid Hormone Replacement & Optimization | Telehealth FX",
        "description": "Doctor-prescribed thyroid replacement therapy (T3/T4) for hypothyroidism, chronic fatigue, sluggish metabolism, and brain fog.",
        "about": {
          "@type": "Substance",
          "name": "Thyroid Hormone Formulation",
          "nonProprietaryName": "Levothyroxine (T4) / Liothyronine (T3) Compound",
          "drugClass": "Thyroid hormone replacement",
          "mechanismOfAction": "Restores circulating triiodothyronine (T3) and thyroxine (T4) to optimize basal metabolic rate, mitochondrial thermogenesis, and cellular respiration across all peripheral tissues.",
          "administrationRoute": "Oral capsule or tablet"
        },
        "publisher": { "@type": "MedicalOrganization", "name": "Telehealth FX" }
      },
      {
        "@type": "Product",
        "@id": "https://telehealthfx.com/medications/thyroid/#product",
        "name": "Thyroid Optimization & Replacement Program",
        "brand": { "@type": "Brand", "name": "Telehealth FX" },
        "description": "Comprehensive clinician-prescribed thyroid hormone therapy with personalized T3/T4 calibration and licensed 503A compounding fulfillment.",
        "image": "https://telehealthfx.com/assets/Site%20Icon-modified.png",
        "sku": "THY-01",
        "url": "https://telehealthfx.com/medications/thyroid/",
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.8",
          "bestRating": "5",
          "worstRating": "1",
          "reviewCount": "89",
          "ratingCount": "89"
        },
        "review": [
          {
            "@type": "Review",
            "author": { "@type": "Person", "name": "Rebecca W." },
            "datePublished": "2026-03-29",
            "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
            "reviewBody": "My previous primary care doctor kept telling me my TSH was 'normal' while I was freezing cold and exhausted. Telehealth FX evaluated my Free T3 and adjusted my protocol. My energy is completely restored."
          },
          {
            "@type": "Review",
            "author": { "@type": "Person", "name": "Mark D." },
            "datePublished": "2026-04-08",
            "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
            "reviewBody": "Adding active T3 to my routine eliminated the stubborn afternoon brain fog and accelerated my fat loss. First-class medical care."
          }
        ],
        "offers": {
          "@type": "Offer",
          "price": "99.00",
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
            <span className="pill-dot" /> Metabolic Health &amp; Energy
          </div>
          <h1 className="serif" style={{ fontSize: 72, marginBottom: 28, lineHeight: 0.95 }}>
            Thyroid<br/>Optimization<br/><span style={{ fontStyle: 'italic', color: 'var(--brand)' }}>from $99/mo.</span>
          </h1>
          <p style={{ fontSize: 20, color: 'var(--ink-2)', maxWidth: 620, margin: '0 auto 40px', lineHeight: 1.6 }}>
            Clinician-prescribed thyroid hormone therapy (customized T3/T4 protocols) to reignite your metabolic engine, clear persistent brain fog, and restore natural daily energy.
          </p>
          <a href={CTA_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-lg" style={{ display: 'inline-flex' }}>
            See If You Qualify <Icon.Arrow />
          </a>
        </div>

        {/* Trust Strip */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24, marginBottom: 80 }}>
          {[
            { num: 'T3 + T4', label: 'Complete Thyroid Support' },
            { num: '24h', label: 'Clinician Review' },
            { num: '100%', label: 'Online Telehealth Care' },
          ].map((s, i) => (
            <div key={i} className="card" style={{ padding: 28, textAlign: 'center' }}>
              <div className="serif" style={{ fontSize: 36, color: 'var(--brand)', marginBottom: 4 }}>{s.num}</div>
              <div style={{ fontSize: 13, color: 'var(--ink-3)' }}>{s.label}</div>
            </div>
          ))}
        </div>

        {/* Content */}
        <div className="blog-content" style={{ fontSize: 18, lineHeight: 1.7, color: 'var(--ink-2)' }}>

          <h2 className="serif" style={{ fontSize: 40, marginTop: 0, marginBottom: 24, color: 'var(--ink)' }}>Why 'Normal' Thyroid Labs May Still Leave You Exhausted</h2>
          <p>The thyroid gland is your body's master metabolic thermostat. It controls your basal metabolic rate, body temperature regulation, heart rate, protein synthesis, and how efficiently cells convert fuel into usable energy.</p>
          <p>Standard medicine frequently tests only <strong>TSH (Thyroid Stimulating Hormone)</strong>. However, TSH is a pituitary signal, not a measure of actual active thyroid hormone reaching your tissues. Millions of individuals suffer from <em>subclinical hypothyroidism</em> or poor conversion of inactive T4 into active T3, experiencing debilitating symptoms despite being told their bloodwork is "within normal range."</p>

          <h2 className="serif" style={{ fontSize: 40, marginTop: 64, marginBottom: 24, color: 'var(--ink)' }}>Common Signs of Thyroid Underperformance</h2>
          <ul style={{ marginBottom: 24, paddingLeft: 20 }}>
            <li style={{ marginBottom: 8 }}><strong>Metabolic Slowdown &amp; Weight Resistance:</strong> Inability to lose weight or unexplainable weight gain despite caloric restriction and regular exercise.</li>
            <li style={{ marginBottom: 8 }}><strong>Chronic Fatigue &amp; Lethargy:</strong> Waking up exhausted, requiring constant caffeine, and experiencing profound mid-afternoon energy crashes.</li>
            <li style={{ marginBottom: 8 }}><strong>Cold Intolerance:</strong> Chronically cold hands and feet, even in warm environments.</li>
            <li style={{ marginBottom: 8 }}><strong>Cognitive Sluggishness:</strong> Slowed processing speed, poor working memory, and pervasive mental fatigue.</li>
            <li style={{ marginBottom: 8 }}><strong>Hair Thinning &amp; Dry Skin:</strong> Diffuse hair shedding, brittle nails, and unusually dry skin.</li>
          </ul>

          {/* CTA 1 */}
          <div className="card" style={{ padding: 40, margin: '48px 0', textAlign: 'center', background: '#FFFDF9', borderColor: 'var(--brand)' }}>
            <h3 className="serif" style={{ fontSize: 28, marginBottom: 16, color: 'var(--ink)' }}>Reignite Your Basal Metabolism</h3>
            <p style={{ marginBottom: 24, fontSize: 16 }}>Have your symptoms and labs thoroughly evaluated by licensed clinicians specializing in metabolic optimization.</p>
            <a href={CTA_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-lg" style={{ display: 'inline-flex', justifyContent: 'center' }}>
              Start Your Assessment <Icon.Arrow />
            </a>
          </div>

          <h2 className="serif" style={{ fontSize: 40, marginTop: 64, marginBottom: 24, color: 'var(--ink)' }}>The Power of Dual T3/T4 Replacement</h2>
          <p>The thyroid produces two primary hormones: <strong>Thyroxine (T4)</strong>, an inactive storage hormone, and <strong>Triiodothyronine (T3)</strong>, the active biological hormone that drives cellular respiration. Standard synthetic treatment (levothyroxine alone) relies on your body converting T4 into T3 in the liver and gut.</p>
          <p>Under conditions of chronic stress, systemic inflammation, high cortisol, or aging, the enzyme responsible for this conversion (5'-deiodinase) is suppressed. By incorporating personalized T3 along with T4, patients bypass conversion bottlenecks and supply cells with the direct energy signals they need to thrive.</p>

          <h2 className="serif" style={{ fontSize: 40, marginTop: 64, marginBottom: 24, color: 'var(--ink)' }}>Frequently Asked Questions</h2>
          {[
            { q: 'How does Telehealth FX evaluate my thyroid function?', a: 'Our licensed clinicians evaluate your comprehensive symptom picture alongside lab markers, including Free T3, Free T4, TSH, and thyroid antibodies when indicated, focusing on optimal health rather than broad reference minimums.' },
            { q: 'Can thyroid therapy be combined with GLP-1 weight loss medication?', a: 'Yes. Many patients benefit from addressing both sluggish thyroid function and incretin signaling simultaneously under medical supervision, helping break through long-standing weight plateaus.' },
            { q: 'How quickly will my energy levels improve?', a: 'Many patients report feeling noticeable improvements in body warmth, mental alertness, and baseline stamina within 10 to 14 days of beginning an optimized protocol.' },
            { q: 'Do I need to fast before thyroid lab tests?', a: 'Generally, morning fasting blood draws before taking your daily thyroid medication provide the most accurate assessment of baseline hormone levels.' },
          ].map((faq, i) => (
            <div key={i} style={{ padding: '24px 0', borderBottom: '1px solid var(--line-soft)' }}>
              <h3 style={{ fontSize: 18, marginBottom: 10, color: 'var(--ink)' }}>{faq.q}</h3>
              <p style={{ margin: 0, fontSize: 16, color: 'var(--ink-2)', lineHeight: 1.6 }}>{faq.a}</p>
            </div>
          ))}

          {/* Patient Reviews */}
          <PatientReviewsSection
            productName="Thyroid Hormone Therapy"
            aggregateRating={{ ratingValue: "4.8", reviewCount: "89" }}
            reviews={[
              {
                author: { name: "Rebecca W." },
                datePublished: "2026-03-29",
                reviewRating: { ratingValue: "5" },
                reviewBody: "My previous primary care doctor kept telling me my TSH was 'normal' while I was freezing cold and exhausted. Telehealth FX evaluated my Free T3 and adjusted my protocol. My energy is completely restored."
              },
              {
                author: { name: "Mark D." },
                datePublished: "2026-04-08",
                reviewRating: { ratingValue: "5" },
                reviewBody: "Adding active T3 to my routine eliminated the stubborn afternoon brain fog and accelerated my fat loss. First-class medical care."
              }
            ]}
          />

          {/* Final CTA */}
          <div style={{ padding: 40, marginTop: 60, borderRadius: 20, background: 'var(--ink)', color: '#FBF8F3', textAlign: 'center' }}>
            <h2 className="serif" style={{ fontSize: 40, marginBottom: 20, color: '#FBF8F3' }}>Feel Energetic &amp; Alert Again</h2>
            <p style={{ fontSize: 18, opacity: 0.9, marginBottom: 32, maxWidth: 520, margin: '0 auto 32px' }}>
              Doctor-prescribed thyroid optimization protocols. Licensed clinicians. Fast approval. Direct doorstep delivery.
            </p>
            <a href={CTA_URL} target="_blank" rel="noopener noreferrer" className="btn btn-lg" style={{ background: '#FBF8F3', color: 'var(--ink)', display: 'inline-flex', justifyContent: 'center', width: '100%', maxWidth: 300 }}>
              Get Started Online <Icon.Arrow />
            </a>
          </div>

          <p style={{ fontSize: 13, color: 'var(--ink-3)', marginTop: 40, borderTop: '1px solid var(--line-soft)', paddingTop: 20 }}>
            Disclaimer: Thyroid replacement therapy is a prescription-only treatment requiring comprehensive clinician evaluation and lab review. It is contraindicated in untreated thyrotoxicosis or acute myocardial infarction. Compounded medications are prepared by state-licensed 503A compounding pharmacies and are not FDA-approved.
          </p>

        </div>
      </div>
    </section>
  );
}

export { ThyroidPage };
