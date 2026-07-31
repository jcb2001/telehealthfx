"use client";
import React from 'react';
import { HeroVariationA, LocalTransitPain, CostComparisonTable, PatientArchetype, ClinicalDeepDive, InsuranceBreakdown, InteractiveFAQ, DeliveryGridMap, FinalCTA } from './location-modules.jsx';

export function LocationFortWorth() {
  return (
    <div style={{ background: '#FBF8F3', overflow: 'hidden' }}>

      <HeroVariationA
        stateName="Texas"
        cityName="Fort Worth"
        headline="Clinical GLP-1 Weight Loss in <br/><span style='color: #2ECC71'>Fort Worth</span>"
        subheadline="Cowtown doesn't do waiting rooms. You build F-35s, move freight across a continent, and keep the Western heritage alive—you don't have time to sit in a doctor's office on Camp Bowie for three hours. Compounded Semaglutide, delivered from Sundance Square to Weatherford."
        ctaText="Check Texas Eligibility"
      />

      <LocalTransitPain
        title="Bypass the I-30 Crawl & Harris Methodist Waitlists"
        transitText="Fort Worth has its own sprawl problem, distinct from Dallas's. Whether you're grinding on I-30 toward Arlington, stuck on I-35W coming south from Keller and Alliance, navigating the Loop 820/I-20 interchange on the south side, or commuting from Weatherford on I-20 West—Fort Worth's car-dependent geography makes a medical appointment a half-day logistical project. And unlike Dallas, Fort Worth's public transit options are essentially nonexistent outside of the Trinity Railway Express commuter line."
        hospitalText="Fort Worth's healthcare infrastructure is anchored by <strong>JPS Health Network</strong> (the county's public safety-net system), <strong>Baylor Scott & White All Saints</strong>, and <strong>Texas Health Harris Methodist</strong>. These are solid institutions—but they serve a metro that has grown faster than their specialty capacity. New-patient endocrinology appointments at Harris Methodist average 8 to 12 weeks. JPS metabolic clinics, serving a larger and more underserved population, can exceed 14 weeks. Your local <strong>Walmart</strong>, <strong>Kroger</strong>, or <strong>CVS</strong> pharmacy in Tarrant County has the same answer as every other Texas city: branded Wegovy on indefinite backorder."
      />

      <CostComparisonTable
        title="What Weight Loss Actually Costs in Fort Worth"
        localCompetitors={[
          { name: "Westover Hills / Camp Bowie Concierge", cost: "$650 - $1,000 / mo", consult: "Mandatory In-Person + Labs", access: "Branded Only / Waitlisted" },
          { name: "Southlake Aesthetic MedSpas", cost: "$500 - $850 / mo", consult: "Monthly Membership + Consult", access: "Variable Compounding Sources" },
          { name: "Texas Health Harris Methodist Endo", cost: "$125 Copay + Rx", consult: "8-12 Week New Patient Wait", access: "Formulary Restrictions / Prior Auth" },
          { name: "JPS Health Network PCP", cost: "$25 Sliding Scale", consult: "10-14 Week Wait", access: "Step Therapy / Pharmacy Backorder" }
        ]}
        telehealthPrice="From $146 / mo"
      />

      <PatientArchetype
        archetype="The Lockheed F-35 Assembly Technician"
        quote="I spend ten hours a day on the F-35 line at Air Force Plant 4. I'm on my feet, I'm moving, but the shift schedule destroys any routine. And there's a culture in this industry—and in this city—where you don't complain about your health. You just deal with it. But 'dealing with it' wasn't working anymore."
        details="<strong>Patient Profile:</strong> Tony, 44, Avionics Assembly Technician at Lockheed Martin Aeronautics, Air Force Plant 4, Fort Worth.<br/><br/><strong>The Challenge:</strong> Tony works compressed 4/10 shifts (four 10-hour days) with periodic mandatory overtime during production ramp-ups. While the work is physically active, the schedule creates chaotic meal timing—breakfast at 4:30 AM, lunch whenever the line allows, dinner at 7 PM. His body never establishes a consistent metabolic rhythm. Compounding this is Fort Worth's deeply embedded 'Cowtown' self-reliance culture: among his coworkers, seeking medical help for weight management carries an unspoken stigma. His Lockheed Martin UnitedHealthcare plan denied Wegovy, requiring prior authorization with documented comorbidities beyond his BMI of 33.<br/><br/><strong>The Intervention:</strong> The asynchronous model was critical for Tony—not just logistically but psychologically. Completing a private online intake from his phone at home, without sitting in a waiting room or explaining his situation to a receptionist, removed the cultural barrier. A Texas-licensed physician reviewed his profile and prescribed compounded Semaglutide within 18 hours. Cold-packed medication arrived at his Benbrook home before his next shift cycle. No waiting room. No coworker conversations. No stigma."
      />

      <ClinicalDeepDive
        title="The Cowtown Metabolic Profile"
        paragraphs={[
          "Fort Worth occupies a unique cultural space in the American metabolic health conversation. Unlike Dallas—its glossier, corporate neighbor 30 miles east—Fort Worth has built its modern identity around Western heritage, blue-collar pride, and a self-reliant ethos rooted in its history as a cattle-driving frontier town. The Stockyards are not a tourist attraction to Fort Worth residents; they are a cultural anchor. And that self-reliant culture, while admirable in many contexts, creates a specific barrier to metabolic healthcare: the unspoken belief that seeking medical help for weight management is a sign of weakness.",
          "This cultural barrier is compounded by Fort Worth's dominant industries. The defense and aerospace sector—anchored by Lockheed Martin's massive F-35 assembly operation at Air Force Plant 4 and Bell's helicopter/tiltrotor facility—employs tens of thousands of workers in physically demanding, shift-based roles. BNSF Railway, headquartered downtown, employs thousands more in logistics and operations. These are not desk jobs in the traditional sense, and the workers who fill them often dismiss their metabolic challenges precisely because they're 'active' at work.",
          "But physical activity at work and metabolic health are not the same thing. Shift work—whether it's the 4/10 schedule at Lockheed or the 24-hour rotations at BNSF—creates severe circadian disruption. The body's insulin response, cortisol rhythm, and appetite regulation hormones (ghrelin and leptin) are all synchronized to a circadian clock. When that clock is repeatedly disrupted by rotating shifts, the hormonal signals that regulate weight become chronically impaired regardless of how many steps you take during a shift.",
          "The food culture reinforces the metabolic challenge. Fort Worth's culinary identity—chicken fried steak at Paris Coffee Shop, BBQ from Heim or Goldee's, Tex-Mex at Joe T. Garcia's, kolaches from the Czech Stop on the way to the plant—is deeply calorie-dense and deeply loved. These meals are not perceived as unhealthy choices; they are Fort Worth. Asking someone to give up Joe T.'s enchiladas is asking them to give up a piece of their cultural identity.",
          "GLP-1 receptor agonists solve this problem without requiring cultural sacrifice. They don't change what you eat—they change how your body processes it. By restoring proper incretin signaling, slowing gastric emptying, and recalibrating the brain's satiety set point, these medications allow Fort Worth residents to maintain their relationship with their city's food culture while addressing the hormonal dysfunction that their work schedules and environment have created."
        ]}
        citations={[
          "Tarrant County Public Health. (2025). <em>Community Health Assessment: Obesity and Metabolic Disease in Tarrant County</em>.",
          "UT Southwestern / JPS Health Research Collaborative. (2024). <em>Shift Work, Circadian Disruption, and Metabolic Outcomes in Defense Manufacturing Populations</em>.",
          "Journal of Occupational and Environmental Medicine. (2024). <em>Cultural Barriers to Weight Management Healthcare Utilization in Blue-Collar Populations</em>."
        ]}
      />

      <InsuranceBreakdown
        title="Why Defense Contractor Plans Block Your Access"
        text="Fort Worth's economy is dominated by defense, aerospace, and logistics—industries that employ large, physically active workforces with employer-sponsored health plans that nonetheless create significant barriers to GLP-1 access."
        employers={[
          { name: "Lockheed Martin Aeronautics", detail: "Lockheed's self-funded UnitedHealthcare plans require prior authorization with documented comorbidities for GLP-1 weight management. Employees on the assembly line—who often have BMIs in the 30-34 range but lack 'qualifying' conditions like diagnosed Type 2 diabetes—frequently fall into a coverage gap where they're too heavy for optimal health but not heavy enough for insurance authorization." },
          { name: "Bell / Textron", detail: "Bell's employee plans, administered under the Textron corporate umbrella, apply Step Therapy protocols that require documented failure of behavioral interventions and lower-cost pharmaceuticals before GLP-1 authorization. For shift workers who can barely schedule a doctor's appointment, documenting six months of 'failed' therapy is a logistical impossibility." },
          { name: "BNSF Railway", detail: "BNSF's employee health plans, while comprehensive in many areas, place weight management pharmaceuticals on restricted specialty tiers. The railroad workforce—operating on 24-hour call schedules—faces the additional barrier of unpredictable availability for the in-person appointments that prior authorization documentation often requires." }
        ]}
      />

      <InteractiveFAQ
        faqs={[
          { q: "I work at the Lockheed plant. Will this show up anywhere my employer can see?", a: "No. Telehealth FX is a private, self-pay medical service completely separate from your employer, your employer's health plan, and UnitedHealthcare. Your intake, evaluation, and prescription exist within our HIPAA-compliant system. Nothing is reported to Lockheed Martin or any employer." },
          { q: "I'm a BNSF engineer on a 24-hour call schedule. How does this work?", a: "Asynchronous telemedicine has no scheduled appointment. You complete your clinical intake whenever you have downtime—between calls, on a rest day, at 3 AM if that's when you're free. Your physician reviews your profile independently and responds within 24 hours. No phone call, no video, no clinic hours." },
          { q: "Is Fort Worth covered separately from Dallas?", a: "Both cities are in Texas, and all Telehealth FX prescribers treating either city hold active Texas Medical Board licenses. However, the clinical content on this page is specific to Fort Worth's demographics, healthcare systems, and employer landscape. Your intake and prescription process is identical regardless of which DFW city you live in." },
          { q: "Do you deliver to Weatherford, Granbury, or Mineral Wells?", a: "Yes. We deliver to all residential addresses in Tarrant County and the surrounding area, including Parker County (Weatherford), Hood County (Granbury), and Palo Pinto County (Mineral Wells). Overnight cold-pack shipping reaches all of these locations." },
          { q: "I'm hesitant about taking medication for weight loss. Isn't this just a shortcut?", a: "GLP-1 receptor agonists are not a shortcut—they are a clinical intervention for a hormonal dysfunction. When shift work has disrupted your circadian rhythm and impaired your insulin signaling, your body physically cannot regulate appetite and fat storage normally. These medications restore that regulation. Think of it this way: you wouldn't refuse blood pressure medication because it felt like a 'shortcut' for hypertension. Metabolic dysfunction deserves the same clinical respect." }
        ]}
      />

      <DeliveryGridMap
        cityName="Fort Worth"
        mapQuery="Fort Worth, TX"
        coordinates="32.7555° N, 97.3308° W"
        counties="Tarrant County, Parker County, Johnson County, Hood County"
        neighborhoods={['Sundance Square', 'Southside', 'Camp Bowie', 'Westover Hills', 'Keller', 'Benbrook', 'Weatherford', 'Arlington', 'Mansfield', 'Burleson']}
      />

      <FinalCTA stateName="Texas" />

    
{/* Disclaimer: Mounjaro®, Zepbound®, Ozempic®, and Wegovy® are registered trademarks of their respective owners (Eli Lilly and Company and Novo Nordisk A/S). Telehealth FX is not affiliated with, endorsed by, or connected to any of these companies. Compounded medications are not FDA-approved and are not therapeutically equivalent to any branded product. */}
</div>
  );
}
