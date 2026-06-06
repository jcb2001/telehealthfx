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

const thStyle = { textAlign: 'left', padding: '14px 20px', fontWeight: 600, fontSize: 13, letterSpacing: '0.04em', textTransform: 'uppercase', color: 'var(--ink-3)' };
const tdStyle = { padding: '14px 20px' };

export function BlogGlp1RealCost2026() {
  return (
    <>
      <section className="section" style={{ minHeight: '60vh', paddingTop: 120 }}>
        <div className="container" style={{ maxWidth: 800 }}>

          {/* ─── Eyebrow + Title ─── */}
          <div className="eyebrow" style={{ marginBottom: 20 }}>GLP-1 Pricing Guide</div>
          <h1 className="serif" style={{ fontSize: 52, marginBottom: 24, lineHeight: 1.08 }}>
            How Much Does Semaglutide & Tirzepatide Cost in 2026? <span style={{ fontStyle: 'italic', color: 'var(--brand)' }}>The Real Price Breakdown</span>
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
              <div style={{ fontSize: 13, color: 'var(--ink-3)' }}>Lead Bio-Systems Analyst · Updated June 2026 · 12 min read</div>
            </div>
          </div>

          {/* ─── Article Body ─── */}
          <div className="blog-content" style={{ fontSize: 18, lineHeight: 1.7, color: 'var(--ink-2)' }}>

            {/* Hero Image */}
            <Image src="/assets/glp1-cost-hero.png" alt="Generic medication injector pen and glass vial beside a calculator and coins on a clean surface, representing the cost of GLP-1 weight-loss treatment in 2026"
              width={1024} height={1024}
              style={{ width: '100%', borderRadius: 16, marginBottom: 40, border: '1px solid var(--line-soft)', height: 'auto' }}
              priority={true} />

            {/* Intro */}
            <p>GLP-1 pricing is one of the most confusing things about starting treatment, because the same medication can cost anywhere from almost nothing to well over a thousand dollars a month depending entirely on how you pay for it. The good news: the landscape shifted hard in your favor over 2025, and there are now several legitimate routes that didn{"'"}t exist a year or two ago. Here{"'"}s what <a href="/medications/semaglutide" style={linkStyle}>semaglutide</a> and <a href="/medications/tirzepatide" style={linkStyle}>tirzepatide</a> actually cost in 2026, and how to find your lowest-cost option.</p>


            {/* ─── Short Answer ─── */}
            <h2 className="serif" style={{ fontSize: 32, marginTop: 56, marginBottom: 24, color: 'var(--ink)' }}>The short answer</h2>
            <p>There is no single price. What you pay depends on which of four routes you use:</p>
            <ul style={{ paddingLeft: 24, marginBottom: 24 }}>
              <li style={{ marginBottom: 14 }}><strong>Brand-name retail with no help:</strong> roughly $1,000–$1,350 per month — the "sticker" price almost nobody actually needs to pay anymore.</li>
              <li style={{ marginBottom: 14 }}><strong>Manufacturer direct self-pay:</strong> roughly $349–$499 per month for cash-paying patients through the drugmakers{"'"} own pharmacies.</li>
              <li style={{ marginBottom: 14 }}><strong>With commercial insurance plus a savings card:</strong> anywhere from $0 to a few hundred dollars per month, if your plan covers it.</li>
              <li style={{ marginBottom: 14 }}><strong>Compounded versions:</strong> these were the cheapest option during the shortage, but their <a href="/glp-1-shortage-tracker-2026" style={linkStyle}>availability changed substantially in 2025</a>.</li>
            </ul>


            {/* ─── CTA 1: Top ─── */}
            <CtaBlock
              variant="default"
              headline="Find out what you'd actually pay — in about 2 minutes."
              body="A licensed provider reviews your situation and identifies the most affordable GLP-1 option available to you in 2026."
              buttonText="Check Your Eligibility & Pricing"
            />


            {/* ─── Cost Table ─── */}
            <h2 className="serif" style={{ fontSize: 32, marginTop: 56, marginBottom: 24, color: 'var(--ink)' }}>Cost at a glance (2026)</h2>
            <div style={{ overflowX: 'auto', margin: '24px 0', borderRadius: 12, border: '1px solid var(--line-soft)' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 15, background: 'var(--bg-card)' }}>
                <thead>
                  <tr style={{ borderBottom: '2px solid var(--ink)' }}>
                    <th style={thStyle}>Medication</th>
                    <th style={thStyle}>Brand retail (no coverage)</th>
                    <th style={thStyle}>Manufacturer self-pay</th>
                    <th style={thStyle}>With covered insurance + savings card</th>
                  </tr>
                </thead>
                <tbody>
                  <tr style={{ borderBottom: '1px solid var(--line-soft)' }}>
                    <td style={{ ...tdStyle, fontWeight: 500 }}>Wegovy (semaglutide)</td>
                    <td style={tdStyle}>~$1,300+/mo</td>
                    <td style={{ ...tdStyle, color: 'var(--brand)', fontWeight: 600 }}>~$499/mo via NovoCare</td>
                    <td style={tdStyle}>as low as $0–$25/mo</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid var(--line-soft)' }}>
                    <td style={{ ...tdStyle, fontWeight: 500 }}>Ozempic (semaglutide)</td>
                    <td style={tdStyle}>~$950+/mo</td>
                    <td style={tdStyle}>varies</td>
                    <td style={tdStyle}>as low as $25/mo</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid var(--line-soft)' }}>
                    <td style={{ ...tdStyle, fontWeight: 500 }}>Zepbound (tirzepatide)</td>
                    <td style={tdStyle}>~$1,050+/mo</td>
                    <td style={{ ...tdStyle, color: 'var(--brand)', fontWeight: 600 }}>~$349–$499/mo via LillyDirect</td>
                    <td style={tdStyle}>as low as $25/mo</td>
                  </tr>
                  <tr>
                    <td style={{ ...tdStyle, fontWeight: 500 }}>Mounjaro (tirzepatide)</td>
                    <td style={tdStyle}>~$1,050+/mo</td>
                    <td style={tdStyle}>varies</td>
                    <td style={tdStyle}>as low as $25/mo</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p style={{ fontSize: 14, color: 'var(--ink-3)', fontStyle: 'italic', marginBottom: 24 }}>Prices are approximate and change frequently. Always confirm the current figure with the manufacturer or your pharmacy.</p>


            {/* ─── Four Ways to Pay ─── */}
            <h2 className="serif" style={{ fontSize: 32, marginTop: 56, marginBottom: 24, color: 'var(--ink)' }}>The four ways to pay, explained</h2>
            <SectionImage src="/assets/glp1-cost-ways-to-pay.png" alt="Flat-lay of a blank insurance-style card, a calculator, and a smartphone on a clean desk, representing the different ways to pay for GLP-1 medication" />

            <h3 className="serif" style={{ fontSize: 24, marginTop: 40, marginBottom: 16, color: 'var(--ink)' }}>1. Through insurance (if it{"'"}s covered)</h3>
            <p>If your insurance covers a GLP-1 for your situation, this is usually the cheapest route — copays can run anywhere from $0 to a few hundred dollars a month. The catch is coverage itself. Many plans cover these drugs for type 2 diabetes (<a href="/blog/ozempic-vs-wegovy-2026" style={linkStyle}>Ozempic</a>, Mounjaro) but exclude or restrict them for weight management (Wegovy, Zepbound), and most require prior authorization, meaning your provider has to document that you meet specific medical criteria before the plan pays. It{"'"}s worth checking your formulary directly, because two people on the "same" plan tier can have very different out-of-pocket costs.</p>

            <h3 className="serif" style={{ fontSize: 24, marginTop: 40, marginBottom: 16, color: 'var(--ink)' }}>2. Manufacturer savings cards</h3>
            <p>If you have commercial (non-government) insurance, the drugmakers offer savings cards that can dramatically lower your copay — in some cases to as little as $0–$25 per month. These cards generally can{"'"}t be used with Medicare, Medicaid, or other government coverage. They{"'"}re one of the most underused cost-savers, and eligibility takes only a few minutes to check on the manufacturer{"'"}s site.</p>

            <h3 className="serif" style={{ fontSize: 24, marginTop: 40, marginBottom: 16, color: 'var(--ink)' }}>3. Manufacturer direct self-pay (the big 2025 change)</h3>
            <SectionImage src="/assets/glp1-cost-self-pay.png" alt="A plain white pharmacy bag and a generic medication vial on a clean pharmacy counter, representing affordable manufacturer self-pay options" />
            <p>This is the route that reshaped affordability for people without coverage. Both major manufacturers now sell directly to cash-paying patients at far below retail. Novo Nordisk offers self-pay Wegovy through its NovoCare pharmacy at around $499 per month for self-paying patients, and Eli Lilly sells single-dose Zepbound vials through LillyDirect at roughly $349–$499 per month depending on the dose. These programs are aimed squarely at people whose insurance won{"'"}t cover weight-loss treatment, and they{"'"}ve effectively replaced the role <a href="/blog/compounded-semaglutide-vs-wegovy-2026" style={linkStyle}>compounded versions</a> used to play.</p>

            <h3 className="serif" style={{ fontSize: 24, marginTop: 40, marginBottom: 16, color: 'var(--ink)' }}>4. Compounded semaglutide and tirzepatide</h3>
            <p>During the 2023–2024 shortages, compounded versions were widely available through telehealth platforms for roughly $150–$300 a month, and for a while they were the cheapest path by a wide margin. That <a href="/glp-1-shortage-tracker-2026" style={linkStyle}>changed in 2025</a>. Once the shortages officially resolved and both drugs came off the FDA shortage list, the exemption that allowed large-scale compounding expired. Routine compounding of these medications purely as a budget alternative is no longer permitted, though limited prescriber-driven compounding for a documented individual clinical need can still exist in specific cases.</p>
            <p>It{"'"}s also worth knowing what compounded products are: they are not FDA-approved, and the FDA does not evaluate them for safety, effectiveness, or quality.</p>


            {/* ─── CTA 2: Middle ─── */}
            <CtaBlock
              variant="brand"
              headline="Not sure which route is cheapest for you?"
              body="A licensed provider reviews your coverage, your health history, and your eligibility — then identifies the most affordable path to treatment."
              buttonText="Check Your Options"
            />


            {/* ─── Cheapest Way ─── */}
            <h2 className="serif" style={{ fontSize: 32, marginTop: 56, marginBottom: 24, color: 'var(--ink)' }}>What{"'"}s the cheapest way to get semaglutide or tirzepatide in 2026?</h2>
            <p>For most people, the genuinely cheapest legitimate route now breaks down like this:</p>
            <p><strong>If you have commercial insurance,</strong> start by checking whether your plan covers the medication and stack a manufacturer savings card on top — that combination produces the lowest out-of-pocket cost when it works, sometimes near $0.</p>
            <p><strong>If you don{"'"}t have coverage,</strong> or your plan excludes weight-loss medication, the manufacturer direct self-pay programs (around $349–$499 a month) are now the most affordable reliable option, and they{"'"}re FDA-approved products rather than compounded ones.</p>
            <p>The "<a href="/blog/cheapest-compounded-semaglutide-2026" style={linkStyle}>cheapest compounded semaglutide</a>" route that dominated 2024 is the one that{"'"}s no longer the simple budget play it used to be. If you find an offer still marketing bulk compounded GLP-1 at shortage-era prices, it{"'"}s worth <a href="/blog/compounded-semaglutide-red-flags-2026" style={linkStyle}>looking closely at whether that{"'"}s actually permitted</a> in 2026.</p>


            {/* ─── Without Insurance ─── */}
            <h2 className="serif" style={{ fontSize: 32, marginTop: 56, marginBottom: 24, color: 'var(--ink)' }}>What does it cost without insurance?</h2>
            <SectionImage src="/assets/glp1-cost-telehealth.png" alt="A person using a laptop at a bright kitchen table for a telehealth consultation, viewed from behind, representing reviewing GLP-1 cost options online" />
            <p>This is the most common question, and the answer in 2026 is more encouraging than it was a year ago. Without insurance, you{"'"}re choosing mainly between brand-name retail (the full ~$1,000+ price, which you should almost never have to pay) and the manufacturer self-pay programs (~$349–$499/month). For a cash payer, those direct programs are the headline number to focus on — they brought a real, FDA-approved GLP-1 within reach for people whose insurance offers no help at all.</p>


            {/* ─── Find Your Lowest Cost ─── */}
            <h2 className="serif" style={{ fontSize: 32, marginTop: 56, marginBottom: 24, color: 'var(--ink)' }}>Find your lowest-cost option</h2>
            <p>The fastest way to land on your actual price — not a range — is to have a licensed provider review your situation, your coverage, and your eligibility, then identify the most affordable route available to you. A short online eligibility check connects you with a licensed provider who can do exactly that and determine whether a <a href="/blog/what-is-a-glp-1-medication" style={linkStyle}>GLP-1 treatment</a> plan is appropriate for you.</p>
            <p><strong>Check your eligibility and pricing — takes about 2 minutes</strong></p>
            <p>There{"'"}s no obligation, and you only move forward if a provider determines you{"'"}re a candidate.</p>


            {/* ─── FAQ ─── */}
            <h2 className="serif" style={{ fontSize: 32, marginTop: 56, marginBottom: 32, color: 'var(--ink)' }}>Frequently asked questions</h2>

            <FaqItem question="How much does tirzepatide cost in 2026?">
              Brand-name tirzepatide (Zepbound or Mounjaro) retails for roughly $1,050 a month without coverage, but self-paying patients can get single-dose Zepbound vials through the manufacturer for around $349–$499 a month, and those with covered insurance plus a savings card may pay as little as $25.
            </FaqItem>
            <FaqItem question="How much does semaglutide cost?">
              Brand-name semaglutide (Wegovy or Ozempic) retails for roughly $950–$1,350 a month, but Wegovy is available to self-paying patients for about $499 a month through the manufacturer, and covered insurance with a savings card can bring it down to $0–$25.
            </FaqItem>
            <FaqItem question="What is the cost of GLP-1 without insurance?">
              Without insurance, the most affordable reliable option in 2026 is a manufacturer direct self-pay program, roughly $349–$499 a month for an FDA-approved product — far below the $1,000-plus retail price.
            </FaqItem>
            <FaqItem question="Is compounded semaglutide cheaper?">
              It was significantly cheaper during the 2023–2024 shortage, but after the shortages resolved in 2025 the rules changed and routine compounding is no longer permitted. For most people the manufacturer self-pay programs are now both affordable and FDA-approved.
            </FaqItem>
            <FaqItem question="Why is Wegovy so expensive?">
              The list price reflects how the drug is priced before insurance and manufacturer programs. Very few patients pay the full retail amount — most use insurance, a savings card, or a self-pay program that brings the real cost far lower.
            </FaqItem>
            <FaqItem question="Can I use a savings card with Medicare?">
              Generally no. Manufacturer savings cards are typically limited to commercial insurance and can{"'"}t be combined with Medicare, Medicaid, or other government coverage.
            </FaqItem>


            {/* ─── CTA 3: Bottom ─── */}
            <CtaBlock
              variant="dark"
              headline="Find your actual price — takes about 2 minutes."
              body="A licensed provider reviews your health history, coverage, and eligibility to determine the most affordable GLP-1 treatment available to you in 2026."
              buttonText="Check Your Eligibility & Pricing"
            />


            {/* ─── Sources ─── */}
            <div style={{ marginTop: 80, paddingTop: 40, borderTop: '1px solid var(--line-soft)', fontSize: 14, color: 'var(--ink-3)' }}>
              <h3 className="serif" style={{ fontSize: 24, marginBottom: 24, color: 'var(--ink)' }}>Sources</h3>
              <p style={{ marginBottom: 16, lineHeight: 1.6 }}>Pricing reflects publicly available manufacturer information as of the last-updated date above and is subject to change. Confirm current pricing directly with the manufacturer.</p>
              <ol style={{ paddingLeft: 20, display: 'flex', flexDirection: 'column', gap: 16, lineHeight: 1.6 }}>
                <li>Novo Nordisk. (2026). <em>NovoCare.</em> <a href="https://www.novocare.com/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--brand)', textDecoration: 'underline' }}>novocare.com</a></li>
                <li>Eli Lilly and Company. (2026). <em>Zepbound.</em> <a href="https://zepbound.lilly.com/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--brand)', textDecoration: 'underline' }}>zepbound.lilly.com</a></li>
                <li>U.S. Food and Drug Administration. (2026). <em>FDA drug shortages database.</em> <a href="https://dps.fda.gov/drugshortages" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--brand)', textDecoration: 'underline' }}>dps.fda.gov/drugshortages</a></li>
              </ol>
            </div>


            {/* ─── Disclaimers ─── */}
            <div style={{
              marginTop: 40, paddingTop: 28, borderTop: '1px solid var(--line-soft)',
              fontSize: 13, color: 'var(--ink-3)', lineHeight: 1.65,
              display: 'flex', flexDirection: 'column', gap: 14,
            }}>
              <p><strong style={{ color: 'var(--ink-2)' }}>Medical disclaimer:</strong> This page is for general informational purposes only and is not medical advice. It does not establish a provider-patient relationship. Treatment and pricing decisions are made only by a licensed medical provider and your pharmacy based on your individual situation. Always consult a qualified healthcare professional before starting any medication.</p>
              <p><strong style={{ color: 'var(--ink-2)' }}>Pricing disclaimer:</strong> All prices are approximate, vary by dose, pharmacy, location, and coverage, and change frequently. The figures here are illustrative and not a quote. Confirm current pricing with the manufacturer or pharmacy.</p>
              <p><strong style={{ color: 'var(--ink-2)' }}>Compounded-medication disclaimer:</strong> Compounded medications (including compounded semaglutide and tirzepatide) are not FDA-approved. The FDA does not evaluate compounded drugs for safety, effectiveness, or quality.</p>
              <p><strong style={{ color: 'var(--ink-2)' }}>Affiliate disclaimer:</strong> Telehealth FX is an informational website. It is not a medical provider or pharmacy and does not provide medical advice, diagnosis, or treatment. We may earn a commission when you sign up for a partner{"'"}s service through links on this site.</p>
              <p><strong style={{ color: 'var(--ink-2)' }}>Trademark note:</strong> "Wegovy," "Ozempic," "Zepbound," and "Mounjaro" are the property of their respective owners. This page is not affiliated with, endorsed by, or sponsored by their manufacturers.</p>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
