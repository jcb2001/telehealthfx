"use client";
import React from 'react';
import Image from 'next/image';
import { Icon } from './common.jsx';

const SEMAGLUTIDE_URL = "https://go.telehealthfx.com/start";

export function LocationNYC() {
  return (
    <>
      <section className="hero-section" style={{ position: 'relative', minHeight: '80vh', display: 'flex', alignItems: 'center', paddingTop: 120, overflow: 'hidden' }}>
        {/* Dark abstract NYC background */}
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, zIndex: -1, background: 'linear-gradient(to bottom, #0A0F0D 0%, #111A15 100%)' }}>
          <div style={{ position: 'absolute', top: '10%', right: '-10%', width: '60%', height: '80%', background: 'radial-gradient(circle, rgba(46, 74, 59, 0.15) 0%, transparent 70%)', filter: 'blur(60px)' }}></div>
        </div>

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="row align-items-center">
            <div className="col-lg-8">
              <div className="eyebrow" style={{ marginBottom: 24, color: '#FBF8F3', border: '1px solid rgba(251, 248, 243, 0.3)', display: 'inline-block', padding: '6px 16px', borderRadius: 100 }}>
                New York Telehealth Hub • Fully Licensed in NY
              </div>
              <h1 className="serif text-white" style={{ fontSize: 64, lineHeight: 1.2, marginBottom: 24 }}>
                Clinical GLP-1 Weight Loss in <br/>
                <span style={{ 
                  display: 'inline-block', 
                  background: '#2ECC71', 
                  color: '#0A0F0D', 
                  padding: '4px 20px', 
                  borderRadius: 12, 
                  marginTop: 12,
                  fontWeight: 600,
                  fontStyle: 'normal'
                }}>
                  New York City
                </span>
              </h1>
              <p className="text-white" style={{ fontSize: 20, opacity: 0.9, marginBottom: 40, maxWidth: 650, lineHeight: 1.6 }}>
                Skip the waitlists and premium markups at Manhattan and Brooklyn medical spas. Access U.S.-licensed, FDA-compliant compounded Semaglutide and Tirzepatide, prescribed by NY-licensed physicians and delivered directly to your apartment in all five boroughs.
              </p>
              
              <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
                <a href={SEMAGLUTIDE_URL} className="btn" style={{ background: '#FBF8F3', color: '#0A0F0D', fontSize: 18, padding: '16px 32px', fontWeight: 600 }}>
                  Check NY Eligibility
                </a>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: 24, marginTop: 48, opacity: 0.9 }}>
                 <div style={{ display: 'flex', alignItems: 'center', gap: 8, color: '#fff' }}>
                    <Icon.Check size={18} color="#FBF8F3" />
                    <span style={{ fontSize: 14, fontWeight: 500 }}>NY Board of Medicine Compliant</span>
                 </div>
                 <div style={{ display: 'flex', alignItems: 'center', gap: 8, color: '#fff' }}>
                    <Icon.Check size={18} color="#FBF8F3" />
                    <span style={{ fontSize: 14, fontWeight: 500 }}>Overnight Cold-Pack Shipping to NY</span>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Deep Local Health Data */}
      <section className="section" style={{ background: '#FFFDF9', borderBottom: '1px solid var(--line-soft)' }}>
        <div className="container">
           <div className="row">
              <div className="col-lg-6">
                 <h2 className="serif" style={{ fontSize: 40, marginBottom: 24 }}>Metabolic Health in the Five Boroughs</h2>
                 <p style={{ fontSize: 18, color: 'var(--ink-2)', marginBottom: 24 }}>
                    Navigating metabolic health in New York City presents a unique set of challenges. While the city offers access to premium fitness infrastructure like Equinox and Chelsea Piers, the high-stress, fast-paced lifestyle, combined with the ubiquity of high-calorie delivery apps, severely impacts metabolic baselines.
                 </p>
                 <p style={{ fontSize: 18, color: 'var(--ink-2)', marginBottom: 32 }}>
                    According to recent New York City Department of Health data, over 50% of adult New Yorkers are considered overweight or obese, with rising rates of insulin resistance across Staten Island, the Bronx, and Queens. For many New Yorkers, traditional diet and exercise protocols hit a physiological wall due to elevated cortisol from the city's demanding environment.
                 </p>
                 <a href="/blog/ozempic-insulin-resistance" style={{ color: 'var(--brand)', textDecoration: 'underline', fontWeight: 500 }}>Read our clinical guide on breaking insulin resistance &rarr;</a>
              </div>
              <div className="col-lg-5 offset-lg-1">
                 <div style={{ background: '#fff', padding: 40, borderRadius: 16, border: '1px solid var(--line-soft)', boxShadow: '0 4px 20px rgba(0,0,0,0.03)' }}>
                    <h3 className="serif" style={{ fontSize: 24, marginBottom: 20 }}>Borough Coverage</h3>
                    <p style={{ color: 'var(--ink-2)', marginBottom: 20 }}>Our 503A compounding partners legally ship to residential and commercial addresses across all of NYC, including:</p>
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                       <li style={{ display: 'flex', alignItems: 'center', gap: 8, color: 'var(--ink)' }}>
                          <div style={{ width: 6, height: 6, background: 'var(--brand)', borderRadius: '50%' }}></div> Manhattan
                       </li>
                       <li style={{ display: 'flex', alignItems: 'center', gap: 8, color: 'var(--ink)' }}>
                          <div style={{ width: 6, height: 6, background: 'var(--brand)', borderRadius: '50%' }}></div> Brooklyn
                       </li>
                       <li style={{ display: 'flex', alignItems: 'center', gap: 8, color: 'var(--ink)' }}>
                          <div style={{ width: 6, height: 6, background: 'var(--brand)', borderRadius: '50%' }}></div> Queens
                       </li>
                       <li style={{ display: 'flex', alignItems: 'center', gap: 8, color: 'var(--ink)' }}>
                          <div style={{ width: 6, height: 6, background: 'var(--brand)', borderRadius: '50%' }}></div> The Bronx
                       </li>
                       <li style={{ display: 'flex', alignItems: 'center', gap: 8, color: 'var(--ink)' }}>
                          <div style={{ width: 6, height: 6, background: 'var(--brand)', borderRadius: '50%' }}></div> Staten Island
                       </li>
                       <li style={{ display: 'flex', alignItems: 'center', gap: 8, color: 'var(--ink)' }}>
                          <div style={{ width: 6, height: 6, background: 'var(--brand)', borderRadius: '50%' }}></div> Long Island
                       </li>
                    </ul>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* The Local Arbitrage Section */}
      <section className="section" style={{ background: '#FFFDF9' }}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10 text-center">
              <h2 className="serif" style={{ fontSize: 48, marginBottom: 24 }}>The NYC Cost Arbitrage</h2>
              <p style={{ fontSize: 18, color: 'var(--ink-2)', marginBottom: 60, maxWidth: 800, margin: '0 auto 60px' }}>
                The physical commercial real estate of a medical clinic in New York City is incredibly expensive. Those overhead costs are passed directly to the patient in the form of massive markups on GLP-1 medications. By utilizing decentralized telehealth, you pay strictly for the clinical care and the medication—nothing else.
              </p>

              <div className="row g-4 text-start">
                <div className="col-md-6">
                  <div className="card" style={{ padding: 40, height: '100%', borderColor: 'rgba(0,0,0,0.1)', background: '#fff' }}>
                    <div style={{ color: 'var(--ink-3)', fontWeight: 600, letterSpacing: 1, fontSize: 13, textTransform: 'uppercase', marginBottom: 16 }}>The Traditional Route</div>
                    <h3 className="serif" style={{ fontSize: 28, marginBottom: 16 }}>Manhattan MedSpas</h3>
                    <p style={{ color: 'var(--ink-2)', marginBottom: 24 }}>
                      Visiting a boutique anti-aging clinic or medical spa in SoHo, Tribeca, or the Upper East Side requires paying a massive premium for the zip code.
                    </p>
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 12 }}>
                      <li style={{ display: 'flex', alignItems: 'center', gap: 12, color: 'var(--ink-2)' }}>
                        <span style={{ fontSize: 20, color: '#e74c3c' }}>✕</span>
                        <span>Average Cost: <strong>$600 - $900 / month</strong></span>
                      </li>
                      <li style={{ display: 'flex', alignItems: 'center', gap: 12, color: 'var(--ink-2)' }}>
                        <span style={{ fontSize: 20, color: '#e74c3c' }}>✕</span>
                        <span>Requires mandatory in-person consultations</span>
                      </li>
                      <li style={{ display: 'flex', alignItems: 'center', gap: 12, color: 'var(--ink-2)' }}>
                        <span style={{ fontSize: 20, color: '#e74c3c' }}>✕</span>
                        <span>Often charge hidden "membership" or bloodwork fees</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="card" style={{ padding: 40, height: '100%', borderColor: 'var(--brand)', background: 'rgba(46, 74, 59, 0.03)' }}>
                    <div style={{ color: 'var(--brand)', fontWeight: 600, letterSpacing: 1, fontSize: 13, textTransform: 'uppercase', marginBottom: 16 }}>The TelehealthFX Route</div>
                    <h3 className="serif" style={{ fontSize: 28, marginBottom: 16 }}>Direct-to-Patient Care</h3>
                    <p style={{ color: 'var(--ink-2)', marginBottom: 24 }}>
                      Access the exact same active pharmaceutical ingredients (Semaglutide or Tirzepatide) prescribed by licensed clinicians, with zero real estate markups.
                    </p>
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 12 }}>
                      <li style={{ display: 'flex', alignItems: 'center', gap: 12, color: 'var(--ink-2)' }}>
                        <Icon.Check size={20} color="var(--brand)" />
                        <span>Cost: <strong>From $146 / month</strong></span>
                      </li>
                      <li style={{ display: 'flex', alignItems: 'center', gap: 12, color: 'var(--ink-2)' }}>
                        <Icon.Check size={20} color="var(--brand)" />
                        <span>100% online asynchronous intake (No waiting rooms)</span>
                      </li>
                      <li style={{ display: 'flex', alignItems: 'center', gap: 12, color: 'var(--ink-2)' }}>
                        <Icon.Check size={20} color="var(--brand)" />
                        <span>Medication shipped overnight in cold-packs to your apartment</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The No Commute Value Prop */}
      <section className="section" style={{ borderTop: '1px solid var(--line-soft)', borderBottom: '1px solid var(--line-soft)' }}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5">
              <h2 className="serif" style={{ fontSize: 40, marginBottom: 24 }}>Bypass the MTA and the Waiting Room</h2>
              <p style={{ fontSize: 18, color: 'var(--ink-2)', marginBottom: 24 }}>
                Whether you're commuting from Williamsburg, Astoria, or deep in Midtown, scheduling time off work to sit in a doctor's waiting room for a 5-minute prescription refill is an outdated model. 
              </p>
              <p style={{ fontSize: 18, color: 'var(--ink-2)', marginBottom: 32 }}>
                Our partner network utilizes secure, HIPAA-compliant asynchronous telehealth. Complete your medical intake from your phone while riding the subway or sitting in your apartment. Your assigned New York-licensed physician will review your metabolic profile and approve your prescription within 24 hours.
              </p>
              <a href={SEMAGLUTIDE_URL} className="btn btn-primary">Start Your Online Intake</a>
            </div>
            <div className="col-lg-6 offset-lg-1">
               <div style={{ background: 'var(--surface-2)', padding: 40, borderRadius: 16, border: '1px solid var(--line-soft)' }}>
                  <h3 className="serif" style={{ fontSize: 24, marginBottom: 20 }}>New York Pharmacy Compliance</h3>
                  <p style={{ color: 'var(--ink-2)', marginBottom: 16 }}>
                    New York State has strict regulations regarding telehealth and prescription medications. Telehealth FX only partners with providers who operate in strict compliance with the <strong>New York State Office of the Professions</strong> and the <strong>Department of Health</strong>.
                  </p>
                  <p style={{ color: 'var(--ink-2)', marginBottom: 0 }}>
                    All medications are compounded in U.S.-based, FDA-registered 503A or 503B facilities that are legally authorized to dispense and ship prescription therapeutics into New York State.
                  </p>
               </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CONTENT GAP 1: The Local Pharmacy Shortage (Real-time utility) */}
      <section className="section" style={{ background: '#0A0F0D', color: '#fff' }}>
        <div className="container">
           <div className="row">
              <div className="col-lg-12">
                 <div className="eyebrow" style={{ color: 'var(--brand-soft)', border: '1px solid rgba(196, 209, 196, 0.2)', marginBottom: 24, display: 'inline-block', padding: '6px 16px', borderRadius: 100 }}>
                    NYC Supply Chain Update
                 </div>
                 <h2 className="serif" style={{ fontSize: 40, marginBottom: 32 }}>Bypass the Duane Reade & CVS Shortages</h2>
              </div>
           </div>
           <div className="row g-5">
              <div className="col-lg-6">
                 <p style={{ fontSize: 18, opacity: 0.8, marginBottom: 24 }}>
                    If you have tried to fill a prescription for branded Wegovy or Zepbound at a local Duane Reade, CVS, or independent pharmacy in Manhattan or Brooklyn recently, you already know the reality: <strong>the medications are on indefinite national backorder.</strong>
                 </p>
                 <p style={{ fontSize: 18, opacity: 0.8, marginBottom: 24 }}>
                    New Yorkers are spending hours calling dozens of pharmacies across the boroughs, only to be placed on 6-month waitlists. Our compounding model completely bypasses the retail pharmacy supply chain collapse.
                 </p>
              </div>
              <div className="col-lg-6">
                 <div style={{ background: 'rgba(255,255,255,0.05)', padding: 32, borderRadius: 16, border: '1px solid rgba(255,255,255,0.1)' }}>
                    <h3 className="serif" style={{ fontSize: 24, marginBottom: 16 }}>The 503A Compounding Solution</h3>
                    <p style={{ opacity: 0.8, marginBottom: 0 }}>
                       Because our partner network utilizes dedicated FDA-registered 503A compounding pharmacies, the active pharmaceutical ingredient (API) is sourced and formulated specifically for you upon prescription. There are <strong>zero waitlists</strong> and <strong>zero out-of-stock delays</strong>. Your medication is shipped overnight in temperature-controlled packaging directly to your NY address.
                    </p>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* CONTENT GAP 2: Hospital Waitlists & Insurance Reality */}
      <section className="section" style={{ background: '#FFFDF9' }}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h2 className="serif" style={{ fontSize: 40, marginBottom: 24 }}>The Reality of NYC Hospital Waitlists & Insurance</h2>
              <p style={{ fontSize: 18, color: 'var(--ink-2)', marginBottom: 24 }}>
                Getting an appointment at a dedicated metabolic or bariatric center at major hospital networks like <strong>NYU Langone</strong>, <strong>Mount Sinai</strong>, or <strong>NewYork-Presbyterian</strong> can take upwards of 4 to 6 months. 
              </p>
              <p style={{ fontSize: 18, color: 'var(--ink-2)', marginBottom: 24 }}>
                Even if you secure an appointment, New York health insurance plans (including specific Empire BlueCross BlueShield, Fidelis, and MetroPlus plans) frequently deny prior authorizations for GLP-1 medications unless you have advanced Type 2 Diabetes, leaving patients with $1,300/month out-of-pocket bills for branded drugs.
              </p>
              <h3 style={{ fontSize: 20, marginBottom: 16, fontWeight: 600 }}>The Telehealth FX HSA/FSA Advantage</h3>
              <p style={{ fontSize: 18, color: 'var(--ink-2)', marginBottom: 0 }}>
                Our partners operate strictly on a direct-pay model ($146/mo), eliminating the need for complex prior authorizations. While commercial insurance does not cover compounded medications, our network <strong>fully accepts HSA and FSA cards</strong>, allowing you to use pre-tax dollars for your entire clinical protocol.
              </p>
            </div>
            <div className="col-lg-5 offset-lg-1">
               <div style={{ background: 'var(--surface-2)', padding: 40, borderRadius: 16, border: '1px solid var(--line-soft)', marginTop: { xs: 40, lg: 0 } }}>
                  <h3 className="serif" style={{ fontSize: 24, marginBottom: 20 }}>Local Patient Journey</h3>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 24 }}>
                     <li style={{ display: 'flex', gap: 16 }}>
                        <div style={{ width: 32, height: 32, background: 'var(--brand)', color: '#fff', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', flexShrink: 0 }}>1</div>
                        <div>
                           <strong style={{ display: 'block', marginBottom: 4 }}>Complete NY Intake</strong>
                           <span style={{ color: 'var(--ink-2)', fontSize: 14 }}>Fill out your health profile online. No MTA commute or waiting rooms required.</span>
                        </div>
                     </li>
                     <li style={{ display: 'flex', gap: 16 }}>
                        <div style={{ width: 32, height: 32, background: 'var(--brand)', color: '#fff', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', flexShrink: 0 }}>2</div>
                        <div>
                           <strong style={{ display: 'block', marginBottom: 4 }}>Physician Review</strong>
                           <span style={{ color: 'var(--ink-2)', fontSize: 14 }}>A licensed New York State physician reviews your chart and approves your script within 24 hours.</span>
                        </div>
                     </li>
                     <li style={{ display: 'flex', gap: 16 }}>
                        <div style={{ width: 32, height: 32, background: 'var(--brand)', color: '#fff', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', flexShrink: 0 }}>3</div>
                        <div>
                           <strong style={{ display: 'block', marginBottom: 4 }}>Overnight Delivery</strong>
                           <span style={{ color: 'var(--ink-2)', fontSize: 14 }}>Medication is compounded and shipped cold-packed straight to your apartment or doorman.</span>
                        </div>
                     </li>
                  </ul>
               </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Local SEO: Google Map & Service Area Signals */}
      <section className="section" style={{ background: '#FFFDF9', borderTop: '1px solid var(--line-soft)' }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <h2 className="serif" style={{ fontSize: 40, marginBottom: 24 }}>New York City Service Area</h2>
              <p style={{ fontSize: 18, color: 'var(--ink-2)', marginBottom: 24 }}>
                Telehealth FX provides asynchronous medical weight loss and GLP-1 prescribing services to all permanent residents and professionals operating within the five boroughs of New York City.
              </p>
              <div style={{ background: '#fff', padding: 24, borderRadius: 12, border: '1px solid var(--line-soft)', marginBottom: 24 }}>
                 <h4 style={{ fontSize: 16, marginBottom: 12, fontWeight: 600 }}>Coverage Coordinates</h4>
                 <ul style={{ listStyle: 'none', padding: 0, margin: 0, color: 'var(--ink-2)', fontSize: 14, display: 'flex', flexDirection: 'column', gap: 8 }}>
                    <li><strong>Primary Locality:</strong> New York, NY, USA</li>
                    <li><strong>Latitude / Longitude:</strong> 40.7128° N, 74.0060° W</li>
                    <li><strong>Counties Served:</strong> New York (Manhattan), Kings (Brooklyn), Queens, Bronx, Richmond (Staten Island)</li>
                 </ul>
              </div>
            </div>
            <div className="col-lg-6">
               <div style={{ width: '100%', height: '100%', minHeight: 350, borderRadius: 16, overflow: 'hidden', border: '1px solid var(--line-soft)', boxShadow: '0 8px 30px rgba(0,0,0,0.05)' }}>
                  <iframe 
                    width="100%" 
                    height="100%" 
                    style={{ minHeight: 350 }}
                    src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=New%20York,%20NY+(Telehealth%20FX%20New%20York)&amp;t=&amp;z=10&amp;ie=UTF8&amp;iwloc=B&amp;output=embed" 
                    frameBorder="0"
                    allowFullScreen>
                  </iframe>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Re-use standard FAQ/Clinical Funnel */}
      <section className="section" style={{ background: '#0A0F0D', color: '#fff' }}>
         <div className="container text-center" style={{ maxWidth: 800 }}>
            <h2 className="serif" style={{ fontSize: 40, marginBottom: 24 }}>Ready to optimize your metabolic health?</h2>
            <p style={{ fontSize: 18, opacity: 0.8, marginBottom: 40 }}>Join thousands of New Yorkers who have transitioned to clinical GLP-1 telehealth.</p>
            <a href={SEMAGLUTIDE_URL} className="btn" style={{ background: '#FBF8F3', color: '#0A0F0D', fontSize: 20, padding: '16px 40px', fontWeight: 600 }}>Check Your NY Eligibility Today</a>
         </div>
      </section>
    </>
  );
}
