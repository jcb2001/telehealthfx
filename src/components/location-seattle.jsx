"use client";
import React from 'react';
import { HeroVariationA, InsuranceBreakdown, ClinicalDeepDive, LocalTransitPain, PatientArchetype, CostComparisonTable, InteractiveFAQ, StateLegalFramework, DeliveryGridMap, FinalCTA } from './location-modules.jsx';

export function LocationSeattle() {
  return (
    <div style={{ background: '#FBF8F3', overflow: 'hidden' }}>

      <HeroVariationA
        stateName="Washington"
        cityName="Seattle"
        headline="Clinical GLP-1 Weight Loss in <br/><span style='color: #2ECC71'>Seattle</span>"
        subheadline="226 overcast days a year. The nation's highest rate of Seasonal Affective Disorder. And a coffee culture that runs on 500-calorie Frappuccinos. Seattle's grey skies are doing more to your metabolism than you realize. Compounded Semaglutide, delivered from Capitol Hill to Bellevue."
        ctaText="Check Washington Eligibility"
      />

      <InsuranceBreakdown
        title="Why Big Tech Benefits Still Have a GLP-1 Blind Spot"
        text="Seattle is defined by a handful of corporate titans whose employee health plans cover hundreds of thousands of workers across the Puget Sound region. These companies compete aggressively on benefits to attract talent—and yet GLP-1 weight management coverage remains inconsistent at best."
        employers={[
          { name: "Amazon (HQ — Seattle/Bellevue)", detail: "Amazon's employee health plans vary by level and subsidiary (AWS, Prime Video, retail operations). While some Amazon plans have begun covering GLP-1 medications with prior authorization, the process requires documented BMI thresholds and comorbidity codes that many employees don't meet. For warehouse/fulfillment workers on different plan tiers, coverage is even more restrictive." },
          { name: "Microsoft (Redmond)", detail: "Microsoft's self-funded plans are among the most generous in tech, but GLP-1 weight management coverage is subject to prior authorization and Step Therapy. Engineers on the Redmond campus must navigate the same formulary maze as any other employer—despite working for a company that could automate the entire process." },
          { name: "Boeing (Puget Sound Operations)", detail: "Boeing's IAM-represented machinist workforce and its salaried engineering staff are covered by different plan structures, both of which impose Step Therapy and prior authorization for GLP-1 weight management. The machinist plans, negotiated through the union contract, have historically been more restrictive on specialty pharmaceuticals." },
          { name: "Starbucks (HQ — Seattle)", detail: "Starbucks, headquartered in SoDo, is known for offering health benefits to part-time workers—a progressive stance. But those plans, while covering essential health services, typically exclude weight management pharmaceuticals from their formularies entirely." }
        ]}
      />

      <ClinicalDeepDive
        title="The Grey Sky Metabolic Chain"
        paragraphs={[
          "Seattle's metabolic health challenge is fundamentally different from any Sun Belt city. The issue isn't heat-driven inactivity or car-dependent sprawl—it's light deprivation. The Pacific Northwest receives an average of only 2,170 hours of sunshine per year, compared to the national average of 2,800. More critically, Seattle logs 226 overcast or mostly cloudy days annually. From October through April—a full seven months—meaningful sunlight exposure is scarce.",
          "This chronic light deprivation triggers a biochemical cascade with direct metabolic consequences. Reduced sunlight exposure suppresses serotonin production—the neurotransmitter that regulates mood, sleep, and critically, appetite. When serotonin levels drop, the brain compensates by driving cravings for simple carbohydrates and sugars, which temporarily boost serotonin through the insulin-tryptophan pathway. This is the clinical mechanism behind the 'comfort food cravings' that Seattle residents experience every winter. It's not weakness—it's neurochemistry.",
          "The carbohydrate cravings drive a predictable insulin response: chronic high-glycemic intake leads to sustained hyperinsulinemia, progressive insulin resistance, and eventual metabolic inflexibility. But unlike cities where this process is driven by food culture or sedentary behavior alone, Seattle's version is photochemically initiated. The grey sky itself is the first domino. Diet and activity patterns are downstream consequences of a serotonin deficit that seven months of cloud cover creates.",
          "Compounding the SAD-driven metabolic chain is Seattle's coffee culture—which, in the city that houses Starbucks' global headquarters, is less a habit than an infrastructure. The average Seattle professional consumes 3.4 coffee beverages per day. A significant percentage of those are not black coffee but specialty drinks: the 16-ounce Caramel Frappuccino (380 calories, 54g sugar), the grande Vanilla Latte (250 calories, 35g sugar), the seasonal Pumpkin Spice Latte (390 calories, 50g sugar). These are liquid carbohydrate boluses consumed multiple times daily, further amplifying the insulin response that SAD-driven cravings already initiated.",
          "For Seattle residents experiencing this particular metabolic pattern—grey-sky serotonin depletion → carb cravings → coffee-drink sugar boluses → chronic hyperinsulinemia—the solution is not a lightbox or a vitamin D supplement alone. Those address the upstream trigger but not the downstream metabolic damage. GLP-1 receptor agonists address the insulin signaling dysfunction itself, restoring proper appetite regulation and glucose handling regardless of the weather outside your window."
        ]}
        citations={[
          "Washington State Department of Health. (2025). <em>King County Community Health Assessment: Obesity, Metabolic Syndrome, and Seasonal Affective Disorder Prevalence</em>.",
          "University of Washington School of Medicine. (2024). <em>Serotonin Deficiency, Carbohydrate Craving, and Metabolic Outcomes in High-Latitude Urban Populations</em>.",
          "Journal of Clinical Endocrinology & Metabolism. (2024). <em>Seasonal Patterns of Insulin Resistance in Northern-Latitude Populations: Implications for GLP-1 Therapy Timing</em>."
        ]}
      />

      <LocalTransitPain
        title="Bypass the 520 Bridge & UW Medicine Waitlists"
        transitText="Seattle's geography—a narrow isthmus between Puget Sound and Lake Washington—creates transportation bottlenecks that are unique among American cities. The 520 floating bridge, the I-90 bridge, the I-5 corridor through downtown, and the Mercer Street on-ramp (the most infamous bottleneck in the city) all conspire to make crosstown movement genuinely painful. Getting from Bellevue or Redmond to a specialist on the Seattle side—or vice versa—means crossing water, and that crossing adds 30 to 60 minutes in each direction."
        hospitalText="Seattle's medical institutions are exceptional. <strong>UW Medicine</strong> (Harborview, UW Medical Center) is a nationally ranked academic system. <strong>Swedish Medical Center</strong> and <strong>Virginia Mason Franciscan Health</strong> operate multiple campuses across the metro. But new-patient endocrinology and weight management appointments at UW Medicine routinely exceed 12 weeks. Swedish's metabolic program runs 8-10 weeks. And your local <strong>QFC</strong> (Kroger), <strong>Bartell Drugs</strong>, or <strong>Rite Aid</strong> pharmacy has branded Wegovy on indefinite backorder—just like everywhere else."
      />

      <PatientArchetype
        archetype="The Amazon L6 Engineer Under PIP Pressure"
        quote="I gained 35 pounds in my first two years at Amazon. The stress of being 'managed out,' the 10 PM Slack messages, the vending machine dinners during on-call rotations—my body just stopped cooperating. I knew my cortisol was destroying me. I just couldn't find a doctor who had availability before my next performance review."
        details="<strong>Patient Profile:</strong> Lena, 32, Software Development Engineer (SDE II / L6) at Amazon, South Lake Union.<br/><br/><strong>The Challenge:</strong> Amazon's performance management culture—stack ranking, URA (unregretted attrition) targets, and the ever-present threat of a PIP (Performance Improvement Plan)—creates a chronic stress environment that directly impairs metabolic health. Lena's cortisol levels, self-tested through an at-home kit, were consistently elevated. She gained 35 pounds in two years despite maintaining a gym routine. Her Amazon health plan required an in-person PCP visit, then a specialist referral, then a prior authorization—a sequential process that would take months she couldn't afford with a review cycle approaching.<br/><br/><strong>The Intervention:</strong> Lena completed the Telehealth FX intake during a break between code reviews. A Washington-licensed physician reviewed her profile asynchronously—including her self-reported cortisol data—and prescribed compounded Tirzepatide within 14 hours. Cold-packed medication arrived at her Capitol Hill apartment the next day. She didn't need to take a single hour away from her desk."
      />

      <CostComparisonTable
        title="What Weight Loss Actually Costs in Seattle"
        localCompetitors={[
          { name: "Madison Park / Queen Anne Concierge", cost: "$900 - $1,400 / mo", consult: "Mandatory In-Person + Labs", access: "Branded Only / 4-6 Week Wait" },
          { name: "Capitol Hill / Ballard Aesthetic Clinics", cost: "$550 - $900 / mo", consult: "Monthly Membership + Consult", access: "Variable Compounding Sources" },
          { name: "UW Medicine Weight Management", cost: "$200 Copay + Rx", consult: "12-14 Week New Patient Wait", access: "Formulary Restrictions / Prior Auth" },
          { name: "Swedish Primary Care", cost: "$60 Copay", consult: "4-8 Week Wait", access: "Step Therapy / Pharmacy Backorder" }
        ]}
        telehealthPrice="From $146 / mo"
      />

      <InteractiveFAQ
        faqs={[
          { q: "I think my weight gain is related to SAD. Will a GLP-1 help with the mood component?", a: "GLP-1 receptor agonists are prescribed for metabolic dysfunction, not mood disorders. However, emerging research suggests that weight loss and improved metabolic health can have secondary benefits on mood and energy. If you believe you have SAD, we recommend addressing that condition in parallel with a mental health professional. The metabolic and mood components are related but require separate clinical interventions." },
          { q: "I work at Amazon / Microsoft. Can I get medication delivered to my office?", a: "Yes. We deliver to all residential and commercial addresses in King County, including Amazon's South Lake Union campus, Microsoft's Redmond campus, downtown Bellevue towers, and the Eastside tech corridor. Many tech workers opt for delivery to a campus mailroom to ensure proper cold-chain handling." },
          { q: "I cross the 520 bridge daily. Do you serve the Eastside?", a: "Absolutely. We deliver throughout the Puget Sound region, including Bellevue, Redmond, Kirkland, Issaquah, Bothell, Woodinville, and Sammamish. No bridge crossing required for your healthcare." },
          { q: "Does the vitamin D deficiency in Seattle affect how GLP-1s work?", a: "Vitamin D deficiency does not directly affect GLP-1 receptor agonist pharmacology. However, chronic vitamin D deficiency is associated with insulin resistance and may contribute to the metabolic dysfunction that GLP-1 medications help correct. Your prescribing physician may recommend concurrent vitamin D supplementation as part of a comprehensive metabolic care approach." },
          { q: "I'm a Boeing machinist on a union health plan. Can I use this?", a: "Yes. Telehealth FX is a private, self-pay service independent of any employer or union health plan. Your use of our platform does not interact with your IAM-negotiated benefits. However, you may be able to use HSA/FSA funds from your Boeing benefits to pay for Telehealth FX services." }
        ]}
      />

      <StateLegalFramework
        stateName="Washington"
        boardName="Washington Medical Commission"
        text="Telehealth FX operates in strict compliance with the <strong>Washington Medical Commission (WMC)</strong> and RCW 70.41.020 / WAC 246-919-610 (Washington's telehealth regulations). Washington state has been a national leader in telehealth legislation, with some of the most permissive statutes in the country. A physician-patient relationship may be established via telemedicine, including asynchronous modalities, without a mandatory in-person encounter. Washington was the first state to pass telehealth parity legislation, ensuring that telehealth-delivered care is held to the same standard as in-person care. All Telehealth FX prescribers treating Washington patients are individually credentialed through the WMC's Provider Credential Search system."
      />

      <DeliveryGridMap
        cityName="Seattle"
        mapQuery="Seattle, WA"
        coordinates="47.6062° N, 122.3321° W"
        counties="King County, Snohomish County, Pierce County, Kitsap County"
        neighborhoods={['Capitol Hill', 'Ballard', 'Fremont', 'Queen Anne', 'South Lake Union', 'Bellevue', 'Redmond', 'Kirkland', 'Issaquah', 'Lynnwood']}
      />

      <FinalCTA stateName="Washington" />

    </div>
  );
}
