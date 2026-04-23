/* global React */
const { useState, useEffect, useRef } = React;

// ============================================================================
// ICONS — minimal line icons drawn from primitives
// ============================================================================
const Icon = {
  Arrow: ({ size = 16 }) => (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M3 8h10M9 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  Check: ({ size = 14 }) => (
    <svg width={size} height={size} viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M2.5 7.5l3 3 6-7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  Plus: ({ size = 16 }) => (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M8 3v10M3 8h10" strokeLinecap="round" />
    </svg>
  ),
  Star: ({ size = 14 }) => (
    <svg width={size} height={size} viewBox="0 0 14 14" fill="currentColor">
      <path d="M7 1l1.8 3.9 4.2.5-3.1 2.9.8 4.2L7 10.5 3.3 12.5l.8-4.2L1 5.4l4.2-.5z" />
    </svg>
  ),
  Shield: ({ size = 16 }) => (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.3">
      <path d="M8 1.5l5.5 2v4.5c0 3-2.2 5.5-5.5 6.5-3.3-1-5.5-3.5-5.5-6.5V3.5z" strokeLinejoin="round"/>
      <path d="M5.5 8l2 2 3-3.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  Leaf: ({ size = 16 }) => (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.3">
      <path d="M13.5 2.5c-6 0-10 3-10 7.5 0 2 1 3.5 2.5 4C6.5 9.5 9 6 13.5 4.5c-.5 3.5-2.5 6-5.5 7" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  Syringe: ({ size = 16 }) => (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.3">
      <path d="M11 2l3 3M9.5 3.5l3 3M2 14l5.5-5.5M7 10l-3 3M5 12l3-3" strokeLinecap="round"/>
      <path d="M10 4l5.5 5.5M7 8l4 4" strokeLinecap="round"/>
    </svg>
  ),
  Chat: ({ size = 16 }) => (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.3">
      <path d="M2.5 11V4a1.5 1.5 0 011.5-1.5h8A1.5 1.5 0 0113.5 4v6a1.5 1.5 0 01-1.5 1.5H6L3 14v-3z" strokeLinejoin="round"/>
    </svg>
  ),
  Clipboard: ({ size = 16 }) => (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.3">
      <rect x="3.5" y="3" width="9" height="11" rx="1" />
      <rect x="6" y="1.5" width="4" height="2.5" rx=".5" />
      <path d="M5.5 7h5M5.5 9.5h5M5.5 12h3" strokeLinecap="round"/>
    </svg>
  ),
  Truck: ({ size = 16 }) => (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.3">
      <path d="M1.5 4h8v7h-8z"/>
      <path d="M9.5 7h3l2 2v2h-5z"/>
      <circle cx="4" cy="12.5" r="1.3"/>
      <circle cx="11.5" cy="12.5" r="1.3"/>
    </svg>
  ),
  Minus: ({ size = 16 }) => (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M3 8h10" strokeLinecap="round"/>
    </svg>
  ),
};

// ============================================================================
// LOGO — "Telehealth FX" wordmark
// ============================================================================
function Logo({ color = 'currentColor', size = 20 }) {
  return (
    <div className="logo" style={{ display: 'flex', alignItems: 'center', gap: 8, color }}>
      <svg width={size} height={size} viewBox="0 0 20 20" fill="none">
        <circle cx="10" cy="10" r="9" stroke={color} strokeWidth="1.2" />
        <path d="M10 1.5 v17 M1.5 10 h17" stroke={color} strokeWidth="1.2" opacity="0.3"/>
        <circle cx="10" cy="10" r="3.5" fill={color} />
      </svg>
      <span style={{ fontFamily: 'var(--serif)', fontSize: size * 0.95, letterSpacing: '-0.02em', fontWeight: 400 }}>
        Telehealth<span style={{ fontStyle: 'italic', marginLeft: 2 }}>FX</span>
      </span>
    </div>
  );
}

window.Icon = Icon;
window.Logo = Logo;
