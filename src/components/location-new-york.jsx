"use client";
import React from 'react';
import { HeroVariationB, ClinicalDeepDive, InsuranceBreakdown, CostComparisonTable, PatientArchetype, DeliveryGridMap, InteractiveFAQ, FinalCTA } from './location-modules.jsx';

export function LocationNewYork() {
  return (
    <div style={{ background: '#FBF8F3', overflow: 'hidden' }}>
      
      <HeroVariationB 
        stateName="New York"
        cityName="New York City"
        headline="Clinical GLP-1 Weight Loss in <span style='color: #2ECC71'>New York City</span>"
        subheadline="Bypass the extreme markups of Upper East Side MedSpas and the multi-month waitlists at NYU Langone. Access quality-verified compounded Semaglutide and Tirzepatide, delivered cold-packed to your door anywhere in the Five Boroughs."
        dataPoint1="Due to unprecedented demand, retail pharmacies across Manhattan and Brooklyn (including Duane Reade and CVS) are experiencing indefinite backorders of branded Wegovy and Zepbound."
        dataPoint2="Telehealth FX utilizes a decentralized network of 503A compounding pharmacies, ensuring uninterrupted access to the exact same active pharmaceutical ingredients."
      />

      <ClinicalDeepDive 
        title="The Metropolitan Metabolic Reality"
        paragraphs={[
          "Navigating metabolic health within the hyper-competitive environment of New York City presents a highly specific physiological challenge. While the city boasts incredible walkability compared to the rest of the nation, the daily reality for many professionals in finance, law, and tech involves extreme sedentary behavior tied to 12-hour desk shifts.",
          "This intensely high-stress environment—characterized by grueling commutes on the MTA, the relentless pace of Wall Street, and the sheer sensory overload of the metropolis—creates a perfect storm for chronic, elevated cortisol levels. Sustained high cortisol directly triggers systemic insulin resistance, making it biochemically impossible for many New Yorkers to lose weight through sheer willpower or generic caloric restriction.",
          "Furthermore, the reliance on late-night food delivery culture (Seamless/Grubhub) and the high prevalence of sodium-heavy restaurant dining severely disrupts the gut microbiome. When insulin resistance takes hold, the body effectively locks fat in adipose tissue. GLP-1 receptor agonists are not 'diet pills'—they are the clinical medical intervention necessary to repair this broken metabolic signaling and restore proper insulin sensitivity."
        ]}
        citations={[
          "State of New York Department of Health. (2025). <em>Metabolic Syndrome and Urban Stress Outcomes</em>.",
          "NYU Grossman School of Medicine. (2024). <em>The Correlation Between Chronic Cortisol Elevation and Visceral Adiposity in High-Stress Occupations</em>."
        ]}
      />

      <CostComparisonTable 
        title="The NYC Cost Arbitrage"
        localCompetitors={[
          { name: "Upper East Side Anti-Aging Clinics", cost: "$900 - $1,400 / mo", consult: "Mandatory In-Person", access: "Limited Supply / Waitlisted" },
          { name: "Tribeca Boutique MedSpas", cost: "$750 - $1,100 / mo", consult: "Mandatory Bloodwork Fees", access: "Requires 'Membership' Fee" },
          { name: "Traditional Primary Care (Mount Sinai)", cost: "$150 Copay", consult: "3-Month Wait for Appointment", access: "Pharmacy Denials / Out of Stock" }
        ]}
        telehealthPrice="From $146 / mo"
      />

      <PatientArchetype 
        archetype="The FiDi Financial Analyst"
        quote="I was paying $850 a month at a clinic in SoHo just for the privilege of standing in a waiting room. Telehealth FX bypassed the entire charade."
        details="<strong>Patient Profile:</strong> Sarah, 34, Financial Analyst in the Financial District.<br/><br/><strong>The Challenge:</strong> Working 65-hour weeks left zero time for in-person doctor visits. Despite eating 'clean' Sweetgreen salads, sustained cortisol from extreme work stress led to a 35-pound weight gain over three years. Her corporate Aetna plan categorically denied prior authorization for Wegovy.<br/><br/><strong>The Intervention:</strong> By utilizing the asynchronous Telehealth FX platform, Sarah completed her medical intake on her commute from Brooklyn. A NY-licensed physician approved her protocol within 12 hours, and compounded Tirzepatide was shipped overnight directly to her apartment."
      />

      <InsuranceBreakdown 
        title="Bypassing Corporate Insurance Denials"
        text="Despite the overwhelming clinical data supporting GLP-1 efficacy, major corporate health plans across New York consistently deny coverage for weight loss medications, labeling them 'lifestyle' drugs."
        employers={[
          { name: "Wall Street & Big Law Plans", detail: "Many self-funded corporate plans explicitly carve out GLP-1 weight loss coverage to reduce overhead, denying even patients with clinical obesity." },
          { name: "Retail Pharmacy Gridlock", detail: "Even if you secure an elusive Prior Authorization, trying to fill the script at a Duane Reade in Midtown is virtually impossible due to national supply chain failures." }
        ]}
      />

      <DeliveryGridMap 
        cityName="New York City"
        mapQuery="New York, NY"
        coordinates="40.7128° N, 74.0060° W"
        counties="New York County, Kings County, Queens County, Bronx County, Richmond County, Westchester County, Nassau County"
        neighborhoods={['Manhattan', 'Brooklyn', 'Queens', 'The Bronx', 'Staten Island', 'Long Island', 'Westchester', 'Jersey City (Metro)']}
      />

      <InteractiveFAQ 
        faqs={[
          { q: "Do I need to visit a physical clinic in Manhattan?", a: "No. Under New York State Department of Health telehealth regulations, you can complete your entire medical intake asynchronously online. No video call or physical visit is required." },
          { q: "How does shipping work for apartment buildings?", a: "Medication is shipped via overnight courier in insulated cold-packs. It is designed to remain at the proper temperature for up to 48 hours, easily accommodating standard NYC doorman or package room delays." },
          { q: "Is Telehealth FX legally authorized in New York?", a: "Yes. We partner exclusively with physicians licensed by the New York State Board for Medicine, and utilize FDA-registered 503A pharmacies authorized to dispense in NY." },
          { q: "Can I use my FSA/HSA card?", a: "Absolutely. You can use pre-tax FSA or HSA funds for both the consultation and the medication, providing significant tax advantages for NYC residents." }
        ]}
      />

      <FinalCTA stateName="New York" />

    
{/* Disclaimer: Mounjaro®, Zepbound®, Ozempic®, and Wegovy® are registered trademarks of their respective owners (Eli Lilly and Company and Novo Nordisk A/S). Telehealth FX is not affiliated with, endorsed by, or connected to any of these companies. Compounded medications are not FDA-approved and are not therapeutically equivalent to any branded product. */}
</div>
  );
}
