"use client";
import React from 'react';
import { HeroVariationA, PatientArchetype, ClinicalDeepDive, InsuranceBreakdown, CostComparisonTable, LocalTransitPain, InteractiveFAQ, StateLegalFramework, DeliveryGridMap, FinalCTA } from './location-modules.jsx';
export function LocationBoise() {
  return (
    <div style={{ background: '#FBF8F3', overflow: 'hidden' }}>
      <HeroVariationA stateName="Idaho" cityName="Boise" headline="Clinical GLP-1 Weight Loss in <br/><span style='color: #2ECC71'>Boise</span>" subheadline="Boise is the fastest-growing city in America—and its healthcare system is being outpaced by the population surge. Micron Technology, HP, and Albertsons bring thousands of desk-bound tech and corporate workers to a city that markets itself on outdoor recreation. The gap between the 'outdoor lifestyle' brand and the cubicle reality is widening." ctaText="Check Idaho Eligibility" />
      <PatientArchetype archetype="The Micron Technology Cleanroom Engineer" quote="I work in a semiconductor fabrication facility—a cleanroom where I wear a bunny suit for 12 hours and can't eat, drink, or step outside. When my shift ends, I'm exhausted. Boise sells itself as this outdoor paradise, but I haven't hiked the Boise Foothills in two years. My St. Luke's plan has a 14-week wait for endocrinology. The city grew too fast for its own doctors." details="<strong>Patient Profile:</strong> Matt, 33, Process Engineer at Micron Technology, Boise.<br/><br/><strong>The Challenge:</strong> Matt works in Micron's fab facility in highly controlled cleanroom conditions. No food, no natural light, no movement beyond his workstation for 12-hour shifts. Boise's rapid population growth has overwhelmed St. Luke's and Saint Alphonsus specialist capacity.<br/><br/><strong>The Intervention:</strong> Matt completed the Telehealth FX intake from his apartment in Meridian on a day off. An Idaho-licensed physician prescribed compounded Semaglutide within 20 hours." />
      <ClinicalDeepDive title="The Outdoor Capital That Lives Indoors" paragraphs={[
        "Boise's brand is the outdoor lifestyle—skiing at Bogus Basin, hiking the Foothills, floating the Boise River, mountain biking in the high desert. The marketing is compelling, and for a subset of the population, it's real. But for the tech workers, corporate employees, and healthcare professionals who make up the majority of the workforce, the daily reality is a desk, a screen, and an office park along Eagle Road.",
        "The population growth is the defining factor. Boise has been the fastest-growing metro in America for several years running, absorbing transplants from California, Washington, and Oregon. The healthcare system has not scaled proportionally. St. Luke's Health System and Saint Alphonsus (now part of Trinity Health) have added capacity, but specialist recruitment in a mid-size Idaho city cannot keep pace with a population adding 10,000+ residents per year.",
        "The food environment has evolved with the transplant population—Boise now has a legitimate restaurant scene in the Boise Bench and North End. But the suburban sprawl along Eagle Road, Meridian, and Nampa remains dominated by chain restaurants and fast food. The Idaho comfort food tradition (steak, potatoes, and the finger steaks that are Boise's signature dish) adds its own caloric weight.",
        "GLP-1 medications serve the Boise that actually exists—the desk-bound tech workers and corporate employees who moved here for the 'outdoor lifestyle' but spend their days in office parks—delivering metabolic care without competing for St. Luke's overwhelmed specialist slots."
      ]} citations={[
        "Central District Health Department. (2025). <em>Ada County Community Health Assessment</em>.",
        "Boise State University. (2024). <em>Population Growth, Healthcare Capacity, and the Boise Metropolitan Area</em>."
      ]} />
      <InsuranceBreakdown title="Tech Growth, Outdoor Brand, Indoor Reality" text="Boise's tech-driven growth has created a corporate workforce with standard insurance barriers." employers={[
        { name: "Micron Technology (HQ)", detail: "Boise's largest tech employer offers strong benefits but standard PBM formulary restrictions for GLP-1 weight management. Cleanroom shift workers face unique metabolic challenges." },
        { name: "HP / Albertsons (HQ) / Clearwater Analytics", detail: "Corporate employers offer plans with specialty-tier GLP-1 restrictions requiring prior authorization." },
        { name: "St. Luke's / Saint Alphonsus", detail: "Boise's two health systems are both employers and the primary specialist source, with capacity stretched by rapid population growth." }
      ]} />
      <CostComparisonTable title="What Weight Loss Actually Costs in Boise" localCompetitors={[
        { name: "North End / Harris Ranch Concierge", cost: "$700 - $1,100 / mo", consult: "Mandatory In-Person", access: "Branded Only" },
        { name: "Eagle Road MedSpas", cost: "$350 - $650 / mo", consult: "Monthly Membership", access: "Variable Compounding" },
        { name: "St. Luke's Endocrinology", cost: "$125 Copay + Rx", consult: "12-16 Week Wait", access: "Prior Auth Required" }
      ]} telehealthPrice="From $146 / mo" />
      <LocalTransitPain title="Bypass Eagle Road Traffic & St. Luke's Waitlists" transitText="Boise's growth has turned Eagle Road and the I-84/I-184 connector into daily bottlenecks. Commuting from Meridian, Nampa, or Eagle to a specialist appointment downtown takes 30-45 minutes." hospitalText="<strong>St. Luke's Health System</strong> and <strong>Saint Alphonsus</strong> serve the Treasure Valley. Specialist waits average 12-16 weeks." />
      <InteractiveFAQ faqs={[
        { q: "I moved from California. Can I use my old doctor?", a: "No. Prescribers must be licensed in your state of residence. Telehealth FX provides Idaho-licensed physicians for all Idaho patients." },
        { q: "Do you deliver to Meridian, Nampa, and Eagle?", a: "Yes. All Ada, Canyon, and Gem County addresses." }
      ]} />
      <StateLegalFramework stateName="Idaho" boardName="Idaho Board of Medicine" text="Telehealth FX operates in strict compliance with the <strong>Idaho Board of Medicine</strong> and Idaho Code § 54-1814. All prescribers hold active, unrestricted Idaho medical licenses." />
      <DeliveryGridMap cityName="Boise" mapQuery="Boise, ID" coordinates="43.6150° N, 116.2023° W" counties="Ada County, Canyon County, Gem County" neighborhoods={['North End', 'Boise Bench', 'Meridian', 'Nampa', 'Eagle', 'Caldwell', 'Star', 'Kuna']} />
      <FinalCTA stateName="Idaho" />
    </div>
  );
}
