"use client";
import React from 'react';
import { HeroVariationB, PatientArchetype, ClinicalDeepDive, InsuranceBreakdown, CostComparisonTable, LocalTransitPain, InteractiveFAQ, StateLegalFramework, DeliveryGridMap, FinalCTA } from './location-modules.jsx';
export function LocationReno() {
  return (
    <div style={{ background: '#FBF8F3', overflow: 'hidden' }}>
      <HeroVariationB stateName="Nevada" cityName="Reno" headline="Clinical GLP-1 Weight Loss in <span style='color: #2ECC71'>Reno</span>" subheadline="Reno is no longer just a casino town—it's Tesla's Gigafactory corridor, Amazon's western distribution hub, and a tech economy growing at warp speed. But the healthcare infrastructure hasn't kept pace. A city of 270,000 with big-city growth and small-city specialist capacity." dataPoint1="Washoe County's healthcare system is built for a much smaller population. Renown Health is the dominant system, and specialist waitlists reflect a community whose population growth has far outpaced its medical infrastructure." dataPoint2="Telehealth FX serves the new Reno—the Gigafactory workers, the distribution center shifts, the remote tech transplants—without competing for Renown's limited specialist slots." />
      <PatientArchetype archetype="The Tesla Gigafactory Process Technician" quote="I work at the Gigafactory in Sparks on the battery cell production line. Twelve-hour shifts, 4 days on, 3 off. The cafeteria is actually decent, but at 2 AM on a night shift, I'm eating whatever keeps me awake. Reno doesn't have enough doctors for all the people who've moved here in the last 5 years. My Renown referral for an endocrinologist was quoted at 16 weeks." details="<strong>Patient Profile:</strong> Jake, 29, Process Technician at Tesla Gigafactory Nevada, Sparks.<br/><br/><strong>The Challenge:</strong> Jake works 12-hour rotating shifts manufacturing battery cells at the Gigafactory. The Storey County facility is 30 minutes east of Reno in the desert. Night shift eating patterns, limited food options during breaks, and a healthcare system overwhelmed by Reno's rapid population growth create access barriers.<br/><br/><strong>The Intervention:</strong> Jake completed the Telehealth FX intake on a day off from his apartment in Sparks. A Nevada-licensed physician prescribed compounded Semaglutide within 20 hours." />
      <ClinicalDeepDive title="Gigafactory Growth, Small-City Healthcare" paragraphs={[
        "Reno has transformed from a casino-dependent economy to a tech and logistics hub in under a decade. Tesla's Gigafactory, Panasonic's battery production, Amazon's fulfillment centers, and the data center corridor along I-80 have brought tens of thousands of new workers—and their families—to the Truckee Meadows. The population has surged, but the healthcare infrastructure has not.",
        "Renown Health is the dominant system, complemented by Saint Mary's. Together they serve a rapidly growing metro with specialist capacity designed for a smaller community. Endocrinology waitlists have stretched from 6 weeks to 14-18 weeks as population growth outpaces provider recruitment.",
        "The casino legacy still shapes the food environment and work culture. The 24/7 casino economy means a significant portion of Reno's workforce—dealers, pit bosses, hotel staff, entertainment workers—eat at odd hours in a food environment designed for tourist indulgence, not metabolic health. The Gigafactory and distribution center shift workers face the same off-hours eating challenge in a less glamorous setting.",
        "Reno's altitude (4,505 feet) and desert climate create a milder version of the Denver/Colorado Springs altitude effect. The high desert means extreme temperature swings (100°F summer, 10°F winter) that constrain outdoor activity at both seasonal extremes.",
        "GLP-1 medications serve the new Reno—a city growing faster than its healthcare can scale—delivering metabolic care that doesn't depend on Renown having an open appointment."
      ]} citations={[
        "Washoe County Health District. (2025). <em>Community Health Needs Assessment</em>.",
        "UNR School of Medicine. (2024). <em>Population Growth, Healthcare Capacity, and Specialist Access in the Reno-Sparks Metropolitan Area</em>."
      ]} />
      <InsuranceBreakdown title="Gigafactory Plans and the Casino Legacy" text="Reno's employer landscape now spans tech manufacturing, logistics, and gaming." employers={[
        { name: "Tesla Gigafactory / Panasonic (Sparks)", detail: "Tesla and Panasonic offer corporate plans with standard PBM restrictions. The Storey County facility is 30 minutes from Reno's limited specialist pool." },
        { name: "Amazon / Switch / Microsoft (Data Centers)", detail: "Logistics and data center employers offer shift-oriented benefits with formulary restrictions." },
        { name: "Caesars / MGM (Casino Industry)", detail: "Gaming industry plans cover 24/7 shift workers whose eating schedules and stress patterns create unique metabolic challenges." }
      ]} />
      <CostComparisonTable title="What Weight Loss Actually Costs in Reno" localCompetitors={[
        { name: "Southwest Reno / Caughlin Ranch Concierge", cost: "$700 - $1,100 / mo", consult: "Mandatory In-Person", access: "Branded Only" },
        { name: "South Virginia St MedSpas", cost: "$350 - $650 / mo", consult: "Monthly Membership", access: "Variable Compounding" },
        { name: "Renown Endocrinology", cost: "$125 Copay + Rx", consult: "14-18 Week Wait", access: "Prior Auth Required" }
      ]} telehealthPrice="From $146 / mo" />
      <LocalTransitPain title="Bypass the I-80 & Renown Waitlists" transitText="Reno's growth has strained I-80 and US-395, the metro's primary arteries. Commuting from Sparks (Gigafactory corridor) or South Reno to a medical appointment downtown takes 30-45 minutes." hospitalText="<strong>Renown Regional Medical Center</strong> and <strong>Saint Mary's</strong> serve the metro. Specialist waits average 14-18 weeks as population growth outpaces provider capacity." />
      <InteractiveFAQ faqs={[
        { q: "I work at the Gigafactory in Sparks. Can I get delivery there?", a: "We deliver to residential addresses. Your medication will ship to your home in Reno, Sparks, or surrounding communities." },
        { q: "Do you deliver to Carson City and Fernley?", a: "Yes. All Washoe, Storey, Lyon, and Carson City addresses." }
      ]} />
      <StateLegalFramework stateName="Nevada" boardName="Nevada State Board of Medical Examiners" text="Telehealth FX operates in strict compliance with the <strong>Nevada State Board of Medical Examiners</strong> and NRS 629. All prescribers hold active, unrestricted Nevada medical licenses." />
      <DeliveryGridMap cityName="Reno" mapQuery="Reno, NV" coordinates="39.5296° N, 119.8138° W" counties="Washoe County, Storey County, Lyon County, Carson City" neighborhoods={['Midtown', 'South Reno', 'Northwest Reno', 'Sparks', 'Fernley', 'Carson City', 'Caughlin Ranch', 'Damonte Ranch']} />
      <FinalCTA stateName="Nevada" />
    </div>
  );
}
