"use client";
import React from 'react';
import { HeroVariationB, PatientArchetype, ClinicalDeepDive, InsuranceBreakdown, CostComparisonTable, LocalTransitPain, InteractiveFAQ, StateLegalFramework, DeliveryGridMap, FinalCTA } from './location-modules.jsx';
export function LocationLincoln() {
  return (
    <div style={{ background: '#FBF8F3', overflow: 'hidden' }}>
      <HeroVariationB stateName="Nebraska" cityName="Lincoln" headline="Clinical GLP-1 Weight Loss in <span style='color: #2ECC71'>Lincoln</span>" subheadline="Lincoln is Nebraska's capital and home to the University of Nebraska—a Big Ten powerhouse whose football Saturdays are the state's largest social eating event. Runza, Valentino's, and the tailgate tradition create a caloric environment that the state government workforce and university community navigate year-round." dataPoint1="Lancaster County's adult obesity rate exceeds 33%. The university and state government dominate employment, creating a workforce that is predominantly sedentary with limited specialist access compared to Omaha." dataPoint2="Telehealth FX provides clinical metabolic care without the 60-mile drive to UNMC in Omaha for specialist appointments." />
      <PatientArchetype archetype="The Nebraska State Capitol Policy Analyst" quote="I write health policy for the state legislature. I've drafted bills on telehealth expansion, Medicaid coverage, and chronic disease prevention. I understand the healthcare system at a policy level. And I still can't get my own state employee plan to authorize a GLP-1 without 6 months of Step Therapy. I write the rules. I just can't benefit from them fast enough." details="<strong>Patient Profile:</strong> Rachel, 40, Legislative Policy Analyst, Nebraska State Capitol.<br/><br/><strong>The Challenge:</strong> Rachel writes healthcare legislation for the Nebraska Unicameral. Her expertise in health policy is professional-grade. Her state employee plan requires the same Step Therapy and prior authorization that her own policy work seeks to reform. The irony is temporal: the reforms she drafts may take years to implement, while her metabolic health deteriorates now.<br/><br/><strong>The Intervention:</strong> Rachel completed the Telehealth FX intake from her home near Holmes Lake. A Nebraska-licensed physician prescribed compounded Semaglutide within 24 hours." />
      <ClinicalDeepDive title="Husker Saturdays and the Capitol Corridor" paragraphs={[
        "Lincoln's metabolic environment is shaped by two dominant institutions: the University of Nebraska and the State Capitol. The university creates a culture where Husker football Saturdays are the social calendar's anchor event—and the tailgate food tradition (Runza sandwiches, Valentino's pizza, grilled brats, and beer) adds thousands of calories to fall weekends. This is not occasional indulgence; it is a 6-weekend ritual that defines community identity.",
        "The state government workforce—concentrated in the Capitol corridor—is predominantly sedentary. Analysts, administrators, and legislators spend their days in meetings and at desks, eating from the Capitol cafeteria or the fast food options along Centennial Mall. The combination of desk work and Midwest comfort food creates a metabolic profile similar to Sacramento's state worker population.",
        "Lincoln's healthcare infrastructure is solid but limited compared to Omaha. Bryan Health and CHI St. Elizabeth provide strong community care, but for specialist metabolic medicine, many Lincoln residents are referred to UNMC in Omaha—a 60-mile drive on I-80. This creates a meaningful access barrier for a population that shouldn't need to leave their state capital for specialist care.",
        "GLP-1 medications bring specialist-grade metabolic intervention to Lincoln without the I-80 drive to Omaha, working within the reality of Capitol desk jobs and Husker Saturday food traditions."
      ]} citations={[
        "Lincoln-Lancaster County Health Department. (2025). <em>Community Health Assessment: Chronic Disease and Obesity</em>.",
        "University of Nebraska College of Public Health. (2024). <em>Healthcare Access and Specialist Referral Patterns in Lancaster County</em>."
      ]} />
      <InsuranceBreakdown title="State Employees and Husker Nation" text="Lincoln's employer landscape is dominated by state government and the University of Nebraska." employers={[
        { name: "State of Nebraska (Capitol Workforce)", detail: "State employee plans require standard Step Therapy and prior authorization for GLP-1s. The workforce that writes Nebraska's health policies is subject to the same restrictions those policies have yet to reform." },
        { name: "University of Nebraska-Lincoln", detail: "UNL employees have university-administered plans with standard PBM formulary restrictions for specialty medications." },
        { name: "Bryan Health / CHI St. Elizabeth", detail: "Lincoln's health systems employ thousands whose own plans restrict the medications they prescribe." }
      ]} />
      <CostComparisonTable title="What Weight Loss Actually Costs in Lincoln" localCompetitors={[
        { name: "Near South / Wilderness Hills Concierge", cost: "$600 - $900 / mo", consult: "Mandatory In-Person", access: "Branded Only" },
        { name: "O Street MedSpas", cost: "$300 - $550 / mo", consult: "Monthly Membership", access: "Variable Compounding" },
        { name: "Bryan Health Endocrinology", cost: "$100 Copay + Rx", consult: "10-14 Week Wait", access: "Prior Auth Required" }
      ]} telehealthPrice="From $146 / mo" />
      <LocalTransitPain title="Bypass the I-80 Drive to Omaha" transitText="Lincoln is connected to Omaha by I-80, a 60-mile drive that takes 50-70 minutes depending on traffic. Specialist referrals to UNMC require a half-day commitment." hospitalText="<strong>Bryan Health</strong> and <strong>CHI St. Elizabeth</strong> serve Lincoln. For specialist metabolic care, patients are often referred to <strong>UNMC in Omaha</strong>." />
      <InteractiveFAQ faqs={[
        { q: "I'm a state employee. Can I use this alongside my state plan?", a: "Yes. Telehealth FX is a private, self-pay service independent of the State of Nebraska employee health plan." },
        { q: "Do you deliver to Waverly and Seward?", a: "Yes. All Lancaster County and surrounding area addresses." }
      ]} />
      <StateLegalFramework stateName="Nebraska" boardName="Nebraska Board of Medicine and Surgery" text="Telehealth FX operates in strict compliance with the <strong>Nebraska Board of Medicine and Surgery</strong> and Nebraska telehealth statutes." />
      <DeliveryGridMap cityName="Lincoln" mapQuery="Lincoln, NE" coordinates="40.8136° N, 96.7026° W" counties="Lancaster County, Seward County, Saunders County" neighborhoods={['Near South', 'Havelock', 'Wilderness Hills', 'Waverly', 'Seward', 'Hickman', 'Beatrice']} />
      <FinalCTA stateName="Nebraska" />
    </div>
  );
}
