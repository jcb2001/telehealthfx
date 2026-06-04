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
              <div style={{ fontSize: 13, color: 'var(--ink-3)' }}>Lead Bio-Systems Analyst · Updated June 2026 · 14 min read</div>
            </div>
          </div>

          <div className="blog-content" style={{ fontSize: 18, lineHeight: 1.7, color: 'var(--ink-2)' }}>
            <Image 
              src="/assets/glp1_shortage_tracker_v2.png" 
              alt="2026 GLP-1 Pharmaceutical Supply Chain Tracker Dashboard showing resolved status vs low local availability" 
              width={1200} 
              height={675} 
              style={{ width: '100%', borderRadius: 16, marginBottom: 40, border: '1px solid var(--line-soft)', background: '#111', height: "auto" }} 
              priority={true} 
            />

            <p>If you're trying to fill a prescription for Wegovy, Ozempic, or Zepbound in 2026, you're likely facing a deeply frustrating paradox. According to the FDA's official Drug Shortages database, the monumental, multi-year supply crises for Semaglutide and Tirzepatide have been officially declared "Resolved."</p>
            <p>Yet, millions of patients are discovering that "resolved on paper" does not equate to medication in hand. Call any ten local pharmacies today, and eight of them will likely tell you they are entirely out of stock, with no precise ETA on the next delivery.</p>
            <p>Welcome to the <strong>2026 Ghost Shortage</strong>.</p>
            <p>This tracker breaks down the exact regulatory and supply chain mechanics driving this paradox, the difference between API production and fill-finish bottlenecks, and the legal 503A compounding pathways that elite telehealth clinics are utilizing to guarantee patient supply.</p>

            <div style={{ background: '#F8FAFC', border: '1px solid var(--line-soft)', borderRadius: 16, padding: 32, margin: '48px 0' }}>
              <h3 className="serif" style={{ fontSize: 24, marginBottom: 20, color: 'var(--ink)' }}>
                <span style={{ display: 'inline-flex', alignItems: 'center', marginRight: 12, color: 'var(--brand)' }}>
                  <Icon.Syringe size={24} />
                </span>
                Live FDA Status (As of Q2 2026)
              </h3>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingBottom: 16, borderBottom: '1px solid var(--line-soft)' }}>
                  <div style={{ fontWeight: 500, color: 'var(--ink)' }}>Semaglutide (Ozempic/Wegovy)</div>
                  <div style={{ padding: '6px 12px', background: '#DCFCE7', color: '#166534', borderRadius: 20, fontSize: 14, fontWeight: 600 }}>FDA: RESOLVED</div>
                </div>
                
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingBottom: 16, borderBottom: '1px solid var(--line-soft)' }}>
                  <div style={{ fontWeight: 500, color: 'var(--ink)' }}>Tirzepatide (Mounjaro/Zepbound)</div>
                  <div style={{ padding: '6px 12px', background: '#DCFCE7', color: '#166534', borderRadius: 20, fontSize: 14, fontWeight: 600 }}>FDA: RESOLVED</div>
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingBottom: 16, borderBottom: '1px solid var(--line-soft)' }}>
                  <div style={{ fontWeight: 500, color: 'var(--ink)' }}>Liraglutide (Victoza/Saxenda)</div>
                  <div style={{ padding: '6px 12px', background: '#FEF9C3', color: '#854D0E', borderRadius: 20, fontSize: 14, fontWeight: 600 }}>FDA: LIMITED AVAILABILITY</div>
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 8 }}>
                  <div style={{ fontWeight: 600, color: 'var(--ink)' }}>Local Pharmacy Stock (All GLP-1s)</div>
                  <div style={{ padding: '6px 12px', background: '#FEE2E2', color: '#991B1B', borderRadius: 20, fontSize: 14, fontWeight: 600 }}>SEVERE BACKORDERS</div>
                </div>
              </div>
            </div>

            <h2 className="serif" style={{ fontSize: 32, marginTop: 48, marginBottom: 24, color: 'var(--ink)' }}>The API vs. Fill-Finish Bottleneck</h2>
            
            <p>To understand the Ghost Shortage, we must dissect how a GLP-1 medication is actually manufactured. The process is bifurcated into two entirely distinct industrial phases:</p>

            <h3 style={{ fontSize: 24, marginTop: 32, marginBottom: 12, color: 'var(--ink)' }}>1. Active Pharmaceutical Ingredient (API) Synthesis</h3>
            <p>The pharmaceutical giants (Novo Nordisk and Eli Lilly) have invested tens of billions of dollars over the last three years to rapidly scale the peptide synthesis of Semaglutide and Tirzepatide. Today, the world is swimming in GLP-1 API. There is no shortage of the actual liquid medication.</p>
            <p>Because the API is now abundant, the FDA's algorithmic metrics for defining a national shortage—which heavily weight total volumetric drug availability—triggered the administrative removal of these drugs from the shortage list.</p>

            <h3 style={{ fontSize: 24, marginTop: 32, marginBottom: 12, color: 'var(--ink)' }}>2. The "Fill-Finish" Auto-Injector Crisis</h3>
            <p>The medication cannot simply be shipped in vats. It must undergo "fill-finish"—the highly complex, sterile process of loading the exact micro-dose of the peptide into single-use, mechanical glass auto-injector pens.</p>
            <p>This is the true bottleneck. The global supply of specialized medical glass (Type 1 borosilicate) and the ultra-precise robotic assembly lines required to build the pens cannot scale quickly enough. The medication is trapped in holding tanks, waiting for plastic and glass housings that don't yet exist.</p>

            <div style={{ background: 'linear-gradient(135deg, #F0FDF4, #ECFDF5)', border: '2px solid #16A34A', borderRadius: 16, padding: 32, margin: '48px 0' }}>
              <h3 className="serif" style={{ fontSize: 28, marginBottom: 16, color: 'var(--ink)' }}>Bypass the Auto-Injector Shortage</h3>
              <p style={{ fontSize: 16, marginBottom: 24 }}>Stop calling pharmacies for pens that don't exist. Telehealth FX connects you with 503A compounding pharmacies that deliver pure, patient-specific GLP-1 medications in sterile vials—completely immune to the pen shortage.</p>
              <a href={S} target="_blank" rel="noopener noreferrer" className="btn" style={{ background: 'var(--brand)', color: 'white', display: 'inline-flex', alignItems: 'center', gap: 8 }}>
                Check Availability in Your State <Icon.Arrow />
              </a>
            </div>

            <h2 className="serif" style={{ fontSize: 32, marginTop: 48, marginBottom: 24, color: 'var(--ink)' }}>How Compounders Survived the "Resolution"</h2>
            
            <p>When the FDA officially removed Semaglutide and Tirzepatide from the shortage list, it sent shockwaves through the telehealth industry. Under Section 503A and 503B of the Food, Drug, and Cosmetic Act, compounding pharmacies are prohibited from making "essentially copies" of commercially available, FDA-approved drugs <em>unless</em> the drug is currently on the official FDA shortage list.</p>
            <p>Many assumed this would instantly end the availability of affordable, compounded GLP-1s. They were wrong.</p>

            <h3 style={{ fontSize: 24, marginTop: 32, marginBottom: 12, color: 'var(--ink)' }}>The Patient-Specific Formulation Loophole</h3>
            <p>While the temporary "shortage exemption" closed, a permanent legal pathway remained wide open. 503A compounding pharmacies are legally permitted to compound medications indefinitely if they produce a <strong>patient-specific formulation</strong> that offers a clinical difference from the commercial product.</p>
            <p>Elite telehealth providers and their pharmacy partners adapted immediately. By compounding pure, pharmaceutical-grade Semaglutide or Tirzepatide with targeted, clinically beneficial additives—most notably <strong>Cyanocobalamin (Vitamin B12)</strong> or <strong>L-Carnitine</strong>—the medication is fundamentally altered to mitigate common GLP-1 side effects like severe nausea, fatigue, and muscle catabolism.</p>
            <p>Because Novo Nordisk and Eli Lilly do not manufacture a commercial GLP-1 combined with Vitamin B12, this compounded formulation is completely legal, highly effective, and entirely immune to both FDA clampdowns and the global auto-injector shortage.</p>

            <h2 className="serif" style={{ fontSize: 32, marginTop: 48, marginBottom: 24, color: 'var(--ink)' }}>Frequently Asked Questions</h2>
            
            <div style={{ marginTop: 32 }}>
              <h4 style={{ fontSize: 20, color: 'var(--ink)', marginBottom: 8 }}>Are compounded GLP-1s safe?</h4>
              <p style={{ marginBottom: 24 }}>Yes, provided they are formulated by a state-licensed, FDA-registered 503A or 503B compounding pharmacy that sources its active pharmaceutical ingredients (API) from FDA-registered facilities. Always ensure your telehealth provider requires rigorous third-party batch testing for sterility and potency.</p>

              <h4 style={{ fontSize: 20, color: 'var(--ink)', marginBottom: 8 }}>When will local pharmacies have consistent stock?</h4>
              <p style={{ marginBottom: 24 }}>Industry supply chain analysts and pharmaceutical logistics experts project that the global auto-injector assembly capacity will not fully equalize with consumer demand until late 2026 or Q1 2027, when several massive new fill-finish manufacturing plants in the US and Europe finally come online.</p>
              
              <h4 style={{ fontSize: 20, color: 'var(--ink)', marginBottom: 8 }}>Is it legal to buy GLP-1s online?</h4>
              <p style={{ marginBottom: 24 }}>It is entirely legal to obtain GLP-1 medications online if you complete a legitimate telehealth consultation with a licensed medical provider who writes a valid prescription, and the medication is fulfilled by a licensed US pharmacy. Purchasing "research peptides" without a prescription is unregulated and dangerous.</p>
            </div>

            <div style={{ padding: 40, marginTop: 60, borderRadius: 20, background: 'var(--ink)', color: '#FBF8F3', textAlign: 'center' }}>
              <h2 className="serif" style={{ fontSize: 40, marginBottom: 20, color: '#FBF8F3' }}>The Shortage Doesn't Have to Affect You</h2>
              <p style={{ fontSize: 18, opacity: 0.9, marginBottom: 32, maxWidth: 500, margin: '0 auto 32px' }}>Secure your GLP-1 medication with guaranteed monthly delivery through our network of elite 503A compounding pharmacies.</p>
              <a href={S} target="_blank" rel="noopener noreferrer" className="btn btn-lg" style={{ background: '#FBF8F3', color: 'var(--ink)', display: 'inline-flex', justifyContent: 'center', width: '100%', maxWidth: 280 }}>
                Start Your Medical Intake <Icon.Arrow />
              </a>
            </div>

            <div style={{ marginTop: 80, paddingTop: 40, borderTop: '1px solid var(--line-soft)', fontSize: 14, color: 'var(--ink-3)' }}>
              <h3 className="serif" style={{ fontSize: 24, marginBottom: 24, color: 'var(--ink)' }}>References & Regulatory Data</h3>
              <ol style={{ paddingLeft: 20, display: 'flex', flexDirection: 'column', gap: 16 }}>
                <li>U.S. Food and Drug Administration. (2026). <em>FDA Drug Shortages Database</em>. <a href="https://www.accessdata.fda.gov/scripts/drugshortages/default.cfm" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--brand)', textDecoration: 'underline' }}>accessdata.fda.gov</a></li>
                <li>U.S. Food and Drug Administration. (2024). <em>Compounding and the FDA: Questions and Answers</em>. <a href="https://www.fda.gov/drugs/human-drug-compounding/compounding-and-fda-questions-and-answers" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--brand)', textDecoration: 'underline' }}>fda.gov</a></li>
              </ol>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}

export { Glp1ShortageTracker2026 };
