"use client";
import React, { useState, useEffect } from 'react';
import { Icon, Logo } from './common.jsx';

const CTA_URL = "https://go.telehealthfx.com/hair";

function HairNav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return (
    <nav style={{ position:'relative',zIndex:50,background:scrolled?'rgba(245,241,234,0.85)':'rgba(245,241,234,1)',backdropFilter:scrolled?'blur(12px)':'none',borderBottom:scrolled?'1px solid var(--line-soft)':'1px solid transparent',transition:'all .3s ease'}}>
      <div className="container" style={{display:'flex',alignItems:'center',justifyContent:'space-between',height:72}}>
        <a href="/" style={{textDecoration:'none',color:'inherit'}}><Logo /></a>
        <div className="nav-links" style={{display:'flex',gap:32,fontSize:14,color:'var(--ink-2)'}}>
          <a href="#what-is-hair-loss">What is Hair Loss</a>
          <a href="#treatments">Treatments</a>
          <a href="#how-it-works">How It Works</a>
          <a href="#safety">Safety</a>
          <a href="#faq">FAQ</a>
        </div>
        <div className="flex-row nav-actions" style={{gap:12,alignItems:'center'}}>
          <a className="btn btn-primary" href={CTA_URL} target="_blank" rel="noopener noreferrer">Learn More <Icon.Arrow /></a>
        </div>
      </div>
    </nav>
  );
}

function HairPage() {
  const schema = {"@context":"https://schema.org","@graph":[{"@type":"MedicalWebPage","@id":"https://telehealthfx.com/medications/hair-loss/#webpage","name":"Hair Loss Treatment Online | Telehealth FX","description":"Clinician-prescribed hair loss treatment online — Finasteride, Minoxidil, and custom compounded formulas. Free discreet shipping.","url":"https://telehealthfx.com/medications/hair-loss/","lastReviewed":"2026-05-12","medicalAudience":{"@type":"MedicalAudience","audienceType":"Patient","healthCondition":{"@type":"MedicalCondition","name":"Androgenetic Alopecia","alternateName":"Male Pattern Baldness","code":{"@type":"MedicalCode","code":"L64.9","codingSystem":"ICD-10"},"associatedAnatomy":{"@type":"AnatomicalStructure","name":"Hair follicles (scalp)"},"signOrSymptom":[{"@type":"MedicalSymptom","name":"Receding hairline"},{"@type":"MedicalSymptom","name":"Thinning crown"},{"@type":"MedicalSymptom","name":"Increased hair shedding"},{"@type":"MedicalSymptom","name":"Widening part line"},{"@type":"MedicalSymptom","name":"Visible scalp through hair"}]}},"about":{"@id":"https://telehealthfx.com/medications/hair-loss/#drug"},"publisher":{"@id":"https://telehealthfx.com/#organization"}},{"@type":"Drug","@id":"https://telehealthfx.com/medications/hair-loss/#drug","name":"Finasteride","nonProprietaryName":"Finasteride","drugClass":"5-alpha Reductase Inhibitor","mechanismOfAction":"Inhibits type II 5-alpha reductase, blocking conversion of testosterone to dihydrotestosterone (DHT) — the primary androgen responsible for miniaturizing hair follicles in androgenetic alopecia.","administrationRoute":"Oral","dosageForm":"Tablet","activeIngredient":"Finasteride","prescriptionStatus":"PrescriptionOnly","availableStrength":["1mg"],"indication":{"@type":"ApprovedIndication","name":"Treatment of male pattern hair loss (androgenetic alopecia)"},"adverseOutcome":[{"@type":"MedicalEntity","name":"Decreased libido (uncommon, typically reversible)"},{"@type":"MedicalEntity","name":"Erectile changes (rare)"},{"@type":"MedicalEntity","name":"Breast tenderness (rare)"}],"contraindication":"Women who are or may become pregnant; known hypersensitivity to finasteride"},{"@type":"Drug","@id":"https://telehealthfx.com/medications/hair-loss/#drug-minoxidil","name":"Minoxidil","nonProprietaryName":"Minoxidil","drugClass":"Vasodilator / Hair Growth Stimulant","mechanismOfAction":"Widens blood vessels in the scalp, increasing blood flow and nutrient delivery to hair follicles. Prolongs the anagen (growth) phase of the hair cycle.","administrationRoute":"Topical","dosageForm":"Solution / Foam","activeIngredient":"Minoxidil","prescriptionStatus":"OTC / Prescription (compounded)"},{"@type":"MedicalOrganization","@id":"https://telehealthfx.com/#organization","name":"Telehealth FX","url":"https://telehealthfx.com","medicalSpecialty":["Dermatology","Men's Health","Hair Restoration"]},{"@type":"FAQPage","@id":"https://telehealthfx.com/medications/hair-loss/#faq","mainEntity":[{"@type":"Question","name":"What causes male pattern hair loss?","acceptedAnswer":{"@type":"Answer","text":"Male pattern baldness (androgenetic alopecia) is caused by a genetic sensitivity to DHT (dihydrotestosterone), a hormone derived from testosterone. DHT miniaturizes hair follicles over time, causing progressively thinner, shorter hairs until the follicle stops producing visible hair entirely."}},{"@type":"Question","name":"How does Finasteride work?","acceptedAnswer":{"@type":"Answer","text":"Finasteride blocks the enzyme 5-alpha reductase, which converts testosterone into DHT. By reducing DHT levels by approximately 70%, Finasteride slows hair loss and, in many men, promotes regrowth of thinning hair — particularly at the crown and mid-scalp."}},{"@type":"Question","name":"When will I see results?","acceptedAnswer":{"@type":"Answer","text":"Most men notice reduced shedding within 3 months. Visible regrowth and thickening typically appear between 6–12 months of consistent use. Hair loss treatment requires ongoing use to maintain results."}},{"@type":"Question","name":"Are there side effects?","acceptedAnswer":{"@type":"Answer","text":"Side effects are uncommon. Approximately 2–4% of men report decreased libido or mild sexual side effects, which are typically reversible upon discontinuation. Your clinician will discuss your individual risk profile."}},{"@type":"Question","name":"Can I use Finasteride and Minoxidil together?","acceptedAnswer":{"@type":"Answer","text":"Yes. Finasteride and Minoxidil work through different mechanisms and are often used together for maximum results. Finasteride reduces DHT systemically while Minoxidil stimulates follicular blood flow topically."}},{"@type":"Question","name":"Will my order be discreet?","acceptedAnswer":{"@type":"Answer","text":"Absolutely. All medications ship in plain, unmarked packaging with no indication of the contents."}}]},{"@type":"Offer","@id":"https://telehealthfx.com/medications/hair-loss/#offer","name":"Hair Loss Treatment Program","price":"29","priceCurrency":"USD","priceSpecification":{"@type":"UnitPriceSpecification","price":"29","priceCurrency":"USD","unitText":"month","referenceQuantity":{"@type":"QuantitativeValue","value":"1","unitCode":"MON"}},"availability":"https://schema.org/InStock","seller":{"@id":"https://telehealthfx.com/#organization"},"url":"https://telehealthfx.com/medications/hair-loss/"}]};

  return (
    <section className="section" style={{ minHeight: '60vh', paddingTop: 120 }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <div className="container" style={{ maxWidth: 840 }}>

        <div style={{ textAlign: 'center', marginBottom: 48 }}>
          <div className="pill pill-brand" style={{ marginBottom: 20, display: 'inline-flex' }}>
            <span className="pill-dot" /> Hair Restoration
          </div>
          <h1 className="serif" style={{ fontSize: 72, marginBottom: 28, lineHeight: 0.95 }}>
            Hair Loss<br/>Treatment<br/><span style={{ fontStyle: 'italic', color: 'var(--brand)' }}>Online</span>
          </h1>
          <p style={{ fontSize: 20, color: 'var(--ink-2)', maxWidth: 620, margin: '0 auto 40px', lineHeight: 1.6 }}>
            Clinician-prescribed hair loss treatment — Finasteride, Minoxidil, and custom compounded formulas. Discreet delivery, no waiting rooms, real results.
          </p>
          <a href={CTA_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-lg" style={{ display: 'inline-flex' }}>
            Learn More <Icon.Arrow />
          </a>
        </div>

        <div style={{ marginBottom: 48, borderRadius: 20, overflow: 'hidden', aspectRatio: '16/9' }}>
          <img src="/assets/hair-hero.png" alt="Confident man with healthy hair — hair loss treatment restores confidence" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top' }} />
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24, marginBottom: 80 }}>
          {[{ num: '100%', label: 'Online & Discreet' },{ num: 'Free', label: 'Shipping' },{ num: '24h', label: 'Clinician Approval' }].map((s, i) => (
            <div key={i} className="card" style={{ padding: 28, textAlign: 'center' }}>
              <div className="serif" style={{ fontSize: 36, color: 'var(--brand)', marginBottom: 4 }}>{s.num}</div>
              <div style={{ fontSize: 13, color: 'var(--ink-3)' }}>{s.label}</div>
            </div>
          ))}
        </div>

        <div className="blog-content" style={{ fontSize: 18, lineHeight: 1.7, color: 'var(--ink-2)' }}>

          <h2 id="what-is-hair-loss" className="serif" style={{ fontSize: 40, marginTop: 0, marginBottom: 24, color: 'var(--ink)' }}>What Causes Hair Loss?</h2>
          <p>Male pattern baldness (<strong>androgenetic alopecia</strong>) is the most common form of hair loss in men, affecting roughly <strong>50 million men in the U.S.</strong> alone. It's driven by a genetic sensitivity to <strong>dihydrotestosterone (DHT)</strong>, a potent androgen derived from testosterone.</p>
          <p>DHT binds to receptors in genetically susceptible hair follicles — primarily at the temples, crown, and mid-scalp — causing them to <strong>miniaturize</strong> over time. Each hair cycle produces a thinner, shorter, less pigmented hair until the follicle eventually stops producing visible hair altogether. The good news: <strong>catching it early dramatically improves outcomes</strong>, and modern treatments can slow, stop, and even reverse the process.</p>

          <h2 className="serif" style={{ fontSize: 40, marginTop: 64, marginBottom: 24, color: 'var(--ink)' }}>Recognizing the Signs</h2>
          <div className="card" style={{ padding: 40, marginBottom: 48, background: 'rgba(46, 74, 59, 0.04)', borderColor: 'rgba(46, 74, 59, 0.15)' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 16 }}>
              {['Receding hairline at the temples','Thinning or bald spot at the crown','More hair in the shower drain or on your pillow','Widening part line','Hair that looks flat, thin, or lifeless','Visible scalp through hair in photos'].map((s, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, fontSize: 15, color: 'var(--ink-2)', lineHeight: 1.5 }}>
                  <div style={{ width: 22, height: 22, borderRadius: '50%', background: 'var(--accent-soft)', color: 'var(--accent)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: 1 }}><Icon.Check size={12} /></div>
                  {s}
                </div>
              ))}
            </div>
            <p style={{ textAlign: 'center', marginTop: 28, fontSize: 14, color: 'var(--ink-3)' }}>If any of these apply, early treatment produces the best results.</p>
          </div>

          <div className="card" style={{ padding: 40, margin: '48px 0', textAlign: 'center', background: '#FFFDF9', borderColor: 'var(--brand)' }}>
            <h3 className="serif" style={{ fontSize: 28, marginBottom: 16, color: 'var(--ink)' }}>The Earlier You Start, the More You Keep</h3>
            <p style={{ marginBottom: 24, fontSize: 16 }}>Hair loss treatment is most effective when started before significant follicle miniaturization. A quick online assessment takes just a few minutes.</p>
            <a href={CTA_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-lg" style={{ display: 'inline-flex', justifyContent: 'center' }}>Learn More <Icon.Arrow /></a>
          </div>

          <h2 id="treatments" className="serif" style={{ fontSize: 40, marginTop: 64, marginBottom: 24, color: 'var(--ink)' }}>Treatment Options</h2>
          <p>Your clinician will recommend the best approach based on your hair loss pattern, goals, and medical history:</p>
          <div style={{ margin: '32px 0', overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
              <thead>
                <tr style={{ background: 'var(--ink)', color: '#fff' }}>
                  <th style={{ padding: '16px', fontWeight: 500, fontSize: 14 }}>Medication</th>
                  <th style={{ padding: '16px', fontWeight: 500, fontSize: 14 }}>How It Works</th>
                  <th style={{ padding: '16px', fontWeight: 500, fontSize: 14 }}>Best For</th>
                </tr>
              </thead>
              <tbody>
                {[['Finasteride (Oral)','Blocks DHT production by ~70%, slowing follicle miniaturization','First-line treatment; crown and mid-scalp thinning'],['Minoxidil (Topical)','Increases scalp blood flow and extends the hair growth phase','Stimulating regrowth; works well combined with Finasteride'],['Custom Compound','Combination formulas (e.g., Finasteride + Minoxidil + Biotin)','Aggressive or multi-pattern hair loss']].map(([med, how, best], i) => (
                  <tr key={i} style={{ borderBottom: '1px solid var(--line-soft)', background: i % 2 ? 'transparent' : '#FAFAFA' }}>
                    <td style={{ padding: '16px', fontWeight: 500 }}>{med}</td>
                    <td style={{ padding: '16px' }}>{how}</td>
                    <td style={{ padding: '16px', color: 'var(--brand)' }}>{best}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 className="serif" style={{ fontSize: 40, marginTop: 64, marginBottom: 24, color: 'var(--ink)' }}>How Hair Loss Treatments Work</h2>
          <p>The two primary approaches target hair loss through complementary mechanisms:</p>
          <ul style={{ marginBottom: 24, paddingLeft: 20 }}>
            <li style={{ marginBottom: 12 }}><strong>Finasteride</strong> works systemically by blocking the enzyme <strong>5-alpha reductase</strong>, which converts testosterone into DHT. Reducing scalp DHT by ~70% halts follicle miniaturization and allows weakened follicles to recover, producing thicker, healthier hair.</li>
            <li style={{ marginBottom: 12 }}><strong>Minoxidil</strong> works topically as a vasodilator — widening blood vessels in the scalp to increase nutrient and oxygen delivery to follicles. It also extends the <strong>anagen (growth) phase</strong> of the hair cycle, so hairs grow longer and thicker before entering the resting phase.</li>
            <li style={{ marginBottom: 12 }}><strong>Used together</strong>, Finasteride and Minoxidil address hair loss from two different angles — DHT reduction + follicular stimulation — producing superior results compared to either alone.</li>
          </ul>

          <div className="card" style={{ padding: 40, margin: '48px 0', textAlign: 'center', background: '#FFFDF9', borderColor: 'var(--brand)' }}>
            <div style={{ width: 48, height: 48, borderRadius: '50%', background: 'var(--brand-soft)', color: 'var(--brand)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px' }}><Icon.Shield size={24} /></div>
            <h3 className="serif" style={{ fontSize: 28, marginBottom: 16, color: 'var(--ink)' }}>100% Discreet. Clinician-Prescribed.</h3>
            <p style={{ marginBottom: 24, fontSize: 16 }}>Plain packaging. No pharmacy visits. Licensed clinicians evaluate your hair loss pattern and prescribe the right treatment for your needs.</p>
            <a href={CTA_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-lg" style={{ display: 'inline-flex', justifyContent: 'center' }}>Learn More <Icon.Arrow /></a>
          </div>

          <h2 id="how-it-works" className="serif" style={{ fontSize: 40, marginTop: 64, marginBottom: 24, color: 'var(--ink)' }}>How It Works — 3 Simple Steps</h2>
          <div style={{ display: 'grid', gridTemplateColumns: '48px 1fr', gap: '20px 16px', margin: '32px 0' }}>
            {[{ step: '1', title: 'Online Assessment', desc: 'Answer a few questions about your hair loss pattern, medical history, and goals. Upload photos of your hairline and crown for clinical review.' },{ step: '2', title: 'Clinician Review & Prescription', desc: 'A licensed clinician evaluates your assessment within 24 hours and prescribes the most effective treatment plan for your pattern.' },{ step: '3', title: 'Discreet Delivery', desc: 'Your medication ships free in plain, unmarked packaging. No pharmacy lines, no awkward conversations — just results delivered to your door.' }].map((s, i) => (
              <React.Fragment key={i}>
                <div style={{ width: 48, height: 48, borderRadius: '50%', background: 'var(--brand)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 600, fontSize: 18, fontFamily: 'var(--sans)', flexShrink: 0 }}>{s.step}</div>
                <div style={{ paddingTop: 4 }}>
                  <h3 style={{ fontSize: 20, marginBottom: 8, color: 'var(--ink)' }}>{s.title}</h3>
                  <p style={{ margin: 0, fontSize: 16, color: 'var(--ink-2)' }}>{s.desc}</p>
                </div>
              </React.Fragment>
            ))}
          </div>

          <h2 id="safety" className="serif" style={{ fontSize: 40, marginTop: 64, marginBottom: 24, color: 'var(--ink)' }}>Side Effects & Safety</h2>
          <p>Finasteride and Minoxidil are well-studied and generally well-tolerated:</p>
          <ul style={{ marginBottom: 24, paddingLeft: 20 }}>
            <li style={{ marginBottom: 8 }}><strong>Finasteride:</strong> ~2–4% of men report decreased libido or mild sexual side effects, which are typically reversible upon discontinuation. Breast tenderness is rare.</li>
            <li style={{ marginBottom: 8 }}><strong>Minoxidil:</strong> May cause initial increased shedding (a positive sign of new growth cycle activation), scalp irritation, or unwanted facial hair growth if applied imprecisely.</li>
          </ul>
          <p><strong>Important:</strong> Finasteride is <strong>not appropriate</strong> for women who are or may become pregnant (risk of birth defects). Your clinician will review your complete medical history before prescribing.</p>

          <h2 id="faq" className="serif" style={{ fontSize: 40, marginTop: 64, marginBottom: 24, color: 'var(--ink)' }}>Frequently Asked Questions</h2>
          {[{ q: 'What causes male pattern hair loss?', a: 'Male pattern baldness (androgenetic alopecia) is caused by a genetic sensitivity to DHT (dihydrotestosterone), a hormone derived from testosterone. DHT miniaturizes hair follicles over time, causing progressively thinner, shorter hairs until the follicle stops producing visible hair entirely.' },{ q: 'How does Finasteride work?', a: 'Finasteride blocks the enzyme 5-alpha reductase, which converts testosterone into DHT. By reducing DHT levels by approximately 70%, Finasteride slows hair loss and, in many men, promotes regrowth of thinning hair — particularly at the crown and mid-scalp.' },{ q: 'When will I see results?', a: 'Most men notice reduced shedding within 3 months. Visible regrowth and thickening typically appear between 6–12 months of consistent use. Hair loss treatment requires ongoing use to maintain results.' },{ q: 'Are there side effects?', a: 'Side effects are uncommon. Approximately 2–4% of men report decreased libido or mild sexual side effects, which are typically reversible upon discontinuation. Your clinician will discuss your individual risk profile.' },{ q: 'Can I use Finasteride and Minoxidil together?', a: 'Yes. Finasteride and Minoxidil work through different mechanisms and are often used together for maximum results. Finasteride reduces DHT systemically while Minoxidil stimulates follicular blood flow topically.' },{ q: 'Will my order be discreet?', a: 'Absolutely. All medications ship in plain, unmarked packaging with no indication of the contents.' }].map((faq, i) => (
            <div key={i} style={{ padding: '28px 0', borderBottom: '1px solid var(--line-soft)' }}>
              <h3 style={{ fontSize: 18, marginBottom: 12, color: 'var(--ink)' }}>{faq.q}</h3>
              <p style={{ margin: 0, fontSize: 16, color: 'var(--ink-2)', lineHeight: 1.6 }}>{faq.a}</p>
            </div>
          ))}

          <div style={{ padding: 40, marginTop: 60, borderRadius: 20, background: 'var(--ink)', color: '#FBF8F3', textAlign: 'center' }}>
            <h2 className="serif" style={{ fontSize: 40, marginBottom: 20, color: '#FBF8F3' }}>Take Control of Your Hair</h2>
            <p style={{ fontSize: 18, opacity: 0.9, marginBottom: 32, maxWidth: 500, margin: '0 auto 32px' }}>
              Clinician-prescribed treatment. Free discreet shipping. The earlier you start, the more you keep.
            </p>
            <a href={CTA_URL} target="_blank" rel="noopener noreferrer" className="btn btn-lg" style={{ background: '#FBF8F3', color: 'var(--ink)', display: 'inline-flex', justifyContent: 'center', width: '100%', maxWidth: 300 }}>Learn More <Icon.Arrow /></a>
          </div>
        </div>
      </div>
    </section>
  );
}

export { HairPage, HairNav };
