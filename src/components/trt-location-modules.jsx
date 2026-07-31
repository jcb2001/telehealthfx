"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import { Icon } from './common.jsx';

const TRT_URL = "https://go.telehealthfx.com/testosterone";

// ---------------------------------------------------------
// MODULE 1: HERO VARIATION A (Centered, Classic Premium)
// ---------------------------------------------------------
export function HeroVariationA({ stateName, cityName, headline, subheadline, ctaText }) {
  return (
    <section style={{ 
      position: 'relative', 
      paddingTop: 'clamp(100px, 15vw, 160px)', 
      paddingBottom: 'clamp(60px, 10vw, 100px)', 
      background: 'linear-gradient(180deg, #0A0F0D 0%, #15221A 100%)',
      color: '#fff',
      borderBottomLeftRadius: 'clamp(24px, 5vw, 60px)',
      borderBottomRightRadius: 'clamp(24px, 5vw, 60px)'
    }}>
      <div style={{ position: 'absolute', top: '-10%', right: '-20%', width: '70vw', height: '70vw', background: 'radial-gradient(circle, rgba(46, 204, 113, 0.15) 0%, transparent 60%)', filter: 'blur(80px)', zIndex: 0 }}></div>
      <div style={{ position: 'absolute', bottom: '-20%', left: '-10%', width: '50vw', height: '50vw', background: 'radial-gradient(circle, rgba(46, 74, 59, 0.4) 0%, transparent 60%)', filter: 'blur(60px)', zIndex: 0 }}></div>

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div className="row align-items-center justify-content-center text-center">
          <div className="col-lg-10">
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '6px 16px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 100, fontSize: 13, fontWeight: 600, letterSpacing: 1, textTransform: 'uppercase', marginBottom: 24, backdropFilter: 'blur(10px)' }}>
              <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#2ECC71', boxShadow: '0 0 10px #2ECC71' }}></div>
              {stateName} TRT Hub
            </div>
            
            <h1 className="serif" style={{ fontSize: 'clamp(40px, 6vw, 72px)', lineHeight: 1.1, marginBottom: 24, letterSpacing: '-0.02em' }} dangerouslySetInnerHTML={{ __html: headline }} />
            
            <p style={{ fontSize: 'clamp(16px, 2vw, 20px)', opacity: 0.9, marginBottom: 40, lineHeight: 1.6, maxWidth: 800, marginInline: 'auto' }} dangerouslySetInnerHTML={{ __html: subheadline }} />
            
            <a href={TRT_URL} style={{ display: 'inline-block', background: '#FBF8F3', color: '#0A0F0D', fontSize: 18, padding: '16px 36px', fontWeight: 600, borderRadius: 100, textDecoration: 'none', boxShadow: '0 8px 30px rgba(251, 248, 243, 0.2)', transition: 'transform 0.2s ease' }}>
              {ctaText}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

// ---------------------------------------------------------
// MODULE 2: HERO VARIATION B (Split Data Focus)
// ---------------------------------------------------------
export function HeroVariationB({ stateName, cityName, headline, subheadline, dataPoint1, dataPoint2 }) {
  return (
    <section style={{ 
      position: 'relative', 
      paddingTop: 'clamp(100px, 15vw, 160px)', 
      paddingBottom: 'clamp(60px, 10vw, 100px)', 
      background: '#0A0F0D',
      color: '#fff',
      borderBottom: '1px solid rgba(46, 204, 113, 0.2)'
    }}>
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div className="row align-items-center g-5">
          <div className="col-lg-7">
            <h1 className="serif" style={{ fontSize: 'clamp(40px, 5vw, 64px)', lineHeight: 1.1, marginBottom: 24 }} dangerouslySetInnerHTML={{ __html: headline }} />
            <p style={{ fontSize: 'clamp(16px, 2vw, 18px)', opacity: 0.8, marginBottom: 40, lineHeight: 1.6 }} dangerouslySetInnerHTML={{ __html: subheadline }} />
            <a href={TRT_URL} style={{ display: 'inline-flex', alignItems: 'center', gap: 12, background: '#2ECC71', color: '#000', fontSize: 16, padding: '16px 32px', fontWeight: 600, borderRadius: 100, textDecoration: 'none' }}>
              Verify {stateName} Eligibility <Icon.Arrow size={18} />
            </a>
          </div>
          <div className="col-lg-5">
            <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 24, padding: 32, backdropFilter: 'blur(20px)' }}>
              <div style={{ marginBottom: 24, paddingBottom: 24, borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                <div style={{ color: '#2ECC71', fontSize: 13, textTransform: 'uppercase', letterSpacing: 1, fontWeight: 600, marginBottom: 8 }}>Prevalence Fact</div>
                <div style={{ fontSize: 16, lineHeight: 1.5, opacity: 0.9 }}>{dataPoint1}</div>
              </div>
              <div>
                <div style={{ color: '#2ECC71', fontSize: 13, textTransform: 'uppercase', letterSpacing: 1, fontWeight: 600, marginBottom: 8 }}>Clinical Fact</div>
                <div style={{ fontSize: 16, lineHeight: 1.5, opacity: 0.9 }}>{dataPoint2}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ---------------------------------------------------------
// MODULE 3: CLINICAL DEEP DIVE (Text Heavy E-E-A-T)
// ---------------------------------------------------------
export function ClinicalDeepDive({ title, paragraphs, citations }) {
  return (
    <section style={{ padding: 'clamp(60px, 8vw, 100px) 0', background: '#FBF8F3' }}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-9">
            <h2 className="serif" style={{ fontSize: 'clamp(32px, 4vw, 48px)', color: 'var(--ink)', marginBottom: 40 }}>{title}</h2>
            {paragraphs.map((p, i) => (
              <p key={i} style={{ fontSize: 18, color: 'var(--ink-2)', lineHeight: 1.8, marginBottom: 24 }} dangerouslySetInnerHTML={{ __html: p }} />
            ))}
            {citations && citations.length > 0 && (
              <div style={{ marginTop: 40, paddingTop: 24, borderTop: '1px solid var(--line-soft)', fontSize: 13, color: 'var(--ink-3)' }}>
                <strong>Clinical Sources:</strong>
                <ol style={{ marginTop: 12, paddingLeft: 16, display: 'flex', flexDirection: 'column', gap: 8 }}>
                  {citations.map((c, i) => (
                    <li key={i} dangerouslySetInnerHTML={{ __html: c }} />
                  ))}
                </ol>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

// ---------------------------------------------------------
// MODULE 4: COST COMPARISON TABLE
// ---------------------------------------------------------
export function CostComparisonTable({ title, localCompetitors, telehealthPrice }) {
  return (
    <section style={{ padding: 'clamp(60px, 8vw, 100px) 0', background: '#fff' }}>
      <div className="container">
        <h2 className="serif text-center" style={{ fontSize: 'clamp(32px, 4vw, 48px)', marginBottom: 48, color: 'var(--ink)' }}>{title}</h2>
        <div className="table-responsive">
          <table className="table align-middle" style={{ minWidth: 700 }}>
            <thead>
              <tr style={{ borderBottom: '2px solid var(--ink)' }}>
                <th style={{ padding: '24px 16px', fontSize: 14, textTransform: 'uppercase', color: 'var(--ink-2)', fontWeight: 600 }}>Provider Type</th>
                <th style={{ padding: '24px 16px', fontSize: 14, textTransform: 'uppercase', color: 'var(--ink-2)', fontWeight: 600 }}>Avg. Monthly Cost</th>
                <th style={{ padding: '24px 16px', fontSize: 14, textTransform: 'uppercase', color: 'var(--ink-2)', fontWeight: 600 }}>Consultation Protocol</th>
                <th style={{ padding: '24px 16px', fontSize: 14, textTransform: 'uppercase', color: 'var(--ink-2)', fontWeight: 600 }}>Medication Access</th>
              </tr>
            </thead>
            <tbody>
              {localCompetitors.map((comp, i) => (
                <tr key={i} style={{ borderBottom: '1px solid var(--line-soft)' }}>
                  <td style={{ padding: '24px 16px', fontWeight: 600, color: 'var(--ink)' }} dangerouslySetInnerHTML={{ __html: comp.name }} />
                  <td style={{ padding: '24px 16px', color: '#e74c3c', fontWeight: 500 }}>{comp.cost}</td>
                  <td style={{ padding: '24px 16px', color: 'var(--ink-2)' }}>{comp.consult}</td>
                  <td style={{ padding: '24px 16px', color: 'var(--ink-2)' }}>{comp.access}</td>
                </tr>
              ))}
              <tr style={{ background: 'rgba(46, 204, 113, 0.05)' }}>
                <td style={{ padding: '24px 16px', fontWeight: 700, color: '#2ECC71' }}>Telehealth FX</td>
                <td style={{ padding: '24px 16px', color: '#2ECC71', fontWeight: 700 }}>{telehealthPrice}</td>
                <td style={{ padding: '24px 16px', color: 'var(--ink)' }}>100% Asynchronous Online</td>
                <td style={{ padding: '24px 16px', color: 'var(--ink)' }}>Overnight Cold-Pack Delivery</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

// ---------------------------------------------------------
// MODULE 5: EMPLOYER & INSURANCE BREAKDOWN
// ---------------------------------------------------------
export function InsuranceBreakdown({ title, employers, text }) {
  return (
    <section style={{ padding: 'clamp(60px, 8vw, 100px) 0', background: '#0A0F0D', color: '#fff' }}>
      <div className="container">
        <div className="row g-5 align-items-center">
          <div className="col-lg-6">
            <h2 className="serif" style={{ fontSize: 'clamp(32px, 4vw, 40px)', marginBottom: 24 }}>{title}</h2>
            <div style={{ fontSize: 18, opacity: 0.8, lineHeight: 1.7 }} dangerouslySetInnerHTML={{ __html: text }} />
          </div>
          <div className="col-lg-6">
            <div style={{ display: 'grid', gap: 16 }}>
              {employers.map((emp, i) => (
                <div key={i} style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', padding: 24, borderRadius: 16 }}>
                  <strong style={{ display: 'block', fontSize: 18, marginBottom: 8, color: '#e74c3c' }}>{emp.name}</strong>
                  <span style={{ fontSize: 15, opacity: 0.8, lineHeight: 1.5, display: 'block' }}>{emp.detail}</span>
                </div>
              ))}
              <div style={{ background: 'linear-gradient(135deg, rgba(46,204,113,0.15) 0%, transparent 100%)', border: '1px solid rgba(46,204,113,0.3)', padding: 24, borderRadius: 16 }}>
                <strong style={{ display: 'block', fontSize: 18, marginBottom: 8, color: '#2ECC71' }}>The FSA/HSA Bypass</strong>
                <span style={{ fontSize: 15, opacity: 0.9, lineHeight: 1.5, display: 'block' }}>Skip the prior authorization maze entirely. All Telehealth FX prescriptions and consultations are fully eligible for pre-tax FSA and HSA funds.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ---------------------------------------------------------
// MODULE 6: PATIENT ARCHETYPE (Case Study)
// ---------------------------------------------------------
export function PatientArchetype({ title, archetype, quote, details }) {
  return (
    <section style={{ padding: 'clamp(60px, 8vw, 100px) 0', background: '#FBF8F3' }}>
      <div className="container">
        <div style={{ background: '#fff', borderRadius: 32, padding: 'clamp(32px, 6vw, 64px)', boxShadow: '0 20px 40px rgba(0,0,0,0.05)', border: '1px solid var(--line-soft)' }}>
          <div className="row g-5 align-items-center">
            <div className="col-lg-5 text-center text-lg-start">
              <div style={{ width: 80, height: 80, background: 'var(--surface-2)', borderRadius: '50%', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', marginBottom: 24, color: 'var(--brand)' }}>
                <Icon.Shield size={32} />
              </div>
              <div style={{ color: 'var(--brand)', textTransform: 'uppercase', letterSpacing: 1, fontSize: 13, fontWeight: 600, marginBottom: 12 }}>Patient Archetype</div>
              <h3 className="serif" style={{ fontSize: 32, color: 'var(--ink)', marginBottom: 16 }}>{archetype}</h3>
            </div>
            <div className="col-lg-7 border-start border-2 border-light ps-lg-5">
              <blockquote style={{ fontSize: 22, fontStyle: 'italic', color: 'var(--ink)', lineHeight: 1.6, marginBottom: 24, borderLeft: '4px solid #2ECC71', paddingLeft: 24 }}>
                "{quote}"
              </blockquote>
              <div style={{ fontSize: 16, color: 'var(--ink-2)', lineHeight: 1.7 }} dangerouslySetInnerHTML={{ __html: details }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ---------------------------------------------------------
// MODULE 7: STATE LEGAL FRAMEWORK
// ---------------------------------------------------------
export function StateLegalFramework({ stateName, boardName, text }) {
  return (
    <section style={{ padding: 'clamp(60px, 8vw, 100px) 0', background: '#fff' }}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div style={{ borderLeft: '4px solid var(--brand)', paddingLeft: 32 }}>
              <div style={{ display: 'inline-block', background: 'rgba(46,204,113,0.1)', color: '#2ECC71', padding: '4px 12px', borderRadius: 100, fontSize: 12, fontWeight: 700, textTransform: 'uppercase', marginBottom: 16 }}>Regulatory Compliance</div>
              <h2 className="serif" style={{ fontSize: 'clamp(28px, 4vw, 36px)', color: 'var(--ink)', marginBottom: 24 }}>{stateName} Telehealth Statutes</h2>
              <div style={{ fontSize: 16, color: 'var(--ink-2)', lineHeight: 1.8 }} dangerouslySetInnerHTML={{ __html: text }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ---------------------------------------------------------
// MODULE 8: LOCAL TRANSIT PAIN (Original 503A Journey)
// ---------------------------------------------------------
export function LocalTransitPain({ title, transitText, hospitalText }) {
  return (
    <section style={{ padding: 'clamp(60px, 8vw, 100px) 0', background: '#FBF8F3' }}>
      <div className="container">
        <div className="row g-5">
          <div className="col-lg-6">
            <h2 className="serif" style={{ fontSize: 'clamp(32px, 4vw, 40px)', marginBottom: 24, lineHeight: 1.2, color: 'var(--ink)' }}>{title}</h2>
            <p style={{ fontSize: 18, color: 'var(--ink-2)', marginBottom: 24, lineHeight: 1.7 }} dangerouslySetInnerHTML={{ __html: transitText }} />
            <p style={{ fontSize: 18, color: 'var(--ink-2)', lineHeight: 1.7 }} dangerouslySetInnerHTML={{ __html: hospitalText }} />
          </div>
          <div className="col-lg-6">
            <div style={{ background: '#fff', padding: 'clamp(24px, 4vw, 40px)', borderRadius: 32, boxShadow: '0 20px 60px rgba(0,0,0,0.05)', border: '1px solid rgba(0,0,0,0.03)' }}>
              <h3 className="serif" style={{ fontSize: 24, marginBottom: 32, color: 'var(--ink)' }}>The Decentralized Protocol</h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 32 }}>
                <li style={{ display: 'flex', gap: 20 }}>
                  <div style={{ width: 40, height: 40, background: '#2ECC71', color: '#000', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', fontSize: 18, flexShrink: 0, boxShadow: '0 4px 12px rgba(46, 204, 113, 0.3)' }}>1</div>
                  <div>
                    <strong style={{ display: 'block', fontSize: 18, marginBottom: 8, color: 'var(--ink)' }}>Asynchronous Intake</strong>
                    <span style={{ color: 'var(--ink-2)', fontSize: 15, lineHeight: 1.6 }}>Zero waiting rooms. Complete your comprehensive health profile online on your schedule.</span>
                  </div>
                </li>
                <li style={{ display: 'flex', gap: 20 }}>
                  <div style={{ width: 40, height: 40, background: '#2ECC71', color: '#000', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', fontSize: 18, flexShrink: 0, boxShadow: '0 4px 12px rgba(46, 204, 113, 0.3)' }}>2</div>
                  <div>
                    <strong style={{ display: 'block', fontSize: 18, marginBottom: 8, color: 'var(--ink)' }}>Clinical Authorization</strong>
                    <span style={{ color: 'var(--ink-2)', fontSize: 15, lineHeight: 1.6 }}>A state-licensed provider reviews your data and writes an quality-verified TRT prescription.</span>
                  </div>
                </li>
                <li style={{ display: 'flex', gap: 20 }}>
                  <div style={{ width: 40, height: 40, background: '#2ECC71', color: '#000', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', fontSize: 18, flexShrink: 0, boxShadow: '0 4px 12px rgba(46, 204, 113, 0.3)' }}>3</div>
                  <div>
                    <strong style={{ display: 'block', fontSize: 18, marginBottom: 8, color: 'var(--ink)' }}>Direct Fulfillment</strong>
                    <span style={{ color: 'var(--ink-2)', fontSize: 15, lineHeight: 1.6 }}>Medication is prepared by a 503A pharmacy and cold-shipped directly to your residence.</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ---------------------------------------------------------
// MODULE 9: DELIVERY GRID WITH MAP
// ---------------------------------------------------------
export function DeliveryGridMap({ cityName, mapQuery, coordinates, counties, neighborhoods }) {
  return (
    <section style={{ padding: 'clamp(60px, 8vw, 100px) 0', background: '#fff', borderTop: '1px solid var(--line-soft)' }}>
      <div className="container">
        <div className="row g-5 align-items-center">
          <div className="col-lg-5 text-center text-lg-start">
            <h2 className="serif" style={{ fontSize: 'clamp(32px, 4vw, 40px)', marginBottom: 24, color: 'var(--ink)' }}>Geographic Coverage</h2>
            <p style={{ fontSize: 16, color: 'var(--ink-2)', marginBottom: 32, lineHeight: 1.7 }}>
              Our network fulfills testosterone prescriptions to all residential addresses across the {cityName} metropolitan statistical area.
            </p>
            <div style={{ background: '#FBF8F3', padding: 32, borderRadius: 24, textAlign: 'left', marginBottom: 32 }}>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, color: 'var(--ink-2)', fontSize: 14, display: 'flex', flexDirection: 'column', gap: 12 }}>
                <li style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid rgba(0,0,0,0.05)', paddingBottom: 8 }}>
                  <span>Coordinates</span> <strong>{coordinates}</strong>
                </li>
                <li style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                  <span>Counties Served:</span>
                  <strong style={{ lineHeight: 1.4 }}>{counties}</strong>
                </li>
              </ul>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
               {neighborhoods.map((n, i) => (
                 <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 14, color: 'var(--ink)' }}>
                   <div style={{ width: 6, height: 6, background: '#2ECC71', borderRadius: '50%' }}></div>
                   {n}
                 </div>
               ))}
            </div>
          </div>
          <div className="col-lg-7">
            <div style={{ width: '100%', height: '100%', minHeight: 450, borderRadius: 32, overflow: 'hidden', boxShadow: '0 24px 48px rgba(0,0,0,0.08)' }}>
              <iframe width="100%" height="100%" style={{ minHeight: 450, filter: 'grayscale(0.2) contrast(1.1)' }} src={`https://maps.google.com/maps?width=100%25&height=600&hl=en&q=${encodeURIComponent(mapQuery)}&t=&z=10&ie=UTF8&iwloc=B&output=embed`} frameBorder="0" allowFullScreen></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ---------------------------------------------------------
// MODULE 10: INTERACTIVE FAQ
// ---------------------------------------------------------
export function InteractiveFAQ({ faqs }) {
  const [openIndex, setOpenIndex] = useState(0);
  return (
    <section style={{ padding: 'clamp(60px, 8vw, 100px) 0', background: '#FBF8F3' }}>
      <div className="container">
        <h2 className="serif text-center" style={{ fontSize: 'clamp(32px, 4vw, 40px)', marginBottom: 48, color: 'var(--ink)' }}>Local Clinical FAQ</h2>
        <div style={{ maxWidth: 800, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 16 }}>
          {faqs.map((faq, i) => (
            <div key={i} style={{ background: '#fff', borderRadius: 16, border: '1px solid var(--line-soft)', overflow: 'hidden', cursor: 'pointer' }} onClick={() => setOpenIndex(openIndex === i ? -1 : i)}>
              <div style={{ padding: 24, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <h3 style={{ fontSize: 18, margin: 0, color: 'var(--ink)', fontWeight: 600 }}>{faq.q}</h3>
                <div style={{ transform: openIndex === i ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s' }}>
                  <Icon.Arrow size={20} color="var(--ink)" />
                </div>
              </div>
              <div style={{ padding: openIndex === i ? '0 24px 24px' : '0 24px', maxHeight: openIndex === i ? 500 : 0, overflow: 'hidden', transition: 'all 0.3s ease', opacity: openIndex === i ? 1 : 0, color: 'var(--ink-2)', lineHeight: 1.6 }} dangerouslySetInnerHTML={{ __html: faq.a }} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ---------------------------------------------------------
// MODULE 11: FINAL CTA BANNER
// ---------------------------------------------------------
export function FinalCTA({ stateName }) {
  return (
    <section style={{ padding: 'clamp(80px, 10vw, 120px) 0', background: 'var(--brand)', color: '#fff', textAlign: 'center' }}>
      <div className="container" style={{ maxWidth: 800 }}>
        <h2 className="serif" style={{ fontSize: 'clamp(40px, 5vw, 56px)', marginBottom: 24, color: '#fff' }}>Ready to optimize your testosterone?</h2>
        <p style={{ fontSize: 'clamp(18px, 2.5vw, 22px)', opacity: 0.9, marginBottom: 40, lineHeight: 1.6 }}>Join thousands of {stateName} men who have optimized their testosterone through clinical telehealth.</p>
        <a href={TRT_URL} style={{ display: 'inline-block', background: '#fff', color: 'var(--brand)', fontSize: 20, padding: '20px 48px', fontWeight: 600, borderRadius: 100, textDecoration: 'none', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}>
          Begin {stateName} TRT Evaluation
        </a>
      </div>
    </section>
  );
}
