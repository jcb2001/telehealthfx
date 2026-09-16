"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import { DirectAnswerSnippet } from './direct-answer-snippet.jsx';
import { AIQuickSummaryAction } from './ai-quick-summary-action.jsx';

const START_URL = "https://go.telehealthfx.com/start";

export function BlogStartWeightLossShotsToday() {
  const [selectedDose, setSelectedDose] = useState("Starter 0.25 mg");

  return (
    <section className="section" style={{ minHeight: '60vh', paddingTop: 120, paddingBottom: 100 }}>
      <div className="container" style={{ maxWidth: 840, margin: '0 auto', padding: '0 20px' }}>
        {/* Category Badge */}
        <div style={{ display: 'inline-block', padding: '4px 12px', borderRadius: 6, background: '#2E4A3B', color: '#fff', fontSize: 12, fontWeight: 700, letterSpacing: 1, textTransform: 'uppercase', marginBottom: 16 }}>
          Immediate Onboarding
        </div>

        {/* Article H1 Title */}
        <h1 className="serif" style={{ fontSize: 44, marginBottom: 20, lineHeight: 1.15, color: 'var(--ink, #1A1F1C)' }}>
          Start Weight Loss Shots Today: Fast Online GLP-1 Care
        </h1>

        {/* Byline and Author Credentials */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 32, paddingBottom: 20, borderBottom: '1px solid var(--line-soft, #EBE5DA)' }}>
          <div style={{ width: 44, height: 44, borderRadius: '50%', overflow: 'hidden', flexShrink: 0 }}>
            <Image src="/assets/jm-profile.jpg" alt="Julian Mercer, M.S." width={88} height={88} style={{ width: '100%', height: '100%', objectFit: 'cover' }} priority={true} />
          </div>
          <div>
            <div style={{ fontWeight: 600, fontSize: 15, color: 'var(--ink, #1A1F1C)' }}>
              <a href="/about/" style={{ color: 'inherit', textDecoration: 'none' }}>Julian Mercer, M.S.</a>
            </div>
            <div style={{ fontSize: 13, color: 'var(--ink-3, #5F6762)' }}>
              Lead Bio-Systems Analyst · Clinically Reviewed · 13 min read
            </div>
          </div>
        </div>

        {/* Photorealistic Magazine Featured Hero Image */}
        <div style={{ margin: '0 0 36px', borderRadius: 16, overflow: 'hidden', boxShadow: '0 10px 30px rgba(0,0,0,0.07)', border: '1px solid var(--line-soft, #EBE5DA)' }}>
          <Image
            src="/assets/start_shots_today.jpg"
            alt="Start Weight Loss Shots Today Online Fast GLP-1 Care"
            width={1200}
            height={675}
            style={{ width: '100%', height: 'auto', display: 'block' }}
            priority={true}
          />
        </div>

        {/* Above-the-fold AI Quick Summary Action Widget */}
        <AIQuickSummaryAction
          title="Clinical Fact Verification & Transparent Access"
          subtitle="Instant verification of 503A compounding standards, transparent pricing, and rapid physician review"
          price="From $99 / 1st mo"
          turnaround="24-hr physician evaluation · 2-day cold-chain home delivery"
          doseMatch={true}
          keyPoints={[
            { label: "Clinical Foundation", value: "100% Legal 503A Compounding (21 U.S.C. § 353a)" },
            { label: "Introductory Promo", value: "$99 1st Mo Promo for Semaglutide & Tirzepatide Injections" },
            { label: "Affirm Financing", value: "Flexible payment plans starting from ~$25/month" },
            { label: "Zero Subscriptions", value: "$0 monthly membership dues · $0 hidden doctor fees" },
          ]}
          ctaText="Start Free Online Medical Intake →"
          ctaUrl={START_URL}
        />

        {/* Direct-Answer Featured Snippet Box (Position 0 Target) */}
        <DirectAnswerSnippet
          question="How do you start doctor-prescribed weight loss shots today online?"
          answer="Starting weight loss shots today is simplified through Telehealth FX with immediate digital clinical intake. Licensed US physicians assess metabolic qualifications within 24 hours, prescribing injectable compounded semaglutide or tirzepatide from $99 for your first month promo (regularly $190–$199/mo and $214–$299/mo) through certified 503A compounding pharmacies, backed by cold-chain home delivery and zero subscription fees."
          keyTakeaways={[{"label": "Time to Apply", "value": "3-minute secure digital metabolic questionnaire"}, {"label": "Intro Promo", "value": "$99 1st Mo Promo (Semaglutide or Tirzepatide shots)"}, {"label": "Affirm Financing", "value": "Pay over time starting from ~$25/month"}, {"label": "Everything Included", "value": "Doctor consult, prescription, 31G syringes, & cold shipping"}]}
          badge="Verified Clinical Extract • FDA 503A Guidance"
        />

        {/* Article Body Content */}
        <div className="blog-content" style={{ fontSize: 18, lineHeight: 1.75, color: 'var(--ink-2, #333C36)' }}>
          
          <h2 className="serif" style={{ fontSize: 32, marginTop: 44, marginBottom: 18, color: 'var(--ink, #1A1F1C)' }}>
            1. The Regulatory & Practical Reality of Accessing GLP-1 Care in 2026
          </h2>
          <p>
            The metabolic healthcare landscape has reached a historic turning point. While retail commercial pharmacy counters continue to quote between $1,000 and $1,349 per month for brand-name anti-obesity pens, insurance denials have reached unprecedented peaks. Over 70% of commercial prior authorization requests for anti-obesity medications are categorically denied, leaving patients stranded without accessible treatment.
          </p>
          <p>
            Under Section 503A of the Federal Food, Drug, and Cosmetic Act (21 U.S.C. § 353a), state-licensed compounding pharmacies are explicitly authorized to compound patient-specific medications pursuant to a valid prescription from a licensed healthcare provider. This statutory provision ensures that patients maintain uninterrupted access to vital incretin medications even during commercial brand shortages or when insurance refuses coverage.
          </p>

          {/* Interactive Pricing Comparison Card */}
          <div style={{ backgroundColor: '#FFFFFF', border: '1px solid var(--line, #DFD7CA)', borderRadius: 16, padding: '28px 24px', margin: '36px 0', boxShadow: '0 4px 20px rgba(0,0,0,0.04)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12, marginBottom: 20 }}>
              <h3 className="serif" style={{ fontSize: 24, margin: 0, color: 'var(--ink, #1A1F1C)' }}>
                Transparent Out-of-Pocket Economics
              </h3>
              <span style={{ fontSize: 12, fontWeight: 700, background: 'rgba(46, 74, 59, 0.1)', color: 'var(--brand, #2E4A3B)', padding: '4px 10px', borderRadius: 999 }}>
                NO HIDDEN MEMBERSHIP DUES
              </span>
            </div>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 16, marginBottom: 20 }}>
              <div style={{ padding: 18, borderRadius: 12, background: 'var(--bg-card, #FBF8F3)', border: '1px solid var(--line-soft, #EBE5DA)' }}>
                <div style={{ fontSize: 13, color: 'var(--ink-3, #5F6762)', textTransform: 'uppercase', letterSpacing: 0.5, fontWeight: 600 }}>Retail Pharmacy Brand</div>
                <div style={{ fontSize: 28, fontWeight: 800, color: '#DC2626', margin: '8px 0 4px' }}>$1,349<span style={{ fontSize: 14, fontWeight: 500 }}>/mo</span></div>
                <div style={{ fontSize: 13, color: 'var(--ink-3, #5F6762)' }}>Uninsured retail cash rate. Strict prior auth required.</div>
              </div>

              <div style={{ padding: 18, borderRadius: 12, background: 'var(--bg-card, #FBF8F3)', border: '1px solid var(--line-soft, #EBE5DA)' }}>
                <div style={{ fontSize: 13, color: 'var(--ink-3, #5F6762)', textTransform: 'uppercase', letterSpacing: 0.5, fontWeight: 600 }}>Venture Telehealth (Ro/Hims)</div>
                <div style={{ fontSize: 28, fontWeight: 800, color: '#D97706', margin: '8px 0 4px' }}>$299–$450<span style={{ fontSize: 14, fontWeight: 500 }}>/mo</span></div>
                <div style={{ fontSize: 13, color: 'var(--ink-3, #5F6762)' }}>Advertised drug cost plus mandatory $99/mo subscription.</div>
              </div>

              <div style={{ padding: 18, borderRadius: 12, background: 'rgba(46, 74, 59, 0.05)', border: '2px solid var(--brand, #2E4A3B)' }}>
                <div style={{ fontSize: 13, color: 'var(--brand, #2E4A3B)', textTransform: 'uppercase', letterSpacing: 0.5, fontWeight: 700 }}>Telehealth FX Direct</div>
                <div style={{ fontSize: 28, fontWeight: 800, color: 'var(--brand, #2E4A3B)', margin: '8px 0 4px' }}>$99<span style={{ fontSize: 14, fontWeight: 500 }}>/ 1st mo</span></div>
                <div style={{ fontSize: 13, color: 'var(--brand, #2E4A3B)' }}>Promo $99 1st mo · Semaglutide ($190/mo) / Tirzepatide ($214/mo) · Affirm from $25/mo · Free delivery.</div>
              </div>
            </div>

            <div style={{ textAlign: 'center', paddingTop: 8 }}>
              <a
                href={START_URL}
                style={{ display: 'inline-block', background: 'var(--brand, #2E4A3B)', color: '#fff', textDecoration: 'none', fontWeight: 700, padding: '14px 28px', borderRadius: 8, fontSize: 16 }}
              >
                Check Your Eligibility &amp; Claim Pricing →
              </a>
            </div>
          </div>

          <h2 className="serif" style={{ fontSize: 32, marginTop: 44, marginBottom: 18, color: 'var(--ink, #1A1F1C)' }}>
            2. Clinical Pharmacology: Active Incretin Peptide Bioequivalence
          </h2>
          <p>
            Compounded semaglutide and tirzepatide prescribed through Telehealth FX use pure, pharmaceutical-grade base active pharmaceutical ingredients (API) tested to United States Pharmacopeia (USP) sterility standards. Unlike unapproved salt complexes (such as semaglutide sodium or semaglutide acetate) that have raised regulatory scrutiny, accredited 503A pharmacies utilize the exact therapeutic peptide base.
          </p>
          <p>
            These medications work by mimicking natural gut-derived incretin hormones:
          </p>
          <ul style={{ paddingLeft: 24, marginBottom: 24 }}>
            <li style={{ marginBottom: 10 }}><strong>Delaying Gastric Emptying:</strong> Slowing the rate at which food leaves the stomach, prolonging physical postprandial satiety.</li>
            <li style={{ marginBottom: 10 }}><strong>Centrally Suppressing Appetite:</strong> Crossing the blood-brain barrier to bind hypothalamic POMC/CART neurons, turning off persistent food cravings and &apos;food noise&apos;.</li>
            <li style={{ marginBottom: 10 }}><strong>Optimizing Glycemic Response:</strong> Enhancing glucose-dependent insulin release while suppressing inappropriate glucagon secretion.</li>
          </ul>

          <h2 className="serif" style={{ fontSize: 32, marginTop: 44, marginBottom: 18, color: 'var(--ink, #1A1F1C)' }}>
            3. Landmark Clinical Evidence: STEP-1 and SURMOUNT-1 Trials
          </h2>
          <p>
            In the landmark New England Journal of Medicine STEP-1 clinical trial, once-weekly semaglutide combined with lifestyle modifications produced a mean body weight loss of <strong>14.9% over 68 weeks</strong>, with more than one-third of participants achieving a 20% or greater reduction in total body weight.
          </p>
          <p>
            For dual GIP/GLP-1 receptor agonism, the SURMOUNT-1 trial demonstrated even greater metabolic efficacy: participants on the highest therapeutic dose of tirzepatide achieved an unprecedented mean body weight reduction of <strong>20.9% (average 52 lbs)</strong> over 72 weeks.
          </p>

          {/* Dose Conversion & Continuity Protocol */}
          <h2 className="serif" style={{ fontSize: 32, marginTop: 44, marginBottom: 18, color: 'var(--ink, #1A1F1C)' }}>
            4. Step-by-Step Transition &amp; Dose-Matching Continuity
          </h2>
          <p>
            Patients switching from brand pens to compounded vials do not need to restart their titration at beginner doses if they have active prescription documentation. Telehealth FX clinicians verify your current tolerance and seamlessly match your maintenance dose:
          </p>
          <div style={{ backgroundColor: 'var(--bg-card, #FBF8F3)', borderRadius: 12, padding: 20, margin: '24px 0', border: '1px solid var(--line-soft, #EBE5DA)' }}>
            <div style={{ fontWeight: 700, marginBottom: 8, color: 'var(--ink, #1A1F1C)' }}>Seamless Dose Continuity Protocol:</div>
            <p style={{ fontSize: 16, margin: 0, color: 'var(--ink-2, #333C36)' }}>
              Whether you are currently on 0.5mg, 1.0mg, 1.7mg, or 2.4mg of Semaglutide (or 5.0mg to 15.0mg of Tirzepatide), our physicians provide exact insulin syringe unit conversion charts and ongoing clinical titration support so you maintain consistent therapeutic appetite suppression without interruption.
            </p>
          </div>

          {/* Male Metabolic Synergy & TRT Callout */}
          <div style={{ padding: 22, borderRadius: 12, background: 'rgba(46, 74, 59, 0.04)', borderLeft: '4px solid var(--brand, #2E4A3B)', margin: '32px 0' }}>
            <h4 style={{ margin: '0 0 8px', fontSize: 18, color: 'var(--brand, #2E4A3B)' }}>Clinical Synergy: Preserving Lean Muscle Mass with TRT</h4>
            <p style={{ fontSize: 15, margin: 0, color: 'var(--ink-2, #333C36)' }}>
              Rapid caloric deficits can lead to lean muscle mass loss alongside fat reduction. Telehealth FX offers coordinated male metabolic dual-therapy, combining GLP-1 treatments with doctor-supervised <a href="/medications/testosterone/" style={{ color: 'var(--brand, #2E4A3B)', fontWeight: 600 }}>Testosterone Replacement Therapy (TRT) from $79/mo</a> to maintain energy, strength, and metabolic rate.
            </p>
          </div>

          {/* Frequently Asked Questions Section */}
          <h2 className="serif" style={{ fontSize: 32, marginTop: 44, marginBottom: 20, color: 'var(--ink, #1A1F1C)' }}>
            Frequently Asked Patient Questions
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16, margin: '24px 0 40px' }}>
            <div style={{ background: '#FFFFFF', border: '1px solid var(--line, #DFD7CA)', borderRadius: 12, padding: '20px 24px' }}>
              <h3 style={{ fontSize: 18, fontWeight: 700, margin: '0 0 8px', color: 'var(--ink, #1A1F1C)' }}>What do I need to start weight loss shots today?</h3>
              <p style={{ fontSize: 16, margin: 0, color: 'var(--ink-2, #333C36)', lineHeight: 1.6 }}>You just need 3 minutes to complete our online clinical health intake, entering your height, weight, medical history, and weight management goals.</p>
            </div>
            <div style={{ background: '#FFFFFF', border: '1px solid var(--line, #DFD7CA)', borderRadius: 12, padding: '20px 24px' }}>
              <h3 style={{ fontSize: 18, fontWeight: 700, margin: '0 0 8px', color: 'var(--ink, #1A1F1C)' }}>How soon will I receive my medication after ordering?</h3>
              <p style={{ fontSize: 16, margin: 0, color: 'var(--ink-2, #333C36)', lineHeight: 1.6 }}>Once approved by our physician (usually within 24 hours), your medication is compounded and shipped via 2-day express cold-chain courier to your door.</p>
            </div>
            <div style={{ background: '#FFFFFF', border: '1px solid var(--line, #DFD7CA)', borderRadius: 12, padding: '20px 24px' }}>
              <h3 style={{ fontSize: 18, fontWeight: 700, margin: '0 0 8px', color: 'var(--ink, #1A1F1C)' }}>How does semaglutide curb appetite from day one?</h3>
              <p style={{ fontSize: 16, margin: 0, color: 'var(--ink-2, #333C36)', lineHeight: 1.6 }}>Semaglutide mimics endogenous GLP-1 hormones, binding to hypothalamic POMC neurons to turn down hunger signaling and slowing gastric emptying.</p>
            </div>
            <div style={{ background: '#FFFFFF', border: '1px solid var(--line, #DFD7CA)', borderRadius: 12, padding: '20px 24px' }}>
              <h3 style={{ fontSize: 18, fontWeight: 700, margin: '0 0 8px', color: 'var(--ink, #1A1F1C)' }}>Are the injections painful to administer?</h3>
              <p style={{ fontSize: 16, margin: 0, color: 'var(--ink-2, #333C36)', lineHeight: 1.6 }}>No. Our patients use ultra-fine 31-gauge insulin syringes that are just 5/16 inch long, creating a virtually painless subcutaneous injection experience.</p>
            </div>
          </div>

          {/* Final Conversion Call to Action */}
          <div style={{ background: 'var(--brand, #2E4A3B)', color: '#fff', borderRadius: 16, padding: '36px 28px', textAlign: 'center', marginTop: 48 }}>
            <h3 className="serif" style={{ fontSize: 28, margin: '0 0 12px', color: '#fff' }}>
              Ready to Access Affordable, Doctor-Supervised GLP-1 Care?
            </h3>
            <p style={{ fontSize: 16, opacity: 0.9, maxWidth: 600, margin: '0 auto 24px', lineHeight: 1.6 }}>
              Complete your 3-minute medical intake today. A US-licensed physician will review your history within 24 hours, and your medication will ship directly to your door in temperature-monitored cold-chain packaging.
            </p>
            <a
              href={START_URL}
              style={{ display: 'inline-block', background: '#fff', color: 'var(--brand, #2E4A3B)', fontWeight: 800, padding: '16px 36px', borderRadius: 8, textDecoration: 'none', fontSize: 17 }}
            >
              Claim $99 First Month Promo →
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
