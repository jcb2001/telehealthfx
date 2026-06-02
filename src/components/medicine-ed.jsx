"use client";
import React, { useState, useEffect } from 'react';
import { Icon, Logo } from './common.jsx';

const CTA_URL = "https://go.telehealthfx.com/ed";

// ============================================================================
// STANDALONE NAV — No GLP-1 banner, ED-specific CTA
// ============================================================================
function EDNav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return (
    <nav style={{
      position: 'relative', zIndex: 50,
      background: scrolled ? 'rgba(245, 241, 234, 0.85)' : 'rgba(245, 241, 234, 1)',
      backdropFilter: scrolled ? 'blur(12px)' : 'none',
      borderBottom: scrolled ? '1px solid var(--line-soft)' : '1px solid transparent',
      transition: 'all .3s ease',
    }}>
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 72 }}>
        <a href="/" style={{ textDecoration: 'none', color: 'inherit' }}><Logo /></a>
        <div className="nav-links" style={{ display: 'flex', gap: 32, fontSize: 14, color: 'var(--ink-2)' }}>
          <a href="#what-is-ed">What is ED</a>
          <a href="#treatments">Treatment Options</a>
          <a href="#how-it-works">How It Works</a>
          <a href="#safety">Safety</a>
          <a href="#faq">FAQ</a>
        </div>
        <div className="flex-row nav-actions" style={{ gap: 12, alignItems: 'center' }}>
          <a className="btn btn-primary" href={CTA_URL} target="_blank" rel="noopener noreferrer">
            Learn More <Icon.Arrow />
          </a>
        </div>
      </div>
    </nav>
  );
}

// ============================================================================
// ED PAGE
// ============================================================================
function EDPage() {
  const schema = {"@context":"https://schema.org","@graph":[{"@type":"MedicalWebPage","@id":"https://telehealthfx.com/medications/ed/#webpage","name":"Erectile Dysfunction Treatment Online | Telehealth FX","description":"Discreet, affordable erectile dysfunction treatment prescribed online by licensed clinicians. Sildenafil, Tadalafil, and custom compounded options shipped free to your door.","url":"https://telehealthfx.com/medications/ed/","lastReviewed":"2026-05-12","medicalAudience":{"@type":"MedicalAudience","audienceType":"Patient","healthCondition":{"@type":"MedicalCondition","name":"Erectile Dysfunction","alternateName":"ED","code":{"@type":"MedicalCode","code":"N52","codingSystem":"ICD-10"},"associatedAnatomy":{"@type":"AnatomicalStructure","name":"Penile vasculature and corpora cavernosa"},"signOrSymptom":[{"@type":"MedicalSymptom","name":"Difficulty achieving erection"},{"@type":"MedicalSymptom","name":"Difficulty maintaining erection during intercourse"},{"@type":"MedicalSymptom","name":"Reduced sexual desire"},{"@type":"MedicalSymptom","name":"Performance anxiety"}]}},"about":{"@id":"https://telehealthfx.com/medications/ed/#drug-sildenafil"},"publisher":{"@id":"https://telehealthfx.com/#organization"}},{"@type":"Drug","@id":"https://telehealthfx.com/medications/ed/#drug-sildenafil","name":"Sildenafil","nonProprietaryName":"Sildenafil Citrate","drugClass":"PDE5 Inhibitor","mechanismOfAction":"Inhibits phosphodiesterase type 5 (PDE5) in the corpus cavernosum, enhancing nitric oxide-mediated vasodilation and increasing blood flow to the penis during sexual stimulation.","administrationRoute":"Oral","dosageForm":"Tablet","activeIngredient":"Sildenafil Citrate","prescriptionStatus":"PrescriptionOnly","availableStrength":["25mg","50mg","100mg"],"description":"Treatment of erectile dysfunction","warning":"Possible side effects include headache, flushing, nasal congestion, dyspepsia, and visual disturbances (blue tint). Do not use with nitrates, in severe hepatic impairment, recent stroke or MI, or hypotension."},{"@type":"Drug","@id":"https://telehealthfx.com/medications/ed/#drug-tadalafil","name":"Tadalafil","nonProprietaryName":"Tadalafil","drugClass":"PDE5 Inhibitor","mechanismOfAction":"Long-acting PDE5 inhibitor that enhances erectile response to sexual stimulation by increasing cGMP-mediated smooth muscle relaxation and blood flow to the corpus cavernosum.","administrationRoute":"Oral","dosageForm":"Tablet","activeIngredient":"Tadalafil","prescriptionStatus":"PrescriptionOnly","availableStrength":["5mg","10mg","20mg"]},{"@type":"MedicalOrganization","@id":"https://telehealthfx.com/#organization","name":"Telehealth FX","url":"https://telehealthfx.com","medicalSpecialty":["http://schema.org/Urologic","http://schema.org/PrimaryCare"]},{"@type":"FAQPage","@id":"https://telehealthfx.com/medications/ed/#faq","mainEntity":[{"@type":"Question","name":"What is erectile dysfunction?","acceptedAnswer":{"@type":"Answer","text":"Erectile dysfunction (ED) is the inability to achieve or maintain an erection firm enough for satisfactory sexual intercourse. It affects over 50% of men over 40 in some form and can be caused by vascular, hormonal, neurological, or psychological factors."}},{"@type":"Question","name":"What is the difference between Sildenafil and Tadalafil?","acceptedAnswer":{"@type":"Answer","text":"Both are PDE5 inhibitors that increase blood flow to the penis. Sildenafil (Viagra) works for 4–6 hours and is taken as-needed. Tadalafil (Cialis) lasts up to 36 hours and can also be taken as a low daily dose for continuous coverage."}},{"@type":"Question","name":"How quickly do ED medications work?","acceptedAnswer":{"@type":"Answer","text":"Sildenafil typically takes effect within 30–60 minutes. Tadalafil can take 30 minutes to 2 hours but lasts significantly longer. Both require sexual stimulation to work."}},{"@type":"Question","name":"Is it safe to get ED medication prescribed online?","acceptedAnswer":{"@type":"Answer","text":"Yes. Telehealth prescribing of ED medications is fully legal in most U.S. states when conducted by a licensed clinician after a proper medical evaluation. All prescriptions are reviewed for safety and drug interactions."}},{"@type":"Question","name":"Can ED be a sign of other health problems?","acceptedAnswer":{"@type":"Answer","text":"Yes. ED is often an early indicator of cardiovascular disease, diabetes, hormonal imbalances, or psychological conditions like anxiety and depression. Treating ED and its underlying causes together produces the best outcomes."}},{"@type":"Question","name":"Will my order be discreet?","acceptedAnswer":{"@type":"Answer","text":"Absolutely. All medications are shipped in plain, unmarked packaging with no indication of the contents. Your privacy is protected at every step."}}]}]};

  return (
    <section className="section" style={{ minHeight: '60vh', paddingTop: 120 }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <div className="container" style={{ maxWidth: 840 }}>

        {/* Hero with featured image */}
        <div style={{ textAlign: 'center', marginBottom: 48 }}>
          <div className="pill pill-brand" style={{ marginBottom: 20, display: 'inline-flex' }}>
            <span className="pill-dot" /> Sexual Wellness
          </div>
          <h1 className="serif" style={{ fontSize: 72, marginBottom: 28, lineHeight: 0.95 }}>
            Erectile Dysfunction<br/><span style={{ fontStyle: 'italic', color: 'var(--brand)' }}>Treatment Online</span>
          </h1>
          <p style={{ fontSize: 20, color: 'var(--ink-2)', maxWidth: 620, margin: '0 auto 40px', lineHeight: 1.6 }}>
            Discreet, affordable ED medication prescribed by licensed clinicians. Sildenafil, Tadalafil, and custom compounded formulas — shipped free in plain packaging.
          </p>
          <a href={CTA_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-lg" style={{ display: 'inline-flex' }}>
            Learn More <Icon.Arrow />
          </a>
        </div>

        {/* Featured Image */}
        <div style={{ marginBottom: 80, borderRadius: 20, overflow: 'hidden', aspectRatio: '16/9' }}>
          <img
            src="/assets/ed-hero.png"
            alt="Confident couple enjoying quality time together — erectile dysfunction treatment helps restore intimacy"
            style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }}
          />
        </div>

        {/* Trust Strip */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24, marginBottom: 80 }}>
          {[
            { num: '100%', label: 'Online & Discreet' },
            { num: 'Free', label: 'Shipping in Plain Packaging' },
            { num: '24h', label: 'Clinician Approval' },
          ].map((s, i) => (
            <div key={i} className="card" style={{ padding: 28, textAlign: 'center' }}>
              <div className="serif" style={{ fontSize: 36, color: 'var(--brand)', marginBottom: 4 }}>{s.num}</div>
              <div style={{ fontSize: 13, color: 'var(--ink-3)' }}>{s.label}</div>
            </div>
          ))}
        </div>

        {/* Content */}
        <div className="blog-content" style={{ fontSize: 18, lineHeight: 1.7, color: 'var(--ink-2)' }}>

          <h2 id="what-is-ed" className="serif" style={{ fontSize: 40, marginTop: 0, marginBottom: 24, color: 'var(--ink)' }}>What Is Erectile Dysfunction?</h2>
          <p>Erectile dysfunction (ED) is the <strong>persistent inability to achieve or maintain an erection firm enough for satisfactory sexual intercourse</strong>. While occasional difficulty is normal, ongoing ED affects over <strong>50% of men over 40</strong> in some form — and its prevalence increases with age, stress, and underlying health conditions.</p>
          <p>ED is <strong>not something you have to accept</strong>. It's a treatable medical condition, and modern oral medications work for the vast majority of men. What many don't realize is that ED is often an early warning sign of deeper cardiovascular or metabolic issues — making evaluation and treatment even more important.</p>

          <h2 className="serif" style={{ fontSize: 40, marginTop: 64, marginBottom: 24, color: 'var(--ink)' }}>What Causes ED?</h2>
          <p>Erectile dysfunction is complex and frequently involves multiple contributing factors:</p>
          <ul style={{ marginBottom: 24, paddingLeft: 20 }}>
            <li style={{ marginBottom: 12 }}><strong>Vascular (Blood Flow):</strong> Atherosclerosis, high blood pressure, and cardiovascular disease reduce blood flow to the penis. ED is one of the earliest clinical signs of endothelial dysfunction — often appearing 3–5 years before a cardiac event.</li>
            <li style={{ marginBottom: 12 }}><strong>Hormonal:</strong> Low testosterone, thyroid disorders, and elevated prolactin can all suppress sexual desire and erectile function. Hormone optimization is often a key part of comprehensive ED treatment.</li>
            <li style={{ marginBottom: 12 }}><strong>Neurological:</strong> Conditions affecting nerve signaling — diabetes, spinal cord injuries, multiple sclerosis, or post-surgical nerve damage — can impair the erectile reflex.</li>
            <li style={{ marginBottom: 12 }}><strong>Psychological:</strong> Performance anxiety, stress, depression, and relationship issues are major contributors, especially in younger men. The cycle of anxiety → ED → more anxiety can be particularly difficult to break without intervention.</li>
            <li style={{ marginBottom: 12 }}><strong>Medications & Lifestyle:</strong> Antidepressants (SSRIs), blood pressure medications, smoking, excessive alcohol use, poor sleep, and sedentary lifestyle all increase ED risk.</li>
          </ul>

          {/* CTA 1 */}
          <div className="card" style={{ padding: 40, margin: '48px 0', textAlign: 'center', background: '#FFFDF9', borderColor: 'var(--brand)' }}>
            <h3 className="serif" style={{ fontSize: 28, marginBottom: 16, color: 'var(--ink)' }}>Ready to Regain Your Confidence?</h3>
            <p style={{ marginBottom: 24, fontSize: 16 }}>Complete a quick, private online assessment. A licensed clinician reviews your history and prescribes the right treatment — discreetly delivered to your door.</p>
            <a href={CTA_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-lg" style={{ display: 'inline-flex', justifyContent: 'center' }}>
              Learn More <Icon.Arrow />
            </a>
          </div>

          {/* Treatment Options */}
          <h2 id="treatments" className="serif" style={{ fontSize: 40, marginTop: 64, marginBottom: 24, color: 'var(--ink)' }}>Treatment Options</h2>
          <p>Oral PDE5 inhibitors are the first-line treatment for erectile dysfunction. Your clinician will recommend the best option based on your lifestyle, frequency of use, and health profile:</p>

          <div style={{ margin: '32px 0', overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
              <thead>
                <tr style={{ background: 'var(--ink)', color: '#fff' }}>
                  <th style={{ padding: '16px', fontWeight: 500, fontSize: 14 }}>Medication</th>
                  <th style={{ padding: '16px', fontWeight: 500, fontSize: 14 }}>Active Ingredient</th>
                  <th style={{ padding: '16px', fontWeight: 500, fontSize: 14 }}>Duration</th>
                  <th style={{ padding: '16px', fontWeight: 500, fontSize: 14 }}>Best For</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Sildenafil (Viagra)', 'Sildenafil Citrate', '4–6 hours', 'As-needed use; fast onset'],
                  ['Tadalafil (Cialis)', 'Tadalafil', 'Up to 36 hours', '"Weekend pill"; daily low-dose option'],
                  ['Custom Compound', 'PT-141 + Oxytocin + PDE5i', 'Varies', 'Enhances arousal, bonding, and erection'],
                ].map(([med, active, duration, best], i) => (
                  <tr key={i} style={{ borderBottom: '1px solid var(--line-soft)', background: i % 2 ? 'transparent' : '#FAFAFA' }}>
                    <td style={{ padding: '16px', fontWeight: 500 }}>{med}</td>
                    <td style={{ padding: '16px' }}>{active}</td>
                    <td style={{ padding: '16px', color: 'var(--brand)', fontWeight: 500 }}>{duration}</td>
                    <td style={{ padding: '16px' }}>{best}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* How PDE5 Inhibitors Work */}
          <h2 className="serif" style={{ fontSize: 40, marginTop: 64, marginBottom: 24, color: 'var(--ink)' }}>How ED Medications Work</h2>
          <p>PDE5 inhibitors like Sildenafil and Tadalafil work by blocking the enzyme phosphodiesterase type 5 in the smooth muscle of the corpus cavernosum (erectile tissue). This enhances the natural <strong>nitric oxide → cGMP pathway</strong> that produces an erection:</p>
          <ul style={{ marginBottom: 24, paddingLeft: 20 }}>
            <li style={{ marginBottom: 12 }}><strong>Sexual stimulation</strong> triggers nitric oxide (NO) release from nerve endings and endothelial cells in the penis.</li>
            <li style={{ marginBottom: 12 }}><strong>NO activates guanylate cyclase</strong>, increasing cyclic GMP (cGMP) — the molecule that relaxes smooth muscle and dilates penile arteries.</li>
            <li style={{ marginBottom: 12 }}><strong>PDE5 normally breaks down cGMP</strong>. By inhibiting PDE5, medications allow cGMP to accumulate, producing stronger and longer-lasting blood flow.</li>
            <li style={{ marginBottom: 12 }}><strong>The result:</strong> A firmer, more reliable erection in response to natural sexual arousal. These medications do <em>not</em> cause spontaneous erections — stimulation is still required.</li>
          </ul>

          {/* Low Libido Section */}
          <h2 className="serif" style={{ fontSize: 40, marginTop: 64, marginBottom: 24, color: 'var(--ink)' }}>ED vs. Low Libido — What's the Difference?</h2>
          <p><strong>Erectile dysfunction</strong> is a mechanical issue — difficulty achieving or maintaining an erection despite sexual desire. <strong>Low libido</strong> is a desire issue — reduced interest in sexual activity altogether. They often coexist but have different underlying causes:</p>
          <ul style={{ marginBottom: 24, paddingLeft: 20 }}>
            <li style={{ marginBottom: 8 }}><strong>Low testosterone</strong> is a leading cause of low libido in men, especially after age 30</li>
            <li style={{ marginBottom: 8 }}><strong>Stress, depression, and anxiety</strong> can suppress both desire and physical performance</li>
            <li style={{ marginBottom: 8 }}><strong>Medications</strong> (SSRIs, blood pressure drugs) frequently affect both libido and erectile function</li>
            <li style={{ marginBottom: 8 }}><strong>Relationship dynamics</strong> and psychological factors play a significant role in sexual desire</li>
          </ul>
          <p>A comprehensive evaluation addresses both — combining ED medication with hormone optimization, lifestyle changes, or mental health support when needed.</p>

          {/* CTA 2 */}
          <div className="card" style={{ padding: 40, margin: '48px 0', textAlign: 'center', background: '#FFFDF9', borderColor: 'var(--brand)' }}>
            <div style={{ width: 48, height: 48, borderRadius: '50%', background: 'var(--brand-soft)', color: 'var(--brand)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px' }}>
              <Icon.Shield size={24} />
            </div>
            <h3 className="serif" style={{ fontSize: 28, marginBottom: 16, color: 'var(--ink)' }}>100% Discreet. Clinician-Prescribed.</h3>
            <p style={{ marginBottom: 24, fontSize: 16 }}>Plain packaging. No pharmacy visits. Licensed clinicians evaluate your health and prescribe the right treatment for your needs.</p>
            <a href={CTA_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-lg" style={{ display: 'inline-flex', justifyContent: 'center' }}>
              Learn More <Icon.Arrow />
            </a>
          </div>

          {/* How It Works */}
          <h2 id="how-it-works" className="serif" style={{ fontSize: 40, marginTop: 64, marginBottom: 24, color: 'var(--ink)' }}>How It Works — 3 Simple Steps</h2>
          <div style={{ display: 'grid', gridTemplateColumns: '48px 1fr', gap: '20px 16px', margin: '32px 0' }}>
            {[
              { step: '1', title: 'Private Health Assessment', desc: 'Complete a quick online questionnaire about your symptoms, medical history, and current medications. Everything is HIPAA-protected and confidential.' },
              { step: '2', title: 'Clinician Review & Prescription', desc: 'A licensed clinician reviews your assessment within 24 hours. If appropriate, your prescription is sent to a licensed US pharmacy for fulfillment.' },
              { step: '3', title: 'Discreet Delivery', desc: 'Your medication is shipped free in plain, unmarked packaging directly to your door. No pharmacy trips, no awkward conversations.' },
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

          {/* Side Effects */}
          <h2 id="safety" className="serif" style={{ fontSize: 40, marginTop: 64, marginBottom: 24, color: 'var(--ink)' }}>Side Effects & Safety</h2>
          <p>PDE5 inhibitors are well-studied and generally well-tolerated. Common side effects are usually mild and temporary:</p>
          <ul style={{ marginBottom: 24, paddingLeft: 20 }}>
            <li style={{ marginBottom: 8 }}><strong>Headache</strong> (most common)</li>
            <li style={{ marginBottom: 8 }}><strong>Facial flushing</strong></li>
            <li style={{ marginBottom: 8 }}><strong>Nasal congestion</strong></li>
            <li style={{ marginBottom: 8 }}><strong>Indigestion / dyspepsia</strong></li>
            <li style={{ marginBottom: 8 }}><strong>Dizziness</strong></li>
            <li style={{ marginBottom: 8 }}><strong>Visual changes</strong> (blue-tinged vision, more common with sildenafil)</li>
          </ul>
          <p><strong>Important:</strong> PDE5 inhibitors must <strong>not</strong> be taken with nitrate medications (nitroglycerin, isosorbide) due to the risk of severe hypotension. Your clinician will screen for contraindications and drug interactions during your assessment.</p>

          {/* FAQ */}
          <h2 id="faq" className="serif" style={{ fontSize: 40, marginTop: 64, marginBottom: 24, color: 'var(--ink)' }}>Frequently Asked Questions</h2>

          {[
            { q: 'What is erectile dysfunction?', a: 'Erectile dysfunction (ED) is the persistent inability to achieve or maintain an erection firm enough for satisfactory sexual intercourse. It affects over 50% of men over 40 in some form and can be caused by vascular, hormonal, neurological, or psychological factors.' },
            { q: 'What is the difference between Sildenafil and Tadalafil?', a: 'Both are PDE5 inhibitors that increase blood flow to the penis. Sildenafil (Viagra) works for 4–6 hours and is taken as-needed. Tadalafil (Cialis) lasts up to 36 hours and can also be taken as a low daily dose (5mg) for continuous coverage — often called the "weekend pill."' },
            { q: 'How quickly do ED medications work?', a: 'Sildenafil typically takes effect within 30–60 minutes on an empty stomach. Tadalafil can take 30 minutes to 2 hours but lasts significantly longer. Both require sexual stimulation to work — they don\'t cause spontaneous erections.' },
            { q: 'Can ED be a sign of other health problems?', a: 'Yes. ED is frequently an early indicator of cardiovascular disease, diabetes, low testosterone, or psychological conditions like anxiety and depression. Addressing ED often uncovers treatable underlying conditions.' },
            { q: 'Will my order be discreet?', a: 'Absolutely. All medications are shipped in plain, unmarked packaging with no indication of the contents. Your privacy is protected at every step of the process.' },
            { q: 'Is it safe to get ED medication prescribed online?', a: 'Yes. Telehealth prescribing of ED medications is fully legal in most U.S. states when conducted by a licensed clinician after a proper medical evaluation. All prescriptions are reviewed for safety, contraindications, and drug interactions.' },
          ].map((faq, i) => (
            <div key={i} style={{ padding: '28px 0', borderBottom: '1px solid var(--line-soft)' }}>
              <h3 style={{ fontSize: 18, marginBottom: 12, color: 'var(--ink)' }}>{faq.q}</h3>
              <p style={{ margin: 0, fontSize: 16, color: 'var(--ink-2)', lineHeight: 1.6 }}>{faq.a}</p>
            </div>
          ))}

          {/* CTA 3 — Final dark block */}
          <div style={{ padding: 40, marginTop: 60, borderRadius: 20, background: 'var(--ink)', color: '#FBF8F3', textAlign: 'center' }}>
            <h2 className="serif" style={{ fontSize: 40, marginBottom: 20, color: '#FBF8F3' }}>Take the First Step</h2>
            <p style={{ fontSize: 18, opacity: 0.9, marginBottom: 32, maxWidth: 500, margin: '0 auto 32px' }}>
              Discreet, affordable ED treatment. Licensed clinicians. Free shipping in plain packaging. Your confidence, restored.
            </p>
            <a href={CTA_URL} target="_blank" rel="noopener noreferrer" className="btn btn-lg" style={{ background: '#FBF8F3', color: 'var(--ink)', display: 'inline-flex', justifyContent: 'center', width: '100%', maxWidth: 300 }}>
              Learn More <Icon.Arrow />
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}

export { EDPage, EDNav };
