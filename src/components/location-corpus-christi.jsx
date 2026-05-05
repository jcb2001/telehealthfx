"use client";
import React from 'react';
import { HeroVariationB, PatientArchetype, ClinicalDeepDive, InsuranceBreakdown, CostComparisonTable, LocalTransitPain, InteractiveFAQ, StateLegalFramework, DeliveryGridMap, FinalCTA } from './location-modules.jsx';

export function LocationCorpusChristi() {
  return (
    <div style={{ background: '#FBF8F3', overflow: 'hidden' }}>
      <HeroVariationB stateName="Texas" cityName="Corpus Christi" headline="Clinical GLP-1 Weight Loss in <span style='color: #2ECC71'>Corpus Christi</span>" subheadline="Corpus Christi sits where Texas's refinery coast meets the Gulf of Mexico. The petrochemical industry runs 24/7, the Coastal Bend humidity never relents, and the nearest major medical center is 3 hours away in San Antonio. Compounded Semaglutide, delivered from the Island to Portland." dataPoint1="Nueces County's adult obesity rate exceeds 38%. The combination of refinery shift work, Gulf Coast humidity, limited specialist capacity, and a Tex-Mex food culture creates a metabolic crisis that geographic isolation amplifies." dataPoint2="Telehealth FX eliminates the 3-hour drive to San Antonio for metabolic specialist care." />
      <PatientArchetype archetype="The Flint Hills Resources Refinery Operator" quote="I run a cat cracker unit at the refinery on Navigation Boulevard. Twelve-hour rotating shifts. The cafeteria runs 24/7, and it's all fried food and kolaches. My CHRISTUS plan has one endocrinologist in network, and she's booked out 18 weeks. They told me to try the clinic in San Antonio. That's 3 hours away. I don't have a free Tuesday to drive to San Antonio." details="<strong>Patient Profile:</strong> Jorge, 41, Process Operator at Flint Hills Resources refinery, Corpus Christi.<br/><br/><strong>The Challenge:</strong> Jorge works rotating 12-hour shifts (days/nights alternating every 2 weeks) at one of the Coastal Bend's major refineries. His diet is refinery cafeteria food. His schedule eliminates any consistency for meal timing or sleep. His CHRISTUS Spohn plan has critically limited endocrinology access locally. The alternative—a specialist in San Antonio—requires a 6-hour round trip.<br/><br/><strong>The Intervention:</strong> Jorge completed the Telehealth FX intake from his home in Portland, TX after a night shift. A Texas-licensed physician prescribed compounded Tirzepatide within 20 hours. No drive to San Antonio." />
      <ClinicalDeepDive title="The Refinery Coast and the Coastal Bend Isolation" paragraphs={[
        "Corpus Christi is geographically isolated in a way that cities like Houston and San Antonio are not. The nearest major medical center is 3 hours north in San Antonio; Houston is 4 hours. This isolation means that the Coastal Bend's 450,000 residents depend on a local healthcare system—anchored by CHRISTUS Spohn and Driscoll—that simply does not have the specialist capacity to serve a population this size.",
        "The petrochemical industry defines the local economy. Refineries operated by Flint Hills Resources, Citgo, and Valero line the ship channel, employing thousands in 12-hour rotating shift operations. The refinery shift schedule is among the most metabolically destructive work patterns: 4 days on, 4 days off, alternating between day and night shifts every 2 weeks. This constant circadian inversion drives severe insulin resistance independent of diet.",
        "The food culture is South Texas Tex-Mex—breakfast tacos, kolaches, fried seafood, and the meat-heavy barbecue tradition of the Coastal Bend. Combined with Gulf Coast humidity that makes outdoor exercise oppressive from May through October, the metabolic environment is hostile on every axis.",
        "GLP-1 medications bridge the specialist access gap created by Corpus Christi's geographic isolation, delivering clinical metabolic care that the local healthcare system cannot provide at scale."
      ]} citations={[
        "Nueces County Health District. (2025). <em>Community Health Assessment: Obesity, Diabetes, and Healthcare Access in the Coastal Bend</em>.",
        "Texas A&M University-Corpus Christi. (2024). <em>Shift Work, Circadian Disruption, and Metabolic Outcomes in the Texas Petrochemical Industry</em>."
      ]} />
      <InsuranceBreakdown title="Refinery Plans and the Specialist Vacuum" text="The Coastal Bend's employer landscape is dominated by petrochemical companies with limited local specialist networks." employers={[
        { name: "Flint Hills / Citgo / Valero (Refineries)", detail: "Refinery employers offer corporate plans, but the local specialist network is so limited that prior authorization referrals frequently redirect to San Antonio—a 3-hour drive that most shift workers cannot accommodate." },
        { name: "Naval Air Station Corpus Christi (TRICARE)", detail: "NAS Corpus Christi adds a military population competing for the same limited specialist pool." },
        { name: "CHRISTUS Spohn / Driscoll Health", detail: "The region's only major health systems face overwhelming demand with insufficient specialist capacity." }
      ]} />
      <CostComparisonTable title="What Weight Loss Actually Costs in Corpus Christi" localCompetitors={[
        { name: "Southside / Padre Island Concierge", cost: "$600 - $900 / mo", consult: "Mandatory In-Person", access: "Branded Only" },
        { name: "SPID Corridor MedSpas", cost: "$300 - $550 / mo", consult: "Monthly Membership", access: "Variable Compounding" },
        { name: "CHRISTUS Spohn Endocrinology", cost: "$100 Copay + Rx", consult: "14-20 Week Wait", access: "Prior Auth / Limited Network" }
      ]} telehealthPrice="From $146 / mo" />
      <LocalTransitPain title="Bypass the SPID Traffic & the Drive to San Antonio" transitText="Corpus Christi's traffic concentrates on South Padre Island Drive (SPID / SH 358) and I-37 north toward San Antonio. The Harbor Bridge replacement project adds years of construction congestion. Getting off the Island or from the Southside to a medical appointment consumes significant time." hospitalText="<strong>CHRISTUS Spohn</strong> is the dominant system, supplemented by <strong>Driscoll Health</strong> (pediatric). Endocrinology waitlists average 14-20 weeks. The alternative is a 3-hour drive to San Antonio." />
      <InteractiveFAQ faqs={[
        { q: "I work rotating shifts at the refinery. How does this work?", a: "The intake is fully asynchronous. Complete it during your days off, before a shift, or after one. No scheduled appointment." },
        { q: "Do you deliver to Portland, Robstown, and Padre Island?", a: "Yes. We deliver to all addresses in Nueces, San Patricio, and Kleberg counties." }
      ]} />
      <StateLegalFramework stateName="Texas" boardName="Texas Medical Board" text="Telehealth FX operates in strict compliance with the <strong>Texas Medical Board</strong> and Texas Occupations Code § 111. All prescribers hold active, unrestricted Texas medical licenses." />
      <DeliveryGridMap cityName="Corpus Christi" mapQuery="Corpus Christi, TX" coordinates="27.8006° N, 97.3964° W" counties="Nueces County, San Patricio County, Kleberg County" neighborhoods={['Southside', 'Padre Island', 'Calallen', 'Portland', 'Robstown', 'Flour Bluff', 'Annaville', 'Kingsville']} />
      <FinalCTA stateName="Texas" />
    </div>
  );
}
