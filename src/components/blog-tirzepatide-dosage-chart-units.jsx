"use client";
import React from 'react';
import { Icon } from './common.jsx';

const START_URL = "https://go.telehealthfx.com/start";

export function BlogTirzepatideDosageChartUnits() {
  return (
    <section className="section" style={{ minHeight: '60vh', paddingTop: 120 }}>
      <div className="container" style={{ maxWidth: 880 }}>
        
        <div className="eyebrow" style={{ marginBottom: 20 }}>Clinical Dosing Protocol & Titration</div>
        <h1 className="serif" style={{ fontSize: 48, marginBottom: 24, lineHeight: 1.15, letterSpacing: '-0.02em' }}>
          Tirzepatide Dosage Chart: <span style={{ fontStyle: 'italic', color: 'var(--brand)' }}>Units, Milligrams & Titration Schedule</span>
        </h1>

        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 40, paddingBottom: 24, borderBottom: '1px solid var(--line-soft)' }}>
          <div style={{ width: 44, height: 44, borderRadius: '50%', background: 'var(--brand)', overflow: 'hidden' }}>
            <img src="/assets/jm-profile.jpg" alt="Julian Mercer, M.S." style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
          <div>
            <div style={{ fontWeight: 600, fontSize: 15 }}>Julian Mercer, M.S. · Medically Reviewed by Marcus Vance, M.D.</div>
            <div style={{ fontSize: 13, color: 'var(--ink-3)' }}>Clinical Administration Guide · Updated September 2026 · 14 min read</div>
          </div>
        </div>

        {/* Featured Editorial Magazine Still Life Image */}
        <div style={{ position: 'relative', borderRadius: 20, overflow: 'hidden', marginBottom: 40, border: '1px solid var(--line-soft)', boxShadow: '0 12px 36px rgba(0,0,0,0.06)' }}>
          <img 
            src="/assets/tirzepatide-dosage-chart-featured.jpg" 
            alt="Amber glass vial of tirzepatide alongside sterile clinical measurement syringes on ceramic tray" 
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
            Tirzepatide dosing follows a 4-week titration escalation schedule: start at 2.5mg weekly for 4 weeks, escalate to 5.0mg for weeks 5–8, then increase by 2.5mg every 4 weeks to 7.5mg, 10mg, 12.5mg, up to 15mg as needed. Syringe units depend on vial concentration; always verify concentration in mg/mL.
          </p>
        </div>

        {/* Standard 4-Week Titration Schedule Table */}
        <h2 className="serif" style={{ fontSize: 32, marginTop: 40, marginBottom: 20, color: 'var(--ink)' }}>
          Standard 4-Week Tirzepatide Titration Escalation Schedule
        </h2>
        <p style={{ fontSize: 18, lineHeight: 1.7, color: 'var(--ink-2)' }}>
          To allow gastrointestinal receptors to adjust smoothly and minimize nausea, tirzepatide must never be initiated at maintenance levels. The clinical titration protocol follows a structured 4-week stepping schedule:
        </p>

        <div style={{ overflowX: 'auto', margin: '32px 0' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 15, textAlign: 'left' }}>
            <thead>
              <tr style={{ background: '#111827', color: '#fff' }}>
                <th style={{ padding: '14px 16px', border: '1px solid #374151' }}>Treatment Phase</th>
                <th style={{ padding: '14px 16px', border: '1px solid #374151' }}>Timeline</th>
                <th style={{ padding: '14px 16px', border: '1px solid #374151', background: 'var(--brand)', color: '#fff' }}>Weekly Dose</th>
                <th style={{ padding: '14px 16px', border: '1px solid #374151' }}>Clinical Purpose</th>
              </tr>
            </thead>
            <tbody>
              <tr style={{ background: '#FFFFFF' }}>
                <td style={{ padding: '12px 16px', border: '1px solid #E5E7EB', fontWeight: 600 }}>Starter Dose</td>
                <td style={{ padding: '12px 16px', border: '1px solid #E5E7EB' }}>Weeks 1 – 4</td>
                <td style={{ padding: '12px 16px', border: '1px solid #E5E7EB', color: 'var(--brand)', fontWeight: 700 }}>2.5 mg / week</td>
                <td style={{ padding: '12px 16px', border: '1px solid #E5E7EB' }}>Initiation & receptor conditioning (non-therapeutic weight loss dose).</td>
              </tr>
              <tr style={{ background: '#F9FAFB' }}>
                <td style={{ padding: '12px 16px', border: '1px solid #E5E7EB', fontWeight: 600 }}>First Therapeutic Step</td>
                <td style={{ padding: '12px 16px', border: '1px solid #E5E7EB' }}>Weeks 5 – 8</td>
                <td style={{ padding: '12px 16px', border: '1px solid #E5E7EB', color: 'var(--brand)', fontWeight: 700 }}>5.0 mg / week</td>
                <td style={{ padding: '12px 16px', border: '1px solid #E5E7EB' }}>Primary therapeutic threshold; appetite reduction becomes noticeable.</td>
              </tr>
              <tr style={{ background: '#FFFFFF' }}>
                <td style={{ padding: '12px 16px', border: '1px solid #E5E7EB', fontWeight: 600 }}>Intermediate Step 1</td>
                <td style={{ padding: '12px 16px', border: '1px solid #E5E7EB' }}>Weeks 9 – 12</td>
                <td style={{ padding: '12px 16px', border: '1px solid #E5E7EB', color: 'var(--brand)', fontWeight: 700 }}>7.5 mg / week</td>
                <td style={{ padding: '12px 16px', border: '1px solid #E5E7EB' }}>Escalation for patients requiring accelerated metabolic response.</td>
              </tr>
              <tr style={{ background: '#F9FAFB' }}>
                <td style={{ padding: '12px 16px', border: '1px solid #E5E7EB', fontWeight: 600 }}>Intermediate Step 2</td>
                <td style={{ padding: '12px 16px', border: '1px solid #E5E7EB' }}>Weeks 13 – 16</td>
                <td style={{ padding: '12px 16px', border: '1px solid #E5E7EB', color: 'var(--brand)', fontWeight: 700 }}>10.0 mg / week</td>
                <td style={{ padding: '12px 16px', border: '1px solid #E5E7EB' }}>Robust fat oxidation and profound "food noise" suppression.</td>
              </tr>
              <tr style={{ background: '#FFFFFF' }}>
                <td style={{ padding: '12px 16px', border: '1px solid #E5E7EB', fontWeight: 600 }}>High Maintenance 1</td>
                <td style={{ padding: '12px 16px', border: '1px solid #E5E7EB' }}>Weeks 17 – 20</td>
                <td style={{ padding: '12px 16px', border: '1px solid #E5E7EB', color: 'var(--brand)', fontWeight: 700 }}>12.5 mg / week</td>
                <td style={{ padding: '12px 16px', border: '1px solid #E5E7EB' }}>Advanced maintenance for significant baseline insulin resistance.</td>
              </tr>
              <tr style={{ background: '#F9FAFB' }}>
                <td style={{ padding: '12px 16px', border: '1px solid #E5E7EB', fontWeight: 600 }}>Max Maintenance</td>
                <td style={{ padding: '12px 16px', border: '1px solid #E5E7EB' }}>Week 21+</td>
                <td style={{ padding: '12px 16px', border: '1px solid #E5E7EB', color: '#059669', fontWeight: 800 }}>15.0 mg / week</td>
                <td style={{ padding: '12px 16px', border: '1px solid #E5E7EB' }}>Ceiling dosage; delivered -20.9% weight reduction in SURMOUNT-1.</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* CRO Commercial Bridge */}
        <div className="card" style={{ padding: '36px 32px', margin: '48px 0', background: '#FFFDF9', borderColor: 'var(--brand)', borderRadius: 16, textAlign: 'center' }}>
          <div style={{ display: 'inline-flex', padding: '6px 16px', background: 'var(--brand-soft)', color: 'var(--brand)', borderRadius: 20, fontWeight: 700, fontSize: 12, textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 16 }}>
            Flat-Rate Dosing Guarantee
          </div>
          <h3 className="serif" style={{ fontSize: 32, marginBottom: 16, color: 'var(--ink)' }}>
            Never Pay More as Your Tirzepatide Dose Increases
          </h3>
          <p style={{ fontSize: 17, lineHeight: 1.6, color: 'var(--ink-2)', maxWidth: 640, margin: '0 auto 24px' }}>
            Traditional clinics increase monthly prices from $199 up to $399 as you advance from 2.5mg to 15.0mg. Telehealth FX freezes your price at a flat <strong>$258/month</strong> across all doses. No surprise charges, zero membership fees.
          </p>
          <a href={START_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-lg" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '14px 28px', fontSize: 16 }}>
            Lock In Your $258/Mo Rate ($99 First Month) <Icon.Arrow />
          </a>
        </div>

        {/* Units to Milligram Conversion Table */}
        <div className="blog-content" style={{ fontSize: 18, lineHeight: 1.75, color: 'var(--ink-2)' }}>
          <h2 className="serif" style={{ fontSize: 32, marginTop: 48, marginBottom: 20, color: 'var(--ink)' }}>
            Tirzepatide Units to Milligrams Conversion Matrix
          </h2>
          <p>
            When utilizing patient-ready multi-dose compounded vials, the number of syringe units drawn depends directly on the concentration prepared by the compounding pharmacy (labeled in mg/mL):
          </p>

          <div style={{ overflowX: 'auto', margin: '32px 0' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 15, textAlign: 'left' }}>
              <thead>
                <tr style={{ background: '#111827', color: '#fff' }}>
                  <th style={{ padding: '14px 16px', border: '1px solid #374151' }}>Prescribed Dose (mg)</th>
                  <th style={{ padding: '14px 16px', border: '1px solid #374151' }}>Low Conc. (5 mg/mL)</th>
                  <th style={{ padding: '14px 16px', border: '1px solid #374151', background: 'var(--brand)', color: '#fff' }}>Standard Conc. (10 mg/mL)</th>
                  <th style={{ padding: '14px 16px', border: '1px solid #374151' }}>High Conc. (20 mg/mL)</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ background: '#FFFFFF' }}>
                  <td style={{ padding: '12px 16px', border: '1px solid #E5E7EB', fontWeight: 600 }}>2.5 mg</td>
                  <td style={{ padding: '12px 16px', border: '1px solid #E5E7EB' }}>50 units (0.50 mL)</td>
                  <td style={{ padding: '12px 16px', border: '1px solid #E5E7EB', color: 'var(--brand)', fontWeight: 700 }}>25 units (0.25 mL)</td>
                  <td style={{ padding: '12px 16px', border: '1px solid #E5E7EB' }}>12.5 units (0.125 mL)</td>
                </tr>
                <tr style={{ background: '#F9FAFB' }}>
                  <td style={{ padding: '12px 16px', border: '1px solid #E5E7EB', fontWeight: 600 }}>5.0 mg</td>
                  <td style={{ padding: '12px 16px', border: '1px solid #E5E7EB' }}>100 units (1.00 mL)</td>
                  <td style={{ padding: '12px 16px', border: '1px solid #E5E7EB', color: 'var(--brand)', fontWeight: 700 }}>50 units (0.50 mL)</td>
                  <td style={{ padding: '12px 16px', border: '1px solid #E5E7EB' }}>25 units (0.25 mL)</td>
                </tr>
                <tr style={{ background: '#FFFFFF' }}>
                  <td style={{ padding: '12px 16px', border: '1px solid #E5E7EB', fontWeight: 600 }}>7.5 mg</td>
                  <td style={{ padding: '12px 16px', border: '1px solid #E5E7EB', color: '#9CA3AF' }}>Exceeds 100u syringe</td>
                  <td style={{ padding: '12px 16px', border: '1px solid #E5E7EB', color: 'var(--brand)', fontWeight: 700 }}>75 units (0.75 mL)</td>
                  <td style={{ padding: '12px 16px', border: '1px solid #E5E7EB' }}>37.5 units (0.375 mL)</td>
                </tr>
                <tr style={{ background: '#F9FAFB' }}>
                  <td style={{ padding: '12px 16px', border: '1px solid #E5E7EB', fontWeight: 600 }}>10.0 mg</td>
                  <td style={{ padding: '12px 16px', border: '1px solid #E5E7EB', color: '#9CA3AF' }}>Exceeds 100u syringe</td>
                  <td style={{ padding: '12px 16px', border: '1px solid #E5E7EB', color: 'var(--brand)', fontWeight: 700 }}>100 units (1.00 mL)</td>
                  <td style={{ padding: '12px 16px', border: '1px solid #E5E7EB' }}>50 units (0.50 mL)</td>
                </tr>
                <tr style={{ background: '#FFFFFF' }}>
                  <td style={{ padding: '12px 16px', border: '1px solid #E5E7EB', fontWeight: 600 }}>12.5 mg</td>
                  <td style={{ padding: '12px 16px', border: '1px solid #E5E7EB', color: '#9CA3AF' }}>Exceeds 100u syringe</td>
                  <td style={{ padding: '12px 16px', border: '1px solid #E5E7EB', color: '#9CA3AF' }}>Exceeds 100u syringe</td>
                  <td style={{ padding: '12px 16px', border: '1px solid #E5E7EB', color: 'var(--brand)', fontWeight: 700 }}>62.5 units (0.625 mL)</td>
                </tr>
                <tr style={{ background: '#F9FAFB' }}>
                  <td style={{ padding: '12px 16px', border: '1px solid #E5E7EB', fontWeight: 600 }}>15.0 mg</td>
                  <td style={{ padding: '12px 16px', border: '1px solid #E5E7EB', color: '#9CA3AF' }}>Exceeds 100u syringe</td>
                  <td style={{ padding: '12px 16px', border: '1px solid #E5E7EB', color: '#9CA3AF' }}>Exceeds 100u syringe</td>
                  <td style={{ padding: '12px 16px', border: '1px solid #E5E7EB', color: 'var(--brand)', fontWeight: 700 }}>75 units (0.75 mL)</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="serif" style={{ fontSize: 32, marginTop: 48, marginBottom: 20, color: 'var(--ink)' }}>
            Injection Technique & Recommended Anatomical Sites
          </h2>
          <p>
            Tirzepatide is formulated strictly for subcutaneous administration into the fatty layer beneath the dermis, never intramuscularly or intravenously. The three clinically validated injection zones are:
          </p>
          <ul>
            <li><strong>Abdomen:</strong> At least 2 inches away from the navel (highest absorption predictability).</li>
            <li><strong>Front of the Thigh:</strong> Midway between the hip and knee on the anterior outer aspect.</li>
            <li><strong>Back of the Upper Arm:</strong> Triceps fat pad (often easiest with assistance).</li>
          </ul>
          <p>
            <em>Clinical Pro-Tip:</em> Rotate injection sites weekly. Injecting into the exact same location consecutively can cause localized lipohypertrophy (fat deposits) which impairs consistent drug absorption.
          </p>

          {/* Final Callout Card */}
          <div className="card" style={{ padding: '40px 36px', margin: '48px 0', background: '#111827', color: '#fff', borderRadius: 20, textAlign: 'center' }}>
            <h3 className="serif" style={{ fontSize: 32, marginBottom: 16, color: '#fff' }}>
              Begin Doctor-Prescribed Tirzepatide Therapy Today
            </h3>
            <p style={{ fontSize: 16, lineHeight: 1.6, color: '#D1D5DB', maxWidth: 620, margin: '0 auto 24px' }}>
              Connect with a board-certified physician online in minutes. Enjoy flat $258/month pricing across all titration doses, zero membership fees, and express 2-day delivery.
            </p>
            <a href={START_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-lg" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '14px 28px', fontSize: 16 }}>
              Check Candidate Eligibility <Icon.Arrow />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
