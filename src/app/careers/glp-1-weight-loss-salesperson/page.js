'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { JobApplicationModal } from '../../../components/job-application-modal';

export default function GLP1SalespersonJobPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [applicationState, setApplicationState] = useState(null);

  React.useEffect(() => {
    try {
      const saved = localStorage.getItem('thfx_applied_salesperson');
      if (saved) {
        setApplicationState(JSON.parse(saved));
      }
    } catch (e) {}
  }, []);

  const handleApplied = (data) => {
    setApplicationState(data);
    try {
      localStorage.setItem('thfx_applied_salesperson', JSON.stringify(data));
    } catch (e) {}
  };

  const jobSchema = {
    "@context": "https://schema.org/",
    "@type": "JobPosting",
    "title": "GLP-1 Weight Loss Salesperson",
    "description": `Telehealth FX is seeking a high-performing, empathetic, and revenue-driven GLP-1 Weight Loss Salesperson to join our rapidly growing remote patient acquisition team. As a GLP-1 Weight Loss Salesperson, you will serve as the front-line brand ambassador and clinical sales specialist for individuals seeking transformative metabolic weight loss solutions, including Semaglutide and Tirzepatide protocols. You will convert high-intent inbound inquiries, guide prospective patients through telehealth intake expectations, address clinical and pricing questions with transparency, and drive long-term patient subscription retention. This is a full-time, 100% remote position offering a competitive base salary with an uncapped tiered commission structure and realistic OTE of $65,000 to $140,000+.`,
    "identifier": {
      "@type": "PropertyValue",
      "name": "Telehealth FX",
      "value": "THFX-JOB-GLP1-SALES-2026"
    },
    "datePosted": "2026-07-01",
    "validThrough": "2026-12-31",
    "employmentType": "FULL_TIME",
    "hiringOrganization": {
      "@type": "Organization",
      "name": "Telehealth FX",
      "sameAs": "https://telehealthfx.com",
      "logo": "https://telehealthfx.com/assets/Site%20Icon-modified.png"
    },
    "jobLocation": {
      "@type": "Place",
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "US"
      }
    },
    "jobLocationType": "TELECOMMUTE",
    "applicantLocationRequirements": {
      "@type": "Country",
      "name": "United States"
    },
    "baseSalary": {
      "@type": "MonetaryAmount",
      "currency": "USD",
      "value": {
        "@type": "QuantitativeValue",
        "minValue": 65000,
        "maxValue": 140000,
        "unitText": "YEAR"
      }
    },
    "responsibilities": [
      "Conduct high-volume inbound consultations with prospective GLP-1 weight loss patients",
      "Educate prospective patients on Semaglutide and Tirzepatide treatment pathways, pricing, and clinical workflow",
      "Overcome customer objections with consultative selling, empathy, and active listening",
      "Manage sales pipeline efficiently in CRM (Salesforce / HubSpot) to ensure fast follow-up",
      "Maintain strict adherence to HIPAA guidelines and ethical telehealth consultation practices",
      "Collaborate with clinical care coordinators to ensure seamless onboarding after purchase"
    ],
    "skills": [
      "Consultative Sales",
      "Inbound Telehealth Lead Conversion",
      "GLP-1 Metabolic Health Knowledge",
      "CRM Pipeline Management",
      "Empathy & Active Listening",
      "Objection Handling"
    ],
    "qualifications": "Minimum 3 years of successful sales experience in telehealth, medical weight loss, SaaS, or high-ticket consumer services with proven track record of meeting or exceeding quotas.",
    "directApply": true
  };

  return (
    <>
      {/* Schema.org JobPosting insertion */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jobSchema) }}
      />

      {/* Persistent Applied Redirect Top Notification Bar */}
      {applicationState && (
        <div className="applied-top-banner">
          <div className="container flex-between">
            <div className="banner-left">
              <span className="pulse-green-dot"></span>
              <span>
                <strong>Application Status: SUBMITTED</strong> • Ref Code: <strong className="mono">{applicationState.refNumber}</strong> for <strong>{applicationState.fullName}</strong>
              </span>
            </div>
            <button className="banner-btn" onClick={() => setIsModalOpen(true)}>
              View Status / Receipt Details ➔
            </button>
          </div>
        </div>
      )}

      <div className="job-page-wrapper">
        {/* Top Breadcrumbs */}
        <div className="container" style={{ paddingTop: 24, paddingBottom: 16 }}>
          <div className="breadcrumbs">
            <Link href="/">Home</Link>
            <span className="sep">/</span>
            <Link href="/careers">Careers</Link>
            <span className="sep">/</span>
            <span className="current">GLP-1 Weight Loss Salesperson</span>
          </div>
        </div>

        {/* Hero Section */}
        <section className="job-hero">
          <div className="container">
            <div className="hero-content">
              
              {applicationState ? (
                /* Redirect State Hero Confirmation Card */
                <div className="applied-hero-card">
                  <div className="applied-card-badge">
                    <span className="badge-icon">✅</span>
                    <span>APPLICATION SUBMITTED & RECEIVED</span>
                  </div>
                  <h1 className="job-hero-title serif" style={{ fontSize: 36, marginBottom: 12 }}>
                    Thank you for applying, {applicationState.fullName}!
                  </h1>
                  <p className="job-hero-subtitle" style={{ fontSize: 16, marginBottom: 24 }}>
                    Your application for <strong>GLP-1 Weight Loss Salesperson</strong> is complete and registered in our recruiting system. Our Talent Acquisition team will review your profile within 24-48 business hours.
                  </p>

                  <div className="applied-meta-grid">
                    <div className="meta-box">
                      <div className="meta-box-lbl">APPLICATION REF</div>
                      <div className="meta-box-val mono" style={{ color: 'var(--brand)', fontWeight: 700 }}>
                        {applicationState.refNumber}
                      </div>
                    </div>

                    <div className="meta-box">
                      <div className="meta-box-lbl">CANDIDATE EMAIL</div>
                      <div className="meta-box-val">
                        {applicationState.email}
                      </div>
                    </div>

                    <div className="meta-box">
                      <div className="meta-box-lbl">APPLICATION STATUS</div>
                      <div className="meta-box-val status-green">
                        ● Under Review (24-48 hrs)
                      </div>
                    </div>
                  </div>

                  <div className="applied-actions-row">
                    <button 
                      className="btn btn-primary"
                      onClick={() => setIsModalOpen(true)}
                    >
                      View Receipt Details ➔
                    </button>
                    <Link href="/careers" className="btn btn-secondary">
                      View Other Open Roles
                    </Link>
                  </div>
                </div>
              ) : (
                /* Default Hero Content */
                <>
                  <div className="pill pill-brand" style={{ marginBottom: 16 }}>
                    <span className="pill-dot" />
                    <span>NOW HIRING • 100% REMOTE (US)</span>
                  </div>
                  <h1 className="job-hero-title serif">
                    GLP-1 Weight Loss Salesperson
                  </h1>
                  <p className="job-hero-subtitle">
                    Join Telehealth FX’s fast-scaling clinical sales team. Help thousands of patients reset their metabolic health with Semaglutide & Tirzepatide while earning uncapped commissions.
                  </p>

                  {/* Quick Spec Badges */}
                  <div className="spec-badges-grid">
                    <div className="spec-badge-card">
                      <div className="spec-icon">💰</div>
                      <div>
                        <div className="spec-label">Compensation</div>
                        <div className="spec-value">$65k - $140k+ OTE</div>
                      </div>
                    </div>

                    <div className="spec-badge-card">
                      <div className="spec-icon">📍</div>
                      <div>
                        <div className="spec-label">Location</div>
                        <div className="spec-value">100% Remote (United States)</div>
                      </div>
                    </div>

                    <div className="spec-badge-card">
                      <div className="spec-icon">⏰</div>
                      <div>
                        <div className="spec-label">Employment Type</div>
                        <div className="spec-value">Full-Time (40 hrs/wk)</div>
                      </div>
                    </div>

                    <div className="spec-badge-card">
                      <div className="spec-icon">🚀</div>
                      <div>
                        <div className="spec-label">Commission Structure</div>
                        <div className="spec-value">Base + Uncapped Tiered Bonuses</div>
                      </div>
                    </div>
                  </div>

                  {/* Apply Now Primary CTA */}
                  <div className="hero-cta-box">
                    <button 
                      className="btn btn-primary btn-lg"
                      onClick={() => setIsModalOpen(true)}
                    >
                      Apply Now with Resume Parser ➔
                    </button>
                    <span className="hero-cta-subtext">⚡ Takes less than 60 seconds with instant AI resume upload</span>
                  </div>
                </>
              )}

            </div>
          </div>
        </section>

        {/* Main Detailed Content Area (1000+ words) */}
        <section className="job-body-section section">
          <div className="container">
            <div className="job-layout-grid">
              
              {/* Main Content Column */}
              <div className="job-main-column">
                
                {/* 1. About Telehealth FX */}
                <div className="content-block">
                  <h2>About Telehealth FX & Our Metabolic Mission</h2>
                  <p>
                    Telehealth FX is a premier, nationwide digital health platform revolutionizing how Americans access evidence-based metabolic wellness and prescription weight management. Founded on the core principles of clinical rigor, transparent pricing, and friction-free patient care, Telehealth FX connects prospective patients directly with licensed healthcare providers to deliver personalized GLP-1 medications—including compounded Semaglutide and Tirzepatide—straight to their doorsteps with 24-hour turnaround times.
                  </p>
                  <p>
                    Over 70% of adults in the United States suffer from metabolic dysfunction, insulin resistance, or weight-related challenges. Traditional healthcare systems often subject patients to months of waitlists, confusing insurance denials, and inflated pharmacy costs. At Telehealth FX, we eliminate these barriers. By combining cutting-edge telemedicine software, expedited clinician reviews, transparent flat-rate subscriptions, and dedicated 1-on-1 coaching, we empower patients to achieve sustainable, lifelong weight loss without the traditional runaround.
                  </p>
                  <p>
                    As our patient base rapidly expands across all 50 states, we are looking for an ambitious, highly empathetic, and results-driven <strong>GLP-1 Weight Loss Salesperson</strong> to join our high-performing sales organization.
                  </p>
                </div>

                {/* 2. Position Overview & Strategic Impact */}
                <div className="content-block">
                  <h2>Position Overview & Strategic Impact</h2>
                  <p>
                    The <strong>GLP-1 Weight Loss Salesperson</strong> serves as the vital bridge between prospective patients seeking a health transformation and Telehealth FX's clinical protocols. In this role, you will be the first human point of contact for high-intent inbound leads who have requested information, completed an initial weight loss assessment, or expressed interest in Semaglutide and Tirzepatide therapies.
                  </p>
                  <p>
                    This is not a high-pressure cold calling job. You will handle warm, pre-qualified inbound phone calls, video consultations, and instant live-chat leads generated from our multi-channel marketing campaigns. Your primary goal is to conduct empathetic, consultative conversations: understanding the patient's weight loss history, answering key questions regarding medication safety, dosing escalation, and pricing, overcoming hesitations with clarity and confidence, and enrolling them into our monthly clinical membership programs.
                  </p>
                  <p>
                    Top performers in this role blend a deep consultative sales methodology with genuine human empathy. If you thrive in a fast-paced sales environment, possess strong active listening skills, and take pride in helping people change their lives for the better, this position offers an exceptional career opportunity with uncapped earning potential.
                  </p>
                </div>

                {/* 3. Detailed Responsibilities */}
                <div className="content-block">
                  <h2>Key Responsibilities & Daily Workflow</h2>
                  <p>
                    As a GLP-1 Weight Loss Salesperson at Telehealth FX, your daily responsibilities will include:
                  </p>
                  <ul className="styled-list">
                    <li>
                      <strong>Inbound Lead Conversion:</strong> Conduct 25 to 45 consultative phone and video consultations per day with warm prospective patients who have inquired about GLP-1 weight loss programs.
                    </li>
                    <li>
                      <strong>Patient Needs Analysis & Education:</strong> Actively listen to prospective patients' health goals, weight loss struggles, and past diet history. Articulate how GLP-1 receptor agonists (Semaglutide & Tirzepatide) work biologically to suppress food noise, slow gastric emptying, and improve insulin sensitivity.
                    </li>
                    <li>
                      <strong>Consultative Closing & Plan Selection:</strong> Guide patients toward the optimal membership tier based on their clinical goals, budget, and medication preference. Secure initial prescription order sign-ups and continuous subscription enrollments.
                    </li>
                    <li>
                      <strong>Objection Handling with Empathy:</strong> Address common patient concerns regarding self-injections, potential mild side effects (like nausea or fatigue), program safety, shipping timelines, and subscription flexibility using structured, reassuring frameworks.
                    </li>
                    <li>
                      <strong>CRM & Pipeline Optimization:</strong> Maintain flawless data integrity within Salesforce/HubSpot. Track lead statuses, schedule timely follow-ups with prospects awaiting medical intake approval, and manage pipeline movement to maximize conversion rates.
                    </li>
                    <li>
                      <strong>Cross-Functional Collaboration:</strong> Work closely with our licensed medical providers, compounding pharmacy partners, and patient success coordinators to ensure smooth transitions from completed sale to medication delivery.
                    </li>
                    <li>
                      <strong>Continuous Product & Regulatory Mastery:</strong> Stay up to date on GLP-1 clinical trial updates (e.g., STEP and SURMOUNT clinical trials), FDA compounding guidelines, competitor pricing, and Telehealth FX promotional campaigns.
                    </li>
                    <li>
                      <strong>Ethical Compliance & HIPAA Integrity:</strong> Adhere strictly to Telehealth FX compliance standards, medical disclaimer protocols, and HIPAA patient data protection policies at all times.
                    </li>
                  </ul>
                </div>

                {/* 4. Target Candidate Profile & Qualifications */}
                <div className="content-block">
                  <h2>Target Candidate Profile & Qualifications</h2>
                  <p>
                    We are seeking candidates who possess a winning sales mindset combined with deep emotional intelligence. We welcome applicants from telehealth, pharmaceutical sales, medical aesthetics, high-ticket consumer services, SaaS, or premium wellness industries.
                  </p>

                  <h3 className="subheading">Required Qualifications:</h3>
                  <ul className="styled-list">
                    <li><strong>Sales Experience:</strong> 3+ years of documented success in an inside sales, consultative closing, or account executive role (B2C sales, telehealth, medical spa, or high-ticket subscription sales preferred).</li>
                    <li><strong>Proven Closing Track Record:</strong> Consistent history of hitting or exceeding monthly sales quotas, conversion benchmarks, and revenue targets.</li>
                    <li><strong>Communication Excellence:</strong> Outstanding verbal, written, and interpersonal skills with an articulate, warm, and confident phone voice.</li>
                    <li><strong>Tech Savviness:</strong> Proficiency with modern CRM software (Salesforce, HubSpot, or Close.io), VOIP phone systems (Aircall, Dialpad), and web conferencing tools (Zoom, Slack).</li>
                    <li><strong>Remote Work Discipline:</strong> Self-motivated, highly organized, and able to maintain focused productivity in a quiet home office environment with high-speed internet.</li>
                    <li><strong>Adaptability & Resilience:</strong> Ability to thrive in a fast-growing, high-volume startup atmosphere with changing campaigns and continuous learning.</li>
                  </ul>

                  <h3 className="subheading">Preferred Qualifications (Plus Factors):</h3>
                  <ul className="styled-list">
                    <li>Prior experience selling GLP-1 weight loss programs, TRT, HRT, or elective medical procedures.</li>
                    <li>Basic understanding of metabolic health terminology, Semaglutide, Tirzepatide, and peptide therapies.</li>
                    <li>Bilingual capabilities (English / Spanish) are a strong plus.</li>
                  </ul>
                </div>

                {/* 5. Compensation, Commission & Perks */}
                <div className="content-block">
                  <h2>Compensation, Uncapped Commission & Benefits</h2>
                  <p>
                    At Telehealth FX, we believe top sales talent should be compensated exceptionally well. We offer a transparent, competitive compensation model that directly rewards your closing performance and patient retention.
                  </p>

                  <div className="comp-breakdown-card">
                    <div className="comp-row">
                      <div className="comp-title">Base Salary</div>
                      <div className="comp-detail">$45,000 - $55,000 / year (based on experience & background)</div>
                    </div>
                    <div className="comp-row">
                      <div className="comp-title">Uncapped Commission</div>
                      <div className="comp-detail">Tiered commission payout per enrolled patient + monthly retention recurring bonuses</div>
                    </div>
                    <div className="comp-row">
                      <div className="comp-title">Expected On-Target Earnings (OTE)</div>
                      <div className="comp-detail"><strong>$65,000 - $140,000+ per year</strong> (Top 10% producers earn $165k+)</div>
                    </div>
                    <div className="comp-row">
                      <div className="comp-title">Performance Bonuses</div>
                      <div className="comp-detail">Quarterly cash bonuses, top closer leaderboards, and annual company trips</div>
                    </div>
                  </div>

                  <h3 className="subheading">Full Employee Perks & Benefits Package:</h3>
                  <ul className="styled-list">
                    <li><strong>Comprehensive Health Coverage:</strong> Premium Medical, Dental, and Vision insurance plans with generous employer contribution.</li>
                    <li><strong>401(k) Retirement Plan:</strong> 401(k) retirement savings plan with 4% company matching.</li>
                    <li><strong>Complimentary Employee GLP-1 Benefit:</strong> Free or heavily discounted access to Telehealth FX metabolic health and weight loss programs for you and eligible immediate family members.</li>
                    <li><strong>Home Office Setup Stipend:</strong> $1,500 one-time stipend to outfit your remote workspace with modern hardware, monitors, and ergonomic seating.</li>
                    <li><strong>Paid Time Off (PTO):</strong> 15 days of flexible PTO + 8 paid national holidays + paid mental health wellness days.</li>
                    <li><strong>Paid Training & Certification:</strong> 2 weeks of fully paid intensive sales and GLP-1 clinical onboarding.</li>
                  </ul>
                </div>

                {/* 6. Step-by-Step Hiring Process */}
                <div className="content-block">
                  <h2>Our Hiring & Selection Process</h2>
                  <p>
                    We value your time and aim to make our hiring process swift, transparent, and engaging:
                  </p>
                  
                  <div className="hiring-timeline">
                    <div className="step-item">
                      <div className="step-num">1</div>
                      <div className="step-info">
                        <strong>Instant Application & Resume Parser Review:</strong> Apply online using our AI-assisted resume parser in under 60 seconds.
                      </div>
                    </div>
                    <div className="step-item">
                      <div className="step-num">2</div>
                      <div className="step-info">
                        <strong>20-Min Recruiter Screen:</strong> A brief video call to discuss your sales background, career aspirations, and salary expectations.
                      </div>
                    </div>
                    <div className="step-item">
                      <div className="step-num">3</div>
                      <div className="step-info">
                        <strong>Sales Roleplay & Case Study:</strong> A 45-minute practical interview with our Sales Director, featuring an interactive mock patient consultation roleplay.
                      </div>
                    </div>
                    <div className="step-item">
                      <div className="step-num">4</div>
                      <div className="step-info">
                        <strong>Executive Culture Chat & Offer:</strong> Meet a founding team member, review formal compensation details, and receive your official offer!
                      </div>
                    </div>
                  </div>
                </div>

                {/* 7. Culture, Diversity & EEO Statement */}
                <div className="content-block">
                  <h2>Life at Telehealth FX, Culture & Equal Opportunity</h2>
                  <p>
                    At Telehealth FX, we foster a high-octane, collaborative, and inclusive culture where curiosity and high performance thrive hand in hand. Though our team works remotely across the country, we stay connected through daily morning huddles, team goal challenges, virtual coffee breaks, and quarterly regional meetups.
                  </p>
                  <p>
                    Telehealth FX is an Equal Opportunity Employer. We celebrate diversity and are committed to creating an inclusive environment for all employees regardless of race, color, religion, sex, sexual orientation, gender identity, national origin, veteran status, disability, or age.
                  </p>
                </div>

                {/* Bottom Call to Action */}
                <div className="bottom-apply-box">
                  {applicationState ? (
                    <div>
                      <h3>Application Submitted!</h3>
                      <p>Your profile (Ref: <strong>{applicationState.refNumber}</strong>) is currently being processed by Telehealth FX Talent Acquisition.</p>
                      <button className="btn btn-secondary btn-lg" onClick={() => setIsModalOpen(true)}>
                        View Submitted Application Receipt ➔
                      </button>
                    </div>
                  ) : (
                    <div>
                      <h3>Ready to Lead the GLP-1 Healthcare Revolution?</h3>
                      <p>Take the next step in your sales career with Telehealth FX. Click below to open our application modal and upload your resume for instant processing.</p>
                      <button 
                        className="btn btn-primary btn-lg" 
                        onClick={() => setIsModalOpen(true)}
                      >
                        Apply Now for GLP-1 Salesperson ➔
                      </button>
                    </div>
                  )}
                </div>

              </div>

              {/* Sidebar Summary Card */}
              <div className="job-sidebar-column">
                <div className="sidebar-card sticky-sidebar">
                  <h3 className="sidebar-title">Job Overview</h3>
                  
                  <div className="sidebar-meta-item">
                    <span className="meta-lbl">Role Title</span>
                    <span className="meta-val">GLP-1 Weight Loss Salesperson</span>
                  </div>

                  <div className="sidebar-meta-item">
                    <span className="meta-lbl">Department</span>
                    <span className="meta-val">Patient Acquisition & Sales</span>
                  </div>

                  <div className="sidebar-meta-item">
                    <span className="meta-lbl">Location</span>
                    <span className="meta-val">Remote (USA)</span>
                  </div>

                  <div className="sidebar-meta-item">
                    <span className="meta-lbl">Employment Type</span>
                    <span className="meta-val">Full-Time</span>
                  </div>

                  <div className="sidebar-meta-item">
                    <span className="meta-lbl">Base Salary</span>
                    <span className="meta-val">$45,000 - $55,000 / yr</span>
                  </div>

                  <div className="sidebar-meta-item">
                    <span className="meta-lbl">On-Target Earnings</span>
                    <span className="meta-val">$65,000 - $140,000+ OTE</span>
                  </div>

                  <div className="sidebar-meta-item">
                    <span className="meta-lbl">Key Products</span>
                    <span className="meta-val">Semaglutide & Tirzepatide</span>
                  </div>

                  {applicationState ? (
                    <button 
                      className="btn btn-secondary"
                      style={{ width: '100%', justifyContent: 'center', marginTop: 20, fontSize: 12 }}
                      onClick={() => setIsModalOpen(true)}
                    >
                      ✅ Applied (Ref {applicationState.refNumber})
                    </button>
                  ) : (
                    <button 
                      className="btn btn-primary"
                      style={{ width: '100%', justifyContent: 'center', marginTop: 20 }}
                      onClick={() => setIsModalOpen(true)}
                    >
                      Apply Now ➔
                    </button>
                  )}

                  <div className="sidebar-footer-note">
                    ⚡ Instant Resume Parser Enabled
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>
      </div>

      {/* Embedded Job Application Modal with Resume Parser */}
      <JobApplicationModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onApplied={(data) => handleApplied(data)}
        jobTitle="GLP-1 Weight Loss Salesperson"
      />

      <style jsx>{`
        .job-page-wrapper {
          background: var(--bg);
          color: var(--ink);
          min-height: 100vh;
        }

        /* Top Applied Status Banner */
        .applied-top-banner {
          background: #1F3529;
          color: #FBF8F3;
          padding: 10px 0;
          font-size: 13px;
          border-bottom: 1px solid rgba(255,255,255,0.1);
        }

        .flex-between {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 12px;
        }

        .pulse-green-dot {
          display: inline-block;
          width: 8px;
          height: 8px;
          background: #4EBE7B;
          border-radius: 50%;
          margin-right: 8px;
          box-shadow: 0 0 0 4px rgba(78, 190, 123, 0.25);
          animation: pulse 1.8s infinite;
        }

        @keyframes pulse {
          0% { box-shadow: 0 0 0 0 rgba(78, 190, 123, 0.4); }
          70% { box-shadow: 0 0 0 8px rgba(78, 190, 123, 0); }
          100% { box-shadow: 0 0 0 0 rgba(78, 190, 123, 0); }
        }

        .banner-btn {
          font-size: 12px;
          font-weight: 600;
          color: #FBF8F3;
          text-decoration: underline;
        }

        /* Applied Hero Card */
        .applied-hero-card {
          background: #F4EFE6;
          border: 2px solid var(--brand);
          border-radius: var(--radius-xl);
          padding: 32px;
          box-shadow: 0 8px 24px rgba(46, 74, 59, 0.08);
          animation: fadeIn 0.4s ease-out;
        }

        .applied-card-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-family: var(--mono);
          font-size: 11px;
          letter-spacing: 0.1em;
          color: var(--brand);
          background: rgba(46, 74, 59, 0.1);
          padding: 6px 12px;
          border-radius: 999px;
          margin-bottom: 16px;
          font-weight: 700;
        }

        .applied-meta-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
          background: white;
          border: 1px solid var(--line-soft);
          border-radius: var(--radius-lg);
          padding: 16px;
          margin-bottom: 24px;
        }

        .meta-box-lbl {
          font-family: var(--mono);
          font-size: 10px;
          letter-spacing: 0.08em;
          color: var(--ink-3);
          margin-bottom: 4px;
        }

        .meta-box-val {
          font-size: 13px;
          font-weight: 600;
          color: var(--ink);
        }

        .status-green {
          color: #2E7D32;
        }

        .applied-actions-row {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
        }

        .breadcrumbs {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 13px;
          color: var(--ink-3);
        }

        .breadcrumbs a {
          color: var(--ink-3);
          transition: color 0.2s;
        }

        .breadcrumbs a:hover {
          color: var(--brand);
        }

        .breadcrumbs .sep {
          color: var(--line);
        }

        .breadcrumbs .current {
          color: var(--ink-2);
          font-weight: 500;
        }

        /* Hero */
        .job-hero {
          background: #FAF6F0;
          border-top: 1px solid var(--line-soft);
          border-bottom: 1px solid var(--line-soft);
          padding: 60px 0;
        }

        .hero-content {
          max-width: 860px;
        }

        .job-hero-title {
          font-size: 48px;
          line-height: 1.08;
          color: var(--ink);
          margin-bottom: 16px;
        }

        .job-hero-subtitle {
          font-size: 18px;
          line-height: 1.5;
          color: var(--ink-2);
          margin-bottom: 32px;
        }

        .spec-badges-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 16px;
          margin-bottom: 36px;
        }

        .spec-badge-card {
          background: var(--bg-card);
          border: 1px solid var(--line-soft);
          border-radius: var(--radius-lg);
          padding: 16px;
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .spec-icon {
          font-size: 24px;
        }

        .spec-label {
          font-family: var(--mono);
          font-size: 10px;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: var(--ink-3);
        }

        .spec-value {
          font-size: 13px;
          font-weight: 600;
          color: var(--ink);
        }

        .hero-cta-box {
          display: flex;
          align-items: center;
          gap: 16px;
          flex-wrap: wrap;
        }

        .hero-cta-subtext {
          font-size: 13px;
          color: var(--ink-3);
        }

        /* Body Section */
        .job-layout-grid {
          display: grid;
          grid-template-columns: 1fr 340px;
          gap: 48px;
          align-items: start;
        }

        .content-block {
          margin-bottom: 48px;
        }

        .content-block h2 {
          font-family: var(--serif);
          font-size: 32px;
          color: var(--ink);
          margin-bottom: 16px;
        }

        .content-block p {
          font-size: 16px;
          line-height: 1.65;
          color: var(--ink-2);
          margin-bottom: 16px;
        }

        .subheading {
          font-size: 18px;
          font-weight: 600;
          color: var(--ink);
          margin: 24px 0 12px;
        }

        .styled-list {
          padding-left: 20px;
          margin-bottom: 24px;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .styled-list li {
          font-size: 15px;
          line-height: 1.6;
          color: var(--ink-2);
        }

        /* Comp breakdown card */
        .comp-breakdown-card {
          background: var(--bg-card);
          border: 1px solid var(--line);
          border-radius: var(--radius-lg);
          padding: 24px;
          margin: 24px 0 32px;
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .comp-row {
          display: flex;
          flex-direction: column;
          gap: 4px;
          padding-bottom: 12px;
          border-bottom: 1px dashed var(--line-soft);
        }

        .comp-row:last-child {
          border-bottom: none;
          padding-bottom: 0;
        }

        .comp-title {
          font-family: var(--mono);
          font-size: 11px;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--brand);
        }

        .comp-detail {
          font-size: 15px;
          color: var(--ink);
        }

        /* Hiring Timeline */
        .hiring-timeline {
          display: flex;
          flex-direction: column;
          gap: 16px;
          margin: 24px 0;
        }

        .step-item {
          display: flex;
          align-items: flex-start;
          gap: 16px;
          background: var(--bg-card);
          border: 1px solid var(--line-soft);
          border-radius: var(--radius-lg);
          padding: 16px;
        }

        .step-num {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background: var(--brand);
          color: white;
          font-weight: 700;
          font-size: 14px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .step-info {
          font-size: 14px;
          color: var(--ink-2);
          line-height: 1.5;
        }

        .bottom-apply-box {
          background: linear-gradient(135deg, #1F3529 0%, #2E4A3B 100%);
          color: white;
          padding: 40px;
          border-radius: var(--radius-xl);
          margin-top: 60px;
        }

        .bottom-apply-box h3 {
          font-family: var(--serif);
          font-size: 28px;
          color: white;
          margin-bottom: 12px;
        }

        .bottom-apply-box p {
          font-size: 15px;
          color: rgba(255,255,255,0.85);
          margin-bottom: 24px;
        }

        /* Sidebar */
        .sidebar-card {
          background: var(--bg-card);
          border: 1px solid var(--line);
          border-radius: var(--radius-xl);
          padding: 28px;
          box-shadow: 0 4px 20px rgba(0,0,0,0.03);
        }

        .sticky-sidebar {
          position: sticky;
          top: 130px;
        }

        .sidebar-title {
          font-family: var(--serif);
          font-size: 22px;
          color: var(--ink);
          margin-bottom: 20px;
          padding-bottom: 12px;
          border-bottom: 1px solid var(--line-soft);
        }

        .sidebar-meta-item {
          margin-bottom: 16px;
        }

        .meta-lbl {
          display: block;
          font-family: var(--mono);
          font-size: 10px;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--ink-3);
          margin-bottom: 2px;
        }

        .meta-val {
          font-size: 14px;
          font-weight: 600;
          color: var(--ink);
        }

        .sidebar-footer-note {
          font-size: 11px;
          color: var(--ink-3);
          text-align: center;
          margin-top: 12px;
        }

        @media (max-width: 1024px) {
          .job-layout-grid {
            grid-template-columns: 1fr;
          }
          .spec-badges-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .applied-meta-grid {
            grid-template-columns: 1fr;
          }
          .sticky-sidebar {
            position: static;
          }
        }

        @media (max-width: 640px) {
          .job-hero-title {
            font-size: 36px;
          }
          .spec-badges-grid {
            grid-template-columns: 1fr;
          }
          .bottom-apply-box {
            padding: 24px;
          }
        }
      `}</style>
    </>
  );
}
