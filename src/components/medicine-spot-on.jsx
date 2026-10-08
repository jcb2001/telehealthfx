"use client";
import React from 'react';
import { Icon } from './common.jsx';
import { PatientReviewsSection } from './patient-reviews-section.jsx';

const CTA_URL = "https://go.telehealthfx.com/spot-on";

function SpotOnPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "MedicalWebPage",
        "@id": "https://telehealthfx.com/medications/spot-on/#webpage",
        "url": "https://telehealthfx.com/medications/spot-on/",
        "name": "Spot On Prescription Dark Spot & Melasma Eraser | Telehealth FX",
        "description": "Targeted prescription hyperpigmentation and melasma therapy. Clinically formulated with multi-action tyrosinase inhibitors to erase sun spots, age spots, and uneven tone.",
        "about": {
          "@type": "Substance",
          "name": "Spot On Depigmenting Dermatological Complex",
          "drugClass": "Prescription melanogenesis inhibitor / Tyrosinase blocker",
          "mechanismOfAction": "Directly inhibits the rate-limiting enzyme tyrosinase in basal melanocytes, interrupts melanosome transfer to keratinocytes, and accelerates pigmented cell clearance.",
          "administrationRoute": "Topical targeted spot cream"
        },
        "publisher": { "@type": "MedicalOrganization", "name": "Telehealth FX" }
      },
      {
        "@type": "Product",
        "@id": "https://telehealthfx.com/medications/spot-on/#product",
        "name": "Spot On Prescription Dark Spot Eraser",
        "brand": { "@type": "Brand", "name": "Telehealth FX" },
        "description": "Doctor-prescribed medical depigmenting formulation that fades deep melasma patches, post-inflammatory acne marks, and age spots at the cellular source.",
        "image": "https://telehealthfx.com/assets/Site%20Icon-modified.png",
        "sku": "SPO-01",
        "url": "https://telehealthfx.com/medications/spot-on/",
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "bestRating": "5",
          "worstRating": "1",
          "reviewCount": "165",
          "ratingCount": "165"
        },
        "review": [
          {
            "@type": "Review",
            "author": { "@type": "Person", "name": "Elena R." },
            "datePublished": "2026-03-05",
            "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
            "reviewBody": "Post-pregnancy melasma on my forehead and upper lip that resisted every vitamin C serum disappeared in 6 weeks with Spot On. My skin looks completely even."
          },
          {
            "@type": "Review",
            "author": { "@type": "Person", "name": "Jordan T." },
            "datePublished": "2026-03-21",
            "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
            "reviewBody": "Sun spots from years of golfing faded by 80% after just one bottle. The precision formulation works quickly without irritating surrounding skin."
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
            <span className="pill-dot" /> Prescription Pigment Correction
          </div>
          <h1 className="serif" style={{ fontSize: 72, marginBottom: 28, lineHeight: 0.95 }}>
            Spot On<br/>Dark Spot Eraser<br/><span style={{ fontStyle: 'italic', color: 'var(--brand)' }}>from $69/mo.</span>
          </h1>
          <p style={{ fontSize: 20, color: 'var(--ink-2)', maxWidth: 620, margin: '0 auto 40px', lineHeight: 1.6 }}>
            Prescription-strength targeted hyperpigmentation therapy. Formulated with clinical tyrosinase inhibitors to dissolve stubborn melasma, sun damage, and age spots at the cellular melanocyte level.
          </p>
          <a href={CTA_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-lg" style={{ display: 'inline-flex' }}>
            Get Your Spot On Formula <Icon.Arrow />
          </a>
        </div>

        {/* Trust Strip */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24, marginBottom: 80 }}>
          {[
            { num: 'Melanocyte', label: 'Inhibits Cellular Pigment Creation' },
            { num: '92%', label: 'Visible Dark Spot Reduction' },
            { num: 'Rx-Only', label: 'Doctor-Compounded Potency' },
          ].map((s, i) => (
            <div key={i} className="card" style={{ padding: 28, textAlign: 'center' }}>
              <div className="serif" style={{ fontSize: 36, color: 'var(--brand)', marginBottom: 4 }}>{s.num}</div>
              <div style={{ fontSize: 13, color: 'var(--ink-3)' }}>{s.label}</div>
            </div>
          ))}
        </div>

        {/* Content */}
        <div className="blog-content" style={{ fontSize: 18, lineHeight: 1.7, color: 'var(--ink-2)' }}>

          <h2 className="serif" style={{ fontSize: 40, marginTop: 0, marginBottom: 24, color: 'var(--ink)' }}>How Melanin Clusters Form and Why Over-the-Counter Serums Fail</h2>
          <p>Hyperpigmentation, melasma, and solar lentigines (age spots) are caused by hyperactive <strong>melanocytes</strong> at the dermal-epidermal boundary. In response to UV light, hormonal surges (such as estrogen or pregnancy), or inflammation, these cells overproduce melanin and distribute pigment parcels throughout the epidermis.</p>
          <p>Over-the-counter brightening serums use weak botanical extracts that merely exfoliate surface skin without blocking ongoing melanin synthesis. <strong>Spot On</strong> delivers clinical-strength active inhibitors directly to the tyrosinase enzyme, switching off hyperactive melanin factories while breaking up existing discoloration clusters.</p>

          {/* CTA 1 */}
          <div className="card" style={{ padding: 40, margin: '48px 0', textAlign: 'center', background: '#FFFDF9', borderColor: 'var(--brand)' }}>
            <h3 className="serif" style={{ fontSize: 28, marginBottom: 16, color: 'var(--ink)' }}>Fade Discoloration for Good</h3>
            <p style={{ marginBottom: 24, fontSize: 16 }}>Online doctor prescription with tailored medical formulation and discreet doorstep delivery.</p>
            <a href={CTA_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-lg" style={{ display: 'inline-flex', justifyContent: 'center' }}>
              Claim Your Spot On Prescription <Icon.Arrow />
            </a>
          </div>

          <h2 className="serif" style={{ fontSize: 40, marginTop: 64, marginBottom: 24, color: 'var(--ink)' }}>Multi-Mechanism Depigmentation Strategy</h2>
          <p>Spot On addresses discoloration through a comprehensive multi-pathway therapeutic approach:</p>
          <ul style={{ marginBottom: 24, paddingLeft: 20 }}>
            <li style={{ marginBottom: 8 }}><strong>Direct Enzyme Inhibition:</strong> Blocks tyrosinase enzymatic activity to arrest new pigment synthesis before it begins.</li>
            <li style={{ marginBottom: 8 }}><strong>Melanosome Transfer Disruption:</strong> Prevents melanin granules from migrating into surrounding epidermal keratinocytes.</li>
            <li style={{ marginBottom: 8 }}><strong>Accelerated Pigment Shedding:</strong> Gently lifts and disperses stagnant, oxidized melanin deposits to reveal crystal-clear skin.</li>
            <li style={{ marginBottom: 8 }}><strong>Barrier Soothing Complex:</strong> Anti-inflammatory agents prevent post-inflammatory hyperpigmentation flare-ups.</li>
          </ul>

          <h2 className="serif" style={{ fontSize: 40, marginTop: 64, marginBottom: 24, color: 'var(--ink)' }}>Frequently Asked Questions</h2>
          {[
            { q: 'How should I apply Spot On?', a: 'Apply a targeted thin layer directly to areas of discoloration once daily at night on clean, dry skin. Allow 2 minutes to absorb before applying your nighttime moisturizer.' },
            { q: 'Can I use Spot On for hormonal melasma?', a: 'Yes. Spot On is specifically designed to manage stubborn hormonally induced melasma, which is typically unresponsive to standard over-the-counter cosmetic products.' },
            { q: 'Is daily sun protection required?', a: 'Absolute sun protection is mandatory during any pigment-lightening treatment. Applying broad-spectrum SPF 30 or higher every morning prevents UV rays from re-triggering melanin production.' },
            { q: 'When can I expect visible lightening?', a: 'Surface brightness and mark fading typically begin within 2 to 3 weeks. Complete clearing of deep, longstanding sun spots and melasma is typically achieved within 6 to 10 weeks.' },
          ].map((faq, i) => (
            <div key={i} style={{ padding: '24px 0', borderBottom: '1px solid var(--line-soft)' }}>
              <h3 style={{ fontSize: 18, marginBottom: 10, color: 'var(--ink)' }}>{faq.q}</h3>
              <p style={{ margin: 0, fontSize: 16, color: 'var(--ink-2)', lineHeight: 1.6 }}>{faq.a}</p>
            </div>
          ))}

          {/* Patient Reviews */}
          <PatientReviewsSection
            productName="Spot On Dark Spot Treatment"
            aggregateRating={{ ratingValue: "4.9", reviewCount: "165" }}
            reviews={[
              {
                author: { name: "Elena R." },
                datePublished: "2026-03-05",
                reviewRating: { ratingValue: "5" },
                reviewBody: "Post-pregnancy melasma on my forehead and upper lip that resisted every vitamin C serum disappeared in 6 weeks with Spot On. My skin looks completely even."
              },
              {
                author: { name: "Jordan T." },
                datePublished: "2026-03-21",
                reviewRating: { ratingValue: "5" },
                reviewBody: "Sun spots from years of golfing faded by 80% after just one bottle. The precision formulation works quickly without irritating surrounding skin."
              }
            ]}
          />

          {/* Final CTA */}
          <div style={{ padding: 40, marginTop: 60, borderRadius: 20, background: 'var(--ink)', color: '#FBF8F3', textAlign: 'center' }}>
            <h2 className="serif" style={{ fontSize: 40, marginBottom: 20, color: '#FBF8F3' }}>Erase Stubborn Spots &amp; Reveal Radiant Tone</h2>
            <p style={{ fontSize: 18, opacity: 0.9, marginBottom: 32, maxWidth: 520, margin: '0 auto 32px' }}>
              Doctor-prescribed dark spot and melasma treatment. Fast online approval with free expedited shipping.
            </p>
            <a href={CTA_URL} target="_blank" rel="noopener noreferrer" className="btn btn-lg" style={{ background: '#FBF8F3', color: 'var(--ink)', display: 'inline-flex', justifyContent: 'center', width: '100%', maxWidth: 300 }}>
              Claim Spot On Today <Icon.Arrow />
            </a>
          </div>

          <p style={{ fontSize: 13, color: 'var(--ink-3)', marginTop: 40, borderTop: '1px solid var(--line-soft)', paddingTop: 20 }}>
            Disclaimer: Prescription depigmentation treatments are compounded pursuant to an online consultation with a licensed medical provider. Always wear sun protection when using pigment correction formulas.
          </p>

        </div>
      </div>
    </section>
  );
}

export { SpotOnPage };
