"use client";
import React from 'react';
import { Icon } from './common.jsx';

const CTA_URL = "https://go.telehealthfx.com/start";

function SermorelinPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    "name": "Sermorelin Therapy Program | Telehealth FX",
    "about": { "@type": "Drug", "name": "Sermorelin", "nonProprietaryName": "Sermorelin Acetate", "drugClass": "Growth Hormone-Releasing Hormone (GHRH) analog", "mechanismOfAction": "Stimulates the pituitary gland to naturally produce and release growth hormone", "administrationRoute": "Subcutaneous injection" },
    "publisher": { "@type": "MedicalOrganization", "name": "Telehealth FX" }
  };

  return (
    <section className="section" style={{ minHeight: '60vh', paddingTop: 120 }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <div className="container" style={{ maxWidth: 840 }}>

        <div style={{ textAlign: 'center', marginBottom: 80 }}>
          <div className="pill" style={{ marginBottom: 20, display: 'inline-flex', background: 'rgba(199, 125, 92, 0.12)', borderColor: 'rgba(199, 125, 92, 0.3)', color: 'var(--accent)' }}>
            <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--accent)' }}/> Recovery & Anti-Aging
          </div>
          <h1 className="serif" style={{ fontSize: 72, marginBottom: 28, lineHeight: 0.95 }}>
            Sermorelin<br/><span style={{ fontStyle: 'italic', color: 'var(--brand)' }}>from $199/mo.</span>
          </h1>
          <p style={{ fontSize: 20, color: 'var(--ink-2)', maxWidth: 600, margin: '0 auto 40px', lineHeight: 1.6 }}>
            Clinician-prescribed peptide therapy to support natural growth hormone production, deep sleep, muscle recovery, and anti-aging. A safer, legal alternative to synthetic HGH.
          </p>
          <a href={CTA_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-lg" style={{ display: 'inline-flex' }}>
            See If You Qualify <Icon.Arrow />
          </a>
        </div>

        <div className="blog-content" style={{ fontSize: 18, lineHeight: 1.7, color: 'var(--ink-2)' }}>

          <h2 className="serif" style={{ fontSize: 40, marginTop: 0, marginBottom: 24, color: 'var(--ink)' }}>What Is Sermorelin?</h2>
          <p><strong>Sermorelin acetate</strong> is a synthetic analog of Growth Hormone-Releasing Hormone (GHRH) — the 29-amino-acid active fragment of the naturally occurring 44-amino-acid GHRH produced by your hypothalamus. Rather than injecting synthetic growth hormone directly, Sermorelin <em>stimulates your pituitary gland</em> to produce and release its own growth hormone (GH) in natural, pulsatile patterns.</p>
          <p>This distinction is critical: synthetic HGH floods the body with supraphysiological levels that can cause side effects and suppress natural production. Sermorelin works <em>with</em> your body's feedback loops, maintaining physiological GH levels while restoring the youthful output that declines with age.</p>
          <p>Growth hormone production peaks in your 20s and declines approximately <strong>14% per decade</strong> after age 30. By age 60, most adults produce less than half the GH they did in their youth — contributing to muscle loss, fat accumulation, poor sleep, slower recovery, thinning skin, and reduced vitality.</p>

          <h2 className="serif" style={{ fontSize: 40, marginTop: 64, marginBottom: 24, color: 'var(--ink)' }}>How Sermorelin Works</h2>
          <ul style={{ marginBottom: 24, paddingLeft: 20 }}>
            <li style={{ marginBottom: 12 }}><strong>Pituitary Stimulation:</strong> Binds to GHRH receptors on the anterior pituitary, triggering natural GH release in physiological pulses (especially during deep sleep).</li>
            <li style={{ marginBottom: 12 }}><strong>IGF-1 Elevation:</strong> Increased GH production stimulates the liver to produce IGF-1 (Insulin-like Growth Factor 1), which mediates most of GH's anabolic and regenerative effects throughout the body.</li>
            <li style={{ marginBottom: 12 }}><strong>Sleep Architecture:</strong> GH is released primarily during Stage 3 (deep/slow-wave) sleep. Sermorelin users consistently report improved sleep depth and quality, creating a virtuous cycle of better recovery.</li>
            <li style={{ marginBottom: 12 }}><strong>Body Composition:</strong> Supports lean muscle preservation, fat metabolism (particularly visceral fat), and improved exercise recovery.</li>
            <li style={{ marginBottom: 12 }}><strong>Tissue Repair:</strong> Enhanced collagen synthesis supports skin elasticity, joint health, and wound healing.</li>
          </ul>

          <div className="card" style={{ padding: 40, margin: '48px 0', textAlign: 'center', background: '#FFFDF9', borderColor: 'var(--brand)' }}>
            <h3 className="serif" style={{ fontSize: 28, marginBottom: 16, color: 'var(--ink)' }}>Restore Your Natural Growth Hormone</h3>
            <p style={{ marginBottom: 24, fontSize: 16 }}>Sermorelin from $199/mo. Works with your body's natural GH production — not against it.</p>
            <a href={CTA_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-lg" style={{ display: 'inline-flex', justifyContent: 'center' }}>
              Start Your Assessment <Icon.Arrow />
            </a>
          </div>

          <h2 className="serif" style={{ fontSize: 40, marginTop: 64, marginBottom: 24, color: 'var(--ink)' }}>Sermorelin vs. Synthetic HGH</h2>
          <div style={{ margin: '32px 0', overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
              <thead>
                <tr style={{ background: 'var(--ink)', color: '#fff' }}>
                  <th style={{ padding: '16px', fontWeight: 500, fontSize: 14 }}>Factor</th>
                  <th style={{ padding: '16px', fontWeight: 500, fontSize: 14 }}>Sermorelin</th>
                  <th style={{ padding: '16px', fontWeight: 500, fontSize: 14 }}>Synthetic HGH</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Mechanism', 'Stimulates natural GH release', 'Directly injects synthetic GH'],
                  ['GH Pattern', 'Natural pulsatile release', 'Constant supraphysiological levels'],
                  ['Pituitary Health', 'Supports natural function', 'Suppresses natural production'],
                  ['Side Effect Risk', 'Low — works within feedback loops', 'Higher — joint pain, edema, insulin resistance'],
                  ['Legal Status', 'Legal with prescription', 'Heavily restricted; often illegal'],
                  ['Cost', 'From $199/mo', '$1,000–3,000+/mo'],
                ].map(([factor, serm, hgh], i) => (
                  <tr key={i} style={{ borderBottom: '1px solid var(--line-soft)', background: i % 2 ? 'transparent' : '#FAFAFA' }}>
                    <td style={{ padding: '16px', fontWeight: 500 }}>{factor}</td>
                    <td style={{ padding: '16px', color: 'var(--brand)' }}>{serm}</td>
                    <td style={{ padding: '16px' }}>{hgh}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 className="serif" style={{ fontSize: 40, marginTop: 64, marginBottom: 24, color: 'var(--ink)' }}>Who Is a Good Candidate?</h2>
          <ul style={{ marginBottom: 24, paddingLeft: 20 }}>
            <li style={{ marginBottom: 8 }}>Adults over 30 experiencing declining energy, poor sleep, or slower recovery</li>
            <li style={{ marginBottom: 8 }}>Athletes and fitness enthusiasts seeking enhanced muscle recovery and body composition</li>
            <li style={{ marginBottom: 8 }}>Anyone interested in proactive anti-aging and longevity optimization</li>
            <li style={{ marginBottom: 8 }}>Individuals with clinically low IGF-1 levels</li>
            <li style={{ marginBottom: 8 }}>Those seeking a legal, safe alternative to synthetic HGH</li>
          </ul>

          <h2 className="serif" style={{ fontSize: 40, marginTop: 64, marginBottom: 24, color: 'var(--ink)' }}>Expected Timeline of Results</h2>
          <div style={{ display: 'grid', gridTemplateColumns: '48px 1fr', gap: '20px 16px', margin: '32px 0' }}>
            {[
              { step: 'Week 2–4', title: 'Improved Sleep Quality', desc: 'Most patients notice deeper, more restorative sleep within the first few weeks — the earliest and most consistent benefit.' },
              { step: 'Month 2–3', title: 'Energy & Recovery', desc: 'Improved daytime energy, faster post-workout recovery, and reduced muscle soreness become noticeable.' },
              { step: 'Month 3–4', title: 'Body Composition', desc: 'Gradual improvements in lean muscle mass and reduction in stubborn body fat, particularly around the midsection.' },
              { step: 'Month 6+', title: 'Full Optimization', desc: 'Cumulative benefits including improved skin quality, cognitive clarity, immune function, and overall vitality.' },
            ].map((s, i) => (
              <React.Fragment key={i}>
                <div style={{ width: 48, height: 48, borderRadius: 12, background: 'var(--brand-soft)', color: 'var(--brand)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 600, fontSize: 11, fontFamily: 'var(--sans)', flexShrink: 0, textAlign: 'center', lineHeight: 1.1 }}>{s.step}</div>
                <div style={{ paddingTop: 4 }}>
                  <h3 style={{ fontSize: 20, marginBottom: 8, color: 'var(--ink)' }}>{s.title}</h3>
                  <p style={{ margin: 0, fontSize: 16, color: 'var(--ink-2)' }}>{s.desc}</p>
                </div>
              </React.Fragment>
            ))}
          </div>

          <div style={{ padding: 40, marginTop: 60, borderRadius: 20, background: 'var(--ink)', color: '#FBF8F3', textAlign: 'center' }}>
            <h2 className="serif" style={{ fontSize: 40, marginBottom: 20, color: '#FBF8F3' }}>Start Your Sermorelin Protocol</h2>
            <p style={{ fontSize: 18, opacity: 0.9, marginBottom: 32, maxWidth: 500, margin: '0 auto 32px' }}>
              From $199/mo. Restore natural growth hormone production. Better sleep. Faster recovery. Sustainable vitality.
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

export { SermorelinPage };
