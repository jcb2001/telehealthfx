"use client";
import React from 'react';
import { HeroVariationA, PatientArchetype, ClinicalDeepDive, InsuranceBreakdown, CostComparisonTable, LocalTransitPain, InteractiveFAQ, StateLegalFramework, DeliveryGridMap, FinalCTA } from './location-modules.jsx';

export function LocationWichita() {
  return (
    <div style={{ background: '#FBF8F3', overflow: 'hidden' }}>
      <HeroVariationA stateName="Kansas" cityName="Wichita" headline="Clinical GLP-1 Weight Loss in <br/><span style='color: #2ECC71'>Wichita</span>" subheadline="Wichita is the Air Capital of the World. Spirit AeroSystems, Textron Aviation, and Airbus assemble the planes that connect the globe—but the factory floor workforce faces a healthcare access problem that hasn't taken flight. Compounded Semaglutide, delivered from College Hill to Derby." ctaText="Check Kansas Eligibility" />
      <PatientArchetype archetype="The Spirit AeroSystems Fuselage Assembler" quote="I build 737 fuselage sections for 10 hours a day. It's physical work, but it's repetitive-motion physical—not cardio. I eat in the factory cafeteria because there's no time to leave. My Via Christi plan said I need to try Weight Watchers for 6 months before they'll consider a GLP-1. I'm too tired after a shift to cook, let alone attend a meeting." details="<strong>Patient Profile:</strong> Chris, 39, Fuselage Assembly Technician at Spirit AeroSystems.<br/><br/><strong>The Challenge:</strong> Chris works 10-hour shifts on the 737 production line. The physical demands are repetitive but not metabolically beneficial. Factory cafeteria food is his primary diet. His Ascension Via Christi plan required documented behavioral modification before GLP-1 authorization.<br/><br/><strong>The Intervention:</strong> Chris completed the Telehealth FX intake from his home in Derby. A Kansas-licensed physician prescribed compounded Semaglutide within 24 hours." />
      <ClinicalDeepDive title="The Air Capital's Ground-Level Problem" paragraphs={[
        "Wichita's identity as the Air Capital is not branding—it is industrial reality. Spirit AeroSystems, Textron Aviation (Cessna/Beechcraft), Airbus, and Bombardier Learjet collectively employ tens of thousands of manufacturing workers. The aviation workforce builds the most sophisticated machines in the world but faces the same metabolic challenges as any other manufacturing population: shift work, factory cafeteria food, physical exhaustion that doesn't translate to cardiovascular health, and limited time for meal preparation.",
        "Kansas's food culture is straightforward Midwest comfort: chicken-fried steak, biscuits and gravy, mashed potatoes, and the ubiquitous fast food that lines every commercial corridor. Wichita has among the highest fast-food restaurant densities of any mid-size American city. The caloric landscape is relentlessly high-carb and high-fat.",
        "The specialist shortage in Wichita is pronounced. As a mid-size city distant from major academic medical centers (KU Medical Center is 3 hours away in Kansas City), Wichita's endocrinology capacity is limited. Ascension Via Christi and Wesley Medical Center provide solid care, but metabolic specialist waitlists average 10-16 weeks.",
        "GLP-1 medications provide clinical intervention that works within the aviation factory worker's reality—restoring metabolic signaling without requiring meal prep after a 10-hour shift or driving 3 hours to Kansas City for a specialist appointment."
      ]} citations={[
        "Sedgwick County Division of Health. (2025). <em>Community Health Assessment: Obesity and Chronic Disease</em>.",
        "University of Kansas School of Medicine-Wichita. (2024). <em>Specialist Access and Healthcare Delivery in Mid-Size Kansas Metropolitan Areas</em>."
      ]} />
      <InsuranceBreakdown title="Aviation Manufacturing Plans" text="Wichita's dominant employers are aviation manufacturers with standard corporate health plan restrictions." employers={[
        { name: "Spirit AeroSystems / Textron Aviation / Airbus", detail: "Aviation manufacturing plans classify GLP-1 weight management as specialty-tier, requiring extensive documentation and Step Therapy before authorization." },
        { name: "Ascension Via Christi / Wesley Healthcare", detail: "The region's health systems impose the same formulary restrictions on their own employees." }
      ]} />
      <CostComparisonTable title="What Weight Loss Actually Costs in Wichita" localCompetitors={[
        { name: "East Wichita Concierge", cost: "$600 - $900 / mo", consult: "Mandatory In-Person", access: "Branded Only" },
        { name: "West Side MedSpas", cost: "$300 - $600 / mo", consult: "Monthly Membership", access: "Variable Compounding" },
        { name: "Via Christi Endocrinology", cost: "$100 Copay + Rx", consult: "10-16 Week Wait", access: "Prior Auth Required" }
      ]} telehealthPrice="From $146 / mo" />
      <LocalTransitPain title="Bypass the Kellogg Corridor & Via Christi Waitlists" transitText="Wichita's traffic flows along Kellogg (US-54/400) and I-135. The city is car-dependent with no meaningful public transit." hospitalText="<strong>Ascension Via Christi</strong> and <strong>Wesley Medical Center</strong> serve the region. KU Medical Center is 3 hours away in Kansas City." />
      <InteractiveFAQ faqs={[
        { q: "I work shifts at the Spirit factory. When do I do the intake?", a: "Anytime. The intake is fully asynchronous—no appointment required." },
        { q: "Do you deliver to Derby, Andover, and Newton?", a: "Yes. We deliver to all addresses in Sedgwick County and surrounding areas." }
      ]} />
      <StateLegalFramework stateName="Kansas" boardName="Kansas State Board of Healing Arts" text="Telehealth FX operates in strict compliance with the <strong>Kansas State Board of Healing Arts</strong> and Kansas telehealth statutes. All prescribers hold active, unrestricted Kansas medical licenses." />
      <DeliveryGridMap cityName="Wichita" mapQuery="Wichita, KS" coordinates="37.6872° N, 97.3301° W" counties="Sedgwick County, Butler County, Harvey County" neighborhoods={['College Hill', 'Riverside', 'Derby', 'Andover', 'Newton', 'Goddard', 'Maize', 'Park City']} />
      <FinalCTA stateName="Kansas" />
    </div>
  );
}
