const fs = require('fs');
const path = require('path');

const componentsDir = path.join(__dirname, 'components');
const files = fs.readdirSync(componentsDir).filter(f => f.endsWith('.jsx'));

files.forEach(file => {
  const filePath = path.join(componentsDir, file);
  let content = fs.readFileSync(filePath, 'utf-8');

  let imports = ``;

  // Check if file uses Icon or Logo
  if (content.includes('<Icon.') || content.includes('Icon.')) {
    imports += `import { Icon } from './common.jsx';\n`;
  }
  if (content.includes('<Logo') || content.match(/\bLogo\b/)) {
    // Make sure we don't import Logo in common.jsx itself
    if (file !== 'common.jsx') {
      imports += `import { Logo } from './common.jsx';\n`;
    }
  }

  // Check generic-page.jsx specific imports
  if (file === 'generic-page.jsx') {
    imports += `import { Nav } from './common.jsx';\n`;
    imports += `import { Footer, FAQ } from './sections-3.jsx';\n`;
    imports += `import { HowItWorks, Medications, Results, Science } from './sections-1.jsx';\n`;
    imports += `import { Pricing } from './sections-2.jsx';\n`;
    imports += `import { BlogIndex } from './blog-index.jsx';\n`;
    imports += `import { BlogBerberine } from './blog-berberine.jsx';\n`;
    imports += `import { Blog72HourMyth } from './blog-72-hour-myth.jsx';\n`;
    imports += `import { BlogTransdermalVsOral } from './blog-transdermal-vs-oral.jsx';\n`;
    imports += `import { BlogNaturesOzempicExposed } from './blog-natures-ozempic-exposed.jsx';\n`;
    imports += `import { BlogGlp1UltimateGuide } from './blog-glp1-ultimate-guide.jsx';\n`;
  }
  
  // App.jsx specific (if we move it to components)
  // We'll skip app.jsx for now because we will replace it with Next.js router.

  content = content.replace(/(import React.*?;\n)/, `$1${imports}`);

  fs.writeFileSync(filePath, content);
  console.log(`Added imports to ${file}`);
});
