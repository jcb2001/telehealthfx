/* global React, Nav, Hero, PressStrip, HowItWorks, Medications, Results, Science, Pricing, FAQ, FinalCTA, Footer, Quiz */
const { useState: useStateApp, useEffect: useEffectApp } = React;

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "accentColor": "#2E4A3B",
  "headline": "Lose the weight.\nKeep it off.",
  "priceAnchor": 149,
  "heroLayout": "default"
}/*EDITMODE-END*/;

function App() {
  const [view, setView] = useStateApp(() => {
    const path = window.location.pathname;
    if (path && path !== '/' && path !== '/index.html') {
      return `page:${path.substring(1)}`; // Remove leading slash
    }
    return localStorage.getItem('tfx_view') || 'landing';
  });
  const [tweaks, setTweaks] = useStateApp(TWEAK_DEFAULTS);
  const [editMode, setEditMode] = useStateApp(false);

  useEffectApp(() => { 
    if (!view.startsWith('page:')) {
      localStorage.setItem('tfx_view', view); 
    }
  }, [view]);

  // Apply accent color live
  useEffectApp(() => {
    document.documentElement.style.setProperty('--brand', tweaks.accentColor);
    // derive a deeper variant
    const deep = shade(tweaks.accentColor, -0.15);
    document.documentElement.style.setProperty('--brand-deep', deep);
  }, [tweaks.accentColor]);

  // Edit mode protocol
  useEffectApp(() => {
    const handler = (e) => {
      if (e.data?.type === '__activate_edit_mode') setEditMode(true);
      if (e.data?.type === '__deactivate_edit_mode') setEditMode(false);
    };
    window.addEventListener('message', handler);
    window.parent.postMessage({ type: '__edit_mode_available' }, '*');
    return () => window.removeEventListener('message', handler);
  }, []);

  const updateTweak = (k, v) => {
    setTweaks(prev => ({ ...prev, [k]: v }));
    window.parent.postMessage({ type: '__edit_mode_set_keys', edits: { [k]: v } }, '*');
  };

  const startQuiz = () => { setView('quiz'); window.scrollTo(0, 0); };
  const startAffiliate = () => { window.location.href = 'https://swiy.co/yucca-quiz'; };
  const backToLanding = () => { setView('landing'); window.scrollTo(0, 0); };

  return (
    <>
      {view.startsWith('page:') ? (
        <GenericPage pageSlug={view.replace('page:', '')} priceAnchor={tweaks.priceAnchor} onStartQuiz={startQuiz}/>
      ) : view === 'landing' ? (
        <div data-screen-label="01 Landing">
          <Nav onStartQuiz={startAffiliate}/>
          <Hero headline={tweaks.headline} priceAnchor={tweaks.priceAnchor} layout={tweaks.heroLayout} onStartQuiz={startAffiliate}/>
          <PressStrip/>
          <HowItWorks/>
          <Medications priceAnchor={tweaks.priceAnchor} onStartQuiz={startAffiliate}/>
          <Results/>
          <Science/>
          <Pricing priceAnchor={tweaks.priceAnchor} onStartQuiz={startAffiliate}/>
          <FAQ/>
          <FinalCTA priceAnchor={tweaks.priceAnchor} onStartQuiz={startAffiliate}/>
          <Footer/>
        </div>
      ) : (
        <div data-screen-label="02 Quiz">
          <Quiz onClose={backToLanding} priceAnchor={tweaks.priceAnchor}/>
        </div>
      )}

      {editMode && <TweaksPanel tweaks={tweaks} update={updateTweak}/>}
    </>
  );
}

function shade(hex, amt) {
  const h = hex.replace('#', '');
  const r = parseInt(h.substring(0, 2), 16);
  const g = parseInt(h.substring(2, 4), 16);
  const b = parseInt(h.substring(4, 6), 16);
  const adj = (c) => Math.max(0, Math.min(255, Math.round(c + 255 * amt)));
  return '#' + [adj(r), adj(g), adj(b)].map(x => x.toString(16).padStart(2, '0')).join('');
}

function TweaksPanel({ tweaks, update }) {
  return (
    <div style={{
      position: 'fixed', bottom: 20, right: 20, zIndex: 100,
      background: '#FBF8F3', border: '1px solid var(--line)',
      borderRadius: 16, padding: 20, width: 320,
      boxShadow: '0 20px 60px -20px rgba(0,0,0,0.3)',
      fontFamily: 'var(--sans)',
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16, paddingBottom: 12, borderBottom: '1px solid var(--line-soft)' }}>
        <div className="serif" style={{ fontSize: 22 }}>Tweaks</div>
        <div className="mono" style={{ color: 'var(--ink-3)' }}>live</div>
      </div>

      <TweakField label="Accent color">
        <div style={{ display: 'flex', gap: 8 }}>
          {['#2E4A3B', '#1E3A5F', '#B8624A', '#8A4A68', '#0A0A0A'].map(c => (
            <button key={c} onClick={() => update('accentColor', c)} style={{
              width: 28, height: 28, borderRadius: 999, background: c,
              border: tweaks.accentColor === c ? '2px solid var(--ink)' : '1px solid var(--line)',
              cursor: 'pointer',
            }}/>
          ))}
        </div>
      </TweakField>

      <TweakField label="Headline">
        <textarea
          value={tweaks.headline}
          onChange={e => update('headline', e.target.value)}
          rows={3}
          style={{
            width: '100%', padding: '10px 12px', fontSize: 13,
            border: '1px solid var(--line)', borderRadius: 8,
            background: 'var(--bg)', fontFamily: 'inherit', resize: 'none', outline: 'none',
          }}
        />
        <div style={{ fontSize: 10, color: 'var(--ink-3)', marginTop: 4 }}>Use a newline to italicize the 2nd line.</div>
      </TweakField>

      <TweakField label={`Price anchor: $${tweaks.priceAnchor}/mo`}>
        <input
          type="range" min={79} max={299} step={10}
          value={tweaks.priceAnchor}
          onChange={e => update('priceAnchor', +e.target.value)}
          style={{ width: '100%' }}
        />
      </TweakField>

      <TweakField label="Hero layout">
        <div style={{ display: 'flex', gap: 6 }}>
          {[
            { v: 'default', l: 'Split' },
            { v: 'editorial', l: 'Editorial' },
            { v: 'data', l: 'Data' },
          ].map(o => (
            <button key={o.v} onClick={() => update('heroLayout', o.v)} style={{
              flex: 1, padding: '8px 10px', fontSize: 12,
              borderRadius: 8,
              border: `1px solid ${tweaks.heroLayout === o.v ? 'var(--brand)' : 'var(--line)'}`,
              background: tweaks.heroLayout === o.v ? 'rgba(46,74,59,0.08)' : 'var(--bg)',
              color: tweaks.heroLayout === o.v ? 'var(--brand)' : 'var(--ink-2)',
              fontWeight: 500, cursor: 'pointer',
            }}>{o.l}</button>
          ))}
        </div>
      </TweakField>
    </div>
  );
}

function TweakField({ label, children }) {
  return (
    <div style={{ marginBottom: 14 }}>
      <div className="mono" style={{ color: 'var(--ink-3)', marginBottom: 6, fontSize: 10 }}>{label}</div>
      {children}
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App/>);
