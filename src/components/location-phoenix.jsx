"use client";
import React from 'react';
import { HeroVariationB, LocalTransitPain, ClinicalDeepDive, CostComparisonTable, StateLegalFramework, PatientArchetype, InsuranceBreakdown, DeliveryGridMap, InteractiveFAQ, FinalCTA } from './location-modules.jsx';

export function LocationPhoenix() {
  return (
    <div style={{ background: '#FBF8F3', overflow: 'hidden' }}>

      <HeroVariationB
        stateName="Arizona"
        cityName="Phoenix"
        headline="Clinical GLP-1 Weight Loss in <span style='color: #2ECC71'>Phoenix</span>"
        subheadline="Bypass the extreme markups of Scottsdale wellness clinics and the months-long waitlists at Mayo Clinic Arizona. Access quality-verified compounded Semaglutide and Tirzepatide, cold-shipped to your door from Arcadia to Ahwatukee."
        dataPoint1="Phoenix averages 110+ days per year with temperatures exceeding 100°F—making sustained outdoor exercise medically inadvisable for nearly a third of the calendar year."
        dataPoint2="Telehealth FX provides asynchronous, climate-proof metabolic care that doesn't require you to leave your air-conditioned home during a heat advisory."
      />

      <LocalTransitPain
        title="Bypass The Stack & Banner Health Waitlists"
        transitText="The Phoenix metropolitan area sprawls across over 14,000 square miles—larger than some U.S. states—with virtually no functional mass transit outside the limited Valley Metro light rail. Whether you're gridlocked at 'The Stack' (the I-10/I-17 interchange), crawling on the Loop 101 through Scottsdale, or navigating the US-60 Superstition Freeway from Mesa, a routine doctor's visit can easily consume three hours of your day door-to-door."
        hospitalText="Even reaching a world-class institution doesn't guarantee access. <strong>Mayo Clinic's Scottsdale campus</strong> is one of the most prestigious medical facilities on the planet—yet new-patient metabolic appointments routinely stretch past 10 weeks. <strong>Banner Health</strong> and <strong>HonorHealth</strong> networks face similar bottlenecks. Meanwhile, trying to fill a branded Wegovy prescription at a local <strong>Fry's</strong> (Kroger) or <strong>CVS</strong> pharmacy is an exercise in futility: indefinite backorder is the default status across Maricopa County."
      />

      <ClinicalDeepDive
        title="The Sonoran Desert Metabolic Trap"
        paragraphs={[
          "Phoenix's relationship with metabolic health is defined by a single, inescapable environmental fact: extreme, sustained heat. The Valley of the Sun routinely records surface temperatures above 115°F during June, July, and August, with overnight lows that barely dip below 90°F. The Maricopa County Department of Public Health issues heat-related mortality warnings every summer. This isn't discomfort—this is a climate that makes outdoor physical activity genuinely dangerous for five to six months of the year.",
          "The consequences for baseline metabolic health are severe. When outdoor walking, jogging, or cycling becomes a heat stroke risk from April through October, the default behavior is car-to-building-to-car transit in air-conditioned isolation. Phoenix is already one of the least walkable major metros in the United States, with a Walk Score averaging below 40 across most residential zip codes. The heat amplifies this structural car dependency into near-total physical stagnation during the hottest months.",
          "Compounding the sedentary trap is the Valley's food environment. Phoenix lacks the dense, walkable neighborhood food markets common in coastal cities. Instead, the infrastructure is dominated by drive-through chains and strip-mall dining. The cultural comfort foods of the Southwest—Sonoran hot dogs, chimichangas, carne asada fries—are deeply satisfying but extremely calorie-dense and high-glycemic. Consumed daily within the context of heat-enforced inactivity, these dietary patterns directly provoke chronic hyperinsulinemia.",
          "There is also the 'snowbird' factor unique to the Valley. Every winter, hundreds of thousands of seasonal residents flood Phoenix-area healthcare systems, creating artificial demand spikes that further strain appointment availability precisely when full-time residents need consistent metabolic care. Asynchronous telehealth eliminates your dependency on this seasonal capacity crunch entirely.",
          "When insulin resistance has taken hold under these conditions, the body has entered a self-reinforcing metabolic loop. Elevated baseline insulin prevents fat mobilization, suppresses leptin signaling, and increases ghrelin-driven hunger. GLP-1 receptor agonists break this loop at the hormonal level—they are not appetite suppressants in the traditional sense, but rather precision tools that restore the incretin signaling your endocrine system has lost the ability to produce effectively."
        ]}
        citations={[
          "Maricopa County Department of Public Health. (2025). <em>Heat-Related Illness and Mortality Surveillance Report: Implications for Outdoor Physical Activity</em>.",
          "Arizona State University College of Health Solutions. (2024). <em>Urban Heat Island Effects on Physical Activity Patterns and Metabolic Outcomes in the Phoenix Metropolitan Area</em>.",
          "Mayo Clinic Proceedings. (2024). <em>Incretin-Based Therapies for Obesity: Mechanism of Action and Clinical Outcomes in Desert Climate Populations</em>."
        ]}
      />

      <CostComparisonTable
        title="What Weight Loss Actually Costs in the Valley"
        localCompetitors={[
          { name: "Scottsdale Concierge Wellness Clinics", cost: "$800 - $1,400 / mo", consult: "Mandatory In-Person + Labs", access: "Branded Only / Waitlisted" },
          { name: "Paradise Valley Anti-Aging MedSpas", cost: "$650 - $1,000 / mo", consult: "Monthly 'VIP Membership' Required", access: "Limited Compounding Options" },
          { name: "Mayo Clinic Arizona (Endocrinology)", cost: "$250 Copay + Rx", consult: "10-16 Week New Patient Wait", access: "Formulary Restrictions / Denials" },
          { name: "Banner Health Primary Care", cost: "$75 Copay", consult: "4-8 Week Wait", access: "Prior Auth Required / Pharmacy Backorder" }
        ]}
        telehealthPrice="From $146 / mo"
      />

      <StateLegalFramework
        stateName="Arizona"
        boardName="Arizona Medical Board"
        text="Telehealth FX operates in strict compliance with the <strong>Arizona Medical Board</strong> and Arizona Revised Statutes Title 36, Chapter 36 (Telehealth). Arizona has been a national leader in telehealth-friendly legislation. Under current Arizona law, a physician-patient relationship may be established via asynchronous telemedicine without a mandatory in-person encounter, provided the treating physician holds an active Arizona medical license and maintains appropriate clinical documentation. Arizona's regulatory framework explicitly recognizes store-and-forward technology as a valid modality for establishing care, making it one of the most permissive and patient-friendly telehealth environments in the country. All Telehealth FX prescribers treating Arizona patients are individually verified through the Arizona Medical Board's license lookup system."
      />

      <PatientArchetype
        archetype="The Chandler Fab Technician"
        quote="I work 12-hour shifts at a semiconductor fab in Chandler. By the time I get off, every doctor's office in the East Valley is closed. And on my days off, I'm not driving 45 minutes to Scottsdale in 112-degree heat to sit in a waiting room."
        details="<strong>Patient Profile:</strong> Angela, 36, Process Technician at a semiconductor fabrication facility in Chandler, AZ.<br/><br/><strong>The Challenge:</strong> Angela works a compressed 3/4 schedule—three 12-hour shifts one week, four the next—rotating between days and nights. This schedule, common across the massive Intel, TSMC, and Taiwan Semiconductor ecosystem in the East Valley, completely destroys circadian rhythm consistency. Clinical research directly links rotating shift work to elevated cortisol, disrupted leptin signaling, and accelerated visceral fat storage. Her UnitedHealthcare plan required Step Therapy, mandating 6 months of failed Orlistat treatment before even considering a GLP-1 authorization.<br/><br/><strong>The Intervention:</strong> Angela completed the Telehealth FX intake at 1 AM during a night shift break. An Arizona-licensed physician reviewed her metabolic profile asynchronously and prescribed compounded Semaglutide within 18 hours. Cold-packed medication was delivered to her Gilbert apartment two days later. Zero commute. Zero time off work. Zero Step Therapy hoops."
      />

      <InsuranceBreakdown
        title="Why Valley Employers Block Your GLP-1 Access"
        text="The Phoenix metro's booming economy is anchored by semiconductor manufacturing, defense contracting, financial services, and a massive state university system. Despite offering competitive benefits packages, the self-funded health plans at many of these employers systematically restrict or deny GLP-1 medications for weight management."
        employers={[
          { name: "Semiconductor & Tech (Intel, TSMC)", detail: "Large self-funded tech employer plans frequently classify GLP-1 weight loss as elective, requiring exhaustive Step Therapy protocols or BMI thresholds of 40+ before considering authorization—well above the clinical threshold of 27 with comorbidities." },
          { name: "Defense & Aerospace (Raytheon, Honeywell)", detail: "Many defense contractor plans in the Valley carve out weight management pharmaceuticals entirely from their formularies, directing employees to employer-sponsored 'wellness programs' that offer diet counseling instead of clinical intervention." },
          { name: "Arizona State University / State Employees", detail: "The state employee health plan (ADOA) has historically placed GLP-1 medications on the highest formulary tier with restrictive prior authorization requirements, creating a bureaucratic maze that delays treatment by months." }
        ]}
      />

      <DeliveryGridMap
        cityName="Phoenix"
        mapQuery="Phoenix, AZ"
        coordinates="33.4484° N, 112.0740° W"
        counties="Maricopa County, Pinal County"
        neighborhoods={['Scottsdale', 'Tempe', 'Chandler', 'Gilbert', 'Mesa', 'Paradise Valley', 'Arcadia', 'Ahwatukee', 'Glendale', 'Peoria']}
      />

      <InteractiveFAQ
        faqs={[
          { q: "How does cold-pack shipping work in Arizona's extreme heat?", a: "Our 503A pharmacy partners use medical-grade insulated packaging with gel ice packs designed to maintain proper temperature for up to 72 hours, even in extreme ambient heat. We also recommend selecting a delivery option that avoids extended exposure on a doorstep—such as delivery to a covered porch, a package locker, or a staffed mailroom." },
          { q: "I'm a snowbird who splits time between Phoenix and the Midwest. Can I still use Telehealth FX?", a: "Yes, but your prescribing state is determined by your physical location at the time of the consultation. If you complete your intake while physically in Arizona, you'll be evaluated by an AZ-licensed physician. If your primary residence is in another state, we can coordinate care accordingly. Medication can be shipped to your Arizona address." },
          { q: "Is this the same as the IV drip clinics and weight loss shots I see advertised on Scottsdale Road?", a: "No. Many storefront 'weight loss shot' clinics offer B12 injections, lipotropic blends, or other non-FDA-regulated concoctions marketed as weight loss aids. Telehealth FX prescribes only quality-verified compounded Semaglutide and Tirzepatide—true GLP-1 receptor agonists with extensive Phase III clinical trial data supporting their efficacy." },
          { q: "Can my medication be delivered to my office in Tempe or the Chandler Airpark?", a: "Absolutely. We deliver to all residential and commercial addresses across the entire Phoenix metropolitan area, including East Valley tech corridors, Sky Harbor-adjacent offices, and North Scottsdale." }
        ]}
      />

      <FinalCTA stateName="Arizona" />

    </div>
  );
}
