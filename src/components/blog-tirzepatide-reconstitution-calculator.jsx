"use client";
import React, { useState } from 'react';
import { Icon } from './common.jsx';

const START_URL = "https://go.telehealthfx.com/start";

export function BlogTirzepatideReconstitutionCalculator() {
  const [vialMg, setVialMg] = useState(10);
  const [waterMl, setWaterMl] = useState(2.0);
  const [targetDoseMg, setTargetDoseMg] = useState(2.5);

  // Calculations
  const concentration = vialMg > 0 && waterMl > 0 ? vialMg / waterMl : 0; // mg / mL
  const doseVolume = concentration > 0 ? targetDoseMg / concentration : 0; // mL
  const syringeUnits = Math.round(doseVolume * 100 * 10) / 10; // U-100 units
  const dosesPerVial = targetDoseMg > 0 ? (vialMg / targetDoseMg).toFixed(1) : 0;

  return (
    <section className="section" style={{ minHeight: '60vh', paddingTop: 120 }}>
      <div className="container" style={{ maxWidth: 880 }}>
        
        <div className="eyebrow" style={{ marginBottom: 20 }}>Clinical Dosing & Reconstitution Hub</div>
        <h1 className="serif" style={{ fontSize: 48, marginBottom: 24, lineHeight: 1.15, letterSpacing: '-0.02em' }}>
          Tirzepatide Reconstitution Calculator: <span style={{ fontStyle: 'italic', color: 'var(--brand)' }}>Units to Mg Dosing Guide</span>
        </h1>

        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 40, paddingBottom: 24, borderBottom: '1px solid var(--line-soft)' }}>
          <div style={{ width: 44, height: 44, borderRadius: '50%', background: 'var(--brand)', overflow: 'hidden' }}>
            <img src="/assets/jm-profile.jpg" alt="Julian Mercer, M.S." style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
          <div>
            <div style={{ fontWeight: 600, fontSize: 15 }}>Julian Mercer, M.S. · Medically Reviewed by Marcus Vance, M.D.</div>
            <div style={{ fontSize: 13, color: 'var(--ink-3)' }}>Clinical Pharmacology Analysis · Updated September 2026 · 12 min read</div>
          </div>
        </div>

        {/* Featured Editorial Magazine Still Life Image */}
        <div style={{ position: 'relative', borderRadius: 20, overflow: 'hidden', marginBottom: 40, border: '1px solid var(--line-soft)', boxShadow: '0 12px 36px rgba(0,0,0,0.06)' }}>
          <img 
            src="/assets/tirzepatide-reconstitution-calc-featured.jpg" 
            alt="Clinical laboratory glass vials, precision pipette, and sterile bacteriostatic water for peptide reconstitution" 
            style={{ width: '100%', height: 'auto', display: 'block' }} 
          />
          <div style={{ position: 'absolute', bottom: 12, right: 16, background: 'rgba(0,0,0,0.65)', color: '#fff', fontSize: 11, padding: '4px 10px', borderRadius: 6, backdropFilter: 'blur(4px)' }}>
            Editorial Laboratory Still Life · Archival Photographic Standard
          </div>
        </div>

        {/* Direct Answer Micro-Snippet (Zone 1 Extraction for AI Overviews) */}
        <div style={{ background: '#FAF8F5', borderLeft: '4px solid var(--brand)', padding: '24px 28px', borderRadius: '0 12px 12px 0', marginBottom: 48 }}>
          <div style={{ fontWeight: 700, textTransform: 'uppercase', fontSize: 12, letterSpacing: '0.08em', color: 'var(--brand)', marginBottom: 8 }}>
            Direct Clinical Answer
          </div>
          <p style={{ fontSize: 18, lineHeight: 1.65, color: 'var(--ink)', margin: 0, fontWeight: 500 }}>
            To reconstitute tirzepatide, inject bacteriostatic water into lyophilized peptide powder and calculate syringe units based on vial concentration. For a 10mg vial with 2mL water (5mg/mL), a 2.5mg starting dose equals 50 units (0.5mL) on a standard U-100 syringe. Store reconstituted vials refrigerated at 36°F to 46°F for up to 28 days.
          </p>
        </div>

        {/* Interactive Calculator Engine Card */}
        <div className="card" style={{ padding: '36px 32px', marginBottom: 56, background: '#FFFFFF', border: '2px solid var(--brand)', borderRadius: 20, boxShadow: '0 16px 40px rgba(0,0,0,0.08)' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 28, flexWrap: 'wrap', gap: 12 }}>
            <div>
              <h2 className="serif" style={{ fontSize: 28, margin: 0, color: 'var(--ink)' }}>Interactive Reconstitution Calculator</h2>
              <div style={{ fontSize: 14, color: 'var(--ink-3)' }}>Calibrated for Standard U-100 (100 units = 1.0 mL) Insulin Syringes</div>
            </div>
            <span style={{ fontSize: 12, padding: '6px 12px', background: 'var(--brand-soft)', color: 'var(--brand)', borderRadius: 20, fontWeight: 600 }}>
              Live Clinical Math
            </span>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 24, marginBottom: 32 }}>
            {/* Input 1: Vial Size */}
            <div>
              <label style={{ display: 'block', fontSize: 13, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--ink-2)', marginBottom: 10 }}>
                1. Vial Peptide Mass (mg)
              </label>
              <div style={{ display: 'flex', gap: 8 }}>
                {[5, 10, 15, 30].map((mg) => (
                  <button
                    key={mg}
                    type="button"
                    onClick={() => setVialMg(mg)}
                    style={{
                      flex: 1,
                      padding: '10px 0',
                      borderRadius: 8,
                      border: vialMg === mg ? '2px solid var(--brand)' : '1px solid var(--line-soft)',
                      background: vialMg === mg ? 'var(--brand)' : '#fff',
                      color: vialMg === mg ? '#fff' : 'var(--ink)',
                      fontWeight: 600,
                      cursor: 'pointer',
                      transition: 'all 0.15s ease'
                    }}
                  >
                    {mg}mg
                  </button>
                ))}
              </div>
            </div>

            {/* Input 2: Bac Water Added */}
            <div>
              <label style={{ display: 'block', fontSize: 13, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--ink-2)', marginBottom: 10 }}>
                2. BAC Water Added: <span style={{ color: 'var(--brand)' }}>{waterMl.toFixed(1)} mL</span>
              </label>
              <input 
                type="range" 
                min="0.5" 
                max="5.0" 
                step="0.5" 
                value={waterMl}
                onChange={(e) => setWaterMl(parseFloat(e.target.value))}
                style={{ width: '100%', accentColor: 'var(--brand)', cursor: 'pointer', marginTop: 8 }}
              />
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 11, color: 'var(--ink-3)', marginTop: 4 }}>
                <span>0.5 mL</span>
                <span>2.0 mL (Standard)</span>
                <span>5.0 mL</span>
              </div>
            </div>

            {/* Input 3: Desired Target Dose */}
            <div>
              <label style={{ display: 'block', fontSize: 13, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--ink-2)', marginBottom: 10 }}>
                3. Prescribed Target Dose (mg)
              </label>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 6 }}>
                {[2.5, 5.0, 7.5, 10.0, 12.5, 15.0].map((dose) => (
                  <button
                    key={dose}
                    type="button"
                    onClick={() => setTargetDoseMg(dose)}
                    style={{
                      padding: '8px 0',
                      borderRadius: 8,
                      border: targetDoseMg === dose ? '2px solid var(--brand)' : '1px solid var(--line-soft)',
                      background: targetDoseMg === dose ? 'var(--brand)' : '#F9F8F6',
                      color: targetDoseMg === dose ? '#fff' : 'var(--ink)',
                      fontWeight: 600,
                      fontSize: 13,
                      cursor: 'pointer',
                      transition: 'all 0.15s ease'
                    }}
                  >
                    {dose}mg
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Real-Time Output Display */}
          <div style={{ background: '#111827', color: '#fff', borderRadius: 16, padding: '24px 28px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: 20 }}>
            <div>
              <div style={{ fontSize: 12, color: '#9CA3AF', textTransform: 'uppercase', letterSpacing: '0.06em' }}>Draw Volume on U-100</div>
              <div style={{ fontSize: 40, fontWeight: 800, color: '#10B981', lineHeight: 1.1 }}>
                {syringeUnits} <span style={{ fontSize: 18, fontWeight: 500, color: '#D1D5DB' }}>Units</span>
              </div>
              <div style={{ fontSize: 13, color: '#9CA3AF', marginTop: 4 }}>
                Equals <strong>{doseVolume.toFixed(2)} mL</strong> of solution
              </div>
            </div>

            <div>
              <div style={{ fontSize: 12, color: '#9CA3AF', textTransform: 'uppercase', letterSpacing: '0.06em' }}>Solution Concentration</div>
              <div style={{ fontSize: 32, fontWeight: 700, color: '#F3F4F6', lineHeight: 1.2 }}>
                {concentration.toFixed(1)} <span style={{ fontSize: 16, fontWeight: 500, color: '#9CA3AF' }}>mg/mL</span>
              </div>
              <div style={{ fontSize: 13, color: '#9CA3AF', marginTop: 4 }}>
                {vialMg}mg peptide in {waterMl.toFixed(1)}mL diluent
              </div>
            </div>

            <div>
              <div style={{ fontSize: 12, color: '#9CA3AF', textTransform: 'uppercase', letterSpacing: '0.06em' }}>Doses In This Vial</div>
              <div style={{ fontSize: 32, fontWeight: 700, color: '#F3F4F6', lineHeight: 1.2 }}>
                {dosesPerVial} <span style={{ fontSize: 16, fontWeight: 500, color: '#9CA3AF' }}>weekly shots</span>
              </div>
              <div style={{ fontSize: 13, color: '#9CA3AF', marginTop: 4 }}>
                BUD discard at 28 days refrigerated
              </div>
            </div>
          </div>

          {/* Safety Advisory inside Calculator */}
          <div style={{ marginTop: 20, padding: '12px 16px', background: '#FEF3C7', border: '1px solid #FCD34D', borderRadius: 10, fontSize: 13, color: '#92400E', display: 'flex', alignItems: 'center', gap: 10 }}>
            <Icon.Shield size={18} />
            <span><strong>Clinical Verification Rule:</strong> Always cross-reference the manufacturer’s concentration printed on the vial before drawing medication. Never mix with unpreserved sterile water for multi-dose usage.</span>
          </div>
        </div>

        {/* CRO Commercial Bridge 1 */}
        <div className="card" style={{ padding: '36px 32px', margin: '48px 0', background: '#FFFDF9', borderColor: 'var(--brand)', borderRadius: 16, textAlign: 'center' }}>
          <div style={{ display: 'inline-flex', padding: '6px 16px', background: 'var(--brand-soft)', color: 'var(--brand)', borderRadius: 20, fontWeight: 700, fontSize: 12, textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 16 }}>
            Eliminate Reconstitution Hazards
          </div>
          <h3 className="serif" style={{ fontSize: 32, marginBottom: 16, color: 'var(--ink)' }}>
            Skip the Mixing Math: Get Pre-Mixed 503A Compounded Tirzepatide
          </h3>
          <p style={{ fontSize: 17, lineHeight: 1.6, color: 'var(--ink-2)', maxWidth: 640, margin: '0 auto 24px' }}>
            Avoid dosing errors, reconstitution contamination, and peptide degradation. Telehealth FX ships doctor-prescribed, pre-mixed compounded Tirzepatide directly from licensed 503A state pharmacies for a flat <strong>$258/month</strong> across all doses (2.5mg up to 15mg) with <strong>$0 membership fees</strong> and free 2-day cold shipping.
          </p>
          <a href={START_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-lg" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '14px 28px', fontSize: 16 }}>
            Start Your Clinical Consultation ($99 First Month) <Icon.Arrow />
          </a>
        </div>

        {/* Editorial Body Content */}
        <div className="blog-content" style={{ fontSize: 18, lineHeight: 1.75, color: 'var(--ink-2)' }}>
          <h2 className="serif" style={{ fontSize: 32, marginTop: 48, marginBottom: 20, color: 'var(--ink)' }}>
            How to Calculate Reconstitution Units on a U-100 Syringe
          </h2>
          <p>
            When administering subcutaneous tirzepatide from a multi-dose lyophilized powder vial, precision calculation is paramount. The mathematical relationship governing all peptide reconstitution follows standard pharmacokinetics:
          </p>
          
          <div style={{ background: '#F4F4F5', padding: '20px 24px', borderRadius: 12, margin: '24px 0', fontFamily: 'monospace', fontSize: 16, color: '#1F2937' }}>
            Concentration (mg/mL) = Total Vial Peptide (mg) ÷ Bacteriostatic Water Added (mL)<br />
            Injection Volume (mL) = Target Prescribed Dose (mg) ÷ Concentration (mg/mL)<br />
            Syringe Units = Injection Volume (mL) × 100 (for standard U-100 insulin syringes)
          </div>

          <p>
            Because standard insulin syringes are marked in <strong>Units</strong> rather than milliliters, confusing milliliters with units is the single most frequent cause of accidental tenfold dosing errors reported to FDA adverse event registries. On any standard U-100 syringe:
          </p>
          <ul>
            <li><strong>100 Units</strong> = exactly 1.0 mL</li>
            <li><strong>50 Units</strong> = exactly 0.5 mL</li>
            <li><strong>25 Units</strong> = exactly 0.25 mL</li>
            <li><strong>10 Units</strong> = exactly 0.10 mL</li>
          </ul>

          <h2 className="serif" style={{ fontSize: 32, marginTop: 48, marginBottom: 20, color: 'var(--ink)' }}>
            Tirzepatide Reconstitution Reference Matrix (Standard Concentrations)
          </h2>
          <p>
            The table below outlines the exact syringe unit requirements across common vial sizes and dilution volumes for every therapeutic titration level (2.5mg, 5.0mg, 7.5mg, 10.0mg, 12.5mg, and 15.0mg):
          </p>

          <div style={{ overflowX: 'auto', margin: '32px 0' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 15, textAlign: 'left' }}>
              <thead>
                <tr style={{ background: '#111827', color: '#fff' }}>
                  <th style={{ padding: '14px 16px', border: '1px solid #374151' }}>Vial Size</th>
                  <th style={{ padding: '14px 16px', border: '1px solid #374151' }}>BAC Water Added</th>
                  <th style={{ padding: '14px 16px', border: '1px solid #374151' }}>Concentration</th>
                  <th style={{ padding: '14px 16px', border: '1px solid #374151' }}>2.5mg Dose</th>
                  <th style={{ padding: '14px 16px', border: '1px solid #374151' }}>5.0mg Dose</th>
                  <th style={{ padding: '14px 16px', border: '1px solid #374151' }}>7.5mg Dose</th>
                  <th style={{ padding: '14px 16px', border: '1px solid #374151' }}>10.0mg Dose</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ background: '#FFFFFF' }}>
                  <td style={{ padding: '12px 16px', border: '1px solid #E5E7EB', fontWeight: 600 }}>5 mg Vial</td>
                  <td style={{ padding: '12px 16px', border: '1px solid #E5E7EB' }}>1.0 mL</td>
                  <td style={{ padding: '12px 16px', border: '1px solid #E5E7EB' }}>5.0 mg/mL</td>
                  <td style={{ padding: '12px 16px', border: '1px solid #E5E7EB', color: 'var(--brand)', fontWeight: 700 }}>50 units</td>
                  <td style={{ padding: '12px 16px', border: '1px solid #E5E7EB' }}>100 units</td>
                  <td style={{ padding: '12px 16px', border: '1px solid #E5E7EB', color: '#9CA3AF' }}>N/A (Exceeds)</td>
                  <td style={{ padding: '12px 16px', border: '1px solid #E5E7EB', color: '#9CA3AF' }}>N/A (Exceeds)</td>
                </tr>
                <tr style={{ background: '#F9FAFB' }}>
                  <td style={{ padding: '12px 16px', border: '1px solid #E5E7EB', fontWeight: 600 }}>10 mg Vial</td>
                  <td style={{ padding: '12px 16px', border: '1px solid #E5E7EB' }}>2.0 mL</td>
                  <td style={{ padding: '12px 16px', border: '1px solid #E5E7EB' }}>5.0 mg/mL</td>
                  <td style={{ padding: '12px 16px', border: '1px solid #E5E7EB', color: 'var(--brand)', fontWeight: 700 }}>50 units</td>
                  <td style={{ padding: '12px 16px', border: '1px solid #E5E7EB', color: 'var(--brand)', fontWeight: 700 }}>100 units</td>
                  <td style={{ padding: '12px 16px', border: '1px solid #E5E7EB', color: '#9CA3AF' }}>N/A (Exceeds)</td>
                  <td style={{ padding: '12px 16px', border: '1px solid #E5E7EB', color: '#9CA3AF' }}>N/A (Exceeds)</td>
                </tr>
                <tr style={{ background: '#FFFFFF' }}>
                  <td style={{ padding: '12px 16px', border: '1px solid #E5E7EB', fontWeight: 600 }}>15 mg Vial</td>
                  <td style={{ padding: '12px 16px', border: '1px solid #E5E7EB' }}>3.0 mL</td>
                  <td style={{ padding: '12px 16px', border: '1px solid #E5E7EB' }}>5.0 mg/mL</td>
                  <td style={{ padding: '12px 16px', border: '1px solid #E5E7EB' }}>50 units</td>
                  <td style={{ padding: '12px 16px', border: '1px solid #E5E7EB' }}>100 units</td>
                  <td style={{ padding: '12px 16px', border: '1px solid #E5E7EB', color: 'var(--brand)', fontWeight: 700 }}>150 units</td>
                  <td style={{ padding: '12px 16px', border: '1px solid #E5E7EB', color: '#9CA3AF' }}>N/A (Exceeds)</td>
                </tr>
                <tr style={{ background: '#F9FAFB' }}>
                  <td style={{ padding: '12px 16px', border: '1px solid #E5E7EB', fontWeight: 600 }}>30 mg Vial</td>
                  <td style={{ padding: '12px 16px', border: '1px solid #E5E7EB' }}>3.0 mL</td>
                  <td style={{ padding: '12px 16px', border: '1px solid #E5E7EB' }}>10.0 mg/mL</td>
                  <td style={{ padding: '12px 16px', border: '1px solid #E5E7EB' }}>25 units</td>
                  <td style={{ padding: '12px 16px', border: '1px solid #E5E7EB' }}>50 units</td>
                  <td style={{ padding: '12px 16px', border: '1px solid #E5E7EB' }}>75 units</td>
                  <td style={{ padding: '12px 16px', border: '1px solid #E5E7EB', color: 'var(--brand)', fontWeight: 700 }}>100 units</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="serif" style={{ fontSize: 32, marginTop: 48, marginBottom: 20, color: 'var(--ink)' }}>
            Bacteriostatic Water vs Sterile Water: USP &lt;797&gt; Sterility Rules
          </h2>
          <p>
            A common point of confusion is the distinction between bacteriostatic water and plain sterile water for injection:
          </p>
          <ul>
            <li>
              <strong>Bacteriostatic Water for Injection (BWFI):</strong> Sterile water containing 0.9% (9 mg/mL) benzyl alcohol as an antimicrobial preservative. This bacteriostatic agent halts bacterial replication, allowing multi-dose penetration of the rubber vial stopper for up to <strong>28 days</strong> when refrigerated at 36°F to 46°F (2°C to 8°C).
            </li>
            <li>
              <strong>Sterile Water for Injection (SWFI):</strong> Single-dose water containing no antimicrobial agents. Once pierced, any introduced ambient bacteria will proliferate rapidly in the peptide medium. Plain sterile water must be discarded within <strong>4 hours</strong> of puncture and should <em>never</em> be used for multi-week peptide vials.
            </li>
          </ul>

          <h2 className="serif" style={{ fontSize: 32, marginTop: 48, marginBottom: 20, color: 'var(--ink)' }}>
            The 4-Step Aseptic Reconstitution Technique
          </h2>
          <ol>
            <li style={{ marginBottom: 12 }}>
              <strong>Sterilize Stopper Surfaces:</strong> Wipe the tops of both the bacteriostatic water vial and the tirzepatide vial with 70% isopropyl alcohol swabs. Allow to air-dry completely for 30 seconds to ensure broad-spectrum germicidal action.
            </li>
            <li style={{ marginBottom: 12 }}>
              <strong>Draw Diluent Gently:</strong> Using a sterile reconstitution syringe (typically 3mL with a 21G–25G needle), draw the exact volume of bacteriostatic water needed (e.g., 2.0 mL).
            </li>
            <li style={{ marginBottom: 12 }}>
              <strong>Slow Wall-Angle Injection:</strong> Insert the needle into the tirzepatide vial at a 45-degree angle pointing toward the glass wall. Depress the plunger slowly so the water runs down the side of the glass. <em>Never squirt water directly into the peptide powder cake</em>, as shear forces can denature delicate synthetic peptide tertiary structures.
            </li>
            <li style={{ marginBottom: 12 }}>
              <strong>Gentle Swirling (No Shaking):</strong> Slowly roll the vial between your palms until the powder is fully dissolved and crystal clear. Do not shake violently, which creates froth and degrades peptide bonds.
            </li>
          </ol>

          {/* Final Callout Card */}
          <div className="card" style={{ padding: '40px 36px', margin: '48px 0', background: '#111827', color: '#fff', borderRadius: 20, textAlign: 'center' }}>
            <h3 className="serif" style={{ fontSize: 32, marginBottom: 16, color: '#fff' }}>
              Why Compromise On Compounding Quality?
            </h3>
            <p style={{ fontSize: 16, lineHeight: 1.6, color: '#D1D5DB', maxWidth: 620, margin: '0 auto 24px' }}>
              Telehealth FX works exclusively with state-licensed 503A compounding pharmacies that prepare pre-mixed, patient-ready vials using cGMP active pharmaceutical ingredients (API). No powder mixing, zero membership fees, flat $258/month across all doses.
            </p>
            <a href={START_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-lg" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '14px 28px', fontSize: 16 }}>
              Get Started with Telehealth FX <Icon.Arrow />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
