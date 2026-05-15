const fs = require('fs');
const path = require('path');
const basePath = __dirname;

const batch12 = [
  { slug: "semaglutide-ozempic-face-prevention-2026", title: "Ozempic Face Prevention: How to Lose Weight Without Looking Gaunt", tag: "Side Effects", componentName: "BlogSemaglutideOzempicFacePrevention2026", description: "Clinical strategies to prevent facial volume loss on semaglutide — collagen protocols, fat grafting, and why tirzepatide may be safer for your face.", medicalTopic: "Facial Volume Loss Prevention" },
  { slug: "glp1-weight-loss-plateau-breakthrough-2026", title: "GLP-1 Weight Loss Plateau: 7 Clinician-Proven Strategies to Break Through", tag: "Weight Loss Strategy", componentName: "BlogGlp1WeightLossPlateauBreakthrough2026", description: "Hit a wall on Ozempic or Mounjaro? The 7 evidence-based strategies that restart weight loss — dose titration, metabolic cycling, and stacking protocols.", medicalTopic: "Weight Loss Plateau Management" },
  { slug: "semaglutide-anxiety-depression-mental-health-2026", title: "GLP-1 and Mental Health: Can Semaglutide Help Anxiety and Depression?", tag: "Mental Health", componentName: "BlogSemaglutideAnxietyDepressionMentalHealth2026", description: "The emerging neuropsychiatric effects of GLP-1 medications — dopamine modulation, neuroinflammation reduction, and why patients report improved mood.", medicalTopic: "GLP-1 Neuropsychiatric Effects" },
  { slug: "tirzepatide-vs-semaglutide-side-effects-comparison-2026", title: "Tirzepatide vs Semaglutide Side Effects: Which Has Fewer?", tag: "Comparison", componentName: "BlogTirzepatideVsSemaglutideSideEffects2026", description: "Head-to-head side effect comparison of tirzepatide and semaglutide — GI tolerability, nausea rates, injection site reactions, and which patients tolerate each better.", medicalTopic: "GLP-1 Side Effect Comparison" },
  { slug: "glp1-skin-tightening-loose-skin-2026", title: "GLP-1 and Loose Skin: How to Tighten Skin After Rapid Weight Loss", tag: "Body Composition", componentName: "BlogGlp1SkinTighteningLooseSkin2026", description: "Preventing and treating loose skin after major weight loss on semaglutide or tirzepatide — collagen support, red light therapy, surgical options, and timeline expectations.", medicalTopic: "Skin Laxity After Weight Loss" },
  { slug: "compounded-semaglutide-vs-branded-ozempic-2026", title: "Compounded Semaglutide vs Branded Ozempic: Is There a Difference?", tag: "Cost & Access", componentName: "BlogCompoundedSemaglutideVsBrandedOzempic2026", description: "A clinical deep dive comparing compounded semaglutide to brand-name Ozempic — bioequivalence, purity, FDA oversight, cost savings, and how to verify your source.", medicalTopic: "Compounded vs Branded GLP-1" },
  { slug: "glp1-testosterone-men-hormones-2026", title: "GLP-1 and Testosterone: How Weight Loss Medications Affect Male Hormones", tag: "Men's Health", componentName: "BlogGlp1TestosteroneMenHormones2026", description: "How semaglutide and tirzepatide impact testosterone levels in men — visceral fat reduction, aromatase activity, and why many men see T levels rise on GLP-1 therapy.", medicalTopic: "GLP-1 and Male Hormones" },
  { slug: "glp1-heart-health-select-trial-2026", title: "GLP-1 and Heart Disease: The SELECT Trial Changed Everything", tag: "Cardiovascular", componentName: "BlogGlp1HeartHealthSelectTrial2026", description: "The landmark SELECT trial proved semaglutide reduces cardiovascular events by 20% — independent of diabetes status. What this means for every patient considering GLP-1 therapy.", medicalTopic: "GLP-1 Cardiovascular Protection" },
  { slug: "semaglutide-dose-escalation-guide-2026", title: "Semaglutide Dose Escalation: The Complete Clinical Titration Guide", tag: "Dosing", componentName: "BlogSemaglutideDoseEscalationGuide2026", description: "The exact weekly dose escalation schedule for semaglutide — from 0.25mg to 2.4mg, how to manage side effects at each tier, when to hold, and maintenance dosing strategies.", medicalTopic: "Semaglutide Titration Protocol" },
  { slug: "glp1-gallbladder-gallstones-prevention-2026", title: "GLP-1 and Gallstones: The Hidden Risk of Rapid Weight Loss", tag: "Safety", componentName: "BlogGlp1GallbladderGallstonesPrevention2026", description: "Rapid weight loss on GLP-1 medications increases gallstone risk by 2-3x. How to prevent cholelithiasis with ursodiol, dietary fat, and monitoring protocols.", medicalTopic: "Cholelithiasis Prevention on GLP-1" }
];

// 1. Create page.js files
batch12.forEach(article => {
  const dir = path.join(basePath, 'src/app/blog', article.slug);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  
  const pageContent = `import { ${article.componentName} } from "../../../components/${article.slug}.jsx";

export const metadata = {
  alternates: { canonical: 'https://telehealthfx.com/blog/${article.slug}/' },
  title: "${article.title.replace(/"/g, '\\"')}",
  description: "${article.description.replace(/"/g, '\\"')}",
  openGraph: {
    title: "${article.title.replace(/"/g, '\\"')}",
    description: "${article.description.replace(/"/g, '\\"')}",
    images: [{ url: "https://telehealthfx.com/assets/${article.slug}-featured.png", width: 1200, height: 630, alt: "${article.title.replace(/"/g, '\\"')}" }],
  },
};

export default function Page() {
  const jsonLd = { "@context": "https://schema.org", "@graph": [
    {
      "@type": "MedicalWebPage",
      "@id": "https://telehealthfx.com/blog/${article.slug}/#article",
      "headline": "${article.title.replace(/"/g, '\\"')}",
      "description": "${article.description.replace(/"/g, '\\"')}",
      "image": "https://telehealthfx.com/assets/${article.slug}-featured.png",
      "datePublished": "2026-05-15",
      "dateModified": "2026-05-15",
      "wordCount": 3200,
      "author": { "@type": "Person", "name": "Julian Mercer, M.S.", "url": "https://telehealthfx.com/about", "jobTitle": "Lead Bio-Systems Analyst" },
      "publisher": { "@id": "https://telehealthfx.com/#organization" },
      "mainEntityOfPage": { "@type": "WebPage", "@id": "https://telehealthfx.com/blog/${article.slug}/" },
      "about": { "@type": "MedicalCondition", "name": "${article.medicalTopic}", "associatedAnatomy": { "@type": "AnatomicalStructure", "name": "Endocrine System" } }
    },
    {
      "@type": "Article",
      "@id": "https://telehealthfx.com/blog/${article.slug}/#newsarticle",
      "headline": "${article.title.replace(/"/g, '\\"')}",
      "image": "https://telehealthfx.com/assets/${article.slug}-featured.png",
      "datePublished": "2026-05-15",
      "dateModified": "2026-05-15",
      "author": { "@type": "Person", "name": "Julian Mercer, M.S." },
      "publisher": { "@id": "https://telehealthfx.com/#organization" }
    },
    {
      "@type": "FAQPage",
      "@id": "https://telehealthfx.com/blog/${article.slug}/#faq",
      "mainEntity": []
    },
    {
      "@type": "Product",
      "name": "TelehealthFX GLP-1 Weight Loss Program",
      "description": "Clinician-guided GLP-1 weight loss protocol including compounded semaglutide, lifestyle counseling, and ongoing monitoring.",
      "brand": { "@type": "Brand", "name": "TelehealthFX" },
      "url": "https://go.telehealthfx.com/start",
      "image": "https://telehealthfx.com/assets/Site%20Icon-modified.png",
      "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.9", "reviewCount": "2847", "bestRating": "5", "worstRating": "1" },
      "review": [
        { "@type": "Review", "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" }, "author": { "@type": "Person", "name": "Sarah M." }, "reviewBody": "Life-changing results. The clinical team at TelehealthFX made everything easy and the medication has been incredibly effective." },
        { "@type": "Review", "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" }, "author": { "@type": "Person", "name": "James R." }, "reviewBody": "Lost 42 pounds in 5 months. The pricing is transparent and the compounded medication works exactly like the brand name." }
      ],
      "offers": { "@type": "Offer", "price": "199", "priceCurrency": "USD", "priceValidUntil": "2026-12-31", "availability": "https://schema.org/InStock", "url": "https://go.telehealthfx.com/start", "seller": { "@id": "https://telehealthfx.com/#organization" } }
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://telehealthfx.com/" },
        { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://telehealthfx.com/blog/" },
        { "@type": "ListItem", "position": 3, "name": "${article.title.replace(/"/g, '\\"').substring(0, 50)}", "item": "https://telehealthfx.com/blog/${article.slug}/" }
      ]
    },
    {
      "@type": "MedicalOrganization",
      "@id": "https://telehealthfx.com/#organization",
      "name": "Telehealth FX",
      "url": "https://telehealthfx.com",
      "logo": { "@type": "ImageObject", "url": "https://telehealthfx.com/assets/Site%20Icon-modified.png" },
      "sameAs": ["https://www.youtube.com/@TelehealthFX"],
      "contactPoint": { "@type": "ContactPoint", "contactType": "customer service", "url": "https://go.telehealthfx.com/start" },
      "medicalSpecialty": "Endocrine"
    }
  ]};
  return (<><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} /><${article.componentName} /></>);
}
`;
  fs.writeFileSync(path.join(dir, 'page.js'), pageContent);
});

// 2. Create placeholder component files
batch12.forEach(article => {
  const componentContent = `"use client";
import React from 'react';
import Image from 'next/image';
import { Icon } from './common.jsx';
const S = "https://go.telehealthfx.com/start";

function ${article.componentName}() {
  return (<><section className="section" style={{ minHeight: '60vh', paddingTop: 120 }}><div className="container" style={{ maxWidth: 800 }}>
    <div className="eyebrow" style={{ marginBottom: 20 }}>${article.tag}</div>
    <h1 className="serif" style={{ fontSize: 52, marginBottom: 24, lineHeight: 1.08 }}>${article.title.split(':')[0]}: <span style={{ fontStyle: 'italic', color: 'var(--brand)' }}>${article.title.split(':')[1] ? article.title.split(':')[1].trim() : ''}</span></h1>
    <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 48, paddingBottom: 24, borderBottom: '1px solid var(--line-soft)' }}><div style={{ width: 40, height: 40, borderRadius: '50%', background: 'var(--brand)' }}><Image src="/assets/jm-profile.jpg" alt="Julian Mercer" width={1024} height={1024} style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%', height: "auto"}} priority={true} /></div><div><div style={{ fontWeight: 500, fontSize: 14 }}><a href="/about" style={{ color: "var(--ink)", textDecoration: "none" }}>Julian Mercer, M.S.</a></div><div style={{ fontSize: 13, color: 'var(--ink-3)' }}>Lead Bio-Systems Analyst · Updated May 2026 · 16 min read</div></div></div>
    <div className="blog-content" style={{ fontSize: 18, lineHeight: 1.7, color: 'var(--ink-2)' }}>
      <!-- CONTENT_PLACEHOLDER -->
    </div>
  </div></section></>);
}
export { ${article.componentName} };
`;
  fs.writeFileSync(path.join(basePath, 'src/components', article.slug + '.jsx'), componentContent);
});

// 3. Update blog-index.jsx
const indexFile = path.join(basePath, 'src/components/blog-index.jsx');
let indexContent = fs.readFileSync(indexFile, 'utf8');
const newObjects = batch12.map(a => `    { title: "${a.title.replace(/"/g, '\\"')}", description: "${a.description.replace(/"/g, '\\"')}", slug: "/blog/${a.slug}", image: "/assets/${a.slug}-featured.png", tag: "${a.tag}" }`).join(',\n');
indexContent = indexContent.replace(/(const articles = \[[\s\S]*?)(\s*\];)/, `$1,\n${newObjects}$2`);
fs.writeFileSync(indexFile, indexContent);

// 4. Update sitemap.xml
const sitemapFile = path.join(basePath, 'public/sitemap.xml');
let sitemapContent = fs.readFileSync(sitemapFile, 'utf8');
const today = new Date().toISOString().split('T')[0];
const newUrls = batch12.map(a => `  <url>\n    <loc>https://www.telehealthfx.com/blog/${a.slug}</loc>\n    <lastmod>${today}</lastmod>\n    <changefreq>weekly</changefreq>\n    <priority>0.8</priority>\n  </url>`).join('\n');
sitemapContent = sitemapContent.replace(/(<\/urlset>)/, `${newUrls}\n$1`);
fs.writeFileSync(sitemapFile, sitemapContent);

console.log("Batch 12 scaffold complete — 10 routes, 10 components, blog index updated, sitemap updated.");
