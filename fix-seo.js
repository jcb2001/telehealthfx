#!/usr/bin/env node
/**
 * fix-seo.js — TelehealthFX GSC Indexing Fix Script
 * 
 * 1. Regenerates sitemap.xml with trailing slashes (matching trailingSlash: true)
 * 2. Injects server-side canonical URLs into all page.js metadata exports
 * 3. Discovers all pages from source directories for complete sitemap coverage
 */

const fs = require('fs');
const path = require('path');

const SITE_ROOT = 'https://telehealthfx.com';
const SRC_APP = path.join(__dirname, 'src', 'app');
const SITEMAP_PATH = path.join(__dirname, 'public', 'sitemap.xml');
const NOW = new Date().toISOString();

// ============================================================
// PART 1: Regenerate sitemap.xml with trailing slashes
// ============================================================

function getAllPages() {
  const pages = [];

  // Core pages (homepage)
  pages.push({ path: '/', priority: '1.0', changefreq: 'daily' });

  // Generic [slug] pages
  const genericPages = ['how', 'medications', 'results', 'science', 'pricing', 'faq'];
  const contentPages = [
    'affiliate-disclosure', 'privacy', 'terms', 'telehealth-consent', 'hipaa',
    'accessibility', 'about', 'careers', 'press', 'partners', 'contact',
    'help-center', 'shipping', 'returns', 'insurance', 'status'
  ];

  [...genericPages].forEach(slug => {
    pages.push({ path: `/${slug}/`, priority: '0.8', changefreq: 'weekly' });
  });

  [...contentPages].forEach(slug => {
    pages.push({ path: `/${slug}/`, priority: '0.8', changefreq: 'weekly' });
  });

  // Medication sub-pages
  const medsDir = path.join(SRC_APP, 'medications');
  if (fs.existsSync(medsDir)) {
    fs.readdirSync(medsDir).forEach(entry => {
      const fullPath = path.join(medsDir, entry);
      if (fs.statSync(fullPath).isDirectory()) {
        pages.push({ path: `/medications/${entry}/`, priority: '0.8', changefreq: 'weekly' });
      }
    });
  }

  // Blog pages
  const blogDir = path.join(SRC_APP, 'blog');
  if (fs.existsSync(blogDir)) {
    // Blog index
    pages.push({ path: '/blog/', priority: '0.8', changefreq: 'daily' });

    fs.readdirSync(blogDir).forEach(entry => {
      const fullPath = path.join(blogDir, entry);
      if (fs.statSync(fullPath).isDirectory()) {
        pages.push({ path: `/blog/${entry}/`, priority: '0.9', changefreq: 'weekly' });
      }
    });
  }

  // Location pages
  const locDir = path.join(SRC_APP, 'locations');
  if (fs.existsSync(locDir)) {
    fs.readdirSync(locDir).forEach(entry => {
      const fullPath = path.join(locDir, entry);
      if (fs.statSync(fullPath).isDirectory()) {
        pages.push({ path: `/locations/${entry}/`, priority: '0.9', changefreq: 'weekly' });
      }
    });
  }

  return pages;
}

function generateSitemap(pages) {
  let xml = `<?xml version='1.0' encoding='UTF-8'?>\n`;
  xml += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;

  pages.forEach(page => {
    xml += `\t<url>\n`;
    xml += `\t\t<loc>${SITE_ROOT}${page.path}</loc>\n`;
    xml += `\t\t<lastmod>${NOW}</lastmod>\n`;
    xml += `\t\t<changefreq>${page.changefreq}</changefreq>\n`;
    xml += `\t\t<priority>${page.priority}</priority>\n`;
    xml += `\t</url>\n`;
  });

  xml += `</urlset>\n`;
  return xml;
}

// ============================================================
// PART 2: Inject canonical URLs into page.js metadata
// ============================================================

function injectCanonical(filePath, canonicalUrl) {
  let content = fs.readFileSync(filePath, 'utf-8');

  // Check if canonical is already set
  if (content.includes('alternates') && content.includes('canonical')) {
    if (canonicalUrl === 'dynamic') {
      if (content.includes('canonical: `https://telehealthfx.com/${slug}/`')) {
        return false;
      }
    } else {
      const canonicalMatch = content.match(/canonical:\s*['"`]([^'"`]+)['"`]/);
      if (canonicalMatch) {
        if (canonicalMatch[1] === canonicalUrl) {
          return false;
        }
        // Update existing mismatched canonical
        content = content.replace(canonicalMatch[0], `canonical: '${canonicalUrl}'`);
        fs.writeFileSync(filePath, content, 'utf-8');
        return true;
      }
    }
    console.log(`  ⏭  Already has canonical: ${filePath}`);
    return false;
  }

  // Pattern 1: Static metadata export with openGraph
  // Insert alternates after the openGraph block or after description
  if (content.includes('export const metadata')) {
    // Check if there's an openGraph property
    if (content.includes('openGraph:')) {
      // Insert alternates before the closing of metadata object
      // Find the last closing brace+semicolon pattern for the metadata export
      const metadataMatch = content.match(/export const metadata\s*=\s*\{/);
      if (metadataMatch) {
        // Find the position after 'export const metadata = {'
        const startIdx = metadataMatch.index + metadataMatch[0].length;
        // Insert alternates right after the opening brace
        const insertStr = `\n  alternates: {\n    canonical: '${canonicalUrl}',\n  },`;
        content = content.slice(0, startIdx) + insertStr + content.slice(startIdx);
      }
    } else {
      // Simple metadata without openGraph — insert after description line
      const descMatch = content.match(/(description:\s*[`"'].*?[`"'],?\s*\n)/s);
      if (descMatch) {
        const insertAfter = descMatch.index + descMatch[0].length;
        const insertStr = `  alternates: {\n    canonical: '${canonicalUrl}',\n  },\n`;
        content = content.slice(0, insertAfter) + insertStr + content.slice(insertAfter);
      }
    }
  }

  // Pattern 2: generateMetadata function (for [slug] pages)
  if (content.includes('generateMetadata')) {
    // Insert alternates into the return object
    const returnMatch = content.match(/(return\s*\{\s*\n\s*title:\s*seoData\.title,\s*\n\s*description:\s*seoData\.desc\s*\n\s*\})/);
    if (returnMatch) {
      const replacement = `return {\n    title: seoData.title,\n    description: seoData.desc,\n    alternates: {\n      canonical: \`https://telehealthfx.com/\${slug}/\`,\n    }\n  }`;
      content = content.replace(returnMatch[0], replacement);
    }
  }

  fs.writeFileSync(filePath, content, 'utf-8');
  return true;
}

function processAllPages() {
  let fixedCount = 0;

  // 1. Homepage
  const homePage = path.join(SRC_APP, 'page.js');
  if (fs.existsSync(homePage)) {
    let content = fs.readFileSync(homePage, 'utf-8');
    if (!content.includes('alternates')) {
      // Homepage doesn't have a metadata export — add one
      if (!content.includes('export const metadata')) {
        const insertBefore = content.indexOf('export default');
        const metadataBlock = `export const metadata = {\n  alternates: {\n    canonical: '${SITE_ROOT}/',\n  },\n};\n\n`;
        content = content.slice(0, insertBefore) + metadataBlock + content.slice(insertBefore);
        fs.writeFileSync(homePage, content, 'utf-8');
        console.log(`  ✅ Homepage canonical added`);
        fixedCount++;
      }
    }
  }

  // 2. Blog index
  const blogIndex = path.join(SRC_APP, 'blog', 'page.js');
  if (fs.existsSync(blogIndex)) {
    if (injectCanonical(blogIndex, `${SITE_ROOT}/blog/`)) {
      console.log(`  ✅ Blog index canonical added`);
      fixedCount++;
    }
  }

  // 3. All blog article pages
  const blogDir = path.join(SRC_APP, 'blog');
  fs.readdirSync(blogDir).forEach(entry => {
    const pageFile = path.join(blogDir, entry, 'page.js');
    if (fs.existsSync(pageFile)) {
      if (injectCanonical(pageFile, `${SITE_ROOT}/blog/${entry}/`)) {
        console.log(`  ✅ Blog canonical: /blog/${entry}/`);
        fixedCount++;
      }
    }
  });

  // 4. All location pages
  const locDir = path.join(SRC_APP, 'locations');
  if (fs.existsSync(locDir)) {
    fs.readdirSync(locDir).forEach(entry => {
      const pageFile = path.join(locDir, entry, 'page.js');
      if (fs.existsSync(pageFile)) {
        if (injectCanonical(pageFile, `${SITE_ROOT}/locations/${entry}/`)) {
          console.log(`  ✅ Location canonical: /locations/${entry}/`);
          fixedCount++;
        }
      }
    });
  }

  // 5. About page (standalone)
  const aboutPage = path.join(SRC_APP, 'about', 'page.js');
  if (fs.existsSync(aboutPage)) {
    if (injectCanonical(aboutPage, `${SITE_ROOT}/about/`)) {
      console.log(`  ✅ About page canonical added`);
      fixedCount++;
    }
  }

  // 6. [slug] dynamic pages (generateMetadata)
  const slugPage = path.join(SRC_APP, '[slug]', 'page.js');
  if (fs.existsSync(slugPage)) {
    if (injectCanonical(slugPage, 'dynamic')) {
      console.log(`  ✅ [slug] dynamic canonical added`);
      fixedCount++;
    }
  }

  // 7. Medication sub-pages
  const medsDir = path.join(SRC_APP, 'medications');
  if (fs.existsSync(medsDir)) {
    fs.readdirSync(medsDir).forEach(entry => {
      const pageFile = path.join(medsDir, entry, 'page.js');
      if (fs.existsSync(pageFile)) {
        if (injectCanonical(pageFile, `${SITE_ROOT}/medications/${entry}/`)) {
          console.log(`  ✅ Medication canonical: /medications/${entry}/`);
          fixedCount++;
        }
      }
    });
  }

  return fixedCount;
}

// ============================================================
// MAIN
// ============================================================

console.log('\n🔧 TelehealthFX SEO Fix Script\n');
console.log('━'.repeat(50));

// Step 1: Generate sitemap
console.log('\n📍 Step 1: Regenerating sitemap.xml with trailing slashes...\n');
const pages = getAllPages();
const sitemap = generateSitemap(pages);
fs.writeFileSync(SITEMAP_PATH, sitemap, 'utf-8');
console.log(`  ✅ Sitemap generated with ${pages.length} URLs (all with trailing slashes)`);

// Step 2: Inject canonicals
console.log('\n📍 Step 2: Injecting server-side canonical URLs...\n');
const fixedCount = processAllPages();
console.log(`\n  ✅ Fixed ${fixedCount} pages`);

console.log('\n━'.repeat(50));
console.log('\n✅ All SEO fixes applied! Next steps:');
console.log('   1. Run: npm run build');
console.log('   2. Deploy the updated /out directory');
console.log('   3. Resubmit sitemap in Google Search Console');
console.log('   4. Request re-validation of the indexing issues\n');
