"use client";
import React from 'react';
import { Icon } from './common.jsx';

const CTA_URL = "https://go.telehealthfx.com/start";

function NadPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    "name": "NAD+ Therapy Program | Telehealth FX",
    "about": { "@type": "Drug", "name": "NAD+", "nonProprietaryName": "Nicotinamide Adenine Dinucleotide", "drugClass": "Coenzyme supplement", "mechanismOfAction": "Essential coenzyme for cellular energy production, DNA repair, and sirtuin activation" },
    "publisher": { "@type": "MedicalOrganization", "name": "Telehealth FX" }
  };

  return (
    <section className="section" style={{ minHeight: '60vh', paddingTop: 120 }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <div className="container" style={{ maxWidth: 840 }}>

        <div style={{ textAlign: 'center', marginBottom: 80 }}>
          <div className="pill pill-brand" style={{ marginBottom: 20, display: 'inline-flex' }}>
            <span className="pill-dot" /> Cellular Energy
          </div>
          <h1 className="serif" style={{ fontSize: 72, marginBottom: 28, lineHeight: 0.95 }}>
            NAD+ Therapy<br/><span style={{ fontStyle: 'italic', color: 'var(--brand)' }}>from $199/mo.</span>
          </h1>
          <p style={{ fontSize: 20, color: 'var(--ink-2)', maxWidth: 600, margin: '0 auto 40px', lineHeight: 1.6 }}>
            Clinician-prescribed NAD+ therapy to support cellular energy, cognitive clarity, metabolic function, and healthy aging. Compounded by licensed US pharmacies.
          </p>
          <a href={CTA_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-lg" style={{ display: 'inline-flex' }}>
            See If You Qualify <Icon.Arrow />
          </a>
        </div>

        <div className="blog-content" style={{ fontSize: 18, lineHeight: 1.7, color: 'var(--ink-2)' }}>

          <h2 className="serif" style={{ fontSize: 40, marginTop: 0, marginBottom: 24, color: 'var(--ink)' }}>What Is NAD+?</h2>
          <p><strong>Nicotinamide Adenine Dinucleotide (NAD+)</strong> is a coenzyme found in every living cell. It is essential for converting food into cellular energy (ATP), repairing damaged DNA, activating sirtuins (longevity proteins), and maintaining healthy mitochondrial function.</p>
          <p>NAD+ levels decline naturally with age — by age 50, most adults have approximately <strong>50% less NAD+</strong> than they did at age 20. This decline is associated with fatigue, cognitive fog, slower metabolism, reduced recovery capacity, and accelerated aging.</p>
          <p>Supplemental NAD+ therapy aims to restore youthful cellular energy levels, supporting everything from brain function and metabolic rate to immune resilience and physical recovery.</p>

          <h2 className="serif" style={{ fontSize: 40, marginTop: 64, marginBottom: 24, color: 'var(--ink)' }}>How NAD+ Therapy Works</h2>
          <ul style={{ marginBottom: 24, paddingLeft: 20 }}>
            <li style={{ marginBottom: 12 }}><strong>Mitochondrial Energy Production:</strong> NAD+ is a critical substrate in the electron transport chain — the process by which your mitochondria produce ATP (cellular fuel). More NAD+ = more efficient energy production at the cellular level.</li>
            <li style={{ marginBottom: 12 }}><strong>Sirtuin Activation:</strong> NAD+ activates sirtuins (SIRT1–SIRT7), a family of proteins involved in DNA repair, inflammation regulation, stress resistance, and metabolic homeostasis. Sirtuins are often called "longevity genes."</li>
            <li style={{ marginBottom: 12 }}><strong>DNA Repair:</strong> The enzyme PARP1, which repairs damaged DNA, requires NAD+ as fuel. As NAD+ declines, DNA damage accumulates — a hallmark of aging.</li>
            <li style={{ marginBottom: 12 }}><strong>Circadian Rhythm Support:</strong> NAD+ levels fluctuate with your circadian clock. Restoring optimal levels can improve sleep quality and metabolic timing.</li>
            <li style={{ marginBottom: 12 }}><strong>Neuroprotection:</strong> Emerging research suggests NAD+ supplementation may support neuronal health, cognitive function, and resistance to neurodegenerative processes.</li>
          </ul>

          <div className="card" style={{ padding: 40, margin: '48px 0', textAlign: 'center', background: '#FFFDF9', borderColor: 'var(--brand)' }}>
            <h3 className="serif" style={{ fontSize: 28, marginBottom: 16, color: 'var(--ink)' }}>Restore Your Cellular Energy</h3>
            <p style={{ marginBottom: 24, fontSize: 16 }}>Clinician-prescribed NAD+ therapy from $199/mo. Licensed US pharmacies. 2-day UPS shipping.</p>
            <a href={CTA_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-lg" style={{ display: 'inline-flex', justifyContent: 'center' }}>
              Start Your Assessment <Icon.Arrow />
            </a>
          </div>

          <h2 className="serif" style={{ fontSize: 40, marginTop: 64, marginBottom: 24, color: 'var(--ink)' }}>Who Benefits from NAD+ Therapy?</h2>
          <ul style={{ marginBottom: 24, paddingLeft: 20 }}>
            <li style={{ marginBottom: 8 }}>Adults over 35 experiencing age-related fatigue and cognitive decline</li>
            <li style={{ marginBottom: 8 }}>Athletes and active individuals seeking faster recovery and sustained energy</li>
            <li style={{ marginBottom: 8 }}>Professionals needing enhanced focus, mental clarity, and cognitive performance</li>
            <li style={{ marginBottom: 8 }}>Anyone pursuing proactive longevity and anti-aging strategies</li>
            <li style={{ marginBottom: 8 }}>Individuals with metabolic slowdown or stubborn weight plateau</li>
          </ul>

          <h2 className="serif" style={{ fontSize: 40, marginTop: 64, marginBottom: 24, color: 'var(--ink)' }}>NAD+ vs. NMN vs. NR: What's the Difference?</h2>
          <div style={{ margin: '32px 0', overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
              <thead>
                <tr style={{ background: 'var(--ink)', color: '#fff' }}>
                  <th style={{ padding: '16px', fontWeight: 500, fontSize: 14 }}>Factor</th>
                  <th style={{ padding: '16px', fontWeight: 500, fontSize: 14 }}>NAD+ (Direct)</th>
                  <th style={{ padding: '16px', fontWeight: 500, fontSize: 14 }}>NMN</th>
                  <th style={{ padding: '16px', fontWeight: 500, fontSize: 14 }}>NR (Niagen)</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Delivery', 'Injection/IV (direct)', 'Oral supplement', 'Oral supplement'],
                  ['Bioavailability', 'Highest (bypasses gut)', 'Moderate', 'Moderate'],
                  ['Speed of Effect', 'Immediate cellular access', 'Requires conversion to NAD+', 'Requires conversion to NAD+'],
                  ['Clinical Oversight', 'Clinician-prescribed', 'OTC supplement', 'OTC supplement'],
                  ['Best For', 'Serious optimization', 'General maintenance', 'General maintenance'],
                ].map(([factor, nad, nmn, nr], i) => (
                  <tr key={i} style={{ borderBottom: '1px solid var(--line-soft)', background: i % 2 ? 'transparent' : '#FAFAFA' }}>
                    <td style={{ padding: '16px', fontWeight: 500 }}>{factor}</td>
                    <td style={{ padding: '16px', color: 'var(--brand)' }}>{nad}</td>
                    <td style={{ padding: '16px' }}>{nmn}</td>
                    <td style={{ padding: '16px' }}>{nr}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 className="serif" style={{ fontSize: 40, marginTop: 64, marginBottom: 24, color: 'var(--ink)' }}>The Telehealth FX NAD+ Protocol</h2>
          <div style={{ display: 'grid', gridTemplateColumns: '48px 1fr', gap: '20px 16px', margin: '32px 0' }}>
            {[
              { step: '1', title: 'Health Assessment', desc: 'Complete an online questionnaire covering your energy levels, cognitive function, sleep quality, and health goals.' },
              { step: '2', title: 'Clinician Review', desc: 'A licensed provider reviews your profile and determines the optimal NAD+ protocol and dosing for your needs.' },
              { step: '3', title: 'Pharmacy Compounding', desc: 'Your NAD+ is compounded by a licensed US pharmacy and shipped via 2-day UPS directly to your door.' },
              { step: '4', title: 'Ongoing Optimization', desc: 'Regular check-ins with your care team to track progress, adjust dosing, and optimize your longevity protocol.' },
            ].map((s, i) => (
              <React.Fragment key={i}>
                <div style={{ width: 48, height: 48, borderRadius: '50%', background: 'var(--brand)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 600, fontSize: 18, fontFamily: 'var(--sans)', flexShrink: 0 }}>{s.step}</div>
                <div style={{ paddingTop: 4 }}>
                  <h3 style={{ fontSize: 20, marginBottom: 8, color: 'var(--ink)' }}>{s.title}</h3>
                  <p style={{ margin: 0, fontSize: 16, color: 'var(--ink-2)' }}>{s.desc}</p>
                </div>
              </React.Fragment>
            ))}
          </div>

          <div style={{ padding: 40, marginTop: 60, borderRadius: 20, background: 'var(--ink)', color: '#FBF8F3', textAlign: 'center' }}>
            <h2 className="serif" style={{ fontSize: 40, marginBottom: 20, color: '#FBF8F3' }}>Start Your NAD+ Protocol</h2>
            <p style={{ fontSize: 18, opacity: 0.9, marginBottom: 32, maxWidth: 500, margin: '0 auto 32px' }}>
              From $199/mo. Clinician-prescribed cellular energy therapy. Licensed US pharmacies. 2-day shipping.
            </p>
            <a href={CTA_URL} target="_blank" rel="noopener noreferrer" className="btn btn-lg" style={{ background: '#FBF8F3', color: 'var(--ink)', display: 'inline-flex', justifyContent: 'center', width: '100%', maxWidth: 300 }}>
              See If You Qualify <Icon.Arrow />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export { NadPage };
