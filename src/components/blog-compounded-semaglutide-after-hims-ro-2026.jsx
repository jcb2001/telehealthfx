"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import { Icon } from './common.jsx';
import { DirectAnswerSnippet } from './direct-answer-snippet.jsx';

const START_URL = "https://go.telehealthfx.com/start";

function BlogCompoundedAfterHimsRo() {
  const [selectedDose, setSelectedDose] = useState("1.0 mg");

  return (
    <>
      <section className="section" style={{ minHeight: '60vh', paddingTop: 120, paddingBottom: 100 }}>
        <div className="container" style={{ maxWidth: 800 }}>
          <div style={{ display: 'inline-block', padding: '4px 12px', borderRadius: 6, background: '#DC2626', color: '#fff', fontSize: 12, fontWeight: 700, letterSpacing: 1, textTransform: 'uppercase', marginBottom: 16 }}>
            Breaking — Regulatory Update
          </div>
          <h1 className="serif" style={{ fontSize: 52, marginBottom: 24, lineHeight: 1.08 }}>
            Hims and Ro Stopped Selling Compounded Semaglutide. <span style={{ fontStyle: 'italic', color: 'var(--brand)' }}>Here Is Where to Get It Now.</span>
          </h1>

          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 48, paddingBottom: 24, borderBottom: '1px solid var(--line-soft)' }}>
            <div style={{ width: 40, height: 40, borderRadius: '50%', background: 'var(--brand)' }}>
              <Image src="/assets/jm-profile.jpg" alt="Julian Mercer" width={1024} height={1024} style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%', height: "auto"}} priority={true} />
            </div>
            <div>
              <div style={{ fontWeight: 500, fontSize: 14 }}>
                <a href="/about/" style={{ color: "var(--ink)", textDecoration: "none" }}>Julian Mercer, M.S.</a>
              </div>
              <div style={{ fontSize: 13, color: 'var(--ink-3)' }}>Lead Bio-Systems Analyst · Updated May 2026 · 18 min read</div>
            </div>
          </div>

          <div className="blog-content" style={{ fontSize: 18, lineHeight: 1.7, color: 'var(--ink-2)' }}>
            <DirectAnswerSnippet
              question="Can you still get compounded semaglutide after Hims and Ro stopped?"
              answer="Yes, patients can legally obtain compounded semaglutide through licensed 503A compounding pharmacies. While large digital platforms like Hims and Ro suspended mass-manufactured 503B batches following FDA shortage list changes, state-regulated 503A pharmacies continue dispensing personalized, patient-specific semaglutide and tirzepatide prescriptions nationwide without requiring you to restart titration."
              badge="FDA 503A Clinical Guidance"
              keyTakeaways={[
                { label: "Legal Status", value: "100% Legal via 503A Pharmacies" },
                { label: "Dose Continuity", value: "Transfer Current Dose (No Restart)" },
                { label: "Starting Price", value: "From $146/month all-inclusive" },
                { label: "Fulfillment", value: "24-48 hr Cold-Chain Home Delivery" }
              ]}
            />

            {/* CRO Enhancement 1: No Gap in Therapy / No Dose Restart Guarantee Card */}
            <div
              style={{
                backgroundColor: '#FAF6F0',
                border: '2px solid var(--brand, #2E4A3B)',
                borderRadius: '18px',
                padding: '30px 24px',
                margin: '36px 0 40px',
                boxShadow: '0 8px 24px rgba(46, 74, 59, 0.08)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
                <span
                  style={{
                    backgroundColor: '#DCFCE7',
                    color: '#15803D',
                    fontSize: '11px',
                    fontWeight: 800,
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    padding: '4px 10px',
                    borderRadius: '999px',
                    border: '1px solid #86EFAC',
                  }}
                >
                  ✓ NO GAP IN THERAPY GUARANTEE
                </span>
                <span
                  style={{
                    backgroundColor: 'rgba(46, 74, 59, 0.1)',
                    color: 'var(--brand)',
                    fontSize: '11px',
                    fontWeight: 700,
                    padding: '4px 10px',
                    borderRadius: '999px',
                  }}
                >
                  NO DOSE RESTART
                </span>
              </div>

              <h3 className="serif" style={{ fontSize: '26px', color: 'var(--ink)', margin: '0 0 10px', lineHeight: 1.25 }}>
                Displaced from Hims or Ro? Maintain Your Established Dose
              </h3>

              <p style={{ fontSize: '15px', color: 'var(--ink-2)', lineHeight: 1.6, margin: '0 0 20px' }}>
                Most clinics force transferring patients to reset their titration back to 0.25 mg—costing you 8 to 12 weeks of lost progress and risking immediate appetite rebound. At Telehealth FX, our board-certified physicians will <strong>match your established dose</strong> directly upon verification of your prior prescription.
              </p>

              {/* Dose Selector Showcase */}
              <div style={{ marginBottom: '20px' }}>
                <div style={{ fontSize: '12px', fontWeight: 600, color: 'var(--ink)', marginBottom: '8px' }}>
                  Select Your Current Weekly Maintenance Dose:
                </div>
                <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                  {["0.25 mg", "0.5 mg", "1.0 mg", "1.7 mg", "2.4 mg"].map((dose) => (
                    <button
                      key={dose}
                      type="button"
                      onClick={() => setSelectedDose(dose)}
                      style={{
                        padding: '8px 16px',
                        borderRadius: '8px',
                        fontSize: '13px',
                        fontWeight: selectedDose === dose ? 700 : 500,
                        backgroundColor: selectedDose === dose ? 'var(--brand)' : '#FFFFFF',
                        color: selectedDose === dose ? '#FFFFFF' : 'var(--ink)',
                        border: '1px solid',
                        borderColor: selectedDose === dose ? 'var(--brand)' : 'var(--line-soft)',
                        cursor: 'pointer',
                        transition: 'all 0.2s ease',
                      }}
                    >
                      {dose}
                    </button>
                  ))}
                </div>
                <div style={{ fontSize: '13px', color: '#15803D', fontWeight: 600, marginTop: '8px' }}>
                  ✓ Guaranteed Seamless Continuation: Your clinician will maintain your {selectedDose} protocol without delay.
                </div>
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '14px', paddingTop: '16px', borderTop: '1px solid var(--line-soft)' }}>
                <div>
                  <div style={{ fontSize: '11px', color: 'var(--ink-3)', textTransform: 'uppercase' }}>Transfer Starting Rate</div>
                  <div className="mono" style={{ fontSize: '24px', fontWeight: 800, color: 'var(--brand)' }}>
                    From $146 / month <span style={{ fontSize: '13px', fontWeight: 400, color: 'var(--ink-2)' }}>(Doctor + Meds + Supplies)</span>
                  </div>
                </div>

                <a
                  href={START_URL}
                  className="btn btn-primary"
                  style={{
                    backgroundColor: 'var(--brand)',
                    color: '#FFFFFF',
                    padding: '12px 24px',
                    fontSize: '15px',
                    fontWeight: 700,
                    borderRadius: '10px',
                    textDecoration: 'none',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                  }}
                >
                  <span>Switch &amp; Maintain My Dose</span>
                  <span>➔</span>
                </a>
              </div>
            </div>

            <Image src="/assets/compounded-semaglutide-after-hims-ro-featured.png" alt="Telehealth app discontinued service with alternative pathway forward" width={1024} height={1024} style={{ width: '100%', borderRadius: 16, marginBottom: 40, border: '1px solid var(--line-soft)', background: '#111', height: "auto"}} priority={true} />

            <div style={{ background: '#FEF2F2', border: '2px solid #DC2626', borderRadius: 12, padding: '24px 32px', margin: '0 0 40px' }}>
              <p style={{ margin: 0, fontWeight: 700, color: '#DC2626', fontSize: 18 }}>If you were getting compounded semaglutide through Hims or Ro — your supply is ending.</p>
              <p style={{ margin: '12px 0 0', fontSize: 16, color: '#7F1D1D' }}>Both platforms have stopped or are actively phasing out compounded GLP-1 medications following FDA enforcement action. Calibrate has pivoted to brand-name only. If you do not have a new provider lined up, you risk a gap in therapy — which means potential weight regain and metabolic setback. This guide shows you exactly what happened and where to go next.</p>
            </div>

            <h2 className="serif" style={{ fontSize: 32, marginTop: 48, marginBottom: 24, color: 'var(--ink)' }}>What Happened</h2>
            <p>In February 2025, the FDA declared the semaglutide shortage officially resolved. This ended the legal pathway that allowed 503B outsourcing facilities to produce bulk compounded semaglutide as "essentially a copy" of the brand-name drug. The FDA followed with enforcement actions throughout late 2025 and into 2026.</p>
            <p>The result:</p>
            <ul>
              <li style={{ marginBottom: 12 }}><strong>Hims &amp; Hers</strong> — Stopped selling compounded semaglutide. Pivoted to brand-name Wegovy and oral weight loss alternatives.</li>
              <li style={{ marginBottom: 12 }}><strong>Ro (Ro Body)</strong> — Discontinued compounded GLP-1 programs. Now offers brand-name only with insurance navigation.</li>
              <li style={{ marginBottom: 12 }}><strong>Calibrate</strong> — Pivoted entirely to brand-name medications (Wegovy, Zepbound) with insurance support.</li>
              <li style={{ marginBottom: 12 }}><strong>503A pharmacies</strong> — Still legally permitted to compound semaglutide for individual patients with documented clinical need (e.g., allergy to an inactive ingredient in the brand-name product, specific dose requirements not available in FDA-approved formulations).</li>
            </ul>

            {/* CRO Enhancement 2: 503A Pharmacy Safety Reassurance Card */}
            <div
              style={{
                backgroundColor: '#FFFFFF',
                border: '2px solid #16A34A',
                borderRadius: '16px',
                padding: '30px 24px',
                margin: '40px 0',
                boxShadow: '0 8px 24px rgba(22, 163, 74, 0.08)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
                <span style={{ fontSize: '22px' }}>🛡️</span>
                <span
                  style={{
                    backgroundColor: '#DCFCE7',
                    color: '#15803D',
                    fontSize: '11px',
                    fontWeight: 700,
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    padding: '4px 10px',
                    borderRadius: '999px',
                  }}
                >
                  REGULATORY RIGOR &amp; PATIENT SAFETY
                </span>
              </div>

              <h3 className="serif" style={{ fontSize: '26px', color: 'var(--ink)', margin: '0 0 10px', lineHeight: 1.25 }}>
                The 503A Pharmacy Safety Standard: Why Your Supply Is Protected
              </h3>

              <p style={{ fontSize: '15px', color: 'var(--ink-2)', lineHeight: 1.6, margin: '0 0 18px' }}>
                Mass-production 503B outsourcing facilities were penalized for manufacturing speculative commercial batches without individual patient prescriptions. In contrast, <strong>503A compounding pharmacies</strong> operate under distinct, constitutionally protected state and federal statutes:
              </p>

              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                  gap: '14px',
                  marginBottom: '20px',
                  fontSize: '13px',
                }}
              >
                <div style={{ backgroundColor: '#F0FDF4', border: '1px solid #BBF7D0', padding: '14px', borderRadius: '10px' }}>
                  <div style={{ fontWeight: 700, color: '#15803D', marginBottom: '4px' }}>
                    ⚖️ Section 503A FD&amp;C Act Compliance
                  </div>
                  <div style={{ color: 'var(--ink-2)', lineHeight: 1.4 }}>
                    Every prescription is written by a US-licensed doctor for an identified patient, fulfilling strict individualized medical necessity standards.
                  </div>
                </div>

                <div style={{ backgroundColor: '#F0FDF4', border: '1px solid #BBF7D0', padding: '14px', borderRadius: '10px' }}>
                  <div style={{ fontWeight: 700, color: '#15803D', marginBottom: '4px' }}>
                    🔬 USP &lt;797&gt; Sterile Cleanrooms
                  </div>
                  <div style={{ color: 'var(--ink-2)', lineHeight: 1.4 }}>
                    Compounded in ISO Class 5 laminar airflow biological hoods with routine endotoxin and bioburden sterility testing.
                  </div>
                </div>

                <div style={{ backgroundColor: '#F0FDF4', border: '1px solid #BBF7D0', padding: '14px', borderRadius: '10px' }}>
                  <div style={{ fontWeight: 700, color: '#15803D', marginBottom: '4px' }}>
                    📋 HPLC Certificate of Analysis
                  </div>
                  <div style={{ color: 'var(--ink-2)', lineHeight: 1.4 }}>
                    Each peptide batch undergoes high-performance liquid chromatography verifying 99%+ chemical purity and potency.
                  </div>
                </div>

                <div style={{ backgroundColor: '#F0FDF4', border: '1px solid #BBF7D0', padding: '14px', borderRadius: '10px' }}>
                  <div style={{ fontWeight: 700, color: '#15803D', marginBottom: '4px' }}>
                    🏛️ State Board of Pharmacy Licensing
                  </div>
                  <div style={{ color: 'var(--ink-2)', lineHeight: 1.4 }}>
                    Fully licensed and in good standing across all 50 state pharmacy boards, ensuring zero unvetted overseas sourcing.
                  </div>
                </div>
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px' }}>
                <span style={{ fontSize: '13px', color: 'var(--ink-2)' }}>
                  🔒 100% Quality-Verified · Cold-Chain Overnight Shipped · Zero Fillers
                </span>
                <a
                  href={START_URL}
                  style={{ fontSize: '13px', color: '#15803D', fontWeight: 700, textDecoration: 'underline' }}
                >
                  Verify Pharmacy Credentials &amp; Start ➔
                </a>
              </div>
            </div>

            <h2 className="serif" style={{ fontSize: 32, marginTop: 48, marginBottom: 24, color: 'var(--ink)' }}>The Critical Difference: 503B vs. 503A</h2>
            <p>Understanding this distinction is essential:</p>
            <div style={{ overflowX: 'auto', margin: '24px 0' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 15 }}>
                <thead><tr style={{ borderBottom: '2px solid var(--ink)' }}><th style={{ textAlign: 'left', padding: '12px 16px', fontWeight: 600 }}>Type</th><th style={{ textAlign: 'left', padding: '12px 16px', fontWeight: 600 }}>503B Outsourcing Facilities</th><th style={{ textAlign: 'left', padding: '12px 16px', fontWeight: 600 }}>503A Compounding Pharmacies</th></tr></thead>
                <tbody>
                  <tr style={{ borderBottom: '1px solid var(--line-soft)' }}><td style={{ padding: '12px 16px', fontWeight: 500 }}>Scale</td><td style={{ padding: '12px 16px' }}>Mass production (thousands of units)</td><td style={{ padding: '12px 16px' }}>Individual patient prescriptions</td></tr>
                  <tr style={{ borderBottom: '1px solid var(--line-soft)' }}><td style={{ padding: '12px 16px', fontWeight: 500 }}>Requires prescription?</td><td style={{ padding: '12px 16px' }}>Not always (can produce in advance)</td><td style={{ padding: '12px 16px', fontWeight: 600, color: 'green' }}>Yes — always patient-specific</td></tr>
                  <tr style={{ borderBottom: '1px solid var(--line-soft)' }}><td style={{ padding: '12px 16px', fontWeight: 500 }}>FDA action</td><td style={{ padding: '12px 16px', color: '#DC2626', fontWeight: 600 }}>Enforcement — semaglutide restricted</td><td style={{ padding: '12px 16px', color: 'green', fontWeight: 600 }}>Still operating legally</td></tr>
                  <tr><td style={{ padding: '12px 16px', fontWeight: 500 }}>Who used them</td><td style={{ padding: '12px 16px' }}>Hims, Ro, and other large platforms</td><td style={{ padding: '12px 16px' }}>Smaller telehealth providers, independent clinicians</td></tr>
                </tbody>
              </table>
            </div>
            <p>Hims and Ro relied on <strong>503B outsourcing facilities</strong> for their high-volume compounded semaglutide supply. When the FDA shut down that pathway, their entire compounding model collapsed. Providers that partner with <strong>503A compounding pharmacies</strong> — which produce patient-specific prescriptions — continue to operate within the current legal framework.</p>

            <div className="card" style={{ padding: 40, margin: '48px 0', textAlign: 'center', background: '#FFFDF9', borderColor: 'var(--brand)' }}>
              <h3 className="serif" style={{ fontSize: 28, marginBottom: 16, color: 'var(--ink)' }}>Switch Without Missing a Dose</h3>
              <p style={{ marginBottom: 24, fontSize: 16 }}>TelehealthFX partners with licensed 503A compounding pharmacies. Complete your intake today and your clinician can continue your current dose — no gap in therapy.</p>
              <a href={START_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-lg" style={{ display: 'inline-flex', justifyContent: 'center' }}>Start Your Evaluation <Icon.Arrow /></a>
            </div>

            <h2 className="serif" style={{ fontSize: 32, marginTop: 48, marginBottom: 24, color: 'var(--ink)' }}>Your Options Right Now</h2>

            <h3 style={{ fontSize: 24, marginTop: 32, marginBottom: 16, color: 'var(--ink)' }}>Option 1: Switch to Brand-Name (Wegovy/Ozempic)</h3>
            <ul>
              <li style={{ marginBottom: 8 }}>✅ FDA-approved, no regulatory ambiguity</li>
              <li style={{ marginBottom: 8 }}>❌ <a href="/blog/ozempic-vs-wegovy-2026/" style={{ color: 'var(--brand)', fontWeight: 500 }}>Wegovy costs $1,300+/month</a> without insurance</li>
              <li style={{ marginBottom: 8 }}>❌ Most insurers still deny coverage for weight loss indication</li>
              <li style={{ marginBottom: 8 }}>❌ Intermittent <a href="/blog/glp-1-shortage-update-may-2026/" style={{ color: 'var(--brand)', fontWeight: 500 }}>supply shortages</a> persist</li>
            </ul>

            <h3 style={{ fontSize: 24, marginTop: 32, marginBottom: 16, color: 'var(--ink)' }}>Option 2: Use Insurance Navigation Services</h3>
            <ul>
              <li style={{ marginBottom: 8 }}>✅ Some platforms (Calibrate, Ro) now help with prior authorizations and appeals</li>
              <li style={{ marginBottom: 8 }}>❌ Approval rates for weight loss indication remain low (30–50% depending on insurer)</li>
              <li style={{ marginBottom: 8 }}>❌ Process takes 2–6 weeks, during which you have no medication</li>
              <li style={{ marginBottom: 8 }}>❌ Even if approved, copays often $100–$300/month</li>
            </ul>

            <h3 style={{ fontSize: 24, marginTop: 32, marginBottom: 16, color: 'var(--ink)' }}>Option 3: Switch to a 503A-Partnered Telehealth Provider</h3>
            <ul>
              <li style={{ marginBottom: 8 }}>✅ Same compounded semaglutide, transparent pricing from $146/month</li>
              <li style={{ marginBottom: 8 }}>✅ No insurance required — <a href="/blog/hsa-fsa-glp-1-2026/" style={{ color: 'var(--brand)', fontWeight: 500 }}>HSA/FSA accepted</a></li>
              <li style={{ marginBottom: 8 }}>✅ Patient-specific prescriptions within current FDA guidelines</li>
              <li style={{ marginBottom: 8 }}>✅ No gap in therapy — <a href="/blog/same-day-glp-1-prescription-2026/" style={{ color: 'var(--brand)', fontWeight: 500 }}>same-day evaluations available</a></li>
              <li style={{ marginBottom: 8 }}>⚠️ Regulatory landscape continues to evolve — clinician oversight is critical</li>
            </ul>

            <h2 className="serif" style={{ fontSize: 32, marginTop: 48, marginBottom: 24, color: 'var(--ink)' }}>How to Switch Providers Without Losing Progress</h2>
            <p>If you are currently on a stable dose of semaglutide and need to switch providers, here is the process:</p>
            <ol>
              <li style={{ marginBottom: 16 }}><strong>Document your current dose and duration.</strong> Know your exact weekly dose (e.g., 1.0 mg, 1.7 mg, 2.4 mg) and how long you have been at that dose. Your new clinician needs this to continue seamlessly.</li>
              <li style={{ marginBottom: 16 }}><strong>Do not wait until you run out.</strong> Start the intake process with your new provider while you still have 2–4 weeks of medication remaining. This prevents a therapy gap.</li>
              <li style={{ marginBottom: 16 }}><strong>Complete the clinical intake.</strong> Your new provider will evaluate your health history, current medications, and treatment response before prescribing. See our detailed <a href="/blog/switch-glp-1-providers-2026/" style={{ color: 'var(--brand)', fontWeight: 500 }}>provider switching guide</a>.</li>
              <li style={{ marginBottom: 16 }}><strong>Continue at your current dose.</strong> Do not restart titration. A competent clinician will maintain your established dose unless there is a clinical reason to adjust.</li>
            </ol>

            <div style={{ padding: 40, margin: '48px 0', borderRadius: 20, background: 'linear-gradient(135deg, #0F172A, #1E293B)', color: '#FBF8F3', textAlign: 'center' }}>
              <div style={{ fontSize: 14, fontWeight: 700, letterSpacing: 1, textTransform: 'uppercase', color: 'var(--brand)', marginBottom: 12 }}>No Gap. No Restart. No Disruption.</div>
              <h2 className="serif" style={{ fontSize: 40, marginBottom: 20, color: '#FBF8F3' }}>Continue Your Treatment Today</h2>
              <p style={{ fontSize: 18, opacity: 0.9, marginBottom: 32, maxWidth: 500, margin: '0 auto 32px' }}>Licensed clinicians. 503A pharmacy partners. Your current dose maintained. Medication shipped to your door.</p>
              <a href={START_URL} target="_blank" rel="noopener noreferrer" className="btn btn-lg" style={{ background: '#FBF8F3', color: 'var(--ink)', display: 'inline-flex', justifyContent: 'center', width: '100%', maxWidth: 300, fontWeight: 600 }}>Switch to TelehealthFX <Icon.Arrow /></a>
              <p style={{ fontSize: 13, opacity: 0.6, marginTop: 16 }}>All-inclusive pricing from $146/mo · HSA/FSA accepted · Ships in 3–5 business days</p>
            </div>

            <h2 className="serif" style={{ fontSize: 32, marginTop: 48, marginBottom: 24, color: 'var(--ink)' }}>Frequently Asked Questions</h2>
            <h4 style={{ fontSize: 20, marginTop: 24, marginBottom: 8, color: 'var(--ink)' }}>Is compounded semaglutide still legal?</h4>
            <p style={{ marginBottom: 24 }}>Yes, through 503A compounding pharmacies that produce patient-specific prescriptions with documented clinical need. The FDA restricted 503B mass-production compounding, not all compounding. Learn more about <a href="/blog/is-compounded-semaglutide-safe-what-you-need-to-kn/" style={{ color: 'var(--brand)', fontWeight: 500 }}>compounded semaglutide safety</a>.</p>
            <h4 style={{ fontSize: 20, marginTop: 24, marginBottom: 8, color: 'var(--ink)' }}>Will I have to restart my dose from 0.25 mg?</h4>
            <p style={{ marginBottom: 24 }}>No. When switching providers with an established treatment history, your new clinician will continue your current dose. Restarting titration is only necessary if you have had a significant gap in therapy (typically 4+ weeks).</p>
            <h4 style={{ fontSize: 20, marginTop: 24, marginBottom: 8, color: 'var(--ink)' }}>How fast can I get medication after switching?</h4>
            <p style={{ marginBottom: 24 }}>With TelehealthFX, <a href="/blog/same-day-glp-1-prescription-2026/" style={{ color: 'var(--brand)', fontWeight: 500 }}>same-day clinical evaluations</a> are available. Once prescribed, medication typically ships within 3–5 business days from the compounding pharmacy.</p>
            <h4 style={{ fontSize: 20, marginTop: 24, marginBottom: 8, color: 'var(--ink)' }}>What if compounded semaglutide becomes completely unavailable?</h4>
            <p style={{ marginBottom: 24 }}>If the regulatory landscape changes further, your clinician will discuss alternative options including brand-name medications, <a href="/blog/compounded-semaglutide-vs-wegovy-2026/" style={{ color: 'var(--brand)', fontWeight: 500 }}>compounded vs brand comparison</a>, or <a href="/medications/tirzepatide/" style={{ color: 'var(--brand)', fontWeight: 500 }}>tirzepatide</a> (which has a different regulatory timeline). Having an established clinical relationship ensures continuity regardless of market changes.</p>

            <div style={{ marginTop: 80, paddingTop: 40, borderTop: '1px solid var(--line-soft)', fontSize: 14, color: 'var(--ink-3)' }}>
              <h3 className="serif" style={{ fontSize: 24, marginBottom: 24, color: 'var(--ink)' }}>References</h3>
              <ol style={{ paddingLeft: 20, display: 'flex', flexDirection: 'column', gap: 16 }}>
                <li>U.S. Food and Drug Administration. (2025). <em>FDA Drug Shortages: Semaglutide Injection Products</em>. <a href="https://www.fda.gov/drugs/drug-shortages" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--brand)', textDecoration: 'underline' }}>fda.gov/drugs/drug-shortages</a></li>
                <li>U.S. Food and Drug Administration. (2026). <em>Proposed rule: Exclusion of certain drugs from 503B bulks list</em>. Federal Register. <a href="https://www.fda.gov/drugs/human-drug-compounding" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--brand)', textDecoration: 'underline' }}>fda.gov/drugs/human-drug-compounding</a></li>
                <li>Pharmacy Times. (2026). <em>FDA proposes excluding semaglutide, tirzepatide from 503B bulks list</em>. <a href="https://www.pharmacytimes.com" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--brand)', textDecoration: 'underline' }}>pharmacytimes.com</a></li>
              </ol>
            </div>
          </div>
        </div>

        {/* Sticky Quick-Switch Bottom Bar */}
        <div
          style={{
            position: 'fixed',
            bottom: 0,
            left: 0,
            right: 0,
            backgroundColor: '#0F172A',
            color: '#FBF8F3',
            borderTop: '1px solid rgba(255,255,255,0.15)',
            padding: '12px 0',
            zIndex: 900,
            boxShadow: '0 -4px 20px rgba(0,0,0,0.15)',
          }}
        >
          <div
            className="container"
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: '12px',
              maxWidth: '900px',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <span
                style={{
                  display: 'inline-block',
                  width: '8px',
                  height: '8px',
                  backgroundColor: '#4EBE7B',
                  borderRadius: '50%',
                  boxShadow: '0 0 0 3px rgba(78, 190, 123, 0.3)',
                }}
              />
              <span style={{ fontSize: '13px' }}>
                <strong>Displaced from Hims or Ro?</strong> Maintain your current dose with zero restart. From $146/mo.
              </span>
            </div>

            <a
              href={START_URL}
              className="btn btn-primary"
              style={{
                backgroundColor: '#4EBE7B',
                color: '#0F2618',
                padding: '8px 18px',
                fontSize: '13px',
                fontWeight: 700,
                borderRadius: '8px',
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
              }}
            >
              <span>Switch in 24 Hours</span>
              <span>➔</span>
            </a>
          </div>
        </div>

        <p style={{ fontSize: 13, color: 'var(--ink-3)', marginTop: 32, paddingTop: 20, borderTop: '1px solid var(--line-soft)' }}>
          Disclaimer: Mounjaro®, Zepbound®, Ozempic®, and Wegovy® are registered trademarks of their respective owners (Eli Lilly and Company, Novo Nordisk). Telehealth FX is an independent telehealth platform and is not affiliated with, endorsed by, or sponsored by these trademark owners. Compounded medications are prepared by state-licensed compounding pharmacies pursuant to a patient-specific prescription and are not reviewed or approved by the FDA for safety or efficacy.
        </p>
      </section>
    </>
  );
}

export { BlogCompoundedAfterHimsRo };
