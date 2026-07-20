// Batch-add canonical tags to TRT and weight-loss page.js files

const fs = require('fs');
const path = require('path');

var sections = [
  { dir: path.join(__dirname, '..', 'src', 'app', 'trt'), baseUrl: 'https://telehealthfx.com/trt' },
  { dir: path.join(__dirname, '..', 'src', 'app', 'weight-loss'), baseUrl: 'https://telehealthfx.com/weight-loss' }
];

var totalUpdated = 0;
var totalSkipped = 0;
var totalErrors = 0;

for (var s = 0; s < sections.length; s++) {
  var section = sections[s];
  console.log('\n=== Processing: ' + section.dir + ' ===');
  
  if (!fs.existsSync(section.dir)) {
    console.log('Directory not found, skipping');
    continue;
  }
  
  var entries = fs.readdirSync(section.dir, { withFileTypes: true });
  
  for (var e = 0; e < entries.length; e++) {
    var entry = entries[e];
    if (!entry.isDirectory()) continue;
    
    var slug = entry.name;
    var pageFile = path.join(section.dir, slug, 'page.js');
    
    if (!fs.existsSync(pageFile)) {
      console.log('SKIP (no page.js): ' + slug);
      totalSkipped++;
      continue;
    }
    
    var content = fs.readFileSync(pageFile, 'utf8');
    
    if (content.includes('alternates')) {
      console.log('SKIP (already has alternates): ' + slug);
      totalSkipped++;
      continue;
    }
    
    if (!content.includes('export const metadata')) {
      console.log('SKIP (no metadata export): ' + slug);
      totalSkipped++;
      continue;
    }
    
    var canonicalUrl = section.baseUrl + '/' + slug + '/';
    
    var metadataStart = content.indexOf('export const metadata');
    if (metadataStart === -1) {
      console.log('ERROR: ' + slug);
      totalErrors++;
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
      console.log('ERROR (no end): ' + slug);
      totalErrors++;
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
    totalUpdated++;
  }
}

console.log('');
console.log('--- Summary ---');
console.log('Updated: ' + totalUpdated);
console.log('Skipped: ' + totalSkipped);
console.log('Errors:  ' + totalErrors);
