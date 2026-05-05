"use client";
import React from 'react';
import { HeroVariationA, PatientArchetype, ClinicalDeepDive, InsuranceBreakdown, CostComparisonTable, LocalTransitPain, InteractiveFAQ, StateLegalFramework, DeliveryGridMap, FinalCTA } from './location-modules.jsx';

export function LocationBakersfield() {
  return (
    <div style={{ background: '#FBF8F3', overflow: 'hidden' }}>
      <HeroVariationA stateName="California" cityName="Bakersfield" headline="Clinical GLP-1 Weight Loss in <br/><span style='color: #2ECC71'>Bakersfield</span>" subheadline="Bakersfield is where California's oil industry meets its agricultural heartland—and where both workforces face a critical specialist shortage. The nearest academic medical center is 2 hours away in Los Angeles. Compounded Semaglutide, delivered from the Westside to Rosedale." ctaText="Check California Eligibility" />
      <PatientArchetype archetype="The Kern County Oil Field Pumper" quote="I check wellheads across Kern County 12 hours a day. I drive hundreds of miles between sites in the heat, eating whatever I can grab at gas stations. Bakersfield doesn't have enough specialists for a city this size. My doctor told me to drive to LA for an endocrinologist. That's a 4-hour round trip I can't afford to take." details="<strong>Patient Profile:</strong> Rick, 46, Oil Field Pumper/Gauger, Kern County.<br/><br/><strong>The Challenge:</strong> Rick monitors oil production across remote well sites in Kern County. His 'office' is a truck cab in 110°F heat. Diet is gas station food. Kern County has critically few endocrinologists for a metro of 900,000+. His employer's plan required a specialist referral he couldn't obtain locally.<br/><br/><strong>The Intervention:</strong> Rick completed the Telehealth FX intake from his apartment in Oildale. A California-licensed physician prescribed compounded Tirzepatide within 24 hours. No drive to LA." />
      <ClinicalDeepDive title="Oil, Agriculture, and the Specialist Desert" paragraphs={[
        "Bakersfield sits at the southern end of the Central Valley, where California's two extractive industries—oil and agriculture—converge. Kern County is the most productive oil-producing county in California and one of the top agricultural counties nationally. Both industries create workforces that are physically dispersed across vast rural areas, working long shifts in extreme heat, with food access limited to what's available along county highways.",
        "The specialist shortage in Bakersfield is severe. With approximately half the physicians per capita of coastal California cities, Kern County residents face endocrinology waitlists of 14-20 weeks—or are redirected to Los Angeles, a 2-hour drive through the Tehachapi Pass. For hourly workers who cannot take a full day off, this is functionally zero access.",
        "The heat mirrors Fresno and Tucson: 110°F summers eliminate outdoor exercise for months. The air quality—Bakersfield consistently ranks among the worst in the nation for particulate pollution—adds a respiratory dimension that further constrains physical activity.",
        "GLP-1 medications bridge the specialist access gap that Bakersfield's healthcare infrastructure cannot close, delivering clinical metabolic care to a population that the system has underserved for decades."
      ]} citations={[
        "Kern County Department of Public Health. (2025). <em>Community Health Assessment: Obesity, Air Quality, and Healthcare Access</em>.",
        "UCLA Center for Health Policy Research. (2024). <em>Physician Shortage and Patient Outcomes in California's Southern Central Valley</em>."
      ]} />
      <InsuranceBreakdown title="Oil, Agriculture, and the Access Gap" text="Bakersfield's employers span oil production and agriculture, with limited specialist networks." employers={[
        { name: "Chevron / Aera Energy / Berry Petroleum", detail: "Kern County oil producers offer corporate plans that require specialist referrals—referrals that are nearly impossible to obtain locally due to the endocrinologist shortage." },
        { name: "Agricultural Industry / Grimmway Farms", detail: "Agricultural employers offer plans with high deductibles and limited specialist networks, creating barriers for a workforce already challenged by food access and heat." },
        { name: "Adventist Health / Dignity Health / Kern Medical", detail: "Local health systems serve as the only specialist source, with capacity far below demand." }
      ]} />
      <CostComparisonTable title="What Weight Loss Actually Costs in Bakersfield" localCompetitors={[
        { name: "Seven Oaks / Rosedale Concierge", cost: "$600 - $900 / mo", consult: "Mandatory In-Person", access: "Branded Only" },
        { name: "Ming Ave MedSpas", cost: "$300 - $550 / mo", consult: "Monthly Membership", access: "Variable Compounding" },
        { name: "Kern Medical Endocrinology", cost: "$100 Copay + Rx", consult: "14-20 Week Wait", access: "Prior Auth Required" }
      ]} telehealthPrice="From $146 / mo" />
      <LocalTransitPain title="Bypass the 99 & the Drive to LA" transitText="Bakersfield is car-dependent, stretching along Highway 99 and the Westside Highway (I-5). The drive to Los Angeles for a specialist appointment is 2+ hours through the Grapevine, making it a full-day commitment." hospitalText="<strong>Adventist Health Bakersfield</strong>, <strong>Dignity Health (Mercy)</strong>, and <strong>Kern Medical</strong> provide local care, but specialist capacity is critically insufficient." />
      <InteractiveFAQ faqs={[
        { q: "My doctor said to drive to LA for a specialist. Is there another way?", a: "Yes. Telehealth FX provides California-licensed physician evaluation without any in-person visit. Your medication is delivered directly to your Bakersfield address." },
        { q: "Do you deliver to Oildale, Shafter, and Delano?", a: "Yes. We deliver to all addresses in Kern County." }
      ]} />
      <StateLegalFramework stateName="California" boardName="Medical Board of California" text="Telehealth FX operates in strict compliance with the <strong>Medical Board of California</strong> and California Business & Professions Code § 2290.5." />
      <DeliveryGridMap cityName="Bakersfield" mapQuery="Bakersfield, CA" coordinates="35.3733° N, 119.0187° W" counties="Kern County" neighborhoods={['Rosedale', 'Seven Oaks', 'Oildale', 'Stockdale', 'Shafter', 'Delano', 'Tehachapi', 'Taft']} />
      <FinalCTA stateName="California" />
    </div>
  );
}
