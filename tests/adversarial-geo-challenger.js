#!/usr/bin/env node

/**
 * Adversarial GEO, Canonical & Extractive Content Challenger Harness
 * Developed by challenger_geo_1 for rigorous empirical validation.
 */

const fs = require('fs');
const path = require('path');

const projectRoot = path.resolve(__dirname, '..');
const siteRoot = path.join(projectRoot, 'Telehealth FX Site');
const srcAppDir = path.join(siteRoot, 'src', 'app');
const srcComponentsDir = path.join(siteRoot, 'src', 'components');
const outDir = path.join(siteRoot, 'out');
const publicDir = path.join(siteRoot, 'public');
const functionsDir = path.join(siteRoot, 'functions');

const results = {
  canonicalSrcAudit: { total: 0, passed: 0, failed: 0, errors: [] },
  canonicalHtmlAudit: { total: 0, passed: 0, failed: 0, duplicates: 0, pathMismatches: 0, errors: [] },
  schemaAudit: { totalHtml: 0, totalJsonLd: 0, totalEntities: 0, errors: [], entityTypes: {} },
  extractiveAudit: { targetPagesChecked: 0, passed: 0, failed: 0, details: [] },
  speakableCoverage: { passed: 0, failed: 0, errors: [] },
  edgeRedirectsAudit: { passed: 0, failed: 0, errors: [] },
  sitemapAudit: { totalUrls: 0, passed: 0, failed: 0, errors: [] },
  codebaseCleanliness: { passed: 0, failed: 0, errors: [] }
};

function walkDir(dir, filterFn) {
  let files = [];
  if (!fs.existsSync(dir)) return files;
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files = files.concat(walkDir(fullPath, filterFn));
    } else if (filterFn(fullPath, entry.name)) {
      files.push(fullPath);
    }
  }
  return files;
}

console.log('='.repeat(80));
console.log('CHALLENGER GEO EMPIRICAL STRESS HARNESS — COMPREHENSIVE SUITE');
console.log('='.repeat(80));

// =============================================================================
// TEST 1: CANONICAL TAGS IN SOURCE CODE (ALL STATIC ROUTES)
// =============================================================================
console.log('\n--- 1. AUDITING CANONICAL TAGS IN SRC/APP STATIC ROUTES ---');
const pageFiles = walkDir(srcAppDir, (fp, name) => name === 'page.js' || name === 'page.jsx');
results.canonicalSrcAudit.total = pageFiles.length;

for (const pf of pageFiles) {
  const content = fs.readFileSync(pf, 'utf8');
  const relPath = path.relative(srcAppDir, pf);
  
  // Extract canonical
  const canonicalMatch = content.match(/canonical:\s*['"`]([^'"`]+)['"`]/);
  if (!canonicalMatch) {
    results.canonicalSrcAudit.failed++;
    results.canonicalSrcAudit.errors.push(`[SRC MISSING CANONICAL] ${relPath}`);
    continue;
  }
  
  const canonicalUrl = canonicalMatch[1];
  
  // Rule 1: Must start with https://telehealthfx.com/
  if (!canonicalUrl.startsWith('https://telehealthfx.com/')) {
    results.canonicalSrcAudit.failed++;
    results.canonicalSrcAudit.errors.push(`[SRC NON-APEX OR NON-HTTPS] ${relPath}: ${canonicalUrl}`);
    continue;
  }
  
  // Rule 2: Must NOT contain www.
  if (canonicalUrl.includes('www.telehealthfx.com')) {
    results.canonicalSrcAudit.failed++;
    results.canonicalSrcAudit.errors.push(`[SRC CONTAINS WWW] ${relPath}: ${canonicalUrl}`);
    continue;
  }
  
  // Rule 3: Must terminate in a trailing slash
  if (!canonicalUrl.endsWith('/')) {
    results.canonicalSrcAudit.failed++;
    results.canonicalSrcAudit.errors.push(`[SRC MISSING TRAILING SLASH] ${relPath}: ${canonicalUrl}`);
    continue;
  }
  
  // Rule 4: Check OpenGraph parity if present
  const ogUrlMatch = content.match(/openGraph:\s*\{[\s\S]*?\burl:\s*['"`]([^'"`]+)['"`]/);
  if (ogUrlMatch) {
    const ogUrl = ogUrlMatch[1];
    if (!ogUrl.match(/\.(png|jpe?g|svg|webp)$/i)) {
      if (ogUrl !== canonicalUrl) {
        results.canonicalSrcAudit.failed++;
        results.canonicalSrcAudit.errors.push(`[SRC OG/CANONICAL MISMATCH] ${relPath}: OG="${ogUrl}" vs Canonical="${canonicalUrl}"`);
        continue;
      }
    }
  }
  
  results.canonicalSrcAudit.passed++;
}

console.log(`Scanned ${results.canonicalSrcAudit.total} static route source files:`);
console.log(`  Passed: ${results.canonicalSrcAudit.passed}`);
console.log(`  Failed: ${results.canonicalSrcAudit.failed}`);
if (results.canonicalSrcAudit.errors.length > 0) {
  results.canonicalSrcAudit.errors.slice(0, 10).forEach(e => console.log('  ' + e));
}

// =============================================================================
// TEST 2: CANONICAL TAGS IN PRE-RENDERED HTML (OUT/ DIRECTORY) & PATH PARITY
// =============================================================================
console.log('\n--- 2. AUDITING CANONICAL TAGS & ROUTE PATH PARITY IN OUT/ ---');
const htmlFiles = walkDir(outDir, (fp, name) => name.endsWith('.html'));
results.canonicalHtmlAudit.total = htmlFiles.length;

for (const hf of htmlFiles) {
  const content = fs.readFileSync(hf, 'utf8');
  const relPath = path.relative(outDir, hf);
  
  // 404 pages naturally fallback to root canonical
  const is404 = relPath === '404.html' || relPath === '404/index.html' || relPath === '_not-found/index.html';

  // Match <link rel="canonical" href="..."> or <link href="..." rel="canonical">
  const canonicalTagRegex = /<link\s+[^>]*rel=["']canonical["'][^>]*>|<link\s+[^>]*href=["'][^"']+["'][^>]*rel=["']canonical["'][^>]*>/gi;
  const matches = content.match(canonicalTagRegex) || [];
  
  if (matches.length === 0) {
    results.canonicalHtmlAudit.failed++;
    results.canonicalHtmlAudit.errors.push(`[HTML MISSING CANONICAL] ${relPath}`);
    continue;
  }
  
  if (matches.length > 1) {
    results.canonicalHtmlAudit.duplicates++;
    results.canonicalHtmlAudit.errors.push(`[HTML DUPLICATE CANONICAL] ${relPath} (${matches.length} tags found)`);
  }
  
  // Extract href
  const hrefMatch = matches[0].match(/href=["']([^"']+)["']/i);
  if (!hrefMatch) {
    results.canonicalHtmlAudit.failed++;
    results.canonicalHtmlAudit.errors.push(`[HTML CANONICAL MISSING HREF] ${relPath}`);
    continue;
  }
  
  const canonicalHref = hrefMatch[1];
  
  if (!canonicalHref.startsWith('https://telehealthfx.com/')) {
    results.canonicalHtmlAudit.failed++;
    results.canonicalHtmlAudit.errors.push(`[HTML NON-APEX / NON-HTTPS] ${relPath}: ${canonicalHref}`);
    continue;
  }
  
  if (canonicalHref.includes('www.telehealthfx.com')) {
    results.canonicalHtmlAudit.failed++;
    results.canonicalHtmlAudit.errors.push(`[HTML CONTAINS WWW] ${relPath}: ${canonicalHref}`);
    continue;
  }
  
  if (!canonicalHref.endsWith('/')) {
    results.canonicalHtmlAudit.failed++;
    results.canonicalHtmlAudit.errors.push(`[HTML MISSING TRAILING SLASH] ${relPath}: ${canonicalHref}`);
    continue;
  }

  // Path parity check: verify canonical href matches expected route path (except 404 fallbacks)
  if (!is404) {
    let expectedPath = relPath.replace(/\/index\.html$/, '/').replace(/\.html$/, '/');
    if (expectedPath === 'index.html' || expectedPath === 'index/') expectedPath = '';
    const expectedUrl = `https://telehealthfx.com/${expectedPath}`;
    
    if (canonicalHref !== expectedUrl) {
      results.canonicalHtmlAudit.pathMismatches++;
      results.canonicalHtmlAudit.errors.push(`[HTML PATH MISMATCH] ${relPath}: Found "${canonicalHref}" expected "${expectedUrl}"`);
    }
  }
  
  results.canonicalHtmlAudit.passed++;
}

console.log(`Scanned ${results.canonicalHtmlAudit.total} pre-rendered HTML files:`);
console.log(`  Passed: ${results.canonicalHtmlAudit.passed}`);
console.log(`  Failed: ${results.canonicalHtmlAudit.failed}`);
console.log(`  Duplicates: ${results.canonicalHtmlAudit.duplicates}`);
console.log(`  Path Mismatches: ${results.canonicalHtmlAudit.pathMismatches}`);
if (results.canonicalHtmlAudit.errors.length > 0) {
  results.canonicalHtmlAudit.errors.slice(0, 10).forEach(e => console.log('  ' + e));
}

// =============================================================================
// TEST 3: ADVERSARIAL SCHEMA.ORG & JSON-LD AUDIT (OUT/ DIRECTORY)
// =============================================================================
console.log('\n--- 3. ADVERSARIAL SCHEMA.ORG & JSON-LD AUDIT (OUT/) ---');
results.schemaAudit.totalHtml = htmlFiles.length;

for (const hf of htmlFiles) {
  const content = fs.readFileSync(hf, 'utf8');
  const relPath = path.relative(outDir, hf);
  
  const scriptRegex = /<script\s+type=["']application\/ld\+json["']>([\s\S]*?)<\/script>/gi;
  let match;
  while ((match = scriptRegex.exec(content)) !== null) {
    results.schemaAudit.totalJsonLd++;
    const jsonStr = match[1].trim();
    let data;
    try {
      data = JSON.parse(jsonStr);
    } catch (err) {
      results.schemaAudit.errors.push(`[JSON PARSE ERROR] ${relPath}: ${err.message}`);
      continue;
    }
    
    // Extract entities
    const entities = data['@graph'] && Array.isArray(data['@graph']) ? data['@graph'] : [data];
    
    for (const entity of entities) {
      results.schemaAudit.totalEntities++;
      const type = entity['@type'] || 'MISSING_TYPE';
      results.schemaAudit.entityTypes[type] = (results.schemaAudit.entityTypes[type] || 0) + 1;
      
      if (!entity['@type']) {
        results.schemaAudit.errors.push(`[SCHEMA MISSING @TYPE] ${relPath}`);
      }
      
      // Validate MedicalWebPage
      if (type === 'MedicalWebPage') {
        if (!entity.name && !entity.headline) {
          results.schemaAudit.errors.push(`[MedicalWebPage MISSING NAME/HEADLINE] ${relPath}`);
        }
        if (!entity.description || typeof entity.description !== 'string' || entity.description.trim().length < 15) {
          results.schemaAudit.errors.push(`[MedicalWebPage INVALID/MISSING DESCRIPTION] ${relPath}: "${entity.description}"`);
        }
      }
      
      // Validate FAQPage
      if (type === 'FAQPage') {
        if (!entity.mainEntity || !Array.isArray(entity.mainEntity) || entity.mainEntity.length === 0) {
          results.schemaAudit.errors.push(`[FAQPage EMPTY MAINENTITY] ${relPath}`);
        } else {
          for (let i = 0; i < entity.mainEntity.length; i++) {
            const q = entity.mainEntity[i];
            if (q['@type'] !== 'Question') {
              results.schemaAudit.errors.push(`[FAQPage ITEM NOT QUESTION] ${relPath} idx ${i}`);
            }
            if (!q.name || typeof q.name !== 'string' || !q.name.trim()) {
              results.schemaAudit.errors.push(`[FAQPage QUESTION MISSING NAME] ${relPath} idx ${i}`);
            }
            if (!q.acceptedAnswer || q.acceptedAnswer['@type'] !== 'Answer' || !q.acceptedAnswer.text) {
              results.schemaAudit.errors.push(`[FAQPage QUESTION MISSING ACCEPTEDANSWER] ${relPath} idx ${i}`);
            }
          }
        }
      }

      // Validate SpeakableSpecification selector resolution in current file
      if (type === 'SpeakableSpecification') {
        const selectors = Array.isArray(entity.cssSelector) ? entity.cssSelector : [entity.cssSelector];
        let anySelectorFound = false;
        for (const sel of selectors) {
          if (sel.startsWith('.')) {
            const className = sel.slice(1);
            if (content.includes(`class="${className}`) || content.includes(`class='${className}`) || content.includes(` ${className}`)) {
              anySelectorFound = true;
              break;
            }
          } else if (sel.startsWith('[')) {
            const attr = sel.replace(/[\[\]]/g, '').split('=')[0];
            if (content.includes(attr)) {
              anySelectorFound = true;
              break;
            }
          } else if (sel === 'h1') {
            if (content.includes('<h1')) {
              anySelectorFound = true;
              break;
            }
          }
        }
        if (!anySelectorFound) {
          results.speakableCoverage.failed++;
          results.speakableCoverage.errors.push(`[SPEAKABLE TARGET NOT FOUND IN DOM] ${relPath}: selectors ${JSON.stringify(selectors)}`);
        } else {
          results.speakableCoverage.passed++;
        }
      }
      
      // Check for undefined / null / NaN string leakages
      function checkCorruptedStrings(obj, keyPath) {
        if (typeof obj === 'string') {
          if (obj.includes('undefined') || obj.includes('null') || obj.includes('NaN') || obj.includes('[object Object]')) {
            results.schemaAudit.errors.push(`[SCHEMA CORRUPTED TOKEN] ${relPath} ${keyPath}: "${obj}"`);
          }
        } else if (Array.isArray(obj)) {
          obj.forEach((it, idx) => checkCorruptedStrings(it, `${keyPath}[${idx}]`));
        } else if (obj !== null && typeof obj === 'object') {
          for (const k of Object.keys(obj)) {
            checkCorruptedStrings(obj[k], `${keyPath}.${k}`);
          }
        }
      }
      checkCorruptedStrings(entity, type);
    }
  }
}

console.log(`Scanned ${results.schemaAudit.totalJsonLd} JSON-LD blocks across ${results.schemaAudit.totalHtml} HTML files.`);
console.log(`Total Entities Evaluated: ${results.schemaAudit.totalEntities}`);
console.log(`Entity Type Distribution:`, results.schemaAudit.entityTypes);
console.log(`Speakable Specification Validations: ${results.speakableCoverage.passed} passed, ${results.speakableCoverage.failed} failed`);
console.log(`Schema / JSON-LD Errors: ${results.schemaAudit.errors.length}`);
if (results.schemaAudit.errors.length > 0) {
  results.schemaAudit.errors.slice(0, 10).forEach(e => console.log('  ' + e));
}

// =============================================================================
// TEST 4: EXTRACTIVE ANSWERS & CRO CONVERSION ELEMENTS
// =============================================================================
console.log('\n--- 4. AUDITING EXTRACTIVE ANSWERS & CRO REFERRAL WIDGETS ---');

const targetGenerativePages = [
  {
    name: 'blog-compounded-after-hims-ro',
    htmlPath: path.join(outDir, 'blog', 'compounded-semaglutide-after-hims-ro-2026', 'index.html'),
    requiredStrings: [
      'ai-extractive-answer',
      '503A',
      '21 U.S.C. § 353a',
      '$146',
      '24-hr',
      '2-day',
      '0.25mg',
      '2.4mg',
      'https://go.telehealthfx.com/start'
    ]
  },
  {
    name: 'blog-hims-vs-ro',
    htmlPath: path.join(outDir, 'blog', 'hims-vs-ro-vs-telehealthfx-2026', 'index.html'),
    requiredStrings: [
      'ai-extractive-answer',
      '$146',
      '24-hr',
      '2-day',
      '503A',
      'https://go.telehealthfx.com/start'
    ]
  },
  {
    name: 'blog-glp1-travel-guide',
    htmlPath: path.join(outDir, 'blog', 'glp1-travel-guide-2026', 'index.html'),
    requiredStrings: [
      'ai-extractive-answer',
      'TSA',
      '49 CFR § 1540.111',
      '36°F',
      '46°F',
      '21 days',
      '$146',
      'https://go.telehealthfx.com/start'
    ]
  },
  {
    name: 'blog-glp1-and-coffee',
    htmlPath: path.join(outDir, 'blog', 'glp1-and-coffee-caffeine-2026', 'index.html'),
    requiredStrings: [
      'ai-extractive-answer',
      'gastric emptying',
      '90-120 min',
      '200 mg',
      '$146',
      'https://go.telehealthfx.com/start'
    ]
  },
  {
    name: 'blog-coptis-chinensis',
    htmlPath: path.join(outDir, 'blog', 'coptis-chinensis-vs-berberis-vulgaris-botanical-sources', 'index.html'),
    requiredStrings: [
      'ai-extractive-answer',
      '500mg',
      'AMPK',
      '$146',
      'https://go.telehealthfx.com/start'
    ]
  },
  {
    name: 'careers-salesperson',
    htmlPath: path.join(outDir, 'careers', 'glp-1-weight-loss-salesperson', 'index.html'),
    requiredStrings: [
      'ai-extractive-answer',
      '$146',
      'https://go.telehealthfx.com/start',
      '$65k',
      '140k'
    ]
  }
];

for (const target of targetGenerativePages) {
  results.extractiveAudit.targetPagesChecked++;
  if (!fs.existsSync(target.htmlPath)) {
    results.extractiveAudit.failed++;
    results.extractiveAudit.details.push(`[FILE NOT FOUND] ${target.name} at ${target.htmlPath}`);
    continue;
  }
  
  const content = fs.readFileSync(target.htmlPath, 'utf8');
  let pageErrors = [];
  
  // 1. Verify Extractive Answer Block presence and bolded thesis in DOM
  const domExtractivePos = content.indexOf('class="ai-extractive-answer"');
  if (domExtractivePos === -1) {
    pageErrors.push('Missing class="ai-extractive-answer" DOM element');
  } else {
    // Check for bolded thesis within 2500 characters of the extractive DOM element
    const domSlice = content.slice(domExtractivePos, domExtractivePos + 2500);
    if (!domSlice.includes('<strong') && !domSlice.includes('<b')) {
      pageErrors.push('Extractive answer block lacks <strong> or <b> bold thesis statement in DOM');
    }
  }
  
  // 2. Verify all required strings
  for (const req of target.requiredStrings) {
    if (!content.includes(req)) {
      pageErrors.push(`Missing required text parameter: "${req}"`);
    }
  }
  
  // 3. Verify no non-canonical links (links pointing to www.telehealthfx.com)
  const wwwLinkMatch = content.match(/href=["']https:\/\/www\.telehealthfx\.com[^"']*["']/g);
  if (wwwLinkMatch) {
    pageErrors.push(`Contains link to www.telehealthfx.com: ${wwwLinkMatch.join(', ')}`);
  }
  
  // 4. Verify AIQuickSummaryAction widget presence
  if (!content.includes('ai-quick-summary') && !content.includes('data-geo-cta')) {
    pageErrors.push('Missing AIQuickSummaryAction CRO widget');
  }
  
  if (pageErrors.length > 0) {
    results.extractiveAudit.failed++;
    results.extractiveAudit.details.push(`[FAILED] ${target.name}:\n    - ` + pageErrors.join('\n    - '));
  } else {
    results.extractiveAudit.passed++;
    results.extractiveAudit.details.push(`[PASSED] ${target.name}: All extractive elements, bold thesis, parameters, citations, and CRO bridges verified.`);
  }
}

console.log(`Evaluated ${results.extractiveAudit.targetPagesChecked} top generative landing assets:`);
console.log(`  Passed: ${results.extractiveAudit.passed}`);
console.log(`  Failed: ${results.extractiveAudit.failed}`);
results.extractiveAudit.details.forEach(d => console.log('  ' + d));

// =============================================================================
// TEST 5: EDGE REDIRECTION & CLOUDFLARE ARTIFACTS
// =============================================================================
console.log('\n--- 5. AUDITING CLOUDFLARE REDIRECTS & EDGE MIDDLEWARE ---');

const redirectsFile = path.join(publicDir, '_redirects');
if (!fs.existsSync(redirectsFile)) {
  results.edgeRedirectsAudit.failed++;
  results.edgeRedirectsAudit.errors.push('public/_redirects missing');
} else {
  const rContent = fs.readFileSync(redirectsFile, 'utf8');
  if (rContent.includes('https://www.telehealthfx.com/* https://telehealthfx.com/:splat 301!')) {
    results.edgeRedirectsAudit.passed++;
  } else {
    results.edgeRedirectsAudit.failed++;
    results.edgeRedirectsAudit.errors.push('public/_redirects missing 301 rule for www to apex domain');
  }
}

const middlewareFile = path.join(functionsDir, '_middleware.ts');
if (!fs.existsSync(middlewareFile)) {
  results.edgeRedirectsAudit.failed++;
  results.edgeRedirectsAudit.errors.push('functions/_middleware.ts missing');
} else {
  const mContent = fs.readFileSync(middlewareFile, 'utf8');
  if (mContent.includes('www.telehealthfx.com') && mContent.includes('301')) {
    results.edgeRedirectsAudit.passed++;
  } else {
    results.edgeRedirectsAudit.failed++;
    results.edgeRedirectsAudit.errors.push('functions/_middleware.ts missing www 301 redirect logic');
  }
}

const layoutFile = path.join(srcAppDir, 'layout.js');
const layoutContent = fs.readFileSync(layoutFile, 'utf8');
if (layoutContent.includes("metadataBase: new URL('https://telehealthfx.com')") &&
    layoutContent.includes('www.telehealthfx.com')) {
  results.edgeRedirectsAudit.passed++;
} else {
  results.edgeRedirectsAudit.failed++;
  results.edgeRedirectsAudit.errors.push('layout.js missing metadataBase or client-side hostname redirect fallback');
}

console.log(`Edge Redirection Layer:`);
console.log(`  Passed: ${results.edgeRedirectsAudit.passed}`);
console.log(`  Failed: ${results.edgeRedirectsAudit.failed}`);
if (results.edgeRedirectsAudit.errors.length > 0) {
  results.edgeRedirectsAudit.errors.forEach(e => console.log('  ' + e));
}

// =============================================================================
// TEST 6: SITEMAP.XML CANONICAL INTEGRITY
// =============================================================================
console.log('\n--- 6. AUDITING SITEMAP.XML CANONICAL INTEGRITY ---');
const sitemapPath = path.join(publicDir, 'sitemap.xml');
if (fs.existsSync(sitemapPath)) {
  const sContent = fs.readFileSync(sitemapPath, 'utf8');
  const locRegex = /<loc>(.*?)<\/loc>/g;
  let locMatch;
  while ((locMatch = locRegex.exec(sContent)) !== null) {
    results.sitemapAudit.totalUrls++;
    const loc = locMatch[1].trim();
    if (!loc.startsWith('https://telehealthfx.com/')) {
      results.sitemapAudit.failed++;
      results.sitemapAudit.errors.push(`[SITEMAP NON-APEX] ${loc}`);
    } else if (loc.includes('www.telehealthfx.com')) {
      results.sitemapAudit.failed++;
      results.sitemapAudit.errors.push(`[SITEMAP CONTAINS WWW] ${loc}`);
    } else if (!loc.endsWith('/') && !loc.match(/\.(xml|png|jpg|pdf)$/)) {
      results.sitemapAudit.failed++;
      results.sitemapAudit.errors.push(`[SITEMAP MISSING TRAILING SLASH] ${loc}`);
    } else {
      results.sitemapAudit.passed++;
    }
  }
  console.log(`Audited ${results.sitemapAudit.totalUrls} sitemap URLs:`);
  console.log(`  Passed: ${results.sitemapAudit.passed}`);
  console.log(`  Failed: ${results.sitemapAudit.failed}`);
} else {
  console.log('  sitemap.xml not found in public/');
}

// =============================================================================
// TEST 7: CODEBASE WWW LEAKAGE SCAN
// =============================================================================
console.log('\n--- 7. SCANNING SOURCE CODE FOR WWW.TELEHEALTHFX.COM LEAKS ---');
const srcFiles = walkDir(path.join(siteRoot, 'src'), (fp, name) => /\.(js|jsx|ts|tsx)$/.test(name));
for (const sf of srcFiles) {
  const content = fs.readFileSync(sf, 'utf8');
  const relPath = path.relative(siteRoot, sf);
  
  // Allow benign mentions like the hostname check in layout.js or middleware
  if (relPath.includes('layout.js') || relPath.includes('_middleware.ts')) continue;
  
  if (content.includes('www.telehealthfx.com')) {
    results.codebaseCleanliness.failed++;
    results.codebaseCleanliness.errors.push(`[WWW LEAK] ${relPath} contains "www.telehealthfx.com"`);
  }
}

if (results.codebaseCleanliness.failed === 0) {
  results.codebaseCleanliness.passed++;
  console.log(`Zero active www.telehealthfx.com leaks found across ${srcFiles.length} source files.`);
} else {
  console.log(`Found ${results.codebaseCleanliness.failed} files with www.telehealthfx.com leaks:`);
  results.codebaseCleanliness.errors.forEach(e => console.log('  ' + e));
}

// =============================================================================
// FINAL VERDICT
// =============================================================================
console.log('\n' + '='.repeat(80));
console.log('EMPIRICAL CHALLENGER SCORECARD');
console.log('='.repeat(80));
const totalFailures = 
  results.canonicalSrcAudit.failed +
  results.canonicalHtmlAudit.failed +
  results.canonicalHtmlAudit.duplicates +
  results.canonicalHtmlAudit.pathMismatches +
  results.schemaAudit.errors.length +
  results.speakableCoverage.failed +
  results.extractiveAudit.failed +
  results.edgeRedirectsAudit.failed +
  results.sitemapAudit.failed +
  results.codebaseCleanliness.failed;

console.log(`1. Canonical Static Routes (src/app): ${results.canonicalSrcAudit.passed} / ${results.canonicalSrcAudit.total} passed`);
console.log(`2. Canonical Pre-Rendered HTML (out/): ${results.canonicalHtmlAudit.passed} / ${results.canonicalHtmlAudit.total} passed (${results.canonicalHtmlAudit.duplicates} duplicates, ${results.canonicalHtmlAudit.pathMismatches} mismatches)`);
console.log(`3. Schema.org & JSON-LD Integrity: ${results.schemaAudit.errors.length} errors across ${results.schemaAudit.totalEntities} entities`);
console.log(`4. SpeakableSpecification DOM Targets: ${results.speakableCoverage.passed} passed, ${results.speakableCoverage.failed} failed`);
console.log(`5. Extractive Answers & CRO Widgets: ${results.extractiveAudit.passed} / ${results.extractiveAudit.targetPagesChecked} passed`);
console.log(`6. Edge Redirection Architecture: ${results.edgeRedirectsAudit.passed} checks passed`);
console.log(`7. Sitemap Canonical Integrity: ${results.sitemapAudit.passed} / ${results.sitemapAudit.totalUrls} URLs valid`);
console.log(`8. Codebase WWW Cleanliness: ${results.codebaseCleanliness.failed === 0 ? 'Clean' : 'Failed'}`);
console.log('-'.repeat(80));

if (totalFailures === 0) {
  console.log('EMPIRICAL VERDICT: APPROVE (Zero defects detected)');
  process.exit(0);
} else {
  console.log(`EMPIRICAL VERDICT: REQUEST_CHANGES (${totalFailures} defects detected)`);
  process.exit(1);
}
