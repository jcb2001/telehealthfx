"use client";
import React from 'react';
import { HeroVariationB, PatientArchetype, ClinicalDeepDive, InsuranceBreakdown, CostComparisonTable, LocalTransitPain, InteractiveFAQ, StateLegalFramework, DeliveryGridMap, FinalCTA } from './location-modules.jsx';

export function LocationTulsa() {
  return (
    <div style={{ background: '#FBF8F3', overflow: 'hidden' }}>
      <HeroVariationB stateName="Oklahoma" cityName="Tulsa" headline="Clinical GLP-1 Weight Loss in <span style='color: #2ECC71'>Tulsa</span>" subheadline="Tulsa was built by oil money, and the energy industry still defines the city's economy and its metabolic health. Long-haul rig commutes, 12-hour shift rotations, and a food culture anchored in chicken-fried steak create a metabolic environment that lifestyle modification alone cannot fix." dataPoint1="Oklahoma's adult obesity rate exceeds 40%—the fourth highest in the nation. Tulsa County mirrors this rate, with endocrinology access constrained by a specialist shortage across the state." dataPoint2="Telehealth FX provides immediate clinical access without the 12-week wait at Saint Francis or OSU Medicine." />
      <PatientArchetype
        archetype="The Cushing Oil Field Operator"
        quote="I commute an hour to Cushing and work 12-hour rotating shifts monitoring pipeline pressure. I eat at truck stops and gas stations. My Blue Cross plan through the operator said I need to 'try diet and exercise first' for 6 months. I work in a control room for 12 hours. When exactly am I supposed to exercise?"
        details="<strong>Patient Profile:</strong> Danny, 40, Pipeline Operations Technician, Cushing Oil Hub.<br/><br/><strong>The Challenge:</strong> Danny commutes from Tulsa to the Cushing oil hub—one of the largest oil storage and pipeline crossroads in the world. His 12-hour shifts in a control room are entirely sedentary. His diet is constrained by what's available on the highway: truck stop food, gas station snacks, fast food. His employer-sponsored Blue Cross plan required 6 months of behavioral modification before considering GLP-1 authorization.<br/><br/><strong>The Intervention:</strong> Danny completed the Telehealth FX intake from his apartment in Broken Arrow after a night shift. An Oklahoma-licensed physician prescribed compounded Semaglutide within 24 hours."
      />
      <ClinicalDeepDive
        title="Oil, Chicken-Fried Steak, and the 40% Threshold"
        paragraphs={[
          "Oklahoma's obesity rate has crossed 40%, placing it among the most metabolically challenged states in the nation. Tulsa County reflects this reality. The combination of an oil-and-gas economy that demands shift work and long commutes, a food culture built on chicken-fried steak, fried okra, and biscuits and gravy, and limited specialist healthcare access creates a metabolic crisis that individual willpower cannot address.",
          "The energy industry workforce faces a specific metabolic challenge: the rig-to-office-to-control-room cycle. Whether working in pipeline operations, refinery monitoring, or corporate energy management, the work is predominantly sedentary despite its 'blue collar' reputation. The caloric expenditure of monitoring SCADA systems for 12 hours is essentially zero, but the food environment along the highways connecting Tulsa to the oil fields (Cushing, Bartlesville, Ponca City) is uniformly fast food and truck stops.",
          "Tulsa's food culture beyond the oil fields is equally calorie-dense. The city's restaurant scene is anchored by Southern comfort food traditions—Andolini's, Tally's Café, and the ubiquitous BBQ joints serve portions sized for roughnecks burning 5,000 calories a day. Most Tulsans are not roughnecks. They are office workers, teachers, and healthcare providers eating roughneck portions.",
          "GLP-1 medications address the hormonal dysregulation that this environment produces—restoring insulin sensitivity and appetite regulation without requiring a pipeline operator to find a gym between his 12-hour shift and his 1-hour commute."
        ]}
        citations={[
          "Tulsa Health Department. (2025). <em>Tulsa County Community Health Needs Assessment: Obesity and Chronic Disease</em>.",
          "Oklahoma State University Center for Health Sciences. (2024). <em>Occupational Health, Shift Work, and Metabolic Outcomes in the Oklahoma Energy Sector</em>."
        ]}
      />
      <InsuranceBreakdown title="Energy Sector Plans and the Specialist Shortage" text="Tulsa's employer landscape is dominated by energy companies whose plans apply standard PBM barriers in a state with severe specialist shortages." employers={[
        { name: "Williams Companies / ONEOK / Holly Frontier", detail: "Tulsa's major energy employers offer corporate plans with specialty-tier GLP-1 restrictions requiring extensive prior authorization and Step Therapy." },
        { name: "Saint Francis / Ascension St. John", detail: "Tulsa's major health systems employ thousands facing the same formulary barriers they encounter in clinical practice." },
        { name: "QuikTrip (HQ — Tulsa)", detail: "QuikTrip, headquartered in Tulsa, employs thousands of convenience store workers across the region whose health plans classify GLP-1s as lifestyle exclusions." }
      ]} />
      <CostComparisonTable title="What Weight Loss Actually Costs in Tulsa" localCompetitors={[
        { name: "South Tulsa / Jenks Concierge", cost: "$600 - $1,000 / mo", consult: "Mandatory In-Person", access: "Branded Only" },
        { name: "Midtown MedSpas", cost: "$350 - $600 / mo", consult: "Monthly Membership", access: "Variable Compounding" },
        { name: "Saint Francis Endocrinology", cost: "$100 Copay + Rx", consult: "10-14 Week Wait", access: "Prior Auth Required" }
      ]} telehealthPrice="From $146 / mo" />
      <LocalTransitPain title="Bypass the BA Expressway & Saint Francis Waitlists" transitText="Tulsa sprawls along the I-44 / US-169 / BA Expressway corridor. Getting from Broken Arrow or Owasso to a specialist appointment in Midtown Tulsa requires navigating limited freeway capacity." hospitalText="<strong>Saint Francis Health System</strong> and <strong>Ascension St. John</strong> anchor the region. Specialist waits average 10-14 weeks." />
      <InteractiveFAQ faqs={[
        { q: "I work 12-hour shifts. When do I do the intake?", a: "Anytime. The intake is fully asynchronous—no appointment, no phone call. Complete it before, after, or between shifts." },
        { q: "Do you deliver to Broken Arrow, Owasso, and Bixby?", a: "Yes. We deliver to all addresses in Tulsa County and surrounding areas." }
      ]} />
      <StateLegalFramework stateName="Oklahoma" boardName="Oklahoma State Board of Medical Licensure" text="Telehealth FX operates in strict compliance with the <strong>Oklahoma State Board of Medical Licensure and Supervision</strong>. All prescribers hold active, unrestricted Oklahoma medical licenses." />
      <DeliveryGridMap cityName="Tulsa" mapQuery="Tulsa, OK" coordinates="36.1540° N, 95.9928° W" counties="Tulsa County, Rogers County, Wagoner County, Creek County" neighborhoods={['Midtown', 'Brookside', 'Cherry Street', 'Broken Arrow', 'Owasso', 'Jenks', 'Bixby', 'Sand Springs']} />
      <FinalCTA stateName="Oklahoma" />
    </div>
  );
}
