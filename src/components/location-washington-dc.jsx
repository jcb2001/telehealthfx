"use client";
import React from 'react';
import { HeroVariationB, PatientArchetype, ClinicalDeepDive, InsuranceBreakdown, InteractiveFAQ, CostComparisonTable, LocalTransitPain, StateLegalFramework, DeliveryGridMap, FinalCTA } from './location-modules.jsx';

export function LocationWashingtonDC() {
  return (
    <div style={{ background: '#FBF8F3', overflow: 'hidden' }}>

      <HeroVariationB
        stateName="Washington, D.C."
        cityName="Washington, D.C."
        headline="Clinical GLP-1 Weight Loss in <span style='color: #2ECC71'>Washington, D.C.</span>"
        subheadline="The people who write American healthcare policy, regulate the FDA, and vote on drug pricing legislation all work within two miles of the Capitol. And they face the same GLP-1 access barriers as every other American. Compounded Semaglutide, delivered from Georgetown to Tysons."
        dataPoint1="FEHB (Federal Employee Health Benefits) covers 8 million federal workers and family members. Most FEHB plans impose Step Therapy and prior authorization for GLP-1 weight management—policies set by the same government these employees serve."
        dataPoint2="Telehealth FX provides a private clinical pathway outside the federal benefits system. Asynchronous intake, overnight delivery, zero bureaucratic friction."
      />

      <PatientArchetype
        archetype="The Senate Appropriations Staffer"
        quote="I helped draft the hearing questions on GLP-1 drug pricing for the Appropriations subcommittee. I understand the supply chain, the PBM rebate structure, and the formulary mechanics better than most physicians. And I still can't get my FEHB plan to cover Wegovy without a six-month Step Therapy process. I write the policy. I just can't benefit from it."
        details="<strong>Patient Profile:</strong> Sarah, 33, Senior Policy Advisor on the Senate Appropriations Committee, Capitol Hill.<br/><br/><strong>The Challenge:</strong> Sarah works 65-75 hours per week during session, with her schedule dictated by committee markups, floor votes, and the Senator's calendar. Meals are eaten at her desk—Senate cafeteria salads when she's disciplined, Chick-fil-A or vending machine snacks when she's not. Her FEHB Blue Cross plan requires Step Therapy (Orlistat, then Contrave) and a specialist referral for GLP-1 authorization. The nearest in-network endocrinologist in the District had an 8-week wait. She has deep policy expertise on exactly why this process is broken—she's researched PBM rebate structures, FDA compounding regulations, and formulary economics for her committee work—and she still cannot navigate it for her own care in less than 6 months.<br/><br/><strong>The Intervention:</strong> Sarah completed the Telehealth FX intake from her Rayburn Building office during a recess between votes. A D.C.-licensed physician reviewed her profile asynchronously and prescribed compounded Tirzepatide within 12 hours. Cold-packed medication arrived at her Capitol Hill apartment the next morning. She bypassed the system she studies professionally—not through a loophole, but through a separate clinical pathway that doesn't require the government's permission."
      />

      <ClinicalDeepDive
        title="The Power Lunch Paradox"
        paragraphs={[
          "Washington, D.C. runs on stress in a way that no other American city replicates. Not the financial stress of Wall Street (which at least has weekends) or the startup stress of Silicon Valley (which at least has stock options). D.C. stress is existential and cyclical: election cycles that can end your career every two years, government shutdowns that freeze your paycheck, security clearance processes that scrutinize your personal life, and the constant, ambient awareness that the work you do—for better or worse—affects millions of people. This is cortisol as a professional lifestyle.",
          "The metabolic consequence is amplified by D.C.'s unique meal culture. This is a city where lunch is a meeting, dinner is a fundraiser, and drinks are 'networking.' The K Street steakhouse lunch (1,400 calories with the Cab Sav). The Georgetown cocktail reception (800 calories in passed hors d'oeuvres and prosecco). The lobbyist dinner at an M Street restaurant (2,000 calories with wine pairings). These are not discretionary—they are the professional infrastructure of a city whose economy runs on relationships cultivated over meals.",
          "For Congressional staff, the metabolic environment is even more compressed. The Senate and House cafeterias, the carryout options within walking distance of the Capitol, and the reality of eating dinner at a desk at 9 PM because the markup isn't finished—these produce a dietary pattern defined by convenience, speed, and stress. The average Hill staffer consumes 2,800 to 3,400 calories per day despite sitting for 12+ hours. The combination of high-cortisol professional stress and chronic caloric surplus is a textbook pathway to insulin resistance.",
          "The federal employee population faces an additional irony. The same government that funds the NIH studies validating GLP-1 efficacy, that empowers the FDA to approve these medications, and that convenes hearings on PBM-driven access barriers offers its own workforce health plans (FEHB) that impose the very Step Therapy and prior authorization protocols these hearings critique. The policy gap between what the government knows works and what it provides its own employees is among the starkest in American healthcare.",
          "GLP-1 receptor agonists address the cortisol-driven, power-lunch-amplified insulin resistance that D.C.'s professional culture produces. They restore appetite regulation and metabolic signaling within the very lifestyle context that causes the dysfunction—because asking a Senate staffer to stop attending dinners or a K Street consultant to decline client lunches is asking them to stop doing their job."
        ]}
        citations={[
          "D.C. Department of Health. (2025). <em>District of Columbia Community Health Needs Assessment: Chronic Disease and Metabolic Health Indicators</em>.",
          "George Washington University Milken Institute School of Public Health. (2024). <em>Occupational Stress, Cortisol Elevation, and Metabolic Outcomes in Federal Government Employees</em>.",
          "Congressional Research Service. (2024). <em>Federal Employee Health Benefits Program: GLP-1 Coverage Analysis and Formulary Trends</em>."
        ]}
      />

      <InsuranceBreakdown
        title="FEHB: 8 Million People, Same Formulary Barriers"
        text="Washington, D.C.'s insurance landscape is dominated by a single system: the Federal Employee Health Benefits (FEHB) program. Whether you work at the Capitol, the Pentagon, the NIH, or the IRS, FEHB is likely your health plan. And across nearly every FEHB carrier, GLP-1 weight management faces the same barriers."
        employers={[
          { name: "FEHB Plans (Blue Cross, Aetna, Kaiser, GEHA)", detail: "FEHB offers dozens of plan options, but the major carriers—BCBS, Aetna, Kaiser, GEHA—all impose prior authorization and Step Therapy for GLP-1 weight management. The specific requirements vary by carrier, but the pattern is consistent: BMI thresholds, documented comorbidities, and 3-6 months of 'failed' lower-cost therapy before authorization is even considered. OPM sets the framework; the carriers execute it." },
          { name: "Congressional Staff Plans", detail: "Members of Congress and their staff are enrolled in D.C. Health Link (ACA exchange) plans per the Affordable Care Act. These plans apply the same formulary restrictions as standard ACA marketplace plans, with GLP-1 weight management typically excluded or placed on specialty tiers requiring extensive prior authorization." },
          { name: "Defense Contractors (Booz Allen, SAIC, Leidos)", detail: "The Beltway's massive defense consulting industry—Booz Allen Hamilton, SAIC, Leidos, and dozens of others along the Dulles Corridor—offers self-funded plans that classify GLP-1 weight management as 'lifestyle' medicine. For cleared professionals who already navigate bureaucratic complexity for a living, the insurance prior authorization process is one system too many." },
          { name: "World Bank / IMF / International Organizations", detail: "International organization employees working in D.C. are often covered by non-U.S. health systems (World Bank Group Health Plan, IMF Medical Benefits Plan) with their own formulary structures. These plans frequently don't cover U.S.-based telehealth prescriptions, making Telehealth FX's self-pay model the most accessible pathway." }
        ]}
      />

      <InteractiveFAQ
        faqs={[
          { q: "I'm a federal employee. Will this affect my security clearance?", a: "No. Telehealth FX is a private, self-pay medical service. Using our platform is a personal healthcare decision that does not interact with your security clearance adjudication, your SF-86, or any government database. GLP-1 medications are not controlled substances and have no relevance to clearance criteria." },
          { q: "I live in Arlington / Alexandria (VA) but work in D.C. Which jurisdiction applies?", a: "Your prescribing jurisdiction is determined by your physical residence at the time of consultation, not your workplace. If you live in Virginia, you'll be evaluated by a VA-licensed physician under Virginia telehealth regulations. We serve D.C., Maryland, and Virginia residents across the entire DMV metro." },
          { q: "I live in Bethesda / Silver Spring (Maryland). Can I use this?", a: "Absolutely. If you reside in Maryland, you'll be evaluated by an MD-licensed physician under Maryland telehealth regulations. We serve the full DMV tri-state area." },
          { q: "My schedule is dictated by floor votes and committee markups. How does this work?", a: "Asynchronous telemedicine was designed for exactly this unpredictability. There is no scheduled appointment. Complete your intake during a recess, between votes, during a Metro ride, or at 11 PM after a markup finishes. Your physician reviews your profile independently within 24 hours." },
          { q: "How is this different from the Georgetown and Dupont Circle concierge clinics?", a: "Georgetown concierge clinics charge $1,000-$1,600/month and require in-person visits. Telehealth FX provides the same active pharmaceutical ingredients prescribed by a licensed physician at a fraction of the cost. The medication is clinically identical—the delivery model is more efficient and more accessible." }
        ]}
      />

      <CostComparisonTable
        title="What Weight Loss Actually Costs in D.C."
        localCompetitors={[
          { name: "Georgetown / Dupont Concierge Medicine", cost: "$1,000 - $1,600 / mo", consult: "Mandatory In-Person + Full Panel", access: "Branded Only / 2-4 Week Wait" },
          { name: "14th Street / Logan Circle Aesthetic Clinics", cost: "$600 - $1,000 / mo", consult: "Monthly Membership + Consult", access: "Variable Compounding Sources" },
          { name: "GW Hospital Endocrinology", cost: "$200 Copay + Rx", consult: "8-12 Week New Patient Wait", access: "Formulary Restrictions / Prior Auth" },
          { name: "MedStar Georgetown PCP", cost: "$60 Copay", consult: "4-6 Week Wait", access: "Step Therapy / Pharmacy Backorder" }
        ]}
        telehealthPrice="From $146 / mo"
      />

      <LocalTransitPain
        title="Bypass the Beltway & GW Hospital Waitlists"
        transitText="The DMV traffic nightmare needs no introduction. The Capital Beltway (I-495), I-66 through Northern Virginia, the I-270 spur to Maryland, and the American Legion Bridge constitute one of the worst traffic systems in the United States. Even within the District, the Metro (WMATA)—while better than most American transit systems—is plagued by chronic delays, single-tracking, and weekend shutdowns that make medical appointment planning unreliable."
        hospitalText="D.C. has excellent medical institutions. <strong>MedStar Georgetown University Hospital</strong>, <strong>GW Hospital</strong>, and <strong>MedStar Washington Hospital Center</strong> serve the District. <strong>Johns Hopkins</strong> is 40 miles northeast in Baltimore. <strong>Walter Reed National Military Medical Center</strong> in Bethesda serves the military community. But new-patient endocrinology appointments at GW average 8-12 weeks. MedStar Georgetown runs 6-10 weeks. Your local <strong>CVS</strong>, <strong>Giant</strong>, or <strong>Harris Teeter</strong> pharmacy has branded Wegovy on the same indefinite national backorder."
      />

      <StateLegalFramework
        stateName="District of Columbia"
        boardName="D.C. Board of Medicine"
        text="Telehealth FX operates in strict compliance with the <strong>D.C. Board of Medicine</strong> and D.C. Code § 3-1201.01 et seq., as amended by the district's telehealth regulations. Under current D.C. law, a physician-patient relationship may be established via telehealth, including asynchronous modalities, for prescribing non-controlled medications. For DMV-area patients residing in Virginia or Maryland, our prescribers hold appropriate licenses in those jurisdictions as well. The District of Columbia maintains one of the most progressive telehealth regulatory environments in the country. All D.C.-licensed prescribers are verified through the D.C. Department of Health license verification system."
      />

      <DeliveryGridMap
        cityName="Washington, D.C."
        mapQuery="Washington, DC"
        coordinates="38.9072° N, 77.0369° W"
        counties="District of Columbia, Arlington County (VA), Fairfax County (VA), Montgomery County (MD), Prince George's County (MD)"
        neighborhoods={['Georgetown', 'Capitol Hill', 'Dupont Circle', 'Adams Morgan', 'Bethesda (MD)', 'Arlington (VA)', 'Alexandria (VA)', 'Silver Spring (MD)', 'Tysons (VA)', 'Reston (VA)']}
      />

      <FinalCTA stateName="D.C." />

    
{/* Disclaimer: Mounjaro®, Zepbound®, Ozempic®, and Wegovy® are registered trademarks of their respective owners (Eli Lilly and Company and Novo Nordisk A/S). Telehealth FX is not affiliated with, endorsed by, or connected to any of these companies. Compounded medications are not FDA-approved and are not therapeutically equivalent to any branded product. */}
</div>
  );
}
