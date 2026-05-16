const fs = require('fs');
const path = require('path');

const BASE = __dirname;
const BLOG = path.join(BASE, 'src/app/blog');
const COMP = path.join(BASE, 'src/components');
const CTA = 'https://go.telehealthfx.com/testosterone';

const articles = [
  {
    slug: 'trt-cost-per-month-2026',
    component: 'trt-cost-per-month-2026',
    fn: 'BlogTrtCostPerMonth2026',
    title: 'How Much Does TRT Cost Per Month in 2026? Complete Pricing Breakdown',
    description: 'Complete cost breakdown of testosterone replacement therapy in 2026 — comparing telehealth vs clinic pricing, insurance coverage, HSA/FSA eligibility, and how to get TRT from $79/mo.',
    tag: 'Cost & Access',
  },
  {
    slug: 'does-insurance-cover-trt-2026',
    component: 'does-insurance-cover-trt-2026',
    fn: 'BlogDoesInsuranceCoverTrt2026',
    title: 'Does Insurance Cover Testosterone Therapy? Your 2026 Coverage Guide',
    description: 'Complete guide to insurance coverage for TRT in 2026 — which plans cover it, prior authorization codes, appeal strategies, and cash-pay alternatives that beat copays.',
    tag: 'Cost & Access',
  },
  {
    slug: 'best-online-trt-clinics-2026',
    component: 'best-online-trt-clinics-2026',
    fn: 'BlogBestOnlineTrtClinics2026',
    title: '7 Best Online TRT Clinics in 2026 (Ranked by Cost, Care & Labs)',
    description: 'Independent ranking of the top online testosterone therapy clinics in 2026 — comparing pricing, lab testing, clinical oversight, and medication quality.',
    tag: 'Reviews',
  },
  {
    slug: 'how-to-get-trt-prescribed-online-2026',
    component: 'how-to-get-trt-prescribed-online-2026',
    fn: 'BlogHowToGetTrtPrescribedOnline2026',
    title: 'How to Get TRT Prescribed Online: Step-by-Step Guide (2026)',
    description: 'Step-by-step walkthrough of getting testosterone replacement therapy prescribed through a telehealth platform — from intake to first injection in 2026.',
    tag: 'Getting Started',
  },
  {
    slug: 'testosterone-injections-vs-cream-vs-pellets-2026',
    component: 'testosterone-injections-vs-cream-vs-pellets-2026',
    fn: 'BlogTestosteroneInjectionsVsCreamVsPellets2026',
    title: 'TRT Injections vs Cream vs Pellets: Which Delivery Method Is Best?',
    description: 'Head-to-head comparison of testosterone delivery methods — injections, topical cream, and pellets. Efficacy, cost, convenience, and side effect profiles compared.',
    tag: 'Treatment Comparison',
  },
  {
    slug: 'enclomiphene-vs-trt-2026',
    component: 'enclomiphene-vs-trt-2026',
    fn: 'BlogEnclomipheneVsTrt2026',
    title: 'Enclomiphene vs Traditional TRT: The Fertility-Preserving Alternative',
    description: 'Comprehensive comparison of enclomiphene citrate and traditional testosterone replacement therapy — fertility preservation, mechanism differences, efficacy data, and which is right for you.',
    tag: 'Treatment Comparison',
  },
  {
    slug: 'testosterone-cypionate-vs-enanthate-2026',
    component: 'testosterone-cypionate-vs-enanthate-2026',
    fn: 'BlogTestosteroneCypionateVsEnanthate2026',
    title: 'Testosterone Cypionate vs Enanthate: Does It Matter Which You Use?',
    description: 'Clinical comparison of testosterone cypionate and enanthate esters — half-life, injection frequency, side effects, cost, and switching protocols.',
    tag: 'Treatment Comparison',
  },
  {
    slug: 'trt-dosage-guide-2026',
    component: 'trt-dosage-guide-2026',
    fn: 'BlogTrtDosageGuide2026',
    title: 'TRT Dosage Guide: Finding Your Optimal Testosterone Protocol',
    description: 'Complete clinical guide to testosterone replacement therapy dosing — starting doses, adjustment timelines, injection frequency optimization, and common dosing mistakes to avoid.',
    tag: 'Dosing Protocol',
  },
  {
    slug: 'hcg-with-trt-2026',
    component: 'hcg-with-trt-2026',
    fn: 'BlogHcgWithTrt2026',
    title: 'HCG with TRT: Why Your Protocol Might Need It (And When It Doesn\'t)',
    description: 'Clinical guide to using HCG alongside testosterone therapy — fertility preservation, testicular atrophy prevention, dosing protocols, and the Enclomiphene alternative.',
    tag: 'Protocol Design',
  },
  {
    slug: 'trt-side-effects-complete-guide-2026',
    component: 'trt-side-effects-complete-guide-2026',
    fn: 'BlogTrtSideEffectsCompleteGuide2026',
    title: 'TRT Side Effects: The Complete Evidence-Based Guide (Real vs Myth)',
    description: 'Every TRT side effect ranked by evidence — the TRAVERSE trial on heart safety, hematocrit management, hair loss reality, fertility impacts, and myths debunked.',
    tag: 'Safety',
  },
];

// 1. Create page.js routes
articles.forEach(a => {
  const dir = path.join(BLOG, a.slug);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "MedicalWebPage",
        "@id": `https://telehealthfx.com/blog/${a.slug}/#webpage`,
        name: a.title,
        description: a.description,
        url: `https://telehealthfx.com/blog/${a.slug}`,
        lastReviewed: "2026-05-16",
        medicalAudience: { "@type": "MedicalAudience", audienceType: "Patient", healthCondition: { "@type": "MedicalCondition", name: "Hypogonadism (Low Testosterone)" } },
        about: { "@id": `https://telehealthfx.com/blog/${a.slug}/#article` },
        publisher: { "@id": "https://telehealthfx.com/#organization" }
      },
      {
        "@type": "Article",
        "@id": `https://telehealthfx.com/blog/${a.slug}/#article`,
        headline: a.title,
        description: a.description,
        author: { "@type": "Person", name: "Julian Mercer, M.S.", jobTitle: "Lead Bio-Systems Analyst", url: "https://telehealthfx.com/about" },
        publisher: { "@id": "https://telehealthfx.com/#organization" },
        datePublished: "2026-05-16",
        dateModified: "2026-05-16",
        mainEntityOfPage: { "@id": `https://telehealthfx.com/blog/${a.slug}/#webpage` }
      },
      {
        "@type": "FAQPage",
        "@id": `https://telehealthfx.com/blog/${a.slug}/#faq`,
        mainEntity: []
      },
      {
        "@type": "Product",
        "@id": `https://telehealthfx.com/blog/${a.slug}/#product`,
        name: "Telehealth FX — TRT Program",
        brand: { "@type": "Brand", name: "Telehealth FX" },
        offers: { "@type": "Offer", price: "79", priceCurrency: "USD", availability: "https://schema.org/InStock", url: "https://telehealthfx.com/medications/testosterone/" },
        aggregateRating: { "@type": "AggregateRating", ratingValue: "4.9", reviewCount: "2847", bestRating: "5" }
      },
      {
        "@type": "BreadcrumbList",
        "@id": `https://telehealthfx.com/blog/${a.slug}/#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://telehealthfx.com" },
          { "@type": "ListItem", position: 2, name: "Blog", item: "https://telehealthfx.com/blog" },
          { "@type": "ListItem", position: 3, name: a.title }
        ]
      },
      {
        "@type": "MedicalOrganization",
        "@id": "https://telehealthfx.com/#organization",
        name: "Telehealth FX",
        url: "https://telehealthfx.com",
        medicalSpecialty: ["http://schema.org/Endocrine", "http://schema.org/Urologic"]
      }
    ]
  };

  const pageContent = `import { ${a.fn} } from "../../../components/${a.component}.jsx";

export const metadata = {
  title: "${a.title} | Telehealth FX",
  description: "${a.description}",
  alternates: { canonical: "https://telehealthfx.com/blog/${a.slug}" },
  openGraph: {
    title: "${a.title}",
    description: "${a.description}",
    url: "https://telehealthfx.com/blog/${a.slug}",
    siteName: "Telehealth FX",
    type: "article",
  },
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(${JSON.stringify(schema)}) }}
      />
      <${a.fn} />
    </>
  );
}
`;
  fs.writeFileSync(path.join(dir, 'page.js'), pageContent);
  console.log(`✅ Route: /blog/${a.slug}`);
});

// 2. Create stub components
articles.forEach(a => {
  const compPath = path.join(COMP, `${a.component}.jsx`);
  if (!fs.existsSync(compPath)) {
    const stub = `"use client";\nimport React from 'react';\nimport Image from 'next/image';\nimport { Icon } from './common.jsx';\nconst S = "${CTA}";\n\nfunction ${a.fn}() {\n  return (<><section className="section" style={{ minHeight: '60vh', paddingTop: 120 }}><div className="container" style={{ maxWidth: 800 }}>\n    <div className="eyebrow" style={{ marginBottom: 20 }}>${a.tag}</div>\n    <h1 className="serif" style={{ fontSize: 52, marginBottom: 24, lineHeight: 1.08 }}>${a.title}</h1>\n    <div className="blog-content" style={{ fontSize: 18, lineHeight: 1.7, color: 'var(--ink-2)' }}>\n      <p>Content loading...</p>\n    </div>\n  </div></section></>);\n}\nexport { ${a.fn} };\n`;
    fs.writeFileSync(compPath, stub);
    console.log(`📝 Stub: ${a.component}.jsx`);
  }
});

// 3. Update blog-index.jsx
const blogIndexPath = path.join(COMP, 'blog-index.jsx');
let blogIndex = fs.readFileSync(blogIndexPath, 'utf8');
const newEntries = articles.map(a =>
  `    { title: "${a.title}", description: "${a.description}", slug: "/blog/${a.slug}", image: "/assets/${a.slug}-featured.png", tag: "${a.tag}" }`
).join(',\n');
// Insert before the closing ];
blogIndex = blogIndex.replace(
  /(\s*\];\s*\n\s*const indexSchema)/,
  `,\n${newEntries}\n  ];\n\n  const indexSchema`
);
fs.writeFileSync(blogIndexPath, blogIndex);
console.log('✅ Blog index updated with 10 TRT entries');

// 4. Update sitemap.xml
const sitemapPath = path.join(BASE, 'public/sitemap.xml');
let sitemap = fs.readFileSync(sitemapPath, 'utf8');
const sitemapEntries = articles.map(a =>
  `  <url>\n    <loc>https://www.telehealthfx.com/blog/${a.slug}</loc>\n    <lastmod>2026-05-16</lastmod>\n    <changefreq>weekly</changefreq>\n    <priority>0.8</priority>\n  </url>`
).join('\n');
sitemap = sitemap.replace('</urlset>', sitemapEntries + '\n</urlset>');
fs.writeFileSync(sitemapPath, sitemap);
console.log('✅ Sitemap updated with 10 TRT URLs');

console.log('\n🎯 Batch 13 scaffold complete — 10 TRT routes, 10 components, blog index updated, sitemap updated.');
