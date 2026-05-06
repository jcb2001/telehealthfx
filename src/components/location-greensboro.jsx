"use client";
import React from 'react';
import { HeroVariationA, PatientArchetype, ClinicalDeepDive, InsuranceBreakdown, CostComparisonTable, LocalTransitPain, InteractiveFAQ, StateLegalFramework, DeliveryGridMap, FinalCTA } from './location-modules.jsx';
export function LocationGreensboro() {
  return (
    <div style={{ background: '#FBF8F3', overflow: 'hidden' }}>
      <HeroVariationA stateName="North Carolina" cityName="Greensboro" headline="Clinical GLP-1 Weight Loss in <br/><span style='color: #2ECC71'>Greensboro</span>" subheadline="Greensboro anchors the Piedmont Triad—a region built on textiles, tobacco, and furniture. The manufacturing legacy is gone, but the food culture and healthcare access gaps it left behind remain. Cone Health and Wake Forest Baptist serve the Triad, but specialist capacity cannot meet the demand of 1.7 million residents." ctaText="Check North Carolina Eligibility" />
      <PatientArchetype archetype="The Honda Jet Assembly Technician" quote="I build HondaJet fuselages at the Piedmont Triad International Airport facility. It's precision work—10-hour shifts standing on concrete floors. The factory cafeteria is my main meal. My Blue Cross plan through Honda Aircraft said I need to complete a weight management program before they'll consider a GLP-1. The program meets at 2 PM on Wednesdays. I'm on the factory floor at 2 PM on Wednesdays." details="<strong>Patient Profile:</strong> Marcus, 36, Composite Assembly Technician at Honda Aircraft Company, Greensboro.<br/><br/><strong>The Challenge:</strong> Marcus works in advanced aerospace manufacturing, building light jet fuselages. Factory shift schedules conflict with the daytime wellness programs his employer's plan requires. His Blue Cross NC plan imposes standard Step Therapy.<br/><br/><strong>The Intervention:</strong> Marcus completed the Telehealth FX intake from his apartment in High Point after a shift. An NC-licensed physician prescribed compounded Semaglutide within 24 hours." />
      <ClinicalDeepDive title="The Piedmont Triad's Post-Industrial Metabolism" paragraphs={[
        "The Piedmont Triad—Greensboro, Winston-Salem, High Point—was built on tobacco, textiles, and furniture manufacturing. Those industries are largely gone, replaced by logistics hubs, healthcare, and advanced manufacturing (Honda Aircraft, Volvo Trucks). But the food culture and the economic landscape they left behind persist.",
        "Winston-Salem was literally built by R.J. Reynolds Tobacco. The irony of a region that sold America one metabolic crisis (nicotine addiction) now facing another (insulin resistance) is not lost on public health researchers. The dietary traditions are classic Piedmont Southern: biscuits, sweet tea, fried chicken, and the pork barbecue that the Lexington BBQ style made famous.",
        "The Triad's healthcare infrastructure is anchored by Cone Health (Greensboro) and Atrium Health Wake Forest Baptist (Winston-Salem). Both are strong regional systems, but specialist capacity for a metro of 1.7 million is stretched. Endocrinology waitlists average 10-16 weeks across both systems.",
        "GLP-1 medications serve the Triad's post-industrial population—workers in advanced manufacturing, logistics, and healthcare who inherited a food culture built for manual labor caloric needs but now work jobs that burn a fraction of those calories."
      ]} citations={[
        "Guilford County Department of Health. (2025). <em>Community Health Assessment: Obesity and Chronic Disease</em>.",
        "Wake Forest University School of Medicine. (2024). <em>Post-Industrial Food Culture and Metabolic Disease in the Piedmont Region</em>."
      ]} />
      <InsuranceBreakdown title="Manufacturing Plans and the Triad Specialist Gap" text="The Piedmont Triad's employer mix spans advanced manufacturing, logistics, and healthcare." employers={[
        { name: "Honda Aircraft / Volvo Trucks / Ralph Lauren", detail: "Advanced manufacturing and distribution employers offer corporate plans with standard PBM Step Therapy barriers for GLP-1 access." },
        { name: "Cone Health / Wake Forest Baptist", detail: "The Triad's anchor health systems employ thousands facing the same formulary restrictions they encounter clinically." },
        { name: "FedEx Ground / Amazon (Kernersville Hub)", detail: "Logistics employers offer shift-work schedules that conflict with daytime wellness program requirements." }
      ]} />
      <CostComparisonTable title="What Weight Loss Actually Costs in the Triad" localCompetitors={[
        { name: "Irving Park / Friendly Center Concierge", cost: "$600 - $1,000 / mo", consult: "Mandatory In-Person", access: "Branded Only" },
        { name: "Battleground Ave MedSpas", cost: "$350 - $600 / mo", consult: "Monthly Membership", access: "Variable Compounding" },
        { name: "Cone Health Endocrinology", cost: "$100 Copay + Rx", consult: "10-16 Week Wait", access: "Prior Auth Required" }
      ]} telehealthPrice="From $146 / mo" />
      <LocalTransitPain title="Bypass I-40/I-85 & Cone Health Waitlists" transitText="The Triad's three cities are connected by I-40 and I-85, which merge in the region's center. Commuting between Greensboro, Winston-Salem, and High Point for medical appointments adds significant drive time." hospitalText="<strong>Cone Health</strong> and <strong>Atrium Health Wake Forest Baptist</strong> anchor the region. Specialist waits average 10-16 weeks." />
      <InteractiveFAQ faqs={[
        { q: "I live in Winston-Salem. Is that covered?", a: "Yes. We serve the entire Piedmont Triad including Greensboro, Winston-Salem, High Point, Burlington, and Asheboro." },
        { q: "Do you deliver to High Point and Kernersville?", a: "Yes. All addresses in Guilford, Forsyth, Randolph, and Alamance counties." }
      ]} />
      <StateLegalFramework stateName="North Carolina" boardName="North Carolina Medical Board" text="Telehealth FX operates in strict compliance with the <strong>North Carolina Medical Board (NCMB)</strong> and NCGS § 90-21.1 et seq." />
      <DeliveryGridMap cityName="Greensboro" mapQuery="Greensboro, NC" coordinates="36.0726° N, 79.7920° W" counties="Guilford County, Forsyth County, Randolph County, Alamance County" neighborhoods={['Irving Park', 'Friendly Center', 'High Point', 'Winston-Salem', 'Kernersville', 'Burlington', 'Asheboro']} />
      <FinalCTA stateName="North Carolina" />
    </div>
  );
}
