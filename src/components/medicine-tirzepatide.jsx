"use client";
import React from 'react';
import { Icon } from './common.jsx';
import { PatientReviewsSection } from './patient-reviews-section.jsx';

const CTA_URL = "https://go.telehealthfx.com/embody?aff_sub=tfx_tirz_page";

function TirzepatidePage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "MedicalWebPage",
        "@id": "https://telehealthfx.com/medications/tirzepatide/#webpage",
        "name": "Tirzepatide Weight Loss Program | Telehealth FX",
        "description": "Dual GIP and GLP-1 receptor agonist therapy for superior metabolic weight management. Promotional introductory rate from $119/month across all doses. 24-hour approval and cold-chain overnight shipping.",
        "url": "https://telehealthfx.com/medications/tirzepatide/",
        "about": {
          "@type": "Substance",
          "name": "Tirzepatide",
          "nonProprietaryName": "Tirzepatide",
          "drugClass": "Dual GIP/GLP-1 receptor agonist",
          "mechanismOfAction": "Dual agonist targeting both GIP and GLP-1 receptors for enhanced appetite regulation and insulin sensitivity",
          "administrationRoute": "Subcutaneous injection"
        },
        "publisher": { "@type": "MedicalOrganization", "name": "Telehealth FX" }
      },
      {
        "@type": "Product",
        "@id": "https://telehealthfx.com/medications/tirzepatide/#product",
        "name": "Compounded Tirzepatide Program",
        "brand": { "@type": "Brand", "name": "Telehealth FX" },
        "description": "Dual GIP/GLP-1 receptor agonist program including clinician consults and compounded Tirzepatide medication for enhanced weight loss. Flat rate $129/month on every dose.",
        "image": "https://telehealthfx.com/assets/Site%20Icon-modified.png",
        "sku": "TIR-01",
        "url": "https://telehealthfx.com/medications/tirzepatide/",
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.8",
          "bestRating": "5",
          "worstRating": "1",
          "reviewCount": "142",
          "ratingCount": "142"
        },
        "review": [
          {
            "@type": "Review",
            "author": { "@type": "Person", "name": "James L." },
            "datePublished": "2026-03-22",
            "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
            "reviewBody": "Switched from Semaglutide to Tirzepatide and the results accelerated dramatically. Down 41 lbs in 4 months with virtually no appetite. Life-changing."
          },
          {
            "@type": "Review",
            "author": { "@type": "Person", "name": "Amanda P." },
            "datePublished": "2026-04-10",
            "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
            "reviewBody": "The dual-action mechanism really works. My blood sugar is better than it's been in years and I've lost 35 lbs. The telehealth process made everything easy."
          }
        ],
        "offers": {
          "@type": "Offer",
          "price": "119.00",
          "priceCurrency": "USD",
          "availability": "https://schema.org/InStock",
          "validFrom": "2026-01-01",
          "priceValidUntil": "2027-12-31",
          "url": CTA_URL
        }
      }
    ]
  };

  return (
    <section className="section" style={{ minHeight: '60vh', paddingTop: 120 }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <div className="container" style={{ maxWidth: 840 }}>

        <div style={{ textAlign: 'center', marginBottom: 80 }}>
          <div className="pill pill-dot pill-brand" style={{ marginBottom: 20, display: 'inline-flex' }}>
            <span>Strongest Clinical Results · From $119/mo Introductory Promo</span>
          </div>
          <h1 className="serif" style={{ fontSize: 72, marginBottom: 28, lineHeight: 0.95 }}>
            Tirzepatide<br/><span style={{ fontStyle: 'italic', color: 'var(--brand)' }}>from $119/mo.</span>
          </h1>
          <p style={{ fontSize: 20, color: 'var(--ink-2)', maxWidth: 600, margin: '0 auto 28px', lineHeight: 1.6 }}>
            Dual GIP/GLP-1 receptor agonist formulation — the most powerful clinical class available for metabolic weight loss. From $119/month introductory promo across all dosages — zero membership fees, no surprise dosage hikes, and free 2-day cold shipping.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12 }}>
            <a href={CTA_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-lg" style={{ display: 'inline-flex' }}>
              See If You Qualify ($119 Promo) <Icon.Arrow />
            </a>
            <span style={{ fontSize: 13, color: 'var(--ink-3)' }}>
              💡 Select &ldquo;Tirzepatide / Dual GIP&rdquo; during your free 60-second qualification to lock in your rate.
            </span>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24, marginBottom: 80 }}>
          {[
            { num: '~22%', label: 'Average Body Weight Loss' },
            { num: '$119', label: 'Promo Monthly Rate' },
            { num: 'Dual', label: 'GIP + GLP-1 Action' },
          ].map((s, i) => (
            <div key={i} className="card" style={{ padding: 28, textAlign: 'center' }}>
              <div className="serif" style={{ fontSize: 36, color: 'var(--brand)', marginBottom: 4 }}>{s.num}</div>
              <div style={{ fontSize: 13, color: 'var(--ink-3)' }}>{s.label}</div>
            </div>
          ))}
        </div>

        <div className="blog-content" style={{ fontSize: 18, lineHeight: 1.7, color: 'var(--ink-2)' }}>

          <h2 className="serif" style={{ fontSize: 40, marginTop: 0, marginBottom: 24, color: 'var(--ink)' }}>What Is Tirzepatide?</h2>
          <p>Tirzepatide is a <strong>dual GIP/GLP-1 receptor agonist</strong>. It represents the next generation of incretin-based therapies because it targets <em>two</em> hormonal pathways simultaneously.</p>
          <p>While semaglutide activates only GLP-1 receptors, tirzepatide activates both <strong>GLP-1</strong> and <strong>GIP (glucose-dependent insulinotropic polypeptide)</strong> receptors. This dual mechanism produces more pronounced effects on appetite, insulin sensitivity, and fat metabolism — resulting in the <strong>highest average weight loss of any FDA-approved medication to date</strong>.</p>
          <p>In the SURMOUNT-1 trial, participants on tirzepatide 15mg lost an average of <strong>22.5% of body weight</strong> over 72 weeks — more than any previously tested anti-obesity medication.</p>

          <h2 className="serif" style={{ fontSize: 40, marginTop: 64, marginBottom: 24, color: 'var(--ink)' }}>How Tirzepatide Works: The Dual-Agonist Advantage</h2>
          <p>Tirzepatide's dual mechanism creates a synergistic effect that neither pathway can achieve alone:</p>
          <ul style={{ marginBottom: 24, paddingLeft: 20 }}>
            <li style={{ marginBottom: 12 }}><strong>GLP-1 Pathway:</strong> Suppresses appetite via hypothalamic signaling, slows gastric emptying, and stimulates glucose-dependent insulin secretion — identical to semaglutide's primary mechanism.</li>
            <li style={{ marginBottom: 12 }}><strong>GIP Pathway:</strong> Enhances insulin sensitivity in adipose tissue, promotes more efficient fat oxidation, and may improve leptin sensitivity — the hormone that tells your brain how much fat you're storing. This additional pathway is believed to drive the superior weight loss results.</li>
            <li style={{ marginBottom: 12 }}><strong>Combined Effect:</strong> The dual action produces greater caloric reduction, improved glucose homeostasis, and enhanced lipid metabolism compared to GLP-1-only agents. Patients consistently report even more significant reduction in food noise and cravings.</li>
          </ul>

          <div className="card" style={{ padding: 40, margin: '48px 0', textAlign: 'center', background: '#FFFDF9', borderColor: 'var(--brand)' }}>
            <h3 className="serif" style={{ fontSize: 28, marginBottom: 16, color: 'var(--ink)' }}>The Most Powerful GLP-1 Class Available</h3>
            <p style={{ marginBottom: 24, fontSize: 16 }}>Compounded Tirzepatide from $119 introductory promo, then $129 flat rate across all doses. Dual-action GIP/GLP-1. Licensed clinicians. 24-hour approval.</p>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10 }}>
              <a href={CTA_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-lg" style={{ display: 'inline-flex', justifyContent: 'center' }}>
                See If You Qualify ($119 Promo) <Icon.Arrow />
              </a>
              <span style={{ fontSize: 13, color: 'var(--ink-3)' }}>
                💡 Select &ldquo;Tirzepatide / Dual GIP&rdquo; on the next step to confirm your promotional rate.
              </span>
            </div>
          </div>

          <h2 className="serif" style={{ fontSize: 40, marginTop: 64, marginBottom: 24, color: 'var(--ink)' }}>Tirzepatide Dosing & Titration Schedule</h2>
          <div style={{ margin: '32px 0', overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
              <thead>
                <tr style={{ background: 'var(--ink)', color: '#fff' }}>
                  <th style={{ padding: '16px', fontWeight: 500, fontSize: 14 }}>Weeks</th>
                  <th style={{ padding: '16px', fontWeight: 500, fontSize: 14 }}>Dose</th>
                  <th style={{ padding: '16px', fontWeight: 500, fontSize: 14 }}>Purpose</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['1–4', '2.5 mg', 'Initial tolerance phase'],
                  ['5–8', '5.0 mg', 'First therapeutic dose'],
                  ['9–12', '7.5 mg', 'Intermediate escalation'],
                  ['13–16', '10.0 mg', 'Enhanced therapeutic dose'],
                  ['17–20', '12.5 mg', 'Advanced dose (if needed)'],
                  ['21+', '15.0 mg', 'Maximum dose'],
                ].map(([weeks, dose, purpose], i) => (
                  <tr key={i} style={{ borderBottom: '1px solid var(--line-soft)', background: i % 2 ? 'transparent' : '#FAFAFA' }}>
                    <td style={{ padding: '16px', fontWeight: 500 }}>{weeks}</td>
                    <td style={{ padding: '16px', color: 'var(--brand)', fontWeight: 500 }}>{dose}</td>
                    <td style={{ padding: '16px' }}>{purpose}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 className="serif" style={{ fontSize: 40, marginTop: 64, marginBottom: 24, color: 'var(--ink)' }}>Clinical Trial Results</h2>
          <ul style={{ marginBottom: 24, paddingLeft: 20 }}>
            <li style={{ marginBottom: 12 }}><strong>SURMOUNT-1:</strong> 2,539 adults without diabetes. At the 15mg dose, average weight loss was 22.5% of body weight over 72 weeks. 63% of participants lost ≥20% of body weight.</li>
            <li style={{ marginBottom: 12 }}><strong>SURMOUNT-2:</strong> In adults with Type 2 Diabetes, tirzepatide produced 12.8–14.7% weight loss vs. 3.2% with placebo, with HbA1c reductions of 2.1–2.4 percentage points.</li>
            <li style={{ marginBottom: 12 }}><strong>SURMOUNT-3:</strong> After an initial lifestyle-only weight loss phase, adding tirzepatide produced an additional 18.4% weight loss vs. 2.5% weight regain with placebo — demonstrating its power even after behavioral interventions.</li>
            <li style={{ marginBottom: 12 }}><strong>SURMOUNT-4:</strong> Patients who switched from tirzepatide to placebo regained 14% body weight over 52 weeks, while those who continued lost an additional 5.5% — supporting the value of sustained treatment.</li>
          </ul>

          <h2 className="serif" style={{ fontSize: 40, marginTop: 64, marginBottom: 24, color: 'var(--ink)' }}>What Is Compounded Tirzepatide?</h2>
          <p>Compounded tirzepatide contains the identical dual-action active pharmaceutical ingredient as branded Mounjaro® and Zepbound®. It is prepared by <strong>licensed US 503A and 503B compounding pharmacies</strong> under strict state board regulations and Current Good Manufacturing Practices (cGMP).</p>
          <p>The primary advantage? <strong>Direct, transparent accessibility.</strong> Commercial branded tirzepatide retails for up to $1,400/month out of pocket and frequently suffers from national pharmacy inventory shortages. Through Telehealth FX, compounded tirzepatide starts at a <strong>$119/month introductory promo</strong>, continuing at a flat $129/month across all dose strengths without surprise escalation fees.</p>
          <p>Every Telehealth FX compounded prescription features:</p>
          <ul style={{ marginBottom: 24, paddingLeft: 20 }}>
            <li style={{ marginBottom: 8 }}>Evaluation and prescription by a licensed, board-certified US physician</li>
            <li style={{ marginBottom: 8 }}>Formulated exclusively by licensed 503A US sterile compounding facilities</li>
            <li style={{ marginBottom: 8 }}>Shipped direct-to-door in temperature-controlled cold-chain packaging via 2-day UPS</li>
            <li style={{ marginBottom: 8 }}>Direct clinical support and dosage titration management throughout your journey</li>
          </ul>

          {/* CTA 2 — Checkmark Trust Card */}
          <div className="card" style={{ padding: 40, margin: '48px 0', textAlign: 'center', background: '#FFFDF9', borderColor: 'var(--brand)' }}>
            <div style={{ width: 48, height: 48, borderRadius: '50%', background: 'var(--brand-soft)', color: 'var(--brand)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px' }}>
              <Icon.Check size={24} />
            </div>
            <h3 className="serif" style={{ fontSize: 28, marginBottom: 16, color: 'var(--ink)' }}>Compounded Tirzepatide. Maximum Weight Loss.</h3>
            <p style={{ marginBottom: 24, fontSize: 16 }}>From $119 promotional rate, flat $129/mo on every dose. Board-certified MDs, transparent billing, no insurance needed.</p>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10 }}>
              <a href={CTA_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-lg" style={{ display: 'inline-flex', justifyContent: 'center' }}>
                See If You Qualify <Icon.Arrow />
              </a>
              <span style={{ fontSize: 13, color: 'var(--ink-3)' }}>
                💡 Select &ldquo;Tirzepatide / Dual GIP&rdquo; during initial intake to secure promotional pricing.
              </span>
            </div>
          </div>

          <h2 className="serif" style={{ fontSize: 40, marginTop: 64, marginBottom: 24, color: 'var(--ink)' }}>Side Effects & Safety</h2>
          <p>Similar to semaglutide, the most common side effects are gastrointestinal and typically improve during titration:</p>
          <ul style={{ marginBottom: 24, paddingLeft: 20 }}>
            <li style={{ marginBottom: 8 }}>Nausea (most common during dose escalation)</li>
            <li style={{ marginBottom: 8 }}>Diarrhea or constipation</li>
            <li style={{ marginBottom: 8 }}>Decreased appetite (a therapeutic effect)</li>
            <li style={{ marginBottom: 8 }}>Injection site reactions</li>
          </ul>
          <p>Contraindications include personal or family history of medullary thyroid carcinoma (MTC) or MEN 2 syndrome. Your Telehealth FX clinician conducts a thorough screening before prescribing.</p>

          <h2 className="serif" style={{ fontSize: 40, marginTop: 64, marginBottom: 24, color: 'var(--ink)' }}>Who Should Consider Tirzepatide?</h2>
          <ul style={{ marginBottom: 24, paddingLeft: 20 }}>
            <li style={{ marginBottom: 8 }}>Adults seeking the maximum weight loss potential from GLP-1 therapy</li>
            <li style={{ marginBottom: 8 }}>Patients who have plateaued on semaglutide and want to escalate treatment</li>
            <li style={{ marginBottom: 8 }}>Individuals with significant insulin resistance or Type 2 Diabetes</li>
            <li style={{ marginBottom: 8 }}>Those willing to invest in the most effective obesity medication available</li>
          </ul>

          <h2 className="serif" style={{ fontSize: 40, marginTop: 64, marginBottom: 24, color: 'var(--ink)' }}>Semaglutide vs. Tirzepatide: The Dual-Action Advantage</h2>
          <div style={{ margin: '32px 0', overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
              <thead>
                <tr style={{ background: 'var(--ink)', color: '#fff' }}>
                  <th style={{ padding: '16px', fontWeight: 500, fontSize: 14 }}>Comparison Factor</th>
                  <th style={{ padding: '16px', fontWeight: 500, fontSize: 14 }}>Semaglutide</th>
                  <th style={{ padding: '16px', fontWeight: 500, fontSize: 14 }}>Tirzepatide</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Hormonal Mechanism', 'GLP-1 single receptor agonist', 'Dual GIP / GLP-1 co-agonist'],
                  ['Average Weight Reduction', '~15% total body weight', '~20% to 22.5% body weight (SURMOUNT-1)'],
                  ['Injection Frequency', 'Once weekly subcutaneous', 'Once weekly subcutaneous'],
                  ['Promotional Pricing', '$69 introductory promo', '$119 introductory promo ($129 flat)'],
                  ['Escalation Policy', 'Flat rate across all doses', 'Flat rate across all doses'],
                  ['Portal / Membership Fees', '$0 / month', '$0 / month'],
                  ['Primary Clinical Indication', 'Cardiovascular health & steady loss', 'Rapid metabolic reset & plateau breakthrough'],
                  ['Branded Equivalence', 'Ozempic®, Wegovy®', 'Mounjaro®, Zepbound®'],
                ].map(([factor, sem, tirz], i) => (
                  <tr key={i} style={{ borderBottom: '1px solid var(--line-soft)', background: i % 2 ? 'transparent' : '#FAFAFA' }}>
                    <td style={{ padding: '16px', fontWeight: 500 }}>{factor}</td>
                    <td style={{ padding: '16px', color: 'var(--ink-2)' }}>{sem}</td>
                    <td style={{ padding: '16px', color: 'var(--brand)', fontWeight: 600 }}>{tirz}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p>Tirzepatide is engineered for patients seeking the most accelerated clinical weight loss trajectory. If you previously hit a stubborn plateau on single-agonist Semaglutide or require deeper appetite suppression, Tirzepatide&apos;s dual receptor activation provides the superior metabolic stimulus.</p>

          <h2 className="serif" style={{ fontSize: 40, marginTop: 64, marginBottom: 24, color: 'var(--ink)' }}>How the Telehealth FX Tirzepatide Program Works</h2>
          <div style={{ display: 'grid', gridTemplateColumns: '48px 1fr', gap: '20px 16px', margin: '32px 0' }}>
            {[
              { step: '1', title: '60-Second Medical Intake', desc: 'Answer a quick medical history and lifestyle assessment to verify your BMI and health history.' },
              { step: '2', title: '24-Hour Clinician Review', desc: 'A licensed US physician reviews your questionnaire and prescribes compounded Tirzepatide if clinically indicated.' },
              { step: '3', title: '2-Day UPS Cold Delivery', desc: 'Your medication is compounded by a state-licensed 503A pharmacy and delivered cold-packed to your door.' },
              { step: '4', title: 'Ongoing Care & Dose Titration', desc: 'Enjoy direct messaging with your clinical team and automated refills without hidden monthly subscription fees.' },
            ].map((s, i) => (
              <React.Fragment key={i}>
                <div style={{ width: 48, height: 48, borderRadius: '50%', background: 'var(--brand)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 600, fontSize: 18, fontFamily: 'var(--sans)', flexShrink: 0 }}>{s.step}</div>
                <div style={{ paddingTop: 4 }}>
                  <h3 style={{ fontSize: 20, marginBottom: 8, color: 'var(--ink)' }}>{s.title}</h3>
                  <p style={{ margin: 0, fontSize: 16, color: 'var(--ink-2)' }}>{s.desc}</p>
                </div>
              </React.Fragment>
            ))}
          </div>

          <h2 className="serif" style={{ fontSize: 40, marginTop: 64, marginBottom: 24, color: 'var(--ink)' }}>Frequently Asked Questions</h2>
          {[
            { q: 'Why is Tirzepatide more effective than Semaglutide?', a: 'Tirzepatide targets two distinct incretin hormone receptors (GIP and GLP-1). This dual stimulation improves how your body responds to sugar, enhances fat burning, and calms hunger cues in the brain far more aggressively than single-agonist peptides.' },
            { q: 'Can I switch to Tirzepatide if I hit a plateau on Semaglutide?', a: 'Yes. Many Telehealth FX patients switch to Tirzepatide after reaching the maximum dose of Semaglutide. Your clinician will evaluate your current dose and transition you safely onto an equivalent starting regimen.' },
            { q: 'Does the price increase as my dosage increases?', a: 'No. Telehealth FX maintains flat-rate pricing. Whether you are on starter 2.5mg or advanced 15.0mg, your monthly medication cost remains locked at the flat rate with zero surprise increases.' },
            { q: 'How quickly does Tirzepatide silence food noise?', a: 'Most patients report a noticeable reduction in appetite and intrusive food thoughts within 24 to 72 hours of their first subcutaneous injection.' },
            { q: 'What happens if I ever decide to stop?', a: 'Your care team will guide you through a gradual dose maintenance taper or lifestyle transition plan to defend your metabolic rate and protect against rebound weight gain.' },
            { q: 'Are there hidden monthly membership fees?', a: 'Never. Unlike competing telehealth brands that bill an extra $99–$199/month just for doctor access, Telehealth FX includes physician consultations, medication, syringes, and shipping in one transparent flat rate.' },
          ].map((faq, i) => (
            <div key={i} style={{ padding: '28px 0', borderBottom: '1px solid var(--line-soft)' }}>
              <h3 style={{ fontSize: 18, marginBottom: 12, color: 'var(--ink)' }}>{faq.q}</h3>
              <p style={{ margin: 0, fontSize: 16, color: 'var(--ink-2)', lineHeight: 1.6 }}>{faq.a}</p>
            </div>
          ))}

          <PatientReviewsSection
            productName="Compounded Tirzepatide"
            aggregateRating={{ ratingValue: "4.9", reviewCount: "168" }}
            reviews={[
              {
                author: { name: "James L." },
                datePublished: "2026-03-22",
                reviewRating: { ratingValue: "5" },
                reviewBody: "Switched from Semaglutide to Tirzepatide and the results accelerated dramatically. Down 41 lbs in 4 months with virtually no appetite. Life-changing."
              },
              {
                author: { name: "Amanda P." },
                datePublished: "2026-04-10",
                reviewRating: { ratingValue: "5" },
                reviewBody: "The dual-action mechanism really works. My blood sugar is better than it's been in years and I've lost 35 lbs. The telehealth process made everything easy."
              },
              {
                author: { name: "Marcus T." },
                datePublished: "2026-05-18",
                reviewRating: { ratingValue: "5" },
                reviewBody: "Zero price increases as my dose went up. Lost 29 lbs in 10 weeks. Arrived cold in 2 days. Best telehealth service I have used."
              }
            ]}
          />

          <div style={{ padding: 40, marginTop: 60, borderRadius: 20, background: 'var(--ink)', color: '#FBF8F3', textAlign: 'center' }}>
            <h2 className="serif" style={{ fontSize: 40, marginBottom: 20, color: '#FBF8F3' }}>Start Your Tirzepatide Program</h2>
            <p style={{ fontSize: 18, opacity: 0.9, marginBottom: 32, maxWidth: 500, margin: '0 auto 32px' }}>
              From $119 promotional rate, flat $129/month across all doses. Licensed clinicians. 24-hour approval. Free cold shipping. Zero hidden fees.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12 }}>
              <a href={CTA_URL} target="_blank" rel="noopener noreferrer" className="btn btn-lg" style={{ background: '#FBF8F3', color: 'var(--ink)', display: 'inline-flex', justifyContent: 'center', width: '100%', maxWidth: 320 }}>
                See If You Qualify ($119 Promo) <Icon.Arrow />
              </a>
              <span style={{ fontSize: 13, opacity: 0.8 }}>
                💡 Select &ldquo;Tirzepatide / Dual GIP&rdquo; on the intake quiz to confirm your rate.
              </span>
            </div>
          </div>

          <p style={{ fontSize: 13, color: 'var(--ink-3)', marginTop: 40, borderTop: '1px solid var(--line-soft)', paddingTop: 20 }}>
            Disclaimer: Compounded medications are prepared by state-licensed 503A and 503B compounding pharmacies pursuant to a patient-specific prescription. Compounded medications are not reviewed or approved by the FDA for safety, efficacy, or quality. Mounjaro® and Zepbound® are registered trademarks of Eli Lilly and Company. Telehealth FX is an independent telehealth platform and is not affiliated with or endorsed by Eli Lilly and Company.
          </p>

        </div>
      </div>
    </section>
  );
}

export { TirzepatidePage };
