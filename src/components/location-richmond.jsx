"use client";
import React from 'react';
import { HeroVariationB, PatientArchetype, ClinicalDeepDive, InsuranceBreakdown, CostComparisonTable, LocalTransitPain, InteractiveFAQ, StateLegalFramework, DeliveryGridMap, FinalCTA } from './location-modules.jsx';
export function LocationRichmond() {
  return (
    <div style={{ background: '#FBF8F3', overflow: 'hidden' }}>
      <HeroVariationB stateName="Virginia" cityName="Richmond" headline="Clinical GLP-1 Weight Loss in <span style='color: #2ECC71'>Richmond</span>" subheadline="Richmond is the capital of Virginia and the headquarters of Altria Group—the parent company of Philip Morris. The corporation that sold America its most famous addiction now watches its own employees struggle with the metabolic consequences of a different one. Compounded Semaglutide, delivered from the Fan to Short Pump." dataPoint1="Richmond's economy spans state government, banking (Capital One), and tobacco legacy. Altria's $95 billion market cap funds some of the best corporate benefits in the country—benefits that still restrict GLP-1 access through standard PBM formulary management." dataPoint2="Telehealth FX provides metabolic care outside the corporate wellness programs and the state employee Step Therapy chains." />
      <PatientArchetype archetype="The Altria Regulatory Affairs Director" quote="I spent 20 years at Philip Morris managing the regulatory framework for nicotine products. I understand addiction science, metabolic disruption, and the gap between corporate wellness messaging and actual health outcomes better than anyone. My Altria benefits are excellent—and they still require 6 months of behavioral modification before GLP-1 authorization. The company that mastered selling one metabolic disruptor won't let me fix another." details="<strong>Patient Profile:</strong> Christine, 51, Director of Regulatory Affairs at Altria Group, Richmond.<br/><br/><strong>The Challenge:</strong> Christine's professional expertise is in addiction science and regulatory compliance for nicotine products. She understands metabolic disruption at a molecular level. Her Altria benefits—among the most generous in corporate America—still route GLP-1 access through standard PBM Step Therapy. Her irony is existential: she helped manage the regulatory framework for one metabolic crisis and cannot access pharmaceutical intervention for another.<br/><br/><strong>The Intervention:</strong> Christine completed the Telehealth FX intake from her home in the Fan District. A Virginia-licensed physician prescribed compounded Tirzepatide within 24 hours." />
      <ClinicalDeepDive title="The Tobacco Capital's Second Metabolic Crisis" paragraphs={[
        "Richmond's relationship with metabolic disruption is generational. Philip Morris was founded here in 1847, and the tobacco industry shaped the city's economy, culture, and identity for over 150 years. Altria Group—the corporate successor—remains headquartered in Henrico County with 7,000+ employees. The irony of a city that profited from selling America one of its most devastating metabolic disruptors now facing an obesity crisis is not academic—it is deeply personal for the thousands of Altria employees who live it daily.",
        "Beyond tobacco, Richmond's economy includes Capital One (financial headquarters), state government (Virginia's capital), and VCU Health/HCA Virginia (healthcare). The food culture is a blend of Southern tradition (country ham, fried chicken, Brunswick stew) and a rapidly evolving restaurant scene in neighborhoods like the Fan, Carytown, and Scott's Addition. The craft brewery explosion (The Veil, Väsen, Hardywood) has made Richmond one of the beer capitals of the East Coast.",
        "VCU Health is an excellent academic medical center, but specialist capacity for the Richmond metro is constrained. Endocrinology waitlists average 10-14 weeks, and the combination of state government employees (with state plan Step Therapy requirements) and corporate workers creates steady demand that outpaces supply.",
        "GLP-1 medications serve Richmond's unique population—the tobacco company employees who understand metabolic disruption professionally, the state workers who write health policy, and the banking/tech workforce navigating Southern food culture and East Coast craft beer."
      ]} citations={[
        "Richmond City Health District. (2025). <em>Community Health Assessment</em>.",
        "Virginia Commonwealth University School of Medicine. (2024). <em>Tobacco Legacy, Metabolic Disease, and Healthcare Access in Central Virginia</em>."
      ]} />
      <InsuranceBreakdown title="Tobacco Legacy, Banking Capital, State Government" text="Richmond's employer mix creates a unique intersection of corporate, government, and legacy industry barriers." employers={[
        { name: "Altria Group (HQ)", detail: "Altria offers among the most generous corporate benefits in America—but GLP-1 weight management is still routed through PBM Step Therapy and prior authorization." },
        { name: "Capital One (HQ) / CarMax (HQ)", detail: "Richmond's financial and retail giants offer self-funded plans with standard specialty-tier GLP-1 restrictions." },
        { name: "State of Virginia / VCU Health / HCA Virginia", detail: "Government and healthcare employers impose Step Therapy requirements that can take 6+ months to navigate." }
      ]} />
      <CostComparisonTable title="What Weight Loss Actually Costs in Richmond" localCompetitors={[
        { name: "Fan District / Short Pump Concierge", cost: "$700 - $1,100 / mo", consult: "Mandatory In-Person", access: "Branded Only" },
        { name: "Carytown / Scott's Addition MedSpas", cost: "$400 - $700 / mo", consult: "Monthly Membership", access: "Variable Compounding" },
        { name: "VCU Health Endocrinology", cost: "$125 Copay + Rx", consult: "10-14 Week Wait", access: "Prior Auth Required" }
      ]} telehealthPrice="From $146 / mo" />
      <LocalTransitPain title="Bypass I-95/I-64 & VCU Waitlists" transitText="Richmond sits at the junction of I-95 and I-64, with Midlothian Turnpike and Broad Street handling suburban traffic from Short Pump, Midlothian, and Glen Allen." hospitalText="<strong>VCU Health</strong> and <strong>HCA Virginia (Chippenham, Henrico Doctors)</strong> serve the metro. Specialist waits average 10-14 weeks." />
      <InteractiveFAQ faqs={[
        { q: "I work at Altria. Is this confidential?", a: "Yes. Telehealth FX is completely independent of your employer. Your medical records with us are private and separate from any corporate wellness program." },
        { q: "Do you deliver to Short Pump, Midlothian, and Glen Allen?", a: "Yes. All Henrico, Chesterfield, and Hanover County addresses." }
      ]} />
      <StateLegalFramework stateName="Virginia" boardName="Virginia Board of Medicine" text="Telehealth FX operates in strict compliance with the <strong>Virginia Board of Medicine</strong> and Virginia Code § 54.1-2900 et seq." />
      <DeliveryGridMap cityName="Richmond" mapQuery="Richmond, VA" coordinates="37.5407° N, 77.4360° W" counties="City of Richmond, Henrico County, Chesterfield County, Hanover County" neighborhoods={['The Fan', 'Carytown', "Scott's Addition", 'Short Pump', 'Midlothian', 'Glen Allen', 'Chester', 'Mechanicsville']} />
      <FinalCTA stateName="Virginia" />
    </div>
  );
}
