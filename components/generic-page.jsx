/* global React, Nav, Footer, HowItWorks, Medications, Results, Science, Pricing, FAQ */

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
      case 'blog/berberine': return <BlogBerberine />;
      case 'blog/72-hour-myth': return <Blog72HourMyth />;
      case 'blog/transdermal-vs-oral': return <BlogTransdermalVsOral />;
      case 'blog/natures-ozempic-exposed': return <BlogNaturesOzempicExposed />;
    }

    // 2. Check for Legal/Support/Company text pages
    const pageData = window.PAGE_CONTENT[pageSlug];
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
          <button className="btn btn-primary" onClick={() => window.location.href = '/'} style={{ marginTop: 24 }}>
            Return Home
          </button>
        </div>
      </section>
    );
  };

  return (
    <div data-screen-label={`Page: ${pageSlug}`}>
      <Nav onStartQuiz={onStartQuiz} />
      {renderContent()}
      <Footer />
    </div>
  );
}

window.GenericPage = GenericPage;
