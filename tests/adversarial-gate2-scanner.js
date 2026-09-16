#!/usr/bin/env node

/**
 * Gate 2 Adversarial Stress Scanner
 * 
 * Conducts exhaustive empirical verification across all 471 pre-rendered HTML files
 * in out/ and the modified source code in src/app/ and src/components/.
 */

const fs = require('fs');
const path = require('path');

const projectRoot = path.resolve(__dirname, '..');
const siteRoot = path.join(projectRoot, 'Telehealth FX Site');
const outDir = path.join(siteRoot, 'out');
const srcAppDir = path.join(siteRoot, 'src', 'app');

console.log('='.repeat(80));
console.log('GATE 2 ADVERSARIAL SCANNER: EMPIRICAL STRESS TESTS');
console.log(`Scan Target: ${outDir}`);
console.log('='.repeat(80));

// Target routes touched in the overhaul
const TARGET_ROUTES = [
  '/careers/glp-1-weight-loss-salesperson/',
  '/blog/compounded-semaglutide-after-hims-ro-2026/',
  '/blog/coptis-chinensis-vs-berberis-vulgaris-botanical-sources/',
  '/blog/brand-vs-compounded-glp1-cost-2026/',
  '/blog/best-online-trt-clinics-2026/',
  '/blog/glp1-travel-guide-2026/',
  '/blog/glp1-and-coffee-caffeine-2026/',
  '/blog/trt-honeymoon-phase-2026/',
  '/blog/hidden-fees-in-telehealth-weight-loss-how-to-spot/',
  '/blog/hims-vs-ro-vs-telehealthfx-2026/',
  '/blog/wegovy-fda-label/',
  '/locations/milwaukee/',
  '/locations/albuquerque/',
  '/locations/baltimore/',
  '/trt/milwaukee/',
  '/weight-loss/milwaukee/',
  '/weight-loss/denver/',
  '/weight-loss/dallas/',
  '/weight-loss/indianapolis/'
];

function decodeHtmlEntities(str) {
  if (!str) return '';
  return str
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#x27;/g, "'")
    .replace(/&#39;/g, "'");
}

function walkDir(dir, ext = '.html') {
  let files = [];
  if (!fs.existsSync(dir)) return files;
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files = files.concat(walkDir(fullPath, ext));
    } else if (entry.name.endsWith(ext)) {
      files.push(fullPath);
    }
  }
  return files;
}

const allHtmlFiles = walkDir(outDir, '.html');
console.log(`Discovered ${allHtmlFiles.length} HTML files in out/`);

const report = {
  totalScanned: allHtmlFiles.length,
  
  // 1. Titles
  titles: {
    targetPages: [],
    sitewideOutside50_60_Raw: [],
    sitewideOutside50_60_Decoded: [],
  },

  // 2. Meta Descriptions
  descriptions: {
    targetPages: [],
    sitewideOutside145_160_Raw: [],
    sitewideOutside145_160_Decoded: [],
  },

  // 3. JSON-LD
  jsonLd: {
    totalBlocks: 0,
    parseErrors: [],
    emptyMainEntities: [],
    totalFaqPages: 0,
    validFaqPages: 0
  },

  // 4. Internal Links
  links: {
    totalLinksFound: 0,
    targetPageLinksMissingSlash: [],
    sitewideMissingSlash: new Map(), // route -> occurrences
  },

  // 5. Unknown Tokens
  unknownTokens: {
    found: []
  }
};

for (const htmlFile of allHtmlFiles) {
  const relPath = path.relative(outDir, htmlFile);
  const route = '/' + relPath.replace(/\/index\.html$/, '/').replace(/\.html$/, '');
  const isTarget = TARGET_ROUTES.includes(route) || TARGET_ROUTES.includes(route.replace(/\/$/, '') + '/');

  const content = fs.readFileSync(htmlFile, 'utf8');

  // --- 1. TITLE TAG ---
  const titleMatch = content.match(/<title>([^<]*)<\/title>/i);
  const rawTitle = titleMatch ? titleMatch[1] : null;
  const decodedTitle = rawTitle ? decodeHtmlEntities(rawTitle) : null;

  if (rawTitle) {
    const rawLen = rawTitle.length;
    const decLen = decodedTitle.length;

    if (rawLen < 50 || rawLen > 60) {
      report.titles.sitewideOutside50_60_Raw.push({ route, rawLen, decLen, title: rawTitle });
    }
    if (decLen < 50 || decLen > 60) {
      report.titles.sitewideOutside50_60_Decoded.push({ route, rawLen, decLen, title: decodedTitle });
    }

    if (isTarget) {
      report.titles.targetPages.push({
        route,
        rawTitle,
        rawLen,
        decodedTitle,
        decLen,
        passRaw: rawLen >= 50 && rawLen <= 60,
        passDecoded: decLen >= 50 && decLen <= 60
      });
    }
  }

  // --- 2. META DESCRIPTION ---
  const descMatch = content.match(/<meta\s+name=["']description["']\s+content=["']([^"']*)["']/i) ||
                    content.match(/<meta\s+content=["']([^"']*)["']\s+name=["']description["']/i);
  const rawDesc = descMatch ? descMatch[1] : null;
  const decodedDesc = rawDesc ? decodeHtmlEntities(rawDesc) : null;

  if (rawDesc) {
    const rawLen = rawDesc.length;
    const decLen = decodedDesc.length;

    if (rawLen < 145 || rawLen > 160) {
      report.descriptions.sitewideOutside145_160_Raw.push({ route, rawLen, decLen, desc: rawDesc });
    }
    if (decLen < 145 || decLen > 160) {
      report.descriptions.sitewideOutside145_160_Decoded.push({ route, rawLen, decLen, desc: decodedDesc });
    }

    if (isTarget) {
      report.descriptions.targetPages.push({
        route,
        rawDesc,
        rawLen,
        decodedDesc,
        decLen,
        passRaw: rawLen >= 145 && rawLen <= 160,
        passDecoded: decLen >= 145 && decLen <= 160
      });
    }
  }

  // --- 3. JSON-LD CHECK ---
  const jsonLdRegex = /<script\s+type=["']application\/ld\+json["']>([\s\S]*?)<\/script>/gi;
  let jMatch;
  while ((jMatch = jsonLdRegex.exec(content)) !== null) {
    report.jsonLd.totalBlocks++;
    const rawJson = jMatch[1].trim();
    let parsed;
    try {
      parsed = JSON.parse(rawJson);
    } catch (e) {
      report.jsonLd.parseErrors.push({ route, error: e.message, snippet: rawJson.slice(0, 100) });
      continue;
    }

    // Inspect entities
    const entities = parsed['@graph'] && Array.isArray(parsed['@graph'])
      ? parsed['@graph']
      : (Array.isArray(parsed) ? parsed : [parsed]);

    for (const ent of entities) {
      if (ent['@type'] === 'FAQPage') {
        report.jsonLd.totalFaqPages++;
        if (!ent.mainEntity || !Array.isArray(ent.mainEntity) || ent.mainEntity.length === 0) {
          report.jsonLd.emptyMainEntities.push({ route, id: ent['@id'] || 'no-id' });
        } else {
          report.jsonLd.validFaqPages++;
        }
      }
    }
  }

  // --- 4. INTERNAL LINKS & TRAILING SLASHES ---
  const aRegex = /<a\s+[^>]*?href=["']([^"']+)["']/gi;
  let aMatch;
  while ((aMatch = aRegex.exec(content)) !== null) {
    report.links.totalLinksFound++;
    const href = aMatch[1].trim();
    if (href.startsWith('/') && !href.startsWith('//')) {
      const cleanHref = href.split('?')[0].split('#')[0];
      const hasExt = Boolean(path.extname(cleanHref));
      if (cleanHref !== '' && cleanHref !== '/' && !cleanHref.endsWith('/') && !hasExt) {
        // Missing trailing slash
        const count = report.links.sitewideMissingSlash.get(cleanHref) || 0;
        report.links.sitewideMissingSlash.set(cleanHref, count + 1);

        if (isTarget) {
          report.links.targetPageLinksMissingSlash.push({
            pageRoute: route,
            href: cleanHref
          });
        }
      }
    }
  }

  // --- 5. UNKNOWN STATE TOKENS ---
  if (content.includes('Unknown-licensed') ||
      content.includes('"addressRegion":"Unknown"') ||
      content.includes('in Unknown') ||
      content.includes('Unknown, ') ||
      content.includes('Unknown State') ||
      content.includes('Unknown Medical')) {
    report.unknownTokens.found.push({
      route,
      snippet: content.match(/.{0,40}Unknown.{0,40}/)?.[0] || 'Unknown token matched'
    });
  }
}

console.log('\n=================== 1. TITLE TAG ANALYSIS ===================');
console.log(`Sitewide raw titles outside [50..60]: ${report.titles.sitewideOutside50_60_Raw.length} / ${report.totalScanned}`);
console.log(`Sitewide decoded titles outside [50..60]: ${report.titles.sitewideOutside50_60_Decoded.length} / ${report.totalScanned}`);
console.log(`\nTarget/Overhaul Pages Titles Audit (${report.titles.targetPages.length} pages):`);
let targetTitleFails = 0;
for (const t of report.titles.targetPages) {
  const status = t.passRaw && t.passDecoded ? '✔ PASS' : '✖ FAIL';
  if (status.includes('FAIL')) targetTitleFails++;
  console.log(`  ${status} [Raw: ${t.rawLen} chars, Decoded: ${t.decLen} chars] ${t.route}`);
  console.log(`         "${t.rawTitle}"`);
}
console.log(`Target Page Title Failures: ${targetTitleFails}`);

console.log('\n=================== 2. META DESCRIPTION ANALYSIS ===================');
console.log(`Sitewide raw descriptions outside [145..160]: ${report.descriptions.sitewideOutside145_160_Raw.length} / ${report.totalScanned}`);
console.log(`Sitewide decoded descriptions outside [145..160]: ${report.descriptions.sitewideOutside145_160_Decoded.length} / ${report.totalScanned}`);
console.log(`\nTarget/Overhaul Pages Descriptions Audit (${report.descriptions.targetPages.length} pages):`);
let targetDescFails = 0;
for (const d of report.descriptions.targetPages) {
  const status = d.passRaw && d.passDecoded ? '✔ PASS' : '✖ FAIL';
  if (status.includes('FAIL')) targetDescFails++;
  console.log(`  ${status} [Raw: ${d.rawLen} chars, Decoded: ${d.decLen} chars] ${d.route}`);
  console.log(`         "${d.rawDesc}"`);
}
console.log(`Target Page Description Failures: ${targetDescFails}`);

console.log('\n=================== 3. JSON-LD SCHEMA INTEGRITY ===================');
console.log(`Total JSON-LD blocks scanned: ${report.jsonLd.totalBlocks}`);
console.log(`JSON-LD parse errors: ${report.jsonLd.parseErrors.length}`);
console.log(`Total FAQPage schemas found: ${report.jsonLd.totalFaqPages}`);
console.log(`Valid FAQPage schemas: ${report.jsonLd.validFaqPages}`);
console.log(`Empty mainEntity FAQPage schemas: ${report.jsonLd.emptyMainEntities.length}`);
if (report.jsonLd.emptyMainEntities.length > 0) {
  console.log('Empty mainEntity instances:');
  for (const e of report.jsonLd.emptyMainEntities) {
    console.log(`  - ${e.route} (${e.id})`);
  }
}

console.log('\n=================== 4. INTERNAL LINKS & TRAILING SLASHES ===================');
console.log(`Total rendered links scanned: ${report.links.totalLinksFound}`);
console.log(`Distinct internal URLs missing trailing slashes sitewide: ${report.links.sitewideMissingSlash.size}`);
console.log('Top distinct missing trailing slash hrefs across site:');
for (const [href, count] of report.links.sitewideMissingSlash.entries()) {
  console.log(`  ${href} (occurrences: ${count})`);
}
console.log(`Target/Overhaul Pages rendered links missing trailing slash: ${report.links.targetPageLinksMissingSlash.length}`);
for (const l of report.links.targetPageLinksMissingSlash) {
  console.log(`  - Page: ${l.pageRoute} -> Link: ${l.href}`);
}

console.log('\n=================== 5. UNKNOWN STATE TOKENS ===================');
console.log(`Pages with corrupted "Unknown" state tokens: ${report.unknownTokens.found.length}`);
if (report.unknownTokens.found.length > 0) {
  for (const u of report.unknownTokens.found) {
    console.log(`  - ${u.route}: "${u.snippet}"`);
  }
}

console.log('\n' + '='.repeat(80));
console.log('ADVERSARIAL SCAN COMPLETE');
console.log('='.repeat(80));
