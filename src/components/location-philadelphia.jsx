"use client";
import React from 'react';
import { HeroVariationA, CostComparisonTable, PatientArchetype, LocalTransitPain, ClinicalDeepDive, InsuranceBreakdown, StateLegalFramework, InteractiveFAQ, DeliveryGridMap, FinalCTA } from './location-modules.jsx';

export function LocationPhiladelphia() {
  return (
    <div style={{ background: '#FBF8F3', overflow: 'hidden' }}>

      <HeroVariationA
        stateName="Pennsylvania"
        cityName="Philadelphia"
        headline="Clinical GLP-1 Weight Loss in <br/><span style='color: #2ECC71'>Philadelphia</span>"
        subheadline="You live in the shadow of the global pharmaceutical industry's headquarters corridor—and yet you can't get a GLP-1 prescription filled at your local Rite Aid. Access compounded Semaglutide and Tirzepatide, cold-shipped to your door from Rittenhouse to the Main Line."
        ctaText="Check PA Eligibility"
      />

      <CostComparisonTable
        title="What Weight Loss Actually Costs in Philadelphia"
        localCompetitors={[
          { name: "Rittenhouse Square Concierge Clinics", cost: "$700 - $1,100 / mo", consult: "Mandatory In-Person + Labs", access: "Branded Only / Frequently Backordered" },
          { name: "Main Line Anti-Aging MedSpas", cost: "$550 - $900 / mo", consult: "Quarterly 'Wellness Membership'", access: "Limited Compounding / Waitlisted" },
          { name: "Penn Medicine Endocrinology", cost: "$175 Copay + Rx", consult: "10-14 Week New Patient Wait", access: "Formulary Restrictions / Prior Auth Maze" },
          { name: "Jefferson Health Primary Care", cost: "$60 Copay", consult: "6-8 Week Wait", access: "Step Therapy Required / Pharmacy Backorder" }
        ]}
        telehealthPrice="From $146 / mo"
      />

      <PatientArchetype
        archetype="The Penn Medicine ICU Nurse"
        quote="The irony is crushing. I work 12-hour night shifts keeping patients alive at one of the best hospitals in the world, and I can't get my own health system to approve a Wegovy prescription for me. My own employer's plan denied it."
        details="<strong>Patient Profile:</strong> Rachel, 31, ICU Registered Nurse at Penn Medicine, University City.<br/><br/><strong>The Challenge:</strong> Rachel works three 12-hour overnight shifts per week—the classic 7P-7A nursing schedule. A decade of clinical research has established that rotating night shift work causes profound circadian disruption, leading to elevated ghrelin (hunger hormone), suppressed leptin (satiety hormone), and chronic cortisol dysregulation. The hospital cafeteria at 3 AM offers limited options, and the vending machines are loaded with high-glycemic snacks. Despite working within one of the nation's premier academic medical systems, Rachel's employer-sponsored Independence Blue Cross plan denied her Wegovy prior authorization, requiring 6 months of documented failed behavioral therapy first.<br/><br/><strong>The Intervention:</strong> Rachel completed her Telehealth FX intake on her phone between patients during a quiet overnight. A Pennsylvania-licensed physician reviewed her profile asynchronously. Compounded Semaglutide was cold-shipped to her Fishtown apartment and arrived before her next set of shifts. No appointment scheduling. No commuting on SEPTA. No fighting her own employer's insurance bureaucracy."
      />

      <LocalTransitPain
        title="Bypass the Schuylkill & Penn Medicine Waitlists"
        transitText="The Schuylkill Expressway (I-76) is routinely ranked among the most congested and dangerous highways in the United States. Whether you're white-knuckling it on the Surekill, crawling down I-95 through South Philly, or stuck on the Blue Route (I-476) trying to reach a doctor on the Main Line, the Philadelphia commuting experience is a daily cortisol injection that actively undermines your metabolic health."
        hospitalText="Philadelphia is home to some of the most prestigious academic medical institutions on the planet—<strong>Penn Medicine</strong>, <strong>Jefferson Health</strong>, <strong>Temple University Hospital</strong>. Yet new-patient endocrinology appointments at these systems routinely take 10 to 14 weeks. And if you manage to secure a prescription, the local pharmacy reality is grim: <strong>Rite Aid</strong>, <strong>CVS</strong>, and <strong>Walgreens</strong> locations across the Delaware Valley have had branded Wegovy and Zepbound on indefinite backorder since mid-2023."
      />

      <ClinicalDeepDive
        title="The Pharma Corridor Paradox"
        paragraphs={[
          "Philadelphia sits at the geographic heart of the global pharmaceutical industry. GSK's North American headquarters is in Center City. Merck operates massive facilities 30 miles west in West Point. Johnson & Johnson is a short drive across the river. The drugs that are transforming metabolic medicine are literally being developed, manufactured, and distributed from this region—and yet the average Philadelphian cannot reliably access them through their local healthcare system.",
          "This paradox is a direct consequence of a healthcare system built on access friction. The branded medications (Ozempic, Wegovy, Zepbound) are manufactured in limited quantities by a small number of companies. Those quantities are allocated through a labyrinthine distribution chain that prioritizes hospital systems and specialty pharmacies over neighborhood retail outlets. The result: the city that produces the drugs can't stock them on its own pharmacy shelves.",
          "Meanwhile, Philadelphia's metabolic health challenges are profound and deeply rooted. The city's culinary identity—cheesesteaks from Pat's and Geno's, soft pretzels from street vendors, Wawa hoagies at every corner, Tastykakes in every break room—is built on calorie-dense, high-glycemic comfort food. This isn't occasional indulgence; it's the dietary infrastructure of daily life. When combined with brutal Mid-Atlantic winters that confine residents indoors from November through March and sweltering, humid summers that discourage outdoor activity in July and August, the metabolic outcome is predictable.",
          "The physiological mechanism is straightforward: chronic caloric surplus from high-glycemic foods, compounded by seasonal sedentary behavior, leads to sustained hyperinsulinemia. Over years, pancreatic beta cells become exhausted, peripheral insulin sensitivity degrades, and the body enters a state of metabolic inflexibility where it can no longer efficiently switch between burning carbohydrates and mobilizing stored fat. At this stage, willpower-based interventions fail not because of character—but because of broken biochemistry.",
          "GLP-1 receptor agonists address this dysfunction at the hormonal level. By mimicking the incretin hormones GLP-1 and GIP, these medications restore proper post-prandial insulin secretion timing, slow gastric emptying to reduce glucose spikes, and—critically—act on the hypothalamus to recalibrate the brain's appetite set point. This is not a crash diet. This is endocrine restoration therapy."
        ]}
        citations={[
          "Philadelphia Department of Public Health. (2025). <em>Community Health Assessment: Obesity, Diabetes, and Metabolic Syndrome in Philadelphia County</em>.",
          "University of Pennsylvania Perelman School of Medicine. (2024). <em>GLP-1 Receptor Agonist Access Disparities in Academic Medical Center Catchment Areas</em>.",
          "The New England Journal of Medicine. (2024). <em>Tirzepatide Once Weekly for the Treatment of Obesity in People Without Diabetes (SURMOUNT-1 Extension Data)</em>."
        ]}
      />

      <InsuranceBreakdown
        title="Why Philly's Biggest Employers Block Your Access"
        text="Philadelphia's economy is anchored by healthcare systems, universities, media conglomerates, and financial services—industries that employ hundreds of thousands across the Delaware Valley. Yet the insurance plans offered by these institutions consistently create barriers to GLP-1 access."
        employers={[
          { name: "Comcast / NBCUniversal Corporate Plans", detail: "As the city's largest private employer, Comcast's self-funded health plan places GLP-1 weight management medications on the highest specialty tier, requiring prior authorization with documented comorbidities and a BMI threshold that exceeds standard clinical guidelines." },
          { name: "University & Health System Plans (Penn, Temple, Drexel)", detail: "In a cruel irony, many of the health plans offered to employees of Philadelphia's own academic medical centers restrict the very medications their research departments helped validate. Step Therapy requirements and formulary exclusions are common." },
          { name: "Independence Blue Cross (Dominant Regional Carrier)", detail: "Independence Blue Cross, the dominant insurer in the Philadelphia market, has historically required extensive prior authorization documentation for GLP-1 medications, including proof of failed behavioral interventions and a BMI above 30 with at least one documented comorbidity." }
        ]}
      />

      <StateLegalFramework
        stateName="Pennsylvania"
        boardName="Pennsylvania State Board of Medicine"
        text="Telehealth FX operates in strict compliance with the <strong>Pennsylvania State Board of Medicine</strong> and Act 67 of 2024 (Pennsylvania's permanent telehealth statute). Under current Pennsylvania law, a valid physician-patient relationship may be established via telemedicine, including asynchronous store-and-forward technology, without a mandatory in-person encounter. Pennsylvania law requires that the treating physician hold an active Pennsylvania medical license and adhere to the same standard of care applicable to in-person practice. All Telehealth FX prescribers who evaluate Pennsylvania patients are individually credentialed and verified through the Pennsylvania Licensing System (PALS)."
      />

      <InteractiveFAQ
        faqs={[
          { q: "I work at a hospital in University City. Can I get medication delivered to my unit?", a: "We deliver to all residential and commercial addresses across Philadelphia County and the surrounding metro. Many healthcare workers opt for home delivery to their Fishtown, South Philly, or Manayunk apartment to ensure the cold-packed medication is stored properly upon arrival." },
          { q: "How is this different from the weight loss clinics I see advertised on SEPTA?", a: "Many clinics advertised on SEPTA buses and trains offer generic 'weight loss shots' (often B12 or lipotropic blends) that have no FDA-recognized efficacy data for obesity. Telehealth FX prescribes only compounded Semaglutide and Tirzepatide—FDA-compliant GLP-1 receptor agonists backed by extensive Phase III clinical trial data." },
          { q: "Can I use my FSA/HSA to pay?", a: "Yes. Both the physician consultation and the compounded medication are eligible expenses under FSA and HSA plans. This provides significant pre-tax savings, especially for Philadelphia-area professionals facing high state and local tax burdens." },
          { q: "Do you serve the New Jersey suburbs (Cherry Hill, Haddonfield)?", a: "Telehealth FX serves patients based on their state of residence. If you live in New Jersey, you would be evaluated by a NJ-licensed physician under New Jersey telehealth regulations. We serve both PA and NJ residents—just ensure you select the correct state during intake." },
          { q: "Why can't I just get this through Penn or Jefferson?", a: "You absolutely can try. The challenge is that new-patient endocrinology appointments at Penn Medicine and Jefferson Health routinely take 10-14 weeks. Once you have an appointment, your insurance may still deny the branded medication or require Step Therapy. And even if approved, your local pharmacy may not have it in stock. Telehealth FX eliminates all three of these bottlenecks simultaneously." }
        ]}
      />

      <DeliveryGridMap
        cityName="Philadelphia"
        mapQuery="Philadelphia, PA"
        coordinates="39.9526° N, 75.1652° W"
        counties="Philadelphia County, Montgomery County, Delaware County, Chester County, Bucks County"
        neighborhoods={['Rittenhouse Square', 'University City', 'Fishtown', 'Manayunk', 'South Philly', 'King of Prussia', 'Main Line', 'Cherry Hill (NJ)', 'Conshohocken', 'Media']}
      />

      <FinalCTA stateName="Pennsylvania" />

    </div>
  );
}
