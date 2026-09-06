'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import Link from 'next/link';
import { JobApplicationModal } from './job-application-modal';

const CareersClientContext = createContext(null);

export function useCareersClient() {
  const context = useContext(CareersClientContext);
  if (!context) {
    return {
      isModalOpen: false,
      setIsModalOpen: () => {},
      isPartnerModalOpen: false,
      setIsPartnerModalOpen: () => {},
      applicationState: null,
      handleApplied: () => {},
      partnerState: null,
      handlePartnerApplied: () => {},
      mounted: false,
    };
  }
  return context;
}

/**
 * Top Consumer Patient Bridge banner + active applicant notification bar
 */
export function CareersTopBanner() {
  const { setIsModalOpen, applicationState, mounted } = useCareersClient();

  return (
    <>
      {/* 1. Permanent Consumer Patient Bridge Banner */}
      <div
        style={{
          backgroundColor: '#0F2618',
          color: '#FBF8F3',
          padding: '10px 0',
          fontSize: '13px',
          borderBottom: '1px solid rgba(78, 190, 123, 0.3)',
        }}
      >
        <div
          className="container"
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '12px',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span
              style={{
                display: 'inline-block',
                width: '8px',
                height: '8px',
                backgroundColor: '#4EBE7B',
                borderRadius: '50%',
                boxShadow: '0 0 0 4px rgba(78, 190, 123, 0.25)',
              }}
            />
            <span>
              <strong>Looking for GLP-1 weight loss treatment instead of a career?</strong> Get prescribed online in 24 hours from $146/mo.
            </span>
          </div>
          <a
            href="https://go.telehealthfx.com/start"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              color: '#4EBE7B',
              fontWeight: 700,
              textDecoration: 'none',
              fontSize: '13px',
            }}
          >
            <span>Start Medical Intake</span>
            <span>➔</span>
          </a>
        </div>
      </div>

      {/* 2. Applicant Active Status Notification (if applied) */}
      {mounted && applicationState && (
        <div
          style={{
            backgroundColor: '#1F3529',
            color: '#FBF8F3',
            padding: '10px 0',
            fontSize: '13px',
            borderBottom: '1px solid rgba(255,255,255,0.1)',
          }}
        >
          <div
            className="container"
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: '12px',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span
                style={{
                  display: 'inline-block',
                  width: '8px',
                  height: '8px',
                  backgroundColor: '#4EBE7B',
                  borderRadius: '50%',
                  boxShadow: '0 0 0 4px rgba(78, 190, 123, 0.25)',
                }}
              />
              <span>
                <strong>Application Status: SUBMITTED</strong> • Ref Code:{' '}
                <strong className="mono">{applicationState.refNumber}</strong> for{' '}
                <strong>{applicationState.fullName}</strong>
              </span>
            </div>
            <button
              type="button"
              onClick={() => setIsModalOpen(true)}
              style={{
                fontSize: '12px',
                fontWeight: 600,
                color: '#FBF8F3',
                textDecoration: 'underline',
                backgroundColor: 'transparent',
                border: 'none',
                cursor: 'pointer',
              }}
            >
              View Status / Receipt Details ➔
            </button>
          </div>
        </div>
      )}
    </>
  );
}

/**
 * Hero section: Above-the-Fold Consumer Patient Bridge Card + Job Application Action
 */
export function CareersHeroInteractive() {
  const { setIsModalOpen, applicationState, mounted, setIsPartnerModalOpen } = useCareersClient();

  return (
    <div style={{ marginBottom: '28px' }}>
      {/* Above-the-Fold Consumer Patient Bridge Card */}
      <div
        style={{
          backgroundColor: '#F0FDF4',
          border: '2px solid #16A34A',
          borderRadius: '16px',
          padding: '24px',
          marginBottom: '24px',
          boxShadow: '0 8px 24px rgba(22, 163, 74, 0.08)',
        }}
      >
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            fontSize: '11px',
            fontWeight: 700,
            letterSpacing: '0.08em',
            color: '#15803D',
            backgroundColor: 'rgba(22, 163, 74, 0.12)',
            padding: '4px 10px',
            borderRadius: '999px',
            marginBottom: '12px',
            textTransform: 'uppercase',
          }}
        >
          <span>🩺 PATIENT ACCESS PORTAL</span>
        </div>
        <h3
          className="serif"
          style={{
            fontSize: '24px',
            color: '#14532D',
            margin: '0 0 8px',
            lineHeight: 1.25,
          }}
        >
          Looking for GLP-1 weight loss treatment instead of a career?
        </h3>
        <p style={{ fontSize: '15px', color: '#166534', margin: '0 0 16px', lineHeight: 1.5 }}>
          Get prescribed online in 24 hours from $146/mo with board-certified doctor oversight, no waiting rooms, and cold-pack home delivery.
        </p>
        <div
          style={{
            display: 'flex',
            gap: '8px',
            flexWrap: 'wrap',
            marginBottom: '18px',
            fontSize: '12px',
            color: '#14532D',
          }}
        >
          <span style={{ backgroundColor: '#DCFCE7', padding: '4px 10px', borderRadius: '6px', fontWeight: 500 }}>
            ⚡ 24h Online Prescriptions
          </span>
          <span style={{ backgroundColor: '#DCFCE7', padding: '4px 10px', borderRadius: '6px', fontWeight: 500 }}>
            💊 Semaglutide ($146/mo) &amp; Tirzepatide ($249/mo)
          </span>
          <span style={{ backgroundColor: '#DCFCE7', padding: '4px 10px', borderRadius: '6px', fontWeight: 500 }}>
            📦 Cold-Chain Shipped
          </span>
          <span style={{ backgroundColor: '#DCFCE7', padding: '4px 10px', borderRadius: '6px', fontWeight: 500 }}>
            💳 HSA/FSA Eligible
          </span>
        </div>
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', alignItems: 'center' }}>
          <a
            href="https://go.telehealthfx.com/start"
            className="btn btn-primary"
            style={{
              backgroundColor: '#15803D',
              borderColor: '#15803D',
              color: '#FFFFFF',
              padding: '12px 24px',
              fontSize: '15px',
              fontWeight: 700,
              borderRadius: '10px',
              textDecoration: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
            }}
          >
            <span>Start 2-Minute Medical Assessment</span>
            <span>➔</span>
          </a>
          <button
            type="button"
            onClick={() => setIsPartnerModalOpen(true)}
            style={{
              background: 'transparent',
              border: '1px solid #86EFAC',
              color: '#166534',
              padding: '10px 18px',
              borderRadius: '10px',
              fontSize: '13px',
              fontWeight: 600,
              cursor: 'pointer',
            }}
          >
            Or Partner as an Affiliate / Gym ($100/mo per referral) ➔
          </button>
        </div>
      </div>

      {/* Dual Path Divider */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
          margin: '20px 0',
          color: 'var(--ink-3, #7F8782)',
          fontSize: '12px',
          fontWeight: 600,
          textTransform: 'uppercase',
          letterSpacing: '0.05em',
        }}
      >
        <div style={{ flex: 1, height: '1px', backgroundColor: 'var(--line-soft, #E5E0D8)' }} />
        <span>APPLYING FOR EMPLOYMENT (W2 CAREERS)</span>
        <div style={{ flex: 1, height: '1px', backgroundColor: 'var(--line-soft, #E5E0D8)' }} />
      </div>

      {/* Job Candidate Application Section */}
      {mounted && applicationState ? (
        <div
          style={{
            backgroundColor: '#FAF6F0',
            border: '2px solid var(--brand, #2E4A3B)',
            borderRadius: '16px',
            padding: '24px',
            boxShadow: '0 8px 24px rgba(46, 74, 59, 0.08)',
          }}
        >
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              fontFamily: 'var(--mono)',
              fontSize: '11px',
              letterSpacing: '0.1em',
              color: 'var(--brand)',
              backgroundColor: 'rgba(46, 74, 59, 0.1)',
              padding: '4px 10px',
              borderRadius: '999px',
              marginBottom: '12px',
              fontWeight: 700,
            }}
          >
            <span>✅</span>
            <span>APPLICATION SUBMITTED &amp; RECEIVED</span>
          </div>

          <h3 className="serif" style={{ fontSize: 24, marginBottom: 8, color: 'var(--ink)' }}>
            Thank you for applying, {applicationState.fullName}!
          </h3>

          <p style={{ fontSize: 14, lineHeight: 1.5, color: 'var(--ink-2)', marginBottom: 18 }}>
            Your application for <strong>GLP-1 Weight Loss Salesperson</strong> is registered. Our Talent Acquisition team will review your profile within 24–48 business hours.
          </p>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
              gap: '12px',
              backgroundColor: '#FFFFFF',
              border: '1px solid var(--line-soft)',
              borderRadius: '10px',
              padding: '12px 16px',
              marginBottom: '18px',
            }}
          >
            <div>
              <div className="mono" style={{ fontSize: '10px', letterSpacing: '0.08em', color: 'var(--ink-3)' }}>
                APPLICATION REF
              </div>
              <div className="mono" style={{ fontSize: '13px', fontWeight: 700, color: 'var(--brand)' }}>
                {applicationState.refNumber}
              </div>
            </div>

            <div>
              <div className="mono" style={{ fontSize: '10px', letterSpacing: '0.08em', color: 'var(--ink-3)' }}>
                STATUS
              </div>
              <div style={{ fontSize: '13px', fontWeight: 600, color: '#2E7D32' }}>
                ● Under Review (24–48 hrs)
              </div>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => setIsModalOpen(true)}
            >
              View Receipt Details ➔
            </button>
            <Link href="/careers/" className="btn btn-secondary">
              View Other Open Roles
            </Link>
          </div>
        </div>
      ) : (
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap' }}>
          <button
            type="button"
            className="btn btn-primary btn-lg"
            onClick={() => setIsModalOpen(true)}
          >
            Apply Now with Resume Parser ➔
          </button>
          <span style={{ fontSize: '13px', color: 'var(--ink-3)' }}>
            ⚡ Takes less than 60 seconds with instant AI resume upload
          </span>
        </div>
      )}
    </div>
  );
}

/**
 * Sidebar summary card button
 */
export function CareersSidebarApplyButton() {
  const { setIsModalOpen, applicationState, mounted } = useCareersClient();

  if (mounted && applicationState) {
    return (
      <button
        type="button"
        className="btn btn-secondary"
        style={{ width: '100%', justifyContent: 'center', marginTop: 20, fontSize: 12 }}
        onClick={() => setIsModalOpen(true)}
      >
        ✅ Applied (Ref {applicationState.refNumber})
      </button>
    );
  }

  return (
    <button
      type="button"
      className="btn btn-primary"
      style={{ width: '100%', justifyContent: 'center', marginTop: 20 }}
      onClick={() => setIsModalOpen(true)}
    >
      Apply Now ➔
    </button>
  );
}

/**
 * Bottom Call-to-Action interactive block
 */
export function CareersBottomInteractive() {
  const { setIsModalOpen, applicationState, mounted, setIsPartnerModalOpen } = useCareersClient();

  return (
    <div>
      {mounted && applicationState ? (
        <div style={{ marginBottom: 32 }}>
          <h3 className="serif" style={{ fontSize: 28, color: 'white', marginBottom: 12 }}>
            Application Submitted!
          </h3>
          <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.85)', marginBottom: 20 }}>
            Your profile (Ref: <strong>{applicationState.refNumber}</strong>) is currently being processed by Telehealth FX Talent Acquisition.
          </p>
          <button
            type="button"
            className="btn btn-secondary btn-lg"
            style={{ color: 'white', borderColor: 'rgba(255,255,255,0.3)', marginRight: 12 }}
            onClick={() => setIsModalOpen(true)}
          >
            View Submitted Application Receipt ➔
          </button>
        </div>
      ) : (
        <div style={{ marginBottom: 32 }}>
          <h3 className="serif" style={{ fontSize: 28, color: 'white', marginBottom: 12 }}>
            Ready to Lead the GLP-1 Healthcare Revolution?
          </h3>
          <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.85)', marginBottom: 20 }}>
            Join our consultative clinical sales team. Take advantage of warm inbound leads, uncapped commissions, and flexible remote work.
          </p>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <button
              type="button"
              className="btn btn-primary btn-lg"
              onClick={() => setIsModalOpen(true)}
            >
              Apply Now for GLP-1 Salesperson ➔
            </button>
            <button
              type="button"
              className="btn btn-secondary btn-lg"
              style={{ color: 'white', borderColor: 'rgba(255,255,255,0.4)', backgroundColor: 'transparent' }}
              onClick={() => setIsPartnerModalOpen(true)}
            >
              Become a B2B Affiliate Partner ➔
            </button>
          </div>
        </div>
      )}

      {/* Patient Bridge reminder at bottom */}
      <div
        style={{
          borderTop: '1px solid rgba(255,255,255,0.15)',
          paddingTop: '20px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '12px',
        }}
      >
        <div style={{ fontSize: '13px', color: 'rgba(255,255,255,0.8)' }}>
          Looking to start GLP-1 weight loss treatment? Prescriptions from $146/mo.
        </div>
        <a
          href="https://go.telehealthfx.com/start"
          style={{
            color: '#4EBE7B',
            fontWeight: 700,
            textDecoration: 'none',
            fontSize: '13px',
          }}
        >
          Start Patient Intake ➔
        </a>
      </div>
    </div>
  );
}

/**
 * Interactive B2B Affiliate / Ambassador Partner Section with Commission Calculator
 */
export function CareersAmbassadorSection() {
  const { setIsPartnerModalOpen } = useCareersClient();
  const [activeReferrals, setActiveReferrals] = useState(25);

  const monthlyRate = 100; // $100/mo recurring per active patient referral
  const monthlyRevenue = activeReferrals * monthlyRate;
  const annualRevenue = monthlyRevenue * 12;

  return (
    <section
      id="affiliate-partner"
      style={{
        backgroundColor: '#FFFFFF',
        borderTop: '1px solid var(--line-soft, #E5E0D8)',
        borderBottom: '1px solid var(--line-soft, #E5E0D8)',
        padding: '72px 0',
      }}
    >
      <div className="container" style={{ maxWidth: '1000px' }}>
        {/* Header Eyebrow & Title */}
        <div style={{ textAlign: 'center', maxWidth: 760, margin: '0 auto 40px' }}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              backgroundColor: 'rgba(46, 74, 59, 0.08)',
              color: 'var(--brand, #2E4A3B)',
              padding: '6px 14px',
              borderRadius: '999px',
              fontSize: '12px',
              fontWeight: 700,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              marginBottom: '14px',
            }}
          >
            <span>🤝 B2B AFFILIATE &amp; AMBASSADOR PARTNERS</span>
          </div>
          <h2
            className="serif"
            style={{
              fontSize: '36px',
              color: 'var(--ink, #1A1F1C)',
              lineHeight: 1.15,
              marginBottom: '16px',
            }}
          >
            Monetize Your Practice, Gym, or Wellness Platform
          </h2>
          <p style={{ fontSize: '16px', color: 'var(--ink-2, #555E58)', lineHeight: 1.6, margin: 0 }}>
            Are you a personal trainer, gym owner, medspa operator, or wellness practitioner? Partner with Telehealth FX and earn <strong>$100/month recurring per active patient referral</strong> while providing your clients with direct access to board-certified medical weight loss.
          </p>
        </div>

        {/* Interactive Commission Calculator Card */}
        <div
          style={{
            backgroundColor: '#FAF6F0',
            border: '2px solid var(--line-soft, #E5E0D8)',
            borderRadius: '20px',
            padding: '36px',
            marginBottom: '40px',
            boxShadow: '0 8px 24px rgba(0,0,0,0.04)',
          }}
        >
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: '12px',
              marginBottom: '24px',
            }}
          >
            <div>
              <h3 className="serif" style={{ fontSize: '24px', color: 'var(--ink, #1A1F1C)', margin: 0 }}>
                Interactive Referral Commission Calculator
              </h3>
              <p style={{ fontSize: '14px', color: 'var(--ink-2, #555E58)', margin: '4px 0 0' }}>
                Based on $100/mo recurring commission for every month your referred patient remains on therapy.
              </p>
            </div>
            <div
              style={{
                backgroundColor: 'var(--brand, #2E4A3B)',
                color: '#FFFFFF',
                padding: '6px 14px',
                borderRadius: '8px',
                fontSize: '13px',
                fontWeight: 700,
              }}
            >
              $100 / Mo Recurring Rate
            </div>
          </div>

          {/* Slider Controls */}
          <div style={{ marginBottom: '28px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
              <span style={{ fontSize: '14px', fontWeight: 600, color: 'var(--ink, #1A1F1C)' }}>
                Active Patient Referrals on Protocol:
              </span>
              <span className="mono" style={{ fontSize: '22px', fontWeight: 800, color: 'var(--brand, #2E4A3B)' }}>
                {activeReferrals} Active Patients
              </span>
            </div>

            <input
              type="range"
              min="5"
              max="250"
              step="5"
              value={activeReferrals}
              onChange={(e) => setActiveReferrals(parseInt(e.target.value, 10))}
              style={{
                width: '100%',
                height: '8px',
                accentColor: 'var(--brand, #2E4A3B)',
                cursor: 'pointer',
              }}
            />

            {/* Quick Benchmark Pills */}
            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '12px', flexWrap: 'wrap', gap: '8px' }}>
              {[10, 25, 50, 100, 250].map((preset) => (
                <button
                  key={preset}
                  type="button"
                  onClick={() => setActiveReferrals(preset)}
                  style={{
                    backgroundColor: activeReferrals === preset ? 'var(--brand, #2E4A3B)' : '#FFFFFF',
                    color: activeReferrals === preset ? '#FFFFFF' : 'var(--ink-2, #555E58)',
                    border: '1px solid var(--line-soft, #E5E0D8)',
                    padding: '4px 12px',
                    borderRadius: '6px',
                    fontSize: '12px',
                    fontWeight: 600,
                    cursor: 'pointer',
                  }}
                >
                  {preset} Patients
                </button>
              ))}
            </div>
          </div>

          {/* Revenue Output Grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
              gap: '16px',
              backgroundColor: '#FFFFFF',
              border: '1px solid var(--line-soft, #E5E0D8)',
              borderRadius: '16px',
              padding: '24px',
              marginBottom: '24px',
            }}
          >
            <div>
              <div style={{ fontSize: '11px', fontWeight: 700, color: 'var(--ink-3, #7F8782)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                Monthly Recurring Revenue
              </div>
              <div className="mono" style={{ fontSize: '32px', fontWeight: 800, color: 'var(--brand, #2E4A3B)', marginTop: '4px' }}>
                ${monthlyRevenue.toLocaleString()}
                <span style={{ fontSize: '14px', fontWeight: 500, color: 'var(--ink-3, #7F8782)' }}> / mo</span>
              </div>
            </div>

            <div>
              <div style={{ fontSize: '11px', fontWeight: 700, color: 'var(--ink-3, #7F8782)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                Annual Projected Earnings
              </div>
              <div className="mono" style={{ fontSize: '32px', fontWeight: 800, color: '#15803D', marginTop: '4px' }}>
                ${annualRevenue.toLocaleString()}
                <span style={{ fontSize: '14px', fontWeight: 500, color: 'var(--ink-3, #7F8782)' }}> / yr</span>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center' }}>
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => setIsPartnerModalOpen(true)}
                style={{
                  width: '100%',
                  justifyContent: 'center',
                  padding: '14px 20px',
                  fontSize: '15px',
                  borderRadius: '10px',
                }}
              >
                Apply for Partner Access ➔
              </button>
            </div>
          </div>

          {/* Value Features Grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '16px',
            }}
          >
            <div style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
              <span style={{ fontSize: '18px' }}>🏥</span>
              <div>
                <div style={{ fontSize: '13px', fontWeight: 700, color: 'var(--ink, #1A1F1C)' }}>Zero Medical Liability</div>
                <div style={{ fontSize: '12px', color: 'var(--ink-2, #555E58)', lineHeight: 1.4 }}>US-licensed physicians manage all clinical intake, lab orders, and prescriptions.</div>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
              <span style={{ fontSize: '18px' }}>📦</span>
              <div>
                <div style={{ fontSize: '13px', fontWeight: 700, color: 'var(--ink, #1A1F1C)' }}>Zero Inventory Needed</div>
                <div style={{ fontSize: '12px', color: 'var(--ink-2, #555E58)', lineHeight: 1.4 }}>503A compounding pharmacies ship medications directly to the patient's doorstep.</div>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
              <span style={{ fontSize: '18px' }}>📈</span>
              <div>
                <div style={{ fontSize: '13px', fontWeight: 700, color: 'var(--ink, #1A1F1C)' }}>Dedicated Partner Portal</div>
                <div style={{ fontSize: '12px', color: 'var(--ink-2, #555E58)', lineHeight: 1.4 }}>Live tracking dashboard, automated attribution links, and monthly direct deposit payouts.</div>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
              <span style={{ fontSize: '18px' }}>🤝</span>
              <div>
                <div style={{ fontSize: '13px', fontWeight: 700, color: 'var(--ink, #1A1F1C)' }}>High Adherence Retention</div>
                <div style={{ fontSize: '12px', color: 'var(--ink-2, #555E58)', lineHeight: 1.4 }}>Average patient stays 8–12 months, yielding $800–$1,200+ lifetime revenue per referral.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/**
 * Partner Lead Capture Modal
 */
export function PartnerIntakeModal({ isOpen, onClose, onApplied }) {
  const [formData, setFormData] = useState({
    fullName: '',
    businessName: '',
    category: 'Personal Trainer / Coach',
    email: '',
    phone: '',
    estimatedReferrals: '10-25 / mo',
  });
  const [submitted, setSubmitted] = useState(false);
  const [partnerRef, setPartnerRef] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    const ref = `THFX-PTR-${Math.floor(100000 + Math.random() * 900000)}`;
    const submission = { ...formData, partnerRef: ref, submittedAt: new Date().toISOString() };
    setPartnerRef(ref);
    setSubmitted(true);
    if (onApplied) onApplied(submission);
    try {
      localStorage.setItem('thfx_partner_application', JSON.stringify(submission));
    } catch (err) {}
  };

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        backgroundColor: 'rgba(15, 23, 42, 0.65)',
        backdropFilter: 'blur(4px)',
        zIndex: 9999,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px',
      }}
      onClick={onClose}
    >
      <div
        style={{
          backgroundColor: '#FFFFFF',
          borderRadius: '20px',
          maxWidth: '560px',
          width: '100%',
          padding: '32px',
          maxHeight: '90vh',
          overflowY: 'auto',
          boxShadow: '0 20px 40px rgba(0,0,0,0.15)',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {submitted ? (
          <div style={{ textAlign: 'center', padding: '20px 0' }}>
            <div
              style={{
                width: '60px',
                height: '60px',
                borderRadius: '50%',
                backgroundColor: '#DCFCE7',
                color: '#15803D',
                fontSize: '28px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 16px',
              }}
            >
              ✓
            </div>
            <h3 className="serif" style={{ fontSize: '26px', color: 'var(--ink, #1A1F1C)', marginBottom: '8px' }}>
              Partner Application Received!
            </h3>
            <p style={{ fontSize: '14px', color: 'var(--ink-2, #555E58)', marginBottom: '20px', lineHeight: 1.5 }}>
              Thank you, <strong>{formData.fullName}</strong>. Your partner account application for <strong>{formData.businessName}</strong> has been registered.
            </p>

            <div
              style={{
                backgroundColor: '#FAF6F0',
                border: '1px solid var(--line-soft, #E5E0D8)',
                borderRadius: '12px',
                padding: '16px',
                marginBottom: '24px',
                textAlign: 'left',
              }}
            >
              <div style={{ fontSize: '11px', color: 'var(--ink-3, #7F8782)', textTransform: 'uppercase' }}>Partner Ref ID</div>
              <div className="mono" style={{ fontSize: '18px', fontWeight: 700, color: 'var(--brand, #2E4A3B)', marginBottom: '8px' }}>
                {partnerRef}
              </div>
              <div style={{ fontSize: '12px', color: 'var(--ink-2, #555E58)' }}>
                Our B2B Clinical Partnerships Director will review your application and email your custom referral link within 24 business hours.
              </div>
            </div>

            <button
              type="button"
              className="btn btn-primary"
              onClick={onClose}
              style={{ width: '100%', justifyContent: 'center' }}
            >
              Done &amp; Return ➔
            </button>
          </div>
        ) : (
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
              <div>
                <span style={{ fontSize: '11px', fontWeight: 700, color: 'var(--brand, #2E4A3B)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                  B2B AMBASSADOR INTAKE
                </span>
                <h3 className="serif" style={{ fontSize: '24px', margin: '4px 0 0', color: 'var(--ink, #1A1F1C)' }}>
                  Apply for Partner Access
                </h3>
              </div>
              <button
                type="button"
                onClick={onClose}
                style={{ background: 'transparent', border: 'none', fontSize: '22px', cursor: 'pointer', color: 'var(--ink-3, #7F8782)' }}
              >
                ✕
              </button>
            </div>

            <p style={{ fontSize: '13px', color: 'var(--ink-2, #555E58)', marginBottom: '20px', lineHeight: 1.5 }}>
              Earn $100/mo recurring per active patient referral. Complete this 30-second form to request your partner portal access.
            </p>

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              <div>
                <label style={{ display: 'block', fontSize: '12px', fontWeight: 600, color: 'var(--ink, #1A1F1C)', marginBottom: '4px' }}>
                  Your Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  placeholder="e.g. Marcus Vance"
                  style={{ width: '100%', padding: '10px 12px', borderRadius: '8px', border: '1px solid var(--line-soft, #E5E0D8)', fontSize: '14px' }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '12px', fontWeight: 600, color: 'var(--ink, #1A1F1C)', marginBottom: '4px' }}>
                  Business / Practice Name *
                </label>
                <input
                  type="text"
                  required
                  value={formData.businessName}
                  onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                  placeholder="e.g. Apex Performance Gym / Radiant MedSpa"
                  style={{ width: '100%', padding: '10px 12px', borderRadius: '8px', border: '1px solid var(--line-soft, #E5E0D8)', fontSize: '14px' }}
                />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '12px', fontWeight: 600, color: 'var(--ink, #1A1F1C)', marginBottom: '4px' }}>
                    Partner Category *
                  </label>
                  <select
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    style={{ width: '100%', padding: '10px 12px', borderRadius: '8px', border: '1px solid var(--line-soft, #E5E0D8)', fontSize: '13px' }}
                  >
                    <option value="Personal Trainer / Coach">Personal Trainer / Coach</option>
                    <option value="Gym / Fitness Facility">Gym / Fitness Facility</option>
                    <option value="Medical Spa / Aesthetics">Medical Spa / Aesthetics</option>
                    <option value="Wellness Clinic / Chiro">Wellness Clinic / Chiro</option>
                    <option value="Digital Creator / Influencer">Digital Creator / Influencer</option>
                  </select>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '12px', fontWeight: 600, color: 'var(--ink, #1A1F1C)', marginBottom: '4px' }}>
                    Est. Referrals / Month *
                  </label>
                  <select
                    value={formData.estimatedReferrals}
                    onChange={(e) => setFormData({ ...formData, estimatedReferrals: e.target.value })}
                    style={{ width: '100%', padding: '10px 12px', borderRadius: '8px', border: '1px solid var(--line-soft, #E5E0D8)', fontSize: '13px' }}
                  >
                    <option value="< 10 / mo">&lt; 10 / mo ($1k/mo)</option>
                    <option value="10-25 / mo">10–25 / mo ($2.5k/mo)</option>
                    <option value="25-50 / mo">25–50 / mo ($5k/mo)</option>
                    <option value="50+ / mo">50+ / mo ($10k+/mo)</option>
                  </select>
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '12px', fontWeight: 600, color: 'var(--ink, #1A1F1C)', marginBottom: '4px' }}>
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="marcus@apexfit.com"
                    style={{ width: '100%', padding: '10px 12px', borderRadius: '8px', border: '1px solid var(--line-soft, #E5E0D8)', fontSize: '14px' }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '12px', fontWeight: 600, color: 'var(--ink, #1A1F1C)', marginBottom: '4px' }}>
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="(555) 234-5678"
                    style={{ width: '100%', padding: '10px 12px', borderRadius: '8px', border: '1px solid var(--line-soft, #E5E0D8)', fontSize: '14px' }}
                  />
                </div>
              </div>

              <button
                type="submit"
                className="btn btn-primary btn-lg"
                style={{ marginTop: '12px', width: '100%', justifyContent: 'center' }}
              >
                Submit Partner Application ➔
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}

/**
 * Main Client Wrapper for Careers Page
 */
export function CareersSalespersonClient({ children }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isPartnerModalOpen, setIsPartnerModalOpen] = useState(false);
  const [applicationState, setApplicationState] = useState(null);
  const [partnerState, setPartnerState] = useState(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    try {
      const saved = localStorage.getItem('thfx_applied_salesperson');
      if (saved) {
        setApplicationState(JSON.parse(saved));
      }
      const savedPartner = localStorage.getItem('thfx_partner_application');
      if (savedPartner) {
        setPartnerState(JSON.parse(savedPartner));
      }
    } catch (e) {}
  }, []);

  const handleApplied = (data) => {
    setApplicationState(data);
    try {
      localStorage.setItem('thfx_applied_salesperson', JSON.stringify(data));
    } catch (e) {}
  };

  const handlePartnerApplied = (data) => {
    setPartnerState(data);
    try {
      localStorage.setItem('thfx_partner_application', JSON.stringify(data));
    } catch (e) {}
  };

  return (
    <CareersClientContext.Provider
      value={{
        isModalOpen,
        setIsModalOpen,
        isPartnerModalOpen,
        setIsPartnerModalOpen,
        applicationState,
        handleApplied,
        partnerState,
        handlePartnerApplied,
        mounted,
      }}
    >
      <CareersTopBanner />
      {children}
      <CareersAmbassadorSection />
      <JobApplicationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onApplied={handleApplied}
        jobTitle="GLP-1 Weight Loss Salesperson"
      />
      <PartnerIntakeModal
        isOpen={isPartnerModalOpen}
        onClose={() => setIsPartnerModalOpen(false)}
        onApplied={handlePartnerApplied}
      />
    </CareersClientContext.Provider>
  );
}

export default CareersSalespersonClient;
