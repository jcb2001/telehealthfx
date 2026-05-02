"use client";
import React from 'react';
import { Icon } from './common.jsx';

const CTA_URL = "https://go.telehealthfx.com/start";

function BlogTransdermalSystems() {
  return (
    <section className="section" style={{ minHeight: '60vh', paddingTop: 120 }}>
      <div className="container" style={{ maxWidth: 800 }}>
        
        <div className="eyebrow" style={{ marginBottom: 20 }}>Scientific Authority</div>
        <h1 className="serif" style={{ fontSize: 56, marginBottom: 24, lineHeight: 1.1 }}>
          Transdermal Drug Delivery Systems: <span style={{ fontStyle: 'italic', color: 'var(--brand)' }}>Formulation, Evaluation & the Future</span>
        </h1>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 48, paddingBottom: 24, borderBottom: '1px solid var(--line-soft)' }}>
          <div style={{ width: 40, height: 40, borderRadius: '50%', background: 'var(--brand)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold' }}>
            <img src="/assets/jm-profile.jpg" alt="Julian Mercer" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%' }} />
          </div>
          <div>
            <div style={{ fontWeight: 500, fontSize: 14 }}>Julian Mercer, M.S.</div>
            <div style={{ fontSize: 13, color: 'var(--ink-3)' }}>Lead Bio-Systems Analyst · Updated May 2026 · 16 min read</div>
          </div>
        </div>

        <div className="blog-content" style={{ fontSize: 18, lineHeight: 1.7, color: 'var(--ink-2)' }}>
          <img src="/assets/transdermal-systems-featured.png" alt="Matrix vs Reservoir Transdermal Patches" style={{ width: '100%', borderRadius: 16, marginBottom: 40, border: '1px solid var(--line-soft)' }} />
          
          <p>Transdermal drug delivery systems (TDDS) represent one of the most significant pharmacological advancements in modern medicine. By delivering active therapeutic agents across the skin for systemic distribution, TDDS bypasses the hepatic first-pass metabolism and avoids gastrointestinal degradation.</p>
          
          <p>In the realm of metabolic medicine, this technology is revolutionizing how we administer everything from <a href="/blog/berberine-bioavailability" style={{ color: 'var(--brand)', fontWeight: 500 }}>bioavailable berberine</a> to large-molecule peptides. This technical overview explores the formulation aspects, evaluation methods, and engineering behind modern matrix and reservoir patches.</p>

          <div className="card" style={{ padding: 40, margin: '48px 0', textAlign: 'center', background: '#FFFDF9', borderColor: 'var(--brand)' }}>
            <h3 className="serif" style={{ fontSize: 28, marginBottom: 16, color: 'var(--ink)' }}>Experience Transdermal Metabolic Care</h3>
            <p style={{ marginBottom: 24, fontSize: 16 }}>Bypass the gut entirely. Discover medical-grade therapies designed for maximum absorption and zero GI side effects.</p>
            <a href={CTA_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-lg" style={{ display: 'inline-flex', justifyContent: 'center' }}>
              Explore Treatments <Icon.Arrow />
            </a>
          </div>

          <h2 className="serif" style={{ fontSize: 32, marginTop: 48, marginBottom: 24, color: 'var(--ink)' }}>Matrix vs. Reservoir Systems</h2>
          <p>Modern TDDS are primarily categorized into two architectural designs:</p>
          <ul style={{ marginBottom: 24, paddingLeft: 20 }}>
            <li style={{ marginBottom: 12 }}><strong>Reservoir Systems:</strong> The drug is housed in a liquid or gel compartment, separated from the skin by a rate-controlling polymeric membrane. This provides precise zero-order release kinetics.</li>
            <li style={{ marginBottom: 12 }}><strong>Matrix Systems:</strong> The drug is homogeneously dispersed directly within a lipophilic or hydrophilic polymer adhesive. This is the most common format for modern nutraceutical patches due to its thin profile and dose-dumping safety.</li>
          </ul>

          <h2 className="serif" style={{ fontSize: 32, marginTop: 48, marginBottom: 24, color: 'var(--ink)' }}>Permeation Enhancers and the Stratum Corneum</h2>
          <p>The greatest hurdle in TDDS is the stratum corneum—the outermost layer of the epidermis, composed of dead, keratinized cells embedded in a highly organized lipid matrix. It is an exceptional barrier.</p>
          <p>To cross this barrier, formulators use chemical permeation enhancers (like oleic acid, propylene glycol, or terpenes) which temporarily disrupt the lipid bilayer, allowing molecules to pass through to the dermal microcirculation. This is exactly why claims of simple transdermal creams lasting for days are often debunked; accurate sustained release requires specific physical structures, as we explored in our <a href="/blog/72-hour-myth" style={{ color: 'var(--brand)', fontWeight: 500 }}>analysis of the 72-hour patch myth</a>.</p>

          <div className="card" style={{ padding: 40, margin: '48px 0', textAlign: 'center', background: '#FFFDF9', borderColor: 'var(--brand)' }}>
            <div style={{ width: 48, height: 48, borderRadius: '50%', background: 'var(--brand-soft)', color: 'var(--brand)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px' }}>
              <Icon.Shield size={24} />
            </div>
            <h3 className="serif" style={{ fontSize: 28, marginBottom: 16, color: 'var(--ink)' }}>Clinical-Grade Delivery</h3>
            <p style={{ marginBottom: 24, fontSize: 16 }}>We rely on proven pharmacokinetic delivery systems for all metabolic programs.</p>
            <a href={CTA_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-lg" style={{ display: 'inline-flex', justifyContent: 'center' }}>
              See If You Qualify <Icon.Arrow />
            </a>
          </div>

          <div style={{ padding: 40, marginTop: 60, borderRadius: 20, background: 'var(--ink)', color: '#FBF8F3', textAlign: 'center' }}>
            <h2 className="serif" style={{ fontSize: 40, marginBottom: 20, color: '#FBF8F3' }}>Ready for Advanced Metabolic Care?</h2>
            <p style={{ fontSize: 18, opacity: 0.9, marginBottom: 32, maxWidth: 500, margin: '0 auto 32px' }}>
              Take the first step toward science-backed weight management and metabolic health.
            </p>
            <a href={CTA_URL} target="_blank" rel="noopener noreferrer" className="btn btn-lg" style={{ background: '#FBF8F3', color: 'var(--ink)', display: 'inline-flex', justifyContent: 'center', width: '100%', maxWidth: 300 }}>
              Start Assessment <Icon.Arrow />
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}

export { BlogTransdermalSystems };
