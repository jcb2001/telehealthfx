"use client";
import React from 'react';
import Image from 'next/image';
import Head from 'next/head';
import { Icon } from './common.jsx';

export default function About() {
  return (
    <>
      <Head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `{"@context":"https://schema.org","@type":"MedicalOrganization","name":"TelehealthFX","url":"https://telehealthfx.com/about","logo":"https://telehealthfx.com/assets/logo.png","description":"A specialized telehealth platform providing clinical metabolic weight loss interventions.","department":[{"@type":"Person","name":"Julian Mercer, M.S.","jobTitle":"Lead Bio-Systems Analyst","url":"https://telehealthfx.com/about"}]}` }} />
      </Head>

      <section className="section" style={{ minHeight: '80vh', paddingTop: 120, paddingBottom: 100 }}>
        <div className="container" style={{ maxWidth: 900 }}>
          
          <div className="eyebrow" style={{ marginBottom: 20 }}>Clinical Leadership & Mission</div>
          <h1 className="serif" style={{ fontSize: 64, marginBottom: 40, lineHeight: 1.1 }}>
            Redefining Metabolic <span style={{ fontStyle: 'italic', color: 'var(--brand)' }}>Healthcare</span>
          </h1>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 48 }}>
            
            {/* Author Profile */}
            <div style={{ display: 'flex', gap: 40, alignItems: 'flex-start', flexWrap: 'wrap' }}>
              <div style={{ flex: '0 0 250px', position: 'relative' }}>
                <Image 
                  src="/assets/jm-profile.jpg" 
                  alt="Julian Mercer" 
                  width={400} 
                  height={400} 
                  style={{ width: '100%', height: 'auto', borderRadius: 20, boxShadow: '0 20px 40px rgba(0,0,0,0.1)', objectFit: 'cover' }} 
                  priority 
                />
              </div>
              <div style={{ flex: '1 1 400px' }}>
                <h2 className="serif" style={{ fontSize: 36, marginBottom: 8, color: 'var(--ink)' }}>Julian Mercer, M.S.</h2>
                <div style={{ fontSize: 18, fontWeight: 500, color: 'var(--brand)', marginBottom: 24 }}>Lead Bio-Systems Analyst</div>
                
                <p style={{ fontSize: 18, lineHeight: 1.7, color: 'var(--ink-2)', marginBottom: 20 }}>
                  Julian Mercer is the Lead Bio-Systems Analyst and Clinical Data Director for TelehealthFX. With an advanced background in cellular endocrinology and pharmacokinetic optimization, Julian specializes in translating complex medical data—such as GLP-1 receptor agonist pathways and transdermal diffusion mechanics—into actionable clinical strategies.
                </p>
                <p style={{ fontSize: 18, lineHeight: 1.7, color: 'var(--ink-2)', marginBottom: 20 }}>
                  His work focuses exclusively on metabolic syndrome, insulin resistance, and the mitigation of adverse effects during extreme fat loss protocols (such as sarcopenia prevention via peptide therapies). Julian oversees the clinical integrity of all educational content published on the TelehealthFX platform, ensuring strict adherence to the latest peer-reviewed literature and FDA regulatory guidelines.
                </p>
                
                <div style={{ display: 'flex', gap: 16, marginTop: 32 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8, color: 'var(--ink)' }}>
                    <Icon.Check size={20} color="var(--brand)" /> <span>Master of Science (M.S.)</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8, color: 'var(--ink)' }}>
                    <Icon.Check size={20} color="var(--brand)" /> <span>Metabolic Specialization</span>
                  </div>
                </div>
              </div>
            </div>

            <hr style={{ border: 0, borderBottom: '1px solid var(--line-soft)', margin: '20px 0' }} />

            {/* Platform Mission */}
            <div>
              <h2 className="serif" style={{ fontSize: 40, marginBottom: 24, color: 'var(--ink)' }}>Our Mission & Clinical Standards</h2>
              <p style={{ fontSize: 18, lineHeight: 1.7, color: 'var(--ink-2)', marginBottom: 20 }}>
                TelehealthFX was founded to disrupt the chaotic, predatory landscape of online medical weight loss. As the demand for GLP-1 medications skyrocketed, patients were abandoned by traditional healthcare and preyed upon by illicit compounding mills.
              </p>
              <p style={{ fontSize: 18, lineHeight: 1.7, color: 'var(--ink-2)', marginBottom: 20 }}>
                Our mission is absolute clinical transparency. We partner exclusively with fully verified, U.S.-licensed 503A pharmacies to provide safe, FDA-compliant medications. We do not utilize dangerous salt formulations (like semaglutide sodium) or unverified research chemicals. Every patient undergoes a rigorous medical evaluation and receives 1-on-1 clinician onboarding.
              </p>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: 24, marginTop: 40 }}>
                <div className="card" style={{ padding: 32, background: '#FFFDF9', borderColor: 'var(--brand)' }}>
                  <div style={{ width: 40, height: 40, borderRadius: '50%', background: 'var(--brand-soft)', color: 'var(--brand)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 16 }}>
                    <Icon.Check size={20} />
                  </div>
                  <h3 className="serif" style={{ fontSize: 24, marginBottom: 12 }}>U.S. Pharmacies</h3>
                  <p style={{ fontSize: 15, color: 'var(--ink-2)' }}>We only utilize state-licensed 503A compounding facilities that undergo rigorous 3rd-party sterility testing.</p>
                </div>
                
                <div className="card" style={{ padding: 32, background: '#FFFDF9', borderColor: 'var(--brand)' }}>
                  <div style={{ width: 40, height: 40, borderRadius: '50%', background: 'var(--brand-soft)', color: 'var(--brand)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 16 }}>
                    <Icon.Check size={20} />
                  </div>
                  <h3 className="serif" style={{ fontSize: 24, marginBottom: 12 }}>Clinical Oversight</h3>
                  <p style={{ fontSize: 15, color: 'var(--ink-2)' }}>No chatbots or auto-approvals. You interact directly with licensed healthcare providers in your state.</p>
                </div>

                <div className="card" style={{ padding: 32, background: '#FFFDF9', borderColor: 'var(--brand)' }}>
                  <div style={{ width: 40, height: 40, borderRadius: '50%', background: 'var(--brand-soft)', color: 'var(--brand)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 16 }}>
                    <Icon.Check size={20} />
                  </div>
                  <h3 className="serif" style={{ fontSize: 24, marginBottom: 12 }}>Zero Hidden Fees</h3>
                  <p style={{ fontSize: 15, color: 'var(--ink-2)' }}>We abolished the predatory membership fee model. The price of your medication includes your clinical care.</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
