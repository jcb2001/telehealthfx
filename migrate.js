const fs = require('fs');
const path = require('path');

const componentsDir = path.join(__dirname, 'components');
const files = fs.readdirSync(componentsDir).filter(f => f.endsWith('.jsx'));

files.forEach(file => {
  const filePath = path.join(componentsDir, file);
  let content = fs.readFileSync(filePath, 'utf-8');

  // 1. Remove /* global ... */
  content = content.replace(/\/\* global .*? \*\//g, '');

  // 2. Add React import if not present
  if (!content.includes("import React")) {
    content = `import React, { useState, useEffect } from 'react';\n` + content;
  }

  // 3. Replace window.Component = Component with export { Component }
  const windowExportRegex = /window\.(\w+)\s*=\s*\1;/g;
  content = content.replace(windowExportRegex, 'export { $1 };');

  // 4. Strip out useSEO calls entirely (we will use Next.js native metadata)
  const useSEORegex = /^\s*useSEO\(.*?\);\s*$/gm;
  content = content.replace(useSEORegex, '');

  fs.writeFileSync(filePath, content);
  console.log(`Migrated ${file}`);
});
