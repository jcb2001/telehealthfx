"use client";
import React from "react";

/* ────────────────────────────────────────────────────
   Skinny RX — Branded Affiliate Landing Page
   Color palette extracted from skinnyrx.com production CSS
   ──────────────────────────────────────────────────── */

const BASE_AFF_URL =
  "https://track.revoffers.com/aff_c?offer_id=1464&aff_id=12322&source=skinnyrx_landing&sub2=tfx_prospecting_glp1&sub4=cpc";

const CTA_URL = `${BASE_AFF_URL}&url_id=11880`;

export const TREATMENT_URLS = {
  quiz: `${BASE_AFF_URL}&url_id=11880`,
  tirzepatideInjectable: `${BASE_AFF_URL}&url_id=11875`,
  tirzepatideTablets: `${BASE_AFF_URL}&url_id=11876`,
  semaglutideTablets: `${BASE_AFF_URL}&url_id=11877`,
  semaglutideInjectable: `${BASE_AFF_URL}&url_id=11878`,
  semaglutideOralDrops: `${BASE_AFF_URL}&url_id=11879`,
  customGlp1: `${BASE_AFF_URL}&url_id=11893`,
};

/* ── Brand tokens ── */
const BRAND = {
  purple:     "#190053",   /* primary – headings, nav, dark sections */
  purpleHov:  "#3F1C91",   /* hover state */
  violet:     "#4E00FF",   /* buttons, links */
  violetHov:  "#5C00FF",   /* button hover */
  yellow:     "#FFE786",   /* CTA accent */
  yellowHov:  "#F5D552",   /* CTA hover */
  emerald:    "#059669",   /* first month promo tag */
  emeraldBg:  "#ECFDF5",
  emeraldBorder: "#A7F3D0",
  white:      "#FFFFFF",
  bg:         "#FAFAFA",   /* subtle off-white for alternating sections */
  bgDark:     "#F5F5F7",   /* light gray sections */
  ink:        "#212529",   /* body text */
  ink2:       "#484B4F",   /* secondary text */
  ink3:       "#68696B",   /* muted */
  ink4:       "#9CA3AF",   /* very muted */
  border:     "#E7EAE7",   /* borders, dividers */
  borderSoft: "#F0F0F0",
};

const FONT = "'Inter', -apple-system, system-ui, sans-serif";

/* ── Helpers ── */
function trackAndGo(e, customUrl = CTA_URL) {
  if (e && e.preventDefault) e.preventDefault();
  const target = new URL(customUrl || CTA_URL);
  if (typeof window !== "undefined") {
    const params = new URLSearchParams(window.location.search);
    ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term"].forEach(
      (k) => { if (params.get(k)) target.searchParams.set(k, params.get(k)); }
    );
    if (window.dataLayer) window.dataLayer.push({ event: "quiz_start", url_target: target.toString() });
  }
  window.location.href = target.toString();
}

/* ── CTA Button ── */
function CtaBtn({ label = "Get Started", id, large, variant = "yellow", href = CTA_URL }) {
  const isYellow = variant === "yellow";
  return (
    <a
      id={id || "cta-btn"}
      href={href}
      onClick={(e) => trackAndGo(e, href)}
      style={{
        display: "inline-flex", alignItems: "center", justifyContent: "center", gap: 10,
        padding: large ? "20px 40px" : "16px 32px",
        borderRadius: 999,
        background: isYellow ? BRAND.yellow : BRAND.purple,
        color: isYellow ? BRAND.purple : BRAND.white,
        fontSize: large ? 17 : 15, fontWeight: 600, letterSpacing: "-0.01em",
        transition: "all .25s ease", textDecoration: "none", cursor: "pointer",
        boxShadow: isYellow ? "0 4px 14px rgba(255,231,134,0.4)" : "0 4px 14px rgba(25,0,83,0.25)",
        fontFamily: FONT,
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.background = isYellow ? BRAND.yellowHov : BRAND.purpleHov;
        e.currentTarget.style.transform = "translateY(-2px)";
        e.currentTarget.style.boxShadow = isYellow
          ? "0 8px 24px rgba(255,231,134,0.5)"
          : "0 8px 24px rgba(25,0,83,0.35)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = isYellow ? BRAND.yellow : BRAND.purple;
        e.currentTarget.style.transform = "none";
        e.currentTarget.style.boxShadow = isYellow
          ? "0 4px 14px rgba(255,231,134,0.4)"
          : "0 4px 14px rgba(25,0,83,0.25)";
      }}
    >
      {label}
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </a>
  );
}

/* ── Trust Badge ── */
const ICONS = {
  medical: <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M6.5 2v4.5H2v3h4.5V14h3V9.5H14v-3H9.5V2h-3z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>,
  shield: <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M8 1.5L2.5 4v4c0 3.5 2.5 5.5 5.5 6.5 3-1 5.5-3 5.5-6.5V4L8 1.5z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>,
  clock: <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><circle cx="8" cy="8" r="6.5" stroke="currentColor" strokeWidth="1.5"/><path d="M8 4.5V8l2.5 1.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>,
  lock: <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><rect x="3" y="7" width="10" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.5"/><path d="M5 7V5a3 3 0 0 1 6 0v2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>,
  truck: <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><rect x="1" y="3" width="9" height="8" rx="1" stroke="currentColor" strokeWidth="1.5"/><path d="M10 6h3l2 3v2h-5V6z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><circle cx="4.5" cy="12.5" r="1.5" stroke="currentColor" strokeWidth="1.5"/><circle cx="12.5" cy="12.5" r="1.5" stroke="currentColor" strokeWidth="1.5"/></svg>,
  star: <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M8 1l2.2 4.5 5 .7-3.6 3.5.8 5L8 12.5 3.6 14.7l.8-5L.8 6.2l5-.7L8 1z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>,
  check: <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><circle cx="8" cy="8" r="6.5" stroke="currentColor" strokeWidth="1.5"/><path d="M5.5 8l2 2 3-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>,
};

function TrustBadge({ icon, text }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 13, color: BRAND.ink3 }}>
      {ICONS[icon] || null}
      {text}
    </div>
  );
}

/* ── Step ── */
function Step({ num, title, body }) {
  return (
    <div style={{ display: "flex", gap: 24, alignItems: "flex-start" }}>
      <div style={{
        width: 52, height: 52, borderRadius: "50%", flexShrink: 0,
        background: BRAND.purple, color: BRAND.white,
        display: "flex", alignItems: "center", justifyContent: "center",
        fontFamily: FONT, fontSize: 14, fontWeight: 700,
      }}>{num}</div>
      <div>
        <div style={{ fontWeight: 600, fontSize: 17, marginBottom: 6, color: BRAND.ink }}>{title}</div>
        <div style={{ fontSize: 15, color: BRAND.ink2, lineHeight: 1.65 }}>{body}</div>
      </div>
    </div>
  );
}

/* ── Benefit Card ── */
function BenefitCard({ icon, title, body }) {
  return (
    <div style={{
      background: BRAND.white, border: `1px solid ${BRAND.border}`,
      borderRadius: 16, padding: "32px 24px",
      transition: "box-shadow .25s ease, transform .25s ease",
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.boxShadow = "0 12px 40px rgba(25,0,83,0.08)";
      e.currentTarget.style.transform = "translateY(-4px)";
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.boxShadow = "none";
      e.currentTarget.style.transform = "none";
    }}
    >
      <div style={{ fontSize: 32, marginBottom: 16 }}>{icon}</div>
      <div style={{ fontWeight: 600, fontSize: 16, marginBottom: 8, color: BRAND.ink }}>{title}</div>
      <div style={{ fontSize: 14, color: BRAND.ink2, lineHeight: 1.65 }}>{body}</div>
    </div>
  );
}

/* ── Testimonial ── */
function TestimonialCard({ quote, name, detail, stars = 5 }) {
  return (
    <div style={{
      background: BRAND.white, border: `1px solid ${BRAND.border}`,
      borderRadius: 16, padding: "32px 24px",
    }}>
      <div style={{ display: "flex", gap: 2, marginBottom: 16 }}>
        {Array.from({ length: stars }).map((_, i) => (
          <svg key={i} width="18" height="18" viewBox="0 0 18 18" fill={BRAND.yellow} stroke={BRAND.yellow} strokeWidth="0.5">
            <path d="M9 1l2.5 5 5.5.8-4 3.9.9 5.5L9 13.5 4.1 16.2l.9-5.5-4-3.9 5.5-.8L9 1z"/>
          </svg>
        ))}
      </div>
      <p style={{ fontSize: 15, color: BRAND.ink2, lineHeight: 1.75, marginBottom: 20, fontStyle: "italic" }}>"{quote}"</p>
      <div style={{ fontWeight: 600, fontSize: 14, color: BRAND.ink }}>{name}</div>
      <div style={{ fontSize: 12, color: BRAND.ink3, marginTop: 2 }}>{detail}</div>
    </div>
  );
}

/* ── FAQ ── */
function FaqItem({ q, a }) {
  const [open, setOpen] = React.useState(false);
  return (
    <div style={{ borderBottom: `1px solid ${BRAND.border}`, paddingBottom: 20, marginBottom: 20 }}>
      <button
        onClick={() => setOpen(!open)}
        style={{
          width: "100%", textAlign: "left", background: "none", border: "none",
          cursor: "pointer", display: "flex", justifyContent: "space-between",
          alignItems: "center", gap: 16, fontSize: 16, fontWeight: 600, color: BRAND.ink,
          padding: 0, fontFamily: FONT,
        }}
      >
        {q}
        <span style={{
          fontSize: 22, color: BRAND.violet, flexShrink: 0,
          transition: "transform .2s", transform: open ? "rotate(45deg)" : "none",
          fontWeight: 300,
        }}>+</span>
      </button>
      {open && (
        <p style={{ marginTop: 14, fontSize: 14, color: BRAND.ink2, lineHeight: 1.75 }}>{a}</p>
      )}
    </div>
  );
}

/* ── Disclaimer Block ── */
function DisclaimerBlock({ title, children }) {
  return (
    <div style={{ marginBottom: 28 }}>
      <div style={{ fontWeight: 600, fontSize: 14, color: BRAND.ink, marginBottom: 8 }}>{title}</div>
      <p style={{ fontSize: 13, color: BRAND.ink2, lineHeight: 1.7, margin: 0 }}>{children}</p>
    </div>
  );
}

/* ── Divider ── */
function Divider() {
  return <div style={{ height: 1, background: BRAND.border, maxWidth: 1100, margin: "0 auto" }} />;
}

/* ── Treatment Card ── */
function TreatmentCard({
  badge,
  badgeType = "promo",
  title,
  format,
  promoPrice,
  promoSub = "First Month Promo",
  thenPrice,
  regularPrice,
  affirmText,
  inclusions = [],
  ctaLabel = "Claim First Month Pricing",
  href,
  highlight = false,
}) {
  return (
    <div
      style={{
        background: BRAND.white,
        border: highlight ? `2px solid ${BRAND.violet}` : `1px solid ${BRAND.border}`,
        borderRadius: 20,
        padding: "32px 24px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        position: "relative",
        boxShadow: highlight
          ? "0 12px 36px rgba(78,0,255,0.12)"
          : "0 4px 20px rgba(25,0,83,0.05)",
        transition: "all .25s ease",
      }}
    >
      <div>
        {badge && (
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
              padding: "4px 12px",
              borderRadius: 999,
              fontSize: 11,
              fontWeight: 800,
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              marginBottom: 16,
              background: badgeType === "promo" ? BRAND.emeraldBg : "rgba(78,0,255,0.08)",
              color: badgeType === "promo" ? BRAND.emerald : BRAND.violet,
              border: `1px solid ${badgeType === "promo" ? BRAND.emeraldBorder : "rgba(78,0,255,0.2)"}`,
            }}
          >
            {badge}
          </div>
        )}

        <h3 style={{ fontSize: 22, fontWeight: 700, color: BRAND.purple, marginBottom: 4, letterSpacing: "-0.01em" }}>
          {title}
        </h3>
        <p style={{ fontSize: 13, color: BRAND.ink3, marginBottom: 20, fontWeight: 500 }}>
          {format}
        </p>

        {/* Price container */}
        <div style={{
          background: BRAND.bgDark,
          borderRadius: 14,
          padding: "16px 18px",
          marginBottom: 20,
          border: `1px solid ${BRAND.borderSoft}`,
        }}>
          <div style={{ display: "flex", alignItems: "baseline", gap: 8 }}>
            <span style={{ fontSize: 36, fontWeight: 800, color: BRAND.purple, lineHeight: 1 }}>
              {promoPrice}
            </span>
            <span style={{ fontSize: 13, fontWeight: 700, color: BRAND.emerald, textTransform: "uppercase" }}>
              {promoSub}
            </span>
            {regularPrice && (
              <span style={{ fontSize: 14, color: BRAND.ink4, textDecoration: "line-through", marginLeft: "auto" }}>
                {regularPrice}
              </span>
            )}
          </div>
          {thenPrice && (
            <div style={{ fontSize: 12, color: BRAND.ink3, marginTop: 6 }}>
              {thenPrice}
            </div>
          )}
          {affirmText && (
            <div style={{
              marginTop: 10,
              paddingTop: 8,
              borderTop: `1px solid ${BRAND.border}`,
              fontSize: 12,
              fontWeight: 600,
              color: BRAND.violet,
              display: "flex",
              alignItems: "center",
              gap: 6,
            }}>
              <span>💳</span>
              <span>{affirmText}</span>
            </div>
          )}
        </div>

        {/* Inclusions */}
        <ul style={{ listStyle: "none", padding: 0, margin: "0 0 24px 0", display: "flex", flexDirection: "column", gap: 10 }}>
          {inclusions.map((item, idx) => (
            <li key={idx} style={{ display: "flex", alignItems: "flex-start", gap: 10, fontSize: 13, color: BRAND.ink2, lineHeight: 1.5 }}>
              <span style={{ color: BRAND.emerald, fontWeight: 700, flexShrink: 0 }}>✓</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <a
        href={href}
        onClick={(e) => trackAndGo(e, href)}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 8,
          width: "100%",
          padding: "14px 20px",
          borderRadius: 999,
          background: highlight ? BRAND.yellow : BRAND.purple,
          color: highlight ? BRAND.purple : BRAND.white,
          fontSize: 14,
          fontWeight: 700,
          textDecoration: "none",
          cursor: "pointer",
          transition: "all .2s ease",
          boxShadow: highlight
            ? "0 4px 14px rgba(255,231,134,0.4)"
            : "0 4px 14px rgba(25,0,83,0.15)",
        }}
      >
        <span>{ctaLabel}</span>
        <span>→</span>
      </a>
    </div>
  );
}

/* ── Stat Pill ── */
function StatPill({ value, label }) {
  return (
    <div style={{ textAlign: "center" }}>
      <div style={{ fontSize: 36, fontWeight: 700, color: BRAND.purple, lineHeight: 1.1, letterSpacing: "-0.02em" }}>{value}</div>
      <div style={{ fontSize: 13, color: BRAND.ink3, marginTop: 4, fontWeight: 500 }}>{label}</div>
    </div>
  );
}


/* ═══════════════════════════════════════════════════
   PAGE COMPONENT
   ═══════════════════════════════════════════════════ */
export function SkinnyRxClient() {
  return (
    <div style={{ background: BRAND.white, color: BRAND.ink, fontFamily: FONT, WebkitFontSmoothing: "antialiased" }}>

      {/* ── Top trust strip ── */}
      <div style={{
        background: BRAND.purple, borderBottom: "none",
        padding: "10px 24px", textAlign: "center",
        fontSize: 13, fontWeight: 500, letterSpacing: "0.01em",
        color: "rgba(255,255,255,0.9)",
      }}>
        Doctor-designed weight loss &nbsp;·&nbsp; Licensed in all 50 states &nbsp;·&nbsp; HIPAA-compliant care
      </div>

      {/* ── Sticky header ── */}
      <header style={{
        position: "sticky", top: 0, zIndex: 50,
        background: "rgba(255,255,255,0.95)", backdropFilter: "blur(16px)",
        borderBottom: `1px solid ${BRAND.border}`,
      }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px", display: "flex", alignItems: "center", justifyContent: "space-between", height: 68 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
            <a href="#top" style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none" }}>
              {/* SkinnyRx logo mark */}
              <div style={{
                width: 32, height: 32, borderRadius: 10, background: BRAND.purple,
                display: "flex", alignItems: "center", justifyContent: "center",
                boxShadow: "0 2px 8px rgba(25,0,83,0.2)",
              }}>
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path d="M9 2C6.5 2 4.5 4 4.5 6.5c0 1.8 1.1 3.4 2.7 4.1L9 16l1.8-5.4c1.6-.7 2.7-2.3 2.7-4.1C13.5 4 11.5 2 9 2z" fill="#FFE786"/>
                  <circle cx="9" cy="6.5" r="2" fill="#190053"/>
                </svg>
              </div>
              <span style={{ fontWeight: 700, fontSize: 18, color: BRAND.purple, letterSpacing: "-0.02em" }}>SkinnyRx</span>
            </a>
            <span style={{
              fontSize: 10, letterSpacing: "0.08em", textTransform: "uppercase",
              color: BRAND.ink4, borderLeft: `1px solid ${BRAND.border}`, paddingLeft: 12,
              fontWeight: 500,
            }}>Advertisement</span>
          </div>
          <CtaBtn label="Get Started" id="header-cta" />
        </div>
      </header>

      {/* ── Hero ── */}
      <section style={{ padding: "100px 24px 80px", textAlign: "center", background: `linear-gradient(180deg, ${BRAND.white} 0%, ${BRAND.bg} 100%)` }}>
        <div style={{ maxWidth: 780, margin: "0 auto" }}>
          {/* Pill badge */}
          <div style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            padding: "8px 18px", borderRadius: 999, marginBottom: 32,
            background: "rgba(78,0,255,0.06)", border: "1px solid rgba(78,0,255,0.15)",
            fontSize: 13, fontWeight: 600, letterSpacing: "0.02em",
            color: BRAND.violet,
          }}>
            <span style={{ width: 7, height: 7, borderRadius: "50%", background: BRAND.violet, display: "inline-block" }} />
            Doctor-Designed Weight Loss
          </div>

          <h1 style={{
            fontSize: "clamp(40px, 7vw, 72px)", fontWeight: 700,
            letterSpacing: "-0.03em", lineHeight: 1.08,
            marginBottom: 24, color: BRAND.purple,
          }}>
            Lose weight with a plan{" "}
            <span style={{
              background: `linear-gradient(135deg, ${BRAND.violet}, ${BRAND.purple})`,
              WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}>designed for you.</span>
          </h1>

          <p style={{ fontSize: 18, color: BRAND.ink2, lineHeight: 1.65, maxWidth: 560, margin: "0 auto 44px" }}>
            GLP-1 medication prescribed by U.S. licensed doctors, personalized to your body. Take a free online assessment to see if you qualify.
          </p>

          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 20 }}>
            <CtaBtn label="Take the Free Assessment" id="hero-cta" large variant="yellow" />
            <p style={{ fontSize: 11, color: BRAND.ink4, maxWidth: 480, textAlign: "center", lineHeight: 1.5 }}>
              This site contains affiliate links. If you enroll through a link on this page, Telehealth FX may earn a commission at no extra cost to you. <a href="https://telehealthfx.com/affiliate-disclosure" style={{ color: BRAND.ink3, textDecoration: "underline", textUnderlineOffset: 2 }}>Full disclosure</a>
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 24, justifyContent: "center" }}>
              <TrustBadge icon="medical" text="U.S. licensed doctors" />
              <TrustBadge icon="shield" text="All 50 states" />
              <TrustBadge icon="clock" text="Fast prescriber review" />
            </div>
          </div>

          {/* Stats row */}
          <div style={{
            marginTop: 64, display: "flex", justifyContent: "center", gap: 56, flexWrap: "wrap",
            padding: "40px 32px", borderRadius: 20,
            background: BRAND.white, border: `1px solid ${BRAND.border}`,
            boxShadow: "0 8px 40px rgba(25,0,83,0.06)",
          }}>
            <StatPill value="100K+" label="Patients treated" />
            <StatPill value="50" label="States licensed" />
            <StatPill value="4.8★" label="Patient rating" />
            <StatPill value="$0" label="Consultation fee" />
          </div>
        </div>
      </section>

      <Divider />

      {/* ── Featured Treatments & First-Month Discounts ── */}
      <section style={{ padding: "88px 24px", background: BRAND.bg }}>
        <div style={{ maxWidth: 1160, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 36 }}>
            <div style={{
              display: "inline-flex", alignItems: "center", gap: 6,
              padding: "6px 14px", borderRadius: 999, marginBottom: 12,
              background: BRAND.emeraldBg, border: `1px solid ${BRAND.emeraldBorder}`,
              fontSize: 12, fontWeight: 700, letterSpacing: "0.06em", textTransform: "uppercase",
              color: BRAND.emerald,
            }}>
              🔥 Limited-Time Introductory Pricing
            </div>
            <h2 style={{ fontSize: "clamp(32px, 5vw, 48px)", fontWeight: 700, letterSpacing: "-0.02em", color: BRAND.purple, marginBottom: 16 }}>
              Compare Treatments &amp; First-Month Promos
            </h2>
            <p style={{ fontSize: 17, color: BRAND.ink2, maxWidth: 640, margin: "0 auto", lineHeight: 1.6 }}>
              Doctor-prescribed GLP-1 &amp; GIP treatments delivered cold to your door. Get started from just <strong>$99 for your first month</strong> with zero doctor consultation fees.
            </p>
          </div>

          {/* Affirm Banner */}
          <div style={{
            background: BRAND.white,
            border: `1px solid ${BRAND.border}`,
            borderRadius: 14,
            padding: "14px 20px",
            marginBottom: 40,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 12,
            flexWrap: "wrap",
            boxShadow: "0 2px 10px rgba(0,0,0,0.03)",
          }}>
            <span style={{ fontSize: 14, fontWeight: 700, color: BRAND.purple }}>
              💳 Pay over time with Affirm:
            </span>
            <span style={{ fontSize: 14, color: BRAND.ink2 }}>
              Split your treatment into affordable monthly payments as low as <strong>$25/mo</strong> with 0% APR options available.
            </span>
            <span style={{
              fontSize: 11, fontWeight: 700, color: BRAND.violet, background: "rgba(78,0,255,0.08)",
              padding: "3px 8px", borderRadius: 6,
            }}>
              Available at Checkout
            </span>
          </div>

          {/* 4 Treatment Cards Grid */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 24, marginBottom: 40 }}>
            <TreatmentCard
              badge="PROMO · SAVE $100+"
              badgeType="promo"
              title="Compounded Semaglutide"
              format="Weekly Subcutaneous Injection"
              promoPrice="$99"
              promoSub="1st Month"
              regularPrice="$199/mo"
              thenPrice="Then as low as $190.65 – $199/mo"
              affirmText="From ~$25/mo with Affirm"
              inclusions={[
                "Doctor consult & evaluation included ($0 fee)",
                "Full administration kit (syringes & wipes)",
                "Free overnight temperature-controlled shipping",
                "100% money-back guarantee if not approved",
              ]}
              ctaLabel="Claim $99 First Month"
              href={TREATMENT_URLS.semaglutideInjectable}
              highlight={true}
            />

            <TreatmentCard
              badge="MAX RESULTS · DUAL INCRETIN"
              badgeType="promo"
              title="Compounded Tirzepatide"
              format="Weekly Subcutaneous Injection (GLP-1 + GIP)"
              promoPrice="$99"
              promoSub="1st Month"
              regularPrice="$299/mo"
              thenPrice="Then as low as $214.50 – $224.85/mo"
              affirmText="From ~$49/mo with Affirm"
              inclusions={[
                "Dual GIP/GLP-1 receptor agonist therapy",
                "Up to 22.5% body weight reduction in trials",
                "Prescriber review & supplies included",
                "No contracts — pause or cancel anytime",
              ]}
              ctaLabel="Claim $99 First Month"
              href={TREATMENT_URLS.tirzepatideInjectable}
              highlight={true}
            />

            <TreatmentCard
              badge="100% NEEDLE-FREE"
              badgeType="custom"
              title="Semaglutide Tablets"
              format="Daily Sublingual Oral Dissolving Tablet"
              promoPrice="$149"
              promoSub="1st Month"
              regularPrice="$249/mo"
              thenPrice="Then as low as $217.40 – $224.75/mo"
              affirmText="From ~$37/mo with Affirm"
              inclusions={[
                "No injections — dissolves under the tongue",
                "No refrigeration needed (ideal for travel)",
                "Doctor consultation & ongoing care included",
                "Free express home delivery",
              ]}
              ctaLabel="Claim $149 First Month"
              href={TREATMENT_URLS.semaglutideTablets}
              highlight={false}
            />

            <TreatmentCard
              badge="NEEDLE-FREE DUAL INCRETIN"
              badgeType="custom"
              title="Tirzepatide Tablets"
              format="Daily Dual GLP-1 + GIP Sublingual Tablet"
              promoPrice="$199"
              promoSub="1st Month"
              regularPrice="$299/mo"
              thenPrice="Then as low as $222.85 – $241.50/mo"
              affirmText="From ~$49/mo with Affirm"
              inclusions={[
                "Needle-free dual-action incretin formula",
                "Metabolic acceleration & appetite suppression",
                "Clinician review & adjustments included",
                "Cancel anytime with zero penalties",
              ]}
              ctaLabel="Claim $199 First Month"
              href={TREATMENT_URLS.tirzepatideTablets}
              highlight={false}
            />
          </div>

          {/* Sublingual drops callout */}
          <div style={{
            background: BRAND.white,
            border: `1px dashed ${BRAND.border}`,
            borderRadius: 16,
            padding: "20px 24px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 16,
          }}>
            <div>
              <div style={{ fontWeight: 700, fontSize: 16, color: BRAND.purple }}>
                Prefer Sublingual Liquid Drops?
              </div>
              <div style={{ fontSize: 13, color: BRAND.ink2, marginTop: 4 }}>
                SkinnyRx also offers needle-free <strong>Compounded Sublingual Oral Semaglutide Drops</strong> from <strong>$199/mo</strong> with flexible micro-titration.
              </div>
            </div>
            <a
              href={TREATMENT_URLS.semaglutideOralDrops}
              onClick={(e) => trackAndGo(e, TREATMENT_URLS.semaglutideOralDrops)}
              style={{
                padding: "10px 20px",
                borderRadius: 999,
                background: BRAND.purple,
                color: BRAND.white,
                fontSize: 13,
                fontWeight: 600,
                textDecoration: "none",
                display: "inline-flex",
                alignItems: "center",
                gap: 6,
                cursor: "pointer",
              }}
            >
              <span>Explore Oral Drops ($199/mo)</span>
              <span>→</span>
            </a>
          </div>
        </div>
      </section>

      <Divider />

      {/* ── How it works ── */}
      <section style={{ padding: "88px 24px" }}>
        <div style={{ maxWidth: 820, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <div style={{ fontSize: 12, fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: BRAND.violet, marginBottom: 14 }}>How It Works</div>
            <h2 style={{ fontSize: "clamp(32px, 5vw, 48px)", fontWeight: 700, letterSpacing: "-0.02em", color: BRAND.purple }}>Start in minutes, from home</h2>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 40 }}>
            <Step num="01" title="Complete your free online assessment" body="Answer questions about your health goals, medical history, and lifestyle — takes about 5 minutes." />
            <Step num="02" title="Doctor review & personalized plan" body="A U.S. licensed physician reviews your assessment and creates a treatment plan customized for your body." />
            <Step num="03" title="Medication shipped to your door" body="If prescribed, your GLP-1 medication is filled by a licensed pharmacy and delivered in discreet packaging." />
            <Step num="04" title="Ongoing care & progress tracking" body="Track your progress with the SkinnyRx app, message your care team, and get dosage adjustments as needed." />
          </div>
          <div style={{ textAlign: "center", marginTop: 56 }}>
            <CtaBtn label="Start Your Assessment" id="how-cta" large variant="yellow" />
            <p style={{ fontSize: 11, color: BRAND.ink4, marginTop: 14, maxWidth: 400, marginLeft: "auto", marginRight: "auto", lineHeight: 1.5 }}>
              Affiliate link — we may earn a commission if you enroll. This does not affect the price you pay.
            </p>
          </div>
        </div>
      </section>

      <Divider />

      {/* ── Why SkinnyRx ── */}
      <section style={{ padding: "88px 24px", background: BRAND.bg }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 52 }}>
            <div style={{ fontSize: 12, fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: BRAND.violet, marginBottom: 14 }}>Why SkinnyRx</div>
            <h2 style={{ fontSize: "clamp(32px, 5vw, 48px)", fontWeight: 700, letterSpacing: "-0.02em", color: BRAND.purple }}>Weight loss that works differently</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 24 }}>
            <BenefitCard icon="💊" title="Doctor-designed protocols" body="Every treatment plan is created by a licensed physician who specializes in metabolic health — not a one-size-fits-all approach." />
            <BenefitCard icon="📱" title="SkinnyRx App included" body="Track weight, meals, and medication. Get reminders, see your progress, and message your care team — all from your phone." />
            <BenefitCard icon="💰" title="Transparent pricing" body="No hidden fees, no surprise charges. Know exactly what you'll pay before you commit. HSA/FSA accepted." />
            <BenefitCard icon="📦" title="Fast, discreet delivery" body="Medication shipped in plain packaging. Most patients receive their prescription within days of approval." />
          </div>
        </div>
      </section>

      <Divider />

      {/* ── Testimonials ── */}
      <section style={{ padding: "88px 24px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 52 }}>
            <div style={{ fontSize: 12, fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: BRAND.violet, marginBottom: 14 }}>Real Results</div>
            <h2 style={{ fontSize: "clamp(32px, 5vw, 48px)", fontWeight: 700, letterSpacing: "-0.02em", color: BRAND.purple }}>What patients are saying</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 24, marginBottom: 32 }}>
            <TestimonialCard
              quote="I've tried everything — diets, gym programs, supplements. SkinnyRx was the first thing that actually worked. Down 34 lbs and my energy is through the roof."
              name="Rachel M."
              detail="Lost 34 lbs in 4 months · Austin, TX"
            />
            <TestimonialCard
              quote="The app makes it so easy to stay on track. I love being able to message my doctor directly. The medication combined with the support changed everything."
              name="James T."
              detail="Lost 28 lbs in 3 months · Chicago, IL"
            />
            <TestimonialCard
              quote="I was skeptical about online weight loss, but my doctor was amazing. She adjusted my dosage perfectly and I've never felt better. Worth every penny."
              name="Angela K."
              detail="Lost 41 lbs in 5 months · Miami, FL"
            />
          </div>
          <p style={{ fontSize: 12, color: BRAND.ink4, textAlign: "center", lineHeight: 1.6, maxWidth: 680, margin: "0 auto" }}>
            <em>Individual experiences vary. These patients consented to share their stories. Results are not typical and depend on many individual factors including starting weight, adherence, diet, and exercise.</em>
          </p>
        </div>
      </section>

      {/* ── Science section (dark) ── */}
      <section style={{ padding: "96px 24px", background: `linear-gradient(135deg, ${BRAND.purple} 0%, #2D1073 100%)` }}>
        <div style={{ maxWidth: 820, margin: "0 auto" }}>
          <div style={{ fontSize: 12, fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(255,231,134,0.8)", marginBottom: 18 }}>The Science</div>
          <h2 style={{
            fontSize: "clamp(32px, 5vw, 52px)", fontWeight: 700,
            letterSpacing: "-0.02em", marginBottom: 40, lineHeight: 1.1,
            color: BRAND.white,
          }}>
            How GLP-1 medications support weight loss.
          </h2>
          {[
            "GLP-1 (glucagon-like peptide-1) is a hormone your body naturally produces after eating. It signals your brain to feel full and helps regulate blood sugar levels — two critical factors in sustainable weight management.",
            "GLP-1 receptor agonist medications mimic this natural hormone, helping reduce appetite and food intake. Clinical trials have shown significant weight loss results when combined with lifestyle changes and medical supervision.",
            "SkinnyRx connects you with doctors who specialize in these treatments. Your physician evaluates your health profile and, if appropriate, prescribes a GLP-1 medication customized to your needs from a licensed compounding pharmacy.",
          ].map((t, i) => (
            <p key={i} style={{ fontSize: 16, lineHeight: 1.85, color: "rgba(255,255,255,0.85)", marginBottom: 22 }}>{t}</p>
          ))}
          <div style={{
            marginTop: 36, padding: "22px 28px",
            background: "rgba(255,255,255,0.08)", borderRadius: 14,
            borderLeft: `3px solid ${BRAND.yellow}`,
          }}>
            <p style={{ fontSize: 14, color: "rgba(255,255,255,0.75)", lineHeight: 1.75, margin: 0 }}>
              A licensed physician will determine whether a GLP-1 medication is right for you based on your health assessment and medical history.
            </p>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section style={{ padding: "88px 24px" }}>
        <div style={{ maxWidth: 740, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <div style={{ fontSize: 12, fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: BRAND.violet, marginBottom: 14 }}>FAQ</div>
            <h2 style={{ fontSize: "clamp(32px, 5vw, 48px)", fontWeight: 700, letterSpacing: "-0.02em", color: BRAND.purple }}>Common questions</h2>
          </div>
          <FaqItem q="How does SkinnyRx work?" a="SkinnyRx is a telehealth platform that connects you with U.S. licensed doctors who specialize in weight loss. You complete a free online health assessment, a doctor reviews it and creates a personalized treatment plan, and — if prescribed — medication is compounded by a licensed pharmacy and shipped cold directly to your door." />
          <FaqItem q="How much does SkinnyRx cost, and how does the first-month promo work?" a="First-time patients can get started with doctor-prescribed Compounded Semaglutide or Compounded Tirzepatide weekly injections for just $99 for their first month. Ongoing renewal pricing starts as low as $190.65–$199/mo (Semaglutide) and $214.50–$299/mo (Tirzepatide) depending on plan length. Needle-free daily Semaglutide tablets start at $149 for the first month, and Tirzepatide daily tablets start at $199 for the first month. There are never any doctor consultation fees, recurring membership dues, or hidden shipping charges." />
          <FaqItem q="Can I pay over time with Affirm?" a="Yes! SkinnyRx partners with Affirm so you can divide your treatment payments into flexible, affordable monthly installments—starting as low as $25/month with 0% APR options available for qualified applicants directly at checkout." />
          <FaqItem q="What medications does SkinnyRx offer?" a="SkinnyRx clinicians prescribe GLP-1 and dual GLP-1/GIP incretin receptor agonist therapies based on your health profile. Options include once-weekly subcutaneous injections (Semaglutide, Tirzepatide), once-daily oral dissolving sublingual tablets, and sublingual liquid oral drops." />
          <FaqItem q="Is my information private?" a="Yes. SkinnyRx operates under strict HIPAA-compliant standards. Your medical information is encrypted and protected at all times." />
          <FaqItem q="What if I don't qualify?" a="SkinnyRx offers a 100% money-back guarantee. If a licensed physician determines that GLP-1 or Tirzepatide medication is not clinically safe or appropriate for you, you are refunded completely." />
          <FaqItem q="Can I cancel my subscription?" a="Yes. There are no long-term contracts or mandatory commitments. You can pause or cancel your plan at any time through your online patient portal." />
        </div>
      </section>

      <Divider />

      {/* ── Final CTA ── */}
      <section style={{ padding: "96px 24px", textAlign: "center", background: `linear-gradient(180deg, ${BRAND.bg} 0%, ${BRAND.white} 100%)` }}>
        <div style={{ maxWidth: 640, margin: "0 auto" }}>
          <h2 style={{
            fontSize: "clamp(34px, 5vw, 56px)", fontWeight: 700,
            letterSpacing: "-0.02em", marginBottom: 20, lineHeight: 1.1,
            color: BRAND.purple,
          }}>
            Ready to start your weight loss journey?
          </h2>
          <p style={{ fontSize: 17, color: BRAND.ink2, lineHeight: 1.65, marginBottom: 44 }}>
            Take the free online assessment. A licensed doctor will review your information and create a plan personalized for your body.
          </p>
          <CtaBtn label="Get Started — It's Free" id="final-cta" large variant="yellow" />
          <div style={{ display: "flex", flexWrap: "wrap", gap: 24, justifyContent: "center", marginTop: 32 }}>
            <TrustBadge icon="lock" text="HIPAA compliant" />
            <TrustBadge icon="medical" text="U.S. licensed doctors" />
            <TrustBadge icon="check" text="No hidden fees" />
          </div>
        </div>
      </section>

      {/* ── Footer / Disclaimers ── */}
      <footer style={{ background: "#F7F7F8", borderTop: `1px solid ${BRAND.border}`, padding: "64px 24px 40px" }}>
        <div style={{ maxWidth: 960, margin: "0 auto" }}>

          <p style={{ fontSize: 15, color: BRAND.ink2, lineHeight: 1.6, marginBottom: 44, textAlign: "center" }}>
            Doctor-designed GLP-1 weight loss programs. Licensed in all 50 states.
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(360px, 1fr))", gap: "32px 48px", marginBottom: 40 }}>
            <DisclaimerBlock title="Medical Disclaimer">
              SkinnyRx is a telehealth platform that connects users with independent, U.S. licensed healthcare providers. It is not a medical provider, pharmacy, or insurance company. The information on this site is for educational purposes only and is not a substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of your physician or other qualified health provider with any questions regarding a medical condition.
            </DisclaimerBlock>
            <DisclaimerBlock title="Results Disclaimer">
              Individual outcomes vary based on starting weight, health history, adherence to the program, diet, exercise, and other factors. Testimonials reflect individual experiences and are not representative of typical results. No guarantee of specific outcomes is made or implied.
            </DisclaimerBlock>
            <DisclaimerBlock title="FDA & Compounding Disclaimer">
              Some treatments offered through SkinnyRx partner pharmacies are compounded medications. Compounded medications are not FDA-approved, meaning the FDA has not evaluated them for safety, efficacy, or quality. They are custom preparations made by state-licensed 503A and 503B compounding pharmacies pursuant to a valid prescription. SkinnyRx does not claim equivalence to any commercially available branded products including Ozempic®, Wegovy®, Mounjaro®, or Zepbound®. All trademarks are the property of their respective owners.
            </DisclaimerBlock>
            <DisclaimerBlock title="FTC Affiliate & Advertising Disclosure">
              In compliance with Federal Trade Commission (FTC) guidelines: This page contains affiliate links. Telehealth FX earns a referral commission when visitors click links on this page and enroll with SkinnyRx. This financial relationship does not affect the price you pay, the care you receive, or our editorial content. For complete details, see our <a href="https://telehealthfx.com/affiliate-disclosure" style={{ color: BRAND.ink, textDecoration: "underline", textUnderlineOffset: 3 }}>full Affiliate Disclosure</a>.
            </DisclaimerBlock>
          </div>

          {/* Black Box Warning */}
          <div style={{ background: BRAND.purple, color: BRAND.white, borderRadius: 14, padding: "28px 32px", marginBottom: 40 }}>
            <div style={{ fontWeight: 700, fontSize: 14, marginBottom: 12, textTransform: "uppercase", letterSpacing: "0.05em", color: BRAND.yellow }}>⚠ Important Safety Information</div>
            <p style={{ fontSize: 13, lineHeight: 1.75, margin: 0, color: "rgba(255,255,255,0.9)" }}>
              GLP-1 receptor agonist medications may cause serious side effects including, but not limited to: pancreatitis, gallbladder problems, kidney injury, serious allergic reactions, increased heart rate, and hypoglycemia. <strong>Do not use GLP-1 medications if you have a personal or family history of medullary thyroid carcinoma (MTC) or Multiple Endocrine Neoplasia syndrome type 2 (MEN 2).</strong> Tell your healthcare provider about all medical conditions, including if you are pregnant, plan to become pregnant, or are breastfeeding. This is not a complete list of possible side effects. Discuss all risks and benefits with your prescribing physician before starting any treatment.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(360px, 1fr))", gap: "32px 48px", marginBottom: 40 }}>
            <DisclaimerBlock title="Platform & Third-Party Disclaimer">
              This website is not a part of the YouTube, Google, or Facebook websites, nor is it endorsed by YouTube, Google, Facebook, or any of their subsidiaries. When you click a link on this page and are directed to a third-party telehealth provider, you are leaving Telehealth FX. Any medical consultations, prescribing decisions, and fulfillment of medications are strictly between you and the licensed medical professionals on that platform. Telehealth FX assumes no liability for any outcomes arising from your relationship with third-party providers.
            </DisclaimerBlock>
            <DisclaimerBlock title="Data Privacy & Tracking">
              Telehealth FX does not collect, store, or process Protected Health Information (PHI). We use standard web analytics tools on this informational page for traffic measurement only. No health data from your assessment or clinical interactions is accessible to or stored by Telehealth FX. Once you leave this page, your information is governed by SkinnyRx's HIPAA-compliant privacy practices.
            </DisclaimerBlock>
          </div>

          <div style={{ height: 1, background: BRAND.border, marginBottom: 28 }} />

          <div style={{ display: "flex", flexWrap: "wrap", gap: "10px 24px", fontSize: 13, color: BRAND.ink3, justifyContent: "center", marginBottom: 20 }}>
            {[
              ["Privacy Policy", "/privacy"], ["Terms of Service", "/terms"],
              ["Affiliate Disclosure", "/affiliate-disclosure"],
              ["Telehealth Consent", "/telehealth-consent"], ["HIPAA Notice", "/hipaa"],
              ["Accessibility", "/accessibility"], ["Contact", "/contact"],
            ].map(([label, href]) => (
              <a key={label} href={`https://telehealthfx.com${href}`} style={{ color: BRAND.ink3, textDecoration: "underline", textUnderlineOffset: 3 }}>{label}</a>
            ))}
          </div>
          <p style={{ textAlign: "center", fontSize: 12, color: BRAND.ink4 }}>
            © {new Date().getFullYear()} Telehealth FX. All rights reserved. SkinnyRx is an independent telehealth platform.
          </p>
        </div>
      </footer>

      {/* ── Mobile sticky CTA bar ── */}
      <style>{`
        #skinnyrx-mobile-sticky { display: none; }
        @media (max-width: 768px) { #skinnyrx-mobile-sticky { display: flex !important; } }
      `}</style>
      <div id="skinnyrx-mobile-sticky" style={{
        position: "fixed", bottom: 0, left: 0, right: 0, zIndex: 100,
        background: BRAND.white, borderTop: `1px solid ${BRAND.border}`,
        padding: "12px 20px", justifyContent: "center",
        boxShadow: "0 -8px 32px rgba(0,0,0,0.08)",
      }}>
        <a
          id="mobile-sticky-skinnyrx-btn"
          href={CTA_URL}
          onClick={trackAndGo}
          style={{
            display: "flex", alignItems: "center", justifyContent: "center",
            gap: 8, width: "100%", maxWidth: 420,
            padding: "16px 24px", borderRadius: 999,
            background: BRAND.yellow, color: BRAND.purple,
            fontSize: 15, fontWeight: 700, textDecoration: "none",
            fontFamily: FONT,
            boxShadow: "0 4px 14px rgba(255,231,134,0.4)",
          }}
        >
          Get Started — It's Free →
        </a>
      </div>
    </div>
  );
}

export default SkinnyRxClient;

