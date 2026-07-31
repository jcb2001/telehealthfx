"use client";
import React from 'react';
import { Icon } from './common.jsx';

const CTA_URL = "https://go.telehealthfx.com/sublingual-semaglutide";

function SublingualSemaglutidePage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "MedicalWebPage",
        "@id": "https://telehealthfx.com/medications/sublingual-semaglutide/#webpage",
        "url": "https://telehealthfx.com/medications/sublingual-semaglutide",
        "name": "Sublingual Semaglutide Weight Loss Program | Telehealth FX",
        "description": "Get prescribed compounded sublingual Semaglutide drops from $199/mo. 24-hour clinician approval, zero weekly needles, free shipping.",
        "about": {
          "@type": "Drug",
          "@id": "https://telehealthfx.com/medications/sublingual-semaglutide/#drug",
          "name": "Compounded Sublingual Semaglutide",
          "nonProprietaryName": "Semaglutide",
          "drugClass": "GLP-1 receptor agonist",
          "mechanismOfAction": "Mimics GLP-1 hormone to regulate appetite, slow gastric emptying, and improve insulin sensitivity",
          "administrationRoute": "Sublingual (under the tongue)"
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
            <span className="pill-dot" /> Needle-Free GLP-1
          </div>
          <h1 className="serif" style={{ fontSize: 72, marginBottom: 28, lineHeight: 0.95 }}>
            Sublingual Semaglutide<br/><span style={{ fontStyle: 'italic', color: 'var(--brand)' }}>from $199/mo.</span>
          </h1>
          <p style={{ fontSize: 20, color: 'var(--ink-2)', maxWidth: 600, margin: '0 auto 40px', lineHeight: 1.6 }}>
            A daily sublingual liquid drop version of Semaglutide. Compounded sublingual semaglutide — prepared by U.S. state-licensed pharmacies. No needles required.
          </p>
          <a href={CTA_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-lg" style={{ display: 'inline-flex' }}>
            See If You Qualify <Icon.Arrow />
          </a>
        </div>

        {/* Trust Strip */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24, marginBottom: 80 }}>
          {[
            { num: '0% Needles', label: '100% Oral Sublingual' },
            { num: '$199', label: 'Starting Price/mo' },
            { num: 'Daily', label: 'Dosing Routine' },
          ].map((s, i) => (
            <div key={i} className="card" style={{ padding: 28, textAlign: 'center' }}>
              <div className="serif" style={{ fontSize: 36, color: 'var(--brand)', marginBottom: 4 }}>{s.num}</div>
              <div style={{ fontSize: 13, color: 'var(--ink-3)' }}>{s.label}</div>
            </div>
          ))}
        </div>

        {/* Content */}
        <div className="blog-content" style={{ fontSize: 18, lineHeight: 1.7, color: 'var(--ink-2)' }}>

          <h2 className="serif" style={{ fontSize: 40, marginTop: 0, marginBottom: 24, color: 'var(--ink)' }}>What Is Sublingual Semaglutide?</h2>
          <p>Sublingual semaglutide is an innovative, needle-free oral formulation of the popular weight management medication, <strong>semaglutide</strong>. Rather than using weekly subcutaneous injections, this compounded liquid suspension is administered daily under the tongue, allowing it to be absorbed directly into the bloodstream through the sublingual mucosal tissue.</p>
          <p>By dissolving the medication under the tongue, it bypasses the digestive system and stomach acids, which typically break down peptide hormones and make conventional swallowing ineffective. This provides an excellent, non-invasive alternative for individuals who want the clinically proven benefits of semaglutide (semaglutide) but have a aversion to needles.</p>
          <p>Compounded sublingual semaglutide is prescribed by licensed providers and dispensed by U.S. state-licensed compounding pharmacies, starting at just <strong>$199/month</strong>.</p>

          <h2 className="serif" style={{ fontSize: 40, marginTop: 64, marginBottom: 24, color: 'var(--ink)' }}>How Sublingual Semaglutide Works</h2>
          <p>Sublingual semaglutide functions identically to injectable semaglutide once absorbed, acting as a GLP-1 receptor agonist to regulate key metabolic systems:</p>
          <ul style={{ marginBottom: 24, paddingLeft: 20 }}>
            <li style={{ marginBottom: 12 }}><strong>Curbs Appetite & Cravings:</strong> Targets the hunger centers in the brain to reduce your overall appetite and eliminate persistent "food noise" — the constant mental preoccupation with food.</li>
            <li style={{ marginBottom: 12 }}><strong>Extends Satiety:</strong> Mimics the body's natural satiety hormone, slowing down gastric emptying so you feel full longer and naturally eat smaller portions.</li>
            <li style={{ marginBottom: 12 }}><strong>Improves Metabolic Health:</strong> Enhances insulin sensitivity and assists in regulating blood sugar levels, helping your body lower its natural "set-point" weight.</li>
          </ul>

          {/* CTA 1 */}
          <div className="card" style={{ padding: 40, margin: '48px 0', textAlign: 'center', background: '#FFFDF9', borderColor: 'var(--brand)' }}>
            <h3 className="serif" style={{ fontSize: 28, marginBottom: 16, color: 'var(--ink)' }}>Start Your Needle-Free Journey</h3>
            <p style={{ marginBottom: 24, fontSize: 16 }}>Check your eligibility for sublingual semaglutide online. Fast 24-hour clinician review and free shipping to your door.</p>
            <a href={CTA_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-lg" style={{ display: 'inline-flex', justifyContent: 'center' }}>
              See If You Qualify <Icon.Arrow />
            </a>
          </div>

          <h2 className="serif" style={{ fontSize: 40, marginTop: 64, marginBottom: 24, color: 'var(--ink)' }}>How to Administer Sublingual Semaglutide</h2>
          <p>To ensure optimal absorption and effectiveness, follow these simple guidelines for daily sublingual administration:</p>
          <ul style={{ marginBottom: 24, paddingLeft: 20 }}>
            <li style={{ marginBottom: 8 }}><strong>Empty Stomach:</strong> Administer first thing in the morning on an empty stomach.</li>
            <li style={{ marginBottom: 8 }}><strong>Hold Under Tongue:</strong> Place the prescribed dose directly under your tongue using the provided dropper, and hold it there for 90 seconds. Do not swallow immediately.</li>
            <li style={{ marginBottom: 8 }}><strong>Wait to Eat or Drink:</strong> Wait at least 30 minutes before eating, drinking, brushing your teeth, or taking other medications.</li>
          </ul>

          <h2 className="serif" style={{ fontSize: 40, marginTop: 64, marginBottom: 24, color: 'var(--ink)' }}>Clinical Safety & Side Effects</h2>
          <p>Because it uses the same active molecule, sublingual semaglutide shares a similar safety profile to injectable options. The most common side effects are mild to moderate and generally improve as your body adapts:</p>
          <ul style={{ marginBottom: 24, paddingLeft: 20 }}>
            <li style={{ marginBottom: 8 }}>Mild nausea (especially when starting)</li>
            <li style={{ marginBottom: 8 }}>Temporary digestive changes (constipation or mild diarrhea)</li>
            <li style={{ marginBottom: 8 }}>Slight dry mouth or taste alterations immediately after dosing</li>
          </ul>
          <p>Licensed medical providers will screen you during your intake assessment to confirm that sublingual semaglutide is a safe and appropriate choice for your health profile.</p>

          {/* CTA 2 */}
          <div style={{ padding: 40, marginTop: 60, borderRadius: 20, background: 'var(--ink)', color: '#FBF8F3', textAlign: 'center' }}>
            <h2 className="serif" style={{ fontSize: 40, marginBottom: 20, color: '#FBF8F3' }}>Ready to Get Started?</h2>
            <p style={{ fontSize: 18, opacity: 0.9, marginBottom: 32, maxWidth: 500, margin: '0 auto 32px' }}>
              From $199/mo. U.S. licensed clinicians, state-licensed compounding pharmacies, and direct shipping.
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

export { SublingualSemaglutidePage };
