"use client";
import React from 'react';
import Image from 'next/image';
import { Icon } from './common.jsx';
const START_URL = "https://go.telehealthfx.com/start";

function BlogSwitchGLP1Providers() {
  return (<>
    <section className="section" style={{ minHeight: '60vh', paddingTop: 120 }}>
    <div className="container" style={{ maxWidth: 800 }}>
      <div className="eyebrow" style={{ marginBottom: 20 }}>Switching Providers</div>
      <h1 className="serif" style={{ fontSize: 56, marginBottom: 24, lineHeight: 1.1 }}>How to Switch Telehealth GLP-1 Providers <span style={{ fontStyle: 'italic', color: 'var(--brand)' }}>Without Losing Your Prescription (2026 Guide)</span></h1>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 48, paddingBottom: 24, borderBottom: '1px solid var(--line-soft)' }}>
        <div style={{ width: 40, height: 40, borderRadius: '50%', background: 'var(--brand)' }}><Image src="/assets/jm-profile.jpg" alt="Julian Mercer" width={1024} height={1024} style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%', height: "auto"}} priority={true} /></div>
        <div><div style={{ fontWeight: 500, fontSize: 14 }}><a href="/about" style={{ color: "var(--ink)", textDecoration: "none" }}>Julian Mercer, M.S.</a></div><div style={{ fontSize: 13, color: 'var(--ink-3)' }}>Lead Bio-Systems Analyst · Updated May 2026 · 20 min read</div></div>
      </div>
      <div className="blog-content" style={{ fontSize: 18, lineHeight: 1.7, color: 'var(--ink-2)' }}>
        <Image src="/assets/switch-glp1-providers-featured.png" alt="Switching telehealth GLP-1 providers" width={1024} height={1024} style={{ width: '100%', borderRadius: 16, marginBottom: 40, border: '1px solid var(--line-soft)', background: '#111', height: "auto"}} priority={true} />

        <p>You are already on <a href="/blog/what-is-a-glp-1-medication" style={{ color: 'var(--brand)', fontWeight: 500 }}>GLP-1 therapy</a>. It is working. But your current provider is charging too much, their customer service is nonexistent, they keep hitting you with <a href="/blog/hidden-fees-in-telehealth-weight-loss-how-to-spot" style={{ color: 'var(--brand)', fontWeight: 500 }}>hidden fees</a>, or their pharmacy keeps missing shipments. You want to switch—but you are terrified of a gap in treatment. You have heard that <a href="/blog/what-happens-when-you-stop-glp-1-medication-the-re" style={{ color: 'var(--brand)', fontWeight: 500 }}>stopping GLP-1 therapy</a> triggers appetite rebound and weight regain. So you stay put, overpaying and frustrated.</p>

        <p>Here is the truth: <strong>switching providers is straightforward and should not create any gap in your medication.</strong> This guide walks you through the exact process.</p>

        <h2 className="serif" style={{ fontSize: 32, marginTop: 48, marginBottom: 24, color: 'var(--ink)' }}>The 4-Step Switching Process</h2>
        <ol>
          <li style={{ marginBottom: 16 }}><strong>Sign up with your new provider before canceling the old one.</strong> Complete the medical intake with your new telehealth platform. Mention your current dose and medication history—this allows the new clinician to continue at your current dose without re-titrating from scratch.</li>
          <li style={{ marginBottom: 16 }}><strong>Time it to your refill cycle.</strong> Initiate the switch 2–3 weeks before your next refill is due. This gives the new provider time to complete your evaluation and ship medication before your current supply runs out.</li>
          <li style={{ marginBottom: 16 }}><strong>Get approved, then cancel.</strong> Once you have received prescription confirmation from your new provider, cancel your old subscription. Never cancel first and hope the new provider processes quickly enough.</li>
          <li style={{ marginBottom: 16 }}><strong>Keep your records.</strong> Note your current dose, how long you've been on therapy, any <a href="/blog/glp-1-side-effects-how-to-manage-nausea-fatigue-mo" style={{ color: 'var(--brand)', fontWeight: 500 }}>side effects</a> experienced, and your weight loss progress. Share these with your new clinician for continuity of care.</li>
        </ol>

        <div className="card" style={{ padding: 40, margin: '48px 0', textAlign: 'center', background: '#FFFDF9', borderColor: 'var(--brand)' }}>
          <h3 className="serif" style={{ fontSize: 28, marginBottom: 16, color: 'var(--ink)' }}>Seamless Transitions</h3>
          <p style={{ marginBottom: 24, fontSize: 16 }}>TelehealthFX honors your current dose when switching from another provider. No re-titration, no treatment gaps, no hidden onboarding fees.</p>
          <a href={START_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-lg" style={{ display: 'inline-flex', justifyContent: 'center' }}>Switch to TelehealthFX <Icon.Arrow /></a>
        </div>

        <h2 className="serif" style={{ fontSize: 32, marginTop: 48, marginBottom: 24, color: 'var(--ink)' }}>Top Reasons Patients Switch Providers</h2>
        <ul>
          <li style={{ marginBottom: 12 }}><strong>Hidden fees discovered after enrollment:</strong> The advertised price did not include mandatory membership, consultation, or shipping charges. Compare <a href="/blog/cheapest-compounded-semaglutide-2026" style={{ color: 'var(--brand)', fontWeight: 500 }}>real provider pricing</a>.</li>
          <li style={{ marginBottom: 12 }}><strong>Poor medication quality:</strong> Inconsistent dosing, wrong concentration, or non-cold-chain shipping. Verify your pharmacy is <a href="/blog/is-compounded-semaglutide-safe-what-you-need-to-kn" style={{ color: 'var(--brand)', fontWeight: 500 }}>operating compliantly</a>.</li>
          <li style={{ marginBottom: 12 }}><strong>No clinical support:</strong> The provider wrote a prescription and disappeared. GLP-1 therapy requires active dose management, especially during <a href="/blog/glp-1-plateau-when-weight-loss-stalls-what-to-do-2" style={{ color: 'var(--brand)', fontWeight: 500 }}>weight loss plateaus</a>.</li>
          <li style={{ marginBottom: 12 }}><strong>Long shipping delays:</strong> Chronic late shipments create treatment gaps and anxiety about <a href="/blog/glp-1-shortage-update-may-2026" style={{ color: 'var(--brand)', fontWeight: 500 }}>supply reliability</a>.</li>
          <li style={{ marginBottom: 12 }}><strong>Wanting to add complementary treatments:</strong> Their provider only offers semaglutide. They want a platform that also provides <a href="/medications/tirzepatide" style={{ color: 'var(--brand)', fontWeight: 500 }}>tirzepatide</a>, <a href="/medications/nad" style={{ color: 'var(--brand)', fontWeight: 500 }}>NAD+</a>, <a href="/medications/sermorelin" style={{ color: 'var(--brand)', fontWeight: 500 }}>Sermorelin</a>, or <a href="/medications/berberine" style={{ color: 'var(--brand)', fontWeight: 500 }}>berberine</a>.</li>
        </ul>

        <div className="card" style={{ padding: 40, margin: '48px 0', textAlign: 'center', background: '#FFFDF9', borderColor: 'var(--brand)' }}>
          <div style={{ width: 48, height: 48, borderRadius: '50%', background: 'var(--brand-soft)', color: 'var(--brand)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px' }}><Icon.Check size={24} /></div>
          <h3 className="serif" style={{ fontSize: 28, marginBottom: 16, color: 'var(--ink)' }}>Everything Under One Roof</h3>
          <p style={{ marginBottom: 24, fontSize: 16 }}>GLP-1, NAD+, Sermorelin, Berberine — all available through one platform with transparent pricing and real clinical support.</p>
          <a href={START_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-lg" style={{ display: 'inline-flex', justifyContent: 'center' }}>Start Your Evaluation <Icon.Arrow /></a>
        </div>

        <h2 className="serif" style={{ fontSize: 32, marginTop: 48, marginBottom: 24, color: 'var(--ink)' }}>Frequently Asked Questions</h2>
        <h4 style={{ fontSize: 20, marginTop: 24, marginBottom: 8, color: 'var(--ink)' }}>Will I have to start over at the lowest dose?</h4>
        <p style={{ marginBottom: 24 }}>No. A responsible new provider will review your treatment history and continue prescribing at your current established dose. Re-titration is only necessary if there has been a significant gap in therapy (typically 4+ weeks).</p>
        <h4 style={{ fontSize: 20, marginTop: 24, marginBottom: 8, color: 'var(--ink)' }}>Can I transfer my prescription to a new provider?</h4>
        <p style={{ marginBottom: 24 }}>Technically, prescriptions belong to the prescribing clinician, not the patient. Your new provider's clinician will write a new prescription based on your documented treatment history. This is standard practice and does not require contacting your old provider.</p>
        <h4 style={{ fontSize: 20, marginTop: 24, marginBottom: 8, color: 'var(--ink)' }}>What if my current provider requires a cancellation fee?</h4>
        <p style={{ marginBottom: 24 }}>Read your subscription terms carefully. Legitimate providers allow cancellation at any time without penalties. If your provider requires a cancellation fee, that is itself a red flag. See our <a href="/blog/how-to-choose-a-telehealth-weight-loss-program-and" style={{ color: 'var(--brand)', fontWeight: 500 }}>program selection guide</a> for what to look for.</p>

        <div style={{ padding: 40, marginTop: 60, borderRadius: 20, background: 'var(--ink)', color: '#FBF8F3', textAlign: 'center' }}>
          <h2 className="serif" style={{ fontSize: 40, marginBottom: 20, color: '#FBF8F3' }}>You Deserve Better</h2>
          <p style={{ fontSize: 18, opacity: 0.9, marginBottom: 32, maxWidth: 500, margin: '0 auto 32px' }}>Stop settling for hidden fees and poor service. Switch to transparent, clinician-guided care.</p>
          <a href={START_URL} target="_blank" rel="noopener noreferrer" className="btn btn-lg" style={{ background: '#FBF8F3', color: 'var(--ink)', display: 'inline-flex', justifyContent: 'center', width: '100%', maxWidth: 250 }}>Make the Switch <Icon.Arrow /></a>
        </div>

        <div style={{ marginTop: 80, paddingTop: 40, borderTop: '1px solid var(--line-soft)', fontSize: 14, color: 'var(--ink-3)' }}>
          <h3 className="serif" style={{ fontSize: 24, marginBottom: 24, color: 'var(--ink)' }}>References</h3>
          <ol style={{ paddingLeft: 20, display: 'flex', flexDirection: 'column', gap: 16 }}>
            <li>American Medical Association. (2024). <em>Continuity of care in telehealth transitions</em>. <a href="https://www.ama-assn.org/practice-management/digital" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--brand)', textDecoration: 'underline' }}>https://www.ama-assn.org/practice-management/digital</a></li>
            <li>Federal Trade Commission. (2025). <em>FTC guidance on subscription service cancellation policies</em>. <a href="https://www.ftc.gov/legal-library/browse/rules/negative-option-rule" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--brand)', textDecoration: 'underline' }}>https://www.ftc.gov/legal-library/browse/rules/negative-option-rule</a></li>
          </ol>
        </div>
      </div>
    </div>
    </section>
  </>);
}
export { BlogSwitchGLP1Providers };
