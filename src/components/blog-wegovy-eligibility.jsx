"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import { Icon } from './common.jsx';

const START_URL = "https://go.telehealthfx.com/start";

function BmiCalculator() {
  const [unit, setUnit] = useState('imperial');
  const [ft, setFt] = useState('');
  const [inVal, setInVal] = useState('');
  const [lbs, setLbs] = useState('');
  const [cm, setCm] = useState('');
  const [kg, setKg] = useState('');
  const [bmi, setBmi] = useState(null);
  const [category, setCategory] = useState('');
  const [eligibility, setEligibility] = useState('');

  const calculateBmi = () => {
    let calculatedBmi = 0;
    if (unit === 'imperial') {
      const totalInches = (parseFloat(ft) || 0) * 12 + (parseFloat(inVal) || 0);
      const weightLbs = parseFloat(lbs) || 0;
      if (totalInches > 0 && weightLbs > 0) {
        calculatedBmi = (weightLbs / (totalInches * totalInches)) * 703;
      }
    } else {
      const heightM = (parseFloat(cm) || 0) / 100;
      const weightKg = parseFloat(kg) || 0;
      if (heightM > 0 && weightKg > 0) {
        calculatedBmi = weightKg / (heightM * heightM);
      }
    }

    if (calculatedBmi > 0) {
      const val = calculatedBmi.toFixed(1);
      setBmi(val);
      if (calculatedBmi >= 30) {
        setCategory('Obesity');
        setEligibility('Your BMI meets the FDA criteria for Wegovy — no additional condition required.');
      } else if (calculatedBmi >= 27) {
        setCategory('Overweight');
        setEligibility('You may qualify if you also have at least one weight-related condition (see the list below).');
      } else if (calculatedBmi >= 25) {
        setCategory('Overweight');
        setEligibility('Your BMI is below the 27 threshold. You generally do not meet the FDA criteria for Wegovy.');
      } else if (calculatedBmi >= 18.5) {
        setCategory('Healthy Weight');
        setEligibility('Your BMI is below the eligibility threshold for Wegovy.');
      } else {
        setCategory('Underweight');
        setEligibility('Your BMI is below the eligibility threshold for Wegovy.');
      }
    } else {
      setBmi(null);
      setCategory('');
      setEligibility('');
    }
  };

  const inputStyle = {
    width: '100%',
    padding: '12px 16px',
    borderRadius: 8,
    border: '1px solid var(--line)',
    background: 'var(--bg)',
    fontSize: 16,
    fontFamily: 'var(--sans)',
    color: 'var(--ink)',
    transition: 'border-color .2s ease',
    outline: 'none',
  };

  const labelStyle = {
    display: 'block',
    fontSize: 13,
    fontWeight: 500,
    marginBottom: 6,
    color: 'var(--ink-3)',
    letterSpacing: '0.02em',
  };

  return (
    <div style={{
      background: 'var(--bg-card)',
      border: '1px solid var(--line-soft)',
      padding: '32px',
      borderRadius: 16,
      margin: '40px 0',
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20 }}>
        <div style={{
          width: 40, height: 40, borderRadius: 10,
          background: 'rgba(46,74,59,0.08)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: 20,
        }}>⚖️</div>
        <div>
          <div style={{ fontWeight: 600, fontSize: 18, color: 'var(--ink)' }}>BMI Calculator</div>
          <div style={{ fontSize: 13, color: 'var(--ink-3)' }}>No data is stored — calculated in your browser only.</div>
        </div>
      </div>

      <div style={{ display: 'flex', gap: 12, marginBottom: 24 }}>
        <button
          onClick={() => { setUnit('imperial'); setBmi(null); setEligibility(''); }}
          style={{
            padding: '8px 16px', borderRadius: 999, fontSize: 13, fontWeight: 500,
            background: unit === 'imperial' ? 'var(--brand)' : 'transparent',
            color: unit === 'imperial' ? '#FBF8F3' : 'var(--ink-3)',
            border: unit === 'imperial' ? 'none' : '1px solid var(--line)',
            cursor: 'pointer', transition: 'all .2s ease',
          }}
        >Standard (ft / lb)</button>
        <button
          onClick={() => { setUnit('metric'); setBmi(null); setEligibility(''); }}
          style={{
            padding: '8px 16px', borderRadius: 999, fontSize: 13, fontWeight: 500,
            background: unit === 'metric' ? 'var(--brand)' : 'transparent',
            color: unit === 'metric' ? '#FBF8F3' : 'var(--ink-3)',
            border: unit === 'metric' ? 'none' : '1px solid var(--line)',
            cursor: 'pointer', transition: 'all .2s ease',
          }}
        >Metric (cm / kg)</button>
      </div>

      <div style={{ display: 'flex', gap: 16, marginBottom: 24, flexWrap: 'wrap' }}>
        {unit === 'imperial' ? (
          <>
            <div style={{ flex: 1, minWidth: 100 }}>
              <label style={labelStyle}>Height (ft)</label>
              <input type="number" value={ft} onChange={(e) => setFt(e.target.value)} placeholder="5" style={inputStyle} />
            </div>
            <div style={{ flex: 1, minWidth: 100 }}>
              <label style={labelStyle}>Height (in)</label>
              <input type="number" value={inVal} onChange={(e) => setInVal(e.target.value)} placeholder="10" style={inputStyle} />
            </div>
            <div style={{ flex: 1, minWidth: 100 }}>
              <label style={labelStyle}>Weight (lbs)</label>
              <input type="number" value={lbs} onChange={(e) => setLbs(e.target.value)} placeholder="200" style={inputStyle} />
            </div>
          </>
        ) : (
          <>
            <div style={{ flex: 1, minWidth: 140 }}>
              <label style={labelStyle}>Height (cm)</label>
              <input type="number" value={cm} onChange={(e) => setCm(e.target.value)} placeholder="178" style={inputStyle} />
            </div>
            <div style={{ flex: 1, minWidth: 140 }}>
              <label style={labelStyle}>Weight (kg)</label>
              <input type="number" value={kg} onChange={(e) => setKg(e.target.value)} placeholder="91" style={inputStyle} />
            </div>
          </>
        )}
      </div>

      <button onClick={calculateBmi} className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
        Calculate My BMI
      </button>

      {bmi && (
        <div style={{
          marginTop: 24,
          padding: '20px 24px',
          background: parseFloat(bmi) >= 27 ? 'rgba(46,74,59,0.06)' : 'var(--bg)',
          borderRadius: 12,
          border: `1px solid ${parseFloat(bmi) >= 27 ? 'rgba(46,74,59,0.2)' : 'var(--line-soft)'}`,
        }}>
          <div style={{ fontSize: 14, color: 'var(--ink-3)', marginBottom: 4 }}>Your result</div>
          <div style={{ fontSize: 32, fontWeight: 700, color: 'var(--ink)', fontFamily: 'var(--serif)', marginBottom: 4 }}>
            BMI {bmi}
          </div>
          <div style={{ fontSize: 15, color: 'var(--ink-2)', marginBottom: 8 }}>
            A BMI of {bmi} falls in the <strong>{category.toLowerCase()}</strong> range.
          </div>
          <div style={{
            fontSize: 14, color: parseFloat(bmi) >= 27 ? 'var(--brand)' : 'var(--ink-3)',
            fontWeight: 500,
            padding: '8px 0 0',
            borderTop: '1px solid var(--line-soft)',
            marginTop: 8,
          }}>
            {eligibility}
          </div>
        </div>
      )}
    </div>
  );
}

/* ─── CTA Block ─── */
function CtaBlock({ headline, body, buttonText, variant }) {
  if (variant === 'dark') {
    return (
      <div style={{
        padding: '48px 40px',
        marginTop: 56, marginBottom: 56,
        borderRadius: 20,
        background: 'var(--ink)',
        color: '#FBF8F3',
        textAlign: 'center',
      }}>
        <h3 className="serif" style={{ fontSize: 36, marginBottom: 16, color: '#FBF8F3', lineHeight: 1.1 }}>{headline}</h3>
        <p style={{ fontSize: 16, opacity: 0.85, marginBottom: 28, maxWidth: 520, margin: '0 auto 28px' }}>{body}</p>
        <a href={START_URL} target="_blank" rel="noopener noreferrer" className="btn btn-lg" style={{
          background: '#FBF8F3', color: 'var(--ink)',
          display: 'inline-flex', justifyContent: 'center',
        }}>{buttonText} <Icon.Arrow /></a>
      </div>
    );
  }

  if (variant === 'brand') {
    return (
      <div className="card" style={{
        padding: '48px 40px',
        margin: '56px 0',
        textAlign: 'center',
        background: 'rgba(46,74,59,0.04)',
        borderColor: 'rgba(46,74,59,0.15)',
      }}>
        <h3 className="serif" style={{ fontSize: 32, marginBottom: 16, color: 'var(--ink)', lineHeight: 1.1 }}>{headline}</h3>
        <p style={{ marginBottom: 28, fontSize: 16, color: 'var(--ink-2)', maxWidth: 520, margin: '0 auto 28px' }}>{body}</p>
        <a href={START_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-lg" style={{
          display: 'inline-flex', justifyContent: 'center',
        }}>{buttonText} <Icon.Arrow /></a>
        <p style={{ marginTop: 16, fontSize: 13, color: 'var(--ink-3)' }}>No obligation — you only move forward if a provider determines you're a candidate.</p>
      </div>
    );
  }

  /* default / accent */
  return (
    <div className="card" style={{
      padding: '40px',
      margin: '56px 0',
      textAlign: 'center',
      background: '#FFFDF9',
      borderColor: 'var(--accent-soft)',
    }}>
      <h3 className="serif" style={{ fontSize: 28, marginBottom: 16, color: 'var(--ink)', lineHeight: 1.1 }}>{headline}</h3>
      <p style={{ marginBottom: 24, fontSize: 16, color: 'var(--ink-2)' }}>{body}</p>
      <a href={START_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-lg" style={{
        display: 'inline-flex', justifyContent: 'center',
      }}>{buttonText} <Icon.Arrow /></a>
    </div>
  );
}

/* ─── Section Image ─── */
function SectionImage({ src, alt }) {
  return (
    <Image
      src={src}
      alt={alt}
      width={1024}
      height={1024}
      style={{
        width: '100%',
        borderRadius: 16,
        marginBottom: 40,
        marginTop: 8,
        border: '1px solid var(--line-soft)',
        height: 'auto',
      }}
      priority={false}
    />
  );
}

/* ─── FAQ Item ─── */
function FaqItem({ question, children }) {
  return (
    <div style={{ paddingBottom: 28, marginBottom: 28, borderBottom: '1px solid var(--line-soft)' }}>
      <h4 style={{ fontSize: 19, fontWeight: 600, marginBottom: 10, color: 'var(--ink)', lineHeight: 1.35 }}>{question}</h4>
      <p style={{ marginBottom: 0, color: 'var(--ink-2)' }}>{children}</p>
    </div>
  );
}


export function BlogWegovyEligibility() {
  return (
    <>
      <section className="section" style={{ minHeight: '60vh', paddingTop: 120 }}>
        <div className="container" style={{ maxWidth: 800 }}>

          {/* ─── Eyebrow + Title ─── */}
          <div className="eyebrow" style={{ marginBottom: 20 }}>Eligibility Guide</div>
          <h1 className="serif" style={{ fontSize: 52, marginBottom: 24, lineHeight: 1.08 }}>
            Do You Qualify for Wegovy? <span style={{ fontStyle: 'italic', color: 'var(--brand)' }}>The Complete 2026 Eligibility Guide</span>
          </h1>

          {/* ─── Byline ─── */}
          <div style={{
            display: 'flex', alignItems: 'center', gap: 12,
            marginBottom: 48, paddingBottom: 24,
            borderBottom: '1px solid var(--line-soft)',
          }}>
            <div style={{
              width: 40, height: 40, borderRadius: '50%', background: 'var(--brand)',
            }}>
              <Image
                src="/assets/jm-profile.jpg"
                alt="Julian Mercer"
                width={1024} height={1024}
                style={{ width: '100%', height: 'auto', objectFit: 'cover', borderRadius: '50%' }}
                priority={true}
              />
            </div>
            <div>
              <div style={{ fontWeight: 500, fontSize: 14 }}>
                <a href="/about" style={{ color: 'var(--ink)', textDecoration: 'none' }}>Julian Mercer, M.S.</a>
              </div>
              <div style={{ fontSize: 13, color: 'var(--ink-3)' }}>Lead Bio-Systems Analyst · Updated June 2026 · 12 min read</div>
            </div>
          </div>

          {/* ─── Article Body ─── */}
          <div className="blog-content" style={{ fontSize: 18, lineHeight: 1.7, color: 'var(--ink-2)' }}>

            {/* Featured Image */}
            <Image
              src="/assets/wegovy-eligibility-hero.png"
              alt="Person stepping onto a digital scale in a modern clinical setting"
              width={1024} height={1024}
              style={{ width: '100%', borderRadius: 16, marginBottom: 40, border: '1px solid var(--line-soft)', height: 'auto' }}
              priority={true}
            />

            {/* Intro */}
            <p><a href="/medications/semaglutide" style={{ color: 'var(--brand)', fontWeight: 500 }}>Wegovy (semaglutide 2.4 mg)</a> is FDA-approved for chronic weight management in adults with a body mass index (BMI) of 30 or higher, or a BMI of 27 or higher who also have at least one weight-related medical condition such as high blood pressure, type 2 diabetes, or high cholesterol. It is also approved for children aged 12 and older who have obesity.</p>
            <p>That{"'"}s the short answer. But "do I qualify" depends on more than a single number — your BMI category, your existing health conditions, your age, and certain safety factors all play a role. This guide walks through every part of the <a href="/blog/wegovy-fda-label" style={{ color: 'var(--brand)', fontWeight: 500 }}>FDA criteria</a> in plain language, shows you exactly what counts as a qualifying condition, and explains how to find out whether a licensed provider considers you a candidate.</p>

            {/* ─── CTA 1: Top ─── */}
            <CtaBlock
              variant="default"
              headline="Not sure if you qualify? Find out in 2 minutes."
              body="A licensed provider reviews your BMI, health history, and weight-related conditions to determine whether a GLP-1 treatment plan is appropriate for you."
              buttonText="Check Your Eligibility"
            />


            {/* ─── Quick-Answer Table ─── */}
            <h2 className="serif" style={{ fontSize: 32, marginTop: 56, marginBottom: 24, color: 'var(--ink)' }}>Quick-answer eligibility table</h2>
            <div style={{ overflowX: 'auto', margin: '24px 0', borderRadius: 12, border: '1px solid var(--line-soft)' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 15, background: 'var(--bg-card)' }}>
                <thead>
                  <tr style={{ borderBottom: '2px solid var(--ink)' }}>
                    <th style={{ textAlign: 'left', padding: '14px 20px', fontWeight: 600, fontSize: 13, letterSpacing: '0.04em', textTransform: 'uppercase', color: 'var(--ink-3)' }}>Your situation</th>
                    <th style={{ textAlign: 'left', padding: '14px 20px', fontWeight: 600, fontSize: 13, letterSpacing: '0.04em', textTransform: 'uppercase', color: 'var(--ink-3)' }}>BMI</th>
                    <th style={{ textAlign: 'left', padding: '14px 20px', fontWeight: 600, fontSize: 13, letterSpacing: '0.04em', textTransform: 'uppercase', color: 'var(--ink-3)' }}>Qualifies?</th>
                  </tr>
                </thead>
                <tbody>
                  <tr style={{ borderBottom: '1px solid var(--line-soft)' }}>
                    <td style={{ padding: '14px 20px', fontWeight: 500 }}>Adult with obesity</td>
                    <td style={{ padding: '14px 20px' }}>30 or higher</td>
                    <td style={{ padding: '14px 20px', color: 'var(--brand)', fontWeight: 600 }}>✓ Yes — BMI alone meets the criteria.</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid var(--line-soft)' }}>
                    <td style={{ padding: '14px 20px', fontWeight: 500 }}>Adult overweight + condition</td>
                    <td style={{ padding: '14px 20px' }}>27–29.9</td>
                    <td style={{ padding: '14px 20px', color: 'var(--brand)', fontWeight: 600 }}>✓ Yes — with ≥ 1 qualifying condition.</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid var(--line-soft)' }}>
                    <td style={{ padding: '14px 20px', fontWeight: 500 }}>Adult overweight, no condition</td>
                    <td style={{ padding: '14px 20px' }}>27–29.9</td>
                    <td style={{ padding: '14px 20px', color: 'var(--ink-3)' }}>✗ Generally no — condition required.</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid var(--line-soft)' }}>
                    <td style={{ padding: '14px 20px', fontWeight: 500 }}>Adult below threshold</td>
                    <td style={{ padding: '14px 20px' }}>Below 27</td>
                    <td style={{ padding: '14px 20px', color: 'var(--ink-3)' }}>✗ Generally no.</td>
                  </tr>
                  <tr>
                    <td style={{ padding: '14px 20px', fontWeight: 500 }}>Adolescent with obesity (12–17)</td>
                    <td style={{ padding: '14px 20px' }}>≥ 95th percentile</td>
                    <td style={{ padding: '14px 20px', color: 'var(--brand)', fontWeight: 600 }}>✓ May qualify (pediatric indication).</td>
                  </tr>
                </tbody>
              </table>
            </div>


            {/* ─── Find Your BMI ─── */}
            <h2 className="serif" style={{ fontSize: 32, marginTop: 56, marginBottom: 24, color: 'var(--ink)' }}>Find your BMI category</h2>
            <SectionImage src="/assets/wegovy-bmi-chart.png" alt="Healthcare provider reviewing a BMI chart on a tablet" />
            <BmiCalculator />
            <p>BMI is a screening number calculated from your height and weight. It{"'"}s the starting point for Wegovy eligibility, but it isn{"'"}t the whole picture — a licensed provider confirms your BMI and reviews your full health history before any treatment decision.</p>
            <p>For reference, the standard adult BMI categories are:</p>
            <ul style={{ paddingLeft: 24, marginBottom: 24 }}>
              <li style={{ marginBottom: 10 }}><strong>Overweight:</strong> BMI 25 to 29.9</li>
              <li style={{ marginBottom: 10 }}><strong>Obesity:</strong> BMI 30 and above</li>
            </ul>
            <p>The Wegovy eligibility line sits inside the overweight range at 27 — which is why a weight-related condition matters so much for anyone between 27 and 29.9.</p>


            {/* ─── Two Ways to Qualify ─── */}
            <h2 className="serif" style={{ fontSize: 32, marginTop: 56, marginBottom: 24, color: 'var(--ink)' }}>The two ways an adult qualifies</h2>

            <div className="card" style={{ padding: '28px 32px', marginBottom: 20 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 12 }}>
                <div style={{
                  width: 36, height: 36, borderRadius: 10,
                  background: 'var(--brand)', color: '#FBF8F3',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontWeight: 700, fontSize: 16, flexShrink: 0,
                }}>1</div>
                <h3 style={{ fontSize: 22, fontWeight: 600, color: 'var(--ink)', margin: 0 }}>A BMI of 30 or higher (obesity)</h3>
              </div>
              <p style={{ marginBottom: 0, paddingLeft: 50 }}>If your BMI is 30 or above, you meet the FDA{"'"}s weight criteria for Wegovy on BMI alone. No additional diagnosis is required. This is the most straightforward path to eligibility, and it covers the majority of adults who are prescribed the medication. For a deeper look at BMI thresholds, see our <a href="/blog/glp-1-bmi-27-30-eligibility-2026" style={{ color: 'var(--brand)', fontWeight: 500 }}>BMI 27–30 eligibility breakdown</a>.</p>
            </div>

            <div className="card" style={{ padding: '28px 32px', marginBottom: 24 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 12 }}>
                <div style={{
                  width: 36, height: 36, borderRadius: 10,
                  background: 'var(--brand)', color: '#FBF8F3',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontWeight: 700, fontSize: 16, flexShrink: 0,
                }}>2</div>
                <h3 style={{ fontSize: 22, fontWeight: 600, color: 'var(--ink)', margin: 0 }}>A BMI of 27+ with a weight-related condition</h3>
              </div>
              <p style={{ marginBottom: 0, paddingLeft: 50 }}>If your BMI falls between 27 and 29.9, you can still qualify — but the FDA criteria require that you also have at least one weight-related comorbidity. This is the single most-searched detail of the label, and it{"'"}s where the "BMI 27 with a comorbidity" rule comes from. Without a qualifying condition, a BMI in this range generally does not meet the criteria for adults.</p>
            </div>


            {/* ─── Weight-Related Conditions ─── */}
            <h2 className="serif" style={{ fontSize: 32, marginTop: 56, marginBottom: 24, color: 'var(--ink)' }}>What counts as a "weight-related condition"?</h2>
            <SectionImage src="/assets/wegovy-conditions.png" alt="Stethoscope and medical instruments on a marble surface" />
            <p>The label points to medical conditions that are commonly caused or worsened by excess weight. The conditions most often cited as qualifying include:</p>
            <ul style={{ paddingLeft: 24, marginBottom: 24 }}>
              <li style={{ marginBottom: 10 }}>High blood pressure (hypertension)</li>
              <li style={{ marginBottom: 10 }}><a href="/blog/glp-1-and-type-2-diabetes-beyond-weight-loss-2026" style={{ color: 'var(--brand)', fontWeight: 500 }}>Type 2 diabetes</a></li>
              <li style={{ marginBottom: 10 }}>High cholesterol or high triglycerides (<a href="/blog/glp1-cholesterol-lipids-2026" style={{ color: 'var(--brand)', fontWeight: 500 }}>dyslipidemia</a>)</li>
              <li style={{ marginBottom: 10 }}>Obstructive sleep apnea</li>
              <li style={{ marginBottom: 10 }}>Cardiovascular disease (such as a <a href="/blog/glp1-heart-health-select-trial-2026" style={{ color: 'var(--brand)', fontWeight: 500 }}>history of heart attack or stroke</a>)</li>
            </ul>
            <p>This list is not exhaustive, and a diagnosis on its own doesn{"'"}t guarantee eligibility — only a licensed provider can confirm whether a specific condition satisfies the criteria in your case.</p>

            <h3 style={{ fontSize: 24, fontWeight: 600, marginTop: 40, marginBottom: 20, color: 'var(--ink)' }}>"Do I qualify if I have…?"</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 32 }}>
              {[
                { q: 'Prediabetes?', a: <span>Prediabetes isn{"'"}t the same as type 2 diabetes, but it{"'"}s often part of a broader weight-related risk profile a provider will consider. See our <a href="/blog/semaglutide-prediabetes-prevention-2026" style={{ color: 'var(--brand)', fontWeight: 500 }}>prediabetes and semaglutide guide</a>.</span> },
                { q: 'PCOS?', a: <span>Polycystic ovary syndrome frequently occurs alongside qualifying conditions like insulin resistance or high blood pressure. Learn more in our <a href="/blog/glp-1-for-pcos-2026" style={{ color: 'var(--brand)', fontWeight: 500 }}>GLP-1 for PCOS guide</a>.</span> },
                { q: 'Fatty liver disease?', a: <span>Weight-related liver disease is increasingly relevant to GLP-1 eligibility. See our deep dive on <a href="/blog/glp1-fatty-liver-2026" style={{ color: 'var(--brand)', fontWeight: 500 }}>GLP-1 and fatty liver disease</a>.</span> },
                { q: 'Only a high BMI, no diagnosed conditions?', a: "If your BMI is 30 or above, you don't need a separate condition at all." },
              ].map((item, i) => (
                <div key={i} className="card" style={{ padding: '20px 24px' }}>
                  <div style={{ fontWeight: 600, fontSize: 16, color: 'var(--ink)', marginBottom: 6 }}>{item.q}</div>
                  <div style={{ fontSize: 15, color: 'var(--ink-2)', lineHeight: 1.6 }}>{item.a}</div>
                </div>
              ))}
            </div>


            {/* ─── CTA 2: Middle ─── */}
            <CtaBlock
              variant="brand"
              headline="Ready to see if you qualify?"
              body="A short online eligibility check connects you with a licensed provider who reviews your BMI, health history, and weight-related conditions."
              buttonText="Start Your Free Evaluation"
            />


            {/* ─── Pediatric ─── */}
            <h2 className="serif" style={{ fontSize: 32, marginTop: 56, marginBottom: 24, color: 'var(--ink)' }}>Pediatric eligibility (ages 12–17)</h2>
            <p>Wegovy is also FDA-approved for adolescents aged 12 and older who have obesity — defined as a BMI at or above the 95th percentile for their age and sex on the standard growth charts. The pediatric approval was supported by the STEP TEENS trial, in which once-weekly semaglutide reduced BMI in adolescents with obesity compared with placebo (Weghuber et al., 2022). Treatment decisions for minors are made by a licensed provider together with a parent or guardian, and are paired with lifestyle changes appropriate for a growing adolescent.</p>


            {/* ─── Expanded Indications ─── */}
            <h2 className="serif" style={{ fontSize: 32, marginTop: 56, marginBottom: 24, color: 'var(--ink)' }}>Beyond weight: expanded FDA indications</h2>
            <SectionImage src="/assets/wegovy-treatment.png" alt="Patient holding an auto-injector pen during a clinical consultation" />
            <p>Wegovy{"'"}s approved uses have broadened over time, and these expansions matter if you have a qualifying condition:</p>
            <ul style={{ paddingLeft: 24, marginBottom: 24 }}>
              <li style={{ marginBottom: 14 }}><strong>Cardiovascular risk reduction.</strong> Wegovy is FDA-approved to reduce the risk of major cardiovascular events — such as heart attack and stroke — in certain adults who have established cardiovascular disease together with obesity or overweight. This indication followed the <a href="/blog/glp1-heart-health-select-trial-2026" style={{ color: 'var(--brand)', fontWeight: 500 }}>SELECT trial</a>, in which semaglutide reduced major adverse cardiovascular events compared with placebo in adults with cardiovascular disease and overweight or obesity (Lincoff et al., 2023).</li>
              <li style={{ marginBottom: 14 }}><strong>Weight-related liver disease.</strong> The label has continued to expand into certain forms of <a href="/blog/glp1-fatty-liver-2026" style={{ color: 'var(--brand)', fontWeight: 500 }}>fatty liver disease</a> associated with metabolic dysfunction, supported by phase 3 trial evidence in metabolic dysfunction–associated steatohepatitis (MASH) (Sanyal et al., 2025).</li>
            </ul>
            <p>In all cases, Wegovy is intended to be used together with a reduced-calorie eating plan and increased physical activity.</p>


            {/* ─── Who Is Not a Candidate ─── */}
            <h2 className="serif" style={{ fontSize: 32, marginTop: 56, marginBottom: 24, color: 'var(--ink)' }}>Who is not a candidate</h2>
            <p>Meeting the BMI criteria does not override safety. Wegovy is generally not appropriate for people who:</p>
            <ul style={{ paddingLeft: 24, marginBottom: 24 }}>
              <li style={{ marginBottom: 10 }}>Have a personal or family history of <a href="/blog/glp1-thyroid-safety-2026" style={{ color: 'var(--brand)', fontWeight: 500 }}>medullary thyroid carcinoma (MTC)</a>, or have Multiple Endocrine Neoplasia syndrome type 2 (MEN 2)</li>
              <li style={{ marginBottom: 10 }}>Have had a serious allergic reaction to semaglutide or any ingredient in the medication</li>
              <li style={{ marginBottom: 10 }}>Are pregnant, planning to become pregnant, or <a href="/blog/glp1-breastfeeding-safety-2026" style={{ color: 'var(--brand)', fontWeight: 500 }}>breastfeeding</a></li>
            </ul>

            <div style={{
              background: 'rgba(199,125,92,0.08)',
              padding: '20px 24px',
              borderRadius: 12,
              borderLeft: '4px solid var(--accent)',
              margin: '28px 0',
            }}>
              <div style={{ fontWeight: 600, fontSize: 15, color: 'var(--ink)', marginBottom: 6 }}>⚠️ Important</div>
              <div style={{ fontSize: 15, color: 'var(--ink-2)', lineHeight: 1.6 }}>
                Semaglutide carries an FDA boxed warning about thyroid C-cell tumors based on animal studies; whether this risk applies to humans is not determined. A licensed provider reviews your complete medical history before deciding whether treatment is appropriate for you.
              </div>
            </div>


            {/* ─── Compounded vs Branded ─── */}
            <h2 className="serif" style={{ fontSize: 32, marginTop: 56, marginBottom: 24, color: 'var(--ink)' }}>"Wegovy" vs. compounded semaglutide</h2>
            <p>When people search for Wegovy eligibility, they{"'"}re usually trying to get access to semaglutide for weight management — and they quickly run into two different things:</p>
            <ul style={{ paddingLeft: 24, marginBottom: 24 }}>
              <li style={{ marginBottom: 14 }}><strong><a href="/blog/ozempic-vs-wegovy-2026" style={{ color: 'var(--brand)', fontWeight: 500 }}>Wegovy</a></strong> is the brand-name, FDA-approved product made by Novo Nordisk. Every eligibility criterion on this page is the FDA criteria for that product.</li>
              <li style={{ marginBottom: 14 }}><strong><a href="/blog/compounded-semaglutide-vs-wegovy-2026" style={{ color: 'var(--brand)', fontWeight: 500 }}>Compounded semaglutide</a></strong> is a custom preparation made by licensed compounding pharmacies. It is not the same medication as Wegovy and is not FDA-approved — the FDA does not evaluate compounded drugs for safety, effectiveness, or quality.</li>
            </ul>
            <p>The clinical eligibility considerations (BMI, conditions, safety history) are similar regardless of which form is discussed, but the products are not interchangeable. For pricing, see our <a href="/blog/semaglutide-real-cost-2026" style={{ color: 'var(--brand)', fontWeight: 500 }}>semaglutide cost breakdown</a> and <a href="/blog/insurance-coverage-glp1-2026" style={{ color: 'var(--brand)', fontWeight: 500 }}>insurance coverage guide</a>. Whether you may be a candidate for any semaglutide treatment is a decision a licensed medical provider makes based on your individual health.</p>


            {/* ─── After You Qualify ─── */}
            <h2 className="serif" style={{ fontSize: 32, marginTop: 56, marginBottom: 24, color: 'var(--ink)' }}>What happens after you qualify</h2>
            <p>Qualifying is the first step, not the finish line. If a provider determines you{"'"}re a candidate, treatment typically begins at a low dose and increases gradually over several weeks to reduce side effects — an approach called <a href="/blog/semaglutide-dose-escalation-guide-2026" style={{ color: 'var(--brand)', fontWeight: 500 }}>titration</a>. Treatment is ongoing and paired with lifestyle changes, and your provider monitors your progress and adjusts as needed. Here{"'"}s <a href="/blog/first-week-semaglutide-2026" style={{ color: 'var(--brand)', fontWeight: 500 }}>what to expect in your first week</a> and a full <a href="/blog/semaglutide-weight-loss-timeline-2026" style={{ color: 'var(--brand)', fontWeight: 500 }}>weight loss timeline</a>. In the STEP 1 trial, adults with overweight or obesity (without diabetes) who reached the maintenance dose lost about 15% of their body weight on average over 68 weeks, compared with roughly 2.4% on placebo, alongside lifestyle changes (Wilding et al., 2021). Individual results vary and are never guaranteed.</p>


            {/* ─── FAQ ─── */}
            <h2 className="serif" style={{ fontSize: 32, marginTop: 56, marginBottom: 32, color: 'var(--ink)' }}>Frequently asked questions</h2>

            <FaqItem question="What BMI do you need to qualify for Wegovy?">
              You generally need a BMI of 30 or higher, or a BMI of 27 or higher if you also have at least one weight-related condition such as high blood pressure, type 2 diabetes, or high cholesterol.
            </FaqItem>
            <FaqItem question="Can you get Wegovy with a BMI of 27?">
              Yes — but only if you also have a weight-related comorbidity. A BMI between 27 and 29.9 on its own does not meet the FDA criteria for adults.
            </FaqItem>
            <FaqItem question="What is the FDA indication for Wegovy?">
              Wegovy is FDA-approved for chronic weight management in adults with obesity (BMI 30+) or overweight (BMI 27+) with at least one weight-related condition, for adolescents aged 12+ with obesity, and to reduce cardiovascular risk in certain adults with established cardiovascular disease plus obesity or overweight.
            </FaqItem>
            <FaqItem question="What conditions qualify you for Wegovy at a BMI of 27?">
              Commonly cited qualifying conditions include high blood pressure, type 2 diabetes, high cholesterol or triglycerides, obstructive sleep apnea, and cardiovascular disease. A licensed provider confirms whether a specific diagnosis qualifies.
            </FaqItem>
            <FaqItem question="Is there an age requirement for Wegovy?">
              Wegovy is approved for adults and for children aged 12 and older who have obesity (a BMI at or above the 95th percentile for their age and sex).
            </FaqItem>
            <FaqItem question="Who should not take Wegovy?">
              Wegovy is generally not appropriate for people with a personal or family history of medullary thyroid carcinoma or MEN 2, a serious allergy to semaglutide, or who are pregnant or breastfeeding. A provider reviews your history before prescribing.
            </FaqItem>
            <FaqItem question="Is compounded semaglutide the same as Wegovy?">
              No. Wegovy is a brand-name, FDA-approved product. Compounded semaglutide is a custom preparation made by compounding pharmacies and is not FDA-approved.
            </FaqItem>
            <FaqItem question="How do I find out if I qualify for Wegovy?">
              Complete a short online eligibility check to be connected with a licensed provider who can review your BMI and health history and determine whether treatment is appropriate.
            </FaqItem>


            {/* ─── CTA 3: Bottom ─── */}
            <CtaBlock
              variant="dark"
              headline="Find out if you're a candidate — in about 2 minutes."
              body="No obligation. A licensed provider reviews your information and determines whether a GLP-1 treatment plan is appropriate for you."
              buttonText="Check Your Eligibility"
            />


            {/* ─── References ─── */}
            <div style={{ marginTop: 80, paddingTop: 40, borderTop: '1px solid var(--line-soft)', fontSize: 14, color: 'var(--ink-3)' }}>
              <h3 className="serif" style={{ fontSize: 24, marginBottom: 24, color: 'var(--ink)' }}>References</h3>
              <ol style={{ paddingLeft: 20, display: 'flex', flexDirection: 'column', gap: 16, lineHeight: 1.6 }}>
                <li>Lincoff, A. M., Brown-Frandsen, K., Colhoun, H. M., et al. (2023). Semaglutide and cardiovascular outcomes in obesity without diabetes. <em>New England Journal of Medicine</em>, 389(24), 2221–2232. <a href="https://doi.org/10.1056/NEJMoa2307563" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--brand)', textDecoration: 'underline' }}>doi:10.1056/NEJMoa2307563</a></li>
                <li>Sanyal, A. J., Newsome, P. N., Kliers, I., et al. (2025). Phase 3 trial of semaglutide in metabolic dysfunction–associated steatohepatitis. <em>New England Journal of Medicine</em>, 392(21), 2089–2099. <a href="https://doi.org/10.1056/NEJMoa2413258" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--brand)', textDecoration: 'underline' }}>doi:10.1056/NEJMoa2413258</a></li>
                <li>Weghuber, D., Barrett, T., Barrientos-Pérez, M., et al. (2022). Once-weekly semaglutide in adolescents with obesity. <em>New England Journal of Medicine</em>, 387(24), 2245–2257. <a href="https://doi.org/10.1056/NEJMoa2208601" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--brand)', textDecoration: 'underline' }}>doi:10.1056/NEJMoa2208601</a></li>
                <li>Wilding, J. P. H., Batterham, R. L., Calanna, S., et al. (2021). Once-weekly semaglutide in adults with overweight or obesity. <em>New England Journal of Medicine</em>, 384(11), 989–1002. <a href="https://doi.org/10.1056/NEJMoa2032183" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--brand)', textDecoration: 'underline' }}>doi:10.1056/NEJMoa2032183</a></li>
                <li>U.S. Food and Drug Administration. (2022, December 23). <em>FDA approves treatment for chronic weight management in pediatric patients aged 12 years and older</em>. <a href="https://www.fda.gov/drugs/news-events-human-drugs/fda-approves-treatment-chronic-weight-management-pediatric-patients-aged-12-years-and-older" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--brand)', textDecoration: 'underline' }}>fda.gov</a></li>
                <li>U.S. Food and Drug Administration. (2024, March 8). <em>FDA approves first treatment to reduce risk of serious heart problems specifically in adults with obesity or overweight</em>. <a href="https://www.fda.gov/news-events/press-announcements/fda-approves-first-treatment-reduce-risk-serious-heart-problems-specifically-adults-obesity-or" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--brand)', textDecoration: 'underline' }}>fda.gov</a></li>
                <li>U.S. Food and Drug Administration. (n.d.). <em>Wegovy (semaglutide) injection: Prescribing information</em> (Drugs@FDA, Application No. 215256). Retrieved June 5, 2026. <a href="https://www.accessdata.fda.gov/scripts/cder/daf/index.cfm?event=overview.process&ApplNo=215256" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--brand)', textDecoration: 'underline' }}>accessdata.fda.gov</a></li>
              </ol>
            </div>


            {/* ─── Disclaimers ─── */}
            <div style={{
              marginTop: 40, paddingTop: 28, borderTop: '1px solid var(--line-soft)',
              fontSize: 13, color: 'var(--ink-3)', lineHeight: 1.65,
              display: 'flex', flexDirection: 'column', gap: 14,
            }}>
              <p><strong style={{ color: 'var(--ink-2)' }}>Medical disclaimer:</strong> This page is for general informational purposes only and is not medical advice. It does not establish a provider-patient relationship. Eligibility and treatment decisions are made only by a licensed medical provider based on your individual health history. Always consult a qualified healthcare professional before starting any medication.</p>
              <p><strong style={{ color: 'var(--ink-2)' }}>Compounded-medication disclaimer:</strong> Compounded medications (including compounded semaglutide) are not FDA-approved. The FDA does not evaluate compounded drugs for safety, effectiveness, or quality.</p>
              <p><strong style={{ color: 'var(--ink-2)' }}>Affiliate disclaimer:</strong> Telehealth FX is an informational website. It is not a medical provider or pharmacy and does not provide medical advice, diagnosis, or treatment. We may earn a commission when you sign up for a partner{"'"}s service through links on this site.</p>
              <p><strong style={{ color: 'var(--ink-2)' }}>Trademark note:</strong> "Wegovy," "Ozempic," and other brand names are the property of their respective owners. This page is not affiliated with, endorsed by, or sponsored by Novo Nordisk.</p>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
