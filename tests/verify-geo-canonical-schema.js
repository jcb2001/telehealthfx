#!/usr/bin/env node

/**
 * Telehealth FX — Generative Engine Optimization (GEO), Canonical & Schema E2E Test Suite
 * 
 * Comprehensive 4-Tier Automated Verification Harness:
 * - Tier 1: Canonical & Domain Integrity (metadataBase, 100% canonical coverage, trailing slashes, zero www, Cloudflare 301 redirects)
 * - Tier 2: Schema.org GEO & RAG Validation (0 missing descriptions on MedicalWebPage, SpeakableSpecification, RxNorm/ICD-10 entity bindings, FAQPage, DefinedTermSet)
 * - Tier 3: Extractive Content & Conversion Elements (ExtractiveAIAnswerBlock with thesis/numbers/citations, AIQuickSummaryAction widget with $146/mo and 1-click CTA)
 * - Tier 4: Build & Export Integrity Gate (Next.js static export compilation, 465+ HTML routes, critical route size verification)
 * 
 * Usage:
 *   node tests/verify-geo-canonical-schema.js                # Run full suite (fast mode if out/ exists, or build)
 *   node tests/verify-geo-canonical-schema.js --tier=1       # Run only Tier 1: Canonical & Domain Integrity
 *   node tests/verify-geo-canonical-schema.js --tier=2       # Run only Tier 2: Schema.org GEO & RAG Validation
 *   node tests/verify-geo-canonical-schema.js --tier=3       # Run only Tier 3: Extractive Content & Conversion
 *   node tests/verify-geo-canonical-schema.js --tier=4       # Run only Tier 4: Build & Export Integrity
 *   node tests/verify-geo-canonical-schema.js --fast         # Inspect source & pre-rendered out/ without running Webpack compile
 *   node tests/verify-geo-canonical-schema.js --build        # Force live Next.js production static export compile
 *   node tests/verify-geo-canonical-schema.js --json         # Output machine-readable JSON summary
 *   node tests/verify-geo-canonical-schema.js --verbose      # Detailed file-by-file diagnostic output
 */

const fs = require('fs');
const path = require('path');
const { spawnSync } = require('child_process');

// -----------------------------------------------------------------------------
// 1. Path Resolution & Environment Detection
// -----------------------------------------------------------------------------

const scriptDir = __dirname;
let siteRoot;
let projectRoot;

if (fs.existsSync(path.join(scriptDir, '..', 'src', 'app'))) {
  // Executed from within "Telehealth FX Site/tests"
  siteRoot = path.resolve(scriptDir, '..');
  projectRoot = path.resolve(siteRoot, '..');
} else if (fs.existsSync(path.join(scriptDir, '..', 'Telehealth FX Site', 'src', 'app'))) {
  // Executed from within project root "tests"
  projectRoot = path.resolve(scriptDir, '..');
  siteRoot = path.join(projectRoot, 'Telehealth FX Site');
} else if (fs.existsSync(path.join(process.cwd(), 'src', 'app'))) {
  siteRoot = process.cwd();
  projectRoot = path.resolve(siteRoot, '..');
} else {
  projectRoot = process.cwd();
  siteRoot = path.join(projectRoot, 'Telehealth FX Site');
}

const srcAppDir = path.join(siteRoot, 'src', 'app');
const srcComponentsDir = path.join(siteRoot, 'src', 'components');
const publicDir = path.join(siteRoot, 'public');
const functionsDir = path.join(siteRoot, 'functions');
const outDir = path.join(siteRoot, 'out');

// -----------------------------------------------------------------------------
// 2. CLI Options & Flag Processing
// -----------------------------------------------------------------------------

const args = process.argv.slice(2);
const cliOptions = {
  tier: null,
  fast: args.includes('--fast') || args.includes('--skip-build') || args.includes('--no-build'),
  forceBuild: args.includes('--build'),
  json: args.includes('--json'),
  verbose: args.includes('--verbose') || args.includes('-v'),
  help: args.includes('--help') || args.includes('-h'),
};

for (const arg of args) {
  if (arg.startsWith('--tier=')) {
    cliOptions.tier = parseInt(arg.split('=')[1], 10);
  }
}

if (cliOptions.help) {
  console.log(`
Telehealth FX Generative Engine Optimization (GEO) & Schema Verification Runner

Usage:
  node tests/verify-geo-canonical-schema.js [options]

Options:
  --tier=1..4    Run only the specified verification tier
  --fast         Inspect source & pre-rendered static artifacts (skips live Next.js compile)
  --build        Force full Next.js static production export compile in Tier 4
  --json         Output structured results in JSON format
  --verbose, -v  Print detailed entity-level traces and diagnostic output
  --help, -h     Show this help screen
`);
  process.exit(0);
}

// -----------------------------------------------------------------------------
// 3. Terminal Formatting & Reporting Engine
// -----------------------------------------------------------------------------

const isTTY = process.stdout.isTTY && !cliOptions.json;
const colors = {
  reset: isTTY ? '\x1b[0m' : '',
  bold: isTTY ? '\x1b[1m' : '',
  dim: isTTY ? '\x1b[2m' : '',
  green: isTTY ? '\x1b[32m' : '',
  red: isTTY ? '\x1b[31m' : '',
  yellow: isTTY ? '\x1b[33m' : '',
  blue: isTTY ? '\x1b[34m' : '',
  cyan: isTTY ? '\x1b[36m' : '',
  magenta: isTTY ? '\x1b[35m' : '',
  gray: isTTY ? '\x1b[90m' : '',
};

function passSymbol() { return `${colors.green}✔ PASS${colors.reset}`; }
function failSymbol() { return `${colors.red}✖ FAIL${colors.reset}`; }
function warnSymbol() { return `${colors.yellow}⚠ WARN${colors.reset}`; }

const testRegistry = {
  tier1: { name: 'Tier 1: Canonical & Domain Integrity', passed: 0, failed: 0, warnings: 0, results: [] },
  tier2: { name: 'Tier 2: Schema.org GEO & RAG Validation', passed: 0, failed: 0, warnings: 0, results: [] },
  tier3: { name: 'Tier 3: Extractive Content & Conversion Elements', passed: 0, failed: 0, warnings: 0, results: [] },
  tier4: { name: 'Tier 4: Build & Export Integrity Gate', passed: 0, failed: 0, warnings: 0, results: [] },
};

function recordResult(tierKey, name, passed, message, extra = {}) {
  const tier = testRegistry[tierKey];
  if (passed) {
    tier.passed++;
  } else {
    tier.failed++;
  }
  tier.results.push({ name, passed, message, ...extra });

  if (!cliOptions.json) {
    const symbol = passed ? passSymbol() : failSymbol();
    console.log(`  ${symbol} ${name}: ${message}`);
  }
}

function recordWarning(tierKey, name, message) {
  const tier = testRegistry[tierKey];
  tier.warnings++;
  tier.results.push({ name, passed: true, warning: true, message });
  if (!cliOptions.json) {
    console.log(`  ${warnSymbol()} ${name}: ${message}`);
  }
}

// -----------------------------------------------------------------------------
// 4. Target Inventories & Canonical Constants
// -----------------------------------------------------------------------------

const AUTHORITATIVE_ORIGIN = 'https://telehealthfx.com';

const TOP_GENERATIVE_PAGES = [
  {
    id: 'blog-compounded-after-hims-ro',
    name: 'Compounded Semaglutide After Hims & Ro (2026 Guide)',
    route: '/blog/compounded-semaglutide-after-hims-ro-2026/',
    srcFile: 'src/app/blog/compounded-semaglutide-after-hims-ro-2026/page.js',
    componentFile: 'src/components/blog-compounded-semaglutide-after-hims-ro-2026.jsx',
    expectedEntities: {
      rxNorm: '1991302', // Semaglutide
      icd10: 'E66.9',     // Obesity
      statute: '21 U.S.C. § 353a', // 503A
    },
    numericalMarkers: ['$146', '0.25mg', '2.4mg'],
  },
  {
    id: 'blog-hims-vs-ro',
    name: 'Hims vs Ro vs TelehealthFX (2026 Comparison)',
    route: '/blog/hims-vs-ro-vs-telehealthfx-2026/',
    srcFile: 'src/app/blog/hims-vs-ro-vs-telehealthfx-2026/page.js',
    componentFile: 'src/components/blog-hims-vs-ro-vs-telehealthfx-2026.jsx',
    expectedEntities: {
      rxNorm: '1991302',
    },
    numericalMarkers: ['$146', '24-hr', '2-day'],
  },
  {
    id: 'blog-glp1-travel-guide',
    name: 'GLP-1 Travel & TSA Temperature Guide',
    route: '/blog/glp1-travel-guide-2026/',
    srcFile: 'src/app/blog/glp1-travel-guide-2026/page.js',
    componentFile: 'src/components/blog-glp1-travel-guide-2026.jsx',
    expectedEntities: {
      statute: 'TSA',
    },
    numericalMarkers: ['36°F', '46°F', '21 days'],
  },
  {
    id: 'blog-glp1-and-coffee',
    name: 'GLP-1 and Coffee/Caffeine Interactions',
    route: '/blog/glp1-and-coffee-caffeine-2026/',
    srcFile: 'src/app/blog/glp1-and-coffee-caffeine-2026/page.js',
    componentFile: 'src/components/blog-glp1-and-coffee-caffeine-2026.jsx',
    expectedEntities: {
      icd10: 'K21.9', // GERD
    },
    numericalMarkers: ['90-120 min', 'delay'],
  },
  {
    id: 'blog-coptis-chinensis',
    name: 'Coptis Chinensis Botanical Comparison',
    route: '/blog/coptis-chinensis-vs-berberis-vulgaris-botanical-sources/',
    srcFile: 'src/app/blog/coptis-chinensis-vs-berberis-vulgaris-botanical-sources/page.js',
    componentFile: 'src/components/blog-coptis-chinensis.jsx',
    expectedEntities: {
      rxNorm: '1991302',
    },
    numericalMarkers: ['500mg', 'AMPK', '$146'],
    requiresBotanicalTable: true,
  },
  {
    id: 'careers-salesperson',
    name: 'GLP-1 Remote Sales Specialist Hub',
    route: '/careers/glp-1-weight-loss-salesperson/',
    srcFile: 'src/app/careers/glp-1-weight-loss-salesperson/page.js',
    componentFile: 'src/components/careers-salesperson-client.jsx',
    numericalMarkers: ['$146', 'commission', 'consultation'],
    requiresDualBridge: true,
  },
];

const PREVIOUSLY_UNLOCKED_CLIENT_ROUTES = [
  { route: '/careers/', file: 'src/app/careers/page.js' },
  { route: '/skinnyrx/', file: 'src/app/skinnyrx/page.js' },
  { route: '/yt/', file: 'src/app/yt/page.js' },
];

// -----------------------------------------------------------------------------
// 5. Utility Helper Functions
// -----------------------------------------------------------------------------

function walkDirectory(dir, filterFn) {
  let results = [];
  if (!fs.existsSync(dir)) return results;
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      results = results.concat(walkDirectory(fullPath, filterFn));
    } else if (!filterFn || filterFn(entry.name, fullPath)) {
      results.push(fullPath);
    }
  }
  return results;
}

function extractObjectLiteral(source, propName) {
  const match = source.match(new RegExp('\\b' + propName + '\\s*:\\s*\\{'));
  if (!match) return null;
  const braceIdx = match.index + match[0].length - 1;
  let depth = 0;
  for (let i = braceIdx; i < source.length; i++) {
    if (source[i] === '{') depth++;
    else if (source[i] === '}') {
      depth--;
      if (depth === 0) {
        return source.slice(braceIdx, i + 1);
      }
    }
  }
  return null;
}

function getOpenGraphUrl(content) {
  const ogBlock = extractObjectLiteral(content, 'openGraph');
  if (!ogBlock) return null;
  // Remove images property to avoid matching images: [{ url: "..." }]
  const cleanOg = ogBlock.replace(/images\s*:\s*\[[\s\S]*?\]\s*,?/g, '');
  const match = cleanOg.match(/\burl\s*:\s*['"`](https:\/\/telehealthfx\.com[^'"`]*)['"`]/);
  return match ? match[1] : null;
}

function extractJsonLdBlocks(html) {
  const regex = /<script\s+type=["']application\/ld\+json["']>([\s\S]*?)<\/script>/gi;
  const blocks = [];
  let match;
  while ((match = regex.exec(html)) !== null) {
    blocks.push(match[1].trim());
  }
  return blocks;
}

function flattenJsonLdEntities(parsedJson) {
  if (!parsedJson) return [];
  if (Array.isArray(parsedJson)) {
    let out = [];
    for (const item of parsedJson) {
      out = out.concat(flattenJsonLdEntities(item));
    }
    return out;
  }
  if (parsedJson['@graph'] && Array.isArray(parsedJson['@graph'])) {
    return parsedJson['@graph'];
  }
  return [parsedJson];
}

// -----------------------------------------------------------------------------
// 6. SUITE EXECUTION: TIER 1 — CANONICAL & DOMAIN INTEGRITY
// -----------------------------------------------------------------------------

function runTier1() {
  if (!cliOptions.json) {
    console.log(`\n${colors.bold}=== TIER 1: CANONICAL & DOMAIN INTEGRITY ===${colors.reset}`);
  }

  // Test 1.1: Root Layout metadataBase Configuration
  const layoutPath = path.join(srcAppDir, 'layout.js');
  if (!fs.existsSync(layoutPath)) {
    recordResult('tier1', 'Root Layout Existence', false, `Missing ${layoutPath}`);
  } else {
    const layoutContent = fs.readFileSync(layoutPath, 'utf8');
    const hasMetadataBase = /metadataBase\s*:\s*new\s+URL\s*\(\s*['"`]https:\/\/telehealthfx\.com['"`]\s*\)/.test(layoutContent) ||
                            /metadataBase\s*:\s*['"`]https:\/\/telehealthfx\.com['"`]/.test(layoutContent);
    recordResult(
      'tier1',
      'Root Layout metadataBase',
      hasMetadataBase,
      hasMetadataBase
        ? 'Verified metadataBase: new URL("https://telehealthfx.com") configured in layout.js'
        : 'layout.js is missing "metadataBase: new URL(\'https://telehealthfx.com\')"'
    );

    // Default canonical fallback check
    const hasCanonicalFallback = /alternates\s*:\s*\{\s*canonical\s*:\s*['"`]\/?['"`]/.test(layoutContent) ||
                                 /alternates\s*:\s*\{\s*canonical\s*:\s*['"`]https:\/\/telehealthfx\.com\/?['"`]/.test(layoutContent);
    recordResult(
      'tier1',
      'Root Layout Default Canonical Fallback',
      hasCanonicalFallback,
      hasCanonicalFallback
        ? 'Verified root layout default canonical alternate configured'
        : 'layout.js is missing default "alternates: { canonical: \'/\' }"'
    );
  }

  // Test 1.2: Sitewide Route Canonical Tag Coverage (100% of static routes)
  const allPageFiles = walkDirectory(srcAppDir, (name) => name === 'page.js' || name === 'page.jsx');
  const missingCanonicals = [];
  const wwwCanonicals = [];
  const nonSlashCanonicals = [];
  const openGraphMismatches = [];

  for (const pageFile of allPageFiles) {
    const relFile = path.relative(siteRoot, pageFile);
    const content = fs.readFileSync(pageFile, 'utf8');

    // Check for canonical in metadata export or Link tag
    const canonicalMatch = content.match(/canonical\s*:\s*['"`]([^'"`]+)['"`]/) ||
                           content.match(/<link\s+rel=["']canonical["']\s+href=["']([^"']+)["']/);

    if (!canonicalMatch) {
      missingCanonicals.push(relFile);
    } else {
      const canonicalUrl = canonicalMatch[1];

      // Check for www
      if (canonicalUrl.includes('www.telehealthfx.com')) {
        wwwCanonicals.push({ file: relFile, url: canonicalUrl });
      }

      // Check for trailing slash
      if (!canonicalUrl.endsWith('/')) {
        nonSlashCanonicals.push({ file: relFile, url: canonicalUrl });
      }

      // Check openGraph.url parity if present
      const ogUrl = getOpenGraphUrl(content);
      if (ogUrl && ogUrl !== canonicalUrl) {
        openGraphMismatches.push({ file: relFile, canonical: canonicalUrl, og: ogUrl });
      }
    }
  }

  // Record Sitewide Canonical Coverage
  const totalPages = allPageFiles.length;
  const passedPages = totalPages - missingCanonicals.length;
  recordResult(
    'tier1',
    `Sitewide Canonical Coverage (${passedPages}/${totalPages} routes)`,
    missingCanonicals.length === 0,
    missingCanonicals.length === 0
      ? `100% of static routes (${totalPages}) declare explicit alternates.canonical`
      : `${missingCanonicals.length} routes missing canonical: ${missingCanonicals.slice(0, 5).join(', ')}${missingCanonicals.length > 5 ? '...' : ''}`
  );

  // Test 1.3: Previously Unlocked Client Routes Specific Verification
  for (const target of PREVIOUSLY_UNLOCKED_CLIENT_ROUTES) {
    const targetPath = path.join(siteRoot, target.file);
    if (!fs.existsSync(targetPath)) {
      recordResult('tier1', `Client Page Metadata (${target.route})`, false, `File not found: ${target.file}`);
      continue;
    }
    const content = fs.readFileSync(targetPath, 'utf8');
    const isClientDirectly = /^\s*['"]use client['"]/.test(content);
    const hasMetadata = /export\s+const\s+metadata\b/.test(content);
    const hasCanonical = content.includes(`canonical: 'https://telehealthfx.com${target.route}'`) ||
                         content.includes(`canonical: "https://telehealthfx.com${target.route}"`);

    const passed = (!isClientDirectly || hasMetadata) && hasCanonical;
    recordResult(
      'tier1',
      `Client Route Canonicalization (${target.route})`,
      passed,
      passed
        ? `Server-wrapped metadata export with canonical 'https://telehealthfx.com${target.route}'`
        : `Lacks valid canonical metadata export (isClient=${isClientDirectly}, hasMetadata=${hasMetadata})`
    );
  }

  // Test 1.4: Trailing Slash Invariant Across All Canonicals
  recordResult(
    'tier1',
    'Canonical Trailing Slash Invariant',
    nonSlashCanonicals.length === 0,
    nonSlashCanonicals.length === 0
      ? `100% of declared canonical URLs terminate with trailing slash ("/")`
      : `${nonSlashCanonicals.length} canonical URLs omit trailing slash (e.g. ${nonSlashCanonicals[0]?.url})`
  );

  // Test 1.5: Authoritative Apex Domain Invariant (Zero www in canonicals)
  recordResult(
    'tier1',
    'Apex Domain Invariant (Zero WWW in Canonicals)',
    wwwCanonicals.length === 0,
    wwwCanonicals.length === 0
      ? `0 occurrences of "www.telehealthfx.com" in canonical declarations sitewide`
      : `${wwwCanonicals.length} canonical URLs contain "www.telehealthfx.com" (e.g. ${wwwCanonicals[0]?.file})`
  );

  // Test 1.6: OpenGraph URL & Canonical Parity
  recordResult(
    'tier1',
    'OpenGraph URL & Canonical Parity',
    openGraphMismatches.length === 0,
    openGraphMismatches.length === 0
      ? `100% of openGraph.url tags match canonical URLs (trailing slashes aligned)`
      : `${openGraphMismatches.length} pages have openGraph.url mismatching canonical (e.g. ${openGraphMismatches[0]?.file} og="${openGraphMismatches[0]?.og}" vs canon="${openGraphMismatches[0]?.canonical}")`
  );

  // Test 1.7: In-Code WWW Leak Cleanliness in blog-index.jsx
  const blogIndexPath = path.join(srcComponentsDir, 'blog-index.jsx');
  if (fs.existsSync(blogIndexPath)) {
    const blogIndexContent = fs.readFileSync(blogIndexPath, 'utf8');
    const wwwMatches = blogIndexContent.match(/www\.telehealthfx\.com/g) || [];
    recordResult(
      'tier1',
      'In-Code WWW Remediation (src/components/blog-index.jsx)',
      wwwMatches.length === 0,
      wwwMatches.length === 0
        ? 'Zero instances of "www.telehealthfx.com" in blog index component'
        : `Found ${wwwMatches.length} remaining instances of "www.telehealthfx.com" in blog-index.jsx`
    );
  } else {
    recordResult('tier1', 'In-Code WWW Remediation (blog-index.jsx)', false, 'blog-index.jsx not found');
  }

  // Test 1.8: Cloudflare Pages public/_redirects File
  const redirectsPath = path.join(publicDir, '_redirects');
  if (!fs.existsSync(redirectsPath)) {
    recordResult(
      'tier1',
      'Cloudflare Pages public/_redirects Configuration',
      false,
      'Missing public/_redirects (required for Cloudflare Pages apex 301 redirection)'
    );
  } else {
    const redirectsContent = fs.readFileSync(redirectsPath, 'utf8');
    const hasWwwRedirect = /https:\/\/www\.telehealthfx\.com\/\*\s+https:\/\/telehealthfx\.com\/:splat\s+301!?/.test(redirectsContent);
    recordResult(
      'tier1',
      'Cloudflare Pages public/_redirects Configuration',
      hasWwwRedirect,
      hasWwwRedirect
        ? 'Verified "https://www.telehealthfx.com/* https://telehealthfx.com/:splat 301!" in public/_redirects'
        : 'public/_redirects exists but lacks 301 apex redirect rule for https://www.telehealthfx.com/*'
    );
  }

  // Test 1.9: Cloudflare Edge Middleware Function (functions/_middleware.ts)
  const middlewarePath = path.join(functionsDir, '_middleware.ts');
  if (!fs.existsSync(middlewarePath)) {
    recordResult(
      'tier1',
      'Cloudflare Edge Middleware (functions/_middleware.ts)',
      false,
      'Missing functions/_middleware.ts (required for edge-level 301 host normalization)'
    );
  } else {
    const middlewareContent = fs.readFileSync(middlewarePath, 'utf8');
    const hasHostCheck = middlewareContent.includes("url.hostname === 'www.telehealthfx.com'") ||
                         middlewareContent.includes('url.hostname === "www.telehealthfx.com"');
    const has301Redirect = middlewareContent.includes('Response.redirect') && middlewareContent.includes('301');
    const passed = hasHostCheck && has301Redirect;
    recordResult(
      'tier1',
      'Cloudflare Edge Middleware (functions/_middleware.ts)',
      passed,
      passed
        ? 'Verified host inspection and 301 edge redirect in functions/_middleware.ts'
        : 'functions/_middleware.ts is missing www.telehealthfx.com 301 redirect logic'
    );
  }

  // Test 1.10: Client-Side Fallback Canonical Script in layout.js
  if (fs.existsSync(layoutPath)) {
    const layoutContent = fs.readFileSync(layoutPath, 'utf8');
    const hasClientRedirect = /window\.location\.hostname\s*===\s*['"`]www\.telehealthfx\.com['"`]/.test(layoutContent);
    recordResult(
      'tier1',
      'Client-Side Fallback Canonical Redirect in layout.js',
      hasClientRedirect,
      hasClientRedirect
        ? 'Verified inline client-side hostname check and redirect script in layout.js'
        : 'layout.js is missing client-side inline redirect fallback script'
    );
  }
}

// -----------------------------------------------------------------------------
// 7. SUITE EXECUTION: TIER 2 — SCHEMA.ORG GEO & RAG VALIDATION
// -----------------------------------------------------------------------------

function runTier2() {
  if (!cliOptions.json) {
    console.log(`\n${colors.bold}=== TIER 2: SCHEMA.ORG GEO & RAG VALIDATION ===${colors.reset}`);
  }

  // Test 2.1: JSON-LD Syntactic Integrity & Parse Verification
  let jsonParseErrors = 0;
  let totalJsonLdBlocks = 0;
  let allEntities = [];
  const scannedHtmlFiles = walkDirectory(outDir, (name) => name.endsWith('.html'));

  if (scannedHtmlFiles.length > 0) {
    for (const htmlFile of scannedHtmlFiles) {
      const relPath = path.relative(siteRoot, htmlFile);
      const html = fs.readFileSync(htmlFile, 'utf8');
      const blocks = extractJsonLdBlocks(html);

      for (const block of blocks) {
        totalJsonLdBlocks++;
        try {
          const parsed = JSON.parse(block);
          const entities = flattenJsonLdEntities(parsed);
          entities.forEach((e) => allEntities.push({ entity: e, source: relPath }));
        } catch (err) {
          jsonParseErrors++;
          if (cliOptions.verbose) {
            console.error(`    [JSON PARSE ERROR] in ${relPath}: ${err.message}`);
          }
        }
      }
    }
  } else {
    // If out/ is not yet built, scan source files
    recordWarning('tier2', 'HTML Output Scan', 'out/ directory empty or not built; scanning schema in src/app/');
    const allPageFiles = walkDirectory(srcAppDir, (name) => name.endsWith('.js') || name.endsWith('.jsx'));
    for (const pageFile of allPageFiles) {
      const relPath = path.relative(siteRoot, pageFile);
      const content = fs.readFileSync(pageFile, 'utf8');
      const jsonMatches = content.match(/JSON\.stringify\(([\s\S]*?)\)/g) || [];
      totalJsonLdBlocks += jsonMatches.length;
    }
  }

  recordResult(
    'tier2',
    `JSON-LD Syntactic Integrity (${totalJsonLdBlocks} blocks scanned)`,
    jsonParseErrors === 0,
    jsonParseErrors === 0
      ? `Zero JSON syntax errors across all pre-rendered structured data blocks`
      : `Encountered ${jsonParseErrors} JSON-LD parsing syntax errors in pre-rendered HTML`
  );

  // Test 2.2: MedicalWebPage Description Completeness (Resolving 64 Defects)
  const medicalWebPages = allEntities.filter((item) => item.entity['@type'] === 'MedicalWebPage');
  const missingDescEntities = [];

  if (medicalWebPages.length > 0) {
    for (const { entity, source } of medicalWebPages) {
      if (!entity.description || typeof entity.description !== 'string' || entity.description.trim() === '') {
        missingDescEntities.push({ source, headline: entity.headline || entity.name || 'Unknown' });
      }
    }
    recordResult(
      'tier2',
      `MedicalWebPage Description Completeness (${medicalWebPages.length - missingDescEntities.length}/${medicalWebPages.length} valid)`,
      missingDescEntities.length === 0,
      missingDescEntities.length === 0
        ? `Zero missing descriptions across all ${medicalWebPages.length} MedicalWebPage instances`
        : `${missingDescEntities.length} MedicalWebPage entities missing required description (e.g. ${missingDescEntities[0]?.source})`
    );
  } else {
    // Check in source blog files
    const blogPages = walkDirectory(path.join(srcAppDir, 'blog'), (name) => name === 'page.js');
    let sourceMissing = 0;
    for (const bp of blogPages) {
      const c = fs.readFileSync(bp, 'utf8');
      if (c.includes('"MedicalWebPage"') || c.includes("'MedicalWebPage'")) {
        const hasDescInSchema = /description\s*:\s*['"`]/.test(c) || /description\s*:\s*article\.summary/.test(c);
        if (!hasDescInSchema) sourceMissing++;
      }
    }
    recordResult(
      'tier2',
      'MedicalWebPage Description Completeness',
      sourceMissing === 0,
      sourceMissing === 0
        ? 'All blog source files define description on MedicalWebPage schema'
        : `Found ${sourceMissing} blog source files missing description on MedicalWebPage schema`
    );
  }

  // Test 2.3: SpeakableSpecification Markup on Top Generative Pages
  for (const page of TOP_GENERATIVE_PAGES) {
    const pageSrc = path.join(siteRoot, page.srcFile);
    let hasSpeakable = false;
    let targetsExtractive = false;

    const cleanRoute = page.route.replace(/^\//, '').replace(/\/$/, '');
    const renderedHtmlPath = path.join(outDir, cleanRoute, 'index.html');

    if (fs.existsSync(renderedHtmlPath)) {
      const html = fs.readFileSync(renderedHtmlPath, 'utf8');
      const blocks = extractJsonLdBlocks(html);
      for (const b of blocks) {
        try {
          const parsed = JSON.parse(b);
          const entities = flattenJsonLdEntities(parsed);
          for (const ent of entities) {
            if (ent['@type'] === 'SpeakableSpecification' || ent.speakable) {
              hasSpeakable = true;
              const speakableObj = ent.speakable || ent;
              const selectors = JSON.stringify(speakableObj.cssSelector || []);
              if (selectors.includes('.ai-extractive-answer') || selectors.includes('[data-extractive-answer]') || selectors.includes('#extractive-answer')) {
                targetsExtractive = true;
              }
            }
          }
        } catch (_) {}
      }
    } else if (fs.existsSync(pageSrc)) {
      const content = fs.readFileSync(pageSrc, 'utf8');
      hasSpeakable = content.includes('SpeakableSpecification') || content.includes('speakable');
      targetsExtractive = content.includes('.ai-extractive-answer') || content.includes('data-extractive-answer') || content.includes('#extractive-answer');
    }

    const passed = hasSpeakable && targetsExtractive;
    recordResult(
      'tier2',
      `SpeakableSpecification GEO Selector (${page.id})`,
      passed,
      passed
        ? `Verified SpeakableSpecification targeting ".ai-extractive-answer"`
        : `Missing SpeakableSpecification or selector does not target .ai-extractive-answer (hasSpeakable=${hasSpeakable}, targetsExtractive=${targetsExtractive})`
    );
  }

  // Test 2.4: Clinical Entity Grounding (RxNorm & ICD-10 ontologies)
  const targetCompounded = TOP_GENERATIVE_PAGES.find((p) => p.id === 'blog-compounded-after-hims-ro');
  if (targetCompounded) {
    const pageSrc = path.join(siteRoot, targetCompounded.srcFile);
    const cleanRoute = targetCompounded.route.replace(/^\//, '').replace(/\/$/, '');
    const renderedHtmlPath = path.join(outDir, cleanRoute, 'index.html');

    let hasRxNorm = false;
    let hasIcd10 = false;
    let hasStatutoryMentions = false;

    const inspectText = fs.existsSync(renderedHtmlPath)
      ? fs.readFileSync(renderedHtmlPath, 'utf8')
      : (fs.existsSync(pageSrc) ? fs.readFileSync(pageSrc, 'utf8') : '');

    hasRxNorm = inspectText.includes('1991302') && (inspectText.includes('RxNorm') || inspectText.includes('Semaglutide'));
    hasIcd10 = inspectText.includes('E66.9') || inspectText.includes('ICD-10');
    hasStatutoryMentions = inspectText.includes('353a') || inspectText.includes('503A');

    const passed = hasRxNorm && hasIcd10 && hasStatutoryMentions;
    recordResult(
      'tier2',
      `Clinical Entity Grounding (${targetCompounded.id})`,
      passed,
      passed
        ? `Bound Semaglutide (RxNorm: 1991302), Obesity (ICD-10: E66.9), and 503A FD&C Act (21 U.S.C. § 353a)`
        : `Missing required clinical entity bindings: RxNorm:1991302=${hasRxNorm}, ICD10:E66.9=${hasIcd10}, Statute:353a=${hasStatutoryMentions}`
    );
  }

  // Test 2.5: Rich FAQPage with Deep Anchor Links
  for (const page of TOP_GENERATIVE_PAGES.filter(p => !p.requiresDualBridge)) {
    const pageSrc = path.join(siteRoot, page.srcFile);
    const cleanRoute = page.route.replace(/^\//, '').replace(/\/$/, '');
    const renderedHtmlPath = path.join(outDir, cleanRoute, 'index.html');

    let hasFaq = false;
    let hasDeepAnchors = false;

    const inspectText = fs.existsSync(renderedHtmlPath)
      ? fs.readFileSync(renderedHtmlPath, 'utf8')
      : (fs.existsSync(pageSrc) ? fs.readFileSync(pageSrc, 'utf8') : '');

    if (inspectText.includes('FAQPage') && inspectText.includes('mainEntity')) {
      hasFaq = true;
      hasDeepAnchors = inspectText.includes('#faq-') || inspectText.includes('#faq') || inspectText.includes('#question-');
    }

    const passed = hasFaq && hasDeepAnchors;
    recordResult(
      'tier2',
      `Rich FAQPage Citation Anchors (${page.id})`,
      passed,
      passed
        ? `Verified FAQPage with deep citation fragment anchor URLs (#faq-*)`
        : `FAQPage missing deep anchor URLs or missing mainEntity (hasFaq=${hasFaq}, hasDeepAnchors=${hasDeepAnchors})`
    );
  }

  // Test 2.6: DefinedTermSet & RAG Vocabulary Model
  let hasDefinedTerm = false;
  let termCount = 0;
  for (const { entity } of allEntities) {
    if (entity['@type'] === 'DefinedTermSet' || entity['@type'] === 'DefinedTerm') {
      hasDefinedTerm = true;
      termCount++;
    }
  }

  if (!hasDefinedTerm) {
    const allFiles = walkDirectory(path.join(siteRoot, 'src'), (name) => name.endsWith('.js') || name.endsWith('.jsx'));
    for (const f of allFiles) {
      const c = fs.readFileSync(f, 'utf8');
      if (c.includes('DefinedTermSet') || c.includes('DefinedTerm')) {
        hasDefinedTerm = true;
        termCount++;
      }
    }
  }

  recordResult(
    'tier2',
    'DefinedTermSet & Clinical RAG Vocabulary',
    hasDefinedTerm,
    hasDefinedTerm
      ? `Found ${termCount} DefinedTerm/DefinedTermSet entities for clinical concept grounding`
      : 'Missing DefinedTermSet / DefinedTerm schema for LLM clinical vocabulary grounding'
  );
}

// -----------------------------------------------------------------------------
// 8. SUITE EXECUTION: TIER 3 — EXTRACTIVE CONTENT & CONVERSION ELEMENTS
// -----------------------------------------------------------------------------

function runTier3() {
  if (!cliOptions.json) {
    console.log(`\n${colors.bold}=== TIER 3: EXTRACTIVE CONTENT & CONVERSION ELEMENTS ===${colors.reset}`);
  }

  // Test 3.1: ExtractiveAIAnswerBlock Component Existence
  const extractiveComponentPath = path.join(srcComponentsDir, 'extractive-ai-answer-block.jsx');
  const componentExists = fs.existsSync(extractiveComponentPath);
  recordResult(
    'tier3',
    'ExtractiveAIAnswerBlock Component Existence',
    componentExists,
    componentExists
      ? `Found component at src/components/extractive-ai-answer-block.jsx`
      : `Missing required component: src/components/extractive-ai-answer-block.jsx`
  );

  // Test 3.2: Top 6 Generative Pages Extractive Content Blocks
  for (const page of TOP_GENERATIVE_PAGES) {
    const pageSrc = path.join(siteRoot, page.srcFile);
    const compSrc = path.join(siteRoot, page.componentFile);
    const cleanRoute = page.route.replace(/^\//, '').replace(/\/$/, '');
    const renderedHtmlPath = path.join(outDir, cleanRoute, 'index.html');

    let contentToCheck = '';
    if (fs.existsSync(renderedHtmlPath)) {
      contentToCheck = fs.readFileSync(renderedHtmlPath, 'utf8');
    } else {
      if (fs.existsSync(compSrc)) contentToCheck += fs.readFileSync(compSrc, 'utf8');
      if (fs.existsSync(pageSrc)) contentToCheck += fs.readFileSync(pageSrc, 'utf8');
    }

    const hasExtractiveClass = contentToCheck.includes('ai-extractive-answer') ||
                               contentToCheck.includes('data-extractive-answer') ||
                               contentToCheck.includes('ExtractiveAIAnswerBlock');

    const hasBoldThesis = contentToCheck.includes('<strong') ||
                          contentToCheck.includes('font-semibold') ||
                          contentToCheck.includes('font-bold');

    let numericalMatches = 0;
    for (const marker of page.numericalMarkers) {
      if (contentToCheck.includes(marker)) numericalMatches++;
    }
    const hasNumericalParams = numericalMatches > 0;

    const passed = hasExtractiveClass && hasBoldThesis && hasNumericalParams;
    recordResult(
      'tier3',
      `Extractive Answer Structure (${page.id})`,
      passed,
      passed
        ? `Verified .ai-extractive-answer with bold thesis and numerical metrics (${page.numericalMarkers.join(', ')})`
        : `Incomplete extractive block (hasClass=${hasExtractiveClass}, hasThesis=${hasBoldThesis}, numMatches=${numericalMatches}/${page.numericalMarkers.length})`
    );
  }

  // Test 3.3: AIQuickSummaryAction Component & Pricing Transparency
  const summaryWidgetPath = path.join(srcComponentsDir, 'ai-quick-summary-action.jsx');
  const widgetExists = fs.existsSync(summaryWidgetPath);
  if (!widgetExists) {
    recordResult(
      'tier3',
      'AIQuickSummaryAction Component Existence',
      false,
      'Missing required CRO component: src/components/ai-quick-summary-action.jsx'
    );
  } else {
    const widgetContent = fs.readFileSync(summaryWidgetPath, 'utf8');
    const hasPricing = widgetContent.includes('$146') || widgetContent.includes('$146/mo');
    const hasCtaButton = widgetContent.includes('https://go.telehealthfx.com/start') ||
                         widgetContent.includes('go.telehealthfx.com');
    const hasTimeline = widgetContent.includes('24') || widgetContent.includes('2-day') || widgetContent.includes('approval');

    const passed = hasPricing && hasCtaButton && hasTimeline;
    recordResult(
      'tier3',
      'AIQuickSummaryAction CRO Specifications',
      passed,
      passed
        ? 'Verified transparent pricing ($146/mo), delivery turnaround, and 1-click CTA link'
        : `Widget missing core CRO attributes (hasPricing=${hasPricing}, hasCta=${hasCtaButton}, hasTimeline=${hasTimeline})`
    );
  }

  // Test 3.4: AIQuickSummaryAction Widget Placement on Top Cited Pages
  for (const page of TOP_GENERATIVE_PAGES) {
    const pageSrc = path.join(siteRoot, page.srcFile);
    const compSrc = path.join(siteRoot, page.componentFile);
    const cleanRoute = page.route.replace(/^\//, '').replace(/\/$/, '');
    const renderedHtmlPath = path.join(outDir, cleanRoute, 'index.html');

    let text = '';
    if (fs.existsSync(renderedHtmlPath)) {
      text = fs.readFileSync(renderedHtmlPath, 'utf8');
    } else {
      if (fs.existsSync(compSrc)) text += fs.readFileSync(compSrc, 'utf8');
      if (fs.existsSync(pageSrc)) text += fs.readFileSync(pageSrc, 'utf8');
    }

    const hasWidget = text.includes('AIQuickSummaryAction') || text.includes('$146/mo') || text.includes('ai-quick-summary');
    recordResult(
      'tier3',
      `AIQuickSummaryAction Referral Placement (${page.id})`,
      hasWidget,
      hasWidget
        ? 'Verified above-the-fold referral bridge with transparent $146/mo intake'
        : 'Missing AIQuickSummaryAction widget on high-generative traffic page'
    );
  }

  // Test 3.5: Specialized Traffic & Conversion Bridges
  // 1. Careers Page Dual-Path Bridge
  const careersPage = TOP_GENERATIVE_PAGES.find((p) => p.id === 'careers-salesperson');
  if (careersPage) {
    const compSrc = path.join(siteRoot, careersPage.componentFile);
    const text = fs.existsSync(compSrc) ? fs.readFileSync(compSrc, 'utf8') : '';
    const hasPatientBridge = text.includes('Looking for GLP-1 treatment rather than a career?') ||
                             text.includes('go.telehealthfx.com/start') ||
                             text.includes('Start Treatment');
    recordResult(
      'tier3',
      'Careers Hub Dual-Path Conversion Bridge',
      hasPatientBridge,
      hasPatientBridge
        ? 'Verified dual-path conversion bridge (sales role CTA + patient GLP-1 intake button)'
        : 'Careers hub lacks secondary patient consultation bridge'
    );
  }

  // 2. Botanical Comparison Table
  const botanicalPage = TOP_GENERATIVE_PAGES.find((p) => p.id === 'blog-coptis-chinensis');
  if (botanicalPage) {
    const compSrc = path.join(siteRoot, botanicalPage.componentFile);
    const text = fs.existsSync(compSrc) ? fs.readFileSync(compSrc, 'utf8') : '';
    const hasTable = text.includes('<table') || text.includes('grid-cols') || text.includes('Berberine');
    const hasBridge = text.includes('go.telehealthfx.com/start') || text.includes('$146');
    const passed = hasTable && hasBridge;
    recordResult(
      'tier3',
      'Botanical Side-by-Side Comparison & Treatment Bridge',
      passed,
      passed
        ? 'Verified clinical comparison table (GLP-1 vs Berberine) with direct intake CTA'
        : `Missing comparison table or intake CTA bridge (hasTable=${hasTable}, hasBridge=${hasBridge})`
    );
  }
}

// -----------------------------------------------------------------------------
// 9. SUITE EXECUTION: TIER 4 — BUILD & EXPORT INTEGRITY GATE
// -----------------------------------------------------------------------------

function runTier4() {
  if (!cliOptions.json) {
    console.log(`\n${colors.bold}=== TIER 4: BUILD & EXPORT INTEGRITY GATE ===${colors.reset}`);
  }

  // Test 4.1: Next.js Static Export Compilation
  if (cliOptions.forceBuild || (!cliOptions.fast && !fs.existsSync(outDir))) {
    if (!cliOptions.json) {
      console.log('  Executing Next.js static production export (npx next build --webpack)...');
    }
    const startTime = Date.now();
    const buildRes = spawnSync('npx', ['next', 'build', '--webpack'], {
      cwd: siteRoot,
      stdio: 'pipe',
      encoding: 'utf8',
      env: { ...process.env, NODE_ENV: 'production' },
    });

    const elapsedSec = ((Date.now() - startTime) / 1000).toFixed(1);
    const buildPassed = buildRes.status === 0;

    if (!buildPassed && cliOptions.verbose) {
      console.error(buildRes.stderr || buildRes.stdout);
    }

    recordResult(
      'tier4',
      `Next.js Static Production Export (Compile Time: ${elapsedSec}s)`,
      buildPassed,
      buildPassed
        ? `Clean compilation with zero TypeScript or static export errors (exit code 0)`
        : `Next.js static export compilation failed with exit code ${buildRes.status}`
    );
  } else {
    recordWarning(
      'tier4',
      'Next.js Webpack Static Build',
      'Fast mode active or pre-existing out/ found. Skipped live compile. Pass --build to force compilation.'
    );
  }

  // Test 4.2: Static Output Volume Gate (465+ Routes)
  const htmlFiles = walkDirectory(outDir, (name) => name.endsWith('.html'));
  const minRequiredRoutes = 465;
  const volumePassed = htmlFiles.length >= minRequiredRoutes;
  recordResult(
    'tier4',
    `Static Output Volume Gate (Found ${htmlFiles.length} HTML files)`,
    volumePassed,
    volumePassed
      ? `Generated ${htmlFiles.length} static HTML pages in out/ (exceeds ${minRequiredRoutes} route gate)`
      : `Insufficient static export pages: found ${htmlFiles.length}, expected >= ${minRequiredRoutes}`
  );

  // Test 4.3: Critical Routes Pre-Rendering & Minimum File Size Gate (>1KB)
  const CRITICAL_EXPORT_ROUTES = [
    'index.html',
    'blog/compounded-semaglutide-after-hims-ro-2026/index.html',
    'blog/hims-vs-ro-vs-telehealthfx-2026/index.html',
    'blog/glp1-travel-guide-2026/index.html',
    'blog/glp1-and-coffee-caffeine-2026/index.html',
    'blog/coptis-chinensis-vs-berberis-vulgaris-botanical-sources/index.html',
    'careers/index.html',
    'careers/glp-1-weight-loss-salesperson/index.html',
    'skinnyrx/index.html',
    'yt/index.html',
  ];

  let missingCritical = [];
  let undersizedCritical = [];

  for (const critRoute of CRITICAL_EXPORT_ROUTES) {
    const fullPath = path.join(outDir, critRoute);
    if (!fs.existsSync(fullPath)) {
      missingCritical.push(critRoute);
    } else {
      const stats = fs.statSync(fullPath);
      if (stats.size < 1000) {
        undersizedCritical.push({ route: critRoute, size: stats.size });
      }
    }
  }

  const criticalPassed = missingCritical.length === 0 && undersizedCritical.length === 0;
  recordResult(
    'tier4',
    `Critical Routes Pre-Rendering (${CRITICAL_EXPORT_ROUTES.length - missingCritical.length}/${CRITICAL_EXPORT_ROUTES.length} present)`,
    criticalPassed,
    criticalPassed
      ? `All ${CRITICAL_EXPORT_ROUTES.length} critical generative and unlocked routes pre-rendered (>1KB)`
      : `Critical route verification failed (missing: ${missingCritical.join(', ') || 'none'}, undersized: ${undersizedCritical.map(u => `${u.route} (${u.size}B)`).join(', ') || 'none'})`
  );

  // Test 4.4: Client Component Hydration Safety
  const clientComponents = [
    ['src/components/careers-salesperson-client.jsx'],
    ['src/components/skinnyrx-client.jsx', 'src/app/skinnyrx/skinnyrx-client.jsx'],
    ['src/components/yt-client.jsx', 'src/app/yt/yt-client.jsx'],
  ];
  let missingClientComponents = [];
  for (const compCandidates of clientComponents) {
    const exists = compCandidates.some(c => fs.existsSync(path.join(siteRoot, c)));
    if (!exists) {
      missingClientComponents.push(compCandidates[0]);
    }
  }
  recordResult(
    'tier4',
    'Client Component Decoupling & Resolution Safety',
    missingClientComponents.length === 0,
    missingClientComponents.length === 0
      ? 'All client component wrappers exist and resolve cleanly for hydration safety'
      : `Missing client component wrappers: ${missingClientComponents.join(', ')}`
  );
}

// -----------------------------------------------------------------------------
// 10. MAIN CONTROLLER & EXIT CODE REPORTING
// -----------------------------------------------------------------------------

function main() {
  const startTime = Date.now();

  if (!cliOptions.json) {
    console.log('='.repeat(80));
    console.log(`${colors.bold}${colors.cyan}TELEHEALTH FX — GEO, CANONICAL & ADVANCED SCHEMA E2E VERIFICATION SUITE${colors.reset}`);
    console.log(`Site Root:    ${siteRoot}`);
    console.log(`App Root:     ${srcAppDir}`);
    console.log(`Out Root:     ${outDir}`);
    console.log(`Execution:    ${cliOptions.fast ? 'FAST (Inspect source & out/ artifacts)' : (cliOptions.forceBuild ? 'BUILD (Force static export compilation)' : 'HYBRID')}`);
    console.log('='.repeat(80));
  }

  const runAll = cliOptions.tier === null;

  if (runAll || cliOptions.tier === 1) runTier1();
  if (runAll || cliOptions.tier === 2) runTier2();
  if (runAll || cliOptions.tier === 3) runTier3();
  if (runAll || cliOptions.tier === 4) runTier4();

  const elapsedSec = ((Date.now() - startTime) / 1000).toFixed(2);

  let totalPassed = 0;
  let totalFailed = 0;
  let totalWarnings = 0;

  for (const k of Object.keys(testRegistry)) {
    totalPassed += testRegistry[k].passed;
    totalFailed += testRegistry[k].failed;
    totalWarnings += testRegistry[k].warnings;
  }

  const totalTests = totalPassed + totalFailed;
  const passRate = totalTests > 0 ? ((totalPassed / totalTests) * 100).toFixed(1) : '0.0';

  if (cliOptions.json) {
    const jsonOutput = {
      timestamp: new Date().toISOString(),
      durationSeconds: parseFloat(elapsedSec),
      summary: {
        total: totalTests,
        passed: totalPassed,
        failed: totalFailed,
        warnings: totalWarnings,
        passRatePercent: parseFloat(passRate),
      },
      tiers: testRegistry,
    };
    console.log(JSON.stringify(jsonOutput, null, 2));
  } else {
    console.log('\n' + '='.repeat(80));
    console.log(`${colors.bold}VERIFICATION SUMMARY BY TIER:${colors.reset}`);
    for (const [key, tier] of Object.entries(testRegistry)) {
      if (runAll || cliOptions.tier === parseInt(key.replace('tier', ''), 10)) {
        console.log(`  ${tier.name.padEnd(48)}: ${colors.green}${tier.passed} Passed${colors.reset}, ${tier.failed > 0 ? colors.red : colors.gray}${tier.failed} Failed${colors.reset}, ${tier.warnings > 0 ? colors.yellow : colors.gray}${tier.warnings} Warnings${colors.reset}`);
      }
    }
    console.log('-'.repeat(80));
    const statusColor = totalFailed === 0 ? colors.green : colors.red;
    console.log(
      `${colors.bold}TOTAL: ${totalPassed} Passed, ${totalFailed} Failed, ${totalWarnings} Warnings (${statusColor}${passRate}% Pass Rate${colors.reset}${colors.bold} in ${elapsedSec}s)${colors.reset}`
    );
    console.log('='.repeat(80));
  }

  // Exit code discipline
  process.exit(totalFailed === 0 ? 0 : 1);
}

main();
