"use client";
import React from 'react';
import { Icon } from './common.jsx';
import { PatientReviewsSection } from './patient-reviews-section.jsx';

const CTA_URL = "https://go.telehealthfx.com/estrogen";

function EstrogenPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "MedicalWebPage",
        "@id": "https://telehealthfx.com/medications/estrogen/#webpage",
        "url": "https://telehealthfx.com/medications/estrogen/",
        "name": "Estrogen Hormone Replacement Therapy (HRT) | Telehealth FX",
        "description": "Doctor-prescribed bioidentical estrogen therapy for perimenopause and menopause relief. Alleviate hot flashes, night sweats, brain fog, and protect bone density.",
        "about": {
          "@type": "Substance",
          "name": "Estradiol",
          "nonProprietaryName": "Estradiol (Bioidentical Estrogen)",
          "drugClass": "Estrogen receptor agonist / Bioidentical Hormone",
          "mechanismOfAction": "Restores physiological estrogen levels to regulate thermoregulation, preserve bone mineralization, and support neurocognitive and cardiovascular health.",
          "administrationRoute": "Topical cream or oral tablet"
        },
        "publisher": { "@type": "MedicalOrganization", "name": "Telehealth FX" }
      },
      {
        "@type": "Product",
        "@id": "https://telehealthfx.com/medications/estrogen/#product",
        "name": "Bioidentical Estrogen Therapy Program",
        "brand": { "@type": "Brand", "name": "Telehealth FX" },
        "description": "Clinician-prescribed bioidentical estrogen HRT customized for your symptoms and hormonal profile with licensed compounding pharmacy fulfillment.",
        "image": "https://telehealthfx.com/assets/Site%20Icon-modified.png",
        "sku": "EST-01",
        "url": "https://telehealthfx.com/medications/estrogen/",
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "bestRating": "5",
          "worstRating": "1",
          "reviewCount": "134",
          "ratingCount": "134"
        },
        "review": [
          {
            "@type": "Review",
            "author": { "@type": "Person", "name": "Claire M." },
            "datePublished": "2026-03-18",
            "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
            "reviewBody": "My night sweats vanished within 10 days of starting. I finally feel like myself again — sharp mental clarity and restful sleep. Exceptional telehealth experience."
          },
          {
            "@type": "Review",
            "author": { "@type": "Person", "name": "Elena S." },
            "datePublished": "2026-04-01",
            "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
            "reviewBody": "The clinician was so thorough in reviewing my lab work and symptom history. Fast shipping, easy dosing, and zero hassle."
          }
        ],
        "offers": {
          "@type": "Offer",
          "price": "89.00",
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
            <span className="pill-dot" /> Women's Hormone Optimization
          </div>
          <h1 className="serif" style={{ fontSize: 72, marginBottom: 28, lineHeight: 0.95 }}>
            Bioidentical<br/>Estrogen Therapy<br/><span style={{ fontStyle: 'italic', color: 'var(--brand)' }}>from $89/mo.</span>
          </h1>
          <p style={{ fontSize: 20, color: 'var(--ink-2)', maxWidth: 620, margin: '0 auto 40px', lineHeight: 1.6 }}>
            Doctor-prescribed bioidentical estradiol to relieve hot flashes, night sweats, fatigue, and brain fog while supporting long-term bone and heart health.
          </p>
          <a href={CTA_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-lg" style={{ display: 'inline-flex' }}>
            See If You Qualify <Icon.Arrow />
          </a>
        </div>

        {/* Trust Strip */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24, marginBottom: 80 }}>
          {[
            { num: '100%', label: 'Bioidentical Estradiol' },
            { num: '24h', label: 'Clinician Review' },
            { num: 'Discreet', label: 'Free Home Delivery' },
          ].map((s, i) => (
            <div key={i} className="card" style={{ padding: 28, textAlign: 'center' }}>
              <div className="serif" style={{ fontSize: 36, color: 'var(--brand)', marginBottom: 4 }}>{s.num}</div>
              <div style={{ fontSize: 13, color: 'var(--ink-3)' }}>{s.label}</div>
            </div>
          ))}
        </div>

        {/* Content */}
        <div className="blog-content" style={{ fontSize: 18, lineHeight: 1.7, color: 'var(--ink-2)' }}>

          <h2 className="serif" style={{ fontSize: 40, marginTop: 0, marginBottom: 24, color: 'var(--ink)' }}>Understanding Estrogen Decline</h2>
          <p>During perimenopause and menopause, natural ovarian production of estrogen drops significantly. Because estrogen receptors are located throughout the brain, bones, heart, skin, and vascular system, this hormonal depletion can trigger systemic symptoms that disrupt daily life and productivity.</p>
          <p>Common clinical signs of estrogen deficiency include:</p>
          <ul style={{ marginBottom: 24, paddingLeft: 20 }}>
            <li style={{ marginBottom: 8 }}><strong>Vasomotor Symptoms:</strong> Frequent debilitating hot flashes and nighttime sweats that disrupt deep REM sleep.</li>
            <li style={{ marginBottom: 8 }}><strong>Cognitive Fog &amp; Fatigue:</strong> Memory lapses, difficulty concentrating, mental exhaustion, and unprovoked mood swings.</li>
            <li style={{ marginBottom: 8 }}><strong>Bone Density Loss:</strong> Accelerated osteoclast activity leading to osteopenia and osteoporosis risk.</li>
            <li style={{ marginBottom: 8 }}><strong>Metabolic Shifts:</strong> Redistribution of weight toward visceral abdominal fat and decreased collagen synthesis leading to thinning skin.</li>
          </ul>

          {/* CTA 1 */}
          <div className="card" style={{ padding: 40, margin: '48px 0', textAlign: 'center', background: '#FFFDF9', borderColor: 'var(--brand)' }}>
            <h3 className="serif" style={{ fontSize: 28, marginBottom: 16, color: 'var(--ink)' }}>Restore Hormonal Balance</h3>
            <p style={{ marginBottom: 24, fontSize: 16 }}>Complete a secure 3-minute medical intake. Licensed clinicians design your customized bioidentical hormone protocol.</p>
            <a href={CTA_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-lg" style={{ display: 'inline-flex', justifyContent: 'center' }}>
              Start Your Assessment <Icon.Arrow />
            </a>
          </div>

          <h2 className="serif" style={{ fontSize: 40, marginTop: 64, marginBottom: 24, color: 'var(--ink)' }}>Why Bioidentical Estrogen (Estradiol)?</h2>
          <p>Unlike older synthetic conjugated estrogens derived from equine urine, <strong>bioidentical 17β-estradiol</strong> is chemically and structurally identical to the natural estrogen molecule your ovaries produced. This molecular match ensures clean receptor binding with a favorable cardiovascular and metabolic safety profile when monitored by experienced clinicians.</p>
          <p>When prescribed for women with an intact uterus, estrogen therapy is typically combined with bioidentical oral progesterone to protect the endometrial lining.</p>

          <h2 className="serif" style={{ fontSize: 40, marginTop: 64, marginBottom: 24, color: 'var(--ink)' }}>Frequently Asked Questions</h2>
          {[
            { q: 'How quickly does bioidentical estrogen relieve hot flashes?', a: 'Most women report noticeable reductions in hot flash frequency and intensity within 1 to 2 weeks, with optimal symptom relief and improved sleep depth stabilizing between weeks 4 and 8.' },
            { q: 'Do I need progesterone along with estrogen?', a: 'If you have an intact uterus, standard clinical guidelines recommend taking bioidentical progesterone alongside estrogen to keep the uterine lining thin and protected.' },
            { q: 'How is my prescription fulfilled?', a: 'Your customized prescription is prepared by a licensed US compounding pharmacy and shipped directly to your doorstep in discreet, temperature-appropriate packaging with comprehensive administration supplies.' },
            { q: 'Can I do my consultations entirely online?', a: 'Yes. Telehealth FX connects you directly with state-licensed clinicians who review your medical history, symptoms, and existing lab work online without requiring inconvenient in-person clinic visits.' },
          ].map((faq, i) => (
            <div key={i} style={{ padding: '24px 0', borderBottom: '1px solid var(--line-soft)' }}>
              <h3 style={{ fontSize: 18, marginBottom: 10, color: 'var(--ink)' }}>{faq.q}</h3>
              <p style={{ margin: 0, fontSize: 16, color: 'var(--ink-2)', lineHeight: 1.6 }}>{faq.a}</p>
            </div>
          ))}

          {/* Patient Reviews */}
          <PatientReviewsSection
            productName="Bioidentical Estrogen Therapy"
            aggregateRating={{ ratingValue: "4.9", reviewCount: "134" }}
            reviews={[
              {
                author: { name: "Claire M." },
                datePublished: "2026-03-18",
                reviewRating: { ratingValue: "5" },
                reviewBody: "My night sweats vanished within 10 days of starting. I finally feel like myself again — sharp mental clarity and restful sleep. Exceptional telehealth experience."
              },
              {
                author: { name: "Elena S." },
                datePublished: "2026-04-01",
                reviewRating: { ratingValue: "5" },
                reviewBody: "The clinician was so thorough in reviewing my lab work and symptom history. Fast shipping, easy dosing, and zero hassle."
              }
            ]}
          />

          {/* Final CTA */}
          <div style={{ padding: 40, marginTop: 60, borderRadius: 20, background: 'var(--ink)', color: '#FBF8F3', textAlign: 'center' }}>
            <h2 className="serif" style={{ fontSize: 40, marginBottom: 20, color: '#FBF8F3' }}>Reclaim Your Vitality &amp; Comfort</h2>
            <p style={{ fontSize: 18, opacity: 0.9, marginBottom: 32, maxWidth: 520, margin: '0 auto 32px' }}>
              Doctor-prescribed bioidentical hormone replacement. Licensed clinicians. 24-hour review. Free discreet shipping.
            </p>
            <a href={CTA_URL} target="_blank" rel="noopener noreferrer" className="btn btn-lg" style={{ background: '#FBF8F3', color: 'var(--ink)', display: 'inline-flex', justifyContent: 'center', width: '100%', maxWidth: 300 }}>
              Get Started Online <Icon.Arrow />
            </a>
          </div>

          <p style={{ fontSize: 13, color: 'var(--ink-3)', marginTop: 40, borderTop: '1px solid var(--line-soft)', paddingTop: 20 }}>
            Disclaimer: Bioidentical hormone replacement therapy (HRT) requires clinician assessment and a valid patient-specific prescription. Hormone therapies carry potential risks and contraindications, including certain hormone-sensitive cancers and thromboembolic disorders. Compounded medications are prepared by state-licensed compounding pharmacies pursuant to a prescription and are not reviewed or approved by the FDA for safety or efficacy.
          </p>

        </div>
      </div>
    </section>
  );
}

export { EstrogenPage };
