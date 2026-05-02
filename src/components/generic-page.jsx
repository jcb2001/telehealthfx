"use client";
import React, { useState, useEffect } from 'react';
import { Nav } from './common.jsx';
import { Footer, FAQ } from './sections-3.jsx';
import { HowItWorks, Medications } from './sections-1.jsx';
import { Results, Science, Pricing } from './sections-2.jsx';
import { BlogIndex } from './blog-index.jsx';
import { BlogBerberine } from './blog-berberine.jsx';
import { BlogTransdermalVsOral } from './blog-transdermal-vs-oral.jsx';
import { BlogBerberineVsOzempic } from './blog-berberine-vs-ozempic.jsx';


import { PAGE_CONTENT } from './page-content.jsx';

function GenericPage({ pageSlug, onStartQuiz, priceAnchor }) {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pageSlug]);

  const renderContent = () => {
    // 1. Check for Product component pages
    switch (pageSlug) {
      case 'how': return <HowItWorks />;
      case 'medications': return <Medications priceAnchor={priceAnchor} onStartQuiz={onStartQuiz} />;
      case 'results': return <Results />;
      case 'science': return <Science />;
      case 'pricing': return <Pricing priceAnchor={priceAnchor} onStartQuiz={onStartQuiz} />;
      case 'faq': return <FAQ />;
    }

    // 2. Check for Legal/Support/Company text pages
    const pageData = PAGE_CONTENT[pageSlug];
    if (pageData) {
      const ContentComponent = pageData.component;
      return (
        <section className="section" style={{ minHeight: '60vh', paddingTop: 120 }}>
          <div className="container" style={{ maxWidth: 800 }}>
            <h1 className="serif" style={{ fontSize: 48, marginBottom: 40 }}>{pageData.title}</h1>
            <div className="legal-content" style={{ fontSize: 16, lineHeight: 1.6, color: 'var(--ink-2)' }}>
              <ContentComponent />
            </div>
          </div>
        </section>
      );
    }

    // 3. Fallback (404)
    return (
      <section className="section" style={{ minHeight: '60vh', paddingTop: 120, textAlign: 'center' }}>
        <div className="container">
          <h1 className="serif" style={{ fontSize: 48, marginBottom: 24 }}>Page Not Found</h1>
          <p style={{ color: 'var(--ink-2)' }}>The page you are looking for does not exist.</p>
          <a href="/" className="btn btn-primary" style={{ marginTop: 24, display: 'inline-block' }}>
            Return Home
          </a>
        </div>
      </section>
    );
  };

  return (
    <div data-screen-label={`Page: ${pageSlug}`}>
      {renderContent()}
    </div>
  );
}

export { GenericPage };
