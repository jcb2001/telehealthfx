"use client";
import React, { useState, useEffect } from 'react';
import { Icon } from './common.jsx';


function BlogIndex() {
  const articles = [
    {
      title: "The Pharmacokinetics of Ozempic (Semaglutide): A Cellular Breakdown",
      description: "A clinical breakdown of Semaglutide pharmacokinetics. We analyze the DPP-4 enzyme, aminoisobutyric acid substitution, and the albumin transport mechanism.",
      slug: "/blog/pharmacokinetics-ozempic-semaglutide-cellular-breakdown",
      image: "/assets/ozempic-pharmacokinetics-featured.png",
      tag: "GLP-1 Mechanics"
    },
    {
      title: "The Berberine Extraction Process: Why 90% of Supplements Fail the Purity Test",
      description: "A clinical breakdown of the Berberine extraction process. We analyze solvent residues, heavy metal contamination, and the limits of botanical purity.",
      slug: "/blog/berberine-extraction-process-purity-test",
      image: "/assets/berberine-extraction-featured.png",
      tag: "Botanical Supplements"
    },
    {
      title: "Coptis Chinensis & Berberis Vulgaris: The Botanical Sources of Nature's Ozempic",
      description: "A clinical breakdown of Coptis Chinensis and Berberis Vulgaris. We analyze the isoquinoline alkaloids and the synergy of full-spectrum extracts.",
      slug: "/blog/coptis-chinensis-vs-berberis-vulgaris-botanical-sources",
      image: "/assets/coptis-chinensis-featured.png",
      tag: "Botanical Supplements"
    },
    {
      title: "Dihydroberberine (DHB) vs. Standard Berberine: The 5x Bioavailability Myth Explained",
      description: "A clinical breakdown of Dihydroberberine (DHB) vs standard Berberine. We analyze the pharmacokinetics and the 5x bioavailability marketing claims.",
      slug: "/blog/dihydroberberine-vs-berberine",
      image: "/assets/dhb-bioavailability-featured.png",
      tag: "Botanical Supplements"
    },
    {
      title: "GLP-1 Muscle Loss: The Hidden Risk on Semaglutide & Tirzepatide",
      description: "A comprehensive clinical breakdown of GLP-1 induced sarcopenia, DXA scan nuance, and the ultimate prevention playbook to protect your lean mass.",
      slug: "/blog/glp-1-muscle-loss-the-hidden-risk-nobodys-talking",
      image: "/assets/glp1_muscle_loss_featured.png",
      tag: "Clinical Education"
    },
    {
      title: "Oral Semaglutide Is Here: Is the GLP-1 Pill as Good as the Injection?",
      description: "We compare oral semaglutide to the weekly injection, analyzing SNAC absorption technology, the OASIS 4 trial, and the brutal daily fasting requirements.",
      slug: "/blog/oral-semaglutide-is-here-is-the-glp-1-pill-as-good",
      image: "/assets/oral_vs_injectable_featured.png",
      tag: "Product Comparison"
    },
    {
      title: "What Happens When You Stop GLP-1 Medication? The Rebound Effect Explained",
      description: "Explore the biological mechanisms of the GLP-1 rebound effect, the return of food noise, and the clinical playbook for long-term weight maintenance.",
      slug: "/blog/what-happens-when-you-stop-glp-1-medication-the-re",
      image: "/assets/glp1_rebound_effect_featured.png",
      tag: "Clinical Physiology"
    },
    {
      title: "Berberine vs. GLP-1 in 2026: Can 'Nature's Ozempic' Actually Compete?",
      description: "We deconstruct the 'Nature's Ozempic' hype, analyzing the AMPK metabolic master switch, Dihydroberberine bioavailability, and head-to-head clinical efficacy.",
      slug: "/blog/berberine-vs-glp-1-in-2026-can-natures-ozempic-act",
      image: "/assets/berberine_vs_glp1_featured.png",
      tag: "Botanical Supplements"
    },
    {
      title: "GLP-1 Side Effects: How to Manage Nausea, Fatigue & More",
      description: "The definitive playbook for surviving the adaptation phase. Learn the 'Go Low and Slow' protocol, how to mitigate GI distress, and when to contact a provider.",
      slug: "/blog/glp-1-side-effects-how-to-manage-nausea-fatigue-mo",
      image: "/assets/glp1_side_effects_featured.png",
      tag: "Patient Care"
    },
    {
      title: "Hidden Fees in Telehealth Weight Loss: How to Spot the Scams",
      description: "An uncompromising consumer protection guide detailing the 7 major red flags of deceptive telehealth clinics, based on 2025 FTC intervention data.",
      slug: "/blog/hidden-fees-in-telehealth-weight-loss-how-to-spot",
      image: "/assets/hidden_fees_featured.png",
      tag: "Consumer Protection"
    },
    {
      title: "GLP-1 and Exercise: How to Combine Medication with Fitness",
      description: "A definitive clinical fitness guide detailing the two non-negotiable pillars of a GLP-1 exercise protocol to protect muscle mass during extreme caloric deficits.",
      slug: "/blog/glp-1-and-exercise-how-to-combine-medication-with",
      image: "/assets/glp1_exercise_featured.png",
      tag: "Clinical Physiology"
    },
    {
      title: "Weight Loss for Women Over 40: How GLP-1 Changes the Game",
      description: "Discover why 'eat less, move more' stops working after 40, and how modern GLP-1 therapy addresses the five biological drivers of midlife weight gain.",
      slug: "/blog/weight-loss-for-women-over-40-how-glp-1-can-help-2",
      image: "/assets/women_over_40_featured.png",
      tag: "Women's Health"
    },
    {
      title: "Berberine for PCOS: What the Research Actually Says",
      description: "A clinical review of how Berberine addresses the root cause of PCOS: severe insulin resistance. Discover how AMPK activation compares to Metformin.",
      slug: "/blog/berberine-for-pcos-what-the-research-actually-says",
      image: "/assets/berberine_pcos_featured.png",
      tag: "Endocrine Health"
    },
    {
      title: "Tirzepatide vs. Semaglutide: Which GLP-1 is Right for You?",
      description: "A definitive clinical breakdown of the SURMOUNT-5 head-to-head trial. Understand the physiological difference between a single-agonist and dual-agonist medication.",
      slug: "/blog/tirzepatide-vs-semaglutide-which-glp-1-is-right-fo",
      image: "/assets/tirzepatide_vs_semaglutide_featured.png",
      tag: "Clinical Pharmacology"
    },
    {
      title: "GLP-1 and Alcohol: The Hidden Interactions You Need to Know",
      description: "A comprehensive clinical guide explaining why GLP-1 therapy eliminates alcohol cravings, and the 4 critical physiological dangers of mixing the two.",
      slug: "/blog/glp-1-and-alcohol-what-you-need-to-know-2026-clini",
      image: "/assets/glp1_alcohol_featured.png",
      tag: "Lifestyle Guidelines"
    },
    {
      title: "Weight Loss for Men: Why GLP-1 Isn't Just for Women",
      description: "A clinical guide explaining how visceral fat destroys male testosterone, and why GLP-1 is a targeted intervention for men's cardiovascular and endocrine health.",
      slug: "/blog/weight-loss-for-men-why-glp-1-isnt-just-for-women",
      image: "/assets/mens_health_featured.png",
      tag: "Men's Health"
    },
    {
      title: "NAD+ Therapy Explained: Anti-Aging, Energy & Weight Loss",
      description: "Discover how NAD+ powers your 'longevity genes' (sirtuins) and why it's the ultimate cellular complement to combat the fatigue of GLP-1 weight loss.",
      slug: "/blog/nad-therapy-explained-anti-aging-energy-weight-los",
      image: "/assets/nad_therapy_featured.png",
      tag: "Cellular Metabolism"
    },
    {
      title: "Is Compounded Semaglutide Safe? What You Need to Know",
      description: "A clinical review of the 2025 FDA crackdown on compounding pharmacies. Understand the severe risks of unverified 'salt forms' and dosing errors.",
      slug: "/blog/is-compounded-semaglutide-safe-what-you-need-to-kn",
      image: "/assets/compounded_safety_featured.png",
      tag: "Regulatory Safety"
    },
    {
      title: "GLP-1 and Mental Health: Anxiety, Depression & Food Noise",
      description: "Explore the bidirectional link between obesity and depression, and how silencing 'food noise' creates profound shifts in psychological wellness.",
      slug: "/blog/glp-1-and-mental-health-anxiety-depression-food-no",
      image: "/assets/mental_health_featured.png",
      tag: "Mental Health"
    },
    {
      title: "Sermorelin & Growth Hormone: The Weight Loss Accelerator",
      description: "Discover how Sermorelin safely restores natural growth hormone production to preserve lean muscle mass during rapid GLP-1 weight loss.",
      slug: "/blog/sermorelin-growth-hormone-the-weight-loss-accelera",
      image: "/assets/sermorelin_peptide_featured.png",
      tag: "Peptides"
    },
    {
      title: "GLP-1 for Seniors: Weight Loss After 60 Safely",
      description: "Understand the hidden dangers of 'sarcopenic obesity' and the strict clinical framework required to protect your bone density during weight loss.",
      slug: "/blog/glp-1-for-seniors-weight-loss-after-60-safely-2026",
      image: "/assets/seniors_longevity_featured.png",
      tag: "Geriatric Health"
    },
    {
      title: "The GLP-1 Plateau: When Weight Loss Stalls & What to Do",
      description: "Break through your weight loss stall with a rigid 7-strategy framework targeting metabolic adaptation and behavioral drift.",
      slug: "/blog/glp-1-plateau-when-weight-loss-stalls-what-to-do-2",
      image: "/assets/glp1_plateau_featured.png",
      tag: "Metabolic Adaptation"
    },
    {
      title: "Ozempic Face & Loose Skin: Prevention and Treatment",
      description: "A rigid 7-step clinical framework to protect your collagen elasticity, and a realistic overview of post-weight-loss treatment options.",
      slug: "/blog/ozempic-face-loose-skin-prevention-treatment-what",
      image: "/assets/loose_skin_featured.png",
      tag: "Aesthetics"
    },
    {
      title: "GLP-1 and Your Heart: The SELECT Trial & Cardiovascular Protection",
      description: "Discover the groundbreaking SELECT Trial data proving that Semaglutide directly reduces the risk of heart attacks and strokes by 20%.",
      slug: "/blog/glp-1-and-your-heart-the-select-trial-cardiovascul",
      image: "/assets/cardiovascular_glp1_featured.png",
      tag: "Cardiovascular Health"
    },
    {
      title: "Oral vs. Injectable GLP-1: Rybelsus, Oral Wegovy, and Orforglipron",
      description: "A comprehensive breakdown of oral GLP-1 delivery, comparing the strict fasting of Oral Wegovy against the revolutionary non-peptide Orforglipron.",
      slug: "/blog/oral-vs-injectable-glp-1-rybelsus-oral-wegovy-orfo",
      image: "/assets/oral_vs_injectable_featured.png",
      tag: "Pharmacology"
    },
    {
      title: "Ozempic Babies: GLP-1 and Fertility — What Women Need to Know",
      description: "Explore the biological phenomenon of GLP-1 restoring fertility in women with PCOS, and the strict safety protocols required for conception.",
      slug: "/blog/ozempic-babies-glp-1-and-fertility-what-women-need",
      image: "/assets/ozempic_babies_fertility_featured.png",
      tag: "Women's Health"
    },
    {
      title: "Next-Gen GLP-1 Drugs: Survodutide, Orforglipron & Amycretin",
      description: "A deep dive into the 2026 pipeline of triple-agonists and amylin co-agonists engineered to shatter weight loss plateaus.",
      slug: "/blog/next-gen-glp-1-drugs-survodutide-orforglipron-amyc",
      image: "/assets/glp1_future_pipeline_featured.png",
      tag: "Future Science"
    },
    {
      title: "GLP-1 and Type 2 Diabetes: Beyond Weight Loss",
      description: "A deep dive into the cellular mechanics of insulin resistance, the SURPASS-2 trial data, and how GLP-1 therapy can push Type 2 Diabetes into remission.",
      slug: "/blog/glp-1-and-type-2-diabetes-beyond-weight-loss-2026",
      image: "/assets/glp1_type2_diabetes_featured.png",
      tag: "Endocrinology"
    },
    {
      title: "The Social Stigma of Weight Loss Medication: Why It's Nobody's Business (2026 Clinical Guide)",
      description: "A comprehensive clinical breakdown exploring the social stigma of weight loss medication: why it's nobody's business (2026 clinical guide).",
      slug: "/blog/the-social-stigma-of-weight-loss-medication-why-it",
      image: "/assets/tirzepatide-semaglutide-featured.png",
      tag: "Clinical Guide"
    },
    {
      title: "Diet Traps: Keto, Intermittent Fasting, and GLP-1 Therapy",
      description: "Why stacking extreme diets like Keto and strict Intermittent Fasting on top of GLP-1 therapy creates catastrophic muscle wasting and metabolic failure.",
      slug: "/blog/intermittent-fasting-glp-1-do-they-work-together-2",
      image: "/assets/glp1_diet_traps_featured.png",
      tag: "Nutrition"
    },
    {
      title: "GLP-1 and Inflammation: Arthritis, Sleep Apnea & Chronic Pain",
      description: "How GLP-1 medications act as powerful systemic anti-inflammatory agents, resolving chronic joint pain and sleep apnea.",
      slug: "/blog/glp-1-and-inflammation-arthritis-sleep-apnea-chron",
      image: "/assets/glp1_inflammation_featured.png",
      tag: "Immunology"
    },
    {
      title: "Your First 90 Days on GLP-1: A Week-by-Week Clinical Guide",
      description: "A precise chronological timeline of exactly what to expect during your first 90 days of GLP-1 therapy, including dose titrations and plateaus.",
      slug: "/blog/your-first-90-days-on-glp-1-week-by-week-what-to-e",
      image: "/assets/glp1_90days_featured.png",
      tag: "Clinical Protocols"
    },
    {
      title: "How to Choose a Telehealth Weight Loss Program: The 2026 Warning Signs",
      description: "Avoid the hidden fees, fake pharmacies, and dangerous 'pill mills.' Here are the 7 massive red flags to look for when choosing a telehealth provider for GLP-1 therapy.",
      slug: "/blog/how-to-choose-a-telehealth-weight-loss-program-and",
      image: "/assets/glp1_telehealth_scams_featured.png",
      tag: "Consumer Protection"
    },
    {
      title: "FDA Proposes Banning Compounded Semaglutide: What It Means for Your GLP-1 Options",
      description: "The FDA has proposed banning compounded semaglutide from 503B facilities. Learn what this means for your GLP-1 options and how to navigate the 2026 telehealth landscape safely.",
      slug: "/blog/fda-compounding-ban",
      image: "/assets/fda-compounding-ban-featured.png",
      tag: "Regulatory News"
    },
    {
      title: "Tirzepatide vs Semaglutide Weight Loss: The Dual-Agonist Difference",
      description: "A clinical comparison of tirzepatide vs semaglutide weight loss. Discover why dual-agonist GLP-1/GIP therapies yield superior clinical results.",
      slug: "/blog/tirzepatide-vs-semaglutide-weight-loss",
      image: "/assets/tirzepatide-semaglutide-featured.png",
      tag: "Clinical Comparison"
    },
    {
      title: "NAD Therapy Metabolism: Reversing Cellular Aging",
      description: "Discover the truth about NAD therapy metabolism. Learn why subcutaneous injections outperform oral supplements for restoring mitochondrial energy and reversing cellular aging.",
      slug: "/blog/nad-therapy-metabolism",
      image: "/assets/nad-therapy-featured.png",
      tag: "Cellular Longevity"
    },
    {
      title: "Sermorelin Peptide Benefits: Sleep & Anti-Aging Secret",
      description: "Explore the profound sermorelin peptide benefits for deep sleep, cellular recovery, and natural HGH production. The ultimate safe alternative to synthetic HGH.",
      slug: "/blog/sermorelin-peptide-benefits",
      image: "/assets/sermorelin-peptide-featured.png",
      tag: "Sleep & Recovery"
    },
    {
      title: "Berberine Oral Bioavailability: The Evidence Against Oral Delivery",
      description: "A deep dive into why berberine oral bioavailability is less than 1% and how transdermal patches solve the problem.",
      slug: "/blog/berberine-oral-bioavailability",
      image: "/assets/bioavailability-featured.png",
      tag: "Pharmacokinetics"
    },
    {
      title: "Berberine for PCOS Weight Loss: What the Clinical Data Actually Shows",
      description: "Explore the clinical data on how berberine manages insulin resistance and supports weight loss in women with Polycystic Ovary Syndrome (PCOS).",
      slug: "/blog/berberine-pcos-weight-loss",
      image: "/assets/berberine-pcos-featured.png",
      tag: "Clinical Data"
    },
    {
      title: "Dihydroberberine vs Berberine: The 5x Absorption Multiplier Explained",
      description: "A clinical comparison of dihydroberberine vs berberine, analyzing absorption kinetics, gut microbiome conversion, and steady-state transdermal delivery.",
      slug: "/blog/dihydroberberine-vs-berberine",
      image: "/assets/dhb-featured.png",
      tag: "Pharmacokinetics"
    },
    {
      title: "Ozempic for Insulin Resistance: How GLP-1 Medications Reverse Metabolic Dysfunction",
      description: "Learn how GLP-1 medications like Ozempic reverse metabolic dysfunction and improve insulin sensitivity before weight loss even begins.",
      slug: "/blog/ozempic-insulin-resistance",
      image: "/assets/ozempic-insulin-featured.png",
      tag: "Mechanism of Action"
    },
    {
      title: "The Wegovy FDA Label Decoded: Criteria, Clinical Data, and Off-Label Access",
      description: "We break down the exact Wegovy FDA label criteria for weight loss, the clinical trial data, and how to access compounded semaglutide if your insurance denies you.",
      slug: "/blog/wegovy-fda-label",
      image: "/assets/wegovy-label-featured.png",
      tag: "Regulatory Analysis"
    },
    {
      title: "Transdermal Drug Delivery Systems: The Science of Bypassing the Gut",
      description: "A complete academic overview of transdermal drug delivery systems (TDDS), explaining formulation, permeation enhancers, and matrix patch technology.",
      slug: "/blog/transdermal-drug-delivery-systems",
      image: "/assets/transdermal-systems-featured.png",
      tag: "Scientific Authority"
    },
    {
      title: "What is a GLP-1 Medication? The Complete Science & Treatment Guide",
      description: "What is a GLP-1 medication? Discover how Semaglutide and Tirzepatide work, the clinical science behind them, and how to access affordable compounding.",
      slug: "/blog/what-is-a-glp-1-medication",
      image: "/assets/glp1-ultimate-guide.png",
      tag: "Science & Basics"
    },
    {
      title: "Berberine vs Ozempic: The Complete Clinical Comparison & Weight Loss Guide",
      description: "An evidence-based comparison of Berberine and Semaglutide (Ozempic), separating social media hype from clinical reality for sustainable weight loss.",
      slug: "/blog/berberine-vs-ozempic",
      image: "/assets/ozempic-featured.png",
      tag: "Metabolic Reality Check"
    },
    {
      title: "Transdermal vs Oral vs Injections: The Definitive Guide to Metabolic Supplements in 2026",
      description: "A comprehensive pharmacokinetic review comparing oral, transdermal, and injection delivery methods for metabolic compounds like Berberine and Semaglutide.",
      slug: "/blog/transdermal-vs-oral",
      image: "/assets/delivery-featured.png",
      tag: "Pharmacokinetic Review"
    },
    {
      title: "The 72 Hour Berberine Patch Myth: Why You Are Being Scammed",
      description: "Are you being scammed by the 72 hour berberine patch myth? Discover the clinical truth about transdermal matrix depletion and why patches only last 24 hours.",
      slug: "/blog/72-hour-berberine-patch",
      image: "/assets/72-hour-myth-featured.png",
      tag: "Clinical Analysis"
    },
    {
      title: "The Berberine Transdermal Patch: Why Oral Pills Are Obsolete",
      description: "Learn how the berberine transdermal patch bypasses the liver and GI tract to deliver steady-state AMPK activation without the Berberine Belly.",
      slug: "/blog/berberine-transdermal-patch",
      image: "/assets/berberine-featured.png",
      tag: "Metabolic Health"
    }
  ];

  const indexSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Insights for Metabolic Health | Telehealth FX Journal",
    "description": "Clinical analyses, pharmacokinetic reviews, and evidence-based breakdowns from the Telehealth FX Bio-Systems team.",
    "url": "https://www.telehealthfx.com/blog",
    "publisher": {
      "@type": "MedicalOrganization",
      "name": "Telehealth FX",
      "url": "https://www.telehealthfx.com",
      "logo": {
        "@type": "ImageObject",
        "url": "https://telehealthfx.com/assets/Site%20Icon-modified.png"
      }
    },
    "mainEntity": {
      "@type": "ItemList",
      "itemListElement": articles.map((article, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "url": `https://www.telehealthfx.com${article.slug}`
      }))
    }
  };

  return (
    <section className="section" style={{ minHeight: '80vh', paddingTop: 140, paddingBottom: 100 }}>
      <div className="container">
        
        <div style={{ textAlign: 'center', marginBottom: 80, maxWidth: 800, margin: '0 auto 80px' }}>
          <div className="eyebrow" style={{ marginBottom: 20 }}>Journal</div>
          <h1 className="serif" style={{ fontSize: 64, marginBottom: 24, lineHeight: 1.1, color: 'var(--ink)' }}>
            Insights for <span style={{ fontStyle: 'italic', color: 'var(--brand)' }}>Metabolic Health.</span>
          </h1>
          <p style={{ fontSize: 20, color: 'var(--ink-2)', lineHeight: 1.6 }}>
            Clinical analyses, pharmacokinetic reviews, and evidence-based breakdowns from the Telehealth FX Bio-Systems team.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: 40 }}>
          {articles.map((article, idx) => (
            <a key={idx} href={article.slug} style={{ textDecoration: 'none', color: 'inherit', display: 'flex', flexDirection: 'column', group: 'true' }}>
              <div style={{ width: '100%', aspectRatio: '16/10', borderRadius: 16, overflow: 'hidden', marginBottom: 24, border: '1px solid var(--line-soft)' }}>
                <img 
                  src={article.image} 
                  alt={article.title} 
                  style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.4s ease' }} 
                  onMouseOver={e => e.currentTarget.style.transform = 'scale(1.03)'}
                  onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'}
                />
              </div>
              <div style={{ fontSize: 13, fontWeight: 600, color: 'var(--brand)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: 12 }}>
                {article.tag}
              </div>
              <h3 className="serif" style={{ fontSize: 28, marginBottom: 16, lineHeight: 1.2, color: 'var(--ink)' }}>
                {article.title}
              </h3>
              <p style={{ fontSize: 16, color: 'var(--ink-2)', lineHeight: 1.6, flex: 1 }}>
                {article.description}
              </p>
              <div style={{ marginTop: 24, fontSize: 15, fontWeight: 500, color: 'var(--brand)', display: 'flex', alignItems: 'center', gap: 8 }}>
                Read Article <Icon.Arrow size={16}/>
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}

export { BlogIndex };
