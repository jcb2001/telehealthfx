"use client";
import React from 'react';
import { HeroVariationA, PatientArchetype, ClinicalDeepDive, InsuranceBreakdown, CostComparisonTable, LocalTransitPain, InteractiveFAQ, StateLegalFramework, DeliveryGridMap, FinalCTA } from './location-modules.jsx';

export function LocationTucson() {
  return (
    <div style={{ background: '#FBF8F3', overflow: 'hidden' }}>
      <HeroVariationA
        stateName="Arizona"
        cityName="Tucson"
        headline="Clinical GLP-1 Weight Loss in <br/><span style='color: #2ECC71'>Tucson</span>"
        subheadline="Tucson is 100 miles from Phoenix and a world away from its healthcare infrastructure. The Sonoran Desert heat makes outdoor exercise dangerous for six months of the year, and Pima County's specialist capacity cannot keep pace with a growing population. Compounded Semaglutide, delivered from the Catalina Foothills to South Tucson."
        ctaText="Check Arizona Eligibility"
      />
      <PatientArchetype
        archetype="The Raytheon Missile Systems Engineer"
        quote="I design guidance systems in a secured facility with no windows. I can't leave for lunch, I can't exercise during the day, and the cafeteria food is defense-contractor-grade processed. By the time I get home at 6 PM, it's still 108 degrees outside. 'Go for a walk after work' isn't medical advice in Tucson—it's a heat casualty waiting to happen."
        details="<strong>Patient Profile:</strong> Robert, 43, Systems Engineer at Raytheon Missiles & Defense, Tucson.<br/><br/><strong>The Challenge:</strong> Robert works in a cleared facility (SCIF) with no natural light, no external food options, and no opportunity for midday movement. The Sonoran Desert heat eliminates outdoor exercise from April through October. His Raytheon corporate plan (administered by Cigna) required prior authorization and Step Therapy for GLP-1s. The nearest in-network endocrinologist had a 14-week wait.<br/><br/><strong>The Intervention:</strong> Robert completed the Telehealth FX intake from his home in the Catalina Foothills. An Arizona-licensed physician prescribed compounded Tirzepatide within 24 hours. No security clearance implications. No waiting until October for it to be cool enough to walk."
      />
      <ClinicalDeepDive
        title="The Desert Heat Trap"
        paragraphs={[
          "Tucson's metabolic challenge is defined by extreme heat in a way that even Phoenix—with its larger population and infrastructure—cannot fully replicate. Tucson is smaller, more spread out, and has significantly fewer specialist physicians per capita. The Sonoran Desert climate pushes daytime temperatures above 100°F from May through September, with peak readings exceeding 115°F. This is not uncomfortable—it is medically dangerous. The National Weather Service issues excessive heat warnings for Tucson dozens of times each summer.",
          "The practical consequence is that the foundational recommendation of every weight management program—'increase physical activity'—is physically impossible for half the year. Morning exercise windows close by 9 AM as temperatures climb past 90°F. Evening windows don't open until after 8 PM, by which point most working residents have been sedentary for 12+ hours. The result is a population that is forced indoors into air-conditioned environments—cars, offices, homes—for the majority of the year.",
          "Tucson's food culture bridges Mexican and Southwestern traditions. The city was designated a UNESCO City of Gastronomy, and its Sonoran hot dogs, chimichangas (a Tucson invention), and flour tortilla-based cuisine are culturally essential. These foods are calorie-dense and carbohydrate-heavy, but they are also deeply tied to the city's Mexican-American heritage and community identity.",
          "The defense industry—Raytheon Missiles & Defense is Tucson's largest private employer—adds the SCIF-worker metabolic profile: no windows, no outdoor breaks, cafeteria food, and classified work stress. Davis-Monthan Air Force Base adds a military population with the same TRICARE referral delays seen in Tampa.",
          "GLP-1 medications provide clinical intervention that does not require defying the Sonoran Desert's heat or abandoning Tucson's Sonoran food heritage. They repair the metabolic signaling that the heat-forced sedentary lifestyle and chronic caloric surplus have damaged."
        ]}
        citations={[
          "Pima County Health Department. (2025). <em>Community Health Assessment: Obesity, Heat-Related Illness, and Chronic Disease in Pima County</em>.",
          "University of Arizona College of Medicine. (2024). <em>Extreme Heat, Physical Activity Barriers, and Metabolic Health in Arid-Climate Populations</em>."
        ]}
      />
      <InsuranceBreakdown
        title="Defense Contractors and the Specialist Desert"
        text="Tucson's employer landscape is dominated by defense and the University of Arizona, creating a concentrated but underserved patient population."
        employers={[
          { name: "Raytheon Missiles & Defense (RTX)", detail: "Tucson's largest private employer. Corporate plans require prior authorization and Step Therapy for GLP-1 access, administered through national PBMs that don't account for the unique environmental barriers of the Sonoran Desert." },
          { name: "University of Arizona / Banner Health", detail: "UA and Banner UMC are major employers whose plans impose the same formulary restrictions and specialist waitlists they encounter clinically." },
          { name: "Davis-Monthan AFB (TRICARE)", detail: "Active-duty and civilian DoD employees face the same TRICARE referral chain delays documented in Tampa—compounded by Tucson's smaller specialist pool." }
        ]}
      />
      <CostComparisonTable
        title="What Weight Loss Actually Costs in Tucson"
        localCompetitors={[
          { name: "Catalina Foothills Concierge", cost: "$700 - $1,100 / mo", consult: "Mandatory In-Person", access: "Branded Only" },
          { name: "Speedway / Oracle Rd MedSpas", cost: "$350 - $650 / mo", consult: "Monthly Membership", access: "Variable Compounding" },
          { name: "Banner UMC Endocrinology", cost: "$125 Copay + Rx", consult: "12-16 Week Wait", access: "Prior Auth Required" }
        ]}
        telehealthPrice="From $146 / mo"
      />
      <LocalTransitPain
        title="Bypass the I-10 Sprawl & Banner Waitlists"
        transitText="Tucson sprawls along I-10 and I-19 without the freeway density of Phoenix. Getting from the northwest side (Marana, Oro Valley) to a specialist near Banner UMC on the south side can take 45+ minutes on surface streets. Tucson has minimal public transit."
        hospitalText="<strong>Banner - University Medical Center Tucson</strong> is the region's academic anchor. <strong>TMC HealthCare</strong> and <strong>Northwest Medical Center</strong> supplement. Endocrinology waits average 12-16 weeks."
      />
      <InteractiveFAQ
        faqs={[
          { q: "It's too hot to exercise. Will the medication still work?", a: "Yes. GLP-1 medications work by restoring hormonal signaling, not by requiring exercise. While physical activity enhances results, the medication is effective independently of your activity level. It is specifically designed for the reality that many patients face environmental or physical barriers to exercise." },
          { q: "Do you deliver to Oro Valley, Marana, and Green Valley?", a: "Yes. We deliver to all residential and commercial addresses in Pima County and surrounding areas." }
        ]}
      />
      <StateLegalFramework
        stateName="Arizona"
        boardName="Arizona Medical Board"
        text="Telehealth FX operates in strict compliance with the <strong>Arizona Medical Board</strong> and ARS § 36-3602 (Arizona's telehealth regulations). All prescribers treating Arizona patients hold active, unrestricted Arizona medical licenses."
      />
      <DeliveryGridMap
        cityName="Tucson"
        mapQuery="Tucson, AZ"
        coordinates="32.2226° N, 110.9747° W"
        counties="Pima County"
        neighborhoods={['Catalina Foothills', 'Oro Valley', 'Marana', 'South Tucson', 'Midtown', 'Casas Adobes', 'Green Valley', 'Vail', 'Sahuarita']}
      />
      <FinalCTA stateName="Arizona" />
    </div>
  );
}
