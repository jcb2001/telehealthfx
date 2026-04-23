/* global React, Icon, Logo */

// ============================================================================
// FAQ
// ============================================================================
function FAQ() {
  const faqs = [
    { q: 'Is compounded semaglutide or tirzepatide safe?', a: 'Our medications are compounded at state-licensed, FDA-regulated 503A and 503B pharmacies in the United States. The active ingredient is the same as the branded versions. All compounded formulations are overseen by licensed pharmacists and dispensed only by prescription from a licensed clinician.' },
    { q: 'Who is eligible for the program?', a: 'Most adults 18+ with a BMI of 27 or higher, or 25+ with a weight-related condition, are eligible. Our clinicians will review your health history in full to determine whether GLP-1 therapy is appropriate for you.' },
    { q: 'How much weight will I lose?', a: 'Results vary. In clinical studies, patients on tirzepatide lost an average of 21% of their body weight at 72 weeks, and patients on semaglutide lost an average of 15%. Your results depend on dose, duration, and lifestyle.' },
    { q: 'What are the side effects?', a: 'The most common side effects are mild nausea, constipation, and fatigue, especially in the first few weeks. These typically resolve as your body adjusts. Your clinician will work with you to titrate doses comfortably.' },
    { q: 'Can I cancel anytime?', a: 'Yes. You can pause or cancel your subscription from your account dashboard at any time before your next shipment processes. No fees, no questions.' },
    { q: 'Does insurance cover this?', a: 'No — our program is cash-pay and does not bill insurance. This keeps pricing simple, transparent, and consistent for every member.' },
    { q: 'Which medication is right for me?', a: 'Your clinician will recommend semaglutide or tirzepatide based on your health history, goals, and prior weight loss experience. You can also express a preference during your intake.' },
  ];
  const [open, setOpen] = React.useState(0);
  return (
    <section id="faq" className="section">
      <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1.3fr', gap: 80 }}>
        <div>
          <div className="eyebrow" style={{ marginBottom: 20 }}>FAQ</div>
          <h2 className="serif" style={{ fontSize: 64, marginBottom: 24 }}>
            Questions,<br/><span style={{ fontStyle: 'italic', color: 'var(--brand)' }}>answered.</span>
          </h2>
          <p style={{ color: 'var(--ink-2)', fontSize: 15, lineHeight: 1.6, marginBottom: 32 }}>
            Still have questions? Our care team replies within an hour, seven days a week.
          </p>
          <button className="btn btn-secondary">
            <Icon.Chat/> Message our team
          </button>
        </div>

        <div>
          {faqs.map((f, i) => (
            <div key={i} style={{ borderTop: '1px solid var(--line)', padding: '24px 0' }}>
              <button
                onClick={() => setOpen(open === i ? -1 : i)}
                style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%', textAlign: 'left', padding: 0 }}
              >
                <span className="serif" style={{ fontSize: 22, paddingRight: 20 }}>{f.q}</span>
                <span style={{ width: 32, height: 32, borderRadius: 999, border: '1px solid var(--line)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, color: 'var(--ink-2)' }}>
                  {open === i ? <Icon.Minus/> : <Icon.Plus/>}
                </span>
              </button>
              {open === i && (
                <div style={{ marginTop: 16, color: 'var(--ink-2)', fontSize: 15, lineHeight: 1.6, maxWidth: 600, animation: 'fadeIn .25s ease' }}>
                  {f.a}
                </div>
              )}
            </div>
          ))}
          <div style={{ borderTop: '1px solid var(--line)' }}/>
        </div>
      </div>
    </section>
  );
}

// ============================================================================
// FINAL CTA
// ============================================================================
function FinalCTA({ priceAnchor, onStartQuiz }) {
  return (
    <section style={{ padding: '120px 0' }}>
      <div className="container">
        <div style={{
          background: 'var(--brand)', color: '#FBF8F3',
          borderRadius: 32, padding: '100px 80px',
          position: 'relative', overflow: 'hidden',
        }}>
          <svg style={{ position: 'absolute', top: -40, right: -40, opacity: 0.1 }} width="400" height="400" viewBox="0 0 400 400">
            <circle cx="200" cy="200" r="199" fill="none" stroke="#E8C4AE" strokeWidth="1"/>
            <circle cx="200" cy="200" r="160" fill="none" stroke="#E8C4AE" strokeWidth="1"/>
            <circle cx="200" cy="200" r="120" fill="none" stroke="#E8C4AE" strokeWidth="1"/>
            <circle cx="200" cy="200" r="80" fill="none" stroke="#E8C4AE" strokeWidth="1"/>
          </svg>
          <div style={{ maxWidth: 640, position: 'relative' }}>
            <div className="eyebrow" style={{ color: 'rgba(251, 248, 243, 0.6)', marginBottom: 24 }}>Take the first step</div>
            <h2 className="serif" style={{ fontSize: 88, marginBottom: 28, color: '#FBF8F3', lineHeight: 0.95 }}>
              The program,<br/><span style={{ fontStyle: 'italic', color: 'var(--accent-soft)' }}>waiting for you.</span>
            </h2>
            <p style={{ fontSize: 18, opacity: 0.8, lineHeight: 1.55, marginBottom: 40, maxWidth: 520 }}>
              A 2-minute quiz tells us what you need. From ${priceAnchor}/month. Medication ships in under a week.
            </p>
            <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
              <button className="btn btn-lg" style={{ background: '#FBF8F3', color: 'var(--brand)' }} onClick={onStartQuiz}>
                Start my plan <Icon.Arrow/>
              </button>
              <div style={{ fontSize: 13, opacity: 0.7 }}>No insurance · 30-day guarantee</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ============================================================================
// FOOTER
// ============================================================================
function Footer() {
  return (
    <footer style={{ background: 'var(--bg-alt)', padding: '80px 0 40px', borderTop: '1px solid var(--line-soft)' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr 1fr 1fr 1fr', gap: 48, marginBottom: 80 }}>
          <div>
            <Logo size={22}/>
            <p style={{ marginTop: 20, fontSize: 13, color: 'var(--ink-3)', lineHeight: 1.6, maxWidth: 280 }}>
              Clinical weight loss, delivered. Licensed in all 50 states. Medications compounded in FDA-regulated US pharmacies.
            </p>
          </div>
          {[
            { h: 'Product', l: ['How it works', 'Medications', 'Pricing', 'Results', 'Science'] },
            { h: 'Company', l: ['About', 'Careers', 'Press', 'Partners', 'Contact'] },
            { h: 'Support', l: ['Help center', 'Shipping', 'Returns', 'Insurance', 'Status'] },
            { h: 'Legal', l: ['Privacy', 'Terms', 'Telehealth consent', 'HIPAA', 'Accessibility'] },
          ].map((col, i) => (
            <div key={i}>
              <div className="mono" style={{ color: 'var(--ink-3)', marginBottom: 16 }}>{col.h}</div>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10 }}>
                {col.l.map(item => (
                  <li key={item} style={{ fontSize: 14, color: 'var(--ink-2)' }}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div style={{ paddingTop: 40, borderTop: '1px solid var(--line)', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', gap: 40 }}>
          <div style={{ fontSize: 11, color: 'var(--ink-3)', lineHeight: 1.6, maxWidth: 720 }}>
            <strong>Important safety information.</strong> Compounded semaglutide and tirzepatide are not FDA-approved. They are custom preparations made at the discretion of a licensed pharmacy under 503A/503B compounding law. GLP-1 medications may cause serious side effects. Do not use if you have a personal or family history of medullary thyroid carcinoma or MEN 2. Consult your clinician before starting any medication.
          </div>
          <div style={{ fontSize: 12, color: 'var(--ink-3)', whiteSpace: 'nowrap' }}>
            © 2026 Telehealth FX, Inc.
          </div>
        </div>
      </div>
    </footer>
  );
}

window.FAQ = FAQ;
window.FinalCTA = FinalCTA;
window.Footer = Footer;
