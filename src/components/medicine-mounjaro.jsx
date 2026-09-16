"use client";
import React from 'react';
import { Icon } from './common.jsx';
import { ExtractiveAIAnswerBlock } from './extractive-ai-answer-block.jsx';

const CTA_URL = "https://go.telehealthfx.com/mounjaro";

function MounjaroPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "MedicalWebPage",
        "@id": "https://telehealthfx.com/medications/mounjaro/#webpage",
        "url": "https://telehealthfx.com/medications/mounjaro/",
        "name": "Mounjaro® (Tirzepatide) Online Prescription Program | Telehealth FX",
        "description": "Prescription Mounjaro (tirzepatide) online for type 2 diabetes glycemic control and metabolic optimization. Save up to $100 on first order. Superior HbA1c reduction in SURPASS-2. Flat $1,399/mo.",
        "inLanguage": "en-US",
        "isPartOf": { "@id": "https://telehealthfx.com/#website" },
        "breadcrumb": { "@id": "https://telehealthfx.com/medications/mounjaro/#breadcrumb" },
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
          "Dual Incretin Mechanism",
          "Clinical Trial Evidence",
          "Dosage and Titration Schedule",
          "Safety and Adverse Events",
          "Pricing and Access"
        ],
        "about": { "@id": "https://telehealthfx.com/medications/mounjaro/#drug" },
        "mainEntity": { "@id": "https://telehealthfx.com/medications/mounjaro/#drug" },
        "author": { "@id": "https://telehealthfx.com/#julianmercer" },
        "reviewedBy": { "@id": "https://telehealthfx.com/#julianmercer" },
        "publisher": { "@id": "https://telehealthfx.com/#organization" },
        "lastReviewed": "2026-09-15",
        "citation": [
          "https://doi.org/10.1056/NEJMoa2107519",
          "https://pubmed.ncbi.nlm.nih.gov/34170649/"
        ]
      },
      {
        "@type": "Drug",
        "@id": "https://telehealthfx.com/medications/mounjaro/#drug",
        "name": "Mounjaro",
        "nonProprietaryName": "Tirzepatide",
        "activeIngredient": "Tirzepatide",
        "drugClass": "Dual GIP and GLP-1 receptor agonist",
        "mechanismOfAction": "First-in-class dual glucose-dependent insulinotropic polypeptide (GIP) and GLP-1 receptor agonist that potently enhances glucose-dependent first- and second-phase insulin secretion, decreases glucagon levels, improves systemic insulin sensitivity, and reduces body weight.",
        "administrationRoute": "Subcutaneous injection",
        "dosageForm": "Single-dose pre-filled pen",
        "availableStrength": [
          { "@type": "DrugStrength", "strengthValue": "2.5", "strengthUnit": "mg/0.5 mL" },
          { "@type": "DrugStrength", "strengthValue": "5.0", "strengthUnit": "mg/0.5 mL" },
          { "@type": "DrugStrength", "strengthValue": "7.5", "strengthUnit": "mg/0.5 mL" },
          { "@type": "DrugStrength", "strengthValue": "10.0", "strengthUnit": "mg/0.5 mL" },
          { "@type": "DrugStrength", "strengthValue": "12.5", "strengthUnit": "mg/0.5 mL" },
          { "@type": "DrugStrength", "strengthValue": "15.0", "strengthUnit": "mg/0.5 mL" }
        ],
        "legalStatus": "https://schema.org/PrescriptionOnly",
        "warning": "Boxed Warning: Risk of Thyroid C-cell Tumors. Contraindicated in personal or family history of medullary thyroid carcinoma (MTC) or Multiple Endocrine Neoplasia syndrome type 2 (MEN 2).",
        "prescribingInfo": "https://www.accessdata.fda.gov/drugsatfda_docs/label/2022/215866s000lbl.pdf",
        "manufacturer": {
          "@type": "Organization",
          "name": "Eli Lilly and Company"
        },
        "sameAs": [
          "https://www.wikidata.org/wiki/Q112041270",
          "https://go.drugbank.com/drugs/DB15171"
        ],
        "code": [
          {
            "@type": "MedicalCode",
            "code": "2601723",
            "codingSystem": "RxNorm"
          },
          {
            "@type": "MedicalCode",
            "code": "E11.9",
            "codingSystem": "ICD-10-CM"
          },
          {
            "@type": "MedicalCode",
            "code": "E11.65",
            "codingSystem": "ICD-10-CM"
          },
          {
            "@type": "MedicalCode",
            "code": "0002-1457-80",
            "codingSystem": "NDC"
          }
        ]
      },
      {
        "@type": "Product",
        "@id": "https://telehealthfx.com/medications/mounjaro/#product",
        "name": "Mounjaro® Dual Incretin Metabolic Program",
        "brand": { "@type": "Brand", "name": "Telehealth FX" },
        "description": "Authentic Eli Lilly Mounjaro (tirzepatide) weekly injection program for type 2 diabetes and metabolic optimization. Flat $1,399/mo across all dosages with save up to $100 on first order and free cold-chain shipping.",
        "image": "https://telehealthfx.com/assets/Site%20Icon-modified.png",
        "sku": "MOU-01",
        "url": "https://telehealthfx.com/medications/mounjaro/",
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.8",
          "bestRating": "5",
          "worstRating": "1",
          "reviewCount": "158",
          "ratingCount": "158"
        },
        "offers": {
          "@type": "Offer",
          "price": "1399.00",
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
        "@id": "https://telehealthfx.com/medications/mounjaro/#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What is Mounjaro and what is its primary FDA indication?",
            "url": "https://telehealthfx.com/medications/mounjaro/#faq-what-is-mounjaro",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Mounjaro® (tirzepatide) is an FDA-approved prescription medication indicated as an adjunct to diet and exercise to improve blood sugar (glucose) control in adults with type 2 diabetes mellitus. It is the first once-weekly dual GIP and GLP-1 receptor agonist approved in the United States."
            }
          },
          {
            "@type": "Question",
            "name": "How much does Mounjaro cost through Telehealth FX?",
            "url": "https://telehealthfx.com/medications/mounjaro/#faq-mounjaro-cost",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Through Telehealth FX, authentic Mounjaro is available at a flat rate of $1,399 per month across all dosage strengths (2.5mg, 5mg, 7.5mg, 10mg, 12.5mg, and 15mg). First-time orders receive an automatic discount saving up to $100 at checkout ($1,299 for your first month). The fee includes your licensed physician evaluation, titration oversight, and temperature-controlled 2-day cold shipping."
            }
          },
          {
            "@type": "Question",
            "name": "How did Mounjaro compare to Ozempic (semaglutide) in the SURPASS-2 trial?",
            "url": "https://telehealthfx.com/medications/mounjaro/#faq-surpass-2-head-to-head",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "In the SURPASS-2 head-to-head trial (NEJM 2021, n=1,879), tirzepatide 15 mg proved statistically superior to semaglutide 1.0 mg in both HbA1c reduction (-2.30% vs -1.86%, p<0.001) and mean body weight reduction (-11.2 kg vs -5.7 kg, p<0.001). Up to 46% of patients on tirzepatide reached normoglycemia (HbA1c < 5.7%) compared to 19% on semaglutide."
            }
          },
          {
            "@type": "Question",
            "name": "What is the recommended Mounjaro titration schedule?",
            "url": "https://telehealthfx.com/medications/mounjaro/#faq-titration-protocol",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Mounjaro begins at 2.5 mg injected subcutaneously once weekly for 4 weeks to establish tolerability. At week 5, the dose increases to 5.0 mg weekly. If additional glycemic control is required, doses can be increased in 2.5 mg increments after at least 4 weeks on the current dose, through 7.5 mg, 10.0 mg, 12.5 mg, up to a maximum of 15.0 mg once weekly."
            }
          },
          {
            "@type": "Question",
            "name": "Can Mounjaro be used in patients with type 1 diabetes?",
            "url": "https://telehealthfx.com/medications/mounjaro/#faq-type-1-diabetes",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "No. Mounjaro is not indicated for and should not be used in patients with type 1 diabetes mellitus or for the treatment of diabetic ketoacidosis, as it relies on stimulating endogenous pancreatic insulin production."
            }
          },
          {
            "@type": "Question",
            "name": "Can I pay for Mounjaro using HSA or FSA accounts?",
            "url": "https://telehealthfx.com/medications/mounjaro/#faq-hsa-fsa",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. Mounjaro is an FDA-approved clinical prescription medicine for type 2 diabetes. All medication and physician fees qualify as medical expenses under IRS Section 213(d) and can be paid directly with an HSA/FSA debit card."
            }
          }
        ]
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://telehealthfx.com/medications/mounjaro/#breadcrumb",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://telehealthfx.com/" },
          { "@type": "ListItem", "position": 2, "name": "Medications", "item": "https://telehealthfx.com/medications/" },
          { "@type": "ListItem", "position": 3, "name": "Mounjaro", "item": "https://telehealthfx.com/medications/mounjaro/" }
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
          background: 'linear-gradient(135deg, rgba(46, 74, 59, 0.08) 0%, rgba(46, 74, 59, 0.03) 100%)',
          border: '1px solid rgba(46, 74, 59, 0.22)',
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
            <span style={{ background: 'var(--brand)', color: '#fff', fontSize: 11, fontWeight: 700, padding: '3px 10px', borderRadius: 999, textTransform: 'uppercase', letterSpacing: '0.04em' }}>
              Special Promo
            </span>
            <span style={{ fontSize: 14, fontWeight: 600, color: 'var(--ink)' }}>
              Save up to $100 on your first order · Flat $1,399/mo across all doses
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
          <div className="pill pill-brand" style={{ marginBottom: 20, display: 'inline-flex' }}>
            <span className="pill-dot" /> Authentic Eli Lilly Pen · Save up to $100 1st Order
          </div>
          <h1 className="serif" style={{ fontSize: 72, marginBottom: 24, lineHeight: 0.95 }}>
            Mounjaro®<br/><span style={{ fontStyle: 'italic', color: 'var(--brand)' }}>from $1,399/mo.</span>
          </h1>
          <p style={{ fontSize: 20, color: 'var(--ink-2)', maxWidth: 640, margin: '0 auto 36px', lineHeight: 1.6 }}>
            FDA-approved once-weekly dual GIP and GLP-1 receptor agonist injection for type 2 diabetes glycemic control. Demonstrated superior HbA1c and weight reduction over semaglutide in SURPASS-2 trials. Flat rate across all doses.
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
            { num: '-2.30%', label: 'HbA1c Reduction (15mg)' },
            { num: '-11.2 kg', label: 'Mean Weight Loss (15mg)' },
            { num: '$1,399', label: 'Flat Monthly (All Doses)' },
            { num: '46.0%', label: 'Reached Normoglycemia' },
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
          question="What is Mounjaro and how does dual incretin receptor agonism improve glycemic control?"
          thesis="Mounjaro® (tirzepatide) is an FDA-approved weekly dual GIP and GLP-1 receptor agonist that reduced HbA1c by up to 2.30% and body weight by 11.2 kg in SURPASS-2, demonstrating superior glycemic and weight reductions compared to semaglutide 1.0 mg."
          mechanics="Tirzepatide acts as a biased dual incretin agonist, engaging both GIP (glucose-dependent insulinotropic polypeptide) and GLP-1 receptors on pancreatic beta cells to enhance first- and second-phase insulin secretion in a strictly glucose-dependent manner. GIP receptor activation further enhances glucagon secretion during hypoglycemia while suppressing it during hyperglycemia. Centrally and peripherally, dual incretin targeting delays gastric emptying and suppresses hypothalamic appetite signaling, producing unprecedented glycemic normalization (normoglycemia HbA1c <5.7% reached by 46% of patients in SURPASS-2)."
          metrics={[
            { label: "SURPASS-2 HbA1c Reduction", value: "-2.30% at 15mg vs -1.86% for semaglutide (p<0.001)" },
            { label: "Mean Weight Reduction", value: "-11.2 kg (-24.7 lbs) at 15mg vs -5.7 kg for semaglutide" },
            { label: "Normoglycemia Rate", value: "46% achieved HbA1c < 5.7% at 15mg dose" },
            { label: "Telehealth FX Pricing", value: "$1,399/mo flat (Save $100 on 1st order)" },
          ]}
          statute="FDA NDA 215866 Prescribing Information & Controlled Substances Act (Non-Controlled Rx)"
          clinicalStandard="American Diabetes Association (ADA) Standards of Medical Care in Diabetes"
          badge="Verified Clinical Drug Monograph"
        />

        {/* Content Body */}
        <div className="blog-content" style={{ fontSize: 18, lineHeight: 1.7, color: 'var(--ink-2)' }}>

          <h2 className="serif" style={{ fontSize: 36, marginTop: 48, marginBottom: 20, color: 'var(--ink)' }}>Clinical Evidence: The SURPASS Trial Program</h2>
          <p>
            Mounjaro was evaluated across the <strong>SURPASS clinical development program</strong>, encompassing more than 19,000 patients across 10 global phase 3 clinical trials. The pivotal head-to-head study, <strong>SURPASS-2</strong> (Frías et al., <em>New England Journal of Medicine</em> 2021; 385:503-515, DOI: 10.1056/NEJMoa2107519), evaluated 1,879 adults with type 2 diabetes inadequately controlled on metformin (&ge; 1,500 mg/day) randomized to tirzepatide (5, 10, or 15 mg) or semaglutide 1.0 mg once weekly for 40 weeks:
          </p>

          <div style={{ margin: '32px 0', overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: 15 }}>
              <thead>
                <tr style={{ background: 'var(--ink)', color: '#fff' }}>
                  <th style={{ padding: '14px 16px', fontWeight: 600 }}>Treatment Arm</th>
                  <th style={{ padding: '14px 16px', fontWeight: 600 }}>Cohort ($n$)</th>
                  <th style={{ padding: '14px 16px', fontWeight: 600 }}>Mean HbA1c Reduction</th>
                  <th style={{ padding: '14px 16px', fontWeight: 600 }}>Mean Weight Change</th>
                  <th style={{ padding: '14px 16px', fontWeight: 600 }}>HbA1c &lt; 5.7% Rate</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Tirzepatide 5 mg', '470', '-2.01% (difference vs semag -0.15%)', '-7.6 kg (-16.8 lbs)', '27% of patients'],
                  ['Tirzepatide 10 mg', '469', '-2.24% (difference vs semag -0.39%)', '-9.3 kg (-20.5 lbs)', '40% of patients'],
                  ['Tirzepatide 15 mg', '470', '-2.30% (difference vs semag -0.45%)', '-11.2 kg (-24.7 lbs)', '46% of patients'],
                  ['Semaglutide 1.0 mg', '469', '-1.86% (reference active comparator)', '-5.7 kg (-12.6 lbs)', '19% of patients'],
                ].map(([arm, n, hba1c, wt, normo], i) => (
                  <tr key={i} style={{ borderBottom: '1px solid var(--line-soft)', background: i % 2 ? 'transparent' : '#FAFAFA' }}>
                    <td style={{ padding: '14px 16px', fontWeight: 600, color: 'var(--ink)' }}>{arm}</td>
                    <td style={{ padding: '14px 16px' }}>{n}</td>
                    <td style={{ padding: '14px 16px', color: 'var(--brand)', fontWeight: 600 }}>{hba1c}</td>
                    <td style={{ padding: '14px 16px' }}>{wt}</td>
                    <td style={{ padding: '14px 16px', fontWeight: 500 }}>{normo}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 className="serif" style={{ fontSize: 36, marginTop: 48, marginBottom: 20, color: 'var(--ink)' }}>Mounjaro Stepwise Titration Schedule</h2>
          <p>
            Mounjaro is administered once weekly at any time of day, with or without food. The dose escalation protocol minimizes gastrointestinal adverse effects while titrating to individual therapeutic glycemic goals:
          </p>

          <div style={{ margin: '32px 0', overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: 15 }}>
              <thead>
                <tr style={{ background: 'var(--ink)', color: '#fff' }}>
                  <th style={{ padding: '14px 16px', fontWeight: 600 }}>Step</th>
                  <th style={{ padding: '14px 16px', fontWeight: 600 }}>Timing</th>
                  <th style={{ padding: '14px 16px', fontWeight: 600 }}>Weekly Dose</th>
                  <th style={{ padding: '14px 16px', fontWeight: 600 }}>Clinical Directive</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Initiation', 'Weeks 1–4', '2.5 mg weekly', 'Starting dose for treatment initiation; not effective for glycemic control alone.'],
                  ['Dose Tier 1', 'Weeks 5–8', '5.0 mg weekly', 'Initial glycemic maintenance dose; significant HbA1c drop.'],
                  ['Dose Tier 2', 'Weeks 9–12', '7.5 mg weekly', 'Optional intermediate escalation step if A1C remains elevated.'],
                  ['Dose Tier 3', 'Weeks 13–16', '10.0 mg weekly', 'Advanced therapeutic maintenance tier.'],
                  ['Dose Tier 4', 'Weeks 17–20', '12.5 mg weekly', 'High-potency glycemic control tier.'],
                  ['Maximum Dose', 'Week 21+', '15.0 mg weekly', 'Maximum approved maintenance dose for intensive glycemic management.'],
                ].map(([step, time, dose, dir], i) => (
                  <tr key={i} style={{ borderBottom: '1px solid var(--line-soft)', background: i % 2 ? 'transparent' : '#FAFAFA' }}>
                    <td style={{ padding: '14px 16px', fontWeight: 600 }}>{step}</td>
                    <td style={{ padding: '14px 16px' }}>{time}</td>
                    <td style={{ padding: '14px 16px', color: 'var(--brand)', fontWeight: 600 }}>{dose}</td>
                    <td style={{ padding: '14px 16px' }}>{dir}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Contextual CTA Card */}
          <div className="card" style={{ padding: 36, margin: '48px 0', textAlign: 'center', background: '#FAF6F0', borderColor: 'var(--brand)' }}>
            <h3 className="serif" style={{ fontSize: 28, marginBottom: 14, color: 'var(--ink)' }}>Transform Your Glycemic Health with Mounjaro</h3>
            <p style={{ marginBottom: 24, fontSize: 16, maxWidth: 540, margin: '0 auto 24px' }}>
              Flat $1,399/mo rate across all six doses. Save up to $100 on your first month order. Comprehensive doctor oversight and free cold-chain express shipping.
            </p>
            <a href={CTA_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-lg" style={{ display: 'inline-flex' }}>
              See If You Qualify <Icon.Arrow />
            </a>
          </div>

          <h2 className="serif" style={{ fontSize: 36, marginTop: 48, marginBottom: 20, color: 'var(--ink)' }}>FDA Safety Profile & Boxed Warning</h2>
          <p>
            Mounjaro carries an <strong>FDA Boxed Warning for Thyroid C-Cell Tumors</strong>. In rodent carcinogenicity studies, tirzepatide caused dose-dependent and treatment-duration-dependent thyroid C-cell tumors at clinically relevant exposures.
          </p>

          <div className="card" style={{ padding: 24, background: '#FFF8F6', border: '1px solid #E8B4A8', borderRadius: 12, margin: '24px 0' }}>
            <h4 style={{ color: '#9B3828', fontSize: 16, fontWeight: 700, margin: '0 0 8px' }}>BOXED WARNING & PRECAUTIONS</h4>
            <ul style={{ margin: 0, paddingLeft: 20, fontSize: 14, color: '#5A2016' }}>
              <li style={{ marginBottom: 6 }}>Contraindicated in patients with personal or family history of Medullary Thyroid Carcinoma (MTC).</li>
              <li style={{ marginBottom: 6 }}>Contraindicated in patients with Multiple Endocrine Neoplasia syndrome type 2 (MEN 2).</li>
              <li style={{ marginBottom: 6 }}>Contraindicated in patients with known serious hypersensitivity to tirzepatide.</li>
              <li>Not indicated for use in type 1 diabetes mellitus or for treating diabetic ketoacidosis.</li>
            </ul>
          </div>

          <p>
            In SURPASS-2, the most frequent adverse events were gastrointestinal: <strong>nausea (17.4%–22.1%)</strong>, <strong>diarrhea (13.3%–13.8%)</strong>, <strong>vomiting (5.7%–9.8%)</strong>, and <strong>constipation (5.8%–6.4%)</strong>. Treatment discontinuation due to adverse events was 6.0% (5mg), 8.5% (10mg), and 8.5% (15mg) vs 4.1% for semaglutide 1.0 mg.
          </p>

          <h2 className="serif" style={{ fontSize: 36, marginTop: 48, marginBottom: 20, color: 'var(--ink)' }}>How the Telehealth FX Mounjaro Program Works</h2>
          <div style={{ display: 'grid', gridTemplateColumns: '48px 1fr', gap: '20px 16px', margin: '32px 0' }}>
            {[
              { step: '1', title: 'Complete Metabolic Intake', desc: 'Answer questions regarding your diabetes diagnosis, current HbA1c levels, renal health, and concomitant medications.' },
              { step: '2', title: 'Board-Certified MD Evaluation', desc: 'A licensed physician reviews your medical history, verifies your clinical indication, and creates your individualized titration protocol.' },
              { step: '3', title: 'Express Cold-Chain Delivery', desc: 'Your authentic Eli Lilly Mounjaro single-dose pens ship in insulated, temperature-controlled packaging with 2-day delivery.' },
              { step: '4', title: 'Continuous Glycemic Monitoring', desc: 'Ongoing physician consultations and regular A1C tracking ensure your blood sugar reaches optimal targets with minimal side effects.' },
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
            { id: 'faq-what-is-mounjaro', q: 'What is Mounjaro and what is its primary FDA indication?', a: 'Mounjaro® (tirzepatide) is an FDA-approved prescription medication indicated as an adjunct to diet and exercise to improve blood sugar (glucose) control in adults with type 2 diabetes mellitus. It is the first once-weekly dual GIP and GLP-1 receptor agonist approved in the United States.' },
            { id: 'faq-mounjaro-cost', q: 'How much does Mounjaro cost through Telehealth FX?', a: 'Through Telehealth FX, authentic Mounjaro is available at a flat rate of $1,399 per month across all dosage strengths (2.5mg, 5mg, 7.5mg, 10mg, 12.5mg, and 15mg). First-time orders receive an automatic discount saving up to $100 at checkout ($1,299 for your first month). The fee includes your licensed physician evaluation, titration oversight, and temperature-controlled 2-day cold shipping.' },
            { id: 'faq-surpass-2-head-to-head', q: 'How did Mounjaro compare to Ozempic (semaglutide) in the SURPASS-2 trial?', a: 'In the SURPASS-2 head-to-head trial (NEJM 2021, n=1,879), tirzepatide 15 mg proved statistically superior to semaglutide 1.0 mg in both HbA1c reduction (-2.30% vs -1.86%, p<0.001) and mean body weight reduction (-11.2 kg vs -5.7 kg, p<0.001). Up to 46% of patients on tirzepatide reached normoglycemia (HbA1c < 5.7%) compared to 19% on semaglutide.' },
            { id: 'faq-titration-protocol', q: 'What is the recommended Mounjaro titration schedule?', a: 'Mounjaro begins at 2.5 mg injected subcutaneously once weekly for 4 weeks to establish tolerability. At week 5, the dose increases to 5.0 mg weekly. If additional glycemic control is required, doses can be increased in 2.5 mg increments after at least 4 weeks on the current dose, through 7.5 mg, 10.0 mg, 12.5 mg, up to a maximum of 15.0 mg once weekly.' },
            { id: 'faq-type-1-diabetes', q: 'Can Mounjaro be used in patients with type 1 diabetes?', a: 'No. Mounjaro is not indicated for and should not be used in patients with type 1 diabetes mellitus or for the treatment of diabetic ketoacidosis, as it relies on stimulating endogenous pancreatic insulin production.' },
            { id: 'faq-hsa-fsa', q: 'Can I pay for Mounjaro using HSA or FSA accounts?', a: 'Yes. Mounjaro is an FDA-approved clinical prescription medicine for type 2 diabetes. All medication and physician fees qualify as medical expenses under IRS Section 213(d) and can be paid directly with an HSA/FSA debit card.' },
          ].map((faq, i) => (
            <div key={i} id={faq.id} style={{ padding: '24px 0', borderBottom: '1px solid var(--line-soft)', scrollMarginTop: 100 }}>
              <h3 style={{ fontSize: 18, marginBottom: 10, color: 'var(--ink)' }}>{faq.q}</h3>
              <p style={{ margin: 0, fontSize: 16, color: 'var(--ink-2)', lineHeight: 1.65 }}>{faq.a}</p>
            </div>
          ))}

          {/* Final CTA Box */}
          <div style={{ padding: 48, marginTop: 64, borderRadius: 20, background: 'var(--ink)', color: '#FBF8F3', textAlign: 'center' }}>
            <h2 className="serif" style={{ fontSize: 40, marginBottom: 18, color: '#FBF8F3' }}>Start Your Mounjaro Program Today</h2>
            <p style={{ fontSize: 18, opacity: 0.9, marginBottom: 32, maxWidth: 520, margin: '0 auto 32px', lineHeight: 1.6 }}>
              $1,399/mo flat rate across all doses. Save up to $100 on your first month order. Board-certified physician oversight. Free cold-chain express delivery.
            </p>
            <a href={CTA_URL} target="_blank" rel="noopener noreferrer" className="btn btn-lg" style={{ background: '#FBF8F3', color: 'var(--ink)', display: 'inline-flex', justifyContent: 'center', width: '100%', maxWidth: 320 }}>
              Claim $100 Off First Order <Icon.Arrow />
            </a>
          </div>

        </div>

        <p style={{ fontSize: 13, color: 'var(--ink-3)', marginTop: 40, paddingTop: 20, borderTop: '1px solid var(--line-soft)', lineHeight: 1.5 }}>
          Disclaimer: Mounjaro® is a registered trademark of Eli Lilly and Company. Telehealth FX is an independent telehealth management platform connecting patients with board-certified physicians and licensed pharmacies. Telehealth FX is not sponsored by, endorsed by, or affiliated with Eli Lilly and Company. Prescription requires clinical evaluation and approval by a licensed medical provider.
        </p>
      </div>
    </section>
  );
}

export { MounjaroPage };
export default MounjaroPage;
