"use client";
import React, { useState, useEffect } from 'react';
import { Icon, Logo } from './common.jsx';
import { PatientReviewsSection } from './patient-reviews-section.jsx';

const CTA_URL = "https://go.telehealthfx.com/petermd?aff_sub=tfx_trt_page";

// ============================================================================
// STANDALONE NAV — No GLP-1 banner, TRT-specific CTA
// ============================================================================
function TestosteroneNav() {
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
          <a href="#what-is-trt">What is TRT</a>
          <a href="#treatments">Treatment Options</a>
          <a href="#pricing">Pricing</a>
          <a href="#how-it-works">How It Works</a>
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

function LowTScreener({ ctaUrl }) {
  const [selected, setSelected] = useState([]);
  
  const symptoms = [
    { id: 'fatigue', label: 'Afternoon energy crashes — even after 7+ hours of sleep' },
    { id: 'belly_fat', label: 'Stubborn midsection weight gain that workouts won\'t shift' },
    { id: 'libido', label: 'Noticeable drop in sex drive, performance, or morning erections' },
    { id: 'brain_fog', label: 'Brain fog, reduced drive, or difficulty concentrating at work' },
    { id: 'recovery', label: 'Prolonged muscle soreness and slow recovery after exercise' },
    { id: 'mood', label: 'Unexplained irritability, mood dips, or lack of competitive edge' }
  ];

  const toggleSymptom = (id) => {
    setSelected(prev => 
      prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]
    );
  };

  const count = selected.length;

  return (
    <div className="card" style={{ padding: '36px 32px', marginBottom: 80, background: 'linear-gradient(135deg, rgba(46, 74, 59, 0.05), rgba(46, 74, 59, 0.02))', border: '2px solid var(--brand)', borderRadius: 20 }}>
      <div style={{ textAlign: 'center', marginBottom: 28 }}>
        <div style={{ display: 'inline-block', padding: '4px 12px', borderRadius: 9999, background: 'var(--brand)', color: '#fff', fontSize: 12, fontWeight: 700, textTransform: 'uppercase', letterSpacing: 0.5, marginBottom: 12 }}>
          Interactive Clinical Screener
        </div>
        <h2 className="serif" style={{ fontSize: 32, marginBottom: 12, color: 'var(--ink)' }}>Could Low Testosterone Be Holding You Back?</h2>
        <p style={{ fontSize: 16, color: 'var(--ink-2)', maxWidth: 580, margin: '0 auto' }}>
          Select any symptoms you have experienced consistently over the past 30 days:
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 14, marginBottom: 28 }}>
        {symptoms.map(s => {
          const isChecked = selected.includes(s.id);
          return (
            <div
              key={s.id}
              onClick={() => toggleSymptom(s.id)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 12,
                padding: '14px 18px',
                borderRadius: 12,
                background: isChecked ? 'rgba(46, 74, 59, 0.1)' : '#FFFFFF',
                border: isChecked ? '2px solid var(--brand)' : '1px solid var(--line)',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                userSelect: 'none'
              }}
            >
              <div style={{
                width: 22,
                height: 22,
                borderRadius: 6,
                border: isChecked ? '2px solid var(--brand)' : '2px solid var(--line-soft)',
                background: isChecked ? 'var(--brand)' : '#FFF',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0
              }}>
                {isChecked && <span style={{ color: '#FFF', fontSize: 13, fontWeight: 900 }}>✓</span>}
              </div>
              <span style={{ fontSize: 14, color: isChecked ? 'var(--ink)' : 'var(--ink-2)', fontWeight: isChecked ? 600 : 400 }}>
                {s.label}
              </span>
            </div>
          );
        })}
      </div>

      {count >= 2 ? (
        <div style={{
          background: '#FFFFFF',
          padding: '24px 28px',
          borderRadius: 14,
          border: '1px solid var(--brand)',
          textAlign: 'center',
          boxShadow: '0 4px 16px rgba(46, 74, 59, 0.08)'
        }}>
          <div style={{ fontSize: 15, fontWeight: 700, color: 'var(--brand)', marginBottom: 8 }}>
            ⚠️ {count} Clinical Indicators Flagged
          </div>
          <p style={{ fontSize: 15, color: 'var(--ink-2)', maxWidth: 540, margin: '0 auto 18px', lineHeight: 1.5 }}>
            Your selections match the clinical profile for suboptimal free or total testosterone. Peter MD provides comprehensive at-home diagnostic lab kits and board-certified TRT protocols from <strong>$89/month</strong>.
          </p>
          <a
            href="https://go.telehealthfx.com/petermd?aff_sub=tfx_trt_screener"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary btn-lg"
            style={{ display: 'inline-flex' }}
          >
            Check Your TRT Eligibility ($89 Promo) <Icon.Arrow />
          </a>
          <div style={{ fontSize: 12, color: 'var(--ink-3)', marginTop: 10 }}>
            ⚡ 100% Online Physician Review · Free Lab Analysis with Protocol
          </div>
        </div>
      ) : (
        <div style={{ textAlign: 'center', padding: '16px', background: 'rgba(0,0,0,0.02)', borderRadius: 12 }}>
          <p style={{ fontSize: 14, color: 'var(--ink-3)', margin: 0 }}>
            Select 2 or more symptoms above to view your personalized hormone optimization pathway.
          </p>
        </div>
      )}
    </div>
  );
}

function TestosteronePage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "MedicalWebPage",
        "@id": "https://telehealthfx.com/medications/testosterone/#webpage",
        "name": "Testosterone Therapy (TRT) Program | Telehealth FX",
        "description": "Get prescribed Testosterone Replacement Therapy (TRT) online — injectable, oral, or topical. From $89/mo with licensed clinicians, free discreet shipping, and zero hidden fees.",
        "url": "https://telehealthfx.com/medications/testosterone/",
        "lastReviewed": "2026-05-12",
        "medicalAudience": {
          "@type": "MedicalAudience",
          "audienceType": "Patient",
          "healthCondition": {
            "@type": "MedicalCondition",
            "name": "Hypogonadism (Low Testosterone)",
            "alternateName": "Low T",
            "associatedAnatomy": {
              "@type": "AnatomicalStructure",
              "name": "Endocrine System"
            },
            "signOrSymptom": [
              { "@type": "MedicalSymptom", "name": "Chronic fatigue" },
              { "@type": "MedicalSymptom", "name": "Low libido" },
              { "@type": "MedicalSymptom", "name": "Brain fog and poor concentration" },
              { "@type": "MedicalSymptom", "name": "Stubborn weight gain" },
              { "@type": "MedicalSymptom", "name": "Mood swings and irritability" },
              { "@type": "MedicalSymptom", "name": "Slow exercise recovery" }
            ]
          }
        },
        "about": {
          "@type": "Substance",
          "name": "Testosterone Cypionate",
          "nonProprietaryName": "Testosterone Cypionate",
          "drugClass": "Androgen / Anabolic Steroid (Hormone Replacement Therapy)",
          "mechanismOfAction": "Exogenous testosterone replacement restores serum testosterone to optimal physiological levels (600–1,100 ng/dL), reversing symptoms of male hypogonadism including fatigue, low libido, cognitive decline, and loss of lean body mass.",
          "administrationRoute": ["Subcutaneous injection", "Intramuscular injection", "Oral", "Topical cream"],
          "dosageForm": ["Injectable solution", "Oral tablet (Enclomiphene)", "Topical cream"],
          "activeIngredient": "Testosterone Cypionate",
          "prescriptionStatus": "PrescriptionOnly",
          "isAvailableGenerically": true,
          "clinicalPharmacology": "Testosterone Cypionate is a long-acting esterified form of testosterone administered via injection. It provides sustained release of testosterone over 7–14 days, restoring physiological androgen levels and promoting anabolic effects on muscle, bone, and metabolism.",
          "description": "Testosterone replacement therapy for conditions associated with deficiency or absence of endogenous testosterone (male hypogonadism)",
          "warning": "Possible side effects include acne or oily skin, injection site reactions, increased red blood cell count (erythrocytosis), fluid retention, and potential suppression of spermatogenesis. Contraindicated in prostate cancer, breast cancer in men, women who are or may become pregnant, polycythemia, and untreated severe sleep apnea.",
          "interactingDrug": "Insulin, anticoagulants (warfarin), corticosteroids"
        },
        "publisher": {
          "@type": "MedicalOrganization",
          "name": "Telehealth FX",
          "url": "https://telehealthfx.com",
          "medicalSpecialty": [
            "http://schema.org/Endocrine",
            "http://schema.org/Urologic"
          ]
        }
      },
      {
        "@type": "Product",
        "@id": "https://telehealthfx.com/medications/testosterone/#product",
        "name": "Testosterone Replacement Therapy (TRT) Program",
        "brand": { "@type": "Brand", "name": "Telehealth FX" },
        "description": "Comprehensive testosterone replacement therapy program with bloodwork, licensed clinician consultation, and custom medication delivery.",
        "image": "https://telehealthfx.com/assets/Site%20Icon-modified.png",
        "sku": "TRT-01",
        "url": "https://telehealthfx.com/medications/testosterone/",
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "bestRating": "5",
          "worstRating": "1",
          "reviewCount": "187",
          "ratingCount": "187"
        },
        "review": [
          {
            "@type": "Review",
            "author": { "@type": "Person", "name": "Chris M." },
            "datePublished": "2026-03-08",
            "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
            "reviewBody": "Energy levels completely transformed within 6 weeks. I'm sleeping better, thinking clearer, and my gym performance is back to where it was in my 20s. The online process was incredibly easy."
          },
          {
            "@type": "Review",
            "author": { "@type": "Person", "name": "Robert H." },
            "datePublished": "2026-04-18",
            "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
            "reviewBody": "After years of feeling exhausted and unmotivated, TRT gave me my life back. My levels went from 280 to 850 ng/dL. The clinician support has been outstanding."
          },
          {
            "@type": "Review",
            "author": { "@type": "Person", "name": "Derek W." },
            "datePublished": "2026-02-14",
            "reviewRating": { "@type": "Rating", "ratingValue": "4", "bestRating": "5" },
            "reviewBody": "Great program and responsive clinicians. Took about 8 weeks to dial in my dose perfectly but the results are worth it. Mood, energy, and body composition all improved significantly."
          }
        ],
        "offers": {
          "@type": "Offer",
          "price": "89.00",
          "priceCurrency": "USD",
          "availability": "https://schema.org/InStock",
          "validFrom": "2026-01-01",
          "priceValidUntil": "2027-12-31",
          "url": CTA_URL
        }
      },
      {
        "@type": "FAQPage",
        "@id": "https://telehealthfx.com/medications/testosterone/#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What is TRT?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Testosterone Replacement Therapy (TRT) is a medically supervised treatment that restores testosterone levels in men with clinically low testosterone (hypogonadism). It uses exogenous testosterone — typically Testosterone Cypionate — to bring serum levels back into the optimal 600–1,100 ng/dL range."
            }
          },
          {
            "@type": "Question",
            "name": "Do I need to see my regular doctor first?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "No. You can complete your entire assessment, lab work (if needed), and treatment plan 100% online. However, TRT does not replace your primary care provider — it complements your existing health care."
            }
          },
          {
            "@type": "Question",
            "name": "When will I see results from TRT?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Most men notice improved energy, mood, and mental clarity within 2–4 weeks. Body composition changes (increased muscle, reduced fat) and full sexual function improvements typically emerge over 8–12 weeks as levels stabilize."
            }
          },
          {
            "@type": "Question",
            "name": "I was told my testosterone is normal but I still have symptoms — what do I do?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Many labs use reference ranges that include elderly and unhealthy populations. A level of 350 ng/dL may be within range but far from optimal. A specialized TRT provider evaluates your symptoms alongside your labs, not just the number."
            }
          },
          {
            "@type": "Question",
            "name": "Will TRT affect my fertility?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Exogenous testosterone can suppress sperm production. If fertility preservation is important, your clinician may recommend Enclomiphene (oral TRT) or HCG alongside your protocol to maintain natural testosterone production and fertility."
            }
          },
          {
            "@type": "Question",
            "name": "Is it legal to get TRT prescribed online?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. Telehealth prescribing of testosterone is fully legal in most U.S. states when conducted by a licensed clinician after a proper medical evaluation and lab review."
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

        {/* Hero */}
        <div style={{ textAlign: 'center', marginBottom: 80 }}>
          <div className="pill pill-brand" style={{ marginBottom: 20, display: 'inline-flex' }}>
            <span className="pill-dot" /> Men's Hormone Optimization
          </div>
          <h1 className="serif" style={{ fontSize: 72, marginBottom: 28, lineHeight: 0.95 }}>
            Testosterone<br/>Therapy<br/><span style={{ fontStyle: 'italic', color: 'var(--brand)' }}>from $89/mo.</span>
          </h1>
          <p style={{ fontSize: 20, color: 'var(--ink-2)', maxWidth: 620, margin: '0 auto 40px', lineHeight: 1.6 }}>
            Personalized TRT prescribed by licensed clinicians and delivered to your door. Injectable, oral, and topical options — no waiting rooms, no guesswork.
          </p>
          <a href={CTA_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-lg" style={{ display: 'inline-flex' }}>
            See If You Qualify ($89 Promo) <Icon.Arrow />
          </a>
        </div>

        {/* Featured Image */}
        <div style={{ marginBottom: 48, borderRadius: 20, overflow: 'hidden', aspectRatio: '16/9' }}>
          <img
            src="/assets/trt-hero.png"
            alt="Athletic confident man after workout — testosterone replacement therapy restores energy, strength, and vitality"
            style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top' }}
          />
        </div>

        {/* Trust Strip */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24, marginBottom: 80 }}>
          {[
            { num: '$89', label: 'Starting Price/mo' },
            { num: '100%', label: 'Online Care' },
            { num: 'Free', label: 'Discreet Shipping' },
          ].map((s, i) => (
            <div key={i} className="card" style={{ padding: 28, textAlign: 'center' }}>
              <div className="serif" style={{ fontSize: 36, color: 'var(--brand)', marginBottom: 4 }}>{s.num}</div>
              <div style={{ fontSize: 13, color: 'var(--ink-3)' }}>{s.label}</div>
            </div>
          ))}
        </div>

        {/* Interactive Low T Clinical Screener */}
        <LowTScreener ctaUrl={CTA_URL} />

        {/* Content */}
        <div className="blog-content" style={{ fontSize: 18, lineHeight: 1.7, color: 'var(--ink-2)' }}>

          <h2 id="what-is-trt" className="serif" style={{ fontSize: 40, marginTop: 0, marginBottom: 24, color: 'var(--ink)' }}>What Is Testosterone Replacement Therapy (TRT)?</h2>
          <p>Testosterone Replacement Therapy (TRT) is a <strong>medically supervised hormone treatment</strong> that restores testosterone to optimal physiological levels in men diagnosed with hypogonadism — clinically low testosterone. After age 30, men lose roughly <strong>1–2% of their testosterone per year</strong>, and by their 40s and 50s, many experience symptoms severe enough to impact daily life, relationships, and long-term health.</p>
          <p>TRT works by supplementing exogenous testosterone (most commonly <strong>Testosterone Cypionate</strong>) via injection, oral medication, or topical cream. Once serum testosterone is restored to the <strong>600–1,100 ng/dL optimal range</strong>, patients typically report dramatic improvements in energy, body composition, mood, cognitive clarity, and sexual function — often within the first 4–8 weeks.</p>

          <h2 className="serif" style={{ fontSize: 40, marginTop: 64, marginBottom: 24, color: 'var(--ink)' }}>How Testosterone Therapy Helps</h2>
          <ul style={{ marginBottom: 24, paddingLeft: 20 }}>
            <li style={{ marginBottom: 12 }}><strong>Healthier Body Composition:</strong> Testosterone directly promotes lean muscle protein synthesis and accelerates fat oxidation, particularly visceral (belly) fat. Clinical data shows TRT patients gain 3–6 lbs of lean mass and lose 3–5 lbs of fat in the first 6 months.</li>
            <li style={{ marginBottom: 12 }}><strong>Sustained Energy &amp; Stamina:</strong> By optimizing mitochondrial function and red blood cell production, TRT eliminates the chronic fatigue, afternoon crashes, and exercise intolerance that define low-T.</li>
            <li style={{ marginBottom: 12 }}><strong>Restored Libido &amp; Sexual Function:</strong> Testosterone is the primary driver of male sexual desire. Restoring optimal levels improves libido, erectile quality, and overall sexual satisfaction — often within weeks.</li>
            <li style={{ marginBottom: 12 }}><strong>Mental Clarity &amp; Mood:</strong> Testosterone receptors are densely concentrated in the brain. Optimization reduces brain fog, irritability, and depressive symptoms while improving focus, motivation, and confidence.</li>
            <li style={{ marginBottom: 12 }}><strong>Cardiovascular &amp; Metabolic Health:</strong> Emerging research links optimized testosterone to improved insulin sensitivity, healthier lipid profiles, and reduced cardiovascular risk markers.</li>
            <li style={{ marginBottom: 12 }}><strong>Bone Density &amp; Joint Health:</strong> Testosterone stimulates osteoblast activity, protecting against osteoporosis and reducing fracture risk as men age.</li>
          </ul>

          {/* CTA 1 */}
          <div className="card" style={{ padding: 40, margin: '48px 0', textAlign: 'center', background: '#FFFDF9', borderColor: 'var(--brand)' }}>
            <h3 className="serif" style={{ fontSize: 28, marginBottom: 16, color: 'var(--ink)' }}>Ready to Optimize Your Testosterone?</h3>
            <p style={{ marginBottom: 24, fontSize: 16 }}>Complete a quick online assessment. A licensed clinician reviews your history and can get you started in as little as 3 steps.</p>
            <a href={CTA_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-lg" style={{ display: 'inline-flex', justifyContent: 'center' }}>
              Learn More <Icon.Arrow />
            </a>
          </div>

          {/* Treatment Options */}
          <h2 id="treatments" className="serif" style={{ fontSize: 40, marginTop: 64, marginBottom: 24, color: 'var(--ink)' }}>Treatment Options</h2>
          <p>Your clinician will recommend the delivery method that best fits your goals, lifestyle, and medical history:</p>

          <div style={{ margin: '32px 0', overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
              <thead>
                <tr style={{ background: 'var(--ink)', color: '#fff' }}>
                  <th style={{ padding: '16px', fontWeight: 500, fontSize: 14 }}>Method</th>
                  <th style={{ padding: '16px', fontWeight: 500, fontSize: 14 }}>How It Works</th>
                  <th style={{ padding: '16px', fontWeight: 500, fontSize: 14 }}>Best For</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Injectable TRT', 'Testosterone Cypionate injected subcutaneously 1–2x/week', 'Fastest symptom relief; most commonly prescribed'],
                  ['Oral TRT (Enclomiphene)', 'Stimulates your body\'s own testosterone production — needle-free', 'Fertility preservation; needle-averse patients'],
                  ['Topical Cream', 'Daily application to upper arms or shoulders', 'Steady-state levels; patients who prefer non-injection'],
                ].map(([method, how, best], i) => (
                  <tr key={i} style={{ borderBottom: '1px solid var(--line-soft)', background: i % 2 ? 'transparent' : '#FAFAFA' }}>
                    <td style={{ padding: '16px', fontWeight: 500 }}>{method}</td>
                    <td style={{ padding: '16px' }}>{how}</td>
                    <td style={{ padding: '16px', color: 'var(--brand)' }}>{best}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pricing */}
          <h2 id="pricing" className="serif" style={{ fontSize: 40, marginTop: 64, marginBottom: 24, color: 'var(--ink)' }}>Transparent Pricing</h2>
          <p>All plans include licensed clinician oversight, medication, and free discreet shipping. No hidden fees.</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20, margin: '32px 0' }}>
            {[
              { plan: '6-Month Plan', price: '$89', period: '/mo', note: 'Best Value — $89/mo ($534 billed biannually)', highlight: true },
              { plan: 'Quarterly', price: '$95', period: '/mo', note: 'Popular option — $95/mo billed quarterly', highlight: false },
              { plan: 'Month-to-Month', price: '$99', period: '/mo', note: 'Flexible month-to-month flat rate', highlight: false },
            ].map((p, i) => (
              <div key={i} className="card" style={{
                padding: 32,
                textAlign: 'center',
                border: p.highlight ? '2px solid var(--brand)' : '1px solid var(--line-soft)',
                position: 'relative',
              }}>
                {p.highlight && (
                  <div style={{
                    position: 'absolute', top: -12, left: '50%', transform: 'translateX(-50%)',
                    background: 'var(--brand)', color: '#fff', padding: '4px 14px', borderRadius: 999,
                    fontSize: 11, fontWeight: 600, letterSpacing: '0.05em', textTransform: 'uppercase',
                  }}>Best Value</div>
                )}
                <div className="eyebrow" style={{ marginBottom: 12 }}>{p.plan}</div>
                <div className="serif" style={{ fontSize: 48, color: 'var(--brand)', marginBottom: 4 }}>
                  {p.price}<span style={{ fontSize: 18, color: 'var(--ink-3)' }}>{p.period}</span>
                </div>
                <div style={{ fontSize: 13, color: 'var(--ink-3)', marginBottom: 20 }}>{p.note}</div>
                <a href={CTA_URL} target="_blank" rel="noopener noreferrer"
                  className={`btn ${p.highlight ? 'btn-primary' : 'btn-secondary'}`}
                  style={{ width: '100%', justifyContent: 'center' }}>
                  Get Started →
                </a>
              </div>
            ))}
          </div>

          {/* How It Works */}
          <h2 id="how-it-works" className="serif" style={{ fontSize: 40, marginTop: 64, marginBottom: 24, color: 'var(--ink)' }}>How It Works — 3 Simple Steps</h2>
          <div style={{ display: 'grid', gridTemplateColumns: '48px 1fr', gap: '20px 16px', margin: '32px 0' }}>
            {[
              { step: '1', title: 'Health Assessment', desc: 'Complete a quick online questionnaire about your symptoms, medical history, and goals. Already have recent blood work? Upload it to fast-track your review.' },
              { step: '2', title: 'Clinician Review & Labs', desc: 'A licensed clinician reviews your assessment. If labs are needed, get nationwide bloodwork access for $129 through partner labs (LabCorp/Quest), or upload qualifying labs from your PCP.' },
              { step: '3', title: 'Treatment & Ongoing Care', desc: 'Your personalized TRT protocol (Testosterone Cypionate or topical) with all injection supplies is prescribed and shipped free to your door. Enjoy unlimited provider access and regular check-ins.' },
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

          {/* CTA 2 */}
          <div className="card" style={{ padding: 40, margin: '48px 0', textAlign: 'center', background: '#FFFDF9', borderColor: 'var(--brand)' }}>
            <div style={{ width: 48, height: 48, borderRadius: '50%', background: 'var(--brand-soft)', color: 'var(--brand)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px' }}>
              <Icon.Shield size={24} />
            </div>
            <h3 className="serif" style={{ fontSize: 28, marginBottom: 16, color: 'var(--ink)' }}>Price Match Guarantee</h3>
            <p style={{ marginBottom: 24, fontSize: 16 }}>Transparent, upfront pricing on all TRT plans. U.S.-sourced medications, FDA-regulated providers, and free discreet delivery included.</p>
            <a href={CTA_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-lg" style={{ display: 'inline-flex', justifyContent: 'center' }}>
              Learn More <Icon.Arrow />
            </a>
          </div>

          {/* Who Is a Candidate */}
          <h2 className="serif" style={{ fontSize: 40, marginTop: 64, marginBottom: 24, color: 'var(--ink)' }}>Who Is a Good Candidate for TRT?</h2>
          <p>Testosterone replacement therapy may be appropriate for men who:</p>
          <ul style={{ marginBottom: 24, paddingLeft: 20 }}>
            <li style={{ marginBottom: 8 }}>Have been diagnosed with low testosterone (typically below 300 ng/dL) via blood work</li>
            <li style={{ marginBottom: 8 }}>Experience persistent symptoms: fatigue, low libido, brain fog, mood changes, or stubborn weight gain</li>
            <li style={{ marginBottom: 8 }}>Have "normal" lab results but still exhibit symptoms — many men are optimized well below their peak potential</li>
            <li style={{ marginBottom: 8 }}>Are seeking improved body composition, energy, and quality of life under medical supervision</li>
            <li style={{ marginBottom: 8 }}>Are switching from another TRT provider and want more affordable, transparent care</li>
          </ul>

          {/* Safety */}
          <h2 className="serif" style={{ fontSize: 40, marginTop: 64, marginBottom: 24, color: 'var(--ink)' }}>Side Effects & Safety</h2>
          <p>TRT is generally well-tolerated when prescribed and monitored by a licensed clinician. Common side effects include:</p>
          <ul style={{ marginBottom: 24, paddingLeft: 20 }}>
            <li style={{ marginBottom: 8 }}><strong>Acne or oily skin</strong> (typically mild, improves over time)</li>
            <li style={{ marginBottom: 8 }}><strong>Injection site reactions</strong> (minor redness or tenderness)</li>
            <li style={{ marginBottom: 8 }}><strong>Increased red blood cell count</strong> (monitored via regular blood work)</li>
            <li style={{ marginBottom: 8 }}><strong>Fluid retention</strong> (usually transient in the first few weeks)</li>
            <li style={{ marginBottom: 8 }}><strong>Mood changes</strong> (typically positive; irritability is rare at therapeutic doses)</li>
          </ul>
          <p>Your care team will monitor your labs regularly (including hematocrit, PSA, and lipid panels) to ensure safe, optimized treatment. TRT is <strong>not appropriate</strong> for men actively trying to conceive without adjunctive therapy, or those with untreated prostate cancer or severe sleep apnea.</p>

          {/* FAQ */}
          <h2 id="faq" className="serif" style={{ fontSize: 40, marginTop: 64, marginBottom: 24, color: 'var(--ink)' }}>Frequently Asked Questions</h2>

          {[
            { q: 'What is TRT?', a: 'Testosterone Replacement Therapy (TRT) is a medically supervised treatment that restores testosterone levels in men with clinically low testosterone (hypogonadism). It uses exogenous testosterone — typically Testosterone Cypionate — to bring serum levels back into the optimal 600–1,100 ng/dL range.' },
            { q: 'Do I need to see my regular doctor first?', a: 'No. You can complete your entire assessment, lab work (if needed), and treatment plan 100% online. However, TRT does not replace your primary care provider — it complements your existing health care.' },
            { q: 'When will I see results?', a: 'Most men notice improved energy, mood, and mental clarity within 2–4 weeks. Body composition changes (increased muscle, reduced fat) and full sexual function improvements typically emerge over 8–12 weeks as levels stabilize.' },
            { q: 'I was told my testosterone is "normal" but I still have symptoms — what do I do?', a: 'Many labs use reference ranges that include elderly and unhealthy populations. A level of 350 ng/dL may be "within range" but far from optimal. A specialized TRT provider evaluates your symptoms alongside your labs, not just the number.' },
            { q: 'Will TRT affect my fertility?', a: 'Exogenous testosterone can suppress sperm production. If fertility preservation is important, your clinician may recommend Enclomiphene (oral TRT) or HCG alongside your protocol to maintain natural testosterone production and fertility.' },
            { q: 'Is it legal to get TRT prescribed online?', a: 'Yes. Telehealth prescribing of testosterone is fully legal in most U.S. states when conducted by a licensed clinician after a proper medical evaluation and lab review.' },
          ].map((faq, i) => (
            <div key={i} style={{ padding: '28px 0', borderBottom: '1px solid var(--line-soft)' }}>
              <h3 style={{ fontSize: 18, marginBottom: 12, color: 'var(--ink)' }}>{faq.q}</h3>
              <p style={{ margin: 0, fontSize: 16, color: 'var(--ink-2)', lineHeight: 1.6 }}>{faq.a}</p>
            </div>
          ))}

          <PatientReviewsSection
            productName="Testosterone Replacement Therapy (TRT)"
            aggregateRating={{ ratingValue: "4.9", reviewCount: "187" }}
            reviews={[
              {
                author: { name: "Chris M." },
                datePublished: "2026-03-08",
                reviewRating: { ratingValue: "5" },
                reviewBody: "Energy levels completely transformed within 6 weeks. I'm sleeping better, thinking clearer, and my gym performance is back to where it was in my 20s. The online process was incredibly easy."
              },
              {
                author: { name: "Robert H." },
                datePublished: "2026-04-18",
                reviewRating: { ratingValue: "5" },
                reviewBody: "After years of feeling exhausted and unmotivated, TRT gave me my life back. My levels went from 280 to 850 ng/dL. The clinician support has been outstanding."
              },
              {
                author: { name: "Derek W." },
                datePublished: "2026-02-14",
                reviewRating: { ratingValue: "4" },
                reviewBody: "Great program and responsive clinicians. Took about 8 weeks to dial in my dose perfectly but the results are worth it. Mood, energy, and body composition all improved significantly."
              }
            ]}
          />

          {/* CTA 3 — Final dark block */}
          <div style={{ padding: 40, marginTop: 60, borderRadius: 20, background: 'var(--ink)', color: '#FBF8F3', textAlign: 'center' }}>
            <h2 className="serif" style={{ fontSize: 40, marginBottom: 20, color: '#FBF8F3' }}>Start Your TRT Program</h2>
            <p style={{ fontSize: 18, opacity: 0.9, marginBottom: 32, maxWidth: 500, margin: '0 auto 32px' }}>
              From $93/mo. Licensed clinicians. Free shipping. No hidden fees. Price match guarantee.
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

export { TestosteronePage, TestosteroneNav };
