"use client";
import React, { useState } from 'react';
import Link from 'next/link';

export function BotanicalGLP1Comparison({ activeMedication = 'semaglutide' }) {
  const [selectedMed, setSelectedMed] = useState(activeMedication);
  const [activeTab, setActiveTab] = useState('all');
  const [supplementMonths, setSupplementMonths] = useState(3);
  const [targetWeightLoss, setTargetWeightLoss] = useState(25);

  const START_URL = "https://go.telehealthfx.com/start";

  const comparisonData = [
    {
      id: 'bioavailability',
      category: 'pharmacokinetics',
      parameter: 'Oral Bioavailability',
      berberine: {
        value: '<5% Bioavailability',
        detail: 'Massive first-pass hepatic metabolism and intestinal P-glycoprotein efflux. Doses >1,500 mg/day trigger acute GI cramping and diarrhea before achieving therapeutic blood concentration.',
        status: 'warning',
      },
      semaglutide: {
        value: '100% Subcutaneous Bioavailability',
        detail: 'Direct subcutaneous peptide absorption bypasses stomach acid degradation and liver clearance, maintaining consistent plasma concentration for 7 full days.',
        status: 'success',
      },
      tirzepatide: {
        value: '100% Subcutaneous Bioavailability',
        detail: 'Dual GIP/GLP-1 systemic peptide delivery with 99%+ bioavailability and sustained receptor activation without gastrointestinal breakdown.',
        status: 'success',
      },
    },
    {
      id: 'weight_loss',
      category: 'efficacy',
      parameter: 'Clinical Weight Loss',
      berberine: {
        value: '2 – 4 lbs (Total Average)',
        detail: 'Meta-analyses of 12–16 week randomized trials show minimal adipose reduction. Most weight change is temporary water and glycogen depletion from mild glucose excretion.',
        status: 'danger',
      },
      semaglutide: {
        value: '15% – 16% Body Weight (~35 lbs)',
        detail: 'STEP-1 clinical trial benchmarks demonstrate sustained, profound visceral and subcutaneous fat reduction with preserved lean muscle mass under clinical titration.',
        status: 'success',
      },
      tirzepatide: {
        value: '21% – 22.5% Body Weight (~50+ lbs)',
        detail: 'SURMOUNT-1 clinical trial equivalents show unmatched metabolic reset and visceral adiposity reduction through synergistic dual-agonist receptor stimulation.',
        status: 'success',
      },
    },
    {
      id: 'food_noise',
      category: 'efficacy',
      parameter: 'Hypothalamic Food Noise Suppression',
      berberine: {
        value: '❌ None (Zero CNS Action)',
        detail: 'Does not cross the blood-brain barrier in therapeutic concentrations. Acts only on peripheral muscle AMPK and cannot quiet constant obsessive food thoughts or binge cravings.',
        status: 'danger',
      },
      semaglutide: {
        value: '✅ Potent CNS Satiety Signaling',
        detail: 'Directly penetrates the hypothalamic arcuate nucleus, agonizing GLP-1 receptors to silence food noise, curb emotional eating, and induce early satiation.',
        status: 'success',
      },
      tirzepatide: {
        value: '✅ Superior Dual-Receptor Satiety',
        detail: 'Dual activation of both GLP-1 and GIP receptors in the central nervous system yields unprecedented eradication of cravings and appetite regulation.',
        status: 'success',
      },
    },
    {
      id: 'frequency',
      category: 'lifestyle',
      parameter: 'Dosing Frequency & Tolerability',
      berberine: {
        value: '3x Daily With Meals (High GI Distress)',
        detail: 'Requires taking 500mg capsules three times daily immediately before food. Common side effects include severe bloating, watery diarrhea, and cramping.',
        status: 'warning',
      },
      semaglutide: {
        value: '1x Weekly Micro-Injection (High Adherence)',
        detail: 'Administered once every 7 days via virtually painless ultra-fine insulin syringe. Steady 168-hour half-life eliminates daily pill schedules and forgetfulness.',
        status: 'success',
      },
      tirzepatide: {
        value: '1x Weekly Micro-Injection (High Adherence)',
        detail: 'Once-per-week subcutaneous administration with smooth pharmacological clearance and individualized titration support.',
        status: 'success',
      },
    },
    {
      id: 'cost',
      category: 'cost',
      parameter: 'Monthly Out-of-Pocket Cost',
      berberine: {
        value: '$75 – $100 / month (OTC Stacks)',
        detail: 'Stacking premium full-spectrum Coptis chinensis extracts, Dihydroberberine (DHB), and Inositol costs $75–$100/mo without medical supervision, labs, or guaranteed outcomes.',
        status: 'warning',
      },
      semaglutide: {
        value: 'From $146 / month (All-Inclusive)',
        detail: 'Physician evaluation, ongoing prescription, quality-tested medication, injection supplies, and insulated overnight cold-chain shipping included with zero hidden fees.',
        status: 'success',
      },
      tirzepatide: {
        value: 'From $249 / month (All-Inclusive)',
        detail: 'Comprehensive dual-agonist protocol with licensed US physician oversight, continuous dosage titration, and cold-pack home delivery.',
        status: 'success',
      },
    },
    {
      id: 'regulatory',
      category: 'safety',
      parameter: 'Regulatory Verification & Quality',
      berberine: {
        value: 'Unstandardized Dietary Supplement',
        detail: 'Regulated under DSHEA 1994 with no pre-market FDA potency approval. Commercial extracts frequently suffer from adulteration, synthetic fillers, and heavy metal contamination (lead/cadmium).',
        status: 'danger',
      },
      semaglutide: {
        value: 'State-Licensed 503A Pharmacy',
        detail: 'Compounded under strict Section 503A standards for individual patient prescriptions. Certificate of Analysis (COA) confirms 99%+ peptide purity and sterility testing.',
        status: 'success',
      },
      tirzepatide: {
        value: 'State-Licensed 503A Pharmacy',
        detail: 'Prepared in USP <797> compliant sterile cleanroom facilities by licensed compounding pharmacists with full batch analytical testing.',
        status: 'success',
      },
    },
  ];

  const filteredData = comparisonData.filter((item) => {
    if (activeTab === 'all') return true;
    if (activeTab === 'efficacy') return item.category === 'efficacy';
    if (activeTab === 'pharmacology') return item.category === 'pharmacokinetics' || item.category === 'lifestyle';
    if (activeTab === 'economics') return item.category === 'cost' || item.category === 'safety';
    return true;
  });

  // Calculate estimated supplement waste vs clinical GLP-1
  const monthlySupplementCost = 85;
  const totalSupplementWasted = supplementMonths * monthlySupplementCost;
  const glp1PredictedWeightLoss = Math.round(targetWeightLoss * 0.9);

  return (
    <div
      style={{
        backgroundColor: '#FFFFFF',
        border: '1px solid var(--line-soft, #E5E0D8)',
        borderRadius: '20px',
        padding: '36px 28px',
        margin: '48px 0',
        boxShadow: '0 12px 36px rgba(0, 0, 0, 0.04)',
      }}
    >
      {/* Header Eyebrow & Title */}
      <div style={{ textAlign: 'center', maxWidth: 680, margin: '0 auto 28px' }}>
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            backgroundColor: 'rgba(46, 74, 59, 0.08)',
            color: 'var(--brand, #2E4A3B)',
            padding: '6px 14px',
            borderRadius: '999px',
            fontSize: '12px',
            fontWeight: 700,
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            marginBottom: '12px',
          }}
        >
          <span>🔬 CLINICAL PHARMACOKINETICS COMPARISON</span>
        </div>
        <h2
          className="serif"
          style={{
            fontSize: '32px',
            lineHeight: 1.2,
            color: 'var(--ink, #1A1F1C)',
            marginBottom: '12px',
          }}
        >
          Botanical Berberine vs. Compounded GLP-1
        </h2>
        <p style={{ fontSize: '15px', color: 'var(--ink-2, #555E58)', lineHeight: 1.6, margin: 0 }}>
          While <em>Coptis chinensis</em> and Barberry offer mild cellular AMPK activation, oral botanical extracts hit a hard physiological ceiling. Compare the pharmacokinetics, hypothalamic signaling, and clinical weight outcomes below.
        </p>
      </div>

      {/* Medication Toggle & Category Filter Bar */}
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: '12px',
          marginBottom: '24px',
          paddingBottom: '16px',
          borderBottom: '1px solid var(--line-soft, #E5E0D8)',
        }}
      >
        {/* Medication Selector (Semaglutide vs Tirzepatide) */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span style={{ fontSize: '13px', fontWeight: 600, color: 'var(--ink-2, #555E58)' }}>
            Compare Against:
          </span>
          <div
            style={{
              display: 'inline-flex',
              backgroundColor: '#F5F1EA',
              borderRadius: '10px',
              padding: '3px',
            }}
          >
            <button
              type="button"
              onClick={() => setSelectedMed('semaglutide')}
              style={{
                border: 'none',
                background: selectedMed === 'semaglutide' ? 'var(--brand, #2E4A3B)' : 'transparent',
                color: selectedMed === 'semaglutide' ? '#FFFFFF' : 'var(--ink, #1A1F1C)',
                fontWeight: 600,
                fontSize: '13px',
                padding: '6px 14px',
                borderRadius: '8px',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
              }}
            >
              Semaglutide ($146/mo)
            </button>
            <button
              type="button"
              onClick={() => setSelectedMed('tirzepatide')}
              style={{
                border: 'none',
                background: selectedMed === 'tirzepatide' ? 'var(--brand, #2E4A3B)' : 'transparent',
                color: selectedMed === 'tirzepatide' ? '#FFFFFF' : 'var(--ink, #1A1F1C)',
                fontWeight: 600,
                fontSize: '13px',
                padding: '6px 14px',
                borderRadius: '8px',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
              }}
            >
              Tirzepatide ($249/mo)
            </button>
          </div>
        </div>

        {/* Tab Filters */}
        <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
          {[
            { id: 'all', label: 'All 6 Parameters' },
            { id: 'efficacy', label: 'Efficacy & Brain' },
            { id: 'pharmacology', label: 'Absorption & Dosing' },
            { id: 'economics', label: 'Cost & Verification' },
          ].map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveTab(tab.id)}
              style={{
                border: '1px solid',
                borderColor: activeTab === tab.id ? 'var(--brand, #2E4A3B)' : 'var(--line-soft, #E5E0D8)',
                backgroundColor: activeTab === tab.id ? 'rgba(46, 74, 59, 0.08)' : '#FFFFFF',
                color: activeTab === tab.id ? 'var(--brand, #2E4A3B)' : 'var(--ink-2, #555E58)',
                fontSize: '12px',
                fontWeight: activeTab === tab.id ? 700 : 500,
                padding: '5px 12px',
                borderRadius: '999px',
                cursor: 'pointer',
              }}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Desktop & Tablet Comparison Table */}
      <div style={{ overflowX: 'auto', marginBottom: '32px' }}>
        <table
          style={{
            width: '100%',
            borderCollapse: 'separate',
            borderSpacing: '0',
            fontSize: '14px',
            textAlign: 'left',
          }}
        >
          <thead>
            <tr>
              <th
                style={{
                  padding: '14px 16px',
                  backgroundColor: '#FAF6F0',
                  color: 'var(--ink, #1A1F1C)',
                  fontWeight: 700,
                  fontSize: '13px',
                  borderTopLeftRadius: '12px',
                  borderBottom: '2px solid var(--line-soft, #E5E0D8)',
                  width: '26%',
                }}
              >
                Clinical Parameter
              </th>
              <th
                style={{
                  padding: '14px 16px',
                  backgroundColor: '#FAF6F0',
                  color: 'var(--ink, #1A1F1C)',
                  fontWeight: 700,
                  fontSize: '13px',
                  borderBottom: '2px solid var(--line-soft, #E5E0D8)',
                  width: '37%',
                }}
              >
                Botanical Berberine <span style={{ fontWeight: 400, color: 'var(--ink-3, #7F8782)', fontSize: '11px' }}>(Coptis / Barberry)</span>
              </th>
              <th
                style={{
                  padding: '14px 16px',
                  backgroundColor: 'rgba(46, 74, 59, 0.09)',
                  color: 'var(--brand, #2E4A3B)',
                  fontWeight: 700,
                  fontSize: '13px',
                  borderTopRightRadius: '12px',
                  borderBottom: '2px solid var(--brand, #2E4A3B)',
                  width: '37%',
                }}
              >
                {selectedMed === 'semaglutide' ? (
                  <span>Compounded Semaglutide <span style={{ backgroundColor: 'var(--brand, #2E4A3B)', color: '#fff', fontSize: '10px', padding: '2px 6px', borderRadius: '4px', marginLeft: '6px' }}>Gold Standard</span></span>
                ) : (
                  <span>Compounded Tirzepatide <span style={{ backgroundColor: '#B8860B', color: '#fff', fontSize: '10px', padding: '2px 6px', borderRadius: '4px', marginLeft: '6px' }}>Dual Incretin</span></span>
                )}
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((row, idx) => {
              const clinicalData = selectedMed === 'semaglutide' ? row.semaglutide : row.tirzepatide;
              const isEven = idx % 2 === 0;
              return (
                <tr
                  key={row.id}
                  style={{
                    backgroundColor: isEven ? '#FFFFFF' : '#FCFAF7',
                  }}
                >
                  {/* Parameter Name */}
                  <td
                    style={{
                      padding: '16px',
                      borderBottom: '1px solid var(--line-soft, #E5E0D8)',
                      fontWeight: 600,
                      color: 'var(--ink, #1A1F1C)',
                      verticalAlign: 'top',
                    }}
                  >
                    {row.parameter}
                  </td>

                  {/* Botanical Berberine */}
                  <td
                    style={{
                      padding: '16px',
                      borderBottom: '1px solid var(--line-soft, #E5E0D8)',
                      color: 'var(--ink-2, #555E58)',
                      verticalAlign: 'top',
                      borderRight: '1px dashed var(--line-soft, #E5E0D8)',
                    }}
                  >
                    <div
                      style={{
                        fontWeight: 700,
                        color: row.berberine.status === 'danger' ? '#DC2626' : row.berberine.status === 'warning' ? '#D97706' : 'var(--ink, #1A1F1C)',
                        marginBottom: '6px',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '6px',
                      }}
                    >
                      {row.berberine.status === 'danger' && <span>⚠️</span>}
                      {row.berberine.status === 'warning' && <span>⚠️</span>}
                      <span>{row.berberine.value}</span>
                    </div>
                    <p style={{ margin: 0, fontSize: '12px', lineHeight: 1.5, color: 'var(--ink-3, #7F8782)' }}>
                      {row.berberine.detail}
                    </p>
                  </td>

                  {/* Compounded GLP-1 */}
                  <td
                    style={{
                      padding: '16px',
                      borderBottom: '1px solid var(--line-soft, #E5E0D8)',
                      backgroundColor: isEven ? 'rgba(46, 74, 59, 0.02)' : 'rgba(46, 74, 59, 0.05)',
                      verticalAlign: 'top',
                    }}
                  >
                    <div
                      style={{
                        fontWeight: 700,
                        color: 'var(--brand, #2E4A3B)',
                        marginBottom: '6px',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '6px',
                      }}
                    >
                      <span>✅</span>
                      <span>{clinicalData.value}</span>
                    </div>
                    <p style={{ margin: 0, fontSize: '12px', lineHeight: 1.5, color: 'var(--ink-2, #555E58)' }}>
                      {clinicalData.detail}
                    </p>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Interactive Supplement Ceiling & Waste Calculator */}
      <div
        style={{
          backgroundColor: '#FAF6F0',
          border: '1px solid var(--line-soft, #E5E0D8)',
          borderRadius: '16px',
          padding: '24px',
          marginBottom: '32px',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
          <span style={{ fontSize: '18px' }}>🧮</span>
          <h3 className="serif" style={{ fontSize: '20px', margin: 0, color: 'var(--ink, #1A1F1C)' }}>
            The Botanical Plateau Assessment
          </h3>
        </div>
        <p style={{ fontSize: '13px', color: 'var(--ink-2, #555E58)', marginBottom: '18px', lineHeight: 1.5 }}>
          If you have been taking Berberine, Dihydroberberine, or Inositol and have stopped losing weight, compute your estimated supplement expenditure vs. achievable clinical GLP-1 outcomes:
        </p>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '16px',
            marginBottom: '20px',
          }}
        >
          <div>
            <label style={{ display: 'block', fontSize: '12px', fontWeight: 600, color: 'var(--ink, #1A1F1C)', marginBottom: '6px' }}>
              Months Spent on Berberine / Supplements: <span className="mono" style={{ color: 'var(--brand, #2E4A3B)', fontWeight: 700 }}>{supplementMonths} months</span>
            </label>
            <input
              type="range"
              min="1"
              max="12"
              value={supplementMonths}
              onChange={(e) => setSupplementMonths(parseInt(e.target.value, 10))}
              style={{ width: '100%', accentColor: 'var(--brand, #2E4A3B)', cursor: 'pointer' }}
            />
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '10px', color: 'var(--ink-3, #7F8782)', marginTop: '4px' }}>
              <span>1 mo</span>
              <span>6 mos</span>
              <span>12 mos</span>
            </div>
          </div>

          <div>
            <label style={{ display: 'block', fontSize: '12px', fontWeight: 600, color: 'var(--ink, #1A1F1C)', marginBottom: '6px' }}>
              Target Weight Loss Goal: <span className="mono" style={{ color: 'var(--brand, #2E4A3B)', fontWeight: 700 }}>{targetWeightLoss} lbs</span>
            </label>
            <input
              type="range"
              min="10"
              max="75"
              step="5"
              value={targetWeightLoss}
              onChange={(e) => setTargetWeightLoss(parseInt(e.target.value, 10))}
              style={{ width: '100%', accentColor: 'var(--brand, #2E4A3B)', cursor: 'pointer' }}
            />
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '10px', color: 'var(--ink-3, #7F8782)', marginTop: '4px' }}>
              <span>10 lbs</span>
              <span>40 lbs</span>
              <span>75+ lbs</span>
            </div>
          </div>
        </div>

        {/* Dynamic Calculation Output */}
        <div
          style={{
            backgroundColor: '#FFFFFF',
            border: '1px solid var(--line-soft, #E5E0D8)',
            borderRadius: '12px',
            padding: '16px 20px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '16px',
          }}
        >
          <div>
            <div style={{ fontSize: '11px', color: 'var(--ink-3, #7F8782)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Total Spent on Supplements
            </div>
            <div className="mono" style={{ fontSize: '20px', fontWeight: 700, color: '#DC2626' }}>
              ${totalSupplementWasted}
              <span style={{ fontSize: '12px', fontWeight: 400, color: 'var(--ink-3, #7F8782)' }}> (Avg. 2–3 lbs lost)</span>
            </div>
          </div>

          <div style={{ textAlign: 'right' }}>
            <div style={{ fontSize: '11px', color: 'var(--ink-3, #7F8782)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Clinical GLP-1 Expected Outcome
            </div>
            <div className="mono" style={{ fontSize: '20px', fontWeight: 700, color: 'var(--brand, #2E4A3B)' }}>
              ~{glp1PredictedWeightLoss} lbs reduction
              <span style={{ fontSize: '12px', fontWeight: 400, color: 'var(--ink-2, #555E58)' }}> (From $146/mo)</span>
            </div>
          </div>
        </div>
      </div>

      {/* Doctor Consultation CTA Block */}
      <div
        style={{
          backgroundColor: '#1F3529',
          color: '#FBF8F3',
          borderRadius: '16px',
          padding: '32px 24px',
          textAlign: 'center',
        }}
      >
        <div
          style={{
            display: 'inline-block',
            backgroundColor: 'rgba(255, 255, 255, 0.12)',
            padding: '4px 12px',
            borderRadius: '999px',
            fontSize: '11px',
            fontWeight: 700,
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            marginBottom: '14px',
            color: '#A7E8BD',
          }}
        >
          PHYSICIAN-SUPERVISED METABOLIC RESET
        </div>
        <h3
          className="serif"
          style={{
            fontSize: '26px',
            color: '#FFFFFF',
            marginBottom: '10px',
            lineHeight: 1.25,
          }}
        >
          Stop Guessing with Unregulated Botanicals. Step Into Clinical Pharmacology.
        </h3>
        <p
          style={{
            fontSize: '14px',
            color: 'rgba(251, 248, 243, 0.85)',
            maxWidth: '580px',
            margin: '0 auto 24px',
            lineHeight: 1.6,
          }}
        >
          If you have hit an efficacy ceiling on Berberine, your biology is not broken. You have simply maxed out peripheral AMPK activation. Connect with a US-licensed physician online and get prescribed genuine compounded GLP-1 therapy.
        </p>

        {/* CTA Button */}
        <div style={{ marginBottom: '20px' }}>
          <a
            href={START_URL}
            className="btn btn-primary btn-lg"
            style={{
              backgroundColor: '#4EBE7B',
              color: '#0F2618',
              fontWeight: 700,
              fontSize: '16px',
              padding: '14px 32px',
              borderRadius: '12px',
              textDecoration: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              boxShadow: '0 4px 14px rgba(78, 190, 123, 0.4)',
            }}
          >
            <span>Start Free 2-Min Medical Intake ($146/mo)</span>
            <span>➔</span>
          </a>
        </div>

        {/* Reassurance Pills */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            flexWrap: 'wrap',
            gap: '10px',
            fontSize: '12px',
            color: 'rgba(251, 248, 243, 0.9)',
          }}
        >
          <span style={{ backgroundColor: 'rgba(255,255,255,0.08)', padding: '6px 12px', borderRadius: '999px' }}>
            ⚡ 24h Online Approval
          </span>
          <span style={{ backgroundColor: 'rgba(255,255,255,0.08)', padding: '6px 12px', borderRadius: '999px' }}>
            🔒 Zero Hidden Fees
          </span>
          <span style={{ backgroundColor: 'rgba(255,255,255,0.08)', padding: '6px 12px', borderRadius: '999px' }}>
            📦 Cold-Chain Shipped
          </span>
          <span style={{ backgroundColor: 'rgba(255,255,255,0.08)', padding: '6px 12px', borderRadius: '999px' }}>
            🛡️ 503A State-Licensed Pharmacy
          </span>
          <span style={{ backgroundColor: 'rgba(255,255,255,0.08)', padding: '6px 12px', borderRadius: '999px' }}>
            💳 HSA/FSA Eligible · Cancel Anytime
          </span>
        </div>
      </div>
    </div>
  );
}

export default BotanicalGLP1Comparison;
