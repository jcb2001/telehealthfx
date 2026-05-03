"use client";
import React from 'react';
import { HeroVariationA, ClinicalDeepDive, InsuranceBreakdown, PatientArchetype, LocalTransitPain, CostComparisonTable, InteractiveFAQ, StateLegalFramework, DeliveryGridMap, FinalCTA } from './location-modules.jsx';

export function LocationPortland() {
  return (
    <div style={{ background: '#FBF8F3', overflow: 'hidden' }}>

      <HeroVariationA
        stateName="Oregon"
        cityName="Portland"
        headline="Clinical GLP-1 Weight Loss in <br/><span style='color: #2ECC71'>Portland</span>"
        subheadline="Portland is the global capital of athletic apparel and 'wellness' food culture. But organic agave, oat milk lattes, and vegan donuts drive the exact same insulin resistance as fast food. It's time to separate dietary morality from metabolic reality. Compounded Semaglutide, delivered from the Pearl District to the Silicon Forest."
        ctaText="Check Oregon Eligibility"
      />

      <ClinicalDeepDive
        title="The Artisanal Carbohydrate Trap"
        paragraphs={[
          "Portland's metabolic health challenge is arguably the most psychologically frustrating in the country, because the city has successfully conflated 'ethical' or 'artisanal' eating with metabolic health. Portland is a national pioneer in farm-to-table dining, food cart innovation, craft brewing, and plant-based cuisine. But the human endocrine system cannot read a menu's sourcing philosophy. From an insulin perspective, an organic, locally sourced vegan donut from Voodoo or Blue Star triggers the exact same glycemic spike and hyperinsulinemia as a mass-produced pastry.",
          "This is the artisanal carbohydrate trap. Portland residents frequently consume diets that are morally conscious, environmentally sustainable, and metabolically disastrous. The oat milk latte (which spikes blood glucose far faster than whole milk due to its maltose content), the gluten-free craft IPA, the organic agave-sweetened kombucha, the farm-fresh food cart pad thai—these are culturally coded as 'healthy.' Yet they flood the liver with simple carbohydrates and fructose, driving fatty liver progression and insulin resistance just as efficiently as soda and fast food.",
          "This dietary environment exists within the same grey-sky meteorology as Seattle. Portland experiences over 160 rainy days a year, with significant cloud cover spanning from late October through May. The resulting Seasonal Affective Disorder (SAD) and suppressed serotonin levels drive the exact same neurological carbohydrate cravings seen in Puget Sound. But in Portland, those cravings are satisfied not just by Starbucks, but by a 600-food-cart infrastructure that makes high-density, artisanal calories available on nearly every corner.",
          "The irony reaches its peak when you consider Portland's corporate identity. This metro is the undisputed global capital of athletic apparel and footwear. Nike, Adidas North America, Columbia Sportswear, and Under Armour's footwear design center are all based here. The city’s economy literally designs the equipment the world uses to stay fit. Yet tens of thousands of the employees working on these campuses spend 10 hours a day sitting at CAD workstations or in marketing meetings, fighting the same metabolic dysfunction as the rest of the country.",
          "For Portlanders caught in this cycle—eating 'clean' but still gaining weight, exercising when the rain allows but seeing no results—the solution is not more dietary restriction. The solution is repairing the hormonal signaling that chronic carbohydrate exposure and stress have broken. GLP-1 receptor agonists restore insulin sensitivity and appetite regulation, allowing your body to function properly within Portland's unique environment."
        ]}
        citations={[
          "Oregon Health Authority. (2025). <em>State of Health Report: Obesity and Metabolic Syndrome in the Portland Tri-County Area</em>.",
          "Oregon Health & Science University (OHSU). (2024). <em>Glycemic Impact of Plant-Based Milk Alternatives and Artisanal Sweeteners</em>.",
          "Journal of Public Health Nutrition. (2024). <em>The Health Halo Effect: Metabolic Consequences of 'Clean Eating' Marketing in Urban Populations</em>."
        ]}
      />

      <PatientArchetype
        archetype="The Nike WHQ Product Developer"
        quote="I work on a campus built for Olympic athletes. There's a world-class gym, a running track through the woods, and elite runners passing my window. But my job is 60 hours a week at a desk, managing supply chain crises in Vietnam. I eat 'healthy' food from the cafeteria, I try to run on weekends, and my BMI kept climbing. Seeking obesity treatment when you work at Nike feels like admitting failure."
        details="<strong>Patient Profile:</strong> David, 38, Senior Footwear Product Developer at Nike World Headquarters, Beaverton.<br/><br/><strong>The Challenge:</strong> David works in the epicenter of global fitness culture. The Nike WHQ campus is designed to celebrate athletic achievement. But David is a desk-bound professional managing high-stress product timelines. His diet consists of 'healthy' options—oat milk lattes, grain bowls, plant-based proteins—that are nonetheless carbohydrate-heavy. His cortisol is elevated from constant deadline pressure. His Providence Health plan (administered for Nike employees) required a documented six-month trial of behavioral weight loss programs before authorizing a GLP-1. In a corporate culture that equates athleticism with competence, admitting he needed pharmaceutical help for his weight carried intense psychological friction.<br/><br/><strong>The Intervention:</strong> David completed the Telehealth FX asynchronous intake from his home in the Pearl District. An Oregon-licensed physician evaluated his metabolic profile—recognizing the insulin resistance driven by stress and high-glycemic 'healthy' eating—and prescribed compounded Tirzepatide within 24 hours. No sitting in a waiting room. No employer-sponsored behavioral tracking programs. Total privacy, delivered overnight."
      />

      <InsuranceBreakdown
        title="Silicon Forest & Athletic Brands: The Corporate Barrier"
        text="Portland's economic engine is driven by athletic apparel, advanced tech manufacturing, and healthcare. Despite the progressive branding of these industries, their health plans rely on standard utilization management tactics to restrict GLP-1 access."
        employers={[
          { name: "Nike / Columbia / Adidas (Athletic Apparel)", detail: "The athletic apparel giants offer comprehensive benefits, but their self-funded plans often approach weight management through the lens of their own brand identities: heavy emphasis on behavioral modification, gym access, and 'wellness' programs. GLP-1 medications are frequently subjected to rigorous Step Therapy, requiring employees to fail employer-sponsored diet programs before pharmaceutical intervention is authorized." },
          { name: "Intel (The 'Silicon Forest' in Hillsboro)", detail: "Intel is Oregon's largest private employer. The thousands of engineers and fab technicians working at the Ronler Acres and Gordon Moore campuses are covered by plans that classify GLP-1s as specialty medications. The prior authorization process requires specific comorbidity documentation that many engineers—who are metabolically unwell but not yet diabetic—cannot provide." },
          { name: "Providence / Legacy Health / OHSU (Healthcare)", detail: "As in Nashville, Portland's massive healthcare workforce is insured by the systems that employ them. Providence and Legacy health plans impose the same formulary restrictions and PBM delays on their own nurses and administrators that they enforce on the general public." }
        ]}
      />

      <CostComparisonTable
        title="What Weight Loss Actually Costs in Portland"
        localCompetitors={[
          { name: "Lake Oswego / Pearl District Concierge", cost: "$800 - $1,200 / mo", consult: "Mandatory In-Person + Holistic Panel", access: "Branded Only / Waitlisted" },
          { name: "NW Portland Naturopathic Clinics", cost: "$400 - $800 / mo", consult: "Monthly Membership + Supplements", access: "Variable Compounding + B12" },
          { name: "OHSU Endocrinology", cost: "$150 Copay + Rx", consult: "12-16 Week New Patient Wait", access: "Formulary Restrictions / Prior Auth" },
          { name: "Providence Primary Care", cost: "$45 Copay", consult: "6-8 Week Wait", access: "Step Therapy / Pharmacy Backorder" }
        ]}
        telehealthPrice="From $146 / mo"
      />

      <LocalTransitPain
        title="Bypass the US-26 Crawl & OHSU Waitlists"
        transitText="Portland's geography is defined by the Willamette River and the West Hills, creating natural choke points that turn daily commutes into prolonged stress events. Whether you are battling the US-26 (Sunset Highway) crawl to Intel in Hillsboro, crossing the Marquam or Fremont bridges, or navigating I-5 traffic through the Rose Quarter, getting across town is a logistical headache."
        hospitalText="<strong>Oregon Health & Science University (OHSU)</strong> is the state's premier academic medical center—quite literally sitting on a hill above the city, accessible by an aerial tram. While world-class, its endocrinology and metabolic clinics have new-patient waitlists stretching 12 to 16 weeks. <strong>Providence</strong> and <strong>Legacy Health</strong> operate extensive networks, but face similar capacity constraints. And your local <strong>Fred Meyer</strong>, <strong>Safeway</strong>, or <strong>Walgreens</strong> has the same sign on the counter: 'Wegovy out of stock indefinitely.'"
      />

      <InteractiveFAQ
        faqs={[
          { q: "I eat a strict vegan/plant-based diet but can't lose weight. Will this help?", a: "Yes. Plant-based diets can be highly nutritious, but they can also be heavily reliant on carbohydrates (grains, legumes, oat milk, natural sweeteners). If you have underlying insulin resistance, a high-carbohydrate diet—even a vegan one—will trigger excessive insulin production and fat storage. GLP-1 medications correct this hormonal misfire, allowing your body to regulate energy properly regardless of whether your macros come from plants or animal sources." },
          { q: "I work at Nike/Adidas. Can I use Telehealth FX privately?", a: "Absolutely. Telehealth FX is entirely separate from your employer and your employer-sponsored health plan. Your health data, intake, and prescription are protected by HIPAA and will never be shared with your employer or your corporate wellness program." },
          { q: "Do you deliver to the Silicon Forest (Hillsboro/Beaverton)?", a: "Yes. We deliver to all residential and commercial addresses in the Portland Tri-County area (Multnomah, Washington, Clackamas), including Portland, Beaverton, Hillsboro, Lake Oswego, Tigard, and Gresham. We also deliver across the river to Clark County, Washington (Vancouver)." },
          { q: "I live in Vancouver, WA but work in Portland. Which state applies?", a: "Telehealth regulations are based on your physical location at the time of care. If you live in Vancouver, you will be evaluated by a Washington-licensed physician. Telehealth FX serves both Oregon and Washington residents, so you are covered seamlessly across the entire metro area." },
          { q: "Is compounded Semaglutide safe?", a: "Yes. Our compounded medications are sourced exclusively from FDA-registered 503A compounding pharmacies operating under rigorous USP guidelines. The active pharmaceutical ingredient is the same as in branded medications, but the compounding process allows us to bypass the national shortages affecting retail pharmacies." }
        ]}
      />

      <StateLegalFramework
        stateName="Oregon"
        boardName="Oregon Medical Board"
        text="Telehealth FX operates in strict compliance with the <strong>Oregon Medical Board</strong> and ORS 677.010 et seq. (Oregon's telehealth regulations). Oregon law permits the establishment of a physician-patient relationship and the prescribing of non-controlled substances via telehealth, including asynchronous store-and-forward technologies. All Telehealth FX prescribers treating Oregon patients hold active, unrestricted Oregon medical licenses verified through the Oregon Medical Board's licensee lookup system. For patients residing in Vancouver, our prescribers hold Washington state licenses."
      />

      <DeliveryGridMap
        cityName="Portland"
        mapQuery="Portland, OR"
        coordinates="45.5152° N, 122.6784° W"
        counties="Multnomah County (OR), Washington County (OR), Clackamas County (OR), Clark County (WA)"
        neighborhoods={['Pearl District', 'Nob Hill', 'Hawthorne', 'Beaverton', 'Hillsboro', 'Lake Oswego', 'Tigard', 'Gresham', 'Vancouver (WA)']}
      />

      <FinalCTA stateName="Oregon" />

    </div>
  );
}
