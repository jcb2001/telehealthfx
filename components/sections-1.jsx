/* global React, Icon */

// ============================================================================
// PRESS / LOGO STRIP
// ============================================================================
function PressStrip() {
  const logos = ['Vogue', 'The Cut', 'Bloomberg', 'WSJ', 'Forbes', 'Well+Good'];
  return (
    <section style={{ padding: '40px 0', borderTop: '1px solid var(--line-soft)', borderBottom: '1px solid var(--line-soft)' }}>
      <div className="container flex-row flex-between press-strip" style={{ gap: 40 }}>
        <span className="eyebrow" style={{ whiteSpace: 'nowrap' }}>As seen in</span>
        {logos.map(l => (
          <span key={l} className="serif" style={{ fontSize: 26, color: 'var(--ink-3)', fontStyle: 'italic' }}>{l}</span>
        ))}
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
    { n: '02', icon: <Icon.Chat size={20}/>, title: 'Meet with a clinician', desc: 'A licensed provider reviews your information and prescribes a personalized treatment plan.' },
    { n: '03', icon: <Icon.Truck size={20}/>, title: 'Receive your medication', desc: 'Compounded semaglutide or tirzepatide shipped discreetly to your door in 5–7 days.' },
    { n: '04', icon: <Icon.Leaf size={20}/>, title: 'Track your progress', desc: 'Weekly check-ins with your care team, plus nutrition and lifestyle coaching in the app.' },
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
            From intake to delivery in under a week. No clinic visits, no insurance hurdles — just personalized care from licensed providers.
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
function Medications({ priceAnchor, onStartQuiz }) {
  const [selected, setSelected] = React.useState(0);
  const meds = [
    {
      name: 'Semaglutide',
      tag: 'Most popular',
      tagType: 'brand',
      price: priceAnchor,
      intro: 'A once-weekly GLP-1 agonist that regulates appetite and blood sugar.',
      avg: '–15% body weight',
      avgSub: 'at 12 months (avg.)',
      features: [
        'Once-weekly self-injection',
        'Compounded by licensed US pharmacies',
        'Titration schedule built into plan',
        'Includes injection supplies & sharps container',
      ],
    },
    {
      name: 'Tirzepatide',
      tag: 'Strongest results',
      tagType: 'accent',
      price: priceAnchor + 100,
      intro: 'A dual GIP/GLP-1 receptor agonist — the most effective GLP-1 class available.',
      avg: '–21% body weight',
      avgSub: 'at 12 months (avg.)',
      features: [
        'Once-weekly self-injection',
        'Compounded by licensed US pharmacies',
        'Faster titration option available',
        'Includes injection supplies & sharps container',
      ],
    },
  ];
  return (
    <section id="treatments" className="section" style={{ background: 'var(--bg-alt)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: 72 }}>
          <div className="eyebrow" style={{ marginBottom: 20 }}>Treatments</div>
          <h2 className="serif" style={{ fontSize: 64, marginBottom: 16 }}>
            Two medications.<br/><span style={{ fontStyle: 'italic', color: 'var(--brand)' }}>One plan for you.</span>
          </h2>
          <p style={{ maxWidth: 520, margin: '0 auto', color: 'var(--ink-2)', fontSize: 16 }}>
            Your clinician recommends the treatment that fits your goals, history, and biology.
          </p>
        </div>

        <div className="grid-2">
          {meds.map((m, i) => (
            <MedCard key={i} med={m} selected={selected === i} onSelect={() => setSelected(i)} onStartQuiz={onStartQuiz}/>
          ))}
        </div>
      </div>
    </section>
  );
}

function MedCard({ med, selected, onSelect, onStartQuiz }) {
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
        <Icon.Syringe size={22} />
      </div>

      <h3 className="serif" style={{ fontSize: 48, marginBottom: 16 }}>{med.name}</h3>
      <p style={{ color: 'var(--ink-2)', marginBottom: 32, fontSize: 15, lineHeight: 1.55 }}>{med.intro}</p>

      <div className="flex-row stack-mobile" style={{ gap: 24, marginBottom: 32, paddingBottom: 28, borderBottom: '1px solid var(--line-soft)' }}>
        <div style={{ flex: 1, minWidth: 0 }}>
          <div className="serif" style={{ fontSize: 32, color: 'var(--brand)', whiteSpace: 'nowrap' }}>{med.avg}</div>
          <div style={{ fontSize: 12, color: 'var(--ink-3)', marginTop: 4 }}>{med.avgSub}</div>
        </div>
        <div style={{ flex: 1, minWidth: 0, borderLeft: '1px solid var(--line-soft)', paddingLeft: 24 }}>
          <div className="serif" style={{ fontSize: 32, whiteSpace: 'nowrap' }}>${med.price}<span style={{ fontSize: 16, color: 'var(--ink-3)' }}>/mo</span></div>
          <div style={{ fontSize: 12, color: 'var(--ink-3)', marginTop: 4 }}>3-month plan</div>
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

      <button
        className="btn btn-primary"
        style={{ width: '100%', justifyContent: 'center' }}
        onClick={(e) => { e.stopPropagation(); onStartQuiz(); }}
      >
        Start with {med.name} <Icon.Arrow />
      </button>
    </div>
  );
}

window.PressStrip = PressStrip;
window.HowItWorks = HowItWorks;
window.Medications = Medications;
