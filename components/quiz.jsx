/* global React, Icon, Logo */
const { useState: useStateQuiz } = React;

function Quiz({ onClose, priceAnchor }) {
  const [step, setStep] = useStateQuiz(0);
  const [answers, setAnswers] = useStateQuiz({
    goal: null, current_weight: 185, goal_weight: 150, height_ft: 5, height_in: 6,
    sex: null, age: 35, conditions: [], tried: [], medication_pref: null, email: '',
  });

  const steps = [
    { id: 'goal', render: () => <GoalStep answers={answers} setAnswers={setAnswers}/> },
    { id: 'vitals', render: () => <VitalsStep answers={answers} setAnswers={setAnswers}/> },
    { id: 'weight', render: () => <WeightStep answers={answers} setAnswers={setAnswers}/> },
    { id: 'sex', render: () => <SexStep answers={answers} setAnswers={setAnswers}/> },
    { id: 'conditions', render: () => <ConditionsStep answers={answers} setAnswers={setAnswers}/> },
    { id: 'tried', render: () => <TriedStep answers={answers} setAnswers={setAnswers}/> },
    { id: 'pref', render: () => <PrefStep answers={answers} setAnswers={setAnswers}/> },
    { id: 'eligibility', render: () => <EligibilityStep answers={answers}/> },
    { id: 'email', render: () => <EmailStep answers={answers} setAnswers={setAnswers} priceAnchor={priceAnchor}/> },
  ];

  const canAdvance = () => {
    const curr = steps[step].id;
    if (curr === 'goal') return !!answers.goal;
    if (curr === 'sex') return !!answers.sex;
    if (curr === 'pref') return !!answers.medication_pref;
    if (curr === 'email') return /@/.test(answers.email);
    return true;
  };

  const next = () => setStep(s => Math.min(s + 1, steps.length - 1));
  const prev = () => step === 0 ? onClose() : setStep(s => s - 1);

  const progress = ((step + 1) / steps.length) * 100;

  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg)', display: 'flex', flexDirection: 'column' }}>
      {/* Header */}
      <div style={{ padding: '24px 40px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid var(--line-soft)' }}>
        <Logo size={18}/>
        <div style={{ fontFamily: 'var(--mono)', fontSize: 11, color: 'var(--ink-3)', letterSpacing: '0.1em' }}>
          STEP {step + 1} / {steps.length}
        </div>
        <button onClick={onClose} style={{ fontSize: 13, color: 'var(--ink-3)' }}>Exit ✕</button>
      </div>

      {/* Progress */}
      <div style={{ height: 2, background: 'var(--line-soft)', position: 'relative' }}>
        <div style={{ position: 'absolute', inset: 0, width: `${progress}%`, background: 'var(--brand)', transition: 'width .4s ease' }}/>
      </div>

      {/* Content */}
      <div className="quiz-content" style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div key={step} className="fade-in" style={{ width: '100%', maxWidth: 680 }}>
          {steps[step].render()}
        </div>
      </div>

      {/* Footer */}
      <div style={{ padding: '24px 40px', borderTop: '1px solid var(--line-soft)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'var(--bg-card)' }}>
        <button className="btn btn-secondary" onClick={prev}>
          ← Back
        </button>
        <div style={{ fontSize: 12, color: 'var(--ink-3)', display: 'flex', alignItems: 'center', gap: 8 }}>
          <Icon.Shield size={14}/> Your answers are private & HIPAA-compliant
        </div>
        {step < steps.length - 1 ? (
          <button className="btn btn-primary" onClick={next} disabled={!canAdvance()} style={{ opacity: canAdvance() ? 1 : 0.4 }}>
            Continue <Icon.Arrow/>
          </button>
        ) : (
          <button className="btn btn-primary" onClick={() => setStep(0)} disabled={!canAdvance()} style={{ opacity: canAdvance() ? 1 : 0.4 }}>
            Reserve my plan <Icon.Arrow/>
          </button>
        )}
      </div>
    </div>
  );
}

// ============== INDIVIDUAL STEPS ==============
function StepHeader({ eyebrow, title, sub }) {
  return (
    <div style={{ marginBottom: 40 }}>
      <div className="eyebrow" style={{ marginBottom: 16 }}>{eyebrow}</div>
      <h2 className="serif" style={{ fontSize: 48, marginBottom: 16, lineHeight: 1.1 }}>{title}</h2>
      {sub && <p style={{ color: 'var(--ink-2)', fontSize: 16, lineHeight: 1.55 }}>{sub}</p>}
    </div>
  );
}

function ChoiceList({ options, value, onChange, multi = false }) {
  const toggle = (v) => {
    if (multi) {
      const curr = value || [];
      onChange(curr.includes(v) ? curr.filter(x => x !== v) : [...curr, v]);
    } else onChange(v);
  };
  const isSelected = (v) => multi ? (value || []).includes(v) : value === v;
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
      {options.map(opt => {
        const sel = isSelected(opt.value);
        return (
          <button
            key={opt.value}
            onClick={() => toggle(opt.value)}
            style={{
              padding: '20px 24px', textAlign: 'left',
              border: `1px solid ${sel ? 'var(--brand)' : 'var(--line)'}`,
              borderWidth: sel ? 2 : 1,
              borderRadius: 12,
              background: sel ? 'rgba(46, 74, 59, 0.05)' : 'var(--bg-card)',
              display: 'flex', justifyContent: 'space-between', alignItems: 'center',
              transition: 'all .15s ease',
            }}
          >
            <div>
              <div style={{ fontSize: 16, fontWeight: 500, marginBottom: opt.sub ? 4 : 0 }}>{opt.label}</div>
              {opt.sub && <div style={{ fontSize: 13, color: 'var(--ink-3)' }}>{opt.sub}</div>}
            </div>
            <div style={{
              width: 24, height: 24, borderRadius: multi ? 4 : 999,
              border: `1.5px solid ${sel ? 'var(--brand)' : 'var(--line)'}`,
              background: sel ? 'var(--brand)' : 'transparent',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              color: '#FBF8F3',
            }}>
              {sel && <Icon.Check size={12}/>}
            </div>
          </button>
        );
      })}
    </div>
  );
}

function GoalStep({ answers, setAnswers }) {
  return (<>
    <StepHeader eyebrow="About you · 1 of 9" title="What's your primary weight loss goal?" sub="This helps your clinician personalize your plan."/>
    <ChoiceList
      value={answers.goal}
      onChange={v => setAnswers({ ...answers, goal: v })}
      options={[
        { value: 'lose_25', label: 'Lose 25 lbs or less', sub: 'Modest, sustainable goal' },
        { value: 'lose_50', label: 'Lose 25–50 lbs', sub: 'Most common range for GLP-1 patients' },
        { value: 'lose_75', label: 'Lose 50–75 lbs', sub: 'Significant, life-changing goal' },
        { value: 'lose_more', label: 'Lose more than 75 lbs', sub: 'Extended, clinician-guided journey' },
      ]}
    />
  </>);
}

function VitalsStep({ answers, setAnswers }) {
  return (<>
    <StepHeader eyebrow="About you · 2 of 9" title="Tell us about your body." sub="This determines your BMI and dosing recommendations."/>
    <div className="grid-2">
      <FieldGroup label="Height">
        <div style={{ display: 'flex', gap: 8 }}>
          <NumberField value={answers.height_ft} onChange={v => setAnswers({ ...answers, height_ft: v })} suffix="ft" min={4} max={7}/>
          <NumberField value={answers.height_in} onChange={v => setAnswers({ ...answers, height_in: v })} suffix="in" min={0} max={11}/>
        </div>
      </FieldGroup>
      <FieldGroup label="Age">
        <NumberField value={answers.age} onChange={v => setAnswers({ ...answers, age: v })} suffix="yrs" min={18} max={85}/>
      </FieldGroup>
    </div>
  </>);
}

function WeightStep({ answers, setAnswers }) {
  const diff = answers.current_weight - answers.goal_weight;
  return (<>
    <StepHeader eyebrow="About you · 3 of 9" title="What's your current and goal weight?" sub="Drag the sliders. You can refine this later with your clinician."/>
    <div style={{ display: 'flex', flexDirection: 'column', gap: 40, padding: '20px 0' }}>
      <SliderField label="Current weight" value={answers.current_weight} min={120} max={400} onChange={v => setAnswers({ ...answers, current_weight: v })}/>
      <SliderField label="Goal weight" value={answers.goal_weight} min={100} max={380} onChange={v => setAnswers({ ...answers, goal_weight: v })} accent/>
      <div style={{ padding: 24, background: 'var(--bg-card)', border: '1px solid var(--line-soft)', borderRadius: 12, textAlign: 'center' }}>
        <div className="eyebrow" style={{ marginBottom: 8 }}>Your target</div>
        <div className="serif" style={{ fontSize: 56, color: 'var(--brand)' }}>–{diff} lbs</div>
        <div style={{ fontSize: 13, color: 'var(--ink-3)' }}>achievable in ~{Math.round(diff / 3)} months on GLP-1 therapy</div>
      </div>
    </div>
  </>);
}

function SexStep({ answers, setAnswers }) {
  return (<>
    <StepHeader eyebrow="About you · 4 of 9" title="What's your sex at birth?" sub="This is used for medical dosing — not gender identity."/>
    <ChoiceList
      value={answers.sex}
      onChange={v => setAnswers({ ...answers, sex: v })}
      options={[
        { value: 'female', label: 'Female' },
        { value: 'male', label: 'Male' },
        { value: 'intersex', label: 'Intersex or prefer to specify' },
      ]}
    />
  </>);
}

function ConditionsStep({ answers, setAnswers }) {
  return (<>
    <StepHeader eyebrow="Health history · 5 of 9" title="Do any of these apply to you?" sub="Select all that apply. Your clinician will review these carefully."/>
    <ChoiceList
      multi
      value={answers.conditions}
      onChange={v => setAnswers({ ...answers, conditions: v })}
      options={[
        { value: 'prediabetes', label: 'Prediabetes or Type 2 diabetes', sub: 'Affects medication selection' },
        { value: 'pcos', label: 'PCOS', sub: 'GLP-1s often help with insulin resistance' },
        { value: 'hypertension', label: 'High blood pressure' },
        { value: 'sleep_apnea', label: 'Sleep apnea' },
        { value: 'thyroid', label: 'Thyroid condition' },
        { value: 'none', label: 'None of the above' },
      ]}
    />
  </>);
}

function TriedStep({ answers, setAnswers }) {
  return (<>
    <StepHeader eyebrow="Background · 6 of 9" title="What have you tried before?" sub="No judgment — this helps us understand your journey."/>
    <ChoiceList
      multi
      value={answers.tried}
      onChange={v => setAnswers({ ...answers, tried: v })}
      options={[
        { value: 'diets', label: 'Diet programs (Weight Watchers, Noom, keto, etc.)' },
        { value: 'trainer', label: 'Personal trainer or fitness programs' },
        { value: 'otc', label: 'Over-the-counter supplements' },
        { value: 'rx', label: 'Prescription weight loss medication' },
        { value: 'surgery', label: 'Bariatric surgery' },
        { value: 'nothing', label: 'Nothing — this is my first attempt' },
      ]}
    />
  </>);
}

function PrefStep({ answers, setAnswers }) {
  return (<>
    <StepHeader eyebrow="Preference · 7 of 9" title="Which medication interests you?" sub="Your clinician has the final say, but we'll factor in your preference."/>
    <ChoiceList
      value={answers.medication_pref}
      onChange={v => setAnswers({ ...answers, medication_pref: v })}
      options={[
        { value: 'sema', label: 'Semaglutide', sub: 'Most popular · –15% body weight avg · $149/mo' },
        { value: 'tirz', label: 'Tirzepatide', sub: 'Strongest results · –21% body weight avg · $249/mo' },
        { value: 'unsure', label: "I'm not sure", sub: 'My clinician will recommend the best fit' },
      ]}
    />
  </>);
}

function EligibilityStep({ answers }) {
  const bmi = (answers.current_weight / Math.pow(answers.height_ft * 12 + answers.height_in, 2)) * 703;
  const eligible = bmi >= 25;
  return (<>
    <div style={{ textAlign: 'center', padding: '20px 0' }}>
      <div style={{
        width: 88, height: 88, borderRadius: 999, background: 'var(--brand-soft)',
        display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 32px',
        color: 'var(--brand)',
      }}>
        <Icon.Check size={36}/>
      </div>
      <div className="eyebrow" style={{ marginBottom: 16 }}>Initial screening · 8 of 9</div>
      <h2 className="serif" style={{ fontSize: 56, marginBottom: 20 }}>
        {eligible ? <>You're a <span style={{ fontStyle: 'italic', color: 'var(--brand)' }}>strong candidate.</span></> : 'Let\'s review together.'}
      </h2>
      <p style={{ color: 'var(--ink-2)', fontSize: 17, maxWidth: 520, margin: '0 auto 40px', lineHeight: 1.55 }}>
        Based on your answers, you meet our initial eligibility criteria. A licensed clinician will make the final determination after reviewing your full health profile.
      </p>

      <div className="grid-3" style={{ maxWidth: 560, margin: '0 auto' }}>
        <SummaryStat label="BMI" value={bmi.toFixed(1)}/>
        <SummaryStat label="Target loss" value={`${answers.current_weight - answers.goal_weight} lbs`}/>
        <SummaryStat label="Expected timeline" value={`${Math.round((answers.current_weight - answers.goal_weight) / 3)} mo`}/>
      </div>
    </div>
  </>);
}

function EmailStep({ answers, setAnswers, priceAnchor }) {
  const med = answers.medication_pref === 'tirz' ? { name: 'Tirzepatide', price: priceAnchor + 100 } : { name: 'Semaglutide', price: priceAnchor };
  return (<>
    <div className="grid-2 stack-mobile" style={{ alignItems: 'center' }}>
      <div>
        <div className="eyebrow" style={{ marginBottom: 16 }}>Final step · 9 of 9</div>
        <h2 className="serif" style={{ fontSize: 44, marginBottom: 20, lineHeight: 1.1 }}>
          Where should we send your <span style={{ fontStyle: 'italic', color: 'var(--brand)' }}>plan?</span>
        </h2>
        <p style={{ color: 'var(--ink-2)', fontSize: 15, lineHeight: 1.55, marginBottom: 28 }}>
          We'll hold your spot and email you a secure link to complete your clinical intake.
        </p>
        <FieldGroup label="Email">
          <input
            type="email"
            value={answers.email}
            onChange={e => setAnswers({ ...answers, email: e.target.value })}
            placeholder="you@email.com"
            style={{
              width: '100%', padding: '16px 20px', fontSize: 16,
              border: '1px solid var(--line)', borderRadius: 12,
              background: 'var(--bg-card)', color: 'var(--ink)',
              fontFamily: 'inherit', outline: 'none',
            }}
          />
        </FieldGroup>
        <div style={{ fontSize: 12, color: 'var(--ink-3)', marginTop: 16, lineHeight: 1.5 }}>
          By continuing, you agree to our telehealth consent and privacy policy. You are not charged until a clinician approves your prescription.
        </div>
      </div>

      <div className="card" style={{ padding: 28 }}>
        <div className="eyebrow" style={{ marginBottom: 20 }}>Your recommended plan</div>
        <h3 className="serif" style={{ fontSize: 32, marginBottom: 4 }}>{med.name}</h3>
        <div style={{ fontSize: 13, color: 'var(--ink-3)', marginBottom: 24 }}>3-month plan · compounded, weekly</div>
        <div style={{ display: 'flex', justifyContent: 'space-between', padding: '16px 0', borderTop: '1px solid var(--line-soft)' }}>
          <span style={{ fontSize: 14 }}>Medication</span>
          <span style={{ fontWeight: 500 }}>${med.price}/mo</span>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', padding: '16px 0', borderTop: '1px solid var(--line-soft)' }}>
          <span style={{ fontSize: 14 }}>Clinical care + shipping</span>
          <span style={{ fontWeight: 500 }}>Included</span>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', padding: '16px 0', borderTop: '1px solid var(--line-soft)', borderBottom: '1px solid var(--line-soft)' }}>
          <span style={{ fontSize: 14 }}>First-month discount</span>
          <span style={{ fontWeight: 500, color: 'var(--accent)' }}>–$50</span>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', padding: '20px 0 0' }}>
          <span className="serif" style={{ fontSize: 20 }}>Today</span>
          <span className="serif" style={{ fontSize: 36, color: 'var(--brand)' }}>${med.price - 50}</span>
        </div>
      </div>
    </div>
  </>);
}

// Helpers
function FieldGroup({ label, children }) {
  return (
    <div>
      <div className="mono" style={{ color: 'var(--ink-3)', marginBottom: 8 }}>{label}</div>
      {children}
    </div>
  );
}
function NumberField({ value, onChange, suffix, min, max }) {
  return (
    <div style={{ flex: 1, display: 'flex', alignItems: 'center', background: 'var(--bg-card)', border: '1px solid var(--line)', borderRadius: 12, padding: '12px 16px' }}>
      <input
        type="number" value={value} min={min} max={max}
        onChange={e => onChange(Math.max(min, Math.min(max, +e.target.value || 0)))}
        style={{ flex: 1, border: 0, background: 'transparent', fontSize: 18, fontWeight: 500, outline: 'none', fontFamily: 'inherit', color: 'var(--ink)' }}
      />
      <span style={{ fontSize: 13, color: 'var(--ink-3)' }}>{suffix}</span>
    </div>
  );
}
function SliderField({ label, value, min, max, onChange, accent }) {
  const pct = ((value - min) / (max - min)) * 100;
  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 12 }}>
        <span className="mono" style={{ color: 'var(--ink-3)' }}>{label}</span>
        <span className="serif" style={{ fontSize: 40, color: accent ? 'var(--accent)' : 'var(--brand)' }}>{value} <span style={{ fontSize: 14, color: 'var(--ink-3)' }}>lbs</span></span>
      </div>
      <div style={{ position: 'relative', height: 36, display: 'flex', alignItems: 'center' }}>
        <div style={{ position: 'absolute', inset: '16px 0 16px', background: 'var(--line-soft)', borderRadius: 999 }}/>
        <div style={{ position: 'absolute', left: 0, width: `${pct}%`, top: 16, bottom: 16, background: accent ? 'var(--accent)' : 'var(--brand)', borderRadius: 999 }}/>
        <input
          type="range" value={value} min={min} max={max}
          onChange={e => onChange(+e.target.value)}
          style={{ position: 'absolute', inset: 0, width: '100%', opacity: 0, cursor: 'pointer' }}
        />
        <div style={{
          position: 'absolute', left: `calc(${pct}% - 12px)`, top: 6, width: 24, height: 24,
          borderRadius: 999, background: '#FBF8F3',
          border: `2px solid ${accent ? 'var(--accent)' : 'var(--brand)'}`,
          boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
          pointerEvents: 'none',
        }}/>
      </div>
    </div>
  );
}
function SummaryStat({ label, value }) {
  return (
    <div className="card" style={{ padding: 20 }}>
      <div className="mono" style={{ color: 'var(--ink-3)', marginBottom: 6 }}>{label}</div>
      <div className="serif" style={{ fontSize: 28 }}>{value}</div>
    </div>
  );
}

window.Quiz = Quiz;
