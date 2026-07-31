"use client";
import React from 'react';
import { HeroVariationA, ClinicalDeepDive, InsuranceBreakdown, PatientArchetype, LocalTransitPain, CostComparisonTable, InteractiveFAQ, StateLegalFramework, DeliveryGridMap, FinalCTA } from './location-modules.jsx';

export function LocationSaltLakeCity() {
  return (
    <div style={{ background: '#FBF8F3', overflow: 'hidden' }}>
      <HeroVariationA
        stateName="Utah"
        cityName="Salt Lake City"
        headline="Clinical GLP-1 Weight Loss in <br/><span style='color: #2ECC71'>Salt Lake City</span>"
        subheadline="Salt Lake City blends outdoor recreation with a rapidly growing tech sector ('Silicon Slopes'). Despite a culture focused on wellness, the modern desk-bound lifestyle still drives metabolic dysfunction. Telehealth FX provides clinical-grade metabolic care without the waitlists at University of Utah Health."
        ctaText="Check Utah Eligibility"
      />
      <PatientArchetype
        archetype="The Silicon Slopes Software Engineer"
        quote="I live in Lehi and work 60 hours a week writing code. The local culture is all about hiking and skiing, but my reality is sitting at a desk and eating catered tech-office lunches. My SelectHealth plan wouldn't cover Wegovy without jumping through impossible hoops. Telehealth FX bypassed the red tape entirely."
        details="<strong>Patient Profile:</strong> David, 35, Senior Engineer at a SaaS company in Lehi.<br/><br/><strong>The Challenge:</strong> Sedentary lifestyle combined with high-stress product launches. His employer's health plan classified GLP-1s under strict Step Therapy rules.<br/><br/><strong>The Intervention:</strong> David used Telehealth FX to secure a prescription for compounded Semaglutide from a Utah-licensed physician within 24 hours, skipping the U of U waitlist."
      />
      <InsuranceBreakdown
        title="Silicon Slopes & Local Health Systems"
        text="Utah's booming tech sector and dominant local health systems create unique barriers to pharmaceutical weight management."
        employers={[
          { name: "Silicon Slopes Tech Companies", detail: "Tech startups and established SaaS companies often provide modern wellness benefits but still rely on PBMs that restrict GLP-1 access for non-diabetic patients." },
          { name: "Intermountain Healthcare & U of U Health", detail: "The dominant health systems in the state strictly enforce their own restrictive formularies, creating bottlenecks even for their own employees." }
        ]}
      />
      <CostComparisonTable
        title="Cost of Weight Loss in Salt Lake City"
        localCompetitors={[
          { name: "Park City / Draper Concierge Clinics", cost: "$800 - $1,200 / mo", consult: "Mandatory In-Person", access: "Branded Only" },
          { name: "Sugar House MedSpas", cost: "$400 - $700 / mo", consult: "Aesthetician Administered", access: "Variable Sourcing" },
          { name: "U of U Endocrinology", cost: "$150 Copay + Rx", consult: "10-14 Week Wait", access: "Prior Auth Required" }
        ]}
        telehealthPrice="From $146 / mo"
      />
      <LocalTransitPain
        title="Bypass I-15 Traffic and Hospital Waiting Rooms"
        transitText="The I-15 corridor connecting Salt Lake City to Lehi and Provo is notorious for congestion. Driving to a specialist appointment at the University of Utah hospital takes hours out of the workday. Telehealth FX brings the clinic to you."
        hospitalText="University of Utah Health and Intermountain Healthcare are excellent, but specialist capacity is overwhelmed by the rapidly growing population."
      />
      <InteractiveFAQ
        faqs={[
          { q: "Do you deliver to the suburbs like Lehi and Draper?", a: "Yes, we deliver to the entire Wasatch Front, including Salt Lake City, Lehi, Provo, Ogden, and Park City." },
          { q: "Is this legal in Utah?", a: "Yes, Telehealth FX operates in strict compliance with the Utah Division of Occupational and Professional Licensing (DOPL)." }
        ]}
      />
      <StateLegalFramework
        stateName="Utah"
        boardName="Utah Division of Occupational and Professional Licensing"
        text="Telehealth FX operates in full compliance with DOPL and state telehealth laws, utilizing only Utah-licensed physicians and state-licensed 503A compounding pharmacies."
      />
      <DeliveryGridMap
        cityName="Salt Lake City"
        mapQuery="Salt Lake City, UT"
        coordinates="40.7608° N, 111.8910° W"
        counties="Salt Lake, Utah, Davis, Weber"
        neighborhoods={['Sugar House', 'Downtown', 'The Avenues', 'Lehi', 'Draper']}
      />
      <FinalCTA stateName="Utah" />
    
{/* Disclaimer: Mounjaro®, Zepbound®, Ozempic®, and Wegovy® are registered trademarks of their respective owners (Eli Lilly and Company and Novo Nordisk A/S). Telehealth FX is not affiliated with, endorsed by, or connected to any of these companies. Compounded medications are not FDA-approved and are not therapeutically equivalent to any branded product. */}
</div>
  );
}
