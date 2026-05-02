const fs = require('fs');
const path = require('path');

const baseDir = path.join(__dirname, 'src', 'components');
const files = fs.readdirSync(baseDir).filter(f => f.startsWith('blog-') && f !== 'blog-index.jsx');

const internalLinks = [
  { keyword: "weight loss plateau", slug: "/blog/glp-1-plateau-when-weight-loss-stalls-what-to-do-2" },
  { keyword: "Ozempic face", slug: "/blog/ozempic-face-loose-skin-prevention-treatment-what" },
  { keyword: "compounded semaglutide", slug: "/blog/is-compounded-semaglutide-safe-what-you-need-to-kn" },
  { keyword: "Sermorelin", slug: "/medications/sermorelin" },
  { keyword: "NAD+ therapy", slug: "/medications/nad" },
  { keyword: "Berberine", slug: "/medications/berberine" },
  { keyword: "food noise", slug: "/blog/glp-1-and-mental-health-anxiety-depression-food-no" },
  { keyword: "muscle loss", slug: "/blog/the-muscle-loss-myth-how-to-protect-your-lean-mass" },
  { keyword: "first 90 days", slug: "/blog/your-first-90-days-on-glp-1-week-by-week-what-to-e" },
  { keyword: "telehealth weight loss", slug: "/blog/how-to-choose-a-telehealth-weight-loss-program-and" }
];

for (const file of files) {
  let content = fs.readFileSync(path.join(baseDir, file), 'utf8');

  // 1. Next/Image & Next/Head Imports
  if (!content.includes('import Image from \'next/image\'')) {
    content = content.replace('import React from \'react\';', "import React from 'react';\nimport Image from 'next/image';\nimport Head from 'next/head';");
  }

  // 2. Convert <img to <Image
  content = content.replace(/<img\s+src="(\/assets\/[^"]+)"\s+alt="([^"]*)"\s+style={{([^}]+)}}\s*\/>/g, '<Image src="$1" alt="$2" width={1024} height={1024} style={{$3, height: "auto"}} priority={true} />');

  // 3. Lazy Load Iframes
  content = content.replace(/<iframe([\s\S]*?)allowFullScreen>/g, (match, p1) => {
    if (!match.includes('loading="lazy"')) {
      return `<iframe loading="lazy"${p1}allowFullScreen>`;
    }
    return match;
  });

  // 4. E-E-A-T: Link author to /about
  content = content.replace(/<div style={{ fontWeight: 500, fontSize: 14 }}>Julian Mercer, M.S\.<\/div>/g, '<div style={{ fontWeight: 500, fontSize: 14 }}><a href="/about" style={{ color: "var(--ink)", textDecoration: "none" }}>Julian Mercer, M.S.</a></div>');

  // 5. JSON-LD Schema
  if (!content.includes('application/ld+json')) {
    // Extract title
    const titleMatch = content.match(/<h1[^>]*>([\s\S]*?)<\/h1>/);
    let rawTitle = "TelehealthFX Article";
    if (titleMatch) {
      rawTitle = titleMatch[1].replace(/<[^>]+>/g, '').replace(/\n/g, ' ').trim();
    }

    const schema = {
      "@context": "https://schema.org",
      "@type": "MedicalWebPage",
      "name": rawTitle,
      "author": {
        "@type": "Person",
        "name": "Julian Mercer, M.S.",
        "url": "https://telehealthfx.com/about"
      },
      "publisher": {
        "@type": "Organization",
        "name": "TelehealthFX",
        "logo": {
          "@type": "ImageObject",
          "url": "https://telehealthfx.com/assets/logo.png"
        }
      }
    };
    
    const schemaString = JSON.stringify(schema);
    const headBlock = `\n      <Head>\n        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: \`${schemaString}\` }} />\n      </Head>\n`;
    content = content.replace(/return\s*\(\s*<section/, `return (\n    <>\n${headBlock}      <section`);
    // Close the fragment at the end
    content = content.replace(/<\/section>\s*\);\s*}/, '</section>\n    </>\n  );\n}');
  }

  // 6. Internal Linking (Basic heuristic: only replace the first occurrence outside of tags)
  // To avoid breaking JSX, we do very simple string replacements only if they aren't already linked
  for (const link of internalLinks) {
    const aTag = `<a href="${link.slug}" style={{ color: 'var(--brand)', textDecoration: 'underline', fontWeight: 500 }}>${link.keyword}</a>`;
    // Only replace if it is preceded by a space and followed by space/punctuation, and NOT already in an a tag or href
    const regex = new RegExp(`(?<!href=["'])(?<!>)\\b${link.keyword}\\b(?!<\\/a>)`, 'i');
    if (regex.test(content) && !content.includes(`href="${link.slug}"`)) {
      content = content.replace(regex, aTag);
    }
  }

  fs.writeFileSync(path.join(baseDir, file), content, 'utf8');
}
console.log('SEO Refactor Complete');
