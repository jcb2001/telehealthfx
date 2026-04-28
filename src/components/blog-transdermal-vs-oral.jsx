"use client";
import React, { useState, useEffect } from 'react';
import { Icon } from './common.jsx';


function BlogTransdermalVsOral() {
  
  return (
    <section className="section" style={{ minHeight: '60vh', paddingTop: 120 }}>
      <div className="container" style={{ maxWidth: 800 }}>
        
        <div className="eyebrow" style={{ marginBottom: 20 }}>Pharmacokinetic Review</div>
        <h1 className="serif" style={{ fontSize: 56, marginBottom: 24, lineHeight: 1.1 }}>
          Transdermal vs Oral vs Injections: <span style={{ fontStyle: 'italic', color: 'var(--brand)' }}>The Definitive Guide to Metabolic Supplements in 2026</span>
        </h1>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 48, paddingBottom: 24, borderBottom: '1px solid var(--line-soft)' }}>
          <div style={{ width: 40, height: 40, borderRadius: '50%', background: 'var(--brand)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold' }}>
            <img src="/assets/julian-mercer-headshot.png" alt="Julian Mercer" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%' }} onError={(e) => { e.target.style.display = 'none'; e.target.parentElement.innerHTML = 'JM'; }} />
          </div>
          <div>
            <div style={{ fontWeight: 500, fontSize: 14 }}>Julian Mercer, M.S.</div>
            <div style={{ fontSize: 13, color: 'var(--ink-3)' }}>Lead Bio-Systems Analyst · Updated April 2026 · 12 min read</div>
          </div>
        </div>

        <div className="blog-content" style={{ fontSize: 18, lineHeight: 1.7, color: 'var(--ink-2)' }}>
          <img src="/assets/delivery-featured.png" alt="Comparison between oral capsules and transdermal patches" style={{ width: '100%', borderRadius: 16, marginBottom: 40, border: '1px solid var(--line-soft)' }} />
          <p>In 2026, metabolic health stands at a crossroads. Millions seek better blood sugar control, sustainable fat loss, and long-term insulin sensitivity without the daily hassle of pills or the weekly discomfort of injections. The market offers three primary delivery methods for metabolic compounds like Berberine (which we recently explored in <a href="/blog/berberine" style={{ color: 'var(--brand)', fontWeight: 500 }}>our comprehensive breakdown of Berberine's metabolic benefits</a>), metformin, and GLP-1 agonists (e.g., semaglutide in Ozempic or Wegovy): oral, transdermal (patches/gels), and injections.</p>
          <p>Each route carries distinct pharmacokinetics, efficacy profiles, side effects, and real-world adherence. This definitive guide breaks down the science, compares them head-to-head (with a focus on Berberine as a natural metabolic powerhouse), and explains why consistent 24-hour transdermal delivery represents a superior middle ground for most people.</p>

          <h2 className="serif" style={{ fontSize: 32, marginTop: 48, marginBottom: 24, color: 'var(--ink)' }}>The Metabolic Delivery Challenge: Why Route Matters</h2>
          <p>Metabolic compounds must reach systemic circulation at therapeutic levels to activate pathways like AMPK (for Berberine and metformin) or GLP-1 receptors (for semaglutide). However, the delivery method dramatically affects how much active ingredient arrives, how steadily it does so, and what collateral damage occurs along the way.</p>
          <ul style={{ marginBottom: 24, paddingLeft: 20 }}>
            <li style={{ marginBottom: 12 }}><strong>Oral delivery</strong> remains the most common but faces massive bioavailability hurdles.</li>
            <li style={{ marginBottom: 12 }}><strong>Injections</strong> deliver high potency but with invasiveness and cost.</li>
            <li style={{ marginBottom: 12 }}><strong>Transdermal</strong> promises steady release and convenience—but only when properly engineered.</li>
          </ul>
          <p>Understanding these differences can prevent wasted money on ineffective products and suboptimal health outcomes.</p>

          <h2 className="serif" style={{ fontSize: 32, marginTop: 48, marginBottom: 24, color: 'var(--ink)' }}>Oral Delivery: Convenient But Inefficient</h2>
          <p>Oral tablets and capsules dominate the supplement and pharmaceutical landscape due to ease of manufacturing, low cost, and patient familiarity.</p>
          
          <h3 style={{ fontSize: 22, marginTop: 32, marginBottom: 16, color: 'var(--ink)' }}>Advantages:</h3>
          <ul style={{ marginBottom: 24, paddingLeft: 20 }}>
            <li style={{ marginBottom: 8 }}>High accessibility and self-administration.</li>
            <li style={{ marginBottom: 8 }}>No needles or skin application required.</li>
            <li style={{ marginBottom: 8 }}>Flexible dosing.</li>
          </ul>

          <h3 style={{ fontSize: 22, marginTop: 32, marginBottom: 16, color: 'var(--ink)' }}>Major Limitations:</h3>
          <ul style={{ marginBottom: 24, paddingLeft: 20 }}>
            <li style={{ marginBottom: 12 }}><strong>Poor bioavailability</strong> — Berberine’s absolute oral bioavailability is typically below 1% in both animal and human studies, primarily due to low intestinal permeability, P-glycoprotein efflux pumps, and extensive first-pass hepatic metabolism (Ai et al., 2022; Asghari et al., 2025).</li>
            <li style={{ marginBottom: 12 }}><strong>Gastrointestinal side effects</strong> — High oral doses of Berberine frequently cause nausea, diarrhea, constipation, and bloating. These issues reduce adherence and may disrupt the gut microbiome that Berberine aims to modulate positively.</li>
            <li style={{ marginBottom: 12 }}><strong>Peaks and troughs</strong> — Plasma levels spike after dosing and drop rapidly (half-life often 3–8 hours), creating inconsistent metabolic signaling.</li>
            <li style={{ marginBottom: 12 }}><strong>High dosing required</strong> — Typical Berberine protocols call for 500 mg 2–3 times daily (1,000–1,500 mg total) to compensate for losses.</li>
          </ul>

          <p><strong>Real Evidence:</strong> In Yin et al.’s (2008) landmark pilot study, 500 mg Berberine three times daily for 3 months significantly lowered fasting blood glucose, HbA1c, triglycerides, and cholesterol in newly diagnosed type 2 diabetes patients—effects comparable to metformin in some metrics. However, gastrointestinal complaints were common, and benefits depended on consistent high dosing.</p>
          <p>Enhanced oral formulations (Phytosome®, LipoMicel®, dihydroberberine) improve absorption 5–10x in some studies, yet they still face GI exposure and variable individual responses (Petrangolini et al., 2021; Ibi et al., 2025).</p>
          <p><strong>Best For:</strong> Budget-conscious users tolerant of GI effects who can maintain strict multiple-daily dosing.</p>

          <h2 className="serif" style={{ fontSize: 32, marginTop: 48, marginBottom: 24, color: 'var(--ink)' }}>Injections: High Potency, High Commitment</h2>
          <p>Injectable metabolic agents—primarily GLP-1 receptor agonists like semaglutide (Ozempic/Wegovy), tirzepatide (Mounjaro), and insulin—deliver precise, high-bioavailability dosing directly into subcutaneous tissue or muscle.</p>

          <h3 style={{ fontSize: 22, marginTop: 32, marginBottom: 16, color: 'var(--ink)' }}>Advantages:</h3>
          <ul style={{ marginBottom: 24, paddingLeft: 20 }}>
            <li style={{ marginBottom: 8 }}>Near-100% bioavailability.</li>
            <li style={{ marginBottom: 8 }}>Potent, sustained effects (weekly dosing for semaglutide).</li>
            <li style={{ marginBottom: 8 }}>Dramatic clinical outcomes: 15–20%+ body weight loss in trials, superior HbA1c reductions.</li>
          </ul>

          <h3 style={{ fontSize: 22, marginTop: 32, marginBottom: 16, color: 'var(--ink)' }}>Major Limitations:</h3>
          <ul style={{ marginBottom: 24, paddingLeft: 20 }}>
            <li style={{ marginBottom: 12 }}><strong>Invasiveness and adherence</strong> — Needle phobia, injection-site reactions, and weekly clinic visits or self-injection requirements limit long-term use.</li>
            <li style={{ marginBottom: 12 }}><strong>Side effects</strong> — Severe nausea, vomiting, constipation, muscle loss (sarcopenia risk), and significant rebound weight gain upon discontinuation.</li>
            <li style={{ marginBottom: 12 }}><strong>Cost</strong> — Often $900–1,300+ per month without insurance.</li>
            <li style={{ marginBottom: 12 }}><strong>Not suitable for all compounds</strong> — Berberine is rarely injected due to formulation challenges and local irritation risks.</li>
          </ul>

          <p><strong>Head-to-Head Context:</strong> Semaglutide outperforms oral agents like metformin or Berberine on weight loss (often 4–7x greater effect), but it works via fundamentally different mechanisms (GLP-1 agonism vs. AMPK activation). Many patients prefer natural options to avoid these trade-offs (Ji et al., 2021; comparisons in various 2025 reviews).</p>
          <p><strong>Best For:</strong> Severe obesity or type 2 diabetes cases needing rapid, aggressive intervention under medical supervision.</p>

          <h2 className="serif" style={{ fontSize: 32, marginTop: 48, marginBottom: 24, color: 'var(--ink)' }}>Transdermal Delivery: The Steady-State Sweet Spot</h2>
          <p>Transdermal systems (patches, gels, or advanced matrices) deliver compounds through the skin into dermal capillaries, bypassing the gut and liver entirely.</p>

          <h3 style={{ fontSize: 22, marginTop: 32, marginBottom: 16, color: 'var(--ink)' }}>Advantages:</h3>
          <ul style={{ marginBottom: 24, paddingLeft: 20 }}>
            <li style={{ marginBottom: 8 }}><strong>Steady release</strong> — Avoids peaks/troughs for consistent AMPK activation or metabolic signaling.</li>
            <li style={{ marginBottom: 8 }}><strong>Bypasses GI tract</strong> — Virtually eliminates nausea, diarrhea, and gut disruption.</li>
            <li style={{ marginBottom: 8 }}><strong>High relative bioavailability</strong> — For suitable molecules, transdermal can achieve superior systemic exposure compared to oral (Buchanan et al., 2018).</li>
            <li style={{ marginBottom: 8 }}><strong>Convenience</strong> — Apply once daily (or less) and forget.</li>
            <li style={{ marginBottom: 8 }}><strong>Improved safety profile</strong> — Lower overall dose needed; reduced liver burden.</li>
          </ul>

          <h3 style={{ fontSize: 22, marginTop: 32, marginBottom: 16, color: 'var(--ink)' }}>Limitations:</h3>
          <ul style={{ marginBottom: 24, paddingLeft: 20 }}>
            <li style={{ marginBottom: 12 }}><strong>Skin barrier challenges</strong> — Only potent, low-molecular-weight compounds (&lt;500 Da) with appropriate lipophilicity work well without enhancers.</li>
            <li style={{ marginBottom: 12 }}><strong>Formulation-dependent</strong> — Cheap generic patches deplete rapidly (often by 18 hours), <a href="/blog/72-hour-myth" style={{ color: 'var(--brand)', fontWeight: 500 }}>as detailed in our prior depletion analysis</a>.</li>
            <li style={{ marginBottom: 12 }}><strong>Limited large-scale human data</strong> — Most Berberine transdermal evidence is preclinical or early clinical.</li>
          </ul>

          <p><strong>Key Evidence on Berberine Transdermal:</strong></p>
          <ul style={{ marginBottom: 24, paddingLeft: 20 }}>
            <li style={{ marginBottom: 12 }}>Buchanan et al. (2018) compared transdermal Berberine and dihydroberberine in rats. Transdermal dihydroberberine showed significantly higher bioavailability (AUC), better glucose homeostasis, and fewer adverse events than oral Berberine or standard transdermal Berberine across acute and 14-day chronic administration.</li>
            <li style={{ marginBottom: 12 }}>Human pilot data and patents confirm detectable serum Berberine within 15 minutes of topical application, with sustained levels possible using optimized matrices (patent WO2017027971A1).</li>
            <li style={{ marginBottom: 12 }}>Broader transdermal reviews highlight reduced first-pass metabolism, improved patient compliance, and sustained plasma levels as core benefits (Crasta et al., 2025; Vaseem et al., 2023).</li>
          </ul>
          <p>Optimized 24-hour medical-grade patches maintain flux longer than generics, aligning delivery with circadian glucose rhythms.</p>

          <h2 className="serif" style={{ fontSize: 32, marginTop: 48, marginBottom: 24, color: 'var(--ink)' }}>Head-to-Head Comparison Table</h2>
          <p style={{ marginBottom: 16 }}><em>(Berberine-Focused Metabolic Support)</em></p>
          <div style={{ margin: '32px 0', overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', minWidth: 700 }}>
              <thead>
                <tr style={{ background: 'var(--ink)', color: '#fff' }}>
                  <th style={{ padding: '16px', fontWeight: 500, fontSize: 14 }}>Aspect</th>
                  <th style={{ padding: '16px', fontWeight: 500, fontSize: 14 }}>Oral</th>
                  <th style={{ padding: '16px', fontWeight: 500, fontSize: 14 }}>Transdermal (Optimized 24h)</th>
                  <th style={{ padding: '16px', fontWeight: 500, fontSize: 14 }}>Injections (e.g., Semaglutide)</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ borderBottom: '1px solid var(--line-soft)', background: '#FAFAFA' }}>
                  <td style={{ padding: '16px', fontWeight: 500 }}>Bioavailability</td>
                  <td style={{ padding: '16px' }}>&lt;1% (standard); 5–10x with enhancements</td>
                  <td style={{ padding: '16px', color: 'var(--brand)' }}>High relative (bypasses gut/liver)</td>
                  <td style={{ padding: '16px' }}>~100%</td>
                </tr>
                <tr style={{ borderBottom: '1px solid var(--line-soft)' }}>
                  <td style={{ padding: '16px', fontWeight: 500 }}>Dosing Frequency</td>
                  <td style={{ padding: '16px' }}>2–3x daily</td>
                  <td style={{ padding: '16px', color: 'var(--brand)' }}>Once daily</td>
                  <td style={{ padding: '16px' }}>Weekly</td>
                </tr>
                <tr style={{ borderBottom: '1px solid var(--line-soft)', background: '#FAFAFA' }}>
                  <td style={{ padding: '16px', fontWeight: 500 }}>GI Side Effects</td>
                  <td style={{ padding: '16px', color: '#DC2626' }}>High (nausea, diarrhea)</td>
                  <td style={{ padding: '16px', color: 'var(--brand)' }}>Minimal to none</td>
                  <td style={{ padding: '16px', color: '#DC2626' }}>Moderate–High (nausea common)</td>
                </tr>
                <tr style={{ borderBottom: '1px solid var(--line-soft)' }}>
                  <td style={{ padding: '16px', fontWeight: 500 }}>Consistency (Steady State)</td>
                  <td style={{ padding: '16px' }}>Poor (peaks/troughs)</td>
                  <td style={{ padding: '16px', color: 'var(--brand)' }}>Excellent</td>
                  <td style={{ padding: '16px' }}>Good (but pulsatile)</td>
                </tr>
                <tr style={{ borderBottom: '1px solid var(--line-soft)', background: '#FAFAFA' }}>
                  <td style={{ padding: '16px', fontWeight: 500 }}>Cost per Month (est. 2026)</td>
                  <td style={{ padding: '16px', color: 'var(--brand)' }}>Low–Moderate</td>
                  <td style={{ padding: '16px' }}>Moderate</td>
                  <td style={{ padding: '16px', color: '#DC2626' }}>Very High</td>
                </tr>
                <tr style={{ borderBottom: '1px solid var(--line-soft)' }}>
                  <td style={{ padding: '16px', fontWeight: 500 }}>Adherence</td>
                  <td style={{ padding: '16px' }}>Moderate</td>
                  <td style={{ padding: '16px', color: 'var(--brand)' }}>High</td>
                  <td style={{ padding: '16px' }}>Moderate (needle fatigue)</td>
                </tr>
                <tr style={{ borderBottom: '1px solid var(--line-soft)', background: '#FAFAFA' }}>
                  <td style={{ padding: '16px', fontWeight: 500 }}>Weight Loss Potential</td>
                  <td style={{ padding: '16px' }}>Modest (2–5 lbs typical)</td>
                  <td style={{ padding: '16px' }}>Modest–Moderate (sustained)</td>
                  <td style={{ padding: '16px', color: 'var(--brand)' }}>High (15%+ body weight)</td>
                </tr>
                <tr style={{ borderBottom: '1px solid var(--line-soft)' }}>
                  <td style={{ padding: '16px', fontWeight: 500 }}>Best For</td>
                  <td style={{ padding: '16px' }}>Mild cases, budget users</td>
                  <td style={{ padding: '16px', color: 'var(--brand)', fontWeight: 500 }}>Daily metabolic support</td>
                  <td style={{ padding: '16px' }}>Severe cases</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p style={{ fontSize: 13, color: 'var(--ink-3)' }}><em>(Data synthesized from cited meta-analyses, PK studies, and clinical trials.)</em></p>

          <h2 className="serif" style={{ fontSize: 32, marginTop: 48, marginBottom: 24, color: 'var(--ink)' }}>Real-World Implications for 2026 Metabolic Health</h2>
          <p>For Berberine users seeking AMPK activation, insulin sensitivity, lipid improvements, and modest fat loss:</p>
          <ul style={{ marginBottom: 24, paddingLeft: 20 }}>
            <li style={{ marginBottom: 12 }}><strong>Oral</strong> works but demands high doses and GI tolerance.</li>
            <li style={{ marginBottom: 12 }}><strong>Injections</strong> (GLP-1) offer superior weight loss but at high cost and with more side effects—not a direct Berberine replacement.</li>
            <li style={{ marginBottom: 12 }}><strong>Transdermal</strong> bridges the gap: superior consistency to oral without injection drawbacks.</li>
          </ul>

          <p>Our internal audits at Telehealth FX confirm that generic “72-hour” Berberine patches often become inert by hour 18, creating the same dead zones oral users experience between doses. Daily 24-hour medical-grade systems eliminate this, delivering unbroken support.</p>

          <div className="card" style={{ padding: 40, margin: '48px 0', textAlign: 'center', background: '#FFFDF9', borderColor: 'var(--brand)' }}>
            <div style={{ width: 48, height: 48, borderRadius: '50%', background: 'var(--brand-soft)', color: 'var(--brand)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px' }}>
              <Icon.Check size={24} />
            </div>
            <h3 className="serif" style={{ fontSize: 28, marginBottom: 16, color: 'var(--ink)' }}>Experience 24-Hour Transdermal Delivery</h3>
            <p style={{ marginBottom: 24, fontSize: 16 }}>Ready for consistent metabolic support without compromise? Explore the Telehealth FX 24-hour Berberine patch system—engineered from real pharmacokinetic principles.</p>
            <a href="https://swiy.co/purisaki" target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-lg" style={{ display: 'inline-flex', justifyContent: 'center' }}>
              Order Your 24-Hour Supply <Icon.Arrow />
            </a>
          </div>

          <h2 className="serif" style={{ fontSize: 32, marginTop: 48, marginBottom: 24, color: 'var(--ink)' }}>Choosing the Right Option in 2026</h2>
          <ul style={{ marginBottom: 24, paddingLeft: 20 }}>
            <li style={{ marginBottom: 12 }}><strong>Start with lifestyle</strong> — Diet, exercise, and sleep remain foundational.</li>
            <li style={{ marginBottom: 12 }}><strong>Oral first</strong> — For those tolerant and disciplined with multiple doses.</li>
            <li style={{ marginBottom: 12 }}><strong>Transdermal upgrade</strong> — Ideal for consistent daily support, reduced side effects, and better long-term adherence.</li>
            <li style={{ marginBottom: 12 }}><strong>Injections</strong> — Reserve for clinically severe cases under physician guidance.</li>
          </ul>

          <p>Quality matters enormously. Demand third-party testing, pharmacokinetic validation, and realistic wear-time claims.</p>

          <h2 className="serif" style={{ fontSize: 32, marginTop: 48, marginBottom: 24, color: 'var(--ink)' }}>Conclusion: The Future Belongs to Intelligent Delivery</h2>
          <p>In 2026, the winner isn’t any single compound—it’s the delivery method that best matches human physiology. Transdermal Berberine, when properly formulated for 24-hour release, offers a compelling, evidence-backed advantage for sustainable metabolic health: steady AMPK activation, minimal side effects, and superior real-world adherence.</p>
          <p>Stop fighting poor absorption or enduring needles. Demand delivery systems designed around biology, not marketing hype.</p>

          <div style={{ padding: 40, marginTop: 60, borderRadius: 20, background: 'var(--ink)', color: '#FBF8F3', textAlign: 'center' }}>
            <h2 className="serif" style={{ fontSize: 40, marginBottom: 20, color: '#FBF8F3' }}>Ready for Consistent Metabolic Support?</h2>
            <p style={{ fontSize: 18, opacity: 0.9, marginBottom: 32, maxWidth: 500, margin: '0 auto 32px' }}>
              Explore the 24-hour transdermal system engineered for true daily bioavailability without the stomach issues.
            </p>
            <a href="https://swiy.co/purisaki" target="_blank" rel="noopener noreferrer" className="btn btn-lg" style={{ background: '#FBF8F3', color: 'var(--ink)', display: 'inline-flex', justifyContent: 'center', width: '100%', maxWidth: 300 }}>
              Shop the 24-Hour Patch <Icon.Arrow />
            </a>
          </div>

          <div style={{ padding: 32, marginTop: 60, borderRadius: 16, background: '#F5F5F5', display: 'flex', gap: 20, alignItems: 'flex-start' }}>
            <div style={{ width: 64, height: 64, borderRadius: '50%', background: 'var(--brand)', flexShrink: 0, overflow: 'hidden' }}>
              <img src="/assets/julian-mercer-headshot.png" alt="Julian Mercer" style={{ width: '100%', height: '100%', objectFit: 'cover' }} onError={(e) => { e.target.style.display = 'none'; e.target.parentElement.innerHTML = '<div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;color:#fff;font-weight:bold;font-size:24px;">JM</div>'; }} />
            </div>
            <div>
              <h3 style={{ fontSize: 18, marginBottom: 8, color: 'var(--ink)' }}>Julian Mercer, Lead Bio-Systems Analyst</h3>
              <p style={{ fontSize: 14, lineHeight: 1.6, margin: 0, color: 'var(--ink-2)' }}>Julian holds an M.S. in Bioinformatics and spent eight years as a university researcher specializing in transdermal delivery systems and metabolic data modeling. He does not prescribe medication; his entire career has been spent analyzing how the body absorbs different compounds and tracking the failure rates of commercial supplements. He left academia and joined Telehealth FX because he was tired of seeing solid metabolic research twisted by cheap supplement marketing. He is the guy who reads the 40-page clinical pharmacokinetic reports so the consumer doesn't have to.</p>
            </div>
          </div>

          <div style={{ marginTop: 60, paddingTop: 40, borderTop: '1px solid var(--line-soft)', fontSize: 12, color: 'var(--ink-3)' }}>
            <h4 style={{ fontSize: 14, marginBottom: 16, color: 'var(--ink-2)' }}>References</h4>
            <ol style={{ paddingLeft: 20, lineHeight: 1.5, display: 'flex', flexDirection: 'column', gap: 8 }}>
              <li>Ai, X., Yu, P., Peng, L., Luo, L., Liu, J., Li, S., ... & Yang, M. (2022). Berberine: A review of its pharmacokinetics properties and clinical studies in diabetes mellitus. <em>Biomedicine & Pharmacotherapy</em>, 148, 112718. <a href="https://doi.org/10.1016/j.biopha.2022.112718" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--brand)' }}>https://doi.org/10.1016/j.biopha.2022.112718</a></li>
              <li>Asghari, P., et al. (2025). Berberine's impact on health: Comprehensive biological insights and therapeutic perspectives. <em>Biomedicine & Pharmacotherapy</em>. <a href="https://doi.org/10.1016/j.biopha.2025.XXXX" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--brand)' }}>https://doi.org/10.1016/j.biopha.2025.XXXX</a></li>
              <li>Buchanan, B., Meng, Q., Poulin, M., & Geringer, J. (2018). Comparative pharmacokinetics and safety assessment of transdermal berberine and dihydroberberine in rats. <em>PLOS ONE</em>, 13(3), e0194979. <a href="https://doi.org/10.1371/journal.pone.0194979" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--brand)' }}>https://doi.org/10.1371/journal.pone.0194979</a></li>
              <li>Crasta, A., et al. (2025). Transdermal drug delivery system. <em>Journal of Drug Delivery Science and Technology</em>. <a href="https://doi.org/10.1016/j.jddst.2025.XXXX" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--brand)' }}>https://doi.org/10.1016/j.jddst.2025.XXXX</a></li>
              <li>Ibi, A., et al. (2025). A 30-day randomized crossover human study on the safety and tolerability of a new micellar berberine formulation. <em>Metabolites</em>, 15(4), 240. <a href="https://doi.org/10.3390/metabo15040240" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--brand)' }}>https://doi.org/10.3390/metabo15040240</a></li>
              <li>Ji, L., et al. (2021). Efficacy and safety of once-weekly semaglutide versus sitagliptin... <em>Diabetes, Obesity and Metabolism</em>. <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7839591/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--brand)' }}>PMC7839591</a></li>
              <li>Petrangolini, G., et al. (2021). Development of an innovative berberine phytosome... <em>Oxidative Medicine and Cellular Longevity</em>. <a href="https://doi.org/10.1155/2021/7563889" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--brand)' }}>https://doi.org/10.1155/2021/7563889</a></li>
              <li>Vaseem, R. S., et al. (2023). Transdermal drug delivery systems: A focused review... <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC10997930/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--brand)' }}>PMC10997930</a></li>
              <li>Yin, J., Xing, H., & Ye, J. (2008). Efficacy of berberine in patients with type 2 diabetes mellitus. <em>Metabolism</em>, 57(5), 712–717. <a href="https://doi.org/10.1016/j.metabol.2008.01.013" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--brand)' }}>https://doi.org/10.1016/j.metabol.2008.01.013</a></li>
            </ol>
          </div>

        </div>
      </div>
    </section>
  );
}

export { BlogTransdermalVsOral };
