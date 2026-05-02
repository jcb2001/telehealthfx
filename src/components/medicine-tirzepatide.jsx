"use client";
import React from 'react';
import { Icon } from './common.jsx';

const CTA_URL = "https://go.telehealthfx.com/start";

function TirzepatidePage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    "name": "Tirzepatide Weight Loss Program | Telehealth FX",
    "about": {
      "@type": "Drug",
      "name": "Tirzepatide",
      "nonProprietaryName": "Tirzepatide",
      "drugClass": "Dual GIP/GLP-1 receptor agonist",
      "mechanismOfAction": "Dual agonist targeting both GIP and GLP-1 receptors for enhanced appetite regulation and insulin sensitivity",
      "administrationRoute": "Subcutaneous injection"
    },
    "publisher": { "@type": "MedicalOrganization", "name": "Telehealth FX" }
  };

  return (
    <section className="section" style={{ minHeight: '60vh', paddingTop: 120 }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <div className="container" style={{ maxWidth: 840 }}>

        <div style={{ textAlign: 'center', marginBottom: 80 }}>
          <div className="pill" style={{ marginBottom: 20, display: 'inline-flex', background: 'rgba(199, 125, 92, 0.12)', borderColor: 'rgba(199, 125, 92, 0.3)', color: 'var(--accent)' }}>
            <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--accent)' }}/> Strongest Results
          </div>
          <h1 className="serif" style={{ fontSize: 72, marginBottom: 28, lineHeight: 0.95 }}>
            Tirzepatide<br/><span style={{ fontStyle: 'italic', color: 'var(--brand)' }}>from $258/mo.</span>
          </h1>
          <p style={{ fontSize: 20, color: 'var(--ink-2)', maxWidth: 600, margin: '0 auto 40px', lineHeight: 1.6 }}>
            The same active ingredient as Mounjaro® and Zepbound® — the most powerful GLP-1 class available. Dual GIP/GLP-1 action for maximum weight loss.
          </p>
          <a href={CTA_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-lg" style={{ display: 'inline-flex' }}>
            See If You Qualify <Icon.Arrow />
          </a>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24, marginBottom: 80 }}>
          {[
            { num: '~22%', label: 'Average Body Weight Loss' },
            { num: '$258', label: 'Starting Price/mo' },
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
          <p>Tirzepatide is a <strong>dual GIP/GLP-1 receptor agonist</strong> developed by Eli Lilly. It is the active ingredient in <strong>Mounjaro®</strong> (approved for Type 2 Diabetes) and <strong>Zepbound®</strong> (approved for chronic weight management). It represents the next generation of incretin-based therapies because it targets <em>two</em> hormonal pathways simultaneously.</p>
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
            <p style={{ marginBottom: 24, fontSize: 16 }}>Tirzepatide from $258/mo. Dual-action GIP/GLP-1. Licensed clinicians. 24-hour approval.</p>
            <a href={CTA_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-lg" style={{ display: 'inline-flex', justifyContent: 'center' }}>
              See If You Qualify <Icon.Arrow />
            </a>
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

          <div style={{ padding: 40, marginTop: 60, borderRadius: 20, background: 'var(--ink)', color: '#FBF8F3', textAlign: 'center' }}>
            <h2 className="serif" style={{ fontSize: 40, marginBottom: 20, color: '#FBF8F3' }}>Start Your Tirzepatide Program</h2>
            <p style={{ fontSize: 18, opacity: 0.9, marginBottom: 32, maxWidth: 500, margin: '0 auto 32px' }}>
              From $258/mo. The most effective weight loss medication available. 24-hour approval. 2-day shipping.
            </p>
            <a href={CTA_URL} target="_blank" rel="noopener noreferrer" className="btn btn-lg" style={{ background: '#FBF8F3', color: 'var(--ink)', display: 'inline-flex', justifyContent: 'center', width: '100%', maxWidth: 300 }}>
              See If You Qualify <Icon.Arrow />
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}

export { TirzepatidePage };
