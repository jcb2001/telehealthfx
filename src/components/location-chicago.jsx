"use client";
import React from 'react';
import { HeroVariationB, StateLegalFramework, CostComparisonTable, ClinicalDeepDive, LocalTransitPain, PatientArchetype, InteractiveFAQ, DeliveryGridMap, FinalCTA } from './location-modules.jsx';

export function LocationChicago() {
  return (
    <div style={{ background: '#FBF8F3', overflow: 'hidden' }}>
      
      <HeroVariationB
        stateName="Illinois"
        cityName="Chicago"
        headline="Clinical GLP-1 Weight Loss in <span style='color: #2ECC71'>Chicago</span>"
        subheadline="Skip the Gold Coast clinic markups and the months-long waitlists at Northwestern Memorial. Access quality-verified compounded Semaglutide and Tirzepatide, cold-shipped to your door anywhere from the Loop to the North Shore."
        dataPoint1="Walgreens is headquartered 25 miles north in Deerfield, yet its own Chicago-area locations cannot reliably stock branded Wegovy or Zepbound due to national supply chain failures."
        dataPoint2="Our decentralized 503A compounding pharmacy network bypasses this irony entirely, ensuring uninterrupted medication access for Cook County residents."
      />

      <StateLegalFramework
        stateName="Illinois"
        boardName="Illinois Department of Financial and Professional Regulation"
        text="Telehealth FX operates in strict compliance with the <strong>Illinois Department of Financial and Professional Regulation (IDFPR)</strong> and the provisions of the Illinois Telehealth Act. Under current Illinois statute, a valid physician-patient relationship may be established via asynchronous, store-and-forward technology. This means an in-person physical exam is <em>not</em> a prerequisite for prescribing compounded medications, provided the treating physician holds an active Illinois medical license and exercises appropriate clinical judgment. All Telehealth FX prescribers are individually credentialed and verified through IDFPR before they are authorized to evaluate Illinois patients on our platform."
      />

      <ClinicalDeepDive
        title="The 'Chiberia' Metabolic Trap"
        paragraphs={[
          "Chicago's metabolic health landscape is shaped by one of the most brutal climatic environments of any major American city. When polar vortex events drive wind chills to negative 30°F along the lakefront, outdoor physical activity isn't just uncomfortable—it becomes medically dangerous. For roughly five months of the year, Chicagoans are effectively forced into indoor confinement, creating an annual cycle of severe seasonal sedentary behavior that compounds year after year.",
          "Layer onto this climate the city's legendary comfort food culture. Deep-dish pizza, Italian beef sandwiches, Chicago-style hot dogs, and a thriving craft beer scene aren't just occasional indulgences—they form the social and cultural fabric of daily life in neighborhoods from Pilsen to Lincoln Park. These calorie-dense, high-glycemic staples, consumed regularly during months of enforced indoor living, create the precise metabolic conditions for chronic hyperinsulinemia.",
          "The physiological result is predictable: after several winters of this cycle, the pancreas is chronically overstimulated, baseline insulin levels remain elevated, and the body enters a state of persistent insulin resistance. At this stage, the standard advice to 'eat less and move more' is not just unhelpful—it is clinically inadequate. The insulin signaling pathway itself is broken. GLP-1 receptor agonists address this dysfunction at the cellular level by restoring proper incretin response, slowing gastric emptying, and re-sensitizing peripheral tissues to insulin.",
          "This is not a willpower problem. It is an endocrine problem exacerbated by geography, and it requires a clinical-grade pharmaceutical intervention to resolve."
        ]}
        citations={[
          "Illinois Department of Public Health. (2025). <em>Cook County Adult Obesity and Metabolic Syndrome Surveillance Report</em>.",
          "Northwestern University Feinberg School of Medicine. (2024). <em>Seasonal Variation in Physical Activity and Its Correlation with Insulin Sensitivity in Northern Urban Populations</em>.",
          "American Diabetes Association. (2024). <em>Standards of Care in Diabetes — Pharmacologic Approaches to Glycemic Treatment</em>."
        ]}
      />

      <CostComparisonTable
        title="What Weight Loss Actually Costs in Chicago"
        localCompetitors={[
          { name: "Gold Coast Concierge Clinics", cost: "$800 - $1,200 / mo", consult: "Mandatory In-Person + Labs", access: "Branded Only / Frequently Backordered" },
          { name: "River North Aesthetic MedSpas", cost: "$600 - $900 / mo", consult: "Mandatory Consultation Fee", access: "Requires Annual 'Membership'" },
          { name: "Suburban Endocrinology (Naperville/Schaumburg)", cost: "$200 Copay + Rx", consult: "8-12 Week Wait for Appointment", access: "Insurance Denials / Prior Auth Maze" },
          { name: "Primary Care via Rush or UChicago", cost: "$50 Copay", consult: "3-6 Month Specialist Referral Wait", access: "Formulary Restrictions / Quantity Limits" }
        ]}
        telehealthPrice="From $146 / mo"
      />

      <LocalTransitPain
        title="Bypass the Kennedy & Northwestern Waitlists"
        transitText="Whether you're white-knuckling it on the Kennedy Expressway (I-90/94), crawling down the Dan Ryan during a Bears game, or stuck on the Eisenhower at the Circle Interchange, the idea of spending an hour fighting Chicago traffic just to sit in a doctor's waiting room is a model that belongs in the last century."
        hospitalText="And even if you do manage to get through to a metabolic specialist at <strong>Northwestern Memorial</strong>, <strong>Rush University Medical Center</strong>, or <strong>University of Chicago Medicine</strong>, the wait for a new patient appointment can stretch past 12 weeks. Meanwhile, trying to fill a branded Wegovy script at a local <strong>Walgreens</strong> or <strong>Jewel-Osco</strong> pharmacy is an exercise in futility—the medications are on indefinite national backorder."
      />

      <PatientArchetype
        archetype="The O'Hare Operations Supervisor"
        quote="I work rotating shifts at O'Hare. There is no version of reality where I can get to a Gold Coast doctor during business hours. My body doesn't operate on a 9-to-5, and my healthcare shouldn't either."
        details="<strong>Patient Profile:</strong> Marcus, 38, Operations Supervisor at O'Hare International Airport.<br/><br/><strong>The Challenge:</strong> Marcus works a rotating schedule of days and overnights. His circadian rhythm is perpetually disrupted, which clinical research directly links to elevated ghrelin (the hunger hormone) and suppressed leptin (the satiety hormone). Grabbing meals from airport concession stands at 2 AM compounded the problem. His employer-provided BCBS plan denied Wegovy, requiring a Step Therapy protocol starting with Metformin—a drug not indicated for his condition.<br/><br/><strong>The Intervention:</strong> Marcus completed the Telehealth FX intake on his phone during a break. An Illinois-licensed physician reviewed his profile asynchronously and prescribed compounded Semaglutide. Cold-packed medication was delivered to his home in Schaumburg within 48 hours. No commute. No waiting room. No prior authorization battle."
      />

      <InteractiveFAQ
        faqs={[
          { q: "How is this different from the GLP-1 programs advertised on the CTA?", a: "Many advertisements you see on CTA trains and buses are from telemedicine companies that use generic questionnaires and offer little to no physician oversight. Telehealth FX provides a comprehensive, asynchronous clinical intake reviewed by an individually credentialed, Illinois-licensed physician—not an algorithm. Your prescriber is a real doctor, verified through IDFPR." },
          { q: "Can I get my medication delivered to my office in the Loop?", a: "Yes. Our 503A pharmacy partners ship via overnight courier with insulated cold-packs. You can have your medication delivered to any residential or commercial address in Cook County, including Loop office buildings with mailrooms." },
          { q: "What if I'm currently on a Northwestern or Rush waitlist?", a: "You can begin your Telehealth FX evaluation immediately, without needing to cancel your existing referral. Many patients use our service to bridge the gap while waiting for a specialist appointment, and some choose to continue with us permanently due to the convenience and cost savings." },
          { q: "Is compounded Semaglutide the same as branded Ozempic?", a: "Compounded Semaglutide contains the same active pharmaceutical ingredient as Ozempic and Wegovy. It is prepared by FDA-registered 503A compounding pharmacies using USP-grade ingredients. The key difference is that it is not manufactured by Novo Nordisk, which allows us to bypass the brand-name supply shortage entirely." },
          { q: "Do you accept insurance?", a: "We do not bill insurance directly, which is actually the key advantage. By operating outside the insurance framework, we eliminate prior authorization delays, step therapy requirements, and formulary restrictions. However, your Telehealth FX costs are fully eligible for payment via FSA or HSA pre-tax funds." }
        ]}
      />

      <DeliveryGridMap
        cityName="Chicago"
        mapQuery="Chicago, IL"
        coordinates="41.8781° N, 87.6298° W"
        counties="Cook County, DuPage County, Lake County, Will County, Kane County"
        neighborhoods={['The Loop', 'Lincoln Park', 'Lakeview', 'Wicker Park', 'Gold Coast', 'River North', 'Naperville', 'Evanston', 'Oak Park', 'Schaumburg']}
      />

      <FinalCTA stateName="Illinois" />

    </div>
  );
}
