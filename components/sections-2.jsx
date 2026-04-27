/* global React, Icon */

// ============================================================================
// RESULTS — testimonial cards with before/after placeholders
// ============================================================================
function Results() {
  const stories = [
    { name: 'Sarah M.', age: 42, city: 'Austin, TX', loss: '–32 lbs', duration: '6 months', quote: 'The weekly check-ins kept me honest. I\'ve tried everything — this is the first thing that actually worked.', med: 'Tirzepatide', img: 'assets/ba3.jpg' },
    { name: 'Marcus R.', age: 38, city: 'Chicago, IL', loss: '–24 lbs', duration: '4 months', quote: 'The appetite changes were immediate. I finally feel in control around food.', med: 'Semaglutide', img: 'assets/ba1.jpg' },
    { name: 'Priya K.', age: 51, city: 'Seattle, WA', loss: '–41 lbs', duration: '9 months', quote: 'My doctor adjusted the dose twice based on how I was responding. It felt genuinely personalized.', med: 'Tirzepatide', img: 'assets/ba2.jpg' },
  ];
  return (
    <section id="results" className="section">
      <div className="container">
        <div className="grid-2 stack-mobile" style={{ alignItems: 'end', marginBottom: 72 }}>
          <div>
            <div className="eyebrow" style={{ marginBottom: 20 }}>Real results</div>
            <h2 className="serif" style={{ fontSize: 64 }}>
              Members are<br/><span style={{ fontStyle: 'italic', color: 'var(--brand)' }}>losing weight.</span>
            </h2>
          </div>
          <p style={{ color: 'var(--ink-2)', fontSize: 16, lineHeight: 1.55, maxWidth: 440 }}>
            Individual results may vary. These members have consented to share their experience. Compensation was not provided.
          </p>
        </div>

        <div className="grid-3">
          {stories.map((s, i) => <StoryCard key={i} s={s}/>)}
        </div>

        <div className="grid-4" style={{ marginTop: 80, paddingTop: 40, borderTop: '1px solid var(--line)' }}>
          <BigStat num="94%" label="of members lose weight in first 90 days" />
          <BigStat num="18 lbs" label="average loss at 6 months" />
          <BigStat num="4.9★" label="member rating · 12.4k reviews" />
          <BigStat num="24/7" label="access to your clinical care team" />
        </div>
      </div>
    </section>
  );
}

function StoryCard({ s }) {
  return (
    <div className="card" style={{ overflow: 'hidden' }}>
      <div style={{ height: 260, position: 'relative' }}>
        <img src={s.img} alt={`${s.name} before and after`} style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }} />
      </div>
      <div style={{ padding: 28 }}>
        <div style={{ display: 'flex', gap: 6, color: 'var(--accent)', marginBottom: 16 }}>
          {[...Array(5)].map((_, i) => <Icon.Star key={i} size={12}/>)}
        </div>
        <p className="serif" style={{ fontSize: 22, lineHeight: 1.3, marginBottom: 24, color: 'var(--ink)' }}>
          "{s.quote}"
        </p>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', paddingTop: 20, borderTop: '1px solid var(--line-soft)' }}>
          <div>
            <div style={{ fontWeight: 500, fontSize: 14 }}>{s.name}, {s.age}</div>
            <div style={{ fontSize: 12, color: 'var(--ink-3)' }}>{s.city} · {s.med}</div>
          </div>
          <div style={{ textAlign: 'right', flexShrink: 0 }}>
            <div className="serif" style={{ fontSize: 24, color: 'var(--brand)', whiteSpace: 'nowrap' }}>{s.loss}</div>
            <div style={{ fontSize: 11, color: 'var(--ink-3)', whiteSpace: 'nowrap' }}>in {s.duration}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

function BigStat({ num, label }) {
  return (
    <div>
      <div className="serif" style={{ fontSize: 56, marginBottom: 8, letterSpacing: '-0.03em' }}>{num}</div>
      <div style={{ fontSize: 13, color: 'var(--ink-2)', lineHeight: 1.4, maxWidth: 200 }}>{label}</div>
    </div>
  );
}

// ============================================================================
// SCIENCE — how GLP-1 works explainer
// ============================================================================
function Science() {
  return (
    <section style={{ background: 'var(--brand)', color: '#FBF8F3', padding: '120px 0' }}>
      <div className="container grid-2" style={{ alignItems: 'center' }}>
        <div>
          <div className="eyebrow" style={{ color: 'rgba(251, 248, 243, 0.6)', marginBottom: 24 }}>The science</div>
          <h2 className="serif" style={{ fontSize: 64, marginBottom: 28, color: '#FBF8F3' }}>
            How GLP-1 <span style={{ fontStyle: 'italic', color: 'var(--accent-soft)' }}>actually</span> works.
          </h2>
          <p style={{ fontSize: 17, lineHeight: 1.6, opacity: 0.85, marginBottom: 32, maxWidth: 480 }}>
            GLP-1 is a naturally occurring hormone your gut releases after eating. Medications like semaglutide and tirzepatide mimic and extend this signal, reducing hunger, slowing digestion, and stabilizing blood sugar — the three factors most responsible for sustainable weight loss.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            {[
              { t: 'Reduces appetite', d: 'Signals satiety to the hypothalamus — you feel full on less food.' },
              { t: 'Slows gastric emptying', d: 'Food stays in your stomach longer, extending fullness between meals.' },
              { t: 'Stabilizes blood sugar', d: 'Improves insulin sensitivity, reducing cravings and energy crashes.' },
            ].map((item, i) => (
              <div key={i} style={{ display: 'flex', gap: 20, paddingTop: 20, borderTop: '1px solid rgba(251, 248, 243, 0.15)' }}>
                <span className="mono" style={{ opacity: 0.5, minWidth: 24 }}>0{i+1}</span>
                <div>
                  <div style={{ fontWeight: 500, fontSize: 16, marginBottom: 6 }}>{item.t}</div>
                  <div style={{ fontSize: 14, opacity: 0.7, lineHeight: 1.5 }}>{item.d}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Diagram */}
        <ScienceDiagram/>
      </div>
    </section>
  );
}

function ScienceDiagram() {
  return (
    <div style={{ position: 'relative', aspectRatio: '1/1', padding: 40 }}>
      <svg viewBox="0 0 400 400" style={{ width: '100%', height: '100%' }}>
        <defs>
          <radialGradient id="sciGrad">
            <stop offset="0%" stopColor="#E8C4AE" stopOpacity="0.4"/>
            <stop offset="100%" stopColor="#E8C4AE" stopOpacity="0"/>
          </radialGradient>
        </defs>

        {/* Concentric rings */}
        {[180, 140, 100, 60].map((r, i) => (
          <circle key={i} cx="200" cy="200" r={r} fill="none" stroke="#FBF8F3" strokeOpacity={0.15 - i * 0.02} strokeDasharray="2 6"/>
        ))}

        <circle cx="200" cy="200" r="180" fill="url(#sciGrad)"/>

        {/* Center: GLP-1 molecule abstract */}
        <circle cx="200" cy="200" r="28" fill="#E8C4AE"/>
        <text x="200" y="205" textAnchor="middle" fontFamily="var(--serif)" fontStyle="italic" fontSize="14" fill="#2E4A3B">GLP-1</text>

        {/* Orbiting nodes */}
        {[
          { angle: 0, label: 'Brain', sub: 'Satiety' },
          { angle: 120, label: 'Gut', sub: 'Digestion' },
          { angle: 240, label: 'Pancreas', sub: 'Insulin' },
        ].map((n, i) => {
          const rad = (n.angle - 90) * Math.PI / 180;
          const x = 200 + Math.cos(rad) * 140;
          const y = 200 + Math.sin(rad) * 140;
          return (
            <g key={i}>
              <line x1="200" y1="200" x2={x} y2={y} stroke="#FBF8F3" strokeOpacity="0.3" strokeDasharray="3 4"/>
              <circle cx={x} cy={y} r="38" fill="#1F3529" stroke="#FBF8F3" strokeOpacity="0.3"/>
              <text x={x} y={y - 2} textAnchor="middle" fill="#FBF8F3" fontSize="12" fontWeight="500">{n.label}</text>
              <text x={x} y={y + 14} textAnchor="middle" fill="#FBF8F3" fontSize="9" opacity="0.6" fontFamily="var(--mono)">{n.sub.toUpperCase()}</text>
            </g>
          );
        })}
      </svg>
    </div>
  );
}

// ============================================================================
// PRICING
// ============================================================================
function Pricing({ priceAnchor, onStartQuiz }) {
  const plans = [
    { name: 'Monthly', price: priceAnchor + 50, interval: 'mo', note: 'Billed monthly', best: false, save: null },
    { name: '3-Month', price: priceAnchor, interval: 'mo', note: 'Billed quarterly', best: true, save: 'Save 17%' },
    { name: '6-Month', price: priceAnchor - 20, interval: 'mo', note: 'Billed every 6 months', best: false, save: 'Save 26%' },
  ];
  return (
    <section id="pricing" className="section">
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: 72 }}>
          <div className="eyebrow" style={{ marginBottom: 20 }}>Pricing</div>
          <h2 className="serif" style={{ fontSize: 64, marginBottom: 16 }}>
            Simple pricing.<br/><span style={{ fontStyle: 'italic', color: 'var(--brand)' }}>No insurance needed.</span>
          </h2>
          <p style={{ maxWidth: 560, margin: '0 auto', color: 'var(--ink-2)', fontSize: 16 }}>
            Every plan includes medication, clinical care, shipping, and unlimited messaging with your care team.
          </p>
        </div>

        <div className="grid-3" style={{ maxWidth: 1080, margin: '0 auto' }}>
          {plans.map((p, i) => (
            <div
              key={i}
              className={`pricing-card ${p.best ? 'highlighted' : ''}`}
              style={{
                padding: 36,
                position: 'relative',
                borderColor: p.best ? 'var(--brand)' : 'var(--line-soft)',
                borderWidth: p.best ? 2 : 1,
                background: p.best ? 'var(--brand)' : 'var(--bg-card)',
                color: p.best ? '#FBF8F3' : 'var(--ink)',
                transform: p.best ? 'translateY(-8px)' : 'none',
              }}
            >
              {p.best && (
                <div style={{
                  position: 'absolute', top: -12, left: '50%', transform: 'translateX(-50%)',
                  background: 'var(--accent)', color: '#FBF8F3',
                  padding: '6px 14px', borderRadius: 999, fontSize: 11, fontWeight: 500, letterSpacing: '0.04em', textTransform: 'uppercase',
                }}>
                  Most popular
                </div>
              )}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 28 }}>
                <h3 className="serif" style={{ fontSize: 32 }}>{p.name}</h3>
                {p.save && <span className="pill" style={p.best ? { background: 'rgba(251,248,243,0.15)', color: '#FBF8F3', borderColor: 'rgba(251,248,243,0.25)' } : {}}>{p.save}</span>}
              </div>
              <div style={{ marginBottom: 28 }}>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: 6 }}>
                  <span className="serif" style={{ fontSize: 72, lineHeight: 1 }}>${p.price}</span>
                  <span style={{ fontSize: 16, opacity: 0.7 }}>/ {p.interval}</span>
                </div>
                <div style={{ fontSize: 13, opacity: 0.7, marginTop: 6 }}>{p.note}</div>
              </div>
              <ul style={{ listStyle: 'none', marginBottom: 28, display: 'flex', flexDirection: 'column', gap: 10, fontSize: 14 }}>
                {['GLP-1 medication (sema or tirz)', 'Personalized clinician plan', 'Free shipping, always', 'Unlimited care team messaging', p.best ? 'Priority shipping (2-day)' : 'Standard shipping (5-7 day)'].map((f, j) => (
                  <li key={j} style={{ display: 'flex', gap: 10, alignItems: 'center', opacity: p.best ? 0.95 : 0.9 }}>
                    <Icon.Check size={14}/> {f}
                  </li>
                ))}
              </ul>
              <button
                className={p.best ? 'btn' : 'btn btn-secondary'}
                style={{
                  width: '100%', justifyContent: 'center',
                  ...(p.best ? { background: '#FBF8F3', color: 'var(--brand)' } : {}),
                }}
                onClick={onStartQuiz}
              >
                See If You Qualify
              </button>
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: 40, fontSize: 13, color: 'var(--ink-3)' }}>
          All plans include a 30-day money-back guarantee. Cancel anytime before your next shipment.
        </div>
      </div>
    </section>
  );
}

window.Results = Results;
window.Science = Science;
window.Pricing = Pricing;
