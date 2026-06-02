const fs = require('fs');
const path = require('path');

const componentsDir = '/Users/joshburrows/Desktop/Antigravity/Side Hustles/Telehealth FX/Telehealth FX Site/src/components';
const targetFiles = [
  'medicine-ed.jsx',
  'medicine-enclomiphene.jsx',
  'medicine-hair.jsx',
  'medicine-metformin.jsx',
  'medicine-testosterone.jsx'
];

function extractObject(content, startFrom) {
  let braceCount = 0;
  let inString = null;
  let escaped = false;
  let startIndex = content.indexOf('{', startFrom);
  if (startIndex === -1) return null;

  for (let i = startIndex; i < content.length; i++) {
    const char = content[i];
    if (escaped) {
      escaped = false;
      continue;
    }
    if (char === '\\') {
      escaped = true;
      continue;
    }
    if (inString) {
      if (char === inString) {
        inString = null;
      }
      continue;
    }
    if (char === '"' || char === "'" || char === "`") {
      inString = char;
      continue;
    }
    if (char === '{') {
      braceCount++;
    } else if (char === '}') {
      braceCount--;
      if (braceCount === 0) {
        return {
          start: startIndex,
          end: i + 1,
          text: content.substring(startIndex, i + 1)
        };
      }
    }
  }
  return null;
}

targetFiles.forEach(file => {
  const filePath = path.join(componentsDir, file);
  if (!fs.existsSync(filePath)) {
    console.log(`File not found: ${file}`);
    return;
  }
  
  let content = fs.readFileSync(filePath, 'utf8');
  const match = content.match(/const schema\s*=\s*/);
  if (!match) {
    console.log(`No schema matched in ${file}`);
    return;
  }
  
  const startSearch = match.index + match[0].length;
  const objData = extractObject(content, startSearch);
  if (!objData) {
    console.log(`Failed to extract schema object from ${file}`);
    return;
  }
  
  let obj;
  try {
    obj = new Function('return ' + objData.text)();
  } catch (err) {
    console.log(`Failed to evaluate schema in ${file}: ${err.message}`);
    return;
  }
  
  if (Array.isArray(obj['@graph'])) {
    const initialLen = obj['@graph'].length;
    obj['@graph'] = obj['@graph'].filter(item => item['@type'] !== 'Offer');
    
    if (obj['@graph'].length !== initialLen) {
      const stringified = JSON.stringify(obj);
      const newContent = content.substring(0, objData.start) + stringified + content.substring(objData.end);
      fs.writeFileSync(filePath, newContent, 'utf8');
      console.log(`Successfully removed standalone Offer from ${file}`);
    } else {
      console.log(`No Offer found in graph of ${file}`);
    }
  } else {
    console.log(`Schema is not a graph in ${file}`);
  }
});
