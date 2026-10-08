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
      tag: 'Flat Rate · All Doses',
      tagType: 'brand',
      price: '79',
      interval: 'mo',
      priceLabel: 'Flat Rate (Same Price Any Dose)',
      rating: { score: '4.9', count: 218 },
      reviewSnippet: { quote: 'Lost 32 lbs in 3 months. The process was completely seamless.', author: 'Michael T.' },
      intro: 'A once-weekly compounded GLP-1 injection designed to regulate appetite. $0 doctor fee, free cold-chain shipping. Flat rate across all doses.',
      avg: 'Weight Loss',
      avgSub: 'Primary Benefit',
      ctaUrl: 'https://go.telehealthfx.com/coreage-semaglutide',
      ctaLabel: 'Get Started for $79/mo',
      learnMoreUrl: '/medications/semaglutide/',
      features: [
        '$79/month Flat Rate — Same price on all doses',
        'Compounded by licensed US 503A pharmacies',
        'Free 2-Day cold shipping included',
        'Zero membership fees · $0 clinician consult',
      ],
    },
    {
      name: 'Tirzepatide',
      tag: 'Flat Rate · All Doses',
      tagType: 'accent',
      price: '129',
      interval: 'mo',
      priceLabel: 'Flat Rate (Same Price Any Dose)',
      rating: { score: '4.8', count: 142 },
      reviewSnippet: { quote: 'Accelerated my weight loss dramatically. Down 41 lbs in 4 months.', author: 'James L.' },
      intro: 'A dual GIP/GLP-1 receptor agonist — the most effective GLP-1 class available. $0 doctor fee, free cold shipping. Flat rate across all doses.',
      avg: 'Weight Loss',
      avgSub: 'Dual-Action Agonist',
      ctaUrl: 'https://go.telehealthfx.com/coreage-tirzepatide',
      ctaLabel: 'Get Started for $129/mo',
      learnMoreUrl: '/medications/tirzepatide/',
      features: [
        '$129/month Flat Rate — Same price on all doses',
        'Dual GIP + GLP-1 receptor agonist action',
        'Compounded by licensed US 503A pharmacies',
        'Zero membership fees · $0 clinician consult',
      ],
    },
    {
      name: 'NAD+ Cellular Therapy',
      tag: 'Longevity & Energy',
      tagType: 'brand',
      price: '99',
      interval: 'mo',
      priceLabel: 'Flat rate · Everything included',
      rating: { score: '4.9', count: 112 },
      reviewSnippet: { quote: 'Brain fog cleared up after week 2. Daily energy is rock solid.', author: 'Brandon K.' },
      intro: 'Pure pharmaceutical-grade Nicotinamide Adenine Dinucleotide. Recharges cellular ATP, activates sirtuins, and restores energy at the cellular level.',
      avg: 'Cellular Energy',
      avgSub: 'Primary Benefit',
      ctaUrl: 'https://go.telehealthfx.com/nad',
      ctaLabel: 'Get NAD+ for $99/mo',
      learnMoreUrl: '/medications/nad/',
      features: [
        'Flat $99/mo with clinician review & shipping',
        '100% bioavailable subcutaneous injection',
        'Supports natural mitochondrial energy',
        'Compounded by licensed US pharmacies',
      ],
    },
    {
      name: 'Sermorelin Peptide',
      tag: 'Growth Hormone Support',
      tagType: 'accent',
      price: '99',
      interval: 'mo',
      priceLabel: 'Flat rate · Everything included',
      rating: { score: '4.8', count: 96 },
      reviewSnippet: { quote: 'Deep sleep improved in 10 days. Workout recovery is night and day.', author: 'Gregory T.' },
      intro: 'Bio-identical GHRH secretagogue peptide. Stimulates natural pituitary growth hormone release to protect lean muscle, accelerate recovery, and deepen sleep.',
      avg: 'Muscle & Sleep',
      avgSub: 'Primary Benefit',
      ctaUrl: 'https://go.telehealthfx.com/sermorelin',
      ctaLabel: 'Get Sermorelin for $99/mo',
      learnMoreUrl: '/medications/sermorelin/',
      features: [
        'Flat $99/mo — zero hidden fees or escalators',
        'Stimulates natural endogenous GH release',
        'Deep REM sleep & lean muscle preservation',
        'Prescription & cold shipping included',
      ],
    },
    {
      name: 'Testosterone (TRT)',
      tag: 'Hormone Optimization',
      tagType: 'brand',
      price: '93',
      interval: 'mo',
      priceLabel: 'Starting as low as $93/mo',
      rating: { score: '4.9', count: 187 },
      reviewSnippet: { quote: 'Total T went from 280 to 850. Energy and sleep completely transformed.', author: 'Robert H.' },
      intro: 'Board-certified physician-supervised TRT. Clinical-grade Testosterone Cypionate to optimize energy, physique, stamina, and libido.',
      avg: 'Vitality & Drive',
      avgSub: 'Primary Benefit',
      ctaUrl: 'https://go.telehealthfx.com/coreage-trt',
      ctaLabel: 'Start TRT Online',
      learnMoreUrl: '/medications/testosterone/',
      features: [
        'Starting as low as $93/mo ($99/mo standard)',
        'Full licensed clinician evaluation included',
        'Injectable Cypionate with complete supplies',
        'Free discreet home delivery',
      ],
    },
    {
      name: '4Play ED Treatment',
      tag: 'Custom Compound',
      tagType: 'accent',
      price: '18',
      interval: 'dose',
      priceLabel: 'Starting at $18 per dose',
      rating: { score: '4.9', count: 263 },
      reviewSnippet: { quote: 'Discreet from start to finish. Works perfectly — confidence restored.', author: 'Kevin S.' },
      intro: 'Next-generation 4-in-1 sublingual melt combining Tadalafil, Sildenafil, and Apomorphine. 15-minute rapid onset with sustained confidence.',
      avg: '15-Min Onset',
      avgSub: 'Primary Benefit',
      ctaUrl: 'https://go.telehealthfx.com/coreage-ed',
      ctaLabel: 'Claim 4Play ED Treatment',
      learnMoreUrl: '/medications/ed/',
      features: [
        'Just $18 per dose (4 active ingredients)',
        'Rapid sublingual absorption (under 15 mins)',
        'Dual vascular and dopamine pathway support',
        '100% online & discreet packaging',
      ],
    },
    {
      name: 'Bounce Back Copper Peptide',
      tag: 'GHK-Cu Skin Remodeling',
      tagType: 'brand',
      price: '64.99',
      interval: 'mo',
      priceLabel: 'Starting at $64.99/mo',
      rating: { score: '4.9', count: 176 },
      reviewSnippet: { quote: 'Within 3 weeks the firmness along my jawline was dramatically visible.', author: 'Sophia G.' },
      intro: 'Prescription-strength GHK-Cu copper tripeptide serum. Commands fibroblasts to synthesize collagen and elastin, restoring dermal firmness without retinol flaking.',
      avg: 'Dermal Firmness',
      avgSub: 'Primary Benefit',
      ctaUrl: 'https://go.telehealthfx.com/copper-peptide',
      ctaLabel: 'Claim Bounce Back',
      learnMoreUrl: '/medications/copper-peptide/',
      features: [
        'From $64.99/mo ($80 one-time purchase)',
        'Pure clinical GHK-Cu copper tripeptide',
        'Stimulates collagen I, III & elastin remodeling',
        'Zero irritation or barrier breakdown',
      ],
    },
    {
      name: 'Pore Favor Minimizer',
      tag: 'Pore & Sebum Control',
      tagType: 'accent',
      price: '42',
      interval: 'mo',
      priceLabel: 'Starting at $42/mo',
      rating: { score: '4.8', count: 142 },
      reviewSnippet: { quote: 'My skin looks airbrushed and stays matte all day. Cleared stubborn pores.', author: 'Chloe M.' },
      intro: 'Doctor-prescribed clarifying and pore-refining topical therapy. Clears oxidized follicular sebum plugs and tightens dilated pore walls for smooth glass skin.',
      avg: 'Pore Tightening',
      avgSub: 'Primary Benefit',
      ctaUrl: 'https://go.telehealthfx.com/pore-favor',
      ctaLabel: 'Claim Pore Favor',
      learnMoreUrl: '/medications/pore-favor/',
      features: [
        'Starting at $42/month with free shipping',
        'Dissolves deep pilosebaceous congestion',
        '24-hour non-stripping sebum regulation',
        'Micro-texture smoothing & glass skin glow',
      ],
    },
    {
      name: 'Smooth Move Retinoid',
      tag: 'Anti-Aging Gold Standard',
      tagType: 'brand',
      price: '42',
      interval: 'mo',
      priceLabel: 'Starting at $42/mo',
      rating: { score: '4.9', count: 194 },
      reviewSnippet: { quote: 'Erased crow\'s feet and smile lines with zero redness. Pure clinical quality.', author: 'Claire V.' },
      intro: 'Real prescription retinoic acid custom-compounded in a lipid-rich, barrier-soothing base. Eradicates wrinkles and accelerates cellular turnover without peeling.',
      avg: 'Wrinkle Reversal',
      avgSub: 'Primary Benefit',
      ctaUrl: 'https://go.telehealthfx.com/retinoid',
      ctaLabel: 'Claim Smooth Move',
      learnMoreUrl: '/medications/smooth-move/',
      features: [
        'Starting at $42/month — no long-term contracts',
        'Up to 20x more potent than OTC retinol',
        'Barrier-protected emulsion prevents flaking',
        'Rebuilds dermal collagen and smooths lines',
      ],
    },
    {
      name: 'Spot On Dark Spot Eraser',
      tag: 'Melasma & Sun Spots',
      tagType: 'accent',
      price: '54.99',
      interval: 'mo',
      priceLabel: 'Starting at $54.99/mo',
      rating: { score: '4.9', count: 165 },
      reviewSnippet: { quote: 'Post-pregnancy melasma on my forehead disappeared in 6 weeks.', author: 'Elena R.' },
      intro: 'Doctor-prescribed targeted hyperpigmentation treatment. Powerful clinical tyrosinase inhibitors switch off overactive melanocytes to erase stubborn dark marks.',
      avg: 'Spot Clearing',
      avgSub: 'Primary Benefit',
      ctaUrl: 'https://go.telehealthfx.com/spot-on',
      ctaLabel: 'Claim Spot On',
      learnMoreUrl: '/medications/spot-on/',
      features: [
        'Starting at $54.99/month with free shipping',
        'Blocks tyrosinase enzyme at the cellular source',
        'Fades melasma, solar lentigines & post-acne marks',
        'Clinician-formulated for gentle daily use',
      ],
    },
    {
      name: 'Time Out Peptide Firming',
      tag: 'Biomimetic Neuro-Peptide',
      tagType: 'brand',
      price: '48',
      interval: 'mo',
      priceLabel: 'Starting at $48/mo',
      rating: { score: '4.9', count: 188 },
      reviewSnippet: { quote: 'Softened my 11 lines between the brows and lifted the skin along my jaw.', author: 'Brooke S.' },
      intro: 'Needle-free line-relaxing peptide serum. Calms repetitive facial micro-tensions to soften dynamic expression creases and lift lax facial and neck contours.',
      avg: 'Line Relaxing',
      avgSub: 'Primary Benefit',
      ctaUrl: 'https://go.telehealthfx.com/time-out',
      ctaLabel: 'Claim Time Out',
      learnMoreUrl: '/medications/time-out/',
      features: [
        'Starting at $48/month, never auto-billed',
        'Biomimetic peptides attenuate facial micro-tensions',
        'Softens forehead lines, 11s, and crow\'s feet',
        'Plumps micro-depressions with deep hydration',
      ],
    },
    {
      name: 'Bio-Identical Estrogen HRT',
      tag: 'Hormone Optimization',
      tagType: 'accent',
      price: '42',
      interval: 'mo',
      priceLabel: 'Starting at $42/mo',
      rating: { score: '4.9', count: 156 },
      reviewSnippet: { quote: 'Hot flashes and sleep disruptions vanished in 2 weeks. Life changing.', author: 'Rachel M.' },
      intro: 'Bio-identical 17β-estradiol hormone replacement therapy. Relieves vasomotor hot flashes, resolves night sweats, and protects bone density and heart health.',
      avg: 'Symptom Relief',
      avgSub: 'Primary Benefit',
      ctaUrl: 'https://go.telehealthfx.com/estrogen',
      ctaLabel: 'Get Estrogen HRT',
      learnMoreUrl: '/medications/estrogen/',
      features: [
        'Starting at $42/month with doctor consult',
        'Bio-identical 17β-estradiol formulations',
        'Relieves hot flashes, brain fog & night sweats',
        'Cardiovascular and bone density protection',
      ],
    },
    {
      name: 'Progesterone Oral HRT',
      tag: 'Bio-Identical Balance',
      tagType: 'brand',
      price: '64.99',
      interval: 'mo',
      priceLabel: 'Starting at $64.99/mo',
      rating: { score: '4.8', count: 138 },
      reviewSnippet: { quote: 'Restored my deep sleep and completely calmed perimenopausal anxiety.', author: 'Jennifer D.' },
      intro: 'Micronized bio-identical progesterone. Protects the uterine lining, stimulates calming neuro-GABA receptors for restorative sleep, and balances hormonal mood.',
      avg: 'Restorative Sleep',
      avgSub: 'Primary Benefit',
      ctaUrl: 'https://go.telehealthfx.com/progesterone',
      ctaLabel: 'Get Progesterone HRT',
      learnMoreUrl: '/medications/progesterone/',
      features: [
        'Starting at $64.99/month with clinician review',
        'Micronized bio-identical oral progesterone',
        'Activates soothing GABA receptors for sleep',
        'Essential endometrial protection for HRT',
      ],
    },
    {
      name: 'Thyroid Replacement (T3/T4)',
      tag: 'Metabolic Optimization',
      tagType: 'accent',
      price: '42',
      interval: 'mo',
      priceLabel: 'Starting at $42/mo',
      rating: { score: '4.9', count: 147 },
      reviewSnippet: { quote: 'Finally broke through my metabolic plateau. Fatigue is gone.', author: 'Laura S.' },
      intro: 'Physician-supervised compounded Levothyroxine (T4) and Liothyronine (T3). Restores cellular metabolic rate, clears chronic fatigue, and resolves temperature sensitivity.',
      avg: 'Metabolic Drive',
      avgSub: 'Primary Benefit',
      ctaUrl: 'https://go.telehealthfx.com/thyroid',
      ctaLabel: 'Get Thyroid Care',
      learnMoreUrl: '/medications/thyroid/',
      features: [
        'Starting at $42/month with lab monitoring',
        'Synergistic T4 and T3 hormone balance',
        'Reignites sluggish basal metabolic rate',
        'Personalized compounding & home delivery',
      ],
    },
    {
      name: 'Semaglutide Tablets',
      tag: '1st Month $149 Promo',
      tagType: 'accent',
      price: '149',
      interval: '1st mo',
      priceLabel: 'Promo (Regular $217/mo)',
      rating: { score: '4.9', count: 68 },
      reviewSnippet: { quote: 'Dissolves quickly, zero needles, down 15 lbs already.', author: 'Robert E.' },
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
      rating: { score: '4.8', count: 82 },
      reviewSnippet: { quote: 'Needle-free option is exactly what I wanted. Down 31 lbs.', author: 'Emily B.' },
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
      name: 'Sublingual Semaglutide Drops',
      tag: 'Liquid Drops',
      tagType: 'accent',
      price: '149',
      interval: 'mo',
      priceLabel: 'Monthly subscription',
      rating: { score: '4.8', count: 54 },
      reviewSnippet: { quote: 'So simple to take under the tongue every morning. No needles at all.', author: 'Karen M.' },
      intro: 'Needle-free liquid sublingual semaglutide drops. Fast oral mucosal absorption designed for patients who prefer fluid titration over injectables.',
      avg: 'Oral Drops',
      avgSub: 'Primary Benefit',
      icon: 'pill',
      ctaUrl: 'https://go.telehealthfx.com/sublingual-semaglutide',
      ctaLabel: 'Get Sublingual Drops',
      learnMoreUrl: '/medications/sublingual-semaglutide/',
      features: [
        'Liquid sublingual mucosal delivery',
        'Customizable drop titration schedule',
        'Zero needles or painful injections',
        'Compounded in licensed 503A US pharmacy',
      ],
    },
    {
      name: 'Wegovy®',
      tag: 'Brand GLP-1 · Save $100 1st Mo',
      tagType: 'accent',
      price: '899',
      interval: 'mo',
      priceLabel: 'Flat rate across all doses',
      rating: { score: '4.9', count: 246 },
      reviewSnippet: { quote: 'Down 38 lbs on authentic Wegovy with flat predictable pricing.', author: 'Jennifer M.' },
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
      rating: { score: '4.9', count: 184 },
      reviewSnippet: { quote: 'A1C dropped from 7.8% to 5.9% in 5 months. Excellent physician care.', author: 'William K.' },
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
      rating: { score: '4.9', count: 192 },
      reviewSnippet: { quote: 'Down 46 lbs on Zepbound with virtually zero nausea.', author: 'Marcus D.' },
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
      rating: { score: '4.8', count: 158 },
      reviewSnippet: { quote: 'SURPASS-2 convinced me. A1C dropped from 8.1% to 5.4%.', author: 'Richard G.' },
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
      name: 'Enclomiphene',
      tag: 'Oral TRT',
      tagType: 'accent',
      price: '89',
      interval: 'mo',
      rating: { score: '4.8', count: 94 },
      reviewSnippet: { quote: 'T nearly doubled in 8 weeks with no needles and fertility intact.', author: 'Tyler B.' },
      intro: 'Boost your body\'s own testosterone up to 2.5x — no injections, no creams, no fertility suppression. The future of TRT.',
      avg: 'Natural T Boost',
      avgSub: 'Primary Benefit',
      ctaUrl: 'https://go.telehealthfx.com/enclomiphene',
      ctaLabel: 'Learn More',
      learnMoreUrl: '/medications/enclomiphene/',
      features: [
        'Up to 2.5x natural testosterone increase',
        'Preserves fertility & testicular function',
        'Daily oral capsule — no injections',
        'Free discreet shipping',
      ],
    },
    {
      name: 'Hair Loss',
      tag: 'Hair Restoration',
      tagType: 'brand',
      price: '29',
      interval: 'mo',
      rating: { score: '4.7', count: 156 },
      reviewSnippet: { quote: 'Noticed hairline filling in around month 4. Combo really works.', author: 'Jason P.' },
      intro: 'Clinician-prescribed Finasteride, Minoxidil, and custom compounds to slow, stop, and reverse hair loss — shipped discreetly.',
      avg: 'Hair Regrowth',
      avgSub: 'Primary Benefit',
      ctaUrl: 'https://go.telehealthfx.com/hair',
      ctaLabel: 'Learn More',
      learnMoreUrl: '/medications/hair-loss/',
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
      interval: 'mo',
      rating: { score: '4.8', count: 108 },
      reviewSnippet: { quote: 'Fasting glucose dropped from 102 to 87 in 6 weeks. Great care.', author: 'Andrew L.' },
      intro: 'The world\'s most studied anti-aging medication — prescribed online for metabolic optimization, insulin sensitivity, and healthy aging.',
      avg: 'Metabolic Health',
      avgSub: 'Primary Benefit',
      ctaUrl: 'https://go.telehealthfx.com/metformin',
      ctaLabel: 'Learn More',
      learnMoreUrl: '/medications/metformin/',
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
      interval: 'mo',
      rating: { score: '4.8', count: 86 },
      reviewSnippet: { quote: 'Zero stomach issues. 24-hr patch is a game changer for metabolic health.', author: 'Stacey L.' },
      intro: 'Medical-grade 24-hour transdermal patches for sustained AMPK activation — zero stomach issues, bypass oral bioavailability problems.',
      avg: 'Metabolic Support',
      avgSub: 'Primary Benefit',
      icon: 'patch',
      ctaUrl: 'https://go.telehealthfx.com/berberine',
      ctaLabel: 'Shop Berberine Patches',
      learnMoreUrl: '/medications/berberine/',
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

        <div style={{ textAlign: 'center', marginTop: 48 }}>
          <a
            href="/medications/"
            className="btn btn-outline btn-lg"
            style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: '#ffffff' }}
          >
            Explore All 20+ Telehealth Medications &amp; Protocols <Icon.Arrow />
          </a>
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
      {med.rating && (
        <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginTop: -8, marginBottom: 16 }}>
          <div style={{ display: 'flex', gap: 2, color: 'var(--accent)' }}>
            {[...Array(5)].map((_, i) => (
              <Icon.Star key={i} size={13} />
            ))}
          </div>
          <span style={{ fontSize: 13, fontWeight: 600, color: 'var(--ink)' }}>{med.rating.score}</span>
          <span style={{ fontSize: 13, color: 'var(--ink-3)' }}>({med.rating.count} reviews)</span>
        </div>
      )}
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

      <ul style={{ listStyle: 'none', marginBottom: 24, display: 'flex', flexDirection: 'column', gap: 12 }}>
        {med.features.map((f, i) => (
          <li key={i} style={{ display: 'flex', gap: 12, alignItems: 'center', fontSize: 14, color: 'var(--ink-2)' }}>
            <span style={{ color: 'var(--brand)' }}><Icon.Check size={14}/></span>
            {f}
          </li>
        ))}
      </ul>

      {med.reviewSnippet && (
        <div style={{ background: '#FAF7F2', borderRadius: 12, padding: '12px 16px', marginBottom: 20, borderLeft: '3px solid var(--accent)' }}>
          <p style={{ fontSize: 13, fontStyle: 'italic', color: 'var(--ink-2)', margin: 0, lineHeight: 1.45 }}>
            "{med.reviewSnippet.quote}"
          </p>
          <div style={{ fontSize: 11, fontWeight: 600, color: 'var(--ink-3)', marginTop: 4, textAlign: 'right' }}>
            — {med.reviewSnippet.author} <span style={{ color: 'var(--brand)' }}>✓ Verified Patient</span>
          </div>
        </div>
      )}

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
