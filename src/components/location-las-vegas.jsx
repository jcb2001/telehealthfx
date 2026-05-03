"use client";
import React from 'react';
import { HeroVariationB, PatientArchetype, ClinicalDeepDive, InsuranceBreakdown, CostComparisonTable, LocalTransitPain, InteractiveFAQ, StateLegalFramework, DeliveryGridMap, FinalCTA } from './location-modules.jsx';

export function LocationLasVegas() {
  return (
    <div style={{ background: '#FBF8F3', overflow: 'hidden' }}>

      <HeroVariationB
        stateName="Nevada"
        cityName="Las Vegas"
        headline="Clinical GLP-1 Weight Loss in <span style='color: #2ECC71'>Las Vegas</span>"
        subheadline="The city that never sleeps has built an economy on keeping its workforce awake. The 24/7 service industry schedule destroys circadian rhythms, while Nevada's severe doctor shortage makes getting an appointment nearly impossible. Compounded Semaglutide, delivered from Summerlin to Henderson."
        dataPoint1="Nevada ranks 45th in the nation for active primary care physicians per capita, creating specialist wait times that routinely exceed 16 weeks in Clark County."
        dataPoint2="Telehealth FX bypasses the Clark County physician bottleneck completely. Asynchronous intake fits any shift schedule, delivering clinical-grade metabolic care without the wait."
      />

      <PatientArchetype
        archetype="The Strip Graveyard Shift Dealer"
        quote="I deal blackjack from 10 PM to 6 AM at a mid-Strip property. I breathe recycled air, stand on a padded mat for eight hours, and eat my 'lunch' at 3 AM in the Employee Dining Room—usually pasta or whatever carb will keep me awake. My doctor told me to stick to a regular sleep schedule and eat fresh food. I realized then that the medical system has absolutely no idea how Las Vegas actually works."
        details="<strong>Patient Profile:</strong> Maria, 41, Table Games Dealer at an MGM Resorts property, Las Vegas Strip.<br/><br/><strong>The Challenge:</strong> Maria's entire biological clock has been inverted by the hospitality industry. The 24/7 economy of The Strip demands a workforce that sacrifices its circadian rhythm to keep the tables open. Her metabolic dysfunction is not a failure of willpower; it is the physiological consequence of chronic night shifts suppressing melatonin and elevating cortisol. Her Culinary Union Local 226 health plan is excellent for primary care, but getting a referral to an endocrinologist in Las Vegas means entering a medical system crippled by a severe physician shortage. Her wait for a specialist appointment was 14 weeks. And that appointment was scheduled for 2 PM—the middle of her 'night.'<br/><br/><strong>The Intervention:</strong> Maria completed the Telehealth FX asynchronous intake at 7 AM, right after her shift ended, from her home in Spring Valley. A Nevada-licensed physician reviewed her shift-work history and metabolic profile. Compounded Tirzepatide was prescribed within 18 hours. She bypassed a 14-week waitlist and never had to sacrifice her sleep to sit in a waiting room."
      />

      <ClinicalDeepDive
        title="The 24-Hour Metabolic Casino"
        paragraphs={[
          "Las Vegas presents a metabolic health environment unlike any other American city, because it is the only major U.S. metro completely dominated by a 24/7 hospitality and gaming economy. The Strip doesn't just entertain tourists; it dictates the biological rhythms of hundreds of thousands of Clark County residents. For the dealers, bartenders, cocktail waitresses, security officers, and hotel operations staff working swing shifts and graveyards, the concept of a 'normal circadian rhythm' does not exist.",
          "The physiological toll of this schedule is severe. Chronic shift work disrupts the body's central clock (the suprachiasmatic nucleus), leading to a cascade of endocrine failures. Melatonin production is suppressed by artificial casino lighting. Cortisol remains elevated when the body should be resting. Most critically, insulin sensitivity drops significantly when meals are consumed during biological nighttime. A dealer eating a plate of pasta in an Employee Dining Room (EDR) at 3 AM will experience a much higher, more damaging insulin spike than someone eating that exact same meal at 1 PM.",
          "The EDR culture itself is a hidden metabolic driver. The massive, subterranean cafeterias beneath the casino floors are designed to feed tens of thousands of employees quickly and cheaply. The food is heavily skewed toward simple carbohydrates—pasta, breads, fried foods, and sugary desserts—because carbs provide the immediate glucose spike needed to finish a grueling 10-hour shift on the floor. It is functional eating designed to maintain alertness, but it drives progressive insulin resistance over years of employment.",
          "Compounding the shift-work environment is the Mojave Desert climate. For five months of the year, daytime temperatures in Las Vegas exceed 100°F. The physical environment forces residents into an indoor, sedentary, climate-controlled lifestyle. You commute in an air-conditioned car, park in a massive concrete garage, and work in an air-conditioned casino. The 'eat less, move more' prescription is physically constrained by the heat and biologically constrained by exhaustion.",
          "GLP-1 receptor agonists are arguably more critical for the Las Vegas service workforce than almost any other demographic. They repair the hormonal incretin signaling that chronic shift work and circadian disruption have systematically broken. They allow the body to regulate appetite and process glucose efficiently, even when the environment—the schedule, the EDR food, the desert heat—is actively working against metabolic health."
        ]}
        citations={[
          "Southern Nevada Health District. (2025). <em>Clark County Health Status: The Impact of the 24/7 Service Economy on Chronic Disease Rates</em>.",
          "University of Nevada, Las Vegas (UNLV) School of Public Health. (2024). <em>Circadian Disruption, Insulin Resistance, and Shift Work in the Hospitality Industry</em>.",
          "Nevada Health Workforce Research Center. (2024). <em>Physician Shortages and Specialist Access Wait Times in Clark County</em>."
        ]}
      />

      <InsuranceBreakdown
        title="The Culinary Union and the Corporate Divide"
        text="The insurance landscape in Las Vegas is defined by the massive hospitality unions and the corporate gaming conglomerates. While these entities provide broad coverage, GLP-1 weight management remains caught in bureaucratic and capacity bottlenecks."
        employers={[
          { name: "Culinary Union Local 226 (The Culinary Health Fund)", detail: "The Culinary Union represents 60,000+ hospitality workers in Las Vegas, offering one of the most robust health funds in the service sector. However, while primary care is highly accessible through dedicated Culinary Health Centers, GLP-1 weight management medications are subject to strict PBM formularies, prior authorization, and Step Therapy. Furthermore, the sheer volume of members accessing a limited pool of local specialists creates massive scheduling backlogs." },
          { name: "MGM Resorts / Caesars / Wynn Corporate Plans", detail: "Salaried employees, management, and non-union corporate staff at the major gaming conglomerates are covered by self-funded corporate plans (often administered by UMR or BCBS). These plans frequently apply 'lifestyle' medication restrictions to GLP-1s, requiring documented comorbidities (like hypertension or sleep apnea) alongside high BMI thresholds before authorization is granted." },
          { name: "The Gig and Service Economy Gap", detail: "Beyond the major resorts, Las Vegas relies on a massive gig and service workforce—rideshare drivers, independent entertainers, freelance convention staff—who rely on ACA marketplace plans or remain uninsured. For this population, traditional endocrinology access is unaffordable, making Telehealth FX's self-pay model the only realistic pathway to clinical obesity care." }
        ]}
      />

      <CostComparisonTable
        title="What Weight Loss Actually Costs in Las Vegas"
        localCompetitors={[
          { name: "Summerlin / MacDonald Highlands Concierge", cost: "$800 - $1,300 / mo", consult: "Mandatory In-Person + Labs", access: "Branded Only / VIP Access" },
          { name: "Henderson / Spring Valley MedSpas", cost: "$400 - $800 / mo", consult: "Monthly Membership + Consult", access: "Variable Compounding + B12" },
          { name: "UMC / UNLV Medicine Endocrinology", cost: "$100 Copay + Rx", consult: "14-18 Week New Patient Wait", access: "Formulary Restrictions / Prior Auth" },
          { name: "Culinary Health Center / PCP", cost: "$20 Copay", consult: "4-6 Week Wait", access: "Step Therapy / Pharmacy Backorder" }
        ]}
        telehealthPrice="From $146 / mo"
      />

      <LocalTransitPain
        title="Bypass the Spaghetti Bowl & The Doctor Shortage"
        transitText="The Las Vegas commute is notoriously deceptive. While the freeways (I-15, US-95, the 215 Beltway) move reasonably well outside of rush hour, the 'Spaghetti Bowl' interchange is a perpetual chokepoint. But the real transit pain for casino workers is the 'last mile.' Employees park in massive, remote garages and must walk 15 to 20 minutes through back-of-house corridors just to reach the time clock. Adding a cross-town drive to a doctor's appointment to this daily physical grind is exhausting."
        hospitalText="The bigger issue in Las Vegas isn't traffic—it's the <strong>severe physician shortage</strong>. Nevada ranks near the bottom nationally for doctors per capita. <strong>University Medical Center (UMC)</strong>, <strong>Sunrise Hospital</strong>, and the expanding <strong>UNLV Health</strong> system provide critical care, but they simply do not have enough specialists to serve a metro of 2.3 million people. If you need an endocrinologist for metabolic management, a 14- to 18-week wait is standard. Your local <strong>Smith's</strong>, <strong>Walgreens</strong>, or <strong>CVS</strong> pharmacy has the same branded Wegovy shortage as the rest of the country."
      />

      <InteractiveFAQ
        faqs={[
          { q: "I work the graveyard shift. Do I need to be awake for a telehealth appointment?", a: "No. The Telehealth FX clinical intake is entirely asynchronous. There is no scheduled video or phone appointment. You complete the secure medical questionnaire whenever it fits your inverted schedule—whether that's 7 AM after your shift or 10 PM before you start. The physician reviews it independently." },
          { q: "How is the medication delivered in 115-degree Vegas heat?", a: "Cold-chain integrity is critical, especially in the Mojave Desert. Our compounding pharmacy partners utilize specialized insulated packaging with clinical-grade cold packs designed to maintain the required temperature threshold during overnight transit, even in peak Las Vegas summer heat. We recommend retrieving the package as soon as possible upon delivery." },
          { q: "I have Culinary Union insurance. Can I use that to pay?", a: "Telehealth FX is a private, self-pay medical service independent of the Culinary Health Fund and all other insurers. We do not process insurance claims, which allows us to bypass the prior authorization maze and the 16-week specialist waitlists entirely. If you have an HSA or FSA, you may be able to use those funds." },
          { q: "Do you deliver to Henderson, Summerlin, and North Las Vegas?", a: "Yes. We deliver to all residential and commercial addresses in Clark County, including Summerlin, Henderson, North Las Vegas, Spring Valley, Enterprise, and Paradise." },
          { q: "Is this the same as the 'weight loss drips' I see advertised off the Strip?", a: "No. Many IV drip clinics and aesthetic centers in Las Vegas offer B12, lipotropic injections, or hydration therapies marketed for weight loss, none of which have FDA-recognized efficacy for obesity. Telehealth FX prescribes only compounded Semaglutide and Tirzepatide—true GLP-1 receptor agonists backed by massive clinical trials." }
        ]}
      />

      <StateLegalFramework
        stateName="Nevada"
        boardName="Nevada State Board of Medical Examiners"
        text="Telehealth FX operates in strict compliance with the <strong>Nevada State Board of Medical Examiners</strong> and NRS Chapter 629 (Nevada's telehealth regulations). Nevada law permits the establishment of a physician-patient relationship and the prescribing of non-controlled medications via telehealth technologies, including asynchronous store-and-forward systems, provided the standard of care is met. All Telehealth FX prescribers treating Nevada patients hold active, unrestricted Nevada medical licenses, which can be verified through the Board's online license verification system."
      />

      <DeliveryGridMap
        cityName="Las Vegas"
        mapQuery="Las Vegas, NV"
        coordinates="36.1699° N, 115.1398° W"
        counties="Clark County"
        neighborhoods={['Summerlin', 'Henderson', 'Spring Valley', 'North Las Vegas', 'Enterprise', 'Paradise', 'Centennial Hills', 'Green Valley']}
      />

      <FinalCTA stateName="Nevada" />

    </div>
  );
}
