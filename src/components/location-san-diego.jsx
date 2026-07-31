"use client";
import React from 'react';
import { HeroVariationA, ClinicalDeepDive, LocalTransitPain, PatientArchetype, StateLegalFramework, CostComparisonTable, InsuranceBreakdown, InteractiveFAQ, DeliveryGridMap, FinalCTA } from './location-modules.jsx';

export function LocationSanDiego() {
  return (
    <div style={{ background: '#FBF8F3', overflow: 'hidden' }}>

      <HeroVariationA
        stateName="California"
        cityName="San Diego"
        headline="Clinical GLP-1 Weight Loss in <br/><span style='color: #2ECC71'>San Diego</span>"
        subheadline="You work in the biotech capital of the world—where the next generation of metabolic drugs is being engineered in labs along Torrey Pines Road—and yet your own employer's health plan won't authorize the current one. Access compounded Semaglutide delivered directly to your door, from La Jolla to Chula Vista."
        ctaText="Check California Eligibility"
      />

      <ClinicalDeepDive
        title="The Perfect Weather Paradox"
        paragraphs={[
          "San Diego enjoys what is arguably the most temperate climate of any major American city. Year-round sunshine, mild winters, ocean breezes—on paper, this should produce one of the healthiest metropolitan populations in the country. And yet San Diego County's adult obesity rate has climbed steadily over the past decade, a trend that confounds the simplistic 'just go outside and exercise' narrative that dominates conventional weight loss advice.",
          "The explanation lies not in the climate but in the economy. San Diego has transformed over the past two decades into one of the most concentrated biotech, pharma, and defense technology corridors on the planet. Illumina, Dexcom, Pfizer's La Jolla campus, and dozens of smaller genomics and biologics firms have created a white-collar workforce that spends 10 to 14 hours per day in climate-controlled labs and offices along the Torrey Pines Mesa and Sorrento Valley. The perfect weather exists outside the window—but these professionals rarely experience it during daylight working hours.",
          "The commuting reality compounds the problem. The I-5 corridor from Carlsbad, Oceanside, and Encinitas into the Torrey Pines biotech cluster is a daily crawl that adds 60 to 90 minutes of sedentary, cortisol-generating stress to an already desk-bound workday. By the time a Sorrento Valley researcher gets home to their North County apartment, the sun has set and the motivation for that beach jog has evaporated.",
          "Layer onto this the city's deeply embedded food culture: California burritos (carne asada, french fries, cheese, and sour cream wrapped in a flour tortilla), craft beer from one of 150+ local breweries, and the ubiquitous fish taco. These aren't occasional indulgences—they are the default lunch economy of every biotech park and beach community in the county. Consumed daily within the context of chronic desk-bound sedentary behavior and commute-driven cortisol, they create the precise metabolic conditions for progressive insulin resistance.",
          "The cruel irony is that many of these professionals understand the biochemistry better than their own physicians. They know that GLP-1 receptor agonists work by mimicking incretin hormones to restore proper insulin signaling. They understand the mechanism. They've read the SURMOUNT and STEP trial data. And yet they cannot access the medication through their own employer's health plan. Telehealth FX exists to close this gap between scientific knowledge and clinical access."
        ]}
        citations={[
          "San Diego County Health and Human Services Agency. (2025). <em>Community Health Statistics: Obesity and Metabolic Disease Trends in San Diego County</em>.",
          "UC San Diego School of Medicine. (2024). <em>Occupational Sedentary Behavior and Metabolic Outcomes in High-Skill Knowledge Workers</em>.",
          "BIOCOM California. (2024). <em>San Diego Life Sciences Workforce Report: Employee Health Benefit Utilization Trends</em>."
        ]}
      />

      <LocalTransitPain
        title="Bypass the I-5 Crawl & Scripps Waitlists"
        transitText="The daily I-5 commute from North County (Carlsbad, Encinitas, Del Mar) into the Torrey Pines/Sorrento Valley biotech corridor is one of the most predictably miserable drives in Southern California. Add to that the I-15 bottleneck through Escondido, the I-8 interchange disaster, and the perpetual Merge of Death where the 5 meets the 805—and you have a metro area where a 'quick doctor's visit' easily becomes a three-hour round trip."
        hospitalText="San Diego is served by excellent health systems—<strong>Scripps Health</strong>, <strong>UCSD Health</strong>, and <strong>Sharp HealthCare</strong>—but their endocrinology and metabolic medicine departments are overwhelmed. New-patient appointments at Scripps Clinic and UCSD's weight management program routinely take 8 to 12 weeks. And if you do receive a branded Wegovy prescription, the pharmacy situation at your local <strong>Vons</strong>, <strong>CVS</strong>, or <strong>Rite Aid</strong> is the same story playing out nationally: indefinite backorder."
      />

      <PatientArchetype
        archetype="The Sorrento Valley Genomics Researcher"
        quote="I literally work on metabolic disease pathways. I can explain the GLP-1 receptor mechanism to you at the molecular level. And I still couldn't get my employer's Anthem plan to authorize the medication. The system is absurd."
        details="<strong>Patient Profile:</strong> Kevin, 37, Senior Research Associate at a genomics company on Torrey Pines Road, La Jolla.<br/><br/><strong>The Challenge:</strong> Kevin spends 11 hours per day in a BSL-2 lab environment with minimal physical movement. His commute from Encinitas adds another 80 minutes of daily sedentary time. Despite holding a PhD in molecular biology and understanding the pharmacology of GLP-1 agonists at an expert level, his employer-sponsored Anthem Blue Cross plan denied his Wegovy prior authorization, classifying his BMI of 30.5 as 'borderline' and requiring 6 months of documented nutritional counseling first.<br/><br/><strong>The Intervention:</strong> Kevin completed his Telehealth FX intake during his lunch break, between running PCR plates. A California-licensed physician reviewed his metabolic profile asynchronously and prescribed compounded Semaglutide within 14 hours. Cold-packed medication arrived at his Encinitas condo two days later. No referral to UCSD endocrinology. No 6-month counseling prerequisite. No arguing with Anthem."
      />

      <StateLegalFramework
        stateName="California"
        boardName="Medical Board of California"
        text="Telehealth FX operates in strict compliance with the <strong>Medical Board of California (MBC)</strong>. Under California Business and Professions Code Section 2290.5, telehealth is defined broadly to include synchronous and asynchronous interactions, including store-and-forward technology. California law permits the establishment of a physician-patient relationship via asynchronous telemedicine without a mandatory in-person encounter, provided the standard of care is met and the treating physician holds an active California license. San Diego patients benefit from California's position as a national leader in telehealth-permissive legislation. All Telehealth FX prescribers treating California patients are individually credentialed and verified through the MBC's license lookup portal."
      />

      <CostComparisonTable
        title="What Weight Loss Actually Costs in San Diego"
        localCompetitors={[
          { name: "La Jolla Concierge Medicine", cost: "$850 - $1,300 / mo", consult: "Mandatory In-Person + Labs", access: "Branded Only / 4-Week Wait" },
          { name: "Del Mar Anti-Aging & Aesthetics", cost: "$600 - $950 / mo", consult: "Monthly VIP Membership Fee", access: "Mixed Compounding Quality" },
          { name: "Scripps Clinic Endocrinology", cost: "$175 Copay + Rx", consult: "8-12 Week New Patient Wait", access: "Formulary Restrictions / Prior Auth" },
          { name: "UCSD Health Weight Management", cost: "$125 Copay", consult: "10-14 Week Wait + Referral", access: "Limited to BMI 35+ for GLP-1" }
        ]}
        telehealthPrice="From $146 / mo"
      />

      <InsuranceBreakdown
        title="Why Biotech Benefits Still Block Your Access"
        text="San Diego's life sciences sector offers some of the most competitive compensation packages in the country—yet the health insurance component of those packages consistently fails employees seeking GLP-1 medications for weight management."
        employers={[
          { name: "Biotech / Genomics (Illumina, Dexcom, etc.)", detail: "Despite working at companies that develop metabolic health technologies, employees on major carrier plans (Anthem, UHC) face the same prior authorization barriers as any other industry. Many biotech employers have not added GLP-1 weight management to their formulary carve-ins, treating it as elective." },
          { name: "Qualcomm / Defense Tech", detail: "San Diego's large defense and telecommunications sector (Qualcomm, General Atomics, SPAWAR/NAVWAR) offers employer-sponsored plans that frequently classify weight management pharmaceuticals as Tier 4 specialty drugs with prohibitive out-of-pocket costs, even when authorized." },
          { name: "UC San Diego (Academic/State Plan)", detail: "UC employees are covered by UC-managed health plans that, while comprehensive in many areas, impose strict Step Therapy requirements for GLP-1 medications—typically mandating 3-6 months of failed behavioral interventions before pharmaceutical authorization." }
        ]}
      />

      <InteractiveFAQ
        faqs={[
          { q: "I'm a researcher and I understand GLP-1 pharmacology. Can I request a specific protocol?", a: "During your intake, you can share relevant clinical context and preferences. Your prescribing physician will review this alongside your metabolic profile and make an evidence-based prescribing decision. While we cannot guarantee a specific formulation, informed patient input is always valued in the clinical decision-making process." },
          { q: "Can medication be shipped to my lab in Sorrento Valley or Torrey Pines?", a: "Yes. We deliver to all residential and commercial addresses in San Diego County. Many biotech workers opt for workplace delivery to a staffed mail room or reception desk to ensure proper cold-chain handling upon arrival." },
          { q: "I'm Active Duty Navy stationed at Naval Base San Diego. Can I use this?", a: "Yes. Telehealth FX operates as a civilian, private-pay service entirely separate from the Military Health System. Your intake and prescription will not appear in your military medical record. Service members use our platform as a self-pay supplement when TRICARE formulary restrictions prevent access." },
          { q: "How is San Diego's delivery time compared to other cities?", a: "San Diego typically receives medications within 2-3 business days from our 503A pharmacy partners. Cold-pack insulation maintains proper temperature even during the warmer months in inland areas like Escondido or El Cajon." }
        ]}
      />

      <DeliveryGridMap
        cityName="San Diego"
        mapQuery="San Diego, CA"
        coordinates="32.7157° N, 117.1611° W"
        counties="San Diego County"
        neighborhoods={['La Jolla', 'Del Mar', 'Encinitas', 'Carlsbad', 'Pacific Beach', 'Hillcrest', 'North Park', 'Chula Vista', 'Escondido', 'Oceanside']}
      />

      <FinalCTA stateName="California" />

    
{/* Disclaimer: Mounjaro®, Zepbound®, Ozempic®, and Wegovy® are registered trademarks of their respective owners (Eli Lilly and Company and Novo Nordisk A/S). Telehealth FX is not affiliated with, endorsed by, or connected to any of these companies. Compounded medications are not FDA-approved and are not therapeutically equivalent to any branded product. */}
</div>
  );
}
