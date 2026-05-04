import { BlogMetforminBerberineStacking } from "../../../components/blog-metformin-berberine-stacking-2026.jsx";

export const metadata = {
  title: "Metformin + Berberine Stacking: Synergy or Dangerous Overlap? (2026 Clinical Review)",
  description: "Can you safely combine metformin and berberine? AMPK pathway analysis, lactic acidosis risk, drug interactions, and the safer GLP-1 alternative stack for metabolic optimization.",
  openGraph: {
    title: "Metformin + Berberine Stacking: Synergy or Dangerous Overlap?",
    description: "AMPK pathway analysis, safety concerns, and the safer GLP-1 alternative for metabolic optimization.",
    images: [{ url: "https://telehealthfx.com/assets/metformin-berberine-featured.png", width: 1200, height: 630, alt: "Metformin and Berberine Stacking" }],
  },
};

export default function Page() {
  const jsonLd = { "@context": "https://schema.org", "@graph": [
    { "@type": "MedicalWebPage", "@id": "https://telehealthfx.com/blog/metformin-berberine-stacking-2026/#article", "headline": "Metformin + Berberine Stacking: Synergy or Dangerous Overlap?", "image": "https://telehealthfx.com/assets/metformin-berberine-featured.png", "author": { "@type": "Person", "name": "Julian Mercer, M.S.", "url": "https://telehealthfx.com/about" }, "publisher": { "@type": "Organization", "name": "Telehealth FX" }, "mainEntityOfPage": { "@type": "WebPage", "@id": "https://telehealthfx.com/blog/metformin-berberine-stacking-2026/" } },
    { "@type": "FAQPage", "@id": "https://telehealthfx.com/blog/metformin-berberine-stacking-2026/#faq", "mainEntity": [
      { "@type": "Question", "name": "Can I take berberine and metformin at the same time?", "acceptedAnswer": { "@type": "Answer", "text": "Not recommended without clinical supervision. Both inhibit mitochondrial Complex I, amplifying GI side effects and lactic acidosis risk." } },
      { "@type": "Question", "name": "Is berberine as effective as metformin?", "acceptedAnswer": { "@type": "Answer", "text": "Multiple trials show comparable HbA1c reductions. However, berberine is a supplement, not FDA-approved, and should not replace metformin without medical guidance." } }
    ]}
  ]};
  return (<><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} /><BlogMetforminBerberineStacking /></>);
}
