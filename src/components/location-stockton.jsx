"use client";
import React from 'react';
import { HeroVariationA, PatientArchetype, ClinicalDeepDive, InsuranceBreakdown, CostComparisonTable, LocalTransitPain, InteractiveFAQ, StateLegalFramework, DeliveryGridMap, FinalCTA } from './location-modules.jsx';

export function LocationStockton() {
  return (
    <div style={{ background: '#FBF8F3', overflow: 'hidden' }}>
      <HeroVariationA stateName="California" cityName="Stockton" headline="Clinical GLP-1 Weight Loss in <br/><span style='color: #2ECC71'>Stockton</span>" subheadline="Stockton sits at the northern end of the Central Valley, a port city surrounded by some of the richest farmland on Earth. Yet it consistently ranks among the most medically underserved cities in California. The nearest academic medical center is UC Davis—90 minutes away in traffic. Compounded Semaglutide, delivered from Lincoln Village to Lodi." ctaText="Check California Eligibility" />
      <PatientArchetype archetype="The Port of Stockton Logistics Coordinator" quote="I coordinate container movements at the Port of Stockton—the only inland deepwater port in California. My shifts rotate, the work is stressful, and the food options near the port are gas stations and taco trucks. My Kaiser plan told me the nearest endocrinologist with availability is in Sacramento. That's 90 minutes in I-5 traffic." details="<strong>Patient Profile:</strong> Diana, 37, Logistics Coordinator at the Port of Stockton.<br/><br/><strong>The Challenge:</strong> Diana manages the movement of agricultural and construction materials through California's only inland deepwater port. Rotating shifts, limited food access near the port facilities, and Kaiser's redirected specialist referrals to Sacramento create a metabolic health gap.<br/><br/><strong>The Intervention:</strong> Diana completed the Telehealth FX intake from her home in Lincoln Village. A California-licensed physician prescribed compounded Semaglutide within 24 hours. No drive to Sacramento." />
      <ClinicalDeepDive title="California's Forgotten City" paragraphs={[
        "Stockton has been called many things—America's most miserable city, the foreclosure capital of the Great Recession, the first major American city to declare bankruptcy. What it is not called is healthy. San Joaquin County's adult obesity rate exceeds 35%, driven by the same Central Valley dynamics seen in Fresno and Bakersfield: extreme summer heat (105°F+), food desert neighborhoods, agricultural economics, and a critical shortage of specialists.",
        "The specialist shortage is acute even by Central Valley standards. Stockton has fewer endocrinologists per capita than Fresno, and Kaiser Permanente—the dominant insurer—routinely redirects patients to Sacramento (90 minutes) or the Bay Area (2 hours) for specialty care. For Stockton's large working-class population, a half-day medical trip to another city is not feasible.",
        "The food environment mirrors the broader Valley: fast food density is among the highest in the state, affordable fresh food access is limited in south Stockton and the downtown corridor, and the agricultural bounty surrounding the city doesn't translate to the plates of its residents.",
        "GLP-1 medications bring clinical-grade metabolic care directly to a city that California's healthcare system has systematically underserved."
      ]} citations={[
        "San Joaquin County Public Health Services. (2025). <em>Community Health Needs Assessment</em>.",
        "UC Davis Health. (2024). <em>Specialist Access Gaps in the Northern San Joaquin Valley</em>."
      ]} />
      <InsuranceBreakdown title="Kaiser Redirects and the Working-Class Gap" text="Stockton's insurance landscape is dominated by Kaiser and Medi-Cal, with both systems struggling to provide local specialist access." employers={[
        { name: "Kaiser Permanente (Central Valley)", detail: "Kaiser Stockton has minimal endocrinology capacity. Patients are routinely redirected to Sacramento or Modesto, creating half-day medical trips." },
        { name: "Port of Stockton / Amazon / Distribution Centers", detail: "Stockton's logistics economy employs thousands in shift work with employer plans that apply standard PBM restrictions." },
        { name: "St. Joseph's / Dameron Hospital", detail: "Local hospitals serve the community but lack the specialist depth of larger California systems." }
      ]} />
      <CostComparisonTable title="What Weight Loss Actually Costs in Stockton" localCompetitors={[
        { name: "Lincoln Village / Brookside Clinics", cost: "$500 - $900 / mo", consult: "Mandatory In-Person", access: "Branded Only" },
        { name: "Pacific Ave MedSpas", cost: "$300 - $550 / mo", consult: "Monthly Membership", access: "Variable Compounding" },
        { name: "Kaiser Endocrinology (Sacramento)", cost: "$100 Copay + Rx", consult: "16-20 Week Wait + 90min Drive", access: "Formulary Restrictions" }
      ]} telehealthPrice="From $146 / mo" />
      <LocalTransitPain title="Bypass I-5 Traffic & Kaiser Sacramento Redirects" transitText="Stockton connects to Sacramento via I-5 and Highway 99—both heavily congested during commute hours. The drive to Kaiser Sacramento for a specialist appointment is 90 minutes each way in traffic." hospitalText="<strong>St. Joseph's Medical Center</strong> and <strong>Dameron Hospital</strong> provide local care. <strong>Kaiser Stockton</strong> has limited specialist capacity, frequently redirecting to Sacramento." />
      <InteractiveFAQ faqs={[
        { q: "Kaiser told me to go to Sacramento. Is there a local option?", a: "Yes. Telehealth FX provides California-licensed physician evaluation entirely online. Your medication ships directly to your Stockton address." },
        { q: "Do you deliver to Lodi, Tracy, and Manteca?", a: "Yes. We deliver to all addresses in San Joaquin County." }
      ]} />
      <StateLegalFramework stateName="California" boardName="Medical Board of California" text="Telehealth FX operates in strict compliance with the <strong>Medical Board of California</strong> and California Business & Professions Code § 2290.5." />
      <DeliveryGridMap cityName="Stockton" mapQuery="Stockton, CA" coordinates="37.9577° N, 121.2908° W" counties="San Joaquin County" neighborhoods={['Lincoln Village', 'Brookside', 'Lodi', 'Tracy', 'Manteca', 'Ripon', 'Escalon']} />
      <FinalCTA stateName="California" />
    </div>
  );
}
