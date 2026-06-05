import React from 'react';
import Head from 'next/head';
import { HeroVariationA, ClinicalDeepDive, CostComparisonTable, InsuranceBreakdown, PatientArchetype, LocalTransitPain, DeliveryGridMap, InteractiveFAQ, FinalCTA } from './weight-loss-location-modules.jsx';

export function WeightLossMiami() {
  return (
    <>
      <Head>
        <title>Medical Weight Loss Clinic Miami | Semaglutide & GLP-1 | Telehealth FX</title>
        <meta name="description" content="Looking for a medical weight loss clinic in Miami? Skip the Brickell traffic and 300% medspa markups. Get Semaglutide delivered overnight via Telehealth FX." />
      </Head>

      <HeroVariationA 
        stateName="Florida"
        cityName="Miami"
        headline="Medical Weight Loss in <span style='color: var(--brand)'>Miami, FL</span>"
        subheadline="Skip the expensive South Beach medspas and the Brickell traffic. Access pure, compounded Semaglutide and Tirzepatide prescribed online and delivered overnight to your door in Miami-Dade."
        ctaText="Check Miami Eligibility"
      />

      <LocalTransitPain 
        title="Why Miami Residents Are Abandoning Local Weight Loss Clinics"
        transitText="Driving to a brick-and-mortar medical weight loss clinic in Miami is a massive friction point. Between the I-95 gridlock, finding parking in Coral Gables or Brickell, and sitting in a waiting room, a simple 15-minute consultation turns into a 3-hour ordeal."
        hospitalText="Worse, the local medspas and anti-aging clinics in South Florida are notorious for marking up GLP-1 medications by 300% or more to cover their expensive commercial real estate leases. By utilizing Telehealth FX's asynchronous model, you bypass the waiting room and the markup entirely."
      />

      <CostComparisonTable 
        title="Miami Medspas vs. Telehealth FX"
        localCompetitors={[
          { name: "Brickell Anti-Aging Medspas", cost: "$800 - $1,200/mo", consult: "In-Person Required", access: "Weekly Office Visits" },
          { name: "Coral Gables Weight Loss Clinics", cost: "$600 - $900/mo", consult: "In-Person Required", access: "In-Office Injections" },
          { name: "Primary Care (No Insurance)", cost: "$1,300+/mo (Retail)", consult: "In-Person + Labs", access: "Local Pharmacy Backorders" }
        ]}
        telehealthPrice="From $297/mo"
      />

      <ClinicalDeepDive 
        title="How GLP-1 Medications Actually Work"
        paragraphs={[
          "GLP-1 receptor agonists (like Semaglutide and Tirzepatide) are fundamentally changing metabolic medicine. Unlike stimulant-based phentermine that forces your heart rate up, GLP-1s work by optimizing your body's natural incretin system.",
          "These peptides delay gastric emptying (keeping you full longer), regulate insulin secretion to prevent sugar crashes, and—most importantly—communicate directly with the brain's hypothalamus to silence 'food noise' and cravings.",
          "Whether you are struggling to shed the last 15 pounds for beach season or managing long-term metabolic syndrome, pure, compounded GLP-1s offer a scientifically proven pathway to sustainable body composition changes."
        ]}
        citations={[
          "Wilding, J. P., et al. (2021). Once-Weekly Semaglutide in Adults with Overweight or Obesity. <em>The New England Journal of Medicine</em>.",
          "Jastreboff, A. M., et al. (2022). Tirzepatide Once Weekly for the Treatment of Obesity. <em>The New England Journal of Medicine</em>."
        ]}
      />

      <PatientArchetype 
        title="Miami Patient Profile"
        archetype="The High-Performance Professional"
        quote="I work 60 hours a week in Brickell and travel constantly for client meetings. I didn't have time to go sit in a waiting room every Tuesday just to get a shot."
        details="<p><strong>The Challenge:</strong> Constant business dinners, high cortisol from work stress, and zero time for mid-day doctor appointments led to a 25lb weight gain over two years.</p><p><strong>The Telehealth Protocol:</strong> By utilizing Telehealth FX, this patient completed their intake at 11 PM on a Sunday. They were approved within 24 hours, and their medication arrived at their condo with cold packs on Wednesday. No traffic, no waiting rooms, and complete discretion.</p>"
      />

      <InsuranceBreakdown 
        title="Use Your Pre-Tax HSA/FSA in Florida"
        text="Don't wait for your insurance provider to deny your prior authorization. Telehealth FX's clinical weight loss programs are 100% eligible for FSA (Flexible Spending Account) and HSA (Health Savings Account) reimbursement. You can use your pre-tax dollars to cover your consultation and your medication."
      />

      <DeliveryGridMap 
        cityName="Miami"
        mapQuery="Miami, FL"
        coordinates="25.7617° N, 80.1918° W"
        counties="Miami-Dade County, Broward County, Palm Beach County"
        neighborhoods={["Brickell", "Coral Gables", "South Beach", "Coconut Grove", "Aventura", "Wynwood", "Pinecrest", "Kendall"]}
      />

      <InteractiveFAQ 
        faqs={[
          {
            q: "Is compounded Semaglutide legal in Florida?",
            a: "Yes. Telehealth FX partners exclusively with highly regulated 503A compounding pharmacies that hold valid licenses to ship directly to patients in the state of Florida."
          },
          {
            q: "Do I have to do bloodwork at a Miami lab?",
            a: "Depending on your medical history, your provider may require recent metabolic labs. If needed, we provide requisitions that can be fulfilled at any local LabCorp or Quest Diagnostics in Miami-Dade."
          },
          {
            q: "How long does shipping to Miami take?",
            a: "Once your prescription is approved by our medical team, the compounding pharmacy typically processes and cold-ships the medication via overnight or 2-day delivery to ensure the peptides remain temperature stable upon arrival at your Miami address."
          }
        ]}
      />

      <FinalCTA stateName="Florida" cityName="Miami" />
    </>
  );
}
