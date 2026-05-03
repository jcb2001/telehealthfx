"use client";
import React from 'react';
import { HeroVariationB, ClinicalDeepDive, PatientArchetype, CostComparisonTable, InsuranceBreakdown, StateLegalFramework, LocalTransitPain, InteractiveFAQ, DeliveryGridMap, FinalCTA } from './location-modules.jsx';

export function LocationDenver() {
  return (
    <div style={{ background: '#FBF8F3', overflow: 'hidden' }}>

      <HeroVariationB
        stateName="Colorado"
        cityName="Denver"
        headline="Clinical GLP-1 Weight Loss in <span style='color: #2ECC71'>Denver</span>"
        subheadline="The Mile High City brands itself as the fittest metro in America. And yet the altitude, the 400-brewery craft beer culture, and the metabolic effects of legal cannabis have created a weight management challenge that trail runs and ski days alone cannot solve. Compounded Semaglutide, delivered from Cherry Creek to Golden."
        dataPoint1="Colorado has the lowest adult obesity rate of any state—but that rate has still climbed from 19% to 25% over the past decade, with the Denver metro driving the largest share of that increase."
        dataPoint2="For professionals whose active lifestyle isn't producing results, GLP-1 receptor agonists address the underlying hormonal dysfunction that exercise and diet quality alone cannot fix."
      />

      <ClinicalDeepDive
        title="The Active Lifestyle Paradox at 5,280 Feet"
        paragraphs={[
          "Denver residents are, by every measurable metric, among the most physically active populations in the United States. The city boasts over 200 miles of bike lanes, immediate access to world-class skiing, 300+ days of sunshine, and a culture that treats weekend trail runs as social currency. REI, VF Corporation (The North Face, Smartwool), and dozens of outdoor industry companies are headquartered here precisely because Denver IS the active lifestyle. So why is metabolic dysfunction on the rise?",
          "The answer involves three factors that are uniquely concentrated in the Denver metro: altitude physiology, craft beer culture, and the metabolic effects of recreational cannabis. At 5,280 feet, the body expends more energy at rest—but it also experiences increased appetite due to altitude-induced hormonal changes. Studies have documented elevated ghrelin levels at moderate altitude, meaning Denver residents are physiologically hungrier than sea-level populations, independent of activity level.",
          "The craft beer factor cannot be understated. Colorado has over 400 licensed breweries—more per capita than any state except Vermont. RiNo, LoDo, and the Highlands are built around brewery taprooms where a Tuesday evening 'flight' of four IPAs adds 800 to 1,000 liquid calories to the daily intake. This isn't binge drinking—it's Tuesday. The social fabric of Denver's professional and creative class is woven through brewery culture in a way that makes abstention a form of social isolation.",
          "Then there is cannabis. Colorado legalized recreational marijuana in 2012, and the Denver metro has the highest dispensary density of any major American city. THC directly stimulates appetite through the endocannabinoid system—the clinical term for 'the munchies.' Regular cannabis users consume an estimated 600 additional calories per use session. In a city where a post-ski edible is as culturally normalized as a post-game beer, this caloric surplus accumulates steadily and silently.",
          "The cruel convergence of these factors produces a specific metabolic profile: an active, health-conscious individual who exercises regularly, eats reasonably well, and still cannot lose weight—because altitude-driven hunger, craft beer calories, and cannabis-stimulated appetite create a chronic caloric surplus that their activity level cannot outpace. For this population, 'eat less, move more' is not just insufficient—it's insulting. GLP-1 receptor agonists address the hormonal appetite dysregulation directly, without requiring anyone to abandon the altitude, the brewery scene, or the lifestyle that drew them to Colorado in the first place."
        ]}
        citations={[
          "Colorado Department of Public Health and Environment. (2025). <em>Colorado Health Indicators: Adult Obesity Trends in the Denver Metropolitan Statistical Area</em>.",
          "University of Colorado Anschutz Medical Campus. (2024). <em>Altitude-Induced Ghrelin Elevation and Appetite Regulation at Moderate Elevation</em>.",
          "JAMA Internal Medicine. (2024). <em>Cannabis Use and Caloric Intake: A Longitudinal Analysis of Dietary Patterns in Legalized Markets</em>."
        ]}
      />

      <PatientArchetype
        archetype="The Outdoor Industry Product Manager"
        quote="I work for one of the biggest outdoor brands in the world. I ski 30 days a year. I mountain bike every weekend. My coworkers are all ultra-fit. And I'm gaining weight anyway. Admitting that to anyone at work would be career suicide in this industry. The privacy of an asynchronous intake is what made me finally do something about it."
        details="<strong>Patient Profile:</strong> Kelsey, 35, Product Manager at a major outdoor recreation company, Boulder (commutes from RiNo).<br/><br/><strong>The Challenge:</strong> Kelsey is surrounded by coworkers who run ultramarathons, backcountry ski, and post Strava data as a form of professional networking. Her activity level—skiing, mountain biking, hiking 14ers—would qualify as exceptional by any national standard. But altitude-driven hunger, a social life built around RiNo brewery taprooms, and regular cannabis use (legal and normalized) created a chronic caloric surplus her activity couldn't overcome. Her weight crept up 22 pounds over three years despite maintaining a rigorous exercise routine. Seeking help through her employer's health plan would require an in-person appointment at UCHealth—where the weight management clinic had a 12-week wait—and a conversation she wasn't ready to have in a professional culture that equates fitness with competence.<br/><br/><strong>The Intervention:</strong> The asynchronous, private intake model was the deciding factor. Kelsey completed her evaluation at home, on her own terms, without sitting in a waiting room or explaining her situation out loud. A Colorado-licensed physician reviewed her profile and prescribed compounded Semaglutide within 20 hours. The cultural barrier that had prevented her from seeking help for three years was eliminated by the privacy of the platform."
      />

      <CostComparisonTable
        title="What Weight Loss Actually Costs in Denver"
        localCompetitors={[
          { name: "Cherry Creek Concierge Longevity Clinics", cost: "$900 - $1,400 / mo", consult: "Mandatory In-Person + Full Panel", access: "Branded Only / 4-Week Wait" },
          { name: "Highlands / LoHi Aesthetic MedSpas", cost: "$550 - $900 / mo", consult: "Monthly VIP Membership Required", access: "Mixed Compounding Sources" },
          { name: "UCHealth Weight Management", cost: "$175 Copay + Rx", consult: "10-14 Week New Patient Wait", access: "Formulary Restrictions / Prior Auth" },
          { name: "Denver Health Primary Care", cost: "$50 Copay", consult: "6-8 Week Wait", access: "Step Therapy / Pharmacy Backorder" }
        ]}
        telehealthPrice="From $146 / mo"
      />

      <InsuranceBreakdown
        title="Why Colorado's 'Healthy' Employers Still Block Access"
        text="Colorado's employer landscape is dominated by outdoor recreation, aerospace, tech, federal government, and cannabis—industries that cultivate a 'wellness-forward' brand identity but whose health plans tell a different story when it comes to GLP-1 medications."
        employers={[
          { name: "Outdoor Recreation (REI, VF Corp, Vista Outdoor)", detail: "Companies that literally sell health and fitness as their product often offer health plans that classify GLP-1 weight management as 'lifestyle' medicine. The cultural assumption within these organizations—that employees should be fit because they work in fitness—makes the formulary exclusion feel even more pointed." },
          { name: "Aerospace / Defense (Ball, Lockheed Martin Space)", detail: "Colorado's aerospace corridor (Ball Aerospace in Boulder, Lockheed Martin Space in Littleton) employs thousands of engineers on self-funded plans that apply standard Step Therapy protocols for GLP-1 medications—identical to the defense sector barriers seen in Fort Worth and Phoenix." },
          { name: "Cannabis Industry", detail: "Colorado's legal cannabis industry is predominantly composed of small-to-mid-size employers offering high-deductible plans with minimal pharmacy benefits. Many cannabis industry workers have no employer-sponsored coverage at all, making Telehealth FX's self-pay model the most accessible clinical pathway." },
          { name: "Federal Government (Denver Federal Center, NOAA, USGS)", detail: "Federal employees are covered by FEHB plans, which vary by carrier but frequently impose prior authorization requirements and Step Therapy for GLP-1 weight management. The FEHB formulary process is federal, not state, meaning Colorado's progressive health policies have no bearing on federal employee access." }
        ]}
      />

      <StateLegalFramework
        stateName="Colorado"
        boardName="Colorado Medical Board"
        text="Telehealth FX operates in strict compliance with the <strong>Colorado Medical Board</strong> and Colorado Revised Statutes § 12-240-107 (Colorado's telehealth provisions). Colorado has been among the most progressive states in the nation regarding telehealth regulation. Under current law, a physician-patient relationship may be established via telehealth, including asynchronous modalities, without a mandatory in-person encounter. The state's regulatory framework explicitly supports store-and-forward technology for clinical evaluation and prescribing. All Telehealth FX prescribers treating Colorado patients hold active, unrestricted Colorado medical licenses verified through the DORA (Department of Regulatory Agencies) license lookup system."
      />

      <LocalTransitPain
        title="Bypass the I-25 Crawl & UCHealth Waitlists"
        transitText="Denver's growth has outpaced its transportation infrastructure by a decade. I-25—the single north-south artery connecting Fort Collins, Denver, and Colorado Springs—is congested for 14 hours a day. The US-36 corridor to Boulder is a daily crawl. I-70 westbound on a Friday afternoon (ski traffic) is a national punchline. Even within the city, getting from RiNo to the UCHealth Anschutz campus in Aurora means navigating Colfax or I-225—neither of which is pleasant."
        hospitalText="<strong>UCHealth</strong> (anchored by the University of Colorado Anschutz Medical Campus) is the region's premier academic health system. <strong>Denver Health</strong> serves as the city's safety-net system. <strong>SCL Health / Intermountain</strong> operates multiple facilities across the Front Range. All face capacity strain from a metro that has added 400,000+ residents in a decade. UCHealth's weight management program runs a 10-14 week new-patient wait. Denver Health's endocrinology clinic is similarly backed up. Your local <strong>King Soopers</strong> (Kroger), <strong>Walgreens</strong>, or <strong>CVS</strong> pharmacy? Branded Wegovy: indefinite backorder."
      />

      <InteractiveFAQ
        faqs={[
          { q: "I'm very active (skiing, biking, hiking). Do I still qualify?", a: "Absolutely. GLP-1 receptor agonists are not reserved for sedentary populations. If your activity level is not producing the weight management results you expect, the likely cause is a hormonal signaling dysfunction—specifically impaired incretin response—that exercise alone cannot correct. Your prescribing physician will evaluate your full metabolic profile, including activity level, during your intake." },
          { q: "Does cannabis use affect eligibility or medication interactions?", a: "Cannabis use does not disqualify you from GLP-1 therapy. There are no known clinically significant drug interactions between cannabis (THC/CBD) and Semaglutide or Tirzepatide. However, your prescribing physician should be aware of all substances you use, and you should be aware that cannabis-driven appetite stimulation may partially counteract the appetite-regulating effects of GLP-1 medications." },
          { q: "Can I get medication delivered to my office in Boulder or the Tech Center?", a: "Yes. We deliver to all residential and commercial addresses across the Denver-Boulder-Aurora metro, including the Denver Tech Center, Boulder, Broomfield, Littleton, Golden, Lakewood, and Aurora." },
          { q: "I'm a federal employee at Denver Federal Center. Will this appear on my records?", a: "Telehealth FX is a private, self-pay medical service entirely separate from FEHB, the federal government, and any government health system. Your use of our platform does not interact with your federal employee health benefits, OPM records, or any government database." }
        ]}
      />

      <DeliveryGridMap
        cityName="Denver"
        mapQuery="Denver, CO"
        coordinates="39.7392° N, 104.9903° W"
        counties="Denver County, Arapahoe County, Jefferson County, Adams County, Boulder County, Douglas County"
        neighborhoods={['LoDo', 'RiNo', 'Cherry Creek', 'Capitol Hill', 'Highlands', 'Wash Park', 'Littleton', 'Aurora', 'Lakewood', 'Golden']}
      />

      <FinalCTA stateName="Colorado" />

    </div>
  );
}
