"use client";
import React from 'react';
import { HeroVariationB, PatientArchetype, ClinicalDeepDive, StateLegalFramework, LocalTransitPain, CostComparisonTable, InteractiveFAQ, InsuranceBreakdown, DeliveryGridMap, FinalCTA } from './location-modules.jsx';

export function LocationSanAntonio() {
  return (
    <div style={{ background: '#FBF8F3', overflow: 'hidden' }}>

      <HeroVariationB
        stateName="Texas"
        cityName="San Antonio"
        headline="Clinical GLP-1 Weight Loss in <span style='color: #2ECC71'>San Antonio</span>"
        subheadline="Military City, USA has the largest concentration of military medical facilities in the Department of Defense—and yet TRICARE still won't cover your GLP-1 prescription. Access compounded Semaglutide delivered directly to your door, from Alamo Heights to the far reaches of Loop 1604."
        dataPoint1="Joint Base San Antonio encompasses three major installations and serves over 250,000 military personnel and dependents—the vast majority of whom face TRICARE formulary restrictions on GLP-1 medications."
        dataPoint2="Telehealth FX provides an entirely separate clinical pathway, operating outside the DoD pharmacy benefit structure and eliminating the TRICARE prior authorization maze."
      />

      <PatientArchetype
        archetype="The JBSA Military Spouse"
        quote="My husband is Active Duty at Fort Sam. TRICARE Prime denied his Wegovy because his BMI was 31—one point below their threshold. Meanwhile, his unit requires him to pass a fitness test in four months. The system is broken."
        details="<strong>Patient Profile:</strong> Melissa, 29, military spouse. Husband is an E-6 stationed at Fort Sam Houston.<br/><br/><strong>The Challenge:</strong> TRICARE Prime, the managed care option used by most Active Duty families, requires a BMI of 32+ with documented comorbidities for GLP-1 authorization—a threshold stricter than standard clinical guidelines (27+ with comorbidities). Melissa's husband, facing a mandatory Army Combat Fitness Test (ACFT), needed to lose 40 pounds but was stuck in a catch-22: too heavy to pass his fitness test, but not heavy enough for TRICARE to authorize the medication that could help. The BAMC endocrinology clinic had a 16-week wait for new patients.<br/><br/><strong>The Intervention:</strong> Operating entirely outside the TRICARE system, Melissa's husband completed the Telehealth FX intake from his phone during lunch at the PX. A Texas-licensed civilian physician reviewed his metabolic profile asynchronously and prescribed compounded Tirzepatide. Cold-packed medication was delivered to their Converse apartment within 48 hours. No referral chain. No MTF appointment. No TRICARE formulary battle. He passed his ACFT five months later."
      />

      <ClinicalDeepDive
        title="The Tex-Mex Capital's Metabolic Bind"
        paragraphs={[
          "San Antonio occupies a unique position in the American metabolic health landscape. The city is simultaneously the birthplace of Tex-Mex cuisine and home to the largest military medical training complex in the world. These two realities collide in ways that make traditional weight management exceptionally difficult for the 1.5 million people living in the metro area.",
          "The dietary infrastructure of San Antonio is dominated by the foods that define its cultural identity: barbacoa and Big Red on Sunday mornings, puffy tacos from Ray's Drive Inn, breakfast tacos from any of a thousand taquerías before work, and plates of enchiladas smothered in queso for dinner. These are not occasional treats—they are the default meal architecture of daily life in Bexar County. The average San Antonian consumes these high-glycemic, calorie-dense meals within a context of extreme South Texas heat that suppresses outdoor activity from May through September.",
          "The heat factor cannot be overstated. While San Antonio doesn't experience the same humidity as Houston, summer temperatures routinely exceed 100°F, and the UV index regularly hits 'extreme' levels. For the non-military population—which is predominantly car-dependent in a metro area with a Walk Score averaging below 35—this heat creates months of enforced sedentary behavior that compounds the dietary caloric surplus.",
          "For the military-affiliated population, the metabolic challenge takes a different but equally pernicious form. The stress of deployments, PCS moves, shift work at military hospitals and training facilities, and the anxiety of family separation drives chronic cortisol elevation. Military dining facilities (DFACs) and PX food courts, while improving, still lean heavily on high-glycemic, mass-produced options. The result across both civilian and military populations is the same: chronic hyperinsulinemia, progressive insulin resistance, and a metabolic state that cannot be resolved through behavioral modification alone."
        ]}
        citations={[
          "San Antonio Metropolitan Health District. (2025). <em>Bexar County Community Health Needs Assessment: Obesity and Metabolic Disease Prevalence</em>.",
          "Brooke Army Medical Center / SAMMC. (2024). <em>Weight Management Outcomes in Active Duty Personnel: Barriers to GLP-1 Access Under TRICARE Formulary Guidelines</em>.",
          "University of Texas Health San Antonio. (2024). <em>Regional Dietary Patterns and Insulin Resistance Prevalence in South-Central Texas</em>."
        ]}
      />

      <StateLegalFramework
        stateName="Texas"
        boardName="Texas Medical Board"
        text="Telehealth FX operates in strict compliance with the <strong>Texas Medical Board (TMB)</strong> and the Texas Occupations Code, Chapter 111 (Texas Telehealth Act). San Antonio patients benefit from Texas's progressive telehealth framework, which permits the establishment of a physician-patient relationship via asynchronous technology without a mandatory in-person encounter for non-controlled substances. This is particularly significant for the military-affiliated population at JBSA: Telehealth FX operates as an entirely civilian clinical pathway, independent of the Military Health System (MHS), TRICARE, and the Defense Health Agency (DHA). Service members and dependents who use Telehealth FX are engaging a private, self-pay medical service that does not interact with their military medical record."
      />

      <LocalTransitPain
        title="Bypass Loop 1604 & BAMC Referral Chains"
        transitText="San Antonio's explosive suburban growth has pushed the metro well beyond Loop 1604, creating commutes that can stretch to an hour from developments in Far West or Far North to medical facilities near the Medical Center or Fort Sam Houston. Whether you're stuck on I-35 through downtown, navigating the I-10/Loop 410 interchange, or sitting in construction on 281 North, the idea of spending your limited free time commuting to a doctor's office is increasingly untenable."
        hospitalText="The military referral chain adds another layer of friction. Active Duty and dependents using TRICARE Prime must first see their PCM (Primary Care Manager) at an MTF (Military Treatment Facility), then obtain a referral to the endocrinology clinic at <strong>BAMC (Brooke Army Medical Center)</strong>—where the wait can exceed 16 weeks. For civilian patients, <strong>University Health</strong> and <strong>Methodist Healthcare</strong> face their own capacity constraints. Meanwhile, branded Wegovy at the local <strong>H-E-B</strong>, <strong>CVS</strong>, or base pharmacy remains on indefinite backorder."
      />

      <CostComparisonTable
        title="San Antonio Weight Loss: The Real Price Breakdown"
        localCompetitors={[
          { name: "Alamo Heights Concierge Wellness", cost: "$650 - $1,000 / mo", consult: "Mandatory In-Person + Bloodwork", access: "Branded Only / Supply Limited" },
          { name: "Stone Oak Anti-Aging MedSpas", cost: "$500 - $850 / mo", consult: "Monthly Membership Required", access: "Unverified Compounding Sources" },
          { name: "BAMC Endocrinology (TRICARE)", cost: "$0 Copay", consult: "16+ Week Wait + Referral Chain", access: "Formulary Restricted / BMI 32+ Required" },
          { name: "University Health System", cost: "$100 Copay + Rx", consult: "8-12 Week Wait", access: "Prior Auth / Step Therapy / Backorder" }
        ]}
        telehealthPrice="From $146 / mo"
      />

      <InteractiveFAQ
        faqs={[
          { q: "I'm Active Duty. Will this show up on my military medical record?", a: "No. Telehealth FX is an entirely civilian, private-pay medical service. Your intake, evaluation, and prescription exist within our HIPAA-compliant civilian system. We do not report to, interface with, or share data with the Military Health System, TRICARE, or the Defense Health Agency. Your military medical record remains unaffected." },
          { q: "Can military dependents use this service?", a: "Absolutely. Dependents enrolled in TRICARE Prime or Select can use Telehealth FX as a self-pay option completely outside the TRICARE system. This bypasses the PCM referral requirement, the MTF appointment backlog, and the TRICARE formulary restrictions entirely." },
          { q: "How does this compare to the weight loss clinics near Lackland AFB?", a: "Many clinics near military installations offer generic 'weight loss injections' (often B12 or lipotropic blends) that have no FDA-recognized efficacy data for obesity. Telehealth FX prescribes only compounded Semaglutide and Tirzepatide—true GLP-1 receptor agonists with extensive Phase III clinical trial data." },
          { q: "My spouse is about to PCS. Can we transfer care to our new duty station?", a: "Telehealth FX operates in most U.S. states. When you PCS, simply update your state of residence in your patient profile, and you'll be matched with a physician licensed in your new state. Your clinical history transfers seamlessly within our system." },
          { q: "Can I pick up medication at the Randolph or Lackland pharmacy?", a: "No. Telehealth FX prescriptions are fulfilled exclusively through our civilian 503A compounding pharmacy network and shipped directly to your home address. They cannot be filled at military pharmacies (MTF/BX pharmacies), as those operate under a separate DoD formulary system." }
        ]}
      />

      <InsuranceBreakdown
        title="TRICARE vs. Civilian Plans: Both Block Access"
        text="San Antonio's insurance landscape is uniquely bifurcated between military (TRICARE) and civilian plans. Both create significant barriers to GLP-1 access, but through different mechanisms."
        employers={[
          { name: "TRICARE Prime (Active Duty & Dependents)", detail: "TRICARE's Uniform Formulary places most GLP-1 medications on Tier 3 (non-formulary) for weight management indications, requiring prior authorization with a BMI threshold of 32+ and documented comorbidities. The referral chain—PCM to specialist to pharmacy—can take 4-6 months from initial request to medication in hand." },
          { name: "USAA & Financial Services Plans", detail: "USAA, headquartered in San Antonio, and other major local financial employers offer competitive health plans that nonetheless classify GLP-1 weight loss as 'lifestyle medicine,' often requiring Step Therapy protocols starting with nutritional counseling before pharmaceutical intervention is considered." },
          { name: "Rackspace / Tech Sector Plans", detail: "San Antonio's growing tech sector offers employer-sponsored plans that frequently exclude weight management medications from their formularies entirely, directing employees to employer wellness programs instead of clinical interventions." }
        ]}
      />

      <DeliveryGridMap
        cityName="San Antonio"
        mapQuery="San Antonio, TX"
        coordinates="29.4241° N, 98.4936° W"
        counties="Bexar County, Comal County, Guadalupe County, Medina County"
        neighborhoods={['Alamo Heights', 'Stone Oak', 'The Pearl', 'Southtown', 'Helotes', 'Converse', 'Schertz', 'New Braunfels', 'Boerne', 'Leon Springs']}
      />

      <FinalCTA stateName="Texas" />

    </div>
  );
}
