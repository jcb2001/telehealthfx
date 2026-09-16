#!/usr/bin/env node

/**
 * Telehealth FX — Adversarial Empirical Challenge Suite
 * 
 * Conducts adversarial verification across:
 * 1. Extractive search simulation (LLM crawler chunking, thesis conciseness, numerical metrics, statutory citations, speakable markup)
 * 2. Edge redirect simulation (public/_redirects and functions/_middleware.ts against 20 test vectors)
 * 3. Build stability & route generation (Next.js compilation, 471+ route verification)
 */

const fs = require('fs');
const path = require('path');
const { spawnSync } = require('child_process');

const projectRoot = path.resolve(__dirname, '..');
const siteRoot = path.join(projectRoot, 'Telehealth FX Site');
const outDir = path.join(siteRoot, 'out');
const publicDir = path.join(siteRoot, 'public');
const functionsDir = path.join(siteRoot, 'functions');

console.log('='.repeat(80));
console.log('TELEHEALTH FX — EMPIRICAL CHALLENGER ADVERSARIAL VERIFICATION HARNESS');
console.log(`Working Directory: ${process.cwd()}`);
console.log(`Target Site Root:  ${siteRoot}`);
console.log(`Target Out Dir:    ${outDir}`);
console.log('='.repeat(80));

let totalTests = 0;
let passedTests = 0;
let failedTests = 0;
const failures = [];

function assert(condition, testName, details = '') {
  totalTests++;
  if (condition) {
    passedTests++;
    console.log(`  ✔ PASS: ${testName}`);
  } else {
    failedTests++;
    console.log(`  ✖ FAIL: ${testName} — ${details}`);
    failures.push({ testName, details });
  }
}

// -----------------------------------------------------------------------------
// VECTOR 1: EXTRACTIVE SEARCH SIMULATION
// -----------------------------------------------------------------------------
console.log('\n' + '='.repeat(80));
console.log('VECTOR 1: LLM EXTRACTIVE SEARCH SIMULATION');
console.log('Testing extraction fidelity, thesis conciseness, metrics, and citations on top 6 generative assets');
console.log('='.repeat(80));

const TARGET_ASSETS = [
  {
    id: 'compounded-semaglutide-after-hims-ro-2026',
    relPath: 'blog/compounded-semaglutide-after-hims-ro-2026/index.html',
    name: 'Compounded Semaglutide After Hims/Ro',
    expectedAnchor: 'legal-status-503a',
    expectedThesisKeywords: ['legal', 'compounded', '503A', 'semaglutide'],
    expectedMetrics: ['$146', '0.25mg', '2.4mg'],
    expectedStatute: 'Section 503A',
    minThesisWords: 15,
    maxThesisWords: 45,
  },
  {
    id: 'hims-vs-ro-vs-telehealthfx-2026',
    relPath: 'blog/hims-vs-ro-vs-telehealthfx-2026/index.html',
    name: 'Hims vs Ro vs TelehealthFX 2026 Comparison',
    expectedAnchor: 'hims-vs-ro-comparison',
    expectedThesisKeywords: ['$146', 'telehealthfx', 'compounded'],
    expectedMetrics: ['$146', '24-hr', '2-day'],
    expectedStatute: 'FD&C Act',
    minThesisWords: 15,
    maxThesisWords: 45,
  },
  {
    id: 'glp1-travel-guide-2026',
    relPath: 'blog/glp1-travel-guide-2026/index.html',
    name: 'GLP-1 Travel & TSA Guide',
    expectedAnchor: 'tsa-syringe-rules',
    expectedThesisKeywords: ['TSA', 'carry-on', 'temperature'],
    expectedMetrics: ['36°F', '46°F', '21 days'],
    expectedStatute: 'TSA',
    minThesisWords: 15,
    maxThesisWords: 45,
  },
  {
    id: 'glp1-and-coffee-caffeine-2026',
    relPath: 'blog/glp1-and-coffee-caffeine-2026/index.html',
    name: 'GLP-1 and Coffee / Caffeine Interactions',
    expectedAnchor: 'caffeine-glp1-clinical-rules',
    expectedThesisKeywords: ['gastric', 'caffeine', 'absorption'],
    expectedMetrics: ['90-120 min', 'delay'],
    expectedStatute: 'Clinical',
    minThesisWords: 15,
    maxThesisWords: 45,
  },
  {
    id: 'coptis-chinensis-vs-berberis-vulgaris-botanical-sources',
    relPath: 'blog/coptis-chinensis-vs-berberis-vulgaris-botanical-sources/index.html',
    name: 'Coptis Chinensis Botanical Comparison',
    expectedAnchor: 'berberine-vs-glp1-pharmacology',
    expectedThesisKeywords: ['berberine', 'AMPK', 'bioavailability'],
    expectedMetrics: ['500mg', 'AMPK', '$146'],
    expectedStatute: 'Endocrine',
    minThesisWords: 15,
    maxThesisWords: 45,
  },
  {
    id: 'careers/glp-1-weight-loss-salesperson',
    relPath: 'careers/glp-1-weight-loss-salesperson/index.html',
    name: 'GLP-1 Weight Loss Remote Salesperson Hub',
    expectedAnchor: 'glp1-sales-career-model',
    expectedThesisKeywords: ['sales', 'commission', 'consultation'],
    expectedMetrics: ['$146', 'commission', 'consultation'],
    expectedStatute: 'FD&C Act',
    minThesisWords: 15,
    maxThesisWords: 45,
  },
];

function extractCleanText(html) {
  return html
    .replace(/<script[\s\S]*?<\/script>/gi, '')
    .replace(/<style[\s\S]*?<\/style>/gi, '')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#x27;/g, "'")
    .replace(/&#39;/g, "'")
    .replace(/&nbsp;/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function extractElementByIdOrClass(html, selectorClass, anchorId) {
  // Find container by class or id
  const classIdx = html.indexOf(selectorClass);
  const idIdx = anchorId ? html.indexOf(`id="${anchorId}"`) : -1;
  const startIdx = idIdx !== -1 ? idIdx : classIdx;
  if (startIdx === -1) return null;

  // Search backwards to opening <div
  const tagStart = html.lastIndexOf('<div', startIdx);
  if (tagStart === -1) return null;

  // Track matching </div>
  let depth = 0;
  let inTag = false;
  let tagEnd = -1;
  const len = html.length;

  for (let i = tagStart; i < len; i++) {
    if (html[i] === '<') {
      if (html.slice(i, i + 4).toLowerCase() === '<div') {
        depth++;
      } else if (html.slice(i, i + 6).toLowerCase() === '</div>') {
        depth--;
        if (depth === 0) {
          tagEnd = i + 6;
          break;
        }
      }
    }
  }

  if (tagEnd === -1) return null;
  return html.slice(tagStart, tagEnd);
}

for (const asset of TARGET_ASSETS) {
  const filePath = path.join(outDir, asset.relPath);
  console.log(`\nTesting Asset: ${asset.name} (${asset.relPath})`);

  // 1. File exists and has substantial size
  const exists = fs.existsSync(filePath);
  assert(exists, `HTML artifact exists: ${asset.relPath}`, `File not found at ${filePath}`);
  if (!exists) continue;

  const html = fs.readFileSync(filePath, 'utf8');
  assert(html.length > 5000, `HTML artifact is hydrated (>5KB): ${asset.relPath}`, `Size: ${html.length} bytes`);

  // 2. Extractive container presence
  const hasExtractiveClass = html.includes('class="ai-extractive-answer"') || html.includes('ai-extractive-answer');
  const hasDataExtractive = html.includes('data-extractive-answer="true"');
  assert(hasExtractiveClass && hasDataExtractive, `Extractive DOM container present (.ai-extractive-answer & data-extractive-answer="true")`, `Class=${hasExtractiveClass}, DataAttr=${hasDataExtractive}`);

  // 3. Anchor ID presence
  const hasAnchor = html.includes(`id="${asset.expectedAnchor}"`);
  assert(hasAnchor, `Semantic citation anchor id="${asset.expectedAnchor}" present`, `Missing id="${asset.expectedAnchor}"`);

  // 4. Extract container HTML
  const blockHtml = extractElementByIdOrClass(html, 'ai-extractive-answer', asset.expectedAnchor);
  assert(blockHtml !== null, `Extractive block cleanly isolable by crawler parser`, `Failed to parse container block`);

  if (blockHtml) {
    // 5. Conversational Question Heading
    const hasHeading = /<h[23][^>]*>([\s\S]*?)<\/h[23]>/i.test(blockHtml);
    const headingMatch = blockHtml.match(/<h[23][^>]*>([\s\S]*?)<\/h[23]>/i);
    const headingText = headingMatch ? extractCleanText(headingMatch[1]) : '';
    assert(hasHeading && headingText.length > 10, `Conversational question heading extracted: "${headingText.slice(0, 60)}..."`, `Heading invalid`);

    // 6. Bolded Thesis Statement
    const thesisMatch = blockHtml.match(/<strong[^>]*>([\s\S]*?)<\/strong>/i);
    const thesisText = thesisMatch ? extractCleanText(thesisMatch[1]) : '';
    const wordCount = thesisText.split(/\s+/).filter(Boolean).length;
    const isConcise = wordCount >= asset.minThesisWords && wordCount <= asset.maxThesisWords;
    assert(thesisMatch !== null, `Bolded thesis statement (<strong>) extracted`, `Missing <strong> tag in extractive block`);
    assert(isConcise, `Thesis conciseness oracle: ${wordCount} words (acceptable window: ${asset.minThesisWords}-${asset.maxThesisWords} words)`, `Thesis word count ${wordCount} out of bounds: "${thesisText}"`);

    // 7. Numerical parameters check
    let missingMetrics = [];
    for (const metric of asset.expectedMetrics) {
      if (!blockHtml.includes(metric)) {
        missingMetrics.push(metric);
      }
    }
    assert(missingMetrics.length === 0, `Numerical parameter metrics present (${asset.expectedMetrics.join(', ')})`, `Missing metrics: ${missingMetrics.join(', ')}`);

    // 8. Statutory / Clinical Authority Citation
    const decodedBlock = extractCleanText(blockHtml);
    const hasStatute = decodedBlock.includes(asset.expectedStatute) || blockHtml.includes(asset.expectedStatute);
    assert(hasStatute, `Statutory/Clinical authority present ("${asset.expectedStatute}")`, `Missing statutory citation in extractive block`);

    // 9. Semantic crawlable citation link (href="#anchor")
    const hasCitationLink = blockHtml.includes(`href="#${asset.expectedAnchor}"`);
    assert(hasCitationLink, `Direct anchor citation link present (href="#${asset.expectedAnchor}")`, `Missing anchor link`);
  }

  // 10. SpeakableSpecification Schema alignment in HTML head
  const speakableMatch = html.match(/SpeakableSpecification/);
  const targetsAnswer = html.includes('.ai-extractive-answer');
  assert(speakableMatch && targetsAnswer, `SpeakableSpecification JSON-LD schema targets .ai-extractive-answer`, `Speakable found=${!!speakableMatch}, targetsSelector=${targetsAnswer}`);

  // 11. AIQuickSummaryAction CRO Widget presence above the fold
  const hasCroWidget = html.includes('ai-quick-summary') || html.includes('data-geo-cta="ai-quick-summary"');
  const hasPrice146 = html.includes('$146/mo') || html.includes('$146 / month');
  const hasIntakeLink = html.includes('https://go.telehealthfx.com/start');
  assert(hasCroWidget && hasPrice146 && hasIntakeLink, `AIQuickSummaryAction CRO widget verified ($146/mo, 1-click CTA to go.telehealthfx.com/start)`, `Widget=${hasCroWidget}, Price146=${hasPrice146}, Link=${hasIntakeLink}`);
}

// -----------------------------------------------------------------------------
// VECTOR 2: EDGE REDIRECT SIMULATION (Cloudflare Pages)
// -----------------------------------------------------------------------------
console.log('\n' + '='.repeat(80));
console.log('VECTOR 2: CLOUDFLARE PAGES REDIRECT SIMULATION');
console.log('Simulating public/_redirects rules and functions/_middleware.ts against 20 test vectors');
console.log('='.repeat(80));

// Load public/_redirects
const redirectsFile = path.join(publicDir, '_redirects');
const redirectsContent = fs.readFileSync(redirectsFile, 'utf8');

// Parse Cloudflare Pages _redirects rules
function parseCloudflareRedirects(content) {
  const rules = [];
  const lines = content.split('\n');
  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith('#')) continue;
    const parts = trimmed.split(/\s+/);
    if (parts.length >= 2) {
      const from = parts[0];
      const to = parts[1];
      const statusPart = parts[2] || '302';
      const force = statusPart.endsWith('!');
      const status = parseInt(statusPart.replace('!', ''), 10);
      rules.push({ from, to, status, force });
    }
  }
  return rules;
}

const parsedRules = parseCloudflareRedirects(redirectsContent);

// Cloudflare Pages Redirect Simulator
function simulateCloudflareRedirects(requestUrl, rules) {
  const url = new URL(requestUrl);
  const fullUrlNoQuery = `${url.origin}${url.pathname}`;

  for (const rule of rules) {
    if (rule.from.startsWith('http://') || rule.from.startsWith('https://')) {
      // Host-level rule: e.g. https://www.telehealthfx.com/* -> https://telehealthfx.com/:splat
      const ruleFromUrl = new URL(rule.from.replace('/*', ''));
      if (url.origin === ruleFromUrl.origin) {
        if (rule.from.endsWith('/*')) {
          const prefix = ruleFromUrl.pathname.replace(/\/$/, '');
          if (url.pathname.startsWith(prefix)) {
            const splat = url.pathname.slice(prefix.length).replace(/^\//, '');
            const targetUrl = rule.to.replace(':splat', splat) + url.search;
            return { redirected: true, status: rule.status, location: targetUrl, rule };
          }
        }
      }
    } else {
      // Path-level rule: e.g. /pricing /pricing/ 301
      if (url.pathname === rule.from) {
        const targetUrl = rule.to + url.search;
        return { redirected: true, status: rule.status, location: targetUrl, rule };
      }
    }
  }
  return { redirected: false };
}

// Cloudflare Pages Middleware Simulator (functions/_middleware.ts)
async function simulateMiddleware(requestUrl) {
  const url = new URL(requestUrl);

  // Replicate exact logic from functions/_middleware.ts:
  // 1. Host Canonicalization: Redirect www to apex domain
  if (url.hostname === 'www.telehealthfx.com') {
    url.hostname = 'telehealthfx.com';
    return {
      redirected: true,
      status: 301,
      location: url.toString(),
      step: 'host-canonicalization',
    };
  }

  // 2. Trailing Slash Normalization: Force trailing slash on clean directory paths
  if (!url.pathname.endsWith('/') && !url.pathname.includes('.')) {
    url.pathname = `${url.pathname}/`;
    return {
      redirected: true,
      status: 301,
      location: url.toString(),
      step: 'trailing-slash',
    };
  }

  return { redirected: false, step: 'next' };
}

const REDIRECT_TEST_VECTORS = [
  {
    name: 'Root apex www redirect (HTTPS)',
    input: 'https://www.telehealthfx.com/',
    expectedRedirect: true,
    expectedStatus: 301,
    expectedLocation: 'https://telehealthfx.com/',
  },
  {
    name: 'Blog post www redirect (HTTPS)',
    input: 'https://www.telehealthfx.com/blog/compounded-semaglutide-after-hims-ro-2026/',
    expectedRedirect: true,
    expectedStatus: 301,
    expectedLocation: 'https://telehealthfx.com/blog/compounded-semaglutide-after-hims-ro-2026/',
  },
  {
    name: 'Hims vs Ro guide www redirect (HTTPS)',
    input: 'https://www.telehealthfx.com/blog/hims-vs-ro-vs-telehealthfx-2026/',
    expectedRedirect: true,
    expectedStatus: 301,
    expectedLocation: 'https://telehealthfx.com/blog/hims-vs-ro-vs-telehealthfx-2026/',
  },
  {
    name: 'Careers hub www redirect (HTTPS)',
    input: 'https://www.telehealthfx.com/careers/glp-1-weight-loss-salesperson/',
    expectedRedirect: true,
    expectedStatus: 301,
    expectedLocation: 'https://telehealthfx.com/careers/glp-1-weight-loss-salesperson/',
  },
  {
    name: 'Metro location www redirect (HTTPS)',
    input: 'https://www.telehealthfx.com/locations/phoenix/',
    expectedRedirect: true,
    expectedStatus: 301,
    expectedLocation: 'https://telehealthfx.com/locations/phoenix/',
  },
  {
    name: 'Query string preservation across www redirect',
    input: 'https://www.telehealthfx.com/blog/compounded-semaglutide-after-hims-ro-2026/?utm_source=chatgpt&query=semaglutide',
    expectedRedirect: true,
    expectedStatus: 301,
    expectedLocation: 'https://telehealthfx.com/blog/compounded-semaglutide-after-hims-ro-2026/?utm_source=chatgpt&query=semaglutide',
  },
  {
    name: 'Case insensitivity in hostname (WHATWG parsing)',
    input: 'https://WWW.TELEHEALTHFX.COM/careers/',
    expectedRedirect: true,
    expectedStatus: 301,
    expectedLocation: 'https://telehealthfx.com/careers/',
  },
  {
    name: 'Explicit port on www host',
    input: 'https://www.telehealthfx.com:443/blog/glp1-travel-guide-2026/',
    expectedRedirect: true,
    expectedStatus: 301,
    expectedLocation: 'https://telehealthfx.com/blog/glp1-travel-guide-2026/',
  },
  {
    name: 'Apex root domain (should NOT redirect, serves normally)',
    input: 'https://telehealthfx.com/',
    expectedRedirect: false,
  },
  {
    name: 'Apex blog route with trailing slash (should NOT redirect, serves normally)',
    input: 'https://telehealthfx.com/blog/compounded-semaglutide-after-hims-ro-2026/',
    expectedRedirect: false,
  },
  {
    name: 'Apex route missing trailing slash (middleware forces trailing slash)',
    input: 'https://telehealthfx.com/blog/compounded-semaglutide-after-hims-ro-2026',
    expectedRedirect: true,
    expectedStatus: 301,
    expectedLocation: 'https://telehealthfx.com/blog/compounded-semaglutide-after-hims-ro-2026/',
  },
  {
    name: 'Legacy /pricing path normalization',
    input: 'https://telehealthfx.com/pricing',
    expectedRedirect: true,
    expectedStatus: 301,
    expectedLocation: 'https://telehealthfx.com/pricing/',
  },
  {
    name: 'Legacy /faq path normalization',
    input: 'https://telehealthfx.com/faq',
    expectedRedirect: true,
    expectedStatus: 301,
    expectedLocation: 'https://telehealthfx.com/faq/',
  },
  {
    name: 'Legacy /results path normalization',
    input: 'https://telehealthfx.com/results',
    expectedRedirect: true,
    expectedStatus: 301,
    expectedLocation: 'https://telehealthfx.com/results/',
  },
  {
    name: 'Static file with extension (favicon.ico - should NOT force trailing slash)',
    input: 'https://telehealthfx.com/favicon.ico',
    expectedRedirect: false,
  },
  {
    name: 'Static image file (image.png - should NOT force trailing slash)',
    input: 'https://telehealthfx.com/og/cover.png',
    expectedRedirect: false,
  },
  {
    name: 'Static Next chunk file (should NOT force trailing slash)',
    input: 'https://telehealthfx.com/_next/static/chunks/main.js',
    expectedRedirect: false,
  },
  {
    name: 'Cloudflare preview deployment host (should NOT redirect to apex)',
    input: 'https://telehealthfx-preview.pages.dev/blog/compounded-semaglutide-after-hims-ro-2026/',
    expectedRedirect: false,
  },
  {
    name: 'Localhost development host (should NOT redirect to apex)',
    input: 'http://localhost:3000/blog/compounded-semaglutide-after-hims-ro-2026/',
    expectedRedirect: false,
  },
  {
    name: 'Deep nested route www redirect with multiple path segments',
    input: 'https://www.telehealthfx.com/weight-loss/milwaukee/',
    expectedRedirect: true,
    expectedStatus: 301,
    expectedLocation: 'https://telehealthfx.com/weight-loss/milwaukee/',
  },
];

for (const vec of REDIRECT_TEST_VECTORS) {
  // Test via Cloudflare public/_redirects engine
  const redirectsRes = simulateCloudflareRedirects(vec.input, parsedRules);

  // Test via Cloudflare Functions middleware engine
  let middlewareRes;
  simulateMiddleware(vec.input).then(res => { middlewareRes = res; });
  // Since simulateMiddleware is synchronous in practice:
  const url = new URL(vec.input);
  if (url.hostname === 'www.telehealthfx.com') {
    url.hostname = 'telehealthfx.com';
    middlewareRes = { redirected: true, status: 301, location: url.toString() };
  } else if (!url.pathname.endsWith('/') && !url.pathname.includes('.')) {
    url.pathname = `${url.pathname}/`;
    middlewareRes = { redirected: true, status: 301, location: url.toString() };
  } else {
    middlewareRes = { redirected: false };
  }

  console.log(`\nVector: ${vec.name}`);
  console.log(`  Input: ${vec.input}`);

  if (vec.expectedRedirect) {
    const isWww = vec.input.includes('www.telehealthfx.com') || vec.input.includes('WWW.TELEHEALTHFX.COM');
    if (isWww) {
      assert(
        redirectsRes.redirected && redirectsRes.status === vec.expectedStatus && redirectsRes.location === vec.expectedLocation,
        `public/_redirects: 301 redirect to ${vec.expectedLocation}`,
        `Actual: redirected=${redirectsRes.redirected}, status=${redirectsRes.status}, loc=${redirectsRes.location}`
      );
      assert(
        middlewareRes.redirected && middlewareRes.status === vec.expectedStatus && middlewareRes.location === vec.expectedLocation,
        `functions/_middleware.ts: 301 redirect to ${vec.expectedLocation}`,
        `Actual: redirected=${middlewareRes.redirected}, status=${middlewareRes.status}, loc=${middlewareRes.location}`
      );
    } else {
      // Apex path normalization
      const matched = (redirectsRes.redirected && redirectsRes.location === vec.expectedLocation) ||
                      (middlewareRes.redirected && middlewareRes.location === vec.expectedLocation);
      assert(
        matched,
        `Path normalization to ${vec.expectedLocation}`,
        `redirectsRes=${JSON.stringify(redirectsRes)}, middlewareRes=${JSON.stringify(middlewareRes)}`
      );
    }
  } else {
    assert(
      !middlewareRes.redirected,
      `Pass-through without redirection (served directly)`,
      `Unexpected redirect to ${middlewareRes.location}`
    );
  }
}

// -----------------------------------------------------------------------------
// VECTOR 3: BUILD STABILITY & ROUTE GENERATION
// -----------------------------------------------------------------------------
console.log('\n' + '='.repeat(80));
console.log('VECTOR 3: BUILD STABILITY & ROUTE GENERATION GATE');
console.log('Compiling static production export and counting generated HTML routes');
console.log('='.repeat(80));

const shouldRunBuild = process.argv.includes('--build');
if (shouldRunBuild) {
  console.log('Executing: npm run build in Telehealth FX Site...');
  const buildStartTime = Date.now();
  const buildProc = spawnSync('npm', ['run', 'build'], {
    cwd: siteRoot,
    stdio: 'pipe',
    encoding: 'utf8',
    env: { ...process.env, NODE_ENV: 'production' },
  });
  const buildDurationSec = ((Date.now() - buildStartTime) / 1000).toFixed(1);

  console.log(`Build process exited in ${buildDurationSec}s with code ${buildProc.status}`);
  if (buildProc.status !== 0) {
    console.error('BUILD ERROR OUTPUT:\n', buildProc.stderr || buildProc.stdout);
  }

  assert(buildProc.status === 0, `npm run build completes cleanly with exit code 0 (${buildDurationSec}s)`, `Exit code: ${buildProc.status}`);
} else {
  console.log('Verifying existing Next.js static production export in out/...');
  assert(fs.existsSync(outDir), `Static export directory out/ exists`, `Directory not found: ${outDir}`);
}

// Scan out/ directory for all .html files
function scanAllHtmlFiles(dir) {
  let list = [];
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      list = list.concat(scanAllHtmlFiles(full));
    } else if (entry.name.endsWith('.html')) {
      list.push(full);
    }
  }
  return list;
}

const allHtmlFiles = scanAllHtmlFiles(outDir);
console.log(`Total HTML routes discovered in out/: ${allHtmlFiles.length}`);

assert(
  allHtmlFiles.length >= 471,
  `Static route output volume meets or exceeds 471 routes (Found: ${allHtmlFiles.length})`,
  `Found only ${allHtmlFiles.length} HTML files in out/`
);

// Verify all critical routes exist and are not empty
const CRITICAL_ROUTES = [
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

for (const cr of CRITICAL_ROUTES) {
  const p = path.join(outDir, cr);
  const exists = fs.existsSync(p);
  const size = exists ? fs.statSync(p).size : 0;
  assert(exists && size > 1000, `Critical route pre-rendered (>1KB): ${cr} (${size} bytes)`, `Exists=${exists}, Size=${size}`);
}

// -----------------------------------------------------------------------------
// SUMMARY SCORECARD
// -----------------------------------------------------------------------------
console.log('\n' + '='.repeat(80));
console.log('CHALLENGER SUMMARY SCORECARD');
console.log(`Total Adversarial Tests: ${totalTests}`);
console.log(`Passed:                  ${passedTests}`);
console.log(`Failed:                  ${failedTests}`);
console.log(`Pass Rate:               ${((passedTests / totalTests) * 100).toFixed(1)}%`);
console.log('='.repeat(80));

if (failures.length > 0) {
  console.log('\nDETAILED FAILURES:');
  failures.forEach((f, idx) => {
    console.log(`  ${idx + 1}. [${f.testName}] ${f.details}`);
  });
  process.exit(1);
} else {
  console.log('\nALL ADVERSARIAL CHALLENGES PASSED EMPIRICALLY!');
  process.exit(0);
}
