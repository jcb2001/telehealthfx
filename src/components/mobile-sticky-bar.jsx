"use client";
import React, { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

export function MobileStickyBar() {
  const pathname = usePathname() || '';
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling past the hero section
      if (window.scrollY > 400) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const p = pathname.toLowerCase();
  const isEs = pathname.startsWith('/es');

  // Route-specific configurations
  let title = isEs ? "Semaglutida desde $69/mes" : "Semaglutide from $69/mo";
  let subtitle = isEs ? "Aprobación en 24h · Envío gratis" : "24h Approval · $0 Membership Fees";
  let ctaText = isEs ? "Verificar →" : "See If You Qualify →";
  let ctaUrl = isEs ? "https://go.telehealthfx.com/embody?sub3=es&sub4=tfx_sticky" : "https://go.telehealthfx.com/embody?aff_sub=tfx_sticky_bar";

  if (p.includes('tirzepatide') || p.includes('zepbound') || p.includes('mounjaro')) {
    title = isEs ? "Tirzepatida desde $119/mes" : "Tirzepatide from $119/mo";
    subtitle = isEs ? "Doble acción GIP/GLP-1" : "Dual GIP/GLP-1 Power";
    ctaUrl = isEs ? "https://go.telehealthfx.com/embody?sub3=es&sub4=tfx_sticky_tirz" : "https://go.telehealthfx.com/embody?aff_sub=tfx_sticky_tirz";
  } else if (p.includes('tablets') || p.includes('oral-glp')) {
    title = isEs ? "Tabletas Orales de GLP-1" : "Oral GLP-1 Tablets";
    subtitle = isEs ? "Sin agujas · Consulta $0" : "Needle-Free · $0 Doctor Consult";
    ctaUrl = isEs ? "https://go.telehealthfx.com/willow?sub3=es&sub4=tfx_sticky_tablets" : "https://go.telehealthfx.com/willow?aff_sub=tfx_sticky_tablets";
  } else if (p.includes('trt') || p.includes('testosterone') || p.includes('enclomiphene')) {
    title = "Testosterone (TRT) Care";
    subtitle = "Starting $89/mo · MD Supervised";
    ctaUrl = "https://go.telehealthfx.com/petermd?aff_sub=tfx_sticky_trt";
  } else if (p.includes('nad')) {
    title = "NAD+ Cellular Injection";
    subtitle = "$99/mo Flat Rate · US Pharmacy";
    ctaUrl = "https://go.telehealthfx.com/nad?aff_sub=tfx_sticky_nad";
  } else if (p.includes('sermorelin')) {
    title = "Sermorelin GH Peptide";
    subtitle = "$99/mo Flat Rate · Sleep & Muscle";
    ctaUrl = "https://go.telehealthfx.com/sermorelin?aff_sub=tfx_sticky_sermo";
  } else if (p.includes('skincare') || p.includes('tretinoin') || p.includes('smooth-move') || p.includes('spot-on') || p.includes('pore-favor') || p.includes('time-out') || p.includes('anti-aging-cream') || p.includes('spot-cream')) {
    title = isEs ? "Dermatología Clínica Musely" : "Musely Clinical Skincare";
    subtitle = isEs ? "Tretinoína e Hidroquinona 12%" : "Prescription Tretinoin & 12% HQ";
    ctaUrl = isEs ? "https://go.telehealthfx.com/anti-aging-cream?sub3=es&sub4=tfx_sticky_skin" : "https://go.telehealthfx.com/anti-aging-cream?aff_sub=tfx_sticky_skin&subId1=tfx_sticky_skin";
  }

  if (!visible) return null;

  return (
    <aside
      aria-label="Quick Qualification"
      className="site-sticky-cta-bar"
      style={{
        position: 'fixed',
        zIndex: 9999,
        background: 'rgba(31, 53, 41, 0.95)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        border: '1px solid rgba(232, 196, 174, 0.35)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 12,
      }}
    >
      <style>{`
        @keyframes stickyBarSlideUpMobile {
          from { transform: translateY(100%); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        @keyframes stickyBarSlideUpDesktop {
          from { transform: translate(-50%, 100%); opacity: 0; }
          to { transform: translate(-50%, 0); opacity: 1; }
        }
        .site-sticky-cta-bar {
          bottom: 0;
          left: 0;
          right: 0;
          padding: 10px 16px;
          padding-bottom: calc(10px + env(safe-area-inset-bottom, 0px));
          box-shadow: 0 -8px 24px rgba(0,0,0,0.25);
          animation: stickyBarSlideUpMobile 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }
        @media (min-width: 769px) {
          .site-sticky-cta-bar {
            bottom: 24px !important;
            left: 50% !important;
            right: auto !important;
            transform: translateX(-50%) !important;
            width: calc(100% - 48px) !important;
            max-width: 620px !important;
            border-radius: 14px !important;
            padding: 12px 24px !important;
            box-shadow: 0 16px 36px rgba(0, 0, 0, 0.35) !important;
            animation: stickyBarSlideUpDesktop 0.3s cubic-bezier(0.16, 1, 0.3, 1) !important;
          }
        }
      `}</style>
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{
          color: '#FBF8F3',
          fontSize: 14,
          fontWeight: 600,
          letterSpacing: '-0.01em',
          whiteSpace: 'nowrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis'
        }}>
          {title}
        </div>
        <div style={{
          color: 'var(--accent-soft, #E8C4AE)',
          fontSize: 11,
          letterSpacing: '0.01em',
          whiteSpace: 'nowrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis'
        }}>
          {subtitle}
        </div>
      </div>
      <a
        href={ctaUrl}
        style={{
          background: '#FBF8F3',
          color: '#2E4A3B',
          padding: '12px 18px',
          borderRadius: 999,
          fontSize: 13,
          fontWeight: 700,
          letterSpacing: '-0.01em',
          textDecoration: 'none',
          whiteSpace: 'nowrap',
          flexShrink: 0,
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.25)',
        }}
      >
        {ctaText}
      </a>
    </aside>
  );
}
