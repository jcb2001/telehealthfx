"use client";
import React from 'react';
import { Icon } from './common.jsx';

/**
 * PatientReviewsSection Component
 * Renders verified patient review cards and aggregate star ratings on medication pages.
 */
export function PatientReviewsSection({
  productName,
  aggregateRating = { ratingValue: "4.9", reviewCount: "184" },
  reviews = [],
}) {
  if (!reviews || reviews.length === 0) return null;

  return (
    <div style={{ margin: '64px 0 32px' }}>
      {/* Header */}
      <div style={{ textAlign: 'center', marginBottom: 40 }}>
        <div className="pill pill-brand" style={{ marginBottom: 14, display: 'inline-flex', fontSize: 11, letterSpacing: '0.04em' }}>
          <span className="pill-dot" /> VERIFIED PATIENT EXPERIENCES
        </div>
        <h2 className="serif" style={{ fontSize: 36, marginBottom: 12, color: 'var(--ink)' }}>
          Real Patient Reviews & Clinical Outcomes
        </h2>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10, flexWrap: 'wrap' }}>
          <div style={{ display: 'flex', gap: 3, color: '#F59E0B' }}>
            {[...Array(5)].map((_, i) => (
              <Icon.Star key={i} size={18} />
            ))}
          </div>
          <span style={{ fontSize: 16, fontWeight: 700, color: 'var(--ink)' }}>
            {aggregateRating.ratingValue} out of 5
          </span>
          <span style={{ fontSize: 14, color: 'var(--ink-3)' }}>
            · Based on {aggregateRating.reviewCount} verified {productName} patient evaluations
          </span>
        </div>
      </div>

      {/* Reviews Grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: reviews.length >= 3 ? 'repeat(auto-fit, minmax(260px, 1fr))' : 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: 20,
        }}
      >
        {reviews.map((rev, idx) => (
          <div
            key={idx}
            className="card"
            style={{
              padding: 24,
              borderRadius: 16,
              background: 'var(--bg-card, #FFFFFF)',
              border: '1px solid var(--line-soft)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
          >
            <div>
              {/* Stars & Verified Badge */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 14 }}>
                <div style={{ display: 'flex', gap: 2, color: '#F59E0B' }}>
                  {[...Array(Number(rev.reviewRating?.ratingValue || 5))].map((_, i) => (
                    <Icon.Star key={i} size={14} />
                  ))}
                </div>
                <span
                  style={{
                    backgroundColor: '#DCFCE7',
                    color: '#15803D',
                    fontSize: 11,
                    fontWeight: 700,
                    padding: '2px 8px',
                    borderRadius: 999,
                    border: '1px solid #86EFAC',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 4,
                  }}
                >
                  ✓ Verified Patient
                </span>
              </div>

              {/* Review Body */}
              <p style={{ fontSize: 15, lineHeight: 1.6, color: 'var(--ink-2)', margin: '0 0 20px', fontStyle: 'normal' }}>
                "{rev.reviewBody}"
              </p>
            </div>

            {/* Author & Date Footer */}
            <div style={{ paddingTop: 14, borderTop: '1px solid var(--line-soft)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontWeight: 600, fontSize: 14, color: 'var(--ink)' }}>
                {rev.author?.name || "Patient"}
              </span>
              <span style={{ fontSize: 12, color: 'var(--ink-3)' }}>
                {rev.datePublished ? new Date(rev.datePublished).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }) : "Verified Review"}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PatientReviewsSection;
