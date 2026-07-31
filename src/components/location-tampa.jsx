"use client";
import React from 'react';
import { HeroVariationB, PatientArchetype, ClinicalDeepDive, InsuranceBreakdown, CostComparisonTable, LocalTransitPain, InteractiveFAQ, StateLegalFramework, DeliveryGridMap, FinalCTA } from './location-modules.jsx';

export function LocationTampa() {
  return (
    <div style={{ background: '#FBF8F3', overflow: 'hidden' }}>

      <HeroVariationB
        stateName="Florida"
        cityName="Tampa"
        headline="Clinical GLP-1 Weight Loss in <span style='color: #2ECC71'>Tampa Bay</span>"
        subheadline="Tampa Bay is where retirement meets military infrastructure meets a healthcare system stretched past capacity. MacDill Air Force Base, a massive veteran population, and a snowbird surge that doubles specialist waitlists every winter. Compounded Semaglutide, delivered from South Tampa to Brandon."
        dataPoint1="Hillsborough County's adult obesity rate exceeds 30%, compounded by a subtropical climate that makes outdoor exercise dangerous for five months of the year and a retiree influx that overwhelms local specialist capacity every October."
        dataPoint2="Telehealth FX bypasses the seasonal healthcare bottleneck entirely. Asynchronous intake, no waitlist, overnight delivery to any Tampa Bay address."
      />

      <PatientArchetype
        archetype="The MacDill AFB Intelligence Analyst"
        quote="I'm a GS-13 civilian analyst at CENTCOM. My TRICARE Select plan technically covers weight management, but getting a referral through the base clinic takes 8 weeks, then the off-base endocrinologist had a 12-week wait. That's five months before I even see a specialist—and my fitness assessment is in four. The military healthcare system moves at military speed, which is to say: slowly."
        details="<strong>Patient Profile:</strong> Kevin, 39, GS-13 Intelligence Analyst, MacDill AFB (U.S. Central Command).<br/><br/><strong>The Challenge:</strong> Kevin is a civilian DoD employee supporting CENTCOM operations. His work is classified, sedentary, and high-stress—12-hour days in a SCIF with no windows. His TRICARE Select plan requires a PCM referral for specialist care, but the base clinic at MacDill is perpetually understaffed. The off-base referral network in Tampa is overwhelmed by the dual pressure of active-duty families and the massive veteran population. His total pathway to a GLP-1 prescription through TRICARE was estimated at 20+ weeks.<br/><br/><strong>The Intervention:</strong> Kevin completed the Telehealth FX intake from his apartment in South Tampa on a Saturday morning. A Florida-licensed physician reviewed his metabolic profile asynchronously. Compounded Semaglutide was prescribed within 18 hours and delivered to his door. He bypassed the entire TRICARE referral chain without affecting his security clearance or his employment status."
      />

      <ClinicalDeepDive
        title="The Snowbird Bottleneck and the Subtropical Trap"
        paragraphs={[
          "Tampa Bay's metabolic health crisis is driven by a force that no other city in this network experiences: the seasonal snowbird migration. Every October through April, hundreds of thousands of retirees from the Northeast and Midwest descend on the Tampa Bay metro, bringing their Medicare plans, their chronic conditions, and their specialist appointments with them. The result is a healthcare system that is marginally adequate for 7 months and severely overwhelmed for 5.",
          "For year-round Tampa residents, this means that scheduling an endocrinology appointment in January is functionally impossible. The specialists at Tampa General, AdventHealth, and BayCare are absorbing the healthcare needs of a population that has temporarily doubled. New-patient metabolic medicine waitlists that average 8 weeks in summer balloon to 14-18 weeks in winter.",
          "The subtropical climate compounds the problem. Tampa's summer heat index regularly exceeds 105°F with near-100% humidity from May through September. Outdoor exercise—the foundational recommendation of every 'lifestyle modification' program—is medically inadvisable during peak afternoon hours for five months of the year. The CDC's own heat-illness guidelines recommend limiting strenuous outdoor activity when the heat index exceeds 103°F. Tampa exceeds that threshold on most summer afternoons.",
          "The food environment reinforces the metabolic challenge. Tampa's Cuban sandwich heritage, the Ybor City food scene, and the ubiquitous chain restaurants lining Dale Mabry Highway and Bruce B. Downs Boulevard create a caloric landscape dominated by fried foods, heavy starches, and the sweet tea that is the default beverage of the Gulf Coast. The Tampa Bay area has more chain restaurants per capita than almost any metro in the country.",
          "GLP-1 receptor agonists provide a clinical intervention that works within Tampa's reality—restoring metabolic signaling that the heat, the diet, the stress, and the seasonal healthcare bottleneck have collectively broken. They don't require you to jog in 105°F heat or wait five months for a specialist appointment that a snowbird from Connecticut just took."
        ]}
        citations={[
          "Florida Department of Health in Hillsborough County. (2025). <em>Community Health Needs Assessment: Obesity and Metabolic Disease Indicators</em>.",
          "University of South Florida College of Public Health. (2024). <em>Seasonal Population Fluctuation and Healthcare Access in the Tampa Bay Metropolitan Area</em>.",
          "CDC Heat Stress Guidelines. (2024). <em>Heat Index and Outdoor Activity Risk Thresholds</em>."
        ]}
      />

      <InsuranceBreakdown
        title="TRICARE, Medicare Surge, and the Corporate Gap"
        text="Tampa Bay's insurance landscape is uniquely fragmented: a massive military/veteran population on TRICARE, a seasonal Medicare surge, and a growing corporate sector with standard PBM restrictions."
        employers={[
          { name: "MacDill AFB / CENTCOM / SOCOM (TRICARE)", detail: "MacDill is home to both U.S. Central Command and U.S. Special Operations Command. Thousands of active-duty, reserve, and civilian DoD employees rely on TRICARE, which requires PCM referrals and formulary compliance for GLP-1 access. The base clinic's limited capacity creates referral backlogs that can exceed 20 weeks when combined with off-base specialist waitlists." },
          { name: "BayCare / AdventHealth / Tampa General (Healthcare Workers)", detail: "Tampa Bay's major health systems employ tens of thousands of clinical and administrative staff whose own health plans impose the same prior authorization and Step Therapy barriers they encounter when treating patients." },
          { name: "USAA / Raymond James / Tech Sector", detail: "Tampa's growing financial and tech sectors offer competitive benefits, but their self-funded plans rely on national PBM formularies that classify GLP-1 weight management as specialty-tier or lifestyle exclusions." }
        ]}
      />

      <CostComparisonTable
        title="What Weight Loss Actually Costs in Tampa Bay"
        localCompetitors={[
          { name: "South Tampa / Harbour Island Concierge", cost: "$800 - $1,300 / mo", consult: "Mandatory In-Person + Labs", access: "Branded Only / VIP Access" },
          { name: "Westchase / Carrollwood MedSpas", cost: "$400 - $750 / mo", consult: "Monthly Membership + Consult", access: "Variable Compounding + B12" },
          { name: "Tampa General Endocrinology", cost: "$125 Copay + Rx", consult: "10-18 Week Wait (Seasonal)", access: "Formulary Restrictions / Prior Auth" },
          { name: "BayCare Primary Care", cost: "$45 Copay", consult: "4-8 Week Wait", access: "Step Therapy / Pharmacy Backorder" }
        ]}
        telehealthPrice="From $146 / mo"
      />

      <LocalTransitPain
        title="Bypass the Howard Frankland & Tampa General Waitlists"
        transitText="Tampa Bay's geography—split across the bay with Clearwater and St. Petersburg to the west—creates bridge-dependent bottlenecks. The Howard Frankland Bridge (I-275), the Gandy Bridge, and the Courtney Campbell Causeway funnel all cross-bay traffic through three chokepoints. Whether you're commuting from Brandon on I-75, navigating Dale Mabry Highway, or crossing from Pinellas County, adding a medical appointment to a Tampa commute is a 90-minute minimum commitment."
        hospitalText="<strong>Tampa General Hospital</strong> is the region's Level I trauma center and academic hub. <strong>AdventHealth Tampa</strong> and the <strong>BayCare Health System</strong> provide extensive networks. But endocrinology and metabolic medicine capacity is strained year-round and critically overwhelmed during snowbird season. Your local <strong>Publix</strong>, <strong>CVS</strong>, or <strong>Walgreens</strong> pharmacy has branded Wegovy on the same national backorder."
      />

      <InteractiveFAQ
        faqs={[
          { q: "I'm on TRICARE Select. Can I use Telehealth FX instead?", a: "Yes. Telehealth FX is a private, self-pay medical service independent of TRICARE. Using our platform does not affect your TRICARE benefits, your military service record, or your security clearance. It simply provides a faster clinical pathway outside the military healthcare referral chain." },
          { q: "Do you deliver to Clearwater and St. Petersburg?", a: "Yes. We deliver to all residential and commercial addresses across the Tampa Bay metro, including Hillsborough, Pinellas, Pasco, and Polk counties." },
          { q: "Are waitlists really longer in winter?", a: "Yes. The seasonal population influx from October through April increases specialist demand by 30-50% across the Tampa Bay metro. If you are trying to establish care with an endocrinologist during snowbird season, expect significantly longer wait times than the summer baseline." },
          { q: "How is this different from the IV drip places on Dale Mabry?", a: "Many clinics along Dale Mabry and in Westchase offer B12 injections, lipotropic blends, or IV hydration marketed for weight loss—none of which have FDA-recognized efficacy data. Telehealth FX prescribes only compounded Semaglutide and Tirzepatide: true GLP-1 receptor agonists backed by Phase III clinical trials." }
        ]}
      />

      <StateLegalFramework
        stateName="Florida"
        boardName="Florida Board of Medicine"
        text="Telehealth FX operates in strict compliance with the <strong>Florida Board of Medicine</strong> and Florida Statute § 456.47 (Florida's Telehealth Act). Under current Florida law, a physician-patient relationship may be established via telehealth technologies, including asynchronous modalities, for prescribing non-controlled medications. All Telehealth FX prescribers treating Florida patients hold active, unrestricted Florida medical licenses verified through the Florida Department of Health MQA portal."
      />

      <DeliveryGridMap
        cityName="Tampa"
        mapQuery="Tampa, FL"
        coordinates="27.9506° N, 82.4572° W"
        counties="Hillsborough County, Pinellas County, Pasco County, Polk County"
        neighborhoods={['South Tampa', 'Westchase', 'Brandon', 'Clearwater', 'St. Petersburg', 'Riverview', 'New Tampa', 'Carrollwood', 'Temple Terrace', 'Lakeland']}
      />

      <FinalCTA stateName="Florida" />

    
{/* Disclaimer: Mounjaro®, Zepbound®, Ozempic®, and Wegovy® are registered trademarks of their respective owners (Eli Lilly and Company and Novo Nordisk A/S). Telehealth FX is not affiliated with, endorsed by, or connected to any of these companies. Compounded medications are not FDA-approved and are not therapeutically equivalent to any branded product. */}
</div>
  );
}
