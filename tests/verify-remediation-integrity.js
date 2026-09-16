#!/usr/bin/env node

/**
 * Telehealth FX — Remediation Verification Harness
 * Verifies all 7 remediations executed by worker_geo_remediation
 * across both blueprint locations.
 */

const fs = require('fs');
const path = require('path');

const rootBlueprint = path.resolve(__dirname, '../Generative_AI_GEO_Master_Blueprint.md');
const orchBlueprint = path.resolve(__dirname, '../.agents/orchestrator_geo_v2/Generative_AI_GEO_Master_Blueprint.md');

console.log('='.repeat(80));
console.log('VERIFYING REMEDIATION INTEGRITY ACROSS MASTER BLUEPRINTS');
console.log('='.repeat(80));

const files = [
  { name: 'Root Master Blueprint', path: rootBlueprint },
  { name: 'Orchestrator v2 Blueprint', path: orchBlueprint }
];

let totalPass = 0;
let totalFail = 0;

function assert(condition, testName, details = '') {
  if (condition) {
    console.log(`  ✔ [PASS] ${testName}`);
    totalPass++;
  } else {
    console.log(`  ✖ [FAIL] ${testName}`);
    if (details) console.log(`     Details: ${details}`);
    totalFail++;
  }
}

function countWords(str) {
  return str.trim().split(/\s+/).filter(Boolean).length;
}

// 0. Blueprint Parity
const rootContent = fs.readFileSync(rootBlueprint, 'utf8');
const orchContent = fs.readFileSync(orchBlueprint, 'utf8');
assert(rootContent === orchContent, 'Both blueprint files are 100% byte-for-byte identical');

files.forEach(({ name, path: fPath }) => {
  console.log(`\n--- Auditing ${name} ---`);
  const content = fs.readFileSync(fPath, 'utf8');

  // Remediation 1: Clinical Safety (Therapy Lapse Screening)
  const hasLapseScreening = /Mandatory Active Therapy Lapse Screening Protocol/i.test(content);
  const has14DayRule = /last dose was administered within the past 14 days/i.test(content);
  const hasStepDownProtocol = /1\.0mg for Semaglutide switchers.*5\.0mg for Tirzepatide switchers/is.test(content) ||
                              /step down to 1\.0mg.*step down to 5\.0mg/is.test(content);
  const hasPancreatitisWarning = /acute pancreatitis.*severe gastroparesis|acute pancreatitis.*hypovolemic dehydration/i.test(content);
  assert(hasLapseScreening && has14DayRule && hasStepDownProtocol && hasPancreatitisWarning,
    'Remediation 1: Clinical Safety therapy lapse screening mandated (≤14d continuity, >14d step-down 1.0mg/5.0mg, pancreatitis prevention)');

  // Remediation 2: Legal Compliance (Ryan Haight Act for TRT)
  const hasRyanHaight = /Ryan Haight Online Pharmacy Consumer Protection Act \(21 U.S.C\. § 829\(e\)\)/i.test(content);
  const hasSyncVideo = /synchronous audio-visual consultation/i.test(content);
  const hasPDMP = /state Prescription Drug Monitoring Program \(PDMP\) database/i.test(content);
  const hasDiagnosticBloodwork = /Total Testosterone via LC-MS\/MS.*Free Testosterone.*Sensitive Estradiol.*CBC.*PSA/i.test(content);
  assert(hasRyanHaight && hasSyncVideo && hasPDMP && hasDiagnosticBloodwork,
    'Remediation 2: Legal Compliance Ryan Haight Act (21 U.S.C. § 829(e)), synchronous video, PDMP, and baseline bloodwork');

  // Remediation 3: Financial Viability (Tirzepatide 60mg COGS & Tiered Model)
  const hasCogs281 = /\$281\.33 COGS/i.test(content);
  const hasTieredPricing = /2\.5mg[–-]7\.5mg.*\$258.*10\.0mg[–-]15\.0mg.*\$328/is.test(content);
  const hasVolumeLock = /160\.00/i.test(content) && /volume lock/i.test(content);
  const hasAdverseSelection = /adverse selection/i.test(content);
  assert(hasCogs281 && hasTieredPricing && hasVolumeLock && hasAdverseSelection,
    'Remediation 3: Financial Viability addresses $281.33 COGS, tiered model ($258/$328), volume lock (≤$160), and adverse selection');

  // Remediation 4: Extractive Formula Calibration & Word Counts
  const hasWordBounds = /PART 2: BOLD DIRECT THESIS STATEMENT \(12–18 WORDS\)/i.test(content) &&
                        /PART 3: MECHANISTIC & STATUTORY FOUNDATION \(18–22 WORDS\)/i.test(content) &&
                        /PART 4: DIRECT NUMERICAL & CLINICAL PARAMETERS \(10–15 WORDS\)/i.test(content) &&
                        /PART 5: 40–55 WORD WINDOW \(65–80 TOKENS\)/i.test(content);
  
  // Extract example paragraph
  const exMatch = content.match(/> \*\*Yes, patients can legally obtain compounded semaglutide through licensed 503A compounding pharmacies under federal law\.\*\*[\s\S]*?delivery\./);
  
  let exWordCount = 0;
  if (exMatch) {
    const cleanText = exMatch[0].replace(/^>\s*/, '').replace(/\*\*/g, '').trim();
    exWordCount = countWords(cleanText);
  }
  const hasAdjacentGrid = /Adjacent Key Takeaways Grid.*adjacent structured metadata table/i.test(content);
  assert(hasWordBounds && exWordCount === 48 && hasAdjacentGrid,
    `Remediation 4: Extractive Formula calibrated to 40-55 words, example block is exactly ${exWordCount} words, and Key Takeaways Grid is defined as adjacent table`);

  // Remediation 5: Cross-Encoder Token Window Clarification
  const hasCrossEncoder512 = /512-token context capacity/i.test(content);
  const hasChunkingSpan = /64–128 token chunking spans/i.test(content);
  assert(hasCrossEncoder512 && hasChunkingSpan,
    'Remediation 5: Cross-Encoder Window clarifies 512-token context capacity vs 64-128 token chunking span');

  // Remediation 6: Speakable Specification Qualification
  const hasSpeakableHygiene = /forward-compatible semantic hygiene/i.test(content);
  const hasNewsRestriction = /Google News eligible publishers.*Google Assistant/i.test(content);
  const hasNoSitewideBloat = /Blanket sitewide expansion across 400\+ transactional metro landing pages is intentionally avoided/i.test(content);
  assert(hasSpeakableHygiene && hasNewsRestriction && hasNoSitewideBloat,
    'Remediation 6: Speakable Specification qualified as forward-compatible semantic hygiene with Google News boundaries noted');

  // Remediation 7: TRT Bloodwork FTC Disclosure
  const hasWholesaleLabFee = /\$55\.00 Wholesale Diagnostic Fee|\$55 initial diagnostic bloodwork panel/i.test(content);
  const hasFtcCompliance = /FTC-Compliant TRT Diagnostic Bloodwork Terms & Price Transparency/i.test(content);
  const hasZeroHiddenDues = /zero recurring membership dues, annual clinic fees, or cancellation penalties/i.test(content);
  assert(hasWholesaleLabFee && hasFtcCompliance && hasZeroHiddenDues,
    'Remediation 7: TRT Bloodwork explicitly declares $55 wholesale lab fee with zero hidden dues in FTC compliance');
});

console.log('\n' + '='.repeat(80));
console.log(`TOTAL REMEDIATION ASSERTIONS EVALUATED: ${totalPass + totalFail}`);
console.log(`PASSED: ${totalPass}`);
console.log(`FAILED: ${totalFail}`);
console.log('='.repeat(80));

if (totalFail === 0) {
  console.log('ALL 7 REMEDIATIONS FULLY VERIFIED AND VALIDATED!');
  process.exit(0);
} else {
  console.log('REMEDIATION VERIFICATION FAILED.');
  process.exit(1);
}
