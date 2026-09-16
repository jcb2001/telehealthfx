"use client";
import React from 'react';
import { Icon } from './common.jsx';
import { ExtractiveAIAnswerBlock } from './extractive-ai-answer-block.jsx';

const CTA_URL = "https://go.telehealthfx.com/ozempic";

function OzempicPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "MedicalWebPage",
        "@id": "https://telehealthfx.com/medications/ozempic/#webpage",
        "url": "https://telehealthfx.com/medications/ozempic/",
        "name": "Ozempic® (Semaglutide) Online Prescription Program | Telehealth FX",
        "description": "Prescription Ozempic (semaglutide) online for type 2 diabetes glycemic control and cardiovascular protection. Save up to $100 on your first order. 24-hour clinician review, flat-rate pricing, and cold-chain home delivery.",
        "inLanguage": "en-US",
        "isPartOf": { "@id": "https://telehealthfx.com/#website" },
        "breadcrumb": { "@id": "https://telehealthfx.com/medications/ozempic/#breadcrumb" },
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
        "about": { "@id": "https://telehealthfx.com/medications/ozempic/#drug" },
        "mainEntity": { "@id": "https://telehealthfx.com/medications/ozempic/#drug" },
        "author": { "@id": "https://telehealthfx.com/#julianmercer" },
        "reviewedBy": { "@id": "https://telehealthfx.com/#julianmercer" },
        "publisher": { "@id": "https://telehealthfx.com/#organization" },
        "lastReviewed": "2026-09-15",
        "citation": [
          "https://doi.org/10.1056/NEJMoa1607141",
          "https://pubmed.ncbi.nlm.nih.gov/27633186/"
        ]
      },
      {
        "@type": "Drug",
        "@id": "https://telehealthfx.com/medications/ozempic/#drug",
        "name": "Ozempic",
        "nonProprietaryName": "Semaglutide",
        "activeIngredient": "Semaglutide",
        "drugClass": "Glucagon-like peptide-1 (GLP-1) receptor agonist",
        "mechanismOfAction": "Selective GLP-1 receptor agonist that stimulates glucose-dependent insulin secretion, inhibits glucagon output, delays gastric emptying, and reduces central appetite signaling.",
        "administrationRoute": "Subcutaneous injection",
        "dosageForm": "Pre-filled multi-dose disposable pen",
        "availableStrength": [
          { "@type": "DrugStrength", "strengthValue": "2", "strengthUnit": "mg/3 mL (delivers 0.25 mg or 0.5 mg)" },
          { "@type": "DrugStrength", "strengthValue": "4", "strengthUnit": "mg/3 mL (delivers 1.0 mg)" },
          { "@type": "DrugStrength", "strengthValue": "8", "strengthUnit": "mg/3 mL (delivers 2.0 mg)" }
        ],
        "legalStatus": "https://schema.org/PrescriptionOnly",
        "warning": "Boxed Warning: Risk of Thyroid C-cell Tumors. Contraindicated in patients with a personal or family history of medullary thyroid carcinoma (MTC) or in patients with Multiple Endocrine Neoplasia syndrome type 2 (MEN 2).",
        "prescribingInfo": "https://www.accessdata.fda.gov/drugsatfda_docs/label/2022/209637s009lbl.pdf",
        "manufacturer": {
          "@type": "Organization",
          "name": "Novo Nordisk A/S"
        },
        "sameAs": [
          "https://www.wikidata.org/wiki/Q111749842",
          "https://go.drugbank.com/drugs/DB13928"
        ],
        "code": [
          {
            "@type": "MedicalCode",
            "code": "2054940",
            "codingSystem": "RxNorm"
          },
          {
            "@type": "MedicalCode",
            "code": "E11.9",
            "codingSystem": "ICD-10-CM"
          },
          {
            "@type": "MedicalCode",
            "code": "I25.10",
            "codingSystem": "ICD-10-CM"
          },
          {
            "@type": "MedicalCode",
            "code": "0169-4132-12",
            "codingSystem": "NDC"
          }
        ]
      },
      {
        "@type": "Product",
        "@id": "https://telehealthfx.com/medications/ozempic/#product",
        "name": "Ozempic® Telehealth Program",
        "brand": { "@type": "Brand", "name": "Telehealth FX" },
        "description": "Physician-managed Ozempic program including clinical consultation, lab coordination, genuine Novo Nordisk pen, and free cold shipping. Flat $1,199/month with save up to $100 on first order.",
        "image": "https://telehealthfx.com/assets/Site%20Icon-modified.png",
        "sku": "OZE-01",
        "url": "https://telehealthfx.com/medications/ozempic/",
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "bestRating": "5",
          "worstRating": "1",
          "reviewCount": "184",
          "ratingCount": "184"
        },
        "offers": {
          "@type": "Offer",
          "price": "1199.00",
          "priceCurrency": "USD",
          "availability": "https://schema.org/InStock",
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
        "@id": "https://telehealthfx.com/medications/ozempic/#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What is Ozempic and what is it FDA-approved for?",
            "url": "https://telehealthfx.com/medications/ozempic/#faq-what-is-ozempic",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Ozempic® is an injectable prescription medicine containing semaglutide. It is FDA-approved as an adjunct to diet and exercise to improve glycemic control in adults with type 2 diabetes mellitus, and to reduce the risk of major adverse cardiovascular events (stroke, heart attack, or cardiovascular death) in adults with type 2 diabetes and established cardiovascular disease."
            }
          },
          {
            "@type": "Question",
            "name": "How much does Ozempic cost through Telehealth FX?",
            "url": "https://telehealthfx.com/medications/ozempic/#faq-cost-pricing",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Through Telehealth FX, Ozempic is available at a flat rate of $1,199 per month across all dosage strengths (0.5mg, 1.0mg, and 2.0mg). First-time orders receive an automatic promotional discount saving up to $100 at checkout ($1,099 for your first month). The fee covers your licensed physician evaluation, ongoing care coordination, and free 2-day cold-chain shipping. No hidden membership fees apply."
            }
          },
          {
            "@type": "Question",
            "name": "What were the results of the SUSTAIN-6 clinical trial for Ozempic?",
            "url": "https://telehealthfx.com/medications/ozempic/#faq-sustain-6-results",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "In the landmark SUSTAIN-6 clinical trial (NEJM 2016, n=3,297), once-weekly semaglutide produced a statistically significant 26% hazard reduction in major adverse cardiovascular events (HR 0.74, 95% CI 0.58-0.95, p=0.02) over 104 weeks compared to placebo. Nonfatal stroke was reduced by 39% (p=0.04), alongside mean HbA1c reductions of up to 1.4% and significant body weight reductions."
            }
          },
          {
            "@type": "Question",
            "name": "What is the standard Ozempic dosage titration schedule?",
            "url": "https://telehealthfx.com/medications/ozempic/#faq-titration-schedule",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Ozempic begins with an initiation dose of 0.25 mg once weekly for 4 weeks to allow gastrointestinal adaptation. At week 5, the dose escalates to 0.5 mg once weekly. If additional glycemic control is required after at least 4 weeks on 0.5 mg, your clinician may increase your dose to 1.0 mg weekly, and up to a maximum maintenance dose of 2.0 mg weekly."
            }
          },
          {
            "@type": "Question",
            "name": "Is Ozempic eligible for HSA or FSA payment?",
            "url": "https://telehealthfx.com/medications/ozempic/#faq-hsa-fsa-eligibility",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. Telehealth FX accepts Health Savings Account (HSA) and Flexible Spending Account (FSA) cards. Because Ozempic is a physician-prescribed clinical medication, full program fees qualify under IRS Section 213(d) medical expense regulations."
            }
          },
          {
            "@type": "Question",
            "name": "What states are eligible for the Telehealth FX Ozempic program?",
            "url": "https://telehealthfx.com/medications/ozempic/#faq-eligible-states",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "The Telehealth FX clinical network serves patients across all 50 U.S. states and Washington D.C. Consultations are conducted online with board-certified physicians licensed in your specific state of residence."
            }
          }
        ]
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://telehealthfx.com/medications/ozempic/#breadcrumb",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://telehealthfx.com/" },
          { "@type": "ListItem", "position": 2, "name": "Medications", "item": "https://telehealthfx.com/medications/" },
          { "@type": "ListItem", "position": 3, "name": "Ozempic", "item": "https://telehealthfx.com/medications/ozempic/" }
        ]
      }
    ]
  };

  return (
    <section className="section" style={{ minHeight: '60vh', paddingTop: 120 }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <div className="container" style={{ maxWidth: 880 }}>

        {/* Hero */}
        <div style={{ textAlign: 'center', marginBottom: 60 }}>
          <div className="pill pill-brand" style={{ marginBottom: 20, display: 'inline-flex' }}>
            <span className="pill-dot" /> Authentic Novo Nordisk Pen · Save up to $100 1st Order
          </div>
          <h1 className="serif" style={{ fontSize: 72, marginBottom: 24, lineHeight: 0.95 }}>
            Ozempic®<br/><span style={{ fontStyle: 'italic', color: 'var(--brand)' }}>from $1,199/mo.</span>
          </h1>
          <p style={{ fontSize: 20, color: 'var(--ink-2)', maxWidth: 640, margin: '0 auto 36px', lineHeight: 1.6 }}>
            FDA-approved once-weekly semaglutide injection for type 2 diabetes glycemic control and proven cardiovascular event risk reduction. Flat-rate pricing across all doses. $0 doctor consultation fee and temperature-monitored cold-chain shipping.
          </p>

          <div style={{ display: 'inline-flex', flexDirection: 'column', alignItems: 'center', gap: 12 }}>
            <a href={CTA_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-lg" style={{ display: 'inline-flex', padding: '18px 36px', fontSize: 18 }}>
              Claim $100 Off First Order <Icon.Arrow />
            </a>
            <span style={{ fontSize: 13, color: 'var(--ink-3)' }}>Discount auto-applied at checkout · FSA & HSA eligible</span>
          </div>
        </div>

        {/* Trust Stats Strip */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16, marginBottom: 64 }}>
          {[
            { num: '-26%', label: 'CV Risk Reduction (SUSTAIN-6)' },
            { num: '-1.4%', label: 'Mean HbA1c Reduction' },
            { num: '$1,199', label: 'Flat Monthly (All Doses)' },
            { num: '50 States', label: 'Board-Certified MD Coverage' },
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
          question="What is Ozempic and how does once-weekly semaglutide improve metabolic and cardiovascular health?"
          thesis="Ozempic® (semaglutide) is an FDA-approved weekly subcutaneous GLP-1 receptor agonist that reduces major adverse cardiovascular events by 26% (HR 0.74) in adults with type 2 diabetes and heart disease while lowering HbA1c by up to 1.4%."
          mechanics="Semaglutide exhibits 94% structural homology to native human GLP-1, modified at position 8 with alpha-aminoisobutyric acid to prevent DPP-4 enzymatic degradation and acylated with a C-18 fatty di-acid chain at Lys26. This allows tight albumin binding and extends elimination half-life to 168 hours. Upon subcutaneous administration, it stimulates glucose-dependent pancreatic beta-cell insulin secretion, suppresses inappropriate glucagon secretion from alpha cells, delays gastric emptying, and targets arcuate nucleus POMC/CART neurons in the hypothalamus to reduce appetite."
          metrics={[
            { label: "FDA Approval (NDA 209637)", value: "Dec 5, 2017 (0.5mg/1mg) · Mar 28, 2022 (2mg)" },
            { label: "SUSTAIN-6 CV Hazard Ratio", value: "HR 0.74 (95% CI 0.58–0.95; p=0.02; n=3,297)" },
            { label: "Stroke Risk Reduction", value: "39% Reduction in Nonfatal Stroke (p=0.04)" },
            { label: "Telehealth FX Pricing", value: "$1,199/mo flat (Save $100 on 1st order)" },
          ]}
          statute="FDA NDA 209637 Prescribing Information & Controlled Substances Act (Non-Controlled Rx)"
          clinicalStandard="American Diabetes Association (ADA) Standards of Care in Diabetes & SUSTAIN Clinical Program"
          badge="Verified Clinical Drug Monograph"
        />

        {/* Content Body */}
        <div className="blog-content" style={{ fontSize: 18, lineHeight: 1.7, color: 'var(--ink-2)' }}>

          <h2 className="serif" style={{ fontSize: 36, marginTop: 48, marginBottom: 20, color: 'var(--ink)' }}>Clinical Evidence: The SUSTAIN Trial Program</h2>
          <p>
            Ozempic was evaluated across the comprehensive <strong>SUSTAIN clinical trial program</strong>, encompassing over 10,000 randomized patients globally. The definitive cardiovascular outcome trial, <strong>SUSTAIN-6</strong> (published in the <em>New England Journal of Medicine</em> by Marso et al., 2016; 375:1834-1844, DOI: 10.1056/NEJMoa1607141), evaluated 3,297 patients with type 2 diabetes and established cardiovascular disease over 104 weeks.
          </p>

          <div style={{ margin: '32px 0', overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: 15 }}>
              <thead>
                <tr style={{ background: 'var(--ink)', color: '#fff' }}>
                  <th style={{ padding: '14px 16px', fontWeight: 600 }}>Clinical Trial</th>
                  <th style={{ padding: '14px 16px', fontWeight: 600 }}>Cohort (n)</th>
                  <th style={{ padding: '14px 16px', fontWeight: 600 }}>Dose & Regimen</th>
                  <th style={{ padding: '14px 16px', fontWeight: 600 }}>Primary Outcome</th>
                  <th style={{ padding: '14px 16px', fontWeight: 600 }}>Statistical Significance</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['SUSTAIN-6', '3,297', 'Semaglutide 0.5mg or 1.0mg weekly vs Placebo', '26% reduction in 3-point MACE (CV death, nonfatal MI, nonfatal stroke)', 'HR 0.74 (95% CI 0.58–0.95), p=0.02'],
                  ['SUSTAIN-6 (Stroke)', '3,297', 'Semaglutide 0.5mg or 1.0mg weekly vs Placebo', '39% reduction in nonfatal stroke incidence (1.6% vs 2.7%)', 'HR 0.61 (95% CI 0.38–0.99), p=0.04'],
                  ['SUSTAIN-1', '388', 'Semaglutide 0.5mg / 1.0mg monotherapy vs Placebo', 'HbA1c change of -1.45% (0.5mg) and -1.55% (1.0mg)', 'p < 0.0001 vs placebo (-0.02%)'],
                  ['SUSTAIN-Forte', '961', 'Semaglutide 2.0mg weekly vs Semaglutide 1.0mg', 'Superior HbA1c reduction (-2.2% vs -1.9%) and weight loss (-6.9kg vs -6.0kg)', 'p < 0.01 for HbA1c superiority'],
                ].map(([trial, n, regimen, outcome, pval], i) => (
                  <tr key={i} style={{ borderBottom: '1px solid var(--line-soft)', background: i % 2 ? 'transparent' : '#FAFAFA' }}>
                    <td style={{ padding: '14px 16px', fontWeight: 600, color: 'var(--ink)' }}>{trial}</td>
                    <td style={{ padding: '14px 16px' }}>{n}</td>
                    <td style={{ padding: '14px 16px' }}>{regimen}</td>
                    <td style={{ padding: '14px 16px' }}>{outcome}</td>
                    <td style={{ padding: '14px 16px', color: 'var(--brand)', fontWeight: 500 }}>{pval}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 className="serif" style={{ fontSize: 36, marginTop: 48, marginBottom: 20, color: 'var(--ink)' }}>Ozempic Dosing & Stepwise Titration Schedule</h2>
          <p>
            Ozempic is administered as a <strong>once-weekly subcutaneous injection</strong> into the abdomen, thigh, or upper arm on the same day each week, with or without meals. Doses are stepped up gradually in 4-week intervals to prevent gastrointestinal side effects:
          </p>

          <div style={{ margin: '32px 0', overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: 15 }}>
              <thead>
                <tr style={{ background: 'var(--ink)', color: '#fff' }}>
                  <th style={{ padding: '14px 16px', fontWeight: 600 }}>Phase</th>
                  <th style={{ padding: '14px 16px', fontWeight: 600 }}>Duration</th>
                  <th style={{ padding: '14px 16px', fontWeight: 600 }}>Weekly Dose</th>
                  <th style={{ padding: '14px 16px', fontWeight: 600 }}>Clinical Purpose</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Initiation', 'Weeks 1–4', '0.25 mg weekly', 'Gastrointestinal tolerability phase; not intended for glycemic control.'],
                  ['Therapeutic Step 1', 'Weeks 5–8', '0.5 mg weekly', 'Initial therapeutic dose for glycemic management.'],
                  ['Therapeutic Step 2', 'Weeks 9–12', '1.0 mg weekly', 'Escalation if additional blood sugar control is required.'],
                  ['Maximum Maintenance', 'Week 13+', '2.0 mg weekly', 'Approved maximum dose for patients needing intensive glycemic regulation.'],
                ].map(([phase, duration, dose, desc], i) => (
                  <tr key={i} style={{ borderBottom: '1px solid var(--line-soft)', background: i % 2 ? 'transparent' : '#FAFAFA' }}>
                    <td style={{ padding: '14px 16px', fontWeight: 600 }}>{phase}</td>
                    <td style={{ padding: '14px 16px' }}>{duration}</td>
                    <td style={{ padding: '14px 16px', color: 'var(--brand)', fontWeight: 600 }}>{dose}</td>
                    <td style={{ padding: '14px 16px' }}>{desc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Contextual CTA Card */}
          <div className="card" style={{ padding: 36, margin: '48px 0', textAlign: 'center', background: '#FAF6F0', borderColor: 'var(--brand)' }}>
            <h3 className="serif" style={{ fontSize: 28, marginBottom: 14, color: 'var(--ink)' }}>Prescription Ozempic Delivered Direct to Your Door</h3>
            <p style={{ marginBottom: 24, fontSize: 16, maxWidth: 540, margin: '0 auto 24px' }}>
              Complete our clinical evaluation. A state-licensed physician reviews your health history and writes your prescription with zero clinic visits required.
            </p>
            <a href={CTA_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-lg" style={{ display: 'inline-flex' }}>
              See If You Qualify <Icon.Arrow />
            </a>
          </div>

          <h2 className="serif" style={{ fontSize: 36, marginTop: 48, marginBottom: 20, color: 'var(--ink)' }}>FDA Safety Profile & Contraindications</h2>
          <p>
            Ozempic carries an <strong>FDA Boxed Warning for Thyroid C-Cell Tumors</strong>. In rodent carcinogenicity studies, semaglutide caused a dose-dependent and treatment-duration-dependent increase in the incidence of thyroid C-cell tumors (adenomas and carcinomas) at clinically relevant exposures. It is unknown whether Ozempic causes thyroid C-cell tumors, including medullary thyroid carcinoma (MTC), in humans.
          </p>

          <div className="card" style={{ padding: 24, background: '#FFF8F6', border: '1px solid #E8B4A8', borderRadius: 12, margin: '24px 0' }}>
            <h4 style={{ color: '#9B3828', fontSize: 16, fontWeight: 700, margin: '0 0 8px' }}>BOXED WARNING & CONTRAINDICATIONS</h4>
            <ul style={{ margin: 0, paddingLeft: 20, fontSize: 14, color: '#5A2016' }}>
              <li style={{ marginBottom: 6 }}>Contraindicated in individuals with a personal or family history of Medullary Thyroid Carcinoma (MTC).</li>
              <li style={{ marginBottom: 6 }}>Contraindicated in patients with Multiple Endocrine Neoplasia syndrome type 2 (MEN 2).</li>
              <li style={{ marginBottom: 6 }}>Contraindicated in patients with known hypersensitivity to semaglutide or any components of Ozempic.</li>
              <li>Not for use in patients with type 1 diabetes mellitus or for the treatment of diabetic ketoacidosis.</li>
            </ul>
          </div>

          <p>
            The most common adverse reactions reported in clinical trials (at or above 5%) were gastrointestinal: <strong>nausea (15.8%–20.3%)</strong>, <strong>diarrhea (8.5%–8.8%)</strong>, <strong>vomiting (5.0%–9.2%)</strong>, and <strong>abdominal pain (5.7%–7.3%)</strong>. These symptoms are predominantly mild-to-moderate and transient, peaking during initial titration weeks.
          </p>

          <h2 className="serif" style={{ fontSize: 36, marginTop: 48, marginBottom: 20, color: 'var(--ink)' }}>How the Telehealth FX Ozempic Program Works</h2>
          <div style={{ display: 'grid', gridTemplateColumns: '48px 1fr', gap: '20px 16px', margin: '32px 0' }}>
            {[
              { step: '1', title: 'Complete Online Assessment', desc: 'Fill out our 5-minute metabolic health questionnaire detailing your HbA1c, medical history, and current medications.' },
              { step: '2', title: 'Physician Review (Under 24 Hours)', desc: 'A board-certified physician licensed in your state evaluates your chart, orders any necessary lab markers, and issues your prescription.' },
              { step: '3', title: 'Direct Cold-Chain Fulfillment', desc: 'Your genuine Novo Nordisk Ozempic pen ships in insulated, temperature-monitored packaging via 2-day express courier.' },
              { step: '4', title: 'Ongoing Titration & Clinical Support', desc: 'Regular check-ins with your care team ensure seamless dosage escalation, symptom management, and A1C progress tracking.' },
            ].map((s, i) => (
              <React.Fragment key={i}>
                <div style={{ width: 48, height: 48, borderRadius: '50%', background: 'var(--brand)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: 18, flexShrink: 0 }}>{s.step}</div>
                <div style={{ paddingTop: 4 }}>
                  <h3 style={{ fontSize: 20, marginBottom: 6, color: 'var(--ink)' }}>{s.title}</h3>
                  <p style={{ margin: 0, fontSize: 15, color: 'var(--ink-2)' }}>{s.desc}</p>
                </div>
              </React.Fragment>
            ))}
          </div>

          <h2 className="serif" style={{ fontSize: 36, marginTop: 48, marginBottom: 20, color: 'var(--ink)' }}>Frequently Asked Questions</h2>
          {[
            { id: 'faq-what-is-ozempic', q: 'What is Ozempic and what is it FDA-approved for?', a: 'Ozempic® is an injectable prescription medicine containing semaglutide. It is FDA-approved as an adjunct to diet and exercise to improve glycemic control in adults with type 2 diabetes mellitus, and to reduce the risk of major adverse cardiovascular events (stroke, heart attack, or cardiovascular death) in adults with type 2 diabetes and established cardiovascular disease.' },
            { id: 'faq-cost-pricing', q: 'How much does Ozempic cost through Telehealth FX?', a: 'Through Telehealth FX, Ozempic is available at a flat rate of $1,199 per month across all dosage strengths (0.5mg, 1.0mg, and 2.0mg). First-time orders receive an automatic promotional discount saving up to $100 at checkout ($1,099 for your first month). The fee covers your licensed physician evaluation, ongoing care coordination, and free 2-day cold-chain shipping. No hidden membership fees apply.' },
            { id: 'faq-sustain-6-results', q: 'What were the results of the SUSTAIN-6 clinical trial for Ozempic?', a: 'In the landmark SUSTAIN-6 clinical trial (NEJM 2016, n=3,297), once-weekly semaglutide produced a statistically significant 26% hazard reduction in major adverse cardiovascular events (HR 0.74, 95% CI 0.58-0.95, p=0.02) over 104 weeks compared to placebo. Nonfatal stroke was reduced by 39% (p=0.04), alongside mean HbA1c reductions of up to 1.4% and significant body weight reductions.' },
            { id: 'faq-titration-schedule', q: 'What is the standard Ozempic dosage titration schedule?', a: 'Ozempic begins with an initiation dose of 0.25 mg once weekly for 4 weeks to allow gastrointestinal adaptation. At week 5, the dose escalates to 0.5 mg once weekly. If additional glycemic control is required after at least 4 weeks on 0.5 mg, your clinician may increase your dose to 1.0 mg weekly, and up to a maximum maintenance dose of 2.0 mg weekly.' },
            { id: 'faq-hsa-fsa-eligibility', q: 'Is Ozempic eligible for HSA or FSA payment?', a: 'Yes. Telehealth FX accepts Health Savings Account (HSA) and Flexible Spending Account (FSA) cards. Because Ozempic is a physician-prescribed clinical medication, full program fees qualify under IRS Section 213(d) medical expense regulations.' },
            { id: 'faq-eligible-states', q: 'What states are eligible for the Telehealth FX Ozempic program?', a: 'The Telehealth FX clinical network serves patients across all 50 U.S. states and Washington D.C. Consultations are conducted online with board-certified physicians licensed in your specific state of residence.' },
          ].map((faq, i) => (
            <div key={i} id={faq.id} style={{ padding: '24px 0', borderBottom: '1px solid var(--line-soft)', scrollMarginTop: 100 }}>
              <h3 style={{ fontSize: 18, marginBottom: 10, color: 'var(--ink)' }}>{faq.q}</h3>
              <p style={{ margin: 0, fontSize: 16, color: 'var(--ink-2)', lineHeight: 1.65 }}>{faq.a}</p>
            </div>
          ))}

          {/* Final CTA Box */}
          <div style={{ padding: 48, marginTop: 64, borderRadius: 20, background: 'var(--ink)', color: '#FBF8F3', textAlign: 'center' }}>
            <h2 className="serif" style={{ fontSize: 40, marginBottom: 18, color: '#FBF8F3' }}>Start Your Ozempic Program Today</h2>
            <p style={{ fontSize: 18, opacity: 0.9, marginBottom: 32, maxWidth: 520, margin: '0 auto 32px', lineHeight: 1.6 }}>
              $1,199/mo flat rate across all doses. Save up to $100 on your first month order. Board-certified physician oversight. Free cold-chain delivery.
            </p>
            <a href={CTA_URL} target="_blank" rel="noopener noreferrer" className="btn btn-lg" style={{ background: '#FBF8F3', color: 'var(--ink)', display: 'inline-flex', justifyContent: 'center', width: '100%', maxWidth: 320 }}>
              Claim $100 Off First Order <Icon.Arrow />
            </a>
          </div>

        </div>

        <p style={{ fontSize: 13, color: 'var(--ink-3)', marginTop: 40, paddingTop: 20, borderTop: '1px solid var(--line-soft)', lineHeight: 1.5 }}>
          Disclaimer: Ozempic® is a registered trademark of Novo Nordisk A/S. Telehealth FX is an independent telehealth management platform connecting patients with board-certified physicians and licensed pharmacies. Telehealth FX is not sponsored by, endorsed by, or affiliated with Novo Nordisk. Prescription requires clinical evaluation and approval by a licensed medical provider.
        </p>
      </div>
    </section>
  );
}

export { OzempicPage };
export default OzempicPage;
