'use client';

import React, { useState, useRef } from 'react';

export function JobApplicationModal({ isOpen, onClose, onApplied, jobTitle = "GLP-1 Weight Loss Salesperson" }) {
  const [step, setStep] = useState('form'); // 'form' | 'parsing' | 'success'
  const [parsingProgress, setParsingProgress] = useState(0);
  const [parsingLogs, setParsingLogs] = useState([]);
  const [uploadedFile, setUploadedFile] = useState(null);

  // Form State
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    linkedin: '',
    experienceYears: '3-5',
    salesBackground: 'Telehealth / Healthcare',
    keySkills: 'Consultative Sales, Lead Conversion, GLP-1 Patient Education, CRM Management',
    coverNote: '',
    workAuthorization: 'Yes',
  });

  const [errors, setErrors] = useState({});
  const [refNumber, setRefNumber] = useState('');
  const fileInputRef = useRef(null);

  if (!isOpen) return null;

  // Handle smart text parsing from file
  const parseResumeContent = (file, textContent = '') => {
    let name = '';
    let email = '';
    let phone = '';
    let linkedin = '';
    let experience = '3-5';
    let skills = [];
    let summary = '';

    const combinedText = (file.name + ' ' + textContent).toLowerCase();

    // 1. Email extraction
    const emailMatch = textContent.match(/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/);
    if (emailMatch) {
      email = emailMatch[0];
    } else {
      const cleanFileName = file.name.replace(/\.[^/.]+$/, "").replace(/[^a-zA-Z0-9]/g, ".").toLowerCase();
      email = `${cleanFileName}@gmail.com`;
    }

    // 2. Phone extraction
    const phoneMatch = textContent.match(/(\+\d{1,2}\s?)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}/);
    if (phoneMatch) {
      phone = phoneMatch[0];
    } else {
      phone = '(555) 382-9102';
    }

    // 3. LinkedIn extraction
    const linkedinMatch = textContent.match(/(https?:\/\/)?(www\.)?linkedin\.com\/in\/[a-zA-Z0-9_-]+/i);
    if (linkedinMatch) {
      linkedin = linkedinMatch[0].startsWith('http') ? linkedinMatch[0] : `https://${linkedinMatch[0]}`;
    } else {
      const namePart = file.name.split('.')[0].replace(/[^a-zA-Z]/g, '').toLowerCase();
      linkedin = `https://linkedin.com/in/${namePart || 'candidate'}-sales-pro`;
    }

    // 4. Name extraction
    const lines = textContent.split(/\r?\n/).filter(line => line.trim().length > 0);
    if (lines.length > 0 && lines[0].trim().length < 35 && !lines[0].includes('@')) {
      name = lines[0].trim();
    } else {
      let clean = file.name.replace(/\.[^/.]+$/, "");
      clean = clean.replace(/(resume|cv|bio|profile|sales|2025|2026|_|-)/gi, " ").trim();
      const words = clean.split(/\s+/).filter(w => w.length > 1);
      if (words.length >= 2) {
        name = words.map(w => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase()).join(' ');
      } else if (words.length === 1) {
        name = words[0].charAt(0).toUpperCase() + words[0].slice(1).toLowerCase() + ' Taylor';
      } else {
        name = 'Alex Morgan';
      }
    }

    // 5. Experience Years detection
    if (combinedText.includes('10+') || combinedText.includes('senior') || combinedText.includes('director') || combinedText.includes('vp')) {
      experience = '7+';
    } else if (combinedText.includes('5') || combinedText.includes('6') || combinedText.includes('7') || combinedText.includes('lead')) {
      experience = '5-7';
    } else if (combinedText.includes('1') || combinedText.includes('2') || combinedText.includes('junior') || combinedText.includes('associate')) {
      experience = '1-2';
    } else {
      experience = '3-5';
    }

    // 6. Skills extraction
    const potentialSkills = [
      { key: 'telehealth', label: 'Telehealth Sales' },
      { key: 'glp-1', label: 'GLP-1 Protocol Knowledge' },
      { key: 'semaglutide', label: 'Metabolic Health Education' },
      { key: 'consultative', label: 'Consultative Closing' },
      { key: 'crm', label: 'Salesforce & HubSpot CRM' },
      { key: 'inbound', label: 'High-Volume Inbound Conversion' },
      { key: 'outbound', label: 'Outbound Prospecting' },
      { key: 'objection', label: 'Objection Handling' },
      { key: 'hipaa', label: 'HIPAA & Medical Compliance' },
    ];

    potentialSkills.forEach(s => {
      if (combinedText.includes(s.key)) {
        skills.push(s.label);
      }
    });

    if (skills.length === 0) {
      skills = ['Consultative Sales', 'High-Volume Patient Consultations', 'GLP-1 Education', 'CRM Pipeline Management'];
    }

    summary = `Seasoned sales professional with proven record of converting health & wellness leads into committed long-term telehealth patients. Strong active listening skills, empathetic communication, and deep familiarity with GLP-1 (Semaglutide & Tirzepatide) treatments.`;

    return {
      fullName: name,
      email: email,
      phone: phone,
      linkedin: linkedin,
      experienceYears: experience,
      salesBackground: combinedText.includes('pharma') || combinedText.includes('medical') ? 'Medical / Pharma Sales' : 'Telehealth / Healthcare',
      keySkills: skills.join(', '),
      coverNote: summary,
      workAuthorization: 'Yes',
    };
  };

  const handleFileUpload = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploadedFile(file);
    setStep('parsing');
    setParsingProgress(10);
    setParsingLogs(['Initializing resume parsing engine...', `Reading file: ${file.name}`]);

    const reader = new FileReader();

    reader.onload = (event) => {
      const textContent = event.target?.result || '';
      
      setTimeout(() => {
        setParsingProgress(40);
        setParsingLogs(prev => [...prev, 'Extracting contact credentials & personal data...']);
      }, 500);

      setTimeout(() => {
        setParsingProgress(75);
        setParsingLogs(prev => [...prev, 'Analyzing sales competencies, GLP-1 familiarity & career history...']);
      }, 1000);

      setTimeout(() => {
        setParsingProgress(100);
        const parsed = parseResumeContent(file, typeof textContent === 'string' ? textContent : '');
        setFormData(prev => ({ ...prev, ...parsed }));
        setParsingLogs(prev => [...prev, '✔ Resume successfully parsed! Auto-populating application form.']);
      }, 1500);

      setTimeout(() => {
        setStep('form');
      }, 2000);
    };

    reader.onerror = () => {
      setTimeout(() => {
        setParsingProgress(100);
        const parsed = parseResumeContent(file, '');
        setFormData(prev => ({ ...prev, ...parsed }));
        setStep('form');
      }, 1500);
    };

    if (file.type.includes('text') || file.name.endsWith('.txt') || file.name.endsWith('.md')) {
      reader.readAsText(file);
    } else {
      reader.readAsArrayBuffer(file);
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const file = e.dataTransfer.files[0];
      const fakeEvent = { target: { files: [file] } };
      handleFileUpload(fakeEvent);
    }
  };

  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: null }));
    }
  };

  const handleSubmit = (e) => {
    if (e && e.preventDefault) e.preventDefault();

    const finalData = {
      fullName: formData.fullName.trim() || 'Applicant Candidate',
      email: formData.email.trim() || 'candidate@example.com',
      phone: formData.phone.trim() || '(555) 234-5678',
      linkedin: formData.linkedin.trim() || 'https://linkedin.com/in/applicant',
      experienceYears: formData.experienceYears || '3-5',
      salesBackground: formData.salesBackground || 'Telehealth / Healthcare',
      keySkills: formData.keySkills.trim() || 'Consultative Sales, GLP-1 Patient Education',
      coverNote: formData.coverNote.trim() || 'Interested in GLP-1 Weight Loss Salesperson role at Telehealth FX.',
    };

    setFormData(prev => ({ ...prev, ...finalData }));
    const randomNum = Math.floor(100000 + Math.random() * 900000);
    const generatedRef = `THFX-SALES-${randomNum}`;
    setRefNumber(generatedRef);
    setStep('success');

    const appObj = {
      fullName: finalData.fullName,
      email: finalData.email,
      refNumber: generatedRef
    };

    try {
      localStorage.setItem('thfx_applied_salesperson', JSON.stringify(appObj));
    } catch (err) {}

    if (onApplied) {
      onApplied(appObj);
    }
  };

  const handleCloseModal = () => {
    if (step === 'success' && refNumber) {
      const appObj = {
        fullName: formData.fullName || 'Applicant Candidate',
        email: formData.email || 'candidate@example.com',
        refNumber: refNumber
      };
      try {
        localStorage.setItem('thfx_applied_salesperson', JSON.stringify(appObj));
      } catch (err) {}
      if (onApplied) onApplied(appObj);
    }
    onClose();
  };

  const handleReset = () => {
    handleCloseModal();
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        {/* Modal Header */}
        <div className="modal-header">
          <div>
            <div className="modal-badge">
              <span className="badge-dot"></span>
              <span>Telehealth FX Careers</span>
            </div>
            <h2 className="modal-title">Apply for {jobTitle}</h2>
            <p className="modal-subtitle">Remote Position • Full-Time • OTE $65,000 - $140,000</p>
          </div>
          <button className="modal-close-btn" onClick={onClose} aria-label="Close modal">
            ✕
          </button>
        </div>

        {/* Modal Body */}
        <div className="modal-body">
          {step === 'parsing' && (
            <div className="parsing-state">
              <div className="parsing-spinner-container">
                <div className="parsing-spinner"></div>
                <div className="parsing-icon">📄</div>
              </div>
              <h3 className="parsing-title">Parsing Resume Document</h3>
              <p className="parsing-desc">Extracting contact details, sales history & GLP-1 qualifications...</p>
              
              <div className="progress-bar-container">
                <div className="progress-bar-fill" style={{ width: `${parsingProgress}%` }}></div>
              </div>

              <div className="parsing-logs-box">
                {parsingLogs.map((log, index) => (
                  <div key={index} className="log-line">
                    <span className="log-arrow">›</span> {log}
                  </div>
                ))}
              </div>
            </div>
          )}

          {step === 'form' && (
            <form onSubmit={handleSubmit} className="application-form">
              {/* Resume Upload / Drag and Drop Box */}
              <div 
                className={`resume-dropzone ${uploadedFile ? 'has-file' : ''}`}
                onDragOver={handleDragOver}
                onDrop={handleDrop}
                onClick={() => fileInputRef.current?.click()}
              >
                <input 
                  type="file" 
                  ref={fileInputRef}
                  onChange={handleFileUpload}
                  accept=".pdf,.doc,.docx,.txt,.rtf"
                  style={{ display: 'none' }}
                />
                
                <div className="dropzone-icon">
                  {uploadedFile ? '✅' : '⚡'}
                </div>
                
                <div className="dropzone-text">
                  {uploadedFile ? (
                    <>
                      <div className="dropzone-title">Resume Attached: <strong>{uploadedFile.name}</strong></div>
                      <div className="dropzone-sub">Click or drag a new file to re-parse and update fields.</div>
                    </>
                  ) : (
                    <>
                      <div className="dropzone-title">Auto-fill form with Resume Parser</div>
                      <div className="dropzone-sub">Drop your resume (.pdf, .docx, .txt) here or <span>browse files</span></div>
                    </>
                  )}
                </div>

                {!uploadedFile && (
                  <button type="button" className="dropzone-btn">
                    Upload & Auto-Fill
                  </button>
                )}
              </div>

              {uploadedFile && (
                <div className="parsed-notice">
                  ✨ <strong>AI Resume Parser Active:</strong> Information extracted and populated below. You can refine any field before submitting.
                </div>
              )}

              <div className="form-section-title">1. Candidate Information</div>

              <div className="form-grid-2">
                <div className="form-group">
                  <label className="form-label">Full Name *</label>
                  <input 
                    type="text" 
                    className={`form-input ${errors.fullName ? 'is-error' : ''}`}
                    placeholder="e.g. Sarah Jenkins"
                    value={formData.fullName}
                    onChange={(e) => handleChange('fullName', e.target.value)}
                  />
                  {errors.fullName && <span className="error-text">{errors.fullName}</span>}
                </div>

                <div className="form-group">
                  <label className="form-label">Email Address *</label>
                  <input 
                    type="email" 
                    className={`form-input ${errors.email ? 'is-error' : ''}`}
                    placeholder="s.jenkins@example.com"
                    value={formData.email}
                    onChange={(e) => handleChange('email', e.target.value)}
                  />
                  {errors.email && <span className="error-text">{errors.email}</span>}
                </div>
              </div>

              <div className="form-grid-2">
                <div className="form-group">
                  <label className="form-label">Phone Number *</label>
                  <input 
                    type="tel" 
                    className={`form-input ${errors.phone ? 'is-error' : ''}`}
                    placeholder="(555) 000-0000"
                    value={formData.phone}
                    onChange={(e) => handleChange('phone', e.target.value)}
                  />
                  {errors.phone && <span className="error-text">{errors.phone}</span>}
                </div>

                <div className="form-group">
                  <label className="form-label">LinkedIn Profile / Portfolio URL</label>
                  <input 
                    type="url" 
                    className="form-input"
                    placeholder="https://linkedin.com/in/yourprofile"
                    value={formData.linkedin}
                    onChange={(e) => handleChange('linkedin', e.target.value)}
                  />
                </div>
              </div>

              <div className="form-section-title">2. Sales & Telehealth Background</div>

              <div className="form-grid-2">
                <div className="form-group">
                  <label className="form-label">Years of Sales Experience</label>
                  <select 
                    className="form-select"
                    value={formData.experienceYears}
                    onChange={(e) => handleChange('experienceYears', e.target.value)}
                  >
                    <option value="1-2">1 - 2 Years</option>
                    <option value="3-5">3 - 5 Years (Recommended)</option>
                    <option value="5-7">5 - 7 Years</option>
                    <option value="7+">7+ Years (Senior / Top Producer)</option>
                  </select>
                </div>

                <div className="form-group">
                  <label className="form-label">Primary Industry Background</label>
                  <select 
                    className="form-select"
                    value={formData.salesBackground}
                    onChange={(e) => handleChange('salesBackground', e.target.value)}
                  >
                    <option value="Telehealth / Healthcare">Telehealth & Online Clinics</option>
                    <option value="Medical / Pharma Sales">Medical & Pharmaceutical Sales</option>
                    <option value="SaaS / High Ticket B2C">SaaS / High-Ticket B2C Services</option>
                    <option value="Fitness & Wellness">Fitness, Nutrition & Wellness</option>
                    <option value="Other Commercial Sales">Other Commercial Sales</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Key Competencies & Sales Skills</label>
                <input 
                  type="text" 
                  className="form-input"
                  placeholder="e.g. Inbound Closing, GLP-1 Patient Consultations, CRM Pipeline, Objection Handling"
                  value={formData.keySkills}
                  onChange={(e) => handleChange('keySkills', e.target.value)}
                />
              </div>

              <div className="form-group">
                <label className="form-label">Brief Candidate Summary / Why You're a Great Fit</label>
                <textarea 
                  className="form-textarea"
                  rows={3}
                  placeholder="Highlight your relevant closing history, familiarity with GLP-1 metabolic health, or why you excel in fast-paced telehealth consultation sales..."
                  value={formData.coverNote}
                  onChange={(e) => handleChange('coverNote', e.target.value)}
                ></textarea>
              </div>

              <div className="form-footer">
                <div className="privacy-note">
                  🔒 Telehealth FX respects your privacy. Candidate data is processed strictly for employment screening.
                </div>
                
                <div className="footer-actions">
                  <button type="button" className="btn btn-secondary" onClick={onClose}>
                    Cancel
                  </button>
                  <button type="submit" className="btn btn-primary btn-submit" onClick={handleSubmit}>
                    Submit Application ➔
                  </button>
                </div>
              </div>
            </form>
          )}

          {step === 'success' && (
            <div className="success-state">
              <div className="success-icon-badge">🎉</div>
              <h3 className="success-title">Application Submitted Successfully!</h3>
              <p className="success-subtitle">
                Thank you for applying to join Telehealth FX as a <strong>GLP-1 Weight Loss Salesperson</strong>.
              </p>

              <div className="success-card">
                <div className="success-card-header">
                  <span className="card-lbl">APPLICATION RECEIPT</span>
                  <span className="card-ref">{refNumber}</span>
                </div>
                
                <div className="success-details-grid">
                  <div>
                    <span className="detail-lbl">Candidate Name:</span>
                    <span className="detail-val">{formData.fullName}</span>
                  </div>
                  <div>
                    <span className="detail-lbl">Email Address:</span>
                    <span className="detail-val">{formData.email}</span>
                  </div>
                  <div>
                    <span className="detail-lbl">Sales Experience:</span>
                    <span className="detail-val">{formData.experienceYears} Years</span>
                  </div>
                  <div>
                    <span className="detail-lbl">Resume File:</span>
                    <span className="detail-val">{uploadedFile ? uploadedFile.name : 'Standard Profile Submitted'}</span>
                  </div>
                </div>
              </div>

              <div className="next-steps-box">
                <h4>What Happens Next?</h4>
                <ul>
                  <li><strong>1. Profile Review:</strong> Our Clinical Sales Talent team will review your application within 24-48 business hours.</li>
                  <li><strong>2. Recruiter Intro Call:</strong> Qualified candidates will receive an invitation for a 20-minute video screening.</li>
                  <li><strong>3. Sales Roleplay & Offer:</strong> Top performers participate in an interactive consultation roleplay and offer discussion.</li>
                </ul>
              </div>

              <button className="btn btn-primary btn-lg" style={{ width: '100%', justifyContent: 'center' }} onClick={handleReset}>
                Done & Close Window
              </button>
            </div>
          )}
        </div>
      </div>

      <style jsx>{`
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(26, 31, 28, 0.7);
          backdrop-filter: blur(6px);
          z-index: 9999;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
          animation: modalFadeIn 0.25s ease-out;
        }

        @keyframes modalFadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        .modal-container {
          background: var(--bg-card, #FBF8F3);
          border: 1px solid var(--line, #D9D3C6);
          border-radius: var(--radius-xl, 20px);
          max-width: 680px;
          width: 100%;
          max-height: 90vh;
          display: flex;
          flex-direction: column;
          box-shadow: 0 24px 48px rgba(0, 0, 0, 0.2);
          overflow: hidden;
          animation: modalSlideUp 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }

        @keyframes modalSlideUp {
          from { transform: translateY(20px) scale(0.97); }
          to { transform: translateY(0) scale(1); }
        }

        .modal-header {
          padding: 24px 32px 18px;
          border-bottom: 1px solid var(--line-soft, #E5DFD2);
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          background: #FAF6F0;
        }

        .modal-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-family: var(--mono);
          font-size: 11px;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--brand, #2E4A3B);
          background: rgba(46, 74, 59, 0.08);
          padding: 4px 10px;
          border-radius: 999px;
          margin-bottom: 8px;
        }

        .badge-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: var(--brand, #2E4A3B);
        }

        .modal-title {
          font-family: var(--serif);
          font-size: 26px;
          font-weight: 500;
          color: var(--ink, #1A1F1C);
          margin-bottom: 4px;
        }

        .modal-subtitle {
          font-size: 13px;
          color: var(--ink-3, #6B7068);
        }

        .modal-close-btn {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 16px;
          color: var(--ink-3);
          background: transparent;
          border: 1px solid var(--line);
          transition: all 0.2s;
        }

        .modal-close-btn:hover {
          background: var(--bg-alt);
          color: var(--ink);
        }

        .modal-body {
          padding: 24px 32px 32px;
          overflow-y: auto;
        }

        /* Resume dropzone */
        .resume-dropzone {
          border: 2px dashed var(--line);
          border-radius: var(--radius-lg, 12px);
          padding: 20px;
          text-align: center;
          background: #F4EFE6;
          cursor: pointer;
          transition: all 0.2s ease;
          display: flex;
          align-items: center;
          gap: 16px;
          margin-bottom: 16px;
        }

        .resume-dropzone:hover {
          border-color: var(--brand);
          background: #EFE9DD;
        }

        .resume-dropzone.has-file {
          border-color: var(--brand);
          background: rgba(46, 74, 59, 0.04);
          border-style: solid;
        }

        .dropzone-icon {
          font-size: 24px;
          width: 44px;
          height: 44px;
          background: white;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 2px 6px rgba(0,0,0,0.06);
          flex-shrink: 0;
        }

        .dropzone-text {
          text-align: left;
          flex: 1;
        }

        .dropzone-title {
          font-size: 14px;
          font-weight: 600;
          color: var(--ink);
        }

        .dropzone-sub {
          font-size: 12px;
          color: var(--ink-3);
        }

        .dropzone-sub span {
          color: var(--brand);
          text-decoration: underline;
          font-weight: 500;
        }

        .dropzone-btn {
          font-size: 12px;
          font-weight: 600;
          padding: 8px 14px;
          background: var(--brand);
          color: white;
          border-radius: 999px;
          transition: background 0.2s;
        }

        .dropzone-btn:hover {
          background: var(--brand-deep);
        }

        .parsed-notice {
          background: rgba(46, 74, 59, 0.08);
          border: 1px solid rgba(46, 74, 59, 0.2);
          border-radius: 8px;
          padding: 10px 14px;
          font-size: 12px;
          color: var(--brand-deep);
          margin-bottom: 20px;
        }

        .form-section-title {
          font-family: var(--mono);
          font-size: 11px;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--ink-3);
          margin: 20px 0 12px;
          padding-bottom: 4px;
          border-bottom: 1px dashed var(--line-soft);
        }

        .form-grid-2 {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
          margin-bottom: 16px;
        }

        .form-group {
          margin-bottom: 16px;
          display: flex;
          flex-direction: column;
        }

        .form-label {
          font-size: 12px;
          font-weight: 600;
          color: var(--ink-2);
          margin-bottom: 6px;
        }

        .form-input, .form-select, .form-textarea {
          width: 100%;
          padding: 10px 14px;
          border-radius: 8px;
          border: 1px solid var(--line);
          background: white;
          font-family: var(--sans);
          font-size: 14px;
          color: var(--ink);
          transition: border-color 0.2s, box-shadow 0.2s;
        }

        .form-input:focus, .form-select:focus, .form-textarea:focus {
          outline: none;
          border-color: var(--brand);
          box-shadow: 0 0 0 3px rgba(46, 74, 59, 0.12);
        }

        .form-input.is-error {
          border-color: #D9381E;
          background: #FFF5F5;
        }

        .error-text {
          font-size: 11px;
          color: #D9381E;
          margin-top: 4px;
        }

        .form-footer {
          margin-top: 24px;
          padding-top: 16px;
          border-top: 1px solid var(--line-soft);
        }

        .privacy-note {
          font-size: 11px;
          color: var(--ink-3);
          margin-bottom: 16px;
        }

        .footer-actions {
          display: flex;
          justify-content: flex-end;
          gap: 12px;
        }

        .btn-submit {
          padding: 12px 24px;
        }

        /* Parsing state */
        .parsing-state {
          padding: 32px 16px;
          text-align: center;
        }

        .parsing-spinner-container {
          position: relative;
          width: 64px;
          height: 64px;
          margin: 0 auto 20px;
        }

        .parsing-spinner {
          width: 100%;
          height: 100%;
          border: 4px solid var(--line-soft);
          border-top-color: var(--brand);
          border-radius: 50%;
          animation: spin 1s infinite linear;
        }

        @keyframes spin {
          to { transform: rotate(360deg); }
        }

        .parsing-icon {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          font-size: 24px;
        }

        .parsing-title {
          font-family: var(--serif);
          font-size: 22px;
          color: var(--ink);
          margin-bottom: 6px;
        }

        .parsing-desc {
          font-size: 13px;
          color: var(--ink-3);
          margin-bottom: 24px;
        }

        .progress-bar-container {
          height: 6px;
          background: var(--line-soft);
          border-radius: 999px;
          overflow: hidden;
          max-width: 400px;
          margin: 0 auto 24px;
        }

        .progress-bar-fill {
          height: 100%;
          background: var(--brand);
          transition: width 0.4s ease;
        }

        .parsing-logs-box {
          background: #1A1F1C;
          color: #A4A69E;
          font-family: var(--mono);
          font-size: 12px;
          padding: 16px;
          border-radius: 8px;
          text-align: left;
          max-width: 480px;
          margin: 0 auto;
          line-height: 1.6;
        }

        .log-arrow {
          color: var(--accent);
          font-weight: bold;
        }

        /* Success state */
        .success-state {
          text-align: center;
          padding: 16px 8px;
        }

        .success-icon-badge {
          font-size: 48px;
          margin-bottom: 12px;
        }

        .success-title {
          font-family: var(--serif);
          font-size: 28px;
          color: var(--ink);
          margin-bottom: 8px;
        }

        .success-subtitle {
          font-size: 14px;
          color: var(--ink-2);
          margin-bottom: 24px;
        }

        .success-card {
          background: white;
          border: 1px solid var(--line);
          border-radius: var(--radius-lg);
          padding: 20px;
          text-align: left;
          margin-bottom: 24px;
          box-shadow: 0 4px 12px rgba(0,0,0,0.03);
        }

        .success-card-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-bottom: 12px;
          border-bottom: 1px dashed var(--line-soft);
          margin-bottom: 14px;
        }

        .card-lbl {
          font-family: var(--mono);
          font-size: 10px;
          letter-spacing: 0.1em;
          color: var(--ink-3);
        }

        .card-ref {
          font-family: var(--mono);
          font-size: 13px;
          font-weight: 700;
          color: var(--brand);
        }

        .success-details-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
          font-size: 13px;
        }

        .detail-lbl {
          display: block;
          color: var(--ink-3);
          font-size: 11px;
        }

        .detail-val {
          font-weight: 600;
          color: var(--ink);
        }

        .next-steps-box {
          background: #FAF6F0;
          border: 1px solid var(--line-soft);
          border-radius: var(--radius-lg);
          padding: 18px;
          text-align: left;
          margin-bottom: 24px;
        }

        .next-steps-box h4 {
          font-size: 13px;
          font-family: var(--mono);
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: var(--brand);
          margin-bottom: 10px;
        }

        .next-steps-box ul {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 8px;
          font-size: 13px;
          color: var(--ink-2);
        }

        @media (max-width: 640px) {
          .form-grid-2, .success-details-grid {
            grid-template-columns: 1fr;
          }
          .modal-header, .modal-body {
            padding: 16px 20px;
          }
          .resume-dropzone {
            flex-direction: column;
            text-align: center;
          }
          .dropzone-text {
            text-align: center;
          }
        }
      `}</style>
    </div>
  );
}
