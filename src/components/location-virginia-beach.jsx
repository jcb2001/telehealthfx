"use client";
import React from 'react';
import { HeroVariationA, PatientArchetype, ClinicalDeepDive, InsuranceBreakdown, CostComparisonTable, LocalTransitPain, InteractiveFAQ, StateLegalFramework, DeliveryGridMap, FinalCTA } from './location-modules.jsx';

export function LocationVirginiaBeach() {
  return (
    <div style={{ background: '#FBF8F3', overflow: 'hidden' }}>
      <HeroVariationA stateName="Virginia" cityName="Virginia Beach" headline="Clinical GLP-1 Weight Loss in <br/><span style='color: #2ECC71'>Hampton Roads</span>" subheadline="Naval Station Norfolk is the largest naval base on Earth. The Hampton Roads region has more active-duty military per capita than anywhere in America—and a TRICARE referral system that cannot keep pace. Compounded Semaglutide, delivered from Oceanfront to Chesapeake." ctaText="Check Virginia Eligibility" />
      <PatientArchetype
        archetype="The Norfolk Naval Shipyard Welder"
        quote="I weld submarine hulls at the Norfolk Naval Shipyard. It's physically demanding work, but I'm burning energy in a way that destroys my body, not in a way that keeps it healthy. My joints hurt, I eat whatever's fastest at the end of a 10-hour shift, and my TRICARE referral for an endocrinologist has been sitting in a queue for 14 weeks. The Navy can deploy a carrier strike group in 48 hours but can't get me a doctor's appointment in 3 months."
        details="<strong>Patient Profile:</strong> Terrence, 38, Nuclear Welder at Norfolk Naval Shipyard, Portsmouth.<br/><br/><strong>The Challenge:</strong> Terrence's work is physically grueling but metabolically hostile—the caloric expenditure of welding does not translate to metabolic health when combined with shift-driven eating patterns and joint stress. His TRICARE Prime referral for endocrinology has been pending for 14 weeks. The civilian specialist network in Hampton Roads is overwhelmed by the combined demand of 100,000+ active-duty service members and their families.<br/><br/><strong>The Intervention:</strong> Terrence completed the Telehealth FX intake from his home in Chesapeake after a shift. A Virginia-licensed physician prescribed compounded Tirzepatide within 20 hours. No TRICARE referral chain. No 14-week wait."
      />
      <ClinicalDeepDive
        title="The Largest Navy in the World, The Longest Wait Times"
        paragraphs={[
          "Hampton Roads is the most military-dense metropolitan area in the United States. Naval Station Norfolk, the Norfolk Naval Shipyard, Joint Expeditionary Base Little Creek-Fort Story, NAS Oceana, Langley Air Force Base, and Fort Eustis collectively create a military population that dominates the region's healthcare demand. Over 100,000 active-duty service members, plus their dependents, compete for specialist access in a civilian healthcare network that was built for a much smaller population.",
          "The TRICARE referral system creates a cascading bottleneck. A service member or dependent seeking metabolic specialist care must first see a PCM at a military treatment facility (MTF), then receive a referral to the civilian network. But the civilian endocrinologists at Sentara, Bon Secours, and EVMS are already at capacity serving the non-military population. The result is waitlists that stretch 12-20 weeks.",
          "The Hampton Roads food environment is classic Mid-Atlantic suburban sprawl: chain restaurants along Virginia Beach Boulevard and Independence Boulevard, fast food near every base gate, and a seafood tradition (fried everything, hush puppies, sweet tea) that is calorie-dense. Military families on tight schedules default to the fastest, cheapest options—which are uniformly high in simple carbohydrates and saturated fat.",
          "GLP-1 medications provide clinical metabolic care outside the TRICARE referral chain, allowing Hampton Roads' massive military and military-adjacent population to access treatment without the 4-month wait that the base clinic system produces."
        ]}
        citations={[
          "Virginia Beach Department of Public Health. (2025). <em>Community Health Assessment: Military Population Health in Hampton Roads</em>.",
          "Eastern Virginia Medical School. (2024). <em>Healthcare Access and Specialist Wait Times in Military-Dense Metropolitan Areas</em>."
        ]}
      />
      <InsuranceBreakdown title="TRICARE Dominance and the Civilian Overflow" text="Hampton Roads' insurance landscape is dominated by TRICARE to a degree unmatched by any other US metro." employers={[
        { name: "U.S. Navy / All DoD Branches (TRICARE)", detail: "TRICARE Prime and Select cover the vast majority of the military population. The MTF-to-civilian referral pathway creates the primary access bottleneck for specialist metabolic care." },
        { name: "Huntington Ingalls (Newport News Shipbuilding)", detail: "The largest shipbuilder in the US employs 25,000+ workers. Corporate plans apply standard PBM restrictions. Physically demanding work does not equate to metabolic health." },
        { name: "Sentara Healthcare / Bon Secours", detail: "The region's dominant health systems serve both military-referred and civilian patients, with endocrinology capacity strained by combined demand." }
      ]} />
      <CostComparisonTable title="What Weight Loss Actually Costs in Hampton Roads" localCompetitors={[
        { name: "Oceanfront / Town Center Concierge", cost: "$700 - $1,100 / mo", consult: "Mandatory In-Person", access: "Branded Only" },
        { name: "Hilltop / Greenbrier MedSpas", cost: "$350 - $650 / mo", consult: "Monthly Membership", access: "Variable Compounding" },
        { name: "Sentara Endocrinology", cost: "$125 Copay + Rx", consult: "12-20 Week Wait", access: "Prior Auth Required" }
      ]} telehealthPrice="From $146 / mo" />
      <LocalTransitPain title="Bypass the HRBT & TRICARE Referral Chains" transitText="Hampton Roads is defined by water crossings. The Hampton Roads Bridge-Tunnel (HRBT), the Monitor-Merrimac Memorial Bridge-Tunnel, and the Downtown/Midtown Tunnels create daily bottlenecks that make cross-region medical appointments a logistical nightmare." hospitalText="<strong>Sentara Norfolk General</strong>, <strong>Bon Secours</strong>, and <strong>EVMS</strong> serve the region but are overwhelmed by combined military and civilian specialist demand." />
      <InteractiveFAQ faqs={[
        { q: "I'm active duty. Will this affect my medical readiness?", a: "No. Telehealth FX is a private service independent of TRICARE and your military medical record. GLP-1 medications are not controlled substances." },
        { q: "Do you deliver to Norfolk, Newport News, and Chesapeake?", a: "Yes. We deliver to all addresses across Hampton Roads including Virginia Beach, Norfolk, Chesapeake, Newport News, Hampton, and Suffolk." }
      ]} />
      <StateLegalFramework stateName="Virginia" boardName="Virginia Board of Medicine" text="Telehealth FX operates in strict compliance with the <strong>Virginia Board of Medicine</strong> and Virginia Code § 54.1-2900 et seq. All prescribers hold active, unrestricted Virginia medical licenses." />
      <DeliveryGridMap cityName="Virginia Beach" mapQuery="Virginia Beach, VA" coordinates="36.8529° N, 75.9780° W" counties="Virginia Beach, Norfolk, Chesapeake, Newport News, Hampton, Suffolk" neighborhoods={['Oceanfront', 'Town Center', 'Chesapeake', 'Norfolk', 'Newport News', 'Hampton', 'Suffolk', 'Williamsburg']} />
      <FinalCTA stateName="Virginia" />
    </div>
  );
}
