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
  title: "Medical Weight Loss in Indianapolis, IN | Telehealth FX",
  description: "GLP-1 weight loss clinic in Indianapolis, IN. Skip 8-14 week IU Health waits. Compounded Semaglutide and Tirzepatide from $146/mo with cold delivery.",
  openGraph: {
    title: "Medical Weight Loss in Indianapolis, IN | Telehealth FX",
    description: "GLP-1 weight loss clinic in Indianapolis, IN. Skip 8-14 week IU Health waits. Compounded Semaglutide and Tirzepatide from $146/mo with cold delivery.",
    url: "https://telehealthfx.com/weight-loss/indianapolis/",
    siteName: "Telehealth FX",
    type: "website"
  },
  alternates: {
    canonical: 'https://telehealthfx.com/weight-loss/indianapolis/'
  }
};

export default function WeightLossIndianapolisPage() {
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
        "@id": "https://telehealthfx.com/weight-loss/indianapolis/#webpage",
        "url": "https://telehealthfx.com/weight-loss/indianapolis/",
        "name": "Medical Weight Loss in Indianapolis, IN | Telehealth FX",
        "description": "GLP-1 weight loss clinic in Indianapolis, IN. Skip 8-14 week IU Health waits. Compounded Semaglutide and Tirzepatide from $146/mo with cold delivery.",
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
        "@id": "https://telehealthfx.com/weight-loss/indianapolis/#clinic",
        "name": "Telehealth FX Weight Loss - Indianapolis",
        "url": "https://telehealthfx.com/weight-loss/indianapolis/",
        "telephone": "+1-800-TELEHEALTH",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Indianapolis",
          "addressRegion": "IN",
          "postalCode": "46204",
          "addressCountry": "US"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 39.7684,
          "longitude": -86.1581
        },
        "areaServed": {
          "@type": "City",
          "name": "Indianapolis",
          "containedInPlace": {
            "@type": "State",
            "name": "Indiana"
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
        stateName="Indiana"
        cityName="Indianapolis"
        headline="Medical Weight Loss & GLP-1 in <span style='color: var(--brand)'>Indianapolis, IN</span>"
        subheadline="Bypass 8-14 week hospital waitlists at IU Health and 300% Carmel medspa markups. Access pure compounded Semaglutide and Tirzepatide prescribed by Indiana-licensed doctors with temperature-monitored cold-chain delivery."
        ctaText="Check Indianapolis Eligibility"
      />
      <LocalTransitPain
        title="Why Indianapolis Residents Are Bypassing Local Weight Loss Clinics"
        transitText="Commuting through I-465 beltway construction, navigating downtown traffic on Meridian Street, or driving in from Hamilton County just to spend 10 minutes in a medical waiting room is completely inefficient."
        hospitalText="Major regional healthcare networks—such as <strong>IU Health (Methodist & University)</strong>, <strong>Ascension St. Vincent</strong>, and <strong>Community Health Network</strong>—face severe backlogs with <strong>8 to 14 week waiting lists</strong> for obesity medicine and endocrinology. At the same time, boutique Carmel wellness clinics charge $500–$800 monthly. Telehealth FX provides direct doctor consultations from $146/mo."
      />
      <CostComparisonTable
        title="Indianapolis Medspas vs. Telehealth FX"
        localCompetitors={[
          { name: "Carmel & Zionsville Medspas", cost: "$550 - $850/mo", consult: "Mandatory In-Person", access: "Weekly Clinic Visits" },
          { name: "Fishers Wellness & Hormone Spas", cost: "$475 - $750/mo", consult: "Bi-weekly Visits", access: "In-Office Injection Fees" },
          { name: "IU Health Clinical Weight Center", cost: "$120 Copay + Labs", consult: "8-14 Week Wait", access: "Prior Auth Denials" }
        ]}
        telehealthPrice="From $146/mo"
      />
      <ClinicalDeepDive
        title="Tirzepatide & Semaglutide: The Pharmacology of Dual Incretin Therapy"
        paragraphs={[
          "Living in the Crossroads of America means navigating cold Midwest winters and car-dependent routines that naturally suppress physical activity. When combined with elevated corporate and manufacturing stress, metabolic syndrome and leptin resistance frequently derail traditional diets.",
          "Dual GLP-1/GIP receptor agonists (compounded Tirzepatide) and GLP-1 agonists (compounded Semaglutide) operate synergistically. By stimulating both glucose-dependent insulinotropic polypeptide (GIP) and glucagon-like peptide-1 (GLP-1) pathways, these medications enhance insulin sensitivity, delay stomach emptying, and dramatically quiet the brain's compulsive appetite signals.",
          "In landmark trials, patients achieved unprecedented mean weight reductions exceeding 20% of their total body weight. Telehealth FX's Indiana-licensed medical providers design individualized titration protocols compounded with vitamin B6 in 503A accredited pharmacies to maintain gastrointestinal comfort and long-term metabolic health."
        ]}
        citations={[
          "Wilding, J. P., et al. (2021). Once-Weekly Semaglutide in Adults with Overweight or Obesity. <em>The New England Journal of Medicine</em>.",
          "Jastreboff, A. M., et al. (2022). Tirzepatide Once Weekly for the Treatment of Obesity. <em>The New England Journal of Medicine</em>.",
          "Indiana University School of Medicine. (2025). <em>Statewide Endocrinology and Obesity Management Access Study.</em>"
        ]}
      />
      <PatientArchetype
        title="Indianapolis Patient Profile"
        archetype="The Global Logistics Operations Manager"
        quote="Indianapolis is Eli Lilly's home town, yet my employer health insurance flatly refused to cover Zepbound. The local Carmel medspa wanted $700 a month cash. With Telehealth FX, an Indiana doctor reviewed my intake online, and my compounded Tirzepatide was cold-shipped to my home in Fishers for $249/mo. I've lost 38 lbs in 4 months."
        details="<p><strong>The Challenge:</strong> Sedentary desk hours, rotational shift stress in manufacturing logistics, and employer prior authorization denials.</p><p><strong>The Telehealth Protocol:</strong> Approved online by an Indiana-licensed physician. Successfully titrated on compounded Tirzepatide without missing work or scheduling in-person visits.</p>"
      />
      <InsuranceBreakdown
        title="The Eli Lilly Backyard Irony & The Pre-Tax HSA/FSA Solution"
        text="Despite Indianapolis being the global headquarters of Eli Lilly, major regional employer health plans—including Elevance Health (Anthem), Cummins, Roche Diagnostics, and Allison Transmission—frequently deny prior authorizations for anti-obesity GLP-1 medications. Telehealth FX bypasses the insurance gridlock with transparent cash-pay pricing starting at $146/mo, 100% eligible for pre-tax HSA and FSA reimbursement."
      />
      <DeliveryGridMap
        cityName="Indianapolis"
        mapQuery="Indianapolis, Indiana"
        coordinates="39.7684° N, 86.1581° W"
        counties="Marion County, Hamilton County, Hendricks County, Johnson County, Hancock County"
        neighborhoods={["Carmel", "Fishers", "Broad Ripple", "Zionsville", "Meridian Hills", "Downtown Indy", "Greenwood", "Noblesville", "Westfield", "Plainfield", "Avon", "Brownsburg"]}
      />
      <InteractiveFAQ
        faqs={[
          {
            q: "How does Telehealth FX ship GLP-1 medications to Indiana?",
            a: "Medications ship from our 503A compounding pharmacy partners in pharmaceutical-grade insulated cold-pack containers designed to maintain strict refrigeration throughout Midwest seasonal weather."
          },
          {
            q: "Are Telehealth FX prescribers licensed in Indiana?",
            a: "Yes. All prescriptions for Indianapolis residents are authorized by medical providers holding active, unencumbered licenses with the Medical Licensing Board of Indiana under Indiana Code § 25-1-9.5."
          },
          {
            q: "What is the cost of compounded Tirzepatide and Semaglutide in Indianapolis?",
            a: "Compounded Semaglutide starts from $146 per month and compounded Tirzepatide from $249 per month. Pricing is completely transparent and covers doctor consultations, prescriptions, injection supplies, and cold-pack shipping."
          },
          {
            q: "Can I use my HSA or FSA card for weight loss in Indiana?",
            a: "Yes. All Telehealth FX clinical programs are qualified medical expenses eligible for Health Savings Account (HSA) and Flexible Spending Account (FSA) pre-tax funds."
          }
        ]}
      />
      <FinalCTA stateName="Indiana" cityName="Indianapolis" />
    </>
  );
}
