"use client";
import React from 'react';
import Image from 'next/image';
import { Icon } from './common.jsx';

const START_URL = "https://go.telehealthfx.com/start";

const linkStyle = { color: 'var(--brand)', fontWeight: 500 };

/* ─── CTA Block ─── */
function CtaBlock({ headline, body, buttonText, variant }) {
  if (variant === 'dark') {
    return (
      <div style={{
        padding: '48px 40px', marginTop: 56, marginBottom: 56, borderRadius: 20,
        background: 'var(--ink)', color: '#FBF8F3', textAlign: 'center',
      }}>
        <h3 className="serif" style={{ fontSize: 36, marginBottom: 16, color: '#FBF8F3', lineHeight: 1.1 }}>{headline}</h3>
        <p style={{ fontSize: 16, opacity: 0.85, marginBottom: 28, maxWidth: 520, margin: '0 auto 28px' }}>{body}</p>
        <a href={START_URL} target="_blank" rel="noopener noreferrer" className="btn btn-lg" style={{
          background: '#FBF8F3', color: 'var(--ink)', display: 'inline-flex', justifyContent: 'center',
        }}>{buttonText} <Icon.Arrow /></a>
      </div>
    );
  }
  if (variant === 'brand') {
    return (
      <div className="card" style={{
        padding: '48px 40px', margin: '56px 0', textAlign: 'center',
        background: 'rgba(46,74,59,0.04)', borderColor: 'rgba(46,74,59,0.15)',
      }}>
        <h3 className="serif" style={{ fontSize: 32, marginBottom: 16, color: 'var(--ink)', lineHeight: 1.1 }}>{headline}</h3>
        <p style={{ marginBottom: 28, fontSize: 16, color: 'var(--ink-2)', maxWidth: 520, margin: '0 auto 28px' }}>{body}</p>
        <a href={START_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-lg" style={{
          display: 'inline-flex', justifyContent: 'center',
        }}>{buttonText} <Icon.Arrow /></a>
        <p style={{ marginTop: 16, fontSize: 13, color: 'var(--ink-3)' }}>No obligation — you only move forward if a provider determines you{"'"}re a candidate.</p>
      </div>
    );
  }
  return (
    <div className="card" style={{
      padding: '40px', margin: '56px 0', textAlign: 'center',
      background: '#FFFDF9', borderColor: 'var(--accent-soft)',
    }}>
      <h3 className="serif" style={{ fontSize: 28, marginBottom: 16, color: 'var(--ink)', lineHeight: 1.1 }}>{headline}</h3>
      <p style={{ marginBottom: 24, fontSize: 16, color: 'var(--ink-2)' }}>{body}</p>
      <a href={START_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-lg" style={{
        display: 'inline-flex', justifyContent: 'center',
      }}>{buttonText} <Icon.Arrow /></a>
    </div>
  );
}

function SectionImage({ src, alt }) {
  return (
    <Image src={src} alt={alt} width={1024} height={1024}
      style={{ width: '100%', borderRadius: 16, marginBottom: 40, marginTop: 8, border: '1px solid var(--line-soft)', height: 'auto' }}
      priority={false} />
  );
}

function FaqItem({ question, children }) {
  return (
    <div style={{ paddingBottom: 28, marginBottom: 28, borderBottom: '1px solid var(--line-soft)' }}>
      <h4 style={{ fontSize: 19, fontWeight: 600, marginBottom: 10, color: 'var(--ink)', lineHeight: 1.35 }}>{question}</h4>
      <p style={{ marginBottom: 0, color: 'var(--ink-2)' }}>{children}</p>
    </div>
  );
}


export function BlogShortageTracker() {
  return (
    <>
      <section className="section" style={{ minHeight: '60vh', paddingTop: 120 }}>
        <div className="container" style={{ maxWidth: 800 }}>

          {/* ─── Eyebrow + Title ─── */}
          <div className="eyebrow" style={{ marginBottom: 20 }}>Shortage & Compounding Tracker</div>
          <h1 className="serif" style={{ fontSize: 52, marginBottom: 24, lineHeight: 1.08 }}>
            GLP-1 Shortage & Compounding Ban Tracker: <span style={{ fontStyle: 'italic', color: 'var(--brand)' }}>Current Status (2026)</span>
          </h1>

          {/* ─── Byline ─── */}
          <div style={{
            display: 'flex', alignItems: 'center', gap: 12,
            marginBottom: 48, paddingBottom: 24, borderBottom: '1px solid var(--line-soft)',
          }}>
            <div style={{ width: 40, height: 40, borderRadius: '50%', background: 'var(--brand)' }}>
              <Image src="/assets/jm-profile.jpg" alt="Julian Mercer" width={1024} height={1024}
                style={{ width: '100%', height: 'auto', objectFit: 'cover', borderRadius: '50%' }} priority={true} />
            </div>
            <div>
              <div style={{ fontWeight: 500, fontSize: 14 }}>
                <a href="/about" style={{ color: 'var(--ink)', textDecoration: 'none' }}>Julian Mercer, M.S.</a>
              </div>
              <div style={{ fontSize: 13, color: 'var(--ink-3)' }}>Lead Bio-Systems Analyst · Updated June 2026 · 14 min read</div>
            </div>
          </div>

          {/* ─── Article Body ─── */}
          <div className="blog-content" style={{ fontSize: 18, lineHeight: 1.7, color: 'var(--ink-2)' }}>

            {/* Featured Image */}
            <Image src="/assets/shortage-tracker-hero.png" alt="Pharmaceutical warehouse shelves stocked with GLP-1 medication boxes"
              width={1024} height={1024}
              style={{ width: '100%', borderRadius: 16, marginBottom: 40, border: '1px solid var(--line-soft)', height: 'auto' }}
              priority={true} />

            {/* Intro */}
            <p>If you{"'"}ve been trying to start or stay on a GLP-1 medication like <a href="/blog/ozempic-vs-wegovy-2026" style={linkStyle}>Ozempic, Wegovy</a>, <a href="/blog/semaglutide-vs-tirzepatide-decision-2026" style={linkStyle}>Mounjaro, or Zepbound</a>, the rules changed in a way that surprised a lot of people. The years-long shortages that defined 2023 and 2024 are over — and that{"'"}s precisely why access to cheaper compounded versions tightened in 2025. This page tracks where things actually stand right now, in plain language.</p>


            {/* ─── Short Answer ─── */}
            <h2 className="serif" style={{ fontSize: 32, marginTop: 56, marginBottom: 24, color: 'var(--ink)' }}>The short answer</h2>
            <p>As of mid-2026, none of the major GLP-1 medications are on the FDA{"'"}s drug shortage list. <a href="/medications/semaglutide" style={linkStyle}>Semaglutide</a> (the active ingredient in Ozempic and Wegovy) and <a href="/medications/tirzepatide" style={linkStyle}>tirzepatide</a> (Mounjaro and Zepbound) are both listed as available. Because those shortages have resolved, the large-scale compounding that filled the gap during the shortage is no longer permitted. <a href="/blog/compounded-semaglutide-vs-wegovy-2026" style={linkStyle}>Compounded GLP-1 medications</a> haven{"'"}t vanished entirely, but the legal basis for mass-producing them has, and that has reshaped the entire telehealth weight-loss market.</p>


            {/* ─── CTA 1: Top ─── */}
            <CtaBlock
              variant="default"
              headline="Confused about what's still available? Find out in 2 minutes."
              body="A licensed provider reviews your health history and determines which GLP-1 treatment options are appropriate and available for you in 2026."
              buttonText="Check Your Eligibility"
            />


            {/* ─── Status Table ─── */}
            <h2 className="serif" style={{ fontSize: 32, marginTop: 56, marginBottom: 24, color: 'var(--ink)' }}>Current status at a glance</h2>
            <div style={{ overflowX: 'auto', margin: '24px 0', borderRadius: 12, border: '1px solid var(--line-soft)' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 15, background: 'var(--bg-card)' }}>
                <thead>
                  <tr style={{ borderBottom: '2px solid var(--ink)' }}>
                    <th style={{ textAlign: 'left', padding: '14px 20px', fontWeight: 600, fontSize: 13, letterSpacing: '0.04em', textTransform: 'uppercase', color: 'var(--ink-3)' }}>Medication</th>
                    <th style={{ textAlign: 'left', padding: '14px 20px', fontWeight: 600, fontSize: 13, letterSpacing: '0.04em', textTransform: 'uppercase', color: 'var(--ink-3)' }}>Ingredient</th>
                    <th style={{ textAlign: 'left', padding: '14px 20px', fontWeight: 600, fontSize: 13, letterSpacing: '0.04em', textTransform: 'uppercase', color: 'var(--ink-3)' }}>FDA shortage status</th>
                    <th style={{ textAlign: 'left', padding: '14px 20px', fontWeight: 600, fontSize: 13, letterSpacing: '0.04em', textTransform: 'uppercase', color: 'var(--ink-3)' }}>What it means</th>
                  </tr>
                </thead>
                <tbody>
                  <tr style={{ borderBottom: '1px solid var(--line-soft)' }}>
                    <td style={{ padding: '14px 20px', fontWeight: 500 }}>Ozempic / Wegovy</td>
                    <td style={{ padding: '14px 20px' }}>Semaglutide</td>
                    <td style={{ padding: '14px 20px', color: 'var(--brand)', fontWeight: 600 }}>✓ Resolved</td>
                    <td style={{ padding: '14px 20px' }}>Brand supply stable; routine mass-compounding no longer allowed</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid var(--line-soft)' }}>
                    <td style={{ padding: '14px 20px', fontWeight: 500 }}>Mounjaro / Zepbound</td>
                    <td style={{ padding: '14px 20px' }}>Tirzepatide</td>
                    <td style={{ padding: '14px 20px', color: 'var(--brand)', fontWeight: 600 }}>✓ Resolved</td>
                    <td style={{ padding: '14px 20px' }}>Brand supply stable; routine mass-compounding no longer allowed</td>
                  </tr>
                  <tr>
                    <td style={{ padding: '14px 20px', fontWeight: 500 }}>Oral semaglutide tablets</td>
                    <td style={{ padding: '14px 20px' }}>Semaglutide</td>
                    <td style={{ padding: '14px 20px', color: 'var(--ink-3)', fontWeight: 500 }}>⟳ Transitioning</td>
                    <td style={{ padding: '14px 20px' }}>Manufacturing/product change, not a supply shortage</td>
                  </tr>
                </tbody>
              </table>
            </div>


            {/* ─── Still in shortage? ─── */}
            <h2 className="serif" style={{ fontSize: 32, marginTop: 56, marginBottom: 24, color: 'var(--ink)' }}>Are GLP-1 medications still in shortage in 2026?</h2>
            <SectionImage src="/assets/shortage-fda-status.png" alt="Professional reviewing FDA drug shortage documentation" />
            <p>No. After more than two years of intermittent shortages driven by overwhelming demand, the FDA confirmed that supply had caught up. Tirzepatide came off the shortage list first, in late 2024. Injectable semaglutide followed in early 2025. The manufacturers expanded production capacity significantly, and the FDA{"'"}s drug shortage database — the official source for this — now lists both ingredients as available rather than in shortage.</p>
            <p>That doesn{"'"}t mean every pharmacy has every dose on the shelf on any given day. Local, temporary stock gaps still happen, especially when a new dose strength rolls out. But a temporary gap at one pharmacy is very different from a national shortage, and it does not bring back the special rules that applied during the official shortage.</p>


            {/* ─── Why compounding ban ─── */}
            <h2 className="serif" style={{ fontSize: 32, marginTop: 56, marginBottom: 24, color: 'var(--ink)' }}>Why the end of the shortage triggered a "compounding ban"</h2>
            <p>This is the part that confuses most people, so it{"'"}s worth slowing down.</p>
            <p>During an official FDA shortage, compounding pharmacies are allowed to make their own versions of a drug that{"'"}s in short supply. That exemption is what made <a href="/blog/cheapest-compounded-semaglutide-2026" style={linkStyle}>low-cost compounded semaglutide</a> and <a href="/blog/compounded-tirzepatide-online-2026" style={linkStyle}>tirzepatide</a> widely available through telehealth platforms — often for a fraction of the <a href="/blog/semaglutide-real-cost-2026" style={linkStyle}>brand-name price</a>. It was legal specifically because the brand-name product was hard to get.</p>
            <p>When a drug comes off the shortage list, that exemption goes away. The FDA gave compounders a wind-down period in 2025 to stop producing the shortage-era versions, with separate deadlines for smaller state-licensed (503A) pharmacies and larger outsourcing (503B) facilities. Once those deadlines passed, routinely compounding semaglutide or tirzepatide simply to offer a cheaper alternative was no longer permitted.</p>
            <p>So there was never a single dramatic "ban" announcement. What happened was quieter and more consequential: the shortages ended, the exemption expired, and the cheap-compounded-GLP-1 business model that had grown up around the shortage lost its legal footing almost overnight. For a deeper look, see our <a href="/blog/fda-compounding-ban" style={linkStyle}>full FDA compounding ban breakdown</a>.</p>


            {/* ─── Is compounded still available? ─── */}
            <h2 className="serif" style={{ fontSize: 32, marginTop: 56, marginBottom: 24, color: 'var(--ink)' }}>Is compounded GLP-1 still available at all?</h2>
            <SectionImage src="/assets/shortage-compounding.png" alt="Compounding pharmacy technician preparing medication in a sterile lab" />
            <p>In limited circumstances, yes — but not the way it was during the shortage.</p>
            <p>Traditional compounding still exists for situations where a licensed prescriber determines that a specific patient needs something the commercially available, FDA-approved product can{"'"}t provide. A documented clinical need — for example, an ingredient the patient can{"'"}t tolerate in the standard product — can justify a personalized compounded formulation for that individual. That is a narrow, prescriber-driven lane, not a path to mass-market discount injections.</p>
            <p>What is no longer permitted is producing essentially identical copies of an available FDA-approved drug at scale just because they{"'"}re cheaper. If a telehealth offer is still marketing bulk compounded semaglutide or tirzepatide as a routine budget alternative, that{"'"}s worth <a href="/blog/compounded-semaglutide-red-flags-2026" style={linkStyle}>scrutinizing carefully</a>.</p>

            <div style={{
              background: 'rgba(199,125,92,0.08)', padding: '20px 24px', borderRadius: 12,
              borderLeft: '4px solid var(--accent)', margin: '28px 0',
            }}>
              <div style={{ fontWeight: 600, fontSize: 15, color: 'var(--ink)', marginBottom: 6 }}>⚠️ Important</div>
              <div style={{ fontSize: 15, color: 'var(--ink-2)', lineHeight: 1.6 }}>
                Compounded medications are not FDA-approved. The FDA does not review compounded drugs for safety, effectiveness, or quality, even when they contain the same active ingredient as an approved product. Read more about <a href="/blog/compounded-semaglutide-safety-fda-2026" style={linkStyle}>compounded semaglutide safety</a>.
              </div>
            </div>


            {/* ─── CTA 2: Middle ─── */}
            <CtaBlock
              variant="brand"
              headline="Not sure what's available to you?"
              body="A licensed provider can review your health history and tell you exactly which GLP-1 options — brand-name or otherwise — are appropriate and accessible in 2026."
              buttonText="Start Your Free Evaluation"
            />


            {/* ─── Is Hims shutting down? ─── */}
            <h2 className="serif" style={{ fontSize: 32, marginTop: 56, marginBottom: 24, color: 'var(--ink)' }}>Is Hims shutting down in 2026?</h2>
            <p>No — Hims & Hers, the telehealth company, is not shutting down. This search comes up a lot because the headlines around it were genuinely confusing.</p>
            <p>What actually happened is tied directly to everything above. After the semaglutide shortage resolved in 2025, telehealth companies that had built large <a href="/blog/compounded-semaglutide-after-hims-ro-2026" style={linkStyle}>compounded-GLP-1 businesses had to change course</a>. Novo Nordisk, the maker of Wegovy and Ozempic, publicly ended a short-lived partnership with Hims in 2025 over disagreements about the sale of compounded semaglutide. The result was a major shift in what these platforms could offer — a curtailing of compounded products, not a company shutdown. For a side-by-side comparison, see our <a href="/blog/hims-vs-ro-vs-telehealthfx-2026" style={linkStyle}>Hims vs. Ro vs. Telehealth FX comparison</a>.</p>
            <p>If you previously got compounded semaglutide through a telehealth service and suddenly couldn{"'"}t, this is almost always why.</p>


            {/* ─── What this means for you ─── */}
            <h2 className="serif" style={{ fontSize: 32, marginTop: 56, marginBottom: 24, color: 'var(--ink)' }}>What this means if you{"'"}re trying to start or stay on a GLP-1</h2>
            <SectionImage src="/assets/shortage-options.png" alt="Auto-injector pen next to a prescription pad and telehealth consultation on a smartphone" />
            <p>A few practical takeaways:</p>
            <ul style={{ paddingLeft: 24, marginBottom: 24 }}>
              <li style={{ marginBottom: 14 }}>The brand-name medications — <a href="/blog/ozempic-vs-wegovy-2026" style={linkStyle}>Ozempic, Wegovy</a>, Mounjaro, Zepbound — are the stable, FDA-approved options now that supply has recovered. Manufacturers also run their own savings programs and direct-purchase options that have made <a href="/blog/glp-1-cost-without-insurance-2026" style={linkStyle}>cash prices more competitive</a> than they were at the peak of the shortage.</li>
              <li style={{ marginBottom: 14 }}>If cost is your main concern, the conversation has shifted from "find compounded" to "find the most affordable route to an approved product, and <a href="/wegovy-eligibility" style={linkStyle}>confirm your eligibility</a>." Whether a brand-name GLP-1, or in specific cases a legitimately compounded formulation, is appropriate for you is a clinical decision a licensed provider makes based on your health history.</li>
              <li style={{ marginBottom: 14 }}>And be cautious with any offer that sounds like the shortage never ended. Deeply discounted "compounded GLP-1" marketed as a routine alternative is exactly the kind of thing the 2025 rule changes were meant to address. Know the <a href="/blog/compounded-semaglutide-red-flags-2026" style={linkStyle}>red flags</a>.</li>
            </ul>
            <p>Looking at alternatives beyond injectables? Compare <a href="/blog/oral-vs-injectable-semaglutide-2026" style={linkStyle}>oral vs. injectable semaglutide</a> or see how <a href="/blog/semaglutide-vs-tirzepatide-decision-2026" style={linkStyle}>semaglutide compares to tirzepatide</a> to find the right fit.</p>


            {/* ─── FAQ ─── */}
            <h2 className="serif" style={{ fontSize: 32, marginTop: 56, marginBottom: 32, color: 'var(--ink)' }}>Frequently asked questions</h2>

            <FaqItem question="Is there still an Ozempic shortage in 2026?">
              No. Semaglutide, the active ingredient in Ozempic and Wegovy, is no longer on the FDA drug shortage list. Individual pharmacies may occasionally be out of a specific dose, but there is no national shortage.
            </FaqItem>
            <FaqItem question="Is there still a Wegovy shortage in 2026?">
              No. Wegovy{"'"}s active ingredient, semaglutide, is listed as available. The shortage that affected it in 2023 and 2024 resolved in early 2025.
            </FaqItem>
            <FaqItem question="Is there a Zepbound or Mounjaro shortage in 2026?">
              No. Tirzepatide, the active ingredient in both, came off the FDA shortage list in late 2024 and remains available.
            </FaqItem>
            <FaqItem question="Why can't I get compounded semaglutide anymore?">
              Compounded versions were widely available only because of the official shortage. Once semaglutide came off the shortage list in 2025, the exemption that allowed large-scale compounding expired, and routine compounding of it is no longer permitted.
            </FaqItem>
            <FaqItem question="Is compounded tirzepatide banned?">
              There was no single ban. Once tirzepatide{"'"}s shortage resolved, the legal basis for compounding it at scale ended. Limited, prescriber-driven compounding for a documented individual clinical need can still exist, but mass-market compounded tirzepatide is no longer permitted.
            </FaqItem>
            <FaqItem question="Is Hims shutting down?">
              No. Hims & Hers is not closing. What changed is that, after the shortage ended, the company and others across the industry had to curtail their compounded GLP-1 offerings, and Novo Nordisk ended a partnership with the company in 2025.
            </FaqItem>
            <FaqItem question="Are compounded GLP-1 medications FDA-approved?">
              No. Compounded medications are not FDA-approved, and the FDA does not evaluate them for safety, effectiveness, or quality.
            </FaqItem>


            {/* ─── CTA 3: Bottom ─── */}
            <CtaBlock
              variant="dark"
              headline="Find out what your options are — in about 2 minutes."
              body="A licensed provider reviews your health history and determines which GLP-1 treatment plan is appropriate and available to you in 2026."
              buttonText="Check Your Eligibility"
            />


            {/* ─── Sources ─── */}
            <div style={{ marginTop: 80, paddingTop: 40, borderTop: '1px solid var(--line-soft)', fontSize: 14, color: 'var(--ink-3)' }}>
              <h3 className="serif" style={{ fontSize: 24, marginBottom: 24, color: 'var(--ink)' }}>Sources</h3>
              <p style={{ marginBottom: 16, lineHeight: 1.6 }}>This page reflects the status shown in the FDA{"'"}s official drug shortage database as of the last-updated date above. Shortage status can change; the database is the authoritative real-time source.</p>
              <ol style={{ paddingLeft: 20, display: 'flex', flexDirection: 'column', gap: 16, lineHeight: 1.6 }}>
                <li>U.S. Food and Drug Administration. (2026). <em>FDA drug shortages database</em>. <a href="https://dps.fda.gov/drugshortages" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--brand)', textDecoration: 'underline' }}>dps.fda.gov/drugshortages</a></li>
                <li>U.S. Food and Drug Administration. (n.d.). <em>Medications containing semaglutide marketed for type 2 diabetes or weight loss</em>. <a href="https://www.fda.gov/drugs/postmarket-drug-safety-information-patients-and-providers/medications-containing-semaglutide-marketed-type-2-diabetes-or-weight-loss" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--brand)', textDecoration: 'underline' }}>fda.gov</a></li>
              </ol>
            </div>


            {/* ─── Disclaimers ─── */}
            <div style={{
              marginTop: 40, paddingTop: 28, borderTop: '1px solid var(--line-soft)',
              fontSize: 13, color: 'var(--ink-3)', lineHeight: 1.65,
              display: 'flex', flexDirection: 'column', gap: 14,
            }}>
              <p><strong style={{ color: 'var(--ink-2)' }}>Medical disclaimer:</strong> This page is for general informational purposes only and is not medical advice. It does not establish a provider-patient relationship. Treatment decisions are made only by a licensed medical provider based on your individual health history. Always consult a qualified healthcare professional before starting, stopping, or changing any medication.</p>
              <p><strong style={{ color: 'var(--ink-2)' }}>Compounded-medication disclaimer:</strong> Compounded medications (including compounded semaglutide and tirzepatide) are not FDA-approved. The FDA does not evaluate compounded drugs for safety, effectiveness, or quality.</p>
              <p><strong style={{ color: 'var(--ink-2)' }}>Affiliate disclaimer:</strong> Telehealth FX is an informational website. It is not a medical provider or pharmacy and does not provide medical advice, diagnosis, or treatment. We may earn a commission when you sign up for a partner{"'"}s service through links on this site.</p>
              <p><strong style={{ color: 'var(--ink-2)' }}>Trademark note:</strong> "Ozempic," "Wegovy," "Mounjaro," and "Zepbound" are the property of their respective owners. This page is not affiliated with, endorsed by, or sponsored by their manufacturers.</p>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
