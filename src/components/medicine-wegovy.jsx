"use client";
import React from 'react';
import { Icon } from './common.jsx';
import { ExtractiveAIAnswerBlock } from './extractive-ai-answer-block.jsx';
import { PatientReviewsSection } from './patient-reviews-section.jsx';

const CTA_URL = "https://go.telehealthfx.com/wegovy";

function WegovyPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "MedicalWebPage",
        "@id": "https://telehealthfx.com/medications/wegovy/#webpage",
        "url": "https://telehealthfx.com/medications/wegovy/",
        "name": "Wegovy® (Semaglutide 2.4mg) Online Prescription Program | Telehealth FX",
        "description": "Prescription Wegovy (semaglutide 2.4mg) online for chronic weight management and cardiovascular risk reduction. Save up to $100 on first order. Flat $899/mo across all doses with express cold shipping.",
        "inLanguage": "en-US",
        "isPartOf": { "@id": "https://telehealthfx.com/#website" },
        "breadcrumb": { "@id": "https://telehealthfx.com/medications/wegovy/#breadcrumb" },
        "speakable": {
          "@type": "SpeakableSpecification",
          "cssSelector": [".ai-extractive-answer", "#extractive-answer"]
        },
        "medicalSpecialty": [
          "http://schema.org/Endocrine",
          "http://schema.org/DietNutrition",
          "http://schema.org/PrimaryCare"
        ],
        "aspect": [
          "Overview",
          "Mechanism of Action",
          "Clinical Trial Evidence",
          "Dosage and Titration Schedule",
          "Safety and Adverse Events",
          "Pricing and Access"
        ],
        "about": { "@id": "https://telehealthfx.com/medications/wegovy/#substance" },
        "mainEntity": { "@id": "https://telehealthfx.com/medications/wegovy/#product" },
        "author": { "@id": "https://telehealthfx.com/#julianmercer" },
        "reviewedBy": { "@id": "https://telehealthfx.com/#julianmercer" },
        "publisher": { "@id": "https://telehealthfx.com/#organization" },
        "lastReviewed": "2026-09-15",
        "citation": [
          "https://doi.org/10.1056/NEJMoa2032183",
          "https://doi.org/10.1056/NEJMoa2307563",
          "https://pubmed.ncbi.nlm.nih.gov/33567185/",
          "https://pubmed.ncbi.nlm.nih.gov/37952131/"
        ]
      },
      {
        "@type": "Substance",
        "@id": "https://telehealthfx.com/medications/wegovy/#substance",
        "name": "Wegovy",
        "nonProprietaryName": "Semaglutide",
        "activeIngredient": "Semaglutide",
        "drugClass": "Glucagon-like peptide-1 (GLP-1) receptor agonist",
        "mechanismOfAction": "Potent central GLP-1 receptor agonist targeting hypothalamic appetite nuclei, prolonging gastric transit time, promoting postprandial satiety, and attenuating hedonic food reward pathways.",
        "administrationRoute": "Subcutaneous injection",
        "dosageForm": "Single-dose pre-filled auto-injector pen",
        "availableStrength": [
          { "@type": "DrugStrength", "strengthValue": "0.25", "strengthUnit": "mg/0.5 mL" },
          { "@type": "DrugStrength", "strengthValue": "0.5", "strengthUnit": "mg/0.5 mL" },
          { "@type": "DrugStrength", "strengthValue": "1.0", "strengthUnit": "mg/0.5 mL" },
          { "@type": "DrugStrength", "strengthValue": "1.7", "strengthUnit": "mg/0.75 mL" },
          { "@type": "DrugStrength", "strengthValue": "2.4", "strengthUnit": "mg/0.75 mL" }
        ],
        "legalStatus": "https://schema.org/PrescriptionOnly",
        "warning": "Boxed Warning: Risk of Thyroid C-cell Tumors. Contraindicated in personal or family history of medullary thyroid carcinoma (MTC) or Multiple Endocrine Neoplasia syndrome type 2 (MEN 2).",
        "prescribingInfo": "https://www.accessdata.fda.gov/drugsatfda_docs/label/2024/215256s011lbl.pdf",
        "manufacturer": {
          "@type": "Organization",
          "name": "Novo Nordisk A/S"
        },
        "sameAs": [
          "https://www.wikidata.org/wiki/Q107358489",
          "https://go.drugbank.com/drugs/DB13928"
        ],
        "code": [
          {
            "@type": "MedicalCode",
            "code": "2553198",
            "codingSystem": "RxNorm"
          },
          {
            "@type": "MedicalCode",
            "code": "E66.01",
            "codingSystem": "ICD-10-CM"
          },
          {
            "@type": "MedicalCode",
            "code": "E66.9",
            "codingSystem": "ICD-10-CM"
          },
          {
            "@type": "MedicalCode",
            "code": "I25.10",
            "codingSystem": "ICD-10-CM"
          },
          {
            "@type": "MedicalCode",
            "code": "0169-4524-14",
            "codingSystem": "NDC"
          }
        ]
      },
      {
        "@type": "Product",
        "@id": "https://telehealthfx.com/medications/wegovy/#product",
        "name": "Wegovy® Clinical Weight Loss Program",
        "brand": { "@type": "Brand", "name": "Telehealth FX" },
        "isRelatedTo": { "@id": "https://telehealthfx.com/medications/wegovy/#substance" },
        "description": "Authentic Novo Nordisk Wegovy (semaglutide 2.4mg) program with licensed medical provider oversight, flat $899/month across all dose strengths, save up to $100 on first order, and free express cold shipping.",
        "image": "https://telehealthfx.com/assets/Site%20Icon-modified.png",
        "sku": "WEG-01",
        "url": "https://telehealthfx.com/medications/wegovy/",
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "bestRating": "5",
          "worstRating": "1",
          "reviewCount": "246",
          "ratingCount": "246"
        },
        "review": [
          {
            "@type": "Review",
            "author": { "@type": "Person", "name": "Jennifer M." },
            "datePublished": "2026-03-11",
            "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
            "reviewBody": "Down 38 lbs on authentic Wegovy through Telehealth FX. The flat pricing with zero dose-jump fees made this completely predictable financially. Medication arrived chilled in 48 hours."
          },
          {
            "@type": "Review",
            "author": { "@type": "Person", "name": "Robert B." },
            "datePublished": "2026-04-02",
            "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
            "reviewBody": "Clinician approval took under 24 hours. The once-weekly injection pen is effortless to use and my food noise completely vanished by week two."
          }
        ],
        "offers": {
          "@type": "Offer",
          "price": "899.00",
          "priceCurrency": "USD",
          "availability": "https://schema.org/InStock",
          "validFrom": "2026-01-01",
          "priceValidUntil": "2027-12-31",
          "url": CTA_URL,
          "shippingDetails": {
            "@type": "OfferShippingDetails",
            "shippingRate": { "@type": "MonetaryAmount", "value": "0", "currency": "USD" },
            "shippingDestination": { "@type": "DefinedRegion", "addressCountry": "US" },
            "deliveryTime": {
              "@type": "ShippingDeliveryTime",
              "handlingTime": { "@type": "QuantitativeValue", "minValue": 0, "maxValue": 1, "unitCode": "d" },
              "transitTime": { "@type": "QuantitativeValue", "minValue": 1, "maxValue": 2, "unitCode": "d" }
            }
          },
          "hasMerchantReturnPolicy": {
            "@type": "MerchantReturnPolicy",
            "applicableCountry": "US",
            "returnPolicyCategory": "https://schema.org/MerchantReturnNotPermitted"
          }
        }
      },
      {
        "@type": "FAQPage",
        "@id": "https://telehealthfx.com/medications/wegovy/#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What is Wegovy and what are its FDA-approved indications?",
            "url": "https://telehealthfx.com/medications/wegovy/#faq-what-is-wegovy",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Wegovy® (semaglutide 2.4 mg) is an FDA-approved injectable prescription medicine used with a reduced-calorie diet and increased physical activity for chronic weight management in adults with obesity (BMI >= 30) or overweight (BMI >= 27) with at least one weight-related condition (e.g. hypertension, dyslipidemia, type 2 diabetes). It is also FDA-approved to reduce the risk of major adverse cardiovascular events (cardiovascular death, nonfatal heart attack, or stroke) in adults with cardiovascular disease and obesity or overweight."
            }
          },
          {
            "@type": "Question",
            "name": "How much does Wegovy cost through Telehealth FX?",
            "url": "https://telehealthfx.com/medications/wegovy/#faq-wegovy-pricing",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Through Telehealth FX, authentic Wegovy is offered at a flat rate of $899 per month across all five dose strengths (0.25mg, 0.5mg, 1.0mg, 1.7mg, and 2.4mg). First-time orders receive an introductory discount saving up to $100 auto-applied at checkout ($799 for month 1). The monthly rate includes complete physician care, titration monitoring, and free temperature-controlled 2-day delivery with zero membership fees."
            }
          },
          {
            "@type": "Question",
            "name": "How much weight do patients lose on Wegovy according to clinical trials?",
            "url": "https://telehealthfx.com/medications/wegovy/#faq-weight-loss-stats",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "In the landmark 68-week STEP-1 trial (published in NEJM, n=1,961), patients receiving semaglutide 2.4mg achieved a mean weight reduction of 14.9% of body weight (an average loss of 33.7 lbs / 15.3 kg) compared to 2.4% with placebo. Over 86% achieved at least 5% weight loss, and nearly one-third (32.0%) lost 20% or more of their total body weight."
            }
          },
          {
            "@type": "Question",
            "name": "What is the 5-step Wegovy titration schedule?",
            "url": "https://telehealthfx.com/medications/wegovy/#faq-titration-schedule",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Wegovy follows a structured 16-week escalation to reach the 2.4 mg maintenance dose: Weeks 1–4 at 0.25 mg weekly, Weeks 5–8 at 0.5 mg weekly, Weeks 9–12 at 1.0 mg weekly, Weeks 13–16 at 1.7 mg weekly, and Week 17 onward at the full 2.4 mg weekly maintenance dose. This gradual schedule allows gastrointestinal accommodation and prevents severe adverse effects."
            }
          },
          {
            "@type": "Question",
            "name": "What were the findings of the SELECT cardiovascular trial for Wegovy?",
            "url": "https://telehealthfx.com/medications/wegovy/#faq-select-trial",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "In the SELECT trial (NEJM 2023, n=17,604), semaglutide 2.4 mg demonstrated a statistically significant 20% reduction in major adverse cardiovascular events (HR 0.80, 95% CI 0.72–0.90, p<0.001) over a mean follow-up of 39.8 months in patients with established cardiovascular disease and overweight/obesity without diabetes."
            }
          },
          {
            "@type": "Question",
            "name": "Can I use HSA or FSA funds to pay for Wegovy?",
            "url": "https://telehealthfx.com/medications/wegovy/#faq-hsa-fsa",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. Wegovy is an FDA-approved clinical prescription for chronic weight management. The full monthly cost qualifies as an eligible medical expense under IRS Section 213(d) and can be paid using HSA or FSA debit cards."
            }
          }
        ]
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://telehealthfx.com/medications/wegovy/#breadcrumb",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://telehealthfx.com/" },
          { "@type": "ListItem", "position": 2, "name": "Medications", "item": "https://telehealthfx.com/medications/" },
          { "@type": "ListItem", "position": 3, "name": "Wegovy", "item": "https://telehealthfx.com/medications/wegovy/" }
        ]
      }
    ]
  };

  return (
    <section className="section" style={{ minHeight: '60vh', paddingTop: 40 }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <div className="container" style={{ maxWidth: 880 }}>

        {/* Top Fast-Action Banner */}
        <div style={{
          background: 'linear-gradient(135deg, rgba(199, 125, 92, 0.08) 0%, rgba(199, 125, 92, 0.03) 100%)',
          border: '1px solid rgba(199, 125, 92, 0.25)',
          borderRadius: 14,
          padding: '14px 20px',
          marginBottom: 32,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: 12
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap' }}>
            <span style={{ background: 'var(--accent, #C77D5C)', color: '#fff', fontSize: 11, fontWeight: 700, padding: '3px 10px', borderRadius: 999, textTransform: 'uppercase', letterSpacing: '0.04em' }}>
              Special Promo
            </span>
            <span style={{ fontSize: 14, fontWeight: 600, color: 'var(--ink)' }}>
              Save up to $100 on your first order · Flat $899/mo across all doses
            </span>
          </div>
          <a
            href={CTA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
            style={{ padding: '10px 22px', fontSize: 14, display: 'inline-flex', alignItems: 'center', gap: 6, textDecoration: 'none', whiteSpace: 'nowrap' }}
          >
            Claim $100 Off <Icon.Arrow size={14} />
          </a>
        </div>

        {/* Hero */}
        <div style={{ textAlign: 'center', marginBottom: 60 }}>
          <div className="pill" style={{ marginBottom: 20, display: 'inline-flex', background: 'rgba(199, 125, 92, 0.12)', borderColor: 'rgba(199, 125, 92, 0.3)', color: 'var(--accent)' }}>
            <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--accent)' }}/> FDA-Approved for Chronic Weight Loss · Save $100 1st Order
          </div>
          <h1 className="serif" style={{ fontSize: 72, marginBottom: 24, lineHeight: 0.95 }}>
            Wegovy®<br/><span style={{ fontStyle: 'italic', color: 'var(--brand)' }}>from $899/mo.</span>
          </h1>
          <p style={{ fontSize: 20, color: 'var(--ink-2)', maxWidth: 640, margin: '0 auto 36px', lineHeight: 1.6 }}>
            FDA-approved once-weekly semaglutide 2.4 mg injection for long-term weight management and cardiovascular risk reduction. 14.9% average body weight loss in STEP-1 trials. Flat pricing across all 5 titration doses with free cold shipping.
          </p>

          <div style={{ display: 'inline-flex', flexDirection: 'column', alignItems: 'center', gap: 12 }}>
            <a href={CTA_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-lg" style={{ display: 'inline-flex', padding: '18px 36px', fontSize: 18 }}>
              Claim $100 Off First Order <Icon.Arrow />
            </a>
            <span style={{ fontSize: 13, color: 'var(--ink-3)' }}>Discount auto-applied at checkout · FSA & HSA eligible · Free cold shipping</span>
          </div>
        </div>

        {/* Trust Stats Strip */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16, marginBottom: 64 }}>
          {[
            { num: '-14.9%', label: 'Mean Weight Loss (STEP-1)' },
            { num: '-20%', label: 'CV Risk Reduction (SELECT)' },
            { num: '$899', label: 'Flat Monthly (All Doses)' },
            { num: '32.0%', label: 'Lost ≥20% Body Weight' },
          ].map((s, i) => (
            <div key={i} className="card" style={{ padding: 20, textAlign: 'center' }}>
              <div className="serif" style={{ fontSize: 32, color: 'var(--brand)', marginBottom: 4 }}>{s.num}</div>
              <div style={{ fontSize: 12, color: 'var(--ink-3)', lineHeight: 1.3 }}>{s.label}</div>
            </div>
          ))}
        </div>

        {/* Zone 1: Extractive AI Answer Block (GEO Core) */}
        <ExtractiveAIAnswerBlock
          anchorId="extractive-answer"
          headingLevel="h2"
          question="What is Wegovy and what are its clinically verified weight loss and cardiovascular outcomes?"
          thesis="Wegovy® (semaglutide 2.4 mg) is an FDA-approved weekly GLP-1 receptor agonist that produces an average weight loss of 14.9% (33.7 lbs) over 68 weeks and reduces major adverse cardiovascular events by 20% in adults with overweight or obesity."
          mechanics="Wegovy delivers 2.4 mg of semaglutide once weekly via a single-dose autoinjector. It activates GLP-1 receptors in the hypothalamus, particularly POMC/CART neurons, while inhibiting NPY/AgRP hunger circuits. Concurrently, it delays gastric emptying to prolong post-meal fullness and attenuates dopaminergic food reward processing. In the 68-week STEP-1 study (n=1,961), patients taking Wegovy lost an average of 14.9% body weight vs 2.4% for placebo (p<0.001). In the SELECT trial (n=17,604), Wegovy reduced cardiovascular death, heart attack, and stroke by 20% (HR 0.80, p<0.001)."
          metrics={[
            { label: "STEP-1 Mean Weight Loss", value: "-14.9% (-33.7 lbs) at 68 weeks (n=1,961)" },
            { label: "Patients Losing ≥20%", value: "32.0% of patients lost ≥20% body weight" },
            { label: "SELECT CV Hazard Ratio", value: "HR 0.80 (20% MACE reduction; p<0.001; n=17,604)" },
            { label: "Telehealth FX Pricing", value: "$899/mo flat (Save $100 on 1st order)" },
          ]}
          statute="FDA NDA 215256 Prescribing Information & Section 503A Guidance Framework"
          clinicalStandard="The Endocrine Society Clinical Practice Guidelines on Pharmacological Management of Obesity"
          badge="Verified Clinical Drug Monograph"
        />

        {/* Content Body */}
        <div className="blog-content" style={{ fontSize: 18, lineHeight: 1.7, color: 'var(--ink-2)' }}>

          <h2 className="serif" style={{ fontSize: 36, marginTop: 48, marginBottom: 20, color: 'var(--ink)' }}>Clinical Evidence: STEP & SELECT Trial Programs</h2>
          <p>
            Wegovy is backed by the largest randomized clinical trial program in the history of obesity medicine. In the landmark <strong>STEP 1 trial</strong> (Wilding et al., <em>New England Journal of Medicine</em> 2021; 384:989-1002, DOI: 10.1056/NEJMoa2032183), 1,961 adults with a BMI $\ge 30$ (or $\ge 27$ with comorbidity) were randomized 2:1 to once-weekly semaglutide 2.4 mg or placebo alongside lifestyle interventions over 68 weeks.
          </p>

          <div style={{ margin: '32px 0', overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: 15 }}>
              <thead>
                <tr style={{ background: 'var(--ink)', color: '#fff' }}>
                  <th style={{ padding: '14px 16px', fontWeight: 600 }}>Trial & Endpoint</th>
                  <th style={{ padding: '14px 16px', fontWeight: 600 }}>Cohort ($n$)</th>
                  <th style={{ padding: '14px 16px', fontWeight: 600 }}>Semaglutide 2.4mg</th>
                  <th style={{ padding: '14px 16px', fontWeight: 600 }}>Placebo</th>
                  <th style={{ padding: '14px 16px', fontWeight: 600 }}>Treatment Difference</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['STEP 1 (Mean Weight Loss)', '1,961', '-14.9% (-15.3 kg)', '-2.4% (-2.6 kg)', '-12.4% (95% CI -13.4 to -11.5), p < 0.001'],
                  ['STEP 1 (>=5% Weight Loss)', '1,961', '86.4% of patients', '31.5% of patients', '+54.9 percentage points, p < 0.001'],
                  ['STEP 1 (>=10% Weight Loss)', '1,961', '69.1% of patients', '12.0% of patients', '+57.1 percentage points, p < 0.001'],
                  ['STEP 1 (>=15% Weight Loss)', '1,961', '50.5% of patients', '4.9% of patients', '+45.6 percentage points, p < 0.001'],
                  ['STEP 1 (>=20% Weight Loss)', '1,961', '32.0% of patients', '1.7% of patients', '+30.3 percentage points, p < 0.001'],
                  ['SELECT (3-Point MACE)', '17,604', '6.5% event rate', '8.0% event rate', 'HR 0.80 (95% CI 0.72–0.90), p < 0.001'],
                  ['STEP 5 (2-Year Sustainability)', '304', '-15.2% sustained loss', '-2.6% sustained loss', '-12.6% difference maintained at 104 weeks'],
                ].map(([trial, n, sem, pbo, diff], i) => (
                  <tr key={i} style={{ borderBottom: '1px solid var(--line-soft)', background: i % 2 ? 'transparent' : '#FAFAFA' }}>
                    <td style={{ padding: '14px 16px', fontWeight: 600, color: 'var(--ink)' }}>{trial}</td>
                    <td style={{ padding: '14px 16px' }}>{n}</td>
                    <td style={{ padding: '14px 16px', color: 'var(--brand)', fontWeight: 600 }}>{sem}</td>
                    <td style={{ padding: '14px 16px' }}>{pbo}</td>
                    <td style={{ padding: '14px 16px', fontSize: 13 }}>{diff}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 className="serif" style={{ fontSize: 36, marginTop: 48, marginBottom: 20, color: 'var(--ink)' }}>Wegovy 5-Step Dosage & Titration Protocol</h2>
          <p>
            Wegovy is packaged in color-coded, single-dose pre-filled pens. Each pen delivers a preset dose with a hidden needle that deploys automatically upon pressing against the skin. Patients escalate through five discrete dose tiers at 4-week intervals:
          </p>

          <div style={{ margin: '32px 0', overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: 15 }}>
              <thead>
                <tr style={{ background: 'var(--ink)', color: '#fff' }}>
                  <th style={{ padding: '14px 16px', fontWeight: 600 }}>Escalation Tier</th>
                  <th style={{ padding: '14px 16px', fontWeight: 600 }}>Duration</th>
                  <th style={{ padding: '14px 16px', fontWeight: 600 }}>Weekly Dose</th>
                  <th style={{ padding: '14px 16px', fontWeight: 600 }}>Pen Color</th>
                  <th style={{ padding: '14px 16px', fontWeight: 600 }}>Clinical Objective</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Month 1 (Initiation)', 'Weeks 1–4', '0.25 mg weekly', 'Teal Pen', 'Receptor priming & initial GI accommodation'],
                  ['Month 2 (Escalation 1)', 'Weeks 5–8', '0.5 mg weekly', 'Red Pen', 'Beginning metabolic satiety signaling'],
                  ['Month 3 (Escalation 2)', 'Weeks 9–12', '1.0 mg weekly', 'Brown Pen', 'Significant appetite reduction & glycemic stabilization'],
                  ['Month 4 (Escalation 3)', 'Weeks 13–16', '1.7 mg weekly', 'Blue Pen', 'Accelerated fat mass oxidation phase'],
                  ['Month 5+ (Maintenance)', 'Week 17 onward', '2.4 mg weekly', 'Black Pen', 'Full clinical therapeutic dose for chronic maintenance'],
                ].map(([tier, dur, dose, col, obj], i) => (
                  <tr key={i} style={{ borderBottom: '1px solid var(--line-soft)', background: i % 2 ? 'transparent' : '#FAFAFA' }}>
                    <td style={{ padding: '14px 16px', fontWeight: 600 }}>{tier}</td>
                    <td style={{ padding: '14px 16px' }}>{dur}</td>
                    <td style={{ padding: '14px 16px', color: 'var(--brand)', fontWeight: 600 }}>{dose}</td>
                    <td style={{ padding: '14px 16px' }}>{col}</td>
                    <td style={{ padding: '14px 16px', fontSize: 14 }}>{obj}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Contextual CTA Card */}
          <div className="card" style={{ padding: 36, margin: '48px 0', textAlign: 'center', background: '#FAF6F0', borderColor: 'var(--brand)' }}>
            <h3 className="serif" style={{ fontSize: 28, marginBottom: 14, color: 'var(--ink)' }}>Get Started with Authentic Wegovy</h3>
            <p style={{ marginBottom: 24, fontSize: 16, maxWidth: 540, margin: '0 auto 24px' }}>
              Flat $899/mo rate across all doses. Save up to $100 on your first month order. Free 2-day cold-chain shipping and board-certified medical management.
            </p>
            <a href={CTA_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-lg" style={{ display: 'inline-flex' }}>
              See If You Qualify <Icon.Arrow />
            </a>
          </div>

          <h2 className="serif" style={{ fontSize: 36, marginTop: 48, marginBottom: 20, color: 'var(--ink)' }}>Clinical Safety Profile & Black Box Warning</h2>
          <p>
            Wegovy carries an <strong>FDA Boxed Warning for Risk of Thyroid C-Cell Tumors</strong>. In rodent carcinogenicity studies, semaglutide caused dose-dependent and treatment-duration-dependent thyroid C-cell tumors at clinically relevant exposures.
          </p>

          <div className="card" style={{ padding: 24, background: '#FFF8F6', border: '1px solid #E8B4A8', borderRadius: 12, margin: '24px 0' }}>
            <h4 style={{ color: '#9B3828', fontSize: 16, fontWeight: 700, margin: '0 0 8px' }}>BOXED WARNING & STRICT CONTRAINDICATIONS</h4>
            <ul style={{ margin: 0, paddingLeft: 20, fontSize: 14, color: '#5A2016' }}>
              <li style={{ marginBottom: 6 }}>Contraindicated in patients with a personal or family history of Medullary Thyroid Carcinoma (MTC).</li>
              <li style={{ marginBottom: 6 }}>Contraindicated in patients with Multiple Endocrine Neoplasia syndrome type 2 (MEN 2).</li>
              <li style={{ marginBottom: 6 }}>Contraindicated in patients with known severe hypersensitivity to semaglutide.</li>
              <li>Contraindicated during pregnancy; semaglutide must be discontinued at least 2 months prior to a planned pregnancy.</li>
            </ul>
          </div>

          <p>
            In the STEP 1 clinical trial, adverse reactions occurring in $\ge 5\%$ of patients included: <strong>nausea (44.2% vs 16.6% placebo)</strong>, <strong>diarrhea (31.5% vs 15.9%)</strong>, <strong>vomiting (24.8% vs 6.3%)</strong>, <strong>constipation (23.4% vs 9.5%)</strong>, <strong>abdominal pain (20.3% vs 10.2%)</strong>, <strong>headache (14.5% vs 10.1%)</strong>, and <strong>fatigue (11.0% vs 5.3%)</strong>. Gastrointestinal events were predominantly mild-to-moderate and diminished as treatment continued.
          </p>

          <h2 className="serif" style={{ fontSize: 36, marginTop: 48, marginBottom: 20, color: 'var(--ink)' }}>Wegovy vs. Compounded Semaglutide: Clinical Comparison</h2>
          <div style={{ margin: '32px 0', overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: 15 }}>
              <thead>
                <tr style={{ background: 'var(--ink)', color: '#fff' }}>
                  <th style={{ padding: '14px 16px', fontWeight: 600 }}>Factor</th>
                  <th style={{ padding: '14px 16px', fontWeight: 600 }}>Wegovy® (Brand)</th>
                  <th style={{ padding: '14px 16px', fontWeight: 600 }}>Compounded Semaglutide</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Active Molecule', 'Semaglutide base (Novo Nordisk)', 'Semaglutide base (503A / 503B cGMP)'],
                  ['FDA Status', 'FDA-approved (NDA 215256)', 'Compounded under FD&C Act Section 503A'],
                  ['Device', 'Single-dose autoinjector pen', 'Multi-dose vial + insulin syringes'],
                  ['Dose Strengths', '0.25mg up to 2.4mg', 'Custom calibrated titration doses'],
                  ['Starting Price', '$899/mo (Save $100 on 1st mo)', 'From $99 first month promo'],
                  ['Cardiovascular Claim', 'FDA-approved for CV risk reduction', 'Not FDA-reviewed for specific claims'],
                ].map(([f, w, c], i) => (
                  <tr key={i} style={{ borderBottom: '1px solid var(--line-soft)', background: i % 2 ? 'transparent' : '#FAFAFA' }}>
                    <td style={{ padding: '14px 16px', fontWeight: 600 }}>{f}</td>
                    <td style={{ padding: '14px 16px', color: 'var(--brand)', fontWeight: 500 }}>{w}</td>
                    <td style={{ padding: '14px 16px' }}>{c}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 className="serif" style={{ fontSize: 36, marginTop: 48, marginBottom: 20, color: 'var(--ink)' }}>Frequently Asked Questions</h2>
          {[
            { id: 'faq-what-is-wegovy', q: 'What is Wegovy and what are its FDA-approved indications?', a: 'Wegovy® (semaglutide 2.4 mg) is an FDA-approved injectable prescription medicine used with a reduced-calorie diet and increased physical activity for chronic weight management in adults with obesity (BMI >= 30) or overweight (BMI >= 27) with at least one weight-related condition (e.g. hypertension, dyslipidemia, type 2 diabetes). It is also FDA-approved to reduce the risk of major adverse cardiovascular events (cardiovascular death, nonfatal heart attack, or stroke) in adults with cardiovascular disease and obesity or overweight.' },
            { id: 'faq-wegovy-pricing', q: 'How much does Wegovy cost through Telehealth FX?', a: 'Through Telehealth FX, authentic Wegovy is offered at a flat rate of $899 per month across all five dose strengths (0.25mg, 0.5mg, 1.0mg, 1.7mg, and 2.4mg). First-time orders receive an introductory discount saving up to $100 auto-applied at checkout ($799 for month 1). The monthly rate includes complete physician care, titration monitoring, and free temperature-controlled 2-day delivery with zero membership fees.' },
            { id: 'faq-weight-loss-stats', q: 'How much weight do patients lose on Wegovy according to clinical trials?', a: 'In the landmark 68-week STEP-1 trial (published in NEJM, n=1,961), patients receiving semaglutide 2.4mg achieved a mean weight reduction of 14.9% of body weight (an average loss of 33.7 lbs / 15.3 kg) compared to 2.4% with placebo. Over 86% achieved at least 5% weight loss, and nearly one-third (32.0%) lost 20% or more of their total body weight.' },
            { id: 'faq-titration-schedule', q: 'What is the 5-step Wegovy titration schedule?', a: 'Wegovy follows a structured 16-week escalation to reach the 2.4 mg maintenance dose: Weeks 1–4 at 0.25 mg weekly, Weeks 5–8 at 0.5 mg weekly, Weeks 9–12 at 1.0 mg weekly, Weeks 13–16 at 1.7 mg weekly, and Week 17 onward at the full 2.4 mg weekly maintenance dose. This gradual schedule allows gastrointestinal accommodation and prevents severe adverse effects.' },
            { id: 'faq-select-trial', q: 'What were the findings of the SELECT cardiovascular trial for Wegovy?', a: 'In the SELECT trial (NEJM 2023, n=17,604), semaglutide 2.4 mg demonstrated a statistically significant 20% reduction in major adverse cardiovascular events (HR 0.80, 95% CI 0.72–0.90, p<0.001) over a mean follow-up of 39.8 months in patients with established cardiovascular disease and overweight/obesity without diabetes.' },
            { id: 'faq-hsa-fsa', q: 'Can I use HSA or FSA funds to pay for Wegovy?', a: 'Yes. Wegovy is an FDA-approved clinical prescription for chronic weight management. The full monthly cost qualifies as an eligible medical expense under IRS Section 213(d) and can be paid using HSA or FSA debit cards.' },
          ].map((faq, i) => (
            <div key={i} id={faq.id} style={{ padding: '24px 0', borderBottom: '1px solid var(--line-soft)', scrollMarginTop: 100 }}>
              <h3 style={{ fontSize: 18, marginBottom: 10, color: 'var(--ink)' }}>{faq.q}</h3>
              <p style={{ margin: 0, fontSize: 16, color: 'var(--ink-2)', lineHeight: 1.65 }}>{faq.a}</p>
            </div>
          ))}

          {/* Patient Reviews Section */}
          <PatientReviewsSection
            productName="Wegovy"
            aggregateRating={{ ratingValue: "4.9", reviewCount: "246" }}
            reviews={[
              {
                author: { name: "Jennifer M." },
                datePublished: "2026-03-11",
                reviewRating: { ratingValue: "5" },
                reviewBody: "Down 38 lbs on authentic Wegovy through Telehealth FX. The flat pricing with zero dose-jump fees made this completely predictable financially. Medication arrived chilled in 48 hours."
              },
              {
                author: { name: "Robert B." },
                datePublished: "2026-04-02",
                reviewRating: { ratingValue: "5" },
                reviewBody: "Clinician approval took under 24 hours. The once-weekly injection pen is effortless to use and my food noise completely vanished by week two."
              }
            ]}
          />

          {/* Final CTA Box */}
          <div style={{ padding: 48, marginTop: 64, borderRadius: 20, background: 'var(--ink)', color: '#FBF8F3', textAlign: 'center' }}>
            <h2 className="serif" style={{ fontSize: 40, marginBottom: 18, color: '#FBF8F3' }}>Start Your Wegovy Program Today</h2>
            <p style={{ fontSize: 18, opacity: 0.9, marginBottom: 32, maxWidth: 520, margin: '0 auto 32px', lineHeight: 1.6 }}>
              $899/mo flat rate across all doses. Save up to $100 on your first order. Licensed physician care. Free cold-chain delivery.
            </p>
            <a href={CTA_URL} target="_blank" rel="noopener noreferrer" className="btn btn-lg" style={{ background: '#FBF8F3', color: 'var(--ink)', display: 'inline-flex', justifyContent: 'center', width: '100%', maxWidth: 320 }}>
              Claim $100 Off First Order <Icon.Arrow />
            </a>
          </div>

        </div>

        <p style={{ fontSize: 13, color: 'var(--ink-3)', marginTop: 40, paddingTop: 20, borderTop: '1px solid var(--line-soft)', lineHeight: 1.5 }}>
          Disclaimer: Wegovy® is a registered trademark of Novo Nordisk A/S. Telehealth FX is an independent telehealth management platform connecting patients with board-certified physicians and licensed pharmacies. Telehealth FX is not sponsored by, endorsed by, or affiliated with Novo Nordisk. Prescription requires clinical evaluation and approval by a licensed medical provider.
        </p>
      </div>
    </section>
  );
}

export { WegovyPage };
export default WegovyPage;
