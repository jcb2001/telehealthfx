"use client";
import React from 'react';
import { HeroVariationA, PatientArchetype, ClinicalDeepDive, InsuranceBreakdown, CostComparisonTable, LocalTransitPain, InteractiveFAQ, StateLegalFramework, DeliveryGridMap, FinalCTA } from './location-modules.jsx';

export function LocationOmaha() {
  return (
    <div style={{ background: '#FBF8F3', overflow: 'hidden' }}>
      <HeroVariationA stateName="Nebraska" cityName="Omaha" headline="Clinical GLP-1 Weight Loss in <br/><span style='color: #2ECC71'>Omaha</span>" subheadline="Omaha is home to Mutual of Omaha and Berkshire Hathaway—companies that insure and invest in America's health. Yet their own employees face the same PBM-driven GLP-1 barriers as every other American. The steak capital of the Midwest deserves metabolic care that matches its ambition." ctaText="Check Nebraska Eligibility" />
      <PatientArchetype
        archetype="The Mutual of Omaha Underwriter"
        quote="I underwrite life insurance policies. I calculate mortality risk based on BMI, A1C, and metabolic markers every single day. I know exactly what my own numbers mean—and I know that my employer's health plan won't cover the medication that would fix them without a 6-month Step Therapy process. I price the risk of obesity for a living. I just can't mitigate my own."
        details="<strong>Patient Profile:</strong> Lisa, 41, Senior Life Insurance Underwriter at Mutual of Omaha.<br/><br/><strong>The Challenge:</strong> Lisa's professional expertise is evaluating metabolic health risk. She understands the actuarial consequences of insulin resistance better than most physicians. Her Mutual of Omaha employee plan requires BMI ≥ 30 with documented comorbidities and 6 months of behavioral modification before GLP-1 authorization. She falls in the 'metabolically unhealthy but not obese enough' category that insurance systems routinely ignore.<br/><br/><strong>The Intervention:</strong> Lisa completed the Telehealth FX intake from her home in West Omaha. A Nebraska-licensed physician evaluated her metabolic profile without arbitrary BMI cutoffs. Compounded Semaglutide prescribed within 24 hours."
      />
      <ClinicalDeepDive
        title="The Steak Capital and the Insurance Irony"
        paragraphs={[
          "Omaha's identity is built on two pillars: beef and insurance. The city's steakhouse tradition—anchored by institutions like Gorat's (Warren Buffett's favorite), The Drover, and Mahogany Prime—is not a tourist attraction. It is the daily dining culture of a city whose economy was literally built on the stockyards. A 16-oz ribeye at a business dinner is not an indulgence in Omaha; it is a professional norm. The weekly caloric contribution from beef alone can exceed 3,000 calories for regular steakhouse diners.",
          "The insurance industry concentration deepens the irony. Mutual of Omaha, one of the most recognized insurance brands in America, is headquartered here alongside Pacific Life, Physicians Mutual, and the investment colossus Berkshire Hathaway. These companies employ thousands of professionals who understand health risk, mortality tables, and the actuarial cost of metabolic disease at an expert level—and who are subject to the same restrictive formulary policies their companies help design.",
          "Nebraska's winters add the familiar Northern-latitude SAD pattern—shorter days, bitter cold, and carbohydrate cravings that the steak-and-comfort-food culture readily satisfies. The combination of high-protein/high-fat dining culture, insurance industry irony, and winter metabolic stress creates a unique Omaha profile.",
          "GLP-1 medications restore the metabolic signaling that Omaha's steak culture and sedentary corporate environment have disrupted, without requiring residents to abandon the food traditions that define their city."
        ]}
        citations={[
          "Douglas County Health Department. (2025). <em>Community Health Assessment: Obesity and Chronic Disease in the Omaha Metropolitan Area</em>.",
          "University of Nebraska Medical Center. (2024). <em>Dietary Patterns, Red Meat Consumption, and Metabolic Health in Midwestern Urban Populations</em>."
        ]}
      />
      <InsuranceBreakdown title="The Insurance Capital's Own Barriers" text="Omaha's economy is anchored by insurance companies whose own employee plans restrict the medications their actuaries price." employers={[
        { name: "Mutual of Omaha / Pacific Life / Physicians Mutual", detail: "Omaha's insurance employers offer competitive benefits but apply standard PBM formulary restrictions. The professionals who calculate the cost of obesity cannot access the pharmaceutical intervention that addresses it." },
        { name: "Berkshire Hathaway / Union Pacific", detail: "The city's financial and railroad giants offer self-funded plans with specialty-tier GLP-1 restrictions requiring extensive prior authorization." },
        { name: "Nebraska Medicine / CHI Health", detail: "The region's health systems employ thousands facing the same formulary barriers they encounter clinically." }
      ]} />
      <CostComparisonTable title="What Weight Loss Actually Costs in Omaha" localCompetitors={[
        { name: "West Omaha / Regency Concierge", cost: "$600 - $1,000 / mo", consult: "Mandatory In-Person", access: "Branded Only" },
        { name: "Midtown MedSpas", cost: "$350 - $650 / mo", consult: "Monthly Membership", access: "Variable Compounding" },
        { name: "Nebraska Medicine Endocrinology", cost: "$125 Copay + Rx", consult: "10-14 Week Wait", access: "Prior Auth Required" }
      ]} telehealthPrice="From $146 / mo" />
      <LocalTransitPain title="Bypass the I-80 Sprawl & UNMC Waitlists" transitText="Omaha sprawls west along I-80 and Dodge Street with limited transit options. Commuting from Papillion, Bellevue, or Council Bluffs (Iowa) to a specialist appointment at UNMC can consume significant time." hospitalText="<strong>Nebraska Medicine (UNMC)</strong> and <strong>CHI Health</strong> anchor the region. Specialist waits average 10-14 weeks. Branded Wegovy is on the same national backorder at your local <strong>Hy-Vee</strong> or <strong>CVS</strong>." />
      <InteractiveFAQ faqs={[
        { q: "I live in Council Bluffs (Iowa). Which state applies?", a: "Your prescribing state is determined by your residence. If you live in Iowa, you'll be evaluated by an IA-licensed physician. We serve both Nebraska and Iowa residents across the Omaha metro." },
        { q: "Do you deliver to Papillion and Bellevue?", a: "Yes. We deliver to all addresses in the Omaha metro including Papillion, Bellevue, La Vista, Elkhorn, and Council Bluffs." }
      ]} />
      <StateLegalFramework stateName="Nebraska" boardName="Nebraska Board of Medicine and Surgery" text="Telehealth FX operates in strict compliance with the <strong>Nebraska Board of Medicine and Surgery</strong> and Nebraska telehealth statutes. For Iowa-side residents, our prescribers hold appropriate Iowa medical licenses." />
      <DeliveryGridMap cityName="Omaha" mapQuery="Omaha, NE" coordinates="41.2565° N, 95.9345° W" counties="Douglas County, Sarpy County, Pottawattamie County (IA)" neighborhoods={['West Omaha', 'Midtown', 'Dundee', 'Papillion', 'Bellevue', 'La Vista', 'Elkhorn', 'Council Bluffs (IA)']} />
      <FinalCTA stateName="Nebraska" />
    
{/* Disclaimer: Mounjaro®, Zepbound®, Ozempic®, and Wegovy® are registered trademarks of their respective owners (Eli Lilly and Company and Novo Nordisk A/S). Telehealth FX is not affiliated with, endorsed by, or connected to any of these companies. Compounded medications are not FDA-approved and are not therapeutically equivalent to any branded product. */}
</div>
  );
}
