"use client";
import React, { useState, useEffect } from 'react';
import { Icon, Logo } from './common.jsx';

const CTA_URL = "https://go.telehealthfx.com/metformin";

function MetforminNav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => { const f = () => setScrolled(window.scrollY > 20); window.addEventListener('scroll', f); return () => window.removeEventListener('scroll', f); }, []);
  return (
    <nav style={{ position:'relative',zIndex:50,background:scrolled?'rgba(245,241,234,0.85)':'rgba(245,241,234,1)',backdropFilter:scrolled?'blur(12px)':'none',borderBottom:scrolled?'1px solid var(--line-soft)':'1px solid transparent',transition:'all .3s ease'}}>
      <div className="container" style={{display:'flex',alignItems:'center',justifyContent:'space-between',height:72}}>
        <a href="/" style={{textDecoration:'none',color:'inherit'}}><Logo /></a>
        <div className="nav-links" style={{display:'flex',gap:32,fontSize:14,color:'var(--ink-2)'}}>
          <a href="#what-is-metformin">What is Metformin</a>
          <a href="#benefits">Benefits</a>
          <a href="#how-it-works">How It Works</a>
          <a href="#safety">Safety</a>
          <a href="#faq">FAQ</a>
        </div>
        <div className="flex-row nav-actions" style={{gap:12,alignItems:'center'}}>
          <a className="btn btn-primary" href={CTA_URL} target="_blank" rel="noopener noreferrer">Learn More <Icon.Arrow /></a>
        </div>
      </div>
    </nav>
  );
}

function MetforminPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "MedicalWebPage",
        "@id": "https://telehealthfx.com/medications/metformin/#webpage",
        "name": "Metformin for Longevity & Metabolic Health | Telehealth FX",
        "description": "Metformin 500mg prescribed online for metabolic health, insulin sensitivity, and longevity. Physician-guided, discreet 30-day supply shipped to your door.",
        "url": "https://telehealthfx.com/medications/metformin/",
        "lastReviewed": "2026-05-12",
        "medicalAudience": {
          "@type": "MedicalAudience",
          "audienceType": "Patient",
          "healthCondition": {
            "@type": "MedicalCondition",
            "name": "Metabolic Syndrome / Insulin Resistance",
            "signOrSymptom": [
              { "@type": "MedicalSymptom", "name": "Insulin resistance" },
              { "@type": "MedicalSymptom", "name": "Elevated fasting glucose" },
              { "@type": "MedicalSymptom", "name": "Visceral fat accumulation" },
              { "@type": "MedicalSymptom", "name": "Accelerated biological aging" },
              { "@type": "MedicalSymptom", "name": "Chronic low-grade inflammation" }
            ]
          }
        },
        "about": {
          "@type": "Drug",
          "name": "Metformin",
          "nonProprietaryName": "Metformin Hydrochloride",
          "drugClass": "Biguanide",
          "mechanismOfAction": "Activates AMP-activated protein kinase (AMPK), reducing hepatic glucose production, improving peripheral insulin sensitivity, and modulating cellular pathways associated with aging and inflammation.",
          "administrationRoute": "Oral",
          "dosageForm": "Tablet",
          "activeIngredient": "Metformin Hydrochloride",
          "prescriptionStatus": "PrescriptionOnly",
          "availableStrength": ["500mg"],
          "isAvailableGenerically": true,
          "clinicalPharmacology": "Metformin decreases hepatic glucose output, increases insulin-mediated glucose uptake in peripheral tissues, and activates AMPK — a master regulator of cellular energy metabolism implicated in longevity pathways.",
          "description": "Type 2 diabetes mellitus; off-label use for metabolic optimization and longevity",
          "warning": "Possible side effects include GI discomfort (nausea, diarrhea), vitamin B12 depletion with long-term use, and lactic acidosis (extremely rare). Contraindicated in severe renal impairment (eGFR less than 30), metabolic acidosis, and heavy alcohol use."
        },
        "publisher": {
          "@type": "MedicalOrganization",
          "name": "Telehealth FX",
          "url": "https://telehealthfx.com",
          "medicalSpecialty": [
            "http://schema.org/Endocrine",
            "http://schema.org/PrimaryCare"
          ]
        }
      },
      {
        "@type": "FAQPage",
        "@id": "https://telehealthfx.com/medications/metformin/#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What is Metformin?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Metformin is one of the most widely prescribed medications in the world, originally developed for type 2 diabetes. It works by activating AMPK, improving insulin sensitivity, and reducing hepatic glucose production. Increasingly, it is prescribed off-label for metabolic optimization and longevity."
            }
          },
          {
            "@type": "Question",
            "name": "Why are people taking Metformin for anti-aging?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Research shows Metformin activates AMPK and modulates mTOR — two pathways central to cellular aging. Observational studies found diabetics on Metformin lived longer than non-diabetics not taking it. The TAME (Targeting Aging with Metformin) trial is the first FDA-approved study to test a drug specifically for aging."
            }
          },
          {
            "@type": "Question",
            "name": "What are the side effects?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "The most common side effects are GI-related: nausea, diarrhea, and stomach discomfort — typically mild and improving within 2–4 weeks as your body adjusts. Extended-release formulations significantly reduce GI side effects. Long-term use may deplete Vitamin B12, which can be supplemented."
            }
          },
          {
            "@type": "Question",
            "name": "Do I need to have diabetes to take Metformin?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "No. While Metformin is FDA-approved for type 2 diabetes, physicians increasingly prescribe it off-label for metabolic optimization, insulin resistance, PCOS, and longevity protocols — particularly for patients with early metabolic dysfunction."
            }
          },
          {
            "@type": "Question",
            "name": "How long before I notice effects?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Improvements in fasting glucose and insulin sensitivity are typically measurable within 2–4 weeks. Metabolic and body composition benefits accumulate over months. Anti-aging and longevity effects are long-term and best assessed through biomarker tracking."
            }
          },
          {
            "@type": "Question",
            "name": "Is it safe to take long-term?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. Metformin has one of the longest and most robust safety profiles of any prescription medication, with over 60 years of clinical use. Regular monitoring of kidney function and B12 levels is recommended for long-term users."
            }
          }
        ]
      }
    ]
  };

  return (
    <section className="section" style={{ minHeight: '60vh', paddingTop: 120 }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <div className="container" style={{ maxWidth: 840 }}>

        <div style={{ textAlign: 'center', marginBottom: 48 }}>
          <div className="pill pill-brand" style={{ marginBottom: 20, display: 'inline-flex' }}>
            <span className="pill-dot" /> Longevity & Metabolic Health
          </div>
          <h1 className="serif" style={{ fontSize: 72, marginBottom: 28, lineHeight: 0.95 }}>
            Metformin<br/><span style={{ fontStyle: 'italic', color: 'var(--brand)' }}>for Longevity</span>
          </h1>
          <p style={{ fontSize: 20, color: 'var(--ink-2)', maxWidth: 620, margin: '0 auto 40px', lineHeight: 1.6 }}>
            The world's most studied anti-aging medication — now prescribed online for metabolic optimization, insulin sensitivity, and healthy aging. 500mg, 30-day supply, physician-guided.
          </p>
          <a href={CTA_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-lg" style={{ display: 'inline-flex' }}>Learn More <Icon.Arrow /></a>
        </div>

        <div style={{ marginBottom: 48, borderRadius: 20, overflow: 'hidden', aspectRatio: '16/9' }}>
          <img src="/assets/metformin-hero.png" alt="Active couple jogging at sunrise — Metformin supports metabolic health and longevity" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }} />
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24, marginBottom: 80 }}>
          {[{ num: '60+', label: 'Years of Clinical Use' },{ num: '500mg', label: 'Physician-Guided Dose' },{ num: 'Free', label: 'Discreet Shipping' }].map((s, i) => (
            <div key={i} className="card" style={{ padding: 28, textAlign: 'center' }}>
              <div className="serif" style={{ fontSize: 36, color: 'var(--brand)', marginBottom: 4 }}>{s.num}</div>
              <div style={{ fontSize: 13, color: 'var(--ink-3)' }}>{s.label}</div>
            </div>
          ))}
        </div>

        <div className="blog-content" style={{ fontSize: 18, lineHeight: 1.7, color: 'var(--ink-2)' }}>

          <h2 id="what-is-metformin" className="serif" style={{ fontSize: 40, marginTop: 0, marginBottom: 24, color: 'var(--ink)' }}>What Is Metformin?</h2>
          <p>Metformin is one of the <strong>most widely prescribed medications in the world</strong>, with over 60 years of clinical use and one of the most robust safety profiles of any prescription drug. Originally developed for type 2 diabetes, Metformin has emerged as the leading candidate in <strong>longevity medicine</strong> — a field focused on slowing biological aging at the cellular level.</p>
          <p>Metformin works by activating <strong>AMP-activated protein kinase (AMPK)</strong>, a master metabolic sensor that regulates how cells produce and use energy. By activating AMPK, Metformin improves insulin sensitivity, reduces hepatic glucose production, modulates inflammation, and influences cellular pathways directly linked to aging — including <strong>mTOR suppression</strong> and <strong>autophagy activation</strong>.</p>
          <p>The landmark <strong>TAME (Targeting Aging with Metformin)</strong> trial — the first FDA-approved clinical study to test a drug specifically for aging — has brought Metformin into mainstream longevity conversations. Observational studies have shown that <strong>diabetics taking Metformin actually lived longer than non-diabetics</strong> not taking it, suggesting benefits far beyond glucose control.</p>

          <h2 id="benefits" className="serif" style={{ fontSize: 40, marginTop: 64, marginBottom: 24, color: 'var(--ink)' }}>Why People Take Metformin</h2>
          <ul style={{ marginBottom: 24, paddingLeft: 20 }}>
            <li style={{ marginBottom: 12 }}><strong>Metabolic Optimization:</strong> Improves insulin sensitivity and reduces fasting glucose — critical for preventing metabolic syndrome, pre-diabetes, and type 2 diabetes progression.</li>
            <li style={{ marginBottom: 12 }}><strong>Longevity & Anti-Aging:</strong> Activates AMPK and suppresses mTOR, two master regulators of cellular aging. Promotes autophagy — the body's process for clearing damaged cells and recycling components.</li>
            <li style={{ marginBottom: 12 }}><strong>Body Composition:</strong> Supports healthier body composition by improving how the body processes glucose and fat. Often used alongside fitness programs to optimize metabolic efficiency.</li>
            <li style={{ marginBottom: 12 }}><strong>Cardiovascular Protection:</strong> Studies show reduced cardiovascular events in Metformin users, likely through improved endothelial function and reduced chronic inflammation.</li>
            <li style={{ marginBottom: 12 }}><strong>Neuroprotection:</strong> Emerging research links Metformin to reduced risk of cognitive decline and neurodegenerative diseases, potentially through anti-inflammatory and AMPK-mediated mechanisms.</li>
            <li style={{ marginBottom: 12 }}><strong>Cancer Risk Reduction:</strong> Multiple observational studies associate Metformin use with reduced incidence of certain cancers, possibly via mTOR suppression and improved metabolic signaling.</li>
          </ul>

          <div className="card" style={{ padding: 40, margin: '48px 0', textAlign: 'center', background: '#FFFDF9', borderColor: 'var(--brand)' }}>
            <h3 className="serif" style={{ fontSize: 28, marginBottom: 16, color: 'var(--ink)' }}>Optimize Your Metabolic Health</h3>
            <p style={{ marginBottom: 24, fontSize: 16 }}>Complete a quick online assessment. A licensed physician reviews your history and determines if Metformin is right for your longevity protocol.</p>
            <a href={CTA_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-lg" style={{ display: 'inline-flex', justifyContent: 'center' }}>Learn More <Icon.Arrow /></a>
          </div>

          <h2 className="serif" style={{ fontSize: 40, marginTop: 64, marginBottom: 24, color: 'var(--ink)' }}>How Metformin Works</h2>
          <p>Metformin's mechanism of action is multifaceted, targeting several key metabolic and cellular pathways:</p>
          <ul style={{ marginBottom: 24, paddingLeft: 20 }}>
            <li style={{ marginBottom: 12 }}><strong>AMPK Activation:</strong> AMPK is the body's energy sensor. When activated, it shifts cells into a "conservation and repair" mode — increasing glucose uptake, fat oxidation, and mitochondrial biogenesis while suppressing energy-intensive growth pathways.</li>
            <li style={{ marginBottom: 12 }}><strong>mTOR Suppression:</strong> mTOR (mechanistic target of rapamycin) drives cell growth but accelerates aging when chronically active. Metformin's mTOR suppression is one of its primary anti-aging mechanisms.</li>
            <li style={{ marginBottom: 12 }}><strong>Reduced Hepatic Glucose Output:</strong> Metformin decreases the liver's production of glucose, lowering fasting blood sugar and reducing insulin demand on the pancreas.</li>
            <li style={{ marginBottom: 12 }}><strong>Improved Insulin Sensitivity:</strong> Enhances peripheral glucose uptake in muscle and fat tissue, reversing the insulin resistance that underlies metabolic syndrome.</li>
            <li style={{ marginBottom: 12 }}><strong>Autophagy Promotion:</strong> Supports the body's cellular cleanup process, clearing damaged proteins and organelles — a process that declines with age and is linked to neurodegeneration and cancer.</li>
          </ul>

          <div className="card" style={{ padding: 40, margin: '48px 0', textAlign: 'center', background: '#FFFDF9', borderColor: 'var(--brand)' }}>
            <div style={{ width: 48, height: 48, borderRadius: '50%', background: 'var(--brand-soft)', color: 'var(--brand)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px' }}><Icon.Shield size={24} /></div>
            <h3 className="serif" style={{ fontSize: 28, marginBottom: 16, color: 'var(--ink)' }}>60+ Years of Safety Data</h3>
            <p style={{ marginBottom: 24, fontSize: 16 }}>Metformin has one of the longest, most robust safety profiles of any prescription medication. Physician-guided, discreet delivery included.</p>
            <a href={CTA_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-lg" style={{ display: 'inline-flex', justifyContent: 'center' }}>Learn More <Icon.Arrow /></a>
          </div>

          <h2 id="how-it-works" className="serif" style={{ fontSize: 40, marginTop: 64, marginBottom: 24, color: 'var(--ink)' }}>How It Works — 3 Simple Steps</h2>
          <div style={{ display: 'grid', gridTemplateColumns: '48px 1fr', gap: '20px 16px', margin: '32px 0' }}>
            {[{ step: '1', title: 'Online Health Assessment', desc: 'Answer questions about your metabolic health, medical history, and longevity goals. Share any recent lab work if available.' },{ step: '2', title: 'Physician Review & Prescription', desc: 'A licensed physician evaluates your assessment within 24 hours. If appropriate, your Metformin prescription is sent to a licensed US pharmacy.' },{ step: '3', title: 'Discreet Monthly Delivery', desc: 'Your 30-day supply ships free in plain packaging. Ongoing physician oversight and lab monitoring recommendations are included.' }].map((s, i) => (
              <React.Fragment key={i}>
                <div style={{ width: 48, height: 48, borderRadius: '50%', background: 'var(--brand)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 600, fontSize: 18, fontFamily: 'var(--sans)', flexShrink: 0 }}>{s.step}</div>
                <div style={{ paddingTop: 4 }}><h3 style={{ fontSize: 20, marginBottom: 8, color: 'var(--ink)' }}>{s.title}</h3><p style={{ margin: 0, fontSize: 16, color: 'var(--ink-2)' }}>{s.desc}</p></div>
              </React.Fragment>
            ))}
          </div>

          <h2 id="safety" className="serif" style={{ fontSize: 40, marginTop: 64, marginBottom: 24, color: 'var(--ink)' }}>Side Effects & Safety</h2>
          <p>Metformin is generally very well-tolerated. The most common side effects are GI-related and typically improve within the first 2–4 weeks:</p>
          <ul style={{ marginBottom: 24, paddingLeft: 20 }}>
            <li style={{ marginBottom: 8 }}><strong>Nausea or stomach discomfort</strong> (most common, typically transient)</li>
            <li style={{ marginBottom: 8 }}><strong>Diarrhea</strong> (reduced with extended-release formulation)</li>
            <li style={{ marginBottom: 8 }}><strong>Metallic taste</strong> (uncommon)</li>
            <li style={{ marginBottom: 8 }}><strong>Vitamin B12 depletion</strong> (long-term use; easily supplemented)</li>
            <li style={{ marginBottom: 8 }}><strong>Lactic acidosis</strong> (extremely rare; primarily in patients with severe renal impairment)</li>
          </ul>
          <p><strong>Important:</strong> Metformin is not appropriate for patients with severe kidney disease (eGFR &lt;30), metabolic acidosis, or heavy alcohol use. Your physician will review your complete medical history and recommend periodic kidney function and B12 monitoring.</p>

          <h2 id="faq" className="serif" style={{ fontSize: 40, marginTop: 64, marginBottom: 24, color: 'var(--ink)' }}>Frequently Asked Questions</h2>
          {[{ q: 'What is Metformin?', a: 'Metformin is one of the most widely prescribed medications in the world, with over 60 years of clinical use. Originally developed for type 2 diabetes, it works by activating AMPK, improving insulin sensitivity, and reducing hepatic glucose production. It is increasingly prescribed off-label for metabolic optimization and longevity.' },{ q: 'Why are people taking Metformin for anti-aging?', a: 'Research shows Metformin activates AMPK and modulates mTOR — two pathways central to cellular aging. Observational studies found diabetics on Metformin lived longer than non-diabetics not taking it. The TAME trial is the first FDA-approved study to test a drug specifically for aging.' },{ q: 'Do I need to have diabetes to take Metformin?', a: 'No. While Metformin is FDA-approved for type 2 diabetes, physicians increasingly prescribe it off-label for metabolic optimization, insulin resistance, PCOS, and longevity protocols — particularly for patients with early metabolic dysfunction.' },{ q: 'What are the side effects?', a: 'The most common side effects are GI-related: nausea, diarrhea, and stomach discomfort — typically mild and improving within 2–4 weeks. Extended-release formulations significantly reduce GI side effects. Long-term use may deplete Vitamin B12, which can be supplemented.' },{ q: 'How long before I notice effects?', a: 'Improvements in fasting glucose and insulin sensitivity are typically measurable within 2–4 weeks. Metabolic and body composition benefits accumulate over months. Anti-aging and longevity effects are long-term and best assessed through biomarker tracking.' },{ q: 'Is it safe to take long-term?', a: 'Yes. Metformin has one of the longest and most robust safety profiles of any prescription medication, with over 60 years of clinical use. Regular monitoring of kidney function and B12 levels is recommended for long-term users.' }].map((faq, i) => (
            <div key={i} style={{ padding: '28px 0', borderBottom: '1px solid var(--line-soft)' }}>
              <h3 style={{ fontSize: 18, marginBottom: 12, color: 'var(--ink)' }}>{faq.q}</h3>
              <p style={{ margin: 0, fontSize: 16, color: 'var(--ink-2)', lineHeight: 1.6 }}>{faq.a}</p>
            </div>
          ))}

          <div style={{ padding: 40, marginTop: 60, borderRadius: 20, background: 'var(--ink)', color: '#FBF8F3', textAlign: 'center' }}>
            <h2 className="serif" style={{ fontSize: 40, marginBottom: 20, color: '#FBF8F3' }}>Start Your Longevity Protocol</h2>
            <p style={{ fontSize: 18, opacity: 0.9, marginBottom: 32, maxWidth: 500, margin: '0 auto 32px' }}>Physician-guided Metformin. Free discreet shipping. 60+ years of safety data. Optimize your metabolic health today.</p>
            <a href={CTA_URL} target="_blank" rel="noopener noreferrer" className="btn btn-lg" style={{ background: '#FBF8F3', color: 'var(--ink)', display: 'inline-flex', justifyContent: 'center', width: '100%', maxWidth: 300 }}>Learn More <Icon.Arrow /></a>
          </div>
        </div>
      </div>
    </section>
  );
}

export { MetforminPage, MetforminNav };
