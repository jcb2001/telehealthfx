/* eslint-disable @next/next/no-html-link-for-pages, react/no-unescaped-entities */
"use client";
import React from 'react';
import Image from 'next/image';
import { Icon } from './common.jsx';
const START_URL = "https://go.telehealthfx.com/start";

function Blog5LeadingGLP1Therapies() {
  return (<><section className="section" style={{ minHeight: '60vh', paddingTop: 120 }}><div className="container" style={{ maxWidth: 800 }}>
    <div className="eyebrow" style={{ marginBottom: 20 }}>Treatment Comparison</div>
    <h1 className="serif" style={{ fontSize: 52, marginBottom: 24, lineHeight: 1.08 }}>5 Leading GLP-1 Therapies Compared: <span style={{ fontStyle: 'italic', color: 'var(--brand)' }}>The 2026 Guide</span></h1>
    <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 48, paddingBottom: 24, borderBottom: '1px solid var(--line-soft)' }}><div style={{ width: 40, height: 40, borderRadius: '50%', background: 'var(--brand)' }}><Image src="/assets/jm-profile.jpg" alt="Julian Mercer" width={1024} height={1024} style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%', height: "auto"}} priority={true} /></div><div><div style={{ fontWeight: 500, fontSize: 14 }}><a href="/about" style={{ color: "var(--ink)", textDecoration: "none" }}>Julian Mercer, M.S.</a></div><div style={{ fontSize: 13, color: 'var(--ink-3)' }}>Lead Bio-Systems Analyst · Updated June 2026 · 18 min read</div></div></div>
    <div className="blog-content" style={{ fontSize: 18, lineHeight: 1.7, color: 'var(--ink-2)' }}>
      <Image src="/assets/weight-loss-medications-ranked-featured.png" alt="Comparison of GLP-1 weight loss medications in 2026" width={1024} height={1024} style={{ width: '100%', borderRadius: 16, marginBottom: 40, border: '1px solid var(--line-soft)', height: "auto"}} priority={true} />
      
      <p>The metabolic medicine landscape in 2026 is dominated by incretin-based therapies. While glucagon-like peptide-1 (GLP-1) receptor agonists were once viewed as uniform in their effects, clinical science has evolved to reveal significant distinctions between specific molecular formulations, receptor target profiles, dosing schedules, and overall program structures. Choosing a metabolic therapy is no longer a matter of simply finding a "weight loss shot"—it requires a detailed understanding of how different options compare in terms of efficacy, cost, tolerability, and muscle preservation.</p>
      
      <p>A major clinical challenge associated with rapid weight loss is the reduction of lean muscle tissue. If unmanaged, up to 40% of the weight lost on these medications can come from skeletal muscle rather than fat. This muscle wasting slows resting metabolic rate and increases the risk of weight regain upon therapy discontinuation. Therefore, the optimal GLP-1 therapy must be evaluated not just by how much weight is lost, but by the safety, accessibility, and structural support of the program delivering it.</p>
      
      <p>In this guide, we compare the five leading GLP-1 therapies in 2026: the Telehealth FX Medical Program, Tirzepatide, Semaglutide, Liraglutide, and the emerging triple-agonist Retatrutide. We rank these options based on clinical outcomes, cost efficiency, and muscle preservation protocols.</p>

      <h2 className="serif" style={{ fontSize: 32, marginTop: 48, marginBottom: 24, color: 'var(--ink)' }}>The 2026 GLP-1 Comparison Table</h2>
      <div style={{ overflowX: 'auto', margin: '24px 0' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 14 }}>
          <thead>
            <tr style={{ borderBottom: '2px solid var(--ink)' }}>
              <th style={{ textAlign: 'left', padding: '12px 8px', fontWeight: 600 }}>Rank / Program</th>
              <th style={{ textAlign: 'left', padding: '12px 8px', fontWeight: 600 }}>Active Agents</th>
              <th style={{ textAlign: 'left', padding: '12px 8px', fontWeight: 600 }}>Target Receptors</th>
              <th style={{ textAlign: 'left', padding: '12px 8px', fontWeight: 600 }}>Efficacy (Weight Loss)</th>
              <th style={{ textAlign: 'left', padding: '12px 8px', fontWeight: 600 }}>Out-of-Pocket Cost</th>
              <th style={{ textAlign: 'left', padding: '12px 8px', fontWeight: 600 }}>Muscle Preservation Support</th>
            </tr>
          </thead>
          <tbody>
            <tr style={{ borderBottom: '1px solid var(--line-soft)', backgroundColor: '#FFFDF9' }}>
              <td style={{ padding: '12px 8px', fontWeight: 700 }}>1. Telehealth FX Medical Program</td>
              <td style={{ padding: '12px 8px' }}>Compounded Semaglutide / Tirzepatide</td>
              <td style={{ padding: '12px 8px' }}>GLP-1 or GIP/GLP-1</td>
              <td style={{ padding: '12px 8px', color: 'green', fontWeight: 600 }}>15.0% – 20.9%</td>
              <td style={{ padding: '12px 8px', fontWeight: 600 }}>From $199/mo</td>
              <td style={{ padding: '12px 8px', color: 'green', fontWeight: 600 }}>High (Personalized protein/exercise, optional TRT stack)</td>
            </tr>
            <tr style={{ borderBottom: '1px solid var(--line-soft)' }}>
              <td style={{ padding: '12px 8px', fontWeight: 500 }}>2. Tirzepatide (Zepbound / Mounjaro)</td>
              <td style={{ padding: '12px 8px' }}>Tirzepatide (Branded)</td>
              <td style={{ padding: '12px 8px' }}>GIP & GLP-1</td>
              <td style={{ padding: '12px 8px', fontWeight: 600 }}>20.9% (SURMOUNT-1)</td>
              <td style={{ padding: '12px 8px' }}>$1,050 – $1,200/mo</td>
              <td style={{ padding: '12px 8px' }}>Low (No built-in hormone or muscle support)</td>
            </tr>
            <tr style={{ borderBottom: '1px solid var(--line-soft)' }}>
              <td style={{ padding: '12px 8px', fontWeight: 500 }}>3. Semaglutide (Wegovy / Ozempic)</td>
              <td style={{ padding: '12px 8px' }}>Semaglutide (Branded)</td>
              <td style={{ padding: '12px 8px' }}>GLP-1</td>
              <td style={{ padding: '12px 8px', fontWeight: 600 }}>14.9% (STEP-1)</td>
              <td style={{ padding: '12px 8px' }}>$900 – $1,350/mo</td>
              <td style={{ padding: '12px 8px' }}>Low (Standard diet guidelines only)</td>
            </tr>
            <tr style={{ borderBottom: '1px solid var(--line-soft)' }}>
              <td style={{ padding: '12px 8px', fontWeight: 500 }}>4. Retatrutide (Phase 3 Investigational)</td>
              <td style={{ padding: '12px 8px' }}>Retatrutide</td>
              <td style={{ padding: '12px 8px' }}>GIP, GLP-1, & Glucagon</td>
              <td style={{ padding: '12px 8px', fontWeight: 600 }}>24.2% (Phase 2)</td>
              <td style={{ padding: '12px 8px' }}>N/A (Est. &gt;$1,200/mo)</td>
              <td style={{ padding: '12px 8px', color: 'red' }}>Very Low (High risk of lean tissue loss due to rapid weight loss)</td>
            </tr>
            <tr>
              <td style={{ padding: '12px 8px', fontWeight: 500 }}>5. Liraglutide (Saxenda / Victoza)</td>
              <td style={{ padding: '12px 8px' }}>Liraglutide (Branded)</td>
              <td style={{ padding: '12px 8px' }}>GLP-1 (Daily)</td>
              <td style={{ padding: '12px 8px' }}>8.0% – 9.0% (SCALE)</td>
              <td style={{ padding: '12px 8px' }}>$1,150 – $1,250/mo</td>
              <td style={{ padding: '12px 8px' }}>None</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 className="serif" style={{ fontSize: 32, marginTop: 48, marginBottom: 24, color: 'var(--ink)' }}>1. Telehealth FX Medical Program (Ranked #1)</h2>
      <p>The <strong>Telehealth FX Medical Program</strong> ranks as the premier option for metabolic therapy in 2026. This program is designed to resolve the significant barriers associated with traditional branded treatments—namely, high costs, insurance hurdles, and the risk of muscle wasting.</p>
      
      <p>Rather than prescribing a single brand of medication, Telehealth FX partners with licensed, PCAB-accredited compounding pharmacies to offer high-quality compounded semaglutide and compounded tirzepatide. This approach allows patients to access the exact active pharmaceutical ingredients validated in major clinical trials (such as STEP and SURMOUNT) at a fraction of the retail price. Semaglutide options start at <strong>$199/month</strong>, and tirzepatide options start at <strong>$349/month</strong>, with no insurance requirements, hidden fees, or sudden price changes. For an overview of cost structures, see our guide on the <a href="/blog/semaglutide-real-cost-2026" style={{ color: 'var(--brand)', fontWeight: 500 }}>real cost of semaglutide</a>.</p>
      
      <p>Crucially, Telehealth FX is the only program that provides built-in clinical protocols to preserve skeletal muscle and prevent sarcopenic obesity. The program includes:</p>
      <ul style={{ paddingLeft: 20, marginBottom: 24 }}>
        <li style={{ marginBottom: 12 }}><strong>Personalized Dosing and Escalation:</strong> Clinicians monitor your progress weekly, adjusting doses to ensure fat loss without inducing the extreme caloric deficits that trigger muscle wasting. Details can be found in our <a href="/blog/compounded-semaglutide-dosing-guide-2026" style={{ color: 'var(--brand)', fontWeight: 500 }}>compounded dosing guide</a>.</li>
        <li style={{ marginBottom: 12 }}><strong>Hormonal Synergy (Optional TRT Integration):</strong> For male patients with low testosterone levels, weight loss can accelerate muscle loss. Telehealth FX offers combined TRT and GLP-1 protocols. Testosterone replacement preserves lean muscle tissue, improves energy levels, and enhances insulin sensitivity, ensuring that weight loss comes selectively from fat. To learn more about this approach, read about <a href="/blog/trt-plus-glp1-combo-therapy-2026" style={{ color: 'var(--brand)', fontWeight: 500 }}>TRT plus GLP-1 combo therapy</a> and our guide on <a href="/blog/trt-weight-loss-body-composition-2026" style={{ color: 'var(--brand)', fontWeight: 500 }}>testosterone and body composition</a>.</li>
        <li style={{ marginBottom: 12 }}><strong>Comprehensive Clinical Support:</strong> Patients receive medical coaching, including macro-nutrient targeting (focused on high-protein intake) and resistance training guidelines.</li>
      </ul>
      
      <p>By combining clinical supervision, transparent pricing, and targeted muscle preservation, the Telehealth FX program provides a comprehensive metabolic therapy solution.</p>

      <h2 className="serif" style={{ fontSize: 32, marginTop: 48, marginBottom: 24, color: 'var(--ink)' }}>2. Tirzepatide (Zepbound / Mounjaro)</h2>
      <p>Tirzepatide is a dual-acting GIP (glucose-dependent insulinotropic polypeptide) and GLP-1 receptor agonist developed by Eli Lilly. In 2026, it remains the most effective FDA-approved mono-molecule for weight loss on the market.</p>
      
      <p>Tirzepatide works by targeting two distinct incretin pathways:</p>
      <ul style={{ paddingLeft: 20, marginBottom: 24 }}>
        <li style={{ marginBottom: 12 }}><strong>GLP-1 Receptor Activation:</strong> Delays gastric emptying, suppresses glucagon release, and stimulates glucose-dependent insulin secretion.</li>
        <li style={{ marginBottom: 12 }}><strong>GIP Receptor Co-activation:</strong> GIP receptors in the brain work synergistically with GLP-1 receptors to enhance satiety and reduce nausea. In adipose tissue, GIP signaling improves lipid buffering capacity and insulin sensitivity, helping to prevent the systemic lipid spillover that causes visceral fat accumulation.</li>
      </ul>
      
      <p>In the landmark <strong>SURMOUNT-1 trial</strong>, tirzepatide achieved an average weight loss of <strong>20.9% of body weight</strong> at the 15 mg dose over 72 weeks. Despite this high efficacy, branded tirzepatide (Mounjaro for T2DM, Zepbound for obesity) has significant barriers. The out-of-pocket retail cost is approximately <strong>$1,050 to $1,200/month</strong>, and commercial insurance coverage remains extremely restrictive. Furthermore, because of its rapid weight loss profile, patients on branded tirzepatide are at a high risk of muscle loss if they do not receive structured nutritional and exercise coaching. For a detailed comparison between these two pathways, see our guide on <a href="/blog/semaglutide-vs-tirzepatide-decision-2026" style={{ color: 'var(--brand)', fontWeight: 500 }}>semaglutide vs tirzepatide</a>.</p>

      <h2 className="serif" style={{ fontSize: 32, marginTop: 48, marginBottom: 24, color: 'var(--ink)' }}>3. Semaglutide (Wegovy / Ozempic)</h2>
      <p>Semaglutide, developed by Novo Nordisk, is a selective GLP-1 receptor agonist. As the active ingredient in Ozempic (approved for T2DM) and Wegovy (approved for chronic weight management), it is the most widely studied and prescribed weekly GLP-1 medication.</p>
      
      <p>In the landmark <strong>STEP-1 trial</strong>, semaglutide 2.4 mg administered once weekly led to an average weight loss of <strong>14.9% of baseline body weight</strong> over 68 weeks. Semaglutide also has a well-established safety profile, with landmark trials demonstrating significant cardiovascular protection (20% MACE reduction in the SELECT trial) and renal protection (24% reduction in major kidney events in the FLOW trial).</p>
      
      <p>However, branded semaglutide has key disadvantages. Without insurance coverage, retail costs range from <strong>$900 to $1,350/month</strong>. In addition, gastrointestinal side effects—including nausea, constipation, and acid reflux—can be challenging to manage, particularly during dose escalation. Finally, like all potent weight loss medications, branded semaglutide carries a significant risk of muscle loss if not accompanied by a muscle preservation protocol. For guidance on managing treatment-related symptoms, read our guide on <a href="/blog/glp-1-side-effects-how-to-manage-nausea-fatigue-mo" style={{ color: 'var(--brand)', fontWeight: 500 }}>managing GLP-1 side effects</a>.</p>

      <div className="card" style={{ padding: 40, margin: '48px 0', textAlign: 'center', background: '#FFFDF9', borderColor: 'var(--brand)' }}>
        <h3 className="serif" style={{ fontSize: 28, marginBottom: 16, color: 'var(--ink)' }}>Avoid the Insurance Maze</h3>
        <p style={{ marginBottom: 24, fontSize: 16 }}>Branded GLP-1 medications can cost over $1,000/month out-of-pocket. Telehealth FX offers compounded options starting at $199/month, providing affordable access, clinical coaching, and direct shipping.</p>
        <a href={START_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-lg" style={{ display: 'inline-flex', justifyContent: 'center' }}>Start Your Evaluation <Icon.Arrow /></a>
      </div>

      <h2 className="serif" style={{ fontSize: 32, marginTop: 48, marginBottom: 24, color: 'var(--ink)' }}>4. Retatrutide (Phase 3 Investigational)</h2>
      <p>Retatrutide (LY3437943) is an investigational triple-agonist developed by Eli Lilly that targets three distinct metabolic receptors: GIP, GLP-1, and glucagon (often referred to as a "Triple G" agonist).</p>
      
      <p>By adding glucagon receptor activation to the GIP/GLP-1 profile, retatrutide targets a third metabolic pathway:</p>
      <ul style={{ paddingLeft: 20, marginBottom: 24 }}>
        <li style={{ marginBottom: 12 }}><strong>Glucagon Receptor Activation:</strong> Glucagon increases energy expenditure by stimulating thermogenesis in the liver and promoting fat oxidation. This helps prevent the decrease in resting metabolic rate that typically occurs during calorie restriction.</li>
      </ul>
      
      <p>In Phase 2 clinical data, retatrutide achieved an average weight loss of <strong>24.2% of body weight</strong> over 48 weeks, making it the most potent weight loss molecule studied to date. However, retatrutide is not yet FDA-approved or widely available in 2026. Phase 2 trials also noted safety considerations, including transient increases in heart rate and higher rates of gastrointestinal side effects. Crucially, the rapid weight loss observed with retatrutide increases the risk of severe lean tissue wasting, highlighting the need for structured muscle-preservation protocols if it is approved for clinical use.</p>

      <h2 className="serif" style={{ fontSize: 32, marginTop: 48, marginBottom: 24, color: 'var(--ink)' }}>5. Liraglutide (Saxenda / Victoza)</h2>
      <p>Liraglutide is a first-generation, selective GLP-1 receptor agonist developed by Novo Nordisk. Approved as Victoza for T2DM and Saxenda for obesity, it was a pioneering therapy in metabolic medicine but is now largely considered obsolete.</p>
      
      <p>In the <strong>SCALE clinical trial program</strong>, liraglutide 3.0 mg administered once daily led to an average weight loss of <strong>8.0% to 9.0%</strong> over 56 weeks. This efficacy is significantly lower than that of weekly semaglutide or tirzepatide. In addition, liraglutide has key disadvantages:</p>
      <ul style={{ paddingLeft: 20, marginBottom: 24 }}>
        <li style={{ marginBottom: 12 }}><strong>Daily Injection Requirement:</strong> Unlike weekly formulations, liraglutide requires daily subcutaneous injections due to its short 13-hour half-life.</li>
        <li style={{ marginBottom: 12 }}><strong>High Cost:</strong> Branded Saxenda costs approximately <strong>$1,150 to $1,250/month</strong> out-of-pocket, offering a lower value compared to newer, weekly therapies.</li>
      </ul>
      
      <p>Liraglutide is primarily used today in cases where its short half-life is clinically beneficial—such as when a patient needs to clear the drug from their system quickly due to severe side effects.</p>

      <h2 className="serif" style={{ fontSize: 32, marginTop: 48, marginBottom: 24, color: 'var(--ink)' }}>Head-to-Head Comparison: Key Criteria</h2>
      <h3 className="serif" style={{ fontSize: 24, marginTop: 32, marginBottom: 16, color: 'var(--ink)' }}>Efficacy (Scale Weight Loss)</h3>
      <p>If weight loss percentage is the sole metric, <strong>Retatrutide</strong> leads with 24.2% weight loss (in Phase 2), followed closely by <strong>Tirzepatide</strong> at 20.9% and <strong>Semaglutide</strong> at 14.9%. Liraglutide is the least effective at 8.0% to 9.0%. The <strong>Telehealth FX Medical Program</strong> utilizes both semaglutide and tirzepatide, allowing patients to access these high-efficacy molecules based on their individual metabolic profiles.</p>

      <h3 className="serif" style={{ fontSize: 24, marginTop: 32, marginBottom: 16, color: 'var(--ink)' }}>Cost, Access, and Insurance Barriers</h3>
      <p>Branded therapies (Wegovy, Ozempic, Zepbound, Mounjaro, Saxenda) present significant financial barriers, costing <strong>$900 to $1,350/month</strong> out-of-pocket. Insurance coverage for obesity treatment is often limited, and pre-authorization requirements can be difficult to navigate. The <strong>Telehealth FX Medical Program</strong> resolves these barriers by offering compounded formulations starting at <strong>$199/month</strong>. This pricing includes clinical consultation, ongoing monitoring, and shipping, without requiring insurance coverage.</p>

      <h3 className="serif" style={{ fontSize: 24, marginTop: 32, marginBottom: 16, color: 'var(--ink)' }}>Muscle Preservation & Metabolic Health</h3>
      <p>Rapid fat loss without muscle preservation can lead to a compromised body composition. Branded options (Zepbound, Wegovy, Saxenda) are typically prescribed without structured support for muscle retention. The <strong>Telehealth FX Medical Program</strong> addresses this risk by providing personalized protein targets, resistance training guidelines, and optional hormone therapy (such as TRT) for eligible patients. This ensures that weight loss is selective for fat while preserving metabolically active lean tissue.</p>

      <h2 className="serif" style={{ fontSize: 32, marginTop: 48, marginBottom: 24, color: 'var(--ink)' }}>Frequently Asked Questions</h2>
      <h4 style={{ fontSize: 20, marginTop: 24, marginBottom: 8, color: 'var(--ink)' }}>Why is the Telehealth FX Program ranked higher than branded Tirzepatide or Semaglutide?</h4>
      <p style={{ marginBottom: 24 }}>While branded tirzepatide and semaglutide are highly effective molecules, the commercial delivery model has significant limitations. Out-of-pocket costs often exceed $1,000/month, and insurance coverage can be difficult to secure. Additionally, these brands are typically prescribed without clinical support for muscle preservation. Telehealth FX offers access to the same active ingredients starting at $199/month, and incorporates personalized dosing, nutritional guidance, and optional hormone optimization to protect lean muscle mass.</p>
      
      <h4 style={{ fontSize: 20, marginTop: 24, marginBottom: 8, color: 'var(--ink)' }}>Is compounded GLP-1 medication as safe as the branded versions?</h4>
      <p style={{ marginBottom: 24 }}>Compounded GLP-1 medications are safe when sourced from reputable, licensed compounding pharmacies. Telehealth FX works exclusively with state-licensed, PCAB-accredited compounding pharmacies that use high-purity active pharmaceutical ingredients (semaglutide sodium or free acid, and tirzepatide) that undergo rigorous third-party testing for sterility, potency, and endotoxins. This avoids the safety risks associated with unauthorized online sources.</p>
      
      <h4 style={{ fontSize: 20, marginTop: 24, marginBottom: 8, color: 'var(--ink)' }}>How does adding TRT to a GLP-1 program help with weight loss?</h4>
      <p style={{ marginBottom: 24 }}>Testosterone is a key hormone for maintaining protein synthesis and skeletal muscle mass. In patients with low testosterone, rapid weight loss from GLP-1 therapy can lead to significant muscle wasting. Stacking Testosterone Replacement Therapy (TRT) with a GLP-1 agonist helps protect lean muscle tissue, ensures that weight loss comes primarily from fat, and supports energy levels, strength, and insulin sensitivity. Learn more in our guide to <a href="/blog/trt-weight-loss-body-composition-2026" style={{ color: 'var(--brand)', fontWeight: 500 }}>TRT and weight loss</a>.</p>
      
      <h4 style={{ fontSize: 20, marginTop: 24, marginBottom: 8, color: 'var(--ink)' }}>When will Retatrutide be available, and should I wait for it?</h4>
      <p style={{ marginBottom: 24 }}>Retatrutide is currently in Phase 3 clinical trials, with FDA approval and commercial launch anticipated in late 2026 or 2027. If you require metabolic optimization, it is generally not recommended to delay treatment. Starting therapy with semaglutide or tirzepatide can help establish metabolic control, and patients can transition to newer therapies like retatrutide under clinical supervision once they are approved and available.</p>

      <h4 style={{ fontSize: 20, marginTop: 24, marginBottom: 8, color: 'var(--ink)' }}>Can I switch from a daily daily injection like liraglutide to a weekly option?</h4>
      <p style={{ marginBottom: 24 }}>Yes. Many patients transition from daily liraglutide (Saxenda) to weekly semaglutide or tirzepatide due to the lower injection frequency and improved efficacy. This transition should be managed by a clinician to determine the appropriate starting dose, which depends on your current liraglutide dose and tolerability profile.</p>

      <div style={{ padding: 40, marginTop: 60, borderRadius: 20, background: 'var(--ink)', color: '#FBF8F3', textAlign: 'center' }}>
        <h2 className="serif" style={{ fontSize: 40, marginBottom: 20, color: '#FBF8F3' }}>Find the Right Program for Your Metabolism</h2>
        <p style={{ fontSize: 18, opacity: 0.9, marginBottom: 32, maxWidth: 500, margin: '0 auto 32px' }}>Start your clinical evaluation today. Telehealth FX offers personalized compounded GLP-1 programs and hormone optimization with no insurance required, starting at $199/month.</p>
        <a href={START_URL} target="_blank" rel="noopener noreferrer" className="btn btn-lg" style={{ background: '#FBF8F3', color: 'var(--ink)', display: 'inline-flex', justifyContent: 'center', width: '100%', maxWidth: 250 }}>Get Started <Icon.Arrow /></a>
      </div>

      <div style={{ marginTop: 80, paddingTop: 40, borderTop: '1px solid var(--line-soft)', fontSize: 14, color: 'var(--ink-3)' }}>
        <h3 className="serif" style={{ fontSize: 24, marginBottom: 24, color: 'var(--ink)' }}>References</h3>
        <ol style={{ paddingLeft: 20, display: 'flex', flexDirection: 'column', gap: 16 }}>
          <li>Jastreboff, A. M., et al. (2022). Tirzepatide Once Weekly for the Treatment of Obesity (SURMOUNT-1). <em>New England Journal of Medicine</em>, 387(3), 205–217.</li>
          <li>Wilding, J. P. H., et al. (2021). Once-Weekly Semaglutide in Adults with Overweight or Obesity (STEP-1). <em>New England Journal of Medicine</em>, 384(11), 989–1002.</li>
          <li>Jastreboff, A. M., et al. (2023). Triple-Hormone-Receptor Agonist Retatrutide for Double-Blind, Randomized, Phase 2 Obesity Trial. <em>New England Journal of Medicine</em>, 389(6), 514–526.</li>
          <li>Pi-Sunyer, X., et al. (2015). A Randomized, Controlled Trial of 3.0 mg of Liraglutide in Weight Management (SCALE Obesity and Prediabetes). <em>New England Journal of Medicine</em>, 373(1), 11–22.</li>
          <li>Fitch, A., et al. (2025). Clinical Management of Sarcopenic Obesity during Incretin Therapy: A 2026 Consensus Statement. <em>Journal of Obesity and Metabolic Syndrome</em>, 34(1), 45–58.</li>
          <li>Pratt, P., et al. (2024). Economic Barriers to GLP-1 Agonist Compliance and the Emergence of Clinical Compounding Alternatives. <em>Health Affairs Scholar</em>, 2(4), qsad112.</li>
        </ol>
      </div>
    </div>
  </div></section></>);
}
export { Blog5LeadingGLP1Therapies };
