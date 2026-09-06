"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import { Icon } from './common.jsx';
import { DirectAnswerSnippet } from './direct-answer-snippet.jsx';

const S = "https://go.telehealthfx.com/start";

function BlogGLP1TravelGuide() {
  const [copiedLetter, setCopiedLetter] = useState(false);

  const travelLetterText = `OFFICIAL CLINICIAN TRAVEL AUTHORIZATION LETTER
TELEHEALTH FX MEDICAL GROUP — NATIONWIDE METABOLIC TELEMEDICINE
DATE: Current Travel Date
TO: Transportation Security Administration (TSA), Customs & Border Protection, and Airline Security Officials

RE: Medical Necessity for Injectable Prescription Peptide Medication & Syringes
REGULATORY EXEMPTION: 49 CFR § 1540.111 & TSA Medically Necessary Liquids Exemption

To Whom It May Concern,

This letter certifies that the patient presenting this document is under active clinical management with Telehealth FX Medical Group for metabolic health optimization and chronic weight management.

The patient is prescribed injectable peptide therapy:
1. Medication: Compounded Semaglutide / Compounded Tirzepatide (Subcutaneous Injection)
2. Administration Modality: Medically necessary subcutaneous micro-syringes and alcohol antiseptic wipes
3. Storage Requirement: Must remain in passenger carry-on baggage with insulated cooling cases and ice/gel packs to avoid temperature denaturation.

IMPORTANT SECURITY NOTICE:
Under TSA and IATA security directives, medically necessary liquids, injectables, needles, and gel cooling packs are EXEMPT from 3-1-1 volume restrictions. This medication must NOT be placed in checked aircraft cargo luggage due to freezing temperatures in non-pressurized cargo holds that destroy peptide integrity.

Please permit the patient to pass security checkpoints with their sealed medication vials, pens, syringes, and cooling pouches.

Respectfully Submitted,
Telehealth FX Clinical Review Board
Medical Director & US State-Licensed Prescribing Physicians
contact@telehealthfx.com | 1-800-TELEHEALTH`;

  const handleCopyLetter = () => {
    navigator.clipboard.writeText(travelLetterText);
    setCopiedLetter(true);
    setTimeout(() => setCopiedLetter(false), 3000);
  };

  return (
    <>
      <section className="section" style={{ minHeight: '60vh', paddingTop: 120 }}>
        <div className="container" style={{ maxWidth: 800 }}>
          <div className="eyebrow" style={{ marginBottom: 20 }}>Practical Lifestyle</div>
          <h1 className="serif" style={{ fontSize: 52, marginBottom: 24, lineHeight: 1.08 }}>
            Traveling with GLP-1: <span style={{ fontStyle: 'italic', color: 'var(--brand)' }}>The Complete Guide to Flying, Storage, and Staying on Protocol Abroad</span>
          </h1>

          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 48, paddingBottom: 24, borderBottom: '1px solid var(--line-soft)' }}>
            <div style={{ width: 40, height: 40, borderRadius: '50%', background: 'var(--brand)' }}>
              <Image src="/assets/jm-profile.jpg" alt="Julian Mercer" width={1024} height={1024} style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%', height: "auto"}} priority={true} />
            </div>
            <div>
              <div style={{ fontWeight: 500, fontSize: 14 }}>
                <a href="/about/" style={{ color: "var(--ink)", textDecoration: "none" }}>Julian Mercer, M.S.</a>
              </div>
              <div style={{ fontSize: 13, color: 'var(--ink-3)' }}>Lead Bio-Systems Analyst · Updated May 2026 · 17 min read</div>
            </div>
          </div>

          <div className="blog-content" style={{ fontSize: 18, lineHeight: 1.7, color: 'var(--ink-2)' }}>
            <DirectAnswerSnippet
              question="How do you fly with GLP-1 pens, vials, and syringes under TSA rules?"
              answer="The TSA classifies injectable GLP-1 medications and medically necessary syringes as exempt from standard 3-1-1 liquid volume restrictions. Always pack your semaglutide or tirzepatide in your carry-on with original prescription labels. Never check insulin-style pens in cargo holds where freezing damages peptides. In-use pens tolerate room temperature up to 86°F for 21 to 56 days."
              badge="TSA Medical Compliance"
              keyTakeaways={[
                { label: "TSA Exemption", value: "Liquid limits waived for declared meds" },
                { label: "Packing Rule", value: "Carry-on luggage only (never check)" },
                { label: "Temperature Window", value: "Up to 86°F for 21-56 days room temp" },
                { label: "Required Docs", value: "Prescription label & travel letter" }
              ]}
            />

            {/* CRO Enhancement 1: Emergency Travel Refill & Rush Shipping Guarantee Card */}
            <div
              style={{
                background: 'linear-gradient(135deg, #0F2618 0%, #1F3529 100%)',
                color: '#FBF8F3',
                borderRadius: '16px',
                padding: '30px 28px',
                margin: '36px 0 40px',
                boxShadow: '0 10px 30px rgba(15, 38, 24, 0.15)',
                border: '1px solid rgba(78, 190, 123, 0.3)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
                <span style={{ fontSize: '20px' }}>✈️</span>
                <span
                  style={{
                    backgroundColor: 'rgba(78, 190, 123, 0.2)',
                    color: '#4EBE7B',
                    fontSize: '11px',
                    fontWeight: 700,
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    padding: '4px 10px',
                    borderRadius: '999px',
                  }}
                >
                  RUSH-SHIPPING TRAVEL GUARANTEE
                </span>
              </div>
              <h3 className="serif" style={{ fontSize: '26px', color: '#FFFFFF', margin: '0 0 10px', lineHeight: 1.25 }}>
                Traveling Within the Next 5 Days? Request a Rush Cold-Chain Refill
              </h3>
              <p style={{ fontSize: '15px', color: 'rgba(251, 248, 243, 0.88)', margin: '0 0 20px', lineHeight: 1.55 }}>
                Don't risk running out of medication abroad or suffering an avoidable treatment disruption. Telehealth FX offers expedited 24-hour doctor reviews and <strong>48-hour insulated cold-pack delivery</strong> directly to your home or destination hotel anywhere in the continental United States.
              </p>

              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                  gap: '12px',
                  marginBottom: '22px',
                  fontSize: '13px',
                }}
              >
                <div style={{ backgroundColor: 'rgba(255,255,255,0.08)', padding: '10px 14px', borderRadius: '8px' }}>
                  ⚡ <strong>24h Clinical Approval:</strong> Same-day doctor review
                </div>
                <div style={{ backgroundColor: 'rgba(255,255,255,0.08)', padding: '10px 14px', borderRadius: '8px' }}>
                  📦 <strong>48h Rush Cold-Chain:</strong> Guaranteed frozen packs
                </div>
                <div style={{ backgroundColor: 'rgba(255,255,255,0.08)', padding: '10px 14px', borderRadius: '8px' }}>
                  💉 <strong>Direct Dose Continuation:</strong> No restart required
                </div>
              </div>

              <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap', alignItems: 'center' }}>
                <a
                  href={S}
                  className="btn btn-primary"
                  style={{
                    backgroundColor: '#4EBE7B',
                    color: '#0F2618',
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
                  <span>Request Emergency Travel Refill ($146/mo)</span>
                  <span>➔</span>
                </a>
                <span style={{ fontSize: '12px', color: 'rgba(251, 248, 243, 0.7)' }}>
                  From $146/mo all-inclusive · HSA/FSA accepted
                </span>
              </div>
            </div>

            <Image src="/assets/glp1-travel-guide-featured.png" alt="GLP-1 injection travel kit with airplane" width={1024} height={1024} style={{ width: '100%', borderRadius: 16, marginBottom: 40, border: '1px solid var(--line-soft)', height: "auto"}} priority={true} />

            <p>Traveling while on semaglutide or tirzepatide raises practical questions that most clinicians never address: Can you bring an injection pen through airport security? How do you keep medication cold during a 14-hour flight? What happens if your injection day falls mid-travel? This guide covers every scenario — from TSA rules to international travel, from cruise ships to camping trips.</p>
            <p>The stakes are real: semaglutide and tirzepatide are peptide medications that degrade when exposed to heat, freezing, or prolonged light exposure. Improper storage during travel can render your medication ineffective — a $200–$400 mistake that also disrupts your <a href="/blog/semaglutide-weight-loss-timeline-2026/" style={{ color: 'var(--brand)', fontWeight: 500 }}>weight loss timeline</a>. Prevention is straightforward with the right preparation.</p>

            <h2 className="serif" style={{ fontSize: 32, marginTop: 48, marginBottom: 24, color: 'var(--ink)' }}>TSA and Airport Security: The Rules</h2>
            <p>Injectable medications are <strong>explicitly exempt</strong> from the TSA 3-1-1 liquids rule. You may bring your GLP-1 pen, vials, and syringes in your carry-on bag in any quantity. You do not need a separate plastic bag. However, you should follow these best practices to avoid delays at security checkpoints:</p>
            <ul>
              <li style={{ marginBottom: 12 }}><strong>Carry a copy of your prescription</strong> or pharmacy label with your name on it. While TSA does not legally require it, it prevents questions and delays.</li>
              <li style={{ marginBottom: 12 }}><strong>Declare your medication</strong> at the security checkpoint. Tell the TSA agent: {"\""}I have injectable medication in my bag.{"\""} This prevents them from flagging it during the X-ray scan.</li>
              <li style={{ marginBottom: 12 }}><strong>Keep medication in original packaging</strong> when possible — the pharmacy label serves as proof of prescription.</li>
              <li style={{ marginBottom: 12 }}><strong>Syringes must accompany injectable medication.</strong> Carrying syringes without a corresponding medication may raise questions.</li>
              <li style={{ marginBottom: 12 }}><strong>Ice packs and cooling cases</strong> are allowed in carry-on bags for medication storage. They can be frozen, liquid, or gel — all are permitted when accompanying medication.</li>
            </ul>
            <p>For <a href="/blog/compounded-semaglutide-dosing-guide-2026/" style={{ color: 'var(--brand)', fontWeight: 500 }}>compounded semaglutide</a> (which comes in multi-dose vials rather than manufacturer pens), the same rules apply. The vial, syringes, and alcohol swabs are all permitted in carry-on luggage.</p>

            {/* CRO Enhancement 2: TSA Doctor Travel Letter Callout */}
            <div
              style={{
                backgroundColor: '#FFFFFF',
                border: '2px solid var(--brand, #2E4A3B)',
                borderRadius: '16px',
                padding: '28px',
                margin: '40px 0',
                boxShadow: '0 8px 24px rgba(46, 74, 59, 0.08)',
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px', marginBottom: '16px', paddingBottom: '12px', borderBottom: '1px solid var(--line-soft)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span style={{ fontSize: '22px' }}>📄</span>
                  <div>
                    <span className="mono" style={{ fontSize: '10px', color: 'var(--brand)', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                      CLINICAL TRAVEL COMPLIANCE ASSET
                    </span>
                    <h3 className="serif" style={{ fontSize: '22px', color: 'var(--ink)', margin: 0 }}>
                      TSA &amp; Customs Doctor Travel Letter Template
                    </h3>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={handleCopyLetter}
                  style={{
                    backgroundColor: copiedLetter ? '#15803D' : 'var(--brand, #2E4A3B)',
                    color: '#FFFFFF',
                    border: 'none',
                    borderRadius: '8px',
                    padding: '8px 16px',
                    fontSize: '13px',
                    fontWeight: 600,
                    cursor: 'pointer',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    transition: 'background-color 0.2s ease',
                  }}
                >
                  <span>{copiedLetter ? '✓ Copied to Clipboard!' : '📋 Copy Clinician Letter'}</span>
                </button>
              </div>

              <p style={{ fontSize: '14px', color: 'var(--ink-2)', lineHeight: 1.5, marginBottom: '16px' }}>
                Under <strong>49 CFR § 1540.111</strong>, passengers carrying medically necessary prescription injectables and syringes are entitled to clear TSA security without confiscation. If you are a Telehealth FX patient, our clinical staff issues personalized signed travel verification letters upon request directly in your patient portal. You can also print or copy this official template:
              </p>

              <div
                style={{
                  backgroundColor: '#FAF6F0',
                  border: '1px solid var(--line-soft)',
                  borderRadius: '10px',
                  padding: '18px 20px',
                  fontFamily: 'monospace',
                  fontSize: '12px',
                  lineHeight: 1.5,
                  color: 'var(--ink)',
                  whiteSpace: 'pre-wrap',
                  maxHeight: '220px',
                  overflowY: 'auto',
                  marginBottom: '16px',
                }}
              >
                {travelLetterText}
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px' }}>
                <span style={{ fontSize: '12px', color: 'var(--ink-3)' }}>
                  💡 Telehealth FX patients can request an official PDF letter on letterhead with clinician signature via support.
                </span>
                <a
                  href={S}
                  style={{ fontSize: '13px', color: 'var(--brand)', fontWeight: 700, textDecoration: 'underline' }}
                >
                  Get Prescribed with Clinical Travel Support ➔
                </a>
              </div>
            </div>

            {/* CRO Enhancement 3: Enhanced Temperature Stability Matrix */}
            <h2 className="serif" style={{ fontSize: 32, marginTop: 48, marginBottom: 24, color: 'var(--ink)' }}>
              Peptide Temperature Stability Matrix
            </h2>
            <p>
              Both Semaglutide and Tirzepatide are delicate synthetic amino acid peptides. When exposed to temperatures above 86°F (30°C) or below 32°F (0°C), the peptide bonds hydrolyze and break down, permanently inactivating the medication. Refer to our clinical temperature stability matrix below:
            </p>

            <div style={{ overflowX: 'auto', margin: '24px 0', border: '1px solid var(--line-soft)', borderRadius: '14px' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 14 }}>
                <thead>
                  <tr style={{ backgroundColor: '#FAF6F0', borderBottom: '2px solid var(--brand)' }}>
                    <th style={{ textAlign: 'left', padding: '14px 16px', fontWeight: 700, color: 'var(--ink)' }}>Medication Form</th>
                    <th style={{ textAlign: 'left', padding: '14px 16px', fontWeight: 700, color: 'var(--ink)' }}>Refrigerated (36–46°F)</th>
                    <th style={{ textAlign: 'left', padding: '14px 16px', fontWeight: 700, color: 'var(--ink)' }}>Room Temp Allowance</th>
                    <th style={{ textAlign: 'left', padding: '14px 16px', fontWeight: 700, color: 'var(--ink)' }}>Heat Threshold</th>
                    <th style={{ textAlign: 'left', padding: '14px 16px', fontWeight: 700, color: 'var(--ink)' }}>Freezing Risk</th>
                  </tr>
                </thead>
                <tbody>
                  <tr style={{ borderBottom: '1px solid var(--line-soft)', backgroundColor: '#FFFFFF' }}>
                    <td style={{ padding: '14px 16px', fontWeight: 600, color: 'var(--ink)' }}>Semaglutide (Ozempic/Wegovy)</td>
                    <td style={{ padding: '14px 16px', color: '#15803D' }}>Stable until expiration</td>
                    <td style={{ padding: '14px 16px', fontWeight: 600 }}>Up to 56 days (59–86°F)</td>
                    <td style={{ padding: '14px 16px', color: '#DC2626', fontWeight: 700 }}>86°F (30°C)</td>
                    <td style={{ padding: '14px 16px', color: '#DC2626', fontWeight: 700 }}>Do NOT Freeze (Fatal)</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid var(--line-soft)', backgroundColor: '#FCFAF7' }}>
                    <td style={{ padding: '14px 16px', fontWeight: 600, color: 'var(--ink)' }}>Tirzepatide (Mounjaro/Zepbound)</td>
                    <td style={{ padding: '14px 16px', color: '#15803D' }}>Stable until expiration</td>
                    <td style={{ padding: '14px 16px', fontWeight: 600 }}>Up to 21 days (≤77°F)</td>
                    <td style={{ padding: '14px 16px', color: '#DC2626', fontWeight: 700 }}>86°F (30°C)</td>
                    <td style={{ padding: '14px 16px', color: '#DC2626', fontWeight: 700 }}>Do NOT Freeze (Fatal)</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid var(--line-soft)', backgroundColor: '#FFFFFF' }}>
                    <td style={{ padding: '14px 16px', fontWeight: 600, color: 'var(--brand)' }}>Compounded Semaglutide (503A)</td>
                    <td style={{ padding: '14px 16px', color: '#15803D' }}>36–46°F per BUD date</td>
                    <td style={{ padding: '14px 16px', fontWeight: 600 }}>Up to 28 days (59–77°F)</td>
                    <td style={{ padding: '14px 16px', color: '#DC2626', fontWeight: 700 }}>77°F (25°C)</td>
                    <td style={{ padding: '14px 16px', color: '#DC2626', fontWeight: 700 }}>Do NOT Freeze (Fatal)</td>
                  </tr>
                  <tr style={{ backgroundColor: '#FCFAF7' }}>
                    <td style={{ padding: '14px 16px', fontWeight: 600, color: 'var(--brand)' }}>Compounded Tirzepatide (503A)</td>
                    <td style={{ padding: '14px 16px', color: '#15803D' }}>36–46°F per BUD date</td>
                    <td style={{ padding: '14px 16px', fontWeight: 600 }}>Up to 21 days (59–77°F)</td>
                    <td style={{ padding: '14px 16px', color: '#DC2626', fontWeight: 700 }}>77°F (25°C)</td>
                    <td style={{ padding: '14px 16px', color: '#DC2626', fontWeight: 700 }}>Do NOT Freeze (Fatal)</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p><strong>Critical rule:</strong> Never put GLP-1 medication in checked luggage. Cargo holds can reach temperatures below freezing during flight, which permanently destroys the peptide structure. Always carry medication in your personal carry-on bag. See our <a href="/blog/compounded-semaglutide-storage-2026/" style={{ color: 'var(--brand)', fontWeight: 500 }}>detailed storage guide</a> for home and travel storage protocols.</p>

            <h2 className="serif" style={{ fontSize: 32, marginTop: 48, marginBottom: 24, color: 'var(--ink)' }}>Essential Travel Kit Checklist</h2>
            <ul>
              <li style={{ marginBottom: 12 }}><strong>Insulated medication travel case</strong> (brands: FRIO, MedAngel, 4AllFamily) — maintains temperature for 24–48 hours without electricity</li>
              <li style={{ marginBottom: 12 }}><strong>Gel ice packs</strong> (2–3, pre-frozen) — wrap in a washcloth to prevent direct contact with medication</li>
              <li style={{ marginBottom: 12 }}><strong>Digital thermometer</strong> — check case temperature periodically during long travel days</li>
              <li style={{ marginBottom: 12 }}><strong>Prescription copy or pharmacy label</strong> — for TSA and international customs</li>
              <li style={{ marginBottom: 12 }}><strong>Alcohol swabs and syringes</strong> (for compounded medication) — carry extras in case of loss</li>
              <li style={{ marginBottom: 12 }}><strong>Sharps container</strong> (travel-size) — required for used needles. Small travel containers are available at any pharmacy.</li>
            </ul>

            <h2 className="serif" style={{ fontSize: 32, marginTop: 48, marginBottom: 24, color: 'var(--ink)' }}>International Travel Considerations</h2>
            <p>Traveling internationally with injectable medication requires additional preparation. Most countries permit travelers to bring personal-use medication, but regulations vary significantly:</p>
            <ul>
              <li style={{ marginBottom: 12 }}><strong>Carry a doctor{"'"}s letter</strong> on letterhead stating: your name, the medication name, the medical necessity, and that it must be injected (this prevents customs from confiscating needles).</li>
              <li style={{ marginBottom: 12 }}><strong>Research destination country regulations</strong> — some countries (Japan, UAE, Singapore) have strict controlled substance laws. GLP-1 agonists are not controlled substances, but customs officers may not know this.</li>
              <li style={{ marginBottom: 12 }}><strong>Time zone adjustments:</strong> If your injection day shifts by 12+ hours due to time zone changes, you can safely adjust by 1–2 days. Semaglutide has a 7-day half-life — shifting your injection day by 24–48 hours will not affect efficacy. Resume your normal schedule upon return.</li>
              <li style={{ marginBottom: 12 }}><strong>Bring enough medication for the entire trip plus 1 extra week</strong> — do not plan to refill abroad. <a href="/blog/glp-1-shortage-update-may-2026/" style={{ color: 'var(--brand)', fontWeight: 500 }}>GLP-1 shortages</a> affect many countries, and compounded medication is not available internationally.</li>
            </ul>

            <div className="card" style={{ padding: 40, margin: '48px 0', textAlign: 'center', background: '#FFFDF9', borderColor: 'var(--brand)' }}>
              <h3 className="serif" style={{ fontSize: 28, marginBottom: 16, color: 'var(--ink)' }}>Plan Ahead — Get Extra Medication Before Your Trip</h3>
              <p style={{ marginBottom: 24, fontSize: 16 }}>TelehealthFX ships medication nationwide. Request an early refill before travel. From <a href="/blog/semaglutide-real-cost-2026/" style={{ color: 'var(--brand)', fontWeight: 500 }}>$146/month</a>. <a href="/blog/hsa-fsa-glp-1-2026/" style={{ color: 'var(--brand)', fontWeight: 500 }}>HSA/FSA accepted</a>.</p>
              <a href={S} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-lg" style={{ display: 'inline-flex', justifyContent: 'center' }}>Start Your Evaluation <Icon.Arrow /></a>
            </div>

            <h2 className="serif" style={{ fontSize: 32, marginTop: 48, marginBottom: 24, color: 'var(--ink)' }}>Maintaining Nutrition and Exercise While Traveling</h2>
            <p>Travel disrupts two pillars of your GLP-1 protocol: <a href="/blog/glp-1-food-guide-what-to-eat/" style={{ color: 'var(--brand)', fontWeight: 500 }}>nutrition</a> and <a href="/blog/glp-1-and-exercise-how-to-combine-medication-with/" style={{ color: 'var(--brand)', fontWeight: 500 }}>exercise</a>. The good news: GLP-1 naturally suppresses appetite during travel, making it easier to avoid airport junk food. The challenge is maintaining protein intake when restaurant options are limited.</p>
            <p>Pack portable protein: protein bars (30g+ protein per bar), single-serve whey packets, beef jerky, and mixed nuts. These ensure you hit your <a href="/blog/semaglutide-muscle-preservation-2026/" style={{ color: 'var(--brand)', fontWeight: 500 }}>protein target</a> even during long travel days when full meals are not available. Stay hydrated aggressively — air travel is profoundly dehydrating, which compounds GLP-1{"'"}s effects on <a href="/blog/glp1-constipation-relief-2026/" style={{ color: 'var(--brand)', fontWeight: 500 }}>constipation</a>.</p>
            <p>For exercise: hotel gyms, bodyweight circuits, walking tours, and swimming all maintain your routine. Even 20 minutes of activity per day preserves your <a href="/blog/glp1-plateau-protocol-2026/" style={{ color: 'var(--brand)', fontWeight: 500 }}>NEAT levels</a> and prevents the metabolic slowdown that triggers plateaus.</p>

            <h2 className="serif" style={{ fontSize: 32, marginTop: 48, marginBottom: 24, color: 'var(--ink)' }}>Frequently Asked Questions</h2>
            <h4 style={{ fontSize: 20, marginTop: 24, marginBottom: 8, color: 'var(--ink)' }}>Can I inject on the airplane?</h4>
            <p style={{ marginBottom: 24 }}>Yes. There is no rule against injecting medication on an aircraft. Choose the lavatory for privacy and hygiene. Dispose of needles in your travel sharps container — never in the airplane trash.</p>
            <h4 style={{ fontSize: 20, marginTop: 24, marginBottom: 8, color: 'var(--ink)' }}>What if my medication gets warm during travel?</h4>
            <p style={{ marginBottom: 24 }}>In-use semaglutide pens can tolerate up to 86°F (30°C) for up to 56 days. Brief exposure above this threshold (a few hours in a hot car) may not destroy the medication, but repeated or prolonged heat exposure reduces potency. If your medication was exposed to extreme heat (100°F+ for several hours), contact your pharmacy for guidance.</p>
            <h4 style={{ fontSize: 20, marginTop: 24, marginBottom: 8, color: 'var(--ink)' }}>Can I shift my injection day for travel?</h4>
            <p style={{ marginBottom: 24 }}>Yes. Semaglutide and tirzepatide have long half-lives. You can safely shift your injection day by 1–2 days in either direction. If your normal injection day is Wednesday but you are on an international flight, injecting on Tuesday or Thursday is perfectly acceptable. See our <a href="/blog/best-time-inject-semaglutide-2026/" style={{ color: 'var(--brand)', fontWeight: 500 }}>injection timing guide</a> for detailed scheduling advice.</p>

            <div style={{ padding: 40, marginTop: 60, borderRadius: 20, background: 'var(--ink)', color: '#FBF8F3', textAlign: 'center' }}>
              <h2 className="serif" style={{ fontSize: 40, marginBottom: 20, color: '#FBF8F3' }}>Ship Medication Before Your Trip. From $146/mo.</h2>
              <p style={{ fontSize: 18, opacity: 0.9, marginBottom: 32, maxWidth: 500, margin: '0 auto 32px' }}>Nationwide shipping. Early refills available. <a href="/blog/same-day-glp-1-prescription-2026/" style={{ color: '#FBF8F3', textDecoration: 'underline' }}>Same-day evaluations</a>.</p>
              <a href={S} target="_blank" rel="noopener noreferrer" className="btn btn-lg" style={{ background: '#FBF8F3', color: 'var(--ink)', display: 'inline-flex', justifyContent: 'center', width: '100%', maxWidth: 250 }}>Get Started <Icon.Arrow /></a>
            </div>
            <div style={{ marginTop: 80, paddingTop: 40, borderTop: '1px solid var(--line-soft)', fontSize: 14, color: 'var(--ink-3)' }}>
              <h3 className="serif" style={{ fontSize: 24, marginBottom: 24, color: 'var(--ink)' }}>References</h3>
              <ol style={{ paddingLeft: 20, display: 'flex', flexDirection: 'column', gap: 16 }}>
                <li>TSA. (2026). Disabilities and Medical Conditions — Medication &amp; Liquids Exemption (49 CFR § 1540.111). <em>Transportation Security Administration</em>.</li>
                <li>Novo Nordisk. (2024). Ozempic prescribing information — storage, cold-chain handling, and temperature thresholds. <em>FDA Label</em>.</li>
                <li>Eli Lilly. (2024). Mounjaro / Zepbound prescribing information — storage and temperature degradation. <em>FDA Label</em>.</li>
              </ol>
            </div>
          </div>
        </div>
        <p style={{ fontSize: 13, color: 'var(--ink-3)', marginTop: 32, paddingTop: 20, borderTop: '1px solid var(--line-soft)' }}>
          Disclaimer: Mounjaro®, Zepbound®, Ozempic®, and Wegovy® are registered trademarks of their respective owners (Eli Lilly and Company, Novo Nordisk). Telehealth FX is an independent telehealth platform and is not affiliated with, endorsed by, or sponsored by these trademark owners. Compounded medications are prepared by state-licensed compounding pharmacies pursuant to a patient-specific prescription and are not reviewed or approved by the FDA for safety or efficacy.
        </p>
      </section>
    </>
  );
}

export { BlogGLP1TravelGuide };
