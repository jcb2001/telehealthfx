"use client";
import React from 'react';
import { HeroVariationA, PatientArchetype, ClinicalDeepDive, InsuranceBreakdown, CostComparisonTable, LocalTransitPain, InteractiveFAQ, StateLegalFramework, DeliveryGridMap, FinalCTA } from './location-modules.jsx';

export function LocationSacramento() {
  return (
    <div style={{ background: '#FBF8F3', overflow: 'hidden' }}>
      <HeroVariationA
        stateName="California"
        cityName="Sacramento"
        headline="Clinical GLP-1 Weight Loss in <br/><span style='color: #2ECC71'>Sacramento</span>"
        subheadline="Sacramento is the Farm-to-Fork Capital of America—and the state capital where 300,000 government employees are trapped in a CalPERS health plan that treats GLP-1s as a luxury. The legislators who regulate healthcare can't access it themselves. Compounded Semaglutide, delivered from Midtown to Elk Grove."
        ctaText="Check California Eligibility"
      />
      <PatientArchetype
        archetype="The CalPERS Benefits Analyst"
        quote="I administer the health benefits for 1.5 million state employees. I understand exactly why CalPERS restricts GLP-1 coverage—the actuarial cost is enormous. But understanding the system doesn't make it less frustrating when you're the one being denied. I process other people's healthcare appeals all day. I didn't want to file one of my own."
        details="<strong>Patient Profile:</strong> Angela, 44, Health Benefits Analyst at CalPERS, Sacramento.<br/><br/><strong>The Challenge:</strong> Angela manages the health benefits program for California's massive state workforce. She understands PBM economics, formulary tier structures, and utilization management at an expert level. Her own CalPERS Blue Shield plan requires BMI ≥ 35 with documented comorbidities and 6 months of behavioral modification before GLP-1 authorization. She fell 2 BMI points short of the threshold—clinically overweight, metabolically unwell, but not 'obese enough' for the system she administers.<br/><br/><strong>The Intervention:</strong> Angela completed the Telehealth FX intake from her home in Natomas. A California-licensed physician evaluated her metabolic profile without arbitrary BMI cutoffs. Compounded Tirzepatide was prescribed within 24 hours."
      />
      <ClinicalDeepDive
        title="Farm-to-Fork Capital, Desk-to-Fridge Reality"
        paragraphs={[
          "Sacramento has embraced its identity as the Farm-to-Fork Capital with genuine pride—and the agricultural bounty of the Central Valley makes it deserved. The city is surrounded by some of the most productive farmland on the planet, and the restaurant scene in Midtown and East Sacramento celebrates local produce with creativity and sophistication.",
          "But the metabolic reality for most Sacramento residents bears little resemblance to the farm-to-fork marketing. The state government workforce—by far the city's dominant employer—sits in cubicles in the Capitol Mall area for 8-10 hours a day, eating cafeteria food or fast food from the J Street corridor. The Central Valley heat (100°F+ from June through September) makes outdoor activity dangerous during the same months that the farm-to-fork produce is at its peak. The irony is spatial: world-class food is available, but the lifestyle doesn't support accessing it.",
          "Sacramento's rapid growth as a Bay Area affordability alternative has brought tens of thousands of remote tech workers into the metro, but it has not brought proportional specialist healthcare capacity. UC Davis Medical Center—the region's premier academic hospital—has endocrinology waitlists stretching 14-18 weeks.",
          "GLP-1 medications work within Sacramento's actual metabolic environment—the government desk job, the Central Valley heat, and the gap between the 'farm-to-fork' aspiration and the cafeteria-lunch reality."
        ]}
        citations={[
          "Sacramento County Department of Health Services. (2025). <em>Community Health Profile: Obesity and Metabolic Indicators</em>.",
          "UC Davis Health. (2024). <em>Specialist Access and Wait Times in the Sacramento Metropolitan Area</em>."
        ]}
      />
      <InsuranceBreakdown
        title="CalPERS: 1.5 Million Employees, Same Formulary Wall"
        text="Sacramento's economy is dominated by state government. CalPERS is the single largest purchaser of employee health benefits in California."
        employers={[
          { name: "CalPERS (State of California)", detail: "CalPERS administers health benefits for 1.5 million state employees, retirees, and dependents across multiple carriers (Blue Shield, Kaiser, Anthem). GLP-1 weight management is subject to strict BMI thresholds and Step Therapy across all CalPERS plan options." },
          { name: "UC Davis Health / Sutter Health / Dignity Health", detail: "Sacramento's healthcare systems are major employers whose own plans impose the same formulary restrictions they encounter clinically." },
          { name: "Intel / HP / Tech Transplants", detail: "The growing tech presence in the Sacramento area brings corporate plans that apply standard PBM utilization management for GLP-1 access." }
        ]}
      />
      <CostComparisonTable
        title="What Weight Loss Actually Costs in Sacramento"
        localCompetitors={[
          { name: "East Sacramento / Folsom Concierge", cost: "$700 - $1,100 / mo", consult: "Mandatory In-Person", access: "Branded Only / Waitlisted" },
          { name: "Midtown Aesthetic Clinics", cost: "$400 - $700 / mo", consult: "Monthly Membership", access: "Variable Compounding" },
          { name: "UC Davis Endocrinology", cost: "$150 Copay + Rx", consult: "14-18 Week Wait", access: "Formulary Restrictions" },
          { name: "Sutter Health PCP", cost: "$50 Copay", consult: "6-10 Week Wait", access: "Step Therapy / Backorder" }
        ]}
        telehealthPrice="From $146 / mo"
      />
      <LocalTransitPain
        title="Bypass the I-80/US-50 Merge & UC Davis Waitlists"
        transitText="Sacramento's freeway system—I-80, US-50, I-5, and Business 80—converges in ways that create daily gridlock, especially the notorious I-80/US-50 merge. Commuting from Roseville, Folsom, or Elk Grove to a specialist appointment near the Capitol area is a significant time commitment."
        hospitalText="<strong>UC Davis Medical Center</strong> is the region's academic anchor, complemented by <strong>Sutter Health</strong> and <strong>Dignity Health</strong>. Endocrinology waits at UC Davis average 14-18 weeks."
      />
      <InteractiveFAQ
        faqs={[
          { q: "I'm a state employee on CalPERS. Can I use this alongside my benefits?", a: "Yes. Telehealth FX is a private, self-pay service independent of CalPERS. It does not affect your state employment or health benefits." },
          { q: "Do you serve Roseville, Folsom, and Elk Grove?", a: "Yes. We deliver to all Sacramento metro addresses including Roseville, Folsom, Elk Grove, Rancho Cordova, Davis, and Natomas." }
        ]}
      />
      <StateLegalFramework
        stateName="California"
        boardName="Medical Board of California"
        text="Telehealth FX operates in strict compliance with the <strong>Medical Board of California</strong> and California Business & Professions Code § 2290.5. All prescribers treating California patients hold active, unrestricted California medical licenses."
      />
      <DeliveryGridMap
        cityName="Sacramento"
        mapQuery="Sacramento, CA"
        coordinates="38.5816° N, 121.4944° W"
        counties="Sacramento County, Placer County, El Dorado County, Yolo County"
        neighborhoods={['Midtown', 'East Sacramento', 'Natomas', 'Elk Grove', 'Roseville', 'Folsom', 'Rancho Cordova', 'Davis', 'Citrus Heights']}
      />
      <FinalCTA stateName="California" />
    </div>
  );
}
