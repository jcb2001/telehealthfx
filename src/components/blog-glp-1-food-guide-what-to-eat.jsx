"use client";
import React from 'react';
import Image from 'next/image';
import { Icon } from './common.jsx';

const START_URL = "https://go.telehealthfx.com/start";

function BlogGLP1FoodGuide() {
  return (
    <>
      <section className="section" style={{ minHeight: '60vh', paddingTop: 120 }}>
      <div className="container" style={{ maxWidth: 800 }}>
        <div className="eyebrow" style={{ marginBottom: 20 }}>Nutrition &amp; Lifestyle</div>
        <h1 className="serif" style={{ fontSize: 56, marginBottom: 24, lineHeight: 1.1 }}>
          The Complete GLP-1 Food Guide: <span style={{ fontStyle: 'italic', color: 'var(--brand)' }}>What to Eat (and Avoid) on Semaglutide and Tirzepatide</span>
        </h1>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 48, paddingBottom: 24, borderBottom: '1px solid var(--line-soft)' }}>
          <div style={{ width: 40, height: 40, borderRadius: '50%', background: 'var(--brand)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold' }}>
            <Image src="/assets/jm-profile.jpg" alt="Julian Mercer" width={1024} height={1024} style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%', height: "auto"}} priority={true} />
          </div>
          <div>
            <div style={{ fontWeight: 500, fontSize: 14 }}><a href="/about" style={{ color: "var(--ink)", textDecoration: "none" }}>Julian Mercer, M.S.</a></div>
            <div style={{ fontSize: 13, color: 'var(--ink-3)' }}>Lead Bio-Systems Analyst · Updated May 2026 · 32 min read</div>
          </div>
        </div>

        <div className="blog-content" style={{ fontSize: 18, lineHeight: 1.7, color: 'var(--ink-2)' }}>
          <Image src="/assets/glp1-food-guide-featured.png" alt="Healthy meal plate with GLP-1 injection pen" width={1024} height={1024} style={{ width: '100%', borderRadius: 16, marginBottom: 40, border: '1px solid var(--line-soft)', background: '#111', height: "auto"}} priority={true} />

          <p><a href="/blog/what-is-a-glp-1-medication" style={{ color: 'var(--brand)', fontWeight: 500 }}>GLP-1 medications</a> dramatically reduce your appetite—but what you eat during that reduced window of intake matters <em>enormously</em>. When your body is consuming significantly fewer calories, every bite needs to deliver maximum nutritional density. The wrong dietary choices don't just slow your results—they can trigger <a href="/blog/glp-1-muscle-loss-the-hidden-risk-nobodys-talking" style={{ color: 'var(--brand)', fontWeight: 500 }}>muscle loss</a>, hair thinning, fatigue, and nutritional deficiencies that undermine your entire treatment.</p>

          <p>This guide provides a clinician-informed, evidence-based framework for optimizing your nutrition during <a href="/medications/semaglutide" style={{ color: 'var(--brand)', fontWeight: 500 }}>semaglutide</a> or <a href="/medications/tirzepatide" style={{ color: 'var(--brand)', fontWeight: 500 }}>tirzepatide</a> therapy. We will cover the macronutrient priorities, the specific foods that minimize GI <a href="/blog/glp-1-side-effects-how-to-manage-nausea-fatigue-mo" style={{ color: 'var(--brand)', fontWeight: 500 }}>side effects</a>, and the foods you should avoid entirely.</p>

          <h2 className="serif" style={{ fontSize: 32, marginTop: 48, marginBottom: 24, color: 'var(--ink)' }}>The GLP-1 Nutrition Hierarchy: Protein First, Always</h2>

          <p>The single most important nutritional rule on GLP-1 therapy is simple: <strong>eat protein first at every meal.</strong> When your total caloric intake drops from 2,000+ calories to 1,000–1,400 calories per day, inadequate protein intake is the fastest path to lean muscle catabolism, metabolic slowdown, and the dreaded <a href="/blog/glp-1-plateau-when-weight-loss-stalls-what-to-do-2" style={{ color: 'var(--brand)', fontWeight: 500 }}>weight loss plateau</a>.</p>

          <h3 style={{ fontSize: 24, marginTop: 32, marginBottom: 16, color: 'var(--ink)' }}>Daily Protein Targets</h3>
          <ul>
            <li style={{ marginBottom: 12 }}><strong>Minimum:</strong> 1.0g protein per kg of target body weight</li>
            <li style={{ marginBottom: 12 }}><strong>Optimal:</strong> 1.2–1.6g protein per kg of target body weight</li>
            <li style={{ marginBottom: 12 }}><strong>Example:</strong> If your target weight is 160 lbs (72.5 kg), aim for 73–116g of protein daily</li>
          </ul>

          <h3 style={{ fontSize: 24, marginTop: 32, marginBottom: 16, color: 'var(--ink)' }}>Best Protein Sources on GLP-1</h3>
          <div style={{ overflowX: 'auto', margin: '24px 0' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 16 }}>
              <thead>
                <tr style={{ borderBottom: '2px solid var(--ink)' }}>
                  <th style={{ textAlign: 'left', padding: '12px 16px', fontWeight: 600 }}>Food</th>
                  <th style={{ textAlign: 'left', padding: '12px 16px', fontWeight: 600 }}>Protein/Serving</th>
                  <th style={{ textAlign: 'left', padding: '12px 16px', fontWeight: 600 }}>GI Tolerance</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ borderBottom: '1px solid var(--line-soft)' }}><td style={{ padding: '12px 16px' }}>Chicken breast (4 oz)</td><td style={{ padding: '12px 16px' }}>35g</td><td style={{ padding: '12px 16px', color: 'green' }}>Excellent</td></tr>
                <tr style={{ borderBottom: '1px solid var(--line-soft)' }}><td style={{ padding: '12px 16px' }}>Greek yogurt (1 cup)</td><td style={{ padding: '12px 16px' }}>20g</td><td style={{ padding: '12px 16px', color: 'green' }}>Excellent</td></tr>
                <tr style={{ borderBottom: '1px solid var(--line-soft)' }}><td style={{ padding: '12px 16px' }}>Eggs (2 large)</td><td style={{ padding: '12px 16px' }}>12g</td><td style={{ padding: '12px 16px', color: 'green' }}>Excellent</td></tr>
                <tr style={{ borderBottom: '1px solid var(--line-soft)' }}><td style={{ padding: '12px 16px' }}>Salmon (4 oz)</td><td style={{ padding: '12px 16px' }}>25g</td><td style={{ padding: '12px 16px', color: 'green' }}>Good</td></tr>
                <tr style={{ borderBottom: '1px solid var(--line-soft)' }}><td style={{ padding: '12px 16px' }}>Cottage cheese (1 cup)</td><td style={{ padding: '12px 16px' }}>28g</td><td style={{ padding: '12px 16px', color: 'green' }}>Good</td></tr>
                <tr style={{ borderBottom: '1px solid var(--line-soft)' }}><td style={{ padding: '12px 16px' }}>Lean turkey (4 oz)</td><td style={{ padding: '12px 16px' }}>30g</td><td style={{ padding: '12px 16px', color: 'green' }}>Excellent</td></tr>
                <tr><td style={{ padding: '12px 16px' }}>Whey protein shake</td><td style={{ padding: '12px 16px' }}>25–30g</td><td style={{ padding: '12px 16px', color: 'orange' }}>Variable (may cause bloating)</td></tr>
              </tbody>
            </table>
          </div>

          <div className="card" style={{ padding: 40, margin: '48px 0', textAlign: 'center', background: '#FFFDF9', borderColor: 'var(--brand)' }}>
            <h3 className="serif" style={{ fontSize: 28, marginBottom: 16, color: 'var(--ink)' }}>Nutritional Guidance Included</h3>
            <p style={{ marginBottom: 24, fontSize: 16 }}>TelehealthFX provides clinician-guided nutritional strategies alongside your GLP-1 prescription. Optimize your results from day one.</p>
            <a href={START_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-lg" style={{ display: 'inline-flex', justifyContent: 'center' }}>
              Start Your Evaluation <Icon.Arrow />
            </a>
          </div>

          <h2 className="serif" style={{ fontSize: 32, marginTop: 48, marginBottom: 24, color: 'var(--ink)' }}>Foods to Minimize GI Side Effects</h2>

          <p>Nausea, bloating, and constipation are the most common <a href="/blog/glp-1-side-effects-how-to-manage-nausea-fatigue-mo" style={{ color: 'var(--brand)', fontWeight: 500 }}>GLP-1 side effects</a>. GLP-1 medications slow gastric emptying (the rate at which food leaves your stomach), which means large, heavy, or greasy meals sit in your stomach much longer—amplifying discomfort.</p>

          <h3 style={{ fontSize: 24, marginTop: 32, marginBottom: 16, color: 'var(--ink)' }}>GI-Friendly Foods</h3>
          <ul>
            <li style={{ marginBottom: 8 }}>Steamed or roasted vegetables (zucchini, carrots, sweet potatoes)</li>
            <li style={{ marginBottom: 8 }}>Bone broth and clear soups</li>
            <li style={{ marginBottom: 8 }}>Rice, quinoa, and oatmeal (small portions)</li>
            <li style={{ marginBottom: 8 }}>Bananas and applesauce (gentle on the stomach)</li>
            <li style={{ marginBottom: 8 }}>Ginger tea (natural anti-nausea)</li>
            <li style={{ marginBottom: 8 }}>Fermented foods (kimchi, sauerkraut, kefir) for gut microbiome support</li>
          </ul>

          <h2 className="serif" style={{ fontSize: 32, marginTop: 48, marginBottom: 24, color: 'var(--ink)' }}>Foods to Avoid on GLP-1 Therapy</h2>

          <ol>
            <li style={{ marginBottom: 16 }}><strong>Fried and high-fat foods:</strong> French fries, fried chicken, creamy sauces. Slowed gastric emptying + high fat = severe nausea and bloating.</li>
            <li style={{ marginBottom: 16 }}><strong>Sugary foods and beverages:</strong> Candy, soda, juice. You're on a metabolic medication—don't counteract it with insulin spikes.</li>
            <li style={{ marginBottom: 16 }}><strong>Large meals:</strong> Your stomach empties slower now. Eat 4–5 smaller meals instead of 2–3 large ones.</li>
            <li style={{ marginBottom: 16 }}><strong>Carbonated beverages:</strong> Gas + slowed digestion = painful bloating. Switch to still water or herbal tea.</li>
            <li style={{ marginBottom: 16 }}><strong>Alcohol:</strong> GLP-1 medications alter alcohol metabolism. Read our full <a href="/blog/glp-1-and-alcohol-what-you-need-to-know-2026-clini" style={{ color: 'var(--brand)', fontWeight: 500 }}>GLP-1 and alcohol guide</a>.</li>
            <li style={{ marginBottom: 16 }}><strong>Spicy foods:</strong> Can exacerbate acid reflux and nausea, especially during the titration phase.</li>
          </ol>

          <h2 className="serif" style={{ fontSize: 32, marginTop: 48, marginBottom: 24, color: 'var(--ink)' }}>The GLP-1 Meal Framework</h2>

          <p>Structure every meal using this priority order:</p>
          <ol>
            <li style={{ marginBottom: 8 }}><strong>Protein first</strong> (30–40% of plate)</li>
            <li style={{ marginBottom: 8 }}><strong>Non-starchy vegetables second</strong> (30–40% of plate)</li>
            <li style={{ marginBottom: 8 }}><strong>Complex carbohydrates last</strong> (20–30% of plate)</li>
            <li style={{ marginBottom: 8 }}><strong>Healthy fats in small amounts</strong> (avocado, olive oil, nuts)</li>
          </ol>

          <p>This order is not arbitrary—eating protein and fiber before carbohydrates has been clinically shown to reduce post-meal glucose spikes by up to 40%, complementing the glucose-regulating effects of your GLP-1 medication. Pair this framework with the <a href="/blog/intermittent-fasting-glp-1-do-they-work-together-2" style={{ color: 'var(--brand)', fontWeight: 500 }}>intermittent fasting + GLP-1</a> strategy and the <a href="/blog/glp-1-and-exercise-how-to-combine-medication-with" style={{ color: 'var(--brand)', fontWeight: 500 }}>exercise combination guide</a> for maximum results.</p>

          <div className="card" style={{ padding: 40, margin: '48px 0', textAlign: 'center', background: '#FFFDF9', borderColor: 'var(--brand)' }}>
            <div style={{ width: 48, height: 48, borderRadius: '50%', background: 'var(--brand-soft)', color: 'var(--brand)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px' }}><Icon.Check size={24} /></div>
            <h3 className="serif" style={{ fontSize: 28, marginBottom: 16, color: 'var(--ink)' }}>More Than Just Medication</h3>
            <p style={{ marginBottom: 24, fontSize: 16 }}>TelehealthFX provides a complete metabolic strategy—medication, nutrition guidance, and ongoing clinical support. No hidden fees, no shortcuts.</p>
            <a href={START_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-lg" style={{ display: 'inline-flex', justifyContent: 'center' }}>
              Check Your Eligibility <Icon.Arrow />
            </a>
          </div>

          <h2 className="serif" style={{ fontSize: 32, marginTop: 48, marginBottom: 24, color: 'var(--ink)' }}>Frequently Asked Questions</h2>

          <h4 style={{ fontSize: 20, marginTop: 24, marginBottom: 8, color: 'var(--ink)' }}>How many calories should I eat on semaglutide?</h4>
          <p style={{ marginBottom: 24 }}>Most patients naturally consume 1,000–1,400 calories per day on GLP-1 therapy due to appetite suppression. Do not intentionally restrict below 1,000 calories—this increases the risk of muscle loss, nutritional deficiency, and metabolic adaptation. Focus on nutrient density, not calorie counting.</p>

          <h4 style={{ fontSize: 20, marginTop: 24, marginBottom: 8, color: 'var(--ink)' }}>Can I drink coffee on GLP-1 medication?</h4>
          <p style={{ marginBottom: 24 }}>Yes. Black coffee or coffee with small amounts of cream is generally well-tolerated. Avoid large, sugary coffee drinks (frappuccinos, flavored lattes) as they provide empty calories and sugar spikes. Caffeine may also slightly amplify nausea in some patients during the first few weeks.</p>

          <h4 style={{ fontSize: 20, marginTop: 24, marginBottom: 8, color: 'var(--ink)' }}>What supplements should I take on GLP-1?</h4>
          <p style={{ marginBottom: 24 }}>A daily multivitamin, additional protein (if dietary intake is below target), vitamin D3, magnesium, and omega-3 fatty acids are commonly recommended. If you experience hair thinning, add biotin and iron after consulting your clinician.</p>

          <div style={{ padding: 40, marginTop: 60, borderRadius: 20, background: 'var(--ink)', color: '#FBF8F3', textAlign: 'center' }}>
            <h2 className="serif" style={{ fontSize: 40, marginBottom: 20, color: '#FBF8F3' }}>Fuel Your Transformation</h2>
            <p style={{ fontSize: 18, opacity: 0.9, marginBottom: 32, maxWidth: 500, margin: '0 auto 32px' }}>The right nutrition strategy makes the difference between mediocre and life-changing results. Start with a team that guides you every step.</p>
            <a href={START_URL} target="_blank" rel="noopener noreferrer" className="btn btn-lg" style={{ background: '#FBF8F3', color: 'var(--ink)', display: 'inline-flex', justifyContent: 'center', width: '100%', maxWidth: 250 }}>
              Get Started <Icon.Arrow />
            </a>
          </div>

          <div style={{ marginTop: 80, paddingTop: 40, borderTop: '1px solid var(--line-soft)', fontSize: 14, color: 'var(--ink-3)' }}>
            <h3 className="serif" style={{ fontSize: 24, marginBottom: 24, color: 'var(--ink)' }}>Academic References &amp; Clinical Citations</h3>
            <ol style={{ paddingLeft: 20, display: 'flex', flexDirection: 'column', gap: 16 }}>
              <li>Heymsfield, S. B., et al. (2024). Effect of bimagrumab vs placebo on body fat mass among adults with type 2 diabetes and obesity. <em>JAMA Network Open</em>, 4(1), e2033457. <a href="https://doi.org/10.1001/jamanetworkopen.2020.33457" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--brand)', textDecoration: 'underline' }}>https://doi.org/10.1001/jamanetworkopen.2020.33457</a></li>
              <li>Shukla, A. P., et al. (2015). Food order has a significant impact on postprandial glucose and insulin levels. <em>Diabetes Care</em>, 38(7), e98–e99. <a href="https://doi.org/10.2337/dc15-0429" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--brand)', textDecoration: 'underline' }}>https://doi.org/10.2337/dc15-0429</a></li>
              <li>Mechanick, J. I., et al. (2020). Clinical practice guidelines for the perioperative nutrition of bariatric patients. <em>Obesity</em>, 28(S1), S1–S58. <a href="https://doi.org/10.1002/oby.22719" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--brand)', textDecoration: 'underline' }}>https://doi.org/10.1002/oby.22719</a></li>
              <li>Guo, E. L., &amp; Katta, R. (2017). Diet and hair loss: Effects of nutrient deficiency. <em>Dermatology Practical &amp; Conceptual</em>, 7(1), 1–10. <a href="https://doi.org/10.5826/dpc.0701a01" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--brand)', textDecoration: 'underline' }}>https://doi.org/10.5826/dpc.0701a01</a></li>
            </ol>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}

export { BlogGLP1FoodGuide };
