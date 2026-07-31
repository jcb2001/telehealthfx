"use client";
import React from 'react';
import { HeroVariationB, InsuranceBreakdown, PatientArchetype, ClinicalDeepDive, StateLegalFramework, CostComparisonTable, LocalTransitPain, InteractiveFAQ, DeliveryGridMap, FinalCTA } from './location-modules.jsx';

export function LocationCharlotte() {
  return (
    <div style={{ background: '#FBF8F3', overflow: 'hidden' }}>

      <HeroVariationB
        stateName="North Carolina"
        cityName="Charlotte"
        headline="Clinical GLP-1 Weight Loss in <span style='color: #2ECC71'>Charlotte</span>"
        subheadline="The second-largest banking center in America processes trillions in healthcare transactions annually—and yet Bank of America's own employee health plan makes accessing a GLP-1 prescription an exercise in bureaucratic endurance. Compounded Semaglutide, delivered from SouthPark to Lake Norman."
        dataPoint1="Charlotte's banking sector employs over 80,000 professionals across Bank of America, Wells Fargo, and Truist—most of whom sit at a desk for 10+ hours a day in Uptown towers or Ballantyne campus buildings."
        dataPoint2="Telehealth FX provides asynchronous metabolic care designed for desk-bound professionals who need clinical intervention, not another corporate wellness webinar."
      />

      <InsuranceBreakdown
        title="Why America's Banking Capital Can't Bank on Its Own Benefits"
        text="Charlotte is the undisputed banking capital of the Eastern United States. Bank of America's global headquarters, Wells Fargo's East Coast hub, Truist Financial's headquarters, and Ally Financial's operations center collectively employ tens of thousands. These institutions design, administer, and profit from the healthcare payment infrastructure that covers hundreds of millions of Americans. Yet their own employee health plans create significant barriers to GLP-1 access."
        employers={[
          { name: "Bank of America (Global HQ)", detail: "BofA's self-funded employee health plans, administered through major carriers, have historically placed GLP-1 weight management on restricted specialty tiers. Prior authorization requires documented BMI thresholds, comorbidity codes, and proof of failed behavioral interventions—a process that routinely takes 6-10 weeks. The bank that processes more healthcare transactions than almost any other institution in the world makes its own employees navigate the same broken system." },
          { name: "Wells Fargo / Truist Financial", detail: "Wells Fargo's Charlotte campus and Truist's newly consolidated headquarters employ thousands of operations, compliance, and technology workers. Both companies' self-funded plans apply restrictive Step Therapy protocols for GLP-1 weight management, typically requiring documented failure of Orlistat or nutritional counseling before pharmaceutical authorization." },
          { name: "Atrium Health (Largest Regional Employer)", detail: "Atrium Health—Charlotte's largest employer and dominant healthcare system—offers employee plans that, paradoxically, impose the same formulary restrictions on GLP-1 medications that its own endocrinologists wish they could prescribe more freely. Healthcare workers treating metabolic disease face the same access barriers as the patients they serve." }
        ]}
      />

      <PatientArchetype
        archetype="The BofA Credit Risk Analyst"
        quote="My entire job is quantifying financial risk for the bank. I can model a collateralized debt obligation in my sleep. But I cannot figure out my own health plan's prior authorization workflow for a medication my doctor already prescribed. The system is deliberately opaque."
        details="<strong>Patient Profile:</strong> Michael, 36, Senior Credit Risk Analyst at Bank of America, Uptown Charlotte.<br/><br/><strong>The Challenge:</strong> Michael works 55-hour weeks in a high-stress quantitative role, spending virtually his entire day seated in BofA's Uptown tower. His primary form of physical activity is walking from the parking deck to his desk. Despite his expertise in navigating complex financial systems, the prior authorization process for his prescribed Wegovy proved impenetrable: his BofA health plan (administered through Anthem) required his prescribing physician to submit documentation proving failure of two prior therapies, a BMI recertification within the past 90 days, and an attestation of comorbidity from a specialist—not his PCP. The nearest Atrium Health endocrinologist with availability was an 11-week wait.<br/><br/><strong>The Intervention:</strong> Michael completed the Telehealth FX intake during his lunch hour at his Uptown desk. A North Carolina-licensed physician reviewed his profile asynchronously and prescribed compounded Tirzepatide within 14 hours. Cold-packed medication arrived at his South End apartment the next day. Total time invested: 20 minutes. Total bureaucratic forms filed with his insurance: zero."
      />

      <ClinicalDeepDive
        title="The Piedmont Belt Metabolic Profile"
        paragraphs={[
          "Charlotte sits at the heart of North Carolina's Piedmont region—a geography that produces a distinct metabolic environment defined by the collision of Southern food culture, explosive suburban sprawl, and a white-collar economy that keeps its workforce indoors and immobile. Understanding this regional profile is essential to understanding why traditional weight loss approaches fail so consistently in the Queen City.",
          "The Southern food infrastructure of the Charlotte metro is deeply embedded in daily life. Bojangles' biscuits and sweet tea for breakfast. Chick-fil-A or a BBQ plate for lunch. Cook Out trays for dinner. Carolina BBQ—both the vinegar-based Eastern style and the tomato-based Lexington style—is a year-round staple, not a seasonal event. Add to this the tailgate culture surrounding the Panthers, Charlotte FC, and NASCAR events at Charlotte Motor Speedway, and you have a social calendar that is structurally organized around calorie-dense, high-glycemic communal eating.",
          "The geographic sprawl amplifies the dietary problem by eliminating physical activity as a baseline behavior. Charlotte's explosive growth has pushed development far beyond I-485 into suburbs like Indian Trail, Waxhaw, Mooresville, and across the South Carolina border into Fort Mill and Rock Hill. These communities were designed exclusively around automobile access—with Walk Scores often below 20. A resident of Ballantyne who works in Uptown drives 25 miles each way, sits at a desk for 10 hours, drives home, and has accumulated fewer than 2,000 steps for the day.",
          "The climate provides a narrow window for comfortable outdoor activity. Charlotte's humid subtropical conditions produce uncomfortably hot, humid summers (June through September) and a grey, damp winter period (December through February) that, while mild by Midwestern standards, is enough to suppress consistent outdoor exercise habits. The fall and spring shoulder seasons are pleasant—but two months of comfortable weather cannot compensate for ten months of climate-driven inactivity.",
          "The metabolic consequence of this environment is a steady, progressive development of insulin resistance that accelerates with each year of desk-bound banking and suburban commuting. GLP-1 receptor agonists are the clinical tool that resets this trajectory—not by changing your environment (you still have to commute, you still have to eat lunch at work, you still live in the Piedmont) but by repairing the hormonal signaling that your environment has broken."
        ]}
        citations={[
          "Mecklenburg County Public Health. (2025). <em>Community Health Assessment: Obesity, Diabetes, and Sedentary Behavior in the Charlotte Metropolitan Area</em>.",
          "UNC Charlotte Urban Institute. (2024). <em>Suburban Sprawl, Transportation Patterns, and Health Outcomes in the Greater Charlotte Region</em>.",
          "Atrium Health / Wake Forest School of Medicine. (2024). <em>Metabolic Syndrome Prevalence in Sedentary Professional Populations: A Carolinas Regional Analysis</em>."
        ]}
      />

      <StateLegalFramework
        stateName="North Carolina"
        boardName="North Carolina Medical Board"
        text="Telehealth FX operates in strict compliance with the <strong>North Carolina Medical Board (NCMB)</strong> and N.C. General Statute § 90-21.19A (North Carolina's telehealth statute). Under current NC law, a physician-patient relationship may be established via telemedicine, including asynchronous modalities, when the treating physician holds an active North Carolina medical license and maintains documentation consistent with the in-person standard of care. North Carolina's legislative framework was significantly modernized following the pandemic-era expansions, making permanent many telehealth flexibilities that benefit the Charlotte metro's sprawling geography. All Telehealth FX prescribers treating North Carolina patients are individually credentialed and verified through the NCMB license verification system."
      />

      <CostComparisonTable
        title="What Weight Loss Actually Costs in Charlotte"
        localCompetitors={[
          { name: "SouthPark / Myers Park Concierge Clinics", cost: "$750 - $1,200 / mo", consult: "Mandatory In-Person + Full Panel", access: "Branded Only / Waitlisted" },
          { name: "South End Aesthetic MedSpas", cost: "$500 - $850 / mo", consult: "Monthly Membership + Consult", access: "Variable Compounding Sources" },
          { name: "Atrium Health Endocrinology (CMC)", cost: "$150 Copay + Rx", consult: "8-12 Week New Patient Wait", access: "Formulary Restrictions / Prior Auth" },
          { name: "Novant Health Primary Care", cost: "$50 Copay", consult: "4-6 Week Wait", access: "Step Therapy / Pharmacy Backorder" }
        ]}
        telehealthPrice="From $146 / mo"
      />

      <LocalTransitPain
        title="Bypass the I-485 Loop & Atrium Waitlists"
        transitText="Charlotte's explosive suburban growth has turned the I-485 outer loop—originally designed as a bypass—into a commuter highway that is gridlocked during both morning and evening rush. Whether you're crawling on I-77 from Lake Norman, stuck on I-85 through the northeast corridor, navigating Independence Boulevard from the east, or sitting in the Ballantyne bottleneck on Johnston Road—adding a doctor's appointment to a Charlotte commute means writing off a significant portion of your day."
        hospitalText="Charlotte's healthcare infrastructure is dominated by two major systems: <strong>Atrium Health</strong> (now part of Advocate Health) and <strong>Novant Health</strong>. Both are excellent—but both are strained by a metro area that has grown by over 25% in the past decade. New-patient endocrinology appointments at Atrium's Carolinas Medical Center average 8 to 12 weeks. Novant's metabolic clinics run a similar 6-10 week backlog. And filling a branded Wegovy prescription at your local <strong>Harris Teeter</strong>, <strong>CVS</strong>, or <strong>Walgreens</strong> means the same answer: indefinite backorder."
      />

      <InteractiveFAQ
        faqs={[
          { q: "I live in Fort Mill / Rock Hill (SC) but work in Charlotte. Which state applies?", a: "Your prescribing state is determined by your physical residence at the time of the consultation, not your workplace. If you live in South Carolina, you'll be evaluated by an SC-licensed physician under South Carolina telehealth regulations. We serve both NC and SC residents—just select your correct state of residence during intake." },
          { q: "Can my medication be delivered to my office in Uptown or Ballantyne?", a: "Absolutely. We deliver to all residential and commercial addresses in Mecklenburg County and the surrounding metro, including Uptown towers, Ballantyne Corporate Park, University Research Park, and all suburban communities across the region." },
          { q: "I have Anthem through BofA. Can I use my insurance at all?", a: "Telehealth FX is a self-pay service that operates entirely outside the insurance framework. This is by design—it eliminates the prior authorization delays, Step Therapy requirements, and formulary restrictions that make GLP-1 access so difficult through employer plans. However, your Telehealth FX costs are fully eligible for payment via FSA or HSA pre-tax funds." },
          { q: "Is there a NASCAR / Panthers tailgate season impact on treatment?", a: "Not medically. However, many patients find it helpful to begin treatment during the off-season (January-March) when social eating events are less frequent, allowing them to establish their protocol and dosage titration before tailgate season resumes. Your prescribing physician can discuss timing strategies during your evaluation." },
          { q: "How is this different from the IV bars I see in South End?", a: "IV hydration bars and 'vitamin shot' clinics in South End and NoDa offer products (B12, NAD+ drips, lipotropic blends) that have no FDA-recognized efficacy data for weight loss. Telehealth FX prescribes only compounded Semaglutide and Tirzepatide—GLP-1 receptor agonists backed by the STEP and SURMOUNT Phase III clinical trial programs." }
        ]}
      />

      <DeliveryGridMap
        cityName="Charlotte"
        mapQuery="Charlotte, NC"
        coordinates="35.2271° N, 80.8431° W"
        counties="Mecklenburg County, Union County, Cabarrus County, Iredell County, Gaston County, York County (SC)"
        neighborhoods={['South End', 'Ballantyne', 'SouthPark', 'Dilworth', 'Myers Park', 'Lake Norman', 'Huntersville', 'Mooresville', 'Indian Trail', 'Fort Mill (SC)']}
      />

      <FinalCTA stateName="North Carolina" />

    
{/* Disclaimer: Mounjaro®, Zepbound®, Ozempic®, and Wegovy® are registered trademarks of their respective owners (Eli Lilly and Company and Novo Nordisk A/S). Telehealth FX is not affiliated with, endorsed by, or connected to any of these companies. Compounded medications are not FDA-approved and are not therapeutically equivalent to any branded product. */}
</div>
  );
}
