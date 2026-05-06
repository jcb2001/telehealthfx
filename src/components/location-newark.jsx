"use client";
import React from 'react';
import { HeroVariationB, PatientArchetype, ClinicalDeepDive, InsuranceBreakdown, CostComparisonTable, LocalTransitPain, InteractiveFAQ, StateLegalFramework, DeliveryGridMap, FinalCTA } from './location-modules.jsx';

export function LocationNewark() {
  return (
    <div style={{ background: '#FBF8F3', overflow: 'hidden' }}>
      <HeroVariationB stateName="New Jersey" cityName="Newark" headline="Clinical GLP-1 Weight Loss in <span style='color: #2ECC71'>Newark</span>" subheadline="Newark is the largest city in New Jersey and the insurance capital of the Garden State—Prudential Financial was founded here. Yet the city's residents face some of the worst healthcare access in the Northeast, with specialist waitlists that rival cities half its size." dataPoint1="Newark's poverty rate exceeds 28%, and Essex County's adult obesity rate is above 30%. The city has fewer primary care physicians and specialists per capita than the New Jersey state average despite being the state's largest city." dataPoint2="Telehealth FX provides immediate clinical access without navigating Newark's fragmented healthcare system or driving to Manhattan." />
      <PatientArchetype archetype="The Prudential Financial Claims Analyst" quote="I work at Prudential—the company that invented American life insurance. I analyze health risk data professionally. I know my metabolic numbers are headed in the wrong direction. My Horizon BCBS plan requires a PCP referral, then a specialist wait, then prior authorization. The whole process takes 5 months in Essex County. I process insurance claims faster than I can access my own care." details="<strong>Patient Profile:</strong> Andre, 34, Claims Analyst at Prudential Financial, Newark.<br/><br/><strong>The Challenge:</strong> Andre works in the insurance industry, understanding health risk at a professional level. His Horizon BCBS plan requires multi-step specialist access in a county where endocrinology capacity is critically limited. The PCP-to-specialist-to-prior-auth chain takes 4-5 months in Essex County.<br/><br/><strong>The Intervention:</strong> Andre completed the Telehealth FX intake from his apartment in the Ironbound district. A New Jersey-licensed physician prescribed compounded Semaglutide within 20 hours." />
      <ClinicalDeepDive title="The Insurance Capital's Access Crisis" paragraphs={[
        "Newark occupies a paradoxical position in American healthcare. It is home to Prudential Financial—one of the most consequential insurance companies in history—and sits 15 minutes from Manhattan's world-class medical infrastructure. Yet Newark's own residents face healthcare access barriers that resemble a rural community, not a major Northeastern city.",
        "The specialist shortage in Newark is driven by economic factors: lower reimbursement rates, higher overhead costs, and the proximity to Manhattan and the affluent New Jersey suburbs that attract physicians to more profitable practice locations. The result is that Newark has fewer specialists per capita than surrounding communities in Bergen, Morris, and Somerset counties.",
        "The Ironbound district—Newark's most vibrant neighborhood—offers extraordinary Portuguese, Brazilian, and Spanish cuisine. But the broader food environment across the city's wards reflects urban food desert dynamics: corner stores, fast food, and limited fresh grocery access in the South and West Wards.",
        "GLP-1 medications bypass the specialist access crisis that Newark's healthcare system cannot resolve, delivering clinical metabolic care to a population that the insurance industry—headquartered in their own city—has left underserved."
      ]} citations={[
        "Newark Department of Health and Community Wellness. (2025). <em>Community Health Improvement Plan</em>.",
        "Rutgers New Jersey Medical School. (2024). <em>Specialist Physician Distribution and Access in Essex County</em>."
      ]} />
      <InsuranceBreakdown title="Insurance HQ, Insurance Barriers" text="Newark's insurance industry presence doesn't translate to better access for its residents." employers={[
        { name: "Prudential Financial (HQ)", detail: "Prudential employees have Horizon BCBS plans that require the same multi-step referral and prior authorization process as any other NJ employer." },
        { name: "Panasonic / Audible / Port Authority", detail: "Newark's growing corporate and logistics employers offer standard PBM-managed formularies with GLP-1 restrictions." },
        { name: "University Hospital / RWJBarnabas (Beth Israel)", detail: "Newark's safety-net and community hospitals face overwhelming demand with limited specialist capacity." }
      ]} />
      <CostComparisonTable title="What Weight Loss Actually Costs in Newark" localCompetitors={[
        { name: "Montclair / Short Hills Concierge", cost: "$800 - $1,300 / mo", consult: "Mandatory In-Person", access: "Branded Only" },
        { name: "Ironbound / Downtown MedSpas", cost: "$400 - $700 / mo", consult: "Monthly Membership", access: "Variable Compounding" },
        { name: "University Hospital Endocrinology", cost: "$100 Copay + Rx", consult: "14-20 Week Wait", access: "Prior Auth Required" }
      ]} telehealthPrice="From $146 / mo" />
      <LocalTransitPain title="Bypass the Turnpike & University Hospital Waitlists" transitText="Newark's traffic is defined by the NJ Turnpike, the Garden State Parkway, I-280, and I-78 converging in a metro that also serves as the gateway to Newark Liberty Airport. Adding a medical appointment to this commute landscape is a significant time investment." hospitalText="<strong>University Hospital</strong> and <strong>RWJBarnabas (Beth Israel)</strong> serve Newark. Specialist waits average 14-20 weeks in Essex County." />
      <InteractiveFAQ faqs={[
        { q: "Should I just go to a doctor in Manhattan instead?", a: "You could, but Manhattan specialists have their own 10-16 week waitlists and significantly higher costs. Telehealth FX provides the same clinical evaluation from your home in Newark, prescribed by a NJ-licensed physician." },
        { q: "Do you deliver to the Ironbound, East Orange, and Irvington?", a: "Yes. We deliver to all addresses in Essex County and surrounding areas." }
      ]} />
      <StateLegalFramework stateName="New Jersey" boardName="New Jersey State Board of Medical Examiners" text="Telehealth FX operates in strict compliance with the <strong>NJ State Board of Medical Examiners</strong> and NJ telehealth statutes (P.L. 2020, c.3). All prescribers hold active, unrestricted NJ medical licenses." />
      <DeliveryGridMap cityName="Newark" mapQuery="Newark, NJ" coordinates="40.7357° N, 74.1724° W" counties="Essex County, Hudson County, Union County, Passaic County" neighborhoods={['Ironbound', 'Downtown', 'East Orange', 'Irvington', 'Bloomfield', 'Montclair', 'Elizabeth', 'Jersey City']} />
      <FinalCTA stateName="New Jersey" />
    </div>
  );
}
