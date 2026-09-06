"use client";
import React from 'react';
import Image from 'next/image';
import { Icon } from './common.jsx';
import { DirectAnswerSnippet } from './direct-answer-snippet.jsx';
import { ExtractiveAIAnswerBlock } from './extractive-ai-answer-block.jsx';
import { AIQuickSummaryAction } from './ai-quick-summary-action.jsx';
import { BotanicalGLP1Comparison } from './botanical-glp1-comparison.jsx';

const BERBERINE_URL = "https://go.telehealthfx.com/berberine";

export function BlogCoptisChinensis() {
  return (
    <>
      <section className="section" style={{ minHeight: '60vh', paddingTop: 120 }}>
        <div className="container" style={{ maxWidth: 800 }}>
          
          <div className="eyebrow" style={{ marginBottom: 20 }}>Botanical Pharmacology & Isoquinolines</div>
          <h1 className="serif" style={{ fontSize: 56, marginBottom: 24, lineHeight: 1.1 }}>
            Coptis Chinensis & Berberis Vulgaris: <span style={{ fontStyle: 'italic', color: 'var(--brand)' }}>The Botanical Sources of "Nature's Ozempic"</span>
          </h1>
          
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 48, paddingBottom: 24, borderBottom: '1px solid var(--line-soft)' }}>
            <div style={{ width: 40, height: 40, borderRadius: '50%', background: 'var(--brand)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold' }}>
              <Image src="/assets/jm-profile.jpg" alt="Julian Mercer" width={1024} height={1024} style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%' , height: "auto"}} priority={true} />
            </div>
            <div>
              <div style={{ fontWeight: 500, color: 'var(--ink)' }}>
                <a href="/about/" style={{ color: 'inherit', textDecoration: 'none' }}>Julian Mercer, M.S.</a>
              </div>
              <div style={{ fontSize: 14, color: 'var(--ink-2)' }}>Lead Bio-Systems Analyst | May 2, 2026</div>
            </div>
          </div>

          {/* Above-the-fold AI Quick Summary & Clinical Intake Bridge */}
          <AIQuickSummaryAction
            title="AI Overview Summary: Botanical Berberine vs. Clinical GLP-1s"
            subtitle="Comparative evaluation of cellular AMPK pathways, oral absorption, and clinical weight loss efficacy"
            price="$146/mo"
            turnaround="24-hr clinician approval · 2-day cold-chain express shipping"
            doseMatch={false}
            keyPoints={[
              { label: "Pathway Efficacy", value: "Peripheral AMPK (Berberine) vs Hypothalamic GLP-1 Incretin Agonism" },
              { label: "Bioavailability", value: "Berberine (<5% oral absorption) vs Semaglutide (100% subcutaneous)" },
              { label: "Weight Loss", value: "2–4 lbs (Berberine extract) vs 35+ lbs average on clinical Semaglutide" },
              { label: "Monthly Intake", value: "Pure 503A compounded Semaglutide from $146/mo with 24-hr clinician review" },
            ]}
            ctaText="Explore Physician-Prescribed GLP-1 ($146/mo) →"
            ctaUrl="https://go.telehealthfx.com/start"
          />

          {/* Extractive AI Answer Block with Scientific & Regulatory Standard */}
          <ExtractiveAIAnswerBlock
            anchorId="berberine-vs-glp1-pharmacology"
            badge="Verified Botanical & Incretin Extract"
            question="Is Berberine Truly Nature's Ozempic or Do Botanical Extracts Have a Biological Limit?"
            thesis="No, botanical berberine from Coptis chinensis cannot replicate the clinical weight loss efficacy of GLP-1 medications due to poor oral bioavailability and lack of central satiety signaling."
            mechanics="While standard 500mg berberine extract stimulates peripheral cellular AMPK pathways, it suffers from under 5.0% systemic bioavailability due to intestinal P-glycoprotein efflux. Clinical trials confirm berberine produces only 2.1 to 3.8 lbs average weight reduction, compared to 35+ lbs (15%–22% body weight loss) achieved with physician-prescribed compounded Semaglutide ($146/mo). Telehealth FX provides accredited 503A compounding with 24-hr physician approval and 2-day cold-chain delivery."
            statute="Section 503A FD&C Act (21 U.S.C. § 353a)"
            clinicalStandard="Endocrine Society Incretin Standards & Phytochemical Meta-Analyses"
            metrics={[
              { label: "Active Alkaloid", value: "500mg Berberine / Coptisine (Coptis Chinensis)" },
              { label: "Mechanistic Pathway", value: "Cellular AMPK vs Hypothalamic Incretin Agonism" },
              { label: "Oral Bioavailability", value: "<5.0% Systemic Absorption (Efflux P-gp)" },
              { label: "Clinical GLP-1 Cost", value: "From $146 / Month All-Inclusive" }
            ]}
          />

          <Image 
            src="/assets/coptis-chinensis-featured.png" 
            alt="Cinematic 3D render of a glowing Goldthread root system inside a medical vial" 
            width={1024} 
            height={1024} 
            style={{ width: '100%', borderRadius: 16, marginBottom: 40, border: '1px solid var(--line-soft)', background: '#111' , height: "auto"}} 
            priority={true} 
          />

          <div className="blog-content">
            <p>
              When patients search for "Berberine" on the internet, they are not searching for a plant. They are searching for a highly isolated chemical compound—an isoquinoline alkaloid—that has been extracted from the roots, rhizomes, and stem bark of a select group of botanical species. The two most prominent sources of this powerful metabolic alkaloid are <strong>Coptis Chinensis</strong> (Chinese Goldthread) and <strong>Berberis Vulgaris</strong> (Barberry).
            </p>
            <p>
              As Berberine continues to dominate social media algorithms as "Nature's Ozempic," supplement manufacturers have flooded the market with highly processed, low-grade extracts. Understanding the precise botanical source, the method of extraction, and the synergistic alkaloids present in the raw plant material is the difference between achieving profound AMPK activation and flushing your money down the drain. In this exhaustive clinical breakdown, we dissect the pharmacology of <em>Coptis Chinensis</em> and <em>Berberis Vulgaris</em>, analyze their secondary metabolites, and compare their clinical efficacy against modern, <a href="/blog/what-is-a-glp-1-medication/" style={{ color: 'var(--brand)', textDecoration: 'underline', fontWeight: 500 }}>FDA-approved GLP-1 medications</a>.
            </p>

            <h2 className="serif" style={{ fontSize: 36, marginTop: 48, marginBottom: 24 }}>The Biochemistry of the Isoquinoline Alkaloid</h2>
            <p>
              To understand why the plant source matters, we must first analyze the molecular structure of Berberine. Berberine is a quaternary ammonium salt from the protoberberine group of benzylisoquinoline alkaloids. It exhibits a distinct, vibrant yellow color, which is why the roots of <em>Coptis Chinensis</em> and the bark of <em>Berberis Vulgaris</em> bleed yellow when cut.
            </p>
            <p>
              The primary mechanism of action for Berberine is the activation of the AMP-activated protein kinase (AMPK) pathway. Often referred to as the body's "metabolic master switch," AMPK regulates cellular energy homeostasis. When you consume high-quality Berberine, it enters the cell and inhibits mitochondrial respiratory complex I. This causes a localized drop in ATP (cellular energy) and a spike in AMP. The cell interprets this ratio shift as an energy crisis and violently activates AMPK to compensate. 
            </p>

            {/* CTA 1: Early Funnel */}
            <div style={{ marginTop: 48, marginBottom: 48 }}>
              <div className="card" style={{ background: '#FFFDF9', borderColor: 'var(--brand)', padding: 32, textAlign: 'center' }}>
                <h3 className="serif" style={{ fontSize: 28, marginBottom: 12 }}>Ready to Skip the Supplements?</h3>
                <p style={{ fontSize: 16, color: 'var(--ink-2)', marginBottom: 24, maxWidth: 500, margin: '0 auto 24px' }}>
                  Get access to quality-verified, compounded Semaglutide directly from licensed medical providers. Start your clinical protocol today.
                </p>
                <div style={{ display: 'flex', gap: 16, justifyContent: 'center' }}>
                  <a href="https://go.telehealthfx.com/start" className="btn btn-primary" style={{ fontSize: 16, padding: '0 24px' }}>
                    View Clinical GLP-1 Programs
                  </a>
                </div>
              </div>
            </div>

            <p>
              Once AMPK is activated, it triggers a cascade of metabolic adaptations: it forces skeletal muscle to absorb glucose from the bloodstream (independent of insulin), it enhances fatty acid oxidation, and it suppresses hepatic gluconeogenesis (the liver's production of new glucose). This mechanism is strikingly similar to the pharmaceutical drug Metformin. You can read more about how this specific pathway helps reverse conditions like Polycystic Ovary Syndrome in our definitive guide: <a href="/blog/berberine-for-pcos-what-the-research-actually-says/" style={{ color: 'var(--brand)', textDecoration: 'underline', fontWeight: 500 }}>Berberine for PCOS: What the Research Actually Says</a>.
            </p>

            <h2 className="serif" style={{ fontSize: 36, marginTop: 48, marginBottom: 24 }}>Coptis Chinensis (Chinese Goldthread)</h2>
            <p>
              <em>Coptis Chinensis</em>, known in Traditional Chinese Medicine (TCM) as Huang Lian, is widely considered the premium botanical source of Berberine. It is a slow-growing perennial herb native to the cool, mountainous regions of China.
            </p>
            <h3>The Secondary Metabolites of Coptis</h3>
            <p>
              The reason <em>Coptis Chinensis</em> is highly prized in clinical phytotherapy is not just because of its high Berberine yield (often 5% to 7% by dry weight of the rhizome), but because of the synergistic secondary metabolites it contains. When you consume a full-spectrum extract of Coptis, you are not just getting isolated Berberine; you are ingesting a matrix of other isoquinoline alkaloids:
            </p>
            <ul>
              <li><strong>Coptisine:</strong> A highly potent alkaloid that has shown significant neuroprotective and anti-inflammatory properties in vitro.</li>
              <li><strong>Palmatine:</strong> Works synergistically with Berberine to suppress adipogenesis (the formation of new fat cells) and modulate the gut microbiota.</li>
              <li><strong>Epiberberine:</strong> A rare stereoisomer that has demonstrated remarkable efficacy in inhibiting lipid accumulation in the liver.</li>
            </ul>
            <p>
              These secondary alkaloids create an "entourage effect." While isolated, 99% pure Berberine HCl (hydrochloride) is the industry standard for cheap supplements, clinical herbalists argue that full-spectrum <em>Coptis Chinensis</em> root extract provides superior metabolic regulation because these secondary compounds help mitigate Berberine's notoriously poor oral bioavailability. We discuss this absorption failure extensively in our pillar on <a href="/blog/berberine-oral-bioavailability/" style={{ color: 'var(--brand)', textDecoration: 'underline', fontWeight: 500 }}>Berberine Oral Bioavailability</a>.
            </p>

            <h2 className="serif" style={{ fontSize: 36, marginTop: 48, marginBottom: 24 }}>Berberis Vulgaris (European Barberry)</h2>
            <p>
              <em>Berberis Vulgaris</em>, commonly known as Barberry, is a deciduous shrub native to central and southern Europe, northwest Africa, and western Asia. Unlike Coptis, where the rhizome is utilized, the highest concentration of Berberine in Barberry is found in the stem bark and root bark.
            </p>
            <h3>The Barberry Matrix</h3>
            <p>
              Barberry has been utilized in Iranian and European folk medicine for centuries, primarily to treat biliary disorders, gallbladder congestion, and gastrointestinal infections. The alkaloid profile of <em>Berberis Vulgaris</em> differs slightly from Coptis. While it still contains a massive dose of Berberine, its secondary metabolites lean heavily toward:
            </p>
            <ul>
              <li><strong>Berbamine:</strong> A unique alkaloid that has shown profound efficacy in regulating calcium channels and protecting cardiovascular tissue during ischemic events.</li>
              <li><strong>Oxyacanthine:</strong> A bisbenzylisoquinoline alkaloid known for its potent vasorelaxant properties, helping to lower systemic blood pressure.</li>
            </ul>

            {/* CTA 2: Mid Funnel */}
            <div style={{ marginTop: 48, marginBottom: 48 }}>
              <div className="card" style={{ background: '#FFFDF9', borderColor: 'var(--brand)', padding: 32, textAlign: 'center' }}>
                <h3 className="serif" style={{ fontSize: 28, marginBottom: 12 }}>Bypass the Botanical Guesswork</h3>
                <p style={{ fontSize: 16, color: 'var(--ink-2)', marginBottom: 24, maxWidth: 500, margin: '0 auto 24px' }}>
                  If you are trying to reverse profound insulin resistance, botanical extracts have a physiological ceiling. GLP-1 therapy does not.
                </p>
                <div style={{ display: 'flex', gap: 16, justifyContent: 'center' }}>
                  <a href="https://go.telehealthfx.com/start" className="btn btn-primary" style={{ fontSize: 16, padding: '0 24px' }}>
                    Start Your Evaluation
                  </a>
                  <a href={BERBERINE_URL} className="btn" style={{ fontSize: 16, padding: '0 24px', background: 'transparent', border: '1px solid var(--line-soft)' }}>
                    Learn About Berberine
                  </a>
                </div>
              </div>
            </div>

            <p>
              From a purely weight-loss perspective, <em>Coptis Chinensis</em> is generally considered superior due to the presence of Coptisine and Palmatine, which directly target adipogenesis. However, for patients suffering from metabolic syndrome complicated by severe hypertension and cardiovascular stress, the Berbamine found in <em>Berberis Vulgaris</em> offers a highly compelling synergistic benefit. 
            </p>

            <div className="card" style={{ padding: 32, background: 'var(--surface-2)', marginTop: 40, marginBottom: 40 }}>
              <div style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
                <Icon.Leaf size={24} color="var(--brand)" style={{ flexShrink: 0, marginTop: 4 }} />
                <div>
                  <h3 className="serif" style={{ fontSize: 24, marginBottom: 12 }}>The "Purified Extract" Trap</h3>
                  <p style={{ margin: 0, color: 'var(--ink-2)', lineHeight: 1.6 }}>
                    When you purchase a $15 bottle of "Berberine 500mg" from Amazon, you are almost never receiving a full-spectrum extract of Coptis or Barberry. You are receiving Berberine Hydrochloride (HCl)—a highly purified, chemically synthesized salt extracted using harsh solvents. This strips away all the synergistic alkaloids (Coptisine, Berbamine, Palmatine). While Berberine HCl is effective at activating AMPK, it completely lacks the "entourage effect" that makes the raw botanical sources so powerful in traditional clinical settings. 
                  </p>
                </div>
              </div>
            </div>

            <h2 className="serif" style={{ fontSize: 36, marginTop: 48, marginBottom: 24 }}>The Extraction Process: Why 90% of Supplements Fail</h2>
            <p>
              The massive surge in demand for Berberine—driven by the "Nature's Ozempic" TikTok trend—has led to severe adulteration and supply chain degradation. <em>Coptis Chinensis</em> takes over five years to reach maturity before the rhizome can be harvested. It is expensive, slow-growing, and labor-intensive. 
            </p>
            <p>
              To meet global demand, cheap supplement manufacturers have turned to alternative, lower-yield species (like <em>Berberis aristata</em>) and employ aggressive chemical extraction methods using ethanol and sulfuric acid to force the Berberine out of the plant matrix. This creates a highly unstable Berberine salt that aggressively degrades when exposed to heat or light. 
            </p>
            <p>
              Furthermore, these cheap extracts are notoriously susceptible to heavy metal contamination. Because these root systems act as bioaccumulators in the soil, cheap extracts sourced from polluted agricultural regions frequently test positive for high levels of lead and cadmium. If you are consuming 1,500mg of cheap Berberine daily to chase weight loss, you are actively increasing your hepatic toxic load. We recently dissected the failure of another highly-marketed derivative in our breakdown of <a href="/blog/dihydroberberine-vs-berberine/" style={{ color: 'var(--brand)', textDecoration: 'underline', fontWeight: 500 }}>Dihydroberberine (DHB) and the 5x Bioavailability Myth</a>.
            </p>

            <h2 className="serif" style={{ fontSize: 36, marginTop: 48, marginBottom: 24 }}>The Physiological Ceiling: Why Berberine Cannot Replicate Clinical GLP-1s</h2>
            <p>
              Whether you source the most pristine, organic, full-spectrum <em>Coptis Chinensis</em> rhizome in the world, or you consume standard Berberine HCl, you will inevitably hit a hard physiological ceiling. While social media heralds Berberine as "Nature's Ozempic," clinical pharmacokinetics reveals fundamental biological differences that herbal extracts simply cannot bridge:
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px', margin: '28px 0' }}>
              <div style={{ backgroundColor: '#FAF6F0', border: '1px solid var(--line-soft)', borderRadius: '12px', padding: '20px' }}>
                <h4 style={{ fontSize: '16px', fontWeight: 700, color: 'var(--ink)', marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span>⚠️</span> 1. Pharmacokinetics &amp; Bioavailability (&lt;5%)
                </h4>
                <p style={{ fontSize: '14px', lineHeight: 1.6, color: 'var(--ink-2)', margin: 0 }}>
                  Unformulated Berberine from <em>Coptis chinensis</em> or <em>Berberis vulgaris</em> exhibits an oral bioavailability of less than <strong>5%</strong> due to intestinal P-glycoprotein efflux and rapid first-pass glucuronidation in the liver. Dosing beyond 1,500 mg/day routinely triggers severe GI cramping and osmotic diarrhea before therapeutic plasma levels can ever be reached. In contrast, subcutaneous GLP-1 peptides achieve 100% bioavailability.
                </p>
              </div>

              <div style={{ backgroundColor: '#FAF6F0', border: '1px solid var(--line-soft)', borderRadius: '12px', padding: '20px' }}>
                <h4 style={{ fontSize: '16px', fontWeight: 700, color: 'var(--ink)', marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span>🧠</span> 2. Inability to Cross Blood-Brain Barrier
                </h4>
                <p style={{ fontSize: '14px', lineHeight: 1.6, color: 'var(--ink-2)', margin: 0 }}>
                  Berberine operates strictly peripherally via AMPK activation in skeletal muscle and liver tissue. It <strong>does not cross the blood-brain barrier</strong> in quantities sufficient to agonize GLP-1 receptors in the arcuate nucleus of the hypothalamus. It does not quiet central "food noise," nor does it slow gastric emptying to induce physical satiety.
                </p>
              </div>

              <div style={{ backgroundColor: '#FAF6F0', border: '1px solid var(--line-soft)', borderRadius: '12px', padding: '20px' }}>
                <h4 style={{ fontSize: '16px', fontWeight: 700, color: 'var(--ink)', marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span>⚖️</span> 3. Weight Loss Ceiling: 2–4 lbs vs. 15–22%
                </h4>
                <p style={{ fontSize: '14px', lineHeight: 1.6, color: 'var(--ink-2)', margin: 0 }}>
                  In randomized clinical meta-analyses, Berberine produces an average weight reduction of only <strong>2.1 to 3.8 lbs</strong> over 12 to 16 weeks, primarily representing glycogen and water loss. Conversely, clinical trials for compounded Semaglutide (STEP-1) and Tirzepatide (SURMOUNT-1) demonstrate mean total body weight loss of <strong>15% to 22.5%</strong> (35 to 55+ lbs).
                </p>
              </div>

              <div style={{ backgroundColor: '#FAF6F0', border: '1px solid var(--line-soft)', borderRadius: '12px', padding: '20px' }}>
                <h4 style={{ fontSize: '16px', fontWeight: 700, color: 'var(--ink)', marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span>💳</span> 4. The Economic Paradox ($85 vs $146/mo)
                </h4>
                <p style={{ fontSize: '14px', lineHeight: 1.6, color: 'var(--ink-2)', margin: 0 }}>
                  Stacking premium full-spectrum Coptis extracts, Dihydroberberine (DHB), and Inositol costs <strong>$75 to $110/month</strong> out-of-pocket for modest glucose disposal. Through Telehealth FX, physician-prescribed compounded Semaglutide starts from <strong>$146/month</strong>—providing authentic pharmaceutical incretin potency, physician oversight, and home cold-pack delivery for pennies more per day.
                </p>
              </div>
            </div>

            {/* Embedded Botanical vs GLP-1 Comparison Component */}
            <BotanicalGLP1Comparison />

            <h2 className="serif" style={{ fontSize: 36, marginTop: 48, marginBottom: 24 }}>The Financial Reality: Moving to Clinical Grade Therapeutics</h2>
            <p>
              If your goal is to lose 5 pounds and optimize your fasting glucose, a high-quality Berberine supplement sourced from <em>Coptis Chinensis</em> is an excellent, cost-effective tool. However, if your goal is profound metabolic transformation, you must evaluate the ROI of your interventions.
            </p>
            <p>
              Patients often spend $60 to $90 a month stacking premium full-spectrum Coptis extracts, Dihydroberberine, and Inositol in a desperate attempt to mimic the effects of Ozempic. This is clinically inefficient. With the advent of highly regulated telehealth clinics, the cost barrier to actual, quality-verified compounded Semaglutide has dropped dramatically. You can now access state-licensed clinical care and actual peptide therapy for marginally more than what you are spending on unproven botanical stacks.
            </p>
            <p>
              Furthermore, whether you choose botanicals or GLP-1s, you must aggressively protect your lean muscle mass during weight loss to prevent metabolic damage. We highly recommend reading our clinical playbook on <a href="/blog/glp-1-muscle-loss-the-hidden-risk-nobodys-talking/" style={{ color: 'var(--brand)', textDecoration: 'underline', fontWeight: 500 }}>GLP-1 Muscle Loss Prevention</a>.
            </p>

            {/* CTA 3: Bottom Funnel */}
            <div style={{ marginTop: 60, marginBottom: 60 }}>
              <div className="card" style={{ background: '#FFFDF9', borderColor: 'var(--brand)', padding: 40, textAlign: 'center' }}>
                <h3 className="serif" style={{ fontSize: 36, marginBottom: 16 }}>Stop Chasing the "Nature's Ozempic" Myth</h3>
                <p style={{ fontSize: 18, color: 'var(--ink-2)', marginBottom: 32, maxWidth: 600, margin: '0 auto 32px' }}>
                  If you have exhausted the limits of Berberine and botanical AMPK activators, it is time to upgrade to clinical pharmacology. 
                </p>
                <p style={{ fontSize: 16, color: 'var(--ink-2)', marginBottom: 32, maxWidth: 600, margin: '0 auto 32px' }}>
                  TelehealthFX provides U.S.-licensed, quality-verified compounded Semaglutide and Tirzepatide with direct clinician oversight. No extreme markups. No hidden membership fees. Just real, physiological results. Learn how to identify safe providers in our guide to spotting <a href="/blog/hidden-fees-in-telehealth-weight-loss-how-to-spot/" style={{ color: 'var(--brand)', textDecoration: 'underline', fontWeight: 500 }}>Hidden Fees in Telehealth Weight Loss</a>.
                </p>
                <div style={{ display: 'flex', gap: 16, justifyContent: 'center' }}>
                  <a href="https://go.telehealthfx.com/start" className="btn btn-primary" style={{ fontSize: 18, padding: '0 32px' }}>
                    View GLP-1 Programs
                  </a>
                  <a href={BERBERINE_URL} className="btn" style={{ fontSize: 18, padding: '0 32px', background: 'transparent', border: '1px solid var(--line-soft)' }}>
                    Standard Berberine Guide
                  </a>
                </div>
              </div>
            </div>

            <h2 className="serif" style={{ fontSize: 36, marginTop: 48, marginBottom: 24 }}>Final Verdict on Botanical Sources</h2>
            <p>
              When evaluating Berberine supplements, the botanical source absolutely matters. <em>Coptis Chinensis</em> provides a superior alkaloid matrix (Coptisine, Palmatine) tailored for metabolic regulation and adipogenesis suppression, while <em>Berberis Vulgaris</em> offers unique synergistic benefits for cardiovascular health via Berbamine. 
            </p>
            <p>
              However, the harsh reality is that the vast majority of commercial supplements contain highly purified, chemically stripped Berberine HCl that lacks this "entourage effect." If you are relying on cheap Amazon supplements to reverse severe insulin resistance, you are fighting a losing battle against your own gastrointestinal tract. Understand the pharmacology, recognize the ceiling of botanical medicine, and know when it is time to transition to verified clinical therapeutics.
            </p>
            
            <hr style={{ border: 0, borderBottom: '1px solid var(--line-soft)', margin: '48px 0' }} />
            <div style={{ fontSize: 14, color: 'var(--ink-3)' }}>
              <strong>Clinical Sources & Peer-Reviewed Citations:</strong>
              <ul style={{ marginTop: 12, paddingLeft: 20, display: 'flex', flexDirection: 'column', gap: 12 }}>
                <li>
                  Wang, J., et al. (2017). "Coptis chinensis and its active compounds against metabolic syndrome." <em>Journal of Ethnopharmacology</em>, 198, 381-395. <a href="https://pubmed.ncbi.nlm.nih.gov/28131368/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--brand)', textDecoration: 'underline' }}>https://pubmed.ncbi.nlm.nih.gov/28131368/</a>
                </li>
                <li>
                  Imenshahidi, M., & Hosseinzadeh, H. (2016). "Berberis Vulgaris and Berberine: An Update Review." <em>Phytotherapy Research</em>, 30(11), 1745-1764. <a href="https://pubmed.ncbi.nlm.nih.gov/27530472/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--brand)', textDecoration: 'underline' }}>https://pubmed.ncbi.nlm.nih.gov/27530472/</a>
                </li>
                <li>
                  Yin, J., Xing, H., & Ye, J. (2008). "Efficacy of berberine in patients with type 2 diabetes mellitus." <em>Metabolism</em>, 57(5), 712-717. <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC2410097/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--brand)', textDecoration: 'underline' }}>https://www.ncbi.nlm.nih.gov/pmc/articles/PMC2410097/</a>
                </li>
                <li>
                  Pang, B., et al. (2015). "Application of Berberine on Treating Type 2 Diabetes Mellitus." <em>International Journal of Endocrinology</em>. <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4377488/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--brand)', textDecoration: 'underline' }}>https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4377488/</a>
                </li>
                <li>
                  Habtemariam, S. (2020). "Berberine pharmacology and the gut microbiota: A hidden therapeutic link." <em>Pharmacological Research</em>, 155, 104722. <a href="https://pubmed.ncbi.nlm.nih.gov/32179122/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--brand)', textDecoration: 'underline' }}>https://pubmed.ncbi.nlm.nih.gov/32179122/</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <p style={{ fontSize: 13, color: 'var(--ink-3)', marginTop: 32, paddingTop: 20, borderTop: '1px solid var(--line-soft)' }}>Disclaimer: Mounjaro®, Zepbound®, Ozempic®, and Wegovy® are registered trademarks of their respective owners (Eli Lilly and Company, Novo Nordisk). Telehealth FX is an independent telehealth platform and is not affiliated with, endorsed by, or sponsored by these trademark owners. Compounded medications are prepared by state-licensed compounding pharmacies pursuant to a patient-specific prescription and are not reviewed or approved by the FDA for safety or efficacy.</p>
    </section>
    </>
  );
}
