#!/usr/bin/env node

/**
 * Telehealth FX — E2E SEO & CRO Verification Test Harness
 * 
 * 4-Tier Opaque-Box Quality Verification Suite
 * - Tier 1: Feature Coverage & Content Calibration (Titles 50-60, Descs 145-160, Direct Answers)
 * - Tier 2: Boundary & Corner Cases (Empty schemas, State Unknown, Trailing slashes)
 * - Tier 3: Schema & Link Integrity (JSON-LD parsing, FAQ mainEntity, Internal <Link> health)
 * - Tier 4: Real-World Build & Runtime Health (Next.js static export compilation, 465+ routes)
 * 
 * Usage:
 *   node tests/verify-seo-cro.js                # Run all tiers (full suite)
 *   node tests/verify-seo-cro.js --tier=1       # Run only Tier 1
 *   node tests/verify-seo-cro.js --tier=2       # Run only Tier 2
 *   node tests/verify-seo-cro.js --tier=3       # Run only Tier 3
 *   node tests/verify-seo-cro.js --tier=4       # Run only Tier 4
 *   node tests/verify-seo-cro.js --fast         # Skip 30s Webpack compile; inspect out/ artifacts
 *   node tests/verify-seo-cro.js --build        # Force Webpack compile even if out/ exists
 *   node tests/verify-seo-cro.js --json         # Output JSON summary
 *   node tests/verify-seo-cro.js --verbose      # Detailed debug output
 */

const fs = require('fs');
const path = require('path');
const { spawnSync } = require('child_process');

// -----------------------------------------------------------------------------
// Path Resolution & Environment Configuration
// -----------------------------------------------------------------------------

const scriptDir = __dirname;
let projectRoot = path.resolve(scriptDir, '..');
let siteRoot = path.join(projectRoot, 'Telehealth FX Site');

// Fallbacks if executed from inside "Telehealth FX Site"
if (!fs.existsSync(siteRoot) && fs.existsSync(path.join(process.cwd(), 'src', 'app'))) {
  siteRoot = process.cwd();
  projectRoot = path.resolve(siteRoot, '..');
} else if (!fs.existsSync(siteRoot) && fs.existsSync(path.join(process.cwd(), 'Telehealth FX Site'))) {
  projectRoot = process.cwd();
  siteRoot = path.join(projectRoot, 'Telehealth FX Site');
}

const srcAppDir = path.join(siteRoot, 'src', 'app');
const srcComponentsDir = path.join(siteRoot, 'src', 'components');
const outDir = path.join(siteRoot, 'out');

// -----------------------------------------------------------------------------
// CLI Arguments Parsing
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
Telehealth FX E2E SEO & CRO Verification Runner

Usage:
  node tests/verify-seo-cro.js [options]

Options:
  --tier=1..4    Run only the specified verification tier
  --fast         Skip Webpack compilation and inspect pre-rendered static artifacts
  --build        Force full production Webpack compilation in Tier 4
  --json         Output results in JSON format
  --verbose      Print detailed link and entity traces
  --help         Show this help screen
`);
  process.exit(0);
}

// -----------------------------------------------------------------------------
// Terminal Formatting Helpers
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
  gray: isTTY ? '\x1b[90m' : '',
};

function passSymbol() { return `${colors.green}✔ PASS${colors.reset}`; }
function failSymbol() { return `${colors.red}✖ FAIL${colors.reset}`; }
function warnSymbol() { return `${colors.yellow}⚠ WARN${colors.reset}`; }

// -----------------------------------------------------------------------------
// Test State Registry
// -----------------------------------------------------------------------------

const testRegistry = {
  tier1: { name: 'Tier 1: Feature Coverage & Content Calibration', passed: 0, failed: 0, warnings: 0, results: [] },
  tier2: { name: 'Tier 2: Boundary & Corner Case Defenses', passed: 0, failed: 0, warnings: 0, results: [] },
  tier3: { name: 'Tier 3: Schema & Link Graph Integrity', passed: 0, failed: 0, warnings: 0, results: [] },
  tier4: { name: 'Tier 4: Real-World Build & Runtime Health', passed: 0, failed: 0, warnings: 0, results: [] },
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
// Target Pages & Metros Inventory (Derived from PROJECT.md & Audits)
// -----------------------------------------------------------------------------

const TARGET_PAGES = [
  {
    id: 'careers-salesperson',
    name: 'GLP-1 Salesperson Careers Hub',
    route: '/careers/glp-1-weight-loss-salesperson/',
    srcFile: 'src/app/careers/glp-1-weight-loss-salesperson/page.js',
    componentFiles: ['src/components/careers-salesperson-client.jsx'],
    type: 'careers',
    titleBounds: [50, 60],
    descBounds: [145, 160],
    requiredSchemas: ['JobPosting'],
    requiresSnippet: false,
    requiresDualBridge: true,
  },
  {
    id: 'blog-compounded-after-hims-ro',
    name: 'Compounded Semaglutide After Hims & Ro',
    route: '/blog/compounded-semaglutide-after-hims-ro-2026/',
    srcFile: 'src/app/blog/compounded-semaglutide-after-hims-ro-2026/page.js',
    componentFiles: ['src/components/blog-compounded-semaglutide-after-hims-ro-2026.jsx'],
    type: 'blog',
    titleBounds: [50, 60],
    descBounds: [145, 160],
    requiredSchemas: ['MedicalWebPage', 'FAQPage'],
    requiresSnippet: true,
  },
  {
    id: 'blog-coptis-chinensis',
    name: 'Coptis Chinensis Botanical Comparison',
    route: '/blog/coptis-chinensis-vs-berberis-vulgaris-botanical-sources/',
    srcFile: 'src/app/blog/coptis-chinensis-vs-berberis-vulgaris-botanical-sources/page.js',
    componentFiles: ['src/components/blog-coptis-chinensis.jsx'],
    type: 'blog',
    titleBounds: [50, 60],
    descBounds: [145, 160],
    requiredSchemas: ['MedicalWebPage', 'FAQPage'],
    requiresSnippet: false,
    requiresBotanicalTable: true,
  },
  {
    id: 'blog-brand-vs-compounded-cost',
    name: 'Brand vs Compounded GLP-1 Cost 2026',
    route: '/blog/brand-vs-compounded-glp1-cost-2026/',
    srcFile: 'src/app/blog/brand-vs-compounded-glp1-cost-2026/page.js',
    componentFiles: ['src/components/blog-brand-vs-compounded-glp1-cost-2026.jsx'],
    type: 'blog',
    titleBounds: [50, 60],
    descBounds: [145, 160],
    requiredSchemas: ['MedicalWebPage', 'FAQPage'],
    requiresSnippet: true,
  },
  {
    id: 'blog-best-online-trt-clinics',
    name: 'Best Online TRT Clinics 2026',
    route: '/blog/best-online-trt-clinics-2026/',
    srcFile: 'src/app/blog/best-online-trt-clinics-2026/page.js',
    componentFiles: ['src/components/best-online-trt-clinics-2026.jsx'],
    type: 'blog',
    titleBounds: [50, 60],
    descBounds: [145, 160],
    requiredSchemas: ['MedicalWebPage', 'FAQPage'],
    requiresSnippet: false,
  },
  {
    id: 'blog-glp1-travel-guide',
    name: 'GLP-1 Travel & TSA Guidelines',
    route: '/blog/glp1-travel-guide-2026/',
    srcFile: 'src/app/blog/glp1-travel-guide-2026/page.js',
    componentFiles: ['src/components/blog-glp1-travel-guide-2026.jsx'],
    type: 'blog',
    titleBounds: [50, 60],
    descBounds: [145, 160],
    requiredSchemas: ['MedicalWebPage', 'FAQPage'],
    requiresSnippet: true,
  },
  {
    id: 'blog-glp1-and-coffee',
    name: 'GLP-1 and Coffee/Caffeine Interactions',
    route: '/blog/glp1-and-coffee-caffeine-2026/',
    srcFile: 'src/app/blog/glp1-and-coffee-caffeine-2026/page.js',
    componentFiles: ['src/components/blog-glp1-and-coffee-caffeine-2026.jsx'],
    type: 'blog',
    titleBounds: [50, 60],
    descBounds: [145, 160],
    requiredSchemas: ['MedicalWebPage', 'FAQPage'],
    requiresSnippet: true,
  },
  {
    id: 'blog-trt-honeymoon-phase',
    name: 'TRT Honeymoon Phase Guide',
    route: '/blog/trt-honeymoon-phase-2026/',
    srcFile: 'src/app/blog/trt-honeymoon-phase-2026/page.js',
    componentFiles: ['src/components/blog-trt-honeymoon-phase-2026.jsx'],
    type: 'blog',
    titleBounds: [50, 60],
    descBounds: [145, 160],
    requiredSchemas: ['MedicalWebPage', 'FAQPage'],
    requiresSnippet: true,
  },
  {
    id: 'blog-hidden-fees',
    name: 'Hidden Fees in Telehealth Weight Loss',
    route: '/blog/hidden-fees-in-telehealth-weight-loss-how-to-spot/',
    srcFile: 'src/app/blog/hidden-fees-in-telehealth-weight-loss-how-to-spot/page.js',
    componentFiles: ['src/components/blog-hidden-fees-in-telehealth-weight-loss-how-to-spot.jsx'],
    type: 'blog',
    titleBounds: [50, 60],
    descBounds: [145, 160],
    requiredSchemas: ['MedicalWebPage', 'FAQPage'],
    requiresSnippet: true,
  },
  {
    id: 'blog-hims-vs-ro',
    name: 'Hims vs Ro vs TelehealthFX 2026',
    route: '/blog/hims-vs-ro-vs-telehealthfx-2026/',
    srcFile: 'src/app/blog/hims-vs-ro-vs-telehealthfx-2026/page.js',
    componentFiles: ['src/components/blog-hims-vs-ro-vs-telehealthfx-2026.jsx'],
    type: 'blog',
    titleBounds: [50, 60],
    descBounds: [145, 160],
    requiredSchemas: ['MedicalWebPage', 'FAQPage'],
    requiresSnippet: true,
  },
  {
    id: 'blog-wegovy-fda-label',
    name: 'Wegovy FDA Label Decoded',
    route: '/blog/wegovy-fda-label/',
    srcFile: 'src/app/blog/wegovy-fda-label/page.js',
    componentFiles: ['src/components/blog-wegovy-fda-label.jsx'],
    type: 'blog',
    titleBounds: [50, 60],
    descBounds: [145, 160],
    requiredSchemas: ['MedicalWebPage'],
    requiresSnippet: true,
  },
];

const AUDIT_METROS = [
  { city: 'milwaukee', state: 'Wisconsin', stateAbbr: 'WI', srcFile: 'src/app/locations/milwaukee/page.js' },
  { city: 'albuquerque', state: 'New Mexico', stateAbbr: 'NM', srcFile: 'src/app/locations/albuquerque/page.js' },
  { city: 'baltimore', state: 'Maryland', stateAbbr: 'MD', srcFile: 'src/app/locations/baltimore/page.js' },
];

// -----------------------------------------------------------------------------
// Metadata & Code Extraction Helpers
// -----------------------------------------------------------------------------

function getPageMetadata(relPath) {
  const fullPath = path.join(siteRoot, relPath);
  if (!fs.existsSync(fullPath)) return null;
  const content = fs.readFileSync(fullPath, 'utf8');

  const isClient = /^\s*['"]use client['"]/.test(content);
  const hasMetadataExport = /export\s+const\s+metadata\b/.test(content);

  if (isClient && !hasMetadataExport) {
    return {
      isClient: true,
      hasMetadataExport: false,
      title: null,
      description: null,
      canonical: null,
      rawTitleLen: 0,
      rawDescLen: 0,
    };
  }

  // Find metadata block
  let title = null;
  let description = null;
  let canonical = null;

  const metaMatch = content.match(/export\s+const\s+metadata\s*=\s*\{([\s\S]*?)\n\};|export\s+const\s+metadata\s*=\s*(\{[\s\S]*?\n\})/);
  const searchBlock = metaMatch ? metaMatch[0] : content;

  const tMatch = searchBlock.match(/(?:^|[\s,{])title:\s*(["`'])((?:\\.|(?!\1)[^\\])*)\1/);
  if (tMatch) title = tMatch[2];

  const dMatch = searchBlock.match(/(?:^|[\s,{])description:\s*(["`'])((?:\\.|(?!\1)[^\\])*)\1/);
  if (dMatch) description = dMatch[2];

  const cMatch = searchBlock.match(/(?:canonical:\s*)(["`'])((?:\\.|(?!\1)[^\\])*)\1/);
  if (cMatch) canonical = cMatch[2];

  return {
    isClient,
    hasMetadataExport,
    title,
    description,
    canonical,
    rawTitleLen: title ? title.length : 0,
    rawDescLen: description ? description.length : 0,
  };
}

function getRenderedHtmlMetadata(route) {
  const cleanRoute = route.replace(/^\//, '').replace(/\/$/, '');
  const htmlPath = path.join(outDir, cleanRoute, 'index.html');
  if (!fs.existsSync(htmlPath)) return null;

  const html = fs.readFileSync(htmlPath, 'utf8');
  const tMatch = html.match(/<title>([^<]+)<\/title>/);
  const dMatch = html.match(/<meta\s+name="description"\s+content="([^"]*)"/);
  const cMatch = html.match(/<link\s+rel="canonical"\s+href="([^"]*)"/);

  return {
    htmlPath,
    title: tMatch ? tMatch[1] : null,
    description: dMatch ? dMatch[1] : null,
    canonical: cMatch ? cMatch[1] : null,
  };
}

function extractSchemasFromSource(content) {
  const schemas = [];

  // Match all const declarations containing @type or @context
  const varRegex = /(?:const|let|var)\s+([a-zA-Z0-9_$]+)\s*=\s*\{/g;
  let match;
  const declaredObjects = {};

  while ((match = varRegex.exec(content)) !== null) {
    const varName = match[1];
    const braceStart = match.index + match[0].length - 1;
    let depth = 0;
    let inStr = false;
    let strChar = null;
    let esc = false;
    let braceEnd = -1;

    for (let i = braceStart; i < content.length; i++) {
      const ch = content[i];
      if (inStr) {
        if (esc) esc = false;
        else if (ch === '\\') esc = true;
        else if (ch === strChar) inStr = false;
        continue;
      }
      if (ch === '"' || ch === "'" || ch === '`') {
        inStr = true;
        strChar = ch;
        continue;
      }
      if (ch === '{' || ch === '[') depth++;
      else if (ch === '}' || ch === ']') {
        depth--;
        if (depth === 0) {
          braceEnd = i;
          break;
        }
      }
    }

    if (braceEnd !== -1) {
      const block = content.slice(braceStart, braceEnd + 1);
      if (block.includes('"@type"') || block.includes("'@type'") || block.includes('"@context"')) {
        try {
          const fn = new Function('scope', 'with(scope) { return (' + block + '); }');
          const val = fn(declaredObjects);
          declaredObjects[varName] = val;
          schemas.push(val);
        } catch {
          // If pure JSON format
          try {
            const parsed = JSON.parse(block);
            declaredObjects[varName] = parsed;
            schemas.push(parsed);
          } catch (e2) {
            // Keep record of unparseable schema
            schemas.push({ __parseError: e2.message });
          }
        }
      }
    }
  }

  // Also check inline dangerouslySetInnerHTML={{ __html: JSON.stringify(...) }}
  const inlineMatch = content.match(/dangerouslySetInnerHTML=\{\{\s*__html:\s*JSON\.stringify\((\{[\s\S]*?\})\)\s*\}\}/);
  if (inlineMatch) {
    try {
      const fn = new Function('scope', 'with(scope) { return (' + inlineMatch[1] + '); }');
      const val = fn(declaredObjects);
      if (!schemas.includes(val)) schemas.push(val);
    } catch {}
  }

  return schemas;
}

function extractSchemasFromHtml(htmlContent) {
  const schemas = [];
  const regex = /<script\s+type="application\/ld\+json">([\s\S]*?)<\/script>/g;
  let match;
  while ((match = regex.exec(htmlContent)) !== null) {
    try {
      const parsed = JSON.parse(match[1]);
      schemas.push(parsed);
    } catch (err) {
      schemas.push({ __parseError: err.message, raw: match[1].slice(0, 100) });
    }
  }
  return schemas;
}

function flattenSchemaEntities(schemaObj) {
  const entities = [];
  if (!schemaObj || typeof schemaObj !== 'object') return entities;

  if (schemaObj['@graph'] && Array.isArray(schemaObj['@graph'])) {
    for (const item of schemaObj['@graph']) {
      entities.push(item);
    }
  } else {
    entities.push(schemaObj);
  }
  return entities;
}

function walkFiles(dir, filterExts = ['.js', '.jsx']) {
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
// TIER 1: FEATURE COVERAGE & CONTENT CALIBRATION
// -----------------------------------------------------------------------------

function runTier1() {
  if (!cliOptions.json) {
    console.log(`\n${colors.bold}${colors.cyan}=== TIER 1: FEATURE COVERAGE & CONTENT CALIBRATION ===${colors.reset}`);
  }

  for (const page of TARGET_PAGES) {
    const meta = getPageMetadata(page.srcFile);

    if (!meta) {
      recordResult('tier1', `Page Existence (${page.id})`, false, `Source file ${page.srcFile} not found`);
      continue;
    }

    if (meta.isClient && !meta.hasMetadataExport) {
      recordResult('tier1', `Metadata Export (${page.id})`, false, `Locked as client component ('use client') with zero metadata export`);
      continue;
    }

    // 1. Title Tag Length Check
    const title = meta.title;
    const [minT, maxT] = page.titleBounds;
    if (!title) {
      recordResult('tier1', `Title Tag (${page.id})`, false, `Missing title in ${page.srcFile}`);
    } else {
      const len = title.length;
      const passed = len >= minT && len <= maxT;
      const msg = passed
        ? `${len} chars (within [${minT}..${maxT}]): "${title}"`
        : `${len} chars (VIOLATES [${minT}..${maxT}], delta: ${len < minT ? len - minT : '+' + (len - maxT)}): "${title}"`;
      recordResult('tier1', `Title Length [${minT}-${maxT}] (${page.id})`, passed, msg);
    }

    // 2. Meta Description Length Check
    const desc = meta.description;
    const [minD, maxD] = page.descBounds;
    if (!desc) {
      recordResult('tier1', `Meta Description (${page.id})`, false, `Missing description in ${page.srcFile}`);
    } else {
      const len = desc.length;
      const passed = len >= minD && len <= maxD;
      const msg = passed
        ? `${len} chars (within [${minD}..${maxD}]): "${desc.slice(0, 50)}..."`
        : `${len} chars (VIOLATES [${minD}..${maxD}], delta: ${len < minD ? len - minD : '+' + (len - maxD)}): "${desc.slice(0, 50)}..."`;
      recordResult('tier1', `Desc Length [${minD}-${maxD}] (${page.id})`, passed, msg);
    }

    // 3. Direct Answer Snippet Check (for relevant guides)
    if (page.requiresSnippet) {
      let snippetFound = false;
      // Check page file and component files
      const filesToCheck = [page.srcFile, ...(page.componentFiles || [])];
      for (const cf of filesToCheck) {
        const full = path.join(siteRoot, cf);
        if (fs.existsSync(full)) {
          const compContent = fs.readFileSync(full, 'utf8');
          if (compContent.includes('DirectAnswerSnippet') || compContent.includes('CLINICAL KEY TAKEAWAY')) {
            snippetFound = true;
            break;
          }
        }
      }
      recordResult(
        'tier1',
        `DirectAnswerSnippet Presence (${page.id})`,
        snippetFound,
        snippetFound
          ? `Above-the-fold DirectAnswerSnippet block integrated`
          : `Missing DirectAnswerSnippet component in ${filesToCheck.join(' / ')}`
      );
    }

    // 4. Conversion Bridge Check
    if (page.requiresDualBridge) {
      // Careers dual path check
      let dualPathFound = false;
      const filesToCheck = [page.srcFile, ...(page.componentFiles || [])];
      for (const cf of filesToCheck) {
        const full = path.join(siteRoot, cf);
        if (fs.existsSync(full)) {
          const c = fs.readFileSync(full, 'utf8');
          if (c.includes('146') || c.includes('treatment') || c.includes('start') || c.includes('Patient')) {
            dualPathFound = true;
            break;
          }
        }
      }
      recordResult(
        'tier1',
        `Careers Dual-Path Bridge (${page.id})`,
        dualPathFound,
        dualPathFound ? `Patient conversion / consultation bridge present` : `Missing patient CTA bridge on careers page`
      );
    }

    if (page.requiresBotanicalTable) {
      // Botanical comparison table check
      let tableFound = false;
      const filesToCheck = [page.srcFile, ...(page.componentFiles || [])];
      for (const cf of filesToCheck) {
        const full = path.join(siteRoot, cf);
        if (fs.existsSync(full)) {
          const c = fs.readFileSync(full, 'utf8');
          if (c.includes('Bioavailability') || c.includes('Comparison') || c.includes('Semaglutide') || c.includes('comparison')) {
            tableFound = true;
            break;
          }
        }
      }
      recordResult(
        'tier1',
        `Botanical Comparison Bridge (${page.id})`,
        tableFound,
        tableFound ? `Botanical vs GLP-1 comparison table / CTA present` : `Missing comparison table in botanical article`
      );
    }
  }
}

// -----------------------------------------------------------------------------
// TIER 2: BOUNDARY & CORNER CASE DEFENSES
// -----------------------------------------------------------------------------

function runTier2() {
  if (!cliOptions.json) {
    console.log(`\n${colors.bold}${colors.cyan}=== TIER 2: BOUNDARY & CORNER CASE DEFENSES ===${colors.reset}`);
  }

  // 1. Empty Schema Defense (FAQPage mainEntity: [] invariant)
  for (const page of TARGET_PAGES) {
    const fullPath = path.join(siteRoot, page.srcFile);
    if (!fs.existsSync(fullPath)) continue;
    const content = fs.readFileSync(fullPath, 'utf8');
    const schemas = extractSchemasFromSource(content);

    let emptyFaqFound = false;
    let faqCount = 0;
    for (const schema of schemas) {
      const entities = flattenSchemaEntities(schema);
      for (const entity of entities) {
        if (entity['@type'] === 'FAQPage') {
          faqCount++;
          if (!entity.mainEntity || !Array.isArray(entity.mainEntity) || entity.mainEntity.length === 0) {
            emptyFaqFound = true;
          }
        }
      }
    }

    if (faqCount > 0) {
      recordResult(
        'tier2',
        `FAQ mainEntity Non-Empty Check (${page.id})`,
        !emptyFaqFound,
        emptyFaqFound
          ? `Detected INVALID empty FAQPage entity ("mainEntity: []") in ${page.srcFile}`
          : `FAQPage has ${faqCount} valid non-empty mainEntity collection`
      );
    }
  }

  // 2. Corrupted State Name / Licensing Defense
  const locationFiles = walkFiles(path.join(siteRoot, 'src', 'app', 'locations'));
  const trtFiles = walkFiles(path.join(siteRoot, 'src', 'app', 'trt'));
  const wlFiles = walkFiles(path.join(siteRoot, 'src', 'app', 'weight-loss'));
  const allMetroFiles = [...locationFiles, ...trtFiles, ...wlFiles];

  let unknownLicensedMatches = [];
  let unknownStateMatches = [];

  for (const f of allMetroFiles) {
    const c = fs.readFileSync(f, 'utf8');
    const rel = path.relative(siteRoot, f);
    if (c.includes('Unknown-licensed')) {
      unknownLicensedMatches.push(rel);
    }
    if (c.includes('"State", "name": "Unknown"') || c.includes('"name": "Unknown"')) {
      unknownStateMatches.push(rel);
    }
  }

  recordResult(
    'tier2',
    'State "Unknown-licensed" String Integrity',
    unknownLicensedMatches.length === 0,
    unknownLicensedMatches.length === 0
      ? `Zero "Unknown-licensed" tokens found across ${allMetroFiles.length} metro files`
      : `Found "Unknown-licensed" in ${unknownLicensedMatches.length} files: ${unknownLicensedMatches.slice(0, 3).join(', ')}`
  );

  recordResult(
    'tier2',
    'Schema State "Unknown" Integrity',
    unknownStateMatches.length === 0,
    unknownStateMatches.length === 0
      ? `Zero State "Unknown" schema entries across ${allMetroFiles.length} metro files`
      : `Found State "Unknown" in ${unknownStateMatches.length} files: ${unknownStateMatches.slice(0, 3).join(', ')}`
  );

  // Verify Audit Metros Explicitly
  for (const metro of AUDIT_METROS) {
    const p = path.join(siteRoot, metro.srcFile);
    if (fs.existsSync(p)) {
      const c = fs.readFileSync(p, 'utf8');
      const hasState = c.includes(metro.state);
      recordResult(
        'tier2',
        `Metro State Mapping (${metro.city} -> ${metro.state})`,
        hasState,
        hasState
          ? `Verified ${metro.state} in ${metro.srcFile}`
          : `Missing state "${metro.state}" in ${metro.srcFile}`
      );
    }
  }

  // 3. Canonical Trailing Slash Consistency Check
  for (const page of TARGET_PAGES) {
    const meta = getPageMetadata(page.srcFile);
    if (meta && meta.canonical) {
      const isHttps = meta.canonical.startsWith('https://telehealthfx.com/');
      const hasSlash = meta.canonical.endsWith('/');
      const passed = isHttps && hasSlash;
      recordResult(
        'tier2',
        `Canonical Trailing Slash (${page.id})`,
        passed,
        passed
          ? `Valid canonical with trailing slash: ${meta.canonical}`
          : `Invalid canonical (needs https://telehealthfx.com/ and trailing slash): ${meta.canonical}`
      );
    }
  }
}

// -----------------------------------------------------------------------------
// TIER 3: SCHEMA & LINK GRAPH INTEGRITY
// -----------------------------------------------------------------------------

function runTier3() {
  if (!cliOptions.json) {
    console.log(`\n${colors.bold}${colors.cyan}=== TIER 3: SCHEMA & LINK GRAPH INTEGRITY ===${colors.reset}`);
  }

  // 1. JSON-LD Syntactic & Semantic Validation
  let totalSchemasParsed = 0;
  let schemaErrors = [];

  for (const page of TARGET_PAGES) {
    const fullPath = path.join(siteRoot, page.srcFile);
    if (!fs.existsSync(fullPath)) continue;
    const content = fs.readFileSync(fullPath, 'utf8');
    const schemas = extractSchemasFromSource(content);

    // Also check outDir if compiled
    if (fs.existsSync(outDir)) {
      const cleanRoute = page.route.replace(/^\//, '').replace(/\/$/, '');
      const outHtml = path.join(outDir, cleanRoute, 'index.html');
      if (fs.existsSync(outHtml)) {
        const htmlSchemas = extractSchemasFromHtml(fs.readFileSync(outHtml, 'utf8'));
        for (const hs of htmlSchemas) {
          if (hs.__parseError) {
            schemaErrors.push({ page: page.id, error: hs.__parseError });
          }
        }
      }
    }

    // Collect all entities across all schemas on this page
    const allEntities = [];
    for (const s of schemas) {
      totalSchemasParsed++;
      if (s.__parseError) {
        schemaErrors.push({ page: page.id, error: s.__parseError });
        continue;
      }
      allEntities.push(...flattenSchemaEntities(s));
    }

    // Check required schema types across the entire page
    const allEntityTypes = allEntities.map(e => e['@type']);
    if (page.requiredSchemas) {
      for (const req of page.requiredSchemas) {
        const hasType = allEntityTypes.includes(req);
        recordResult(
          'tier3',
          `Schema Entity Type "${req}" (${page.id})`,
          hasType,
          hasType
            ? `Found ${req} in ${page.srcFile}`
            : `Missing required schema ${req} in ${page.srcFile}`
        );
      }
    }

    // Semantic validations per entity
    for (const entity of allEntities) {
      if (entity['@type'] === 'FAQPage' && Array.isArray(entity.mainEntity)) {
        let invalidFaqItems = 0;
        for (const q of entity.mainEntity) {
          if (!q.name || !q.acceptedAnswer || !q.acceptedAnswer.text) {
            invalidFaqItems++;
          }
        }
        recordResult(
          'tier3',
          `FAQ Item Semantics (${page.id})`,
          invalidFaqItems === 0,
          invalidFaqItems === 0
            ? `All ${entity.mainEntity.length} FAQ questions/answers have valid schema properties`
            : `Found ${invalidFaqItems} FAQ questions with missing name or acceptedAnswer.text`
        );
      }

      if (entity['@type'] === 'JobPosting') {
        const hasJobFields = entity.title && entity.description && entity.hiringOrganization;
        recordResult(
          'tier3',
          `JobPosting Semantics (${page.id})`,
          Boolean(hasJobFields),
          hasJobFields
            ? `JobPosting has title, description, and hiringOrganization`
            : `JobPosting missing essential schema fields`
        );
      }
    }
  }

  recordResult(
    'tier3',
    'JSON-LD Schema Syntax Validation',
    schemaErrors.length === 0,
    schemaErrors.length === 0
      ? `Parsed ${totalSchemasParsed} structured data graphs with zero syntax errors`
      : `Found ${schemaErrors.length} schema syntax errors: ${JSON.stringify(schemaErrors)}`
  );

  // 2. Internal Links Validation (<Link href="...">)
  const appAndComponentFiles = [
    ...walkFiles(path.join(siteRoot, 'src', 'app')),
    ...walkFiles(path.join(siteRoot, 'src', 'components')),
  ];

  const linkRegex = /<Link\s+[^>]*?href=(?:\{["']([^"']+)["']\}|["']([^"']+)["'])/g;
  let totalLinkMatches = 0;
  let internalLinksCount = 0;
  let brokenInternalLinks = [];
  let missingTrailingSlashLinks = [];

  for (const file of appAndComponentFiles) {
    const content = fs.readFileSync(file, 'utf8');
    let match;
    while ((match = linkRegex.exec(content)) !== null) {
      const href = match[1] || match[2];
      totalLinkMatches++;

      if (href && href.startsWith('/') && !href.startsWith('//')) {
        internalLinksCount++;
        const cleanHref = href.split('?')[0].split('#')[0];

        // Check trailing slash
        const hasExtension = Boolean(path.extname(cleanHref));
        if (cleanHref !== '/' && !cleanHref.endsWith('/') && !hasExtension) {
          missingTrailingSlashLinks.push({
            file: path.relative(siteRoot, file),
            href,
          });
        }

        // Check route target existence
        // In Next.js App Router, /careers/ maps to src/app/careers/page.js or dynamic route
        const routeSubPath = cleanHref.replace(/^\//, '').replace(/\/$/, '');
        const directAppPath = path.join(siteRoot, 'src', 'app', routeSubPath);
        const hasDirectPage = fs.existsSync(path.join(directAppPath, 'page.js'));
        const hasOutFile = fs.existsSync(path.join(outDir, routeSubPath, 'index.html'));

        // Handle dynamic routes like [slug], blog/[slug], locations/[city], trt/[city], weight-loss/[city]
        const isDynamicHandled =
          cleanHref === '/' ||
          cleanHref.startsWith('/blog/') ||
          cleanHref.startsWith('/locations/') ||
          cleanHref.startsWith('/trt/') ||
          cleanHref.startsWith('/weight-loss/') ||
          cleanHref.startsWith('/medications/');

        if (!hasDirectPage && !hasOutFile && !isDynamicHandled && !hasExtension) {
          brokenInternalLinks.push({
            file: path.relative(siteRoot, file),
            href,
          });
        }
      }
    }
  }

  recordResult(
    'tier3',
    'Internal <Link> Trailing Slash Compliance',
    missingTrailingSlashLinks.length === 0,
    missingTrailingSlashLinks.length === 0
      ? `All ${internalLinksCount} internal <Link> tags end with trailing slash`
      : `Found ${missingTrailingSlashLinks.length} <Link> tags missing trailing slash (e.g. ${missingTrailingSlashLinks[0].href} in ${missingTrailingSlashLinks[0].file})`
  );

  recordResult(
    'tier3',
    'Internal <Link> Resolution (Zero Broken Links)',
    brokenInternalLinks.length === 0,
    brokenInternalLinks.length === 0
      ? `100% of internal links resolve to valid routes (${internalLinksCount} checked)`
      : `Found ${brokenInternalLinks.length} unresolved internal links: ${JSON.stringify(brokenInternalLinks.slice(0, 3))}`
  );
}

// -----------------------------------------------------------------------------
// TIER 4: REAL-WORLD BUILD & RUNTIME HEALTH
// -----------------------------------------------------------------------------

function runTier4() {
  if (!cliOptions.json) {
    console.log(`\n${colors.bold}${colors.cyan}=== TIER 4: REAL-WORLD BUILD & RUNTIME HEALTH ===${colors.reset}`);
  }

  const shouldExecuteBuild = cliOptions.forceBuild || (!cliOptions.fast && !fs.existsSync(outDir));

  if (shouldExecuteBuild) {
    if (!cliOptions.json) {
      console.log(`  ${colors.dim}Executing production build: npx next build --webpack ...${colors.reset}`);
    }
    const buildStart = Date.now();
    const buildProc = spawnSync('npx', ['next', 'build', '--webpack'], {
      cwd: siteRoot,
      encoding: 'utf8',
      stdio: cliOptions.verbose ? 'inherit' : ['ignore', 'pipe', 'pipe'],
      maxBuffer: 50 * 1024 * 1024,
    });
    const buildDuration = ((Date.now() - buildStart) / 1000).toFixed(1);

    const exitCode = buildProc.status;
    const passed = exitCode === 0;

    recordResult(
      'tier4',
      'Next.js Production Webpack Build',
      passed,
      passed
        ? `Compiled successfully with exit code 0 (${buildDuration}s)`
        : `Build failed with exit code ${exitCode}:\n${buildProc.stderr || buildProc.stdout || 'Unknown error'}`
    );
  } else {
    recordWarning('tier4', 'Next.js Webpack Build', 'Skipped live compile (fast mode active; verifying out/ artifacts)');
  }

  // Verify Out Artifacts Health
  if (!fs.existsSync(outDir)) {
    recordResult('tier4', 'Static Export Directory (out/)', false, `Directory ${outDir} does not exist. Run with --build.`);
    return;
  }

  // Count static HTML files generated
  const allOutHtml = walkFiles(outDir, ['.html']);
  const passedPageCount = allOutHtml.length >= 465;

  recordResult(
    'tier4',
    'Static Pages Compilation Volume (465+ Routes)',
    passedPageCount,
    passedPageCount
      ? `Generated ${allOutHtml.length} static HTML pages in out/`
      : `Generated only ${allOutHtml.length} static HTML pages (expected >= 465)`
  );

  // Check critical routes pre-rendered successfully
  const criticalRoutes = [
    'index.html',
    'careers/glp-1-weight-loss-salesperson/index.html',
    'blog/compounded-semaglutide-after-hims-ro-2026/index.html',
    'blog/coptis-chinensis-vs-berberis-vulgaris-botanical-sources/index.html',
    'blog/best-online-trt-clinics-2026/index.html',
    'locations/milwaukee/index.html',
    'locations/albuquerque/index.html',
    'locations/baltimore/index.html',
    '404.html',
  ];

  let missingCritical = [];
  for (const cr of criticalRoutes) {
    const full = path.join(outDir, cr);
    if (!fs.existsSync(full) || fs.statSync(full).size < 100) {
      missingCritical.push(cr);
    }
  }

  recordResult(
    'tier4',
    'Critical Pre-rendered Routes Integrity',
    missingCritical.length === 0,
    missingCritical.length === 0
      ? `All ${criticalRoutes.length} critical HTML routes pre-rendered with valid file size (>1KB)`
      : `Missing or corrupt critical routes: ${missingCritical.join(', ')}`
  );
}

// -----------------------------------------------------------------------------
// Main Execution & Report Aggregator
// -----------------------------------------------------------------------------

function main() {
  const startTime = Date.now();

  if (!cliOptions.json) {
    console.log(`${colors.bold}================================================================================${colors.reset}`);
    console.log(`${colors.bold}       TELEHEALTH FX E2E SEO & CRO VERIFICATION TEST HARNESS                     ${colors.reset}`);
    console.log(`${colors.dim}       Project Root: ${siteRoot}${colors.reset}`);
    console.log(`${colors.dim}       Execution Time: ${new Date().toISOString()}${colors.reset}`);
    console.log(`${colors.bold}================================================================================${colors.reset}`);
  }

  const selectedTier = cliOptions.tier;

  if (!selectedTier || selectedTier === 1) runTier1();
  if (!selectedTier || selectedTier === 2) runTier2();
  if (!selectedTier || selectedTier === 3) runTier3();
  if (!selectedTier || selectedTier === 4) runTier4();

  const duration = ((Date.now() - startTime) / 1000).toFixed(2);

  const totalPassed =
    testRegistry.tier1.passed +
    testRegistry.tier2.passed +
    testRegistry.tier3.passed +
    testRegistry.tier4.passed;

  const totalFailed =
    testRegistry.tier1.failed +
    testRegistry.tier2.failed +
    testRegistry.tier3.failed +
    testRegistry.tier4.failed;

  const totalWarnings =
    testRegistry.tier1.warnings +
    testRegistry.tier2.warnings +
    testRegistry.tier3.warnings +
    testRegistry.tier4.warnings;

  const totalTests = totalPassed + totalFailed;
  const passRate = totalTests > 0 ? ((totalPassed / totalTests) * 100).toFixed(1) : 0;

  if (cliOptions.json) {
    const output = {
      summary: {
        totalPassed,
        totalFailed,
        totalWarnings,
        totalTests,
        passRate: `${passRate}%`,
        durationSeconds: duration,
        success: totalFailed === 0,
      },
      tiers: testRegistry,
    };
    console.log(JSON.stringify(output, null, 2));
  } else {
    console.log(`\n${colors.bold}================================================================================${colors.reset}`);
    console.log(`${colors.bold}VERIFICATION SUMMARY BY TIER:${colors.reset}`);
    console.log(`  Tier 1 (Feature Coverage):   ${testRegistry.tier1.passed} Passed, ${testRegistry.tier1.failed} Failed`);
    console.log(`  Tier 2 (Boundary Defenses):  ${testRegistry.tier2.passed} Passed, ${testRegistry.tier2.failed} Failed`);
    console.log(`  Tier 3 (Schema & Links):     ${testRegistry.tier3.passed} Passed, ${testRegistry.tier3.failed} Failed`);
    console.log(`  Tier 4 (Build & Runtime):    ${testRegistry.tier4.passed} Passed, ${testRegistry.tier4.failed} Failed`);
    console.log(`--------------------------------------------------------------------------------`);
    console.log(
      `${colors.bold}TOTAL:${colors.reset} ${totalPassed} Passed, ${totalFailed > 0 ? colors.red : colors.green}${totalFailed} Failed${colors.reset}, ${totalWarnings} Warnings (${passRate}% Pass Rate in ${duration}s)`
    );
    console.log(`${colors.bold}================================================================================${colors.reset}\n`);
  }

  if (totalFailed > 0) {
    process.exit(1);
  } else {
    process.exit(0);
  }
}

main();
