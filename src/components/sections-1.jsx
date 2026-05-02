"use client";
import React, { useState, useEffect } from 'react';
import { Icon } from './common.jsx';


// ============================================================================
// PRESS / LOGO STRIP
// ============================================================================
function PressStrip() {
  const logos = [
    { alt: 'Vogue', src: 'https://upload.wikimedia.org/wikipedia/commons/9/99/Vogue.svg', height: 18 },
    { alt: 'The Cut', src: 'https://upload.wikimedia.org/wikipedia/commons/3/3c/The_Cut_logo.svg', height: 18 },
    { alt: 'Bloomberg', src: 'https://upload.wikimedia.org/wikipedia/commons/5/56/Bloomberg_logo.svg', height: 20 },
    { alt: 'WSJ', src: 'https://upload.wikimedia.org/wikipedia/commons/c/c4/The_Wall_Street_Journal_Logo.svg', height: 16 },
    { alt: 'Forbes', src: 'https://upload.wikimedia.org/wikipedia/commons/d/db/Forbes_logo.svg', height: 16 }
  ];
  return (
    <section style={{ padding: '40px 0', borderTop: '1px solid var(--line-soft)', borderBottom: '1px solid var(--line-soft)' }}>
      <div className="container flex-row flex-between press-strip" style={{ gap: 40, alignItems: 'center' }}>
        <span className="eyebrow" style={{ whiteSpace: 'nowrap' }}>As seen in</span>
        {logos.map(l => (
          <img key={l.alt} src={l.src} alt={l.alt} style={{ height: l.height, filter: 'grayscale(100%) opacity(50%) contrast(150%) brightness(0)', pointerEvents: 'none' }} />
        ))}
        <span style={{ fontFamily: 'var(--sans)', fontWeight: 800, fontSize: 16, letterSpacing: '-0.02em', textTransform: 'uppercase', color: 'var(--ink)', opacity: 0.5 }}>Well+Good</span>
      </div>
    </section>
  );
}

// ============================================================================
// HOW IT WORKS — 4 step process
// ============================================================================
function HowItWorks() {
  const steps = [
    { n: '01', icon: <Icon.Clipboard size={20}/>, title: 'Complete your health quiz', desc: 'Answer questions about your health, weight history, and goals. Takes about 2 minutes.' },
    { n: '02', icon: <Icon.Chat size={20}/>, title: '24-Hour Provider Review', desc: 'A licensed provider reviews your intake within 24 hours to determine your personalized treatment plan.' },
    { n: '03', icon: <Icon.Truck size={20}/>, title: '2-Day UPS Delivery', desc: 'Medication is compounded by a licensed US pharmacy and shipped directly to your door.' },
    { n: '04', icon: <Icon.Leaf size={20}/>, title: '1-on-1 Support', desc: 'Dedicated onboarding calls and responsive support via your patient portal to ensure your success.' },
  ];
  return (
    <section id="how" className="section">
      <div className="container">
        <div className="flex-row stack-mobile" style={{ justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 72, gap: 32 }}>
          <div style={{ maxWidth: 560 }}>
            <div className="eyebrow" style={{ marginBottom: 20 }}>How it works</div>
            <h2 className="serif" style={{ fontSize: 64 }}>
              A clinical program,<br/><span style={{ fontStyle: 'italic', color: 'var(--brand)' }}>built around you.</span>
            </h2>
          </div>
          <p style={{ maxWidth: 360, color: 'var(--ink-2)', fontSize: 16, lineHeight: 1.55 }}>
            From intake to delivery in just a few days. No hidden fees, no insurance hurdles — just personalized, transparent care.
          </p>
        </div>

        <div className="grid-4">
          {steps.map((s, i) => (
            <div key={i} style={{ padding: '32px 0', borderTop: '1px solid var(--line)', position: 'relative' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 40 }}>
                <span className="mono" style={{ color: 'var(--ink-3)' }}>{s.n}</span>
                <div style={{ width: 40, height: 40, borderRadius: 999, background: 'var(--bg-card)', border: '1px solid var(--line)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--brand)' }}>
                  {s.icon}
                </div>
              </div>
              <h3 className="serif" style={{ fontSize: 26, marginBottom: 12, lineHeight: 1.1 }}>{s.title}</h3>
              <p style={{ fontSize: 14, color: 'var(--ink-2)', lineHeight: 1.55 }}>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============================================================================
// MEDICATIONS — Semaglutide + Tirzepatide comparison
// ============================================================================
function Medications() {
  const [selected, setSelected] = React.useState(0);
  const meds = [
    {
      name: 'Semaglutide',
      tag: 'Most popular',
      tagType: 'brand',
      price: '146',
      intro: 'A once-weekly GLP-1 injection designed to support weight management by helping regulate appetite.',
      avg: 'Weight Loss',
      avgSub: 'Primary Benefit',
      features: [
        'Zero hidden membership fees',
        'Compounded by licensed US pharmacies',
        '2-Day UPS Shipping included',
        '1-on-1 welcome onboarding call',
      ],
    },
    {
      name: 'Tirzepatide',
      tag: 'Strongest results',
      tagType: 'accent',
      price: '258',
      intro: 'A dual GIP/GLP-1 receptor agonist — the most effective GLP-1 class available for weight loss.',
      avg: 'Weight Loss',
      avgSub: 'Primary Benefit',
      features: [
        'Zero hidden membership fees',
        'Compounded by licensed US pharmacies',
        '2-Day UPS Shipping included',
        '1-on-1 welcome onboarding call',
      ],
    },
    {
      name: 'NAD+',
      tag: 'Cellular Energy',
      tagType: 'brand',
      price: '199',
      intro: 'A therapy designed to support cellular energy, focus, metabolism, and healthy aging.',
      avg: 'Longevity',
      avgSub: 'Primary Benefit',
      features: [
        'Supports natural energy production',
        'Compounded by licensed US pharmacies',
        '2-Day UPS Shipping included',
        '1-on-1 welcome onboarding call',
      ],
    },
    {
      name: 'Sermorelin',
      tag: 'Recovery',
      tagType: 'accent',
      price: '199',
      intro: 'A daily peptide injection designed to support natural growth hormone production, sleep quality, and recovery.',
      avg: 'Muscle Recovery',
      avgSub: 'Primary Benefit',
      features: [
        'Improves sleep and recovery',
        'Compounded by licensed US pharmacies',
        '2-Day UPS Shipping included',
        '1-on-1 welcome onboarding call',
      ],
    },
    {
      name: 'Berberine',
      tag: 'Natural AMPK',
      tagType: 'brand',
      price: '30',
      intro: 'Medical-grade 24-hour transdermal patches for sustained AMPK activation — zero stomach issues, bypass oral bioavailability problems.',
      avg: 'Metabolic Support',
      avgSub: 'Primary Benefit',
      icon: 'patch',
      ctaUrl: 'https://go.telehealthfx.com/berberine',
      ctaLabel: 'Shop Berberine Patches',
      features: [
        '24-hour sustained transdermal delivery',
        'Zero GI side effects',
        'Supports insulin sensitivity & fat loss',
        'No prescription required',
      ],
    },
  ];
  return (
    <section id="treatments" className="section" style={{ background: 'var(--bg-alt)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: 72 }}>
          <div className="eyebrow" style={{ marginBottom: 20 }}>Treatments</div>
          <h2 className="serif" style={{ fontSize: 64, marginBottom: 16 }}>
            Personalized treatments.<br/><span style={{ fontStyle: 'italic', color: 'var(--brand)' }}>100% transparent care.</span>
          </h2>
          <p style={{ maxWidth: 520, margin: '0 auto', color: 'var(--ink-2)', fontSize: 16 }}>
            Your clinician recommends the treatment that fits your goals, history, and biology.
          </p>
        </div>

        <div className="grid-2">
          {meds.map((m, i) => (
            <MedCard key={i} med={m} selected={selected === i} onSelect={() => setSelected(i)} />
          ))}
        </div>
      </div>
    </section>
  );
}

function MedCard({ med, selected, onSelect }) {
  return (
    <div
      onClick={onSelect}
      className="card"
      style={{
        padding: 40,
        cursor: 'pointer',
        borderColor: selected ? 'var(--brand)' : 'var(--line-soft)',
        borderWidth: selected ? 2 : 1,
        transition: 'all .25s ease',
        background: selected ? '#FFFDF9' : 'var(--bg-card)',
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 28 }}>
        <div>
          <div className={`pill ${med.tagType === 'brand' ? 'pill-brand' : ''}`} style={med.tagType === 'accent' ? { background: 'rgba(199, 125, 92, 0.12)', borderColor: 'rgba(199, 125, 92, 0.3)', color: 'var(--accent)' } : {}}>
            <span style={{ width: 6, height: 6, borderRadius: '50%', background: med.tagType === 'brand' ? 'var(--brand)' : 'var(--accent)' }}/>
            {med.tag}
          </div>
        </div>
        {med.icon === 'patch' ? <Icon.Shield size={22} /> : <Icon.Syringe size={22} />}
      </div>

      <h3 className="serif" style={{ fontSize: 48, marginBottom: 16 }}>{med.name}</h3>
      <p style={{ color: 'var(--ink-2)', marginBottom: 32, fontSize: 15, lineHeight: 1.55 }}>{med.intro}</p>

      <div className="flex-row stack-mobile" style={{ gap: 24, marginBottom: 32, paddingBottom: 28, borderBottom: '1px solid var(--line-soft)' }}>
        <div style={{ flex: 1, minWidth: 0 }}>
          <div className="serif" style={{ fontSize: 32, color: 'var(--brand)', whiteSpace: 'nowrap' }}>{med.avg}</div>
          <div style={{ fontSize: 12, color: 'var(--ink-3)', marginTop: 4 }}>{med.avgSub}</div>
        </div>
        <div style={{ flex: 1, minWidth: 0, borderLeft: '1px solid var(--line-soft)', paddingLeft: 24 }}>
          <div className="serif" style={{ fontSize: 32, whiteSpace: 'nowrap' }}>From ${med.price}<span style={{ fontSize: 16, color: 'var(--ink-3)' }}>/mo</span></div>
          <div style={{ fontSize: 12, color: 'var(--ink-3)', marginTop: 4 }}>Starting Dose Pricing</div>
        </div>
      </div>

      <ul style={{ listStyle: 'none', marginBottom: 32, display: 'flex', flexDirection: 'column', gap: 12 }}>
        {med.features.map((f, i) => (
          <li key={i} style={{ display: 'flex', gap: 12, alignItems: 'center', fontSize: 14, color: 'var(--ink-2)' }}>
            <span style={{ color: 'var(--brand)' }}><Icon.Check size={14}/></span>
            {f}
          </li>
        ))}
      </ul>

      <a
        className="btn btn-primary"
        href={med.ctaUrl || 'https://go.telehealthfx.com/start'}
        target="_blank"
        rel="noopener noreferrer"
        style={{ width: '100%', justifyContent: 'center', display: 'inline-flex' }}
        onClick={(e) => e.stopPropagation()}
      >
        {med.ctaLabel || 'See If You Qualify'} <Icon.Arrow />
      </a>
    </div>
  );
}

export { PressStrip };
export { HowItWorks };
export { Medications };
