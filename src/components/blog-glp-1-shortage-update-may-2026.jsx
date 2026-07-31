"use client";
import React from 'react';
import Image from 'next/image';
import { Icon } from './common.jsx';

const START_URL = "https://go.telehealthfx.com/start";

function BlogGLP1ShortageUpdate2026() {
  return (
    <>
      <section className="section" style={{ minHeight: '60vh', paddingTop: 120 }}>
      <div className="container" style={{ maxWidth: 800 }}>
        <div className="eyebrow" style={{ marginBottom: 20 }}>Supply &amp; Availability</div>
        <h1 className="serif" style={{ fontSize: 56, marginBottom: 24, lineHeight: 1.1 }}>
          The GLP-1 Shortage Update (May 2026): <span style={{ fontStyle: 'italic', color: 'var(--brand)' }}>Which Medications Are Available Right Now?</span>
        </h1>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 48, paddingBottom: 24, borderBottom: '1px solid var(--line-soft)' }}>
          <div style={{ width: 40, height: 40, borderRadius: '50%', background: 'var(--brand)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold' }}>
            <Image src="/assets/jm-profile.jpg" alt="Julian Mercer" width={1024} height={1024} style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%', height: "auto"}} priority={true} />
          </div>
          <div>
            <div style={{ fontWeight: 500, fontSize: 14 }}><a href="/about" style={{ color: "var(--ink)", textDecoration: "none" }}>Julian Mercer, M.S.</a></div>
            <div style={{ fontSize: 13, color: 'var(--ink-3)' }}>Lead Bio-Systems Analyst · Updated May 2026 · 20 min read</div>
          </div>
        </div>

        <div className="blog-content" style={{ fontSize: 18, lineHeight: 1.7, color: 'var(--ink-2)' }}>
          <Image src="/assets/glp1-shortage-update-featured.png" alt="GLP-1 medication shortage pharmacy shelves" width={1024} height={1024} style={{ width: '100%', borderRadius: 16, marginBottom: 40, border: '1px solid var(--line-soft)', background: '#111', height: "auto"}} priority={true} />

          <p><em>Last updated: May 4, 2026. This article is updated monthly to reflect the latest FDA shortage data and pharmacy availability reports.</em></p>

          <p>If you have been trying to fill a prescription for Ozempic, Wegovy, Mounjaro, or Zepbound and keep hearing "out of stock," you know how frustrating the <a href="/blog/what-is-a-glp-1-medication" style={{ color: 'var(--brand)', fontWeight: 500 }}>GLP-1 medication</a> supply chain can be. While the FDA officially declared the national semaglutide shortage resolved in February 2025, real-world availability at retail pharmacies remains inconsistent—particularly for specific dose strengths and in certain geographic regions.</p>

          <p>This guide provides a real-time snapshot of the current availability status for every major GLP-1 medication, explains why certain doses remain difficult to find, and outlines your best options for uninterrupted access to treatment.</p>

          <h2 className="serif" style={{ fontSize: 32, marginTop: 48, marginBottom: 24, color: 'var(--ink)' }}>Current Availability Status (May 2026)</h2>

          <div style={{ overflowX: 'auto', margin: '40px 0' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 16 }}>
              <thead>
                <tr style={{ borderBottom: '2px solid var(--ink)' }}>
                  <th style={{ textAlign: 'left', padding: '12px 16px', fontWeight: 600 }}>Medication</th>
                  <th style={{ textAlign: 'left', padding: '12px 16px', fontWeight: 600 }}>FDA Shortage?</th>
                  <th style={{ textAlign: 'left', padding: '12px 16px', fontWeight: 600 }}>Pharmacy Availability</th>
                  <th style={{ textAlign: 'left', padding: '12px 16px', fontWeight: 600 }}>Notes</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ borderBottom: '1px solid var(--line-soft)' }}><td style={{ padding: '12px 16px' }}>Ozempic</td><td style={{ padding: '12px 16px', color: 'green' }}>Resolved</td><td style={{ padding: '12px 16px' }}>Widely available</td><td style={{ padding: '12px 16px', fontSize: 14 }}>2 mg dose may have intermittent delays</td></tr>
                <tr style={{ borderBottom: '1px solid var(--line-soft)' }}><td style={{ padding: '12px 16px' }}>Wegovy</td><td style={{ padding: '12px 16px', color: 'green' }}>Resolved</td><td style={{ padding: '12px 16px' }}>Mostly available</td><td style={{ padding: '12px 16px', fontSize: 14 }}>Lower titration doses (0.25, 0.5mg) more available than maintenance</td></tr>
                <tr style={{ borderBottom: '1px solid var(--line-soft)' }}><td style={{ padding: '12px 16px' }}>Mounjaro</td><td style={{ padding: '12px 16px', color: 'green' }}>Resolved</td><td style={{ padding: '12px 16px' }}>Widely available</td><td style={{ padding: '12px 16px', fontSize: 14 }}>All dose strengths generally in stock</td></tr>
                <tr style={{ borderBottom: '1px solid var(--line-soft)' }}><td style={{ padding: '12px 16px' }}>Zepbound</td><td style={{ padding: '12px 16px', color: 'green' }}>Resolved</td><td style={{ padding: '12px 16px' }}>Available (pens + vials)</td><td style={{ padding: '12px 16px', fontSize: 14 }}>LillyDirect self-pay vials consistently available</td></tr>
                <tr style={{ borderBottom: '1px solid var(--line-soft)' }}><td style={{ padding: '12px 16px' }}>Rybelsus (oral)</td><td style={{ padding: '12px 16px', color: 'green' }}>No shortage</td><td style={{ padding: '12px 16px' }}>Widely available</td><td style={{ padding: '12px 16px', fontSize: 14 }}>Oral tablet, no supply issues</td></tr>
                <tr><td style={{ padding: '12px 16px' }}>Compounded GLP-1s</td><td style={{ padding: '12px 16px', color: 'var(--brand)' }}>N/A</td><td style={{ padding: '12px 16px', color: 'var(--brand)', fontWeight: 600 }}>Available via 503A</td><td style={{ padding: '12px 16px', fontSize: 14 }}>503B restricted; 503A patient-specific still legal</td></tr>
              </tbody>
            </table>
          </div>

          <h2 className="serif" style={{ fontSize: 32, marginTop: 48, marginBottom: 24, color: 'var(--ink)' }}>Why Some Doses Are Still Hard to Find</h2>

          <p>Even though the FDA has declared the shortage resolved, "resolved" means the manufacturer has confirmed supply is adequate at the <em>wholesale distribution</em> level. It does not guarantee that your local CVS or Walgreens has the specific dose strength you need on the shelf right now.</p>

          <p>Several factors create persistent, localized availability gaps:</p>
          <ul>
            <li style={{ marginBottom: 12 }}><strong>Demand Concentration:</strong> Maintenance doses (2.4 mg Wegovy, 15 mg Mounjaro) are consumed at much higher volumes than titration doses, creating demand imbalances.</li>
            <li style={{ marginBottom: 12 }}><strong>Pharmacy Ordering Limits:</strong> Wholesale distributors may cap the number of units a single pharmacy can order per week, creating artificial scarcity at high-volume locations.</li>
            <li style={{ marginBottom: 12 }}><strong>Geographic Variation:</strong> Urban pharmacies with high patient volumes experience stockouts more frequently than suburban or rural locations.</li>
            <li style={{ marginBottom: 12 }}><strong>Insurance Prior Authorization Delays:</strong> Even when medication is in stock, insurance prior authorization processes can delay fulfillment by 1–3 weeks.</li>
          </ul>

          <div className="card" style={{ padding: 40, margin: '48px 0', textAlign: 'center', background: '#FFFDF9', borderColor: 'var(--brand)' }}>
            <h3 className="serif" style={{ fontSize: 28, marginBottom: 16, color: 'var(--ink)' }}>Skip the Pharmacy Shortage</h3>
            <p style={{ marginBottom: 24, fontSize: 16 }}>TelehealthFX ships directly from licensed pharmacies to your door. No pharmacy lines, no stockout frustration, no prior authorization delays.</p>
            <a href={START_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-lg" style={{ display: 'inline-flex', justifyContent: 'center' }}>
              Check Availability <Icon.Arrow />
            </a>
          </div>

          <h2 className="serif" style={{ fontSize: 32, marginTop: 48, marginBottom: 24, color: 'var(--ink)' }}>Your Options When Medication Is Unavailable</h2>

          <ol>
            <li style={{ marginBottom: 16 }}><strong>Switch Pharmacies:</strong> Call multiple pharmacies in your area. Independent pharmacies and specialty pharmacies often have better stock than chain locations.</li>
            <li style={{ marginBottom: 16 }}><strong>Ask About Alternative Dose Packaging:</strong> If your dose strength is out of stock, your prescriber may be able to adjust the prescription to use multiple lower-dose pens to achieve the same weekly dose.</li>
            <li style={{ marginBottom: 16 }}><strong>Consider Telehealth + Direct-Ship:</strong> Telehealth providers like TelehealthFX partner with licensed pharmacies that maintain dedicated inventory, bypassing retail pharmacy distribution bottlenecks entirely.</li>
            <li style={{ marginBottom: 16 }}><strong>Explore <a href="/blog/oral-semaglutide-is-here-is-the-glp-1-pill-as-good" style={{ color: 'var(--brand)', fontWeight: 500 }}>Oral Semaglutide (Rybelsus)</a>:</strong> If injectable supply is constrained, oral semaglutide tablets have not experienced the same shortage issues.</li>
            <li style={{ marginBottom: 16 }}><strong>Don't Pause Treatment:</strong> Gaps in GLP-1 therapy can trigger appetite rebound and weight regain. Read about <a href="/blog/what-happens-when-you-stop-glp-1-medication-the-re" style={{ color: 'var(--brand)', fontWeight: 500 }}>what happens when you stop GLP-1 medication</a> to understand the risks.</li>
          </ol>

          <h2 className="serif" style={{ fontSize: 32, marginTop: 48, marginBottom: 24, color: 'var(--ink)' }}>The Compounding Landscape Post-FDA Crackdown</h2>

          <p>The <a href="/blog/fda-compounding-ban" style={{ color: 'var(--brand)', fontWeight: 500 }}>FDA's proposed 503B compounding ban</a> has dramatically reshaped the compounded GLP-1 market. While large-scale outsourcing facilities are being shut down, patient-specific compounding through licensed 503A pharmacies remains legally available. For patients who need affordable, reliable access without fighting retail pharmacy shortages, compliant compounded GLP-1 therapy through a verified telehealth provider remains the most practical option.</p>

          <div className="card" style={{ padding: 40, margin: '48px 0', textAlign: 'center', background: '#FFFDF9', borderColor: 'var(--brand)' }}>
            <div style={{ width: 48, height: 48, borderRadius: '50%', background: 'var(--brand-soft)', color: 'var(--brand)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px' }}><Icon.Check size={24} /></div>
            <h3 className="serif" style={{ fontSize: 28, marginBottom: 16, color: 'var(--ink)' }}>Reliable, Uninterrupted Access</h3>
            <p style={{ marginBottom: 24, fontSize: 16 }}>TelehealthFX maintains dedicated pharmacy partnerships to ensure your medication ships on schedule—every month, without gaps.</p>
            <a href={START_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-lg" style={{ display: 'inline-flex', justifyContent: 'center' }}>
              Start Your Evaluation <Icon.Arrow />
            </a>
          </div>

          <h2 className="serif" style={{ fontSize: 32, marginTop: 48, marginBottom: 24, color: 'var(--ink)' }}>Frequently Asked Questions</h2>

          <h4 style={{ fontSize: 20, marginTop: 24, marginBottom: 8, color: 'var(--ink)' }}>Is Ozempic still in shortage in 2026?</h4>
          <p style={{ marginBottom: 24 }}>The FDA officially resolved the semaglutide shortage in February 2025. As of May 2026, Ozempic is widely available at most pharmacies, though the 2 mg dose strength may experience intermittent delays at high-volume locations.</p>

          <h4 style={{ fontSize: 20, marginTop: 24, marginBottom: 8, color: 'var(--ink)' }}>What should I do if my pharmacy can't fill my GLP-1 prescription?</h4>
          <p style={{ marginBottom: 24 }}>Call multiple pharmacies (including independents), ask your prescriber about alternative dose packaging, and consider telehealth providers with direct-ship pharmacy partnerships. Do not pause treatment—gaps can trigger appetite rebound.</p>

          <h4 style={{ fontSize: 20, marginTop: 24, marginBottom: 8, color: 'var(--ink)' }}>Can I still get compounded semaglutide?</h4>
          <p style={{ marginBottom: 24 }}>Yes, through licensed 503A pharmacies with a valid patient-specific prescription. The FDA's crackdown targets 503B outsourcing facilities, not traditional patient-specific compounding. Verify your provider is <a href="/blog/is-compounded-semaglutide-safe-what-you-need-to-kn" style={{ color: 'var(--brand)', fontWeight: 500 }}>operating compliantly</a>.</p>

          <div style={{ padding: 40, marginTop: 60, borderRadius: 20, background: 'var(--ink)', color: '#FBF8F3', textAlign: 'center' }}>
            <h2 className="serif" style={{ fontSize: 40, marginBottom: 20, color: '#FBF8F3' }}>Don't Let Shortages Derail Your Progress</h2>
            <p style={{ fontSize: 18, opacity: 0.9, marginBottom: 32, maxWidth: 500, margin: '0 auto 32px' }}>Access GLP-1 therapy through a provider that guarantees supply. No pharmacy lines, no stockouts.</p>
            <a href={START_URL} target="_blank" rel="noopener noreferrer" className="btn btn-lg" style={{ background: '#FBF8F3', color: 'var(--ink)', display: 'inline-flex', justifyContent: 'center', width: '100%', maxWidth: 250 }}>
              Get Started <Icon.Arrow />
            </a>
          </div>

          <div style={{ marginTop: 80, paddingTop: 40, borderTop: '1px solid var(--line-soft)', fontSize: 14, color: 'var(--ink-3)' }}>
            <h3 className="serif" style={{ fontSize: 24, marginBottom: 24, color: 'var(--ink)' }}>Academic References &amp; Clinical Citations</h3>
            <ol style={{ paddingLeft: 20, display: 'flex', flexDirection: 'column', gap: 16 }}>
              <li>U.S. Food and Drug Administration. (2025). <em>FDA Drug Shortages: Semaglutide injection products</em>. <a href="https://www.accessdata.fda.gov/scripts/drugshortages/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--brand)', textDecoration: 'underline' }}>https://www.accessdata.fda.gov/scripts/drugshortages/</a></li>
              <li>U.S. Food and Drug Administration. (2025). <em>FDA Drug Shortages: Tirzepatide injection products</em>. <a href="https://www.accessdata.fda.gov/scripts/drugshortages/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--brand)', textDecoration: 'underline' }}>https://www.accessdata.fda.gov/scripts/drugshortages/</a></li>
              <li>American Society of Health-System Pharmacists. (2026). <em>ASHP Drug Shortage Resource Center</em>. <a href="https://www.ashp.org/drug-shortages" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--brand)', textDecoration: 'underline' }}>https://www.ashp.org/drug-shortages</a></li>
              <li>U.S. Food and Drug Administration. (2026). <em>Drug Quality and Security Act: Compounding framework</em>. <a href="https://www.fda.gov/drugs/human-drug-compounding/drug-quality-and-security-act" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--brand)', textDecoration: 'underline' }}>https://www.fda.gov/drugs/human-drug-compounding/drug-quality-and-security-act</a></li>
            </ol>
          </div>
        </div>
      </div>
      <p style={{ fontSize: 13, color: 'var(--ink-3)', marginTop: 32, paddingTop: 20, borderTop: '1px solid var(--line-soft)' }}>Disclaimer: Mounjaro®, Zepbound®, Ozempic®, and Wegovy® are registered trademarks of their respective owners (Eli Lilly and Company, Novo Nordisk). Telehealth FX is an independent telehealth platform and is not affiliated with, endorsed by, or sponsored by these trademark owners. Compounded medications are prepared by state-licensed compounding pharmacies pursuant to a patient-specific prescription and are not reviewed or approved by the FDA for safety or efficacy.</p>
    </section>
    </>
  );
}

export { BlogGLP1ShortageUpdate2026 };
