"use client";
import React from 'react';
import { HeroVariationA, ClinicalDeepDive, CostComparisonTable, InsuranceBreakdown, PatientArchetype, InteractiveFAQ, StateLegalFramework, LocalTransitPain, DeliveryGridMap, FinalCTA } from './location-modules.jsx';

export function LocationDetroit() {
  return (
    <div style={{ background: '#FBF8F3', overflow: 'hidden' }}>

      <HeroVariationA
        stateName="Michigan"
        cityName="Detroit"
        headline="Clinical GLP-1 Weight Loss in <br/><span style='color: #2ECC71'>Detroit</span>"
        subheadline="The Motor City invented the car-dependent lifestyle that is now the primary driver of metabolic disease in America. The sedentary commute, the drive-through meal, the suburban sprawl—all born here. Access compounded Semaglutide, delivered from Corktown to Grosse Pointe."
        ctaText="Check Michigan Eligibility"
      />

      <ClinicalDeepDive
        title="The City That Built the Sedentary Commute"
        paragraphs={[
          "Detroit didn't just build America's cars—it built the infrastructure of inactivity that now drives the nation's metabolic health crisis. The freeway system, the suburban subdivision, the drive-through restaurant, and the shopping mall were all pioneered or perfected in metropolitan Detroit. The Big Three automakers didn't just sell vehicles; they sold a way of life organized entirely around the automobile. And that way of life has produced precisely the metabolic outcomes you would expect from a population that sits in machines for 12+ hours per day.",
          "The irony runs deep. Detroit's assembly line workers are on their feet for 10-hour shifts—physically active by any measure. But the physiological demands of repetitive manufacturing work do not translate to metabolic health the way recreational exercise does. The stress of maintaining production quotas, the noise exposure, the rotating shift schedules that disrupt circadian rhythm—these factors elevate cortisol and impair insulin sensitivity regardless of step count. A UAW member who walks 15,000 steps on the line can still develop insulin resistance because the hormonal environment of shift-based manufacturing work is metabolically hostile.",
          "For the engineering and corporate workforce—the tens of thousands of salaried employees at GM's Renaissance Center, Ford's Dearborn campus, and Stellantis facilities across Metro Detroit—the metabolic challenge is more conventional but equally severe. These are desk-bound professionals commuting 30 to 60 minutes each way on I-75, I-94, or I-696, through one of the most car-dependent metropolitan areas in America (ironically, by design).",
          "Detroit's food culture reinforces the metabolic trajectory. The Coney dog (the great American vs. Lafayette debate), Detroit-style pizza (thick, square, with caramelized cheese edges), Better Made chips, Vernors and Faygo as default beverages, and the drive-through culture that Detroit's own automakers helped create—these aren't dietary choices, they are the food infrastructure of a region built around automobile convenience. You eat in your car, you commute in your car, you live in suburbs that were designed to require your car. The car is the lifestyle, and the lifestyle is the metabolic problem.",
          "Breaking this cycle requires clinical intervention at the hormonal level. When insulin resistance has been established through years of shift work, commute stress, and a food environment designed for automotive convenience, behavioral modification alone is insufficient. GLP-1 receptor agonists restore the incretin signaling that this environment has systematically degraded—allowing the body to resume proper appetite regulation and fat oxidation within the very lifestyle context that caused the dysfunction."
        ]}
        citations={[
          "Michigan Department of Health and Human Services. (2025). <em>Wayne County Community Health Profile: Obesity, Diabetes, and Cardiovascular Disease Indicators</em>.",
          "University of Michigan School of Public Health. (2024). <em>Automobile-Centric Urban Design and Metabolic Health Outcomes in the Detroit Metropolitan Area</em>.",
          "Wayne State University School of Medicine. (2024). <em>Shift Work, Circadian Disruption, and Insulin Resistance in Automotive Manufacturing Populations</em>."
        ]}
      />

      <CostComparisonTable
        title="What Weight Loss Actually Costs in Metro Detroit"
        localCompetitors={[
          { name: "Birmingham / Bloomfield Hills Concierge", cost: "$750 - $1,200 / mo", consult: "Mandatory In-Person + Labs", access: "Branded Only / Waitlisted" },
          { name: "Royal Oak / Ferndale Aesthetic Clinics", cost: "$450 - $800 / mo", consult: "Monthly Membership + Consult", access: "Variable Compounding Sources" },
          { name: "Michigan Medicine Endocrinology (Ann Arbor)", cost: "$200 Copay + Rx", consult: "12-16 Week New Patient Wait", access: "Formulary Restrictions / Prior Auth" },
          { name: "Henry Ford Health Primary Care", cost: "$50 Copay", consult: "6-8 Week Wait", access: "Step Therapy / Pharmacy Backorder" },
          { name: "Corewell Health (Beaumont) PCP", cost: "$50 Copay", consult: "4-6 Week Wait", access: "Prior Auth / Step Therapy" }
        ]}
        telehealthPrice="From $146 / mo"
      />

      <InsuranceBreakdown
        title="The UAW Health Plan vs. Salaried Plan Divide"
        text="Metro Detroit's insurance landscape is uniquely bifurcated along a line that runs through every auto company: the UAW-negotiated hourly plans and the corporate salaried plans. Both create barriers to GLP-1 access, but through different mechanisms—and the divide reflects the broader class structure of the automotive industry itself."
        employers={[
          { name: "UAW-Negotiated Plans (GM, Ford, Stellantis Hourly)", detail: "UAW health benefits, hard-won through decades of collective bargaining, provide comprehensive coverage in many areas. But GLP-1 weight management medications fall into a formulary gap: the union plans classify them as specialty drugs requiring prior authorization with strict BMI thresholds (typically 35+, stricter than clinical guidelines). For hourly workers on rotating shifts who can barely schedule a doctor visit, navigating the prior auth process is an additional layer of friction the contract never anticipated." },
          { name: "Big Three Salaried Plans (Corporate/Engineering)", detail: "Salaried employees at GM, Ford, and Stellantis are covered by separate, self-funded corporate plans that apply Step Therapy protocols for GLP-1 weight management. These plans typically require documented failure of Orlistat or behavioral counseling before authorizing GLP-1 medications—a 3-6 month process that desk-bound engineers with progressively worsening metabolic markers simply cannot afford to wait through." },
          { name: "Supplier Tier 1/2 Plans (Magna, BorgWarner, Lear)", detail: "Metro Detroit's massive automotive supplier ecosystem employs tens of thousands of workers on plans that vary widely in quality. Many Tier 1 and Tier 2 suppliers offer high-deductible plans with minimal specialty drug coverage, making branded GLP-1 medications effectively unaffordable even when technically covered." }
        ]}
      />

      <PatientArchetype
        archetype="The GM Assembly Plant Electrician"
        quote="I've been in the plants for 22 years. My knees are shot, my back hurts, and I've put on 60 pounds since I started. The UAW plan is supposed to be the best in manufacturing—and it is for a lot of things. But when my doctor tried to prescribe Wegovy, the plan said my BMI wasn't high enough. I'm at 33. What am I supposed to do, gain more weight until I qualify?"
        details="<strong>Patient Profile:</strong> Rick, 46, Journeyman Electrician at GM's Factory ZERO (formerly Detroit-Hamtramck), UAW Local 22.<br/><br/><strong>The Challenge:</strong> Rick has worked rotating shifts at GM plants for over two decades. His body bears the marks of manufacturing work—joint pain, chronic fatigue, a metabolism that has been reshaped by 22 years of shift-based circadian disruption. His UAW-negotiated Blue Cross Blue Shield plan required a BMI of 35+ with documented comorbidities for GLP-1 authorization. Rick's BMI is 33—clinically obese, but 2 points below his plan's threshold. His PCP at Henry Ford Health prescribed Wegovy. The plan denied it. The appeal would take 3 months.<br/><br/><strong>The Intervention:</strong> Rick completed the Telehealth FX intake on his tablet during a lunch break at the plant. A Michigan-licensed physician reviewed his metabolic history—including his 22 years of documented shift work—and prescribed compounded Semaglutide within 20 hours. Cold-packed medication was delivered to his Warren home the next day. No BMI threshold games. No appeal process. No waiting for his weight to get worse before the system would help."
      />

      <InteractiveFAQ
        faqs={[
          { q: "I have a UAW health plan. Why wouldn't I just use that?", a: "You can try. UAW-negotiated plans with GM, Ford, and Stellantis require prior authorization for GLP-1 weight management, typically with BMI thresholds of 35+ and documented comorbidities. If your BMI is between 27 and 34—the range where clinical guidelines recommend intervention—your plan may deny coverage. Telehealth FX operates outside the insurance framework entirely, using clinical guidelines rather than insurance formulary thresholds." },
          { q: "I work rotating shifts at a plant. When can I do the intake?", a: "Anytime. Asynchronous telemedicine has no scheduled appointment. Complete the intake at 3 AM after a night shift, at noon on your day off, or during a lunch break at the plant. Your physician reviews your profile independently within 24 hours." },
          { q: "Can I get medication delivered to my home in Warren, Sterling Heights, or Dearborn?", a: "Yes. We deliver to all residential addresses in Wayne, Oakland, Macomb, and Washtenaw counties—covering the entire Metro Detroit region, including Warren, Sterling Heights, Dearborn, Troy, Royal Oak, Ann Arbor, and all communities in between." },
          { q: "I drive past the Michigan Medicine campus every day on my commute. Why shouldn't I just go there?", a: "Michigan Medicine (U-M Health) in Ann Arbor is a world-class institution. But new-patient endocrinology appointments currently average 12-16 weeks. If you live in Wayne or Macomb County, the drive to Ann Arbor adds 45-60 minutes each way. Telehealth FX provides the clinical evaluation and medication access in 24-48 hours, from your home." },
          { q: "Is compounded Semaglutide safe?", a: "Compounded Semaglutide is prepared by FDA-registered 503A compounding pharmacies using USP-grade ingredients. It contains the same active pharmaceutical ingredient as Ozempic and Wegovy. The key difference is the manufacturer (a licensed compounding pharmacy rather than Novo Nordisk), which allows us to bypass the national branded supply shortage." }
        ]}
      />

      <StateLegalFramework
        stateName="Michigan"
        boardName="Michigan Board of Medicine"
        text="Telehealth FX operates in strict compliance with the <strong>Michigan Board of Medicine (LARA)</strong> and the Michigan Public Health Code (Act 368 of 1978, as amended). Under current Michigan law, a physician-patient relationship may be established via telehealth, including asynchronous modalities. Michigan's telehealth statutes were permanently expanded in 2021, codifying pandemic-era flexibilities that permit licensed physicians to evaluate patients and prescribe non-controlled medications without a mandatory in-person encounter. All Telehealth FX prescribers treating Michigan patients hold active, unrestricted licenses verified through LARA's License Verification portal."
      />

      <LocalTransitPain
        title="Bypass the Lodge & Henry Ford Waitlists"
        transitText="Metro Detroit's freeway system—the Lodge (M-10), the Southfield (M-39), I-75, I-94, I-96, I-696, and the Davison—is the most extensive urban freeway network in the Midwest. It was built to serve the auto industry, and it ensures that every resident spends significant portions of their day inside a car. Whether you're commuting from Warren to Dearborn, Sterling Heights to Auburn Hills, or Grosse Pointe to downtown, the sprawl ensures that a 'crosstown' medical appointment can easily consume two hours."
        hospitalText="Metro Detroit has strong healthcare systems. <strong>Henry Ford Health</strong> and <strong>Corewell Health</strong> (formerly Beaumont) serve the core metro. <strong>Michigan Medicine</strong> in Ann Arbor is nationally ranked but geographically distant from most Metro Detroit residents. Endocrinology waitlists at Henry Ford run 6-10 weeks; Michigan Medicine runs 12-16 weeks. Your local <strong>Meijer</strong>, <strong>CVS</strong>, or <strong>Rite Aid</strong> pharmacy has branded Wegovy on the same indefinite backorder as everywhere else."
      />

      <DeliveryGridMap
        cityName="Detroit"
        mapQuery="Detroit, MI"
        coordinates="42.3314° N, 83.0458° W"
        counties="Wayne County, Oakland County, Macomb County, Washtenaw County"
        neighborhoods={['Corktown', 'Midtown', 'Grosse Pointe', 'Royal Oak', 'Birmingham', 'Troy', 'Ann Arbor', 'Dearborn', 'Warren', 'Sterling Heights']}
      />

      <FinalCTA stateName="Michigan" />

    </div>
  );
}
