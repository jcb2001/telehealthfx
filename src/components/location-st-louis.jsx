"use client";
import React from 'react';
import { HeroVariationB, PatientArchetype, ClinicalDeepDive, InsuranceBreakdown, CostComparisonTable, LocalTransitPain, InteractiveFAQ, StateLegalFramework, DeliveryGridMap, FinalCTA } from './location-modules.jsx';

export function LocationStLouis() {
  return (
    <div style={{ background: '#FBF8F3', overflow: 'hidden' }}>
      <HeroVariationB
        stateName="Missouri"
        cityName="St. Louis"
        headline="Clinical GLP-1 Weight Loss in <span style='color: #2ECC71'>St. Louis</span>"
        subheadline="St. Louis brews 120 million barrels of beer per year. Anheuser-Busch's global headquarters sits on the south side, and the city's identity is inseparable from the liquid calories it exports worldwide. Compounded Semaglutide, delivered from the Central West End to Chesterfield."
        dataPoint1="The city-county divide creates a fragmented healthcare landscape where St. Louis City and St. Louis County operate as separate jurisdictions, splitting resources and specialist capacity across a metro of 2.8 million."
        dataPoint2="Telehealth FX eliminates the jurisdictional complexity. One intake, one physician, one delivery—regardless of which side of the city-county line you call home."
      />
      <PatientArchetype
        archetype="The Anheuser-Busch Quality Assurance Brewer"
        quote="I taste beer for a living. It's literally in my job description—I'm in the tasting panel three times a week to ensure batch consistency. A single tasting session is 6-8 samples. My doctor said to cut back on alcohol. I said, 'You're asking me to stop doing my job.' The metabolic math of professional beer tasting is a conversation no one in healthcare is prepared to have."
        details="<strong>Patient Profile:</strong> Mark, 40, Quality Assurance Brewer at Anheuser-Busch InBev, South St. Louis.<br/><br/><strong>The Challenge:</strong> Mark's professional obligations include regular beer tasting as part of quality control. Each tasting session adds 600-800 empty calories. Combined with a sedentary monitoring role and the stress of global supply chain management, his metabolic health had deteriorated over 12 years at the company. His AB InBev corporate plan required prior authorization and Step Therapy for GLP-1s—standard PBM restrictions that don't account for occupational caloric exposure.<br/><br/><strong>The Intervention:</strong> Mark completed the Telehealth FX intake from his home in Soulard. A Missouri-licensed physician evaluated his full metabolic profile, including his occupational caloric exposure. Compounded Tirzepatide was prescribed within 24 hours."
      />
      <ClinicalDeepDive
        title="The Beer Capital and the City-County Divide"
        paragraphs={[
          "St. Louis's relationship with beer is not metaphorical—it is economic, cultural, and caloric. Anheuser-Busch InBev's global headquarters sits in the heart of the city, and the brewery's presence has spawned a craft beer ecosystem (4 Hands, Urban Chestnut, Side Project) that makes St. Louis one of the most beer-dense metros in America. The caloric contribution is staggering: a single craft IPA contains 250-350 calories, and St. Louis's bar culture makes 3-4 pints a routine weeknight. The weekly caloric contribution from beer alone can exceed 2,000 calories for moderate drinkers.",
          "The food culture amplifies the beer calories. Toasted ravioli (deep-fried), Provel cheese pizza (a uniquely St. Louis invention with a processed cheese blend), gooey butter cake (approximately 500 calories per slice), and the pork steak tradition create a dietary landscape that is unapologetically calorie-dense and deeply tied to civic identity.",
          "The city-county divide—a unique political structure where St. Louis City and St. Louis County are separate governmental entities—fragments healthcare delivery in ways that affect access. BJC HealthCare and SSM Health operate across both jurisdictions, but the administrative separation creates insurance network complications and specialist referral friction that residents of unified metro areas don't experience.",
          "GLP-1 medications provide metabolic intervention that works within St. Louis's beer-and-toasted-ravioli reality, without requiring residents to abandon the food and drink culture that defines their city."
        ]}
        citations={[
          "St. Louis City Department of Health. (2025). <em>Community Health Profile: Obesity, Alcohol Consumption, and Chronic Disease</em>.",
          "Washington University School of Medicine. (2024). <em>Occupational Alcohol Exposure and Metabolic Health in the Brewing Industry</em>."
        ]}
      />
      <InsuranceBreakdown
        title="Brewing Headquarters, Standard Barriers"
        text="St. Louis's major employers span the brewing, healthcare, and defense industries—all with restrictive GLP-1 formulary policies."
        employers={[
          { name: "Anheuser-Busch InBev (Global HQ)", detail: "AB InBev's corporate plan applies standard PBM formulary restrictions for GLP-1 weight management. The irony: a company whose core product contributes significant liquid calories to its workforce's metabolic burden restricts pharmaceutical intervention for the consequences." },
          { name: "Boeing Defense / Emerson Electric", detail: "St. Louis's defense and industrial employers offer self-funded plans that classify GLP-1s under specialty tiers requiring extensive prior authorization." },
          { name: "BJC HealthCare / SSM Health / Mercy", detail: "The region's major health systems employ tens of thousands of clinical staff facing the same formulary restrictions as the patients they treat." }
        ]}
      />
      <CostComparisonTable
        title="What Weight Loss Actually Costs in St. Louis"
        localCompetitors={[
          { name: "Central West End / Clayton Concierge", cost: "$700 - $1,100 / mo", consult: "Mandatory In-Person", access: "Branded Only" },
          { name: "Brentwood / Kirkwood MedSpas", cost: "$400 - $700 / mo", consult: "Monthly Membership", access: "Variable Compounding" },
          { name: "Barnes-Jewish Endocrinology", cost: "$150 Copay + Rx", consult: "10-14 Week Wait", access: "Formulary Restrictions" }
        ]}
        telehealthPrice="From $146 / mo"
      />
      <LocalTransitPain
        title="Bypass the Poplar Street Bridge & BJC Waitlists"
        transitText="St. Louis's geography—split by the Mississippi River with East St. Louis (IL) across the bridge—and the sprawling county suburbs create long commutes. I-64, I-70, and I-44 converge downtown, and the Poplar Street Bridge is a perpetual chokepoint."
        hospitalText="<strong>Barnes-Jewish Hospital / Washington University</strong> (BJC HealthCare) is a top-10 national hospital, complemented by <strong>SSM Health</strong> and <strong>Mercy</strong>. Endocrinology waits average 10-14 weeks."
      />
      <InteractiveFAQ
        faqs={[
          { q: "I live in Illinois (East St. Louis / Belleville). Can I use this?", a: "Yes. If you reside in Illinois, you'll be evaluated by an IL-licensed physician. We serve both Missouri and Illinois residents across the bi-state metro." },
          { q: "Does beer consumption affect GLP-1 medication?", a: "There are no direct pharmacological interactions, but alcohol contributes significant empty calories and some patients report reduced alcohol tolerance on GLP-1 medications. Your physician can discuss strategies specific to your situation." }
        ]}
      />
      <StateLegalFramework
        stateName="Missouri"
        boardName="Missouri State Board of Registration for the Healing Arts"
        text="Telehealth FX operates in compliance with the <strong>Missouri State Board of Registration for the Healing Arts</strong>. For Illinois-side residents, our prescribers hold appropriate Illinois medical licenses."
      />
      <DeliveryGridMap
        cityName="St. Louis"
        mapQuery="St. Louis, MO"
        coordinates="38.6270° N, 90.1994° W"
        counties="St. Louis City, St. Louis County, St. Charles County, Madison County (IL)"
        neighborhoods={['Central West End', 'Soulard', 'Clayton', 'Chesterfield', 'Kirkwood', 'Webster Groves', 'Belleville (IL)', "O'Fallon"]}
      />
      <FinalCTA stateName="Missouri" />
    </div>
  );
}
