"use client";
import React from 'react';
import { HeroVariationB, CostComparisonTable, InsuranceBreakdown, LocalTransitPain, PatientArchetype, ClinicalDeepDive, InteractiveFAQ, StateLegalFramework, DeliveryGridMap, FinalCTA } from './location-modules.jsx';

export function LocationDallas() {
  return (
    <div style={{ background: '#FBF8F3', overflow: 'hidden' }}>

      <HeroVariationB
        stateName="Texas"
        cityName="Dallas"
        headline="Clinical GLP-1 Weight Loss in <span style='color: #2ECC71'>Dallas</span>"
        subheadline="America's new corporate capital is booming with Fortune 500 relocations—but those generous relocation packages didn't include fixing Texas's GLP-1 access problem. Access compounded Semaglutide delivered to your door, from Highland Park to Frisco."
        dataPoint1="Over 200 corporate headquarters have relocated to the DFW Metroplex since 2020, bringing hundreds of thousands of professionals who are discovering that Texas employer health plans are significantly more restrictive on GLP-1 coverage than what they left behind."
        dataPoint2="Telehealth FX provides the same quality of metabolic care these relocatees had access to in New York or San Francisco—at a fraction of the cost and without a single waiting room."
      />

      <CostComparisonTable
        title="What Weight Loss Actually Costs in Dallas"
        localCompetitors={[
          { name: "Highland Park Concierge Medicine", cost: "$900 - $1,400 / mo", consult: "Mandatory In-Person + Full Panel", access: "Branded Only / Waitlisted" },
          { name: "Uptown Anti-Aging MedSpas", cost: "$600 - $950 / mo", consult: "Monthly 'Membership' + Consult Fee", access: "Variable Compounding Quality" },
          { name: "UT Southwestern Endocrinology", cost: "$175 Copay + Rx", consult: "10-16 Week New Patient Wait", access: "Formulary Restrictions / Prior Auth" },
          { name: "Baylor Scott & White Primary Care", cost: "$60 Copay", consult: "4-8 Week Wait", access: "Step Therapy / Pharmacy Backorder" }
        ]}
        telehealthPrice="From $146 / mo"
      />

      <InsuranceBreakdown
        title="The Corporate Relocation Insurance Surprise"
        text="Dallas has become the undisputed destination for corporate America's great migration. AT&T, Goldman Sachs, Charles Schwab, Caterpillar, CBRE, and Toyota have all moved major operations to the Metroplex. But professionals relocating from New York, San Francisco, and Chicago are discovering an uncomfortable truth: their new Texas employer health plans are often <em>more</em> restrictive on GLP-1 medications than the plans they left behind."
        employers={[
          { name: "Fortune 500 Self-Funded Plans (AT&T, TI, etc.)", detail: "Many of Dallas's largest employers use self-funded ERISA plans that classify GLP-1 weight management as 'lifestyle medicine.' Despite Texas having no state-level mandate for GLP-1 coverage, these national employers apply their own internal formulary restrictions that frequently require Step Therapy starting with Orlistat or Contrave." },
          { name: "Corporate Relocatees (Goldman, Schwab, Toyota)", detail: "Employees who relocated from states with more progressive insurance environments are often shocked to discover that their 'equivalent' Texas plan has carved out the GLP-1 benefit they previously had access to. The lower cost of living in DFW comes with a hidden healthcare access cost." },
          { name: "American / Southwest Airlines", detail: "The two major airlines headquartered in DFW employ tens of thousands of flight crew with erratic, unpredictable schedules. Even when their plans cover GLP-1 medications, the referral and prior authorization process requires multiple in-person visits that are functionally impossible for crew members who may be in a different city on any given day." }
        ]}
      />

      <LocalTransitPain
        title="Bypass LBJ & UT Southwestern Waitlists"
        transitText="The DFW Metroplex is a sprawling, 9,000-square-mile urban expanse with virtually no functional public transit outside the limited DART light rail. Whether you're gridlocked on LBJ Freeway (I-635), crawling north on the Dallas North Tollway from Uptown to Plano, stuck in the Central Expressway (US-75) morning crush, or navigating the High Five interchange—a 'quick' doctor's visit from your Frisco subdivision to the Medical District means writing off half your workday."
        hospitalText="Dallas is home to world-class academic medicine. <strong>UT Southwestern Medical Center</strong> is consistently ranked among the top research hospitals in the country. <strong>Baylor Scott & White</strong> and <strong>Texas Health Resources</strong> operate dozens of facilities across the Metroplex. But new-patient endocrinology appointments at UTSW routinely exceed 12 weeks, and Baylor's metabolic program has a similar backlog. Meanwhile, trying to fill a branded Wegovy script at a <strong>Tom Thumb</strong>, <strong>Kroger</strong>, or <strong>CVS</strong> pharmacy in North Dallas means confronting the same national supply chain collapse: indefinite backorder."
      />

      <PatientArchetype
        archetype="The Goldman Sachs Relocatee"
        quote="I moved from Manhattan to Plano for the quality of life. My Cigna plan in New York covered Wegovy with a single prior auth. My 'equivalent' plan in Texas denied it outright and told me to try Orlistat first. I didn't relocate 1,500 miles to go backwards on my healthcare."
        details="<strong>Patient Profile:</strong> Brian, 41, Vice President at Goldman Sachs, relocated from Hudson Yards (NYC) to Plano, TX.<br/><br/><strong>The Challenge:</strong> In New York, Brian's employer-sponsored Cigna plan approved Wegovy after a straightforward prior authorization. When his role relocated to Goldman's new Plano campus, his 'equivalent' Texas plan denied the same medication, citing a different formulary and requiring Step Therapy with Orlistat—a drug with a well-documented side effect profile that Brian's NYC endocrinologist had specifically recommended against. The nearest UTSW endocrinologist with availability was a 14-week wait, located 25 miles south in the Medical District.<br/><br/><strong>The Intervention:</strong> Brian completed the Telehealth FX intake from his laptop at the Plano office during lunch. A Texas-licensed physician reviewed his metabolic history—including his prior successful Wegovy use in New York—and prescribed compounded Semaglutide within 16 hours. Cold-packed medication arrived at his West Plano home two days later. No Step Therapy. No Orlistat. No 14-week wait. Continuity of care restored."
      />

      <ClinicalDeepDive
        title="The Texas BBQ Tax on Your Metabolism"
        paragraphs={[
          "Dallas's corporate culture runs on BBQ. Client lunches at Pecan Lodge. Friday team catering from Terry Black's. Weekend family outings to Cattleack. The brisket, sausage links, mac and cheese, and pecan pie that define DFW's celebrated food scene are not occasional indulgences for the professional class—they are the social infrastructure of business development, team bonding, and community life in North Texas.",
          "This 'BBQ tax' operates as a metabolic headwind that is nearly impossible to avoid without opting out of the social fabric of your workplace. Declining the catered Friday lunch or ordering a salad at a client BBQ dinner carries real social and professional costs in a culture that bonds over shared plates of smoked meat. The caloric density is staggering: a typical brisket plate with two sides approaches 1,800 calories in a single sitting.",
          "Layer this dietary reality onto the DFW lifestyle infrastructure: extreme summer heat (100°F+ from June through September) that discourages outdoor activity, a metro area with essentially zero walkability outside a few urban pockets, and commutes that routinely exceed 45 minutes each way. The average North Texas professional is consuming 800 to 1,200 excess calories per week through socially obligated meals alone, while simultaneously being locked into a near-total sedentary pattern by geography and climate.",
          "The metabolic consequence is textbook: chronic caloric surplus from high-glycemic, high-fat meals, combined with minimal energy expenditure, leads to sustained hyperinsulinemia. Over time, hepatic insulin resistance develops, then peripheral resistance follows. The body enters a state where it cannot efficiently mobilize stored fat for energy, regardless of conscious dietary restriction. This is the point at which GLP-1 receptor agonists become not just helpful but clinically necessary—they restore the incretin signaling that enables the body to recognize satiety and resume normal fat oxidation.",
          "For the corporate relocatee who maintained a healthy weight in Manhattan (where they walked 8,000 steps per day to the subway) but gained 30 pounds within 18 months of moving to Frisco (where they drive to everything), this isn't a willpower failure. It's a complete environmental restructuring of their metabolic inputs, and it requires a clinical intervention to correct."
        ]}
        citations={[
          "Dallas County Health and Human Services. (2025). <em>Adult Obesity and Metabolic Disease Prevalence: North Texas Regional Assessment</em>.",
          "UT Southwestern Medical Center. (2024). <em>The Impact of Geographic Relocation on Metabolic Health Outcomes in Corporate Professionals</em>.",
          "Texas Medical Association. (2024). <em>GLP-1 Access Barriers in Self-Funded Employer Plans: A Statewide Analysis</em>."
        ]}
      />

      <InteractiveFAQ
        faqs={[
          { q: "I recently relocated to DFW. Can I transfer my existing GLP-1 protocol?", a: "Yes. During your intake, you can provide documentation of your prior GLP-1 use (medication name, dosage, duration). Your Texas-licensed prescribing physician will review this history and, when clinically appropriate, can continue your protocol without requiring you to restart from scratch." },
          { q: "Can my medication be delivered to my office in Plano or Las Colinas?", a: "Absolutely. We deliver to all residential and commercial addresses across the DFW Metroplex, including corporate campuses in Plano, Frisco, Richardson, Las Colinas, and the Telecom Corridor." },
          { q: "Is this compliant with Texas Medical Board regulations?", a: "Yes. All prescribers on the Telehealth FX platform who treat Texas patients hold active, unrestricted licenses issued by the Texas Medical Board. Our asynchronous model is fully compliant with Chapter 111 of the Texas Occupations Code." },
          { q: "I'm a flight attendant based out of DFW. How does this work with my schedule?", a: "Asynchronous telemedicine was designed for exactly this use case. You complete your intake whenever you have connectivity—whether that's during a layover or between trips. Your medication ships to your Dallas-area home address and will be waiting when you return from your rotation." },
          { q: "How is this different from the weight loss clinics I see on every corner in Plano?", a: "Many storefront 'weight loss' clinics in the DFW suburbs offer B12 shots, lipotropic injections, or HCG protocols that have no FDA-recognized efficacy data for obesity. Telehealth FX prescribes only compounded Semaglutide and Tirzepatide—FDA-compliant GLP-1 receptor agonists with rigorous Phase III clinical trial data (STEP and SURMOUNT trials)." }
        ]}
      />

      <StateLegalFramework
        stateName="Texas"
        boardName="Texas Medical Board"
        text="Telehealth FX operates in strict compliance with the <strong>Texas Medical Board (TMB)</strong> and the Texas Occupations Code, Chapter 111. Dallas-area patients benefit from the same progressive telehealth framework available statewide: a physician-patient relationship may be established via asynchronous technology without a mandatory in-person encounter for non-controlled substances. For corporate relocatees accustomed to telemedicine access in states like New York or California, this represents a seamless continuation of the care model they already know. All Telehealth FX prescribers are individually verified through the TMB license verification system and maintain active, unrestricted Texas medical licenses."
      />

      <DeliveryGridMap
        cityName="Dallas"
        mapQuery="Dallas, TX"
        coordinates="32.7767° N, 96.7970° W"
        counties="Dallas County, Collin County, Denton County, Tarrant County, Rockwall County"
        neighborhoods={['Uptown', 'Highland Park', 'University Park', 'Plano', 'Frisco', 'McKinney', 'Southlake', 'Preston Hollow', 'Deep Ellum', 'Las Colinas']}
      />

      <FinalCTA stateName="Texas" />

    </div>
  );
}
