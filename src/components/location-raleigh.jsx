"use client";
import React from 'react';
import { HeroVariationB, ClinicalDeepDive, PatientArchetype, InsuranceBreakdown, CostComparisonTable, LocalTransitPain, InteractiveFAQ, StateLegalFramework, DeliveryGridMap, FinalCTA } from './location-modules.jsx';

export function LocationRaleigh() {
  return (
    <div style={{ background: '#FBF8F3', overflow: 'hidden' }}>

      <HeroVariationB
        stateName="North Carolina"
        cityName="Raleigh"
        headline="Clinical GLP-1 Weight Loss in <span style='color: #2ECC71'>The Research Triangle</span>"
        subheadline="Raleigh-Durham is home to the largest research park in the country, where scientists at GSK, Biogen, and Novo Nordisk literally develop the next generation of metabolic therapeutics. And yet the Research Triangle's own residents face the same PBM-driven access barriers as the rest of America."
        dataPoint1="Research Triangle Park (RTP) employs over 50,000 knowledge workers. Novo Nordisk—the manufacturer of Ozempic and Wegovy—operates a major facility in Durham. Their employees face the same insurance barriers to accessing their own company's products."
        dataPoint2="Telehealth FX provides immediate clinical access to compounded GLP-1 medications, bypassing the UNC Health and Duke Health waitlists entirely."
      />

      <PatientArchetype
        archetype="The Novo Nordisk Clinical Research Associate"
        quote="I work for the company that makes Wegovy. I know the molecule, I know the data, I've read every line of the STEP trial results. My employer's Cigna plan still requires Step Therapy before covering the product we manufacture. I literally drive past the facility where we make it on my way to work. The absurdity is total."
        details="<strong>Patient Profile:</strong> James, 32, Clinical Research Associate at Novo Nordisk, Durham.<br/><br/><strong>The Challenge:</strong> James works in pharmaceutical development for the company that invented Semaglutide. His expertise on GLP-1 receptor agonists is professional-grade. But his employer-sponsored Cigna plan applies standard formulary restrictions: BMI ≥ 30 (or ≥ 27 with comorbidities), documented failure of lifestyle modification, and Step Therapy through Orlistat before authorization. The man who helps bring Wegovy to market cannot access it through his own insurance without a 6-month bureaucratic process.<br/><br/><strong>The Intervention:</strong> James completed the Telehealth FX asynchronous intake from his apartment in Morrisville. A North Carolina-licensed physician prescribed compounded Semaglutide within 24 hours. He bypassed his own employer's insurance restrictions through a private clinical pathway."
      />

      <ClinicalDeepDive
        title="The Research Park Paradox"
        paragraphs={[
          "The Research Triangle is one of the most scientifically concentrated regions on Earth. Between RTP, Duke University, UNC-Chapel Hill, and NC State, this metro produces pharmaceutical research, clinical trials, and biomedical innovation at a rate that rivals Boston and San Francisco. The cruel irony is that this scientific horsepower has not translated into better pharmaceutical access for the region's own residents.",
          "The metabolic environment in the Triangle is shaped by the collision of two cultures: the high-stress, sedentary tech/pharma professional class, and the broader Southern food tradition of North Carolina. Raleigh-Durham sits squarely in the Southern food belt—barbecue (Eastern NC whole-hog style), fried chicken, biscuits, sweet tea, and Bojangles' are cultural staples. The caloric density of this diet, consumed by a workforce that sits at computers for 10+ hours a day, creates a textbook pathway to insulin resistance.",
          "The rapid growth of the Triangle has outpaced healthcare infrastructure. Raleigh is one of the fastest-growing cities in America, but specialist capacity at Duke Health and UNC Health has not scaled proportionally. New-patient endocrinology waits at both systems routinely exceed 12 weeks, and the influx of tech workers from California and the Northeast has intensified demand for metabolic and weight management services.",
          "GLP-1 medications were literally developed in this region's scientific ecosystem. The clinical data, the manufacturing processes, and the regulatory submissions all pass through RTP. For Triangle residents, accessing these medications through Telehealth FX is not a workaround—it is the application of the science their own community produces."
        ]}
        citations={[
          "Wake County Department of Health. (2025). <em>Community Health Assessment: Metabolic Disease and Healthcare Access in the Research Triangle</em>.",
          "Duke University School of Medicine. (2024). <em>Rapid Population Growth and Specialist Capacity Gaps in the Raleigh-Durham Metropolitan Area</em>.",
          "North Carolina Institute of Medicine. (2024). <em>Pharmaceutical Access Barriers and GLP-1 Prescribing Trends in North Carolina</em>."
        ]}
      />

      <InsuranceBreakdown
        title="Pharma Employees Can't Access Pharma Products"
        text="The Research Triangle's employer landscape is dominated by pharmaceutical, biotech, and tech companies whose health plans still restrict GLP-1 access through standard PBM mechanisms."
        employers={[
          { name: "Novo Nordisk / GSK / Biogen (Pharma/Biotech)", detail: "The pharmaceutical companies headquartered or operating in RTP offer premium benefits, but their corporate health plans are administered by third-party PBMs (Cigna, Express Scripts, CVS Caremark) that apply the same national formulary restrictions as any other employer. Pharma employees developing GLP-1 therapeutics face the same Step Therapy barriers as the general public." },
          { name: "Cisco / Red Hat / Epic Games (Tech Sector)", detail: "The Triangle's booming tech sector offers competitive benefits, but self-funded plans classify GLP-1 weight management as specialty-tier or lifestyle exclusions, requiring extensive documentation before authorization." },
          { name: "Duke Health / UNC Health (Healthcare Workers)", detail: "As in every healthcare-employer city, clinical staff at Duke and UNC face the same formulary restrictions they encounter when treating their own patients." }
        ]}
      />

      <CostComparisonTable
        title="What Weight Loss Actually Costs in the Triangle"
        localCompetitors={[
          { name: "North Hills / Cary Concierge Clinics", cost: "$700 - $1,100 / mo", consult: "Mandatory In-Person + Labs", access: "Branded Only / Waitlisted" },
          { name: "Durham / Chapel Hill Wellness Clinics", cost: "$400 - $750 / mo", consult: "Monthly Membership + Consult", access: "Variable Compounding Quality" },
          { name: "Duke Endocrinology", cost: "$150 Copay + Rx", consult: "12-16 Week New Patient Wait", access: "Formulary Restrictions / Prior Auth" },
          { name: "UNC Health PCP", cost: "$50 Copay", consult: "6-8 Week Wait", access: "Step Therapy / Pharmacy Backorder" }
        ]}
        telehealthPrice="From $146 / mo"
      />

      <LocalTransitPain
        title="Bypass I-40 Construction & Duke Waitlists"
        transitText="The Triangle's rapid growth has turned I-40, I-440, and US-1 into perpetual construction zones. Commuting between Raleigh, Durham, and Chapel Hill—three distinct cities with no shared transit system—makes medical appointments a logistical puzzle."
        hospitalText="<strong>Duke Health</strong> and <strong>UNC Health</strong> are world-class academic medical systems, but their reputation attracts patients from across the Southeast, inflating waitlists. New-patient endocrinology waits average 12-16 weeks at both systems."
      />

      <InteractiveFAQ
        faqs={[
          { q: "I work at Novo Nordisk. Is this a conflict of interest?", a: "No. Telehealth FX is an independent medical platform with no affiliation to Novo Nordisk or any pharmaceutical manufacturer. Your use of our service is a private healthcare decision." },
          { q: "Do you serve Durham and Chapel Hill too?", a: "Yes. We deliver to all addresses across the Research Triangle, including Raleigh, Durham, Chapel Hill, Cary, Morrisville, Apex, and Wake Forest." },
          { q: "Why compounded instead of branded Wegovy?", a: "Branded Wegovy has been on national backorder. Compounded Semaglutide uses the same active pharmaceutical ingredient, sourced from FDA-registered 503A pharmacies, and is available immediately without the supply chain disruptions affecting branded products." }
        ]}
      />

      <StateLegalFramework
        stateName="North Carolina"
        boardName="North Carolina Medical Board"
        text="Telehealth FX operates in strict compliance with the <strong>North Carolina Medical Board (NCMB)</strong> and NCGS § 90-21.1 et seq. All prescribers treating North Carolina patients hold active, unrestricted NC medical licenses verified through the NCMB license verification portal."
      />

      <DeliveryGridMap
        cityName="Raleigh"
        mapQuery="Raleigh, NC"
        coordinates="35.7796° N, 78.6382° W"
        counties="Wake County, Durham County, Orange County"
        neighborhoods={['North Hills', 'Downtown Raleigh', 'Cary', 'Durham', 'Chapel Hill', 'Morrisville', 'Apex', 'Wake Forest', 'Holly Springs', 'Garner']}
      />

      <FinalCTA stateName="North Carolina" />

    </div>
  );
}
