"use client";
import React from 'react';
import { HeroVariationB, LocalTransitPain, PatientArchetype, InsuranceBreakdown, CostComparisonTable, ClinicalDeepDive, InteractiveFAQ, StateLegalFramework, DeliveryGridMap, FinalCTA } from './location-modules.jsx';

export function LocationSanFrancisco() {
  return (
    <div style={{ background: '#FBF8F3', overflow: 'hidden' }}>

      <HeroVariationB
        stateName="California"
        cityName="San Francisco"
        headline="Clinical GLP-1 Weight Loss in <span style='color: #2ECC71'>San Francisco</span>"
        subheadline="San Francisco has the highest per-capita income of any major American city, world-class walkability, and UCSF—one of the finest medical institutions on earth. And yet accessing a GLP-1 prescription here is just as broken as anywhere else. Compounded Semaglutide, delivered from Pacific Heights to the Sunset."
        dataPoint1="UCSF's Weight Management Program has a new-patient waitlist exceeding 14 weeks—in a city of 800,000 with one of the highest concentrations of physicians per capita in America."
        dataPoint2="Telehealth FX bypasses this institutional bottleneck entirely. Asynchronous intake, overnight delivery. Clinical-grade care without the UCSF timeline."
      />

      <LocalTransitPain
        title="Bypass the Bay Bridge & UCSF Waitlists"
        transitText="San Francisco has better public transit than most American cities—and it's still profoundly dysfunctional. MUNI delays, BART breakdowns, the Bay Bridge backup that starts forming at 3 PM, the Golden Gate congestion from Marin, and the impossibility of parking anywhere near the UCSF Parnassus campus or Zuckerberg SF General. For a city that prides itself on being car-optional, getting to a medical appointment on time still requires either extraordinary planning or extraordinary luck."
        hospitalText="The medical infrastructure is genuinely world-class. <strong>UCSF Medical Center</strong> is a top-10 nationally ranked hospital. <strong>Zuckerberg San Francisco General</strong>, <strong>Kaiser SF</strong>, and <strong>Sutter/CPMC</strong> all provide excellent care. But 'excellent' doesn't mean 'accessible.' UCSF's metabolic and weight management clinics have new-patient waits exceeding 14 weeks. Kaiser SF's endocrinology referral pipeline runs 8 to 12 weeks. And the system-wide strain caused by the city's ongoing behavioral health crisis has diverted resources away from chronic disease management. Meanwhile, your local <strong>Walgreens</strong> on Market Street (if it hasn't closed) has branded Wegovy on indefinite backorder."
      />

      <PatientArchetype
        archetype="The Sand Hill Road VC Partner"
        quote="I evaluate companies for a living. I do due diligence on billion-dollar deals. But I spent four months trying to navigate UCSF's referral system and my own firm's Anthem plan just to get a medication that I know works. The opportunity cost of that wasted time was absurd. I should have done this from the start."
        details="<strong>Patient Profile:</strong> Jonathan, 48, General Partner at a venture capital firm on Sand Hill Road (Menlo Park), lives in Pacific Heights.<br/><br/><strong>The Challenge:</strong> Jonathan's professional life is built on efficiency—evaluating companies in days, making allocation decisions in hours. But his personal healthcare experience was the opposite. His firm's Anthem plan required a PCP referral to endocrinology, then a specialist evaluation, then a prior authorization submission, then a formulary review—a sequential process that consumed four months before producing a denial requiring Step Therapy. The UCSF Weight Management Program had a 16-week new-patient wait. A Pacific Heights concierge clinic offered immediate access for $1,400/month.<br/><br/><strong>The Intervention:</strong> Jonathan completed the Telehealth FX intake on his phone between LP meetings. A California-licensed physician reviewed his profile asynchronously and prescribed compounded Semaglutide within 10 hours. Cold-packed medication arrived at his Pacific Heights home the next morning. Total elapsed time from intake to medication in hand: 34 hours. Total elapsed time through his insurance: 4 months and counting, with no medication received."
      />

      <InsuranceBreakdown
        title="Why the Richest City in America Still Can't Fix Access"
        text="San Francisco's wealth creates a paradox: the city has among the highest health insurance coverage rates in the nation (thanks to Healthy San Francisco and ACA marketplace penetration), but coverage does not equal access. Even the most premium plans available in the San Francisco market create significant barriers to GLP-1 medications."
        employers={[
          { name: "VC / Private Equity / Hedge Fund Plans", detail: "Small-firm financial services plans, common in the Sand Hill Road and SoMa corridors, are typically administered by major carriers (Anthem, Aetna, UHC) on standard formularies that don't differentiate between a two-person GP fund and a Fortune 500 company. Prior authorization requirements, Step Therapy, and BMI thresholds apply identically." },
          { name: "Salesforce / Tech Giants (SF-Based)", detail: "While Salesforce and other large SF tech employers offer generous benefits, GLP-1 weight management coverage varies by plan tier and is frequently subject to the same formulary restrictions as smaller employers. The Tower may be iconic, but the benefits portal is the same maze." },
          { name: "UCSF / City & County Employee Plans", detail: "City and County of San Francisco employees and UCSF staff are covered through plans that impose Step Therapy for GLP-1 weight management. In a bitter irony, UCSF clinicians who prescribe these medications to patients face the same formulary barriers when seeking them for their own care." },
          { name: "Gig Economy / 1099 (Uber, Lyft HQ City)", detail: "San Francisco is the headquarters of the gig economy. Tens of thousands of residents—drivers, freelancers, contract workers—have no employer-sponsored coverage. For this population, Telehealth FX's self-pay model (from $146/month) represents the most accessible clinical pathway available." }
        ]}
      />

      <CostComparisonTable
        title="What Weight Loss Actually Costs in San Francisco"
        localCompetitors={[
          { name: "Pacific Heights / Nob Hill Concierge Clinics", cost: "$1,200 - $1,800 / mo", consult: "Mandatory In-Person + Comprehensive Labs", access: "Branded Only / Immediate (for the Price)" },
          { name: "Marina District Aesthetic MedSpas", cost: "$700 - $1,100 / mo", consult: "Monthly Membership + Consult Fee", access: "Variable Compounding Quality" },
          { name: "UCSF Weight Management Program", cost: "$200 Copay + Rx", consult: "14-16 Week New Patient Wait", access: "Formulary Restrictions / Insurance Denials" },
          { name: "Kaiser SF Endocrinology", cost: "$75 Copay", consult: "8-12 Week Referral Wait", access: "HMO Formulary / Step Therapy Required" }
        ]}
        telehealthPrice="From $146 / mo"
      />

      <ClinicalDeepDive
        title="The Wealth-Health Disconnect"
        paragraphs={[
          "San Francisco defies the conventional assumption that wealth and walkability produce metabolic health. The city has the highest median household income of any major metro, some of the best walkability scores in the country, and more farmers' markets per capita than almost anywhere in North America. By every surface-level indicator, San Franciscans should be among the healthiest populations in America. And yet metabolic dysfunction persists at rates that mirror far less affluent, far less walkable cities.",
          "The explanation is stress. Not the acute stress of a dangerous commute or financial precarity—but the chronic, grinding, identity-level stress of operating in one of the most competitive professional ecosystems on the planet. Venture capital, startup founding, big tech performance reviews, the relentless social comparison amplified by proximity to extreme wealth—these create a cortisol environment that is biochemically devastating regardless of how many steps you walk up the hills of Noe Valley.",
          "Chronic cortisol elevation directly promotes visceral fat storage, impairs insulin sensitivity, and disrupts the hypothalamic-pituitary-adrenal (HPA) axis in ways that make the body resistant to conventional weight management strategies. A Pacific Heights resident who walks 10,000 steps per day, eats organic produce from the Ferry Building, and meditates with a $200/month app subscription can still develop clinically significant insulin resistance if their baseline cortisol is chronically elevated by professional stress.",
          "The food environment, while higher-quality than most American cities, carries its own caloric traps. The Mission burrito (a flour tortilla filled with rice, beans, meat, cheese, sour cream, and guacamole) averages 1,100 calories. The Tartine morning bun is 600 calories. The craft cocktail at a Hayes Valley bar is 300 calories. The wine tasting in Napa on a Saturday is a full day's caloric budget. These aren't junk food—they're artisanal, high-quality indulgences that San Francisco's food culture celebrates. But the calories are identical.",
          "For the population experiencing this particular form of metabolic dysfunction—high activity, high food quality, high stress, and still gaining weight—the frustration is acute. Traditional diet advice feels insulting. 'Eat less, move more' is meaningless when you're already walking 8,000 steps and eating organic. GLP-1 receptor agonists address the underlying hormonal dysfunction that stress has induced, regardless of diet quality or activity level. They fix the signaling, not the lifestyle."
        ]}
        citations={[
          "San Francisco Department of Public Health. (2025). <em>Community Health Assessment: Metabolic Health, Chronic Disease, and Healthcare Access Disparities</em>.",
          "UCSF Division of Endocrinology and Metabolism. (2024). <em>Cortisol-Mediated Insulin Resistance in High-Income, High-Activity Urban Populations</em>.",
          "Stanford Prevention Research Center. (2024). <em>The Paradox of Metabolic Dysfunction in Walkable, Affluent Urban Environments</em>."
        ]}
      />

      <InteractiveFAQ
        faqs={[
          { q: "I already walk 10,000 steps a day and eat well. Why would I need this?", a: "Walking and clean eating address caloric balance, but they cannot directly repair cortisol-driven hormonal dysfunction. If chronic stress has elevated your baseline insulin levels and impaired your body's incretin response, even a healthy lifestyle cannot overcome the metabolic signaling failure. GLP-1 agonists restore that signaling at the hormonal level—they complement your healthy habits, not replace them." },
          { q: "Can I get medication delivered to my office in SoMa or the Financial District?", a: "Yes. We deliver to all residential and commercial addresses in San Francisco. Many professionals opt for office delivery to a staffed mailroom or reception desk to ensure the cold-packed shipment is properly handled upon arrival." },
          { q: "I'm a gig worker with no insurance. Is this affordable?", a: "Telehealth FX starts at $146/month with no membership fee, no consultation fee, and no hidden costs. For San Francisco's large independent contractor and gig economy population, this is designed to be the most accessible clinical GLP-1 pathway available—no insurance required." },
          { q: "How is this different from the concierge clinics in Pacific Heights?", a: "Pacific Heights concierge clinics charge $1,200-$1,800/month and require mandatory in-person visits and comprehensive lab panels. Telehealth FX provides the same active pharmaceutical ingredients prescribed by a CA-licensed physician at a fraction of the cost. The medication is clinically identical—the delivery model is simply more efficient and more equitable." }
        ]}
      />

      <StateLegalFramework
        stateName="California"
        boardName="Medical Board of California"
        text="Telehealth FX operates in strict compliance with the <strong>Medical Board of California (MBC)</strong> and California Business and Professions Code Section 2290.5. San Francisco residents benefit from California's leadership in telehealth legislation, which permits the establishment of a physician-patient relationship via asynchronous, store-and-forward technology without a mandatory in-person encounter. This regulatory framework aligns with San Francisco's culture of technology-forward solutions to systemic problems. All Telehealth FX prescribers treating California patients are individually credentialed and verified through the MBC."
      />

      <DeliveryGridMap
        cityName="San Francisco"
        mapQuery="San Francisco, CA"
        coordinates="37.7749° N, 122.4194° W"
        counties="San Francisco County, San Mateo County (Daly City/SSF), Marin County"
        neighborhoods={['Pacific Heights', 'Marina', 'Mission', 'SoMa', 'Noe Valley', 'Castro', 'Hayes Valley', 'Sunset', 'Richmond', 'North Beach']}
      />

      <FinalCTA stateName="California" />

    </div>
  );
}
