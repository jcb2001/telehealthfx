"use client";
import React from 'react';
import { HeroVariationA, PatientArchetype, ClinicalDeepDive, InsuranceBreakdown, CostComparisonTable, LocalTransitPain, InteractiveFAQ, StateLegalFramework, DeliveryGridMap, FinalCTA } from './location-modules.jsx';

export function LocationLexington() {
  return (
    <div style={{ background: '#FBF8F3', overflow: 'hidden' }}>
      <HeroVariationA stateName="Kentucky" cityName="Lexington" headline="Clinical GLP-1 Weight Loss in <br/><span style='color: #2ECC71'>Lexington</span>" subheadline="Lexington is the Horse Capital of the World and the gateway to the Bourbon Trail. The thoroughbreds get world-class veterinary metabolic care. Their caretakers—and the rest of Lexington—wait months for a specialist appointment at UK HealthCare. Compounded Semaglutide, delivered from Chevy Chase to Hamburg." ctaText="Check Kentucky Eligibility" />
      <PatientArchetype archetype="The Keeneland Thoroughbred Farm Manager" quote="I manage the nutrition and metabolic health of horses worth $5 million each. I monitor their insulin levels, their caloric intake, their exercise protocols—all with precision that would impress an endocrinologist. But I can't get the same level of metabolic attention for myself. My UK HealthCare plan has a 14-week wait for endocrinology. The horses get seen faster." details="<strong>Patient Profile:</strong> Sarah, 43, Farm Manager at a Thoroughbred operation near Keeneland, Lexington.<br/><br/><strong>The Challenge:</strong> Sarah manages equine metabolic health at an elite level—she understands insulin resistance, caloric balance, and hormonal signaling in the context of thoroughbred performance. Her own metabolic health has been neglected for years. Her UK HealthCare plan has a 14-week endocrinology wait. The irony is stark: she provides better metabolic care to horses than the healthcare system provides to her.<br/><br/><strong>The Intervention:</strong> Sarah completed the Telehealth FX intake from her farmhouse outside Versailles. A Kentucky-licensed physician prescribed compounded Semaglutide within 24 hours." />
      <ClinicalDeepDive title="The Horse Capital's Human Health Gap" paragraphs={[
        "Lexington sits at the center of the Bluegrass Region, surrounded by thoroughbred farms that invest more in equine metabolic science than most American cities invest in human endocrinology. The irony is not rhetorical—it is financial. A single thoroughbred's annual veterinary metabolic care budget can exceed $50,000. The horse's insulin levels are monitored monthly. Meanwhile, the farm workers, trainers, and managers who care for these animals wait 3-4 months for a human endocrinologist at UK HealthCare.",
        "The Bourbon Trail amplifies the caloric environment. Lexington is the gateway to Kentucky's bourbon country, and the culture of bourbon tastings, distillery tours, and bourbon-infused cuisine creates the same caloric pressure seen in Louisville. The weekly bourbon Old Fashioned, the bourbon ball desserts, the bourbon-glazed everything—these contribute significant empty calories to a population already challenged by Southern food traditions.",
        "Kentucky's overall health metrics compound the problem. The state ranks among the worst in the nation for adult obesity, diabetes prevalence, and cardiovascular mortality. UK HealthCare and Baptist Health Lexington provide strong clinical care, but the demand far exceeds capacity in a state with systemic population health challenges.",
        "GLP-1 medications provide the same precision metabolic intervention that Lexington's thoroughbred farms deploy for their horses—restoring hormonal signaling with clinical rigor, delivered through a system that doesn't require a 14-week wait."
      ]} citations={[
        "Lexington-Fayette County Health Department. (2025). <em>Community Health Assessment: Obesity and Chronic Disease in Fayette County</em>.",
        "University of Kentucky College of Medicine. (2024). <em>Specialist Access and Population Health Challenges in Central Kentucky</em>."
      ]} />
      <InsuranceBreakdown title="UK HealthCare and the Bourbon Industry" text="Lexington's employer landscape is anchored by the University of Kentucky and the equine/bourbon industries." employers={[
        { name: "University of Kentucky / UK HealthCare", detail: "UK is Lexington's largest employer. Employee plans require standard formulary compliance for GLP-1 access, with specialist waitlists reflecting the broader capacity constraints." },
        { name: "Thoroughbred Industry / Keeneland", detail: "The equine industry employs thousands in farm management, training, and support roles. Plans vary widely, with many farm workers on high-deductible or marketplace plans that create significant pharmaceutical access barriers." },
        { name: "Bourbon Distilleries / Toyota (Georgetown)", detail: "The bourbon and manufacturing sectors offer corporate plans with standard PBM restrictions for GLP-1 weight management." }
      ]} />
      <CostComparisonTable title="What Weight Loss Actually Costs in Lexington" localCompetitors={[
        { name: "Chevy Chase / Hamburg Concierge", cost: "$600 - $1,000 / mo", consult: "Mandatory In-Person", access: "Branded Only" },
        { name: "Beaumont / Tates Creek MedSpas", cost: "$350 - $600 / mo", consult: "Monthly Membership", access: "Variable Compounding" },
        { name: "UK HealthCare Endocrinology", cost: "$125 Copay + Rx", consult: "12-16 Week Wait", access: "Prior Auth Required" }
      ]} telehealthPrice="From $146 / mo" />
      <LocalTransitPain title="Bypass New Circle Road & UK Waitlists" transitText="Lexington's traffic concentrates on New Circle Road (KY-4) and the I-75/I-64 interchange. The city is car-dependent with no rail transit. Getting from the horse farms south of town to UK Chandler Hospital requires navigating New Circle congestion." hospitalText="<strong>UK HealthCare</strong> is the region's academic anchor, complemented by <strong>Baptist Health Lexington</strong>. Specialist waits average 12-16 weeks." />
      <InteractiveFAQ faqs={[
        { q: "I work on a farm outside Lexington. Can I get delivery?", a: "Yes. We deliver to all addresses in Fayette County and surrounding Bluegrass counties including Woodford, Scott, Jessamine, and Bourbon counties." },
        { q: "Is this legal in Kentucky?", a: "Yes. Telehealth FX operates in strict compliance with the Kentucky Board of Medical Licensure and KRS 311.550 et seq." }
      ]} />
      <StateLegalFramework stateName="Kentucky" boardName="Kentucky Board of Medical Licensure" text="Telehealth FX operates in strict compliance with the <strong>Kentucky Board of Medical Licensure (KBML)</strong> and KRS 311.550 et seq. All prescribers hold active, unrestricted Kentucky medical licenses." />
      <DeliveryGridMap cityName="Lexington" mapQuery="Lexington, KY" coordinates="38.0406° N, 84.5037° W" counties="Fayette County, Woodford County, Scott County, Jessamine County" neighborhoods={['Chevy Chase', 'Hamburg', 'Beaumont', 'Tates Creek', 'Versailles', 'Georgetown', 'Nicholasville', 'Winchester']} />
      <FinalCTA stateName="Kentucky" />
    </div>
  );
}
