"use client";
import React from 'react';
import { Icon } from './common.jsx';

const CTA_URL = "https://go.telehealthfx.com/tirzepatide-tablets";

function TirzepatideTabletsPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    "name": "Tirzepatide Tablets Weight Loss Program | Telehealth FX",
    "about": {
      "@type": "Drug",
      "name": "Compounded Tirzepatide Tablets",
      "nonProprietaryName": "Tirzepatide",
      "drugClass": "Dual GIP/GLP-1 receptor agonist",
      "mechanismOfAction": "Dual agonist targeting both GIP and GLP-1 receptors for enhanced appetite regulation, fat metabolism, and insulin sensitivity",
      "administrationRoute": "Sublingual (dissolving tablet under the tongue)"
    },
    "publisher": { "@type": "MedicalOrganization", "name": "Telehealth FX" }
  };

  return (
    <section className="section" style={{ minHeight: '60vh', paddingTop: 120 }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <div className="container" style={{ maxWidth: 840 }}>

        {/* Hero */}
        <div style={{ textAlign: 'center', marginBottom: 80 }}>
          <div className="pill" style={{ marginBottom: 20, display: 'inline-flex', background: 'rgba(199, 125, 92, 0.12)', borderColor: 'rgba(199, 125, 92, 0.3)', color: 'var(--accent)' }}>
            <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--accent)' }}/> Strongest Needle-Free Option
          </div>
          <h1 className="serif" style={{ fontSize: 72, marginBottom: 28, lineHeight: 0.95 }}>
            Tirzepatide Tablets<br/><span style={{ fontStyle: 'italic', color: 'var(--brand)' }}>from $224.25/mo.</span>
          </h1>
          <p style={{ fontSize: 20, color: 'var(--ink-2)', maxWidth: 600, margin: '0 auto 40px', lineHeight: 1.6 }}>
            A powerful once-daily sublingual tablet combining dual GIP & GLP-1 action. The same active ingredient as Mounjaro® and Zepbound® — compounded in U.S. state-licensed pharmacies. Zero weekly needles.
          </p>
          <a href={CTA_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-lg" style={{ display: 'inline-flex' }}>
            See If You Qualify <Icon.Arrow />
          </a>
        </div>

        {/* Trust Strip */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24, marginBottom: 80 }}>
          {[
            { num: 'Dual', label: 'GIP + GLP-1 Receptors' },
            { num: '$224.25', label: 'Starting Price/mo' },
            { num: 'Tablet', label: 'Under-the-Tongue Dissolving' },
          ].map((s, i) => (
            <div key={i} className="card" style={{ padding: 28, textAlign: 'center' }}>
              <div className="serif" style={{ fontSize: 36, color: 'var(--brand)', marginBottom: 4 }}>{s.num}</div>
              <div style={{ fontSize: 13, color: 'var(--ink-3)' }}>{s.label}</div>
            </div>
          ))}
        </div>

        {/* Content */}
        <div className="blog-content" style={{ fontSize: 18, lineHeight: 1.7, color: 'var(--ink-2)' }}>

          <h2 className="serif" style={{ fontSize: 40, marginTop: 0, marginBottom: 24, color: 'var(--ink)' }}>What Are Tirzepatide Tablets?</h2>
          <p>Compounded tirzepatide tablets are a cutting-edge, sublingual oral weight loss option that activates two main metabolic pathways in the body. Containing the <strong>same active ingredient as Mounjaro® and Zepbound®</strong>, these daily dissolving tablets are placed under the tongue. They are absorbed directly through the sublingual mucosal lining into the blood, bypassing stomach acids and enzymes.</p>
          <p>Tirzepatide is a <strong>dual GIP/GLP-1 receptor agonist</strong>. By targeting both hormones, it provides a synergistic effect that results in the highest average weight loss of any FDA-approved medication class to date — now available in a daily needle-free tablet starting at <strong>$224.25/month</strong> (on a 10-month plan) or <strong>$299/month</strong> (on a standard 4-month subscription).</p>

          <h2 className="serif" style={{ fontSize: 40, marginTop: 64, marginBottom: 24, color: 'var(--ink)' }}>How Tirzepatide Tablets Work: The Dual Agonist Advantage</h2>
          <p>Unlike semaglutide (which only targets the GLP-1 pathway), tirzepatide works on two key hunger and metabolic hormones simultaneously:</p>
          <ul style={{ marginBottom: 24, paddingLeft: 20 }}>
            <li style={{ marginBottom: 12 }}><strong>GLP-1 Pathway:</strong> Suppresses hunger signals in the brain and delays gastric emptying, ensuring you stay full and satisfied for longer periods after eating.</li>
            <li style={{ marginBottom: 12 }}><strong>GIP Pathway:</strong> Optimizes insulin sensitivity in fat cells and enhances metabolic efficiency, which supports more effective fat breakdown and calorie burning.</li>
            <li style={{ marginBottom: 12 }}><strong>Enhanced Results:</strong> This dual-receptor action results in a stronger reduction in "food noise" and craving control. Clinical trials of the injectable active ingredient showed average weight losses of up to <strong>22.5%</strong>.</li>
          </ul>

          {/* CTA 1 */}
          <div className="card" style={{ padding: 40, margin: '48px 0', textAlign: 'center', background: '#FFFDF9', borderColor: 'var(--brand)' }}>
            <h3 className="serif" style={{ fontSize: 28, marginBottom: 16, color: 'var(--ink)' }}>Experience Dual-Action Support</h3>
            <p style={{ marginBottom: 24, fontSize: 16 }}>Complete your medical evaluation. A licensed clinician will determine the right dosage plan for you.</p>
            <a href={CTA_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-lg" style={{ display: 'inline-flex', justifyContent: 'center' }}>
              See If You Qualify <Icon.Arrow />
            </a>
          </div>

          <h2 className="serif" style={{ fontSize: 40, marginTop: 64, marginBottom: 24, color: 'var(--ink)' }}>How to Take Tirzepatide Tablets</h2>
          <p>For optimal absorption and weight loss, follow these instructions daily:</p>
          <ul style={{ marginBottom: 24, paddingLeft: 20 }}>
            <li style={{ marginBottom: 8 }}><strong>Under the Tongue:</strong> Place one tablet under your tongue immediately in the morning on an empty stomach.</li>
            <li style={{ marginBottom: 8 }}><strong>Let Dissolve:</strong> Wait for the tablet to dissolve completely. Do not chew, break, or swallow the tablet whole.</li>
            <li style={{ marginBottom: 8 }}><strong>Wait 30 Minutes:</strong> Avoid eating, drinking, or taking other medications for 30 minutes.</li>
          </ul>

          <h2 className="serif" style={{ fontSize: 40, marginTop: 64, marginBottom: 24, color: 'var(--ink)' }}>Clinical Safety & Side Effects</h2>
          <p>Side effects of daily compounded tirzepatide tablets are generally similar to injectable tirzepatide. Most side effects are gastrointestinal, mild to moderate, and clear up as your body adapts:</p>
          <ul style={{ marginBottom: 24, paddingLeft: 20 }}>
            <li style={{ marginBottom: 8 }}>Nausea or indigestion</li>
            <li style={{ marginBottom: 8 }}>Digestive adjustments (constipation or diarrhea)</li>
            <li style={{ marginBottom: 8 }}>Mild fatigue as your caloric intake drops</li>
          </ul>
          <p>Your Telehealth FX medical provider will screen you for contraindications and monitor your progress to ensure a safe and effective weight loss journey.</p>

          {/* CTA 2 */}
          <div style={{ padding: 40, marginTop: 60, borderRadius: 20, background: 'var(--ink)', color: '#FBF8F3', textAlign: 'center' }}>
            <h2 className="serif" style={{ fontSize: 40, marginBottom: 20, color: '#FBF8F3' }}>Start Your Tirzepatide Tablets Program</h2>
            <p style={{ fontSize: 18, opacity: 0.9, marginBottom: 32, maxWidth: 500, margin: '0 auto 32px' }}>
              From $224.25/mo. The most powerful weight management class available, now in a daily dissolving tablet.
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

export { TirzepatideTabletsPage };
