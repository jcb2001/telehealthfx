"use client";
import React from 'react';
import { HeroVariationA, ClinicalDeepDive, PatientArchetype, InsuranceBreakdown, CostComparisonTable, LocalTransitPain, InteractiveFAQ, StateLegalFramework, DeliveryGridMap, FinalCTA } from './location-modules.jsx';

export function LocationPittsburgh() {
  return (
    <div style={{ background: '#FBF8F3', overflow: 'hidden' }}>
      <HeroVariationA
        stateName="Pennsylvania"
        cityName="Pittsburgh"
        headline="Clinical GLP-1 Weight Loss in <br/><span style='color: #2ECC71'>Pittsburgh</span>"
        subheadline="UPMC is one of the largest healthcare systems in the world—and it dominates Pittsburgh so completely that escaping its formulary is nearly impossible. If your employer uses UPMC Health Plan, your metabolic care is controlled by the same system that controls your hospital. Compounded Semaglutide, delivered from Squirrel Hill to Cranberry Township."
        ctaText="Check Pennsylvania Eligibility"
      />
      <PatientArchetype
        archetype="The UPMC Health Plan Administrator"
        quote="I work for UPMC Health Plan processing prior authorizations. I deny GLP-1 coverage requests for other people's patients eight hours a day based on formulary criteria I didn't write. And my own UPMC employee plan applies the exact same criteria to me. I know the denial letter by heart—because I've drafted it a thousand times."
        details="<strong>Patient Profile:</strong> Danielle, 30, Prior Authorization Specialist at UPMC Health Plan.<br/><br/><strong>The Challenge:</strong> Danielle processes GLP-1 prior authorization requests for UPMC Health Plan members daily. She understands the denial criteria intimately because she applies them. Her own UPMC employee plan requires the same BMI threshold, comorbidity documentation, and Step Therapy she enforces on others. She exists on both sides of the same wall.<br/><br/><strong>The Intervention:</strong> Danielle completed the Telehealth FX intake from her apartment in Lawrenceville. She bypassed the prior authorization process she administers professionally—through a private clinical pathway that doesn't require UPMC's approval."
      />
      <ClinicalDeepDive
        title="The UPMC Monopoly and the Primanti Bros Problem"
        paragraphs={[
          "Pittsburgh's healthcare landscape is unique in America: it is dominated almost entirely by a single system. UPMC (University of Pittsburgh Medical Center) is simultaneously a hospital system, a health insurer, and the region's largest employer. This vertical integration means that for many Pittsburghers, the same entity that provides their health insurance also runs the hospitals, employs the specialists, and sets the formulary restrictions. There is no 'going out of network' when the network IS the city.",
          "The food culture reinforces the metabolic challenge. Pittsburgh's culinary identity is defined by the Primanti Brothers sandwich (coleslaw, fries, and meat between two slices of bread—approximately 1,200 calories), pierogies (the city's adopted Eastern European staple), and a blue-collar food tradition built for steel workers who burned 4,000 calories a day. The steel mills are gone, but the diet remains.",
          "The hilly terrain and bridge infrastructure—Pittsburgh has more bridges than any city in the world—create natural barriers to movement. Getting from the South Hills to Oakland (where UPMC's flagship hospitals are located) requires navigating tunnels, bridges, and the Fort Pitt interchange.",
          "GLP-1 medications provide a clinical pathway outside the UPMC ecosystem, allowing Pittsburgh residents to access metabolic care without navigating the vertically integrated system that controls both their insurance and their hospital."
        ]}
        citations={[
          "Allegheny County Health Department. (2025). <em>Community Health Assessment: Obesity and Chronic Disease in the Pittsburgh Metropolitan Area</em>.",
          "University of Pittsburgh School of Public Health. (2024). <em>Healthcare Market Concentration and Patient Access in Single-Dominant-System Metropolitan Areas</em>."
        ]}
      />
      <InsuranceBreakdown
        title="When Your Insurer IS Your Hospital"
        text="UPMC's vertical integration means Pittsburgh residents often can't separate their insurance from their provider from their employer."
        employers={[
          { name: "UPMC (System-Wide)", detail: "UPMC employs 92,000+ people in western Pennsylvania. UPMC Health Plan covers a significant percentage of the regional population. The system sets its own formulary, processes its own prior authorizations, and staffs its own specialist clinics. For GLP-1 access, this creates a closed loop with no external appeal pathway." },
          { name: "PNC / PPG / US Steel (Corporate Pittsburgh)", detail: "Many of Pittsburgh's remaining corporate headquarters use UPMC Health Plan as their benefits administrator, subjecting their employees to the same closed-system formulary restrictions." },
          { name: "CMU / Pitt / Duquesne (Universities)", detail: "Pittsburgh's major universities offer employee plans administered through UPMC or Highmark, both of which apply Step Therapy and prior authorization for GLP-1 weight management." }
        ]}
      />
      <CostComparisonTable
        title="What Weight Loss Actually Costs in Pittsburgh"
        localCompetitors={[
          { name: "Shadyside / Fox Chapel Concierge", cost: "$700 - $1,100 / mo", consult: "Mandatory In-Person", access: "Branded Only" },
          { name: "South Side / Strip District MedSpas", cost: "$400 - $700 / mo", consult: "Monthly Membership", access: "Variable Compounding" },
          { name: "UPMC Endocrinology", cost: "$125 Copay + Rx", consult: "10-16 Week Wait", access: "UPMC Formulary / Prior Auth" }
        ]}
        telehealthPrice="From $146 / mo"
      />
      <LocalTransitPain
        title="Bypass the Fort Pitt Tunnel & UPMC Waitlists"
        transitText="Pittsburgh's topography—rivers, hills, tunnels, and 446 bridges—makes cross-city travel uniquely challenging. The Fort Pitt and Squirrel Hill tunnels are daily bottlenecks. Getting from Cranberry Township or the South Hills to a UPMC specialist in Oakland is a 60-minute-minimum ordeal."
        hospitalText="<strong>UPMC</strong> dominates, with <strong>Allegheny Health Network (AHN)</strong> as the primary alternative. Specialist waits at both systems average 10-16 weeks for metabolic medicine."
      />
      <InteractiveFAQ
        faqs={[
          { q: "I'm on UPMC Health Plan. Can I use Telehealth FX?", a: "Yes. Telehealth FX is a private, self-pay service completely independent of UPMC. Your medical record with us is separate from the UPMC system." },
          { q: "Do you deliver to Cranberry Township and the South Hills?", a: "Yes. We deliver to all residential and commercial addresses across Allegheny, Westmoreland, Butler, and Washington counties." }
        ]}
      />
      <StateLegalFramework
        stateName="Pennsylvania"
        boardName="Pennsylvania State Board of Medicine"
        text="Telehealth FX operates in strict compliance with the <strong>Pennsylvania State Board of Medicine</strong> and PA Act 15 of 2024 (Pennsylvania's updated telehealth provisions). All prescribers treating PA patients hold active, unrestricted Pennsylvania medical licenses."
      />
      <DeliveryGridMap
        cityName="Pittsburgh"
        mapQuery="Pittsburgh, PA"
        coordinates="40.4406° N, 79.9959° W"
        counties="Allegheny County, Westmoreland County, Butler County, Washington County"
        neighborhoods={['Squirrel Hill', 'Shadyside', 'Lawrenceville', 'Oakland', 'South Side', 'Cranberry Twp', 'Mt. Lebanon', 'Fox Chapel', 'Monroeville']}
      />
      <FinalCTA stateName="Pennsylvania" />
    </div>
  );
}
