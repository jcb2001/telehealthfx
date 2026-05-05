"use client";
import React from 'react';
import { HeroVariationB, PatientArchetype, ClinicalDeepDive, InsuranceBreakdown, CostComparisonTable, LocalTransitPain, InteractiveFAQ, StateLegalFramework, DeliveryGridMap, FinalCTA } from './location-modules.jsx';

export function LocationColoradoSprings() {
  return (
    <div style={{ background: '#FBF8F3', overflow: 'hidden' }}>
      <HeroVariationB stateName="Colorado" cityName="Colorado Springs" headline="Clinical GLP-1 Weight Loss in <span style='color: #2ECC71'>Colorado Springs</span>" subheadline="Colorado Springs has more military installations per capita than any city in America—Fort Carson, Peterson SFB, Schriever SFB, NORAD, and the Air Force Academy. A city built on national defense can't defend its own residents from a 12-week TRICARE referral chain. Compounded Semaglutide, delivered from the Broadmoor to Fountain." dataPoint1="Five major military installations create a healthcare system dominated by TRICARE, where specialist referral chains routinely exceed 16 weeks and civilian endocrinology capacity is overwhelmed by the military-adjacent population." dataPoint2="Telehealth FX provides a private clinical pathway outside the TRICARE referral system. Asynchronous intake fits any duty schedule." />
      <PatientArchetype
        archetype="The Space Force Intelligence Officer"
        quote="I'm stationed at Peterson tracking orbital debris. My job is monitoring threats from space. But the threat to my own health—insulin resistance from 14-hour shifts in a windowless ops center—gets a 16-week wait at the base clinic. TRICARE moves slower than the satellites I track."
        details="<strong>Patient Profile:</strong> Captain Torres, 32, Space Force Intelligence Officer, Peterson Space Force Base.<br/><br/><strong>The Challenge:</strong> Capt. Torres works extended shifts in a classified facility monitoring space domain awareness. The sedentary, high-stress, no-daylight environment drives the same metabolic dysfunction seen in other SCIF workers (Tucson, Tampa). His TRICARE Prime plan requires a PCM referral at the base clinic, which feeds into a civilian referral network already overwhelmed by five bases' worth of military families. Total estimated time to GLP-1 prescription through TRICARE: 20+ weeks.<br/><br/><strong>The Intervention:</strong> Capt. Torres completed the Telehealth FX intake from his apartment in Falcon on a Saturday. A Colorado-licensed physician prescribed compounded Semaglutide within 18 hours. No impact on his fitness assessment timeline, his security clearance, or his duty schedule."
      />
      <ClinicalDeepDive
        title="Five Bases, One Overwhelmed Healthcare System"
        paragraphs={[
          "Colorado Springs is the most militarized city in America by installation density. Fort Carson (Army), Peterson Space Force Base, Schriever Space Force Base, NORAD/Cheyenne Mountain, and the United States Air Force Academy collectively employ tens of thousands of active-duty service members, civilian DoD employees, and contractors. Their families add another 100,000+ dependents to the local healthcare demand.",
          "The TRICARE system is designed for a mobile military population, not for sustained specialist care in a single metro. The result is a referral bottleneck: base clinics handle primary care, but specialist referrals flow into a civilian network (UCHealth, Centura) that is simultaneously serving the non-military population of a rapidly growing city. Endocrinology waitlists that would be 8 weeks in Denver stretch to 14-18 weeks in the Springs.",
          "The altitude adds a physiological layer unique to Colorado. At 6,035 feet, Colorado Springs creates the same mild chronic dehydration, altered appetite signaling, and increased caloric burn at rest seen in Denver. But unlike Denver, the Springs lacks the same density of concierge medicine and wellness infrastructure—it is a mid-size city with major-city healthcare demands.",
          "The food environment is standard American suburban sprawl: chain restaurants along Powers Boulevard and Academy Boulevard, fast food near every base gate, and limited walkable dining districts. The combination of military stress, altitude physiology, suburban food access, and an overwhelmed specialist system makes GLP-1 telehealth access not a convenience but a necessity."
        ]}
        citations={[
          "El Paso County Public Health. (2025). <em>Community Health Assessment: Military Population Health and Specialist Access</em>.",
          "University of Colorado School of Medicine. (2024). <em>Altitude, Metabolic Rate, and Weight Management in Colorado Front Range Populations</em>."
        ]}
      />
      <InsuranceBreakdown title="TRICARE Overload and the Civilian Spillover" text="The military dominance of Colorado Springs creates a healthcare system where TRICARE patients and civilian patients compete for the same limited specialist pool." employers={[
        { name: "Fort Carson / Peterson SFB / Schriever SFB (TRICARE)", detail: "Active-duty, reserve, and civilian DoD employees across five installations rely on TRICARE Prime and Select. The base clinic referral chain is the primary bottleneck, compounded by insufficient civilian specialist capacity in the network." },
        { name: "Lockheed Martin / Northrop Grumman / L3Harris (Defense Contractors)", detail: "The defense contractor workforce holds corporate plans (often Cigna or Anthem) that apply standard PBM formulary restrictions for GLP-1 weight management." },
        { name: "UCHealth / Centura Health", detail: "The region's two major health systems serve both military-referred and civilian patients, with endocrinology waitlists reflecting the combined demand." }
      ]} />
      <CostComparisonTable title="What Weight Loss Actually Costs in Colorado Springs" localCompetitors={[
        { name: "Broadmoor / Briargate Concierge", cost: "$700 - $1,100 / mo", consult: "Mandatory In-Person", access: "Branded Only" },
        { name: "Powers Blvd MedSpas", cost: "$350 - $650 / mo", consult: "Monthly Membership", access: "Variable Compounding" },
        { name: "UCHealth Endocrinology", cost: "$125 Copay + Rx", consult: "14-18 Week Wait", access: "Prior Auth Required" }
      ]} telehealthPrice="From $146 / mo" />
      <LocalTransitPain title="Bypass the I-25 Crawl & Base Clinic Referrals" transitText="Colorado Springs stretches north-south along I-25, with Powers Boulevard handling east-side traffic. Getting from Fountain or Security-Widefield (near Fort Carson) to a specialist on the north side is a 45-minute drive minimum." hospitalText="<strong>UCHealth Memorial</strong> and <strong>Centura Health / Penrose-St. Francis</strong> serve the region, but specialist capacity is overwhelmed by combined military and civilian demand." />
      <InteractiveFAQ faqs={[
        { q: "Will this affect my security clearance or fitness assessment?", a: "No. Telehealth FX is a private medical service. GLP-1 medications are not controlled substances and have no relevance to security clearance criteria or military fitness assessment protocols." },
        { q: "I'm active duty. Can I use this alongside TRICARE?", a: "Yes. Telehealth FX is a self-pay service independent of TRICARE. It does not affect your military benefits or medical readiness status." },
        { q: "Do you deliver to Fountain and Pueblo?", a: "Yes. We deliver to all addresses in El Paso County, Teller County, and Pueblo County." }
      ]} />
      <StateLegalFramework stateName="Colorado" boardName="Colorado Medical Board" text="Telehealth FX operates in strict compliance with the <strong>Colorado Medical Board</strong> and CRS § 12-240-107 (Colorado's telehealth provisions). All prescribers hold active, unrestricted Colorado medical licenses." />
      <DeliveryGridMap cityName="Colorado Springs" mapQuery="Colorado Springs, CO" coordinates="38.8339° N, 104.8214° W" counties="El Paso County, Teller County, Pueblo County" neighborhoods={['Briargate', 'Broadmoor', 'Old Colorado City', 'Fountain', 'Security-Widefield', 'Woodland Park', 'Falcon', 'Pueblo']} />
      <FinalCTA stateName="Colorado" />
    </div>
  );
}
