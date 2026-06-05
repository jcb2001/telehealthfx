import React from 'react';
import Head from 'next/head';
import { HeroVariationA, ClinicalDeepDive, CostComparisonTable, InsuranceBreakdown, PatientArchetype, LocalTransitPain, DeliveryGridMap, InteractiveFAQ, FinalCTA } from './weight-loss-location-modules.jsx';

export function WeightLossNewYorkCity() {
  return (
    <>
      <Head>
        <title>Medical Weight Loss Clinic New York City | Semaglutide & GLP-1 | Telehealth FX</title>
        <meta name="description" content="Looking for a medical weight loss clinic in New York City? Skip the traffic and 300% medspa markups. Get Semaglutide delivered overnight via Telehealth FX." />
      </Head>

      <HeroVariationA 
        stateName="New York"
        cityName="New York City"
        headline="Medical Weight Loss in <span style='color: var(--brand)'>New York City, NY</span>"
        subheadline="Skip the expensive local medspas and the traffic. Access pure, compounded Semaglutide and Tirzepatide prescribed online and delivered overnight to your door in New York City."
        ctaText="Check New York City Eligibility"
      />

      <LocalTransitPain 
        title="Why New York City Residents Are Abandoning Local Weight Loss Clinics"
        transitText="Taking the subway or a cab to a brick-and-mortar medical weight loss clinic in Manhattan is a massive friction point. Between the Midtown gridlock, navigating busy waiting rooms, and taking time out of the workday, a simple 15-minute consultation turns into an expensive ordeal."
        hospitalText="Worse, the local medspas and anti-aging clinics are notorious for marking up GLP-1 medications by 300% or more to cover their expensive commercial real estate leases. By utilizing Telehealth FX's asynchronous model, you bypass the waiting room and the markup entirely."
      />

      <CostComparisonTable 
        title="New York City Medspas vs. Telehealth FX"
        localCompetitors={[{"name":"Upper East Side Concierge Clinics","cost":"$1,200 - $2,000/mo","consult":"In-Person Required","access":"Weekly Office Visits"},{"name":"SoHo Wellness Centers","cost":"$800 - $1,200/mo","consult":"In-Person Required","access":"In-Office Injections"}]}
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
        title="New York City Patient Profile"
        archetype="The Wall Street Executive"
        quote="I work 80 hours a week in FiDi. I didn't have time to go sit in an Upper East Side waiting room every Tuesday just to get a shot."
        details='<p><strong>The Challenge:</strong> Constant client dinners, high cortisol from work stress, and zero time for mid-day doctor appointments led to a 25lb weight gain.</p><p><strong>The Telehealth Protocol:</strong> By utilizing Telehealth FX, this patient completed their intake at 11 PM on a Sunday. They were approved within 24 hours, and their medication arrived at their doorman building with cold packs on Wednesday. No subway rides, no waiting rooms, and complete discretion.</p>'
      />

      <InsuranceBreakdown 
        title="Use Your Pre-Tax HSA/FSA in New York"
        text="Don't wait for your insurance provider to deny your prior authorization. Telehealth FX's clinical weight loss programs are 100% eligible for FSA (Flexible Spending Account) and HSA (Health Savings Account) reimbursement. You can use your pre-tax dollars to cover your consultation and your medication."
      />

      <DeliveryGridMap 
        cityName="New York City"
        mapQuery="New York City, New York"
        coordinates="40.7128° N, 74.0060° W"
        counties="New York County, Kings County, Queens County, Bronx County, Richmond County"
        neighborhoods={["Manhattan","Brooklyn","Queens","The Bronx","Staten Island","Upper East Side","Tribeca","Williamsburg"]}
      />

      <InteractiveFAQ 
        faqs={[
          {
            q: "Is compounded Semaglutide legal in New York?",
            a: "Yes. Telehealth FX partners exclusively with highly regulated 503A compounding pharmacies that hold valid licenses to ship directly to patients in the state of New York."
          },
          {
            q: "Do I have to do bloodwork at a local lab?",
            a: "Depending on your medical history, your provider may require recent metabolic labs. If needed, we provide requisitions that can be fulfilled at any local LabCorp or Quest Diagnostics in New York City."
          },
          {
            q: "How long does shipping to New York City take?",
            a: "Once your prescription is approved by our medical team, the compounding pharmacy typically processes and cold-ships the medication via overnight or 2-day delivery to ensure the peptides remain temperature stable upon arrival at your address."
          }
        ]}
      />

      <FinalCTA stateName="New York" cityName="New York City" />
    </>
  );
}
