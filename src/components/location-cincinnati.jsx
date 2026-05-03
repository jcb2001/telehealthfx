"use client";
import React from 'react';
import { HeroVariationA, ClinicalDeepDive, InsuranceBreakdown, PatientArchetype, LocalTransitPain, CostComparisonTable, InteractiveFAQ, StateLegalFramework, DeliveryGridMap, FinalCTA } from './location-modules.jsx';

export function LocationCincinnati() {
  return (
    <div style={{ background: '#FBF8F3', overflow: 'hidden' }}>
      <HeroVariationA
        stateName="Ohio"
        cityName="Cincinnati"
        headline="Clinical GLP-1 Weight Loss in <br/><span style='color: #2ECC71'>Cincinnati</span>"
        subheadline="Home to Procter & Gamble and Kroger, Cincinnati is a corporate powerhouse with a world-class healthcare system. Yet local residents still face months-long waitlists at UC Health. Get clinical-grade metabolic care delivered directly to your door."
        ctaText="Check Ohio Eligibility"
      />
      <PatientArchetype
        archetype="The P&G Brand Manager"
        quote="Working at P&G means intense hours and global travel. I didn't have time to wait 4 months to see an endocrinologist at Christ Hospital, only to fight with my insurance over prior authorizations. Telehealth FX gave me a clinical pathway that actually fits my schedule."
        details="<strong>Patient Profile:</strong> Sarah, 38, Brand Manager at Procter & Gamble.<br/><br/><strong>The Challenge:</strong> High-stress corporate environment leading to chronic cortisol elevation and weight gain. Her corporate plan restricted access to GLP-1s without extensive step therapy.<br/><br/><strong>The Intervention:</strong> Sarah used Telehealth FX to secure a prescription for compounded Semaglutide within 24 hours, bypassing the local waitlists."
      />
      <InsuranceBreakdown
        title="The Corporate HQ Health Plan Gap"
        text="Cincinnati's major employers offer strong benefits, but utilize aggressive PBM tactics to restrict GLP-1 access."
        employers={[
          { name: "Procter & Gamble / Kroger", detail: "Self-funded plans typically require a documented 6-month behavioral modification program before considering pharmaceutical intervention." },
          { name: "UC Health / Christ Hospital", detail: "Clinical staff working within these massive health systems face the same formulary restrictions as the patients they treat." }
        ]}
      />
      <CostComparisonTable
        title="Cost of Weight Loss in Cincinnati"
        localCompetitors={[
          { name: "Hyde Park Concierge Clinics", cost: "$700 - $1,100 / mo", consult: "Mandatory In-Person", access: "Branded Only" },
          { name: "Kenwood MedSpas", cost: "$400 - $700 / mo", consult: "Aesthetician Administered", access: "Variable Sourcing" },
          { name: "UC Health Endocrinology", cost: "$150 Copay + Rx", consult: "12-16 Week Wait", access: "Prior Auth Required" }
        ]}
        telehealthPrice="From $146 / mo"
      />
      <LocalTransitPain
        title="Bypass I-71 Traffic and Hospital Waiting Rooms"
        transitText="Navigating the I-71/I-75 corridor and crossing the Brent Spence Bridge into Northern Kentucky makes medical appointments a logistical nightmare. Telehealth FX brings the clinic to you."
        hospitalText="UC Health and Christ Hospital offer exceptional care, but specialist capacity cannot meet the metabolic health demand of the tri-state area."
      />
      <InteractiveFAQ
        faqs={[
          { q: "I live in Northern Kentucky. Can I use this?", a: "Yes, we serve the entire Cincinnati metro area, including patients residing in Kentucky. You will be evaluated by a KY-licensed physician." },
          { q: "Is this legal in Ohio?", a: "Yes, Telehealth FX operates in strict compliance with the State Medical Board of Ohio." }
        ]}
      />
      <StateLegalFramework
        stateName="Ohio"
        boardName="State Medical Board of Ohio"
        text="Telehealth FX operates in full compliance with the State Medical Board of Ohio and state telehealth laws, utilizing only Ohio-licensed physicians and FDA-registered 503A compounding pharmacies."
      />
      <DeliveryGridMap
        cityName="Cincinnati"
        mapQuery="Cincinnati, OH"
        coordinates="39.1031° N, 84.5120° W"
        counties="Hamilton, Butler, Warren, Boone (KY), Kenton (KY)"
        neighborhoods={['Over-the-Rhine', 'Hyde Park', 'Mt. Adams', 'West Chester', 'Covington']}
      />
      <FinalCTA stateName="Ohio" />
    </div>
  );
}
