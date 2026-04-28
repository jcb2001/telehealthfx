const fs = require('fs');

const files = fs.readdirSync('src/components').filter(f => f.startsWith('blog-') && f !== 'blog-index.jsx');

files.forEach(f => {
  const p = 'src/components/' + f;
  let text = fs.readFileSync(p, 'utf-8');
  
  // Remove dangling json schemas
  text = text.replace(/const articleSchema = \{[\s\S]*?\};\n/g, '');
  text = text.replace(/["']@context["']: ["']https:\/\/schema\.org["'],[\s\S]*?\};\n/g, '');
  fs.writeFileSync(p, text);
});
