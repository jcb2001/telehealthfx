"use client";
import React from 'react';
import { Icon } from './common.jsx';

const CTA_URL = "https://go.telehealthfx.com/semaglutide-tablets";

function SemaglutideTabletsPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "MedicalWebPage",
        "@id": "https://telehealthfx.com/medications/semaglutide-tablets/#webpage",
        "url": "https://telehealthfx.com/medications/semaglutide-tablets",
        "name": "Semaglutide Tablets Weight Loss Program | Telehealth FX",
        "description": "Get prescribed compounded sublingual Semaglutide tablets from $249/mo. 24-hour clinician approval, zero weekly needles, free shipping.",
        "about": {
          "@type": "Drug",
          "@id": "https://telehealthfx.com/medications/semaglutide-tablets/#drug",
          "name": "Compounded Semaglutide Tablets",
          "nonProprietaryName": "Semaglutide",
          "drugClass": "GLP-1 receptor agonist",
          "mechanismOfAction": "Mimics GLP-1 hormone to regulate appetite, slow gastric emptying, and improve insulin sensitivity",
          "administrationRoute": "Sublingual (dissolving tablet under the tongue)"
        },
        "publisher": { "@type": "MedicalOrganization", "name": "Telehealth FX" }
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
            <span className="pill-dot" /> Once-Daily Tablet
          </div>
          <h1 className="serif" style={{ fontSize: 72, marginBottom: 28, lineHeight: 0.95 }}>
            Semaglutide Tablets<br/><span style={{ fontStyle: 'italic', color: 'var(--brand)' }}>from $249/mo.</span>
          </h1>
          <p style={{ fontSize: 20, color: 'var(--ink-2)', maxWidth: 600, margin: '0 auto 40px', lineHeight: 1.6 }}>
            A convenient once-daily dissolving tablet form of Semaglutide. Compounded semaglutide tablets — prepared by U.S. state-licensed pharmacies. Zero injections, zero pain.
          </p>
          <a href={CTA_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-lg" style={{ display: 'inline-flex' }}>
            See If You Qualify <Icon.Arrow />
          </a>
        </div>

        {/* Trust Strip */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24, marginBottom: 80 }}>
          {[
            { num: 'Tablet', label: 'Easy Dissolving Format' },
            { num: '$249', label: 'Starting Price/mo' },
            { num: '0', label: 'Weekly Needles' },
          ].map((s, i) => (
            <div key={i} className="card" style={{ padding: 28, textAlign: 'center' }}>
              <div className="serif" style={{ fontSize: 36, color: 'var(--brand)', marginBottom: 4 }}>{s.num}</div>
              <div style={{ fontSize: 13, color: 'var(--ink-3)' }}>{s.label}</div>
            </div>
          ))}
        </div>

        {/* Content */}
        <div className="blog-content" style={{ fontSize: 18, lineHeight: 1.7, color: 'var(--ink-2)' }}>

          <h2 className="serif" style={{ fontSize: 40, marginTop: 0, marginBottom: 24, color: 'var(--ink)' }}>What Are Semaglutide Tablets?</h2>
          <p>Compounded semaglutide tablets are an oral form of the GLP-1 receptor agonist semaglutide. Taken daily, these sublingual tablets are designed to dissolve completely under the tongue. This allows the active semaglutide molecule to be absorbed directly into the blood via the sublingual mucosa, bypassing the destructive acids of the stomach.</p>
          <p>This tablet format provides a highly convenient, comfortable, and needle-free alternative for individuals who want the clinical efficacy of semaglutide without the pain and storage hassles associated with refrigerated weekly injections.</p>
          <p>Our compounded semaglutide tablets are prescribed by licensed providers and formulated in certified U.S. compounding pharmacies, starting at <strong>$249/month</strong>.</p>

          <h2 className="serif" style={{ fontSize: 40, marginTop: 64, marginBottom: 24, color: 'var(--ink)' }}>How Semaglutide Tablets Work</h2>
          <p>Semaglutide tablets work by mimicking a natural gut hormone called GLP-1 (Glucagon-Like Peptide-1) to support healthy weight loss:</p>
          <ul style={{ marginBottom: 24, paddingLeft: 20 }}>
            <li style={{ marginBottom: 12 }}><strong>Reduces Hunger:</strong> Acts on the hypothalamus to curb your appetite and quiet down persistent "food noise" — the mental urge to snack throughout the day.</li>
            <li style={{ marginBottom: 12 }}><strong>Slowing Digestion:</strong> Slows down gastric emptying, keeping you feeling fuller and satisfied for longer after meals, which naturally reduces portion sizes.</li>
            <li style={{ marginBottom: 12 }}><strong>Regulates Insulin & Metabolism:</strong> Aids in managing blood sugar and insulin levels, encouraging more efficient fat utilization and supporting long-term metabolic health.</li>
          </ul>

          {/* CTA 1 */}
          <div className="card" style={{ padding: 40, margin: '48px 0', textAlign: 'center', background: '#FFFDF9', borderColor: 'var(--brand)' }}>
            <h3 className="serif" style={{ fontSize: 28, marginBottom: 16, color: 'var(--ink)' }}>Ditch the Needles</h3>
            <p style={{ marginBottom: 24, fontSize: 16 }}>Complete your medical assessment. If prescribed, your custom compounded semaglutide tablets are shipped directly to your door.</p>
            <a href={CTA_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-lg" style={{ display: 'inline-flex', justifyContent: 'center' }}>
              See If You Qualify <Icon.Arrow />
            </a>
          </div>

          <h2 className="serif" style={{ fontSize: 40, marginTop: 64, marginBottom: 24, color: 'var(--ink)' }}>How to Take Semaglutide Tablets</h2>
          <p>For maximum absorption and weight loss results, follow these instructions daily:</p>
          <ul style={{ marginBottom: 24, paddingLeft: 20 }}>
            <li style={{ marginBottom: 8 }}><strong>First Thing in the Morning:</strong> Place one tablet under your tongue immediately upon waking on an empty stomach.</li>
            <li style={{ marginBottom: 8 }}><strong>Allow to Dissolve:</strong> Let the tablet dissolve completely under the tongue. Do not chew, crush, or swallow the tablet whole.</li>
            <li style={{ marginBottom: 8 }}><strong>Wait 30 Minutes:</strong> Avoid eating, drinking, or taking other medications for at least 30 minutes after the tablet has dissolved.</li>
          </ul>

          <h2 className="serif" style={{ fontSize: 40, marginTop: 64, marginBottom: 24, color: 'var(--ink)' }}>Clinical Safety & Side Effects</h2>
          <p>Compounded daily semaglutide tablets share a very similar safety profile to weekly injections. Common side effects are usually mild and occur as your body adjusts to the medication:</p>
          <ul style={{ marginBottom: 24, paddingLeft: 20 }}>
            <li style={{ marginBottom: 8 }}>Mild nausea or upset stomach</li>
            <li style={{ marginBottom: 8 }}>Constipation or loose stools</li>
            <li style={{ marginBottom: 8 }}>Reduced appetite (which is the desired therapeutic effect)</li>
          </ul>
          <p>Our clinical team reviews your medical intake to verify eligibility, customize your titration schedule, and support you throughout your weight management program.</p>

          {/* CTA 2 */}
          <div style={{ padding: 40, marginTop: 60, borderRadius: 20, background: 'var(--ink)', color: '#FBF8F3', textAlign: 'center' }}>
            <h2 className="serif" style={{ fontSize: 40, marginBottom: 20, color: '#FBF8F3' }}>Ready for Daily Semaglutide Tablets?</h2>
            <p style={{ fontSize: 18, opacity: 0.9, marginBottom: 32, maxWidth: 500, margin: '0 auto 32px' }}>
              From $249/mo. 100% online clinician consult, transparent subscription pricing, and direct-to-door delivery.
            </p>
            <a href={CTA_URL} target="_blank" rel="noopener noreferrer" className="btn btn-lg" style={{ background: '#FBF8F3', color: 'var(--ink)', display: 'inline-flex', justifyContent: 'center', width: '100%', maxWidth: 300 }}>
              See If You Qualify <Icon.Arrow />
            </a>
          </div>

        </div>
      </div>
      <p style={{ fontSize: 13, color: 'var(--ink-3)', marginTop: 32, paddingTop: 20, borderTop: '1px solid var(--line-soft)' }}>Disclaimer: Mounjaro®, Zepbound®, Ozempic®, and Wegovy® are registered trademarks of their respective owners (Eli Lilly and Company, Novo Nordisk). Telehealth FX is an independent telehealth platform and is not affiliated with, endorsed by, or sponsored by these trademark owners. Compounded medications are prepared by state-licensed compounding pharmacies pursuant to a patient-specific prescription and are not reviewed or approved by the FDA for safety or efficacy.</p>
    </section>
  );
}

export { SemaglutideTabletsPage };
