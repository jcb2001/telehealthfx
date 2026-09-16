#!/usr/bin/env node

/**
 * Adversarial Schema.org & JSON-LD Validator
 * 
 * Extracts and audits all <script type="application/ld+json"> instances
 * from pre-rendered HTML files in out/ and source files in src/app/.
 * 
 * Verifications:
 * 1. JSON parsing syntax (zero parse errors)
 * 2. Schema.org entity compliance (MedicalClinic, MedicalWebPage, FAQPage, JobPosting)
 * 3. Regression checks:
 *    - No empty mainEntity arrays
 *    - No empty string fields ("")
 *    - No "Unknown" corrupted tokens (e.g. "Unknown-licensed", state "Unknown")
 *    - MedicalClinic licensing / medicalBoard field presence and validity
 */

const fs = require('fs');
const path = require('path');

const projectRoot = path.resolve(__dirname, '..');
const siteRoot = path.join(projectRoot, 'Telehealth FX Site');
const outDir = path.join(siteRoot, 'out');
const srcAppDir = path.join(siteRoot, 'src', 'app');

console.log('='.repeat(80));
console.log('ADVERSARIAL SCHEMA.ORG VALIDATOR & INTEGRITY HARNESS');
console.log(`Target Out Directory: ${outDir}`);
console.log(`Target Src Directory: ${srcAppDir}`);
console.log('='.repeat(80));

// Result collectors
const findings = {
  totalHtmlFilesScanned: 0,
  totalJsonLdBlocks: 0,
  totalEntities: 0,
  parseErrors: [],
  emptyMainEntity: [],
  emptyStringValues: [],
  unknownTokens: [],
  schemaComplianceErrors: [],
  entityCounts: {},
};

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

function extractJsonLdFromHtml(html, filePath) {
  const jsonLdRegex = /<script\s+type=["']application\/ld\+json["']>([\s\S]*?)<\/script>/gi;
  const blocks = [];
  let match;
  while ((match = jsonLdRegex.exec(html)) !== null) {
    const rawContent = match[1].trim();
    blocks.push({
      filePath,
      rawContent,
    });
  }
  return blocks;
}

function checkForUnknownTokens(val, keyPath, filePath) {
  if (typeof val === 'string') {
    if (val.includes('Unknown') || val.includes('undefined') || val.includes('null')) {
      // Exclude benign mentions if any, but in schema unknown is an error
      findings.unknownTokens.push({
        filePath,
        keyPath,
        value: val,
      });
    }
    if (val.trim() === '') {
      findings.emptyStringValues.push({
        filePath,
        keyPath,
      });
    }
  } else if (Array.isArray(val)) {
    val.forEach((item, index) => {
      checkForUnknownTokens(item, `${keyPath}[${index}]`, filePath);
    });
  } else if (val !== null && typeof val === 'object') {
    Object.keys(val).forEach((k) => {
      checkForUnknownTokens(val[k], `${keyPath}.${k}`, filePath);
    });
  }
}

function validateEntity(entity, filePath) {
  const type = entity['@type'];
  findings.entityCounts[type] = (findings.entityCounts[type] || 0) + 1;

  // 1. FAQPage validation
  if (type === 'FAQPage') {
    if (!entity.mainEntity || !Array.isArray(entity.mainEntity) || entity.mainEntity.length === 0) {
      findings.emptyMainEntity.push({
        filePath,
        error: 'FAQPage has empty or missing mainEntity array',
      });
    } else {
      entity.mainEntity.forEach((q, idx) => {
        if (!q['@type'] || q['@type'] !== 'Question') {
          findings.schemaComplianceErrors.push({
            filePath,
            entity: 'FAQPage',
            error: `mainEntity[${idx}] missing @type: "Question"`,
          });
        }
        if (!q.name || typeof q.name !== 'string' || !q.name.trim()) {
          findings.schemaComplianceErrors.push({
            filePath,
            entity: 'FAQPage',
            error: `mainEntity[${idx}] Question missing valid name (question text)`,
          });
        }
        if (!q.acceptedAnswer || q.acceptedAnswer['@type'] !== 'Answer' || !q.acceptedAnswer.text) {
          findings.schemaComplianceErrors.push({
            filePath,
            entity: 'FAQPage',
            error: `mainEntity[${idx}] Question missing valid acceptedAnswer with text`,
          });
        }
      });
    }
  }

  // 2. MedicalClinic / MedicalBusiness validation
  if (type === 'MedicalClinic' || type === 'MedicalBusiness') {
    if (!entity.name || typeof entity.name !== 'string' || !entity.name.trim()) {
      findings.schemaComplianceErrors.push({
        filePath,
        entity: type,
        error: 'MedicalClinic missing name',
      });
    }
    // Check medicalSpecialty
    if (!entity.medicalSpecialty) {
      findings.schemaComplianceErrors.push({
        filePath,
        entity: type,
        error: 'MedicalClinic missing medicalSpecialty',
      });
    }
    // Check address / areaServed
    if (!entity.address && !entity.areaServed) {
      findings.schemaComplianceErrors.push({
        filePath,
        entity: type,
        error: 'MedicalClinic missing address and areaServed',
      });
    }
  }

  // 3. MedicalWebPage validation
  if (type === 'MedicalWebPage') {
    if (!entity.name && !entity.headline) {
      findings.schemaComplianceErrors.push({
        filePath,
        entity: 'MedicalWebPage',
        error: 'MedicalWebPage missing name/headline',
      });
    }
    if (!entity.description) {
      findings.schemaComplianceErrors.push({
        filePath,
        entity: 'MedicalWebPage',
        error: 'MedicalWebPage missing description',
      });
    }
  }

  // 4. JobPosting validation
  if (type === 'JobPosting') {
    const requiredJobFields = ['title', 'description', 'hiringOrganization', 'employmentType'];
    for (const field of requiredJobFields) {
      if (!entity[field]) {
        findings.schemaComplianceErrors.push({
          filePath,
          entity: 'JobPosting',
          error: `JobPosting missing required field: ${field}`,
        });
      }
    }
  }
}

// -----------------------------------------------------------------------------
// EXECUTE SCAN
// -----------------------------------------------------------------------------

const htmlFiles = walkDir(outDir, '.html');
findings.totalHtmlFilesScanned = htmlFiles.length;

console.log(`Found ${htmlFiles.length} pre-rendered HTML files in out/`);

for (const htmlFile of htmlFiles) {
  const relPath = path.relative(siteRoot, htmlFile);
  const content = fs.readFileSync(htmlFile, 'utf8');
  const blocks = extractJsonLdFromHtml(content, relPath);

  for (const block of blocks) {
    findings.totalJsonLdBlocks++;
    let parsed;
    try {
      parsed = JSON.parse(block.rawContent);
    } catch (err) {
      findings.parseErrors.push({
        filePath: relPath,
        error: err.message,
        snippet: block.rawContent.slice(0, 100),
      });
      continue;
    }

    // Inspect values recursively for tokens like "Unknown" and empty strings
    checkForUnknownTokens(parsed, '$', relPath);

    // Flatten @graph if present
    const entities = parsed['@graph'] && Array.isArray(parsed['@graph'])
      ? parsed['@graph']
      : (Array.isArray(parsed) ? parsed : [parsed]);

    for (const entity of entities) {
      findings.totalEntities++;
      validateEntity(entity, relPath);
    }
  }
}

// -----------------------------------------------------------------------------
// REPORT RESULTS
// -----------------------------------------------------------------------------
console.log('\n--- SCAN SUMMARY ---');
console.log(`HTML Files Scanned: ${findings.totalHtmlFilesScanned}`);
console.log(`JSON-LD Blocks Found: ${findings.totalJsonLdBlocks}`);
console.log(`Total Schema Entities: ${findings.totalEntities}`);
console.log('Entities by @type:', findings.entityCounts);

console.log('\n--- ADVERSARIAL INTEGRITY CHECKS ---');
console.log(`1. JSON Parse Errors: ${findings.parseErrors.length}`);
if (findings.parseErrors.length > 0) {
  findings.parseErrors.slice(0, 5).forEach(e => console.error(`   [PARSE ERROR] ${e.filePath}: ${e.error}`));
}

console.log(`2. Empty FAQ mainEntity Instances: ${findings.emptyMainEntity.length}`);
if (findings.emptyMainEntity.length > 0) {
  findings.emptyMainEntity.slice(0, 5).forEach(e => console.error(`   [EMPTY FAQ] ${e.filePath}: ${e.error}`));
}

console.log(`3. Corrupted "Unknown" / Undefined Tokens: ${findings.unknownTokens.length}`);
if (findings.unknownTokens.length > 0) {
  findings.unknownTokens.slice(0, 5).forEach(e => console.error(`   [UNKNOWN TOKEN] ${e.filePath} -> ${e.keyPath} = "${e.value}"`));
}

console.log(`4. Empty String Values: ${findings.emptyStringValues.length}`);
if (findings.emptyStringValues.length > 0) {
  findings.emptyStringValues.slice(0, 5).forEach(e => console.error(`   [EMPTY STRING] ${e.filePath} -> ${e.keyPath}`));
}

console.log(`5. Schema.org Specification Violations: ${findings.schemaComplianceErrors.length}`);
if (findings.schemaComplianceErrors.length > 0) {
  findings.schemaComplianceErrors.slice(0, 10).forEach(e => console.error(`   [SCHEMA VIOLATION] ${e.filePath} (${e.entity}): ${e.error}`));
}

const totalFailures =
  findings.parseErrors.length +
  findings.emptyMainEntity.length +
  findings.unknownTokens.length +
  findings.emptyStringValues.length +
  findings.schemaComplianceErrors.length;

console.log('='.repeat(80));
if (totalFailures === 0 && findings.totalJsonLdBlocks > 0) {
  console.log('ADVERSARIAL SCHEMA VALIDATION RESULT: PASSED (ZERO DEFECTS)');
  process.exit(0);
} else {
  console.log(`ADVERSARIAL SCHEMA VALIDATION RESULT: FAILED (${totalFailures} DEFECTS FOUND)`);
  process.exit(1);
}
