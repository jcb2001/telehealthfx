"use client";
import React from 'react';
import Image from 'next/image';
import { Icon } from './common.jsx';

const SEMAGLUTIDE_URL = "https://go.telehealthfx.com/start";

export function LocationPhiladelphia() {
  return (
    <div style={{ background: '#FBF8F3', overflow: 'hidden' }}>
      
      {/* 1. PREMIUM HERO SECTION */}
      <section style={{ 
        position: 'relative', 
        paddingTop: 'clamp(100px, 15vw, 160px)', 
        paddingBottom: 'clamp(60px, 10vw, 100px)', 
        background: 'linear-gradient(180deg, #0A0F0D 0%, #15221A 100%)',
        color: '#fff',
        borderBottomLeftRadius: 'clamp(24px, 5vw, 60px)',
        borderBottomRightRadius: 'clamp(24px, 5vw, 60px)'
      }}>
        <div style={{ position: 'absolute', top: '-10%', right: '-20%', width: '70vw', height: '70vw', background: 'radial-gradient(circle, rgba(46, 204, 113, 0.15) 0%, transparent 60%)', filter: 'blur(80px)', zIndex: 0 }}></div>
        <div style={{ position: 'absolute', bottom: '-20%', left: '-10%', width: '50vw', height: '50vw', background: 'radial-gradient(circle, rgba(46, 74, 59, 0.4) 0%, transparent 60%)', filter: 'blur(60px)', zIndex: 0 }}></div>

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="row align-items-center justify-content-center text-center text-lg-start">
            <div className="col-lg-8">
              <div style={{ 
                display: 'inline-flex', 
                alignItems: 'center', 
                gap: 8, 
                padding: '6px 16px', 
                background: 'rgba(255,255,255,0.05)', 
                border: '1px solid rgba(255,255,255,0.1)', 
                borderRadius: 100,
                fontSize: 13,
                fontWeight: 600,
                letterSpacing: 1,
                textTransform: 'uppercase',
                marginBottom: 24,
                backdropFilter: 'blur(10px)'
              }}>
                <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#2ECC71', boxShadow: '0 0 10px #2ECC71' }}></div>
                Pennsylvania Telehealth Hub
              </div>
              
              <h1 className="serif" style={{ fontSize: 'clamp(40px, 6vw, 72px)', lineHeight: 1.1, marginBottom: 24, letterSpacing: '-0.02em' }}>
                Clinical GLP-1 Weight Loss in <br className="d-none d-lg-block" />
                <span style={{ 
                  display: 'inline-block', 
                  background: '#2ECC71', 
                  color: '#0A0F0D', 
                  padding: '4px 24px', 
                  borderRadius: 'clamp(8px, 2vw, 16px)', 
                  marginTop: 'clamp(8px, 2vw, 16px)',
                  fontWeight: 600,
                  transform: 'rotate(-1deg)'
                }}>
                  Philadelphia
                </span>
              </h1>
              
              <p style={{ fontSize: 'clamp(16px, 2vw, 20px)', opacity: 0.9, marginBottom: 40, lineHeight: 1.6, maxWidth: 650, marginInline: 'auto' }} className="ms-lg-0">
                Skip the gridlock on the Schuylkill Expressway and the premium markups at Center City medical spas. Access U.S.-licensed compounded Semaglutide and Tirzepatide, delivered directly to your door anywhere in the Delaware Valley.
              </p>
              
              <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', justifyItems: 'center' }} className="justify-content-center justify-content-lg-start">
                <a href={SEMAGLUTIDE_URL} style={{ 
                  background: '#FBF8F3', 
                  color: '#0A0F0D', 
                  fontSize: 18, 
                  padding: '16px 36px', 
                  fontWeight: 600, 
                  borderRadius: 100,
                  textDecoration: 'none',
                  boxShadow: '0 8px 30px rgba(251, 248, 243, 0.2)',
                  transition: 'transform 0.2s ease'
                }}>
                  Check PA Eligibility
                </a>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: 24, marginTop: 40, opacity: 0.8, flexWrap: 'wrap' }} className="justify-content-center justify-content-lg-start">
                 <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                    <Icon.Check size={18} color="#2ECC71" />
                    <span style={{ fontSize: 14, fontWeight: 500 }}>PA State Board of Medicine Compliant</span>
                 </div>
                 <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                    <Icon.Check size={18} color="#2ECC71" />
                    <span style={{ fontSize: 14, fontWeight: 500 }}>Overnight Cold-Pack Shipping</span>
                 </div>
              </div>
            </div>
            
            <div className="col-lg-4 d-none d-lg-block">
            </div>
          </div>
        </div>
      </section>

      {/* 2. METABOLIC HEALTH DATA (MOBILE OPTIMIZED GRID) */}
      <section style={{ padding: 'clamp(60px, 8vw, 100px) 0' }}>
        <div className="container">
           <div className="row g-5 align-items-center">
              <div className="col-lg-6">
                 <h2 className="serif" style={{ fontSize: 'clamp(32px, 4vw, 48px)', lineHeight: 1.2, marginBottom: 24, color: 'var(--ink)' }}>
                    The Philly Metabolic Reality: Urban Infrastructure
                 </h2>
                 <p style={{ fontSize: 'clamp(16px, 2vw, 18px)', color: 'var(--ink-2)', marginBottom: 24, lineHeight: 1.7 }}>
                    Navigating metabolic health in Philadelphia presents a unique physiological challenge. The combination of our historic, often cramped urban infrastructure and the heavy, calorie-dense local food culture (the reality of Wawa runs and hoagies) creates a difficult baseline for metabolic optimization.
                 </p>
                 <p style={{ fontSize: 'clamp(16px, 2vw, 18px)', color: 'var(--ink-2)', marginBottom: 32, lineHeight: 1.7 }}>
                    While certain neighborhoods have high-end fitness access, much of Greater Philadelphia and the surrounding suburbs face long commutes on I-95 or the SEPTA, leading to high-cortisol, sedentary lifestyles. Traditional diet protocols frequently hit a physiological wall when battling insulin resistance caused by these environmental factors.
                 </p>
                 <a href="/blog/ozempic-insulin-resistance" style={{ color: 'var(--brand)', textDecoration: 'none', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: 8 }}>
                    Read our clinical guide to insulin resistance <Icon.Arrow size={16} />
                 </a>
              </div>
              
              <div className="col-lg-5 offset-lg-1">
                 <div style={{ 
                   background: '#fff', 
                   padding: 'clamp(24px, 4vw, 40px)', 
                   borderRadius: 24, 
                   boxShadow: '0 20px 40px rgba(0,0,0,0.04)',
                   border: '1px solid rgba(0,0,0,0.05)'
                 }}>
                    <h3 className="serif" style={{ fontSize: 24, marginBottom: 8, color: 'var(--ink)' }}>Hyper-Local Delivery Areas</h3>
                    <p style={{ color: 'var(--ink-2)', fontSize: 15, marginBottom: 24 }}>Our 503A pharmacies ship cold-packed medications directly to your home across the Delaware Valley:</p>
                    
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: 16 }}>
                       {['Center City', 'Rittenhouse', 'Fishtown', 'South Philly', 'Northern Liberties', 'Manayunk', 'Chestnut Hill', 'The Main Line'].map(region => (
                         <div key={region} style={{ display: 'flex', alignItems: 'center', gap: 12, background: 'var(--surface-2)', padding: '12px 16px', borderRadius: 12 }}>
                            <div style={{ width: 8, height: 8, background: '#2ECC71', borderRadius: '50%' }}></div> 
                            <span style={{ fontWeight: 500, fontSize: 15, color: 'var(--ink)' }}>{region}</span>
                         </div>
                       ))}
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* 3. COST ARBITRAGE (GLASSMORPHISM CARDS) */}
      <section style={{ padding: 'clamp(60px, 8vw, 100px) 0', background: '#0A0F0D', color: '#fff' }}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10 text-center">
              <h2 className="serif" style={{ fontSize: 'clamp(32px, 5vw, 56px)', marginBottom: 24 }}>The Philly Cost Arbitrage</h2>
              <p style={{ fontSize: 'clamp(16px, 2vw, 18px)', opacity: 0.8, marginBottom: 'clamp(40px, 6vw, 60px)', maxWidth: 800, marginInline: 'auto', lineHeight: 1.7 }}>
                Premium commercial real estate costs in Center City are passed directly to you via massive medication markups. By utilizing decentralized telehealth, you pay strictly for the clinical care and the medication.
              </p>

              <div className="row g-4 text-start">
                <div className="col-md-6">
                  <div style={{ 
                    padding: 'clamp(32px, 4vw, 48px)', 
                    height: '100%', 
                    background: 'rgba(255,255,255,0.03)', 
                    border: '1px solid rgba(255,255,255,0.1)',
                    borderRadius: 32,
                    backdropFilter: 'blur(20px)'
                  }}>
                    <div style={{ color: '#e74c3c', fontWeight: 600, letterSpacing: 1, fontSize: 13, textTransform: 'uppercase', marginBottom: 16 }}>The Traditional Route</div>
                    <h3 className="serif" style={{ fontSize: 32, marginBottom: 16 }}>Rittenhouse MedSpas</h3>
                    <p style={{ opacity: 0.7, marginBottom: 32, lineHeight: 1.6 }}>
                      Visiting a boutique anti-aging clinic in Rittenhouse Square or the Main Line requires paying a massive premium for the zip code.
                    </p>
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 16 }}>
                      <li style={{ display: 'flex', gap: 16 }}>
                        <div style={{ color: '#e74c3c', marginTop: 2 }}><Icon.Minus size={20} /></div>
                        <span style={{ opacity: 0.9 }}>Average Cost: <strong style={{ color: '#fff' }}>$600 - $900 / month</strong></span>
                      </li>
                      <li style={{ display: 'flex', gap: 16 }}>
                        <div style={{ color: '#e74c3c', marginTop: 2 }}><Icon.Minus size={20} /></div>
                        <span style={{ opacity: 0.9 }}>Mandatory in-person consultations</span>
                      </li>
                      <li style={{ display: 'flex', gap: 16 }}>
                        <div style={{ color: '#e74c3c', marginTop: 2 }}><Icon.Minus size={20} /></div>
                        <span style={{ opacity: 0.9 }}>Hidden "membership" or bloodwork fees</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="col-md-6">
                  <div style={{ 
                    padding: 'clamp(32px, 4vw, 48px)', 
                    height: '100%', 
                    background: 'linear-gradient(135deg, rgba(46, 204, 113, 0.1) 0%, rgba(46, 74, 59, 0.05) 100%)', 
                    border: '1px solid rgba(46, 204, 113, 0.2)',
                    borderRadius: 32,
                    boxShadow: '0 20px 40px rgba(0,0,0,0.2)'
                  }}>
                    <div style={{ color: '#2ECC71', fontWeight: 600, letterSpacing: 1, fontSize: 13, textTransform: 'uppercase', marginBottom: 16 }}>The TelehealthFX Route</div>
                    <h3 className="serif" style={{ fontSize: 32, marginBottom: 16 }}>Direct-to-Patient Care</h3>
                    <p style={{ opacity: 0.7, marginBottom: 32, lineHeight: 1.6 }}>
                      Access the exact same active pharmaceutical ingredients prescribed by licensed clinicians, with zero real estate markups.
                    </p>
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 16 }}>
                      <li style={{ display: 'flex', gap: 16 }}>
                        <div style={{ color: '#2ECC71', marginTop: 2 }}><Icon.Check size={20} /></div>
                        <span style={{ opacity: 0.9 }}>Cost: <strong style={{ color: '#fff' }}>From $146 / month</strong></span>
                      </li>
                      <li style={{ display: 'flex', gap: 16 }}>
                        <div style={{ color: '#2ECC71', marginTop: 2 }}><Icon.Check size={20} /></div>
                        <span style={{ opacity: 0.9 }}>100% online asynchronous intake</span>
                      </li>
                      <li style={{ display: 'flex', gap: 16 }}>
                        <div style={{ color: '#2ECC71', marginTop: 2 }}><Icon.Check size={20} /></div>
                        <span style={{ opacity: 0.9 }}>Shipped overnight in cold-packs</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. REAL-TIME SUPPLY CHAIN & HOSPITAL WAITLISTS */}
      <section style={{ padding: 'clamp(60px, 8vw, 100px) 0' }}>
        <div className="container">
           <div className="row g-5">
              <div className="col-lg-6">
                 <div style={{ display: 'inline-block', background: 'var(--surface-2)', padding: '6px 16px', borderRadius: 100, fontSize: 13, fontWeight: 600, color: 'var(--brand)', textTransform: 'uppercase', letterSpacing: 1, marginBottom: 24 }}>
                    Philly Supply Chain Reality
                 </div>
                 <h2 className="serif" style={{ fontSize: 'clamp(32px, 4vw, 40px)', marginBottom: 24, lineHeight: 1.2 }}>Bypass the Schuylkill & Penn Medicine Waitlists</h2>
                 <p style={{ fontSize: 'clamp(16px, 2vw, 18px)', color: 'var(--ink-2)', marginBottom: 24, lineHeight: 1.7 }}>
                    Whether you're enduring delays on the SEPTA Broad Street Line, or sitting in rush hour gridlock on the Schuylkill Expressway (I-76), spending an hour commuting just to sit in a doctor's waiting room for a 5-minute prescription refill is an outdated model.
                 </p>
                 <p style={{ fontSize: 'clamp(16px, 2vw, 18px)', color: 'var(--ink-2)', marginBottom: 32, lineHeight: 1.7 }}>
                    Even worse, if you try to fill a prescription for branded Wegovy at a local CVS or Rite Aid in South Philly, you know the reality: <strong>the medications are on indefinite national backorder.</strong> Furthermore, securing an appointment at metabolic centers like <strong>Penn Medicine</strong> or <strong>Jefferson Health</strong> takes 4-6 months, and local insurance plans frequently deny prior authorizations.
                 </p>
                 
                 <div style={{ display: 'flex', alignItems: 'center', gap: 16, background: '#fff', padding: 20, borderRadius: 16, border: '1px solid var(--line-soft)', boxShadow: '0 4px 12px rgba(0,0,0,0.02)' }}>
                    <div style={{ width: 48, height: 48, background: 'rgba(46, 204, 113, 0.1)', borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#2ECC71' }}>
                       <Icon.Shield size={24} />
                    </div>
                    <div>
                       <strong style={{ display: 'block', fontSize: 16, color: 'var(--ink)' }}>HSA / FSA Accepted</strong>
                       <span style={{ fontSize: 14, color: 'var(--ink-2)' }}>Bypass Pennsylvania insurance denials entirely. Use pre-tax dollars for your compounding protocol.</span>
                    </div>
                 </div>
              </div>
              
              <div className="col-lg-6">
                 <div style={{ background: '#fff', padding: 'clamp(24px, 4vw, 40px)', borderRadius: 32, boxShadow: '0 20px 60px rgba(0,0,0,0.05)', border: '1px solid rgba(0,0,0,0.03)' }}>
                    <h3 className="serif" style={{ fontSize: 24, marginBottom: 32 }}>The 503A Patient Journey</h3>
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 32 }}>
                       <li style={{ display: 'flex', gap: 20 }}>
                          <div style={{ width: 40, height: 40, background: '#2ECC71', color: '#000', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', fontSize: 18, flexShrink: 0, boxShadow: '0 4px 12px rgba(46, 204, 113, 0.3)' }}>1</div>
                          <div>
                             <strong style={{ display: 'block', fontSize: 18, marginBottom: 8, color: 'var(--ink)' }}>Complete PA Intake</strong>
                             <span style={{ color: 'var(--ink-2)', fontSize: 15, lineHeight: 1.6 }}>Fill out your health profile online from your home. No SEPTA commutes or waiting rooms required.</span>
                          </div>
                       </li>
                       <li style={{ display: 'flex', gap: 20 }}>
                          <div style={{ width: 40, height: 40, background: '#2ECC71', color: '#000', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', fontSize: 18, flexShrink: 0, boxShadow: '0 4px 12px rgba(46, 204, 113, 0.3)' }}>2</div>
                          <div>
                             <strong style={{ display: 'block', fontSize: 18, marginBottom: 8, color: 'var(--ink)' }}>Physician Review</strong>
                             <span style={{ color: 'var(--ink-2)', fontSize: 15, lineHeight: 1.6 }}>A licensed Pennsylvania State Board of Medicine physician reviews your chart and approves your script within 24 hours.</span>
                          </div>
                       </li>
                       <li style={{ display: 'flex', gap: 20 }}>
                          <div style={{ width: 40, height: 40, background: '#2ECC71', color: '#000', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', fontSize: 18, flexShrink: 0, boxShadow: '0 4px 12px rgba(46, 204, 113, 0.3)' }}>3</div>
                          <div>
                             <strong style={{ display: 'block', fontSize: 18, marginBottom: 8, color: 'var(--ink)' }}>Overnight Delivery</strong>
                             <span style={{ color: 'var(--ink-2)', fontSize: 15, lineHeight: 1.6 }}>Medication is compounded and shipped cold-packed straight to your door in Greater Philadelphia.</span>
                          </div>
                       </li>
                    </ul>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* 5. LOCAL SEO & SERVICE AREA MAP */}
      <section style={{ padding: 'clamp(60px, 8vw, 100px) 0', background: '#fff', borderTop: '1px solid var(--line-soft)' }}>
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-5 text-center text-lg-start">
              <h2 className="serif" style={{ fontSize: 'clamp(32px, 4vw, 40px)', marginBottom: 24 }}>Philadelphia Service Area</h2>
              <p style={{ fontSize: 'clamp(16px, 2vw, 18px)', color: 'var(--ink-2)', marginBottom: 32, lineHeight: 1.7 }}>
                Telehealth FX provides asynchronous medical weight loss and GLP-1 prescribing services to all permanent residents and professionals operating within Philadelphia and surrounding Pennsylvania counties.
              </p>
              <div style={{ background: '#FBF8F3', padding: 32, borderRadius: 24, textAlign: 'left' }}>
                 <h4 style={{ fontSize: 18, marginBottom: 16, fontWeight: 600, color: 'var(--ink)' }}>Coverage Coordinates</h4>
                 <ul style={{ listStyle: 'none', padding: 0, margin: 0, color: 'var(--ink-2)', fontSize: 15, display: 'flex', flexDirection: 'column', gap: 12 }}>
                    <li style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid rgba(0,0,0,0.05)', paddingBottom: 8 }}>
                       <span>Primary Locality</span> <strong>Philadelphia, PA</strong>
                    </li>
                    <li style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid rgba(0,0,0,0.05)', paddingBottom: 8 }}>
                       <span>Coordinates</span> <strong>39.9526° N, 75.1652° W</strong>
                    </li>
                    <li style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                       <span>Counties Served:</span>
                       <strong style={{ lineHeight: 1.4 }}>Philadelphia County, Montgomery County, Delaware County, Bucks County, Chester County</strong>
                    </li>
                 </ul>
              </div>
            </div>
            <div className="col-lg-7">
               <div style={{ width: '100%', height: '100%', minHeight: 450, borderRadius: 32, overflow: 'hidden', boxShadow: '0 24px 48px rgba(0,0,0,0.08)' }}>
                  <iframe 
                    width="100%" 
                    height="100%" 
                    style={{ minHeight: 450, filter: 'grayscale(0.2) contrast(1.1)' }}
                    src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Philadelphia,%20PA+(Telehealth%20FX%20Philadelphia)&amp;t=&amp;z=10&amp;ie=UTF8&amp;iwloc=B&amp;output=embed" 
                    frameBorder="0"
                    allowFullScreen>
                  </iframe>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section style={{ padding: 'clamp(80px, 10vw, 120px) 0', background: 'var(--brand)', color: '#fff', textAlign: 'center' }}>
         <div className="container" style={{ maxWidth: 800 }}>
            <h2 className="serif" style={{ fontSize: 'clamp(40px, 5vw, 56px)', marginBottom: 24, color: '#fff' }}>Ready to optimize your metabolic health?</h2>
            <p style={{ fontSize: 'clamp(18px, 2.5vw, 22px)', opacity: 0.9, marginBottom: 40, lineHeight: 1.6 }}>Join thousands of Pennsylvanians who have transitioned to clinical GLP-1 telehealth.</p>
            <a href={SEMAGLUTIDE_URL} style={{ 
               display: 'inline-block',
               background: '#fff', 
               color: 'var(--brand)', 
               fontSize: 20, 
               padding: '20px 48px', 
               fontWeight: 600,
               borderRadius: 100,
               textDecoration: 'none',
               boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
            }}>Check Your PA Eligibility Today</a>
         </div>
      </section>
    </div>
  );
}
