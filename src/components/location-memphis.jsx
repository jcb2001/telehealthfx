"use client";
import React from 'react';
import { HeroVariationB, InsuranceBreakdown, ClinicalDeepDive, PatientArchetype, LocalTransitPain, CostComparisonTable, InteractiveFAQ, StateLegalFramework, DeliveryGridMap, FinalCTA } from './location-modules.jsx';

export function LocationMemphis() {
  return (
    <div style={{ background: '#FBF8F3', overflow: 'hidden' }}>

      <HeroVariationB
        stateName="Tennessee"
        cityName="Memphis"
        headline="Clinical GLP-1 Weight Loss in <span style='color: #2ECC71'>Memphis</span>"
        subheadline="FedEx ships 15 million packages through Memphis every single night. And yet this city—the logistics capital of the world—cannot efficiently deliver a GLP-1 prescription to its own residents. Compounded Semaglutide, cold-shipped to your door from Midtown to Germantown."
        dataPoint1="Memphis's FedEx World Hub processes more air freight than any facility on the planet, but Shelby County's adult obesity rate exceeds 36%—and specialist wait times stretch 10+ weeks."
        dataPoint2="Telehealth FX uses the shipping infrastructure Memphis invented to deliver clinical-grade metabolic care directly to your home. Asynchronous intake. Overnight medication delivery."
      />

      <InsuranceBreakdown
        title="The Logistics Capital Can't Ship Healthcare"
        text="Memphis's economy revolves around moving things from Point A to Point B faster than anyone else. FedEx, the city's defining employer, has perfected overnight delivery to a science. And yet the healthcare delivery system in Shelby County operates at a pace that would bankrupt any logistics company."
        employers={[
          { name: "FedEx (World HQ — Memphis)", detail: "FedEx employs over 30,000 people in the Memphis metro—from corporate executives at the World Headquarters on Ridgeway to sort handlers at the overnight hub. Employee health plans are administered through Anthem, with GLP-1 weight management subject to prior authorization and Step Therapy. The irony: FedEx can track a package from Shanghai to Shelby County in real time, but its health plan takes 6-10 weeks to process a prior authorization for medication its own drivers could deliver overnight." },
          { name: "Methodist Le Bonheur / Baptist Memorial (Healthcare Employers)", detail: "Memphis's largest healthcare systems are also among its largest employers. Methodist and Baptist employee plans, like Nashville's Atrium Health, impose the same formulary restrictions on their own workforce that their endocrinologists encounter when prescribing for patients. Healthcare workers treating metabolic disease cannot access the treatment themselves." },
          { name: "AutoZone / International Paper (Corporate HQs)", detail: "AutoZone (headquartered in Memphis) and International Paper (recently relocated HQ) offer corporate self-funded plans that classify GLP-1 weight management as specialty tier, requiring extensive documentation and prior authorization through PBM-managed formularies." }
        ]}
      />

      <ClinicalDeepDive
        title="The BBQ Capital and the Blues of Metabolic Disease"
        paragraphs={[
          "Memphis has earned its title as the BBQ capital of the world—not through marketing, but through a century of culinary tradition that has produced one of the most distinctive and celebrated food cultures in America. Central BBQ, The Rendezvous, Corky's, Cozy Corner, Payne's, and dozens of neighborhood joints serve dry-rubbed and wet-sauced ribs, pulled pork, BBQ nachos, and smoked sausage that represent genuine artistry. This food is not incidental to Memphis's identity—it IS the identity. Memphis without BBQ is not Memphis.",
          "But the metabolic math is unforgiving. A full rack of dry-rubbed ribs approaches 1,800 calories. BBQ nachos—a Memphis invention—add another 1,200. A plate of pulled pork with slaw, beans, and white bread easily exceeds 1,400. These are not daily meals for most residents, but they are weekly staples—and they exist within a broader Southern food ecosystem that includes fried catfish, greens cooked with fatback, cornbread, sweet tea by the gallon, and the soul food tradition that is as culturally essential to Memphis's Black community as BBQ is to the city at large.",
          "The economic context shapes the food landscape in ways that wealthier cities can avoid. Memphis has one of the highest poverty rates among major U.S. cities. Food access in South Memphis, Whitehaven, Raleigh, and Frayser is constrained by food desert dynamics: limited grocery options, abundant fast food and convenience stores, and economic pressure that makes the cheapest calories (processed, high-glycemic) the default. The metabolic consequences of poverty-driven food access fall disproportionately on communities already facing healthcare access barriers.",
          "The overnight economy adds a physiological layer that is uniquely Memphian. The FedEx World Hub employs thousands of sort handlers who work the overnight shift—roughly 10 PM to 4 AM—during which the facility processes up to 15 million packages per night. This workforce experiences the most severe form of circadian disruption: complete inversion of the sleep-wake cycle. Chronic night shift work suppresses melatonin, elevates cortisol, disrupts leptin and ghrelin signaling, and impairs insulin sensitivity through mechanisms that are independent of diet or exercise.",
          "For a city whose cultural identity is built on food, whose economy runs on overnight logistics, and whose healthcare infrastructure is strained by high poverty and population health challenges, the standard 'lifestyle modification' prescription is woefully insufficient. GLP-1 receptor agonists provide a clinical intervention that works within Memphis's reality—restoring hormonal signaling without demanding that a sort handler on the night shift adopt the meal schedule and exercise habits of a 9-to-5 office worker in a different city."
        ]}
        citations={[
          "Shelby County Health Department. (2025). <em>Community Health Needs Assessment: Obesity, Diabetes, and Food Access in Shelby County</em>.",
          "University of Tennessee Health Science Center. (2024). <em>Night Shift Work, Circadian Disruption, and Metabolic Outcomes in the Memphis Logistics Workforce</em>.",
          "American Journal of Preventive Medicine. (2024). <em>Food Desert Dynamics and Metabolic Disease Prevalence in High-Poverty Urban Populations</em>."
        ]}
      />

      <PatientArchetype
        archetype="The FedEx Overnight Hub Sort Handler"
        quote="I sort packages from 10 PM to 4 AM, five nights a week. By the time I get off shift, nothing's open except Waffle House and McDonald's. I sleep from 6 AM to 2 PM. My doctor's office is open from 8 AM to 5 PM. When exactly am I supposed to make an appointment? The system wasn't built for people who work while the rest of the city sleeps."
        details="<strong>Patient Profile:</strong> Marcus, 31, Sort Handler at FedEx World Hub, Memphis.<br/><br/><strong>The Challenge:</strong> Marcus works the overnight sort at the FedEx Super Hub—the largest air cargo sorting facility in the world. His shift (10 PM to 4 AM) inverts his entire circadian cycle. He eats his 'dinner' at midnight, his 'breakfast' at 4 AM, and sleeps during daylight hours. Every healthcare provider in the city operates during the hours he sleeps. His FedEx Anthem plan requires an in-person PCP visit for a GLP-1 referral—but scheduling that visit means sacrificing sleep on one of his two days off, seeing a physician who has no clinical experience with shift-work metabolic dysfunction, and then waiting 8-10 weeks for a specialist referral.<br/><br/><strong>The Intervention:</strong> Marcus completed the Telehealth FX intake at 2 PM—the middle of his 'day'—from his Whitehaven apartment. A Tennessee-licensed physician reviewed his profile, including his detailed shift schedule, asynchronously. Compounded Tirzepatide was prescribed within 14 hours and cold-shipped to his door. He received his medication without missing a single hour of sleep or a single shift."
      />

      <LocalTransitPain
        title="Bypass the I-240 Loop & Methodist Waitlists"
        transitText="Memphis sprawls across the Mississippi Delta flatlands with an infrastructure that funnels traffic through the I-240 loop and across the Hernando de Soto Bridge (I-40) to West Memphis, Arkansas. Whether you're commuting from Germantown or Collierville on Poplar Avenue, driving in from Southaven or Olive Branch (Mississippi) on I-55, or navigating the perpetual construction on I-240 South—getting to a medical appointment from the outer suburbs is a 40-minute-minimum commitment each way."
        hospitalText="Memphis has strong medical institutions. <strong>Methodist Le Bonheur Healthcare</strong> and <strong>Baptist Memorial Health Care</strong> are the dominant systems. <strong>Regional One Health</strong> serves as the safety-net hospital. <strong>UT Health Science Center</strong> provides academic medicine. But endocrinology waitlists at Methodist and Baptist average 8-12 weeks, and metabolic specialist capacity has not kept pace with population health needs. Your local <strong>Kroger</strong>, <strong>Walgreens</strong>, or <strong>CVS</strong> pharmacy has branded Wegovy on the same indefinite backorder."
      />

      <CostComparisonTable
        title="What Weight Loss Actually Costs in Memphis"
        localCompetitors={[
          { name: "Germantown / Collierville Concierge", cost: "$650 - $1,000 / mo", consult: "Mandatory In-Person + Labs", access: "Branded Only / Waitlisted" },
          { name: "Midtown / Cooper-Young Aesthetic Clinics", cost: "$400 - $750 / mo", consult: "Monthly Membership + Consult", access: "Mixed Compounding Quality" },
          { name: "Methodist Le Bonheur Endocrinology", cost: "$125 Copay + Rx", consult: "8-12 Week New Patient Wait", access: "Formulary Restrictions / Prior Auth" },
          { name: "Baptist Memorial PCP", cost: "$45 Copay", consult: "4-6 Week Wait", access: "Step Therapy / Pharmacy Backorder" }
        ]}
        telehealthPrice="From $146 / mo"
      />

      <InteractiveFAQ
        faqs={[
          { q: "I work overnight at the FedEx hub. When can I do the intake?", a: "Anytime that fits your inverted schedule. The intake is asynchronous—there is no appointment, no phone call, no video chat. Complete it at 2 PM when you wake up, at 5 PM before your shift, or at 5 AM after clocking out. Your physician reviews your profile independently within 24 hours." },
          { q: "I live in Southaven / Olive Branch (Mississippi). Which state applies?", a: "Your prescribing state is determined by your physical residence. If you live in Mississippi, you'll be evaluated by an MS-licensed physician under Mississippi telehealth regulations. We serve both Tennessee and Mississippi residents—just select your correct state during intake." },
          { q: "I live in West Memphis, Arkansas. Can I use this?", a: "Yes. If you reside in Arkansas, you'll be evaluated by an AR-licensed physician under Arkansas telehealth regulations. The Memphis metro spans three states, and Telehealth FX serves patients in all three." },
          { q: "I can't afford $146/month. Are there any options?", a: "We understand that Memphis's economic reality makes even $146/month a significant commitment for many residents. We encourage patients to explore HSA/FSA funds if available through their employer. At this time, $146/month is our most accessible price point, and it includes the physician consultation, ongoing clinical support, and the compounded medication—with no hidden fees." },
          { q: "How is this different from the weight loss shots advertised on Beale Street?", a: "Many clinics advertising on Beale Street and in Midtown offer B12 injections, lipotropic blends, or HCG—none of which have FDA-recognized efficacy data for weight loss. Telehealth FX prescribes only compounded Semaglutide and Tirzepatide: true GLP-1 receptor agonists backed by the STEP and SURMOUNT Phase III clinical programs." }
        ]}
      />

      <StateLegalFramework
        stateName="Tennessee"
        boardName="Tennessee Board of Medical Examiners"
        text="Telehealth FX operates in strict compliance with the <strong>Tennessee Board of Medical Examiners</strong> and Tennessee Code Annotated § 63-1-155. Under current Tennessee law, a physician-patient relationship may be established via telehealth technologies, including asynchronous modalities, for prescribing non-controlled medications. For Memphis-area patients residing in Mississippi or Arkansas, our prescribers hold appropriate licenses in those states as well, ensuring full regulatory compliance across the tri-state metro. All Tennessee-licensed prescribers are verified through the Tennessee Department of Health license verification system."
      />

      <DeliveryGridMap
        cityName="Memphis"
        mapQuery="Memphis, TN"
        coordinates="35.1495° N, 90.0490° W"
        counties="Shelby County (TN), DeSoto County (MS), Crittenden County (AR), Fayette County (TN)"
        neighborhoods={['Midtown', 'Cooper-Young', 'East Memphis', 'Germantown', 'Collierville', 'Bartlett', 'Southaven (MS)', 'Olive Branch (MS)', 'Whitehaven', 'Cordova']}
      />

      <FinalCTA stateName="Tennessee" />

    
{/* Disclaimer: Mounjaro®, Zepbound®, Ozempic®, and Wegovy® are registered trademarks of their respective owners (Eli Lilly and Company and Novo Nordisk A/S). Telehealth FX is not affiliated with, endorsed by, or connected to any of these companies. Compounded medications are not FDA-approved and are not therapeutically equivalent to any branded product. */}
</div>
  );
}
