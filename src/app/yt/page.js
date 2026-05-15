"use client";
import React from "react";

const CTA_URL = "https://go.telehealthfx.com/yt";

function trackAndGo(e) {
  e.preventDefault();
  const url = new URL(CTA_URL);
  if (typeof window !== "undefined") {
    const params = new URLSearchParams(window.location.search);
    ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term"].forEach(
      (k) => { if (params.get(k)) url.searchParams.set(k, params.get(k)); }
    );
    if (window.dataLayer) window.dataLayer.push({ event: "quiz_start" });
  }
  window.location.href = url.toString();
}

function CtaBtn({ label = "Take the Health Quiz", id, large }) {
  return (
    <a
      id={id || "cta-btn"}
      href={CTA_URL}
      onClick={trackAndGo}
      style={{
        display: "inline-flex", alignItems: "center", gap: 8,
        padding: large ? "20px 36px" : "16px 28px",
        borderRadius: 999, background: "#2E4A3B", color: "#FBF8F3",
        fontSize: large ? 17 : 15, fontWeight: 600, letterSpacing: "-0.01em",
        transition: "background .2s, transform .2s", textDecoration: "none", cursor: "pointer",
      }}
      onMouseEnter={(e) => { e.currentTarget.style.background = "#1F3529"; e.currentTarget.style.transform = "translateY(-2px)"; }}
      onMouseLeave={(e) => { e.currentTarget.style.background = "#2E4A3B"; e.currentTarget.style.transform = "none"; }}
    >
      {label}
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </a>
  );
}

const ICONS = {
  medical: <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M6.5 2v4.5H2v3h4.5V14h3V9.5H14v-3H9.5V2h-3z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>,
  mapPin: <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M8 1.5A4.5 4.5 0 0 0 3.5 6C3.5 9.5 8 14.5 8 14.5s4.5-5 4.5-8.5A4.5 4.5 0 0 0 8 1.5z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><circle cx="8" cy="6" r="1.5" stroke="currentColor" strokeWidth="1.5"/></svg>,
  clock: <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><circle cx="8" cy="8" r="6.5" stroke="currentColor" strokeWidth="1.5"/><path d="M8 4.5V8l2.5 1.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>,
  lock: <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><rect x="3" y="7" width="10" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.5"/><path d="M5 7V5a3 3 0 0 1 6 0v2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>,
  card: <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><rect x="1.5" y="3.5" width="13" height="9" rx="1.5" stroke="currentColor" strokeWidth="1.5"/><path d="M1.5 7h13" stroke="currentColor" strokeWidth="1.5"/></svg>,
  ship: <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><rect x="3" y="4" width="10" height="7" rx="1" stroke="currentColor" strokeWidth="1.5"/><path d="M6 7h4M6 9.5h2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>,
};

function TrustBadge({ icon, text }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 13, color: "#6B7068" }}>
      {ICONS[icon] || null}
      {text}
    </div>
  );
}

function Step({ num, title, body }) {
  return (
    <div style={{ display: "flex", gap: 24, alignItems: "flex-start" }}>
      <div style={{
        width: 48, height: 48, borderRadius: "50%", flexShrink: 0,
        background: "#2E4A3B", color: "#FBF8F3",
        display: "flex", alignItems: "center", justifyContent: "center",
        fontFamily: "'JetBrains Mono', monospace", fontSize: 13, fontWeight: 700,
      }}>{num}</div>
      <div>
        <div style={{ fontWeight: 600, fontSize: 16, marginBottom: 6, color: "#1A1F1C" }}>{title}</div>
        <div style={{ fontSize: 14, color: "#6B7068", lineHeight: 1.65 }}>{body}</div>
      </div>
    </div>
  );
}

function BenefitCard({ icon, title, body }) {
  return (
    <div style={{
      background: "#FBF8F3", border: "1px solid #E5DFD2",
      borderRadius: 16, padding: "28px 24px",
    }}>
      <div style={{ fontSize: 28, marginBottom: 14 }}>{icon}</div>
      <div style={{ fontWeight: 600, fontSize: 15, marginBottom: 8, color: "#1A1F1C" }}>{title}</div>
      <div style={{ fontSize: 13, color: "#6B7068", lineHeight: 1.65 }}>{body}</div>
    </div>
  );
}

function TestimonialCard({ quote, name, location }) {
  return (
    <div style={{
      background: "#FBF8F3", border: "1px solid #E5DFD2",
      borderRadius: 16, padding: "28px 24px",
    }}>
      <div style={{ fontSize: 40, color: "#2E4A3B", lineHeight: 1, marginBottom: 14, fontFamily: "'Instrument Serif', Georgia, serif" }}>"</div>
      <p style={{ fontSize: 15, color: "#3A423D", lineHeight: 1.7, marginBottom: 20, fontStyle: "italic" }}>{quote}</p>
      <div style={{ fontWeight: 600, fontSize: 13, color: "#1A1F1C" }}>{name}</div>
      <div style={{ fontSize: 12, color: "#6B7068" }}>{location}</div>
    </div>
  );
}

function FaqItem({ q, a }) {
  const [open, setOpen] = React.useState(false);
  return (
    <div style={{ borderBottom: "1px solid #E5DFD2", paddingBottom: 20, marginBottom: 20 }}>
      <button
        onClick={() => setOpen(!open)}
        style={{
          width: "100%", textAlign: "left", background: "none", border: "none",
          cursor: "pointer", display: "flex", justifyContent: "space-between",
          alignItems: "center", gap: 16, fontSize: 15, fontWeight: 600, color: "#1A1F1C", padding: 0,
        }}
      >
        {q}
        <span style={{ fontSize: 20, color: "#2E4A3B", flexShrink: 0, transition: "transform .2s", transform: open ? "rotate(45deg)" : "none" }}>+</span>
      </button>
      {open && (
        <p style={{ marginTop: 12, fontSize: 14, color: "#6B7068", lineHeight: 1.7 }}>{a}</p>
      )}
    </div>
  );
}

function Divider() {
  return <div style={{ height: 1, background: "#E5DFD2", maxWidth: 1100, margin: "0 auto" }} />;
}

function DisclaimerBlock({ title, children }) {
  return (
    <div style={{ marginBottom: 28 }}>
      <div style={{ fontWeight: 600, fontSize: 14, color: "#1A1F1C", marginBottom: 8 }}>{title}</div>
      <p style={{ fontSize: 14, color: "#3A423D", lineHeight: 1.7, margin: 0 }}>{children}</p>
    </div>
  );
}

const MONO = "'JetBrains Mono', ui-monospace, monospace";
const SERIF = "'Instrument Serif', 'Cormorant Garamond', Georgia, serif";

export default function GetStartedPage() {
  return (
    <div style={{ background: "#F5F1EA", color: "#1A1F1C", fontFamily: "'Inter', -apple-system, sans-serif", WebkitFontSmoothing: "antialiased" }}>

      {/* ── Neutral trust strip (replaces global promo banner) ── */}
      <div style={{
        background: "#EDE7DC", borderBottom: "1px solid #E5DFD2",
        padding: "8px 24px", textAlign: "center",
        fontFamily: MONO, fontSize: 11, letterSpacing: "0.06em",
        color: "#6B7068",
      }}>
        24-hour clinician review &nbsp;·&nbsp; Licensed in all 50 states &nbsp;·&nbsp; HIPAA-compliant care
      </div>

      {/* ── Slim sticky header ── */}
      <header style={{
        position: "sticky", top: 0, zIndex: 50,
        background: "rgba(245,241,234,0.92)", backdropFilter: "blur(12px)",
        borderBottom: "1px solid #E5DFD2",
      }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px", display: "flex", alignItems: "center", justifyContent: "space-between", height: 64 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
            <a href="#top" style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none" }}>
              <div style={{ width: 28, height: 28, borderRadius: 8, background: "#2E4A3B", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M7 1.5L1.5 5.5V12.5H5.5V8.5H8.5V12.5H12.5V5.5L7 1.5Z" fill="#FBF8F3"/></svg>
              </div>
              <span style={{ fontWeight: 600, fontSize: 15 }}>Telehealth FX</span>
            </a>
            <span style={{ fontSize: 10, fontFamily: MONO, letterSpacing: "0.1em", textTransform: "uppercase", color: "#A4A69E", borderLeft: "1px solid #D9D3C6", paddingLeft: 12 }}>Advertisement</span>
          </div>
          <CtaBtn label="Take the Health Quiz" id="header-cta" />
        </div>
      </header>

      {/* ── Hero ── */}
      <section style={{ padding: "80px 24px 96px", textAlign: "center" }}>
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          <div style={{
            display: "inline-flex", alignItems: "center", gap: 7,
            padding: "6px 14px", borderRadius: 999, marginBottom: 28,
            background: "rgba(46,74,59,0.08)", border: "1px solid rgba(46,74,59,0.2)",
            fontFamily: MONO, fontSize: 11, letterSpacing: "0.12em",
            textTransform: "uppercase", color: "#2E4A3B",
          }}>
            <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#2E4A3B", display: "inline-block" }} />
            Personalized Metabolic Health Program
          </div>

          <h1 style={{
            fontFamily: SERIF, fontSize: "clamp(46px, 8vw, 78px)",
            fontWeight: 400, letterSpacing: "-0.025em", lineHeight: 1.06,
            marginBottom: 24,
          }}>
            Sustainable metabolic health,<br />
            <em style={{ color: "#2E4A3B" }}>designed around your body.</em>
          </h1>

          <p style={{ fontSize: 18, color: "#3A423D", lineHeight: 1.65, maxWidth: 560, margin: "0 auto 40px" }}>
            A clinician-guided program that supports appetite, metabolism, and long-term habits. Take a 2-minute health assessment to see if you qualify.
          </p>

          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 20 }}>
            <CtaBtn label="Take the Health Quiz" id="hero-cta" large />
            <p style={{ fontSize: 11, color: "#A4A69E", maxWidth: 480, textAlign: "center", lineHeight: 1.5 }}>
              This site contains affiliate links. If you enroll through a link on this page, Telehealth FX may earn a commission at no extra cost to you. <a href="https://telehealthfx.com/affiliate-disclosure" style={{ color: "#6B7068", textDecoration: "underline", textUnderlineOffset: 2 }}>Full disclosure</a>
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 20, justifyContent: "center" }}>
              <TrustBadge icon="medical" text="Licensed clinicians" />
              <TrustBadge icon="mapPin" text="50 states" />
              <TrustBadge icon="clock" text="24-hour review" />
            </div>
          </div>

          {/* Hero image */}
          <div style={{
            marginTop: 56, borderRadius: 20, overflow: "hidden",
            boxShadow: "0 24px 80px -20px rgba(26,31,28,0.18)",
            maxWidth: 860, marginLeft: "auto", marginRight: "auto",
            aspectRatio: "16/9", position: "relative",
          }}>
            <img
              src="/assets/yt-hero-lifestyle.png"
              alt="Person preparing a healthy meal in a bright kitchen"
              loading="eager"
              style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
            />
            {/* Subtle brand overlay badge */}
            <div style={{
              position: "absolute", bottom: 20, left: 20,
              background: "rgba(245,241,234,0.92)", backdropFilter: "blur(8px)",
              borderRadius: 999, padding: "8px 16px",
              display: "flex", alignItems: "center", gap: 8,
              fontSize: 12, fontWeight: 500, color: "#2E4A3B",
              border: "1px solid rgba(46,74,59,0.15)",
            }}>
              <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#2E4A3B", display: "inline-block" }} />
              Clinician-guided program · 50 states
            </div>
          </div>
        </div>
      </section>

      <Divider />

      {/* ── How it works ── */}
      <section style={{ padding: "80px 24px" }}>
        <div style={{ maxWidth: 820, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 52 }}>
            <div style={{ fontFamily: MONO, fontSize: 11, letterSpacing: "0.14em", textTransform: "uppercase", color: "#6B7068", marginBottom: 14 }}>The Process</div>
            <h2 style={{ fontFamily: SERIF, fontSize: "clamp(34px, 5vw, 50px)", fontWeight: 400, letterSpacing: "-0.02em" }}>How the program works</h2>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 36 }}>
            <Step num="01" title="Complete a 2-minute health assessment" body="Share your goals, health history, and current wellness — all from your phone or computer." />
            <Step num="02" title="Licensed clinician review within 24 hours" body="A licensed provider in your state reviews your information and determines the right approach for you." />
            <Step num="03" title="Personalized care plan" body="If you qualify, your provider builds a plan suited to your biology and goals — not a one-size-fits-all template." />
            <Step num="04" title="Ongoing 1-on-1 support" body="Dedicated onboarding plus message-based access to your care team whenever you need guidance." />
          </div>
          <div style={{ textAlign: "center", marginTop: 52 }}>
            <CtaBtn label="See If You Qualify" id="how-cta" large />
            <p style={{ fontSize: 11, color: "#A4A69E", marginTop: 12, maxWidth: 400, marginLeft: "auto", marginRight: "auto", lineHeight: 1.5 }}>
              Affiliate link — we may earn a commission if you enroll. This does not affect the price you pay.
            </p>
          </div>
        </div>
      </section>

      <Divider />

      {/* ── Why Telehealth FX ── */}
      <section style={{ padding: "80px 24px", background: "#EDE7DC" }}>
        <div style={{ maxWidth: 1060, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <div style={{ fontFamily: MONO, fontSize: 11, letterSpacing: "0.14em", textTransform: "uppercase", color: "#6B7068", marginBottom: 14 }}>Why Us</div>
            <h2 style={{ fontFamily: SERIF, fontSize: "clamp(34px, 5vw, 50px)", fontWeight: 400, letterSpacing: "-0.02em" }}>Why people choose Telehealth FX</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 20 }}>
            <BenefitCard icon="💳" title="Transparent pricing" body="No membership fees, no hidden costs. Payment plans available. You see the full cost before committing." />
            <BenefitCard icon="📍" title="Licensed in all 50 states" body="Care from a clinician licensed where you live. We accept patients nationwide." />
            <BenefitCard icon="⏱" title="Fast 24-hour review" body="Most members hear back within a day of submitting their assessment." />
            <BenefitCard icon="📦" title="Discreet 2-day shipping" body="All program materials delivered in plain packaging via UPS, right to your door." />
          </div>
        </div>
      </section>

      <Divider />

      {/* ── Testimonials ── */}
      <section style={{ padding: "80px 24px" }}>
        <div style={{ maxWidth: 1060, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <div style={{ fontFamily: MONO, fontSize: 11, letterSpacing: "0.14em", textTransform: "uppercase", color: "#6B7068", marginBottom: 14 }}>Member Stories</div>
            <h2 style={{ fontFamily: SERIF, fontSize: "clamp(34px, 5vw, 50px)", fontWeight: 400, letterSpacing: "-0.02em" }}>What members are saying</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 24, marginBottom: 32 }}>
            <TestimonialCard
              quote="The check-ins kept me honest. After years of trying things on my own, having a clinical team made the difference."
              name="Sarah M." location="Austin, TX"
            />
            <TestimonialCard
              quote="What I appreciated most was that the plan was actually built around me — not a template."
              name="Marcus R." location="Chicago, IL"
            />
            <TestimonialCard
              quote="My provider adjusted my plan twice based on how I was feeling. It was genuinely personalized care."
              name="Priya K." location="Seattle, WA"
            />
          </div>
          <p style={{ fontSize: 13, color: "#A4A69E", textAlign: "center", lineHeight: 1.6, maxWidth: 680, margin: "0 auto" }}>
            <em>Individual experiences vary. These members consented to share their stories. No compensation was provided. Results are not typical and depend on many individual factors.</em>
          </p>
        </div>
      </section>

      {/* ── Science section ── */}
      <section style={{ padding: "80px 24px", background: "#2E4A3B" }}>
        <div style={{ maxWidth: 820, margin: "0 auto" }}>
          <div style={{ fontFamily: MONO, fontSize: 11, letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(251,248,243,0.5)", marginBottom: 16 }}>The Science</div>
          <h2 style={{ fontFamily: SERIF, fontSize: "clamp(34px, 5vw, 52px)", fontWeight: 400, letterSpacing: "-0.02em", marginBottom: 36, lineHeight: 1.1, color: "#FBF8F3" }}>
            Understanding the science of appetite and metabolism.
          </h2>
          {[
            "GLP-1 (glucagon-like peptide-1) is a hormone naturally produced in the gut after eating. It plays a central role in regulating appetite and satiety signals between the digestive system and the brain.",
            "Research over the past two decades has led to the development of medical treatments that work with the body's own GLP-1 receptor system. These treatments are designed to support the biological mechanisms that regulate hunger and metabolic rate.",
            "Modern compounding pharmacies can prepare GLP-1-based formulations that are customized to individual clinical needs, made under the supervision of licensed pharmacists and prescribed by board-certified clinicians.",
          ].map((t, i) => (
            <p key={i} style={{ fontSize: 16, lineHeight: 1.8, color: "rgba(251,248,243,0.85)", marginBottom: 20 }}>{t}</p>
          ))}
          <div style={{ marginTop: 32, padding: "20px 24px", background: "rgba(251,248,243,0.1)", borderRadius: 12, borderLeft: "3px solid rgba(251,248,243,0.35)" }}>
            <p style={{ fontSize: 14, color: "rgba(251,248,243,0.7)", lineHeight: 1.7, margin: 0 }}>
              During your assessment, a licensed clinician will determine whether a GLP-1-based treatment or another approach is appropriate for your situation.
            </p>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section style={{ padding: "80px 24px" }}>
        <div style={{ maxWidth: 740, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 52 }}>
            <div style={{ fontFamily: MONO, fontSize: 11, letterSpacing: "0.14em", textTransform: "uppercase", color: "#6B7068", marginBottom: 14 }}>FAQ</div>
            <h2 style={{ fontFamily: SERIF, fontSize: "clamp(34px, 5vw, 50px)", fontWeight: 400, letterSpacing: "-0.02em" }}>Common questions</h2>
          </div>
          <FaqItem q="Is this program right for me?" a="Eligibility is determined by a licensed clinician based on your health assessment. Most adults exploring sustainable weight management are candidates for evaluation." />
          <FaqItem q="How much does the program cost?" a="Pricing varies by treatment plan and is shown transparently after your clinician review. Payment plans are available. There are no membership fees." />
          <FaqItem q="What if I don't qualify?" a="If a clinician determines the program isn't right for you, you are not charged. You'll receive a clear explanation and, where appropriate, alternative recommendations." />
          <FaqItem q="Is my information private?" a="Telehealth FX operates under HIPAA-compliant standards. Your health information is encrypted and never sold." />
          <FaqItem q="Can I cancel anytime?" a="Yes. There are no long-term contracts. You can pause or cancel from your member portal at any time." />
        </div>
      </section>

      <Divider />

      {/* ── Final CTA ── */}
      <section style={{ padding: "80px 24px", textAlign: "center", background: "#EDE7DC" }}>
        <div style={{ maxWidth: 620, margin: "0 auto" }}>
          <h2 style={{ fontFamily: SERIF, fontSize: "clamp(36px, 5vw, 56px)", fontWeight: 400, letterSpacing: "-0.02em", marginBottom: 20, lineHeight: 1.1 }}>
            Ready to see if the program fits?
          </h2>
          <p style={{ fontSize: 17, color: "#3A423D", lineHeight: 1.65, marginBottom: 40 }}>
            Take the 2-minute health assessment. A licensed clinician will review your information within 24 hours.
          </p>
          <CtaBtn label="Start My Health Quiz" id="final-cta" large />
          <div style={{ display: "flex", flexWrap: "wrap", gap: 20, justifyContent: "center", marginTop: 28 }}>
            <TrustBadge icon="lock" text="HIPAA compliant" />
            <TrustBadge icon="medical" text="Licensed clinicians" />
            <TrustBadge icon="card" text="No hidden fees" />
          </div>
        </div>
      </section>

      {/* ── Footer / Disclaimers ── */}
      <footer style={{ background: "#EAE5DC", borderTop: "1px solid #D9D3C6", padding: "60px 24px 40px" }}>
        <div style={{ maxWidth: 960, margin: "0 auto" }}>

          {/* Footer tagline */}
          <p style={{ fontSize: 15, color: "#3A423D", lineHeight: 1.6, marginBottom: 40, textAlign: "center" }}>
            Personalized telehealth programs. Licensed clinicians in all 50 states.
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(360px, 1fr))", gap: "32px 48px", marginBottom: 36 }}>
            <DisclaimerBlock title="Medical Disclaimer">
              Telehealth FX is an informational platform that connects users with licensed healthcare providers and US-based compounding pharmacies. We are not a medical provider, pharmacy, or insurance company. The information on this site is for educational purposes only and is not a substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of your physician or other qualified health provider with any questions you may have regarding a medical condition. Never disregard professional medical advice or delay in seeking it because of something you have read on this website. If you think you may have a medical emergency, call your doctor or 911 immediately.
            </DisclaimerBlock>
            <DisclaimerBlock title="Results Disclaimer">
              Individual outcomes vary based on starting weight, health history, adherence to the program, diet, exercise, and other factors. Testimonials on this page reflect individual experiences and are not representative of typical results. No guarantee of specific outcomes is made or implied. The program is not appropriate for everyone, and eligibility is determined by a licensed clinician after clinical review.
            </DisclaimerBlock>
            <DisclaimerBlock title="FDA & Compounding Disclaimer">
              Some treatments offered through partner pharmacies are compounded medications. Compounded medications are not FDA-approved, meaning the FDA has not evaluated them for safety, efficacy, or quality. They are custom preparations made by state-licensed 503A and 503B compounding pharmacies pursuant to a valid prescription. Telehealth FX does not sell, distribute, manufacture, or claim equivalence to any commercially available branded or generic FDA-approved products including Ozempic®, Wegovy®, Mounjaro®, or Zepbound®. All trademarks are the property of their respective owners.
            </DisclaimerBlock>
            <DisclaimerBlock title="FTC Affiliate & Advertising Disclosure">
              In compliance with the Federal Trade Commission (FTC) guidelines: This page contains affiliate links. Telehealth FX earns a referral commission when visitors click links on this page and enroll with a partner clinical program. This financial relationship does not affect the price you pay, the care you receive, or our editorial content. Assume all links on this page are affiliate links from which we receive compensation. For complete details, see our <a href="https://telehealthfx.com/affiliate-disclosure" style={{ color: "#1A1F1C", textDecoration: "underline", textUnderlineOffset: 3 }}>full Affiliate Disclosure</a>.
            </DisclaimerBlock>
          </div>

          {/* Black Box Warning — prominent per FDA guidance */}
          <div style={{ background: "#1A1F1C", color: "#FBF8F3", borderRadius: 12, padding: "24px 28px", marginBottom: 36, border: "2px solid #1A1F1C" }}>
            <div style={{ fontWeight: 700, fontSize: 14, marginBottom: 10, textTransform: "uppercase", letterSpacing: "0.05em" }}>⚠ Important Safety Information</div>
            <p style={{ fontSize: 13, lineHeight: 1.7, margin: 0, color: "rgba(251,248,243,0.9)" }}>
              GLP-1 receptor agonist medications may cause serious side effects including, but not limited to: pancreatitis, gallbladder problems, kidney injury, serious allergic reactions, increased heart rate, and hypoglycemia. <strong>Do not use GLP-1 medications if you have a personal or family history of medullary thyroid carcinoma (MTC) or Multiple Endocrine Neoplasia syndrome type 2 (MEN 2).</strong> Tell your healthcare provider about all medical conditions, including if you are pregnant, plan to become pregnant, or are breastfeeding. This is not a complete list of possible side effects. Discuss all risks and benefits with your prescribing clinician before starting any treatment.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(360px, 1fr))", gap: "32px 48px", marginBottom: 36 }}>
            <DisclaimerBlock title="Platform & Third-Party Disclaimer">
              This website is not a part of the YouTube, Google, or Facebook websites, nor is it endorsed by YouTube, Google, Facebook, or any of their subsidiaries. YouTube is a trademark of Google LLC. Facebook is a trademark of Meta Platforms, Inc. When you click a link on this page and are directed to a third-party telehealth provider, you are leaving Telehealth FX. Any medical consultations, prescribing decisions, and fulfillment of medications are strictly between you and the licensed medical professionals on that platform. Telehealth FX assumes no liability for any outcomes arising from your relationship with third-party providers.
            </DisclaimerBlock>
            <DisclaimerBlock title="Data Privacy & Tracking">
              Telehealth FX does not collect, store, or process Protected Health Information (PHI). We use standard web analytics tools (Google Analytics, Google Tag Manager) on this informational page for traffic measurement only. No health data from your assessment or clinical interactions is accessible to or stored by Telehealth FX. Once you leave this page and enter a partner provider's platform, your information is governed by their HIPAA-compliant privacy practices.
            </DisclaimerBlock>
          </div>

          <div style={{ height: 1, background: "#D9D3C6", marginBottom: 28 }} />

          <div style={{ display: "flex", flexWrap: "wrap", gap: "10px 24px", fontSize: 13, color: "#6B7068", justifyContent: "center", marginBottom: 20 }}>
            {[
              ["Privacy Policy", "/privacy"], ["Terms of Service", "/terms"],
              ["Affiliate Disclosure", "/affiliate-disclosure"],
              ["Telehealth Consent", "/telehealth-consent"], ["HIPAA Notice", "/hipaa"],
              ["Accessibility", "/accessibility"], ["Contact", "/contact"],
            ].map(([label, href]) => (
              <a key={label} href={`https://telehealthfx.com${href}`} style={{ color: "#6B7068", textDecoration: "underline", textUnderlineOffset: 3 }}>{label}</a>
            ))}
          </div>
          <p style={{ textAlign: "center", fontSize: 12, color: "#A4A69E" }}>
            © {new Date().getFullYear()} Telehealth FX. All rights reserved.
          </p>
        </div>
      </footer>

      {/* ── Mobile sticky CTA bar ── */}
      <style>{`
        #mobile-sticky { display: none; }
        @media (max-width: 768px) { #mobile-sticky { display: flex !important; } }
      `}</style>
      <div id="mobile-sticky" style={{
        position: "fixed", bottom: 0, left: 0, right: 0, zIndex: 100,
        background: "#FBF8F3", borderTop: "1px solid #E5DFD2",
        padding: "12px 20px", justifyContent: "center",
        boxShadow: "0 -8px 32px rgba(0,0,0,0.07)",
      }}>
        <a
          id="mobile-sticky-btn"
          href={CTA_URL}
          onClick={trackAndGo}
          style={{
            display: "flex", alignItems: "center", justifyContent: "center",
            gap: 8, width: "100%", maxWidth: 420,
            padding: "16px 24px", borderRadius: 999,
            background: "#2E4A3B", color: "#FBF8F3",
            fontSize: 15, fontWeight: 600, textDecoration: "none",
          }}
        >
          Take the Health Quiz →
        </a>
      </div>
    </div>
  );
}
