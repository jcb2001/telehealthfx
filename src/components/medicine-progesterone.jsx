"use client";
import React from 'react';
import { Icon } from './common.jsx';
import { PatientReviewsSection } from './patient-reviews-section.jsx';

const CTA_URL = "https://go.telehealthfx.com/progesterone";

function ProgesteronePage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "MedicalWebPage",
        "@id": "https://telehealthfx.com/medications/progesterone/#webpage",
        "url": "https://telehealthfx.com/medications/progesterone/",
        "name": "Bioidentical Oral Progesterone Therapy | Telehealth FX",
        "description": "Doctor-prescribed micronized oral progesterone for restful sleep, mood balance, and endometrial protection during hormone replacement therapy.",
        "about": {
          "@type": "Substance",
          "name": "Progesterone",
          "nonProprietaryName": "Micronized Bioidentical Progesterone",
          "drugClass": "Progestogen / Bioidentical Hormone",
          "mechanismOfAction": "Binds progesterone receptors to regulate the secretory phase of endometrium; metabolites modulate central GABA-A neuroreceptors to induce calm and deep restorative sleep.",
          "administrationRoute": "Oral capsule"
        },
        "publisher": { "@type": "MedicalOrganization", "name": "Telehealth FX" }
      },
      {
        "@type": "Product",
        "@id": "https://telehealthfx.com/medications/progesterone/#product",
        "name": "Bioidentical Oral Progesterone Program",
        "brand": { "@type": "Brand", "name": "Telehealth FX" },
        "description": "Clinician-prescribed bioidentical micronized oral progesterone for sleep architecture, nervous system balance, and comprehensive HRT protection.",
        "image": "https://telehealthfx.com/assets/Site%20Icon-modified.png",
        "sku": "PROG-01",
        "url": "https://telehealthfx.com/medications/progesterone/",
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "bestRating": "5",
          "worstRating": "1",
          "reviewCount": "108",
          "ratingCount": "108"
        },
        "review": [
          {
            "@type": "Review",
            "author": { "@type": "Person", "name": "Hannah V." },
            "datePublished": "2026-03-24",
            "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
            "reviewBody": "Taking this at bedtime has cured my 3 AM insomnia completely. I wake up calm and energized instead of filled with morning dread."
          },
          {
            "@type": "Review",
            "author": { "@type": "Person", "name": "Melissa B." },
            "datePublished": "2026-04-05",
            "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
            "reviewBody": "The combination of progesterone and estrogen brought my anxiety down to zero and balanced my moods. The telehealth consult was informative and compassionate."
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
            <span className="pill-dot" /> Restorative Sleep &amp; Hormonal Balance
          </div>
          <h1 className="serif" style={{ fontSize: 72, marginBottom: 28, lineHeight: 0.95 }}>
            Oral Micronized<br/>Progesterone<br/><span style={{ fontStyle: 'italic', color: 'var(--brand)' }}>from $64.99/mo.</span>
          </h1>
          <p style={{ fontSize: 20, color: 'var(--ink-2)', maxWidth: 620, margin: '0 auto 40px', lineHeight: 1.6 }}>
            Bioidentical micronized oral progesterone prescribed online. Supports natural sleep architecture, reduces nocturnal awakenings, calms perimenopausal anxiety, and protects uterine health.
          </p>
          <a href={CTA_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-lg" style={{ display: 'inline-flex' }}>
            See If You Qualify <Icon.Arrow />
          </a>
        </div>

        {/* Trust Strip */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24, marginBottom: 80 }}>
          {[
            { num: 'GABA', label: 'Natural Sleep Calming' },
            { num: '100%', label: 'Bioidentical Micronized' },
            { num: '2-Day', label: 'Discreet Express Transit' },
          ].map((s, i) => (
            <div key={i} className="card" style={{ padding: 28, textAlign: 'center' }}>
              <div className="serif" style={{ fontSize: 36, color: 'var(--brand)', marginBottom: 4 }}>{s.num}</div>
              <div style={{ fontSize: 13, color: 'var(--ink-3)' }}>{s.label}</div>
            </div>
          ))}
        </div>

        {/* Content */}
        <div className="blog-content" style={{ fontSize: 18, lineHeight: 1.7, color: 'var(--ink-2)' }}>

          <h2 className="serif" style={{ fontSize: 40, marginTop: 0, marginBottom: 24, color: 'var(--ink)' }}>The Calming Master Hormone</h2>
          <p>Progesterone is often known as the "calming hormone" of the female endocrine system. Beyond its crucial role in menstrual cycle regulation and uterine lining stability, progesterone produces powerful neuroactive metabolites — specifically <strong>allopregnanolone</strong> — that cross the blood-brain barrier and bind to GABA-A receptors, acting like the brain's natural relaxation system.</p>
          <p>During the early stages of perimenopause (often starting in a woman's late 30s or early 40s), progesterone is typically the <em>first</em> hormone to precipitously decline. This drop frequently leads to unexplained 3 AM insomnia, sudden nighttime racing heart, nervous tension, breast tenderness, and mood sensitivity.</p>

          {/* CTA 1 */}
          <div className="card" style={{ padding: 40, margin: '48px 0', textAlign: 'center', background: '#FFFDF9', borderColor: 'var(--brand)' }}>
            <h3 className="serif" style={{ fontSize: 28, marginBottom: 16, color: 'var(--ink)' }}>Experience Restful, Uninterrupted Sleep</h3>
            <p style={{ marginBottom: 24, fontSize: 16 }}>Complete your medical evaluation online. A licensed clinician tailors your bioidentical progesterone dose for optimal sleep and hormone health.</p>
            <a href={CTA_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-lg" style={{ display: 'inline-flex', justifyContent: 'center' }}>
              Start Your Assessment <Icon.Arrow />
            </a>
          </div>

          <h2 className="serif" style={{ fontSize: 40, marginTop: 64, marginBottom: 24, color: 'var(--ink)' }}>Clinical Benefits of Micronized Progesterone</h2>
          <ul style={{ marginBottom: 24, paddingLeft: 20 }}>
            <li style={{ marginBottom: 12 }}><strong>Restores Deep Slow-Wave Sleep:</strong> Taken 30–60 minutes before bedtime, micronized progesterone gently activates calming neurocircuits to promote deep, refreshing sleep without the morning grogginess of sleeping pills.</li>
            <li style={{ marginBottom: 12 }}><strong>Relieves Perimenopausal Anxiety:</strong> By naturally stimulating inhibitory GABA neurotransmitters, progesterone helps buffer against the mood instability, irritability, and panic sensations common during hormonal transitions.</li>
            <li style={{ marginBottom: 12 }}><strong>Essential Uterine Protection:</strong> If you take estrogen and have an intact uterus, bioidentical progesterone prevents estrogen-induced endometrial thickening, keeping tissue healthy and safe.</li>
            <li style={{ marginBottom: 12 }}><strong>Safe Micronized Delivery:</strong> Unlike synthetic progestins (such as medroxyprogesterone acetate), bioidentical micronized progesterone does not attenuate the cardiovascular or metabolic benefits of estrogen therapy.</li>
          </ul>

          <h2 className="serif" style={{ fontSize: 40, marginTop: 64, marginBottom: 24, color: 'var(--ink)' }}>Frequently Asked Questions</h2>
          {[
            { q: 'When should I take oral progesterone?', a: 'Because progesterone has a natural mild sedating effect, it is best taken with a glass of water approximately 30 to 60 minutes before bedtime.' },
            { q: 'Is bioidentical progesterone the same as synthetic progestin?', a: 'No. Bioidentical progesterone has the exact molecular structure of human progesterone. Synthetic progestins (like Provera) have a different molecular shape and carry different metabolic and cardiovascular risk profiles.' },
            { q: 'Can I take progesterone if I have had a hysterectomy?', a: 'Yes. While progesterone is mandatory for uterine protection in women with a uterus, many women without a uterus also choose to take it for its sleep-inducing, anxiety-reducing, and neuroprotective properties.' },
            { q: 'How long until I notice improvements in my sleep?', a: 'Many patients report deeper, calmer sleep within the first 1 to 3 nights of beginning their prescribed bedtime dose.' },
          ].map((faq, i) => (
            <div key={i} style={{ padding: '24px 0', borderBottom: '1px solid var(--line-soft)' }}>
              <h3 style={{ fontSize: 18, marginBottom: 10, color: 'var(--ink)' }}>{faq.q}</h3>
              <p style={{ margin: 0, fontSize: 16, color: 'var(--ink-2)', lineHeight: 1.6 }}>{faq.a}</p>
            </div>
          ))}

          {/* Patient Reviews */}
          <PatientReviewsSection
            productName="Bioidentical Oral Progesterone"
            aggregateRating={{ ratingValue: "4.9", reviewCount: "108" }}
            reviews={[
              {
                author: { name: "Hannah V." },
                datePublished: "2026-03-24",
                reviewRating: { ratingValue: "5" },
                reviewBody: "Taking this at bedtime has cured my 3 AM insomnia completely. I wake up calm and energized instead of filled with morning dread."
              },
              {
                author: { name: "Melissa B." },
                datePublished: "2026-04-05",
                reviewRating: { ratingValue: "5" },
                reviewBody: "The combination of progesterone and estrogen brought my anxiety down to zero and balanced my moods. The telehealth consult was informative and compassionate."
              }
            ]}
          />

          {/* Final CTA */}
          <div style={{ padding: 40, marginTop: 60, borderRadius: 20, background: 'var(--ink)', color: '#FBF8F3', textAlign: 'center' }}>
            <h2 className="serif" style={{ fontSize: 40, marginBottom: 20, color: '#FBF8F3' }}>Wake Up Refreshed Every Morning</h2>
            <p style={{ fontSize: 18, opacity: 0.9, marginBottom: 32, maxWidth: 520, margin: '0 auto 32px' }}>
              Doctor-prescribed bioidentical micronized progesterone. 24-hour clinician review. Free discreet home shipping.
            </p>
            <a href={CTA_URL} target="_blank" rel="noopener noreferrer" className="btn btn-lg" style={{ background: '#FBF8F3', color: 'var(--ink)', display: 'inline-flex', justifyContent: 'center', width: '100%', maxWidth: 300 }}>
              Get Started Online <Icon.Arrow />
            </a>
          </div>

          <p style={{ fontSize: 13, color: 'var(--ink-3)', marginTop: 40, borderTop: '1px solid var(--line-soft)', paddingTop: 20 }}>
            Disclaimer: Micronized progesterone is a prescription medication available pursuant to a licensed clinician's consultation and prescription. Not all patients are candidates for hormone therapy. Compounded formulations are prepared by state-licensed 503A compounding pharmacies and are not FDA-approved.
          </p>

        </div>
      </div>
    </section>
  );
}

export { ProgesteronePage };
