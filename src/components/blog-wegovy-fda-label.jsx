"use client";
import React from 'react';
import { Icon } from './common.jsx';

const CTA_URL = "https://go.telehealthfx.com/start";

function BlogWegovyFdaLabel() {
  return (
    <section className="section" style={{ minHeight: '60vh', paddingTop: 120 }}>
      <div className="container" style={{ maxWidth: 800 }}>
        
        <div className="eyebrow" style={{ marginBottom: 20 }}>Regulatory & Dosing</div>
        <h1 className="serif" style={{ fontSize: 56, marginBottom: 24, lineHeight: 1.1 }}>
          Wegovy FDA Label Decoded: <span style={{ fontStyle: 'italic', color: 'var(--brand)' }}>Dosing, Indications & What Your Doctor Won't Tell You</span>
        </h1>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 48, paddingBottom: 24, borderBottom: '1px solid var(--line-soft)' }}>
          <div style={{ width: 40, height: 40, borderRadius: '50%', background: 'var(--brand)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold' }}>
            <img src="/assets/jm-profile.jpg" alt="Julian Mercer" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%' }} />
          </div>
          <div>
            <div style={{ fontWeight: 500, fontSize: 14 }}>Julian Mercer, M.S.</div>
            <div style={{ fontSize: 13, color: 'var(--ink-3)' }}>Lead Bio-Systems Analyst · Updated May 2026 · 10 min read</div>
          </div>
        </div>

        <div className="blog-content" style={{ fontSize: 18, lineHeight: 1.7, color: 'var(--ink-2)' }}>
          <img src="/assets/wegovy-label-featured.png" alt="Clinical Dosing Schedule for GLP-1" style={{ width: '100%', borderRadius: 16, marginBottom: 40, border: '1px solid var(--line-soft)' }} />
          
          <p>When the FDA approved Wegovy (semaglutide 2.4 mg) for chronic weight management, it changed the paradigm of obesity treatment. However, understanding the actual FDA label—including the strict titration schedule, indications, and clinical data—is crucial for setting realistic expectations.</p>
          
          <p>This guide breaks down the official prescribing information, how it differs from Ozempic (despite being the same active molecule), and why the clinical dosing escalation is non-negotiable for minimizing side effects.</p>

          <div className="card" style={{ padding: 40, margin: '48px 0', textAlign: 'center', background: '#FFFDF9', borderColor: 'var(--brand)' }}>
            <h3 className="serif" style={{ fontSize: 28, marginBottom: 16, color: 'var(--ink)' }}>Get Clinician-Guided Care</h3>
            <p style={{ marginBottom: 24, fontSize: 16 }}>Don't guess your dosage. Our licensed providers manage your titration schedule for optimal, safe results.</p>
            <a href={CTA_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-lg" style={{ display: 'inline-flex', justifyContent: 'center' }}>
              Start Your Evaluation <Icon.Arrow />
            </a>
          </div>

          <h2 className="serif" style={{ fontSize: 32, marginTop: 48, marginBottom: 24, color: 'var(--ink)' }}>The Titration Schedule</h2>
          <p>According to the FDA label, patients must follow a strict 16-week dose escalation protocol to reach the maintenance dose of 2.4 mg. This is designed to mitigate gastrointestinal adverse reactions (nausea, vomiting), which are the most common reasons patients discontinue therapy.</p>
          <p>Starting at 0.25 mg weekly for 4 weeks, the dose is gradually increased. Skipping steps in this protocol often leads to severe tolerability issues. For those seeking alternative delivery methods that might bypass GI distress entirely, <a href="/blog/transdermal-drug-delivery-systems" style={{ color: 'var(--brand)', fontWeight: 500 }}>transdermal delivery systems</a> are currently under intense clinical evaluation.</p>

          <h2 className="serif" style={{ fontSize: 32, marginTop: 48, marginBottom: 24, color: 'var(--ink)' }}>Indications vs. Off-Label Use</h2>
          <p>Wegovy is explicitly indicated for adults with a BMI of 30 or greater, or 27 or greater with at least one weight-related comorbidity (like hypertension or type 2 diabetes). It is critical to understand that while <a href="/blog/ozempic-insulin-resistance" style={{ color: 'var(--brand)', fontWeight: 500 }}>Ozempic improves insulin resistance</a> at lower doses (up to 2.0 mg), Wegovy's 2.4 mg dose was specifically engineered and approved to maximize systemic weight loss.</p>

          <div className="card" style={{ padding: 40, margin: '48px 0', textAlign: 'center', background: '#FFFDF9', borderColor: 'var(--brand)' }}>
            <div style={{ width: 48, height: 48, borderRadius: '50%', background: 'var(--brand-soft)', color: 'var(--brand)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px' }}>
              <Icon.Check size={24} />
            </div>
            <h3 className="serif" style={{ fontSize: 28, marginBottom: 16, color: 'var(--ink)' }}>Compounded Alternatives</h3>
            <p style={{ marginBottom: 24, fontSize: 16 }}>Access the same active ingredient (semaglutide) through licensed US compounding pharmacies at a fraction of the cost.</p>
            <a href={CTA_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-lg" style={{ display: 'inline-flex', justifyContent: 'center' }}>
              See Pricing Options <Icon.Arrow />
            </a>
          </div>

          <div style={{ padding: 40, marginTop: 60, borderRadius: 20, background: 'var(--ink)', color: '#FBF8F3', textAlign: 'center' }}>
            <h2 className="serif" style={{ fontSize: 40, marginBottom: 20, color: '#FBF8F3' }}>Start Your Metabolic Journey</h2>
            <p style={{ fontSize: 18, opacity: 0.9, marginBottom: 32, maxWidth: 500, margin: '0 auto 32px' }}>
              Find out if GLP-1 therapy is right for your biology and weight loss goals.
            </p>
            <a href={CTA_URL} target="_blank" rel="noopener noreferrer" className="btn btn-lg" style={{ background: '#FBF8F3', color: 'var(--ink)', display: 'inline-flex', justifyContent: 'center', width: '100%', maxWidth: 300 }}>
              See If You Qualify <Icon.Arrow />
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}

export { BlogWegovyFdaLabel };
