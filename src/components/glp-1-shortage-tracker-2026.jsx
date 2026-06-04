"use client";
import React from 'react';
import Image from 'next/image';
import { Icon } from './common.jsx';

const S = "https://go.telehealthfx.com/weight-loss";

function Glp1ShortageTracker2026() {
  return (
    <>
      <section className="section" style={{ minHeight: '60vh', paddingTop: 120 }}>
        <div className="container" style={{ maxWidth: 800 }}>
          <div className="eyebrow" style={{ marginBottom: 20 }}>Live Supply Chain Data</div>
          <h1 className="serif" style={{ fontSize: 52, marginBottom: 24, lineHeight: 1.08 }}>
            The 2026 GLP-1 Shortage Tracker: <span style={{ fontStyle: 'italic', color: 'var(--brand)' }}>The "Ghost Shortage" Explained</span>
          </h1>
          
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 48, paddingBottom: 24, borderBottom: '1px solid var(--line-soft)' }}>
            <div style={{ width: 40, height: 40, borderRadius: '50%', background: 'var(--brand)' }}>
              <Image 
                src="/assets/jm-profile.jpg" 
                alt="Julian Mercer" 
                width={1024} 
                height={1024} 
                style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%' }} 
                priority={true} 
              />
            </div>
            <div>
              <div style={{ fontWeight: 500, fontSize: 14 }}>
                <a href="/about" style={{ color: "var(--ink)", textDecoration: "none" }}>Julian Mercer, M.S.</a>
              </div>
              <div style={{ fontSize: 13, color: 'var(--ink-3)' }}>Lead Bio-Systems Analyst · Updated June 2026 · 22 min read</div>
            </div>
          </div>

          <div className="blog-content" style={{ fontSize: 18, lineHeight: 1.7, color: 'var(--ink-2)' }}>
            <Image 
              src="/assets/glp1_shortage_tracker_v2.png" 
              alt="Single pristine glass pharmaceutical vial of GLP-1 medication on a brushed steel surface" 
              width={1200} 
              height={1200} 
              style={{ width: '100%', borderRadius: 16, marginBottom: 40, border: '1px solid var(--line-soft)', background: '#111', height: "auto" }} 
              priority={true} 
            />

            <p className="lead" style={{ fontSize: 24, lineHeight: 1.5, color: 'var(--ink)', marginBottom: 32 }}>
              If you're trying to fill a prescription for Wegovy, Ozempic, or Zepbound in 2026, you're likely facing a deeply frustrating paradox: The FDA says the shortage is over, but your local pharmacy says they have zero boxes in stock. Welcome to the "Ghost Shortage."
            </p>

            <p>According to the FDA's official Drug Shortages database, the monumental, multi-year supply crises for Semaglutide and Tirzepatide have been officially declared "Resolved." Yet, millions of patients are discovering that "resolved on paper" does not equate to medication in hand. Call any ten local pharmacies today, and eight of them will likely tell you they are entirely out of stock, particularly for starter doses.</p>
            
            <p>This comprehensive 2026 tracker breaks down the exact regulatory and supply chain mechanics driving this paradox. We will analyze the critical difference between API production and fill-finish bottlenecks, the impact of the new Oral GLP-1 launches (Wegovy Pill & Foundayo), the massive looming disruption of the July 2026 Medicare expansion, and the crucial legal distinction between the FDA's 503B crackdown and the 503A compounding pathways that elite telehealth clinics are utilizing to guarantee patient supply.</p>

            {/* --- LIVE STATUS TABLE --- */}
            <div style={{ background: '#F8FAFC', border: '1px solid var(--line-soft)', borderRadius: 16, padding: 32, margin: '48px 0' }}>
              <h3 className="serif" style={{ fontSize: 24, marginBottom: 20, color: 'var(--ink)' }}>
                <span style={{ display: 'inline-flex', alignItems: 'center', marginRight: 12, color: 'var(--brand)' }}>
                  <Icon.Syringe size={24} />
                </span>
                Live FDA Status (As of Q2 2026)
              </h3>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingBottom: 16, borderBottom: '1px solid var(--line-soft)' }}>
                  <div style={{ fontWeight: 500, color: 'var(--ink)' }}>Semaglutide Injectable (Ozempic/Wegovy)</div>
                  <div style={{ padding: '6px 12px', background: '#DCFCE7', color: '#166534', borderRadius: 20, fontSize: 14, fontWeight: 600 }}>FDA: RESOLVED</div>
                </div>
                
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingBottom: 16, borderBottom: '1px solid var(--line-soft)' }}>
                  <div style={{ fontWeight: 500, color: 'var(--ink)' }}>Tirzepatide Injectable (Mounjaro/Zepbound)</div>
                  <div style={{ padding: '6px 12px', background: '#DCFCE7', color: '#166534', borderRadius: 20, fontSize: 14, fontWeight: 600 }}>FDA: RESOLVED</div>
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingBottom: 16, borderBottom: '1px solid var(--line-soft)' }}>
                  <div style={{ fontWeight: 500, color: 'var(--ink)' }}>Liraglutide Injectable (Victoza/Saxenda)</div>
                  <div style={{ padding: '6px 12px', background: '#FEF9C3', color: '#854D0E', borderRadius: 20, fontSize: 14, fontWeight: 600 }}>FDA: LIMITED AVAILABILITY</div>
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 8 }}>
                  <div style={{ fontWeight: 600, color: 'var(--ink)' }}>Local Pharmacy Stock (All Injectable GLP-1s)</div>
                  <div style={{ padding: '6px 12px', background: '#FEE2E2', color: '#991B1B', borderRadius: 20, fontSize: 14, fontWeight: 600 }}>SEVERE BACKORDERS</div>
                </div>
              </div>
            </div>

            <h2 className="serif" style={{ fontSize: 32, marginTop: 48, marginBottom: 24, color: 'var(--ink)' }}>The API vs. Fill-Finish Bottleneck: Why Pharmacies Are Empty</h2>
            
            <p>To understand why the FDA says the shortage is over while your pharmacist laughs when you hand them a prescription, we must dissect how a GLP-1 medication is actually manufactured. The process is bifurcated into two entirely distinct industrial phases:</p>

            <h3 style={{ fontSize: 24, marginTop: 32, marginBottom: 12, color: 'var(--ink)' }}>1. Active Pharmaceutical Ingredient (API) Synthesis</h3>
            <p>The pharmaceutical giants—primarily Novo Nordisk and Eli Lilly—have invested tens of billions of dollars over the last three years to rapidly scale the peptide synthesis of Semaglutide and Tirzepatide. By early 2025, these massive new facilities came online. Today, the global supply chain is swimming in raw GLP-1 API. There is absolutely no shortage of the actual liquid medication.</p>
            <p>Because the API is now abundant, the FDA's algorithmic metrics for defining a national drug shortage—which heavily weight total volumetric drug availability at the manufacturer level—triggered the administrative removal of these drugs from the shortage list.</p>

            <h3 style={{ fontSize: 24, marginTop: 32, marginBottom: 12, color: 'var(--ink)' }}>2. The "Fill-Finish" Auto-Injector Crisis</h3>
            <p>The medication cannot simply be shipped in vats to your local CVS. It must undergo "fill-finish"—the highly complex, sterile process of loading the exact micro-dose of the peptide into single-use, mechanical glass auto-injector pens.</p>
            <p>This is the true bottleneck. The global supply of specialized medical glass (Type 1 borosilicate) and the ultra-precise robotic assembly lines required to build the pens cannot scale quickly enough to meet the exponential demand. The medication is trapped in massive holding tanks, waiting for plastic and glass housings that do not yet exist.</p>

            <div style={{ borderLeft: '4px solid var(--brand)', paddingLeft: 24, margin: '40px 0', fontStyle: 'italic', fontSize: 20, color: 'var(--ink)' }}>
              "We are no longer facing a chemical shortage; we are facing a plastics and robotics shortage. Until new fill-finish facilities come online in late 2026, local pharmacy availability will remain highly unpredictable, regardless of what the FDA's macro-data suggests." 
              <br /><span style={{ fontSize: 16, fontWeight: 600, fontStyle: 'normal', display: 'block', marginTop: 12 }}>— Julian Mercer, Lead Bio-Systems Analyst</span>
            </div>

            <h2 className="serif" style={{ fontSize: 32, marginTop: 48, marginBottom: 24, color: 'var(--ink)' }}>Dosage-Specific Availability: The Starter Dose Crisis</h2>
            
            <p>The "Ghost Shortage" does not affect all patients equally. Pharmaceutical companies have deliberately prioritized the production of <em>maintenance doses</em> (the higher doses patients take once they are acclimated to the drug) to ensure that patients already on the medication do not experience dangerous interruptions in care.</p>
            <p>As a direct result, <strong>starter doses</strong> (e.g., 0.25mg Semaglutide, 2.5mg Tirzepatide) are disproportionately affected by the auto-injector bottleneck. If you are a new patient trying to begin a GLP-1 protocol in 2026, you will face the steepest uphill battle at traditional pharmacies.</p>

            {/* --- DOSAGE TABLE --- */}
            <div style={{ overflowX: 'auto', marginBottom: 48, marginTop: 32 }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 16 }}>
                <thead>
                  <tr style={{ background: 'var(--ink)', color: '#fff', textAlign: 'left' }}>
                    <th style={{ padding: '16px', borderRadius: '8px 0 0 0' }}>Medication</th>
                    <th style={{ padding: '16px' }}>Dose Type</th>
                    <th style={{ padding: '16px' }}>Dosage (mg)</th>
                    <th style={{ padding: '16px', borderRadius: '0 8px 0 0' }}>Pharmacy Availability</th>
                  </tr>
                </thead>
                <tbody>
                  <tr style={{ borderBottom: '1px solid var(--line-soft)' }}>
                    <td style={{ padding: '16px', fontWeight: 500 }}>Wegovy / Ozempic</td>
                    <td style={{ padding: '16px' }}>Starter</td>
                    <td style={{ padding: '16px' }}>0.25mg, 0.5mg</td>
                    <td style={{ padding: '16px', color: '#991B1B', fontWeight: 600 }}>Critically Low</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid var(--line-soft)', background: '#F8FAFC' }}>
                    <td style={{ padding: '16px', fontWeight: 500 }}>Wegovy / Ozempic</td>
                    <td style={{ padding: '16px' }}>Maintenance</td>
                    <td style={{ padding: '16px' }}>1.0mg, 1.7mg, 2.4mg</td>
                    <td style={{ padding: '16px', color: '#854D0E', fontWeight: 600 }}>Intermittent</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid var(--line-soft)' }}>
                    <td style={{ padding: '16px', fontWeight: 500 }}>Zepbound / Mounjaro</td>
                    <td style={{ padding: '16px' }}>Starter</td>
                    <td style={{ padding: '16px' }}>2.5mg, 5.0mg</td>
                    <td style={{ padding: '16px', color: '#991B1B', fontWeight: 600 }}>Critically Low</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid var(--line-soft)', background: '#F8FAFC' }}>
                    <td style={{ padding: '16px', fontWeight: 500 }}>Zepbound / Mounjaro</td>
                    <td style={{ padding: '16px' }}>Maintenance</td>
                    <td style={{ padding: '16px' }}>10mg, 12.5mg, 15mg</td>
                    <td style={{ padding: '16px', color: '#854D0E', fontWeight: 600 }}>Intermittent</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div style={{ background: 'linear-gradient(135deg, #F0FDF4, #ECFDF5)', border: '2px solid #16A34A', borderRadius: 16, padding: 32, margin: '48px 0' }}>
              <h3 className="serif" style={{ fontSize: 28, marginBottom: 16, color: 'var(--ink)' }}>Bypass the Auto-Injector Shortage Entirely</h3>
              <p style={{ fontSize: 16, marginBottom: 24 }}>Stop calling pharmacies for pens that don't exist. Telehealth FX connects you with elite 503A compounding pharmacies that deliver pure, patient-specific GLP-1 medications in sterile vials—completely immune to the pen shortage.</p>
              <a href={S} target="_blank" rel="noopener noreferrer" className="btn" style={{ background: 'var(--brand)', color: 'white', display: 'inline-flex', alignItems: 'center', gap: 8 }}>
                Check Availability & See If You Qualify <Icon.Arrow />
              </a>
            </div>

            <h2 className="serif" style={{ fontSize: 32, marginTop: 48, marginBottom: 24, color: 'var(--ink)' }}>The 2026 Game Changers: Oral GLP-1s and Medicare Expansion</h2>
            
            <p>If the supply chain dynamics weren't complicated enough, two massive events in 2026 are radically shifting the GLP-1 landscape.</p>

            <h3 style={{ fontSize: 24, marginTop: 32, marginBottom: 12, color: 'var(--ink)' }}>1. The Arrival of Oral GLP-1s (Wegovy Pill & Foundayo)</h3>
            <p>In January 2026, Novo Nordisk successfully launched the oral (pill) version of Wegovy for weight loss, following the earlier success of Rybelsus for Type 2 diabetes. Hot on their heels, Eli Lilly launched <strong>Foundayo</strong>, their highly anticipated oral weight-loss medication, in April 2026.</p>
            <p>Because these medications are synthesized into solid tablets, they completely bypass the glass auto-injector bottleneck. While they are slightly less bioavailable than their injectable counterparts (requiring strict fasting protocols upon ingestion), they offer a massive relief valve for the supply chain. However, early demand for these pills has been so astronomical that they, too, are facing intermittent local stockouts.</p>

            <h3 style={{ fontSize: 24, marginTop: 32, marginBottom: 12, color: 'var(--ink)' }}>2. The July 2026 Medicare Expansion Catalyst</h3>
            <p>Perhaps the most significant event in the history of metabolic medicine will occur on <strong>July 1, 2026</strong>. Following years of legislative lobbying and intense clinical data reviews (proving that GLP-1s reduce cardiovascular events and osteoarthritis complications), Medicare will officially begin covering weight-loss drugs for eligible beneficiaries under a newly negotiated pricing agreement.</p>
            <p>This ruling opens the floodgates to millions of new patients who previously could not afford the $1,000+ monthly retail price. While this is a monumental victory for public health, supply chain experts warn that the sudden influx of Medicare prescriptions will place an unprecedented strain on the already fragile local pharmacy stock. The "Ghost Shortage" is expected to worsen significantly in Q3 and Q4 of 2026 as this new demographic enters the market.</p>

            <h2 className="serif" style={{ fontSize: 32, marginTop: 48, marginBottom: 24, color: 'var(--ink)' }}>The FDA 503B Crackdown vs. 503A Compounding</h2>
            
            <p>When the FDA officially removed Semaglutide and Tirzepatide from the shortage list, it triggered panic. Under federal law, compounding pharmacies are prohibited from making "essentially copies" of commercially available, FDA-approved drugs <em>unless</em> the drug is currently on the official FDA shortage list.</p>
            <p>This panic was exacerbated in April 2026 when the FDA announced it was considering removing GLP-1 receptor agonists from the "503B bulks list," initiating a public comment period that runs through June 29, 2026. Many patients assumed they would instantly lose access to their affordable, compounded medications.</p>

            <h3 style={{ fontSize: 24, marginTop: 32, marginBottom: 12, color: 'var(--ink)' }}>Why Your Telehealth FX Supply Is Safe</h3>
            <p>The reality of compounding law is highly nuanced. The FDA's recent crackdown is primarily aimed at <strong>503B Outsourcing Facilities</strong>—massive operations that bulk-manufacture drugs for hospitals and clinics without requiring individual patient prescriptions.</p>
            <p>Telehealth FX operates through a distinctly different, highly protected legal pathway: <strong>503A Patient-Specific Compounding</strong>.</p>
            <p>Under Section 503A, licensed compounding pharmacies are legally permitted to compound medications indefinitely—regardless of shortage status or bulk lists—if they produce a <strong>patient-specific formulation</strong> that offers a clinical difference from the commercial product.</p>
            <p>By compounding pure, pharmaceutical-grade Semaglutide or Tirzepatide with targeted, clinically beneficial additives—such as <strong>Cyanocobalamin (Vitamin B12)</strong>, <strong>L-Carnitine</strong>, or <strong>Glycine</strong>—the medication is fundamentally altered. This is done to mitigate common GLP-1 side effects like severe nausea, fatigue, and muscle catabolism.</p>
            <p>Because Novo Nordisk and Eli Lilly do not manufacture a commercial GLP-1 combined with Vitamin B12, this patient-specific compounded formulation is completely legal, highly effective, and entirely immune to the FDA's 503B bulk list removals and the global auto-injector shortage.</p>

            <h2 className="serif" style={{ fontSize: 32, marginTop: 48, marginBottom: 24, color: 'var(--ink)' }}>Frequently Asked Questions (Q2 2026 Updates)</h2>
            
            <div style={{ marginTop: 32 }}>
              <h4 style={{ fontSize: 20, color: 'var(--ink)', marginBottom: 8 }}>Is the FDA Semaglutide shortage actually resolved?</h4>
              <p style={{ marginBottom: 24 }}>Officially, yes. The FDA removed Semaglutide (Wegovy and Ozempic) from the national drug shortage list due to abundant API supply. However, regional supply chain issues and backorders at local pharmacies persist due to the auto-injector pen manufacturing bottleneck, making the drug practically unavailable for many patients.</p>

              <h4 style={{ fontSize: 20, color: 'var(--ink)', marginBottom: 8 }}>Are compounded GLP-1s illegal now?</h4>
              <p style={{ marginBottom: 24 }}>No. While bulk-manufacturing 503B facilities are facing strict regulatory clampdowns, 503A compounding pharmacies can still legally formulate patient-specific prescriptions. By adding beneficial ingredients like Vitamin B12 to reduce nausea, the medication becomes distinct from the commercial brand and remains legally compliant.</p>

              <h4 style={{ fontSize: 20, color: 'var(--ink)', marginBottom: 8 }}>How will Medicare coverage affect the shortage?</h4>
              <p style={{ marginBottom: 24 }}>Starting July 1, 2026, Medicare's expansion of coverage for weight-loss drugs will drastically increase demand. Supply chain experts predict this will exacerbate the "Ghost Shortage" at local pharmacies, particularly for injectable starter doses, as millions of new patients gain access to prescriptions.</p>
              
              <h4 style={{ fontSize: 20, color: 'var(--ink)', marginBottom: 8 }}>Are the new oral GLP-1s easier to find?</h4>
              <p style={{ marginBottom: 24 }}>Oral options like the Wegovy pill and Eli Lilly's Foundayo bypass the auto-injector bottleneck, making their manufacturing process faster. However, early demand in 2026 has been so high that they are currently experiencing intermittent, regional stockouts similar to the injectables.</p>
            </div>

            <div style={{ padding: 40, marginTop: 60, borderRadius: 20, background: 'var(--ink)', color: '#FBF8F3', textAlign: 'center' }}>
              <h2 className="serif" style={{ fontSize: 40, marginBottom: 20, color: '#FBF8F3' }}>Secure Your Supply Today</h2>
              <p style={{ fontSize: 18, opacity: 0.9, marginBottom: 32, maxWidth: 500, margin: '0 auto 32px' }}>Don't let the July Medicare surge or local pharmacy backorders derail your progress. Secure your patient-specific GLP-1 medication with guaranteed monthly delivery.</p>
              <a href={S} target="_blank" rel="noopener noreferrer" className="btn btn-lg" style={{ background: '#FBF8F3', color: 'var(--ink)', display: 'inline-flex', justifyContent: 'center', width: '100%', maxWidth: 280 }}>
                Start Your Medical Intake <Icon.Arrow />
              </a>
            </div>

            <div style={{ marginTop: 80, paddingTop: 40, borderTop: '1px solid var(--line-soft)', fontSize: 14, color: 'var(--ink-3)' }}>
              <h3 className="serif" style={{ fontSize: 24, marginBottom: 24, color: 'var(--ink)' }}>References & Regulatory Data</h3>
              <ol style={{ paddingLeft: 20, display: 'flex', flexDirection: 'column', gap: 16 }}>
                <li>U.S. Food and Drug Administration. (2026). <em>FDA Drug Shortages Database</em>. <a href="https://www.accessdata.fda.gov/scripts/drugshortages/default.cfm" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--brand)', textDecoration: 'underline' }}>accessdata.fda.gov</a></li>
                <li>U.S. Centers for Medicare & Medicaid Services (CMS). (2026). <em>Medicare Coverage of Anti-Obesity Medications: Implementation Guidelines</em>. <a href="https://www.cms.gov" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--brand)', textDecoration: 'underline' }}>cms.gov</a></li>
                <li>U.S. Food and Drug Administration. (2026). <em>Compounding and the FDA: Section 503A and 503B Policy Updates</em>. <a href="https://www.fda.gov/drugs/human-drug-compounding" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--brand)', textDecoration: 'underline' }}>fda.gov</a></li>
              </ol>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}

export { Glp1ShortageTracker2026 };
