"use client";
import React from 'react';
import { Icon } from './common.jsx';

const AFF_URL = "https://go.telehealthfx.com/nad?aff_sub_1=seo_blog_subcutaneous_nad";

export function BlogNadSubcutaneousInjections() {
  return (
    <section className="section" style={{ minHeight: '60vh', paddingTop: 120 }}>
      <div className="container" style={{ maxWidth: 880 }}>
        
        <div className="eyebrow" style={{ marginBottom: 20 }}>Mitochondrial Bioenergetics & Cellular Longevity</div>
        <h1 className="serif" style={{ fontSize: 46, marginBottom: 24, lineHeight: 1.15, letterSpacing: '-0.02em' }}>
          At-Home Subcutaneous NAD+ Injections: <span style={{ fontStyle: 'italic', color: 'var(--brand)' }}>Clinical Protocol, Bioavailability & IV Comparison</span>
        </h1>

        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 40, paddingBottom: 24, borderBottom: '1px solid var(--line-soft)' }}>
          <div style={{ width: 44, height: 44, borderRadius: '50%', background: 'var(--brand)', overflow: 'hidden' }}>
            <img src="/assets/jm-profile.jpg" alt="Julian Mercer, M.S." style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
          <div>
            <div style={{ fontWeight: 600, fontSize: 15 }}>Julian Mercer, M.S. · Medically Reviewed by Marcus Vance, M.D.</div>
            <div style={{ fontSize: 13, color: 'var(--ink-3)' }}>Mitochondrial Medicine Review · Updated October 2026 · 14 min read</div>
          </div>
        </div>

        {/* Featured Hero Image */}
        <div style={{ position: 'relative', borderRadius: 20, overflow: 'hidden', marginBottom: 40, border: '1px solid var(--line-soft)', boxShadow: '0 12px 36px rgba(0,0,0,0.06)' }}>
          <img 
            src="/assets/nad-subcutaneous-injections-featured.jpg" 
            alt="Amber pharmaceutical glass vial beside sterile clinical micro-syringe resting on dark basalt stone with water droplets" 
            style={{ width: '100%', height: 'auto', display: 'block' }} 
          />
          <div style={{ position: 'absolute', bottom: 12, right: 16, background: 'rgba(0,0,0,0.65)', color: '#fff', fontSize: 11, padding: '4px 10px', borderRadius: 6, backdropFilter: 'blur(4px)' }}>
            Clinical Macro Still-Life · Archival Photographic Standard
          </div>
        </div>

        {/* Direct Clinical Answer Box */}
        <div className="direct-answer-snippet" style={{ background: '#FAF8F5', borderLeft: '4px solid var(--brand)', padding: '24px 28px', borderRadius: '0 12px 12px 0', marginBottom: 48 }}>
          <div style={{ fontWeight: 700, textTransform: 'uppercase', fontSize: 12, letterSpacing: '0.08em', color: 'var(--brand)', marginBottom: 8 }}>
            Direct Clinical Answer
          </div>
          <p style={{ fontSize: 18, lineHeight: 1.65, color: 'var(--ink)', margin: 0, fontWeight: 500 }}>
            Subcutaneous NAD+ (nicotinamide adenine dinucleotide) injections deliver intact coenzyme molecules directly into capillary beds with near 100% systemic bioavailability, completely bypassing the intestinal brush border and hepatic first-pass metabolism that break down oral NAD+ supplements into basic nicotinamide. Compared to $800 in-clinic IV drips requiring 3 to 4 hours in an infusion chair, at-home subcutaneous administration takes under 60 seconds, dramatically reduces the chest tightness and visceral cramping caused by rapid intravenous infusion, and costs a flat $99 to $149 per month.
          </p>
        </div>

        {/* Clinical Comparison Table */}
        <h2 className="serif" style={{ fontSize: 32, marginTop: 40, marginBottom: 20, color: 'var(--ink)' }}>
          Delivery Methods Compared: SubQ Injections vs IV Infusion vs Oral NMN
        </h2>
        <p style={{ fontSize: 18, lineHeight: 1.7, color: 'var(--ink-2)' }}>
          How you administer NAD+ determines whether the coenzyme reaches cellular mitochondria or is degraded by CD38 ectoenzymes:
        </p>

        <div style={{ overflowX: 'auto', margin: '32px 0' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 15, textAlign: 'left' }}>
            <thead>
              <tr style={{ background: '#111827', color: '#fff' }}>
                <th style={{ padding: '14px 16px', border: '1px solid #374151' }}>Administration Metric</th>
                <th style={{ padding: '14px 16px', border: '1px solid #374151', background: 'var(--brand)', color: '#fff' }}>At-Home SubQ Injection</th>
                <th style={{ padding: '14px 16px', border: '1px solid #374151' }}>In-Clinic IV Infusion</th>
                <th style={{ padding: '14px 16px', border: '1px solid #374151' }}>Oral NMN / NR Pills</th>
              </tr>
            </thead>
            <tbody>
              <tr style={{ background: '#FFFFFF' }}>
                <td style={{ padding: '12px 16px', border: '1px solid #E5E7EB', fontWeight: 600 }}>Systemic Bioavailability</td>
                <td style={{ padding: '12px 16px', border: '1px solid #E5E7EB', color: '#059669', fontWeight: 700, background: '#ECFDF5' }}>&gt; 95% (Direct interstitial uptake)</td>
                <td style={{ padding: '12px 16px', border: '1px solid #E5E7EB' }}>100% (Direct venous entry)</td>
                <td style={{ padding: '12px 16px', border: '1px solid #E5E7EB' }}>&lt; 10% (Extensive gut degradation)</td>
              </tr>
              <tr style={{ background: '#F9FAFB' }}>
                <td style={{ padding: '12px 16px', border: '1px solid #E5E7EB', fontWeight: 600 }}>Administration Time</td>
                <td style={{ padding: '12px 16px', border: '1px solid #E5E7EB', color: '#059669', fontWeight: 700, background: '#ECFDF5' }}>60 seconds at home</td>
                <td style={{ padding: '12px 16px', border: '1px solid #E5E7EB' }}>2.5 to 4 hours in clinic chair</td>
                <td style={{ padding: '12px 16px', border: '1px solid #E5E7EB' }}>Instant (Oral swallowing)</td>
              </tr>
              <tr style={{ background: '#FFFFFF' }}>
                <td style={{ padding: '12px 16px', border: '1px solid #E5E7EB', fontWeight: 600 }}>Infusion Side Effects</td>
                <td style={{ padding: '12px 16px', border: '1px solid #E5E7EB', color: '#059669', fontWeight: 700, background: '#ECFDF5' }}>Minimal (Slow, steady capillary diffusion)</td>
                <td style={{ padding: '12px 16px', border: '1px solid #E5E7EB' }}>Severe chest pressure, nausea, cramping</td>
                <td style={{ padding: '12px 16px', border: '1px solid #E5E7EB' }}>Occasional mild GI upset</td>
              </tr>
              <tr style={{ background: '#F9FAFB' }}>
                <td style={{ padding: '12px 16px', border: '1px solid #E5E7EB', fontWeight: 600 }}>Cost Per Treatment</td>
                <td style={{ padding: '12px 16px', border: '1px solid #E5E7EB', color: '#059669', fontWeight: 800, background: '#ECFDF5' }}>$99 / month (10+ full doses)</td>
                <td style={{ padding: '12px 16px', border: '1px solid #E5E7EB' }}>$600 – $1,200 per single IV bag</td>
                <td style={{ padding: '12px 16px', border: '1px solid #E5E7EB' }}>$50 – $90 / month bottle</td>
              </tr>
              <tr style={{ background: '#FFFFFF' }}>
                <td style={{ padding: '12px 16px', border: '1px solid #E5E7EB', fontWeight: 600 }}>Clinical Efficacy</td>
                <td style={{ padding: '12px 16px', border: '1px solid #E5E7EB', color: '#059669', fontWeight: 700, background: '#ECFDF5' }}>Rapid cellular ATP & SIRT1 activation</td>
                <td style={{ padding: '12px 16px', border: '1px solid #E5E7EB' }}>Rapid but high urinary excretion</td>
                <td style={{ padding: '12px 16px', border: '1px solid #E5E7EB' }}>Inconsistent; mostly converted to NAM</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Commercial Bridge CTA */}
        <div className="card" style={{ padding: '36px 32px', margin: '48px 0', background: '#FFFDF9', borderColor: 'var(--brand)', borderRadius: 16, textAlign: 'center' }}>
          <div style={{ display: 'inline-flex', padding: '6px 16px', background: 'var(--brand-soft)', color: 'var(--brand)', borderRadius: 20, fontWeight: 700, fontSize: 12, textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 16 }}>
            Cellular Energy & Anti-Aging Architecture
          </div>
          <h3 className="serif" style={{ fontSize: 32, marginBottom: 16, color: 'var(--ink)' }}>
            Pure Compounded NAD+ Injections for $99/Month
          </h3>
          <p style={{ fontSize: 17, lineHeight: 1.6, color: 'var(--ink-2)', maxWidth: 640, margin: '0 auto 24px' }}>
            Bypass $800 medical spa IV markups. Get 100% pharmaceutical-grade lyophilized NAD+ with medical oversight and painless micro-syringes shipped overnight.
          </p>
          <a href={AFF_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-lg" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '14px 28px', fontSize: 16 }}>
            Order Doctor-Prescribed NAD+ Online <Icon.Arrow />
          </a>
        </div>

        {/* Deep Clinical Content */}
        <div className="blog-content" style={{ fontSize: 18, lineHeight: 1.75, color: 'var(--ink-2)' }}>
          <h2 className="serif" style={{ fontSize: 30, marginTop: 44, marginBottom: 18, color: 'var(--ink)' }}>
            1. Why Cellular NAD+ Declines by 50% by Age 40
          </h2>
          <p>
            Nicotinamide adenine dinucleotide (NAD+) is the central coenzyme for life. It operates as the indispensable electron carrier in the mitochondrial Krebs cycle, driving oxidative phosphorylation to generate adenosine triphosphate (ATP)—the fundamental energy currency of human cells.
          </p>
          <p>
            Simultaneously, NAD+ serves as the consumable substrate for two critical longevity enzyme families:
          </p>
          <ul>
            <li><strong>Sirtuins (SIRT1–SIRT7):</strong> The master regulators of mitochondrial biogenesis, epigenetic maintenance, and cellular stress resistance. Without abundant NAD+, sirtuins remain dormant.</li>
            <li><strong>PARPs (Poly-ADP-ribose polymerases):</strong> The cellular emergency repair team responsible for scanning and mending double-strand DNA damage caused by UV radiation, oxidative stress, and environmental toxins.</li>
          </ul>
          <p>
            As we age, chronic low-grade inflammation upregulates CD38—a membrane-bound ectoenzyme that relentlessly hydrolyzes and destroys circulating NAD+. By age 50, average tissue NAD+ levels drop by more than half, contributing to the hallmark symptoms of aging: brain fog, chronic mitochondrial fatigue, slowed exercise recovery, and metabolic sluggishness.
          </p>

          <h2 className="serif" style={{ fontSize: 30, marginTop: 44, marginBottom: 18, color: 'var(--ink)' }}>
            2. At-Home Subcutaneous Injection Protocol
          </h2>
          <p>
            Subcutaneous administration utilizes ultra-fine 31-gauge insulin syringes injected into the subcutaneous adipose tissue of the lower abdomen or upper outer thigh:
          </p>

          <div style={{ overflowX: 'auto', margin: '28px 0' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 15, textAlign: 'left' }}>
              <thead>
                <tr style={{ background: '#111827', color: '#fff' }}>
                  <th style={{ padding: '12px 16px', border: '1px solid #374151' }}>Protocol Level</th>
                  <th style={{ padding: '12px 16px', border: '1px solid #374151' }}>Dose & Volume</th>
                  <th style={{ padding: '12px 16px', border: '1px solid #374151' }}>Frequency</th>
                  <th style={{ padding: '12px 16px', border: '1px solid #374151' }}>Clinical Focus</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ background: '#FFFFFF' }}>
                  <td style={{ padding: '12px 16px', border: '1px solid #E5E7EB', fontWeight: 600 }}>Baseline Maintenance</td>
                  <td style={{ padding: '12px 16px', border: '1px solid #E5E7EB' }}>50 mg (0.25 mL)</td>
                  <td style={{ padding: '12px 16px', border: '1px solid #E5E7EB' }}>2x to 3x per week (Morning)</td>
                  <td style={{ padding: '12px 16px', border: '1px solid #E5E7EB' }}>Steady mental clarity, daily focus, and sustained vitality.</td>
                </tr>
                <tr style={{ background: '#F9FAFB' }}>
                  <td style={{ padding: '12px 16px', border: '1px solid #E5E7EB', fontWeight: 600 }}>Active Longevity / Recovery</td>
                  <td style={{ padding: '12px 16px', border: '1px solid #E5E7EB' }}>100 mg (0.50 mL)</td>
                  <td style={{ padding: '12px 16px', border: '1px solid #E5E7EB' }}>3x to 4x per week</td>
                  <td style={{ padding: '12px 16px', border: '1px solid #E5E7EB' }}>Mitochondrial repair, workout stamina, and sleep architecture.</td>
                </tr>
                <tr style={{ background: '#FFFFFF' }}>
                  <td style={{ padding: '12px 16px', border: '1px solid #E5E7EB', fontWeight: 600 }}>Intensive Restorative Burst</td>
                  <td style={{ padding: '12px 16px', border: '1px solid #E5E7EB' }}>100 – 150 mg</td>
                  <td style={{ padding: '12px 16px', border: '1px solid #E5E7EB' }}>Daily for 10–14 days</td>
                  <td style={{ padding: '12px 16px', border: '1px solid #E5E7EB' }}>Post-illness rehabilitation, neuro-regeneration, burnout recovery.</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="serif" style={{ fontSize: 30, marginTop: 44, marginBottom: 18, color: 'var(--ink)' }}>
            3. Injection Technique & Minimizing Local Sensation
          </h2>
          <p>
            Because pure NAD+ solution has an acidic pH (typically around 3.5 to 4.2), rapid injection can produce a temporary localized stinging sensation or mild dull ache lasting 2 to 3 minutes. Follow these clinical pearls to ensure complete comfort:
          </p>
          <ol>
            <li><strong>Inject at Room Temperature:</strong> Cold liquid straight from the refrigerator accentuates vasoconstriction. Let the drawn syringe sit at room temperature for 10 minutes prior to injection.</li>
            <li><strong>Slow Injection Speed:</strong> Depress the plunger slowly over 15 to 20 seconds rather than rapidly pushing the solution.</li>
            <li><strong>Pinch Adipose Tissue:</strong> Pinch 1 to 2 inches of clean abdominal skin, insert the needle at a 45-to-90 degree angle, release the pinch, and administer.</li>
          </ol>

          {/* Related Articles & Location Mesh */}
          <div style={{ background: '#F9FAFB', border: '1px solid #E5E7EB', borderRadius: 16, padding: '24px 28px', margin: '40px 0' }}>
            <h4 style={{ margin: '0 0 12px', fontSize: 16, textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--ink)' }}>Related Longevity Guides & Telehealth Clinics</h4>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 12, fontSize: 14 }}>
              <a href="/medications/nad/" style={{ color: 'var(--brand)', textDecoration: 'underline' }}>NAD+ Medication Overview</a>
              <a href="/medications/sermorelin/" style={{ color: 'var(--brand)', textDecoration: 'underline' }}>Sermorelin Growth Secretagogue</a>
              <a href="/locations/california/los-angeles/" style={{ color: 'var(--brand)', textDecoration: 'underline' }}>Los Angeles, CA Telehealth Clinic</a>
              <a href="/locations/new-york/new-york/" style={{ color: 'var(--brand)', textDecoration: 'underline' }}>New York, NY Telehealth Clinic</a>
            </div>
          </div>

          {/* Bottom Conversion Card */}
          <div className="card" style={{ padding: '40px 36px', margin: '48px 0', background: '#111827', color: '#fff', borderRadius: 20, textAlign: 'center' }}>
            <h3 className="serif" style={{ fontSize: 32, marginBottom: 16, color: '#fff' }}>
              Restore Your Cellular Engine with Pure NAD+
            </h3>
            <p style={{ fontSize: 16, lineHeight: 1.6, color: '#D1D5DB', maxWidth: 620, margin: '0 auto 24px' }}>
              Prescribed by US-licensed physicians. High-purity compounded NAD+ with all necessary syringes, alcohol pads, and instructions included.
            </p>
            <a href={AFF_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-lg" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '14px 28px', fontSize: 16 }}>
              Order NAD+ Injections ($99/Month Flat) <Icon.Arrow />
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}
