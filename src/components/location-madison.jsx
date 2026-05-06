"use client";
import React from 'react';
import { HeroVariationA, PatientArchetype, ClinicalDeepDive, InsuranceBreakdown, CostComparisonTable, LocalTransitPain, InteractiveFAQ, StateLegalFramework, DeliveryGridMap, FinalCTA } from './location-modules.jsx';
export function LocationMadison() {
  return (
    <div style={{ background: '#FBF8F3', overflow: 'hidden' }}>
      <HeroVariationA stateName="Wisconsin" cityName="Madison" headline="Clinical GLP-1 Weight Loss in <br/><span style='color: #2ECC71'>Madison</span>" subheadline="Madison is one of the healthiest cities in America—on paper. The bike paths, the farmers markets, the farm-to-table restaurants. But behind the Isthmus lifestyle branding, state government workers and university staff face the same sedentary desk-bound reality as every other capital city. And the cheese curds are not optional." ctaText="Check Wisconsin Eligibility" />
      <PatientArchetype archetype="The UW-Madison Research Administrator" quote="I work at the university that publishes the research showing GLP-1s work. I've processed the grant funding for metabolic disease studies. My own UW employee plan requires a 6-month behavioral program before they'll authorize what our own researchers have proven effective. I fund the science. I just can't use it." details="<strong>Patient Profile:</strong> Karen, 46, Research Administrator at UW-Madison School of Medicine.<br/><br/><strong>The Challenge:</strong> Karen supports the research grants that fund metabolic disease studies at UW. She understands the evidence base for GLP-1 efficacy because she processes the papers. Her Group Health Cooperative plan requires documented behavioral modification before authorization.<br/><br/><strong>The Intervention:</strong> Karen completed the Telehealth FX intake from her home in Middleton. A Wisconsin-licensed physician prescribed compounded Semaglutide within 24 hours." />
      <ClinicalDeepDive title="The Isthmus Illusion" paragraphs={[
        "Madison consistently ranks among the healthiest, most educated, and most bike-friendly cities in America. The marketing is real—the Isthmus between Lakes Mendota and Monona has excellent bike infrastructure, the Dane County Farmers' Market is one of the largest in the nation, and the food scene celebrates local, sustainable cuisine. But these amenities primarily serve a subset of the population.",
        "The reality for the state government workforce (concentrated in the Capitol Square area) and university staff (sprawled across the UW campus) is desk-bound work, cafeteria food, and Wisconsin's non-negotiable cheese-and-beer culture. Cheese curds (fried or fresh), brats, butter burgers (Culver's was founded nearby), and craft beer from the Ale Asylum/Great Dane/Karben4 scene contribute significant weekly calories.",
        "Wisconsin winters—while not as extreme as Minneapolis—still suppress outdoor activity for 4-5 months. The bike paths that define Madison's identity are unusable from December through March for most commuters. The gap between Madison's healthy image and many residents' metabolic reality is the city's defining health paradox.",
        "GLP-1 medications serve the Madison residents who live behind the Isthmus brand—the state workers, the university staff, and the suburban commuters whose actual daily experience looks nothing like the farmers' market Instagram."
      ]} citations={[
        "Public Health Madison & Dane County. (2025). <em>Community Health Assessment</em>.",
        "UW-Madison Population Health Institute. (2024). <em>Health Disparities and Access Behind Madison's Rankings</em>."
      ]} />
      <InsuranceBreakdown title="State Workers, University Plans, and the Cheese Curd Tax" text="Madison's economy is dominated by state government and UW-Madison." employers={[
        { name: "State of Wisconsin (Capitol Workforce)", detail: "State employee plans require Step Therapy and prior authorization for GLP-1s—the same restrictions that apply across all state plans." },
        { name: "UW-Madison / UW Health", detail: "University employees have plans administered through Group Health Cooperative or other carriers, with standard formulary restrictions." },
        { name: "Epic Systems (Verona)", detail: "Epic—the dominant EHR company—is headquartered nearby. Its young, tech-oriented workforce has progressive benefits but standard PBM-managed GLP-1 restrictions." }
      ]} />
      <CostComparisonTable title="What Weight Loss Actually Costs in Madison" localCompetitors={[
        { name: "Maple Bluff / Nakoma Concierge", cost: "$700 - $1,100 / mo", consult: "Mandatory In-Person", access: "Branded Only" },
        { name: "West Side / Fitchburg MedSpas", cost: "$350 - $650 / mo", consult: "Monthly Membership", access: "Variable Compounding" },
        { name: "UW Health Endocrinology", cost: "$125 Copay + Rx", consult: "10-14 Week Wait", access: "Formulary Restrictions" }
      ]} telehealthPrice="From $146 / mo" />
      <LocalTransitPain title="Bypass the Beltline & UW Health Waitlists" transitText="Madison's traffic concentrates on the Beltline (US-12/14/18/151) and the isthmus bottleneck connecting east and west sides. The John Nolen Drive / Park Street corridor is perpetually congested." hospitalText="<strong>UW Health</strong> and <strong>SSM Health (St. Mary's)</strong> serve the region. Specialist waits average 10-14 weeks." />
      <InteractiveFAQ faqs={[
        { q: "I work at Epic Systems in Verona. Is that covered?", a: "Yes. We deliver to all Dane County addresses including Verona, Middleton, Fitchburg, Sun Prairie, and Waunakee." },
        { q: "Madison is 'healthy.' Why would I need this?", a: "Madison's health rankings reflect infrastructure and demographics, not individual metabolic health. Many residents face the same desk-bound, stress-driven metabolic challenges as any other city—compounded by Wisconsin's cheese-and-beer food culture." }
      ]} />
      <StateLegalFramework stateName="Wisconsin" boardName="Wisconsin Medical Examining Board" text="Telehealth FX operates in strict compliance with the <strong>Wisconsin Medical Examining Board</strong> and Wis. Stat. § 448. All prescribers hold active, unrestricted Wisconsin medical licenses." />
      <DeliveryGridMap cityName="Madison" mapQuery="Madison, WI" coordinates="43.0731° N, 89.4012° W" counties="Dane County" neighborhoods={['Isthmus', 'Middleton', 'Fitchburg', 'Sun Prairie', 'Verona', 'Waunakee', 'Oregon', 'DeForest']} />
      <FinalCTA stateName="Wisconsin" />
    </div>
  );
}
