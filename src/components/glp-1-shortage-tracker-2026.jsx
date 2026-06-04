"use client";
import React from 'react';
import Image from 'next/image';
import { Icon } from './common.jsx';

const S = "https://go.telehealthfx.com/weight-loss";

function Glp1ShortageTracker2026() {
  return (
    <>
      <section className="section section-lg bg-dark pt-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="text-center mb-5">
                <span className="badge badge-primary badge-pill mb-3">Live Update: 2026</span>
                <h1 className="display-3 text-white mb-4">
                  The 2026 GLP-1 Shortage Tracker: <span className="text-primary">Why You Still Can't Find Your Medication</span>
                </h1>
                <p className="lead text-light mb-4">
                  The FDA has officially declared the Semaglutide and Tirzepatide shortages "resolved." So why is your local pharmacy still out of stock? Welcome to the 2026 Ghost Shortage.
                </p>
                <div className="d-flex justify-content-center align-items-center mb-5">
                  <Image src="/assets/julian_mercer.jpg" alt="Julian Mercer" width={40} height={40} className="rounded-circle mr-3" />
                  <div className="text-left">
                    <h6 className="text-white mb-0">Julian Mercer</h6>
                    <small className="text-muted">Lead Bio-Systems Analyst | Medically Reviewed</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="card bg-darker border-primary mb-5 shadow-lg">
                <div className="card-body p-0">
                  <Image 
                    src="/assets/glp1_shortage_tracker.png" 
                    alt="2026 GLP-1 Pharmaceutical Supply Chain Tracker Dashboard showing resolved status vs low local availability" 
                    width={1200} 
                    height={675} 
                    className="img-fluid rounded"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-dark pb-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="content-block text-light text-lg">
                
                <h2 className="text-white mb-4">The "Ghost Shortage" Explained</h2>
                <p>
                  If you're trying to fill a prescription for Wegovy, Ozempic, or Zepbound in 2026, you're likely facing a frustrating paradox. According to the FDA's official drug shortage database, the monumental shortages of Semaglutide (the active ingredient in Wegovy and Ozempic) and Tirzepatide (Zepbound and Mounjaro) have been officially resolved.
                </p>
                <p>
                  However, millions of patients are discovering that "resolved on paper" does not mean "available at the pharmacy counter."
                </p>
                <p>
                  We call this the <strong>Ghost Shortage</strong>. While the primary manufacturers (Novo Nordisk and Eli Lilly) are producing enough active pharmaceutical ingredients (API) to satisfy the FDA's macro-level supply requirements, severe bottlenecks in the final stages of manufacturing—specifically, the glass injector pens—continue to cripple local supply chains.
                </p>

                <div className="alert alert-primary bg-darker border-primary text-light mt-5 mb-5 p-4 rounded shadow">
                  <h4 className="text-white d-flex align-items-center">
                    <span className="text-primary mr-2" style={{ display: 'inline-flex', alignItems: 'center' }}>
                      <Icon.Syringe size={24} />
                    </span>
                    Live FDA Status (As of Q2 2026)
                  </h4>
                  <ul className="list-unstyled mb-0 mt-3">
                    <li className="mb-2 d-flex justify-content-between align-items-center border-bottom border-secondary pb-2">
                      <strong>Semaglutide (Ozempic/Wegovy):</strong>
                      <span className="badge badge-success px-3 py-2">FDA Status: RESOLVED</span>
                    </li>
                    <li className="mb-2 d-flex justify-content-between align-items-center border-bottom border-secondary pb-2">
                      <strong>Tirzepatide (Mounjaro/Zepbound):</strong>
                      <span className="badge badge-success px-3 py-2">FDA Status: RESOLVED</span>
                    </li>
                    <li className="mb-2 d-flex justify-content-between align-items-center border-bottom border-secondary pb-2">
                      <strong>Liraglutide (Victoza/Saxenda):</strong>
                      <span className="badge badge-warning px-3 py-2 text-dark">FDA Status: LIMITED AVAILABILITY</span>
                    </li>
                    <li className="d-flex justify-content-between align-items-center pt-2">
                      <strong>Local Pharmacy Stock (All GLP-1s):</strong>
                      <span className="badge badge-danger px-3 py-2">Status: SEVERE BACKORDERS</span>
                    </li>
                  </ul>
                </div>

                <h3 className="text-white mb-4">Why Local Pharmacies Are Still Out of Stock</h3>
                <p>
                  There are three primary reasons why you can't get your medication, despite the FDA's optimistic reporting:
                </p>
                <ol className="pl-4 mb-5">
                  <li className="mb-3"><strong>The Injector Pen Bottleneck:</strong> The medication itself exists in vast vats, but assembling the complex, single-use auto-injector pens is a slow, highly specialized process. The global supply of medical-grade glass and assembly capacity cannot meet the explosive demand.</li>
                  <li className="mb-3"><strong>Uneven Distribution:</strong> Mega-pharmacy chains and massive metropolitan hospitals receive priority distribution, leaving independent pharmacies, suburban clinics, and rural areas completely dry.</li>
                  <li className="mb-3"><strong>The Hoarding Effect:</strong> Because patients have experienced traumatic supply disruptions in the past, they are filling prescriptions immediately when due, and in some cases, stockpiling via multiple providers, further straining the fragile local supply.</li>
                </ol>

                <h2 className="text-white mb-4">The 503A Compounding Solution</h2>
                <p>
                  When the FDA officially resolved the shortage, it sent shockwaves through the compounding industry. Under federal law, 503A and 503B compounding pharmacies are generally prohibited from making "essentially copies" of commercially available, FDA-approved drugs unless the drug is on the official FDA shortage list.
                </p>
                <p>
                  Many patients panicked, assuming they would instantly lose access to their affordable compounded Semaglutide and Tirzepatide.
                </p>
                
                <h4 className="text-white mt-4 mb-3">Why You Can Still Get Compounded GLP-1s</h4>
                <p>
                  The reality is far more nuanced. While the "shortage loophole" has closed, 503A compounding pharmacies are legally permitted to compound medications if they produce a <strong>patient-specific formulation</strong> that offers a clinical difference not available in the commercial product.
                </p>
                <p>
                  This is why elite telehealth providers continue to offer compounded GLP-1s legally and safely. By compounding pure, pharmaceutical-grade Semaglutide or Tirzepatide with essential additives—like <strong>Vitamin B12 (Cyanocobalamin) or L-Carnitine</strong>—the medication is clinically altered to reduce side effects like nausea and fatigue. 
                </p>
                <p>
                  Because Novo Nordisk and Eli Lilly do not offer a commercial GLP-1 combined with Vitamin B12, this patient-specific formulation is completely legal, highly effective, and entirely immune to the auto-injector pen shortage (as it is provided in sterile vials with ultra-fine insulin syringes).
                </p>

                <div className="card bg-primary text-white border-0 mt-5 mb-5 shadow-lg transform-hover">
                  <div className="card-body p-5 text-center">
                    <h3 className="text-white mb-3">Tired of Calling Every Pharmacy in Town?</h3>
                    <p className="lead mb-4">
                      Bypass the Ghost Shortage completely. Telehealth FX connects you with premium 503A pharmacies providing patient-specific compounded GLP-1s—shipped directly to your door, reliably, every month.
                    </p>
                    <a href={S} className="btn btn-white btn-lg text-primary font-weight-bold px-5 py-3 rounded-pill">
                      Check Availability & See If You Qualify
                    </a>
                  </div>
                </div>

                <h2 className="text-white mb-4">Frequently Asked Questions (2026 Shortage Update)</h2>
                
                <div className="accordion mt-4" id="faqAccordion">
                  <div className="card bg-darker border-secondary mb-3">
                    <div className="card-header border-0" id="headingOne">
                      <h5 className="mb-0">
                        <button className="btn btn-link text-white text-left font-weight-bold w-100 text-decoration-none" type="button" data-toggle="collapse" data-target="#collapseOne">
                          Is the FDA Semaglutide shortage resolved?
                        </button>
                      </h5>
                    </div>
                    <div id="collapseOne" className="collapse show" data-parent="#faqAccordion">
                      <div className="card-body text-light pt-0">
                        Yes. Officially, the FDA removed Semaglutide (Wegovy and Ozempic) from the national drug shortage list in late 2025/early 2026. However, regional supply chain issues and backorders at local pharmacies persist, making the drug practically unavailable for many patients.
                      </div>
                    </div>
                  </div>

                  <div className="card bg-darker border-secondary mb-3">
                    <div className="card-header border-0" id="headingTwo">
                      <h5 className="mb-0">
                        <button className="btn btn-link text-white text-left font-weight-bold w-100 text-decoration-none collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo">
                          Are compounded GLP-1s illegal now?
                        </button>
                      </h5>
                    </div>
                    <div id="collapseTwo" className="collapse" data-parent="#faqAccordion">
                      <div className="card-body text-light pt-0">
                        No. While pharmacies can no longer mass-produce exact copies of commercial GLP-1s under the "shortage exemption," 503A compounding pharmacies can still legally formulate patient-specific prescriptions. These often include beneficial additions like Vitamin B12 to reduce nausea, making them distinct from the commercial brand and legally compliant.
                      </div>
                    </div>
                  </div>

                  <div className="card bg-darker border-secondary mb-3">
                    <div className="card-header border-0" id="headingThree">
                      <h5 className="mb-0">
                        <button className="btn btn-link text-white text-left font-weight-bold w-100 text-decoration-none collapsed" type="button" data-toggle="collapse" data-target="#collapseThree">
                          When will local pharmacies have Zepbound and Wegovy consistently in stock?
                        </button>
                      </h5>
                    </div>
                    <div id="collapseThree" className="collapse" data-parent="#faqAccordion">
                      <div className="card-body text-light pt-0">
                        Industry analysts predict that the auto-injector pen bottleneck will not be fully resolved until new manufacturing facilities come online in late 2026 or early 2027. Until then, local availability will remain highly unpredictable.
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Glp1ShortageTracker2026;
