"use client";
import React from 'react';
import { HeroVariationA, PatientArchetype, ClinicalDeepDive, CostComparisonTable, InsuranceBreakdown, InteractiveFAQ, LocalTransitPain, StateLegalFramework, DeliveryGridMap, FinalCTA } from './location-modules.jsx';

export function LocationMiami() {
  return (
    <div style={{ background: '#FBF8F3', overflow: 'hidden' }}>

      <HeroVariationA
        stateName="Florida"
        cityName="Miami"
        headline="Clinical GLP-1 Weight Loss in <br/><span style='color: #2ECC71'>Miami</span>"
        subheadline="Miami is the aesthetic capital of America. It also has the highest concentration of unregulated 'Skinny Shot' MedSpas operating out of strip malls. Skip the aesthetic clinics and the $800/month Brickell memberships. Access true clinical-grade, 503A-compounded Semaglutide, evaluated by licensed physicians and delivered directly to your door."
        ctaText="Check Florida Eligibility"
      />

      <PatientArchetype
        archetype="The Brickell Finance Transplant"
        quote="I moved down from New York two years ago. The lifestyle here is relentless. You're expected to work Wall Street hours, but client dinners at Carbone don't even start until 10 PM, and you're at the club until 2 AM. Everyone looks flawless, but nobody sleeps. My cortisol was through the roof, and I was gaining weight while eating $150 steaks. I tried one of those IV drip MedSpas in an office park—it felt like a scam. I wanted actual medicine."
        details="<strong>Patient Profile:</strong> Julian, 35, Vice President at a relocated private equity firm, Brickell.<br/><br/><strong>The Challenge:</strong> Julian represents the post-2020 Miami economic migration. He brought a high-stress, 70-hour workweek into a city whose social and professional culture revolves around late-night excess. His circadian rhythm was shattered by 10 PM dinners and 2 AM networking, resulting in chronic cortisol elevation and progressive insulin resistance. His firm's Cigna plan classified GLP-1s as a lifestyle exclusion. When he looked for local options, he was bombarded by Instagram ads for Miami MedSpas offering 'Semaglutide + B12' packages for $900/month, administered by aestheticians rather than physicians. He needed clinical metabolic care, not a cosmetic upsell.<br/><br/><strong>The Intervention:</strong> Julian completed the Telehealth FX asynchronous intake from his high-rise apartment on a Sunday morning. A Florida-licensed physician evaluated his metabolic profile, recognizing the severe insulin resistance driven by chronic circadian disruption. Compounded Tirzepatide from an FDA-registered 503A pharmacy was prescribed within 24 hours. No hidden fees. No upselling on IV drips. Just rigorous clinical care."
      />

      <ClinicalDeepDive
        title="The Aesthetic Capital's Hidden Epidemic"
        paragraphs={[
          "Miami operates under an intense, city-wide aesthetic pressure that no other American metro can match. The physical culture of South Beach, the wealth concentration in Brickell and Coral Gables, and the year-round beach climate create a relentless demand for physical perfection. But the reality of how Miami actually lives is metabolically destructive.",
          "The culture is fundamentally nocturnal. In Miami, a 7 PM dinner reservation is considered early. The Latin American and European influence on the city's social clock means that heavy, calorie-dense meals—whether fine dining in Design District or late-night Cuban food in Little Havana—are routinely consumed between 9 PM and midnight. Eating high-glycemic loads just hours before sleep severely blunts the body's natural insulin response and forces the liver to store excess glucose as visceral fat. This late-night eating culture, combined with the city's heavy nightlife, creates chronic circadian disruption even for those outside the hospitality industry.",
          "The daily fuel for this lifestyle is the 'Cafecito' (Cuban coffee). While culturally beloved, a traditional Colada is essentially a massive bolus of sugar whipped into espresso, consumed multiple times a day. These repeated, concentrated sugar spikes keep the workforce awake but keep insulin levels chronically elevated, accelerating insulin resistance.",
          "Because the aesthetic pressure is so high and the lifestyle so metabolically hostile, Miami has birthed a massive, unregulated 'weight loss' industry. Driving down US-1, the Palmetto, or through Doral, you will see hundreds of strip-mall MedSpas and aesthetic clinics advertising 'Skinny Shots.' Many of these operations source untested peptides from compounding facilities lacking FDA 503A designation, bundle them with unnecessary B12 injections or IV drips, and charge $600 to $1,000 per month. They treat weight loss as a cosmetic procedure, entirely ignoring the underlying endocrine dysfunction.",
          "Telehealth FX provides the clinical antithesis to the Miami MedSpa. GLP-1 receptor agonists are not cosmetic treatments; they are powerful metabolic hormones that restore incretin signaling and repair insulin sensitivity. They require evaluation by a licensed physician, transparent sourcing from verified 503A pharmacies, and rigorous clinical oversight. We deliver exactly that—without the velvet ropes or the cosmetic upcharge."
        ]}
        citations={[
          "Florida Department of Health in Miami-Dade County. (2025). <em>Community Health Assessment: Chronic Disease and Metabolic Indicators</em>.",
          "University of Miami Miller School of Medicine. (2024). <em>Circadian Disruption and Insulin Resistance in Late-Dining Urban Populations</em>.",
          "Florida Board of Medicine / FDA Joint Advisory. (2024). <em>Consumer Warnings Regarding Unregulated Peptide Sourcing in Aesthetic Clinics</em>."
        ]}
      />

      <CostComparisonTable
        title="The Miami MedSpa Tax vs. Clinical Reality"
        localCompetitors={[
          { name: "Brickell / South Beach VIP Clinics", cost: "$900 - $1,500 / mo", consult: "Mandatory IV Drip / Supplement Bundles", access: "Unverified Compounding Sources" },
          { name: "Doral / Hialeah Strip Mall MedSpas", cost: "$500 - $800 / mo", consult: "Administered by Aestheticians", access: "Questionable Peptide Sourcing" },
          { name: "UHealth / Jackson Memorial Endo", cost: "$150 Copay + Rx", consult: "12-16 Week New Patient Wait", access: "Formulary Restrictions / Prior Auth" },
          { name: "Baptist Health Primary Care", cost: "$50 Copay", consult: "6-8 Week Wait", access: "Step Therapy / Pharmacy Backorder" }
        ]}
        telehealthPrice="From $146 / mo"
      />

      <InsuranceBreakdown
        title="The Service Economy and the Finance Influx"
        text="Miami's economy is a tale of two cities: the massive hospitality and cruise industry workforce, and the recent influx of high-finance and tech capital. Both face distinct barriers to GLP-1 access."
        employers={[
          { name: "Cruise Lines (Carnival, Royal Caribbean)", detail: "Miami is the cruise capital of the world. Corporate employees at the major cruise lines are covered by self-funded plans that frequently apply Step Therapy and prior authorization to GLP-1s. The irony is stark: these companies operate floating buffets but restrict metabolic care for the corporate staff managing them." },
          { name: "Finance & Tech Transplants (Citadel, etc.)", detail: "The massive wealth migration to Miami brought thousands of professionals on premium corporate health plans. However, these national plans (often Cigna or Aetna) apply the exact same PBM formulary restrictions in Florida as they do in New York. Wealth does not buy formulary access; it simply pushes this demographic toward high-priced cash-pay concierge doctors." },
          { name: "Hospitality & Tourism Service Workers", detail: "The engine of Miami—the hotel staff, restaurant workers, and nightlife industry—often relies on ACA marketplace plans (Florida Blue) or remains uninsured. For this demographic, a $900/month MedSpa is impossible, and an 8-week wait for an in-network endocrinologist is impractical. Telehealth FX provides the most accessible clinical pathway for the city's actual workforce." }
        ]}
      />

      <InteractiveFAQ
        faqs={[
          { q: "How are you different from the MedSpas in my neighborhood?", a: "Telehealth FX is a medical practice, not a cosmetic clinic. We do not sell IV drips, Botox, or B12 shots. You are evaluated by a licensed physician specializing in metabolic health. Most importantly, our medications are sourced exclusively from FDA-registered 503A compounding pharmacies operating under USP guidelines, ensuring safety and efficacy that strip-mall clinics often cannot verify." },
          { q: "I drink 3-4 Cafecitos a day. Do I need to stop for this to work?", a: "GLP-1 medications work by restoring proper hormonal signaling, regardless of your diet. However, the concentrated sugar in a traditional Colada causes severe glucose spikes. As the medication recalibrates your appetite and insulin response, you will likely find your craving for that much sugar naturally diminishes. You don't have to force yourself to stop; the medication helps change your physiological desire for it." },
          { q: "Is this legal in Florida?", a: "Yes. Telehealth FX operates in strict compliance with the Florida Board of Medicine and Florida telehealth statutes (F.S. § 456.47). All prescribers treating Florida patients hold active, unrestricted Florida medical licenses. The dispensing of compounded medications from 503A pharmacies is fully permitted under state and federal law." },
          { q: "Do you deliver to Fort Lauderdale or West Palm Beach?", a: "Yes. We deliver to all residential and commercial addresses in Miami-Dade, Broward, and Palm Beach counties—covering the entire South Florida tri-county area." },
          { q: "I have a Florida Blue ACA plan. Can I use that?", a: "Telehealth FX is a private, self-pay medical service. We do not process insurance claims, which allows us to bypass Florida Blue's prior authorization requirements, Step Therapy mandates, and the 16-week waitlists for in-network specialists. If you have an HSA/FSA, you may use those funds." }
        ]}
      />

      <LocalTransitPain
        title="Bypass the I-95 Gridlock & UHealth Waitlists"
        transitText="Miami's geography—squeezed between the Everglades and the Atlantic Ocean—creates a linear traffic nightmare. I-95 is perpetually congested. The Palmetto Expressway (SR 826) and the Dolphin Expressway (SR 836) are daily stress tests. Commuting from Kendall to a specialist in the Health District, or trying to cross the MacArthur Causeway during rush hour, turns a 20-minute medical appointment into a three-hour logistical ordeal."
        hospitalText="Miami's medical hub is anchored by <strong>UHealth (University of Miami)</strong> and <strong>Jackson Memorial Hospital</strong>, alongside the sprawling <strong>Baptist Health</strong> network to the south. These are world-class institutions, but they serve a tri-county area of 6 million people. The wait for a new-patient endocrinology appointment at UHealth or Baptist routinely exceeds 12 to 16 weeks. Meanwhile, your local <strong>Publix</strong> or <strong>CVS</strong> pharmacy has branded Wegovy on indefinite backorder."
      />

      <StateLegalFramework
        stateName="Florida"
        boardName="Florida Board of Medicine"
        text="Telehealth FX operates in strict compliance with the <strong>Florida Board of Medicine</strong> and Florida Statute § 456.47 (Florida's Telehealth Act). Florida has been a leader in modernizing telemedicine regulations. Under current law, a physician-patient relationship may be established via telehealth technologies, including asynchronous store-and-forward systems, for the purpose of evaluating patients and prescribing non-controlled medications. All Telehealth FX prescribers treating Florida patients hold active, unrestricted Florida medical licenses verified through the Florida Department of Health's Medical Quality Assurance (MQA) portal."
      />

      <DeliveryGridMap
        cityName="Miami"
        mapQuery="Miami, FL"
        coordinates="25.7617° N, 80.1918° W"
        counties="Miami-Dade County, Broward County, Palm Beach County"
        neighborhoods={['Brickell', 'South Beach', 'Coral Gables', 'Wynwood', 'Design District', 'Coconut Grove', 'Doral', 'Kendall', 'Fort Lauderdale', 'Boca Raton']}
      />

      <FinalCTA stateName="Florida" />

    </div>
  );
}
