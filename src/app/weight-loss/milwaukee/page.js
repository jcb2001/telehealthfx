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
  title: "Medical Weight Loss in Milwaukee, WI | Telehealth FX",
  description: "Doctor-prescribed GLP-1 weight loss in Milwaukee, WI. Bypass 8-14 week Froedtert wait times. Compounded Semaglutide from $146/mo with cold-chain delivery.",
  openGraph: {
    title: "Medical Weight Loss in Milwaukee, WI | Telehealth FX",
    description: "Doctor-prescribed GLP-1 weight loss in Milwaukee, WI. Bypass 8-14 week Froedtert wait times. Compounded Semaglutide from $146/mo with cold-chain delivery.",
    url: "https://telehealthfx.com/weight-loss/milwaukee/",
    siteName: "Telehealth FX",
    type: "website"
  },
  alternates: {
    canonical: 'https://telehealthfx.com/weight-loss/milwaukee/'
  }
};

export default function WeightLossMilwaukeePage() {
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
        "@id": "https://telehealthfx.com/weight-loss/milwaukee/#webpage",
        "url": "https://telehealthfx.com/weight-loss/milwaukee/",
        "name": "Medical Weight Loss in Milwaukee, WI | Telehealth FX",
        "description": "Doctor-prescribed GLP-1 weight loss in Milwaukee, WI. Bypass 8-14 week Froedtert wait times. Compounded Semaglutide from $146/mo with cold-chain delivery.",
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
        "@id": "https://telehealthfx.com/weight-loss/milwaukee/#clinic",
        "name": "Telehealth FX Weight Loss - Milwaukee",
        "url": "https://telehealthfx.com/weight-loss/milwaukee/",
        "telephone": "+1-800-TELEHEALTH",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Milwaukee",
          "addressRegion": "WI",
          "postalCode": "53202",
          "addressCountry": "US"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 43.0389,
          "longitude": -87.9065
        },
        "areaServed": {
          "@type": "City",
          "name": "Milwaukee",
          "containedInPlace": {
            "@type": "State",
            "name": "Wisconsin"
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
        stateName="Wisconsin"
        cityName="Milwaukee"
        headline="Medical Weight Loss & GLP-1 in <span style='color: var(--brand)'>Milwaukee, WI</span>"
        subheadline="Bypass 8-14 week hospital waitlists at Froedtert and 300% Brookfield medspa markups. Access pure compounded Semaglutide and Tirzepatide prescribed by Wisconsin-licensed doctors with insulated winter cold-chain home delivery."
        ctaText="Check Milwaukee Eligibility"
      />
      <LocalTransitPain
        title="Why Milwaukee Residents Are Bypassing Local Weight Loss Clinics"
        transitText="Navigating dead-stop traffic at the Marquette Interchange, battling I-94 construction, or sliding through sub-zero lake-effect snowstorms just to sit in a clinic waiting room for 45 minutes is completely unnecessary."
        hospitalText="Premier regional institutions like <strong>Froedtert & Medical College of Wisconsin</strong> and <strong>Aurora Health Care</strong> maintain <strong>8 to 14 week waiting lists</strong> for obesity and endocrine consults. Simultaneously, local Third Ward and Brookfield medspas exploit demand with $500–$800 monthly charges. Telehealth FX eliminates the wait times and the real estate markup with direct doctor care from $146/mo."
      />
      <CostComparisonTable
        title="Milwaukee Medspas vs. Telehealth FX"
        localCompetitors={[
          { name: "Brookfield & Third Ward Medspas", cost: "$500 - $800/mo", consult: "Mandatory In-Person", access: "Weekly Office Visits" },
          { name: "Wauwatosa Anti-Aging Clinics", cost: "$450 - $700/mo", consult: "Bi-weekly Consults", access: "Mandatory Clinic Fees" },
          { name: "Froedtert / Aurora Clinical Obesity", cost: "$120 Copay + Retail", consult: "8-14 Week Wait", access: "Prior Auth Denials" }
        ]}
        telehealthPrice="From $146/mo"
      />
      <ClinicalDeepDive
        title="The Science of GLP-1 Receptor Agonists & Metabolic Reset"
        paragraphs={[
          "GLP-1 and dual GLP-1/GIP receptor agonists (compounded Semaglutide and Tirzepatide) represent a revolutionary leap in obesity pharmacotherapy. Rather than relying on central nervous system stimulants like phentermine that force cardiovascular strain, GLP-1 therapy mimics endogenous incretin hormones produced in the intestinal L-cells.",
          "These peptides decelerate gastric motility by 30% to 40% to prolong postprandial satiety, stabilize glycemic excursions by optimizing glucose-dependent insulin release, and crucially, traverse the blood-brain barrier to bind receptors in the arcuate nucleus of the hypothalamus—eradicating chronic food noise and binge cravings.",
          "In clinical trials (STEP-1 and SURMOUNT-1), patients achieved an average of 15% to 22.5% total body weight reduction. Our Wisconsin-licensed clinicians tailor conservative titration schedules co-formulated with vitamin B6 to mitigate nausea while maximizing sustained visceral adipose loss."
        ]}
        citations={[
          "Wilding, J. P., et al. (2021). Once-Weekly Semaglutide in Adults with Overweight or Obesity. <em>The New England Journal of Medicine</em>.",
          "Jastreboff, A. M., et al. (2022). Tirzepatide Once Weekly for the Treatment of Obesity. <em>The New England Journal of Medicine</em>.",
          "Froedtert & Medical College of Wisconsin. (2025). <em>Metabolic Endocrinology Patient Access Report.</em>"
        ]}
      />
      <PatientArchetype
        title="Milwaukee Patient Profile"
        archetype="The Healthcare Shift Supervisor"
        quote="Working 12-hour hospital shifts in Milwaukee wrecked my circadian clock and hunger cues. Between stressful graveyard rotations and harsh winters, I gained 35 lbs. Froedtert endocrinology had a 3-month waitlist. Telehealth FX approved my Semaglutide within 24 hours, and it arrived cold-packed on my porch."
        details="<p><strong>The Challenge:</strong> High cortisol from shift work, sedentary sub-zero winter confinement, and insurance denial for branded GLP-1s.</p><p><strong>The Telehealth Protocol:</strong> Completed asynchronous medical intake from home. Approved by a Wisconsin-licensed provider for compounded Semaglutide. Maintained steady titration with zero in-person appointments, losing 32 lbs over 18 weeks while preserving lean muscle mass.</p>"
      />
      <InsuranceBreakdown
        title="Wisconsin Employer Exclusions & The Pre-Tax HSA/FSA Bypass"
        text="Major Wisconsin employers—including Northwestern Mutual, Rockwell Automation, Kohl's Corporate, and Harley-Davidson—have systematically restricted or eliminated commercial insurance coverage for anti-obesity medications. Rather than battling endless prior authorization denials, Telehealth FX offers direct transparent cash pricing from $146/mo, fully reimbursable via pre-tax HSA and FSA dollars."
      />
      <DeliveryGridMap
        cityName="Milwaukee"
        mapQuery="Milwaukee, Wisconsin"
        coordinates="43.0389° N, 87.9065° W"
        counties="Milwaukee County, Waukesha County, Ozaukee County, Washington County"
        neighborhoods={["Third Ward", "Bay View", "Wauwatosa", "Whitefish Bay", "Brookfield", "Shorewood", "Mequon", "West Allis", "Oak Creek", "New Berlin"]}
      />
      <InteractiveFAQ
        faqs={[
          {
            q: "How do you ensure peptides don't freeze during Wisconsin sub-zero winters?",
            a: "All shipments from our 503A compounding partners use pharmaceutical-grade vacuum-insulated containers and phase-change thermal packs specifically engineered to protect peptide integrity against sub-zero lake-effect blizzards down to -15°F."
          },
          {
            q: "Are Telehealth FX prescribers licensed in Wisconsin?",
            a: "Yes. Every medical review and prescription for a Milwaukee resident is conducted by a physician or advanced practitioner holding an active license with the Wisconsin Medical Examining Board."
          },
          {
            q: "What does compounded Semaglutide cost in Milwaukee?",
            a: "Telehealth FX provides compounded Semaglutide starting from $146 per month and compounded Tirzepatide from $249 per month. This includes medical consultation, prescription, injection supplies, and free refrigerated cold-chain home delivery."
          },
          {
            q: "Can I use pre-tax HSA or FSA funds for weight loss in Milwaukee?",
            a: "Yes. All our clinical weight loss programs are 100% eligible for Health Savings Account (HSA) and Flexible Spending Account (FSA) reimbursement."
          }
        ]}
      />
      <FinalCTA stateName="Wisconsin" cityName="Milwaukee" />
    </>
  );
}
