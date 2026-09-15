'use client';

import React, { useState } from 'react';

export function CompareDirectoryClient({ magnets }) {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = ['All', 'Competitor Switch', 'Affordable Pricing', 'Drug Comparison', 'Local Metro Hub'];

  const filtered = magnets.filter((m) => {
    const matchesCat = selectedCategory === 'All' || m.category === selectedCategory;
    const matchesQuery = !searchQuery || 
      m.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      m.h1.toLowerCase().includes(searchQuery.toLowerCase()) ||
      m.medication.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesQuery;
  });

  return (
    <section className="section" style={{ paddingBottom: '100px' }}>
      <div className="container" style={{ maxWidth: '1000px' }}>
        
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <div style={{ display: 'inline-block', padding: '4px 12px', borderRadius: '6px', backgroundColor: 'rgba(46, 74, 59, 0.08)', color: 'var(--brand)', fontSize: '12px', fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '16px' }}>
            Comprehensive 2026 Telehealth Directory
          </div>
          <h1 className="serif" style={{ fontSize: '48px', color: 'var(--ink)', marginBottom: '16px', lineHeight: 1.15 }}>
            Treatment, Pricing &amp; Competitor Comparisons
          </h1>
          <p style={{ fontSize: '16px', color: 'var(--ink-2)', maxWidth: '640px', margin: '0 auto', lineHeight: 1.6 }}>
            Browse our clinical guides and price comparisons for compounded Semaglutide (from $99 1st mo), Tirzepatide (from $99 1st mo), needle-free tablets, and TRT ($79/mo) with full physician oversight, Affirm financing, and zero hidden fees.
          </p>
        </div>

        {/* Filter & Search Bar */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '36px' }}>
          <input
            type="text"
            placeholder="Search all 100 comparison guides (e.g. Ro, Tirzepatide, Phoenix, TRT)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            style={{
              width: '100%',
              padding: '14px 20px',
              borderRadius: '12px',
              border: '1px solid var(--line)',
              backgroundColor: '#FFFFFF',
              fontSize: '15px',
              color: 'var(--ink)',
              boxShadow: '0 2px 8px rgba(0, 0, 0, 0.04)',
            }}
          />

          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                style={{
                  padding: '8px 16px',
                  borderRadius: '20px',
                  fontSize: '13px',
                  fontWeight: selectedCategory === cat ? 700 : 500,
                  backgroundColor: selectedCategory === cat ? 'var(--brand)' : '#FFFFFF',
                  color: selectedCategory === cat ? '#FFFFFF' : 'var(--ink-2)',
                  border: '1px solid',
                  borderColor: selectedCategory === cat ? 'var(--brand)' : 'var(--line-soft)',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                }}
              >
                {cat === 'All' ? `All Guides (${magnets.length})` : cat}
              </button>
            ))}
          </div>
        </div>

        {/* Directory Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '18px' }}>
          {filtered.map((item) => (
            <a
              key={item.slug}
              href={`/compare/${item.slug}/`}
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                padding: '22px',
                borderRadius: '14px',
                backgroundColor: '#FFFFFF',
                border: '1px solid var(--line-soft)',
                textDecoration: 'none',
                boxShadow: '0 2px 10px rgba(0, 0, 0, 0.03)',
                transition: 'transform 0.2s ease, border-color 0.2s ease',
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.borderColor = 'var(--brand)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.borderColor = 'var(--line-soft)';
              }}
            >
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                  <span style={{ fontSize: '11px', fontWeight: 700, color: 'var(--ink-3)', textTransform: 'uppercase' }}>
                    {item.category}
                  </span>
                  <span style={{ fontSize: '12px', fontWeight: 800, color: '#15803D', backgroundColor: '#DCFCE7', padding: '2px 8px', borderRadius: '6px' }}>
                    {item.price}
                  </span>
                </div>
                <h3 className="serif" style={{ fontSize: '18px', color: 'var(--ink)', margin: '0 0 8px', lineHeight: 1.3 }}>
                  {item.h1}
                </h3>
                <p style={{ fontSize: '13px', color: 'var(--ink-2)', lineHeight: 1.5, margin: 0 }}>
                  {item.metaDescription.slice(0, 110)}...
                </p>
              </div>

              <div style={{ marginTop: '16px', paddingTop: '12px', borderTop: '1px solid var(--line-soft)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '12px', fontWeight: 600, color: 'var(--brand)' }}>
                <span>Read Full Comparison</span>
                <span>➔</span>
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}
