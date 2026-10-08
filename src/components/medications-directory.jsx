"use client";
import React, { useState } from 'react';
import { Icon } from './common.jsx';

const ALL_CATEGORIES = [
  'All Programs',
  'GLP-1 Weight Loss',
  'Longevity & Peptides',
  'Hormone Optimization',
  'Clinical Dermatology',
  'Men\'s & Sexual Health'
];

const TREATMENTS = [
  // ── GLP-1 Weight Loss ──
  {
    name: 'Compounded Semaglutide',
    category: 'GLP-1 Weight Loss',
    price: '$79/mo',
    priceSub: 'Flat rate on all doses (no price bumps)',
    desc: 'The gold-standard GLP-1 receptor agonist weekly injection. Curbs appetite, quiets food noise, and stimulates steady metabolic fat loss.',
    badge: 'Most Popular',
    internalLink: '/medications/semaglutide/',
    actionLink: 'https://go.telehealthfx.com/coreage-semaglutide',
    actionText: 'Get Semaglutide',
    specs: ['503A Certified US Pharmacy', 'Same $79/mo At Highest Dose', 'Free 2-Day Cold Shipping']
  },
  {
    name: 'Compounded Tirzepatide',
    category: 'GLP-1 Weight Loss',
    price: '$129/mo',
    priceSub: 'Flat rate on all doses (no price bumps)',
    desc: 'Next-generation dual GLP-1 and GIP receptor agonist weekly injection. Enhanced appetite silencing and superior average body weight reduction.',
    badge: 'Dual Agonist',
    internalLink: '/medications/tirzepatide/',
    actionLink: 'https://go.telehealthfx.com/coreage-tirzepatide',
    actionText: 'Get Tirzepatide',
    specs: ['Dual Incretin Mechanism', 'Same $129/mo At Highest Dose', 'Prescription Included']
  },
  {
    name: 'Oral Semaglutide Tablets',
    category: 'GLP-1 Weight Loss',
    price: '$149/mo',
    priceSub: 'First month introductory promo',
    desc: 'Needle-free daily oral dissolving sublingual semaglutide tablets. Absorbs rapidly into the bloodstream without subcutaneous injections.',
    badge: 'Needle-Free',
    internalLink: '/medications/semaglutide-tablets/',
    actionLink: 'https://go.telehealthfx.com/semaglutide-tablets',
    actionText: 'Get Tablets',
    specs: ['Rapid Sublingual Absorption', 'No Injections Required', 'Daily Micro-Dosing']
  },
  {
    name: 'Oral Tirzepatide Tablets',
    category: 'GLP-1 Weight Loss',
    price: '$199/mo',
    priceSub: 'First month introductory promo',
    desc: 'Needle-free daily oral dissolving dual incretin tablets. Combines GLP-1 and GIP action in a convenient sublingual troche format.',
    badge: 'Dual Incretin',
    internalLink: '/medications/tirzepatide-tablets/',
    actionLink: 'https://go.telehealthfx.com/tirzepatide-tablets',
    actionText: 'Get Tirzepatide Tablets',
    specs: ['Dual Incretin Troche', 'Zero Needles or Reconstitution', 'Doctor Supervised']
  },
  {
    name: 'Sublingual Semaglutide Drops',
    category: 'GLP-1 Weight Loss',
    price: '$149/mo',
    priceSub: 'Monthly subscription',
    desc: 'Daily liquid sublingual semaglutide drops. Fast mucosal absorption designed for patients who prefer fluid titration over injectables.',
    badge: 'Liquid Drops',
    internalLink: '/medications/sublingual-semaglutide/',
    actionLink: 'https://go.telehealthfx.com/sublingual-semaglutide',
    actionText: 'Get Sublingual Drops',
    specs: ['Liquid Mucosal Delivery', 'Customizable Drop Titration', 'No Needles']
  },
  {
    name: 'Wegovy® (Branded Semaglutide)',
    category: 'GLP-1 Weight Loss',
    price: 'Insurance / Cash',
    priceSub: 'Single-dose autoinjector pens',
    desc: 'FDA-approved branded semaglutide autoinjector pens for chronic weight management. Full prior authorization support and commercial insurance assistance.',
    badge: 'FDA-Approved Brand',
    internalLink: '/medications/wegovy/',
    actionLink: 'https://go.telehealthfx.com/wegovy',
    actionText: 'Check Wegovy Coverage',
    specs: ['Pre-Filled Autoinjector Pens', 'Prior Authorization Assistance', 'Pharmacy Pick-Up or Delivery']
  },
  {
    name: 'Zepbound® (Branded Tirzepatide)',
    category: 'GLP-1 Weight Loss',
    price: 'Insurance / Cash',
    priceSub: 'Dual-action single-dose pens',
    desc: 'FDA-approved branded dual GIP/GLP-1 receptor agonist for chronic weight management. Comprehensive insurance verification and pharmacy coordination.',
    badge: 'FDA-Approved Brand',
    internalLink: '/medications/zepbound/',
    actionLink: 'https://go.telehealthfx.com/zepbound',
    actionText: 'Check Zepbound Coverage',
    specs: ['Single-Use Autoinjectors', 'Co-Pay Card Coordination', 'Clinical Navigation']
  },

  // ── Longevity & Peptides ──
  {
    name: 'NAD+ Cellular Therapy',
    category: 'Longevity & Peptides',
    price: 'From $99/mo',
    priceSub: 'Flat $99/mo · Everything included',
    desc: 'Pure pharmaceutical-grade Nicotinamide Adenine Dinucleotide. Recharges cellular mitochondrial ATP, enhances DNA repair, and clears brain fog.',
    badge: 'Cellular Vitality',
    internalLink: '/medications/nad/',
    actionLink: 'https://go.telehealthfx.com/nad',
    actionText: 'Get NAD+ Therapy',
    specs: ['100% Bioavailable Injections', 'Mitochondrial Energy Boost', 'Cognitive & Sirtuin Activation']
  },
  {
    name: 'Sermorelin Peptide',
    category: 'Longevity & Peptides',
    price: 'Flat $99/mo',
    priceSub: 'Flat $99/mo · Everything included',
    desc: 'Bio-identical Growth Hormone Releasing Hormone (GHRH) secretagogue. Stimulates natural pituitary GH release to build lean muscle, burn visceral fat, and deepen REM sleep.',
    badge: 'Muscle & Recovery',
    internalLink: '/medications/sermorelin/',
    actionLink: 'https://go.telehealthfx.com/sermorelin',
    actionText: 'Get Sermorelin',
    specs: ['Pituitary GH Stimulation', 'Protects Lean Muscle Mass', 'Deep Sleep & Tissue Repair']
  },
  {
    name: 'Bounce Back Copper Peptide (GHK-Cu)',
    category: 'Longevity & Peptides',
    price: 'From $64.99/mo',
    priceSub: 'Starting at $64.99/mo ($80 one-time)',
    desc: 'Prescription-strength GHK-Cu copper tripeptide serum. Supercharges extracellular collagen synthesis, accelerates tissue repair, and restores skin firmness.',
    badge: 'Dermal Remodeling',
    internalLink: '/medications/copper-peptide/',
    actionLink: 'https://go.telehealthfx.com/copper-peptide',
    actionText: 'Get Copper Peptide',
    specs: ['Pure GHK-Cu Tripeptide', 'Extracellular Matrix Rebuilding', 'Non-Irritating Formulation']
  },
  {
    name: 'Metformin Longevity',
    category: 'Longevity & Peptides',
    price: '$39/mo',
    priceSub: 'Oral daily tablets',
    desc: 'The premier cellular geroprotector. Activates AMPK pathways, enhances insulin sensitivity, and inhibits mTOR to slow biological aging.',
    badge: 'AMPK Activator',
    internalLink: '/medications/metformin/',
    actionLink: 'https://go.telehealthfx.com/metformin',
    actionText: 'Get Metformin',
    specs: ['AMPK Pathway Signaling', 'Insulin Sensitivity Support', 'Caloric Restriction Mimetic']
  },
  {
    name: 'Natural Berberine Complex',
    category: 'Longevity & Peptides',
    price: '$49/mo',
    priceSub: 'Herbal daily capsules',
    desc: 'High-potency botanical glucose regulator. Known as nature\'s metabolic activator, supporting glucose disposal and gut microbiome equilibrium.',
    badge: 'Herbal Support',
    internalLink: '/medications/berberine/',
    actionLink: 'https://go.telehealthfx.com/berberine',
    actionText: 'Get Berberine',
    specs: ['Standardized Botanical Extract', 'Blood Sugar Stabilization', 'No Prescription Needed']
  },

  // ── Hormone Optimization ──
  {
    name: 'Bio-Identical Estrogen HRT',
    category: 'Hormone Optimization',
    price: 'From $42/mo',
    priceSub: 'Doctor consult & delivery included',
    desc: 'Bio-identical 17β-estradiol therapy for perimenopause and menopause. Eliminates hot flashes, night sweats, brain fog, and protects bone density.',
    badge: 'Bio-Identical HRT',
    internalLink: '/medications/estrogen/',
    actionLink: 'https://go.telehealthfx.com/estrogen',
    actionText: 'Get Estrogen HRT',
    specs: ['17β-Estradiol Bio-Identical', 'Relieves Vasomotor Symptoms', 'Cardiovascular & Bone Support']
  },
  {
    name: 'Progesterone Oral HRT',
    category: 'Hormone Optimization',
    price: 'From $64.99/mo',
    priceSub: 'Nocturnal oral therapy',
    desc: 'Micronized bio-identical progesterone. Protects the endometrium, activates soothing GABA receptors for restorative sleep, and balances hormonal mood fluctuations.',
    badge: 'Endometrial Protection',
    internalLink: '/medications/progesterone/',
    actionLink: 'https://go.telehealthfx.com/progesterone',
    actionText: 'Get Progesterone',
    specs: ['Micronized Bio-Identical', 'GABA Restorative Sleep Boost', 'Harmonizes Estrogen Ratios']
  },
  {
    name: 'Thyroid Replacement (T3/T4)',
    category: 'Hormone Optimization',
    price: 'From $42/mo',
    priceSub: 'Custom compounded therapy',
    desc: 'Custom-balanced compounded Levothyroxine (T4) and Liothyronine (T3). Restores cellular basal metabolic rate, banishes chronic fatigue, and resolves cold intolerance.',
    badge: 'Metabolic Driver',
    internalLink: '/medications/thyroid/',
    actionLink: 'https://go.telehealthfx.com/thyroid',
    actionText: 'Get Thyroid Care',
    specs: ['Dual T3 & T4 Synergistic Action', 'Reignites Sluggish Metabolism', 'Continuous Lab Monitoring']
  },
  {
    name: 'Testosterone Replacement (TRT)',
    category: 'Hormone Optimization',
    price: 'From $93/mo',
    priceSub: 'As low as $93/mo ($99/mo standard)',
    desc: 'Board-certified physician-supervised TRT. Restores total testosterone to optimal youthful ranges to drive muscle mass, libido, stamina, and drive.',
    badge: 'Male Optimization',
    internalLink: '/medications/testosterone/',
    actionLink: 'https://go.telehealthfx.com/coreage-trt',
    actionText: 'Start TRT Online',
    specs: ['Complete Bloodwork Review', 'Physician Supervised Protocols', 'Injectable Cypionate or Topical']
  },
  {
    name: 'Enclomiphene Male Optimization',
    category: 'Hormone Optimization',
    price: '$79/mo',
    priceSub: 'Daily oral capsule',
    desc: 'Selective estrogen receptor modulator (SERM) that stimulates endogenous testosterone and LH/FSH production without shutting down natural fertility or testicular size.',
    badge: 'Fertility-Preserving',
    internalLink: '/medications/enclomiphene/',
    actionLink: 'https://go.telehealthfx.com/enclomiphene',
    actionText: 'Get Enclomiphene',
    specs: ['Zero Testicular Atrophy', 'Preserves Endogenous Fertility', 'Oral Capsule Convenience']
  },

  // ── Clinical Dermatology ──
  {
    name: 'Smooth Move Prescription Retinoid',
    category: 'Clinical Dermatology',
    price: 'From $42/mo',
    priceSub: 'No long-term contracts ($70 one-time)',
    desc: 'Gold-standard prescription retinoic acid custom-compounded with calming lipids. Eradicates fine lines and accelerates cellular turnover without harsh flaking.',
    badge: 'Wrinkle Reversal',
    internalLink: '/medications/smooth-move/',
    actionLink: 'https://go.telehealthfx.com/retinoid',
    actionText: 'Get Smooth Move',
    specs: ['20x More Potent Than OTC', 'Barrier-Protected Emulsion', 'Fades Lines & Sun Damage']
  },
  {
    name: 'Spot On Dark Spot Eraser',
    category: 'Clinical Dermatology',
    price: 'From $54.99/mo',
    priceSub: 'No long-term contracts ($70 one-time)',
    desc: 'Prescription-strength targeted hyperpigmentation treatment. Shuts down overactive melanocyte tyrosinase to dissolve melasma, sun spots, and dark patches.',
    badge: 'Pigment Eraser',
    internalLink: '/medications/spot-on/',
    actionLink: 'https://go.telehealthfx.com/spot-on',
    actionText: 'Get Spot On',
    specs: ['Multi-Action Tyrosinase Block', 'Fades Stubborn Melasma', 'Even-Tone Complexion']
  },
  {
    name: 'Pore Favor Minimizer',
    category: 'Clinical Dermatology',
    price: 'From $42/mo',
    priceSub: 'No long-term contracts ($70 one-time)',
    desc: 'Prescription pore refining and oil balancing topical therapy. Clears follicular sebum congestion, cinches dilated pore walls, and smooths skin micro-texture.',
    badge: 'Pore Tightening',
    internalLink: '/medications/pore-favor/',
    actionLink: 'https://go.telehealthfx.com/pore-favor',
    actionText: 'Get Pore Favor',
    specs: ['Dissolves Follicular Plugs', '24-Hour Sebum Control', 'Glass-Skin Refinement']
  },
  {
    name: 'Time Out Peptide Firming Serum',
    category: 'Clinical Dermatology',
    price: 'From $48/mo',
    priceSub: 'Starting at $48/mo, never auto-billed',
    desc: 'Needle-free line-relaxing peptide serum. Calms repetitive facial micro-contractions, lifts contour sagging, and visibly smooths expression lines.',
    badge: 'Expression Relaxer',
    internalLink: '/medications/time-out/',
    actionLink: 'https://go.telehealthfx.com/time-out',
    actionText: 'Get Time Out',
    specs: ['Biomimetic Neuro-Peptides', 'Lifts Crepey Neck & Jawline', 'Softens Dynamic Lines']
  },
  {
    name: 'Hair Loss Regrowth Protocol',
    category: 'Clinical Dermatology',
    price: '$39/mo',
    priceSub: 'Oral or topical dual therapy',
    desc: 'Clinically proven DHT-blocking and follicle-revascularizing formulations (Finasteride & Minoxidil) to halt receding hairlines and stimulate thick follicle density.',
    badge: 'DHT Blocker',
    internalLink: '/medications/hair-loss/',
    actionLink: 'https://go.telehealthfx.com/hair',
    actionText: 'Get Hair Regrowth',
    specs: ['Halts DHT Follicle Miniaturization', 'Stimulates Crown Density', 'Oral & Topical Options']
  },

  // ── Men's & Sexual Health ──
  {
    name: '4Play Custom Compound ED Treatment',
    category: 'Men\'s & Sexual Health',
    price: 'From $18/dose',
    priceSub: 'Starting at $18 per dose (4 active ingredients)',
    desc: 'Multi-action compounded sexual vitality formulation (Tadalafil + Sildenafil + Apomorphine). Fast onset, sustained confidence, and optimal vascular response.',
    badge: 'Fast Acting Melt',
    internalLink: '/medications/ed/',
    actionLink: 'https://go.telehealthfx.com/coreage-ed',
    actionText: 'Get 4Play ED Care',
    specs: ['Sublingual Rapid Onset (15 Min)', 'Dual Vascular & Dopaminergic Action', '100% Discreet Packaging']
  }
];

function MedicationsDirectory() {
  const [selectedCategory, setSelectedCategory] = useState('All Programs');

  const filtered = selectedCategory === 'All Programs'
    ? TREATMENTS
    : TREATMENTS.filter(t => t.category === selectedCategory);

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "MedicalWebPage",
        "@id": "https://telehealthfx.com/medications/#webpage",
        "url": "https://telehealthfx.com/medications/",
        "name": "Clinical Telehealth Medications & Longevity Treatments Directory | Telehealth FX",
        "description": "Comprehensive directory of doctor-prescribed telehealth therapies: Compounded Semaglutide, Tirzepatide, NAD+, Sermorelin, TRT, Bio-Identical HRT, and Dermatology.",
        "publisher": { "@type": "MedicalOrganization", "name": "Telehealth FX" }
      },
      {
        "@type": "ItemList",
        "@id": "https://telehealthfx.com/medications/#itemlist",
        "name": "Telehealth FX Prescription Treatment Programs",
        "itemListElement": TREATMENTS.map((item, idx) => ({
          "@type": "ListItem",
          "position": idx + 1,
          "name": item.name,
          "url": `https://telehealthfx.com${item.internalLink}`,
          "description": item.desc
        }))
      }
    ]
  };

  return (
    <section className="section" style={{ minHeight: '80vh', paddingTop: 120, paddingBottom: 100 }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <div className="container">

        {/* Directory Hero */}
        <div style={{ textAlign: 'center', maxWidth: 860, margin: '0 auto 60px' }}>
          <div className="pill pill-brand" style={{ marginBottom: 20, display: 'inline-flex' }}>
            <span className="pill-dot" /> Verified Clinical Treatment Protocols
          </div>
          <h1 className="serif" style={{ fontSize: 64, lineHeight: 1.05, marginBottom: 24 }}>
            Telehealth Medications &amp; <br/>
            <span style={{ fontStyle: 'italic', color: 'var(--brand)' }}>Prescription Longevity Therapies</span>
          </h1>
          <p style={{ fontSize: 20, color: 'var(--ink-2)', lineHeight: 1.6, maxWidth: 680, margin: '0 auto' }}>
            Browse physician-supervised treatments delivered directly to your doorstep. Transparent flat-rate pricing, certified 503A compounding, zero hidden membership fees, and free expedited shipping.
          </p>
        </div>

        {/* Category Filters */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, justifyContent: 'center', marginBottom: 50 }}>
          {ALL_CATEGORIES.map((cat) => {
            const isActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                style={{
                  padding: '10px 20px',
                  borderRadius: 30,
                  fontSize: 14,
                  fontWeight: 600,
                  cursor: 'pointer',
                  border: isActive ? '1px solid var(--brand)' : '1px solid var(--line)',
                  background: isActive ? 'var(--brand)' : 'var(--bg-card, #ffffff)',
                  color: isActive ? '#ffffff' : 'var(--ink-2)',
                  transition: 'all 0.2s ease',
                  boxShadow: isActive ? '0 4px 12px rgba(46, 74, 59, 0.15)' : 'none'
                }}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Grid of Treatment Cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: 28 }}>
          {filtered.map((item, idx) => (
            <div
              key={idx}
              className="card"
              style={{
                padding: 32,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                borderRadius: 20,
                border: '1px solid var(--line-soft)',
                background: '#ffffff',
                boxShadow: '0 2px 10px rgba(0,0,0,0.03)',
                position: 'relative'
              }}
            >
              {/* Header / Badge */}
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 14 }}>
                  <span style={{ fontSize: 12, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--brand)' }}>
                    {item.category}
                  </span>
                  <span
                    style={{
                      fontSize: 11,
                      fontWeight: 600,
                      background: 'rgba(46, 74, 59, 0.08)',
                      color: 'var(--brand)',
                      padding: '4px 10px',
                      borderRadius: 12
                    }}
                  >
                    {item.badge}
                  </span>
                </div>

                <h3 className="serif" style={{ fontSize: 26, marginBottom: 8, color: 'var(--ink)', lineHeight: 1.2 }}>
                  <a href={item.internalLink} style={{ color: 'inherit', textDecoration: 'none' }}>
                    {item.name}
                  </a>
                </h3>

                <p style={{ fontSize: 14, color: 'var(--ink-2)', lineHeight: 1.5, marginBottom: 20, minHeight: 63 }}>
                  {item.desc}
                </p>

                {/* Key Specs */}
                <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 24px', display: 'flex', flexDirection: 'column', gap: 8 }}>
                  {item.specs.map((spec, sIdx) => (
                    <li key={sIdx} style={{ fontSize: 13, color: 'var(--ink-2)', display: 'flex', alignItems: 'center', gap: 8 }}>
                      <span style={{ color: 'var(--brand)', display: 'inline-flex' }}><Icon.Check size={13} /></span>
                      {spec}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Price & CTA Buttons */}
              <div style={{ paddingTop: 20, borderTop: '1px solid var(--line-soft)' }}>
                <div style={{ marginBottom: 16 }}>
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: 8 }}>
                    <span className="serif" style={{ fontSize: 32, fontWeight: 700, color: 'var(--ink)' }}>{item.price}</span>
                    <span style={{ fontSize: 12, color: 'var(--ink-3)' }}>all-inclusive</span>
                  </div>
                  <div style={{ fontSize: 12, color: 'var(--ink-3)', marginTop: 2 }}>{item.priceSub}</div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
                  <a
                    href={item.internalLink}
                    className="btn btn-outline"
                    style={{
                      fontSize: 13,
                      padding: '10px 14px',
                      justifyContent: 'center',
                      textAlign: 'center',
                      display: 'inline-flex',
                      alignItems: 'center',
                      borderColor: 'var(--line)'
                    }}
                  >
                    Learn More
                  </a>
                  <a
                    href={item.actionLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary"
                    style={{
                      fontSize: 13,
                      padding: '10px 14px',
                      justifyContent: 'center',
                      textAlign: 'center',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: 4
                    }}
                  >
                    Get Started <Icon.Arrow size={12} />
                  </a>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Clinical Quality Guarantee Banner */}
        <div
          style={{
            marginTop: 80,
            padding: 48,
            borderRadius: 24,
            background: 'var(--ink)',
            color: '#FBF8F3',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: 36,
            alignItems: 'center'
          }}
        >
          <div>
            <div className="pill" style={{ background: 'rgba(255,255,255,0.12)', color: '#FBF8F3', marginBottom: 16, display: 'inline-flex' }}>
              The Telehealth FX Standard
            </div>
            <h2 className="serif" style={{ fontSize: 36, color: '#FBF8F3', marginBottom: 16, lineHeight: 1.1 }}>
              Physician-Supervised.<br/>Licensed in 50 States.
            </h2>
            <p style={{ fontSize: 16, opacity: 0.85, lineHeight: 1.6, margin: 0 }}>
              All medications are prescribed by US-licensed physicians pursuant to a valid telehealth medical evaluation and prepared in FDA-inspected 503A compounding facilities with strict cold-chain integrity.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
            <div style={{ background: 'rgba(255,255,255,0.06)', padding: 20, borderRadius: 16, border: '1px solid rgba(255,255,255,0.1)' }}>
              <div className="serif" style={{ fontSize: 28, color: '#A3D9B1', marginBottom: 4 }}>$0 Fees</div>
              <div style={{ fontSize: 13, opacity: 0.8 }}>No consultation, subscription, or membership charges</div>
            </div>
            <div style={{ background: 'rgba(255,255,255,0.06)', padding: 20, borderRadius: 16, border: '1px solid rgba(255,255,255,0.1)' }}>
              <div className="serif" style={{ fontSize: 28, color: '#A3D9B1', marginBottom: 4 }}>2-Day</div>
              <div style={{ fontSize: 13, opacity: 0.8 }}>Free refrigerated express shipping straight to doorstep</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export { MedicationsDirectory };
