"use client";
import React from 'react';
import { HeroVariationB, PatientArchetype, ClinicalDeepDive, InsuranceBreakdown, CostComparisonTable, LocalTransitPain, InteractiveFAQ, StateLegalFramework, DeliveryGridMap, FinalCTA } from './location-modules.jsx';

export function LocationKansasCity() {
  return (
    <div style={{ background: '#FBF8F3', overflow: 'hidden' }}>
      <HeroVariationB
        stateName="Missouri"
        cityName="Kansas City"
        headline="Clinical GLP-1 Weight Loss in <span style='color: #2ECC71'>Kansas City</span>"
        subheadline="Kansas City built the electronic health record systems that track every American's medical data. Cerner (now Oracle Health) designed the infrastructure. And the city's own residents still can't get through that infrastructure to access GLP-1 medications without months of delay. Compounded Semaglutide, delivered from the Plaza to Overland Park."
        dataPoint1="Kansas City's BBQ tradition rivals Memphis—but the metabolic consequences of burnt ends, brisket, and the Boulevard beer that washes it down are compounded by a healthcare system split across two states."
        dataPoint2="Telehealth FX bypasses the state-line confusion and the EHR referral chains. Asynchronous intake, overnight delivery, licensed in both Missouri and Kansas."
      />
      <PatientArchetype
        archetype="The Oracle Health (Cerner) EHR Engineer"
        quote="I build the electronic health record systems that hospitals use to manage patients. I know exactly how the referral workflow is supposed to function—because I coded it. And when my own PCP put in a referral for endocrinology at Saint Luke's, it sat in a queue for 11 weeks. The system I built works as designed. It's just designed to be slow."
        details="<strong>Patient Profile:</strong> Ryan, 36, Senior Software Engineer at Oracle Health (formerly Cerner), Kansas City.<br/><br/><strong>The Challenge:</strong> Ryan builds the EHR infrastructure that manages healthcare delivery for millions of patients. His expertise in clinical workflow design gives him unique insight into exactly why referral backlogs exist. His Blue Cross plan required a PCP referral, which generated an electronic referral order that sat in Saint Luke's endocrinology queue for 11 weeks. He understood the bottleneck at a technical level—and he was powerless to fix it from the patient side.<br/><br/><strong>The Intervention:</strong> Ryan completed the Telehealth FX intake from his apartment in the Crossroads district. A Missouri-licensed physician reviewed his profile asynchronously, bypassing the EHR referral chain entirely. Compounded Semaglutide was prescribed within 20 hours."
      />
      <ClinicalDeepDive
        title="Burnt Ends, Boulevard, and the State Line Problem"
        paragraphs={[
          "Kansas City's food identity is defined by BBQ with a specificity that even Memphis can't match. KC BBQ is characterized by the burnt end—the caramelized, bark-heavy tip of a smoked brisket, served with a tomato-molasses sauce that adds another 200 calories per serving. Joe's KC, Q39, Gates, and Jack Stack are not restaurants—they are civic institutions. Combined with Boulevard Brewing's craft beer culture and the steakhouse tradition of the Country Club Plaza, the weekly caloric contribution from KC's food scene is formidable.",
          "The state-line dynamic adds a healthcare complexity unique to Kansas City. The metro straddles Missouri and Kansas, with major population centers on both sides (Overland Park, Olathe, and Lenexa in Kansas; Independence, Lee's Summit, and Liberty in Missouri). Patients frequently work in one state and live in another, creating confusion about which state's telehealth regulations apply and which physicians are licensed to prescribe.",
          "The healthcare IT irony deepens the narrative. Kansas City is the birthplace of the modern electronic health record—Cerner (now Oracle Health) was founded here and remains one of the city's largest employers. The city that built the digital infrastructure of American healthcare delivery still relies on that infrastructure's referral workflows, which create the very delays its residents experience.",
          "GLP-1 medications cut through the EHR referral chains, the state-line complexity, and the BBQ-driven caloric environment. They restore metabolic signaling without requiring Kansas City residents to abandon burnt ends or navigate a two-state healthcare bureaucracy."
        ]}
        citations={[
          "Kansas City Health Department. (2025). <em>Community Health Assessment: Chronic Disease and Obesity in Jackson County</em>.",
          "University of Kansas Medical Center. (2024). <em>Cross-State Healthcare Access Barriers in the Kansas City Metropolitan Area</em>."
        ]}
      />
      <InsuranceBreakdown
        title="The EHR Capital and the Two-State Insurance Maze"
        text="Kansas City's employer landscape spans two states, creating unique insurance navigation challenges."
        employers={[
          { name: "Oracle Health (Cerner)", detail: "The city's largest tech employer offers self-funded plans that classify GLP-1 weight management as specialty-tier, requiring prior authorization through the very EHR referral systems its engineers built." },
          { name: "Sprint/T-Mobile / Garmin / Hallmark", detail: "Kansas City's corporate HQs offer competitive benefits, but all rely on PBM-managed formularies with standard Step Therapy barriers for GLP-1 access." },
          { name: "Saint Luke's / KU Health / AdventHealth", detail: "The major health systems spanning both states employ thousands whose own plans restrict the medications they prescribe to patients." }
        ]}
      />
      <CostComparisonTable
        title="What Weight Loss Actually Costs in Kansas City"
        localCompetitors={[
          { name: "Plaza / Mission Hills Concierge", cost: "$700 - $1,100 / mo", consult: "Mandatory In-Person", access: "Branded Only" },
          { name: "Overland Park MedSpas", cost: "$400 - $700 / mo", consult: "Monthly Membership", access: "Variable Compounding" },
          { name: "Saint Luke's Endocrinology", cost: "$125 Copay + Rx", consult: "10-14 Week Wait", access: "Prior Auth Required" }
        ]}
        telehealthPrice="From $146 / mo"
      />
      <LocalTransitPain
        title="Bypass the State Line & Saint Luke's Waitlists"
        transitText="Kansas City sprawls across two states with I-35, I-70, and I-435 (the beltway) connecting communities that range from downtown KCMO to suburban Olathe, Kansas. Adding a medical appointment to a cross-state commute is a half-day commitment."
        hospitalText="<strong>Saint Luke's Health System</strong>, <strong>KU Health (University of Kansas)</strong>, and <strong>AdventHealth</strong> anchor the metro's healthcare. Specialist waits average 10-14 weeks."
      />
      <InteractiveFAQ
        faqs={[
          { q: "I live in Overland Park (Kansas) but work in KCMO. Which state applies?", a: "Your prescribing state is determined by your physical residence. If you live in Kansas, you'll be evaluated by a KS-licensed physician. We serve both Missouri and Kansas residents." },
          { q: "Do you deliver to both sides of the state line?", a: "Yes. We deliver to all addresses in the KC metro across both Missouri and Kansas, including Overland Park, Olathe, Lee's Summit, and Independence." }
        ]}
      />
      <StateLegalFramework
        stateName="Missouri"
        boardName="Missouri State Board of Registration for the Healing Arts"
        text="Telehealth FX operates in compliance with the <strong>Missouri State Board of Registration for the Healing Arts</strong> and Missouri telehealth statutes. For Kansas-side residents, our prescribers hold appropriate Kansas medical licenses. All prescribers are verified through their respective state licensing portals."
      />
      <DeliveryGridMap
        cityName="Kansas City"
        mapQuery="Kansas City, MO"
        coordinates="39.0997° N, 94.5786° W"
        counties="Jackson County (MO), Johnson County (KS), Clay County (MO), Wyandotte County (KS)"
        neighborhoods={['Country Club Plaza', 'Crossroads', 'Westport', 'Overland Park', 'Olathe', "Lee's Summit", 'Liberty', 'Brookside', 'Waldo']}
      />
      <FinalCTA stateName="Missouri" />
    </div>
  );
}
