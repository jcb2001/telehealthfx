import React from 'react';

/**
 * DirectAnswerSnippet Component
 * 
 * Provides an authoritative above-the-fold question-and-answer featured snippet box
 * calibrated for Google Search featured snippets and immediate patient CRO.
 * 
 * @param {Object} props
 * @param {string} props.question - The search intent query
 * @param {string} props.answer - 40-60 word authoritative clinical or operational answer
 * @param {Array<{label: string, value?: string, text?: string}>} props.keyTakeaways - 2-4 key takeaway items
 * @param {string} [props.badge="Clinical Verification • Evidence-Based"] - Verification badge label
 * @param {"h2"|"h3"} [props.headingLevel="h2"] - Semantic heading level
 */
export function DirectAnswerSnippet({
  question,
  answer,
  keyTakeaways = [],
  badge = "Clinical Verification • Evidence-Based",
  headingLevel = "h2",
}) {
  const HeadingTag = headingLevel === "h3" ? "h3" : "h2";

  return (
    <div
      className="direct-answer-snippet"
      style={{
        background: 'var(--bg-card, #FBF8F3)',
        border: '1px solid var(--line-soft, #EBE5DA)',
        borderLeft: '4px solid var(--brand, #2E4A3B)',
        borderRadius: '12px',
        padding: '24px 28px',
        margin: '28px 0 36px',
        boxShadow: '0 4px 16px rgba(46, 74, 59, 0.05)',
      }}
    >
      {/* Top Clinical Verification Badge */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '8px',
          marginBottom: '12px',
        }}
      >
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            fontFamily: 'var(--mono, monospace)',
            fontSize: '11px',
            fontWeight: 700,
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            color: 'var(--brand, #2E4A3B)',
            background: 'rgba(46, 74, 59, 0.08)',
            padding: '4px 10px',
            borderRadius: '999px',
          }}
        >
          <svg
            width="13"
            height="13"
            viewBox="0 0 16 16"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            aria-hidden="true"
          >
            <path d="M8 1.5l5.5 2v4.5c0 3-2.2 5.5-5.5 6.5-3.3-1-5.5-3.5-5.5-6.5V3.5z" strokeLinejoin="round" />
            <path d="M5.5 8l2 2 3-3.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span>{badge}</span>
        </div>

        <span
          style={{
            fontFamily: 'var(--mono, monospace)',
            fontSize: '11px',
            color: 'var(--ink-3, #6E7770)',
            letterSpacing: '0.04em',
          }}
        >
          DIRECT ANSWER SUMMARY
        </span>
      </div>

      {/* Target Intent Question */}
      <HeadingTag
        style={{
          fontSize: '20px',
          lineHeight: 1.3,
          fontWeight: 600,
          color: 'var(--ink, #1A1F1C)',
          margin: '0 0 12px 0',
        }}
      >
        {question}
      </HeadingTag>

      {/* 40-60 Word Direct Answer */}
      <p
        style={{
          fontSize: '16px',
          lineHeight: 1.65,
          color: 'var(--ink, #1A1F1C)',
          margin: 0,
          fontWeight: 450,
        }}
      >
        {answer}
      </p>

      {/* 2-4 Key Takeaways Pills Grid */}
      {keyTakeaways && keyTakeaways.length > 0 && (
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(170px, 1fr))',
            gap: '10px',
            marginTop: '18px',
            paddingTop: '16px',
            borderTop: '1px solid var(--line-soft, #EBE5DA)',
          }}
        >
          {keyTakeaways.map((item, idx) => {
            const label = item.label || `Point ${idx + 1}`;
            const value = item.value || item.text || '';
            return (
              <div
                key={idx}
                style={{
                  background: 'rgba(255, 255, 255, 0.7)',
                  border: '1px solid var(--line-soft, #EBE5DA)',
                  borderLeft: '3px solid var(--brand, #2E4A3B)',
                  borderRadius: '8px',
                  padding: '8px 12px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '2px',
                }}
              >
                <span
                  style={{
                    fontFamily: 'var(--mono, monospace)',
                    fontSize: '10px',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '0.06em',
                    color: 'var(--brand, #2E4A3B)',
                  }}
                >
                  {label}
                </span>
                <span
                  style={{
                    fontSize: '13px',
                    fontWeight: 600,
                    color: 'var(--ink, #1A1F1C)',
                    lineHeight: 1.35,
                  }}
                >
                  {value}
                </span>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default DirectAnswerSnippet;
