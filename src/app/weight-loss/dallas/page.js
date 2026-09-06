import React from 'react';
import {
  HeroVariationA,
  ClinicalDeepDive,
  CostComparisonTable,
  InsuranceBreakdown,
  PatientArchetype,
  LocalTransitPain,
  DeliveryGridMap,
  InteractiveFAQ,
  FinalCTA
} from '../../../components/weight-loss-location-modules.jsx';

export const metadata = {
  title: "Medical Weight Loss and GLP-1 in Dallas, TX | Telehealth FX",
  description: "Physician-prescribed GLP-1 weight loss in Dallas, TX. Bypass 8-14 week UT Southwestern waitlists. Compounded Semaglutide from $146/mo with cold-chain delivery.",
  openGraph: {
    title: "Medical Weight Loss and GLP-1 in Dallas, TX | Telehealth FX",
    description: "Physician-prescribed GLP-1 weight loss in Dallas, TX. Bypass 8-14 week UT Southwestern waitlists. Compounded Semaglutide from $146/mo with cold-chain delivery.",
    url: "https://telehealthfx.com/weight-loss/dallas/",
    siteName: "Telehealth FX",
    type: "website"
  },
  alternates: {
    canonical: 'https://telehealthfx.com/weight-loss/dallas/'
  }
};

export default function WeightLossDallasPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://telehealthfx.com/#organization",
        "name": "Telehealth FX",
        "url": "https://telehealthfx.com",
        "logo": {
          "@type": "ImageObject",
          "url": "https://telehealthfx.com/logo.png"
        },
        "sameAs": []
      },
      {
        "@type": "MedicalWebPage",
        "@id": "https://telehealthfx.com/weight-loss/dallas/#webpage",
        "url": "https://telehealthfx.com/weight-loss/dallas/",
        "name": "Medical Weight Loss and GLP-1 in Dallas, TX | Telehealth FX",
        "description": "Physician-prescribed GLP-1 weight loss in Dallas, TX. Bypass 8-14 week UT Southwestern waitlists. Compounded Semaglutide from $146/mo with cold-chain delivery.",
        "inLanguage": "en-US",
        "medicalAudience": {
          "@type": "MedicalAudience",
          "audienceType": "Patient"
        },
        "lastReviewed": "2026-09-01",
        "reviewedBy": {
          "@type": "Organization",
          "name": "Telehealth FX Clinical Review Board"
        }
      },
      {
        "@type": "MedicalClinic",
        "@id": "https://telehealthfx.com/weight-loss/dallas/#clinic",
        "name": "Telehealth FX Weight Loss - Dallas",
        "url": "https://telehealthfx.com/weight-loss/dallas/",
        "telephone": "+1-800-TELEHEALTH",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Dallas",
          "addressRegion": "TX",
          "postalCode": "75201",
          "addressCountry": "US"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 32.7767,
          "longitude": -96.7970
        },
        "areaServed": {
          "@type": "City",
          "name": "Dallas",
          "containedInPlace": {
            "@type": "State",
            "name": "Texas"
          }
        },
        "medicalSpecialty": "https://schema.org/Endocrine",
        "isAcceptingNewPatients": true,
        "availableService": {
          "@type": "MedicalTherapy",
          "name": "GLP-1 Receptor Agonist Weight Loss Therapy",
          "alternateName": "Compounded Semaglutide & Tirzepatide",
          "medicineSystem": "WesternConventional",
          "relevantSpecialty": "Endocrine"
        },
        "currenciesAccepted": "USD",
        "paymentAccepted": "Credit Card, Debit Card, HSA, FSA",
        "priceRange": "$146 - $349 per month"
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HeroVariationA
        stateName="Texas"
        cityName="Dallas"
        headline="Medical Weight Loss & GLP-1 in <span style='color: var(--brand)'>Dallas, TX</span>"
        subheadline="Bypass 8-14 week hospital waitlists at UT Southwestern and 300% Highland Park medspa markups. Access pure compounded Semaglutide and Tirzepatide prescribed by Texas-licensed doctors with heat-shielded cold-chain home delivery."
        ctaText="Check Dallas Eligibility"
      />
      <LocalTransitPain
        title="Why DFW Professionals Are Bypassing In-Person Weight Loss Clinics"
        transitText="Enduring 60-minute gridlock on Central Expressway (US-75), the Dallas North Tollway, or I-35E just to sit in an exam room for 5 minutes of provider face time is completely incompatible with a demanding executive schedule."
        hospitalText="Major regional healthcare institutions—including <strong>UT Southwestern Medical Center</strong>, <strong>Baylor Scott & White Health</strong>, and <strong>Texas Health Resources</strong>—face overwhelming specialist backlogs with <strong>8 to 14 week waiting lists</strong> for obesity management. Concurrently, boutique medspas in Uptown and Highland Park charge $650–$1,000 per month. Telehealth FX delivers direct physician care from $146/mo."
      />
      <CostComparisonTable
        title="DFW Medspas vs. Telehealth FX"
        localCompetitors={[
          { name: "Highland Park & Uptown Medspas", cost: "$650 - $1,000/mo", consult: "Mandatory In-Person", access: "Weekly Office Visits" },
          { name: "Plano & Frisco Wellness Clinics", cost: "$550 - $850/mo", consult: "Bi-weekly Visits", access: "Clinic Injection Fees" },
          { name: "UT Southwestern Endocrinology", cost: "$140 Copay + Labs", consult: "8-14 Week Wait", access: "Prior Auth Denials" }
        ]}
        telehealthPrice="From $146/mo"
      />
      <ClinicalDeepDive
        title="Incretin Receptor Biology & Reversing Insulin Resistance in DFW"
        paragraphs={[
          "The Dallas-Fort Worth lifestyle—characterized by long vehicular commutes, high-stress corporate hours, and calorie-dense dining—fosters chronic cortisol secretion and hyperinsulinemia. Traditional calorie-restriction diets fail because elevated insulin traps fatty acids inside adipocytes while amplifying hypothalamic hunger signals.",
          "Compounded GLP-1 (Semaglutide) and dual GLP-1/GIP (Tirzepatide) therapies directly reset metabolic homeostasis. By prolonging gastric transit and agonizing central satiety receptors, these therapies eliminate compulsive food noise, stabilize post-meal glucose swings, and facilitate effortless caloric reduction.",
          "Clinical trial data confirms average total body weight reductions between 15% and 22.5%. Telehealth FX physicians prescribe custom titration protocols compounded with vitamin B6 in 503A facilities to ensure rapid fat loss while safeguarding energy levels and digestive comfort."
        ]}
        citations={[
          "Wilding, J. P., et al. (2021). Once-Weekly Semaglutide in Adults with Overweight or Obesity. <em>The New England Journal of Medicine</em>.",
          "Jastreboff, A. M., et al. (2022). Tirzepatide Once Weekly for the Treatment of Obesity. <em>The New England Journal of Medicine</em>.",
          "UT Southwestern Medical Center. (2025). <em>Metabolic Disease and Clinical Wait Times Audit.</em>"
        ]}
      />
      <PatientArchetype
        title="Dallas Patient Profile"
        archetype="The DFW Commercial Finance Director"
        quote="Between 12-hour workdays in Uptown, constant client steak dinners, and sitting in Tollway traffic, my weight climbed past 240 lbs. A concierge clinic in Preston Hollow wanted $850 a month, and UT Southwestern urology had a 3-month wait. Telehealth FX approved my Tirzepatide script online in 24 hours. I dropped 40 lbs in 5 months without stepping foot in a clinic."
        details="<p><strong>The Challenge:</strong> Sedentary corporate routine, high executive stress, and commercial insurance refusal to cover weight management drugs.</p><p><strong>The Telehealth Protocol:</strong> Completed asynchronous intake. Approved by a Texas-licensed clinician. Titrated seamlessly on compounded Tirzepatide, achieving target body composition with discrete home delivery.</p>"
      />
      <InsuranceBreakdown
        title="DFW Corporate Benefit Exclusions & The Pre-Tax HSA/FSA Bypass"
        text="Major North Texas enterprise employers—including AT&T, American Airlines, Southwest Airlines, Texas Instruments, and ExxonMobil—have carved weight loss medications out of their commercial health plans. Telehealth FX bypasses the insurance maze with transparent cash-pay pricing starting at $146/mo, fully reimbursable through pre-tax HSA and FSA dollars."
      />
      <DeliveryGridMap
        cityName="Dallas"
        mapQuery="Dallas, Texas"
        coordinates="32.7767° N, 96.7970° W"
        counties="Dallas County, Collin County, Denton County, Tarrant County"
        neighborhoods={["Uptown", "Highland Park", "University Park", "Plano", "Frisco", "Lakewood", "McKinney", "Fort Worth", "Arlington", "Addison", "Southlake", "Allen"]}
      />
      <InteractiveFAQ
        faqs={[
          {
            q: "How does Telehealth FX protect medication shipments in extreme Texas summer heat?",
            a: "All medication packages dispatched by our 503A compounding pharmacy partners utilize pharmaceutical-grade phase-change cold packs and vacuum-insulated barriers engineered to maintain cold-chain peptide integrity even in 110°F+ Texas summer afternoon temperatures."
          },
          {
            q: "Are Telehealth FX prescribers licensed in the state of Texas?",
            a: "Yes. Every prescription is authorized by a physician holding an active license with the Texas Medical Board, in strict compliance with Tex. Occ. Code § 111.001 and 22 TAC § 174."
          },
          {
            q: "What is the monthly cost for compounded Semaglutide in Dallas?",
            a: "Telehealth FX offers compounded Semaglutide from $146 per month and compounded Tirzepatide from $249 per month. All pricing includes the physician consultation, prescription, medical supplies, and expedited cold-chain shipping."
          },
          {
            q: "Can I use my HSA or FSA account in Texas?",
            a: "Yes. All Telehealth FX clinical weight loss protocols qualify for Health Savings Account (HSA) and Flexible Spending Account (FSA) reimbursement."
          }
        ]}
      />
      <FinalCTA stateName="Texas" cityName="Dallas" />
    </>
  );
}
