"use client";
import React from 'react';
import { HeroVariationA, PatientArchetype, LocalTransitPain, InsuranceBreakdown, ClinicalDeepDive, CostComparisonTable, StateLegalFramework, InteractiveFAQ, DeliveryGridMap, FinalCTA } from './location-modules.jsx';

export function LocationColumbus() {
  return (
    <div style={{ background: '#FBF8F3', overflow: 'hidden' }}>

      <HeroVariationA
        stateName="Ohio"
        cityName="Columbus"
        headline="Clinical GLP-1 Weight Loss in <br/><span style='color: #2ECC71'>Columbus</span>"
        subheadline="America's test market capital—where every new product is trialed because Columbus is 'statistically average.' And yet the most rigorously tested weight loss medication in pharmaceutical history remains inaccessible through your local health system. Compounded Semaglutide, cold-shipped from the Short North to Dublin."
        ctaText="Check Ohio Eligibility"
      />

      <PatientArchetype
        archetype="The OSU Wexner Medical Researcher"
        quote="I co-authored a paper on incretin biology at Wexner Medical Center. I understand the GLP-1 mechanism better than most prescribers. But my Ohio State employee health plan required me to fail Orlistat for six months before they'd even consider a prior auth for Wegovy. I study this medicine. I just can't access it."
        details="<strong>Patient Profile:</strong> Dr. Priya Mehta, 39, Research Faculty at Ohio State University Wexner Medical Center.<br/><br/><strong>The Challenge:</strong> Dr. Mehta holds an MD/PhD and has published peer-reviewed research on GLP-1 receptor agonist mechanisms. She understands the pharmacology at an expert level. Yet her employer—the very institution conducting cutting-edge metabolic research—offers a health plan (administered through the state's OPERS/STRS system) that places GLP-1 weight management behind a rigid Step Therapy wall. She was required to document 6 months of failed Orlistat therapy before a Wegovy prior authorization would even be reviewed. The internal endocrinology clinic at Wexner had a 14-week wait for a new-patient appointment—even for faculty.<br/><br/><strong>The Intervention:</strong> Dr. Mehta completed the Telehealth FX intake from her campus office between grant submissions. A separately licensed Ohio physician reviewed her profile asynchronously—no conflict of interest with her employer's system—and prescribed compounded Semaglutide within 20 hours. Cold-packed medication arrived at her Upper Arlington home the next day. She bypassed the institution she helps build—not out of disloyalty, but because the system she works within couldn't serve her."
      />

      <LocalTransitPain
        title="Bypass the 270 Outerbelt & Wexner Waitlists"
        transitText="Columbus is a sprawling, car-dependent metro with zero rail transit and a bus system (COTA) that serves only a fraction of the suburban footprint where most residents actually live. Whether you're crawling on I-270 (the Outerbelt) during the morning rush, stuck on I-71 between downtown and Polaris, navigating the I-70/I-71 split, or sitting in construction on US-33 headed to Dublin—getting to a medical appointment from Columbus's outer suburbs means a minimum 40-minute drive each way."
        hospitalText="The medical infrastructure is strong. <strong>Ohio State Wexner Medical Center</strong> is a nationally ranked academic institution. <strong>OhioHealth</strong> (Riverside, Grant) and <strong>Mount Carmel</strong> operate facilities across the metro. But capacity hasn't kept pace with Columbus's rapid population growth—the city has added over 200,000 residents since 2010. New-patient endocrinology appointments at Wexner average 12 to 16 weeks. OhioHealth metabolic clinics run 6 to 10 weeks. And your local <strong>Kroger</strong>, <strong>CVS</strong>, or <strong>Walgreens</strong> pharmacy has had branded Wegovy on backorder since the national shortage began."
      />

      <InsuranceBreakdown
        title="Why Columbus's Biggest Employers Block Access"
        text="Columbus's economy is anchored by an unusual trifecta: the state government, a massive research university, and one of America's largest insurance companies. All three create distinct but equally frustrating barriers to GLP-1 access."
        employers={[
          { name: "Ohio State University / State Employee Plans (OPERS)", detail: "State employees and OSU faculty are covered through plans administered by the Ohio Public Employees Retirement System (OPERS) or the State Teachers Retirement System (STRS). These plans impose rigid Step Therapy requirements for GLP-1 weight management—typically mandating 6 months of documented failed Orlistat or Contrave therapy before even initiating a Wegovy prior authorization review." },
          { name: "Nationwide Insurance (HQ'd in Columbus)", detail: "Nationwide, one of America's largest insurers, employs thousands in the Columbus metro. While details vary by plan tier, the company's self-funded employee health plans have historically placed GLP-1 weight management on restricted formulary tiers. The corporate irony—working at an insurance company headquarters and facing formulary barriers—echoes across the industry." },
          { name: "Intel New Albany Fab / Manufacturing", detail: "Intel's massive semiconductor fabrication campus in New Albany is bringing thousands of new workers into the Columbus metro. These manufacturing employees will be offered plans that, based on Intel's national formulary patterns, typically classify weight management pharmaceuticals as elective with high deductible requirements." }
        ]}
      />

      <ClinicalDeepDive
        title="America's Test Market Can't Access Its Most Tested Drug"
        paragraphs={[
          "Columbus holds a unique distinction in American commerce: it is the unofficial 'test market capital of the United States.' Major corporations have tested new products, menu items, and services here for decades because Columbus's demographics—age distribution, income levels, ethnic composition, and consumer behavior—closely mirror the national average. Wendy's (headquartered here) tests new items in Columbus first. White Castle launched its plant-based slider here. The logic is simple: if it works in Columbus, it works in America.",
          "There is a deep irony in this distinction when applied to healthcare. Semaglutide and Tirzepatide are among the most rigorously tested pharmaceutical products in history. The STEP and SURMOUNT clinical trial programs enrolled tens of thousands of patients, produced some of the most statistically significant weight loss outcomes ever documented, and received overwhelming FDA regulatory support. These are not experimental drugs—they are the most validated metabolic interventions of the 21st century. And yet in America's test market capital, the average resident cannot reliably access them through their insurance or local pharmacy.",
          "Columbus's metabolic health challenges mirror the national average in ways that reinforce the city's test-market reputation. Ohio winters—November through March—produce months of cold, grey conditions that suppress outdoor activity and trigger seasonal affective patterns that increase comfort food consumption. The city's food landscape reflects its Midwestern roots: Skyline-adjacent Cincinnati chili, OSU tailgate culture built around brats and beer, German Village brewery culture, and the pervasive Kroger-anchored suburban grocery ecosystem that makes processed, calorie-dense convenience food the default.",
          "The rapid growth dynamic adds a final layer of complexity. Columbus has been one of the fastest-growing cities in the Midwest, adding over 200,000 residents since 2010—many drawn by the Intel fab construction in New Albany, the tech sector expansion, and Ohio State's gravitational pull. This growth has strained healthcare infrastructure that was built for a significantly smaller population. Endocrinology wait times have stretched as the patient pool has expanded, while the physician supply has not kept pace.",
          "For a city that prides itself on being the place where America tests what works, the inability to access a medication that has been proven to work—with more clinical evidence than virtually any drug in its class—represents a systemic failure that telehealth is uniquely positioned to solve."
        ]}
        citations={[
          "Ohio Department of Health. (2025). <em>Franklin County Adult Obesity and Metabolic Syndrome Prevalence Report</em>.",
          "Ohio State University College of Public Health. (2024). <em>Rapid Population Growth and Healthcare Capacity Strain in Central Ohio</em>.",
          "The Lancet. (2024). <em>Semaglutide 2.4mg for Weight Management: Long-Term Extension Data from the STEP Program</em>."
        ]}
      />

      <CostComparisonTable
        title="What Weight Loss Actually Costs in Columbus"
        localCompetitors={[
          { name: "Dublin / New Albany Concierge Clinics", cost: "$700 - $1,100 / mo", consult: "Mandatory In-Person + Labs", access: "Branded Only / Waitlisted" },
          { name: "Short North Aesthetic MedSpas", cost: "$450 - $800 / mo", consult: "Monthly Membership + Consult", access: "Variable Compounding Quality" },
          { name: "OSU Wexner Endocrinology", cost: "$175 Copay + Rx", consult: "12-16 Week New Patient Wait", access: "Formulary Restrictions / Step Therapy" },
          { name: "OhioHealth Primary Care", cost: "$50 Copay", consult: "6-10 Week Wait", access: "Prior Auth / Pharmacy Backorder" }
        ]}
        telehealthPrice="From $146 / mo"
      />

      <StateLegalFramework
        stateName="Ohio"
        boardName="State Medical Board of Ohio"
        text="Telehealth FX operates in strict compliance with the <strong>State Medical Board of Ohio (SMBO)</strong> and Ohio Revised Code Section 4743.09 (Ohio's telehealth provisions). Under current Ohio law, physicians may establish a patient relationship and prescribe non-controlled medications via telehealth, including asynchronous modalities, when the standard of care is maintained. Ohio has progressively expanded its telehealth statutes following the pandemic-era emergency provisions, making permanent many of the flexibilities that were initially temporary. All Telehealth FX prescribers treating Ohio patients maintain active, unrestricted Ohio medical licenses verified through the SMBO eLicense portal."
      />

      <InteractiveFAQ
        faqs={[
          { q: "I'm an OSU faculty member. Will using Telehealth FX affect my employee benefits?", a: "No. Telehealth FX is a private, self-pay medical service entirely separate from the Ohio State University health system and any state employee benefits program. Your use of our platform does not interact with, report to, or affect your OPERS/STRS benefits or your relationship with Wexner Medical Center." },
          { q: "I'm relocating to Columbus for the Intel fab. Can I start treatment before I move?", a: "You can begin treatment as soon as you have an Ohio residential address for medication delivery. Complete your intake once you're physically located in Ohio, and an OH-licensed physician will evaluate your profile. If you're transferring an existing GLP-1 protocol from another state, include that documentation in your intake for continuity of care." },
          { q: "Can medication be delivered to my office in the Polaris or Easton area?", a: "Yes. We deliver to all residential and commercial addresses in Franklin County and the surrounding metro, including Dublin, Westerville, New Albany, Upper Arlington, Hilliard, Grove City, Reynoldsburg, and the Polaris/Easton commercial corridors." },
          { q: "How is this different from the weight loss shots advertised on OSU game day?", a: "Many clinics running game-day advertisements offer B12 injections or lipotropic blends with no FDA-recognized efficacy data for obesity. Telehealth FX prescribes only compounded Semaglutide and Tirzepatide—true GLP-1 receptor agonists validated by the most comprehensive Phase III clinical trial programs (STEP and SURMOUNT) in weight management history." },
          { q: "Do you accept Buckeye Health Plan or CareSource (Medicaid)?", a: "Telehealth FX is a self-pay service and does not bill Medicaid or any insurance plan directly. However, our costs (from $146/month) are often comparable to or less than Medicaid specialty drug copays, and all services are eligible for payment via HSA or FSA pre-tax funds." }
        ]}
      />

      <DeliveryGridMap
        cityName="Columbus"
        mapQuery="Columbus, OH"
        coordinates="39.9612° N, 82.9988° W"
        counties="Franklin County, Delaware County, Licking County, Fairfield County, Union County"
        neighborhoods={['Short North', 'German Village', 'Dublin', 'Upper Arlington', 'Westerville', 'New Albany', 'Grandview Heights', 'Hilliard', 'Grove City', 'Polaris']}
      />

      <FinalCTA stateName="Ohio" />

    
{/* Disclaimer: Mounjaro®, Zepbound®, Ozempic®, and Wegovy® are registered trademarks of their respective owners (Eli Lilly and Company and Novo Nordisk A/S). Telehealth FX is not affiliated with, endorsed by, or connected to any of these companies. Compounded medications are not FDA-approved and are not therapeutically equivalent to any branded product. */}
</div>
  );
}
