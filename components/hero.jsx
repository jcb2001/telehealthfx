/* global React, Icon, Logo */
const { useState: useStateNav, useEffect: useEffectNav } = React;

function Nav({ onStartQuiz }) {
  const [scrolled, setScrolled] = useStateNav(false);
  useEffectNav(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return (
    <nav style={{
      position: 'sticky', top: 0, zIndex: 50,
      background: scrolled ? 'rgba(245, 241, 234, 0.85)' : 'transparent',
      backdropFilter: scrolled ? 'blur(12px)' : 'none',
      borderBottom: scrolled ? '1px solid var(--line-soft)' : '1px solid transparent',
      transition: 'all .3s ease',
    }}>
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 72 }}>
        <Logo />
        <div className="nav-links" style={{ display: 'flex', gap: 32, fontSize: 14, color: 'var(--ink-2)' }}>
          <a href="#how">How it works</a>
          <a href="#treatments">Treatments</a>
          <a href="#pricing">Pricing</a>
          <a href="#results">Results</a>
          <a href="#faq">FAQ</a>
        </div>
        <div className="flex-row nav-actions" style={{ gap: 12, alignItems: 'center' }}>
          <a href="#" className="sign-in-link" style={{ fontSize: 14, color: 'var(--ink-2)' }}>Sign in</a>
          <button className="btn btn-primary" onClick={onStartQuiz}>
            Start my plan <Icon.Arrow />
          </button>
        </div>
      </div>
    </nav>
  );
}

// ============================================================================
// HERO
// ============================================================================
function Hero({ headline, priceAnchor, layout, onStartQuiz }) {
  if (layout === 'editorial') return <HeroEditorial headline={headline} priceAnchor={priceAnchor} onStartQuiz={onStartQuiz} />;
  if (layout === 'data') return <HeroData headline={headline} priceAnchor={priceAnchor} onStartQuiz={onStartQuiz} />;
  return <HeroDefault headline={headline} priceAnchor={priceAnchor} onStartQuiz={onStartQuiz} />;
}

function HeroDefault({ headline, priceAnchor, onStartQuiz }) {
  return (
    <section style={{ padding: '60px 0 100px' }}>
      <div className="container grid-2-hero">
        <div>
          <div className="pill pill-dot pill-brand fade-in" style={{ marginBottom: 28 }}>
            <span>FDA-approved medications · Board-certified clinicians</span>
          </div>
          <h1 className="serif fade-in" style={{ fontSize: 88, marginBottom: 28 }}>
            {headline.split('\n').map((line, i) => (
              <span key={i} style={{ display: 'block', fontStyle: i === 1 ? 'italic' : 'normal', color: i === 1 ? 'var(--brand)' : 'inherit' }}>{line}</span>
            ))}
          </h1>
          <p className="fade-in" style={{ fontSize: 18, color: 'var(--ink-2)', maxWidth: 520, marginBottom: 36, lineHeight: 1.55 }}>
            GLP-1 weight loss medication, delivered. A personalized clinical program with semaglutide or tirzepatide — prescribed online, shipped to your door.
          </p>
          <div className="flex-row stack-mobile" style={{ gap: 12, marginBottom: 40 }}>
            <button className="btn btn-primary btn-lg" onClick={onStartQuiz}>
              Take the 2-minute quiz <Icon.Arrow />
            </button>
            <div style={{ fontSize: 13, color: 'var(--ink-3)' }}>
              <span style={{ color: 'var(--ink)', fontWeight: 500 }}>From ${priceAnchor}/mo</span> · No insurance needed
            </div>
          </div>

          {/* Trust row */}
          <div className="flex-row hero-trust-row" style={{ gap: 32, paddingTop: 28, borderTop: '1px solid var(--line-soft)' }}>
            <TrustStat number="94%" label="of members lose weight in 90 days" />
            <TrustStat number="15 lbs" label="average loss at 3 months" />
            <TrustStat number="4.9★" label="from 12,400+ reviews" />
          </div>
        </div>

        {/* Visual */}
        <HeroVisual />
      </div>
    </section>
  );
}

function HeroEditorial({ headline, priceAnchor, onStartQuiz }) {
  return (
    <section style={{ padding: '80px 0 120px', textAlign: 'center' }}>
      <div className="container" style={{ maxWidth: 980 }}>
        <div className="eyebrow" style={{ marginBottom: 32 }}>Clinical Weight Loss · Est. 2024</div>
        <h1 className="serif" style={{ fontSize: 132, marginBottom: 40, lineHeight: 0.92 }}>
          {headline.split('\n').map((line, i) => (
            <span key={i} style={{ display: 'block', fontStyle: i === 1 ? 'italic' : 'normal' }}>{line}</span>
          ))}
        </h1>
        <p style={{ fontSize: 19, color: 'var(--ink-2)', maxWidth: 600, margin: '0 auto 40px', lineHeight: 1.5 }}>
          Personalized GLP-1 care from licensed clinicians. From ${priceAnchor}/month, shipped to your door.
        </p>
        <button className="btn btn-primary btn-lg" onClick={onStartQuiz}>
          Start my plan <Icon.Arrow />
        </button>
      </div>
    </section>
  );
}

function HeroData({ headline, priceAnchor, onStartQuiz }) {
  return (
    <section style={{ padding: '60px 0 100px' }}>
      <div className="container grid-2">
        <div>
          <div className="pill pill-dot pill-brand" style={{ marginBottom: 28 }}>
            <span>Now accepting new patients</span>
          </div>
          <h1 className="serif" style={{ fontSize: 80, marginBottom: 28 }}>
            {headline.split('\n').map((line, i) => (
              <span key={i} style={{ display: 'block', fontStyle: i === 1 ? 'italic' : 'normal' }}>{line}</span>
            ))}
          </h1>
          <p style={{ fontSize: 17, color: 'var(--ink-2)', maxWidth: 480, marginBottom: 32, lineHeight: 1.55 }}>
            Personalized GLP-1 care from board-certified clinicians. From ${priceAnchor}/month.
          </p>
          <button className="btn btn-primary btn-lg" onClick={onStartQuiz}>
            Check my eligibility <Icon.Arrow />
          </button>
        </div>
        <WeightChart />
      </div>
    </section>
  );
}

function TrustStat({ number, label }) {
  return (
    <div style={{ flex: 1 }}>
      <div className="serif" style={{ fontSize: 36, color: 'var(--brand)', marginBottom: 4 }}>{number}</div>
      <div style={{ fontSize: 12, color: 'var(--ink-3)', lineHeight: 1.4 }}>{label}</div>
    </div>
  );
}

function HeroVisual() {
  return (
    <div style={{ position: 'relative', aspectRatio: '4/5' }}>
      {/* Full-bleed hero image */}
      <div style={{
        position: 'absolute', inset: 0, borderRadius: 20, overflow: 'hidden',
        background: '#3C5766',
      }}>
        <img
          src="assets/hero-model.jpg"
          alt="Telehealth FX member"
          style={{
            position: 'absolute', inset: 0,
            width: '100%', height: '100%',
            objectFit: 'cover', objectPosition: 'center',
          }}
        />

        {/* Subtle gradient for label legibility */}
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(180deg, rgba(20,30,40,0.25) 0%, transparent 20%, transparent 75%, rgba(20,30,40,0.35) 100%)',
        }}/>

        {/* Eyebrow labels on the edges */}
        <div style={{
          position: 'absolute', top: 24, left: 24, right: 24,
          display: 'flex', justifyContent: 'space-between',
          fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '0.14em',
          color: 'rgba(251, 248, 243, 0.8)', textTransform: 'uppercase',
        }}>
          <span>FX/01 — Member Portrait</span>
          <span>Est. 2024</span>
        </div>
        <div style={{
          position: 'absolute', bottom: 24, left: 24, right: 24,
          display: 'flex', justifyContent: 'space-between',
          fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '0.14em',
          color: 'rgba(251, 248, 243, 0.8)', textTransform: 'uppercase',
        }}>
          <span>GLP-1 · Month 04</span>
          <span>NYC</span>
        </div>
      </div>

      {/* Progress card — bottom left, overlapping */}
      <div className="card" style={{
        position: 'absolute', bottom: 32, left: -36, padding: 18, width: 240,
        boxShadow: '0 20px 60px -20px rgba(26, 31, 28, 0.35)',
        background: '#FBF8F3',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10 }}>
          <div style={{ width: 32, height: 32, borderRadius: 999, background: 'var(--brand-soft)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--brand)' }}>
            <Icon.Check size={14}/>
          </div>
          <div>
            <div style={{ fontSize: 11, color: 'var(--ink-3)' }}>Member · Month 4</div>
            <div style={{ fontSize: 13, fontWeight: 500 }}>Down 22 lbs</div>
          </div>
        </div>
        <svg width="100%" height="40" viewBox="0 0 220 40">
          <polyline points="0,6 30,10 60,14 90,20 120,22 150,28 180,32 220,36"
            fill="none" stroke="var(--brand)" strokeWidth="2" strokeLinecap="round"/>
          <circle cx="220" cy="36" r="3" fill="var(--brand)"/>
        </svg>
      </div>

      {/* Clinician card — top right */}
      <div className="card" style={{
        position: 'absolute', top: 40, right: -28, padding: '12px 16px',
        boxShadow: '0 12px 40px -12px rgba(26, 31, 28, 0.3)',
        display: 'flex', alignItems: 'center', gap: 10,
        background: '#FBF8F3',
      }}>
        <Icon.Shield size={16}/>
        <div>
          <div style={{ fontSize: 10, color: 'var(--ink-3)' }}>Prescribed by</div>
          <div style={{ fontSize: 13, fontWeight: 500 }}>Dr. Elena Rivera, MD</div>
        </div>
      </div>

      {/* Med pill — mid right */}
      <div style={{
        position: 'absolute', top: '42%', right: -16,
        background: 'var(--accent)', color: '#FBF8F3',
        borderRadius: 999, padding: '10px 14px',
        boxShadow: '0 10px 30px -10px rgba(199, 125, 92, 0.5)',
        display: 'flex', alignItems: 'center', gap: 8,
        fontSize: 12, fontWeight: 500,
      }}>
        <Icon.Syringe size={14}/>
        Tirzepatide · 5mg
      </div>
    </div>
  );
}

function WeightChart() {
  return (
    <div className="card" style={{ padding: 32, aspectRatio: '1/1' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 20 }}>
        <div>
          <div className="eyebrow" style={{ marginBottom: 6 }}>Avg. member results</div>
          <div className="serif" style={{ fontSize: 40 }}>–18.2 lbs</div>
          <div style={{ fontSize: 12, color: 'var(--ink-3)' }}>over 6 months</div>
        </div>
        <div className="pill pill-brand">6-month study · n=2,400</div>
      </div>
      <svg width="100%" viewBox="0 0 400 240" style={{ marginTop: 20 }}>
        <defs>
          <linearGradient id="grad1" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="var(--brand)" stopOpacity="0.3" />
            <stop offset="100%" stopColor="var(--brand)" stopOpacity="0" />
          </linearGradient>
        </defs>
        {[0, 1, 2, 3].map(i => (
          <line key={i} x1="0" x2="400" y1={60 * i + 20} y2={60 * i + 20} stroke="var(--line-soft)" strokeDasharray="2 4"/>
        ))}
        <path d="M0,30 Q80,60 120,100 T240,160 T400,210 L400,240 L0,240 Z" fill="url(#grad1)"/>
        <path d="M0,30 Q80,60 120,100 T240,160 T400,210" fill="none" stroke="var(--brand)" strokeWidth="2"/>
        {[[0,30],[100,80],[200,140],[300,180],[400,210]].map(([x,y],i) => (
          <circle key={i} cx={x} cy={y} r="4" fill="var(--bg-card)" stroke="var(--brand)" strokeWidth="2"/>
        ))}
      </svg>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 12, fontSize: 11, color: 'var(--ink-3)', fontFamily: 'var(--mono)' }}>
        <span>M1</span><span>M2</span><span>M3</span><span>M4</span><span>M6</span>
      </div>
    </div>
  );
}

window.Nav = Nav;
window.Hero = Hero;
