"use client";
import React, { useState, useEffect } from 'react';
import { Icon, Logo } from './common.jsx';

const CTA_URL = "https://go.telehealthfx.com/enclomiphene";

function EnclomipheneNav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => { const f = () => setScrolled(window.scrollY > 20); window.addEventListener('scroll', f); return () => window.removeEventListener('scroll', f); }, []);
  return (
    <nav style={{ position:'relative',zIndex:50,background:scrolled?'rgba(245,241,234,0.85)':'rgba(245,241,234,1)',backdropFilter:scrolled?'blur(12px)':'none',borderBottom:scrolled?'1px solid var(--line-soft)':'1px solid transparent',transition:'all .3s ease'}}>
      <div className="container" style={{display:'flex',alignItems:'center',justifyContent:'space-between',height:72}}>
        <a href="/" style={{textDecoration:'none',color:'inherit'}}><Logo /></a>
        <div className="nav-links" style={{display:'flex',gap:32,fontSize:14,color:'var(--ink-2)'}}>
          <a href="#what-is-enclomiphene">What is Enclomiphene</a>
          <a href="#vs-trt">vs. Injectable TRT</a>
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

function EnclomiphenePage() {
  const schema = {"@context":"https://schema.org","@graph":[{"@type":"MedicalWebPage","@id":"https://telehealthfx.com/medications/enclomiphene/#webpage","name":"Enclomiphene (Oral TRT) | Boost Testosterone Naturally | Telehealth FX","description":"Enclomiphene prescribed online — a groundbreaking oral alternative to injectable TRT that boosts your body's own testosterone production up to 2.5x while preserving fertility and testicular function.","url":"https://telehealthfx.com/medications/enclomiphene/","lastReviewed":"2026-05-12","medicalAudience":{"@type":"MedicalAudience","audienceType":"Patient","healthCondition":{"@type":"MedicalCondition","name":"Secondary Hypogonadism","alternateName":"Low Testosterone","code":{"@type":"MedicalCode","code":"E29.1","codingSystem":"ICD-10"},"signOrSymptom":[{"@type":"MedicalSymptom","name":"Low energy and chronic fatigue"},{"@type":"MedicalSymptom","name":"Decreased libido"},{"@type":"MedicalSymptom","name":"Difficulty building muscle"},{"@type":"MedicalSymptom","name":"Brain fog and poor concentration"},{"@type":"MedicalSymptom","name":"Mood changes and irritability"}]}},"about":{"@id":"https://telehealthfx.com/medications/enclomiphene/#drug"},"publisher":{"@id":"https://telehealthfx.com/#organization"}},{"@type":"Drug","@id":"https://telehealthfx.com/medications/enclomiphene/#drug","name":"Enclomiphene","nonProprietaryName":"Enclomiphene Citrate","drugClass":"Selective Estrogen Receptor Modulator (SERM)","mechanismOfAction":"Selectively blocks estrogen receptors in the hypothalamus and pituitary gland, removing negative feedback inhibition and stimulating increased endogenous production of LH and FSH, which in turn drives the testes to produce more testosterone naturally while preserving spermatogenesis.","administrationRoute":"Oral","dosageForm":"Capsule","activeIngredient":"Enclomiphene Citrate","prescriptionStatus":"PrescriptionOnly","availableStrength":["12.5mg","25mg"],"description":"Treatment of secondary hypogonadism; testosterone optimization with fertility preservation","warning":"Possible side effects include headache, nausea, mood changes, hot flushes, and acne if levels rise significantly. Contraindicated in known hypersensitivity, primary hypogonadism (testicular failure), and use in women."},{"@type":"MedicalOrganization","@id":"https://telehealthfx.com/#organization","name":"Telehealth FX","url":"https://telehealthfx.com","medicalSpecialty":["http://schema.org/Endocrine","http://schema.org/Urologic"]},{"@type":"FAQPage","@id":"https://telehealthfx.com/medications/enclomiphene/#faq","mainEntity":[{"@type":"Question","name":"What is Enclomiphene?","acceptedAnswer":{"@type":"Answer","text":"Enclomiphene is the purified trans-isomer of Clomiphene Citrate (Clomid). It's a selective estrogen receptor modulator (SERM) that stimulates your body to produce more testosterone naturally by blocking estrogen feedback at the pituitary gland — increasing LH and FSH output without shutting down your own production."}},{"@type":"Question","name":"How is it different from injectable TRT?","acceptedAnswer":{"@type":"Answer","text":"Injectable TRT replaces your natural testosterone with exogenous hormone, which shuts down your body's own production, shrinks the testes, and suppresses fertility. Enclomiphene works with your body — stimulating natural production so your testes, fertility, and downstream hormones remain intact."}},{"@type":"Question","name":"Will it affect my fertility?","acceptedAnswer":{"@type":"Answer","text":"No — this is one of Enclomiphene's biggest advantages. Unlike injectable TRT, which suppresses sperm production, Enclomiphene actually increases LH and FSH, which supports spermatogenesis. It's often the preferred option for men who want to optimize testosterone while preserving fertility."}},{"@type":"Question","name":"How much can testosterone increase?","acceptedAnswer":{"@type":"Answer","text":"Clinical studies show Enclomiphene can increase endogenous testosterone production by up to 2.5x from baseline in men with secondary hypogonadism. Individual results vary based on baseline levels, age, and response."}},{"@type":"Question","name":"What are the side effects?","acceptedAnswer":{"@type":"Answer","text":"Side effects are generally mild and may include headache, nausea, mood changes, hot flushes, and acne. Because Enclomiphene is the purified isomer of Clomid, it has fewer estrogenic side effects than traditional Clomiphene Citrate."}},{"@type":"Question","name":"Do I need injections?","acceptedAnswer":{"@type":"Answer","text":"No. Enclomiphene is taken orally as a daily capsule — no injections, no topical creams, no messy application. It's the most convenient form of testosterone optimization available."}}]},{"@type":"Offer","@id":"https://telehealthfx.com/medications/enclomiphene/#offer","name":"Enclomiphene Oral TRT Program","price":"89","priceCurrency":"USD","priceSpecification":{"@type":"UnitPriceSpecification","price":"89","priceCurrency":"USD","unitText":"month","referenceQuantity":{"@type":"QuantitativeValue","value":"1","unitCode":"MON"}},"availability":"https://schema.org/InStock","seller":{"@id":"https://telehealthfx.com/#organization"},"url":"https://telehealthfx.com/medications/enclomiphene/"}]};

  return (
    <section className="section" style={{ minHeight: '60vh', paddingTop: 120 }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <div className="container" style={{ maxWidth: 840 }}>

        <div style={{ textAlign: 'center', marginBottom: 48 }}>
          <div className="pill pill-brand" style={{ marginBottom: 20, display: 'inline-flex' }}>
            <span className="pill-dot" /> Oral Testosterone Optimization
          </div>
          <h1 className="serif" style={{ fontSize: 72, marginBottom: 28, lineHeight: 0.95 }}>
            Enclomiphene<br/><span style={{ fontStyle: 'italic', color: 'var(--brand)' }}>Oral TRT</span>
          </h1>
          <p style={{ fontSize: 20, color: 'var(--ink-2)', maxWidth: 640, margin: '0 auto 40px', lineHeight: 1.6 }}>
            Boost your body's own testosterone up to 2.5x — no injections, no creams, no testicular shrinkage. Enclomiphene preserves your natural production and fertility.
          </p>
          <a href={CTA_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-lg" style={{ display: 'inline-flex' }}>Learn More <Icon.Arrow /></a>
        </div>

        <div style={{ marginBottom: 48, borderRadius: 20, overflow: 'hidden', aspectRatio: '16/9' }}>
          <img src="/assets/enclomiphene-hero.png" alt="Fit man training with dumbbells — Enclomiphene boosts natural testosterone production" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top' }} />
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24, marginBottom: 80 }}>
          {[{ num: '2.5x', label: 'Testosterone Increase' },{ num: '0', label: 'Injections Required' },{ num: '100%', label: 'Fertility Preserved' }].map((s, i) => (
            <div key={i} className="card" style={{ padding: 28, textAlign: 'center' }}>
              <div className="serif" style={{ fontSize: 36, color: 'var(--brand)', marginBottom: 4 }}>{s.num}</div>
              <div style={{ fontSize: 13, color: 'var(--ink-3)' }}>{s.label}</div>
            </div>
          ))}
        </div>

        <div className="blog-content" style={{ fontSize: 18, lineHeight: 1.7, color: 'var(--ink-2)' }}>

          <h2 id="what-is-enclomiphene" className="serif" style={{ fontSize: 40, marginTop: 0, marginBottom: 24, color: 'var(--ink)' }}>What Is Enclomiphene?</h2>
          <p>Enclomiphene is a <strong>selective estrogen receptor modulator (SERM)</strong> and the purified trans-isomer of Clomiphene Citrate (Clomid). It represents a groundbreaking approach to testosterone optimization — one that <strong>works with your body</strong> rather than replacing its natural production.</p>
          <p>Unlike injectable TRT, which introduces exogenous testosterone and shuts down your hypothalamic-pituitary-gonadal (HPG) axis, Enclomiphene <strong>stimulates your own testes to produce more testosterone naturally</strong>. It does this by selectively blocking estrogen receptors in the hypothalamus and pituitary gland, removing negative feedback inhibition and increasing the release of <strong>LH (luteinizing hormone)</strong> and <strong>FSH (follicle-stimulating hormone)</strong>.</p>
          <p>The result: testosterone levels can increase <strong>up to 2.5x from baseline</strong> — while keeping your testes active, your fertility intact, and your downstream hormones (DHEA, pregnenolone, progesterone) in balance.</p>

          <h2 id="vs-trt" className="serif" style={{ fontSize: 40, marginTop: 64, marginBottom: 24, color: 'var(--ink)' }}>Enclomiphene vs. Injectable TRT</h2>
          <div style={{ margin: '32px 0', overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
              <thead>
                <tr style={{ background: 'var(--ink)', color: '#fff' }}>
                  <th style={{ padding: '16px', fontWeight: 500, fontSize: 14 }}>Factor</th>
                  <th style={{ padding: '16px', fontWeight: 500, fontSize: 14 }}>Enclomiphene</th>
                  <th style={{ padding: '16px', fontWeight: 500, fontSize: 14 }}>Injectable TRT</th>
                </tr>
              </thead>
              <tbody>
                {[['Administration','Daily oral capsule','Weekly injections'],['Natural Production','Stimulates your own T production','Replaces natural production (shuts down HPG axis)'],['Fertility','Preserves (increases LH/FSH)','Suppresses (often causes infertility)'],['Testicular Size','Maintained','Shrinkage common'],['Downstream Hormones','Preserved (DHEA, pregnenolone)','Disrupted'],['Convenience','Take a pill daily','Weekly injection + supplies']].map(([factor, encl, trt], i) => (
                  <tr key={i} style={{ borderBottom: '1px solid var(--line-soft)', background: i % 2 ? 'transparent' : '#FAFAFA' }}>
                    <td style={{ padding: '16px', fontWeight: 500 }}>{factor}</td>
                    <td style={{ padding: '16px', color: 'var(--brand)' }}>{encl}</td>
                    <td style={{ padding: '16px' }}>{trt}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="card" style={{ padding: 40, margin: '48px 0', textAlign: 'center', background: '#FFFDF9', borderColor: 'var(--brand)' }}>
            <h3 className="serif" style={{ fontSize: 28, marginBottom: 16, color: 'var(--ink)' }}>Optimize Testosterone Without Injections</h3>
            <p style={{ marginBottom: 24, fontSize: 16 }}>Complete a quick online assessment. A licensed clinician reviews your history and determines if Enclomiphene is right for you.</p>
            <a href={CTA_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-lg" style={{ display: 'inline-flex', justifyContent: 'center' }}>Learn More <Icon.Arrow /></a>
          </div>

          <h2 className="serif" style={{ fontSize: 40, marginTop: 64, marginBottom: 24, color: 'var(--ink)' }}>How Enclomiphene Works</h2>
          <p>Enclomiphene's mechanism targets the HPG axis — the hormonal feedback loop that regulates testosterone production:</p>
          <ul style={{ marginBottom: 24, paddingLeft: 20 }}>
            <li style={{ marginBottom: 12 }}><strong>Step 1 — Estrogen Receptor Blockade:</strong> Enclomiphene selectively blocks estrogen receptors in the hypothalamus and anterior pituitary. Normally, estrogen provides negative feedback that limits GnRH, LH, and FSH release.</li>
            <li style={{ marginBottom: 12 }}><strong>Step 2 — Increased LH & FSH:</strong> With the estrogen brake removed, the pituitary ramps up production of LH (which stimulates testosterone synthesis in Leydig cells) and FSH (which supports spermatogenesis in Sertoli cells).</li>
            <li style={{ marginBottom: 12 }}><strong>Step 3 — Natural Testosterone Production:</strong> The testes respond to elevated LH by producing more testosterone endogenously — up to 2.5x baseline levels — without external hormone supplementation.</li>
            <li style={{ marginBottom: 12 }}><strong>Key Advantage:</strong> Because your HPG axis remains active, all downstream hormones (DHEA, pregnenolone, progesterone) continue to be produced normally, and testicular function is fully preserved.</li>
          </ul>

          <h2 className="serif" style={{ fontSize: 40, marginTop: 64, marginBottom: 24, color: 'var(--ink)' }}>Who Is Enclomiphene For?</h2>
          <p>Enclomiphene is ideal for men who want the benefits of optimized testosterone without the trade-offs of injectable TRT:</p>
          <ul style={{ marginBottom: 24, paddingLeft: 20 }}>
            <li style={{ marginBottom: 8 }}>Men with <strong>secondary hypogonadism</strong> (low T caused by insufficient pituitary signaling, not testicular failure)</li>
            <li style={{ marginBottom: 8 }}>Men who want to <strong>preserve fertility</strong> while optimizing testosterone</li>
            <li style={{ marginBottom: 8 }}>Men who <strong>dislike injections</strong> or topical creams</li>
            <li style={{ marginBottom: 8 }}>Younger men (20s–30s) who want to avoid <strong>HPG axis shutdown</strong></li>
            <li style={{ marginBottom: 8 }}>Men who want to maintain <strong>testicular size and function</strong></li>
            <li style={{ marginBottom: 8 }}>Athletes or active men concerned about <strong>natural hormonal balance</strong></li>
          </ul>

          <div className="card" style={{ padding: 40, margin: '48px 0', textAlign: 'center', background: '#FFFDF9', borderColor: 'var(--brand)' }}>
            <div style={{ width: 48, height: 48, borderRadius: '50%', background: 'var(--brand-soft)', color: 'var(--brand)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px' }}><Icon.Shield size={24} /></div>
            <h3 className="serif" style={{ fontSize: 28, marginBottom: 16, color: 'var(--ink)' }}>Preserve Your Natural Production</h3>
            <p style={{ marginBottom: 24, fontSize: 16 }}>No HPG axis shutdown. No testicular shrinkage. No fertility suppression. Just your body, producing more of its own testosterone.</p>
            <a href={CTA_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-lg" style={{ display: 'inline-flex', justifyContent: 'center' }}>Learn More <Icon.Arrow /></a>
          </div>

          <h2 id="how-it-works" className="serif" style={{ fontSize: 40, marginTop: 64, marginBottom: 24, color: 'var(--ink)' }}>How It Works — 3 Simple Steps</h2>
          <div style={{ display: 'grid', gridTemplateColumns: '48px 1fr', gap: '20px 16px', margin: '32px 0' }}>
            {[{ step: '1', title: 'Online Health Assessment', desc: 'Answer questions about your symptoms, medical history, and goals. Share recent bloodwork if available — particularly total/free testosterone, LH, and FSH.' },{ step: '2', title: 'Clinician Review & Prescription', desc: 'A licensed clinician evaluates your assessment within 24 hours. If Enclomiphene is appropriate for your profile, your prescription is sent to a licensed US compounding pharmacy.' },{ step: '3', title: 'Discreet Monthly Delivery', desc: 'Your oral Enclomiphene capsules ship free in plain packaging. Follow-up labs at 6–8 weeks are recommended to optimize your dosage.' }].map((s, i) => (
              <React.Fragment key={i}>
                <div style={{ width: 48, height: 48, borderRadius: '50%', background: 'var(--brand)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 600, fontSize: 18, fontFamily: 'var(--sans)', flexShrink: 0 }}>{s.step}</div>
                <div style={{ paddingTop: 4 }}><h3 style={{ fontSize: 20, marginBottom: 8, color: 'var(--ink)' }}>{s.title}</h3><p style={{ margin: 0, fontSize: 16, color: 'var(--ink-2)' }}>{s.desc}</p></div>
              </React.Fragment>
            ))}
          </div>

          <h2 id="safety" className="serif" style={{ fontSize: 40, marginTop: 64, marginBottom: 24, color: 'var(--ink)' }}>Side Effects & Safety</h2>
          <p>Enclomiphene is the purified isomer of Clomid, which means it has <strong>fewer estrogenic side effects</strong> than traditional Clomiphene Citrate. Common side effects are generally mild:</p>
          <ul style={{ marginBottom: 24, paddingLeft: 20 }}>
            <li style={{ marginBottom: 8 }}><strong>Headache</strong></li>
            <li style={{ marginBottom: 8 }}><strong>Nausea</strong> (typically transient)</li>
            <li style={{ marginBottom: 8 }}><strong>Mood changes</strong> (irritability if levels rise significantly)</li>
            <li style={{ marginBottom: 8 }}><strong>Hot flushes</strong></li>
            <li style={{ marginBottom: 8 }}><strong>Acne</strong> (if testosterone rises substantially)</li>
            <li style={{ marginBottom: 8 }}><strong>Gynecomastia</strong> (rare; less common than with Clomid due to purified isomer)</li>
          </ul>
          <p><strong>Important:</strong> Enclomiphene is for <strong>secondary hypogonadism</strong> — where the issue is insufficient pituitary signaling, not testicular failure. It will not work for primary hypogonadism. Your clinician will determine your candidacy based on bloodwork and clinical evaluation.</p>

          <h2 id="faq" className="serif" style={{ fontSize: 40, marginTop: 64, marginBottom: 24, color: 'var(--ink)' }}>Frequently Asked Questions</h2>
          {[{ q: 'What is Enclomiphene?', a: 'Enclomiphene is the purified trans-isomer of Clomiphene Citrate (Clomid). It\'s a selective estrogen receptor modulator (SERM) that stimulates your body to produce more testosterone naturally by blocking estrogen feedback at the pituitary gland — increasing LH and FSH output without shutting down your own production.' },{ q: 'How is it different from injectable TRT?', a: 'Injectable TRT replaces your natural testosterone with exogenous hormone, which shuts down your body\'s own production, shrinks the testes, and suppresses fertility. Enclomiphene works with your body — stimulating natural production so your testes, fertility, and downstream hormones remain intact.' },{ q: 'Will it affect my fertility?', a: 'No — this is Enclomiphene\'s biggest advantage. Unlike injectable TRT, which suppresses sperm production, Enclomiphene actually increases LH and FSH, which supports spermatogenesis. It\'s the preferred option for men who want to optimize testosterone while preserving fertility.' },{ q: 'How much can testosterone increase?', a: 'Clinical studies show Enclomiphene can increase endogenous testosterone production by up to 2.5x from baseline in men with secondary hypogonadism. Individual results vary based on baseline levels, age, and response.' },{ q: 'Do I need injections?', a: 'No. Enclomiphene is taken orally as a daily capsule — no injections, no topical creams, no messy application. It\'s the most convenient form of testosterone optimization available.' },{ q: 'What are the side effects?', a: 'Side effects are generally mild: headache, nausea, mood changes, hot flushes, and acne. Because Enclomiphene is the purified isomer of Clomid, it has fewer estrogenic side effects than traditional Clomiphene Citrate.' }].map((faq, i) => (
            <div key={i} style={{ padding: '28px 0', borderBottom: '1px solid var(--line-soft)' }}>
              <h3 style={{ fontSize: 18, marginBottom: 12, color: 'var(--ink)' }}>{faq.q}</h3>
              <p style={{ margin: 0, fontSize: 16, color: 'var(--ink-2)', lineHeight: 1.6 }}>{faq.a}</p>
            </div>
          ))}

          <div style={{ padding: 40, marginTop: 60, borderRadius: 20, background: 'var(--ink)', color: '#FBF8F3', textAlign: 'center' }}>
            <h2 className="serif" style={{ fontSize: 40, marginBottom: 20, color: '#FBF8F3' }}>Boost Your Testosterone Naturally</h2>
            <p style={{ fontSize: 18, opacity: 0.9, marginBottom: 32, maxWidth: 500, margin: '0 auto 32px' }}>No injections. No fertility suppression. No HPG shutdown. Just your body, optimized.</p>
            <a href={CTA_URL} target="_blank" rel="noopener noreferrer" className="btn btn-lg" style={{ background: '#FBF8F3', color: 'var(--ink)', display: 'inline-flex', justifyContent: 'center', width: '100%', maxWidth: 300 }}>Learn More <Icon.Arrow /></a>
          </div>
        </div>
      </div>
    </section>
  );
}

export { EnclomiphenePage, EnclomipheneNav };
