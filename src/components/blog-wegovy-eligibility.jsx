"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import { Icon } from './common.jsx';

const START_URL = "https://go.telehealthfx.com/";

function BmiCalculator() {
  const [unit, setUnit] = useState('imperial');
  const [ft, setFt] = useState('');
  const [inVal, setInVal] = useState('');
  const [lbs, setLbs] = useState('');
  const [cm, setCm] = useState('');
  const [kg, setKg] = useState('');
  const [bmi, setBmi] = useState(null);
  const [category, setCategory] = useState('');

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
      setBmi(calculatedBmi.toFixed(1));
      if (calculatedBmi >= 30) {
        setCategory('Obesity');
      } else if (calculatedBmi >= 25) {
        setCategory('Overweight');
      } else if (calculatedBmi >= 18.5) {
        setCategory('Healthy Weight');
      } else {
        setCategory('Underweight');
      }
    } else {
      setBmi(null);
      setCategory('');
    }
  };

  return (
    <div style={{ background: '#FFFDF9', border: '1px solid var(--brand)', padding: '24px', borderRadius: '12px', margin: '32px 0' }}>
      <h3 className="serif" style={{ fontSize: '24px', marginBottom: '16px', color: 'var(--ink)' }}>Calculate Your BMI</h3>
      
      <div style={{ display: 'flex', gap: '16px', marginBottom: '16px' }}>
        <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
          <input type="radio" checked={unit === 'imperial'} onChange={() => { setUnit('imperial'); setBmi(null); }} />
          Standard (ft/lb)
        </label>
        <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
          <input type="radio" checked={unit === 'metric'} onChange={() => { setUnit('metric'); setBmi(null); }} />
          Metric (cm/kg)
        </label>
      </div>

      <div style={{ display: 'flex', gap: '16px', marginBottom: '16px', flexWrap: 'wrap' }}>
        {unit === 'imperial' ? (
          <>
            <div style={{ flex: 1, minWidth: '100px' }}>
              <label style={{ display: 'block', fontSize: '14px', marginBottom: '4px' }}>Height (ft)</label>
              <input type="number" value={ft} onChange={(e) => setFt(e.target.value)} style={{ width: '100%', padding: '8px', borderRadius: '6px', border: '1px solid var(--line-soft)' }} />
            </div>
            <div style={{ flex: 1, minWidth: '100px' }}>
              <label style={{ display: 'block', fontSize: '14px', marginBottom: '4px' }}>Height (in)</label>
              <input type="number" value={inVal} onChange={(e) => setInVal(e.target.value)} style={{ width: '100%', padding: '8px', borderRadius: '6px', border: '1px solid var(--line-soft)' }} />
            </div>
            <div style={{ flex: 1, minWidth: '100px' }}>
              <label style={{ display: 'block', fontSize: '14px', marginBottom: '4px' }}>Weight (lbs)</label>
              <input type="number" value={lbs} onChange={(e) => setLbs(e.target.value)} style={{ width: '100%', padding: '8px', borderRadius: '6px', border: '1px solid var(--line-soft)' }} />
            </div>
          </>
        ) : (
          <>
            <div style={{ flex: 1, minWidth: '120px' }}>
              <label style={{ display: 'block', fontSize: '14px', marginBottom: '4px' }}>Height (cm)</label>
              <input type="number" value={cm} onChange={(e) => setCm(e.target.value)} style={{ width: '100%', padding: '8px', borderRadius: '6px', border: '1px solid var(--line-soft)' }} />
            </div>
            <div style={{ flex: 1, minWidth: '120px' }}>
              <label style={{ display: 'block', fontSize: '14px', marginBottom: '4px' }}>Weight (kg)</label>
              <input type="number" value={kg} onChange={(e) => setKg(e.target.value)} style={{ width: '100%', padding: '8px', borderRadius: '6px', border: '1px solid var(--line-soft)' }} />
            </div>
          </>
        )}
      </div>

      <button onClick={calculateBmi} className="btn btn-primary" style={{ padding: '10px 24px', cursor: 'pointer', borderRadius: '8px', border: 'none', fontWeight: 'bold' }}>Calculate</button>

      {bmi && (
        <div style={{ marginTop: '24px', padding: '16px', background: '#F0F5F1', borderRadius: '8px', border: '1px solid #C3DAC9' }}>
          <div style={{ fontSize: '18px' }}>Your BMI is <strong>{bmi}</strong></div>
          <div style={{ fontSize: '16px', marginTop: '8px' }}>A BMI of {bmi} falls in the <strong>{category.toLowerCase()}</strong> range.</div>
        </div>
      )}
    </div>
  );
}

export function BlogWegovyEligibility() {
  return (
    <>
      <section className="section" style={{ minHeight: '60vh', paddingTop: 120 }}>
        <div className="container" style={{ maxWidth: 800 }}>
          <div className="eyebrow" style={{ marginBottom: 20 }}>Eligibility Guide</div>
          <h1 className="serif" style={{ fontSize: 52, marginBottom: 24, lineHeight: 1.08 }}>
            Do You Qualify for Wegovy? <span style={{ fontStyle: 'italic', color: 'var(--brand)' }}>The Complete 2026 Eligibility Guide</span>
          </h1>
          
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 48, paddingBottom: 24, borderBottom: '1px solid var(--line-soft)' }}>
            <div>
              <div style={{ fontWeight: 500, fontSize: 14 }}>
                <a href="/about" style={{ color: "var(--ink)", textDecoration: "none" }}>REAL REVIEWER NAME, MD</a>
              </div>
              <div style={{ fontSize: 13, color: 'var(--ink-3)' }}>Updated 2026-XX-XX</div>
            </div>
          </div>
          
          <div className="blog-content" style={{ fontSize: 18, lineHeight: 1.7, color: 'var(--ink-2)' }}>
            <p>Wegovy (semaglutide 2.4 mg) is FDA-approved for chronic weight management in adults with a body mass index (BMI) of 30 or higher, or a BMI of 27 or higher who also have at least one weight-related medical condition such as high blood pressure, type 2 diabetes, or high cholesterol. It is also approved for children aged 12 and older who have obesity.</p>
            <p>That's the short answer. But "do I qualify" depends on more than a single number — your BMI category, your existing health conditions, your age, and certain safety factors all play a role. This guide walks through every part of the FDA criteria in plain language, shows you exactly what counts as a qualifying condition, and explains how to find out whether a licensed provider considers you a candidate.</p>

            <h2 className="serif" style={{ fontSize: 32, marginTop: 48, marginBottom: 24, color: 'var(--ink)' }}>Quick-answer eligibility table</h2>
            <div style={{ overflowX: 'auto', margin: '24px 0' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 15 }}>
                <thead>
                  <tr style={{ borderBottom: '2px solid var(--ink)' }}>
                    <th style={{ textAlign: 'left', padding: '12px 16px', fontWeight: 600 }}>Your situation</th>
                    <th style={{ textAlign: 'left', padding: '12px 16px', fontWeight: 600 }}>BMI</th>
                    <th style={{ textAlign: 'left', padding: '12px 16px', fontWeight: 600 }}>Qualifies under FDA criteria?</th>
                  </tr>
                </thead>
                <tbody>
                  <tr style={{ borderBottom: '1px solid var(--line-soft)' }}>
                    <td style={{ padding: '12px 16px', fontWeight: 500 }}>Adult with obesity</td>
                    <td style={{ padding: '12px 16px' }}>30 or higher</td>
                    <td style={{ padding: '12px 16px', color: 'green', fontWeight: 600 }}>Yes — BMI alone meets the criteria.</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid var(--line-soft)' }}>
                    <td style={{ padding: '12px 16px', fontWeight: 500 }}>Adult who is overweight + a weight-related condition</td>
                    <td style={{ padding: '12px 16px' }}>27–29.9</td>
                    <td style={{ padding: '12px 16px', color: 'green', fontWeight: 600 }}>Yes — if you have at least one qualifying condition.</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid var(--line-soft)' }}>
                    <td style={{ padding: '12px 16px', fontWeight: 500 }}>Adult who is overweight, no other condition</td>
                    <td style={{ padding: '12px 16px' }}>27–29.9</td>
                    <td style={{ padding: '12px 16px' }}>Generally no — a qualifying condition is required.</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid var(--line-soft)' }}>
                    <td style={{ padding: '12px 16px', fontWeight: 500 }}>Adult below the overweight threshold</td>
                    <td style={{ padding: '12px 16px' }}>Below 27</td>
                    <td style={{ padding: '12px 16px' }}>Generally no.</td>
                  </tr>
                  <tr>
                    <td style={{ padding: '12px 16px', fontWeight: 500 }}>Adolescent with obesity (age 12–17)</td>
                    <td style={{ padding: '12px 16px' }}>≥ 95th percentile for age and sex</td>
                    <td style={{ padding: '12px 16px', color: 'green', fontWeight: 600 }}>May qualify under the pediatric indication.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="serif" style={{ fontSize: 32, marginTop: 48, marginBottom: 24, color: 'var(--ink)' }}>Find your BMI category</h2>
            <BmiCalculator />
            <p>BMI is a screening number calculated from your height and weight. It's the starting point for Wegovy eligibility, but it isn't the whole picture — a licensed provider confirms your BMI and reviews your full health history before any treatment decision.</p>
            <p>For reference, the standard adult BMI categories are:</p>
            <ul>
              <li style={{ marginBottom: 12 }}><strong>Overweight:</strong> BMI 25 to 29.9</li>
              <li style={{ marginBottom: 12 }}><strong>Obesity:</strong> BMI 30 and above</li>
            </ul>
            <p>The Wegovy eligibility line sits inside the overweight range at 27 — which is why a weight-related condition matters so much for anyone between 27 and 29.9.</p>

            <h2 className="serif" style={{ fontSize: 32, marginTop: 48, marginBottom: 24, color: 'var(--ink)' }}>The two ways an adult qualifies</h2>
            <h3 style={{ fontSize: 24, marginTop: 32, marginBottom: 16, color: 'var(--ink)' }}>1. A BMI of 30 or higher (obesity)</h3>
            <p>If your BMI is 30 or above, you meet the FDA's weight criteria for Wegovy on BMI alone. No additional diagnosis is required. This is the most straightforward path to eligibility, and it covers the majority of adults who are prescribed the medication.</p>
            <h3 style={{ fontSize: 24, marginTop: 32, marginBottom: 16, color: 'var(--ink)' }}>2. A BMI of 27 or higher with a weight-related condition (overweight)</h3>
            <p>If your BMI falls between 27 and 29.9, you can still qualify — but the FDA criteria require that you also have at least one weight-related comorbidity. This is the single most-searched detail of the label, and it's where the "BMI 27 with a comorbidity" rule comes from. Without a qualifying condition, a BMI in this range generally does not meet the criteria for adults.</p>

            <h2 className="serif" style={{ fontSize: 32, marginTop: 48, marginBottom: 24, color: 'var(--ink)' }}>What counts as a "weight-related condition"?</h2>
            <p>The label points to medical conditions that are commonly caused or worsened by excess weight. The conditions most often cited as qualifying include:</p>
            <ul>
              <li style={{ marginBottom: 12 }}>High blood pressure (hypertension)</li>
              <li style={{ marginBottom: 12 }}>Type 2 diabetes</li>
              <li style={{ marginBottom: 12 }}>High cholesterol or high triglycerides (dyslipidemia)</li>
              <li style={{ marginBottom: 12 }}>Obstructive sleep apnea</li>
              <li style={{ marginBottom: 12 }}>Cardiovascular disease (such as a history of heart attack or stroke)</li>
            </ul>
            <p>This list is not exhaustive, and a diagnosis on its own doesn't guarantee eligibility — only a licensed provider can confirm whether a specific condition satisfies the criteria in your case.</p>
            
            <h3 style={{ fontSize: 24, marginTop: 32, marginBottom: 16, color: 'var(--ink)' }}>"Do I qualify if I have…?"</h3>
            <ul>
              <li style={{ marginBottom: 12 }}><strong>Prediabetes?</strong> Prediabetes isn't the same as type 2 diabetes, but it's often part of a broader weight-related risk profile a provider will consider. Discuss it during your evaluation.</li>
              <li style={{ marginBottom: 12 }}><strong>PCOS?</strong> Polycystic ovary syndrome frequently occurs alongside qualifying conditions like insulin resistance or high blood pressure. A provider will assess your overall picture.</li>
              <li style={{ marginBottom: 12 }}><strong>Fatty liver disease?</strong> Weight-related liver disease is increasingly relevant to GLP-1 eligibility (see the expanded indications below).</li>
              <li style={{ marginBottom: 12 }}><strong>Only a high BMI, no diagnosed conditions?</strong> If your BMI is 30 or above, you don't need a separate condition at all.</li>
            </ul>

            <h2 className="serif" style={{ fontSize: 32, marginTop: 48, marginBottom: 24, color: 'var(--ink)' }}>Pediatric eligibility (ages 12–17)</h2>
            <p>Wegovy is also FDA-approved for adolescents aged 12 and older who have obesity — defined as a BMI at or above the 95th percentile for their age and sex on the standard growth charts. The pediatric approval was supported by the STEP TEENS trial, in which once-weekly semaglutide reduced BMI in adolescents with obesity compared with placebo (Weghuber et al., 2022). Treatment decisions for minors are made by a licensed provider together with a parent or guardian, and are paired with lifestyle changes appropriate for a growing adolescent.</p>

            <h2 className="serif" style={{ fontSize: 32, marginTop: 48, marginBottom: 24, color: 'var(--ink)' }}>Beyond weight: expanded FDA indications</h2>
            <p>Wegovy's approved uses have broadened over time, and these expansions matter if you have a qualifying condition:</p>
            <ul>
              <li style={{ marginBottom: 12 }}><strong>Cardiovascular risk reduction.</strong> Wegovy is FDA-approved to reduce the risk of major cardiovascular events — such as heart attack and stroke — in certain adults who have established cardiovascular disease together with obesity or overweight. This indication followed the SELECT trial, in which semaglutide reduced major adverse cardiovascular events compared with placebo in adults with cardiovascular disease and overweight or obesity (Lincoff et al., 2023).</li>
              <li style={{ marginBottom: 12 }}><strong>Weight-related liver disease.</strong> The label has continued to expand into certain forms of fatty liver disease associated with metabolic dysfunction, supported by phase 3 trial evidence in metabolic dysfunction–associated steatohepatitis (MASH) (Sanyal et al., 2025).</li>
            </ul>
            <p>In all cases, Wegovy is intended to be used together with a reduced-calorie eating plan and increased physical activity.</p>

            <h2 className="serif" style={{ fontSize: 32, marginTop: 48, marginBottom: 24, color: 'var(--ink)' }}>Who is not a candidate</h2>
            <p>Meeting the BMI criteria does not override safety. Wegovy is generally not appropriate for people who:</p>
            <ul>
              <li style={{ marginBottom: 12 }}>Have a personal or family history of medullary thyroid carcinoma (MTC), or have Multiple Endocrine Neoplasia syndrome type 2 (MEN 2)</li>
              <li style={{ marginBottom: 12 }}>Have had a serious allergic reaction to semaglutide or any ingredient in the medication</li>
              <li style={{ marginBottom: 12 }}>Are pregnant, planning to become pregnant, or breastfeeding</li>
            </ul>

            <div style={{ background: '#FFF1F0', padding: '16px', borderRadius: '8px', borderLeft: '4px solid #FF4D4F', margin: '24px 0' }}>
              <strong>Important:</strong> Semaglutide carries an FDA boxed warning about thyroid C-cell tumors based on animal studies; whether this risk applies to humans is not determined. A licensed provider reviews your complete medical history before deciding whether treatment is appropriate for you.
            </div>

            <h2 className="serif" style={{ fontSize: 32, marginTop: 48, marginBottom: 24, color: 'var(--ink)' }}>"Wegovy" vs. compounded semaglutide — read this before you compare prices</h2>
            <p>When people search for Wegovy eligibility, they're usually trying to get access to semaglutide for weight management — and they quickly run into two different things:</p>
            <ul>
              <li style={{ marginBottom: 12 }}><strong>Wegovy</strong> is the brand-name, FDA-approved product made by Novo Nordisk. Every eligibility criterion on this page is the FDA criteria for that product.</li>
              <li style={{ marginBottom: 12 }}><strong>Compounded semaglutide</strong> is a custom preparation made by licensed compounding pharmacies. It is not the same medication as Wegovy and is not FDA-approved — the FDA does not evaluate compounded drugs for safety, effectiveness, or quality.</li>
            </ul>
            <p>The clinical eligibility considerations (BMI, conditions, safety history) are similar regardless of which form is discussed, but the products are not interchangeable. Whether you may be a candidate for any semaglutide treatment is a decision a licensed medical provider makes based on your individual health.</p>

            <h2 className="serif" style={{ fontSize: 32, marginTop: 48, marginBottom: 24, color: 'var(--ink)' }}>What happens after you qualify</h2>
            <p>Qualifying is the first step, not the finish line. If a provider determines you're a candidate, treatment typically begins at a low dose and increases gradually over several weeks to reduce side effects — an approach called titration. Treatment is ongoing and paired with lifestyle changes, and your provider monitors your progress and adjusts as needed. In the STEP 1 trial, adults with overweight or obesity (without diabetes) who reached the maintenance dose lost about 15% of their body weight on average over 68 weeks, compared with roughly 2.4% on placebo, alongside lifestyle changes (Wilding et al., 2021). Individual results vary and are never guaranteed.</p>

            <h2 className="serif" style={{ fontSize: 32, marginTop: 48, marginBottom: 24, color: 'var(--ink)' }}>How to find out if you're a candidate</h2>
            <p>You don't have to self-diagnose your eligibility. A short online eligibility check connects you with a licensed provider who can review your BMI, your health history, and any weight-related conditions, then determine whether a GLP-1 treatment plan is appropriate for you.</p>
            
            <div style={{ textAlign: 'center', margin: '48px 0' }}>
              <a href={START_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-lg" style={{ display: 'inline-flex', justifyContent: 'center' }}>Check Your Eligibility — Takes About 2 Minutes <Icon.Arrow /></a>
              <p style={{ marginTop: '16px', fontSize: '14px', color: 'var(--ink-3)' }}>There's no obligation, and you only move forward if a provider determines you're a candidate.</p>
            </div>

            <h2 className="serif" style={{ fontSize: 32, marginTop: 48, marginBottom: 24, color: 'var(--ink)' }}>Frequently asked questions</h2>
            
            <h4 style={{ fontSize: 20, marginTop: 24, marginBottom: 8, color: 'var(--ink)' }}>What BMI do you need to qualify for Wegovy?</h4>
            <p style={{ marginBottom: 24 }}>You generally need a BMI of 30 or higher, or a BMI of 27 or higher if you also have at least one weight-related condition such as high blood pressure, type 2 diabetes, or high cholesterol.</p>
            
            <h4 style={{ fontSize: 20, marginTop: 24, marginBottom: 8, color: 'var(--ink)' }}>Can you get Wegovy with a BMI of 27?</h4>
            <p style={{ marginBottom: 24 }}>Yes — but only if you also have a weight-related comorbidity. A BMI between 27 and 29.9 on its own does not meet the FDA criteria for adults.</p>
            
            <h4 style={{ fontSize: 20, marginTop: 24, marginBottom: 8, color: 'var(--ink)' }}>What is the FDA indication for Wegovy?</h4>
            <p style={{ marginBottom: 24 }}>Wegovy is FDA-approved for chronic weight management in adults with obesity (BMI 30+) or overweight (BMI 27+) with at least one weight-related condition, for adolescents aged 12+ with obesity, and to reduce cardiovascular risk in certain adults with established cardiovascular disease plus obesity or overweight.</p>
            
            <h4 style={{ fontSize: 20, marginTop: 24, marginBottom: 8, color: 'var(--ink)' }}>What conditions qualify you for Wegovy at a BMI of 27?</h4>
            <p style={{ marginBottom: 24 }}>Commonly cited qualifying conditions include high blood pressure, type 2 diabetes, high cholesterol or triglycerides, obstructive sleep apnea, and cardiovascular disease. A licensed provider confirms whether a specific diagnosis qualifies.</p>
            
            <h4 style={{ fontSize: 20, marginTop: 24, marginBottom: 8, color: 'var(--ink)' }}>Is there an age requirement for Wegovy?</h4>
            <p style={{ marginBottom: 24 }}>Wegovy is approved for adults and for children aged 12 and older who have obesity (a BMI at or above the 95th percentile for their age and sex).</p>
            
            <h4 style={{ fontSize: 20, marginTop: 24, marginBottom: 8, color: 'var(--ink)' }}>Who should not take Wegovy?</h4>
            <p style={{ marginBottom: 24 }}>Wegovy is generally not appropriate for people with a personal or family history of medullary thyroid carcinoma or MEN 2, a serious allergy to semaglutide, or who are pregnant or breastfeeding. A provider reviews your history before prescribing.</p>
            
            <h4 style={{ fontSize: 20, marginTop: 24, marginBottom: 8, color: 'var(--ink)' }}>Is compounded semaglutide the same as Wegovy?</h4>
            <p style={{ marginBottom: 24 }}>No. Wegovy is a brand-name, FDA-approved product. Compounded semaglutide is a custom preparation made by compounding pharmacies and is not FDA-approved.</p>
            
            <h4 style={{ fontSize: 20, marginTop: 24, marginBottom: 8, color: 'var(--ink)' }}>How do I find out if I qualify for Wegovy?</h4>
            <p style={{ marginBottom: 24 }}>Complete a short online eligibility check to be connected with a licensed provider who can review your BMI and health history and determine whether treatment is appropriate.</p>

            <div style={{ marginTop: 80, paddingTop: 40, borderTop: '1px solid var(--line-soft)', fontSize: 14, color: 'var(--ink-3)' }}>
              <h3 className="serif" style={{ fontSize: 24, marginBottom: 24, color: 'var(--ink)' }}>References</h3>
              <ol style={{ paddingLeft: 20, display: 'flex', flexDirection: 'column', gap: 16 }}>
                <li>Lincoff, A. M., Brown-Frandsen, K., Colhoun, H. M., Deanfield, J., Emerson, S. S., Esbjerg, S., Hardt-Lindberg, S., Hovingh, G. K., Kahn, S. E., Kushner, R. F., Lingvay, I., Oral, T. K., Michelsen, M. M., Plutzky, J., Tornøe, C. W., & Ryan, D. H. (2023). Semaglutide and cardiovascular outcomes in obesity without diabetes. <em>New England Journal of Medicine</em>, 389(24), 2221–2232. <a href="https://doi.org/10.1056/NEJMoa2307563" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--brand)' }}>https://doi.org/10.1056/NEJMoa2307563</a></li>
                <li>Sanyal, A. J., Newsome, P. N., Kliers, I., Østergaard, L. H., Long, M. T., Kjær, M. S., Cali, A. M., Bugianesi, E., Rinella, M. E., Roden, M., & Ratziu, V. (2025). Phase 3 trial of semaglutide in metabolic dysfunction–associated steatohepatitis. <em>New England Journal of Medicine</em>, 392(21), 2089–2099. <a href="https://doi.org/10.1056/NEJMoa2413258" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--brand)' }}>https://doi.org/10.1056/NEJMoa2413258</a></li>
                <li>Weghuber, D., Barrett, T., Barrientos-Pérez, M., Gies, I., Hesse, D., Jeppesen, O. K., Kelly, A. S., Mastrandrea, L. D., Sørrig, R., & Arslanian, S. (2022). Once-weekly semaglutide in adolescents with obesity. <em>New England Journal of Medicine</em>, 387(24), 2245–2257. <a href="https://doi.org/10.1056/NEJMoa2208601" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--brand)' }}>https://doi.org/10.1056/NEJMoa2208601</a></li>
                <li>Wilding, J. P. H., Batterham, R. L., Calanna, S., Davies, M., Van Gaal, L. F., Lingvay, I., McGowan, B. M., Rosenstock, J., Tran, M. T. D., Wadden, T. A., Wharton, S., Yokote, K., Zeuthen, N., & Kushner, R. F. (2021). Once-weekly semaglutide in adults with overweight or obesity. <em>New England Journal of Medicine</em>, 384(11), 989–1002. <a href="https://doi.org/10.1056/NEJMoa2032183" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--brand)' }}>https://doi.org/10.1056/NEJMoa2032183</a></li>
                <li>U.S. Food and Drug Administration. (2022, December 23). <em>FDA approves treatment for chronic weight management in pediatric patients aged 12 years and older</em>. <a href="https://www.fda.gov/drugs/news-events-human-drugs/fda-approves-treatment-chronic-weight-management-pediatric-patients-aged-12-years-and-older" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--brand)' }}>https://www.fda.gov/drugs/news-events-human-drugs/fda-approves-treatment-chronic-weight-management-pediatric-patients-aged-12-years-and-older</a></li>
                <li>U.S. Food and Drug Administration. (2024, March 8). <em>FDA approves first treatment to reduce risk of serious heart problems specifically in adults with obesity or overweight</em> [Press release]. <a href="https://www.fda.gov/news-events/press-announcements/fda-approves-first-treatment-reduce-risk-serious-heart-problems-specifically-adults-obesity-or" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--brand)' }}>https://www.fda.gov/news-events/press-announcements/fda-approves-first-treatment-reduce-risk-serious-heart-problems-specifically-adults-obesity-or</a></li>
                <li>U.S. Food and Drug Administration. (n.d.). <em>Wegovy (semaglutide) injection: Prescribing information</em> (Drugs@FDA, Application No. 215256). Retrieved June 5, 2026, from <a href="https://www.accessdata.fda.gov/scripts/cder/daf/index.cfm?event=overview.process&ApplNo=215256" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--brand)' }}>https://www.accessdata.fda.gov/scripts/cder/daf/index.cfm?event=overview.process&ApplNo=215256</a></li>
              </ol>
            </div>
            
            <div style={{ marginTop: 40, paddingTop: 20, borderTop: '1px solid var(--line-soft)', fontSize: 12, color: 'var(--ink-3)', lineHeight: 1.5 }}>
              <p style={{ marginBottom: 8 }}><strong>Medical disclaimer:</strong> This page is for general informational purposes only and is not medical advice. It does not establish a provider-patient relationship. Eligibility and treatment decisions are made only by a licensed medical provider based on your individual health history. Always consult a qualified healthcare professional before starting any medication.</p>
              <p style={{ marginBottom: 8 }}><strong>Compounded-medication disclaimer:</strong> Compounded medications (including compounded semaglutide) are not FDA-approved. The FDA does not evaluate compounded drugs for safety, effectiveness, or quality.</p>
              <p style={{ marginBottom: 8 }}><strong>Affiliate disclaimer:</strong> Telehealth FX is an informational website. It is not a medical provider or pharmacy and does not provide medical advice, diagnosis, or treatment. We may earn a commission when you sign up for a partner's service through links on this site.</p>
              <p><strong>Trademark note:</strong> "Wegovy," "Ozempic," and other brand names are the property of their respective owners. This page is not affiliated with, endorsed by, or sponsored by Novo Nordisk.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
