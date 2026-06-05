import React from 'react';
import Head from 'next/head';
import { HeroVariationA, ClinicalDeepDive, CostComparisonTable, InsuranceBreakdown, PatientArchetype, LocalTransitPain, DeliveryGridMap, InteractiveFAQ, FinalCTA } from './weight-loss-location-modules.jsx';

export function WeightLossChicago() {
  return (
    <>
      <Head>
        <title>Medical Weight Loss Clinic Chicago | Semaglutide & GLP-1 | Telehealth FX</title>
        <meta name="description" content="Looking for a medical weight loss clinic in Chicago? Skip the traffic and 300% medspa markups. Get Semaglutide delivered overnight via Telehealth FX." />
      </Head>

      <HeroVariationA 
        stateName="Illinois"
        cityName="Chicago"
        headline="Medical Weight Loss in <span style='color: var(--brand)'>Chicago, IL</span>"
        subheadline="Skip the expensive local medspas and the traffic. Access pure, compounded Semaglutide and Tirzepatide prescribed online and delivered overnight to your door in Chicago."
        ctaText="Check Chicago Eligibility"
      />

      <LocalTransitPain 
        title="Why Chicago Residents Are Abandoning Local Weight Loss Clinics"
        transitText="Driving to a brick-and-mortar medical weight loss clinic in Chicago is a massive friction point. Between the Kennedy Expressway gridlock, finding parking in River North or the Gold Coast, and sitting in a waiting room, a simple consultation turns into a 3-hour ordeal."
        hospitalText="Worse, the local medspas and anti-aging clinics are notorious for marking up GLP-1 medications by 300% or more to cover their expensive commercial real estate leases. By utilizing Telehealth FX's asynchronous model, you bypass the waiting room and the markup entirely."
      />

      <CostComparisonTable 
        title="Chicago Medspas vs. Telehealth FX"
        localCompetitors={[{"name":"Gold Coast Anti-Aging Medspas","cost":"$800 - $1,500/mo","consult":"In-Person Required","access":"Weekly Office Visits"},{"name":"River North Clinics","cost":"$700 - $1,100/mo","consult":"In-Person Required","access":"In-Office Injections"}]}
        telehealthPrice="From $297/mo"
      />

      <ClinicalDeepDive 
        title="How GLP-1 Medications Actually Work"
        paragraphs={[
          "GLP-1 receptor agonists (like Semaglutide and Tirzepatide) are fundamentally changing metabolic medicine. Unlike stimulant-based phentermine that forces your heart rate up, GLP-1s work by optimizing your body's natural incretin system.",
          "These peptides delay gastric emptying (keeping you full longer), regulate insulin secretion to prevent sugar crashes, and—most importantly—communicate directly with the brain's hypothalamus to silence 'food noise' and cravings.",
          "Whether you are struggling to shed the last 15 pounds or managing long-term metabolic syndrome, pure, compounded GLP-1s offer a scientifically proven pathway to sustainable body composition changes."
        ]}
        citations={[
          "Wilding, J. P., et al. (2021). Once-Weekly Semaglutide in Adults with Overweight or Obesity. <em>The New England Journal of Medicine</em>.",
          "Jastreboff, A. M., et al. (2022). Tirzepatide Once Weekly for the Treatment of Obesity. <em>The New England Journal of Medicine</em>."
        ]}
      />

      <PatientArchetype 
        title="Chicago Patient Profile"
        archetype="The Finance Director"
        quote="I work 60 hours a week in The Loop. I didn't have time to go sit in a Gold Coast waiting room every Tuesday just to get a shot."
        details='<p><strong>The Challenge:</strong> Constant business dinners, high cortisol from work stress, and zero time for mid-day doctor appointments led to a 25lb weight gain over two years.</p><p><strong>The Telehealth Protocol:</strong> By utilizing Telehealth FX, this patient completed their intake at 11 PM on a Sunday. They were approved within 24 hours, and their medication arrived at their condo with cold packs on Wednesday. No traffic, no waiting rooms, and complete discretion.</p>'
      />

      <InsuranceBreakdown 
        title="Use Your Pre-Tax HSA/FSA in Illinois"
        text="Don't wait for your insurance provider to deny your prior authorization. Telehealth FX's clinical weight loss programs are 100% eligible for FSA (Flexible Spending Account) and HSA (Health Savings Account) reimbursement. You can use your pre-tax dollars to cover your consultation and your medication."
      />

      <DeliveryGridMap 
        cityName="Chicago"
        mapQuery="Chicago, Illinois"
        coordinates="41.8781° N, 87.6298° W"
        counties="Cook County, DuPage County, Lake County"
        neighborhoods={["The Loop","River North","Lincoln Park","West Loop","Wicker Park","Gold Coast","Lakeview","South Loop"]}
      />

      <InteractiveFAQ 
        faqs={[
          {
            q: "Is compounded Semaglutide legal in Illinois?",
            a: "Yes. Telehealth FX partners exclusively with highly regulated 503A compounding pharmacies that hold valid licenses to ship directly to patients in the state of Illinois."
          },
          {
            q: "Do I have to do bloodwork at a local lab?",
            a: "Depending on your medical history, your provider may require recent metabolic labs. If needed, we provide requisitions that can be fulfilled at any local LabCorp or Quest Diagnostics in Chicago."
          },
          {
            q: "How long does shipping to Chicago take?",
            a: "Once your prescription is approved by our medical team, the compounding pharmacy typically processes and cold-ships the medication via overnight or 2-day delivery to ensure the peptides remain temperature stable upon arrival at your address."
          }
        ]}
      />

      <FinalCTA stateName="Illinois" cityName="Chicago" />
    </>
  );
}
