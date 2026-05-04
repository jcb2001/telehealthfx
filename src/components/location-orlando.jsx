"use client";
import React from 'react';
import { HeroVariationA, PatientArchetype, ClinicalDeepDive, InsuranceBreakdown, CostComparisonTable, LocalTransitPain, InteractiveFAQ, StateLegalFramework, DeliveryGridMap, FinalCTA } from './location-modules.jsx';

export function LocationOrlando() {
  return (
    <div style={{ background: '#FBF8F3', overflow: 'hidden' }}>
      <HeroVariationA
        stateName="Florida"
        cityName="Orlando"
        headline="Clinical GLP-1 Weight Loss in <br/><span style='color: #2ECC71'>Orlando</span>"
        subheadline="Orlando is the theme park capital of the world. Disney, Universal, and SeaWorld employ over 100,000 cast members and team members in a 24/7 service economy that runs on shift work, character costumes, and employee cafeterias. Compounded Semaglutide, delivered from Dr. Phillips to Kissimmee."
        ctaText="Check Florida Eligibility"
      />
      <PatientArchetype
        archetype="The Disney Cast Member"
        quote="I've been a cast member for seven years. I spend 8 hours on my feet in 95-degree Florida heat wearing a costume that doesn't breathe. My 'lunch' is whatever's fastest in the backstage cafeteria—usually pizza or chicken tenders. Disney's wellness program tells me to 'make healthier choices,' but they're the ones stocking the cafeteria. My Advent Health plan through Disney required a 6-month weight management program before they'd even consider GLP-1 coverage."
        details="<strong>Patient Profile:</strong> Jessica, 29, Character Performer at Walt Disney World, Orlando.<br/><br/><strong>The Challenge:</strong> Jessica's job is physically demanding but metabolically hostile. The combination of heat stress, costume-induced dehydration, irregular shift schedules, and limited backstage food options creates a metabolic environment that no wellness program brochure addresses. Her Disney-provided Advent Health plan required documented participation in a behavioral weight management program for 6 months before GLP-1 authorization would be considered. The program sessions were scheduled during hours that conflicted with her rotating park shifts.<br/><br/><strong>The Intervention:</strong> Jessica completed the Telehealth FX asynchronous intake from her apartment in Kissimmee after a 12-hour shift. A Florida-licensed physician prescribed compounded Semaglutide within 20 hours. No wellness program prerequisite. No shift conflicts."
      />
      <ClinicalDeepDive
        title="The Happiest Place on Earth Has a Metabolic Problem"
        paragraphs={[
          "Orlando's economy is built almost entirely on making other people happy—and the metabolic cost falls on its own residents. Walt Disney World, Universal Orlando, SeaWorld, and the convention/hospitality industry collectively employ over 150,000 people in roles that demand constant physical presence, irregular schedules, and emotional labor. The 'cast member' or 'team member' experience is one of chronic physical exhaustion combined with the worst possible dietary environment.",
          "Theme park backstage cafeterias are designed for speed and cost, not nutrition. The food options available to a cast member on a 30-minute break mirror the caloric density of the park's guest-facing restaurants: pizza, burgers, fried chicken, pasta, and fountain drinks. Fresh, nutrient-dense options are limited and more expensive. Over years of employment, this dietary environment drives progressive insulin resistance in a workforce that is already physiologically stressed by Florida's heat and humidity.",
          "The broader Orlando food landscape reinforces the metabolic challenge. International Drive, the tourist corridor, is a miles-long strip of chain restaurants, buffets, and fast-food outlets. The residential areas surrounding the parks—Kissimmee, Celebration, Dr. Phillips—reflect the same chain-restaurant density. Authentic, affordable, nutrient-dense dining options require deliberate effort to find.",
          "GLP-1 medications intervene at the hormonal level that Orlando's service economy has disrupted. They restore the appetite regulation and insulin signaling that years of backstage cafeteria food, heat stress, shift work, and the emotional exhaustion of performing happiness for 8 hours a day have systematically broken."
        ]}
        citations={[
          "Orange County Health Department. (2025). <em>Community Health Needs Assessment: Obesity and Chronic Disease in the Orlando Metropolitan Area</em>.",
          "University of Central Florida College of Medicine. (2024). <em>Occupational Health, Shift Work, and Metabolic Outcomes in the Central Florida Hospitality Industry</em>."
        ]}
      />
      <InsuranceBreakdown
        title="The Theme Park Insurance Trap"
        text="Orlando's dominant employers—the theme parks—offer health benefits that are structured around massive, cost-conscious workforces."
        employers={[
          { name: "Walt Disney World (Cast Member Plans)", detail: "Disney provides health benefits through Advent Health and Florida Blue plans that require extensive behavioral documentation before GLP-1 authorization. The company's internal wellness programs are positioned as the required first step—programs whose session times often conflict with the very shift schedules Disney assigns." },
          { name: "Universal / Comcast NBCUniversal", detail: "Universal team members are covered through Comcast's corporate health plan infrastructure, which applies standard PBM formulary restrictions including Step Therapy and prior authorization for GLP-1 weight management." },
          { name: "AdventHealth / Orlando Health", detail: "The region's two dominant health systems employ thousands of clinical and administrative staff whose own plans impose the same restrictions they encounter when prescribing." }
        ]}
      />
      <CostComparisonTable
        title="What Weight Loss Actually Costs in Orlando"
        localCompetitors={[
          { name: "Dr. Phillips / Winter Park Concierge", cost: "$700 - $1,100 / mo", consult: "Mandatory In-Person", access: "Branded Only" },
          { name: "International Drive MedSpas", cost: "$400 - $750 / mo", consult: "Aesthetician Administered", access: "Variable Compounding" },
          { name: "AdventHealth Endocrinology", cost: "$125 Copay + Rx", consult: "10-14 Week Wait", access: "Prior Auth Required" }
        ]}
        telehealthPrice="From $146 / mo"
      />
      <LocalTransitPain
        title="Bypass I-4 and AdventHealth Waitlists"
        transitText="I-4 through Orlando is consistently ranked among the most dangerous and congested highways in America. Whether you're commuting from Kissimmee, navigating the tourist traffic near International Drive, or heading to a specialist in the Health Village area, adding a medical appointment to an Orlando commute is a serious time investment."
        hospitalText="<strong>AdventHealth Orlando</strong> and <strong>Orlando Health</strong> anchor the region's medical infrastructure. Specialist waits average 10-14 weeks."
      />
      <InteractiveFAQ
        faqs={[
          { q: "I work rotating shifts at the parks. When do I do the intake?", a: "Anytime. The intake is asynchronous—no appointment, no phone call. Complete it before a shift, after a shift, or on a day off. Your physician reviews your profile independently." },
          { q: "Do you deliver to Kissimmee and Celebration?", a: "Yes. We deliver to all addresses in Orange, Osceola, Seminole, and Lake counties." }
        ]}
      />
      <StateLegalFramework
        stateName="Florida"
        boardName="Florida Board of Medicine"
        text="Telehealth FX operates in strict compliance with the <strong>Florida Board of Medicine</strong> and Florida Statute § 456.47. All prescribers treating Florida patients hold active, unrestricted Florida medical licenses."
      />
      <DeliveryGridMap
        cityName="Orlando"
        mapQuery="Orlando, FL"
        coordinates="28.5383° N, 81.3792° W"
        counties="Orange County, Osceola County, Seminole County, Lake County"
        neighborhoods={['Dr. Phillips', 'Winter Park', 'Kissimmee', 'Celebration', 'Lake Nona', 'Altamonte Springs', 'Sanford', 'Clermont']}
      />
      <FinalCTA stateName="Florida" />
    </div>
  );
}
