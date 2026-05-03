"use client";
import React from 'react';
import { HeroVariationA, CostComparisonTable, PatientArchetype, InsuranceBreakdown, ClinicalDeepDive, LocalTransitPain, InteractiveFAQ, StateLegalFramework, DeliveryGridMap, FinalCTA } from './location-modules.jsx';

export function LocationLouisville() {
  return (
    <div style={{ background: '#FBF8F3', overflow: 'hidden' }}>

      <HeroVariationA
        stateName="Kentucky"
        cityName="Louisville"
        headline="Clinical GLP-1 Weight Loss in <br/><span style='color: #2ECC71'>Louisville</span>"
        subheadline="Humana—one of the largest health insurers in America—is headquartered on Main Street. UPS Worldport processes 2 million packages every night three miles from downtown. Louisville exports health insurance and logistics to the world, and still can't deliver GLP-1 access to its own residents."
        ctaText="Check Kentucky Eligibility"
      />

      <CostComparisonTable
        title="What Weight Loss Actually Costs in Louisville"
        localCompetitors={[
          { name: "Prospect / Anchorage Concierge Clinics", cost: "$700 - $1,100 / mo", consult: "Mandatory In-Person + Labs", access: "Branded Only / 4-6 Week Wait" },
          { name: "NuLu / Highlands Aesthetic Clinics", cost: "$400 - $750 / mo", consult: "Monthly Membership + Consult", access: "Variable Compounding Quality" },
          { name: "UofL Health Endocrinology", cost: "$150 Copay + Rx", consult: "10-14 Week New Patient Wait", access: "Formulary Restrictions / Prior Auth" },
          { name: "Norton Healthcare PCP", cost: "$50 Copay", consult: "4-8 Week Wait", access: "Step Therapy / Pharmacy Backorder" }
        ]}
        telehealthPrice="From $146 / mo"
      />

      <PatientArchetype
        archetype="The UPS Worldport Night Sorter"
        quote="People think Louisville is just bourbon and horses. I've worked the overnight sort at Worldport for nine years—10 PM to 4 AM, loading and scanning packages the size of refrigerators. I'm exhausted in ways no one who works 9-to-5 can understand. When my doctor said 'eat better and exercise more,' I almost walked out. I exercise all night. I just eat whatever's open when I get off at 4 AM."
        details="<strong>Patient Profile:</strong> DeShawn, 34, Package Handler / Sort Lead at UPS Worldport, Louisville.<br/><br/><strong>The Challenge:</strong> UPS Worldport—the largest automated package handling facility in the world—operates on the overnight shift, and DeShawn has worked it for nearly a decade. The physical demands are intense, but the schedule creates the same metabolic dysfunction seen in Memphis's FedEx workforce: total circadian inversion, meals timed to shift breaks rather than biology, and a healthcare system that operates exclusively during the hours he sleeps. His UPS Teamsters health plan required an in-person PCP visit for a GLP-1 referral. The nearest appointment was a 5-week wait—during business hours. The referred endocrinologist at Norton had an additional 8-week backlog.<br/><br/><strong>The Intervention:</strong> DeShawn completed the Telehealth FX intake at 3 PM—the middle of his 'morning'—from his Shively apartment. A Kentucky-licensed physician reviewed his profile asynchronously, including his shift schedule and 9 years of documented overnight work history. Compounded Semaglutide was prescribed within 16 hours and cold-shipped to his door. He didn't take a single day off or sacrifice a single hour of sleep."
      />

      <InsuranceBreakdown
        title="The Medicare Advantage Giant Can't Manage Its Own Workforce"
        text="Louisville hosts one of the most concentrated insurance industry presences in the country, anchored by Humana. The city designs, prices, and administers health plans for millions of Americans—and yet its own residents face the same access barriers as everyone else."
        employers={[
          { name: "Humana (Global HQ — Louisville)", detail: "Humana is the second-largest Medicare Advantage insurer in the United States, specializing in managing chronic disease populations. The company employs thousands in Louisville across its Waterfront Plaza headquarters and multiple campus locations. Humana employee plans, despite the company's stated mission of 'helping people achieve their best health,' apply the same Step Therapy protocols and prior authorization requirements for GLP-1 weight management as any other large employer. The company that manages metabolic disease for millions of Medicare beneficiaries cannot streamline access for its own workforce." },
          { name: "UPS / Teamsters Plans (Worldport)", detail: "UPS Worldport employees are covered through Teamsters-negotiated health plans that vary by local. These plans generally require PCP referrals and specialist authorization for GLP-1 medications—a process that is functionally impossible for overnight workers whose entire schedule is inverted from the healthcare system's operating hours." },
          { name: "Brown-Forman / Beam Suntory (Bourbon Industry)", detail: "Louisville's bourbon distilleries employ thousands of workers in production, warehousing, and corporate roles. These mid-size employer plans typically classify weight management pharmaceuticals on restricted or excluded tiers. The bourbon industry's own employees face metabolic challenges amplified by a workplace culture where product tasting is a professional obligation." }
        ]}
      />

      <ClinicalDeepDive
        title="Bourbon, the Derby, and the Louisville Metabolic Profile"
        paragraphs={[
          "Louisville's metabolic identity is shaped by two cultural forces that no other American city combines: the bourbon industry and the Kentucky Derby. Together, they create a social calendar and a food-and-drink culture that is deeply calorie-dense, deeply beloved, and deeply integrated into both the local economy and community identity.",
          "Louisville is the epicenter of American bourbon production. Brown-Forman (Woodford Reserve, Old Forester), Beam Suntory (Jim Beam, Maker's Mark), and the Urban Bourbon Trail collectively define the city's tourism, nightlife, and professional networking culture. A Tuesday evening on Whiskey Row or in the NuLu corridor routinely includes bourbon flights, Old Fashioneds, and bourbon-infused desserts. A single bourbon Old Fashioned contains approximately 220 calories—and few Louisville professionals stop at one. The weekly caloric contribution from bourbon alone can exceed 1,000 to 1,500 calories for moderate social drinkers.",
          "The Kentucky Derby amplifies this into an annual metabolic event. The two weeks surrounding Derby (the Kentucky Derby Festival) transform Louisville into a citywide celebration of excess: bourbon by the gallon, Derby Pie (800+ calories per slice), Hot Browns from the Brown Hotel (1,200+ calories), burgoo, and the parties, galas, and tailgates that accompany the festival. While this is technically a two-week event, the broader Derby social calendar—from Thunder Over Louisville in April through the Breeders' Cup in November—creates a year-round cycle of social eating and drinking occasions.",
          "Beyond the glamour of bourbon and the Derby, Louisville's everyday food culture is rooted in Southern and Appalachian traditions: fried chicken (the Hot Brown's less fancy cousin), biscuits and gravy, country ham, cornbread, and the meat-and-three format that pervades neighborhoods from the Highlands to Shively. These meals are affordable, satisfying, and deeply embedded in family and community life. They are also uniformly high in calories, simple carbohydrates, and saturated fat.",
          "The metabolic consequence of this environment is a steady accumulation of insulin resistance, driven by chronic caloric surplus from bourbon, Southern comfort food, and a social calendar organized around eating and drinking. GLP-1 receptor agonists do not require Louisville residents to give up bourbon or the Derby—they restore the hormonal signaling that allows the body to process these cultural touchstones without the progressive metabolic damage that unregulated insulin response produces."
        ]}
        citations={[
          "Louisville Metro Department of Public Health and Wellness. (2025). <em>Community Health Assessment: Obesity, Diabetes, and Chronic Disease in Jefferson County</em>.",
          "University of Louisville School of Public Health. (2024). <em>Alcohol Consumption Patterns, Caloric Intake, and Metabolic Health in the Louisville Metropolitan Area</em>.",
          "Kentucky Cabinet for Health and Family Services. (2024). <em>Statewide Adult Obesity Prevalence and GLP-1 Prescribing Access Analysis</em>."
        ]}
      />

      <LocalTransitPain
        title="Bypass Spaghetti Junction & UofL Health Waitlists"
        transitText="Louisville's geography—bisected by the Ohio River and funneled through a handful of bridges—creates transportation bottlenecks that define daily life. 'Spaghetti Junction' (the I-64/I-65/I-71 interchange downtown) is the most complex freeway interchange in the region. Whether you're crossing the Kennedy or Sherman Minton bridges from Southern Indiana, commuting east on I-64 from the Shelbyville Road corridor, or navigating Bardstown Road from the Highlands—adding a doctor's appointment to a Louisville commute is always a significant time investment."
        hospitalText="<strong>UofL Health</strong> (University of Louisville) and <strong>Norton Healthcare</strong> are the dominant systems, complemented by <strong>Baptist Health</strong>. All provide excellent care—but endocrinology and metabolic medicine departments are strained. New-patient waits at UofL Health endocrinology average 10-14 weeks. Norton's weight management program runs 6-10 weeks. Your local <strong>Kroger</strong>, <strong>CVS</strong>, or <strong>Walgreens</strong> pharmacy has branded Wegovy on the same indefinite national backorder."
      />

      <InteractiveFAQ
        faqs={[
          { q: "I work at Humana. Is there a conflict of interest using Telehealth FX?", a: "No. Telehealth FX is an independent medical platform with no affiliation to Humana, any insurance company, or any hospital system. Using our service is a private healthcare decision, identical to seeing any out-of-network physician. Your use of Telehealth FX does not interact with your Humana employment or employee health plan." },
          { q: "I live in New Albany / Jeffersonville (Indiana). Which state's regulations apply?", a: "Your prescribing state is determined by your physical residence, not your workplace. If you live in Indiana, you'll be evaluated by an IN-licensed physician under Indiana telehealth regulations. We serve both Kentucky and Indiana residents across the Louisville metro." },
          { q: "Does bourbon consumption affect the medication?", a: "There are no direct pharmacological interactions between moderate alcohol consumption and GLP-1 receptor agonists. However, alcohol contributes significant 'empty' calories that can offset weight management progress, and GLP-1 medications may alter your alcohol tolerance (some patients report feeling effects more quickly). Your prescribing physician can discuss alcohol consumption strategies during your evaluation." },
          { q: "I work the overnight sort at UPS Worldport. When do I do the intake?", a: "Anytime. The intake is asynchronous—no appointment, no phone call, no video. Complete it at 2 PM when you wake up, at 8 PM before your shift, or on a day off. Your physician reviews your profile independently and responds within 24 hours." },
          { q: "Can I get medication delivered to my office on Whiskey Row or Main Street?", a: "Yes. We deliver to all residential and commercial addresses in Jefferson County and the surrounding metro, including downtown, NuLu, the Highlands, St. Matthews, Jeffersontown, Prospect, and all Southern Indiana communities including New Albany, Jeffersonville, and Clarksville." }
        ]}
      />

      <StateLegalFramework
        stateName="Kentucky"
        boardName="Kentucky Board of Medical Licensure"
        text="Telehealth FX operates in strict compliance with the <strong>Kentucky Board of Medical Licensure (KBML)</strong> and KRS 311.550 et seq. (Kentucky's telehealth provisions). Under current Kentucky law, a physician-patient relationship may be established through telehealth technologies, including asynchronous modalities, for prescribing non-controlled medications. Kentucky's telehealth framework was permanently expanded in 2021 through Senate Bill 150, which codified pandemic-era flexibilities. For Louisville metro patients residing in Indiana, our prescribers hold appropriate Indiana medical licenses as well. All Kentucky-licensed prescribers are verified through the KBML license verification portal."
      />

      <DeliveryGridMap
        cityName="Louisville"
        mapQuery="Louisville, KY"
        coordinates="38.2527° N, 85.7585° W"
        counties="Jefferson County (KY), Oldham County (KY), Bullitt County (KY), Floyd County (IN), Clark County (IN)"
        neighborhoods={['NuLu', 'Highlands', 'Old Louisville', 'St. Matthews', 'Jeffersontown', 'Prospect', 'Shively', 'New Albany (IN)', 'Jeffersonville (IN)', 'Shelbyville Rd Corridor']}
      />

      <FinalCTA stateName="Kentucky" />

    </div>
  );
}
