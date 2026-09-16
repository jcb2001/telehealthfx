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
      tag: '1st Month $99 Promo',
      tagType: 'brand',
      price: '99',
      interval: '1st mo',
      priceLabel: 'Promo (Regular $190/mo)',
      intro: 'A once-weekly compounded GLP-1 injection designed to regulate appetite. $0 doctor fee, free cold-chain shipping. Affirm financing from $25/mo.',
      avg: 'Weight Loss',
      avgSub: 'Primary Benefit',
      ctaUrl: 'https://go.telehealthfx.com/start?url_id=11878',
      ctaLabel: 'Claim $99 First Month',
      learnMoreUrl: '/medications/semaglutide/',
      features: [
        '$99 First Month promotional rate',
        'Compounded by licensed US 503A pharmacies',
        'Free 2-Day cold shipping included',
        'Pay over time with Affirm (from $25/mo)',
      ],
    },
    {
      name: 'Tirzepatide',
      tag: '1st Month $99 Promo',
      tagType: 'accent',
      price: '99',
      interval: '1st mo',
      priceLabel: 'Promo (Regular $214/mo)',
      intro: 'A dual GIP/GLP-1 receptor agonist — the most effective GLP-1 class available. $0 doctor fee, free cold shipping. Affirm financing from $25/mo.',
      avg: 'Weight Loss',
      avgSub: 'Dual-Action Agonist',
      ctaUrl: 'https://go.telehealthfx.com/start?url_id=11875',
      ctaLabel: 'Claim $99 First Month',
      learnMoreUrl: '/medications/tirzepatide/',
      features: [
        '$99 First Month promotional rate',
        'Compounded by licensed US 503A pharmacies',
        'Free 2-Day cold shipping included',
        'Pay over time with Affirm (from $25/mo)',
      ],
    },
    {
      name: 'Semaglutide Tablets',
      tag: '1st Month $149 Promo',
      tagType: 'accent',
      price: '149',
      interval: '1st mo',
      priceLabel: 'Promo (Regular $217/mo)',
      intro: 'A convenient daily sublingual tablet containing compounded Semaglutide. Dissolves under the tongue with zero needles. Affirm from $37/mo.',
      avg: 'Sustained Satiety',
      avgSub: '100% Needle-Free',
      icon: 'pill',
      ctaUrl: 'https://go.telehealthfx.com/semaglutide-tablets',
      ctaLabel: 'Claim $149 First Month',
      learnMoreUrl: '/medications/semaglutide-tablets/',
      features: [
        'Easy once-daily dissolving tablet',
        'Daily oral semaglutide formulation',
        'Zero weekly injections or pain',
        'Pay over time with Affirm',
      ],
    },
    {
      name: 'Tirzepatide Tablets',
      tag: '1st Month $199 Promo',
      tagType: 'accent',
      price: '199',
      interval: '1st mo',
      priceLabel: 'Promo (Regular $222/mo)',
      intro: 'The ultimate daily sublingual tablet with dual GIP/GLP-1 action for maximum weight management. Zero needles. Affirm from $49/mo.',
      avg: 'Dual-Action Loss',
      avgSub: '100% Needle-Free',
      icon: 'pill',
      ctaUrl: 'https://go.telehealthfx.com/tirzepatide-tablets',
      ctaLabel: 'Claim $199 First Month',
      learnMoreUrl: '/medications/tirzepatide-tablets/',
      features: [
        'Dual GIP/GLP-1 receptor activation',
        'Powerful needle-free daily tablet',
        'Zero hidden membership fees',
        'Pay over time with Affirm',
      ],
    },
    {
      name: 'Wegovy®',
      tag: 'Brand GLP-1 · Save $100 1st Mo',
      tagType: 'accent',
      price: '899',
      interval: 'mo',
      priceLabel: 'Flat rate across all doses',
      intro: 'FDA-approved once-weekly semaglutide 2.4 mg injection for chronic weight management and cardiovascular risk reduction. 14.9% mean weight loss in STEP-1.',
      avg: '14.9% Weight Loss',
      avgSub: 'STEP-1 Landmark Efficacy',
      ctaUrl: 'https://go.telehealthfx.com/wegovy',
      ctaLabel: 'Claim $100 Off First Order',
      learnMoreUrl: '/medications/wegovy/',
      features: [
        'Save up to $100 on first month order',
        'FDA-approved for chronic weight management',
        '20% major adverse CV event reduction (SELECT)',
        'FSA & HSA eligible · Free cold shipping',
      ],
    },
    {
      name: 'Ozempic®',
      tag: 'Brand GLP-1 · Save $100 1st Mo',
      tagType: 'brand',
      price: '1,199',
      interval: 'mo',
      priceLabel: 'Flat rate across all doses',
      intro: 'FDA-approved semaglutide injection for type 2 diabetes glycemic control and cardiovascular protection. Proven 26% MACE risk reduction.',
      avg: 'A1C & CV Protection',
      avgSub: '26% MACE Hazard Reduction',
      ctaUrl: 'https://go.telehealthfx.com/ozempic',
      ctaLabel: 'Claim $100 Off First Order',
      learnMoreUrl: '/medications/ozempic/',
      features: [
        'Save up to $100 on first month order',
        'FDA-approved for type 2 diabetes & glycemic control',
        'Proven 26% cardiovascular risk reduction (SUSTAIN-6)',
        'FSA & HSA eligible · Licensed physician oversight',
      ],
    },
    {
      name: 'Zepbound™',
      tag: 'Dual GIP/GLP-1 · Save $100 1st Mo',
      tagType: 'accent',
      price: '1,199',
      interval: 'mo',
      priceLabel: 'Flat rate across all doses',
      intro: 'FDA-approved dual GIP/GLP-1 receptor agonist injection delivering up to 20.9% (52 lbs) mean weight loss in SURMOUNT-1. Unimolecular dual incretin therapy.',
      avg: '20.9% Weight Loss',
      avgSub: 'SURMOUNT-1 Dual Incretin',
      ctaUrl: 'https://go.telehealthfx.com/zepbound',
      ctaLabel: 'Claim $100 Off First Order',
      learnMoreUrl: '/medications/zepbound/',
      features: [
        'Save up to $100 on first month order',
        'Dual GIP and GLP-1 receptor co-agonist',
        'Superior weight loss vs single-receptor agonists',
        'FSA & HSA eligible · 24-hr clinical review',
      ],
    },
    {
      name: 'Mounjaro®',
      tag: 'Dual GIP/GLP-1 · Save $100 1st Mo',
      tagType: 'brand',
      price: '1,399',
      interval: 'mo',
      priceLabel: 'Flat rate across all doses',
      intro: 'FDA-approved once-weekly dual GIP/GLP-1 injectable for superior glycemic control. Demonstrated superiority over semaglutide 1.0 mg in SURPASS-2.',
      avg: '-2.30% HbA1c',
      avgSub: 'SURPASS-2 Head-to-Head',
      ctaUrl: 'https://go.telehealthfx.com/mounjaro',
      ctaLabel: 'Claim $100 Off First Order',
      learnMoreUrl: '/medications/mounjaro/',
      features: [
        'Save up to $100 on first month order',
        'Superior HbA1c reduction vs semaglutide 1.0 mg',
        'Mean weight reduction of -11.2 kg at 15 mg',
        'FSA & HSA eligible · Continuous physician care',
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
      name: 'Testosterone',
      tag: 'Men\u2019s Health',
      tagType: 'brand',
      price: '79',
      intro: 'Personalized TRT prescribed by licensed clinicians — injectable, oral, or topical. Restore energy, strength, and drive.',
      avg: 'Hormone Optimization',
      avgSub: 'Primary Benefit',
      ctaUrl: 'https://go.telehealthfx.com/testosterone',
      ctaLabel: 'Learn More',
      features: [
        'Injectable, oral, or topical options',
        'Licensed clinician oversight included',
        'Free discreet shipping',
        'Price match guarantee',
      ],
    },
    {
      name: 'Enclomiphene',
      tag: 'Oral TRT',
      tagType: 'accent',
      price: '89',
      intro: 'Boost your body\'s own testosterone up to 2.5x — no injections, no creams, no fertility suppression. The future of TRT.',
      avg: 'Natural T Boost',
      avgSub: 'Primary Benefit',
      ctaUrl: 'https://go.telehealthfx.com/enclomiphene',
      ctaLabel: 'Learn More',
      features: [
        'Up to 2.5x natural testosterone increase',
        'Preserves fertility & testicular function',
        'Daily oral capsule — no injections',
        'Free discreet shipping',
      ],
    },
    {
      name: 'ED Treatment',
      tag: 'Sexual Wellness',
      tagType: 'accent',
      price: '19',
      intro: 'Discreet, affordable ED medication — Sildenafil, Tadalafil, and custom compounds prescribed online and shipped in plain packaging.',
      avg: 'Sexual Performance',
      avgSub: 'Primary Benefit',
      ctaUrl: 'https://go.telehealthfx.com/ed',
      ctaLabel: 'Learn More',
      features: [
        'Sildenafil, Tadalafil, or custom compound',
        '100% online & discreet',
        'Free shipping in plain packaging',
        '24-hour clinician approval',
      ],
    },
    {
      name: 'Hair Loss',
      tag: 'Hair Restoration',
      tagType: 'brand',
      price: '29',
      intro: 'Clinician-prescribed Finasteride, Minoxidil, and custom compounds to slow, stop, and reverse hair loss — shipped discreetly.',
      avg: 'Hair Regrowth',
      avgSub: 'Primary Benefit',
      ctaUrl: 'https://go.telehealthfx.com/hair',
      ctaLabel: 'Learn More',
      features: [
        'Finasteride, Minoxidil, or custom compound',
        '100% online & discreet',
        'Free shipping in plain packaging',
        '24-hour clinician approval',
      ],
    },
    {
      name: 'Metformin',
      tag: 'Longevity',
      tagType: 'brand',
      price: '39',
      intro: 'The world\'s most studied anti-aging medication — prescribed online for metabolic optimization, insulin sensitivity, and healthy aging.',
      avg: 'Metabolic Health',
      avgSub: 'Primary Benefit',
      ctaUrl: 'https://go.telehealthfx.com/metformin',
      ctaLabel: 'Learn More',
      features: [
        'AMPK activation & mTOR suppression',
        'Physician-guided 500mg protocol',
        'Free discreet shipping',
        '60+ years of clinical safety data',
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
        {med.icon === 'patch' ? <Icon.Shield size={22} /> : med.icon === 'pill' ? <Icon.Pill size={22} /> : <Icon.Syringe size={22} />}
      </div>

      <h3 className="serif" style={{ fontSize: 48, marginBottom: 16 }}>{med.name}</h3>
      <p style={{ color: 'var(--ink-2)', marginBottom: 32, fontSize: 15, lineHeight: 1.55 }}>{med.intro}</p>

      <div className="flex-row stack-mobile" style={{ gap: 24, marginBottom: 32, paddingBottom: 28, borderBottom: '1px solid var(--line-soft)' }}>
        <div style={{ flex: 1, minWidth: 0 }}>
          <div className="serif" style={{ fontSize: 32, color: 'var(--brand)', whiteSpace: 'nowrap' }}>{med.avg}</div>
          <div style={{ fontSize: 12, color: 'var(--ink-3)', marginTop: 4 }}>{med.avgSub}</div>
        </div>
        <div style={{ flex: 1, minWidth: 0, borderLeft: '1px solid var(--line-soft)', paddingLeft: 24 }}>
          <div className="serif" style={{ fontSize: 32, whiteSpace: 'nowrap' }}>From ${med.price}<span style={{ fontSize: 16, color: 'var(--ink-3)' }}>{med.interval ? `/${med.interval}` : '/mo'}</span></div>
          <div style={{ fontSize: 12, color: 'var(--ink-3)', marginTop: 4 }}>{med.priceLabel || 'Starting Dose Pricing'}</div>
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

      <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
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
        {med.learnMoreUrl && (
          <a
            href={med.learnMoreUrl}
            style={{ textAlign: 'center', fontSize: 13, color: 'var(--brand)', textDecoration: 'none', fontWeight: 600, padding: '4px 0' }}
            onClick={(e) => e.stopPropagation()}
          >
            Clinical Guide & Titration Protocol →
          </a>
        )}
      </div>
    </div>
  );
}

export { PressStrip };
export { HowItWorks };
export { Medications };
