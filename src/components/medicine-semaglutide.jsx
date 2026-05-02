"use client";
import React from 'react';
import { Icon } from './common.jsx';

const CTA_URL = "https://go.telehealthfx.com/start";

function SemaglutidePage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    "name": "Semaglutide Weight Loss Program | Telehealth FX",
    "about": {
      "@type": "Drug",
      "name": "Semaglutide",
      "nonProprietaryName": "Semaglutide",
      "drugClass": "GLP-1 receptor agonist",
      "mechanismOfAction": "Mimics GLP-1 hormone to regulate appetite, slow gastric emptying, and improve insulin sensitivity",
      "administrationRoute": "Subcutaneous injection"
    },
    "publisher": { "@type": "MedicalOrganization", "name": "Telehealth FX" }
  };

  return (
    <section className="section" style={{ minHeight: '60vh', paddingTop: 120 }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <div className="container" style={{ maxWidth: 840 }}>

        {/* Hero */}
        <div style={{ textAlign: 'center', marginBottom: 80 }}>
          <div className="pill pill-brand" style={{ marginBottom: 20, display: 'inline-flex' }}>
            <span className="pill-dot" /> Most Popular GLP-1
          </div>
          <h1 className="serif" style={{ fontSize: 72, marginBottom: 28, lineHeight: 0.95 }}>
            Semaglutide<br/><span style={{ fontStyle: 'italic', color: 'var(--brand)' }}>from $146/mo.</span>
          </h1>
          <p style={{ fontSize: 20, color: 'var(--ink-2)', maxWidth: 600, margin: '0 auto 40px', lineHeight: 1.6 }}>
            The same active ingredient as Ozempic® and Wegovy® — compounded by licensed US pharmacies. 24-hour clinician approval. Zero hidden fees. 2-day UPS shipping.
          </p>
          <a href={CTA_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-lg" style={{ display: 'inline-flex' }}>
            See If You Qualify <Icon.Arrow />
          </a>
        </div>

        {/* Trust Strip */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24, marginBottom: 80 }}>
          {[
            { num: '24h', label: 'Clinician Approval' },
            { num: '$146', label: 'Starting Price/mo' },
            { num: '2-Day', label: 'UPS Shipping' },
          ].map((s, i) => (
            <div key={i} className="card" style={{ padding: 28, textAlign: 'center' }}>
              <div className="serif" style={{ fontSize: 36, color: 'var(--brand)', marginBottom: 4 }}>{s.num}</div>
              <div style={{ fontSize: 13, color: 'var(--ink-3)' }}>{s.label}</div>
            </div>
          ))}
        </div>

        {/* Content */}
        <div className="blog-content" style={{ fontSize: 18, lineHeight: 1.7, color: 'var(--ink-2)' }}>

          <h2 className="serif" style={{ fontSize: 40, marginTop: 0, marginBottom: 24, color: 'var(--ink)' }}>What Is Semaglutide?</h2>
          <p>Semaglutide is a <strong>GLP-1 receptor agonist</strong> — a synthetic version of a natural gut hormone called Glucagon-Like Peptide-1 (GLP-1). It was originally developed by Novo Nordisk and is the active ingredient in both <strong>Ozempic®</strong> (approved for Type 2 Diabetes) and <strong>Wegovy®</strong> (approved for chronic weight management).</p>
          <p>Unlike natural GLP-1, which your body breaks down within minutes, semaglutide is engineered to resist degradation by the DPP-4 enzyme. This means a single weekly injection provides <strong>sustained appetite regulation, improved insulin sensitivity, and reduced "food noise"</strong> for a full 7 days.</p>
          <p>In landmark clinical trials (STEP program), participants on semaglutide 2.4mg lost an average of <strong>14.9% of body weight</strong> over 68 weeks — compared to just 2.4% with placebo. For a 220-pound individual, that's roughly <strong>33 pounds of clinically meaningful weight loss</strong>.</p>

          <h2 className="serif" style={{ fontSize: 40, marginTop: 64, marginBottom: 24, color: 'var(--ink)' }}>How Semaglutide Works</h2>
          <p>Semaglutide mimics GLP-1 to act on multiple systems simultaneously:</p>
          <ul style={{ marginBottom: 24, paddingLeft: 20 }}>
            <li style={{ marginBottom: 12 }}><strong>Appetite Suppression:</strong> Acts on the hypothalamus to dramatically reduce hunger signals and eliminate obsessive "food noise" — the constant mental fixation on eating that derails traditional diets.</li>
            <li style={{ marginBottom: 12 }}><strong>Delayed Gastric Emptying:</strong> Slows the rate at which food leaves your stomach, extending satiety after meals and naturally reducing portion sizes.</li>
            <li style={{ marginBottom: 12 }}><strong>Insulin Regulation:</strong> Stimulates glucose-dependent insulin secretion while suppressing glucagon, improving blood sugar control independent of weight loss.</li>
            <li style={{ marginBottom: 12 }}><strong>Cardiovascular Protection:</strong> The SELECT trial demonstrated a 20% reduction in major adverse cardiovascular events (heart attack, stroke, cardiovascular death) in overweight/obese adults — making semaglutide the first obesity medication to show heart-protective benefits.</li>
            <li style={{ marginBottom: 12 }}><strong>Metabolic Reset:</strong> By reducing caloric intake and improving insulin sensitivity simultaneously, semaglutide helps lower set-point weight — the body weight your metabolism actively defends.</li>
          </ul>

          {/* CTA 1 */}
          <div className="card" style={{ padding: 40, margin: '48px 0', textAlign: 'center', background: '#FFFDF9', borderColor: 'var(--brand)' }}>
            <h3 className="serif" style={{ fontSize: 28, marginBottom: 16, color: 'var(--ink)' }}>Ready to start Semaglutide?</h3>
            <p style={{ marginBottom: 24, fontSize: 16 }}>Complete a quick online assessment. A licensed clinician reviews your history and can approve your prescription within 24 hours.</p>
            <a href={CTA_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-lg" style={{ display: 'inline-flex', justifyContent: 'center' }}>
              See If You Qualify <Icon.Arrow />
            </a>
          </div>

          <h2 className="serif" style={{ fontSize: 40, marginTop: 64, marginBottom: 24, color: 'var(--ink)' }}>Semaglutide Dosing & Titration Schedule</h2>
          <p>Semaglutide is administered as a <strong>once-weekly subcutaneous injection</strong>, typically in the abdomen, thigh, or upper arm. The standard titration schedule gradually increases the dose to minimize side effects:</p>

          <div style={{ margin: '32px 0', overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
              <thead>
                <tr style={{ background: 'var(--ink)', color: '#fff' }}>
                  <th style={{ padding: '16px', fontWeight: 500, fontSize: 14 }}>Weeks</th>
                  <th style={{ padding: '16px', fontWeight: 500, fontSize: 14 }}>Dose</th>
                  <th style={{ padding: '16px', fontWeight: 500, fontSize: 14 }}>Purpose</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['1–4', '0.25 mg', 'Initial tolerance phase'],
                  ['5–8', '0.5 mg', 'Building therapeutic levels'],
                  ['9–12', '1.0 mg', 'Therapeutic dose begins'],
                  ['13–16', '1.7 mg', 'Enhanced weight loss phase'],
                  ['17+', '2.4 mg', 'Full maintenance dose'],
                ].map(([weeks, dose, purpose], i) => (
                  <tr key={i} style={{ borderBottom: '1px solid var(--line-soft)', background: i % 2 ? 'transparent' : '#FAFAFA' }}>
                    <td style={{ padding: '16px', fontWeight: 500 }}>{weeks}</td>
                    <td style={{ padding: '16px', color: 'var(--brand)', fontWeight: 500 }}>{dose}</td>
                    <td style={{ padding: '16px' }}>{purpose}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p>Your Telehealth FX clinician will personalize this schedule based on your response and tolerance. Some patients achieve excellent results at lower maintenance doses.</p>

          <h2 className="serif" style={{ fontSize: 40, marginTop: 64, marginBottom: 24, color: 'var(--ink)' }}>Clinical Evidence & Trial Results</h2>
          <p>Semaglutide has one of the strongest evidence bases of any weight loss medication in history:</p>
          <ul style={{ marginBottom: 24, paddingLeft: 20 }}>
            <li style={{ marginBottom: 12 }}><strong>STEP 1 (2021):</strong> 1,961 adults without diabetes lost an average of 14.9% body weight over 68 weeks vs. 2.4% with placebo. One-third of participants lost ≥20% of body weight.</li>
            <li style={{ marginBottom: 12 }}><strong>STEP 2 (2021):</strong> In adults with Type 2 Diabetes, semaglutide 2.4mg produced 9.6% weight loss vs. 3.4% placebo, with significant HbA1c improvements.</li>
            <li style={{ marginBottom: 12 }}><strong>STEP 3 (2021):</strong> Combined with intensive behavioral therapy, participants lost 16.0% of body weight — demonstrating the power of medication + lifestyle changes.</li>
            <li style={{ marginBottom: 12 }}><strong>STEP 5 (2022):</strong> Over 2 years of continuous treatment, participants maintained 15.2% weight loss — proving sustained efficacy.</li>
            <li style={{ marginBottom: 12 }}><strong>SELECT (2023):</strong> In 17,604 overweight/obese adults with cardiovascular disease, semaglutide reduced major adverse cardiovascular events by 20% — a landmark finding that expanded its clinical significance beyond weight loss.</li>
          </ul>

          <h2 className="serif" style={{ fontSize: 40, marginTop: 64, marginBottom: 24, color: 'var(--ink)' }}>What Is Compounded Semaglutide?</h2>
          <p>Compounded semaglutide contains the <strong>same active ingredient</strong> as branded Ozempic and Wegovy, but is produced by <strong>licensed 503A and 503B compounding pharmacies</strong> in the United States. These pharmacies operate under FDA oversight and follow Current Good Manufacturing Practices (cGMP).</p>
          <p>The key difference? <strong>Price.</strong> Branded Wegovy costs $1,300+/month without insurance. Compounded semaglutide through Telehealth FX starts at <strong>$146/month</strong> — making this clinically proven treatment accessible to people who would otherwise be priced out of the most effective weight loss medication available.</p>
          <p>Every compounded prescription is:</p>
          <ul style={{ marginBottom: 24, paddingLeft: 20 }}>
            <li style={{ marginBottom: 8 }}>Prescribed by a licensed, board-certified clinician after medical review</li>
            <li style={{ marginBottom: 8 }}>Compounded by a licensed US pharmacy under FDA oversight</li>
            <li style={{ marginBottom: 8 }}>Shipped via 2-day UPS with cold-chain packaging when required</li>
            <li style={{ marginBottom: 8 }}>Accompanied by a 1-on-1 onboarding call with your care team</li>
          </ul>

          {/* CTA 2 */}
          <div className="card" style={{ padding: 40, margin: '48px 0', textAlign: 'center', background: '#FFFDF9', borderColor: 'var(--brand)' }}>
            <div style={{ width: 48, height: 48, borderRadius: '50%', background: 'var(--brand-soft)', color: 'var(--brand)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px' }}>
              <Icon.Check size={24} />
            </div>
            <h3 className="serif" style={{ fontSize: 28, marginBottom: 16, color: 'var(--ink)' }}>Same Molecule. Fraction of the Cost.</h3>
            <p style={{ marginBottom: 24, fontSize: 16 }}>Compounded Semaglutide from $146/mo. Licensed clinicians, transparent pricing, no insurance needed.</p>
            <a href={CTA_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-lg" style={{ display: 'inline-flex', justifyContent: 'center' }}>
              Start Your Assessment <Icon.Arrow />
            </a>
          </div>

          <h2 className="serif" style={{ fontSize: 40, marginTop: 64, marginBottom: 24, color: 'var(--ink)' }}>Side Effects & Safety Profile</h2>
          <p>The most common side effects are gastrointestinal and typically improve as your body adjusts during the titration period:</p>
          <ul style={{ marginBottom: 24, paddingLeft: 20 }}>
            <li style={{ marginBottom: 8 }}><strong>Nausea</strong> (most common, usually mild-moderate, improves over weeks)</li>
            <li style={{ marginBottom: 8 }}><strong>Diarrhea or constipation</strong></li>
            <li style={{ marginBottom: 8 }}><strong>Injection site reactions</strong> (mild redness, itching)</li>
            <li style={{ marginBottom: 8 }}><strong>Fatigue or headache</strong> (typically transient during titration)</li>
          </ul>
          <p>Serious side effects are rare but can include pancreatitis, gallbladder issues, and hypoglycemia (particularly when combined with insulin or sulfonylureas). Semaglutide is <strong>contraindicated</strong> in patients with a personal or family history of medullary thyroid carcinoma (MTC) or Multiple Endocrine Neoplasia syndrome type 2 (MEN 2).</p>
          <p>Your Telehealth FX clinician will screen for contraindications during your initial assessment and provide ongoing monitoring throughout treatment.</p>

          <h2 className="serif" style={{ fontSize: 40, marginTop: 64, marginBottom: 24, color: 'var(--ink)' }}>Who Is a Good Candidate for Semaglutide?</h2>
          <p>Semaglutide may be appropriate for adults who meet the following criteria:</p>
          <ul style={{ marginBottom: 24, paddingLeft: 20 }}>
            <li style={{ marginBottom: 8 }}>BMI ≥ 30 (obesity), or BMI ≥ 27 with at least one weight-related condition (hypertension, Type 2 Diabetes, high cholesterol, sleep apnea)</li>
            <li style={{ marginBottom: 8 }}>Adults who have struggled with traditional diet and exercise approaches</li>
            <li style={{ marginBottom: 8 }}>Individuals seeking clinically meaningful weight loss (10-20%+ of body weight)</li>
            <li style={{ marginBottom: 8 }}>Patients looking for cardiovascular risk reduction alongside weight management</li>
          </ul>

          <h2 className="serif" style={{ fontSize: 40, marginTop: 64, marginBottom: 24, color: 'var(--ink)' }}>Semaglutide vs. Tirzepatide: Which Is Right for You?</h2>
          <div style={{ margin: '32px 0', overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
              <thead>
                <tr style={{ background: 'var(--ink)', color: '#fff' }}>
                  <th style={{ padding: '16px', fontWeight: 500, fontSize: 14 }}>Factor</th>
                  <th style={{ padding: '16px', fontWeight: 500, fontSize: 14 }}>Semaglutide</th>
                  <th style={{ padding: '16px', fontWeight: 500, fontSize: 14 }}>Tirzepatide</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Mechanism', 'GLP-1 single agonist', 'Dual GIP/GLP-1 agonist'],
                  ['Avg. Weight Loss', '~15% body weight', '~20-22% body weight'],
                  ['Dosing', 'Once weekly injection', 'Once weekly injection'],
                  ['Starting Price', '$146/mo', '$258/mo'],
                  ['Best For', 'Proven track record, CV protection', 'Maximum weight loss potential'],
                  ['FDA Approvals', 'Ozempic, Wegovy', 'Mounjaro, Zepbound'],
                ].map(([factor, sem, tirz], i) => (
                  <tr key={i} style={{ borderBottom: '1px solid var(--line-soft)', background: i % 2 ? 'transparent' : '#FAFAFA' }}>
                    <td style={{ padding: '16px', fontWeight: 500 }}>{factor}</td>
                    <td style={{ padding: '16px', color: 'var(--brand)' }}>{sem}</td>
                    <td style={{ padding: '16px' }}>{tirz}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p>Both medications are highly effective. Your clinician will recommend the best option based on your medical history, goals, and budget. Many patients start with semaglutide and transition to tirzepatide if additional weight loss is desired.</p>

          <h2 className="serif" style={{ fontSize: 40, marginTop: 64, marginBottom: 24, color: 'var(--ink)' }}>How the Telehealth FX Semaglutide Program Works</h2>
          <div style={{ display: 'grid', gridTemplateColumns: '48px 1fr', gap: '20px 16px', margin: '32px 0' }}>
            {[
              { step: '1', title: 'Complete Your Assessment', desc: 'Fill out a quick online health questionnaire covering your medical history, current medications, and weight loss goals.' },
              { step: '2', title: '24-Hour Clinician Review', desc: 'A licensed, board-certified clinician reviews your assessment. If approved, your prescription is sent to a licensed US compounding pharmacy.' },
              { step: '3', title: '2-Day UPS Delivery', desc: 'Your compounded Semaglutide is shipped directly to your door via 2-day UPS with cold-chain packaging.' },
              { step: '4', title: 'Onboarding & Ongoing Support', desc: 'Receive a 1-on-1 welcome call with your care team, plus ongoing check-ins and dosage adjustments throughout your program.' },
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

          <h2 className="serif" style={{ fontSize: 40, marginTop: 64, marginBottom: 24, color: 'var(--ink)' }}>Frequently Asked Questions</h2>

          {[
            { q: 'Is compounded semaglutide the same as Ozempic?', a: 'It contains the same active ingredient (semaglutide) but is produced by licensed compounding pharmacies rather than Novo Nordisk. The molecular structure and mechanism of action are identical.' },
            { q: 'How quickly will I see results?', a: 'Most patients notice reduced appetite and food noise within the first 1-2 weeks. Measurable weight loss typically begins by weeks 4-8, with the most significant results occurring during months 3-6 as you reach therapeutic doses.' },
            { q: 'Do I need to diet and exercise while on semaglutide?', a: 'While semaglutide produces significant weight loss on its own, combining it with a protein-rich diet and regular exercise (especially resistance training) maximizes fat loss while preserving lean muscle mass.' },
            { q: 'What happens if I stop taking semaglutide?', a: 'Research shows that some weight regain is common after discontinuation, as the appetite-suppressing effects diminish. Your clinician will work with you on a sustainable transition plan, which may include lifestyle modifications and a gradual dose taper.' },
            { q: 'Are there any foods I should avoid?', a: 'No specific foods are contraindicated, but many patients find that high-fat, greasy, or very sugary foods can worsen nausea during the titration phase. Eating smaller, protein-focused meals is generally recommended.' },
            { q: 'Can I take semaglutide if I have diabetes?', a: 'Yes — semaglutide was originally developed for Type 2 Diabetes (as Ozempic). However, dosing and monitoring may differ. Your clinician will adjust your protocol accordingly and coordinate with your existing diabetes care.' },
          ].map((faq, i) => (
            <div key={i} style={{ padding: '28px 0', borderBottom: '1px solid var(--line-soft)' }}>
              <h3 style={{ fontSize: 18, marginBottom: 12, color: 'var(--ink)' }}>{faq.q}</h3>
              <p style={{ margin: 0, fontSize: 16, color: 'var(--ink-2)', lineHeight: 1.6 }}>{faq.a}</p>
            </div>
          ))}

          {/* CTA 3 — Final dark block */}
          <div style={{ padding: 40, marginTop: 60, borderRadius: 20, background: 'var(--ink)', color: '#FBF8F3', textAlign: 'center' }}>
            <h2 className="serif" style={{ fontSize: 40, marginBottom: 20, color: '#FBF8F3' }}>Start Your Semaglutide Program</h2>
            <p style={{ fontSize: 18, opacity: 0.9, marginBottom: 32, maxWidth: 500, margin: '0 auto 32px' }}>
              From $146/mo. Licensed clinicians. 24-hour approval. 2-day UPS shipping. Zero hidden fees.
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

export { SemaglutidePage };
