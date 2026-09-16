"use client";
import React, { useState } from "react";
import { Icon } from "./common.jsx";

const FAQ_SECTIONS = [
  {
    category: "Eligibility & Physician Intake",
    items: [
      {
        q: "Who is clinically eligible for the Telehealth FX weight loss program?",
        a: "Eligible patients generally include adults aged 18 and older with a Body Mass Index (BMI) of 30 or greater, or a BMI of 27 or greater with at least one weight-related condition such as hypertension, dyslipidemia, or insulin resistance. All prospective patients complete an online medical intake that is evaluated by a physician licensed in their state."
      },
      {
        q: "How does the online consultation work without an in-person office visit?",
        a: "We utilize asynchronous telehealth store-and-forward intake approved by state medical boards. You complete a comprehensive digital health evaluation covering your health history, concurrent medications, vital signs, and metabolic goals. A licensed physician reviews your file within 24 hours. If clinically indicated, a prescription is transmitted directly to our partner pharmacy."
      },
      {
        q: "What medical conditions preclude someone from GLP-1 therapy?",
        a: "Contraindications include a personal or family history of Medullary Thyroid Carcinoma (MTC), Multiple Endocrine Neoplasia syndrome type 2 (MEN 2), active pancreatitis, severe gastrointestinal disease (such as gastroparesis), and pregnancy or breastfeeding. Your physician screens thoroughly for these conditions during intake."
      },
      {
        q: "Can I switch to Telehealth FX if I already have a GLP-1 prescription elsewhere?",
        a: "Yes. Patients transferring from other telehealth clinics or local pharmacies can upload verification of their current dose. Our physicians can prescribe at your established maintenance dosage without forcing you to restart at the introductory titration level."
      }
    ]
  },
  {
    category: "Compounding & 503A Pharmacy Quality",
    items: [
      {
        q: "What is a 503A compounding pharmacy?",
        a: "A 503A compounding pharmacy is licensed by state boards of pharmacy to formulate customized, patient-specific medications pursuant to a prescription from a licensed healthcare provider under Section 503A of the Federal Food, Drug, and Cosmetic Act (21 U.S.C. § 353a). They must comply with United States Pharmacopeia (USP) guidelines for sterile compounding (USP <797>)."
      },
      {
        q: "How is the quality and sterility of compounded Semaglutide and Tirzepatide verified?",
        a: "Partner pharmacies source active pharmaceutical ingredients (APIs) from FDA-registered suppliers. Every compound batch undergoes third-party analytical testing with a Certificate of Analysis (COA) confirming chemical purity, correct concentration, endotoxin safety, and sterility before dispensing."
      },
      {
        q: "Are compounded GLP-1 medications FDA-approved?",
        a: "No. Compounded medications are customized by state-licensed compounding pharmacies to meet individual clinical needs and are not evaluated or approved by the FDA prior to marketing. They are prepared pursuant to a doctor prescription in accordance with Section 503A regulations."
      },
      {
        q: "What is the difference between Semaglutide and Tirzepatide?",
        a: "Semaglutide is a single GLP-1 receptor agonist that slows digestion and regulates appetite. Tirzepatide is a first-in-class dual incretin agonist targeting both GLP-1 and GIP receptors. In clinical trials, Tirzepatide demonstrated higher average total weight loss (up to 21% vs. 15% for Semaglutide)."
      }
    ]
  },
  {
    category: "Dosing, Titration & Side Effects",
    items: [
      {
        q: "Why is gradual dosage titration necessary?",
        a: "GLP-1 receptor agonists require step-wise monthly titration (e.g., Semaglutide 0.25mg to 0.5mg to 1.0mg to 1.7mg to 2.4mg) to allow the gastrointestinal tract and brain satiety centers to adapt. Titrating slowly dramatically reduces transient nausea and gastrointestinal discomfort."
      },
      {
        q: "How are subcutaneous injections administered?",
        a: "Injections are administered once weekly using an ultra-fine insulin needle into the subcutaneous fat layer of the abdomen, anterior thigh, or outer upper arm. Injections are virtually painless and take under 30 seconds."
      },
      {
        q: "What are the most common side effects and how are they managed?",
        a: "The most common side effects are mild nausea, constipation, acid reflux, and temporary fatigue. These symptoms typically diminish within 1–2 weeks of each dose adjustment. Staying hydrated with electrolytes, eating smaller high-protein meals, and avoiding high-fat greasy foods significantly minimizes discomfort."
      },
      {
        q: "How do I prevent muscle loss while losing weight on GLP-1s?",
        a: "Preserving lean skeletal muscle is essential. We recommend consuming 1.0–1.2 grams of protein per pound of target body weight daily, paired with resistance training 2–3 times per week. Peptide co-therapies like Sermorelin can also be clinically prescribed to support growth hormone release and muscle retention."
      }
    ]
  },
  {
    category: "Cold-Chain Shipping & Storage",
    items: [
      {
        q: "How are medications packaged to preserve temperature stability?",
        a: "All injectable peptides are shipped in custom medical-grade thermal insulated packaging with conditioned phase-change cold packs. Shipments travel via expedited carrier transit (FedEx or UPS 1–2 Day Express) to maintain a temperature between 36°F and 46°F (2°C to 8°C)."
      },
      {
        q: "What should I do as soon as my package arrives?",
        a: "Open the insulated shipper and immediately transfer the medication vial into your household refrigerator. Keep it stored between 36°F and 46°F. Do not freeze the medication, and keep it away from the refrigerator freezer vent."
      },
      {
        q: "What if the ice packs are partially melted when my shipment arrives?",
        a: "During warm summer transit, cold packs are designed to absorb heat and may feel soft or thawed. As long as the medication vial is cool to the touch and has not been exposed to extreme prolonged heat, the peptide remains stable and biologically active."
      },
      {
        q: "Are shipments discreet?",
        a: "Yes. All shipments arrive in standard, unmarked express mailers with no external branding, medication names, or references to weight loss or hormone therapy."
      }
    ]
  },
  {
    category: "Pricing, Billing & Subscription",
    items: [
      {
        q: "How much does the program cost per month?",
        a: "Our programs feature transparent, all-inclusive flat pricing. First-month introductory promotions start from $99 for compounded Semaglutide and $99 for compounded Tirzepatide. Pricing includes the doctor evaluation, medication, injection supplies, and cold-pack shipping."
      },
      {
        q: "Can I pay using my HSA or FSA card?",
        a: "Yes. Doctor-prescribed compounded weight management medications and TRT are qualified medical expenses under IRS guidelines. You can check out directly using your HSA or FSA debit card, or request an itemized receipt/superbill for reimbursement."
      },
      {
        q: "Does Telehealth FX accept commercial health insurance?",
        a: "We operate on a transparent direct-pay model and do not directly bill insurance. This allows us to bypass lengthy prior authorizations, step therapy mandates, and unpredictable deductible copays, offering flat-rate pricing to all members."
      },
      {
        q: "Can I cancel or pause my subscription at any time?",
        a: "Yes. There are no contracts, lock-in commitments, or cancellation fees. You can pause or cancel your recurring plan at any time through your member dashboard before your next monthly refill is compounded."
      }
    ]
  }
];

export function KnowledgeBaseFAQ() {
  const [openItems, setOpenItems] = useState({});

  const toggleItem = (sectionIdx, itemIdx) => {
    const key = `${sectionIdx}-${itemIdx}`;
    setOpenItems(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const allFaqs = FAQ_SECTIONS.flatMap(s => s.items);
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": allFaqs.map(f => ({
      "@type": "Question",
      "name": f.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": f.a
      }
    }))
  };

  return (
    <div style={{ background: "#FBF8F3", minHeight: "100vh", padding: "40px 24px 80px" }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div style={{ maxWidth: 900, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 56 }}>
          <div className="eyebrow" style={{ marginBottom: 16, textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--brand)", fontWeight: 600, fontSize: 13 }}>
            Knowledge Base &amp; FAQ
          </div>
          <h1 className="serif" style={{ fontSize: "clamp(36px, 5vw, 56px)", lineHeight: 1.15, marginBottom: 20 }}>
            Clinical &amp; Program <span style={{ fontStyle: "italic", color: "var(--brand)" }}>Questions, Answered.</span>
          </h1>
          <p style={{ fontSize: 18, color: "var(--ink-2)", maxWidth: 640, margin: "0 auto", lineHeight: 1.6 }}>
            Everything you need to know regarding physician intake, 503A compounding safety, medication administration, cold-chain delivery, and pricing.
          </p>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 40 }}>
          {FAQ_SECTIONS.map((section, sIdx) => (
            <div
              key={sIdx}
              style={{
                background: "#FFFFFF",
                borderRadius: 20,
                padding: "32px",
                border: "1px solid var(--line-soft)",
                boxShadow: "0 2px 12px rgba(0,0,0,0.02)"
              }}
            >
              <h2 className="serif" style={{ fontSize: 24, marginBottom: 20, color: "var(--ink)", borderBottom: "1px solid var(--line-soft)", paddingBottom: 12 }}>
                {section.category}
              </h2>

              <div style={{ display: "flex", flexDirection: "column" }}>
                {section.items.map((item, iIdx) => {
                  const key = `${sIdx}-${iIdx}`;
                  const isOpen = !!openItems[key];
                  return (
                    <div
                      key={iIdx}
                      style={{
                        borderBottom: iIdx === section.items.length - 1 ? "none" : "1px solid var(--line-soft)",
                        padding: "20px 0"
                      }}
                    >
                      <button
                        onClick={() => toggleItem(sIdx, iIdx)}
                        style={{
                          width: "100%",
                          textAlign: "left",
                          background: "none",
                          border: "none",
                          padding: 0,
                          cursor: "pointer",
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                          gap: 16
                        }}
                      >
                        <span style={{ fontSize: 17, fontWeight: 600, color: "var(--ink)", lineHeight: 1.4 }}>
                          {item.q}
                        </span>
                        <span
                          style={{
                            width: 28,
                            height: 28,
                            borderRadius: "50%",
                            border: "1px solid var(--line)",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            flexShrink: 0,
                            color: "var(--brand)",
                            fontSize: 18,
                            fontWeight: 600
                          }}
                        >
                          {isOpen ? "−" : "+"}
                        </span>
                      </button>
                      {isOpen && (
                        <div style={{ marginTop: 14, color: "var(--ink-2)", fontSize: 15, lineHeight: 1.65 }}>
                          {item.a}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
