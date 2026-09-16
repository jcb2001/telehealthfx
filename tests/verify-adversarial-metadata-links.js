#!/usr/bin/env node

/**
 * Adversarial Metadata & Link Verification Suite
 * Challenger 1 — Empirical Verification Agent
 */

const fs = require('fs');
const path = require('path');

const projectRoot = path.resolve(__dirname, '..');
const siteRoot = path.join(projectRoot, 'Telehealth FX Site');
const outDir = path.join(siteRoot, 'out');
const srcAppDir = path.join(siteRoot, 'src', 'app');
const srcCompDir = path.join(siteRoot, 'src', 'components');

// -----------------------------------------------------------------------------
// Arial Standard AFM Font Metrics (Width in units per 1000em)
// -----------------------------------------------------------------------------
const ARIAL_METRICS = {
  ' ': 278, '!': 278, '"': 355, '#': 556, '$': 556, '%': 889, '&': 667, "'": 222,
  '(': 333, ')': 333, '*': 389, '+': 584, ',': 278, '-': 333, '.': 278, '/': 278,
  '0': 556, '1': 556, '2': 556, '3': 556, '4': 556, '5': 556, '6': 556, '7': 556, '8': 556, '9': 556,
  ':': 278, ';': 278, '<': 584, '=': 584, '>': 584, '?': 556, '@': 1015,
  'A': 667, 'B': 667, 'C': 722, 'D': 722, 'E': 667, 'F': 611, 'G': 778, 'H': 722,
  'I': 278, 'J': 500, 'K': 667, 'L': 556, 'M': 833, 'N': 722, 'O': 778, 'P': 667,
  'Q': 778, 'R': 722, 'S': 667, 'T': 611, 'U': 722, 'V': 667, 'W': 944, 'X': 667,
  'Y': 667, 'Z': 611, '[': 278, '\\': 278, ']': 278, '^': 469, '_': 556, '`': 333,
  'a': 556, 'b': 556, 'c': 500, 'd': 556, 'e': 556, 'f': 278, 'g': 556, 'h': 556,
  'i': 222, 'j': 222, 'k': 500, 'l': 222, 'm': 833, 'n': 556, 'o': 556, 'p': 556,
  'q': 556, 'r': 333, 's': 500, 't': 278, 'u': 556, 'v': 500, 'w': 722, 'x': 500,
  'y': 500, 'z': 500, '{': 334, '|': 260, '}': 334, '~': 584,
  '—': 1000, '–': 500, '’': 222, '‘': 222, '“': 355, '”': 355, '•': 400, '…': 1000
};

function calculatePixelWidth(str, fontSize) {
  if (!str) return 0;
  let totalUnits = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    const units = ARIAL_METRICS[char] !== undefined ? ARIAL_METRICS[char] : 556;
    totalUnits += units;
  }
  return (totalUnits / 1000) * fontSize;
}

function calculateTitlePixels(title) {
  // Google SERP Title: Arial 20px
  return Math.round(calculatePixelWidth(title, 20));
}

function calculateDescriptionPixels(desc) {
  // Google SERP Description: Arial 14px
  return Math.round(calculatePixelWidth(desc, 14));
}

// -----------------------------------------------------------------------------
// Target / Modified Pages Inventory
// -----------------------------------------------------------------------------
const TARGET_ROUTES = [
  { id: 'careers-salesperson', route: '/careers/glp-1-weight-loss-salesperson/' },
  { id: 'blog-compounded-after-hims-ro', route: '/blog/compounded-semaglutide-after-hims-ro-2026/' },
  { id: 'blog-coptis-chinensis', route: '/blog/coptis-chinensis-vs-berberis-vulgaris-botanical-sources/' },
  { id: 'blog-brand-vs-compounded-cost', route: '/blog/brand-vs-compounded-glp1-cost-2026/' },
  { id: 'blog-best-online-trt-clinics', route: '/blog/best-online-trt-clinics-2026/' },
  { id: 'blog-glp1-travel-guide', route: '/blog/glp1-travel-guide-2026/' },
  { id: 'blog-glp1-and-coffee', route: '/blog/glp1-and-coffee-caffeine-2026/' },
  { id: 'blog-trt-honeymoon-phase', route: '/blog/trt-honeymoon-phase-2026/' },
  { id: 'blog-hidden-fees', route: '/blog/hidden-fees-in-telehealth-weight-loss-how-to-spot/' },
  { id: 'blog-hims-vs-ro', route: '/blog/hims-vs-ro-vs-telehealthfx-2026/' },
  { id: 'blog-wegovy-fda-label', route: '/blog/wegovy-fda-label/' },
  // Programmatic metro pages touched in M4
  { id: 'location-milwaukee', route: '/locations/milwaukee/' },
  { id: 'location-albuquerque', route: '/locations/albuquerque/' },
  { id: 'location-baltimore', route: '/locations/baltimore/' },
  { id: 'trt-milwaukee', route: '/trt/milwaukee/' },
  { id: 'weight-loss-milwaukee', route: '/weight-loss/milwaukee/' },
  { id: 'weight-loss-denver', route: '/weight-loss/denver/' },
  { id: 'weight-loss-dallas', route: '/weight-loss/dallas/' },
  { id: 'weight-loss-indianapolis', route: '/weight-loss/indianapolis/' },
];

// Helper: Walk directory for specific extensions
function walkFiles(dir, filterExts = ['.html']) {
  let results = [];
  if (!fs.existsSync(dir)) return results;
  const list = fs.readdirSync(dir);
  for (const item of list) {
    const full = path.join(dir, item);
    const stat = fs.statSync(full);
    if (stat.isDirectory()) {
      results = results.concat(walkFiles(full, filterExts));
    } else if (filterExts.some(ext => item.endsWith(ext))) {
      results.push(full);
    }
  }
  return results;
}

// -----------------------------------------------------------------------------
// HTML Metadata Extraction
// -----------------------------------------------------------------------------
function extractMetadataFromHtml(htmlContent, filePath) {
  const titleMatch = htmlContent.match(/<title>([^<]*)<\/title>/i);
  const descMatch = htmlContent.match(/<meta\s+name=["']description["']\s+content=["']([^"']*)["']/i) ||
                    htmlContent.match(/<meta\s+content=["']([^"']*)["']\s+name=["']description["']/i);
  const canonicalMatch = htmlContent.match(/<link\s+rel=["']canonical["']\s+href=["']([^"']*)["']/i) ||
                         htmlContent.match(/<link\s+href=["']([^"']*)["']\s+rel=["']canonical["']/i);

  const title = titleMatch ? titleMatch[1].trim() : null;
  const description = descMatch ? descMatch[1].trim() : null;
  const canonical = canonicalMatch ? canonicalMatch[1].trim() : null;

  return { filePath, title, description, canonical };
}

// -----------------------------------------------------------------------------
// Link Extraction from HTML and JSX Source
// -----------------------------------------------------------------------------
function extractLinksFromHtml(htmlContent, htmlPath) {
  const links = [];
  // match <a ... href="..."
  const aRegex = /<a\s+[^>]*?href=["']([^"']+)["']/gi;
  let match;
  while ((match = aRegex.exec(htmlContent)) !== null) {
    links.push({ type: 'a', href: match[1], file: htmlPath });
  }
  return links;
}

function extractLinksFromJsx(sourceContent, sourcePath) {
  const links = [];
  // match <Link ... href="..." or href={'...'} or href={"..."}
  const linkRegex = /<Link\s+[^>]*?href=(?:\{["']([^"']+)["']\}|["']([^"']+)["'])/gi;
  let match;
  while ((match = linkRegex.exec(sourceContent)) !== null) {
    const href = match[1] || match[2];
    links.push({ type: 'Link', href, file: sourcePath });
  }
  // match <a ... href="..."
  const aRegex = /<a\s+[^>]*?href=(?:\{["']([^"']+)["']\}|["']([^"']+)["'])/gi;
  while ((match = aRegex.exec(sourceContent)) !== null) {
    const href = match[1] || match[2];
    links.push({ type: 'a', href, file: sourcePath });
  }
  return links;
}

// -----------------------------------------------------------------------------
// MAIN ADVERSARIAL EXECUTION
// -----------------------------------------------------------------------------

console.log('='.repeat(80));
console.log('CHALLENGER 1: ADVERSARIAL METADATA & LINK EMPIRICAL STRESS TEST');
console.log('='.repeat(80));

const allHtmlFiles = walkFiles(outDir, ['.html']);
console.log(`\nDiscovered ${allHtmlFiles.length} generated static HTML pages in out/`);

// 1. Stress Test Target / Modified Pages
console.log('\n--- SECTION 1: TARGET / MODIFIED PAGES METADATA STRESS TEST ---');
const targetAuditResults = [];

for (const target of TARGET_ROUTES) {
  const cleanRoute = target.route.replace(/^\//, '').replace(/\/$/, '');
  let htmlPath = path.join(outDir, cleanRoute, 'index.html');
  if (!fs.existsSync(htmlPath)) {
    htmlPath = path.join(outDir, `${cleanRoute}.html`);
  }

  if (!fs.existsSync(htmlPath)) {
    targetAuditResults.push({
      ...target,
      status: 'MISSING_HTML',
      htmlPath,
    });
    continue;
  }

  const htmlContent = fs.readFileSync(htmlPath, 'utf8');
  const meta = extractMetadataFromHtml(htmlContent, htmlPath);

  const titleLen = meta.title ? meta.title.length : 0;
  const descLen = meta.description ? meta.description.length : 0;
  const titlePx = meta.title ? calculateTitlePixels(meta.title) : 0;
  const descPx = meta.description ? calculateDescriptionPixels(meta.description) : 0;

  const titleCharPass = titleLen >= 50 && titleLen <= 60;
  const descCharPass = descLen >= 145 && descLen <= 160;
  const titlePxPass = titlePx <= 580;
  const descPxPass = descPx <= 960;

  targetAuditResults.push({
    ...target,
    title: meta.title,
    titleLen,
    titlePx,
    titleCharPass,
    titlePxPass,
    description: meta.description,
    descLen,
    descPx,
    descCharPass,
    descPxPass,
    canonical: meta.canonical,
  });
}

let targetFailures = 0;
for (const r of targetAuditResults) {
  console.log(`\nRoute: ${r.route} (${r.id})`);
  if (r.status === 'MISSING_HTML') {
    console.log(`  ❌ FAIL: Missing generated HTML file at ${r.htmlPath}`);
    targetFailures++;
    continue;
  }

  const tSym = (r.titleCharPass && r.titlePxPass) ? '✔' : '❌';
  console.log(`  ${tSym} Title (${r.titleLen} chars, ${r.titlePx}px): "${r.title}"`);
  if (!r.titleCharPass) {
    console.log(`     -> VIOLATES [50..60] chars limit! (delta: ${r.titleLen < 50 ? r.titleLen - 50 : '+' + (r.titleLen - 60)})`);
    targetFailures++;
  }
  if (!r.titlePxPass) {
    console.log(`     -> EXCEEDS 580px limit! (delta: +${r.titlePx - 580}px)`);
    targetFailures++;
  }

  const dSym = (r.descCharPass && r.descPxPass) ? '✔' : '❌';
  console.log(`  ${dSym} Desc (${r.descLen} chars, ${r.descPx}px): "${r.description}"`);
  if (!r.descCharPass) {
    console.log(`     -> VIOLATES [145..160] chars limit! (delta: ${r.descLen < 145 ? r.descLen - 145 : '+' + (r.descLen - 160)})`);
    targetFailures++;
  }
  if (!r.descPxPass) {
    console.log(`     -> EXCEEDS 960px limit! (delta: +${r.descPx - 960}px)`);
    targetFailures++;
  }
}

// 2. Global Static Out/ Stress Test (All 471 Pages)
console.log('\n--- SECTION 2: GLOBAL STATIC OUT/ STRESS TEST (ALL 471 PAGES) ---');
const globalStats = {
  total: allHtmlFiles.length,
  missingTitle: 0,
  titleOutside50_60: 0,
  titleExceeds580px: 0,
  missingDesc: 0,
  descOutside145_160: 0,
  descExceeds960px: 0,
  detailsTitleExceeds580: [],
  detailsDescExceeds960: [],
  detailsTitleOutside50_60: [],
  detailsDescOutside145_160: []
};

for (const f of allHtmlFiles) {
  const content = fs.readFileSync(f, 'utf8');
  const meta = extractMetadataFromHtml(content, f);
  const rel = path.relative(outDir, f);

  if (!meta.title) {
    globalStats.missingTitle++;
  } else {
    const len = meta.title.length;
    const px = calculateTitlePixels(meta.title);
    if (len < 50 || len > 60) {
      globalStats.titleOutside50_60++;
      globalStats.detailsTitleOutside50_60.push({ file: rel, len, px, title: meta.title });
    }
    if (px > 580) {
      globalStats.titleExceeds580px++;
      globalStats.detailsTitleExceeds580.push({ file: rel, len, px, title: meta.title });
    }
  }

  if (!meta.description) {
    globalStats.missingDesc++;
  } else {
    const len = meta.description.length;
    const px = calculateDescriptionPixels(meta.description);
    if (len < 145 || len > 160) {
      globalStats.descOutside145_160++;
      globalStats.detailsDescOutside145_160.push({ file: rel, len, px, desc: meta.description });
    }
    if (px > 960) {
      globalStats.descExceeds960px++;
      globalStats.detailsDescExceeds960.push({ file: rel, len, px, desc: meta.description });
    }
  }
}

console.log(`Global Pages Scanned: ${globalStats.total}`);
console.log(`Titles outside [50..60] chars: ${globalStats.titleOutside50_60} / ${globalStats.total}`);
console.log(`Titles exceeding 580px: ${globalStats.titleExceeds580px} / ${globalStats.total}`);
console.log(`Descriptions outside [145..160] chars: ${globalStats.descOutside145_160} / ${globalStats.total}`);
console.log(`Descriptions exceeding 960px: ${globalStats.descExceeds960px} / ${globalStats.total}`);

// 3. Adversarial Internal Links Stress Test
console.log('\n--- SECTION 3: ADVERSARIAL INTERNAL LINKS STRESS TEST ---');
// Extract links from all modified files and their components
const modifiedFiles = [
  'src/app/careers/glp-1-weight-loss-salesperson/page.js',
  'src/app/careers/page.js',
  'src/components/careers-salesperson-client.jsx',
  'src/components/botanical-glp1-comparison.jsx',
  'src/components/direct-answer-snippet.jsx',
  'src/app/blog/compounded-semaglutide-after-hims-ro-2026/page.js',
  'src/components/blog-compounded-semaglutide-after-hims-ro-2026.jsx',
  'src/app/blog/coptis-chinensis-vs-berberis-vulgaris-botanical-sources/page.js',
  'src/components/blog-coptis-chinensis.jsx',
  'src/app/blog/brand-vs-compounded-glp1-cost-2026/page.js',
  'src/components/blog-brand-vs-compounded-glp1-cost-2026.jsx',
  'src/app/blog/best-online-trt-clinics-2026/page.js',
  'src/components/best-online-trt-clinics-2026.jsx',
  'src/app/blog/glp1-travel-guide-2026/page.js',
  'src/components/blog-glp1-travel-guide-2026.jsx',
  'src/app/blog/glp1-and-coffee-caffeine-2026/page.js',
  'src/components/blog-glp1-and-coffee-caffeine-2026.jsx',
  'src/app/blog/trt-honeymoon-phase-2026/page.js',
  'src/components/blog-trt-honeymoon-phase-2026.jsx',
  'src/app/blog/hidden-fees-in-telehealth-weight-loss-how-to-spot/page.js',
  'src/components/blog-hidden-fees-in-telehealth-weight-loss-how-to-spot.jsx',
  'src/app/blog/hims-vs-ro-vs-telehealthfx-2026/page.js',
  'src/components/blog-hims-vs-ro-vs-telehealthfx-2026.jsx',
  'src/app/blog/wegovy-fda-label/page.js',
  'src/components/blog-wegovy-fda-label.jsx',
  'src/app/locations/milwaukee/page.js',
  'src/app/locations/albuquerque/page.js',
  'src/app/locations/baltimore/page.js',
  'src/app/trt/milwaukee/page.js',
  'src/app/weight-loss/milwaukee/page.js',
  'src/app/weight-loss/denver/page.js',
  'src/app/weight-loss/dallas/page.js',
  'src/app/weight-loss/indianapolis/page.js'
];

const internalLinkResults = {
  totalLinksFound: 0,
  internalLinksFound: 0,
  externalLinksFound: 0,
  missingTrailingSlash: [],
  brokenDestination: [],
};

for (const relFile of modifiedFiles) {
  const fullPath = path.join(siteRoot, relFile);
  if (!fs.existsSync(fullPath)) continue;
  const content = fs.readFileSync(fullPath, 'utf8');
  const links = extractLinksFromJsx(content, relFile);

  for (const link of links) {
    internalLinkResults.totalLinksFound++;
    const href = link.href.trim();

    // Check if internal
    const isInternal = href.startsWith('/') && !href.startsWith('//');
    if (!isInternal) {
      internalLinkResults.externalLinksFound++;
      continue;
    }

    internalLinkResults.internalLinksFound++;
    const cleanHref = href.split('?')[0].split('#')[0];
    const hasExt = Boolean(path.extname(cleanHref));

    // Trailing slash test
    if (cleanHref !== '/' && !cleanHref.endsWith('/') && !hasExt) {
      internalLinkResults.missingTrailingSlash.push({
        file: relFile,
        type: link.type,
        href,
        cleanHref,
      });
    }

    // Static HTML page existence test in out/
    const routePath = cleanHref.replace(/^\//, '').replace(/\/$/, '');
    const directIndexPath = path.join(outDir, routePath, 'index.html');
    const directHtmlPath = path.join(outDir, `${routePath}.html`);
    const rootIndexPath = path.join(outDir, 'index.html');

    const existsInStaticOut = (cleanHref === '/' && fs.existsSync(rootIndexPath)) ||
                              fs.existsSync(directIndexPath) ||
                              fs.existsSync(directHtmlPath);

    if (!existsInStaticOut && !hasExt) {
      internalLinkResults.brokenDestination.push({
        file: relFile,
        type: link.type,
        href,
        testedPath: directIndexPath,
      });
    }
  }
}

console.log(`Total <Link> and <a> tags in modified files: ${internalLinkResults.totalLinksFound}`);
console.log(`Internal links inspected: ${internalLinkResults.internalLinksFound}`);
console.log(`External links inspected: ${internalLinkResults.externalLinksFound}`);

console.log(`\nInternal Links Missing Trailing Slash: ${internalLinkResults.missingTrailingSlash.length}`);
for (const m of internalLinkResults.missingTrailingSlash) {
  console.log(`  ❌ ${m.type} href="${m.href}" in ${m.file} (Missing trailing slash -> triggers 308 redirect)`);
}

console.log(`\nBroken Destination URLs (Not in out/): ${internalLinkResults.brokenDestination.length}`);
for (const b of internalLinkResults.brokenDestination) {
  console.log(`  ❌ ${b.type} href="${b.href}" in ${b.file} (Does not exist as static page in out/)`);
}

// 4. Extract All Rendered <a> Tags from the Generated HTML of Modified Pages
console.log('\n--- SECTION 4: RENDERED HTML <a> TAG AUDIT (CLIENT-SIDE / SERVER-SIDE) ---');
const renderedHtmlLinkIssues = [];

for (const target of TARGET_ROUTES) {
  const cleanRoute = target.route.replace(/^\//, '').replace(/\/$/, '');
  const htmlPath = path.join(outDir, cleanRoute, 'index.html');
  if (!fs.existsSync(htmlPath)) continue;

  const content = fs.readFileSync(htmlPath, 'utf8');
  const links = extractLinksFromHtml(content, path.relative(outDir, htmlPath));

  for (const link of links) {
    const href = link.href.trim();
    if (href.startsWith('/') && !href.startsWith('//')) {
      const cleanHref = href.split('?')[0].split('#')[0];
      const hasExt = Boolean(path.extname(cleanHref));
      if (cleanHref !== '/' && !cleanHref.endsWith('/') && !hasExt) {
        renderedHtmlLinkIssues.push({
          htmlFile: link.file,
          href,
          issue: 'MISSING_TRAILING_SLASH'
        });
      }
      const routePath = cleanHref.replace(/^\//, '').replace(/\/$/, '');
      const directIndexPath = path.join(outDir, routePath, 'index.html');
      const directHtmlPath = path.join(outDir, `${routePath}.html`);
      const rootIndexPath = path.join(outDir, 'index.html');
      const exists = (cleanHref === '/' && fs.existsSync(rootIndexPath)) ||
                     fs.existsSync(directIndexPath) ||
                     fs.existsSync(directHtmlPath);
      if (!exists && !hasExt) {
        renderedHtmlLinkIssues.push({
          htmlFile: link.file,
          href,
          issue: 'PAGE_NOT_FOUND_IN_OUT'
        });
      }
    }
  }
}

console.log(`Rendered HTML link issues found in target pages: ${renderedHtmlLinkIssues.length}`);
for (const issue of renderedHtmlLinkIssues) {
  console.log(`  ❌ ${issue.issue}: href="${issue.href}" in ${issue.htmlFile}`);
}

console.log('\n' + '='.repeat(80));
console.log('ADVERSARIAL STRESS TEST SUMMARY');
console.log('='.repeat(80));
console.log(`Target Page Metadata Failures: ${targetFailures}`);
console.log(`Source Code Missing Trailing Slash Links: ${internalLinkResults.missingTrailingSlash.length}`);
console.log(`Source Code Broken Destination Links: ${internalLinkResults.brokenDestination.length}`);
console.log(`Rendered HTML Link Issues: ${renderedHtmlLinkIssues.length}`);
console.log('='.repeat(80));
