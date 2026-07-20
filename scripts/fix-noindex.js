#!/usr/bin/env node
/**
 * fix-noindex.js
 * 
 * Adds explicit `robots: { index: true, follow: true }` to all blog and location
 * page.js metadata exports. This ensures each page has page-level robots directives
 * that override any inherited or fallback noindex tags.
 */

const fs = require('fs');
const path = require('path');

const SRC_DIR = path.join(__dirname, '..', 'src', 'app');
const DIRS_TO_FIX = ['blog', 'locations'];

let fixed = 0;
let skipped = 0;
let errors = 0;

for (const dir of DIRS_TO_FIX) {
  const dirPath = path.join(SRC_DIR, dir);
  if (!fs.existsSync(dirPath)) {
    console.log(`⚠️  Directory not found: ${dir}`);
    continue;
  }

  const subdirs = fs.readdirSync(dirPath, { withFileTypes: true })
    .filter(d => d.isDirectory())
    .map(d => d.name);

  for (const subdir of subdirs) {
    const pageFile = path.join(dirPath, subdir, 'page.js');
    if (!fs.existsSync(pageFile)) continue;

    let content = fs.readFileSync(pageFile, 'utf-8');

    // Skip if already has robots in metadata
    if (/robots\s*:/.test(content)) {
      skipped++;
      continue;
    }

    // Find `export const metadata = {` and inject robots right after the opening brace
    const metadataPattern = /export\s+const\s+metadata\s*=\s*\{/;
    const match = content.match(metadataPattern);
    
    if (!match) {
      console.log(`⚠️  No metadata export found in: ${dir}/${subdir}/page.js`);
      errors++;
      continue;
    }

    const insertionPoint = match.index + match[0].length;
    const robotsDirective = `\n  robots: { index: true, follow: true },`;
    
    content = content.slice(0, insertionPoint) + robotsDirective + content.slice(insertionPoint);
    
    fs.writeFileSync(pageFile, content, 'utf-8');
    fixed++;
  }
}

console.log(`\n✅ Done!`);
console.log(`   Fixed: ${fixed} pages`);
console.log(`   Skipped (already has robots): ${skipped}`);
console.log(`   Errors: ${errors}`);
