"use client";
import React from 'react';
import Image from 'next/image';
import { Icon } from './common.jsx';
const START_URL = "https://go.telehealthfx.com/start";

function Blog6CommonQuestionsGLP1() {
  return (<><section className="section" style={{ minHeight: '60vh', paddingTop: 120 }}><div className="container" style={{ maxWidth: 800 }}>
    <div className="eyebrow" style={{ marginBottom: 20 }}>Patient FAQ</div>
    <h1 className="serif" style={{ fontSize: 52, marginBottom: 24, lineHeight: 1.08 }}>6 Most Common Questions About GLP-1 Answered <span style={{ fontStyle: 'italic', color: 'var(--brand)' }}>(2026 FAQ)</span></h1>
    <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 48, paddingBottom: 24, borderBottom: '1px solid var(--line-soft)' }}><div style={{ width: 40, height: 40, borderRadius: '50%', background: 'var(--brand)' }}><Image src="/assets/jm-profile.jpg" alt="Julian Mercer" width={1024} height={1024} style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%', height: "auto"}} priority={true} /></div><div><div style={{ fontWeight: 500, fontSize: 14 }}><a href="/about" style={{ color: "var(--ink)", textDecoration: "none" }}>Julian Mercer, M.S.</a></div><div style={{ fontSize: 13, color: 'var(--ink-3)' }}>Lead Bio-Systems Analyst · Updated June 2026 · 15 min read</div></div></div>
    <div className="blog-content" style={{ fontSize: 18, lineHeight: 1.7, color: 'var(--ink-2)' }}>
      
      <p>The rise of GLP-1 receptor agonists (such as semaglutide and tirzepatide) has transformed modern obesity management. However, with clinical breakthroughs has come a flood of public confusion, viral headlines, and conflicting advice. Patients routinely find themselves sorting through half-truths regarding medication duration, compounding legality, muscle loss, and dietary restrictions.</p>
      
      <p>To cut through the noise, we have compiled the six most critical, high-intent questions patients ask during their medical weight loss journeys. Below, we address each question using direct clinical trial data, pharmacological mechanisms, and structured guidelines designed to protect your metabolic health.</p>

      <h2 className="serif" style={{ fontSize: 32, marginTop: 48, marginBottom: 24, color: 'var(--ink)' }}>1. How Long Do I Need to Stay on GLP-1 Therapy?</h2>
      <p>One of the most frequent concerns is whether GLP-1 therapy requires a lifelong commitment or if a patient can taper off once they reach their target body composition. To answer this, we must first understand obesity not as a moral failing or behavioral issue, but as a chronic, relapsing metabolic disease characterized by hypothalamic dysfunction and defended fat-mass set points.</p>
      
      <p>Exogenous GLP-1 receptor agonists (GLP-1 RAs) work by stimulating receptors in the pancreas, hypothalamus, and gastrointestinal tract. This process enhances insulin secretion, slows gastric emptying, and upregulates satiety pathways (POMC/CART neurons) while silencing hunger pathways (NPY/AgRP neurons). However, these medications do not rewrite your genetic code or permanently alter the underlying biology of your fat cells. Once the medication is discontinued, the exogenous hormone is cleared from your system, and the body's natural homeostatic mechanisms attempt to drive you back to your previous weight.</p>
      
      <p>This physiological reality was clearly demonstrated in the landmark <strong>STEP 4 clinical trial</strong> published in <em>JAMA</em>. In this study, patients were titrated on a weekly dose of 2.4 mg of semaglutide for 20 weeks. At week 20, one cohort was switched to a placebo, while the other continued on semaglutide. Over the subsequent 48 weeks:</p>
      <ul>
        <li style={{ marginBottom: 12 }}>Patients who <strong>discontinued</strong> semaglutide and switched to the placebo regained approximately <strong>two-thirds (6.9% of their baseline body weight)</strong> of the weight they had lost.</li>
        <li style={{ marginBottom: 12 }}>Patients who <strong>continued</strong> active semaglutide therapy experienced an additional <strong>7.9% reduction</strong> in total body weight, maintaining their progress.</li>
      </ul>
      
      <p>For individuals with severe metabolic dysfunction, insulin resistance, or long-standing obesity, long-term or lifelong maintenance therapy is often the most medically sound approach. However, a "one-size-fits-all" lifelong dose is rarely necessary. Many patients successfully transition to a maintenance tapering strategy. Under clinician supervision, once a target weight is achieved, the dose is gradually reduced to the lowest effective level (for example, tapering from a therapeutic dose of 2.4 mg of semaglutide down to a maintenance dose of 0.25 mg to 1.0 mg weekly, or from 15 mg of tirzepatide down to 2.5 mg to 7.5 mg weekly). This prevents the rebound hunger signals while minimizing medication exposure and cost. Telehealth FX specializes in crafting personalized titration and maintenance schedules based on individual metabolic responses.</p>

      <h2 className="serif" style={{ fontSize: 32, marginTop: 48, marginBottom: 24, color: 'var(--ink)' }}>2. What Is the Difference Between Brand-Name and Compounded GLP-1?</h2>
      <p>The difference between brand-name medications and compounded GLP-1s is central to understanding the modern weight loss landscape. Brand-name GLP-1s, such as Wegovy® and Ozempic® (semaglutide) or Zepbound® and Mounjaro® (tirzepatide), are manufactured exclusively by pharmaceutical companies (Novo Nordisk and Eli Lilly, respectively) and distributed in pre-filled, single-dose auto-injector pens.</p>
      
      <p>Compounded GLP-1 medications, by contrast, are patient-specific prescriptions prepared by state-licensed 503A compounding pharmacies or regulated 503B outsourcing facilities. These pharmacies formulate the medication from Active Pharmaceutical Ingredients (APIs) into sterile, multidose vials, which patients administer using ultra-fine insulin syringes. Here is a breakdown of how they compare across sourcing, pricing, and legality:</p>
      
      <ul>
        <li style={{ marginBottom: 12 }}><strong>Legality & FDA Shortages:</strong> Under Section 503A of the Federal Food, Drug, and Cosmetic Act (FD&C Act), compounding pharmacies are legally permitted to prepare copycat versions of FDA-approved drugs if the drug is listed on the FDA's Active Drug Shortage database. Because of unprecedented global demand, semaglutide and tirzepatide have experienced ongoing shortages, making compounding a vital, legal pathway to maintain patient access.</li>
        <li style={{ marginBottom: 12 }}><strong>Sourcing and Quality Control:</strong> Legitimate compounding pharmacies source their raw APIs from FDA-registered, chemical manufacturers. They must use the base chemical form of the molecule (such as semaglutide base or tirzepatide base) and avoid unauthorized salt forms (like semaglutide sodium or semaglutide acetate) which have not undergone the same clinical validation. Reputable clinics mandate that every batch undergo independent, third-party testing for sterility, purity, and potency.</li>
        <li style={{ marginBottom: 12 }}><strong>Pricing:</strong> Branded GLP-1s carry list prices ranging from $1,000 to $1,350 per month. Without strict insurance coverage (which typically requires a Type 2 Diabetes diagnosis or a high BMI with specific comorbidities), these prices are cost-prohibitive. Compounded GLP-1 programs bypass insurance altogether by offering direct-to-patient pricing. </li>
      </ul>

      <p>Telehealth FX is positioned at the top of the clinical space, offering high-quality compounded options with absolute transparent pricing. Below is a direct comparison of the primary options available to patients in 2026:</p>

      <div style={{ overflowX: 'auto', margin: '32px 0' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', minWidth: 600 }}>
          <thead>
            <tr style={{ borderBottom: '2px solid var(--line-soft)', color: 'var(--ink)' }}>
              <th style={{ padding: '12px 16px', fontWeight: 600 }}>Feature</th>
              <th style={{ padding: '12px 16px', fontWeight: 600, color: 'var(--brand)' }}>Telehealth FX Compounded</th>
              <th style={{ padding: '12px 16px', fontWeight: 600 }}>Branded GLP-1s (Wegovy/Zepbound)</th>
              <th style={{ padding: '12px 16px', fontWeight: 600 }}>Standard Online Clinics</th>
            </tr>
          </thead>
          <tbody>
            <tr style={{ borderBottom: '1px solid var(--line-soft)' }}>
              <td style={{ padding: '16px', fontWeight: 500 }}>Starting Price</td>
              <td style={{ padding: '16px', color: 'var(--brand)', fontWeight: 600 }}>$199/month (All-Inclusive)</td>
              <td style={{ padding: '16px' }}>$1,000 - $1,350/month</td>
              <td style={{ padding: '16px' }}>$250 - $400/month + hidden fees</td>
            </tr>
            <tr style={{ borderBottom: '1px solid var(--line-soft)' }}>
              <td style={{ padding: '16px', fontWeight: 500 }}>Pharmacy Standard</td>
              <td style={{ padding: '16px', fontWeight: 500 }}>State-Licensed 503A (High-Purity API)</td>
              <td style={{ padding: '16px' }}>FDA-Approved Manufacturer (Novo/Lilly)</td>
              <td style={{ padding: '16px' }}>Variable (often unverified sources)</td>
            </tr>
            <tr style={{ borderBottom: '1px solid var(--line-soft)' }}>
              <td style={{ padding: '16px', fontWeight: 500 }}>Clinician Support</td>
              <td style={{ padding: '16px', fontWeight: 500 }}>Continuous doctor-led titration</td>
              <td style={{ padding: '16px' }}>Requires office visits & high copays</td>
              <td style={{ padding: '16px' }}>One-time form review, no follow-up</td>
            </tr>
            <tr style={{ borderBottom: '1px solid var(--line-soft)' }}>
              <td style={{ padding: '16px', fontWeight: 500 }}>Synergistic Programs</td>
              <td style={{ padding: '16px', fontWeight: 500 }}>Yes (TRT, Sermorelin, customized peptides)</td>
              <td style={{ padding: '16px' }}>No (monotherapy only)</td>
              <td style={{ padding: '16px' }}>No (weight-loss-only focus)</td>
            </tr>
            <tr style={{ borderBottom: '1px solid var(--line-soft)' }}>
              <td style={{ padding: '16px', fontWeight: 500 }}>HSA/FSA Eligible</td>
              <td style={{ padding: '16px', fontWeight: 500 }}>Yes</td>
              <td style={{ padding: '16px' }}>Yes (if covered by pharmacy benefits)</td>
              <td style={{ padding: '16px' }}>Variable / No support</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="card" style={{ padding: 40, margin: '48px 0', textAlign: 'center', background: '#FFFDF9', borderColor: 'var(--brand)' }}>
        <h3 className="serif" style={{ fontSize: 28, marginBottom: 16, color: 'var(--ink)' }}>Ready to Optimize Your Metabolic Health?</h3>
        <p style={{ marginBottom: 24, fontSize: 16 }}>Get direct access to U.S.-licensed clinicians, custom dosing protocols, and premium compounded medications tailored to your biology starting at $199/mo.</p>
        <a href={START_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-lg" style={{ display: 'inline-flex', justifyContent: 'center' }}>Start Your Evaluation <Icon.Arrow /></a>
      </div>

      <h2 className="serif" style={{ fontSize: 32, marginTop: 48, marginBottom: 24, color: 'var(--ink)' }}>3. Can I Take a GLP-1 If I Am Also on Testosterone Replacement Therapy (TRT)?</h2>
      <p>Yes. In fact, combining GLP-1 therapy with Testosterone Replacement Therapy (TRT) is one of the most clinically synergistic protocols available for male patients. This combination directly addresses the single biggest metabolic risk of rapid weight loss: the loss of skeletal muscle tissue.</p>
      
      <p>When you place your body in a caloric deficit using a GLP-1 agonist, your system enters a catabolic state, breaking down both adipose (fat) tissue and lean muscle tissue for energy. In the STEP 1 body composition substudy, DXA scans revealed that up to 35% of the total weight lost on semaglutide was lean body mass. This loss of muscle is highly detrimental because it drops your basal metabolic rate (BMR) and can lead to a metabolic rebound (rapid fat regain) once the medication is stopped.</p>
      
      <p>This is where TRT acts as an anabolic shield. Testosterone binds to androgen receptors in skeletal muscle tissue, activating the transcription of genes responsible for myofibrillar protein synthesis. This pathway opposes the catabolic signals of caloric restriction. By combining the two therapies:</p>
      <ol>
        <li style={{ marginBottom: 12 }}><strong>GLP-1 Agonists</strong> drive systemic fat oxidation, improve insulin sensitivity, and reduce visceral adipose tissue (the dangerous fat surrounding internal organs). Learn more about this in our guide on <a href="/blog/glp1-metabolic-syndrome-2026" style={{ color: 'var(--brand)', fontWeight: 500 }}>metabolic syndrome management</a>.</li>
        <li style={{ marginBottom: 12 }}><strong>TRT</strong> preserves lean skeletal muscle mass, increases cellular protein synthesis, and supports bone mineral density. This maintains your resting energy expenditure (BMR) even while losing weight. Read more details in our article on <a href="/blog/trt-weight-loss-body-composition-2026" style={{ color: 'var(--brand)', fontWeight: 500 }}>TRT weight loss and body composition</a>.</li>
      </ol>
      
      <p>Additionally, insulin resistance (frequently caused by visceral obesity) impairs the Leydig cells in the testes, lowering natural testosterone production. As the GLP-1 molecule resolves insulin resistance, the overall metabolic environment improves, allowing for better hormone regulation. Pairing these two therapies under a single, unified provider like Telehealth FX ensures your hormones and metabolic markers are monitored in tandem, maximizing muscle retention and fat loss. For details on designing a physical routine, explore our recommended <a href="/blog/trt-workout-muscle-building-2026" style={{ color: 'var(--brand)', fontWeight: 500 }}>TRT workouts and muscle building protocols</a>, and check if you fit the demographic in our review of <a href="/blog/glp1-men-over-50-2026" style={{ color: 'var(--brand)', fontWeight: 500 }}>GLP-1 for men over 50</a>.</p>

      <h2 className="serif" style={{ fontSize: 32, marginTop: 48, marginBottom: 24, color: 'var(--ink)' }}>4. How Do I Prevent Muscle Loss and "Ozempic Face"?</h2>
      <p>The aesthetic and physical changes associated with rapid weight loss have driven widespread concern. Fortunately, both muscle loss and the facial hollows commonly referred to as "Ozempic Face" can be prevented through targeted nutritional and dermatological interventions.</p>
      
      <h3 className="serif" style={{ fontSize: 24, marginTop: 32, marginBottom: 16, color: 'var(--ink)' }}>Preventing Skeletal Muscle Loss</h3>
      <p>Muscle loss is not a direct chemical side effect of GLP-1 medications; it is a mechanical consequence of severe caloric restriction. When your appetite is suppressed and you consume insufficient protein, your body converts its own muscle proteins into amino acids for glucose production via gluconeogenesis. To stop this catabolic process, you must implement two non-negotiable rules:</p>
      
      <ol>
        <li style={{ marginBottom: 12 }}><strong>Aggressive Protein Target:</strong> You must consume between <strong>1.2 to 1.6 grams of protein per kilogram of target body weight daily</strong> (approximately 0.8g to 1g per pound). For a target weight of 170 pounds, this means consuming 136g to 170g of protein every single day. Because delayed gastric emptying makes you feel full quickly, you should consume your lean protein sources first during meals. For a deep dive into these risks, read our article on <a href="/blog/glp-1-muscle-loss-the-hidden-risk-nobodys-talking" style={{ color: 'var(--brand)', fontWeight: 500 }}>GLP-1 muscle loss</a>.</li>
        <li style={{ marginBottom: 12 }}><strong>Progressive Resistance Training (PRT):</strong> You must perform resistance exercises 3 to 4 times per week. Lifting weights, using resistance bands, or executing targeted bodyweight movements creates mechanical tension and cellular micro-tears. This stimulates the mTOR pathway, signaling your body to synthesize new contractile proteins and retain muscle, even during a caloric deficit. For details on how to structure your training, check our guide on <a href="/blog/glp-1-and-exercise-how-to-combine-medication-with" style={{ color: 'var(--brand)', fontWeight: 500 }}>combining exercise with GLP-1 therapy</a>.</li>
      </ol>

      <h3 className="serif" style={{ fontSize: 24, marginTop: 32, marginBottom: 16, color: 'var(--ink)' }}>Preventing "Ozempic Face"</h3>
      <p>"Ozempic face" is not a unique reaction to the drug; it is simply rapid facial fat loss. The face has multiple superficial and deep fat pads that provide structural support and a youthful volume. When weight is lost rapidly, these fat pads shrink, leading to a sunken, hollowed appearance around the eyes, temples, and cheeks, which makes skin appear loose and wrinkled.</p>
      
      <p>To mitigate facial fat pad depletion and maintain skin elasticity, follow this clinical protocol:</p>
      <ul>
        <li style={{ marginBottom: 8 }}><strong>Avoid Extreme Deficits:</strong> Aim for a moderate, steady weight loss of 1 to 2 pounds per week. Losing weight too rapidly accelerates facial fat depletion before the skin's collagen matrix can adapt.</li>
        <li style={{ marginBottom: 8 }}><strong>Collagen Peptide Supplementation:</strong> Supplement with 10 to 15 grams of hydrolyzed bioactive collagen peptides daily. Clinical studies show that oral collagen peptides stimulate dermal fibroblasts to produce collagen and hyaluronic acid, improving skin elasticity and moisture.</li>
        <li style={{ marginBottom: 8 }}><strong>Intense Hydration:</strong> Drink at least 3 liters of water daily. GLP-1 agonists can decrease your thirst drive, leading to systemic dehydration that immediately makes facial skin look thin and hollow.</li>
        <li style={{ marginBottom: 8 }}><strong>Topical Support:</strong> Implement a daily skincare regimen utilizing topical hyaluronic acid (for immediate moisture retention), Vitamin C (a critical cofactor for collagen synthesis), and prescription retinoids to increase cellular turnover.</li>
      </ul>

      <h2 className="serif" style={{ fontSize: 32, marginTop: 48, marginBottom: 24, color: 'var(--ink)' }}>5. What Should I Eat While on GLP-1 Therapy?</h2>
      <p>Because GLP-1 receptor agonists delay gastric emptying, the rate at which food moves from your stomach into the small intestine is significantly slowed down. This changes how your digestive system handles different food groups. Eating the wrong foods will not only stall your progress but will also trigger gastrointestinal side effects like severe nausea, vomiting, and acid reflux.</p>
      
      <p>Your diet on a GLP-1 should focus on high-nutrient density, high-fiber, and lean protein, while avoiding foods that sit heavily in the stomach. Review our complete <a href="/blog/glp-1-food-guide-what-to-eat" style={{ color: 'var(--brand)', fontWeight: 500 }}>GLP-1 food guide</a> for a detailed dietary protocol.</p>

      <h3 style={{ fontSize: 20, marginTop: 24, marginBottom: 8, color: 'var(--ink)' }}>The Daily Macro Target</h3>
      <ul>
        <li style={{ marginBottom: 8 }}><strong>Protein (30–35% of daily intake):</strong> Prioritize lean chicken breast, turkey, wild-caught white fish, egg whites, tofu, and low-fat Greek yogurt. Whey protein isolates are highly recommended because liquid proteins bypass delayed gastric fullness cues easier than solid foods.</li>
        <li style={{ marginBottom: 8 }}><strong>Complex Carbohydrates (35–40% of daily intake):</strong> Focus on low-glycemic, fiber-rich carbs like quinoa, steel-cut oats, sweet potatoes, broccoli, Brussels sprouts, and berries. You must aim for <strong>25 to 35 grams of dietary fiber daily</strong> to prevent GLP-1-induced constipation.</li>
        <li style={{ marginBottom: 8 }}><strong>Healthy Fats (25–30% of daily intake):</strong> Limit fats to small portions of avocados, olive oil, and raw nuts.</li>
      </ul>

      <h3 style={{ fontSize: 20, marginTop: 24, marginBottom: 8, color: 'var(--ink)' }}>Foods to Absolutely Avoid</h3>
      <ul>
        <li style={{ marginBottom: 12 }}><strong>High-Fat and Fried Foods:</strong> French fries, deep-fried meats, heavy cream sauces, and greasy pizza delay gastric emptying even further. Consuming these foods while on a GLP-1 can cause the stomach to remain full for an extended period, leading to food fermentation, painful bloating, sulfur-tasting burps, and acute vomiting.</li>
        <li style={{ marginBottom: 12 }}><strong>Highly Acidic and Spicy Foods:</strong> Citrus fruits, raw tomatoes, garlic, onion, and hot sauces relax the lower esophageal sphincter (LES). Because food stays in the stomach longer, this immediately triggers severe gastroesophageal reflux disease (GERD) and heartburn.</li>
        <li style={{ marginBottom: 12 }}><strong>Simple Sugars & Carbonated Beverages:</strong> Candy, sodas, and carbonated water cause rapid gas production and osmotic shifts in the colon, resulting in severe cramping and watery diarrhea.</li>
      </ul>
      <p>For a detailed walkthrough on managing these reactions, read our guide to <a href="/blog/glp-1-side-effects-how-to-manage-nausea-fatigue-mo" style={{ color: 'var(--brand)', fontWeight: 500 }}>GLP-1 side effects management</a>.</p>

      <h2 className="serif" style={{ fontSize: 32, marginTop: 48, marginBottom: 24, color: 'var(--ink)' }}>6. How Fast Will I See Results?</h2>
      <p>Weight loss is a highly individual process, but clinical trials show a predictable timeline based on medication titration. A common mistake is expecting massive fat loss in the first month. The initial phase of GLP-1 therapy is designed to prime your system, not to maximize fat oxidation.</p>
      
      <p>To minimize severe gastrointestinal side effects, all GLP-1 medications follow a strict 4-week titration escalation schedule. This allows your body's GLP-1 receptors in the brain and gut to desensitize to the hormone before the dose is increased. Refer to our detailed <a href="/blog/compounded-semaglutide-dosing-guide-2026" style={{ color: 'var(--brand)', fontWeight: 500 }}>compounded semaglutide dosing guide</a> to view the exact protocols.</p>

      <h3 style={{ fontSize: 20, marginTop: 24, marginBottom: 8, color: 'var(--ink)' }}>The Standard Semaglutide Titration Schedule:</h3>
      <ul>
        <li style={{ marginBottom: 8 }}><strong>Weeks 1–4:</strong> 0.25 mg weekly (Priming phase)</li>
        <li style={{ marginBottom: 8 }}><strong>Weeks 5–8:</strong> 0.50 mg weekly (Early therapeutic response)</li>
        <li style={{ marginBottom: 8 }}><strong>Weeks 9–12:</strong> 1.0 mg weekly (Therapeutic titration)</li>
        <li style={{ marginBottom: 8 }}><strong>Weeks 13–16:</strong> 1.7 mg weekly (High-dose titration)</li>
        <li style={{ marginBottom: 8 }}><strong>Weeks 17+:</strong> 2.4 mg weekly (Full maintenance therapeutic dose)</li>
      </ul>

      <h3 style={{ fontSize: 20, marginTop: 24, marginBottom: 8, color: 'var(--ink)' }}>The Typical Weight Loss Curve</h3>
      <p>Your results will follow a distinct trajectory across the titration timeline:</p>
      <ul>
        <li style={{ marginBottom: 12 }}><strong>Weeks 1–4 (priming):</strong> Many patients lose 3 to 8 pounds. The majority of this weight loss is systemic water weight and glycogen depletion, as lowering insulin resistance sheds excess fluid. Some "hyper-responders" experience immediate fat loss, while "late-responders" may lose nothing. This is normal; read more in our guide to <a href="/blog/first-week-semaglutide-2026" style={{ color: 'var(--brand)', fontWeight: 500 }}>your first week on semaglutide</a>.</li>
        <li style={{ marginBottom: 12 }}><strong>Months 2–3 (0.5mg - 1.0mg):</strong> Consistent fat loss begins. A healthy, sustainable rate is <strong>1 to 2 pounds per week</strong>. Losing weight faster than this indicates you are losing muscle tissue rather than fat.</li>
        <li style={{ marginBottom: 12 }}><strong>Months 4–6+:</strong> As you reach the target therapeutic dose (1.7 mg to 2.4 mg of semaglutide, or 10 mg to 15 mg of tirzepatide), fat loss peaks. In long-term trials like SURPASS-2, the weight loss curve continued to trend downward through week 40 before gradually flattening as the body adapted metabolically. Understanding the difference between these molecules can help you set expectations; review the clinical details in our comparison of <a href="/blog/semaglutide-vs-tirzepatide-decision-2026" style={{ color: 'var(--brand)', fontWeight: 500 }}>semaglutide vs tirzepatide</a>.</li>
      </ul>

      <h2 className="serif" style={{ fontSize: 32, marginTop: 48, marginBottom: 24, color: 'var(--ink)' }}>Additional Frequently Asked Questions</h2>
      
      <h4 style={{ fontSize: 20, marginTop: 24, marginBottom: 8, color: 'var(--ink)' }}>Will GLP-1 medications affect my fertility or birth control?</h4>
      <p>Yes, in two distinct ways. First, GLP-1s delay the gastric absorption of oral medications, including birth control pills. Because oral contraceptives require rapid absorption to maintain consistent hormone levels, patients are advised to use non-oral backup birth control (like an IUD or barrier methods) during titration phases. Second, rapid weight loss and reduced insulin resistance can restore ovulation in women with metabolic dysfunction or PCOS, leading to unexpected increases in fertility.</p>

      <h4 style={{ fontSize: 20, marginTop: 24, marginBottom: 8, color: 'var(--ink)' }}>Can I drink alcohol while taking a GLP-1 receptor agonist?</h4>
      <p>While alcohol is not contraindicated, GLP-1 agonists reduce alcohol cravings by affecting reward centers in the brain. Because both GLP-1s and alcohol delay gastric emptying, combining them can lead to rapid GI irritation, severe nausea, and acid reflux. Alcohol also represents empty liquid calories that can slow down your weight loss progress.</p>

      <h4 style={{ fontSize: 20, marginTop: 24, marginBottom: 8, color: 'var(--ink)' }}>What should I do if I miss a weekly dose?</h4>
      <p>If you miss a dose, administer it as soon as you remember, provided it is within 5 days of the missed dose. If more than 5 days have passed, skip the missed dose and resume your regular weekly schedule. If you miss two or more consecutive doses, contact your clinical team. You may need to restart at a lower dose to avoid severe side effects due to loss of receptor tolerance.</p>

      <h4 style={{ fontSize: 20, marginTop: 24, marginBottom: 8, color: 'var(--ink)' }}>Is compounded semaglutide safe and FDA-approved?</h4>
      <p>Compounded medications as a category are not FDA-approved, meaning the FDA does not evaluate individual compounded batches for safety. However, the 503A compounding pharmacies themselves are regulated by state boards of pharmacy and must comply with strict USP compliance guidelines (USP &lt;797&gt; and &lt;795&gt;) for sterile and non-sterile compounding. Telehealth FX works exclusively with state-licensed, PCAB-accredited 503A compounding pharmacies that source high-purity API and conduct third-party sterility and potency testing on every batch.</p>

      {/* FINAL CTA */}
      <div style={{ padding: 40, marginTop: 60, borderRadius: 20, background: 'var(--ink)', color: '#FBF8F3', textAlign: 'center' }}>
        <h2 className="serif" style={{ fontSize: 40, marginBottom: 20, color: '#FBF8F3' }}>Your Medical Weight Loss Journey Starts Here</h2>
        <p style={{ fontSize: 18, opacity: 0.9, marginBottom: 32, maxWidth: 500, margin: '0 auto 32px' }}>Receive personalized clinical support, high-purity compounded GLP-1 medications, and direct access to U.S.-licensed doctors.</p>
        <a href={START_URL} target="_blank" rel="noopener noreferrer" className="btn btn-lg" style={{ background: '#FBF8F3', color: 'var(--ink)', display: 'inline-flex', justifyContent: 'center', width: '100%', maxWidth: 250 }}>Get Started <Icon.Arrow /></a>
      </div>

      {/* REFERENCES */}
      <div style={{ marginTop: 80, paddingTop: 40, borderTop: '1px solid var(--line-soft)', fontSize: 14, color: 'var(--ink-3)' }}>
        <h3 className="serif" style={{ fontSize: 24, marginBottom: 24, color: 'var(--ink)' }}>References</h3>
        <ol style={{ paddingLeft: 20, display: 'flex', flexDirection: 'column', gap: 16 }}>
          <li>
            Rubino, D. M., et al. (2021). "Effect of Continued Weekly Subcutaneous Semaglutide vs Placebo on Weight Loss Maintenance in Adults With Overweight or Obesity: The STEP 4 Randomized Clinical Trial." <em>JAMA</em>, 325(14), 1414–1425. <a href="https://jamanetwork.com/journals/jama/fullarticle/2777886" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--brand)', textDecoration: 'underline' }}>https://jamanetwork.com/journals/jama/fullarticle/2777886</a>
          </li>
          <li>
            Wilding, J. P. H., et al. (2021). "Once-Weekly Semaglutide in Adults with Overweight or Obesity." <em>New England Journal of Medicine</em>, 384(11), 989–1002. <a href="https://www.nejm.org/doi/full/10.1056/NEJMoa2032183" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--brand)', textDecoration: 'underline' }}>https://www.nejm.org/doi/full/10.1056/NEJMoa2032183</a>
          </li>
          <li>
            Frías, J. P., et al. (2021). "Tirzepatide versus Semaglutide Once Weekly in Patients with Type 2 Diabetes." <em>New England Journal of Medicine</em>, 385(27), 2507–2522. <a href="https://www.nejm.org/doi/full/10.1056/NEJMoa2107519" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--brand)', textDecoration: 'underline' }}>https://www.nejm.org/doi/full/10.1056/NEJMoa2107519</a>
          </li>
          <li>
            Lincoff, A. M., et al. (2023). "Semaglutide and Cardiovascular Outcomes in Obesity without Diabetes." <em>New England Journal of Medicine</em>, 389(24), 2221-2232. <a href="https://www.nejm.org/doi/full/10.1056/NEJMoa2307563" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--brand)', textDecoration: 'underline' }}>https://www.nejm.org/doi/full/10.1056/NEJMoa2307563</a>
          </li>
          <li>
            U.S. Food and Drug Administration. (2026). "Compounding Using Bulk Drug Substances Under Section 503A of the Federal Food, Drug, and Cosmetic Act." <a href="https://www.fda.gov/drugs/human-drug-compounding" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--brand)', textDecoration: 'underline' }}>https://www.fda.gov/drugs/human-drug-compounding</a>
          </li>
        </ol>
      </div>
    </div>
  </div></section></>);
}
export { Blog6CommonQuestionsGLP1 };
