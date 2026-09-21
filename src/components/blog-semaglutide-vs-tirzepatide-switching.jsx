"use client";
import React from 'react';
import { Icon } from './common.jsx';

const START_URL = "https://go.telehealthfx.com/start";

export function BlogSemaglutideVsTirzepatideSwitching() {
  return (
    <section className="section" style={{ minHeight: '60vh', paddingTop: 120 }}>
      <div className="container" style={{ maxWidth: 880 }}>
        
        <div className="eyebrow" style={{ marginBottom: 20 }}>Clinical Pharmacology & Efficacy Comparison</div>
        <h1 className="serif" style={{ fontSize: 48, marginBottom: 24, lineHeight: 1.15, letterSpacing: '-0.02em' }}>
          Semaglutide vs Tirzepatide: <span style={{ fontStyle: 'italic', color: 'var(--brand)' }}>Weight Loss Efficacy, Differences & Switching Guide</span>
        </h1>

        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 40, paddingBottom: 24, borderBottom: '1px solid var(--line-soft)' }}>
          <div style={{ width: 44, height: 44, borderRadius: '50%', background: 'var(--brand)', overflow: 'hidden' }}>
            <img src="/assets/jm-profile.jpg" alt="Julian Mercer, M.S." style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
          <div>
            <div style={{ fontWeight: 600, fontSize: 15 }}>Julian Mercer, M.S. · Medically Reviewed by Marcus Vance, M.D.</div>
            <div style={{ fontSize: 13, color: 'var(--ink-3)' }}>Metabolic Endocrinology Review · Updated September 2026 · 16 min read</div>
          </div>
        </div>

        {/* Featured Editorial Magazine Still Life Image */}
        <div style={{ position: 'relative', borderRadius: 20, overflow: 'hidden', marginBottom: 40, border: '1px solid var(--line-soft)', boxShadow: '0 12px 36px rgba(0,0,0,0.06)' }}>
          <img 
            src="/assets/semaglutide-vs-tirzepatide-featured.jpg" 
            alt="Semaglutide 2.4mg and Tirzepatide 15mg clinical medication vials side by side on sculptured limestone plinth" 
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
            Tirzepatide is a dual GLP-1 and GIP receptor agonist that achieved 20.9% mean body weight reduction in the SURMOUNT-1 clinical trial, compared to 14.9% with semaglutide (a selective GLP-1 agonist) in the STEP-1 trial. Patients experiencing weight loss plateaus on semaglutide frequently switch to tirzepatide for enhanced metabolic appetite regulation.
          </p>
        </div>

        {/* Comparative Clinical Overview Table */}
        <h2 className="serif" style={{ fontSize: 32, marginTop: 40, marginBottom: 20, color: 'var(--ink)' }}>
          Clinical Trial Comparison: SURMOUNT-1 vs STEP-1
        </h2>
        <p style={{ fontSize: 18, lineHeight: 1.7, color: 'var(--ink-2)' }}>
          Both semaglutide and tirzepatide represent breakthrough incretin therapies, but their physiological mechanisms and clinical weight reduction endpoints diverge significantly:
        </p>

        <div style={{ overflowX: 'auto', margin: '32px 0' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 15, textAlign: 'left' }}>
            <thead>
              <tr style={{ background: '#111827', color: '#fff' }}>
                <th style={{ padding: '14px 16px', border: '1px solid #374151' }}>Clinical Dimension</th>
                <th style={{ padding: '14px 16px', border: '1px solid #374151' }}>Semaglutide (STEP-1 Trial)</th>
                <th style={{ padding: '14px 16px', border: '1px solid #374151', background: 'var(--brand)', color: '#fff' }}>Tirzepatide (SURMOUNT-1 Trial)</th>
              </tr>
            </thead>
            <tbody>
              <tr style={{ background: '#FFFFFF' }}>
                <td style={{ padding: '12px 16px', border: '1px solid #E5E7EB', fontWeight: 600 }}>Receptor Target Mechanism</td>
                <td style={{ padding: '12px 16px', border: '1px solid #E5E7EB' }}>Selective GLP-1 Receptor Agonist</td>
                <td style={{ padding: '12px 16px', border: '1px solid #E5E7EB', color: '#059669', fontWeight: 700, background: '#ECFDF5' }}>Dual GLP-1 + GIP Receptor Agonist ("Twincretin")</td>
              </tr>
              <tr style={{ background: '#F9FAFB' }}>
                <td style={{ padding: '12px 16px', border: '1px solid #E5E7EB', fontWeight: 600 }}>Mean Weight Reduction</td>
                <td style={{ padding: '12px 16px', border: '1px solid #E5E7EB' }}>-14.9% of total body weight (33.7 lbs)</td>
                <td style={{ padding: '12px 16px', border: '1px solid #E5E7EB', color: '#059669', fontWeight: 700, background: '#ECFDF5' }}>-20.9% of total body weight (52.0 lbs)</td>
              </tr>
              <tr style={{ background: '#FFFFFF' }}>
                <td style={{ padding: '12px 16px', border: '1px solid #E5E7EB', fontWeight: 600 }}>Trial Cohort & Duration</td>
                <td style={{ padding: '12px 16px', border: '1px solid #E5E7EB' }}>68 weeks (n=1,961 adults)</td>
                <td style={{ padding: '12px 16px', border: '1px solid #E5E7EB' }}>72 weeks (n=2,539 adults)</td>
              </tr>
              <tr style={{ background: '#F9FAFB' }}>
                <td style={{ padding: '12px 16px', border: '1px solid #E5E7EB', fontWeight: 600 }}>Maximum Therapeutic Dose</td>
                <td style={{ padding: '12px 16px', border: '1px solid #E5E7EB' }}>2.4 mg weekly subcutaneous</td>
                <td style={{ padding: '12px 16px', border: '1px solid #E5E7EB' }}>15.0 mg weekly subcutaneous</td>
              </tr>
              <tr style={{ background: '#FFFFFF' }}>
                <td style={{ padding: '12px 16px', border: '1px solid #E5E7EB', fontWeight: 600 }}>Common GI Side Effects</td>
                <td style={{ padding: '12px 16px', border: '1px solid #E5E7EB' }}>Nausea (44%), Diarrhea (30%), Vomiting (24%)</td>
                <td style={{ padding: '12px 16px', border: '1px solid #E5E7EB' }}>Nausea (33%), Diarrhea (23%), Vomiting (12%)</td>
              </tr>
              <tr style={{ background: '#F9FAFB' }}>
                <td style={{ padding: '12px 16px', border: '1px solid #E5E7EB', fontWeight: 600 }}>Telehealth FX Flat Pricing</td>
                <td style={{ padding: '12px 16px', border: '1px solid #E5E7EB', color: '#059669', fontWeight: 800 }}>$146 / month ($99 Promo Mo 1)</td>
                <td style={{ padding: '12px 16px', border: '1px solid #E5E7EB', color: '#059669', fontWeight: 800 }}>$258 / month ($99 Promo Mo 1)</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* CRO Commercial Bridge */}
        <div className="card" style={{ padding: '36px 32px', margin: '48px 0', background: '#FFFDF9', borderColor: 'var(--brand)', borderRadius: 16, textAlign: 'center' }}>
          <div style={{ display: 'inline-flex', padding: '6px 16px', background: 'var(--brand-soft)', color: 'var(--brand)', borderRadius: 20, fontWeight: 700, fontSize: 12, textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 16 }}>
            Overcome Weight Loss Plateaus
          </div>
          <h3 className="serif" style={{ fontSize: 32, marginBottom: 16, color: 'var(--ink)' }}>
            Hit a Plateau on Semaglutide? Switch to Tirzepatide
          </h3>
          <p style={{ fontSize: 17, lineHeight: 1.6, color: 'var(--ink-2)', maxWidth: 640, margin: '0 auto 24px' }}>
            Tirzepatide activates both GIP and GLP-1 receptors, providing dual satiety signaling and higher fat loss velocity for patients whose weight loss has stalled. Telehealth FX offers doctor-guided switching with $0 consultation fees.
          </p>
          <a href={START_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-lg" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '14px 28px', fontSize: 16 }}>
            Consult a Doctor on Switching ($99 First Month) <Icon.Arrow />
          </a>
        </div>

        {/* Deep Clinical Outline */}
        <div className="blog-content" style={{ fontSize: 18, lineHeight: 1.75, color: 'var(--ink-2)' }}>
          <h2 className="serif" style={{ fontSize: 32, marginTop: 48, marginBottom: 20, color: 'var(--ink)' }}>
            1. Why Dual Agonism Matters: GLP-1 vs GIP Receptor Biology
          </h2>
          <p>
            Semaglutide functions purely as a <strong>glucagon-like peptide-1 (GLP-1)</strong> receptor agonist. It binds to hypothalamic GLP-1 receptors in the brain to dampen hunger signals and slows gastric emptying in the stomach, promoting satiety.
          </p>
          <p>
            Tirzepatide introduces a second metabolic pathway: <strong>glucose-dependent insulinotropic polypeptide (GIP)</strong> agonism. While historically overlooked, GIP receptors are heavily expressed in adipose (fat) tissue and central nervous system appetite centers. Dual agonism produces synergistic benefits:
          </p>
          <ul>
            <li><strong>Enhanced Lipid Metabolism:</strong> GIP receptor signaling enhances insulin sensitivity in subcutaneous fat cells, discouraging visceral lipid accumulation.</li>
            <li><strong>Superior Nausea Tolerability:</strong> Clinical trials noted that co-activation of GIP pathways appears to blunt some of the central vestibular nausea signals triggered by pure high-dose GLP-1 agonism.</li>
            <li><strong>Greater Satiety Duration:</strong> Patients on tirzepatide report a more pronounced reduction in "food noise" that extends throughout the entire 7-day injection window.</li>
          </ul>

          <h2 className="serif" style={{ fontSize: 32, marginTop: 48, marginBottom: 20, color: 'var(--ink)' }}>
            2. Clinical Dose Equivalence: Transitioning from Semaglutide to Tirzepatide
          </h2>
          <p>
            When transitioning between molecules, patients should not start at high tirzepatide doses without cross-titration to avoid acute gastrointestinal distress. The clinical conversion consensus developed by our endocrine review board is outlined below:
          </p>

          <div style={{ overflowX: 'auto', margin: '32px 0' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 15, textAlign: 'left' }}>
              <thead>
                <tr style={{ background: '#111827', color: '#fff' }}>
                  <th style={{ padding: '14px 16px', border: '1px solid #374151' }}>Current Semaglutide Dose</th>
                  <th style={{ padding: '14px 16px', border: '1px solid #374151' }}>Recommended Starting Tirzepatide Dose</th>
                  <th style={{ padding: '14px 16px', border: '1px solid #374151' }}>Clinical Rationale</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ background: '#FFFFFF' }}>
                  <td style={{ padding: '12px 16px', border: '1px solid #E5E7EB', fontWeight: 600 }}>0.25 mg or 0.5 mg / week</td>
                  <td style={{ padding: '12px 16px', border: '1px solid #E5E7EB', color: 'var(--brand)', fontWeight: 700 }}>2.5 mg / week for 4 weeks</td>
                  <td style={{ padding: '12px 16px', border: '1px solid #E5E7EB' }}>Standard introductory titration; verifies GIP receptor tolerance.</td>
                </tr>
                <tr style={{ background: '#F9FAFB' }}>
                  <td style={{ padding: '12px 16px', border: '1px solid #E5E7EB', fontWeight: 600 }}>1.0 mg / week</td>
                  <td style={{ padding: '12px 16px', border: '1px solid #E5E7EB', color: 'var(--brand)', fontWeight: 700 }}>2.5 mg (2 wks) → 5.0 mg (2 wks)</td>
                  <td style={{ padding: '12px 16px', border: '1px solid #E5E7EB' }}>Brief introductory bridge, escalating quickly to 5.0mg therapeutic level.</td>
                </tr>
                <tr style={{ background: '#FFFFFF' }}>
                  <td style={{ padding: '12px 16px', border: '1px solid #E5E7EB', fontWeight: 600 }}>1.7 mg or 2.4 mg / week</td>
                  <td style={{ padding: '12px 16px', border: '1px solid #E5E7EB', color: 'var(--brand)', fontWeight: 700 }}>5.0 mg / week for 4 weeks</td>
                  <td style={{ padding: '12px 16px', border: '1px solid #E5E7EB' }}>High receptor acclimation allows immediate initiation at 5.0mg maintenance.</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="serif" style={{ fontSize: 32, marginTop: 48, marginBottom: 20, color: 'var(--ink)' }}>
            3. Cost Consideration: Which Therapy Offers the Best Value?
          </h2>
          <p>
            For patients paying out-of-pocket without insurance coverage:
          </p>
          <ul>
            <li>
              <strong>Compounded Semaglutide ($146/mo flat):</strong> Offers the highest cost-to-weight-loss efficiency for patients seeking steady 10%–15% body weight reduction on an affordable monthly budget.
            </li>
            <li>
              <strong>Compounded Tirzepatide ($258/mo flat):</strong> Recommended for patients who have plateaued on semaglutide, have higher metabolic resistance, or seek maximum possible weight loss (up to 20%+) with superior gastrointestinal tolerability.
            </li>
          </ul>

          {/* Final Callout Card */}
          <div className="card" style={{ padding: '40px 36px', margin: '48px 0', background: '#111827', color: '#fff', borderRadius: 20, textAlign: 'center' }}>
            <h3 className="serif" style={{ fontSize: 32, marginBottom: 16, color: '#fff' }}>
              Find the Right Incretin Therapy with Telehealth FX
            </h3>
            <p style={{ fontSize: 16, lineHeight: 1.6, color: '#D1D5DB', maxWidth: 620, margin: '0 auto 24px' }}>
              Our board-certified medical providers evaluate your metabolic health history, BMI, and weight loss goals to prescribe the exact medication tailored to your body. No subscription fees, free cold shipping.
            </p>
            <a href={START_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-lg" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '14px 28px', fontSize: 16 }}>
              Start Medical Intake Now <Icon.Arrow />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
