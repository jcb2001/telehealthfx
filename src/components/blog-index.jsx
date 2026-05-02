"use client";
import React, { useState, useEffect } from 'react';
import { Icon } from './common.jsx';


function BlogIndex() {
  const articles = [
    {
      title: "Berberine Oral Bioavailability: The Evidence Against Oral Delivery",
      description: "A deep dive into why berberine oral bioavailability is less than 1% and how transdermal patches solve the problem.",
      slug: "/blog/berberine-oral-bioavailability",
      image: "/assets/bioavailability-featured.png",
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
      title: "Dihydroberberine vs Berberine: The 5x Absorption Multiplier Explained",
      description: "A clinical comparison of dihydroberberine vs berberine, analyzing absorption kinetics, gut microbiome conversion, and steady-state transdermal delivery.",
      slug: "/blog/dihydroberberine-vs-berberine",
      image: "/assets/dhb-featured.png",
      tag: "Pharmacokinetics"
    },
    {
      title: "Ozempic for Insulin Resistance: How GLP-1 Medications Reverse Metabolic Dysfunction",
      description: "Learn how GLP-1 medications like Ozempic reverse metabolic dysfunction and improve insulin sensitivity before weight loss even begins.",
      slug: "/blog/ozempic-insulin-resistance",
      image: "/assets/ozempic-insulin-featured.png",
      tag: "Mechanism of Action"
    },
    {
      title: "The Wegovy FDA Label Decoded: Criteria, Clinical Data, and Off-Label Access",
      description: "We break down the exact Wegovy FDA label criteria for weight loss, the clinical trial data, and how to access compounded semaglutide if your insurance denies you.",
      slug: "/blog/wegovy-fda-label",
      image: "/assets/wegovy-label-featured.png",
      tag: "Regulatory Analysis"
    },
    {
      title: "Transdermal Drug Delivery Systems: Formulation, Evaluation & the Future",
      description: "An academic overview of TDDS formulation, permeation enhancers, and how patches deliver metabolic medicine.",
      slug: "/blog/transdermal-drug-delivery-systems",
      image: "/assets/transdermal-systems-featured.png",
      tag: "Scientific Authority"
    },
    {
      title: "What is a GLP-1 Medication? The Complete Science & Treatment Guide",
      description: "What is a GLP-1 medication? Discover how Semaglutide and Tirzepatide work, the clinical science behind them, and how to access affordable compounding.",
      slug: "/blog/what-is-a-glp-1-medication",
      image: "/assets/glp1-ultimate-guide.png",
      tag: "Science & Basics"
    },
    {
      title: "Berberine vs Ozempic: The Complete Clinical Comparison & Weight Loss Guide",
      description: "An evidence-based comparison of Berberine and Semaglutide (Ozempic), separating social media hype from clinical reality for sustainable weight loss.",
      slug: "/blog/berberine-vs-ozempic",
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
