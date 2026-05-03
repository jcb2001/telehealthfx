"use client";
import React from 'react';
import { HeroVariationB, ClinicalDeepDive, PatientArchetype, InsuranceBreakdown, CostComparisonTable, LocalTransitPain, InteractiveFAQ, StateLegalFramework, DeliveryGridMap, FinalCTA } from './location-modules.jsx';

export function LocationOklahomaCity() {
  return (
    <div style={{ background: '#FBF8F3', overflow: 'hidden' }}>

      <HeroVariationB
        stateName="Oklahoma"
        cityName="Oklahoma City"
        headline="Clinical GLP-1 Weight Loss in <span style='color: #2ECC71'>Oklahoma City</span>"
        subheadline="Sonic Drive-In was born here. Braum's was born here. The drive-through culture that defines American convenience eating was literally invented in your backyard. Oklahoma consistently ranks in the top 5 most obese states in the nation. It's time for a clinical intervention designed for how OKC actually lives."
        dataPoint1="Oklahoma's adult obesity rate is 40.0%—the fourth highest in the United States—and Oklahoma County's rate mirrors the state average."
        dataPoint2="Telehealth FX delivers compounded Semaglutide and Tirzepatide directly to your door, from Nichols Hills to Midwest City. No waiting room. No prior auth maze."
      />

      <ClinicalDeepDive
        title="Why Oklahoma Can't Diet Its Way Out"
        paragraphs={[
          "Oklahoma City confronts a metabolic health reality that most cities try to hide. Oklahoma doesn't have the luxury of a 'wellness culture' veneer—no Erewhon, no Equinox, no farmers-market-as-social-status narrative. The numbers are plain: a 40% adult obesity rate, the fourth highest in the nation. And the honest question that this page exists to answer is: why hasn't anything worked, and what can actually fix it?",
          "The answer starts with infrastructure, not willpower. Oklahoma City sprawls across 621 square miles—the eighth-largest city by area in the country—with a Walk Score averaging below 30 in most residential zip codes. There is no functional public transit. The city was designed by and for the automobile, and two of America's most iconic drive-through restaurant brands—Sonic Drive-In (headquartered in OKC) and Braum's (headquartered in Tuttle, just west)—were born from this car-centric DNA. Eating in your car is not a convenience here; it's the default meal delivery mechanism.",
          "The economic cycle adds a unique stress dimension. Oklahoma City's economy is anchored by oil and gas—Devon Energy and the legacy of Chesapeake Energy dominate the downtown skyline. The boom-and-bust cycle of crude oil prices creates chronic financial anxiety that extends far beyond the rigs and into every supporting industry: real estate, construction, restaurants, and retail. When WTI drops below $50 and layoffs ripple through the energy sector, the cortisol response across the metro is measurable. Chronic financial stress drives the same metabolic cascade—elevated cortisol, increased visceral fat storage, impaired insulin sensitivity—that high-pressure white-collar jobs drive in coastal cities.",
          "Layer onto this the extreme weather stress unique to Tornado Alley. From March through June, OKC residents live with a baseline anxiety that most Americans never experience: the knowledge that an EF4 tornado could directly impact their home, their school, or their workplace on any given afternoon. The 2013 Moore tornado, the 2013 El Reno tornado, and the 2019 tornado outbreak are not distant memories—they are formative psychological events that have permanently elevated the stress baseline for hundreds of thousands of Oklahoma County residents.",
          "When you combine infrastructure-enforced car dependency, calorie-dense drive-through food culture, oil-price-driven financial stress, and tornado-season anxiety into a single metropolitan environment, you produce a population whose cortisol levels, insulin response, and appetite regulation are chronically impaired. At this physiological stage, the standard advice—eat less, move more—is not just inadequate, it's almost cruel. GLP-1 receptor agonists address the hormonal dysfunction that this environment has created, restoring the metabolic signaling that allows the body to regulate appetite and energy storage effectively."
        ]}
        citations={[
          "Oklahoma State Department of Health. (2025). <em>Oklahoma County Obesity and Chronic Disease Surveillance Report</em>.",
          "University of Oklahoma Health Sciences Center. (2024). <em>Economic Volatility, Chronic Stress, and Metabolic Health Outcomes in Energy-Dependent Oklahoma Communities</em>.",
          "CDC Behavioral Risk Factor Surveillance System. (2025). <em>State-Level Adult Obesity Prevalence Rankings</em>."
        ]}
      />

      <PatientArchetype
        archetype="The Devon Energy Geologist"
        quote="In 2020, oil went negative and I thought I was going to lose my house. In 2022, oil hit $120 and I worked 80-hour weeks. My cortisol has been through the roof for five years straight. I eat Braum's because it's fast, it's cheap, and it's there. I know what's happening to my body. I just couldn't find the time or the energy to fix it."
        details="<strong>Patient Profile:</strong> Travis, 38, Staff Geologist at Devon Energy, downtown OKC.<br/><br/><strong>The Challenge:</strong> Travis's career has been defined by the oil price rollercoaster. The pandemic crash, the post-pandemic boom, and the ongoing price volatility have created years of chronic financial and professional stress. His cortisol, self-tested through an at-home kit, was consistently elevated. Meals were dominated by what was fast and available—Sonic, Braum's, Raising Cane's—eaten at his desk or in his truck between well site visits. His Devon Energy Aetna plan denied Wegovy, requiring Step Therapy with Contrave first. The nearest OU Health endocrinologist had an 11-week wait.<br/><br/><strong>The Intervention:</strong> Travis completed the Telehealth FX intake from his laptop after reviewing well logs at 9 PM. An Oklahoma-licensed physician evaluated his metabolic profile asynchronously and prescribed compounded Tirzepatide within 16 hours. Cold-packed medication arrived at his Edmond home the next day. No Contrave trial. No 11-week wait. No more putting his health behind the next earnings call."
      />

      <InsuranceBreakdown
        title="Why Energy Sector and Federal Plans Both Block Access"
        text="Oklahoma City's economy rests on two pillars—oil and gas, and the federal government (Tinker AFB). Both sectors create distinct barriers to GLP-1 access."
        employers={[
          { name: "Devon Energy / Continental Resources / Oil & Gas", detail: "Energy sector self-funded plans frequently classify GLP-1 weight management as 'lifestyle' medicine. Devon's Aetna-administered plan requires Step Therapy (typically starting with Contrave or Orlistat) and documented comorbidities beyond BMI alone. During bust cycles, benefit packages are often quietly trimmed, with specialty pharmaceuticals among the first carve-outs." },
          { name: "Tinker Air Force Base (Largest Single-Site Employer)", detail: "Tinker employs over 26,000 military and civilian personnel. Active Duty face TRICARE formulary restrictions (BMI 32+ threshold). Civilian DoD employees are covered by FEHB plans that vary by carrier but commonly impose prior authorization and Step Therapy for GLP-1 medications. The base's sheer size means these restrictions affect a disproportionate share of Midwest City and Del City residents." },
          { name: "State of Oklahoma Employee Plans (OMES EGI)", detail: "State employees and OU system workers are covered through the Oklahoma Employees Group Insurance Division (OMES EGI). These plans have historically placed GLP-1 weight management on the highest specialty tier, requiring prior authorization with extensive documentation and a multi-month review process." }
        ]}
      />

      <CostComparisonTable
        title="What Weight Loss Actually Costs in OKC"
        localCompetitors={[
          { name: "Nichols Hills / Classen Curve Concierge", cost: "$600 - $1,000 / mo", consult: "Mandatory In-Person + Labs", access: "Branded Only / Waitlisted" },
          { name: "Midtown OKC Aesthetic Clinics", cost: "$400 - $750 / mo", consult: "Monthly Membership + Consult", access: "Mixed Compounding Quality" },
          { name: "OU Health Endocrinology", cost: "$125 Copay + Rx", consult: "8-12 Week New Patient Wait", access: "Formulary Restrictions / Prior Auth" },
          { name: "SSM Health (INTEGRIS) PCP", cost: "$40 Copay", consult: "4-6 Week Wait", access: "Step Therapy / Pharmacy Backorder" }
        ]}
        telehealthPrice="From $146 / mo"
      />

      <LocalTransitPain
        title="Bypass the Crossroads & OU Health Waitlists"
        transitText="OKC's 621-square-mile footprint is served by a freeway system where I-35, I-40, and I-44 converge—creating interchanges that are congested during rush hours and construction-plagued the rest of the time. Whether you're commuting from Edmond on I-35, driving in from Norman on I-35 South, navigating the I-235/I-44 interchange downtown, or heading to a doctor in the Health Sciences Center district, the car-dependent geography means a medical appointment is always a significant time commitment."
        hospitalText="<strong>OU Health</strong> (University of Oklahoma Medical Center) is the state's premier academic system, located in the Health Sciences Center district northeast of downtown. <strong>SSM Health</strong> (formerly INTEGRIS) and <strong>Mercy</strong> operate multiple facilities across the metro. But endocrinology wait times at OU Health average 8-12 weeks, and SSM Health metabolic clinics face similar strain. Your local <strong>Walmart</strong>, <strong>CVS</strong>, or <strong>Walgreens</strong> pharmacy has branded Wegovy on indefinite backorder."
      />

      <InteractiveFAQ
        faqs={[
          { q: "Oklahoma has one of the highest obesity rates in the country. Does that affect eligibility?", a: "No. Your eligibility is determined by your individual clinical profile, not state-level statistics. A physician evaluates your BMI, health history, and metabolic indicators. Oklahoma's high obesity rate actually underscores why accessible, efficient clinical pathways like Telehealth FX are critical for this population." },
          { q: "I work at Tinker AFB as a civilian. Will this appear on any government record?", a: "No. Telehealth FX is a private, self-pay medical service entirely separate from the DoD, FEHB, OPM, and any government health system. Your use of our platform is a private healthcare decision that does not interact with your federal employee records." },
          { q: "I eat at Sonic and Braum's multiple times a week. Do I need to change my diet for the medication to work?", a: "GLP-1 receptor agonists work by restoring hormonal signaling—specifically incretin response, gastric emptying, and hypothalamic appetite regulation. They are effective regardless of dietary composition. Many patients naturally gravitate toward smaller portions and less calorie-dense options as the medication recalibrates their appetite. No specific diet is required, though improved nutrition will enhance outcomes." },
          { q: "Do you deliver to Norman, Edmond, and Moore?", a: "Yes. We deliver to all residential addresses in Oklahoma County, Cleveland County (Norman), Canadian County (Yukon, Mustang), and all surrounding communities including Edmond, Moore, Midwest City, Del City, and Bethany." },
          { q: "Is this legal in Oklahoma?", a: "Yes. Telehealth FX operates in strict compliance with the Oklahoma Board of Medical Licensure and Supervision and Oklahoma statutes governing telemedicine. All prescribers treating Oklahoma patients hold active, unrestricted Oklahoma medical licenses." }
        ]}
      />

      <StateLegalFramework
        stateName="Oklahoma"
        boardName="Oklahoma Board of Medical Licensure and Supervision"
        text="Telehealth FX operates in strict compliance with the <strong>Oklahoma Board of Medical Licensure and Supervision</strong> and Oklahoma Statute Title 59 § 478.1 (Oklahoma's telemedicine provisions). Under current Oklahoma law, a physician-patient relationship may be established via telemedicine technologies, including asynchronous modalities, when the treating physician holds an active Oklahoma medical license. Oklahoma has progressively modernized its telehealth framework, and current regulations permit prescribing non-controlled medications via telehealth without a mandatory in-person encounter. All Telehealth FX prescribers are individually verified through the Oklahoma Board's license verification system."
      />

      <DeliveryGridMap
        cityName="Oklahoma City"
        mapQuery="Oklahoma City, OK"
        coordinates="35.4676° N, 97.5164° W"
        counties="Oklahoma County, Cleveland County, Canadian County, Grady County"
        neighborhoods={['Bricktown', 'Midtown', 'Nichols Hills', 'Edmond', 'Norman', 'Moore', 'Yukon', 'Mustang', 'Midwest City', 'Del City']}
      />

      <FinalCTA stateName="Oklahoma" />

    </div>
  );
}
