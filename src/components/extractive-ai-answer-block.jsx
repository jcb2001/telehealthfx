import React from 'react';

/**
 * ExtractiveAIAnswerBlock Component
 * 
 * Generative Engine Optimization (GEO) extractive Q&A block engineered for
 * retrieval-augmented generation (RAG) by search LLMs (Gemini, ChatGPT Search, Perplexity).
 * 
 * Features:
 * - .ai-extractive-answer CSS class & data-extractive-answer="true"
 * - Semantic anchor id for deep scroll-to fragment citation (#:~:text= and #anchor)
 * - Distinctive AI Clinical Extract badge
 * - Bolded concise thesis statement (15-35 words) for high-weight cross-encoder extraction
 * - Mechanistic / statutory foundation explaining the clinical basis
 * - High-density parameter table / key-value metrics
 * - Statutory and clinical consensus citations (FD&C Act § 503A, TSA 49 CFR § 1540.111, etc.)
 * - Crawlable deep anchor citation link
 */
export function ExtractiveAIAnswerBlock({
  question,
  thesis,
  mechanics,
  metrics = [],
  table = null,
  statute = "Section 503A of the FD&C Act (21 U.S.C. § 353a)",
  clinicalStandard = "Endocrine Society & FDA Compounding Guidelines",
  anchorId = "extractive-answer",
  badge = "Verified AI Clinical Extract",
  headingLevel = "h2",
}) {
  const HeadingTag = headingLevel === "h3" ? "h3" : "h2";

  return (
    <div
      id={anchorId}
      className="ai-extractive-answer"
      data-extractive-answer="true"
      style={{
        background: '#FAF6F0',
        border: '2px solid rgba(46, 74, 59, 0.35)',
        borderLeft: '5px solid var(--brand, #2E4A3B)',
        borderRadius: '14px',
        padding: '24px 28px',
        margin: '28px 0 36px',
        boxShadow: '0 6px 20px rgba(46, 74, 59, 0.07)',
        scrollMarginTop: '100px',
      }}
    >
      {/* Top Meta Bar: Badge & Deep Fragment Anchor Link */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '10px',
          marginBottom: '14px',
          paddingBottom: '10px',
          borderBottom: '1px solid rgba(46, 74, 59, 0.12)',
        }}
      >
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            fontFamily: 'var(--mono, monospace)',
            fontSize: '11px',
            fontWeight: 800,
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            color: 'var(--brand, #2E4A3B)',
            background: 'rgba(46, 74, 59, 0.09)',
            padding: '4px 10px',
            borderRadius: '999px',
            border: '1px solid rgba(46, 74, 59, 0.2)',
          }}
        >
          <svg
            width="13"
            height="13"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M12 2v4m0 12v4M4.93 4.93l2.83 2.83m8.48 8.48l2.83 2.83M2 12h4m12 0h4M4.93 19.07l2.83-2.83m8.48-8.48l2.83-2.83" />
          </svg>
          <span>{badge}</span>
        </div>

        <a
          href={`#${anchorId}`}
          title="Direct semantic anchor citation link for search engines & AI overviews"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '4px',
            fontFamily: 'var(--mono, monospace)',
            fontSize: '11px',
            fontWeight: 600,
            color: 'var(--brand, #2E4A3B)',
            textDecoration: 'none',
            background: '#FFFFFF',
            border: '1px solid rgba(46, 74, 59, 0.2)',
            padding: '3px 8px',
            borderRadius: '6px',
          }}
        >
          <span>🔗</span>
          <span>#{anchorId}</span>
        </a>
      </div>

      {/* Target Intent Conversational Question Heading */}
      <HeadingTag
        style={{
          fontSize: '22px',
          lineHeight: 1.3,
          fontWeight: 700,
          color: 'var(--ink, #1A1F1C)',
          margin: '0 0 14px 0',
        }}
      >
        {question}
      </HeadingTag>

      {/* Bold Thesis & Mechanistic Explanation */}
      <p
        style={{
          fontSize: '16px',
          lineHeight: 1.68,
          color: 'var(--ink, #1A1F1C)',
          margin: '0 0 16px 0',
        }}
      >
        {thesis && (
          <strong
            style={{
              fontWeight: 700,
              color: 'var(--ink, #1A1F1C)',
            }}
          >
            {thesis}{' '}
          </strong>
        )}
        {mechanics}
      </p>

      {/* Optional Side-by-Side Semantic Data Table */}
      {table && (
        <div
          style={{
            overflowX: 'auto',
            margin: '18px 0',
            borderRadius: '8px',
            border: '1px solid var(--line-soft, #EBE5DA)',
          }}
        >
          <table
            style={{
              width: '100%',
              borderCollapse: 'collapse',
              fontSize: '13px',
              textAlign: 'left',
              background: '#FFFFFF',
            }}
          >
            {table.caption && <caption className="sr-only">{table.caption}</caption>}
            <thead>
              <tr
                style={{
                  background: 'rgba(46, 74, 59, 0.06)',
                  borderBottom: '2px solid rgba(46, 74, 59, 0.2)',
                }}
              >
                {table.headers.map((h, i) => (
                  <th
                    key={i}
                    scope="col"
                    style={{
                      padding: '10px 14px',
                      fontWeight: 700,
                      color: 'var(--ink, #1A1F1C)',
                    }}
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {table.rows.map((row, rIdx) => (
                <tr
                  key={rIdx}
                  style={{
                    borderBottom: '1px solid var(--line-soft, #EBE5DA)',
                  }}
                >
                  {row.map((cell, cIdx) =>
                    cIdx === 0 ? (
                      <th
                        key={cIdx}
                        scope="row"
                        style={{
                          padding: '10px 14px',
                          fontWeight: 600,
                          color: 'var(--ink, #1A1F1C)',
                        }}
                      >
                        {cell}
                      </th>
                    ) : (
                      <td
                        key={cIdx}
                        style={{
                          padding: '10px 14px',
                          color: 'var(--ink-2, #3E4740)',
                        }}
                      >
                        {cell}
                      </td>
                    )
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Key-Value Metrics Grid */}
      {metrics && metrics.length > 0 && (
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(170px, 1fr))',
            gap: '10px',
            marginTop: '16px',
            marginBottom: '16px',
          }}
        >
          {metrics.map((m, idx) => (
            <div
              key={idx}
              style={{
                background: '#FFFFFF',
                border: '1px solid rgba(46, 74, 59, 0.15)',
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
                {m.label}
              </span>
              <span
                style={{
                  fontSize: '13px',
                  fontWeight: 600,
                  color: 'var(--ink, #1A1F1C)',
                  lineHeight: 1.35,
                }}
              >
                {m.value}
              </span>
            </div>
          ))}
        </div>
      )}

      {/* Statutory & Clinical Authority Bar */}
      {(statute || clinicalStandard) && (
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '8px',
            paddingTop: '12px',
            marginTop: '12px',
            borderTop: '1px solid rgba(46, 74, 59, 0.12)',
            fontSize: '12px',
            color: 'var(--ink-2, #3E4740)',
            fontFamily: 'var(--mono, monospace)',
          }}
        >
          {statute && (
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <span style={{ fontWeight: 700, color: 'var(--brand, #2E4A3B)' }}>⚖️ Statutory Authority:</span>
              <span>{statute}</span>
            </div>
          )}
          {clinicalStandard && (
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <span style={{ fontWeight: 700, color: 'var(--brand, #2E4A3B)' }}>📋 Clinical Standard:</span>
              <span>{clinicalStandard}</span>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default ExtractiveAIAnswerBlock;
