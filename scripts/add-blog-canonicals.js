// Batch-add canonical tags to all blog page.js files

const fs = require('fs');
const path = require('path');

const blogDir = path.join(__dirname, '..', 'src', 'app', 'blog');
const BASE_URL = 'https://telehealthfx.com/blog';

let updated = 0;
let skipped = 0;
let errors = 0;

const entries = fs.readdirSync(blogDir, { withFileTypes: true });

for (const entry of entries) {
  if (!entry.isDirectory()) continue;
  
  const slug = entry.name;
  const pageFile = path.join(blogDir, slug, 'page.js');
  
  if (!fs.existsSync(pageFile)) {
    console.log('SKIP (no page.js): ' + slug);
    skipped++;
    continue;
  }
  
  let content = fs.readFileSync(pageFile, 'utf8');
  
  if (content.includes('alternates')) {
    console.log('SKIP (already has alternates): ' + slug);
    skipped++;
    continue;
  }
  
  if (!content.includes('export const metadata')) {
    console.log('SKIP (no metadata export): ' + slug);
    skipped++;
    continue;
  }
  
  const canonicalUrl = BASE_URL + '/' + slug + '/';
  
  var metadataStart = content.indexOf('export const metadata');
  if (metadataStart === -1) {
    console.log('ERROR (no metadata): ' + slug);
    errors++;
    continue;
  }
  
  var braceDepth = 0;
  var metadataEnd = -1;
  var foundOpenBrace = false;
  
  for (var i = metadataStart; i < content.length; i++) {
    if (content[i] === '{') {
      braceDepth++;
      foundOpenBrace = true;
    } else if (content[i] === '}') {
      braceDepth--;
      if (foundOpenBrace && braceDepth === 0) {
        metadataEnd = i;
        break;
      }
    }
  }
  
  if (metadataEnd === -1) {
    console.log('ERROR (no metadata end): ' + slug);
    errors++;
    continue;
  }
  
  var before = content.substring(0, metadataEnd);
  var after = content.substring(metadataEnd);
  
  var trimmedBefore = before.trimEnd();
  var needsComma = !trimmedBefore.endsWith(',') && !trimmedBefore.endsWith('{');
  
  var alternatesStr = (needsComma ? ',' : '') + '\n  alternates: {\n    canonical: \'' + canonicalUrl + '\'\n  }\n';
  
  var newContent = before + alternatesStr + after;
  
  fs.writeFileSync(pageFile, newContent, 'utf8');
  console.log('UPDATED: ' + slug);
  updated++;
}

console.log('');
console.log('--- Summary ---');
console.log('Updated: ' + updated);
console.log('Skipped: ' + skipped);
console.log('Errors:  ' + errors);
