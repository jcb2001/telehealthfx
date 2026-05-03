"use client";
import React from 'react';
import { HeroVariationB, ClinicalDeepDive, InsuranceBreakdown, PatientArchetype, LocalTransitPain, StateLegalFramework, CostComparisonTable, InteractiveFAQ, DeliveryGridMap, FinalCTA } from './location-modules.jsx';

export function LocationJacksonville() {
  return (
    <div style={{ background: '#FBF8F3', overflow: 'hidden' }}>

      <HeroVariationB
        stateName="Florida"
        cityName="Jacksonville"
        headline="Clinical GLP-1 Weight Loss in <span style='color: #2ECC71'>Jacksonville</span>"
        subheadline="You live in the largest city by land area in the contiguous United States—874 square miles of pure suburban sprawl with virtually zero public transit. And Florida Blue, the state's dominant insurer, is headquartered in your backyard but still won't approve your GLP-1 prescription. Compounded Semaglutide, delivered from San Marco to Nocatee."
        dataPoint1="Jacksonville's 874-square-mile footprint means a 'crosstown' doctor's appointment can require a 45-minute drive each way—through a metro with no rail system and minimal bus coverage."
        dataPoint2="Telehealth FX eliminates geographic friction entirely. Asynchronous intake from your home, overnight cold-pack delivery to your door. Zero commute."
      />

      <ClinicalDeepDive
        title="The 874-Square-Mile Sedentary Trap"
        paragraphs={[
          "Jacksonville's metabolic health challenge is fundamentally architectural. The city sprawls across 874 square miles—larger than the combined land area of New York City, San Francisco, and Boston. Yet this vast expanse contains almost no functional public transit (the Skyway monorail covers 2.5 miles of downtown), no light rail, and a bus system that requires multi-hour transfers for most crosstown trips. The result is a city where the car is not a convenience but an absolute biological necessity, and where walking as a form of transportation essentially does not exist outside a handful of urban pockets.",
          "This extreme car dependency produces a metabolic baseline that is uniquely challenging. The average Jacksonville commuter spends 56 minutes per day in their vehicle. Combined with desk-based employment in the city's dominant industries—insurance, financial technology, healthcare administration, and logistics—the typical Duval County professional is physically stationary for 13 to 15 hours per day. The step count data is damning: Jacksonville residents average fewer daily steps than residents of cities half its size.",
          "The subtropical climate amplifies the problem seasonally. From June through September, heat indices regularly exceed 105°F, with humidity levels that make outdoor exercise genuinely uncomfortable and periodically dangerous. While the winters are mild enough for outdoor activity, the summer months create an annual metabolic setback that compounds over years—especially when combined with North Florida's comfort food infrastructure.",
          "That food infrastructure deserves its own analysis. Jacksonville sits at the cultural crossroads of the Deep South and coastal Florida, producing a dietary landscape dominated by fried seafood platters, BBQ from Bono's and Bearded Pig, Publix deli subs, sweet tea as a default beverage, and the calorie-dense Southern brunch culture that permeates neighborhoods from Riverside to San Marco. These aren't occasional indulgences—they are the meal architecture of a city where driving to a restaurant is the default social activity because there is nowhere to walk to.",
          "The metabolic endpoint is predictable: chronic caloric surplus within a context of extreme physical inactivity leads to sustained hyperinsulinemia, progressive hepatic and peripheral insulin resistance, and a body composition trajectory that willpower-based interventions cannot reverse. GLP-1 receptor agonists address this at the hormonal level—restoring the incretin signaling that enables proper post-prandial glucose handling, appetite regulation, and fat oxidation."
        ]}
        citations={[
          "Florida Department of Health, Duval County. (2025). <em>Community Health Assessment: Adult Obesity, Diabetes, and Physical Inactivity in Duval and St. Johns Counties</em>.",
          "University of North Florida. (2024). <em>Urban Sprawl, Transportation Dependency, and Health Outcomes in the Jacksonville Metropolitan Statistical Area</em>.",
          "Mayo Clinic Florida. (2024). <em>Regional Patterns of Metabolic Syndrome in Northeast Florida: A Retrospective Analysis</em>."
        ]}
      />

      <InsuranceBreakdown
        title="The Florida Blue Paradox"
        text="Jacksonville is the corporate headquarters of <strong>Florida Blue</strong> (GuideWell), the state's dominant Blue Cross Blue Shield affiliate and the largest health insurer in Florida. The company employs thousands of Duval County residents. And yet Florida Blue's own formulary makes accessing GLP-1 medications for weight management extraordinarily difficult—even for its own employees."
        employers={[
          { name: "Florida Blue / GuideWell (HQ'd in Jacksonville)", detail: "Florida Blue's standard commercial plans place GLP-1 weight management medications on restricted specialty tiers requiring prior authorization with documented BMI ≥30 (or ≥27 with comorbidities), proof of failed behavioral interventions, and a prescribing physician willing to navigate a multi-step appeals process. The irony of living in the insurer's headquarters city and facing these barriers is not lost on Duval County residents." },
          { name: "FIS / Fidelity / Financial Services", detail: "Jacksonville's massive financial technology sector (FIS is headquartered here; Fidelity, Deutsche Bank, and Macquarie all have major campuses) offers employer-sponsored plans that typically exclude weight management pharmaceuticals from their formularies entirely, classifying them as 'lifestyle' medications." },
          { name: "Naval Station Mayport / NAS Jacksonville (TRICARE)", detail: "Jacksonville's significant military population faces the same TRICARE formulary restrictions documented across all DoD installations: restrictive BMI thresholds, referral chain requirements, and military treatment facility backlogs." }
        ]}
      />

      <PatientArchetype
        archetype="The Florida Blue Claims Processor"
        quote="I process GLP-1 prior authorization denials for a living. Eight hours a day, I click 'deny' on Wegovy requests because they don't meet the formulary criteria my employer wrote. Then I go home and can't get the same medication approved for myself through my own company's plan. You can't make this up."
        details="<strong>Patient Profile:</strong> Tamika, 42, Senior Claims Analyst at Florida Blue, downtown Jacksonville.<br/><br/><strong>The Challenge:</strong> Tamika's job involves reviewing and adjudicating prior authorization requests for GLP-1 medications—requests she denies daily based on formulary criteria established by her own employer. She has intimate knowledge of exactly why these denials occur (insufficient documentation of failed behavioral therapy, BMI 0.5 points below threshold, missing comorbidity codes). When she submitted her own prior authorization through her employee Florida Blue plan, she received the same form denial she issues to thousands of Floridians every month. She knows the appeal process intimately—and she knows it would take 4 to 6 months.<br/><br/><strong>The Intervention:</strong> Tamika completed the Telehealth FX intake during her lunch break at the Florida Blue campus. A Florida-licensed physician reviewed her profile asynchronously and prescribed compounded Tirzepatide. Cold-packed medication arrived at her Mandarin home two days later. She bypassed the very system she administers—not through a loophole, but through an entirely separate clinical pathway that operates outside the insurance framework altogether."
      />

      <LocalTransitPain
        title="Bypass the JTB Crawl & Mayo Clinic Florida Waitlists"
        transitText="Getting across Jacksonville is a logistical project unto itself. Whether you're stuck on the J. Turner Butler Boulevard (JTB) commuting from the Beaches to the Southside, grinding through the I-95/I-10 interchange downtown, navigating the 295 beltway around the Westside, or driving 30 minutes south on I-95 to reach a specialist in St. Johns County—a medical appointment in this city requires planning your entire day around the drive."
        hospitalText="Jacksonville punches well above its weight in healthcare quality. <strong>Mayo Clinic's Florida campus</strong> is located right here on San Pablo Road—one of the most prestigious medical institutions on the planet. <strong>Baptist Health</strong> and <strong>UF Health Jacksonville</strong> are also excellent systems. But prestige doesn't equal access: new-patient metabolic appointments at Mayo Clinic Florida routinely exceed 12 weeks. Baptist and UF Health face 6-10 week backlogs. And your local <strong>Publix</strong>, <strong>CVS</strong>, or <strong>Walgreens</strong> pharmacy has had branded Wegovy on indefinite backorder since the national shortage began."
      />

      <StateLegalFramework
        stateName="Florida"
        boardName="Florida Board of Medicine"
        text="Telehealth FX operates in strict compliance with the <strong>Florida Board of Medicine</strong> and Florida Statute 456.47 (the Florida Telehealth Act). Under current Florida law, a physician-patient relationship may be established through telehealth, including asynchronous store-and-forward technology, without requiring an initial in-person examination. Florida has been a national leader in telehealth adoption, and the regulatory framework explicitly permits licensed physicians to evaluate patients and prescribe non-controlled medications via asynchronous platforms. All Telehealth FX prescribers treating Florida patients hold active, unrestricted Florida medical licenses verified through the Florida Department of Health license verification portal."
      />

      <CostComparisonTable
        title="What Weight Loss Actually Costs in Jacksonville"
        localCompetitors={[
          { name: "Ponte Vedra Beach Concierge Medicine", cost: "$800 - $1,200 / mo", consult: "Mandatory In-Person + Full Labs", access: "Branded Only / 4-6 Week Wait" },
          { name: "San Marco / Riverside Aesthetic Clinics", cost: "$500 - $850 / mo", consult: "Monthly Membership + Consult", access: "Mixed Compounding Quality" },
          { name: "Mayo Clinic Florida (Endocrinology)", cost: "$225 Copay + Rx", consult: "12+ Week New Patient Wait", access: "Formulary Restrictions / Prior Auth" },
          { name: "Baptist Health Primary Care", cost: "$60 Copay", consult: "4-8 Week Wait", access: "Step Therapy / Pharmacy Backorder" }
        ]}
        telehealthPrice="From $146 / mo"
      />

      <InteractiveFAQ
        faqs={[
          { q: "I have Florida Blue insurance. Why can't I just use my plan?", a: "You can try. Florida Blue's standard commercial formulary requires prior authorization for GLP-1 weight management medications, including documented proof of failed behavioral interventions and specific BMI thresholds. The process typically takes 2-4 weeks for initial review, with an additional 4-6 weeks if an appeal is necessary. Telehealth FX operates entirely outside the insurance framework, eliminating this timeline entirely." },
          { q: "I live in St. Johns County / Nocatee. Do you deliver there?", a: "Absolutely. We deliver to all residential addresses in Duval County, St. Johns County, Clay County, Nassau County, and Baker County. Whether you're in Nocatee, Ponte Vedra, Fleming Island, Orange Park, or Fernandina Beach—overnight cold-pack delivery reaches your door." },
          { q: "How does the heat affect medication shipping in summer?", a: "Our 503A pharmacy partners use medical-grade insulated packaging with gel ice packs rated to maintain proper temperature for up to 72 hours, even during Jacksonville's summer heat. We recommend selecting delivery to a location where the package won't sit in direct sunlight—a covered porch, garage, or staffed mailroom." },
          { q: "Is there a Mayo Clinic connection or affiliation?", a: "No. Telehealth FX is an independent telehealth platform with no affiliation to Mayo Clinic or any hospital system. We provide a separate, complementary clinical pathway for patients who cannot access or afford the specialist appointment process at traditional medical institutions." },
          { q: "Can I use my HSA or FSA to pay?", a: "Yes. Both the physician consultation and the compounded medication are eligible for payment with pre-tax HSA and FSA funds. For Jacksonville-area professionals on high-deductible plans—which are common across the financial services and insurance sectors—this provides a meaningful tax advantage." }
        ]}
      />

      <DeliveryGridMap
        cityName="Jacksonville"
        mapQuery="Jacksonville, FL"
        coordinates="30.3322° N, 81.6557° W"
        counties="Duval County, St. Johns County, Clay County, Nassau County"
        neighborhoods={['San Marco', 'Riverside', 'Avondale', 'Jacksonville Beach', 'Ponte Vedra', 'Mandarin', 'Nocatee', 'Fleming Island', 'Southside', 'Town Center']}
      />

      <FinalCTA stateName="Florida" />

    </div>
  );
}
