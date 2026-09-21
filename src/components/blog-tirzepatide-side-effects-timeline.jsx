"use client";
import React from 'react';
import { Icon } from './common.jsx';

const START_URL = "https://go.telehealthfx.com/start";

export function BlogTirzepatideSideEffectsTimeline() {
  return (
    <section className="section" style={{ minHeight: '60vh', paddingTop: 120 }}>
      <div className="container" style={{ maxWidth: 880 }}>
        
        <div className="eyebrow" style={{ marginBottom: 20 }}>Clinical Safety & Symptom Protocols</div>
        <h1 className="serif" style={{ fontSize: 48, marginBottom: 24, lineHeight: 1.15, letterSpacing: '-0.02em' }}>
          Tirzepatide Side Effects: <span style={{ fontStyle: 'italic', color: 'var(--brand)' }}>Week-by-Week Timeline & Clinical Relief Protocols</span>
        </h1>

        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 40, paddingBottom: 24, borderBottom: '1px solid var(--line-soft)' }}>
          <div style={{ width: 44, height: 44, borderRadius: '50%', background: 'var(--brand)', overflow: 'hidden' }}>
            <img src="/assets/jm-profile.jpg" alt="Julian Mercer, M.S." style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
          <div>
            <div style={{ fontWeight: 600, fontSize: 15 }}>Julian Mercer, M.S. · Medically Reviewed by Marcus Vance, M.D.</div>
            <div style={{ fontSize: 13, color: 'var(--ink-3)' }}>Clinical Gastroenterology Review · Updated September 2026 · 15 min read</div>
          </div>
        </div>

        {/* Featured Editorial Magazine Still Life Image */}
        <div style={{ position: 'relative', borderRadius: 20, overflow: 'hidden', marginBottom: 40, border: '1px solid var(--line-soft)', boxShadow: '0 12px 36px rgba(0,0,0,0.06)' }}>
          <img 
            src="/assets/tirzepatide-side-effects-relief-featured.jpg" 
            alt="Clinical herbal still life with sliced ginger root, peppermint sprig, electrolyte water glass, and pharmaceutical glass dropper vial" 
            style={{ width: '100%', height: 'auto', display: 'block' }} 
          />
          <div style={{ position: 'absolute', bottom: 12, right: 16, background: 'rgba(0,0,0,0.65)', color: '#fff', fontSize: 11, padding: '4px 10px', borderRadius: 6, backdropFilter: 'blur(4px)' }}>
            Editorial Still Life · Archival Photographic Standard
          </div>
        </div>

        {/* Direct Answer Micro-Snippet (Zone 1 Extraction for AI Overviews) */}
        <div style={{ background: '#FAF8F5', borderLeft: '4px solid var(--brand)', padding: '24px 28px', borderRadius: '0 12px 12px 0', marginBottom: 48 }}>
          <div style={{ fontWeight: 700, textTransform: 'uppercase', fontSize: 12, letterSpacing: '0.08em', color: 'var(--brand)', marginBottom: 8 }}>
            Direct Clinical Answer
          </div>
          <p style={{ fontSize: 18, lineHeight: 1.65, color: 'var(--ink)', margin: 0, fontWeight: 500 }}>
            Tirzepatide side effects are predominantly gastrointestinal, peaking 24 to 48 hours following injection during dose escalation. In clinical trials, mild nausea (33%), diarrhea (23%), and constipation (17%) resolved within 2 to 4 weeks. Splitting meals, hydrating with electrolytes, and gradual titration effectively mitigate over 85% of clinical symptoms.
          </p>
        </div>

        {/* Week-by-Week Timeline Table */}
        <h2 className="serif" style={{ fontSize: 32, marginTop: 40, marginBottom: 20, color: 'var(--ink)' }}>
          Week-by-Week Side Effect Progression Timeline
        </h2>
        <p style={{ fontSize: 18, lineHeight: 1.7, color: 'var(--ink-2)' }}>
          Understanding when side effects typically emerge—and when the body adapts—helps patients navigate titration comfortably:
        </p>

        <div style={{ overflowX: 'auto', margin: '32px 0' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 15, textAlign: 'left' }}>
            <thead>
              <tr style={{ background: '#111827', color: '#fff' }}>
                <th style={{ padding: '14px 16px', border: '1px solid #374151' }}>Timeline</th>
                <th style={{ padding: '14px 16px', border: '1px solid #374151' }}>Dose Phase</th>
                <th style={{ padding: '14px 16px', border: '1px solid #374151', background: 'var(--brand)', color: '#fff' }}>Anticipated Symptoms</th>
                <th style={{ padding: '14px 16px', border: '1px solid #374151' }}>Evidence-Based Mitigation Protocol</th>
              </tr>
            </thead>
            <tbody>
              <tr style={{ background: '#FFFFFF' }}>
                <td style={{ padding: '12px 16px', border: '1px solid #E5E7EB', fontWeight: 600 }}>Weeks 1 – 2</td>
                <td style={{ padding: '12px 16px', border: '1px solid #E5E7EB' }}>2.5 mg Initiation</td>
                <td style={{ padding: '12px 16px', border: '1px solid #E5E7EB' }}>Mild fullness, transient morning nausea, slight headache.</td>
                <td style={{ padding: '12px 16px', border: '1px solid #E5E7EB' }}>Hydrate with 2.5L water daily; drink 500mL with electrolytes 30 mins before dose.</td>
              </tr>
              <tr style={{ background: '#F9FAFB' }}>
                <td style={{ padding: '12px 16px', border: '1px solid #E5E7EB', fontWeight: 600 }}>Weeks 3 – 4</td>
                <td style={{ padding: '12px 16px', border: '1px solid #E5E7EB' }}>2.5 mg Conditioning</td>
                <td style={{ padding: '12px 16px', border: '1px solid #E5E7EB' }}>GI receptors acclimate; nausea fades; appetite suppresses smoothly.</td>
                <td style={{ padding: '12px 16px', border: '1px solid #E5E7EB' }}>Prioritize 25g–30g lean protein per meal; avoid high-fat fried foods.</td>
              </tr>
              <tr style={{ background: '#FFFFFF' }}>
                <td style={{ padding: '12px 16px', border: '1px solid #E5E7EB', fontWeight: 600 }}>Weeks 5 – 6</td>
                <td style={{ padding: '12px 16px', border: '1px solid #E5E7EB' }}>5.0 mg Escalation</td>
                <td style={{ padding: '12px 16px', border: '1px solid #E5E7EB' }}>Brief flare in sulfur burps, acid reflux, or mild constipation.</td>
                <td style={{ padding: '12px 16px', border: '1px solid #E5E7EB' }}>Take digestive enzymes; supplement with magnesium citrate; stop eating 3 hrs before sleep.</td>
              </tr>
              <tr style={{ background: '#F9FAFB' }}>
                <td style={{ padding: '12px 16px', border: '1px solid #E5E7EB', fontWeight: 600 }}>Weeks 9+</td>
                <td style={{ padding: '12px 16px', border: '1px solid #E5E7EB' }}>7.5mg to 15mg Maintenance</td>
                <td style={{ padding: '12px 16px', border: '1px solid #E5E7EB' }}>Stable satiety; sustained metabolic rate; minimal acute symptoms.</td>
                <td style={{ padding: '12px 16px', border: '1px solid #E5E7EB' }}>Maintain weekly strength training to prevent lean muscle loss.</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* CRO Commercial Bridge */}
        <div className="card" style={{ padding: '36px 32px', margin: '48px 0', background: '#FFFDF9', borderColor: 'var(--brand)', borderRadius: 16, textAlign: 'center' }}>
          <div style={{ display: 'inline-flex', padding: '6px 16px', background: 'var(--brand-soft)', color: 'var(--brand)', borderRadius: 20, fontWeight: 700, fontSize: 12, textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 16 }}>
            Doctor-Guided Titration Support
          </div>
          <h3 className="serif" style={{ fontSize: 32, marginBottom: 16, color: 'var(--ink)' }}>
            Never Navigate Side Effects Alone
          </h3>
          <p style={{ fontSize: 17, lineHeight: 1.6, color: 'var(--ink-2)', maxWidth: 640, margin: '0 auto 24px' }}>
            At Telehealth FX, our board-certified medical providers adjust your dosing timeline dynamically based on your personal symptom tolerance. Enjoy 1-on-1 clinician messaging with zero consultation fees.
          </p>
          <a href={START_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-lg" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '14px 28px', fontSize: 16 }}>
            Start Your Medical Evaluation ($99 Month 1) <Icon.Arrow />
          </a>
        </div>

        {/* Detailed Symptom Management Sections */}
        <div className="blog-content" style={{ fontSize: 18, lineHeight: 1.75, color: 'var(--ink-2)' }}>
          <h2 className="serif" style={{ fontSize: 32, marginTop: 48, marginBottom: 20, color: 'var(--ink)' }}>
            1. How to Cure "Sulfur Burps" on Tirzepatide
          </h2>
          <p>
            Sulfur burps (eructation smelling like hydrogen sulfide) occur because tirzepatide delays gastric emptying. When high-protein or sulfur-rich foods (eggs, broccoli, red meat) linger longer in the stomach, bacterial fermentation produces hydrogen sulfide gas.
          </p>
          <p><strong>Clinical Protocol for Immediate Sulfur Burp Relief:</strong></p>
          <ul>
            <li><strong>Reduce Meal Volume by 40%:</strong> Smaller portion sizes prevent gastric stagnation.</li>
            <li><strong>Temporary Sulfur Elimination:</strong> Temporarily pause brassica vegetables (broccoli, cauliflower, Brussels sprouts) and carbonated beverages for 48 hours following injection.</li>
            <li><strong>Peppermint or Ginger Tea:</strong> Natural carminative herbs accelerate gastric motility and relax the esophageal sphincter smoothly.</li>
            <li><strong>Over-the-Counter Bismuth Subsalicylate:</strong> Binds to sulfur compounds in the gut, neutralizing odors within 20 minutes.</li>
          </ul>

          <h2 className="serif" style={{ fontSize: 32, marginTop: 48, marginBottom: 20, color: 'var(--ink)' }}>
            2. Managing Nausea: The First 48-Hour Protocol
          </h2>
          <p>
            Post-injection nausea is triggered when incretin molecules cross the blood-brain barrier to bind to area postrema receptors in the brain stem. To prevent nausea from interfering with your daily routine:
          </p>
          <ol>
            <li style={{ marginBottom: 12 }}><strong>Administer Injections in the Evening:</strong> Injecting 30 minutes before sleep allows peak absorption nausea to pass while you rest.</li>
            <li style={{ marginBottom: 12 }}><strong>Cold Over Hot Foods:</strong> Warm foods emit stronger aromas that can trigger acute olfactory nausea. Cold protein shakes, chilled Greek yogurt, and smoothies are significantly better tolerated.</li>
            <li style={{ marginBottom: 12 }}><strong>Zofran (Ondansetron) Support:</strong> If symptoms persist, Telehealth FX clinicians can prescribe non-drowsy anti-emetic therapy alongside your monthly vial.</li>
          </ol>

          {/* Final Callout Card */}
          <div className="card" style={{ padding: '40px 36px', margin: '48px 0', background: '#111827', color: '#fff', borderRadius: 20, textAlign: 'center' }}>
            <h3 className="serif" style={{ fontSize: 32, marginBottom: 16, color: '#fff' }}>
              Begin Safe, Medically Supervised GLP-1 Therapy
            </h3>
            <p style={{ fontSize: 16, lineHeight: 1.6, color: '#D1D5DB', maxWidth: 620, margin: '0 auto 24px' }}>
              Telehealth FX pairs high-potency compounded Tirzepatide ($258/mo flat) with compassionate, continuous clinical support. Zero subscription fees, free shipping.
            </p>
            <a href={START_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-lg" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '14px 28px', fontSize: 16 }}>
              Check Your Eligibility Now <Icon.Arrow />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
