"use client";
import React, { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

export function BlogPromoHook() {
  const pathname = usePathname() || '';
  const [showExitModal, setShowExitModal] = useState(false);

  // Check if article context is TRT / Men's Hormones vs GLP-1 Weight Loss
  const isTrt = /trt|testosterone|enclomiphene|male-hormone|mens-health|hematocrit|hcg/.test(pathname.toLowerCase());

  // 1. In-article Promo Card Injection (within first 300 words)
  useEffect(() => {
    if (!pathname.startsWith('/blog/')) return;

    // Small delay to ensure DOM is ready after hydration
    const timer = setTimeout(() => {
      // Check if already injected or if page already has promo card
      if (document.getElementById('tfx-injected-blog-promo')) return;

      const blogContent = document.querySelector('.blog-content');
      if (!blogContent) return;

      // Find the first paragraph or header inside blog-content
      const firstP = blogContent.querySelector('p');
      if (!firstP) return;

      const card = document.createElement('div');
      card.id = 'tfx-injected-blog-promo';
      card.className = 'blog-high-contrast-promo-card';

      if (isTrt) {
        card.innerHTML = `
          <div style="background: linear-gradient(135deg, #1A2836 0%, #111A23 100%); border: 1.5px solid rgba(160, 198, 224, 0.45); border-radius: 16px; padding: 26px 24px; margin: 32px 0 36px; color: #FBF8F3; box-shadow: 0 12px 32px rgba(0,0,0,0.22); font-family: var(--sans);">
            <div style="display: flex; align-items: center; justify-content: space-between; gap: 8px; flex-wrap: wrap; margin-bottom: 12px;">
              <span style="background: rgba(160, 198, 224, 0.18); color: #A0C6E0; font-size: 11px; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase; padding: 4px 10px; border-radius: 999px; border: 1px solid rgba(160, 198, 224, 0.35);">⚡ 24-Hour Physician Lab Requisition</span>
              <span style="font-size: 12px; color: #A0C6E0; font-weight: 600;">Full Lab Panel · 24h Clinical Review · Discreet Shipping</span>
            </div>
            <h3 style="font-family: var(--serif); font-size: 30px; line-height: 1.15; margin: 0 0 10px 0; color: #FBF8F3;">At-Home TRT from $89/mo — Check 2-Minute Eligibility</h3>
            <p style="font-size: 15px; line-height: 1.55; color: rgba(251, 248, 243, 0.88); margin: 0 0 20px 0;">Doctor-prescribed Testosterone Replacement Therapy (TRT) and enclomiphene protocols with comprehensive diagnostic blood work. Flat-rate monthly pricing, zero local clinic markups, and dedicated clinician follow-ups.</p>
            <div style="display: flex; align-items: center; gap: 16px; flex-wrap: wrap;">
              <a href="https://go.telehealthfx.com/petermd?aff_sub=tfx_trt_blog_inline" style="background: #FBF8F3; color: #111A23; font-weight: 700; font-size: 14px; padding: 13px 26px; border-radius: 999px; text-decoration: none; display: inline-flex; align-items: center; gap: 8px; box-shadow: 0 4px 16px rgba(0,0,0,0.25); transition: transform 0.2s ease;">
                Check 2-Minute TRT Eligibility →
              </a>
              <span style="font-size: 12px; color: rgba(251, 248, 243, 0.75); display: inline-flex; align-items: center; gap: 6px;">
                <svg width="14" height="14" viewBox="0 0 20 20" fill="#A0C6E0"><path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clip-rule="evenodd"/></svg> 50-State Physician Network · No Waiting Rooms
              </span>
            </div>
          </div>
        `;
      } else {
        card.innerHTML = `
          <div style="background: linear-gradient(135deg, #1F3529 0%, #16261D 100%); border: 1.5px solid rgba(232, 196, 174, 0.45); border-radius: 16px; padding: 26px 24px; margin: 32px 0 36px; color: #FBF8F3; box-shadow: 0 12px 32px rgba(0,0,0,0.18); font-family: var(--sans);">
            <div style="display: flex; align-items: center; justify-content: space-between; gap: 8px; flex-wrap: wrap; margin-bottom: 12px;">
              <span style="background: rgba(232, 196, 174, 0.18); color: #E8C4AE; font-size: 11px; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase; padding: 4px 10px; border-radius: 999px; border: 1px solid rgba(232, 196, 174, 0.35);">⚡ 24-Hour Clinical Allocation</span>
              <span style="font-size: 12px; color: #E8C4AE; font-weight: 600;">24h Approval · Free 2-Day Cold Shipping</span>
            </div>
            <h3 style="font-family: var(--serif); font-size: 30px; line-height: 1.15; margin: 0 0 10px 0; color: #FBF8F3;">Starting at $69/mo — Check 2-Minute Eligibility</h3>
            <p style="font-size: 15px; line-height: 1.55; color: rgba(251, 248, 243, 0.88); margin: 0 0 20px 0;">Physician-prescribed GLP-1 weight loss therapy compounded by licensed US 503A pharmacies. Flat-rate introductory pricing across all dosages, $0 doctor consultation fee, and zero monthly membership dues.</p>
            <div style="display: flex; align-items: center; gap: 16px; flex-wrap: wrap;">
              <a href="https://go.telehealthfx.com/embody?aff_sub=tfx_blog_inline" style="background: #FBF8F3; color: #1F3529; font-weight: 700; font-size: 14px; padding: 13px 26px; border-radius: 999px; text-decoration: none; display: inline-flex; align-items: center; gap: 8px; box-shadow: 0 4px 16px rgba(0,0,0,0.25); transition: transform 0.2s ease;">
                Check 2-Minute Eligibility →
              </a>
              <span style="font-size: 12px; color: rgba(251, 248, 243, 0.75); display: inline-flex; align-items: center; gap: 6px;">
                <svg width="14" height="14" viewBox="0 0 20 20" fill="#E8C4AE"><path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clip-rule="evenodd"/></svg> No Hidden Fees · Cancel Anytime
              </span>
            </div>
          </div>
        `;
      }

      // Insert right after the first paragraph (inside the first 300 words)
      firstP.parentNode.insertBefore(card, firstP.nextSibling);
    }, 150);

    return () => clearTimeout(timer);
  }, [pathname, isTrt]);

  // 2. Exit-Intent Modal Trigger
  useEffect(() => {
    if (!pathname.startsWith('/blog/')) return;

    const handleMouseLeave = (e) => {
      if (e.clientY <= 12) {
        triggerModal();
      }
    };

    const triggerModal = () => {
      try {
        if (sessionStorage.getItem('tfx_blog_exit_shown')) return;
        sessionStorage.setItem('tfx_blog_exit_shown', 'true');
        setShowExitModal(true);
      } catch (err) {
        setShowExitModal(true);
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);
    return () => document.removeEventListener('mouseleave', handleMouseLeave);
  }, [pathname]);

  if (!showExitModal) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 99999,
        backgroundColor: 'rgba(15, 23, 19, 0.75)',
        backdropFilter: 'blur(8px)',
        WebkitBackdropFilter: 'blur(8px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
        animation: 'fadeIn 0.25s ease-out',
      }}
      onClick={(e) => {
        if (e.target === e.currentTarget) setShowExitModal(false);
      }}
    >
      <div
        style={{
          background: isTrt ? 'linear-gradient(135deg, #1A2836 0%, #111A23 100%)' : 'linear-gradient(135deg, #1F3529 0%, #16261D 100%)',
          border: isTrt ? '1.5px solid rgba(160, 198, 224, 0.45)' : '1.5px solid rgba(232, 196, 174, 0.45)',
          borderRadius: 20,
          padding: '36px 32px',
          maxWidth: 540,
          width: '100%',
          color: '#FBF8F3',
          boxShadow: '0 24px 64px rgba(0, 0, 0, 0.45)',
          position: 'relative',
          textAlign: 'center',
        }}
      >
        <button
          onClick={() => setShowExitModal(false)}
          aria-label="Close modal"
          style={{
            position: 'absolute',
            top: 16,
            right: 18,
            color: 'rgba(251, 248, 243, 0.6)',
            fontSize: 24,
            lineHeight: 1,
            padding: 4,
            cursor: 'pointer',
          }}
        >
          &times;
        </button>

        <span
          style={{
            display: 'inline-block',
            background: isTrt ? 'rgba(160, 198, 224, 0.2)' : 'rgba(232, 196, 174, 0.2)',
            color: isTrt ? '#A0C6E0' : '#E8C4AE',
            fontSize: 11,
            fontWeight: 700,
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            padding: '4px 12px',
            borderRadius: 999,
            border: isTrt ? '1px solid rgba(160, 198, 224, 0.35)' : '1px solid rgba(232, 196, 174, 0.35)',
            marginBottom: 16,
          }}
        >
          {isTrt ? '⚡ Before You Go — 2-Minute Hormone Assessment' : '⚡ Before You Go — 2-Minute Eligibility Check'}
        </span>

        <h2
          style={{
            fontFamily: 'var(--serif)',
            fontSize: 34,
            lineHeight: 1.1,
            marginBottom: 14,
            color: '#FBF8F3',
          }}
        >
          {isTrt ? 'At-Home TRT from $89/mo Flat Rate' : 'Semaglutide from $69/mo Flat Rate'}
        </h2>

        <p
          style={{
            fontSize: 15,
            lineHeight: 1.55,
            color: 'rgba(251, 248, 243, 0.85)',
            marginBottom: 24,
            maxWidth: 440,
            margin: '0 auto 24px',
          }}
        >
          {isTrt
            ? "Don't pay $300-$500/mo at brick-and-mortar clinics. Get comprehensive diagnostic blood work and custom testosterone optimization prescribed by US doctors."
            : "Don't pay $1,000+/mo retail or get locked into hidden membership fees. Check if you qualify for physician-approved GLP-1 weight loss delivered chilled to your door."}
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 12, alignItems: 'center' }}>
          <a
            href={isTrt ? "https://go.telehealthfx.com/petermd?aff_sub=tfx_trt_blog_exit_intent" : "https://go.telehealthfx.com/embody?aff_sub=tfx_blog_exit_intent"}
            style={{
              background: '#FBF8F3',
              color: isTrt ? '#111A23' : '#1F3529',
              fontWeight: 700,
              fontSize: 15,
              padding: '16px 32px',
              borderRadius: 999,
              textDecoration: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              boxShadow: '0 4px 18px rgba(0,0,0,0.3)',
              width: '100%',
              justifyContent: 'center',
            }}
          >
            {isTrt ? 'Check 2-Minute TRT Eligibility →' : 'Check 2-Minute Eligibility →'}
          </a>

          <button
            onClick={() => setShowExitModal(false)}
            style={{
              fontSize: 12,
              color: 'rgba(251, 248, 243, 0.55)',
              textDecoration: 'underline',
              cursor: 'pointer',
              marginTop: 4,
            }}
          >
            No thanks, I'll pay full clinic prices elsewhere
          </button>
        </div>
      </div>
    </div>
  );
}
