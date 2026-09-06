import React from 'react';
import Link from 'next/link';
import {
  CareersSalespersonClient,
  CareersHeroInteractive,
  CareersBottomInteractive,
  CareersSidebarApplyButton,
} from '../../../components/careers-salesperson-client';

export const metadata = {
  robots: { index: true, follow: true },
  title: "GLP-1 Weight Loss Salesperson (Remote) | Telehealth FX",
  description: "Join Telehealth FX as a remote GLP-1 Salesperson. $65k-$140k+ OTE with uncapped commission selling Semaglutide & Tirzepatide. Apply in 60 seconds.",
  alternates: {
    canonical: 'https://telehealthfx.com/careers/glp-1-weight-loss-salesperson/',
  },
  openGraph: {
    title: "GLP-1 Weight Loss Salesperson (Remote) | Telehealth FX",
    description: "Join Telehealth FX as a remote GLP-1 Salesperson. $65k-$140k+ OTE with uncapped commission selling Semaglutide & Tirzepatide. Apply in 60 seconds.",
    url: 'https://telehealthfx.com/careers/glp-1-weight-loss-salesperson/',
    siteName: 'Telehealth FX',
    images: [
      {
        url: 'https://telehealthfx.com/assets/Site%20Icon-modified.png',
        width: 1200,
        height: 630,
        alt: 'GLP-1 Weight Loss Salesperson Careers at Telehealth FX',
      },
    ],
  },
};

export default function GLP1SalespersonJobPage() {
  const jobSchema = {
    "@type": "JobPosting",
    "title": "GLP-1 Weight Loss Salesperson",
    "description": `<p><strong>Telehealth FX</strong> is seeking a high-performing, empathetic, and revenue-driven <strong>GLP-1 Weight Loss Salesperson</strong> to join our rapidly growing remote patient acquisition team. As a GLP-1 Weight Loss Salesperson, you will serve as the front-line brand ambassador and clinical sales specialist for individuals seeking transformative metabolic weight loss solutions, including Semaglutide and Tirzepatide protocols. You will convert high-intent inbound inquiries, guide prospective patients through telehealth intake expectations, address clinical and pricing questions with transparency, and drive long-term patient subscription retention. This is a full-time, 100% remote position offering a competitive base salary with an uncapped tiered commission structure and realistic OTE of $65,000 to $140,000+.</p>

<h2>About Telehealth FX & Our Metabolic Mission</h2>
<p>Telehealth FX is a premier, nationwide digital health platform revolutionizing how Americans access evidence-based metabolic wellness and prescription weight management. Founded on the core principles of clinical rigor, transparent pricing, and friction-free patient care, Telehealth FX connects prospective patients directly with licensed healthcare providers to deliver personalized GLP-1 medications—including compounded Semaglutide and Tirzepatide—straight to their doorsteps with 24-hour turnaround times.</p>
<p>Over 70% of adults in the United States suffer from metabolic dysfunction, insulin resistance, or weight-related challenges. Traditional healthcare systems often subject patients to months of waitlists, confusing insurance denials, and inflated pharmacy costs. At Telehealth FX, we eliminate these barriers. By combining cutting-edge telemedicine software, expedited clinician reviews, transparent flat-rate subscriptions, and dedicated 1-on-1 coaching, we empower patients to achieve sustainable, lifelong weight loss without the traditional runaround.</p>

<h2>Position Overview & Strategic Impact</h2>
<p>The GLP-1 Weight Loss Salesperson serves as the vital bridge between prospective patients seeking a health transformation and Telehealth FX's clinical protocols. In this role, you will be the first human point of contact for high-intent inbound leads who have requested information, completed an initial weight loss assessment, or expressed interest in Semaglutide and Tirzepatide therapies.</p>
<p>This is not a high-pressure cold calling job. You will handle warm, pre-qualified inbound phone calls, video consultations, and instant live-chat leads generated from our multi-channel marketing campaigns. Your primary goal is to conduct empathetic, consultative conversations: understanding the patient's weight loss history, answering key questions regarding medication safety, dosing escalation, and pricing, overcoming hesitations with clarity and confidence, and enrolling them into our monthly clinical membership programs.</p>

<h2>Key Responsibilities & Daily Workflow</h2>
<ul>
  <li><strong>Inbound Lead Conversion:</strong> Conduct 25 to 45 consultative phone and video consultations per day with warm prospective patients who have inquired about GLP-1 weight loss programs.</li>
  <li><strong>Patient Needs Analysis & Education:</strong> Actively listen to prospective patients' health goals, weight loss struggles, and past diet history. Articulate how GLP-1 receptor agonists (Semaglutide & Tirzepatide) work biologically to suppress food noise, slow gastric emptying, and improve insulin sensitivity.</li>
  <li><strong>Consultative Closing & Plan Selection:</strong> Guide patients toward the optimal membership tier based on their clinical goals, budget, and medication preference. Secure initial prescription order sign-ups and continuous subscription enrollments.</li>
  <li><strong>Objection Handling with Empathy:</strong> Address common patient concerns regarding self-injections, potential mild side effects (like nausea or fatigue), program safety, shipping timelines, and subscription flexibility using structured, reassuring frameworks.</li>
  <li><strong>CRM & Pipeline Optimization:</strong> Maintain flawless data integrity within Salesforce/HubSpot. Track lead statuses, schedule timely follow-ups with prospects awaiting medical intake approval, and manage pipeline movement to maximize conversion rates.</li>
  <li><strong>Cross-Functional Collaboration:</strong> Work closely with our licensed medical providers, compounding pharmacy partners, and patient success coordinators to ensure smooth transitions from completed sale to medication delivery.</li>
  <li><strong>Continuous Product & Regulatory Mastery:</strong> Stay up to date on GLP-1 clinical trial updates (e.g., STEP and SURMOUNT clinical trials), FDA compounding guidelines, competitor pricing, and Telehealth FX promotional campaigns.</li>
  <li><strong>Ethical Compliance & HIPAA Integrity:</strong> Adhere strictly to Telehealth FX compliance standards, medical disclaimer protocols, and HIPAA patient data protection policies at all times.</li>
</ul>

<h2>Target Candidate Profile & Required Qualifications</h2>
<p>We are seeking candidates who possess a winning sales mindset combined with deep emotional intelligence. We welcome applicants from telehealth, pharmaceutical sales, medical aesthetics, high-ticket consumer services, SaaS, or premium wellness industries.</p>
<h3>Required Qualifications:</h3>
<ul>
  <li><strong>Sales Experience:</strong> 3+ years of documented success in an inside sales, consultative closing, or account executive role (B2C sales, telehealth, medical spa, or high-ticket subscription sales preferred).</li>
  <li><strong>Proven Closing Track Record:</strong> Consistent history of hitting or exceeding monthly sales quotas, conversion benchmarks, and revenue targets.</li>
  <li><strong>Communication Excellence:</strong> Outstanding verbal, written, and interpersonal skills with an articulate, warm, and confident phone voice.</li>
  <li><strong>Tech Savviness:</strong> Proficiency with modern CRM software (Salesforce, HubSpot, or Close.io), VOIP phone systems (Aircall, Dialpad), and web conferencing tools (Zoom, Slack).</li>
  <li><strong>Remote Work Discipline:</strong> Self-motivated, highly organized, and able to maintain focused productivity in a quiet home office environment with high-speed internet.</li>
  <li><strong>Adaptability & Resilience:</strong> Ability to thrive in a fast-growing, high-volume startup atmosphere with changing campaigns and continuous learning.</li>
</ul>
<h3>Preferred Qualifications:</h3>
<ul>
  <li>Prior experience selling GLP-1 weight loss programs, TRT, HRT, or elective medical procedures.</li>
  <li>Basic understanding of metabolic health terminology, Semaglutide, Tirzepatide, and peptide therapies.</li>
  <li>Bilingual capabilities (English / Spanish) are a strong plus.</li>
</ul>

<h2>Compensation, Uncapped Commission & Benefits</h2>
<p>At Telehealth FX, we believe top sales talent should be compensated exceptionally well. We offer a transparent, competitive compensation model that directly rewards your closing performance and patient retention.</p>
<ul>
  <li><strong>Base Salary:</strong> $45,000 - $55,000 / year (based on experience & background)</li>
  <li><strong>Uncapped Commission:</strong> Tiered commission payout per enrolled patient + monthly retention recurring bonuses</li>
  <li><strong>On-Target Earnings (OTE):</strong> $65,000 - $140,000+ per year (Top 10% producers earn $165k+)</li>
  <li><strong>Full Health Coverage:</strong> Premium Medical, Dental, and Vision insurance plans with employer contribution.</li>
  <li><strong>401(k) Plan:</strong> 401(k) retirement savings plan with 4% company matching.</li>
  <li><strong>Complimentary GLP-1 Benefit:</strong> Free or heavily discounted access to Telehealth FX metabolic health and weight loss programs for you and eligible family members.</li>
  <li><strong>Home Office Setup Stipend:</strong> $1,500 one-time stipend to outfit your remote workspace.</li>
  <li><strong>Paid Time Off:</strong> 15 days flexible PTO + 8 paid holidays + wellness days.</li>
</ul>

<h2>Hiring & Selection Process</h2>
<ol>
  <li><strong>Instant Application & Resume Parser Review:</strong> Apply online using our AI-assisted resume parser in under 60 seconds.</li>
  <li><strong>20-Min Recruiter Screen:</strong> A brief video call to discuss your sales background, career aspirations, and salary expectations.</li>
  <li><strong>Sales Roleplay & Case Study:</strong> A 45-minute practical interview featuring a mock patient consultation roleplay.</li>
  <li><strong>Executive Culture Chat & Offer:</strong> Meet a founding team member and receive your official offer!</li>
</ol>

<h2>Life at Telehealth FX & Equal Opportunity</h2>
<p>Telehealth FX is an Equal Opportunity Employer. We celebrate diversity and are committed to creating an inclusive environment for all employees regardless of race, color, religion, sex, sexual orientation, gender identity, national origin, veteran status, disability, or age.</p>`,
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

  const medicalBusinessSchema = {
    "@type": "MedicalBusiness",
    "@id": "https://telehealthfx.com/#organization",
    "name": "Telehealth FX",
    "url": "https://telehealthfx.com",
    "logo": "https://telehealthfx.com/assets/Site%20Icon-modified.png",
    "telephone": "+1-800-TELEHEALTH",
    "priceRange": "$146 - $349",
    "medicalSpecialty": [
      "https://schema.org/Endocrine"
    ],
    "availableService": [
      {
        "@type": "MedicalTherapy",
        "name": "GLP-1 Weight Loss Therapy",
        "alternateName": "Compounded Semaglutide & Tirzepatide"
      }
    ],
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "US"
    }
  };

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [jobSchema, medicalBusinessSchema]
  };

  return (
    <>
      {/* Schema.org JobPosting and MedicalBusiness structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <CareersSalespersonClient>
        <div style={{ backgroundColor: 'var(--bg, #F5F1EA)', color: 'var(--ink, #1A1F1C)', minHeight: '100vh' }}>
          
          {/* Top Breadcrumbs */}
          <div className="container" style={{ paddingTop: 24, paddingBottom: 16 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 13, color: 'var(--ink-3)' }}>
              <Link href="/" style={{ color: 'var(--ink-3)' }}>Home</Link>
              <span style={{ color: 'var(--line)' }}>/</span>
              <Link href="/careers/" style={{ color: 'var(--ink-3)' }}>Careers</Link>
              <span style={{ color: 'var(--line)' }}>/</span>
              <span style={{ color: 'var(--ink-2)', fontWeight: 500 }}>GLP-1 Weight Loss Salesperson</span>
            </div>
          </div>

          {/* Hero Section */}
          <section style={{ backgroundColor: '#FAF6F0', borderTop: '1px solid var(--line-soft)', borderBottom: '1px solid var(--line-soft)', padding: '60px 0' }}>
            <div className="container">
              <div style={{ maxWidth: 880 }}>
                
                <div className="pill pill-brand" style={{ marginBottom: 16 }}>
                  <span className="pill-dot" />
                  <span>NOW HIRING • 100% REMOTE (US)</span>
                </div>
                
                <h1 className="serif" style={{ fontSize: 48, lineHeight: 1.08, color: 'var(--ink)', marginBottom: 16 }}>
                  GLP-1 Weight Loss Salesperson
                </h1>
                
                <p style={{ fontSize: 18, lineHeight: 1.5, color: 'var(--ink-2)', marginBottom: 32 }}>
                  Join Telehealth FX’s fast-scaling clinical sales team. Help thousands of patients reset their metabolic health with Semaglutide &amp; Tirzepatide while earning uncapped commissions.
                </p>

                {/* Quick Spec Badges Grid */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '16px', marginBottom: '36px' }}>
                  <div style={{ backgroundColor: 'var(--bg-card)', border: '1px solid var(--line-soft)', borderRadius: '12px', padding: '16px', display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <div style={{ fontSize: '24px' }}>💰</div>
                    <div>
                      <div className="mono" style={{ fontSize: '10px', color: 'var(--ink-3)' }}>Compensation</div>
                      <div style={{ fontSize: '13px', fontWeight: 600, color: 'var(--ink)' }}>$65k - $140k+ OTE</div>
                    </div>
                  </div>

                  <div style={{ backgroundColor: 'var(--bg-card)', border: '1px solid var(--line-soft)', borderRadius: '12px', padding: '16px', display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <div style={{ fontSize: '24px' }}>📍</div>
                    <div>
                      <div className="mono" style={{ fontSize: '10px', color: 'var(--ink-3)' }}>Location</div>
                      <div style={{ fontSize: '13px', fontWeight: 600, color: 'var(--ink)' }}>100% Remote (USA)</div>
                    </div>
                  </div>

                  <div style={{ backgroundColor: 'var(--bg-card)', border: '1px solid var(--line-soft)', borderRadius: '12px', padding: '16px', display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <div style={{ fontSize: '24px' }}>⏰</div>
                    <div>
                      <div className="mono" style={{ fontSize: '10px', color: 'var(--ink-3)' }}>Employment Type</div>
                      <div style={{ fontSize: '13px', fontWeight: 600, color: 'var(--ink)' }}>Full-Time (40 hrs/wk)</div>
                    </div>
                  </div>

                  <div style={{ backgroundColor: 'var(--bg-card)', border: '1px solid var(--line-soft)', borderRadius: '12px', padding: '16px', display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <div style={{ fontSize: '24px' }}>🚀</div>
                    <div>
                      <div className="mono" style={{ fontSize: '10px', color: 'var(--ink-3)' }}>Commission Structure</div>
                      <div style={{ fontSize: '13px', fontWeight: 600, color: 'var(--ink)' }}>Base + Uncapped Bonus</div>
                    </div>
                  </div>
                </div>

                {/* Apply Now Primary CTA / Status Card */}
                <CareersHeroInteractive />

              </div>
            </div>
          </section>

          {/* Main Detailed Content Area (1000+ words) */}
          <section className="section" style={{ padding: '80px 0' }}>
            <div className="container">
              <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) 340px', gap: '48px', alignItems: 'start' }}>
                
                {/* Main Content Column */}
                <div style={{ minWidth: 0 }}>
                  
                  {/* 1. About Telehealth FX */}
                  <div style={{ marginBottom: 48 }}>
                    <h2 className="serif" style={{ fontSize: 32, color: 'var(--ink)', marginBottom: 16 }}>About Telehealth FX &amp; Our Metabolic Mission</h2>
                    <p style={{ fontSize: 16, lineHeight: 1.7, color: 'var(--ink-2)', marginBottom: 16 }}>
                      Telehealth FX is a premier, nationwide digital health platform revolutionizing how Americans access evidence-based metabolic wellness and prescription weight management. Founded on the core principles of clinical rigor, transparent pricing, and friction-free patient care, Telehealth FX connects prospective patients directly with licensed healthcare providers to deliver personalized GLP-1 medications—including compounded Semaglutide and Tirzepatide—straight to their doorsteps with 24-hour turnaround times.
                    </p>
                    <p style={{ fontSize: 16, lineHeight: 1.7, color: 'var(--ink-2)', marginBottom: 16 }}>
                      Over 70% of adults in the United States suffer from metabolic dysfunction, insulin resistance, or weight-related challenges. Traditional healthcare systems often subject patients to months of waitlists, confusing insurance denials, and inflated pharmacy costs. At Telehealth FX, we eliminate these barriers. By combining cutting-edge telemedicine software, expedited clinician reviews, transparent flat-rate subscriptions, and dedicated 1-on-1 coaching, we empower patients to achieve sustainable, lifelong weight loss without the traditional runaround.
                    </p>
                    <p style={{ fontSize: 16, lineHeight: 1.7, color: 'var(--ink-2)' }}>
                      As our patient base rapidly expands across all 50 states, we are looking for an ambitious, highly empathetic, and results-driven <strong>GLP-1 Weight Loss Salesperson</strong> to join our high-performing sales organization.
                    </p>
                  </div>

                  {/* 2. Position Overview & Strategic Impact */}
                  <div style={{ marginBottom: 48 }}>
                    <h2 className="serif" style={{ fontSize: 32, color: 'var(--ink)', marginBottom: 16 }}>Position Overview &amp; Strategic Impact</h2>
                    <p style={{ fontSize: 16, lineHeight: 1.7, color: 'var(--ink-2)', marginBottom: 16 }}>
                      The <strong>GLP-1 Weight Loss Salesperson</strong> serves as the vital bridge between prospective patients seeking a health transformation and Telehealth FX's clinical protocols. In this role, you will be the first human point of contact for high-intent inbound leads who have requested information, completed an initial weight loss assessment, or expressed interest in Semaglutide and Tirzepatide therapies.
                    </p>
                    <p style={{ fontSize: 16, lineHeight: 1.7, color: 'var(--ink-2)', marginBottom: 16 }}>
                      This is not a high-pressure cold calling job. You will handle warm, pre-qualified inbound phone calls, video consultations, and instant live-chat leads generated from our multi-channel marketing campaigns. Your primary goal is to conduct empathetic, consultative conversations: understanding the patient's weight loss history, answering key questions regarding medication safety, dosing escalation, and pricing, overcoming hesitations with clarity and confidence, and enrolling them into our monthly clinical membership programs.
                    </p>
                    <p style={{ fontSize: 16, lineHeight: 1.7, color: 'var(--ink-2)' }}>
                      Top performers in this role blend a deep consultative sales methodology with genuine human empathy. If you thrive in a fast-paced sales environment, possess strong active listening skills, and take pride in helping people change their lives for the better, this position offers an exceptional career opportunity with uncapped earning potential.
                    </p>
                  </div>

                  {/* 3. Detailed Responsibilities */}
                  <div style={{ marginBottom: 48 }}>
                    <h2 className="serif" style={{ fontSize: 32, color: 'var(--ink)', marginBottom: 16 }}>Key Responsibilities &amp; Daily Workflow</h2>
                    <p style={{ fontSize: 16, lineHeight: 1.7, color: 'var(--ink-2)', marginBottom: 16 }}>
                      As a GLP-1 Weight Loss Salesperson at Telehealth FX, your daily responsibilities will include:
                    </p>
                    <ul style={{ paddingLeft: 20, display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 24 }}>
                      <li style={{ fontSize: 15, lineHeight: 1.6, color: 'var(--ink-2)' }}>
                        <strong>Inbound Lead Conversion:</strong> Conduct 25 to 45 consultative phone and video consultations per day with warm prospective patients who have inquired about GLP-1 weight loss programs.
                      </li>
                      <li style={{ fontSize: 15, lineHeight: 1.6, color: 'var(--ink-2)' }}>
                        <strong>Patient Needs Analysis &amp; Education:</strong> Actively listen to prospective patients' health goals, weight loss struggles, and past diet history. Articulate how GLP-1 receptor agonists (Semaglutide &amp; Tirzepatide) work biologically to suppress food noise, slow gastric emptying, and improve insulin sensitivity.
                      </li>
                      <li style={{ fontSize: 15, lineHeight: 1.6, color: 'var(--ink-2)' }}>
                        <strong>Consultative Closing &amp; Plan Selection:</strong> Guide patients toward the optimal membership tier based on their clinical goals, budget, and medication preference. Secure initial prescription order sign-ups and continuous subscription enrollments.
                      </li>
                      <li style={{ fontSize: 15, lineHeight: 1.6, color: 'var(--ink-2)' }}>
                        <strong>Objection Handling with Empathy:</strong> Address common patient concerns regarding self-injections, potential mild side effects (like nausea or fatigue), program safety, shipping timelines, and subscription flexibility using structured, reassuring frameworks.
                      </li>
                      <li style={{ fontSize: 15, lineHeight: 1.6, color: 'var(--ink-2)' }}>
                        <strong>CRM &amp; Pipeline Optimization:</strong> Maintain flawless data integrity within Salesforce/HubSpot. Track lead statuses, schedule timely follow-ups with prospects awaiting medical intake approval, and manage pipeline movement to maximize conversion rates.
                      </li>
                      <li style={{ fontSize: 15, lineHeight: 1.6, color: 'var(--ink-2)' }}>
                        <strong>Cross-Functional Collaboration:</strong> Work closely with our licensed medical providers, compounding pharmacy partners, and patient success coordinators to ensure smooth transitions from completed sale to medication delivery.
                      </li>
                      <li style={{ fontSize: 15, lineHeight: 1.6, color: 'var(--ink-2)' }}>
                        <strong>Continuous Product &amp; Regulatory Mastery:</strong> Stay up to date on GLP-1 clinical trial updates (e.g., STEP and SURMOUNT clinical trials), FDA compounding guidelines, competitor pricing, and Telehealth FX promotional campaigns.
                      </li>
                      <li style={{ fontSize: 15, lineHeight: 1.6, color: 'var(--ink-2)' }}>
                        <strong>Ethical Compliance &amp; HIPAA Integrity:</strong> Adhere strictly to Telehealth FX compliance standards, medical disclaimer protocols, and HIPAA patient data protection policies at all times.
                      </li>
                    </ul>
                  </div>

                  {/* 4. Target Candidate Profile & Qualifications */}
                  <div style={{ marginBottom: 48 }}>
                    <h2 className="serif" style={{ fontSize: 32, color: 'var(--ink)', marginBottom: 16 }}>Target Candidate Profile &amp; Qualifications</h2>
                    <p style={{ fontSize: 16, lineHeight: 1.7, color: 'var(--ink-2)', marginBottom: 16 }}>
                      We are seeking candidates who possess a winning sales mindset combined with deep emotional intelligence. We welcome applicants from telehealth, pharmaceutical sales, medical aesthetics, high-ticket consumer services, SaaS, or premium wellness industries.
                    </p>

                    <h3 style={{ fontSize: 18, fontWeight: 600, color: 'var(--ink)', margin: '24px 0 12px' }}>Required Qualifications:</h3>
                    <ul style={{ paddingLeft: 20, display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 24 }}>
                      <li style={{ fontSize: 15, lineHeight: 1.6, color: 'var(--ink-2)' }}><strong>Sales Experience:</strong> 3+ years of documented success in an inside sales, consultative closing, or account executive role (B2C sales, telehealth, medical spa, or high-ticket subscription sales preferred).</li>
                      <li style={{ fontSize: 15, lineHeight: 1.6, color: 'var(--ink-2)' }}><strong>Proven Closing Track Record:</strong> Consistent history of hitting or exceeding monthly sales quotas, conversion benchmarks, and revenue targets.</li>
                      <li style={{ fontSize: 15, lineHeight: 1.6, color: 'var(--ink-2)' }}><strong>Communication Excellence:</strong> Outstanding verbal, written, and interpersonal skills with an articulate, warm, and confident phone voice.</li>
                      <li style={{ fontSize: 15, lineHeight: 1.6, color: 'var(--ink-2)' }}><strong>Tech Savviness:</strong> Proficiency with modern CRM software (Salesforce, HubSpot, or Close.io), VOIP phone systems (Aircall, Dialpad), and web conferencing tools (Zoom, Slack).</li>
                      <li style={{ fontSize: 15, lineHeight: 1.6, color: 'var(--ink-2)' }}><strong>Remote Work Discipline:</strong> Self-motivated, highly organized, and able to maintain focused productivity in a quiet home office environment with high-speed internet.</li>
                      <li style={{ fontSize: 15, lineHeight: 1.6, color: 'var(--ink-2)' }}><strong>Adaptability &amp; Resilience:</strong> Ability to thrive in a fast-growing, high-volume startup atmosphere with changing campaigns and continuous learning.</li>
                    </ul>

                    <h3 style={{ fontSize: 18, fontWeight: 600, color: 'var(--ink)', margin: '24px 0 12px' }}>Preferred Qualifications (Plus Factors):</h3>
                    <ul style={{ paddingLeft: 20, display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 24 }}>
                      <li style={{ fontSize: 15, lineHeight: 1.6, color: 'var(--ink-2)' }}>Prior experience selling GLP-1 weight loss programs, TRT, HRT, or elective medical procedures.</li>
                      <li style={{ fontSize: 15, lineHeight: 1.6, color: 'var(--ink-2)' }}>Basic understanding of metabolic health terminology, Semaglutide, Tirzepatide, and peptide therapies.</li>
                      <li style={{ fontSize: 15, lineHeight: 1.6, color: 'var(--ink-2)' }}>Bilingual capabilities (English / Spanish) are a strong plus.</li>
                    </ul>
                  </div>

                  {/* 5. Compensation, Commission & Perks */}
                  <div style={{ marginBottom: 48 }}>
                    <h2 className="serif" style={{ fontSize: 32, color: 'var(--ink)', marginBottom: 16 }}>Compensation, Uncapped Commission &amp; Benefits</h2>
                    <p style={{ fontSize: 16, lineHeight: 1.7, color: 'var(--ink-2)', marginBottom: 16 }}>
                      At Telehealth FX, we believe top sales talent should be compensated exceptionally well. We offer a transparent, competitive compensation model that directly rewards your closing performance and patient retention.
                    </p>

                    <div style={{ backgroundColor: 'var(--bg-card)', border: '1px solid var(--line)', borderRadius: '12px', padding: '24px', margin: '24px 0 32px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
                      <div style={{ paddingBottom: '12px', borderBottom: '1px dashed var(--line-soft)' }}>
                        <div className="mono" style={{ fontSize: '11px', color: 'var(--brand)' }}>BASE SALARY</div>
                        <div style={{ fontSize: '15px', color: 'var(--ink)' }}>$45,000 - $55,000 / year (based on experience &amp; background)</div>
                      </div>
                      <div style={{ paddingBottom: '12px', borderBottom: '1px dashed var(--line-soft)' }}>
                        <div className="mono" style={{ fontSize: '11px', color: 'var(--brand)' }}>UNCAPPED COMMISSION</div>
                        <div style={{ fontSize: '15px', color: 'var(--ink)' }}>Tiered commission payout per enrolled patient + monthly retention recurring bonuses</div>
                      </div>
                      <div style={{ paddingBottom: '12px', borderBottom: '1px dashed var(--line-soft)' }}>
                        <div className="mono" style={{ fontSize: '11px', color: 'var(--brand)' }}>EXPECTED ON-TARGET EARNINGS (OTE)</div>
                        <div style={{ fontSize: '15px', color: 'var(--ink)' }}><strong>$65,000 - $140,000+ per year</strong> (Top 10% producers earn $165k+)</div>
                      </div>
                      <div>
                        <div className="mono" style={{ fontSize: '11px', color: 'var(--brand)' }}>PERFORMANCE BONUSES</div>
                        <div style={{ fontSize: '15px', color: 'var(--ink)' }}>Quarterly cash bonuses, top closer leaderboards, and annual company trips</div>
                      </div>
                    </div>

                    <h3 style={{ fontSize: 18, fontWeight: 600, color: 'var(--ink)', margin: '24px 0 12px' }}>Full Employee Perks &amp; Benefits Package:</h3>
                    <ul style={{ paddingLeft: 20, display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 24 }}>
                      <li style={{ fontSize: 15, lineHeight: 1.6, color: 'var(--ink-2)' }}><strong>Comprehensive Health Coverage:</strong> Premium Medical, Dental, and Vision insurance plans with generous employer contribution.</li>
                      <li style={{ fontSize: 15, lineHeight: 1.6, color: 'var(--ink-2)' }}><strong>401(k) Retirement Plan:</strong> 401(k) retirement savings plan with 4% company matching.</li>
                      <li style={{ fontSize: 15, lineHeight: 1.6, color: 'var(--ink-2)' }}><strong>Complimentary Employee GLP-1 Benefit:</strong> Free or heavily discounted access to Telehealth FX metabolic health and weight loss programs for you and eligible immediate family members.</li>
                      <li style={{ fontSize: 15, lineHeight: 1.6, color: 'var(--ink-2)' }}><strong>Home Office Setup Stipend:</strong> $1,500 one-time stipend to outfit your remote workspace with modern hardware, monitors, and ergonomic seating.</li>
                      <li style={{ fontSize: 15, lineHeight: 1.6, color: 'var(--ink-2)' }}><strong>Paid Time Off (PTO):</strong> 15 days of flexible PTO + 8 paid national holidays + paid mental health wellness days.</li>
                      <li style={{ fontSize: 15, lineHeight: 1.6, color: 'var(--ink-2)' }}><strong>Paid Training &amp; Certification:</strong> 2 weeks of fully paid intensive sales and GLP-1 clinical onboarding.</li>
                    </ul>
                  </div>

                  {/* 6. Step-by-Step Hiring Process */}
                  <div style={{ marginBottom: 48 }}>
                    <h2 className="serif" style={{ fontSize: 32, color: 'var(--ink)', marginBottom: 16 }}>Our Hiring &amp; Selection Process</h2>
                    <p style={{ fontSize: 16, lineHeight: 1.7, color: 'var(--ink-2)', marginBottom: 16 }}>
                      We value your time and aim to make our hiring process swift, transparent, and engaging:
                    </p>
                    
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', margin: '24px 0' }}>
                      <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px', backgroundColor: 'var(--bg-card)', border: '1px solid var(--line-soft)', borderRadius: '12px', padding: '16px' }}>
                        <div style={{ width: '32px', height: '32px', borderRadius: '50%', backgroundColor: 'var(--brand)', color: 'white', fontWeight: 700, fontSize: '14px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>1</div>
                        <div style={{ fontSize: '14px', color: 'var(--ink-2)', lineHeight: 1.5 }}>
                          <strong>Instant Application &amp; Resume Parser Review:</strong> Apply online using our AI-assisted resume parser in under 60 seconds.
                        </div>
                      </div>

                      <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px', backgroundColor: 'var(--bg-card)', border: '1px solid var(--line-soft)', borderRadius: '12px', padding: '16px' }}>
                        <div style={{ width: '32px', height: '32px', borderRadius: '50%', backgroundColor: 'var(--brand)', color: 'white', fontWeight: 700, fontSize: '14px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>2</div>
                        <div style={{ fontSize: '14px', color: 'var(--ink-2)', lineHeight: 1.5 }}>
                          <strong>20-Min Recruiter Screen:</strong> A brief video call to discuss your sales background, career aspirations, and salary expectations.
                        </div>
                      </div>

                      <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px', backgroundColor: 'var(--bg-card)', border: '1px solid var(--line-soft)', borderRadius: '12px', padding: '16px' }}>
                        <div style={{ width: '32px', height: '32px', borderRadius: '50%', backgroundColor: 'var(--brand)', color: 'white', fontWeight: 700, fontSize: '14px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>3</div>
                        <div style={{ fontSize: '14px', color: 'var(--ink-2)', lineHeight: 1.5 }}>
                          <strong>Sales Roleplay &amp; Case Study:</strong> A 45-minute practical interview with our Sales Director, featuring an interactive mock patient consultation roleplay.
                        </div>
                      </div>

                      <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px', backgroundColor: 'var(--bg-card)', border: '1px solid var(--line-soft)', borderRadius: '12px', padding: '16px' }}>
                        <div style={{ width: '32px', height: '32px', borderRadius: '50%', backgroundColor: 'var(--brand)', color: 'white', fontWeight: 700, fontSize: '14px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>4</div>
                        <div style={{ fontSize: '14px', color: 'var(--ink-2)', lineHeight: 1.5 }}>
                          <strong>Executive Culture Chat &amp; Offer:</strong> Meet a founding team member, review formal compensation details, and receive your official offer!
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* 7. Culture, Diversity & EEO Statement */}
                  <div style={{ marginBottom: 48 }}>
                    <h2 className="serif" style={{ fontSize: 32, color: 'var(--ink)', marginBottom: 16 }}>Life at Telehealth FX, Culture &amp; Equal Opportunity</h2>
                    <p style={{ fontSize: 16, lineHeight: 1.7, color: 'var(--ink-2)', marginBottom: 16 }}>
                      At Telehealth FX, we foster a high-octane, collaborative, and inclusive culture where curiosity and high performance thrive hand in hand. Though our team works remotely across the country, we stay connected through daily morning huddles, team goal challenges, virtual coffee breaks, and quarterly regional meetups.
                    </p>
                    <p style={{ fontSize: 16, lineHeight: 1.7, color: 'var(--ink-2)' }}>
                      Telehealth FX is an Equal Opportunity Employer. We celebrate diversity and are committed to creating an inclusive environment for all employees regardless of race, color, religion, sex, sexual orientation, gender identity, national origin, veteran status, disability, or age.
                    </p>
                  </div>

                  {/* Bottom Call to Action */}
                  <div style={{ background: 'linear-gradient(135deg, #1F3529 0%, #2E4A3B 100%)', color: 'white', padding: '40px', borderRadius: '20px', marginTop: '60px' }}>
                    <CareersBottomInteractive />
                  </div>

                </div>

                {/* Sidebar Summary Card */}
                <div>
                  <div className="card" style={{ padding: '28px', backgroundColor: 'var(--bg-card)', borderColor: 'var(--line)', borderRadius: '20px', position: 'sticky', top: '130px' }}>
                    <h3 className="serif" style={{ fontSize: '22px', color: 'var(--ink)', marginBottom: '20px', paddingBottom: '12px', borderBottom: '1px solid var(--line-soft)' }}>
                      Job Overview
                    </h3>
                    
                    <div style={{ marginBottom: 16 }}>
                      <span className="mono" style={{ display: 'block', fontSize: 10, color: 'var(--ink-3)', marginBottom: 2 }}>Role Title</span>
                      <span style={{ fontSize: 14, fontWeight: 600, color: 'var(--ink)' }}>GLP-1 Weight Loss Salesperson</span>
                    </div>

                    <div style={{ marginBottom: 16 }}>
                      <span className="mono" style={{ display: 'block', fontSize: 10, color: 'var(--ink-3)', marginBottom: 2 }}>Department</span>
                      <span style={{ fontSize: 14, fontWeight: 600, color: 'var(--ink)' }}>Patient Acquisition &amp; Sales</span>
                    </div>

                    <div style={{ marginBottom: 16 }}>
                      <span className="mono" style={{ display: 'block', fontSize: 10, color: 'var(--ink-3)', marginBottom: 2 }}>Location</span>
                      <span style={{ fontSize: 14, fontWeight: 600, color: 'var(--ink)' }}>Remote (USA)</span>
                    </div>

                    <div style={{ marginBottom: 16 }}>
                      <span className="mono" style={{ display: 'block', fontSize: 10, color: 'var(--ink-3)', marginBottom: 2 }}>Employment Type</span>
                      <span style={{ fontSize: 14, fontWeight: 600, color: 'var(--ink)' }}>Full-Time</span>
                    </div>

                    <div style={{ marginBottom: 16 }}>
                      <span className="mono" style={{ display: 'block', fontSize: 10, color: 'var(--ink-3)', marginBottom: 2 }}>Base Salary</span>
                      <span style={{ fontSize: 14, fontWeight: 600, color: 'var(--ink)' }}>$45,000 - $55,000 / yr</span>
                    </div>

                    <div style={{ marginBottom: 16 }}>
                      <span className="mono" style={{ display: 'block', fontSize: 10, color: 'var(--ink-3)', marginBottom: 2 }}>On-Target Earnings</span>
                      <span style={{ fontSize: 14, fontWeight: 600, color: 'var(--ink)' }}>$65,000 - $140,000+ OTE</span>
                    </div>

                    <div style={{ marginBottom: 16 }}>
                      <span className="mono" style={{ display: 'block', fontSize: 10, color: 'var(--ink-3)', marginBottom: 2 }}>Key Products</span>
                      <span style={{ fontSize: 14, fontWeight: 600, color: 'var(--ink)' }}>Semaglutide &amp; Tirzepatide</span>
                    </div>

                    <CareersSidebarApplyButton />

                    <div style={{ fontSize: 11, color: 'var(--ink-3)', textAlign: 'center', marginTop: 12 }}>
                      ⚡ Instant Resume Parser Enabled
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </section>
        </div>
      </CareersSalespersonClient>
    </>
  );
}
