import React from 'react';

const START_URL = "https://go.telehealthfx.com/start";

/**
 * AIQuickSummaryAction Component
 * 
 * High-visibility above-the-fold conversion rate optimization (CRO) card designed
 * specifically for generative search visitors (Google AI Overviews, Perplexity, ChatGPT Search)
 * seeking instant factual verification and friction-free clinical intake.
 * 
 * Key Features:
 * - Transparent $146/mo all-inclusive flat-rate pricing
 * - 24-hr clinician approval & 2-day cold-chain express delivery
 * - Seamless Dose-Match Guarantee (honoring current titration up to 2.4mg without reset)
 * - 1-click primary CTA to https://go.telehealthfx.com/start
 * - GA4 event tracking attribute: data-geo-cta="ai-quick-summary"
 */
export function AIQuickSummaryAction({
  title = "AI Overview Summary & Immediate Patient Action",
  subtitle = "Instant clinical verification of extracted medical facts with direct physician access",
  price = "$146/mo",
  doseMatch = true,
  turnaround = "24-hr clinician approval · 2-day cold-chain express shipping",
  ctaText = "Start 2-Minute Medical Assessment →",
  ctaUrl = START_URL,
  secondaryCtaText = null,
  secondaryCtaUrl = null,
  keyPoints = [
    { label: "Clinical Status", value: "100% Legal via State-Licensed 503A Compounding Pharmacies" },
    { label: "Transparent Price", value: "$146 / month flat rate (Includes doctor consult, meds, and supplies)" },
    { label: "Rapid Turnaround", value: "24-hr clinician approval with 2-day cold-chain home delivery" },
    { label: "Dose Continuity", value: "Seamless Dose-Match Guarantee (Transfer up to 2.4mg without restart)" },
  ],
}) {
  return (
    <div
      className="ai-quick-summary"
      data-geo-cta="ai-quick-summary"
      style={{
        backgroundColor: '#FAF6F0',
        border: '2px solid rgba(46, 74, 59, 0.4)',
        borderRadius: '18px',
        padding: '28px 24px',
        margin: '32px 0 40px',
        boxShadow: '0 8px 28px rgba(46, 74, 59, 0.09)',
      }}
    >
      {/* Top Verification Badges Bar */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '8px',
          marginBottom: '16px',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
          <span
            style={{
              backgroundColor: '#DCFCE7',
              color: '#15803D',
              fontSize: '11px',
              fontWeight: 800,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              padding: '4px 10px',
              borderRadius: '999px',
              border: '1px solid #86EFAC',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '4px',
            }}
          >
            ✓ AI SUMMARY VERIFICATION
          </span>
          <span
            style={{
              backgroundColor: 'rgba(46, 74, 59, 0.1)',
              color: 'var(--brand, #2E4A3B)',
              fontSize: '11px',
              fontWeight: 700,
              letterSpacing: '0.04em',
              padding: '4px 10px',
              borderRadius: '999px',
            }}
          >
            TRANSPARENT $146/MO FLAT RATE
          </span>
        </div>
        <span
          style={{
            fontFamily: 'var(--mono, monospace)',
            fontSize: '11px',
            color: 'var(--ink-3, #6E7770)',
            letterSpacing: '0.04em',
          }}
        >
          24-HR APPROVAL &amp; 2-DAY COLD-CHAIN
        </span>
      </div>

      {/* Main Title & Subtitle */}
      <h3
        className="serif"
        style={{
          fontSize: '24px',
          color: 'var(--ink, #1A1F1C)',
          margin: '0 0 8px',
          lineHeight: 1.25,
        }}
      >
        {title}
      </h3>
      <p
        style={{
          fontSize: '14px',
          color: 'var(--ink-2, #3E4740)',
          margin: '0 0 20px',
          lineHeight: 1.5,
        }}
      >
        {subtitle}
      </p>

      {/* Verified Facts Matrix */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '10px',
          marginBottom: '20px',
        }}
      >
        {keyPoints.map((pt, idx) => (
          <div
            key={idx}
            style={{
              background: '#FFFFFF',
              border: '1px solid rgba(46, 74, 59, 0.12)',
              borderLeft: '3px solid var(--brand, #2E4A3B)',
              borderRadius: '8px',
              padding: '10px 14px',
            }}
          >
            <div
              style={{
                fontFamily: 'var(--mono, monospace)',
                fontSize: '10px',
                fontWeight: 700,
                color: 'var(--brand, #2E4A3B)',
                textTransform: 'uppercase',
                letterSpacing: '0.06em',
                marginBottom: '2px',
              }}
            >
              {pt.label}
            </div>
            <div
              style={{
                fontSize: '13px',
                fontWeight: 600,
                color: 'var(--ink, #1A1F1C)',
                lineHeight: 1.35,
              }}
            >
              {pt.value}
            </div>
          </div>
        ))}
      </div>

      {/* Seamless Dose-Match Guarantee Callout */}
      {doseMatch && (
        <div
          style={{
            backgroundColor: '#F3EFE6',
            border: '1px solid rgba(46, 74, 59, 0.2)',
            borderRadius: '10px',
            padding: '14px 18px',
            marginBottom: '20px',
            display: 'flex',
            alignItems: 'flex-start',
            gap: '12px',
          }}
        >
          <div style={{ fontSize: '20px', lineHeight: 1 }}>🔄</div>
          <div>
            <div style={{ fontSize: '13px', fontWeight: 700, color: 'var(--brand, #2E4A3B)', marginBottom: '2px' }}>
              Seamless Dose-Match Guarantee (No 4-Week Restart)
            </div>
            <div style={{ fontSize: '12px', color: 'var(--ink-2, #3E4740)', lineHeight: 1.45 }}>
              Transferring from Hims, Ro, or a local medspa? Upload your prior prescription vial during clinical intake. Our US physicians honor your established maintenance dose (0.5mg, 1.0mg, 1.7mg, or 2.4mg) with zero titration delay.
            </div>
          </div>
        </div>
      )}

      {/* CTA Button Group */}
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          gap: '12px',
          marginBottom: '16px',
        }}
      >
        <a
          href={ctaUrl}
          data-geo-cta="ai-quick-summary"
          className="btn btn-primary"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px',
            padding: '14px 28px',
            fontSize: '15px',
            fontWeight: 700,
            textDecoration: 'none',
            borderRadius: '10px',
            backgroundColor: 'var(--brand, #2E4A3B)',
            color: '#FFFFFF',
            flex: '1 1 240px',
            boxShadow: '0 4px 14px rgba(46, 74, 59, 0.25)',
          }}
        >
          <span>{ctaText}</span>
        </a>

        {secondaryCtaText && secondaryCtaUrl && (
          <a
            href={secondaryCtaUrl}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '6px',
              padding: '14px 20px',
              fontSize: '14px',
              fontWeight: 600,
              textDecoration: 'none',
              borderRadius: '10px',
              border: '1px solid var(--line-soft, #EBE5DA)',
              backgroundColor: '#FFFFFF',
              color: 'var(--ink, #1A1F1C)',
            }}
          >
            <span>{secondaryCtaText}</span>
          </a>
        )}
      </div>

      {/* Trust Badges Footer */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexWrap: 'wrap',
          gap: '14px',
          fontSize: '11px',
          color: 'var(--ink-3, #6E7770)',
          textAlign: 'center',
        }}
      >
        <span>🔒 100% HIPAA Compliant</span>
        <span>•</span>
        <span>🩺 Board-Certified US Physicians</span>
        <span>•</span>
        <span>🏥 State-Licensed 503A Pharmacies</span>
        <span>•</span>
        <span>🚫 Zero Hidden Dues or Monthly Fees</span>
      </div>
    </div>
  );
}

export default AIQuickSummaryAction;
