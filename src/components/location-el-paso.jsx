"use client";
import React from 'react';
import { HeroVariationA, PatientArchetype, ClinicalDeepDive, CostComparisonTable, InteractiveFAQ, InsuranceBreakdown, LocalTransitPain, DeliveryGridMap, FinalCTA } from './location-modules.jsx';

export function LocationElPaso() {
  return (
    <div style={{ background: '#FBF8F3', overflow: 'hidden' }}>

      <HeroVariationA
        stateName="Texas"
        cityName="El Paso"
        headline="Clinical GLP-1 Weight Loss in <br/><span style='color: #2ECC71'>El Paso</span>"
        subheadline="You're closer to Tucson than to Dallas. Closer to Santa Fe than to San Antonio. The nearest endocrinologist with GLP-1 experience is a six-hour drive east. El Paso is the most geographically isolated major city in Texas—and telehealth isn't a convenience here, it's the only clinical pathway that makes sense."
        ctaText="Check Texas Eligibility"
      />

      <PatientArchetype
        archetype="The CBP Field Operations Officer"
        quote="I work 12-hour shifts at the Paso del Norte port of entry. I'm on my feet the entire time, in the sun, processing vehicles and pedestrians. When my shift ends, I eat whatever's open—usually Chico's or a drive-through on Mesa. My FEHB plan requires a specialist referral for GLP-1 meds, and the only endocrinologist in my network has an 8-week wait. I don't have 8 weeks. I barely have 8 hours between shifts."
        details="<strong>Patient Profile:</strong> Alejandro, 36, CBP Officer, Paso del Norte Port of Entry.<br/><br/><strong>The Challenge:</strong> Alejandro works compressed shifts at one of the busiest land ports of entry in the Western Hemisphere. The physical demands are real—standing, walking, bending into vehicles for 12 hours in Chihuahuan Desert heat that routinely exceeds 105°F. But the schedule creates the same circadian disruption as any shift work: rotating between days and nights, eating at irregular hours, and sleeping whenever the rotation allows. His FEHB plan (Blue Cross Basic) required a PCP referral to endocrinology, but his assigned PCP at the VA clinic was itself a 6-week wait for a non-urgent appointment. The single referred endocrinologist in his FEHB network in El Paso had an additional 8-week wait. Total timeline to potentially receive a prescription: 14+ weeks.<br/><br/><strong>The Intervention:</strong> Alejandro completed the Telehealth FX intake on his phone from his Westside apartment after a day shift. A Texas-licensed physician reviewed his profile asynchronously within 18 hours. Compounded Semaglutide was cold-shipped and arrived at his door two days later. A 14-week pipeline collapsed into 48 hours."
      />

      <ClinicalDeepDive
        title="The Border City Metabolic Reality"
        paragraphs={[
          "El Paso occupies a unique position in American healthcare geography. It is simultaneously a major American city (population 680,000+) and one of the most medically underserved urban areas in Texas. The city has fewer endocrinologists per capita than any other Texas metro of comparable size. The nearest major medical center outside El Paso is in Albuquerque—264 miles north. Dallas, Houston, and San Antonio are all 500+ miles east. This geographic isolation means that specialist access—the kind required for formal GLP-1 prescribing through traditional channels—is fundamentally constrained in ways that other Texas cities simply don't experience.",
          "The border dynamic adds complexity that no other American city replicates. El Paso and Ciudad Juárez form a binational metropolitan area of 2.7 million people. Many El Pasoans have historically crossed the border for more affordable medications, dental work, and medical consultations. Some patients ask whether they can purchase GLP-1 medications in Mexico. The answer is nuanced: while some pharmacies in Juárez may stock branded or generic semaglutide products, the quality control, cold-chain integrity, and regulatory oversight differ significantly from U.S. FDA standards. Telehealth FX provides a clinical pathway that maintains U.S. pharmaceutical standards—compounded by FDA-registered 503A pharmacies—without requiring a border crossing or a six-hour drive east.",
          "El Paso's dietary landscape reflects its deeply Mexican-American culinary heritage. This is not the Tex-Mex of Dallas or San Antonio—El Paso's food is authentically Mexican, rooted in Chihuahuan and Sonoran traditions: street tacos, gorditas, green chile stew, menudo, Chico's Tacos (the iconic local chain serving rolled flautas in a tomato-chile sauce). These meals are culturally foundational—they connect families to heritage, to language, to community. Any clinical approach that begins with 'stop eating your culture's food' has already failed.",
          "The heat factor in El Paso is distinct from Houston's humidity or Phoenix's dry desert. The Chihuahuan Desert climate produces dry heat exceeding 100°F for 60+ days per year, with intense solar radiation that makes outdoor activity genuinely dangerous during summer daylight hours. But unlike Phoenix, El Paso lacks the sprawling indoor fitness infrastructure of a wealthier metro. The physical activity options for a working-class population in a desert city with limited recreation facilities are genuinely constrained.",
          "GLP-1 receptor agonists are the intervention that works within El Paso's actual reality—not the reality wellness marketers wish it had. They work without requiring you to abandon your food culture, without requiring a six-hour drive to a specialist, without requiring an indoor gym membership you can't afford, and without requiring a prescription from a cross-border pharmacy whose cold chain you can't verify."
        ]}
        citations={[
          "Texas Department of State Health Services. (2025). <em>El Paso County Health Status Report: Chronic Disease, Physician Workforce, and Access Indicators</em>.",
          "UTEP Border Biomedical Research Center. (2024). <em>Binational Health Dynamics and Pharmaceutical Access Patterns in the El Paso-Juárez Metroplex</em>.",
          "Journal of the American Board of Family Medicine. (2024). <em>GLP-1 Prescribing Barriers in Medically Underserved Urban Areas Along the U.S.-Mexico Border</em>."
        ]}
      />

      <CostComparisonTable
        title="What Weight Loss Actually Costs in El Paso"
        localCompetitors={[
          { name: "Westside / Coronado Concierge Clinics", cost: "$500 - $900 / mo", consult: "Mandatory In-Person + Labs", access: "Branded Only / Limited Supply" },
          { name: "Mesa Street Aesthetic MedSpas", cost: "$350 - $700 / mo", consult: "Monthly Membership + Consult", access: "Unverified Compounding Sources" },
          { name: "UMC / Texas Tech Physicians Endo", cost: "$100 Copay + Rx", consult: "8-12 Week New Patient Wait", access: "Formulary Restrictions / Prior Auth" },
          { name: "The Hospitals of Providence PCP", cost: "$40 Copay", consult: "4-6 Week Wait", access: "Step Therapy / Pharmacy Backorder" }
        ]}
        telehealthPrice="From $146 / mo"
      />

      <InteractiveFAQ
        faqs={[
          { q: "Can't I just buy semaglutide in Juárez for cheaper?", a: "Some Juárez pharmacies may sell products labeled as semaglutide or tirzepatide. However, the regulatory oversight, quality assurance, cold-chain storage, and pharmaceutical sourcing standards differ significantly from U.S. FDA requirements. Telehealth FX's compounding partners are FDA-registered 503A pharmacies operating under U.S. regulatory standards, with verified cold-chain shipping directly to your El Paso address." },
          { q: "I'm stationed at Fort Bliss. Can I use this with TRICARE?", a: "Telehealth FX is a self-pay service independent of TRICARE, the DoD, and William Beaumont Army Medical Center. Active Duty service members should consult their PCM regarding TRICARE regulations before using external medical services. Dependents and retirees can use Telehealth FX as a private self-pay option without affecting their TRICARE benefits." },
          { q: "Is the intake available in Spanish?", a: "Our clinical intake is currently in English. However, we are committed to serving El Paso's bilingual community. If you need assistance understanding any part of the intake, our support team can provide guidance. All clinical decisions are made by licensed physicians, and your health profile data is what drives the evaluation—not language." },
          { q: "I work at a maquiladora supply chain company. Do you deliver to industrial areas?", a: "Yes. We deliver to all residential and commercial addresses in El Paso County, including the Westside, Northeast, Eastside, Lower Valley, Horizon City, Socorro, Fabens, Anthony, and Canutillo." },
          { q: "The nearest endocrinologist is an 8-week wait. Is telehealth really equivalent?", a: "For GLP-1 prescribing specifically, yes. Telehealth FX's evaluation is conducted by licensed physicians who specialize in metabolic health and GLP-1 therapy. The clinical assessment covers the same markers an endocrinologist would evaluate for this specific indication. If your physician identifies a need for in-person specialist care beyond GLP-1 prescribing, they will recommend appropriate follow-up." }
        ]}
      />

      <InsuranceBreakdown
        title="Federal, Military, and Maquiladora: Three Barrier Systems"
        text="El Paso's economy is anchored by three sectors that each create distinct insurance challenges: the federal government (CBP, ICE, DEA), the military (Fort Bliss), and the maquiladora/manufacturing supply chain."
        employers={[
          { name: "CBP / ICE / Federal Law Enforcement (FEHB)", detail: "El Paso has one of the highest concentrations of federal law enforcement officers in the country. CBP alone employs thousands of officers and agents across multiple ports of entry and Border Patrol stations. Their FEHB plans require specialist referrals and prior authorization for GLP-1 medications—a process that is nearly impossible to navigate when your assigned PCP has a 6-week wait and the referred specialist has an additional 8-week backlog." },
          { name: "Fort Bliss / William Beaumont Army Medical Center", detail: "Fort Bliss is one of the largest Army installations in the country. Active Duty, dependents, and retirees rely on TRICARE and the William Beaumont AMC system. TRICARE's GLP-1 formulary restrictions (BMI 32+ threshold, mandatory MTF referral) are compounded by Beaumont's capacity constraints serving one of the Army's largest populations." },
          { name: "Manufacturing / Maquiladora Supply Chain", detail: "El Paso's proximity to Juárez makes it a logistics and supply chain hub for cross-border manufacturing. These employers—many of them small to mid-size—typically offer limited health plans with high deductibles and no specialty drug coverage. For this workforce, Telehealth FX's self-pay model is often the most viable clinical pathway." }
        ]}
      />

      <LocalTransitPain
        title="Bypass the I-10 Bottleneck & UMC Waitlists"
        transitText="El Paso's geography—a narrow corridor squeezed between the Franklin Mountains and the Rio Grande—funnels virtually all east-west traffic onto a single highway: I-10. When there's a crash, an inspection checkpoint backup, or construction (which is perpetual), the entire city's transportation system seizes. Getting from the Eastside or Horizon City to a specialist on the Westside can take over an hour during peak periods."
        hospitalText="El Paso's medical infrastructure is anchored by <strong>University Medical Center (UMC)</strong>, <strong>Texas Tech Physicians of El Paso</strong>, and <strong>The Hospitals of Providence</strong>. <strong>William Beaumont AMC</strong> serves the Fort Bliss military community. While these institutions provide essential care, the specialist workforce is thin: El Paso has significantly fewer endocrinologists per capita than any comparably sized Texas metro. Wait times for metabolic specialist appointments average 8-12 weeks. And your local <strong>Walmart</strong>, <strong>CVS</strong>, or <strong>Albertsons</strong> pharmacy? Branded Wegovy: indefinite backorder."
      />

      <DeliveryGridMap
        cityName="El Paso"
        mapQuery="El Paso, TX"
        coordinates="31.7619° N, 106.4850° W"
        counties="El Paso County, Hudspeth County"
        neighborhoods={['Westside', 'Northeast', 'Eastside', 'Mission Hills', 'Lower Valley', 'Horizon City', 'Socorro', 'Fabens', 'Canutillo', 'Anthony']}
      />

      <FinalCTA stateName="Texas" />

    </div>
  );
}
