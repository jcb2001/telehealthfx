"use client";
import React, { useState, useEffect } from 'react';
import { Icon } from './common.jsx';


function BlogIndex() {
  const articles = [
    {
      title: "Berberine Bioavailability: Transdermal Patch vs. Oral — The Complete Evidence Review",
      description: "A complete evidence review comparing the pharmacokinetics and absorption rates of transdermal berberine patches versus standard oral pills.",
      slug: "/blog/berberine-bioavailability",
      image: "/assets/berberine-bioavailability-featured.png",
      tag: "Pharmacokinetics"
    },
    {
      title: "Berberine for PCOS Weight Loss: What the Clinical Data Actually Shows",
      description: "Explore the clinical data on how berberine manages insulin resistance and supports weight loss in women with Polycystic Ovary Syndrome (PCOS).",
      slug: "/blog/berberine-pcos-weight-loss",
      image: "/assets/berberine-pcos-featured.png",
      tag: "Clinical Data"
    },
    {
      title: "Dihydroberberine vs. Berberine: Absorption, Dosing & Which One Actually Works",
      description: "A complete comparison of dihydroberberine (DHB) and standard berberine, including absorption rates, dosing, side effects, and transdermal delivery.",
      slug: "/blog/dihydroberberine-vs-berberine",
      image: "/assets/dihydroberberine-featured.png",
      tag: "Compound Analysis"
    },
    {
      title: "The Ultimate Guide to GLP-1 Medications: How They Work & What's New",
      description: "A comprehensive clinical breakdown of GLP-1 receptor agonists, how they function for weight loss, and the newest metabolic treatments available.",
      slug: "/blog/glp1-ultimate-guide",
      image: "/assets/glp1-ultimate-guide.png",
      tag: "Science & Basics"
    },
    {
      title: "Nature’s Ozempic Exposed: Why Berberine Beats the Hype for Sustainable Weight Loss",
      description: "An evidence-based comparison of Berberine and Semaglutide (Ozempic), separating social media hype from clinical reality for sustainable weight loss.",
      slug: "/blog/natures-ozempic-exposed",
      image: "/assets/ozempic-featured.png",
      tag: "Metabolic Reality Check"
    },
    {
      title: "Transdermal vs Oral vs Injections: The Definitive Guide to Metabolic Supplements in 2026",
      description: "A comprehensive pharmacokinetic review comparing oral, transdermal, and injection delivery methods for metabolic compounds like Berberine and Semaglutide.",
      slug: "/blog/transdermal-vs-oral",
      image: "/assets/delivery-featured.png",
      tag: "Pharmacokinetic Review"
    },
    {
      title: "The 72-Hour Myth: We Lab-Tested Transdermal Depletion Rates at Hour 18",
      description: "An investigation into transdermal delivery systems revealing the 72-hour myth of berberine patches and the pharmacokinetic reality of rapid depletion.",
      slug: "/blog/72-hour-myth",
      image: "/assets/myth-featured.png",
      tag: "Clinical Analysis"
    },
    {
      title: "The Transdermal Revolution: Why Berberine Patches are the Future of Metabolic Health",
      description: "An in-depth clinical analysis of Berberine transdermal patches vs oral delivery for metabolic health, AMPK activation, and avoiding the Berberine Belly.",
      slug: "/blog/berberine",
      image: "/assets/berberine-featured.png",
      tag: "Metabolic Health"
    }
  ];

  const indexSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Insights for Metabolic Health | Telehealth FX Journal",
    "description": "Clinical analyses, pharmacokinetic reviews, and evidence-based breakdowns from the Telehealth FX Bio-Systems team.",
    "url": "https://www.telehealthfx.com/blog",
    "publisher": {
      "@type": "MedicalOrganization",
      "name": "Telehealth FX",
      "url": "https://www.telehealthfx.com",
      "logo": {
        "@type": "ImageObject",
        "url": "https://telehealthfx.com/assets/Site%20Icon-modified.png"
      }
    },
    "mainEntity": {
      "@type": "ItemList",
      "itemListElement": articles.map((article, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "url": `https://www.telehealthfx.com${article.slug}`
      }))
    }
  };

  return (
    <section className="section" style={{ minHeight: '80vh', paddingTop: 140, paddingBottom: 100 }}>
      <div className="container">
        
        <div style={{ textAlign: 'center', marginBottom: 80, maxWidth: 800, margin: '0 auto 80px' }}>
          <div className="eyebrow" style={{ marginBottom: 20 }}>Journal</div>
          <h1 className="serif" style={{ fontSize: 64, marginBottom: 24, lineHeight: 1.1, color: 'var(--ink)' }}>
            Insights for <span style={{ fontStyle: 'italic', color: 'var(--brand)' }}>Metabolic Health.</span>
          </h1>
          <p style={{ fontSize: 20, color: 'var(--ink-2)', lineHeight: 1.6 }}>
            Clinical analyses, pharmacokinetic reviews, and evidence-based breakdowns from the Telehealth FX Bio-Systems team.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: 40 }}>
          {articles.map((article, idx) => (
            <a key={idx} href={article.slug} style={{ textDecoration: 'none', color: 'inherit', display: 'flex', flexDirection: 'column', group: 'true' }}>
              <div style={{ width: '100%', aspectRatio: '16/10', borderRadius: 16, overflow: 'hidden', marginBottom: 24, border: '1px solid var(--line-soft)' }}>
                <img 
                  src={article.image} 
                  alt={article.title} 
                  style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.4s ease' }} 
                  onMouseOver={e => e.currentTarget.style.transform = 'scale(1.03)'}
                  onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'}
                />
              </div>
              <div style={{ fontSize: 13, fontWeight: 600, color: 'var(--brand)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: 12 }}>
                {article.tag}
              </div>
              <h3 className="serif" style={{ fontSize: 28, marginBottom: 16, lineHeight: 1.2, color: 'var(--ink)' }}>
                {article.title}
              </h3>
              <p style={{ fontSize: 16, color: 'var(--ink-2)', lineHeight: 1.6, flex: 1 }}>
                {article.description}
              </p>
              <div style={{ marginTop: 24, fontSize: 15, fontWeight: 500, color: 'var(--brand)', display: 'flex', alignItems: 'center', gap: 8 }}>
                Read Article <Icon.Arrow size={16}/>
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}

export { BlogIndex };
