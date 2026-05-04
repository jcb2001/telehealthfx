"use client";
import React from 'react';
import { HeroVariationB, ClinicalDeepDive, PatientArchetype, InsuranceBreakdown, CostComparisonTable, LocalTransitPain, InteractiveFAQ, StateLegalFramework, DeliveryGridMap, FinalCTA } from './location-modules.jsx';

export function LocationNewOrleans() {
  return (
    <div style={{ background: '#FBF8F3', overflow: 'hidden' }}>
      <HeroVariationB
        stateName="Louisiana"
        cityName="New Orleans"
        headline="Clinical GLP-1 Weight Loss in <span style='color: #2ECC71'>New Orleans</span>"
        subheadline="New Orleans has the most celebrated food culture in America. Gumbo, po'boys, beignets, crawfish boils, and the cocktail tradition that invented the Sazerac. Any weight loss approach that asks you to abandon this food is asking you to abandon your identity. We're not here to change what you eat. We're here to fix how your body processes it."
        dataPoint1="Louisiana has the third-highest adult obesity rate in the nation at 40.1%. Orleans Parish's rate is comparable. The food culture is not the sole cause—but the food culture combined with poverty, stress, and healthcare access barriers creates a metabolic crisis."
        dataPoint2="Telehealth FX provides clinical-grade metabolic care that respects New Orleans food traditions while repairing the hormonal signaling that chronic caloric surplus has damaged."
      />
      <ClinicalDeepDive
        title="The Most Delicious Metabolic Crisis in America"
        paragraphs={[
          "New Orleans is the only American city where food is genuinely sacred. This is not the performative 'foodie' culture of Portland or Austin—this is a 300-year culinary tradition rooted in French, African, Spanish, and Creole heritage that is inseparable from family, community, religion, and identity. A Monday red beans and rice. A Friday fish fry. A Sunday crawfish boil. These are not meals—they are rituals.",
          "The caloric math is relentless. A plate of gumbo (600 calories). A dressed roast beef po'boy from Parkway (1,400 calories). Three beignets from Café Du Monde (800 calories). A muffuletta from Central Grocery (1,200 calories for the full). A Sazerac (250 calories) followed by a Hurricane (700 calories). These are not occasional indulgences—they are the weekly rhythm of New Orleans life.",
          "The economic context makes the metabolic challenge even more acute. New Orleans has a high poverty rate, and the neighborhoods most affected by food access limitations—the Lower Ninth Ward, New Orleans East, Central City—are also the neighborhoods with the highest rates of obesity and diabetes. The intersection of poverty, food desert dynamics, and a calorie-dense culinary tradition creates a metabolic environment that willpower alone cannot overcome.",
          "Post-Katrina healthcare infrastructure gaps persist. While Ochsner Health has expanded significantly, the closure of Charity Hospital and the ongoing consolidation of the public health system have left specialist capacity strained. Endocrinology waits at Ochsner and LCMC Health routinely exceed 12 weeks.",
          "GLP-1 medications do not require New Orleans residents to stop eating gumbo or attending crawfish boils. They restore the incretin signaling that allows the body to process these culturally essential foods without the progressive insulin resistance that unregulated metabolic dysfunction produces."
        ]}
        citations={[
          "Louisiana Department of Health. (2025). <em>Louisiana Obesity Report: Parish-Level Data and Intervention Strategies</em>.",
          "Tulane University School of Public Health and Tropical Medicine. (2024). <em>Food Culture, Poverty, and Metabolic Disease in Orleans Parish</em>."
        ]}
      />
      <PatientArchetype
        archetype="The Ochsner Health ER Nurse"
        quote="I work 12-hour night shifts in the ER. I treat diabetic emergencies every single shift. I know what insulin resistance looks like—I see it in my patients' bloodwork and I feel it in my own body. My Ochsner employee plan required me to complete their internal weight management program before they'd authorize a GLP-1. The program meets on Tuesday mornings. I sleep on Tuesday mornings. I work Tuesday nights."
        details="<strong>Patient Profile:</strong> Keisha, 36, Emergency Department RN at Ochsner Medical Center, New Orleans.<br/><br/><strong>The Challenge:</strong> Keisha works overnight shifts treating the metabolic consequences of New Orleans's food culture and poverty. She eats from the hospital cafeteria at 2 AM—processed, high-carb food designed for speed. Her own Ochsner employee plan required participation in a daytime wellness program that was impossible to attend given her night shift schedule. She understood the clinical science of her own condition better than most of her patients—and she was still trapped by the administrative barriers.<br/><br/><strong>The Intervention:</strong> Keisha completed the Telehealth FX intake at 8 AM after a shift, from her apartment in Mid-City. A Louisiana-licensed physician prescribed compounded Tirzepatide within 16 hours. No daytime wellness program conflict. No schedule sacrifice."
      />
      <InsuranceBreakdown
        title="Ochsner's Dominance and the Service Economy Gap"
        text="New Orleans's healthcare is increasingly consolidated under Ochsner Health, while the city's massive hospitality workforce often lacks coverage entirely."
        employers={[
          { name: "Ochsner Health (Regional Dominant)", detail: "Ochsner has become the dominant health system in the Gulf South. Employee plans apply standard formulary restrictions and require participation in internal wellness programs for GLP-1 authorization—programs that are structurally inaccessible to the night-shift clinical workforce." },
          { name: "Hospitality / Tourism / Bourbon Street", detail: "New Orleans's hospitality workforce—the backbone of the city's economy—often relies on ACA marketplace plans or remains uninsured. For this population, both the $900/month concierge clinics and the 12-week specialist waits are impossible. Telehealth FX at $146/month is the most accessible clinical pathway." },
          { name: "Entergy / Port of New Orleans / Tulane", detail: "The city's corporate, industrial, and academic employers offer self-funded plans with standard PBM restrictions for GLP-1 weight management." }
        ]}
      />
      <CostComparisonTable
        title="What Weight Loss Actually Costs in New Orleans"
        localCompetitors={[
          { name: "Uptown / Garden District Concierge", cost: "$700 - $1,200 / mo", consult: "Mandatory In-Person", access: "Branded Only" },
          { name: "Metairie MedSpas", cost: "$400 - $750 / mo", consult: "Aesthetician Administered", access: "Variable Compounding" },
          { name: "Ochsner Endocrinology", cost: "$125 Copay + Rx", consult: "12-16 Week Wait", access: "Formulary Restrictions" }
        ]}
        telehealthPrice="From $146 / mo"
      />
      <LocalTransitPain
        title="Bypass the Causeway & Ochsner Waitlists"
        transitText="New Orleans's geography—bounded by Lake Pontchartrain, the Mississippi River, and surrounded by wetlands—creates a transit environment where getting anywhere requires crossing water. The Lake Pontchartrain Causeway (24 miles), the Crescent City Connection, and I-10 through the East are the only major arteries. Adding a medical appointment to this geography is always a time-intensive proposition."
        hospitalText="<strong>Ochsner Medical Center</strong> dominates, complemented by <strong>LCMC Health</strong> (University Medical Center, Touro) and <strong>Tulane Medical Center</strong>. Specialist waits average 12-16 weeks."
      />
      <InteractiveFAQ
        faqs={[
          { q: "Do I need to change my diet for this to work?", a: "No. GLP-1 medications work by restoring hormonal signaling, not by requiring dietary restriction. You may naturally find your appetite and cravings shift over time, but the medication does not require you to abandon cultural food traditions." },
          { q: "Do you deliver to Metairie, Kenner, and the West Bank?", a: "Yes. We deliver to all addresses in Orleans, Jefferson, St. Tammany, and St. Bernard parishes." }
        ]}
      />
      <StateLegalFramework
        stateName="Louisiana"
        boardName="Louisiana State Board of Medical Examiners"
        text="Telehealth FX operates in strict compliance with the <strong>Louisiana State Board of Medical Examiners (LSBME)</strong> and Louisiana telehealth statutes. All prescribers treating Louisiana patients hold active, unrestricted Louisiana medical licenses."
      />
      <DeliveryGridMap
        cityName="New Orleans"
        mapQuery="New Orleans, LA"
        coordinates="29.9511° N, 90.0715° W"
        counties="Orleans Parish, Jefferson Parish, St. Tammany Parish, St. Bernard Parish"
        neighborhoods={['French Quarter', 'Garden District', 'Mid-City', 'Uptown', 'Metairie', 'Kenner', 'Mandeville', 'Slidell', 'Marrero', 'Gentilly']}
      />
      <FinalCTA stateName="Louisiana" />
    </div>
  );
}
