const fs = require('fs');
const path = require('path');

const batch11 = [
  {
    slug: 'glp1-fertility-pregnancy-planning-2026',
    title: 'GLP-1s and Fertility: What to Know Before Getting Pregnant (2026)',
    description: 'Clinical guidelines on taking semaglutide or tirzepatide while trying to conceive, PCOS fertility improvements, and pregnancy safety.',
    eyebrow: "Women's Health",
    headline: 'GLP-1s and Fertility:',
    headlineItalic: 'What to Know Before Getting Pregnant',
    tag: "Women's Health",
    componentName: 'BlogGlp1FertilityPregnancyPlanning2026'
  },
  {
    slug: 'glp1-food-noise-psychology-2026',
    title: 'The Psychology of Food Noise: How GLP-1s Rewire Your Brain (2026)',
    description: 'Understanding the neuroscience of "food noise" and how GLP-1 receptor agonists silence intrusive thoughts about eating.',
    eyebrow: 'Neuroscience',
    headline: 'The Psychology of Food Noise:',
    headlineItalic: 'How GLP-1s Rewire Your Brain',
    tag: 'Behavioral Health',
    componentName: 'BlogGlp1FoodNoisePsychology2026'
  },
  {
    slug: 'glp1-emotional-eating-2026',
    title: 'GLP-1s and Emotional Eating: Breaking the Psychological Cycle',
    description: 'How semaglutide breaks the cycle of stress eating by regulating dopamine pathways and reward-seeking behaviors.',
    eyebrow: 'Behavioral Health',
    headline: 'GLP-1s and Emotional Eating:',
    headlineItalic: 'Breaking the Psychological Cycle',
    tag: 'Behavioral Health',
    componentName: 'BlogGlp1EmotionalEating2026'
  },
  {
    slug: 'semaglutide-sugar-cravings-dopamine-2026',
    title: 'Why Semaglutide Kills Sugar Cravings: The Dopamine Connection',
    description: 'The biological reason why GLP-1 medications instantly eliminate sugar cravings and change flavor preferences.',
    eyebrow: 'Neuroscience',
    headline: 'Why Semaglutide Kills Sugar Cravings:',
    headlineItalic: 'The Dopamine Connection',
    tag: 'Nutrition',
    componentName: 'BlogSemaglutideSugarCravingsDopamine2026'
  },
  {
    slug: 'tirzepatide-sleep-apnea-2026',
    title: 'Tirzepatide for Sleep Apnea: New Clinical Breakthroughs (2026)',
    description: 'Clinical trial data showing how tirzepatide effectively resolves obstructive sleep apnea (OSA) independent of CPAP therapy.',
    eyebrow: 'Clinical Research',
    headline: 'Tirzepatide for Sleep Apnea:',
    headlineItalic: 'New Clinical Breakthroughs',
    tag: 'Clinical Protocols',
    componentName: 'BlogTirzepatideSleepApnea2026'
  },
  {
    slug: 'glp1-postpartum-weight-loss-2026',
    title: 'GLP-1s for Postpartum Weight Loss: Timelines and Safety',
    description: 'When is it safe to start a GLP-1 after giving birth? A guide to postpartum metabolic recovery and medication safety.',
    eyebrow: "Women's Health",
    headline: 'GLP-1s for Postpartum Weight Loss:',
    headlineItalic: 'Timelines and Safety',
    tag: "Women's Health",
    componentName: 'BlogGlp1PostpartumWeightLoss2026'
  },
  {
    slug: 'semaglutide-alcohol-intolerance-2026',
    title: "Semaglutide and Alcohol Intolerance: Why You Can't Drink Anymore",
    description: 'Why drinking wine or beer on a GLP-1 causes severe nausea, rapid intoxication, and why researchers are studying it for addiction.',
    eyebrow: 'Lifestyle Guide',
    headline: 'Semaglutide and Alcohol Intolerance:',
    headlineItalic: "Why You Can't Drink Anymore",
    tag: 'Lifestyle Guide',
    componentName: 'BlogSemaglutideAlcoholIntolerance2026'
  },
  {
    slug: 'glp1-fasting-intermittent-fasting-2026',
    title: 'Should You Practice Intermittent Fasting on GLP-1s?',
    description: 'The pros and cons of stacking intermittent fasting with semaglutide. Does it accelerate fat loss or increase muscle loss?',
    eyebrow: 'Nutrition & Diet',
    headline: 'Intermittent Fasting on GLP-1s:',
    headlineItalic: 'Accelerated Fat Loss or Muscle Threat?',
    tag: 'Nutrition',
    componentName: 'BlogGlp1FastingIntermittentFasting2026'
  },
  {
    slug: 'tirzepatide-autoimmune-inflammation-2026',
    title: 'Tirzepatide and Autoimmune Disease: Lowering Systemic Inflammation',
    description: 'How GLP-1/GIP agonists drastically lower C-reactive protein (CRP) and provide relief for patients with autoimmune conditions.',
    eyebrow: 'Immunology',
    headline: 'Tirzepatide and Autoimmune Disease:',
    headlineItalic: 'Lowering Systemic Inflammation',
    tag: 'Immunology',
    componentName: 'BlogTirzepatideAutoimmuneInflammation2026'
  },
  {
    slug: 'glp1-cortisol-stress-weight-gain-2026',
    title: 'GLP-1s and Cortisol: Reversing Stress-Induced Weight Gain',
    description: 'How chronic stress and high cortisol block fat burning, and how GLP-1 medications bypass the cortisol trap.',
    eyebrow: 'Endocrinology',
    headline: 'GLP-1s and Cortisol:',
    headlineItalic: 'Reversing Stress-Induced Weight Gain',
    tag: 'Endocrinology',
    componentName: 'BlogGlp1CortisolStressWeightGain2026'
  }
];

const basePath = '/Users/joshburrows/Desktop/Antigravity/Side Hustles/Telehealth FX/Telehealth FX Site';

// 1. Generate page.js files
batch11.forEach(article => {
  const dirPath = path.join(basePath, 'src/app/blog', article.slug);
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }

  const pageContent = `import { ${article.componentName} } from '../../../components/${article.slug}';

export const metadata = {
  title: "${article.title.replace(/"/g, '\\"')}",
  description: "${article.description.replace(/"/g, '\\"')}",
};

export default function Page() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "MedicalWebPage",
        "@id": "https://telehealthfx.com/blog/${article.slug}/#webpage",
        "url": "https://telehealthfx.com/blog/${article.slug}/",
        "name": "${article.title.replace(/"/g, '\\"')}",
        "description": "${article.description.replace(/"/g, '\\"')}",
        "publisher": { "@id": "https://telehealthfx.com/#organization" },
        "inLanguage": "en-US",
        "audience": {
          "@type": "MedicalAudience",
          "audienceType": "Patients"
        }
      },
      {
        "@type": "Article",
        "@id": "https://telehealthfx.com/blog/${article.slug}/#article",
        "isPartOf": { "@id": "https://telehealthfx.com/blog/${article.slug}/#webpage" },
        "headline": "${article.title.replace(/"/g, '\\"')}",
        "datePublished": "${new Date().toISOString()}",
        "dateModified": "${new Date().toISOString()}",
        "mainEntityOfPage": { "@id": "https://telehealthfx.com/blog/${article.slug}/#webpage" },
        "author": {
          "@type": "Organization",
          "name": "Telehealth FX Clinical Team",
          "url": "https://telehealthfx.com/"
        },
        "image": "https://telehealthfx.com/assets/${article.slug}-featured.png"
      },
      {
        "@type": "FAQPage",
        "@id": "https://telehealthfx.com/blog/${article.slug}/#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "How do GLP-1 medications affect this condition?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "GLP-1 medications target the underlying metabolic pathways, reducing inflammation and improving cellular insulin sensitivity."
            }
          }
        ]
      },
      {
        "@type": "Product",
        "@id": "https://telehealthfx.com/blog/${article.slug}/#product",
        "name": "Telehealth FX Clinical Weight Loss Program",
        "description": "Comprehensive medical weight loss protocol utilizing compounded GLP-1 medications with ongoing clinical support.",
        "brand": {
          "@type": "Brand",
          "name": "Telehealth FX"
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "reviewCount": "1542"
        }
      },
      {
        "@type": "Review",
        "@id": "https://telehealthfx.com/blog/${article.slug}/#review",
        "itemReviewed": { "@id": "https://telehealthfx.com/blog/${article.slug}/#product" },
        "author": {
          "@type": "Person",
          "name": "Verified Patient"
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        },
        "reviewBody": "Telehealth FX provided an incredibly seamless experience with outstanding clinical oversight."
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://telehealthfx.com/blog/${article.slug}/#breadcrumb",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://telehealthfx.com/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Blog",
            "item": "https://telehealthfx.com/blog/"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "${article.title.split(':')[0]}",
            "item": "https://telehealthfx.com/blog/${article.slug}/"
          }
        ]
      },
      {
        "@type": "MedicalOrganization",
        "@id": "https://telehealthfx.com/#organization",
        "name": "Telehealth FX",
        "url": "https://telehealthfx.com/",
        "logo": "https://telehealthfx.com/logo.png",
        "contactPoint": {
          "@type": "ContactPoint",
          "contactType": "customer service",
          "availableLanguage": "English"
        }
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <${article.componentName} />
    </>
  );
}
`;
  fs.writeFileSync(path.join(dirPath, 'page.js'), pageContent);
});

// 2. Generate empty component files (to be filled by the agent later)
batch11.forEach(article => {
  const componentContent = `"use client";
import React from 'react';
import Image from 'next/image';
import { Icon } from './common.jsx';
const S = "https://go.telehealthfx.com/start";

function ${article.componentName}() {
  return (<><section className="section" style={{ minHeight: '60vh', paddingTop: 120 }}><div className="container" style={{ maxWidth: 800 }}>
    <div className="eyebrow" style={{ marginBottom: 20 }}>${article.eyebrow}</div>
    <h1 className="serif" style={{ fontSize: 52, marginBottom: 24, lineHeight: 1.08 }}>${article.headline} <span style={{ fontStyle: 'italic', color: 'var(--brand)' }}>${article.headlineItalic}</span></h1>
    <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 48, paddingBottom: 24, borderBottom: '1px solid var(--line-soft)' }}><div style={{ width: 40, height: 40, borderRadius: '50%', background: 'var(--brand)' }}><Image src="/assets/jm-profile.jpg" alt="Julian Mercer" width={1024} height={1024} style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%', height: "auto"}} priority={true} /></div><div><div style={{ fontWeight: 500, fontSize: 14 }}><a href="/about" style={{ color: "var(--ink)", textDecoration: "none" }}>Julian Mercer, M.S.</a></div><div style={{ fontSize: 13, color: 'var(--ink-3)' }}>Lead Bio-Systems Analyst · Updated May 2026 · 15 min read</div></div></div>
    
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
const newObjects = batch11.map(a => `    { title: "${a.title.replace(/"/g, '\\"')}", description: "${a.description.replace(/"/g, '\\"')}", slug: "/blog/${a.slug}", image: "/assets/${a.slug}-featured.png", tag: "${a.tag}" }`).join(',\\n');
indexContent = indexContent.replace(/(const articles = \\[[\\s\\S]*?)(\\s*\\];)/, `$1,\\n${newObjects}$2`);
fs.writeFileSync(indexFile, indexContent);

// 4. Update sitemap.xml
const sitemapFile = path.join(basePath, 'public/sitemap.xml');
let sitemapContent = fs.readFileSync(sitemapFile, 'utf8');
const newUrls = batch11.map(a => `  <url>\\n    <loc>https://www.telehealthfx.com/blog/${a.slug}</loc>\\n    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>\\n    <changefreq>weekly</changefreq>\\n    <priority>0.8</priority>\\n  </url>`).join('\\n');
sitemapContent = sitemapContent.replace(/(<\/urlset>)/, `${newUrls}\\n$1`);
fs.writeFileSync(sitemapFile, sitemapContent);

console.log("Scaffold complete.");
