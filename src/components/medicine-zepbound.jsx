"use client";
import React from 'react';
import { Icon } from './common.jsx';
import { ExtractiveAIAnswerBlock } from './extractive-ai-answer-block.jsx';
import { PatientReviewsSection } from './patient-reviews-section.jsx';

const CTA_URL = "https://go.telehealthfx.com/zepbound";

function ZepboundPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "MedicalWebPage",
        "@id": "https://telehealthfx.com/medications/zepbound/#webpage",
        "url": "https://telehealthfx.com/medications/zepbound/",
        "name": "Zepbound™ (Tirzepatide) Online Prescription Program | Telehealth FX",
        "description": "Prescription Zepbound (tirzepatide) dual GIP/GLP-1 injection for chronic weight loss. Save up to $100 on first order. Up to 20.9% weight reduction in SURMOUNT-1. Flat $1,199/mo across all doses.",
        "inLanguage": "en-US",
        "isPartOf": { "@id": "https://telehealthfx.com/#website" },
        "breadcrumb": { "@id": "https://telehealthfx.com/medications/zepbound/#breadcrumb" },
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
        "about": { "@id": "https://telehealthfx.com/medications/zepbound/#drug" },
        "mainEntity": { "@id": "https://telehealthfx.com/medications/zepbound/#drug" },
        "author": { "@id": "https://telehealthfx.com/#julianmercer" },
        "reviewedBy": { "@id": "https://telehealthfx.com/#julianmercer" },
        "publisher": { "@id": "https://telehealthfx.com/#organization" },
        "lastReviewed": "2026-09-15",
        "citation": [
          "https://doi.org/10.1056/NEJMoa2206038",
          "https://pubmed.ncbi.nlm.nih.gov/35658024/"
        ]
      },
      {
        "@type": "Substance",
        "@id": "https://telehealthfx.com/medications/zepbound/#drug",
        "name": "Zepbound",
        "nonProprietaryName": "Tirzepatide",
        "activeIngredient": "Tirzepatide",
        "drugClass": "Dual GIP and GLP-1 receptor agonist",
        "mechanismOfAction": "Dual incretin co-agonist simultaneously activating glucose-dependent insulinotropic polypeptide (GIP) and GLP-1 receptors to synergistically suppress appetite, modulate energy expenditure, and regulate adipocyte metabolism.",
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
        "prescribingInfo": "https://www.accessdata.fda.gov/drugsatfda_docs/label/2023/217806s000lbl.pdf",
        "manufacturer": {
          "@type": "Organization",
          "name": "Eli Lilly and Company"
        },
        "sameAs": [
          "https://www.wikidata.org/wiki/Q123385202",
          "https://go.drugbank.com/drugs/DB15171"
        ],
        "code": [
          {
            "@type": "MedicalCode",
            "code": "2674409",
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
            "code": "0002-2559-80",
            "codingSystem": "NDC"
          }
        ]
      },
      {
        "@type": "Product",
        "@id": "https://telehealthfx.com/medications/zepbound/#product",
        "name": "Zepbound™ Dual Incretin Weight Loss Program",
        "brand": { "@type": "Brand", "name": "Telehealth FX" },
        "description": "Authentic Eli Lilly Zepbound (tirzepatide) program with board-certified physician consultation, flat $1,199/month across all doses, save up to $100 on first order, and temperature-controlled 2-day delivery.",
        "image": "https://telehealthfx.com/assets/Site%20Icon-modified.png",
        "sku": "ZEP-01",
        "url": "https://telehealthfx.com/medications/zepbound/",
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "bestRating": "5",
          "worstRating": "1",
          "reviewCount": "192",
          "ratingCount": "192"
        },
        "review": [
          {
            "@type": "Review",
            "author": { "@type": "Person", "name": "Marcus D." },
            "datePublished": "2026-03-24",
            "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
            "reviewBody": "Dual GIP and GLP-1 targeting is remarkably more effective. Down 46 lbs on Zepbound with virtually zero nausea. Exceptional telehealth coordination."
          },
          {
            "@type": "Review",
            "author": { "@type": "Person", "name": "Heather N." },
            "datePublished": "2026-04-09",
            "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
            "reviewBody": "The flat price across dose increases made planning simple. Authentic Lilly autoinjector pens arrived in perfect cold-chain insulated packaging."
          }
        ],
        "offers": {
          "@type": "Offer",
          "price": "1199.00",
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
        "@id": "https://telehealthfx.com/medications/zepbound/#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What is Zepbound and how does it differ from single GLP-1 medications?",
            "url": "https://telehealthfx.com/medications/zepbound/#faq-what-is-zepbound",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Zepbound™ (tirzepatide) is an FDA-approved injectable medication for chronic weight management. Unlike single GLP-1 receptor agonists (such as Wegovy or Ozempic), Zepbound is a dual GIP and GLP-1 receptor co-agonist. By activating both metabolic pathways simultaneously, it achieves superior appetite suppression, enhanced metabolic rate, and significantly higher clinical weight loss (up to 20.9% in SURMOUNT-1)."
            }
          },
          {
            "@type": "Question",
            "name": "How much does Zepbound cost through Telehealth FX?",
            "url": "https://telehealthfx.com/medications/zepbound/#faq-zepbound-pricing",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Through Telehealth FX, authentic Zepbound is priced at a flat rate of $1,199 per month across all six dose levels (2.5mg, 5mg, 7.5mg, 10mg, 12.5mg, and 15mg). First orders receive a discount saving up to $100 auto-applied at checkout ($1,099 for your first month). The fee includes your clinical consultation, titration monitoring, and free cold-chain express shipping with zero membership surcharges."
            }
          },
          {
            "@type": "Question",
            "name": "What were the primary weight loss results from the SURMOUNT-1 trial?",
            "url": "https://telehealthfx.com/medications/zepbound/#faq-surmount-1-results",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "In the 72-week SURMOUNT-1 trial (NEJM 2022, n=2,539), adults taking tirzepatide achieved mean weight reductions of 15.0% at 5mg (35.5 lbs), 19.5% at 10mg (48.9 lbs), and 20.9% at 15mg (52.0 lbs) compared to 3.1% (5.3 lbs) for placebo (p<0.001). Over 91% achieved >=5% weight loss, and 36.2% lost 25% or more of their total body weight."
            }
          },
          {
            "@type": "Question",
            "name": "What is the Zepbound dose escalation schedule?",
            "url": "https://telehealthfx.com/medications/zepbound/#faq-titration-schedule",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Zepbound begins with a starting dose of 2.5 mg once weekly for 4 weeks (initiation). Doses are increased in 2.5 mg increments every 4 weeks based on patient tolerance: 5.0 mg (weeks 5–8), 7.5 mg (weeks 9–12), 10.0 mg (weeks 13–16), 12.5 mg (weeks 17–20), and the maximum maintenance dose of 15.0 mg weekly from week 21 onward."
            }
          },
          {
            "@type": "Question",
            "name": "Does Zepbound interact with oral birth control pills?",
            "url": "https://telehealthfx.com/medications/zepbound/#faq-oral-contraceptives",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. Tirzepatide delays gastric emptying, which can transiently reduce the peak absorption (Cmax) of oral contraceptives. Patients using oral birth control pills are advised to add a barrier method (or switch to non-oral contraception) for 4 weeks after initiating treatment and for 4 weeks after each dose escalation."
            }
          },
          {
            "@type": "Question",
            "name": "Is Zepbound covered by HSA or FSA?",
            "url": "https://telehealthfx.com/medications/zepbound/#faq-hsa-fsa",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. Zepbound is an FDA-approved clinical prescription for obesity and overweight management. All consultation and medication costs qualify under IRS Section 213(d) and can be reimbursed or paid with an HSA/FSA debit card."
            }
          }
        ]
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://telehealthfx.com/medications/zepbound/#breadcrumb",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://telehealthfx.com/" },
          { "@type": "ListItem", "position": 2, "name": "Medications", "item": "https://telehealthfx.com/medications/" },
          { "@type": "ListItem", "position": 3, "name": "Zepbound", "item": "https://telehealthfx.com/medications/zepbound/" }
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
              Save up to $100 on your first order · Flat $1,199/mo across all doses
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
            <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--accent)' }}/> Next-Gen Dual Incretin (GIP + GLP-1) · Save $100 1st Order
          </div>
          <h1 className="serif" style={{ fontSize: 72, marginBottom: 24, lineHeight: 0.95 }}>
            Zepbound™<br/><span style={{ fontStyle: 'italic', color: 'var(--brand)' }}>from $1,199/mo.</span>
          </h1>
          <p style={{ fontSize: 20, color: 'var(--ink-2)', maxWidth: 640, margin: '0 auto 36px', lineHeight: 1.6 }}>
            FDA-approved once-weekly dual GIP and GLP-1 receptor agonist injection delivering up to 20.9% (52 lbs) average weight loss in landmark clinical trials. Flat-rate pricing across all six dosages with board-certified clinician oversight.
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
            { num: '-20.9%', label: 'Mean Weight Loss (15mg)' },
            { num: '52.0 lbs', label: 'Average Absolute Loss' },
            { num: '$1,199', label: 'Flat Rate Across All Doses' },
            { num: '36.2%', label: 'Lost ≥25% Body Weight' },
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
          question="What is Zepbound and how does dual GIP/GLP-1 receptor agonism drive weight loss?"
          thesis="Zepbound™ (tirzepatide) is an FDA-approved weekly dual GIP and GLP-1 receptor agonist that produces up to 20.9% (52.0 lbs) mean weight loss over 72 weeks with over one-third of patients losing at least 25% of body weight."
          mechanics="Tirzepatide is a 39-amino-acid synthetic peptide modified with a C-20 fatty di-acid chain that simultaneously binds both GIP and GLP-1 receptors. Endogenous GIP regulates lipid buffering and insulin sensitivity in white adipose tissue, while GLP-1 suppresses glucagon and delays gastric emptying. Centrally, dual agonism produces synergistic suppression of hunger signals in the hypothalamic arcuate nucleus and modulates hedonic food cravings in mesolimbic dopamine centers, significantly outperforming single-receptor agonists in clinical trials."
          metrics={[
            { label: "SURMOUNT-1 15mg Loss", value: "-20.9% (-52.0 lbs / -23.6 kg; p<0.001)" },
            { label: "Patients Losing ≥25%", value: "36.2% of patients lost >=25% body weight" },
            { label: "Waist Circumference Drop", value: "-18.5 cm mean reduction at 15mg" },
            { label: "Telehealth FX Pricing", value: "$1,199/mo flat (Save $100 on 1st order)" },
          ]}
          statute="FDA NDA 217806 Prescribing Information & Controlled Substances Act (Non-Controlled Rx)"
          clinicalStandard="The Obesity Society & SURMOUNT Clinical Development Program"
          badge="Verified Clinical Drug Monograph"
        />

        {/* Content Body */}
        <div className="blog-content" style={{ fontSize: 18, lineHeight: 1.7, color: 'var(--ink-2)' }}>

          <h2 className="serif" style={{ fontSize: 36, marginTop: 48, marginBottom: 20, color: 'var(--ink)' }}>Clinical Evidence: The SURMOUNT-1 Trial</h2>
          <p>
            Zepbound’s efficacy was established in the landmark <strong>SURMOUNT-1 trial</strong> (Jastreboff et al., <em>New England Journal of Medicine</em> 2022; 387:205-216, DOI: 10.1056/NEJMoa2206038), which enrolled 2,539 adults with obesity (BMI $\ge 30$) or overweight (BMI $\ge 27$) with at least one weight-related condition, excluding diabetes. Participants were randomized 1:1:1:1 to once-weekly tirzepatide (5 mg, 10 mg, or 15 mg) or placebo over 72 weeks:
          </p>

          <div style={{ margin: '32px 0', overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: 15 }}>
              <thead>
                <tr style={{ background: 'var(--ink)', color: '#fff' }}>
                  <th style={{ padding: '14px 16px', fontWeight: 600 }}>Tirzepatide Dose</th>
                  <th style={{ padding: '14px 16px', fontWeight: 600 }}>Mean Weight Loss (%)</th>
                  <th style={{ padding: '14px 16px', fontWeight: 600 }}>Absolute Loss (lbs)</th>
                  <th style={{ padding: '14px 16px', fontWeight: 600 }}>&ge;15% Loss Rate</th>
                  <th style={{ padding: '14px 16px', fontWeight: 600 }}>&ge;20% Loss Rate</th>
                  <th style={{ padding: '14px 16px', fontWeight: 600 }}>&ge;25% Loss Rate</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['5 mg weekly', '-15.0%', '-35.5 lbs (-16.1 kg)', '50.0%', '30.0%', '15.3%'],
                  ['10 mg weekly', '-19.5%', '-48.9 lbs (-22.2 kg)', '69.0%', '50.1%', '31.6%'],
                  ['15 mg weekly', '-20.9%', '-52.0 lbs (-23.6 kg)', '68.6%', '56.7%', '36.2%'],
                  ['Placebo', '-3.1%', '-5.3 lbs (-2.4 kg)', '9.0%', '4.1%', '1.3%'],
                ].map(([dose, pct, abs, l15, l20, l25], i) => (
                  <tr key={i} style={{ borderBottom: '1px solid var(--line-soft)', background: i % 2 ? 'transparent' : '#FAFAFA' }}>
                    <td style={{ padding: '14px 16px', fontWeight: 600, color: 'var(--ink)' }}>{dose}</td>
                    <td style={{ padding: '14px 16px', color: 'var(--brand)', fontWeight: 600 }}>{pct}</td>
                    <td style={{ padding: '14px 16px' }}>{abs}</td>
                    <td style={{ padding: '14px 16px' }}>{l15}</td>
                    <td style={{ padding: '14px 16px' }}>{l20}</td>
                    <td style={{ padding: '14px 16px' }}>{l25}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 className="serif" style={{ fontSize: 36, marginTop: 48, marginBottom: 20, color: 'var(--ink)' }}>Zepbound Stepwise Dosage & Titration Protocol</h2>
          <p>
            Zepbound is supplied in single-dose, pre-filled auto-injector pens with integrated hidden needles. Treatment begins at a low initiation dose and steps up every 4 weeks to optimize clinical response and minimize gastrointestinal side effects:
          </p>

          <div style={{ margin: '32px 0', overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: 15 }}>
              <thead>
                <tr style={{ background: 'var(--ink)', color: '#fff' }}>
                  <th style={{ padding: '14px 16px', fontWeight: 600 }}>Titration Step</th>
                  <th style={{ padding: '14px 16px', fontWeight: 600 }}>Schedule</th>
                  <th style={{ padding: '14px 16px', fontWeight: 600 }}>Weekly Dose</th>
                  <th style={{ padding: '14px 16px', fontWeight: 600 }}>Clinical Role</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Step 1 (Initiation)', 'Weeks 1–4', '2.5 mg weekly', 'Gastrointestinal adaptation phase (not for chronic maintenance)'],
                  ['Step 2 (Therapeutic 1)', 'Weeks 5–8', '5.0 mg weekly', 'Initial therapeutic dose; significant appetite suppression'],
                  ['Step 3 (Escalation 1)', 'Weeks 9–12', '7.5 mg weekly', 'Intermediate titration step toward higher maintenance'],
                  ['Step 4 (Therapeutic 2)', 'Weeks 13–16', '10.0 mg weekly', 'Advanced therapeutic maintenance tier'],
                  ['Step 5 (Escalation 2)', 'Weeks 17–20', '12.5 mg weekly', 'Near-maximal incretin receptor stimulation'],
                  ['Step 6 (Maximum)', 'Week 21 onward', '15.0 mg weekly', 'Maximum approved maintenance dose for chronic weight loss'],
                ].map(([step, sch, dose, role], i) => (
                  <tr key={i} style={{ borderBottom: '1px solid var(--line-soft)', background: i % 2 ? 'transparent' : '#FAFAFA' }}>
                    <td style={{ padding: '14px 16px', fontWeight: 600 }}>{step}</td>
                    <td style={{ padding: '14px 16px' }}>{sch}</td>
                    <td style={{ padding: '14px 16px', color: 'var(--brand)', fontWeight: 600 }}>{dose}</td>
                    <td style={{ padding: '14px 16px' }}>{role}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Contextual CTA Card */}
          <div className="card" style={{ padding: 36, margin: '48px 0', textAlign: 'center', background: '#FAF6F0', borderColor: 'var(--brand)' }}>
            <h3 className="serif" style={{ fontSize: 28, marginBottom: 14, color: 'var(--ink)' }}>Experience Dual GIP/GLP-1 Weight Management</h3>
            <p style={{ marginBottom: 24, fontSize: 16, maxWidth: 540, margin: '0 auto 24px' }}>
              Flat $1,199/mo rate across all six doses. Save up to $100 on your first order. 24-hour doctor approval and cold-chain insulated home delivery.
            </p>
            <a href={CTA_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-lg" style={{ display: 'inline-flex' }}>
              See If You Qualify <Icon.Arrow />
            </a>
          </div>

          <h2 className="serif" style={{ fontSize: 36, marginTop: 48, marginBottom: 20, color: 'var(--ink)' }}>Safety Profile, Boxed Warning & Adverse Reactions</h2>
          <p>
            Zepbound carries an <strong>FDA Boxed Warning for Thyroid C-Cell Tumors</strong>. In female and male rats, tirzepatide causes dose-dependent and treatment-duration-dependent thyroid C-cell tumors (adenomas and carcinomas). It is unknown whether Zepbound causes thyroid C-cell tumors, including medullary thyroid carcinoma (MTC), in humans.
          </p>

          <div className="card" style={{ padding: 24, background: '#FFF8F6', border: '1px solid #E8B4A8', borderRadius: 12, margin: '24px 0' }}>
            <h4 style={{ color: '#9B3828', fontSize: 16, fontWeight: 700, margin: '0 0 8px' }}>BOXED WARNING & PRECAUTIONS</h4>
            <ul style={{ margin: 0, paddingLeft: 20, fontSize: 14, color: '#5A2016' }}>
              <li style={{ marginBottom: 6 }}>Contraindicated in patients with a personal or family history of Medullary Thyroid Carcinoma (MTC).</li>
              <li style={{ marginBottom: 6 }}>Contraindicated in patients with Multiple Endocrine Neoplasia syndrome type 2 (MEN 2).</li>
              <li style={{ marginBottom: 6 }}>Contraindicated in patients with serious hypersensitivity to tirzepatide.</li>
              <li>Oral Contraceptive Interaction: Advise patients on oral hormonal contraceptives to switch to a non-oral method or add a barrier method for 4 weeks after initiation and 4 weeks after each dose escalation.</li>
            </ul>
          </div>

          <p>
            In SURMOUNT-1, the most common adverse events ($\ge 5\%$) across tirzepatide doses were gastrointestinal: <strong>nausea (24.6%–33.3% vs 9.5% placebo)</strong>, <strong>diarrhea (18.7%–23.0% vs 7.3%)</strong>, <strong>vomiting (8.3%–12.2% vs 1.7%)</strong>, <strong>constipation (11.1%–17.1% vs 5.8%)</strong>, and <strong>dyspepsia (8.0%–10.2% vs 2.5%)</strong>. Gastrointestinal symptoms were mostly mild to moderate and occurred primarily during dose escalation.
          </p>

          <h2 className="serif" style={{ fontSize: 36, marginTop: 48, marginBottom: 20, color: 'var(--ink)' }}>Zepbound vs. Wegovy: Landmark Head-to-Head Comparison</h2>
          <div style={{ margin: '32px 0', overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: 15 }}>
              <thead>
                <tr style={{ background: 'var(--ink)', color: '#fff' }}>
                  <th style={{ padding: '14px 16px', fontWeight: 600 }}>Clinical Factor</th>
                  <th style={{ padding: '14px 16px', fontWeight: 600 }}>Zepbound™ (Tirzepatide)</th>
                  <th style={{ padding: '14px 16px', fontWeight: 600 }}>Wegovy® (Semaglutide 2.4mg)</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Receptor Class', 'Dual GIP and GLP-1 receptor co-agonist', 'Single GLP-1 receptor agonist'],
                  ['Mean Weight Loss (Max Dose)', '-20.9% (-52.0 lbs) in SURMOUNT-1', '-14.9% (-33.7 lbs) in STEP-1'],
                  ['>=20% Weight Loss Rate', '56.7% of patients at 15mg', '32.0% of patients at 2.4mg'],
                  ['>=25% Weight Loss Rate', '36.2% of patients at 15mg', 'Not reported / <10%'],
                  ['Telehealth FX Monthly Rate', '$1,199/mo flat across all doses', '$899/mo flat across all doses'],
                  ['Introductory Savings', 'Save up to $100 on 1st order', 'Save up to $100 on 1st order'],
                ].map(([f, z, w], i) => (
                  <tr key={i} style={{ borderBottom: '1px solid var(--line-soft)', background: i % 2 ? 'transparent' : '#FAFAFA' }}>
                    <td style={{ padding: '14px 16px', fontWeight: 600 }}>{f}</td>
                    <td style={{ padding: '14px 16px', color: 'var(--brand)', fontWeight: 600 }}>{z}</td>
                    <td style={{ padding: '14px 16px' }}>{w}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 className="serif" style={{ fontSize: 36, marginTop: 48, marginBottom: 20, color: 'var(--ink)' }}>Frequently Asked Questions</h2>
          {[
            { id: 'faq-what-is-zepbound', q: 'What is Zepbound and how does it differ from single GLP-1 medications?', a: 'Zepbound™ (tirzepatide) is an FDA-approved injectable medication for chronic weight management. Unlike single GLP-1 receptor agonists (such as Wegovy or Ozempic), Zepbound is a dual GIP and GLP-1 receptor co-agonist. By activating both metabolic pathways simultaneously, it achieves superior appetite suppression, enhanced metabolic rate, and significantly higher clinical weight loss (up to 20.9% in SURMOUNT-1).' },
            { id: 'faq-zepbound-pricing', q: 'How much does Zepbound cost through Telehealth FX?', a: 'Through Telehealth FX, authentic Zepbound is priced at a flat rate of $1,199 per month across all six dose levels (2.5mg, 5mg, 7.5mg, 10mg, 12.5mg, and 15mg). First orders receive a discount saving up to $100 auto-applied at checkout ($1,099 for your first month). The fee includes your clinical consultation, titration monitoring, and free cold-chain express shipping with zero membership surcharges.' },
            { id: 'faq-surmount-1-results', q: 'What were the primary weight loss results from the SURMOUNT-1 trial?', a: 'In the 72-week SURMOUNT-1 trial (NEJM 2022, n=2,539), adults taking tirzepatide achieved mean weight reductions of 15.0% at 5mg (35.5 lbs), 19.5% at 10mg (48.9 lbs), and 20.9% at 15mg (52.0 lbs) compared to 3.1% (5.3 lbs) for placebo (p<0.001). Over 91% achieved >=5% weight loss, and 36.2% lost 25% or more of their total body weight.' },
            { id: 'faq-titration-schedule', q: 'What is the Zepbound dose escalation schedule?', a: 'Zepbound begins with a starting dose of 2.5 mg once weekly for 4 weeks (initiation). Doses are increased in 2.5 mg increments every 4 weeks based on patient tolerance: 5.0 mg (weeks 5–8), 7.5 mg (weeks 9–12), 10.0 mg (weeks 13–16), 12.5 mg (weeks 17–20), and the maximum maintenance dose of 15.0 mg weekly from week 21 onward.' },
            { id: 'faq-oral-contraceptives', q: 'Does Zepbound interact with oral birth control pills?', a: 'Yes. Tirzepatide delays gastric emptying, which can transiently reduce the peak absorption (Cmax) of oral contraceptives. Patients using oral birth control pills are advised to add a barrier method (or switch to non-oral contraception) for 4 weeks after initiating treatment and for 4 weeks after each dose escalation.' },
            { id: 'faq-hsa-fsa', q: 'Is Zepbound covered by HSA or FSA?', a: 'Yes. Zepbound is an FDA-approved clinical prescription for obesity and overweight management. All consultation and medication costs qualify under IRS Section 213(d) and can be reimbursed or paid with an HSA/FSA debit card.' },
          ].map((faq, i) => (
            <div key={i} id={faq.id} style={{ padding: '24px 0', borderBottom: '1px solid var(--line-soft)', scrollMarginTop: 100 }}>
              <h3 style={{ fontSize: 18, marginBottom: 10, color: 'var(--ink)' }}>{faq.q}</h3>
              <p style={{ margin: 0, fontSize: 16, color: 'var(--ink-2)', lineHeight: 1.65 }}>{faq.a}</p>
            </div>
          ))}

          {/* Patient Reviews Section */}
          <PatientReviewsSection
            productName="Zepbound"
            aggregateRating={{ ratingValue: "4.9", reviewCount: "192" }}
            reviews={[
              {
                author: { name: "Marcus D." },
                datePublished: "2026-03-24",
                reviewRating: { ratingValue: "5" },
                reviewBody: "Dual GIP and GLP-1 targeting is remarkably more effective. Down 46 lbs on Zepbound with virtually zero nausea. Exceptional telehealth coordination."
              },
              {
                author: { name: "Heather N." },
                datePublished: "2026-04-09",
                reviewRating: { ratingValue: "5" },
                reviewBody: "The flat price across dose increases made planning simple. Authentic Lilly autoinjector pens arrived in perfect cold-chain insulated packaging."
              }
            ]}
          />

          {/* Final CTA Box */}
          <div style={{ padding: 48, marginTop: 64, borderRadius: 20, background: 'var(--ink)', color: '#FBF8F3', textAlign: 'center' }}>
            <h2 className="serif" style={{ fontSize: 40, marginBottom: 18, color: '#FBF8F3' }}>Start Your Zepbound Program Today</h2>
            <p style={{ fontSize: 18, opacity: 0.9, marginBottom: 32, maxWidth: 520, margin: '0 auto 32px', lineHeight: 1.6 }}>
              $1,199/mo flat rate across all doses. Save up to $100 on your first order. 24-hour doctor approval. Free cold-chain express shipping.
            </p>
            <a href={CTA_URL} target="_blank" rel="noopener noreferrer" className="btn btn-lg" style={{ background: '#FBF8F3', color: 'var(--ink)', display: 'inline-flex', justifyContent: 'center', width: '100%', maxWidth: 320 }}>
              Claim $100 Off First Order <Icon.Arrow />
            </a>
          </div>

        </div>

        <p style={{ fontSize: 13, color: 'var(--ink-3)', marginTop: 40, paddingTop: 20, borderTop: '1px solid var(--line-soft)', lineHeight: 1.5 }}>
          Disclaimer: Zepbound™ is a registered trademark of Eli Lilly and Company. Telehealth FX is an independent telehealth management platform connecting patients with board-certified physicians and licensed pharmacies. Telehealth FX is not sponsored by, endorsed by, or affiliated with Eli Lilly and Company. Prescription requires clinical evaluation and approval by a licensed medical provider.
        </p>
      </div>
    </section>
  );
}

export { ZepboundPage };
export default ZepboundPage;
