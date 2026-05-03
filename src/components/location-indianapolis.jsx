"use client";
import React from 'react';
import { HeroVariationA, ClinicalDeepDive, StateLegalFramework, PatientArchetype, InsuranceBreakdown, LocalTransitPain, CostComparisonTable, InteractiveFAQ, DeliveryGridMap, FinalCTA } from './location-modules.jsx';

export function LocationIndianapolis() {
  return (
    <div style={{ background: '#FBF8F3', overflow: 'hidden' }}>

      <HeroVariationA
        stateName="Indiana"
        cityName="Indianapolis"
        headline="Clinical GLP-1 Weight Loss in <br/><span style='color: #2ECC71'>Indianapolis</span>"
        subheadline="Eli Lilly manufactures Mounjaro and Zepbound in facilities you can see from the highway. Anthem, the nation's second-largest insurer, is headquartered seven blocks away. And yet getting a GLP-1 prescription filled in the city that makes and insures them remains an ordeal. Compounded Semaglutide, delivered from Broad Ripple to Carmel."
        ctaText="Check Indiana Eligibility"
      />

      <ClinicalDeepDive
        title="The Eli Lilly Paradox: Made Here, Inaccessible Here"
        paragraphs={[
          "Indianapolis is home to a pharmaceutical irony so profound it borders on absurdity. Eli Lilly and Company—the manufacturer of Mounjaro (tirzepatide) and Zepbound (tirzepatide for weight management)—is headquartered at Lilly Corporate Center on South Delaware Street, less than a mile from Monument Circle. The company employs over 10,000 people in the Indianapolis metro area. Its manufacturing, research, and distribution infrastructure represents one of the largest economic engines in the state of Indiana.",
          "And yet the average Indianapolis resident cannot reliably access the medications that Eli Lilly produces in their own city. Branded Mounjaro and Zepbound are subject to the same national supply chain constraints, insurance formulary restrictions, and pharmacy backorders as every other city in the network. A Lilly employee can drive past the facility where tirzepatide is manufactured on their morning commute—and then receive a denial letter from their own health plan's pharmacy benefit manager that afternoon.",
          "This paradox is not unique to Lilly employees. It's structural. The medications are manufactured and shipped from Indianapolis facilities into a national distribution system controlled by pharmacy benefit managers (PBMs) like Express Scripts and CVS Caremark. These PBMs negotiate rebate structures with Lilly, then set formulary tiers and prior authorization requirements that effectively gate access regardless of proximity to the manufacturing source. The drugs are made here. They leave here. And they become inaccessible here.",
          "Compounding this systemic frustration is the fact that Anthem (now Elevance Health), the second-largest health insurer in the United States, is also headquartered in Indianapolis—on Virginia Avenue, a 10-minute walk from Lilly's campus. The city that manufactures the drugs AND administers the insurance that denies them occupies a position of unique systemic irony in American healthcare. Telehealth FX exists to provide Indianapolis residents with a clinical pathway that bypasses both of these systems entirely."
        ]}
        citations={[
          "Eli Lilly and Company. (2025). <em>Mounjaro and Zepbound Supply Updates: Manufacturing Capacity and Distribution Challenges</em>.",
          "Indiana State Department of Health. (2025). <em>Marion County Metabolic Health Indicators: Obesity, Diabetes, and GLP-1 Prescribing Trends</em>.",
          "The Indianapolis Star / IndyStar. (2024). <em>Lilly's Blockbuster Drugs Are Made in Indy. Why Can't Residents Get Them?</em>"
        ]}
      />

      <StateLegalFramework
        stateName="Indiana"
        boardName="Indiana Medical Licensing Board"
        text="Telehealth FX operates in strict compliance with the <strong>Indiana Medical Licensing Board</strong> and Indiana Code 25-1-9.5 (Indiana's telehealth statute). Under current Indiana law, a physician-patient relationship may be established via telehealth technologies, including asynchronous modalities, when the treating physician holds an active Indiana medical license. Indiana's telehealth framework was permanently expanded following pandemic-era legislation, and the state explicitly permits licensed physicians to prescribe non-controlled medications via telehealth platforms without requiring an initial in-person encounter. All Telehealth FX prescribers treating Indiana patients are individually credentialed and verified through the Indiana Professional Licensing Agency (PLA) online verification portal."
      />

      <PatientArchetype
        archetype="The Lilly Supply Chain Coordinator"
        quote="I coordinate the outbound logistics for tirzepatide from our distribution center. I literally watch pallets of Zepbound leave the building every day. Then I go home and my Anthem plan tells me I need to fail Orlistat for six months before they'll consider authorizing the drug I help ship. I don't know whether to laugh or scream."
        details="<strong>Patient Profile:</strong> Derek, 41, Supply Chain Coordinator at Eli Lilly, Indianapolis.<br/><br/><strong>The Challenge:</strong> Derek works at one of Lilly's Indianapolis-area distribution facilities, where he manages outbound pharmaceutical logistics—including shipments of Mounjaro and Zepbound to distributors nationwide. His Lilly employee health plan is administered by Anthem (which is also headquartered in Indianapolis). When his physician prescribed Zepbound for weight management, Anthem's PBM denied the prior authorization, citing Step Therapy requirements: he needed to document 6 months of failed Orlistat therapy first. The medication he handles professionally every day was denied to him personally by an insurer headquartered in the same city.<br/><br/><strong>The Intervention:</strong> Derek completed the Telehealth FX intake on his phone during a lunch break at the distribution center. An Indiana-licensed physician reviewed his metabolic profile asynchronously and prescribed compounded Tirzepatide—the same active pharmaceutical ingredient he ships daily, prepared by a 503A compounding pharmacy—within 16 hours. Cold-packed medication arrived at his Fishers home the next day. He bypassed both his employer's insurance system and the branded supply chain he professionally manages."
      />

      <InsuranceBreakdown
        title="The Double Headquarters Problem"
        text="Indianapolis has the misfortune of being the city where both the drugs and the denials originate. Eli Lilly manufactures the medications, and Anthem/Elevance Health—headquartered seven blocks away—administers the formularies that restrict access. This double-headquarters dynamic makes Indianapolis the epicenter of America's GLP-1 access crisis."
        employers={[
          { name: "Eli Lilly and Company", detail: "Lilly employees are covered through plans administered by Anthem. Despite working for the company that manufactures Mounjaro and Zepbound, employees are subject to the same PBM-driven prior authorization requirements as any other Anthem enrollee. Step Therapy, BMI thresholds, and comorbidity documentation requirements apply regardless of employer." },
          { name: "Anthem / Elevance Health (HQ'd in Indianapolis)", detail: "Anthem employees process and adjudicate the very prior authorization requests that their own plans restrict. The formulary decisions made at Anthem's Virginia Avenue headquarters directly affect the 45+ million Americans (including Anthem's own workforce) who rely on plans Anthem administers. Internal employees face the same formulary tiers they help design." },
          { name: "IU Health / State Government Plans", detail: "Indiana University Health, the state's largest healthcare system, and Indiana state government employee plans both impose Step Therapy protocols and restrictive prior authorization requirements for GLP-1 weight management. IU Health endocrinology waitlists at Methodist and University hospitals routinely exceed 10 weeks." }
        ]}
      />

      <LocalTransitPain
        title="Bypass the I-465 Loop & IU Health Waitlists"
        transitText="Indianapolis is defined by I-465, the beltway that circles the city and serves as the primary artery for suburban commuters from Carmel, Fishers, Noblesville, Greenwood, and Brownsburg. Whether you're stuck in the I-465/I-69 interchange construction on the northeast side, crawling through the I-65 split on the south side, or navigating Meridian Street traffic from Broad Ripple—adding a medical appointment to an Indianapolis commute means planning around a metro area with no rail system and a bus network that serves a fraction of the population."
        hospitalText="<strong>IU Health</strong> (Methodist, University, North) is the dominant healthcare system, complemented by <strong>Community Health Network</strong>, <strong>Eskenazi Health</strong>, and <strong>Franciscan Health</strong>. All are good systems—but endocrinology and metabolic medicine departments are strained by a growing metro. New-patient waits at IU Health Methodist run 8 to 12 weeks. Community Health's weight management program has a similar backlog. And your local <strong>Kroger</strong>, <strong>CVS</strong>, or <strong>Walgreens</strong> pharmacy in the Indy metro has the same national answer: branded Wegovy and Zepbound are on indefinite backorder."
      />

      <CostComparisonTable
        title="What Weight Loss Actually Costs in Indianapolis"
        localCompetitors={[
          { name: "Carmel / Meridian Hills Concierge Medicine", cost: "$700 - $1,100 / mo", consult: "Mandatory In-Person + Labs", access: "Branded Only / Waitlisted" },
          { name: "Mass Ave / Broad Ripple Aesthetic Clinics", cost: "$450 - $800 / mo", consult: "Monthly Membership + Consult", access: "Variable Compounding Sources" },
          { name: "IU Health Endocrinology (Methodist)", cost: "$150 Copay + Rx", consult: "8-12 Week New Patient Wait", access: "Formulary Restrictions / Step Therapy" },
          { name: "Community Health Network PCP", cost: "$50 Copay", consult: "4-6 Week Wait", access: "Prior Auth / Pharmacy Backorder" }
        ]}
        telehealthPrice="From $146 / mo"
      />

      <InteractiveFAQ
        faqs={[
          { q: "I work at Lilly. Is there any conflict using Telehealth FX?", a: "No. Telehealth FX is an independent medical platform with no affiliation to Eli Lilly, Anthem, or any pharmaceutical manufacturer or insurance company. Using our service is a personal healthcare decision, similar to seeing any private physician outside your employer's network. Your compounded medication is produced by a separate, FDA-registered 503A compounding pharmacy—not by Lilly." },
          { q: "Is compounded tirzepatide the same thing as Mounjaro?", a: "Compounded tirzepatide contains the same active pharmaceutical ingredient as Mounjaro and Zepbound. It is prepared by FDA-registered 503A compounding pharmacies using USP-grade ingredients. The key difference: it is not manufactured by Eli Lilly, which means it is not subject to the branded supply constraints or PBM-controlled formulary restrictions." },
          { q: "Can I get medication delivered to my office downtown or in the Lilly Tech Center?", a: "Yes. We deliver to all residential and commercial addresses in Marion County and the surrounding metro, including downtown offices, the Lilly campus area, and all suburban communities including Carmel, Fishers, Noblesville, Greenwood, and Zionsville." },
          { q: "I have Anthem through my employer. Why won't they cover this?", a: "Most Anthem plans in the Indianapolis market place GLP-1 weight management medications on restricted specialty tiers with prior authorization requirements including BMI thresholds, comorbidity documentation, and Step Therapy. This process typically takes 6-12 weeks. Telehealth FX operates entirely outside the insurance framework, eliminating these barriers. Your costs are eligible for HSA/FSA payment." },
          { q: "Why can't I just buy Zepbound at a local pharmacy if it's made here?", a: "Pharmaceutical distribution doesn't work on geographic proximity. Medications manufactured at Lilly's Indianapolis facilities enter a national distribution system controlled by wholesalers (McKesson, AmerisourceBergen) and pharmacy benefit managers. Local pharmacies receive allocated quantities based on contracts, not location. When national demand exceeds supply, Indianapolis pharmacies are affected equally." }
        ]}
      />

      <DeliveryGridMap
        cityName="Indianapolis"
        mapQuery="Indianapolis, IN"
        coordinates="39.7684° N, 86.1581° W"
        counties="Marion County, Hamilton County, Hendricks County, Johnson County, Boone County"
        neighborhoods={['Broad Ripple', 'Carmel', 'Fishers', 'Noblesville', 'Meridian-Kessler', 'Mass Ave', 'Greenwood', 'Zionsville', 'Brownsburg', 'Westfield']}
      />

      <FinalCTA stateName="Indiana" />

    </div>
  );
}
