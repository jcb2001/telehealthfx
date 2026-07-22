'use client';

import React from 'react';
import Link from 'next/link';

export default function CareersPage() {
  return (
    <div style={{ background: 'var(--bg)', color: 'var(--ink)', minHeight: '80vh', padding: '60px 0' }}>
      <div className="container">
        <div style={{ maxWidth: 800, margin: '0 auto', textAlign: 'center', marginBottom: 60 }}>
          <div className="pill pill-brand" style={{ marginBottom: 16 }}>
            <span className="pill-dot" />
            <span>JOIN OUR TEAM</span>
          </div>
          <h1 className="serif" style={{ fontSize: 48, marginBottom: 16 }}>Careers at Telehealth FX</h1>
          <p style={{ fontSize: 18, color: 'var(--ink-2)' }}>
            We're building the future of modern metabolic healthcare. Join our high-growth team and help transform lives nationwide.
          </p>
        </div>

        <div style={{ maxWidth: 800, margin: '0 auto' }}>
          <h2 className="mono" style={{ fontSize: 12, letterSpacing: '0.12em', color: 'var(--ink-3)', marginBottom: 20 }}>
            OPEN POSITIONS (1)
          </h2>

          <div style={{
            background: 'var(--bg-card)',
            border: '1px solid var(--line)',
            borderRadius: 'var(--radius-xl)',
            padding: 32,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: 20
          }}>
            <div>
              <div className="pill pill-brand" style={{ marginBottom: 10, fontSize: 11 }}>
                <span>100% REMOTE • FULL-TIME</span>
              </div>
              <h3 className="serif" style={{ fontSize: 28, marginBottom: 6 }}>GLP-1 Weight Loss Salesperson</h3>
              <p style={{ fontSize: 14, color: 'var(--ink-2)' }}>
                Patient Acquisition & Clinical Sales Specialist • OTE $65,000 - $140,000+ (Uncapped Commission)
              </p>
            </div>
            
            <Link href="/careers/glp-1-weight-loss-salesperson" className="btn btn-primary btn-lg">
              View Role & Apply ➔
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
