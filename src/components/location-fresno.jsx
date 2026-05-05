"use client";
import React from 'react';
import { HeroVariationB, PatientArchetype, ClinicalDeepDive, InsuranceBreakdown, CostComparisonTable, LocalTransitPain, InteractiveFAQ, StateLegalFramework, DeliveryGridMap, FinalCTA } from './location-modules.jsx';

export function LocationFresno() {
  return (
    <div style={{ background: '#FBF8F3', overflow: 'hidden' }}>
      <HeroVariationB
        stateName="California"
        cityName="Fresno"
        headline="Clinical GLP-1 Weight Loss in <span style='color: #2ECC71'>Fresno</span>"
        subheadline="Fresno sits at the heart of the most productive agricultural region on the planet. The Central Valley feeds America—and its own residents face some of the worst healthcare access in California. The nearest academic medical center is 3 hours away. Compounded Semaglutide, delivered from Tower District to Clovis."
        dataPoint1="Fresno County's adult obesity rate exceeds 35%, driven by extreme heat (110°F summers), food desert dynamics in underserved neighborhoods, and a critical shortage of endocrinologists serving 1 million residents."
        dataPoint2="Telehealth FX bypasses the Central Valley specialist desert. Asynchronous intake, overnight delivery, no 3-hour drive to UCSF or Stanford."
      />
      <PatientArchetype
        archetype="The Agricultural Supply Chain Manager"
        quote="I manage cold-chain logistics for one of the largest produce shippers in the Valley. I move billions of dollars of fresh food across the country. The irony is that I eat fast food for lunch every day because there's nothing else near our distribution center. My Kaiser plan has a 4-month wait for endocrinology in Fresno—they suggested I drive to the Bay Area."
        details="<strong>Patient Profile:</strong> Miguel, 44, Supply Chain Director at a major agricultural corporation, Fresno.<br/><br/><strong>The Challenge:</strong> Miguel manages the logistics that deliver fresh produce to grocery stores nationwide, but his own lunch options near the distribution facilities south of Fresno are limited to fast food and gas station snacks. His Kaiser Permanente plan—the dominant insurer in the Valley—had a 16-week endocrinology wait in Fresno. The alternative was a 3-hour drive to Kaiser's Bay Area facilities. Central Valley heat (regularly exceeding 110°F from June through September) eliminates outdoor exercise for a third of the year.<br/><br/><strong>The Intervention:</strong> Miguel completed the Telehealth FX intake from his home in Clovis. A California-licensed physician prescribed compounded Tirzepatide within 24 hours. No 6-hour round trip to San Francisco."
      />
      <ClinicalDeepDive
        title="The Valley That Feeds America Can't Feed Itself"
        paragraphs={[
          "The Central Valley produces more food than any agricultural region in the Western Hemisphere. Fresno County alone generates over $7 billion in annual agricultural output—almonds, grapes, tomatoes, citrus, dairy. And yet Fresno has some of the most severe food desert dynamics in California. The neighborhoods south of Shaw Avenue and in West Fresno have limited grocery access, abundant fast food, and economic pressures that make the cheapest, most calorie-dense options the default.",
          "The heat is the defining environmental factor. Fresno's summers regularly push past 110°F, with consecutive weeks above 105°F. The Central Valley is a basin that traps heat, creating conditions that make outdoor physical activity not just uncomfortable but medically dangerous from May through October. The standard 'lifestyle modification' prescription of diet and exercise is literally constrained by geography and climate for half the year.",
          "The specialist shortage compounds every other factor. Fresno has approximately half the endocrinologists per capita that coastal California cities enjoy. The result is waitlists that stretch 12-20 weeks, with some patients redirected to Bay Area facilities 170 miles away. For a working-class population that cannot take a full day off for a medical appointment three hours away, this is functionally no access at all.",
          "GLP-1 medications provide the clinical intervention that the Central Valley desperately needs—restoring metabolic signaling without requiring patients to drive to San Francisco, exercise in 110°F heat, or navigate a specialist system that was never built to serve a population of this size."
        ]}
        citations={[
          "Fresno County Department of Public Health. (2025). <em>Community Health Assessment: Obesity, Diabetes, and Healthcare Access in Fresno County</em>.",
          "UCSF Fresno Medical Education Program. (2024). <em>Specialist Physician Shortage and Patient Access in the San Joaquin Valley</em>."
        ]}
      />
      <InsuranceBreakdown
        title="Kaiser Dominance and the Agricultural Workforce"
        text="Fresno's insurance landscape is dominated by Kaiser Permanente and Medi-Cal, with limited specialist capacity across both systems."
        employers={[
          { name: "Kaiser Permanente (Central Valley)", detail: "Kaiser is the dominant commercial insurer in Fresno. Its closed-system model means that specialist referrals stay within Kaiser's network—and Kaiser Fresno's endocrinology capacity is severely limited. Patients are frequently redirected to Bay Area facilities, a 3-hour drive each way." },
          { name: "Agricultural Industry / Food Processing", detail: "The Valley's agricultural workforce is often covered by employer-sponsored plans with high deductibles or by Medi-Cal. Both create significant barriers to specialty pharmaceutical access." },
          { name: "Community Medical Centers / Saint Agnes", detail: "Fresno's major health systems employ thousands but face the same specialist capacity constraints as the broader community." }
        ]}
      />
      <CostComparisonTable
        title="What Weight Loss Actually Costs in Fresno"
        localCompetitors={[
          { name: "Fig Garden / Clovis Concierge", cost: "$600 - $1,000 / mo", consult: "Mandatory In-Person", access: "Branded Only / Waitlisted" },
          { name: "Shaw Ave MedSpas", cost: "$350 - $650 / mo", consult: "Monthly Membership", access: "Variable Compounding" },
          { name: "Community Medical Endocrinology", cost: "$100 Copay + Rx", consult: "12-20 Week Wait", access: "Formulary Restrictions" }
        ]}
        telehealthPrice="From $146 / mo"
      />
      <LocalTransitPain
        title="Bypass the 99 Corridor & Kaiser Redirects"
        transitText="Fresno is a car-dependent city spread along the Highway 99 corridor. There is no meaningful public transit. Getting to a specialist appointment from the south side or from surrounding communities like Madera, Selma, or Visalia requires significant drive time on congested surface streets and the 99."
        hospitalText="<strong>Community Medical Centers</strong> and <strong>Saint Agnes Medical Center</strong> serve the region, supplemented by <strong>Kaiser Permanente Fresno</strong>. Specialist capacity is critically insufficient for a metro approaching 1 million people."
      />
      <InteractiveFAQ
        faqs={[
          { q: "Kaiser told me to drive to the Bay Area for a specialist. Is there another option?", a: "Yes. Telehealth FX provides asynchronous clinical evaluation by a California-licensed physician without requiring any in-person visit—in Fresno or anywhere else. Your medication is delivered directly to your door." },
          { q: "Do you deliver to Clovis, Madera, and Visalia?", a: "Yes. We deliver to all Central Valley addresses including Fresno, Clovis, Madera, Hanford, Visalia, and Tulare." }
        ]}
      />
      <StateLegalFramework stateName="California" boardName="Medical Board of California" text="Telehealth FX operates in strict compliance with the <strong>Medical Board of California</strong> and California Business & Professions Code § 2290.5. All prescribers hold active, unrestricted California medical licenses." />
      <DeliveryGridMap cityName="Fresno" mapQuery="Fresno, CA" coordinates="36.7378° N, 119.7871° W" counties="Fresno County, Madera County, Tulare County" neighborhoods={['Tower District', 'Clovis', 'Fig Garden', 'Woodward Park', 'Madera', 'Visalia', 'Selma', 'Sanger']} />
      <FinalCTA stateName="California" />
    </div>
  );
}
