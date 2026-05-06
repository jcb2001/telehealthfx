"use client";
import React from 'react';
import { HeroVariationB, PatientArchetype, ClinicalDeepDive, InsuranceBreakdown, CostComparisonTable, LocalTransitPain, InteractiveFAQ, StateLegalFramework, DeliveryGridMap, FinalCTA } from './location-modules.jsx';
export function LocationLaredo() {
  return (
    <div style={{ background: '#FBF8F3', overflow: 'hidden' }}>
      <HeroVariationB stateName="Texas" cityName="Laredo" headline="Clinical GLP-1 Weight Loss in <span style='color: #2ECC71'>Laredo</span>" subheadline="Laredo is the largest inland port in the United States. Over $300 billion in trade crosses the World Trade Bridge annually—40% of all US-Mexico commerce. The customs brokers, truckers, and warehouse workers who make this happen face a healthcare system with fewer specialists per capita than almost any US metro of comparable size." dataPoint1="Webb County's adult obesity rate exceeds 40%. Laredo has approximately one endocrinologist for every 100,000 residents—a ratio that would be alarming in a city half its size." dataPoint2="Telehealth FX bridges the specialist desert that Laredo's explosive trade-driven growth has created." />
      <PatientArchetype archetype="The CBP Port Officer" quote="I'm a CBP officer at the World Trade Bridge. I process thousands of commercial entries per shift, standing in a booth in 110-degree heat. My FEHB plan has decent coverage on paper, but there's one endocrinologist in Laredo who takes it—and she's booked 6 months out. The nearest alternative is San Antonio, 2.5 hours north. I don't have a spare Tuesday to drive to San Antonio." details="<strong>Patient Profile:</strong> Roberto, 35, Customs and Border Protection Officer, World Trade Bridge, Laredo.<br/><br/><strong>The Challenge:</strong> Roberto works in one of the highest-traffic commercial ports in the world. The physical stress of standing in extreme heat, combined with limited food options near the bridge (fast food, gas stations), and a federal employee health plan (FEHB) that has functionally no local specialist network creates a perfect access gap.<br/><br/><strong>The Intervention:</strong> Roberto completed the Telehealth FX intake from his home in North Laredo. A Texas-licensed physician prescribed compounded Tirzepatide within 20 hours." />
      <ClinicalDeepDive title="America's Largest Inland Port, Smallest Specialist Pool" paragraphs={[
        "Laredo processes more international trade by land than any other US city. The World Trade Bridge, the Laredo-Colombia Solidarity Bridge, and two other international crossings handle over 16,000 trucks per day. The customs brokerage, logistics, trucking, and warehouse industries that support this trade employ the vast majority of the city's workforce in physically demanding, shift-oriented roles.",
        "The healthcare system has not scaled with the trade economy. Laredo has approximately 260,000 residents but a specialist physician roster that would be thin for a city of 100,000. The nearest alternative for specialist care is San Antonio—150 miles and 2.5 hours north on I-35. For a workforce that runs on shift schedules and hourly wages, a 5-hour round trip for a medical appointment is prohibitive.",
        "The food culture is border Tex-Mex at its most authentic—and its most calorie-dense. Breakfast tacos are consumed in quantities of 3-5 per sitting. Carne asada, barbacoa, and cabrito (goat) are weekly staples. The caloric density is amplified by a dining-out culture where family gatherings center on large shared meals. Combined with extreme heat (110°F+ summers) that eliminates outdoor exercise, the metabolic environment is unforgiving.",
        "GLP-1 medications are potentially more impactful in Laredo than in almost any other US city. The specialist access gap is so severe that many residents have simply never had the opportunity to discuss metabolic pharmaceutical options with a qualified prescriber."
      ]} citations={[
        "Webb County Health Department. (2025). <em>Community Health Needs Assessment</em>.",
        "Texas A&M International University. (2024). <em>Healthcare Access and Physician Shortage in the Laredo Metropolitan Area</em>."
      ]} />
      <InsuranceBreakdown title="Federal Workers, Truckers, and the Border Economy" text="Laredo's employer landscape reflects its role as a trade gateway." employers={[
        { name: "CBP / DHS / Federal Government (FEHB)", detail: "Federal employees at the ports of entry have FEHB coverage with strong benefits on paper—but the local specialist network is so thin that coverage is functionally unusable for specialty metabolic care." },
        { name: "Trucking / Logistics / Customs Brokerage", detail: "The trade industry workforce often has employer plans with high deductibles and limited networks. Many are covered by Mexican insurance plans that don't extend to US specialist care." },
        { name: "Laredo Medical Center / Doctors Hospital", detail: "Laredo's two hospital systems serve the community but have critically limited specialist depth." }
      ]} />
      <CostComparisonTable title="What Weight Loss Actually Costs in Laredo" localCompetitors={[
        { name: "North Laredo Concierge", cost: "$500 - $800 / mo", consult: "Mandatory In-Person", access: "Limited Supply" },
        { name: "San Bernardo MedSpas", cost: "$300 - $500 / mo", consult: "Monthly Membership", access: "Variable Compounding" },
        { name: "Laredo Medical Endocrinology", cost: "$100 Copay + Rx", consult: "20-26 Week Wait", access: "1 Provider in City" }
      ]} telehealthPrice="From $146 / mo" />
      <LocalTransitPain title="There Is No Alternative" transitText="Laredo is 150 miles from San Antonio on I-35. There is no nearby alternative city for healthcare. The specialist you need is either in Laredo (6-month wait) or in San Antonio (2.5-hour drive)." hospitalText="<strong>Laredo Medical Center</strong> and <strong>Doctors Hospital of Laredo</strong> are the only options. Specialist metabolic care has a 20-26 week waitlist due to critical physician shortage." />
      <InteractiveFAQ faqs={[
        { q: "I'm a federal employee. Is this separate from my FEHB?", a: "Yes. Telehealth FX is a private, self-pay service completely independent of FEHB. It does not affect your federal employment or health benefits." },
        { q: "Is the medication shipped from within the US?", a: "Yes. All medications are compounded and shipped from US-based, FDA-registered 503B pharmacies." },
        { q: "Do you serve Nuevo Laredo or Mexico-side residents?", a: "No. We only serve patients with US residential addresses. You must be physically located in the US at the time of intake and treatment." }
      ]} />
      <StateLegalFramework stateName="Texas" boardName="Texas Medical Board" text="Telehealth FX operates in strict compliance with the <strong>Texas Medical Board</strong> and Texas Occupations Code § 111." />
      <DeliveryGridMap cityName="Laredo" mapQuery="Laredo, TX" coordinates="27.5036° N, 99.5076° W" counties="Webb County" neighborhoods={['North Laredo', 'Central Laredo', 'Mines Road', 'Del Mar Heights', 'Rio Bravo', 'El Cenizo', 'La Joya']} />
      <FinalCTA stateName="Texas" />
    </div>
  );
}
