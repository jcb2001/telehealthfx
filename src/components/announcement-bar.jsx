"use client";
import React from 'react';

function AnnouncementBar() {
  return (
    <>
      <style>{`
        @keyframes announcement-shimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        @keyframes announcement-pulse-dot {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(0.7); }
        }
        @keyframes announcement-glow {
          0%, 100% { box-shadow: 0 0 8px rgba(199, 125, 92, 0.3); }
          50% { box-shadow: 0 0 16px rgba(199, 125, 92, 0.6); }
        }
        @keyframes announcement-slide-in {
          0% { transform: translateY(-100%); opacity: 0; }
          100% { transform: translateY(0); opacity: 1; }
        }
        @keyframes announcement-sparkle {
          0%, 100% { opacity: 0; transform: scale(0) rotate(0deg); }
          50% { opacity: 1; transform: scale(1) rotate(180deg); }
        }
        .announcement-bar {
          animation: announcement-slide-in 0.5s ease-out both;
        }
        .announcement-bar:hover {
          background: var(--brand) !important;
        }
        .announcement-bar:hover .announcement-save-text {
          background-size: 200% auto !important;
          animation: announcement-shimmer 1.5s linear infinite !important;
        }
        .announcement-pill {
          animation: announcement-glow 2s ease-in-out infinite;
        }
        .announcement-live-dot {
          animation: announcement-pulse-dot 1.5s ease-in-out infinite;
        }
        .announcement-sparkle-1 {
          animation: announcement-sparkle 3s ease-in-out infinite;
        }
        .announcement-sparkle-2 {
          animation: announcement-sparkle 3s ease-in-out infinite 1s;
        }
        .announcement-sparkle-3 {
          animation: announcement-sparkle 3s ease-in-out infinite 2s;
        }
      `}</style>
      <a
        href="https://go.telehealthfx.com/start"
        className="announcement-bar"
        style={{
          display: 'block',
          background: 'var(--brand-deep)',
          color: '#FBF8F3',
          textAlign: 'center',
          padding: '11px 16px',
          fontSize: 14,
          fontWeight: 500,
          letterSpacing: '-0.01em',
          textDecoration: 'none',
          position: 'relative',
          zIndex: 51,
          transition: 'background .25s ease',
          overflow: 'hidden',
        }}
      >
        {/* Subtle moving highlight streak across the bar */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.04) 45%, rgba(255,255,255,0.08) 50%, rgba(255,255,255,0.04) 55%, transparent 100%)',
          backgroundSize: '200% 100%',
          animation: 'announcement-shimmer 4s ease-in-out infinite',
          pointerEvents: 'none',
        }} />

        <span style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: 10,
          flexWrap: 'wrap',
          justifyContent: 'center',
          position: 'relative',
        }}>
          {/* Sparkle left */}
          <span className="announcement-sparkle-1" style={{
            display: 'inline-block',
            fontSize: 12,
            lineHeight: 1,
          }}>✦</span>

          {/* Limited Time Offer pill with live dot */}
          <span
            className="announcement-pill"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 6,
              background: 'var(--accent)',
              color: '#FBF8F3',
              borderRadius: 999,
              padding: '3px 11px',
              fontSize: 11,
              fontWeight: 600,
              letterSpacing: '0.04em',
              textTransform: 'uppercase',
              fontFamily: 'var(--mono)',
            }}
          >
            <span
              className="announcement-live-dot"
              style={{
                width: 6,
                height: 6,
                borderRadius: '50%',
                background: '#FBF8F3',
                display: 'inline-block',
                flexShrink: 0,
              }}
            />
            Limited Time Offer
          </span>

          {/* Sparkle center */}
          <span className="announcement-sparkle-2" style={{
            display: 'inline-block',
            fontSize: 10,
            lineHeight: 1,
          }}>✦</span>

          {/* Main text with shimmer on $400 */}
          <span>
            Save up to{' '}
            <strong
              className="announcement-save-text"
              style={{
                fontWeight: 700,
                background: 'linear-gradient(90deg, #FBF8F3 0%, #E8C4AE 40%, #FBF8F3 60%, #E8C4AE 100%)',
                backgroundSize: '200% auto',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                animation: 'announcement-shimmer 3s ease-in-out infinite',
              }}
            >$400</strong>{' '}
            on your first GLP-1 order
          </span>

          {/* Sparkle right */}
          <span className="announcement-sparkle-3" style={{
            display: 'inline-block',
            fontSize: 12,
            lineHeight: 1,
          }}>✦</span>
        </span>
      </a>
    </>
  );
}

export { AnnouncementBar };
