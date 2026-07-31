"use client";
import React from 'react';
import { HeroVariationA, ClinicalDeepDive, InsuranceBreakdown, PatientArchetype, LocalTransitPain, CostComparisonTable, InteractiveFAQ, StateLegalFramework, DeliveryGridMap, FinalCTA } from './location-modules.jsx';

export function LocationAtlanta() {
  return (
    <div style={{ background: '#FBF8F3', overflow: 'hidden' }}>
      <HeroVariationA
        stateName="Georgia"
        cityName="Atlanta"
        headline="Clinical GLP-1 Weight Loss in <br/><span style='color: #2ECC71'>Atlanta</span>"
        subheadline="Atlanta is the public health capital of the world, home to the CDC. Yet navigating the perimeter traffic to see a specialist at Emory or Piedmont takes months. We deliver quality-verified compounded Semaglutide directly to your door, anywhere in the Metro."
        ctaText="Check Georgia Eligibility"
      />
      <PatientArchetype
        archetype="The Delta TechOps Engineer"
        quote="I work out of Hartsfield-Jackson. The stress is constant, the shifts rotate, and the only food open is fast food. I couldn't get an appointment at Piedmont for three months. Telehealth FX evaluated me and prescribed Tirzepatide within 24 hours."
        details="<strong>Patient Profile:</strong> Marcus, 42, Delta Airlines TechOps, Hartsfield-Jackson.<br/><br/><strong>The Challenge:</strong> Shift work and a massive commute from the northern suburbs destroyed his metabolic health. His employer-sponsored plan required a 6-month behavioral trial before GLP-1 authorization.<br/><br/><strong>The Intervention:</strong> Marcus used Telehealth FX to bypass the insurance waitlist and the I-285 commute. Compounded medication delivered to his home in Sandy Springs."
      />
      <InsuranceBreakdown
        title="The Corporate HQ Bottleneck"
        text="Atlanta hosts massive corporate headquarters, but their health plans rely on restrictive PBM formularies."
        employers={[
          { name: "Delta Airlines & Home Depot", detail: "Self-funded corporate plans often classify GLP-1s under specialty tiers with aggressive Step Therapy requirements." },
          { name: "Emory & Piedmont Healthcare", detail: "Hospital employees face the irony of working in world-class medical facilities but facing the same restrictive formularies as the general public." }
        ]}
      />
      <CostComparisonTable
        title="Cost of Weight Loss in Atlanta"
        localCompetitors={[
          { name: "Buckhead Concierge Clinics", cost: "$800 - $1,200 / mo", consult: "Mandatory In-Person", access: "Branded Only" },
          { name: "Midtown MedSpas", cost: "$500 - $800 / mo", consult: "Aesthetician Administered", access: "Variable Sourcing" },
          { name: "Emory Endocrinology", cost: "$150 Copay + Rx", consult: "12-16 Week Wait", access: "Prior Auth Required" }
        ]}
        telehealthPrice="From $146 / mo"
      />
      <LocalTransitPain
        title="Bypass the Connector and I-285"
        transitText="The Downtown Connector and the Perimeter (I-285) dictate the rhythm of Atlanta. Getting to a 15-minute doctor's appointment in Buckhead or Midtown can consume three hours of your day. Telehealth FX eliminates the commute."
        hospitalText="Emory Healthcare and Piedmont Hospital are world-class, but waitlists for metabolic specialists average 3-4 months."
      />
      <InteractiveFAQ
        faqs={[
          { q: "Do you deliver OTP (Outside the Perimeter)?", a: "Yes, we deliver to all of Metro Atlanta, including Alpharetta, Marietta, Lawrenceville, and Peachtree City." },
          { q: "Is this legal in Georgia?", a: "Yes, Telehealth FX operates in strict compliance with the Georgia Composite Medical Board." }
        ]}
      />
      <StateLegalFramework
        stateName="Georgia"
        boardName="Georgia Composite Medical Board"
        text="Telehealth FX operates in full compliance with the Georgia Composite Medical Board and state telehealth laws, utilizing only Georgia-licensed physicians and state-licensed 503A compounding pharmacies."
      />
      <DeliveryGridMap
        cityName="Atlanta"
        mapQuery="Atlanta, GA"
        coordinates="33.7490° N, 84.3880° W"
        counties="Fulton, DeKalb, Cobb, Gwinnett"
        neighborhoods={['Buckhead', 'Midtown', 'Sandy Springs', 'Alpharetta', 'Marietta']}
      />
      <FinalCTA stateName="Georgia" />
    </div>
  );
}
