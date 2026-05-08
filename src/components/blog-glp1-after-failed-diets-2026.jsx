"use client";
import React from 'react';
import Image from 'next/image';
import { Icon } from './common.jsx';
const START_URL = "https://go.telehealthfx.com/start";

function BlogGLP1AfterFailedDiets() {
  return (<><section className="section" style={{ minHeight: '60vh', paddingTop: 120 }}><div className="container" style={{ maxWidth: 800 }}>
    <div className="eyebrow" style={{ marginBottom: 20 }}>Science, Not Willpower</div>
    <h1 className="serif" style={{ fontSize: 52, marginBottom: 24, lineHeight: 1.08 }}>GLP-1 After Failed Diets: <span style={{ fontStyle: 'italic', color: 'var(--brand)' }}>Why This Time Is Different (The Biology You Were Never Told)</span></h1>
    <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 48, paddingBottom: 24, borderBottom: '1px solid var(--line-soft)' }}><div style={{ width: 40, height: 40, borderRadius: '50%', background: 'var(--brand)' }}><Image src="/assets/jm-profile.jpg" alt="Julian Mercer" width={1024} height={1024} style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%', height: "auto"}} priority={true} /></div><div><div style={{ fontWeight: 500, fontSize: 14 }}><a href="/about" style={{ color: "var(--ink)", textDecoration: "none" }}>Julian Mercer, M.S.</a></div><div style={{ fontSize: 13, color: 'var(--ink-3)' }}>Lead Bio-Systems Analyst · Updated May 2026 · 16 min read</div></div></div>
    <div className="blog-content" style={{ fontSize: 18, lineHeight: 1.7, color: 'var(--ink-2)' }}>
      <Image src="/assets/glp1-after-failed-diets-featured.png" alt="Person stepping from abandoned diet books toward clinical care" width={1024} height={1024} style={{ width: '100%', borderRadius: 16, marginBottom: 40, border: '1px solid var(--line-soft)', background: '#111', height: "auto"}} priority={true} />
      <p><strong>You did not fail.</strong> Your body fought back. Every diet you tried — keto, WW, Noom, calorie counting, intermittent fasting — triggered the same biological response: your body lowered its metabolic rate, increased hunger hormones (ghrelin), and defended its higher weight set point. This is not a character flaw. It is adaptive thermogenesis.</p>
      <h2 className="serif" style={{ fontSize: 32, marginTop: 48, marginBottom: 24, color: 'var(--ink)' }}>Why Diets Fail (Biology, Not Discipline)</h2>
      <p>A landmark 2016 study following <em>Biggest Loser</em> contestants found that 6 years after the show, their metabolic rates were <strong>500 calories/day lower</strong> than expected. Their bodies had permanently downregulated metabolism to defend the higher weight. This is what happens after every significant diet. GLP-1 medication addresses this biology directly by:</p>
      <ul>
        <li style={{ marginBottom: 8 }}>Reducing hunger signals at the brain level (hypothalamic satiety centers)</li>
        <li style={{ marginBottom: 8 }}>Slowing gastric emptying (you feel full longer from less food)</li>
        <li style={{ marginBottom: 8 }}>Reducing <a href="/blog/glp1-emotional-eating-food-addiction-2026" style={{ color: 'var(--brand)', fontWeight: 500 }}>food noise and cravings</a></li>
        <li style={{ marginBottom: 8 }}>Improving insulin sensitivity (better metabolic efficiency)</li>
      </ul>
      <h2 className="serif" style={{ fontSize: 32, marginTop: 48, marginBottom: 24, color: 'var(--ink)' }}>Why This Time Is Actually Different</h2>
      <p>Diets fail because they rely on conscious willpower to override unconscious biological drives. GLP-1 works because it changes the biological drives themselves. You do not need to resist hunger — the hunger is reduced. You do not need discipline around food — your brain{"'"}s reward response to food is modulated. The STEP and SURMOUNT trials showed this works for 85%+ of participants. See the <a href="/blog/semaglutide-weight-loss-timeline-2026" style={{ color: 'var(--brand)', fontWeight: 500 }}>semaglutide timeline</a> or <a href="/blog/tirzepatide-weight-loss-timeline-2026" style={{ color: 'var(--brand)', fontWeight: 500 }}>tirzepatide timeline</a>.</p>
      <div className="card" style={{ padding: 40, margin: '48px 0', textAlign: 'center', background: '#FFFDF9', borderColor: 'var(--brand)' }}>
        <h3 className="serif" style={{ fontSize: 28, marginBottom: 16, color: 'var(--ink)' }}>This Isn{"'"}t Another Diet. This Is Medicine.</h3>
        <p style={{ marginBottom: 24, fontSize: 16 }}>GLP-1 addresses the biology that willpower cannot. From $199/month.</p>
        <a href={START_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-lg" style={{ display: 'inline-flex', justifyContent: 'center' }}>Start Your Evaluation <Icon.Arrow /></a>
      </div>
      <div style={{ padding: 40, marginTop: 60, borderRadius: 20, background: 'var(--ink)', color: '#FBF8F3', textAlign: 'center' }}>
        <h2 className="serif" style={{ fontSize: 40, marginBottom: 20, color: '#FBF8F3' }}>You Didn{"'"}t Fail. Your Biology Fought Back. Now You Have the Tool to Win.</h2>
        <p style={{ fontSize: 18, opacity: 0.9, marginBottom: 32, maxWidth: 500, margin: '0 auto 32px' }}>Semaglutide from $199/mo. Tirzepatide from $349/mo. Clinician-guided. Cancel anytime.</p>
        <a href={START_URL} target="_blank" rel="noopener noreferrer" className="btn btn-lg" style={{ background: '#FBF8F3', color: 'var(--ink)', display: 'inline-flex', justifyContent: 'center', width: '100%', maxWidth: 250 }}>Get Started <Icon.Arrow /></a>
      </div>
    </div>
  </div></section></>);
}
export { BlogGLP1AfterFailedDiets };
