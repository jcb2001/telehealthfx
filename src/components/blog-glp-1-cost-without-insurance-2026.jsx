"use client";
import React from 'react';
import Image from 'next/image';
import { Icon } from './common.jsx';

const START_URL = "https://go.telehealthfx.com/start";

function BlogGLP1CostWithoutInsurance() {
  return (
    <>
      <section className="section" style={{ minHeight: '60vh', paddingTop: 120 }}>
      <div className="container" style={{ maxWidth: 800 }}>

        <div className="eyebrow" style={{ marginBottom: 20 }}>Pricing &amp; Access</div>
        <h1 className="serif" style={{ fontSize: 56, marginBottom: 24, lineHeight: 1.1 }}>
          How Much Does GLP-1 Cost Without Insurance in 2026? <span style={{ fontStyle: 'italic', color: 'var(--brand)' }}>The Real Price Breakdown</span>
        </h1>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 48, paddingBottom: 24, borderBottom: '1px solid var(--line-soft)' }}>
          <div style={{ width: 40, height: 40, borderRadius: '50%', background: 'var(--brand)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold' }}>
            <Image src="/assets/jm-profile.jpg" alt="Julian Mercer" width={1024} height={1024} style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%', height: "auto"}} priority={true} />
          </div>
          <div>
            <div style={{ fontWeight: 500, fontSize: 14 }}><a href="/about" style={{ color: "var(--ink)", textDecoration: "none" }}>Julian Mercer, M.S.</a></div>
            <div style={{ fontSize: 13, color: 'var(--ink-3)' }}>Lead Bio-Systems Analyst · Updated May 2026 · 38 min read</div>
          </div>
        </div>

        <div className="blog-content" style={{ fontSize: 18, lineHeight: 1.7, color: 'var(--ink-2)' }}>
          <Image src="/assets/glp1-cost-without-insurance-featured.png" alt="GLP-1 medication cost comparison breakdown" width={1024} height={1024} style={{ width: '100%', borderRadius: 16, marginBottom: 40, border: '1px solid var(--line-soft)', background: '#111', height: "auto"}} priority={true} />

          <p>If you have been researching <a href="/blog/what-is-a-glp-1-medication" style={{ color: 'var(--brand)', fontWeight: 500 }}>GLP-1 medications</a> for weight loss, the sticker shock is likely the first thing that stopped you in your tracks. Branded medications like Wegovy, Ozempic, Mounjaro, and Zepbound carry retail list prices that can exceed $1,300 per month—prices that are simply unattainable for the vast majority of Americans without comprehensive insurance coverage.</p>

          <p>But here is the critical reality that most pricing guides won't tell you: <strong>the "list price" is almost never what you actually pay.</strong> Between manufacturer self-pay programs, compounded alternatives, telehealth bundles, and evolving federal pricing agreements, the true cost landscape in 2026 is dramatically more nuanced than a single number. The problem is that navigating this landscape without expert guidance can cost you thousands of dollars in <a href="/blog/hidden-fees-in-telehealth-weight-loss-how-to-spot" style={{ color: 'var(--brand)', fontWeight: 500 }}>hidden fees</a> and wasted time.</p>

          <p>In this comprehensive pricing breakdown, we will dissect every cost pathway available to uninsured and underinsured patients in 2026, compare branded vs. compounded options side-by-side, expose the hidden fee structures that inflate your true cost, and provide a concrete action plan to access GLP-1 therapy at the lowest possible price point.</p>

          <h2 className="serif" style={{ fontSize: 32, marginTop: 48, marginBottom: 24, color: 'var(--ink)' }}>The 2026 Brand-Name GLP-1 Price Landscape</h2>

          <p>Understanding the retail pricing architecture is essential before evaluating alternatives. The four dominant GLP-1 medications on the U.S. market each carry distinct pricing structures set by their respective manufacturers.</p>

          <h3 style={{ fontSize: 24, marginTop: 32, marginBottom: 16, color: 'var(--ink)' }}>Semaglutide: Ozempic vs. Wegovy</h3>
          <p>Semaglutide is manufactured by Novo Nordisk and sold under two brand names: <strong>Ozempic</strong> (FDA-approved for type 2 diabetes) and <strong><a href="/blog/wegovy-fda-label" style={{ color: 'var(--brand)', fontWeight: 500 }}>Wegovy</a></strong> (FDA-approved for chronic weight management). Despite containing the identical active molecule, their pricing differs substantially:</p>
          <ul>
            <li style={{ marginBottom: 12 }}><strong>Ozempic:</strong> Retail list price of approximately <strong>$968–$1,030 per month</strong> for a 4-week supply pen. Without insurance, GoodRx and similar aggregators may reduce this to $800–$900 at select pharmacies.</li>
            <li style={{ marginBottom: 12 }}><strong>Wegovy:</strong> Retail list price of approximately <strong>$1,350 per month</strong>. Novo Nordisk's NovoCare program offers a self-pay option that can reduce this to approximately $199–$349/month for eligible cash-pay patients.</li>
          </ul>

          <h3 style={{ fontSize: 24, marginTop: 32, marginBottom: 16, color: 'var(--ink)' }}>Tirzepatide: Mounjaro vs. Zepbound</h3>
          <p>Tirzepatide is manufactured by Eli Lilly and sold as <strong>Mounjaro</strong> (type 2 diabetes) and <strong>Zepbound</strong> (weight management). As a dual GIP/GLP-1 receptor agonist, tirzepatide has demonstrated superior weight loss outcomes in clinical trials compared to semaglutide alone—a topic we explore in depth in our <a href="/blog/tirzepatide-vs-semaglutide-which-glp-1-is-right-fo" style={{ color: 'var(--brand)', fontWeight: 500 }}>Tirzepatide vs. Semaglutide comparison</a>.</p>
          <ul>
            <li style={{ marginBottom: 12 }}><strong>Mounjaro:</strong> List price of approximately <strong>$1,069–$1,112 per month</strong>.</li>
            <li style={{ marginBottom: 12 }}><strong>Zepbound:</strong> List price of approximately <strong>$1,086 per month</strong>. However, Eli Lilly's <em>LillyDirect</em> self-pay program offers single-dose vials starting at approximately <strong>$299–$449/month</strong> depending on dosage.</li>
          </ul>

          <div style={{ overflowX: 'auto', margin: '40px 0' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 16 }}>
              <thead>
                <tr style={{ borderBottom: '2px solid var(--ink)' }}>
                  <th style={{ textAlign: 'left', padding: '12px 16px', fontWeight: 600 }}>Medication</th>
                  <th style={{ textAlign: 'left', padding: '12px 16px', fontWeight: 600 }}>List Price/mo</th>
                  <th style={{ textAlign: 'left', padding: '12px 16px', fontWeight: 600 }}>Self-Pay Price</th>
                  <th style={{ textAlign: 'left', padding: '12px 16px', fontWeight: 600 }}>With Insurance</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ borderBottom: '1px solid var(--line-soft)' }}><td style={{ padding: '12px 16px' }}>Ozempic</td><td style={{ padding: '12px 16px' }}>$968–$1,030</td><td style={{ padding: '12px 16px' }}>$199–$499</td><td style={{ padding: '12px 16px' }}>As low as $25</td></tr>
                <tr style={{ borderBottom: '1px solid var(--line-soft)' }}><td style={{ padding: '12px 16px' }}>Wegovy</td><td style={{ padding: '12px 16px' }}>~$1,350</td><td style={{ padding: '12px 16px' }}>$199–$349</td><td style={{ padding: '12px 16px' }}>As low as $25</td></tr>
                <tr style={{ borderBottom: '1px solid var(--line-soft)' }}><td style={{ padding: '12px 16px' }}>Mounjaro</td><td style={{ padding: '12px 16px' }}>$1,069–$1,112</td><td style={{ padding: '12px 16px' }}>$499+</td><td style={{ padding: '12px 16px' }}>As low as $25</td></tr>
                <tr style={{ borderBottom: '1px solid var(--line-soft)' }}><td style={{ padding: '12px 16px' }}>Zepbound</td><td style={{ padding: '12px 16px' }}>~$1,086</td><td style={{ padding: '12px 16px' }}>$299–$449</td><td style={{ padding: '12px 16px' }}>As low as $25</td></tr>
                <tr><td style={{ padding: '12px 16px', fontWeight: 600 }}>Compounded</td><td style={{ padding: '12px 16px' }}>N/A</td><td style={{ padding: '12px 16px', color: 'var(--brand)', fontWeight: 600 }}>$150–$400</td><td style={{ padding: '12px 16px' }}>Not covered</td></tr>
              </tbody>
            </table>
          </div>

          <div className="card" style={{ padding: 40, margin: '48px 0', textAlign: 'center', background: '#FFFDF9', borderColor: 'var(--brand)' }}>
            <h3 className="serif" style={{ fontSize: 28, marginBottom: 16, color: 'var(--ink)' }}>Skip the Pricing Maze</h3>
            <p style={{ marginBottom: 24, fontSize: 16 }}>TelehealthFX offers transparent, all-inclusive pricing with zero hidden membership fees. Medication, clinical consultations, and shipping—one price.</p>
            <a href={START_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-lg" style={{ display: 'inline-flex', justifyContent: 'center' }}>
              Check Your Eligibility <Icon.Arrow />
            </a>
          </div>

          <h2 className="serif" style={{ fontSize: 32, marginTop: 48, marginBottom: 24, color: 'var(--ink)' }}>Compounded GLP-1s: The Affordable Alternative</h2>

          <p>For millions of Americans priced out of branded GLP-1 therapy, compounded medications have emerged as the most accessible pathway. Compounded <a href="/medications/semaglutide" style={{ color: 'var(--brand)', fontWeight: 500 }}>semaglutide</a> and <a href="/medications/tirzepatide" style={{ color: 'var(--brand)', fontWeight: 500 }}>tirzepatide</a> are prepared by licensed 503A compounding pharmacies based on individual, patient-specific prescriptions.</p>

          <p>The typical monthly cost for compounded GLP-1 therapy through a reputable telehealth provider ranges from <strong>$150 to $400 per month</strong>, depending on the specific medication, dosage tier, and whether the provider bundles consultations into the price. This represents savings of <strong>60–85%</strong> compared to branded list prices.</p>

          <p>However, it is critical to understand the regulatory landscape. Following the <a href="/blog/fda-compounding-ban" style={{ color: 'var(--brand)', fontWeight: 500 }}>FDA's proposed ban on 503B bulk compounding</a> of GLP-1s in April 2026, patient-specific compounding through licensed 503A pharmacies remains the legally compliant pathway. The key distinction: every vial must be tied to a valid, individual prescription from a licensed provider who has conducted a genuine clinical evaluation. To verify your provider is operating legally, read our guide on <a href="/blog/is-compounded-semaglutide-safe-what-you-need-to-kn" style={{ color: 'var(--brand)', fontWeight: 500 }}>compounded semaglutide safety</a>.</p>

          <h3 style={{ fontSize: 24, marginTop: 32, marginBottom: 16, color: 'var(--ink)' }}>What Affects Compounded GLP-1 Pricing?</h3>
          <ol>
            <li style={{ marginBottom: 16 }}><strong>Dosage Tier:</strong> Most providers use a titration schedule that starts at a low dose (e.g., 0.25 mg/week for semaglutide) and gradually increases. Some providers charge a flat rate regardless of dose, while others increase the price as the dose escalates. Always confirm the pricing structure for maintenance doses before committing.</li>
            <li style={{ marginBottom: 16 }}><strong>Medication Type:</strong> Compounded tirzepatide tends to cost 10–20% more than compounded semaglutide due to higher raw ingredient costs and more complex formulation requirements.</li>
            <li style={{ marginBottom: 16 }}><strong>Bundled vs. À La Carte:</strong> Ethical telehealth providers bundle the medication cost, clinician consultations, ongoing monitoring, and shipping into a single transparent price. Predatory providers separate these into individual line items to create an illusion of lower pricing.</li>
            <li style={{ marginBottom: 16 }}><strong>Commitment Length:</strong> Many platforms offer 10–25% discounts for 3-month or 6-month treatment commitments. While this can reduce your per-month cost, always verify the cancellation and refund policies before committing.</li>
          </ol>

          <h2 className="serif" style={{ fontSize: 32, marginTop: 48, marginBottom: 24, color: 'var(--ink)' }}>The Hidden Fee Trap: What "Per Month" Really Means</h2>

          <p>Perhaps the most dangerous pitfall in the GLP-1 pricing landscape is the rampant use of hidden fees by telehealth platforms. The FTC has launched major enforcement actions against several providers for deceptive pricing practices, and the patterns they identified are alarmingly common.</p>

          <h3 style={{ fontSize: 24, marginTop: 32, marginBottom: 16, color: 'var(--ink)' }}>The 5 Most Common Hidden Fees</h3>
          <ol>
            <li style={{ marginBottom: 16 }}><strong>Monthly "Membership" or "Platform" Fees ($49–$149/mo):</strong> The most prevalent deception. A platform advertises "$199/month medication," but buries a mandatory $99–$149 monthly subscription fee in the terms. Your true cost: $298–$348/month.</li>
            <li style={{ marginBottom: 16 }}><strong>Consultation Fees ($50–$150 per visit):</strong> Some providers charge separately for every clinician interaction, including initial evaluations, dose adjustments, and refill authorizations.</li>
            <li style={{ marginBottom: 16 }}><strong>Shipping and Handling ($15–$35/shipment):</strong> Cold-chain shipping for injectable medications requires insulated packaging and ice packs. Some providers pass this cost through as a separate line item.</li>
            <li style={{ marginBottom: 16 }}><strong>Supply Kits ($25–$50):</strong> Syringes, alcohol swabs, and sharps containers may be billed separately from the medication.</li>
            <li style={{ marginBottom: 16 }}><strong>Dose Escalation Surcharges:</strong> The advertised price reflects the lowest starting dose. As your clinician titrates your dose upward (which is medically necessary), the monthly price can increase by 50–100%.</li>
          </ol>

          <p>The total impact of these hidden charges can inflate a "$199/month" advertised price to <strong>$400–$500+</strong> in actual monthly spend. This is why we created our comprehensive guide to <a href="/blog/hidden-fees-in-telehealth-weight-loss-how-to-spot" style={{ color: 'var(--brand)', fontWeight: 500 }}>spotting hidden fees in telehealth weight loss programs</a>.</p>

          <div className="card" style={{ padding: 40, margin: '48px 0', textAlign: 'center', background: '#FFFDF9', borderColor: 'var(--brand)' }}>
            <div style={{ width: 48, height: 48, borderRadius: '50%', background: 'var(--brand-soft)', color: 'var(--brand)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px' }}>
              <Icon.Check size={24} />
            </div>
            <h3 className="serif" style={{ fontSize: 28, marginBottom: 16, color: 'var(--ink)' }}>Zero Hidden Fees. Ever.</h3>
            <p style={{ marginBottom: 24, fontSize: 16 }}>TelehealthFX was built on radical pricing transparency. No membership fees, no consultation surcharges, no surprise shipping costs. The price you see is the price you pay.</p>
            <a href={START_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-lg" style={{ display: 'inline-flex', justifyContent: 'center' }}>
              See Transparent Pricing <Icon.Arrow />
            </a>
          </div>

          <h2 className="serif" style={{ fontSize: 32, marginTop: 48, marginBottom: 24, color: 'var(--ink)' }}>How to Maximize Savings Without Insurance</h2>

          <h3 style={{ fontSize: 24, marginTop: 32, marginBottom: 16, color: 'var(--ink)' }}>1. Explore Manufacturer Self-Pay Programs</h3>
          <p>Both Novo Nordisk and Eli Lilly now offer direct-to-consumer self-pay programs designed specifically for patients without insurance coverage. Eli Lilly's <em>LillyDirect</em> and <em>Zepbound Self-Pay Journey</em> programs allow patients to purchase single-dose vials of tirzepatide at significantly reduced prices, sometimes as low as $299/month for lower doses. Novo Nordisk's <em>NovoCare</em> offers similar savings for Wegovy.</p>

          <h3 style={{ fontSize: 24, marginTop: 32, marginBottom: 16, color: 'var(--ink)' }}>2. Compare Compounded Telehealth Providers</h3>
          <p>Not all telehealth providers are created equal. When evaluating compounded GLP-1 providers, use this checklist from our <a href="/blog/how-to-choose-a-telehealth-weight-loss-program-and" style={{ color: 'var(--brand)', fontWeight: 500 }}>program selection guide</a>:</p>
          <ul>
            <li style={{ marginBottom: 8 }}>Confirm all-inclusive pricing (medication + consultations + shipping)</li>
            <li style={{ marginBottom: 8 }}>Verify the pharmacy is a licensed, U.S.-based 503A facility</li>
            <li style={{ marginBottom: 8 }}>Ask for the maintenance-dose price, not just the starting-dose price</li>
            <li style={{ marginBottom: 8 }}>Check cancellation and refund policies before committing</li>
          </ul>

          <h3 style={{ fontSize: 24, marginTop: 32, marginBottom: 16, color: 'var(--ink)' }}>3. Consider Complementary Therapies</h3>
          <p>Combining GLP-1 therapy with evidence-based complementary interventions can accelerate results and reduce the total duration of treatment. <a href="/medications/nad" style={{ color: 'var(--brand)', fontWeight: 500 }}>NAD+ therapy</a> supports mitochondrial energy production during caloric restriction, while <a href="/medications/sermorelin" style={{ color: 'var(--brand)', fontWeight: 500 }}>Sermorelin peptide therapy</a> helps preserve lean muscle mass—a critical concern we address in our article on <a href="/blog/glp-1-muscle-loss-the-hidden-risk-nobodys-talking" style={{ color: 'var(--brand)', fontWeight: 500 }}>GLP-1 muscle loss</a>.</p>

          <h3 style={{ fontSize: 24, marginTop: 32, marginBottom: 16, color: 'var(--ink)' }}>4. Explore Natural AMPK Activators</h3>
          <p>For patients who cannot afford or do not qualify for GLP-1 therapy, natural alternatives like <a href="/medications/berberine" style={{ color: 'var(--brand)', fontWeight: 500 }}>berberine</a> offer clinically supported metabolic benefits at a fraction of the cost. We break down the comparison in our <a href="/blog/berberine-vs-glp-1-in-2026-can-natures-ozempic-act" style={{ color: 'var(--brand)', fontWeight: 500 }}>Berberine vs. GLP-1</a> deep dive.</p>

          <h2 className="serif" style={{ fontSize: 32, marginTop: 48, marginBottom: 24, color: 'var(--ink)' }}>Frequently Asked Questions</h2>

          <h4 style={{ fontSize: 20, marginTop: 24, marginBottom: 8, color: 'var(--ink)' }}>What is the cheapest GLP-1 medication without insurance?</h4>
          <p style={{ marginBottom: 24 }}>Compounded semaglutide through a reputable telehealth provider is typically the most affordable option, ranging from $150–$300/month with all-inclusive pricing. Among branded options, Eli Lilly's Zepbound Self-Pay Journey program offers single-dose vials starting around $299/month.</p>

          <h4 style={{ fontSize: 20, marginTop: 24, marginBottom: 8, color: 'var(--ink)' }}>Can I use GoodRx for compounded semaglutide?</h4>
          <p style={{ marginBottom: 24 }}>No. GoodRx coupons only apply to FDA-approved, commercially manufactured medications dispensed at retail pharmacies. Compounded medications are custom-prepared by compounding pharmacies and are not eligible for GoodRx discounts.</p>

          <h4 style={{ fontSize: 20, marginTop: 24, marginBottom: 8, color: 'var(--ink)' }}>Why is Wegovy more expensive than Ozempic if they contain the same ingredient?</h4>
          <p style={{ marginBottom: 24 }}>Despite both containing semaglutide, Wegovy is priced higher because it is the only semaglutide product FDA-approved specifically for chronic weight management. Novo Nordisk prices it at a premium because weight management patients represent a larger, less price-sensitive market than type 2 diabetes patients. Additionally, Wegovy uses higher maintenance doses (2.4 mg vs. Ozempic's max of 2.0 mg).</p>

          <h4 style={{ fontSize: 20, marginTop: 24, marginBottom: 8, color: 'var(--ink)' }}>Does insurance ever cover GLP-1 for weight loss?</h4>
          <p style={{ marginBottom: 24 }}>Some commercial insurance plans cover Wegovy and Zepbound for weight management, but coverage is inconsistent and often requires prior authorization, step therapy, and a documented BMI of 30+ (or 27+ with comorbidities). Medicare does not currently cover GLP-1 medications for weight loss. Employer-sponsored plans vary widely.</p>

          <h4 style={{ fontSize: 20, marginTop: 24, marginBottom: 8, color: 'var(--ink)' }}>How much does GLP-1 therapy cost per year?</h4>
          <p style={{ marginBottom: 24 }}>At branded list prices, annual costs range from $11,600 (Ozempic) to $16,200 (Wegovy). Through compounded telehealth providers with transparent pricing, annual costs typically range from $1,800–$4,800. Through manufacturer self-pay programs, expect $2,400–$5,400 annually.</p>

          <div style={{ padding: 40, marginTop: 60, borderRadius: 20, background: 'var(--ink)', color: '#FBF8F3', textAlign: 'center' }}>
            <h2 className="serif" style={{ fontSize: 40, marginBottom: 20, color: '#FBF8F3' }}>Start Your Weight Loss Journey Today</h2>
            <p style={{ fontSize: 18, opacity: 0.9, marginBottom: 32, maxWidth: 500, margin: '0 auto 32px' }}>
              Transparent pricing. Licensed clinicians. No hidden fees. Experience medical weight loss the way it should be.
            </p>
            <a href={START_URL} target="_blank" rel="noopener noreferrer" className="btn btn-lg" style={{ background: '#FBF8F3', color: 'var(--ink)', display: 'inline-flex', justifyContent: 'center', width: '100%', maxWidth: 250 }}>
              Get Started Now <Icon.Arrow />
            </a>
          </div>

          <div style={{ marginTop: 80, paddingTop: 40, borderTop: '1px solid var(--line-soft)', fontSize: 14, color: 'var(--ink-3)' }}>
            <h3 className="serif" style={{ fontSize: 24, marginBottom: 24, color: 'var(--ink)' }}>Academic References &amp; Clinical Citations</h3>
            <ol style={{ paddingLeft: 20, display: 'flex', flexDirection: 'column', gap: 16 }}>
              <li>Wilding, J. P. H., Batterham, R. L., Calanna, S., et al. (2021). Once-weekly semaglutide in adults with overweight or obesity. <em>New England Journal of Medicine</em>, 384(11), 989–1002. <a href="https://doi.org/10.1056/NEJMoa2032183" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--brand)', textDecoration: 'underline' }}>https://doi.org/10.1056/NEJMoa2032183</a></li>
              <li>Jastreboff, A. M., Aronne, L. J., Ahmad, N. N., et al. (2022). Tirzepatide once weekly for the treatment of obesity. <em>New England Journal of Medicine</em>, 387(3), 205–216. <a href="https://doi.org/10.1056/NEJMoa2206038" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--brand)', textDecoration: 'underline' }}>https://doi.org/10.1056/NEJMoa2206038</a></li>
              <li>Eli Lilly and Company. (2025). <em>Zepbound (tirzepatide) prescribing information</em>. U.S. Food and Drug Administration. <a href="https://www.accessdata.fda.gov/drugsatfda_docs/label/2023/217806s000lbl.pdf" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--brand)', textDecoration: 'underline' }}>https://www.accessdata.fda.gov/drugsatfda_docs/label/2023/217806s000lbl.pdf</a></li>
              <li>Novo Nordisk. (2025). <em>Wegovy (semaglutide) prescribing information</em>. U.S. Food and Drug Administration. <a href="https://www.accessdata.fda.gov/drugsatfda_docs/label/2021/215256s000lbl.pdf" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--brand)', textDecoration: 'underline' }}>https://www.accessdata.fda.gov/drugsatfda_docs/label/2021/215256s000lbl.pdf</a></li>
              <li>U.S. Food and Drug Administration. (2025). <em>FDA Drug Shortages: Semaglutide Products</em>. <a href="https://www.accessdata.fda.gov/scripts/drugshortages/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--brand)', textDecoration: 'underline' }}>https://www.accessdata.fda.gov/scripts/drugshortages/</a></li>
              <li>GoodRx. (2026). <em>Ozempic prices, coupons, and patient assistance programs</em>. <a href="https://www.goodrx.com/ozempic" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--brand)', textDecoration: 'underline' }}>https://www.goodrx.com/ozempic</a></li>
              <li>Forbes Health. (2026). <em>How much do GLP-1 medications cost?</em> <a href="https://www.forbes.com/health/weight-loss/glp-1-cost/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--brand)', textDecoration: 'underline' }}>https://www.forbes.com/health/weight-loss/glp-1-cost/</a></li>
            </ol>
          </div>

        </div>
      </div>
      <p style={{ fontSize: 13, color: 'var(--ink-3)', marginTop: 32, paddingTop: 20, borderTop: '1px solid var(--line-soft)' }}>Disclaimer: Mounjaro®, Zepbound®, Ozempic®, and Wegovy® are registered trademarks of their respective owners (Eli Lilly and Company, Novo Nordisk). Telehealth FX is an independent telehealth platform and is not affiliated with, endorsed by, or sponsored by these trademark owners. Compounded medications are prepared by state-licensed compounding pharmacies pursuant to a patient-specific prescription and are not reviewed or approved by the FDA for safety or efficacy.</p>
    </section>
    </>
  );
}

export { BlogGLP1CostWithoutInsurance };
