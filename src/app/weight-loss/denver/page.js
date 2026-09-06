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
  title: "Medical Weight Loss and GLP-1 in Denver, CO | Telehealth FX",
  description: "Physician-led GLP-1 weight loss in Denver, Colorado. Bypass 8-14 week UCHealth specialist waits. Compounded Semaglutide from $146/mo with cold-chain delivery.",
  openGraph: {
    title: "Medical Weight Loss and GLP-1 in Denver, CO | Telehealth FX",
    description: "Physician-led GLP-1 weight loss in Denver, Colorado. Bypass 8-14 week UCHealth specialist waits. Compounded Semaglutide from $146/mo with cold-chain delivery.",
    url: "https://telehealthfx.com/weight-loss/denver/",
    siteName: "Telehealth FX",
    type: "website"
  },
  alternates: {
    canonical: 'https://telehealthfx.com/weight-loss/denver/'
  }
};

export default function WeightLossDenverPage() {
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
        "@id": "https://telehealthfx.com/weight-loss/denver/#webpage",
        "url": "https://telehealthfx.com/weight-loss/denver/",
        "name": "Medical Weight Loss and GLP-1 in Denver, CO | Telehealth FX",
        "description": "Physician-led GLP-1 weight loss in Denver, Colorado. Bypass 8-14 week UCHealth specialist waits. Compounded Semaglutide from $146/mo with cold-chain delivery.",
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
        "@id": "https://telehealthfx.com/weight-loss/denver/#clinic",
        "name": "Telehealth FX Weight Loss - Denver",
        "url": "https://telehealthfx.com/weight-loss/denver/",
        "telephone": "+1-800-TELEHEALTH",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Denver",
          "addressRegion": "CO",
          "postalCode": "80202",
          "addressCountry": "US"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 39.7392,
          "longitude": -104.9903
        },
        "areaServed": {
          "@type": "City",
          "name": "Denver",
          "containedInPlace": {
            "@type": "State",
            "name": "Colorado"
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
        stateName="Colorado"
        cityName="Denver"
        headline="Medical Weight Loss & GLP-1 in <span style='color: var(--brand)'>Denver, CO</span>"
        subheadline="Bypass 8-14 week hospital waitlists at UCHealth and 300% Cherry Creek medspa markups. Access pure compounded Semaglutide and Tirzepatide prescribed by Colorado-licensed doctors with altitude-calibrated cold-chain delivery."
        ctaText="Check Denver Eligibility"
      />
      <LocalTransitPain
        title="Why Denver Residents Are Bypassing Local Weight Loss Clinics"
        transitText="Enduring gridlock on I-25, navigating congestion on Sixth Avenue, or commuting from the foothills just to wait 45 minutes in a clinic lobby for a routine prescription injection is an outdated healthcare model."
        hospitalText="Premier Colorado medical networks—such as <strong>UCHealth University of Colorado Hospital</strong>, <strong>Denver Health</strong>, and <strong>CommonSpirit Health</strong>—face unprecedented specialist backlogs, with <strong>8 to 14 week waiting lists</strong> for metabolic health programs. Simultaneously, boutique Cherry Creek clinics charge upwards of $600–$900 monthly. Telehealth FX provides direct physician care from $146/mo."
      />
      <CostComparisonTable
        title="Denver Medspas vs. Telehealth FX"
        localCompetitors={[
          { name: "Cherry Creek Aesthetics & Medspas", cost: "$600 - $950/mo", consult: "Mandatory In-Person", access: "Weekly Office Visits" },
          { name: "LoDo & Highlands Wellness Spas", cost: "$500 - $800/mo", consult: "Bi-weekly Visits", access: "Membership Fees" },
          { name: "UCHealth Clinical Endocrinology", cost: "$130 Copay + Labs", consult: "8-14 Week Wait", access: "Prior Auth Denials" }
        ]}
        telehealthPrice="From $146/mo"
      />
      <ClinicalDeepDive
        title="Incretin Receptor Agonists & The High-Altitude Metabolic Challenge"
        paragraphs={[
          "Living at a mile-high elevation (5,280 feet) impacts cardiovascular and metabolic physiology. When chronic work stress and busy lifestyles limit athletic training, insulin resistance sets in rapidly, leading to stubborn visceral adiposity that conventional dieting cannot reverse.",
          "Compounded Semaglutide and Tirzepatide work at the molecular level by agonizing GLP-1 (and GIP) receptors. This mechanism prolongs gastric emptying, blunts postprandial glucose spikes, and acts directly on the hypothalamic satiety centers in the brain to permanently shut down 'food noise' and impulsive snacking.",
          "In peer-reviewed Phase III trials, participants taking Semaglutide lost an average of 15% of their total body weight, while Tirzepatide participants lost up to 22.5%. Telehealth FX's Colorado-licensed clinicians personalize your dosage titration to safeguard lean muscle mass while accelerating sustainable fat loss."
        ]}
        citations={[
          "Wilding, J. P., et al. (2021). Once-Weekly Semaglutide in Adults with Overweight or Obesity. <em>The New England Journal of Medicine</em>.",
          "Jastreboff, A. M., et al. (2022). Tirzepatide Once Weekly for the Treatment of Obesity. <em>The New England Journal of Medicine</em>.",
          "UCHealth Division of Endocrinology. (2025). <em>Metabolic Management and Clinical Wait Times Review.</em>"
        ]}
      />
      <PatientArchetype
        title="Denver Patient Profile"
        archetype="The Front Range Tech Executive"
        quote="Between managing a hybrid engineering team in the Tech Center and traveling across the Front Range, I hit a metabolic wall at 42. Despite skiing on weekends, my weight climbed 30 lbs. Cherry Creek clinics wanted $750 a month, and UCHealth had a 10-week wait. Telehealth FX evaluated my labs online, and my medication arrived in high-altitude cold packaging within two days."
        details="<p><strong>The Challenge:</strong> High corporate cortisol, desk-bound sedentary hours, and insurance denials for branded Wegovy/Zepbound.</p><p><strong>The Telehealth Protocol:</strong> Approved by a Colorado-licensed physician for compounded Tirzepatide. Patient lost 34 lbs over 20 weeks without missing an injection or taking time off work for clinic visits.</p>"
      />
      <InsuranceBreakdown
        title="Colorado Corporate Benefit Exclusions & The HSA/FSA Solution"
        text="Front Range enterprise employers—including Lockheed Martin, Charles Schwab, Ball Corporation, Arrow Electronics, and DISH Network—routinely exclude anti-obesity medications from their commercial formularies. Telehealth FX provides transparent, cash-pay compounded GLP-1 protocols starting from $146/mo, fully reimbursable using pre-tax HSA and FSA dollars."
      />
      <DeliveryGridMap
        cityName="Denver"
        mapQuery="Denver, Colorado"
        coordinates="39.7392° N, 104.9903° W"
        counties="Denver County, Arapahoe County, Jefferson County, Douglas County, Adams County"
        neighborhoods={["Cherry Creek", "LoDo", "Highlands", "RiNo", "Wash Park", "Lakewood", "Littleton", "Boulder", "Golden", "Aurora", "Englewood", "Centennial"]}
      />
      <InteractiveFAQ
        faqs={[
          {
            q: "How does Telehealth FX protect peptide shipments in Colorado's climate?",
            a: "Our 503A compounding pharmacy partners utilize vacuum-insulated cold-chain shipping with phase-change refrigerant packs engineered to withstand rapid Front Range temperature shifts and high-altitude transit, ensuring full peptide stability."
          },
          {
            q: "Are Telehealth FX prescribers licensed in Colorado?",
            a: "Yes. Every prescription is authorized by a medical doctor or advanced practitioner holding an active, unencumbered license with the Colorado Medical Board in compliance with Rule 1.28."
          },
          {
            q: "What are the costs for compounded GLP-1 weight loss in Denver?",
            a: "Our all-inclusive compounded Semaglutide programs start at $146 per month and compounded Tirzepatide from $249 per month. There are zero membership fees, zero mandatory office consult charges, and free cold-pack delivery."
          },
          {
            q: "Can I use HSA or FSA funds for weight loss treatment in Colorado?",
            a: "Yes. Telehealth FX prescriptions and medical consultations are 100% eligible for Health Savings Account (HSA) and Flexible Spending Account (FSA) reimbursement."
          }
        ]}
      />
      <FinalCTA stateName="Colorado" cityName="Denver" />
    </>
  );
}
