export async function onRequest(context) {
  const url = new URL(context.request.url);
  const domain = url.hostname === 'localhost' ? 'http://localhost:8788' : `https://${url.hostname}`;
  
  // 1. Fetch generic-page.jsx to find all explicit dynamic routes (product pages & blogs)
  let dynamicRoutes = [];
  try {
    const genericPageResp = await context.env.ASSETS.fetch(new URL('/components/generic-page.jsx', context.request.url));
    if (genericPageResp.ok) {
      const genericPageText = await genericPageResp.text();
      const regex = /case\s+'([^']+)':/g;
      let match;
      while ((match = regex.exec(genericPageText)) !== null) {
        dynamicRoutes.push('/' + match[1]);
      }
    }
  } catch (e) {
    // Ignore errors and use fallback
  }

  // 2. Fetch page-content.jsx to find all legal/support pages
  let staticRoutes = ['']; // Root is always included
  try {
    const pageContentResp = await context.env.ASSETS.fetch(new URL('/components/page-content.jsx', context.request.url));
    if (pageContentResp.ok) {
      const pageContentText = await pageContentResp.text();
      const regex = /'([^']+)':\s*\{\s*title:/g;
      let match;
      while ((match = regex.exec(pageContentText)) !== null) {
        staticRoutes.push('/' + match[1]);
      }
    }
  } catch (e) {
  }

  // Fallback lists if extraction fails for some reason
  if (dynamicRoutes.length === 0) {
    dynamicRoutes = [
      '/how', '/medications', '/pricing', '/results', '/science', '/faq', '/blog',
      '/blog/berberine', '/blog/72-hour-myth', '/blog/transdermal-vs-oral', '/blog/natures-ozempic-exposed',
      '/blog/fda-compounding-ban',
      '/blog/glp-1-muscle-loss-the-hidden-risk-nobodys-talking',
      '/blog/oral-semaglutide-is-here-is-the-glp-1-pill-as-good',
      '/blog/what-happens-when-you-stop-glp-1-medication-the-re',
      '/blog/berberine-vs-glp-1-in-2026-can-natures-ozempic-act',
      '/blog/glp-1-side-effects-how-to-manage-nausea-fatigue-mo',
      '/blog/hidden-fees-in-telehealth-weight-loss-how-to-spot',
      '/blog/glp-1-and-exercise-how-to-combine-medication-with',
      '/blog/weight-loss-for-women-over-40-how-glp-1-can-help-2',
      '/blog/berberine-for-pcos-what-the-research-actually-says',
      '/blog/tirzepatide-vs-semaglutide-which-glp-1-is-right-fo',
      '/blog/glp-1-and-alcohol-what-you-need-to-know-2026-clini',
      '/blog/weight-loss-for-men-why-glp-1-isnt-just-for-women',
      '/blog/ozempic-face-loose-skin-prevention-treatment-what',
      '/blog/nad-therapy-explained-anti-aging-energy-weight-los',
      '/blog/is-compounded-semaglutide-safe-what-you-need-to-kn',
      '/blog/glp-1-and-mental-health-anxiety-depression-food-no',
      '/blog/sermorelin-growth-hormone-the-weight-loss-accelera',
      '/blog/glp-1-for-seniors-weight-loss-after-60-safely-2026',
      '/blog/glp-1-plateau-when-weight-loss-stalls-what-to-do-2',
      '/blog/glp-1-and-your-heart-the-select-trial-cardiovascul',
      '/blog/oral-vs-injectable-glp-1-rybelsus-oral-wegovy-orfo',
      '/blog/ozempic-babies-glp-1-and-fertility-what-women-need',
      '/blog/next-gen-glp-1-drugs-survodutide-orforglipron-amyc',
      '/blog/glp-1-and-type-2-diabetes-beyond-weight-loss-2026',
      '/blog/the-social-stigma-of-weight-loss-medication-why-it',
      '/blog/intermittent-fasting-glp-1-do-they-work-together-2'
    ];
  }
  if (staticRoutes.length <= 1) { // Only contains root
    staticRoutes = [
      '', '/about', '/careers', '/press', '/partners', '/contact', '/help-center',
      '/shipping', '/returns', '/insurance', '/status', '/privacy', '/terms', 
      '/telehealth-consent', '/hipaa', '/accessibility', '/affiliate-disclosure'
    ];
  }

  const allPages = [...new Set([...staticRoutes, ...dynamicRoutes])];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allPages.map(page => `  <url>
    <loc>${domain}${page}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>${page === '' || page === '/blog' ? 'daily' : 'weekly'}</changefreq>
    <priority>${page === '' ? '1.0' : page.startsWith('/blog/') ? '0.8' : '0.6'}</priority>
  </url>`).join('\n')}
</urlset>`;

  return new Response(sitemap.trim(), {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600'
    }
  });
}
