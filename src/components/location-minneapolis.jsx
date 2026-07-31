"use client";
import React from 'react';
import { HeroVariationA, ClinicalDeepDive, PatientArchetype, InsuranceBreakdown, LocalTransitPain, CostComparisonTable, InteractiveFAQ, StateLegalFramework, DeliveryGridMap, FinalCTA } from './location-modules.jsx';

export function LocationMinneapolis() {
  return (
    <div style={{ background: '#FBF8F3', overflow: 'hidden' }}>

      <HeroVariationA
        stateName="Minnesota"
        cityName="Minneapolis"
        headline="Clinical GLP-1 Weight Loss in <br/><span style='color: #2ECC71'>Minneapolis</span>"
        subheadline="Minneapolis is home to the Mayo Clinic's satellite network, UnitedHealth Group's global headquarters, and five months of winter darkness that drive the most severe Seasonal Affective Disorder metabolic chain in the country. Compounded Semaglutide, delivered from Uptown to Edina."
        ctaText="Check Minnesota Eligibility"
      />

      <ClinicalDeepDive
        title="The Long Winter and the Hotdish Metabolic Cycle"
        paragraphs={[
          "Minneapolis experiences some of the most extreme winter conditions of any major American city. From November through March, temperatures routinely drop below zero, daylight shrinks to fewer than 9 hours, and the city is blanketed in snow that makes outdoor activity not just uncomfortable but genuinely dangerous. This is not Seattle's grey drizzle or Boston's cold snap—this is sustained, Arctic-grade winter that fundamentally alters human physiology for nearly half the year.",
          "The metabolic consequences are severe. The dramatic reduction in daylight suppresses serotonin production, triggering Seasonal Affective Disorder (SAD) at rates far exceeding the national average. SAD drives intense carbohydrate cravings—the brain's attempt to boost serotonin through the insulin-tryptophan pathway. In Minneapolis, those cravings are satisfied by a food culture built for cold survival: hotdish (the quintessential Minnesota casserole of cream of mushroom soup, ground beef, tater tots, and cheese), wild rice soup, lefse with butter and sugar, and the Jucy Lucy (a cheese-stuffed burger originating from Matt's Bar).",
          "The 'Minnesota Nice' culture adds a psychological dimension that other cities don't share. The passive conflict-avoidance style characteristic of Upper Midwest culture means that many residents suppress stress rather than address it, leading to chronic cortisol elevation that operates beneath the surface. This internalized stress, combined with the physiological effects of extended winter darkness and a comfort-food diet, creates a metabolic environment uniquely resistant to willpower-based interventions.",
          "The corporate landscape amplifies the sedentary dimension. Minneapolis is a Fortune 500 powerhouse—UnitedHealth Group, Target, Best Buy, General Mills, 3M, and US Bancorp are all headquartered here. These companies offer premium health benefits but create the same desk-bound, high-stress professional culture seen in other corporate hubs, compounded by a climate that eliminates walking, biking, and outdoor movement for five months of the year.",
          "GLP-1 receptor agonists address the neurochemical cascade that Minneapolis's winters trigger. They restore the incretin signaling that chronic SAD-driven carbohydrate consumption and cortisol elevation have systematically damaged, without requiring you to overcome the biological imperative to eat more during the darkest, coldest months of the year."
        ]}
        citations={[
          "Minnesota Department of Health. (2025). <em>Statewide Health Assessment: Obesity, Metabolic Disease, and Seasonal Affective Disorder in Hennepin County</em>.",
          "University of Minnesota School of Public Health. (2024). <em>Winter Photoperiod, Carbohydrate Consumption, and Insulin Resistance in Northern-Latitude Populations</em>.",
          "American Journal of Psychiatry. (2024). <em>Seasonal Affective Disorder Prevalence and Metabolic Comorbidities in Upper Midwest Urban Populations</em>."
        ]}
      />

      <PatientArchetype
        archetype="The UnitedHealth Group Formulary Analyst"
        quote="I literally build the formulary models that determine GLP-1 coverage for 50 million Americans. I understand exactly why my own employer's plan denies coverage—because I helped design the Step Therapy logic. And I still can't get my UHC employee plan to approve Wegovy for me without six months of documented behavioral failure. I am the system. And I can't escape it."
        details="<strong>Patient Profile:</strong> Priya, 37, Senior Formulary Analyst at UnitedHealth Group, Minnetonka.<br/><br/><strong>The Challenge:</strong> Priya's professional expertise is the architecture of pharmaceutical access restriction. She understands PBM economics, rebate structures, and utilization management at a level that few physicians match. But her own UHC employee health plan applies the exact Step Therapy protocols she helped design. The irony is not lost on her: she builds the walls that keep her out. Her weight gain is driven by the classic Minneapolis pattern—SAD-induced carbohydrate cravings during five months of darkness, compounded by a sedentary corporate role and chronic stress.<br/><br/><strong>The Intervention:</strong> Priya completed the Telehealth FX intake from her home in Edina during a January snowstorm. A Minnesota-licensed physician reviewed her metabolic profile asynchronously. Compounded Tirzepatide was prescribed within 16 hours and delivered to her door. She bypassed the system she designed—not through a loophole, but through a separate clinical pathway that doesn't require her employer's permission."
      />

      <InsuranceBreakdown
        title="The Health Insurance Capital's Own Access Problem"
        text="Minneapolis is, arguably, the health insurance capital of America. UnitedHealth Group—the largest health insurer in the world—is headquartered in Minnetonka. And yet the city's residents face the same formulary barriers as everyone else."
        employers={[
          { name: "UnitedHealth Group (Global HQ — Minnetonka)", detail: "UHG employs thousands in the Twin Cities across its UnitedHealthcare, Optum, and corporate divisions. Employee plans apply the same UHC formulary restrictions that UHG administers for its 50 million+ commercial members nationwide. The company that designs the prior authorization process for GLP-1s subjects its own workforce to that process." },
          { name: "Target / Best Buy / General Mills (Fortune 500 HQs)", detail: "Minneapolis's corporate density means a massive professional workforce on self-funded plans administered by—yes—UnitedHealthcare, Medica, or Blue Cross Blue Shield of Minnesota. These plans uniformly apply Step Therapy, BMI thresholds, and prior authorization for GLP-1 weight management." },
          { name: "Mayo Clinic Health System / Allina / Fairview", detail: "The Twin Cities' healthcare systems employ tens of thousands of clinical and administrative staff. As in every other healthcare-employer city in this network, their employee plans impose the same access barriers they encounter when treating patients." }
        ]}
      />

      <LocalTransitPain
        title="Bypass the I-35W Crawl & Allina Waitlists"
        transitText="The Twin Cities are connected by a freeway system that turns treacherous for five months of the year. I-35W, I-94, and I-494/694 (the beltway) are perpetually congested, and winter conditions add black ice, whiteout snowstorms, and multi-car pileups to the commute. Getting from Bloomington to a specialist appointment at Abbott Northwestern or the University of Minnesota Medical Center can consume an entire afternoon."
        hospitalText="The Twin Cities have excellent medical infrastructure: <strong>Mayo Clinic Health System</strong>, <strong>Allina Health</strong> (Abbott Northwestern), <strong>Fairview / M Health</strong> (University of Minnesota), and <strong>Hennepin Healthcare</strong>. But endocrinology and metabolic medicine waitlists average 10-14 weeks across all systems. Your local <strong>Cub Foods</strong>, <strong>CVS</strong>, or <strong>Walgreens</strong> pharmacy has branded Wegovy on the same national backorder."
      />

      <CostComparisonTable
        title="What Weight Loss Actually Costs in Minneapolis"
        localCompetitors={[
          { name: "Wayzata / Edina Concierge Clinics", cost: "$800 - $1,200 / mo", consult: "Mandatory In-Person + Labs", access: "Branded Only / Waitlisted" },
          { name: "Uptown / North Loop Aesthetic Clinics", cost: "$450 - $800 / mo", consult: "Monthly Membership + Consult", access: "Variable Compounding Quality" },
          { name: "Abbott Northwestern Endocrinology", cost: "$150 Copay + Rx", consult: "10-14 Week New Patient Wait", access: "Formulary Restrictions / Prior Auth" },
          { name: "Fairview / Park Nicollet PCP", cost: "$50 Copay", consult: "4-8 Week Wait", access: "Step Therapy / Pharmacy Backorder" }
        ]}
        telehealthPrice="From $146 / mo"
      />

      <InteractiveFAQ
        faqs={[
          { q: "I work at UnitedHealth Group. Is there a conflict of interest?", a: "No. Telehealth FX is an independent medical platform with no affiliation to UnitedHealth Group, Optum, or any insurance company. Using our service is a private healthcare decision that does not interact with your UHG employment." },
          { q: "I live in St. Paul. Is that covered?", a: "Yes. We serve the entire Twin Cities metro, including Minneapolis, St. Paul, Bloomington, Edina, Plymouth, Maple Grove, Woodbury, and all surrounding suburbs." },
          { q: "Does the medication ship safely in Minnesota winter?", a: "Yes. Our compounding pharmacy partners use insulated, temperature-controlled packaging designed to maintain medication integrity in extreme cold. We recommend retrieving packages promptly upon delivery during winter months." },
          { q: "Is this just a SAD thing? Will I stop needing it in summer?", a: "SAD exacerbates metabolic dysfunction, but the underlying insulin resistance it helps create persists year-round. GLP-1 medications address the hormonal dysregulation itself, not just the seasonal trigger. Your physician will monitor your progress and adjust treatment as needed." }
        ]}
      />

      <StateLegalFramework
        stateName="Minnesota"
        boardName="Minnesota Board of Medical Practice"
        text="Telehealth FX operates in strict compliance with the <strong>Minnesota Board of Medical Practice</strong> and Minnesota Statutes § 147.032 et seq. Under current Minnesota law, a physician-patient relationship may be established via telehealth, including asynchronous modalities, for prescribing non-controlled medications. All Telehealth FX prescribers treating Minnesota patients hold active, unrestricted Minnesota medical licenses verified through the Board's online license verification system."
      />

      <DeliveryGridMap
        cityName="Minneapolis"
        mapQuery="Minneapolis, MN"
        coordinates="44.9778° N, 93.2650° W"
        counties="Hennepin County, Ramsey County, Dakota County, Anoka County, Washington County"
        neighborhoods={['Uptown', 'North Loop', 'Edina', 'St. Paul', 'Bloomington', 'Plymouth', 'Maple Grove', 'Woodbury', 'Eden Prairie', 'Minnetonka']}
      />

      <FinalCTA stateName="Minnesota" />

    
{/* Disclaimer: Mounjaro®, Zepbound®, Ozempic®, and Wegovy® are registered trademarks of their respective owners (Eli Lilly and Company and Novo Nordisk A/S). Telehealth FX is not affiliated with, endorsed by, or connected to any of these companies. Compounded medications are not FDA-approved and are not therapeutically equivalent to any branded product. */}
</div>
  );
}
