import { BlogGLP1ThyroidCancerRisk } from "../../../components/blog-glp1-thyroid-cancer-risk-2026.jsx";
export const metadata = { title: "GLP-1 and Thyroid Cancer Risk: What the Black Box Warning Actually Means (2026)", description: "The GLP-1 thyroid cancer black box warning explained. Rodent vs human data, 20 years of clinical evidence, who should avoid GLP-1, and putting risk in perspective.", openGraph: { title: "GLP-1 Thyroid Cancer Risk: What the Warning Really Means", description: "20 years of human data. Rodent vs human biology. The facts behind the black box warning.", images: [{ url: "https://telehealthfx.com/assets/glp1-thyroid-cancer-risk-featured.png", width: 1200, height: 630, alt: "GLP-1 Thyroid Risk" }] } };
export default function Page() {
  const jsonLd = { "@context": "https://schema.org", "@graph": [
    { "@type": "MedicalWebPage", "headline": "GLP-1 and Thyroid Cancer Risk: What the Black Box Warning Means", "image": "https://telehealthfx.com/assets/glp1-thyroid-cancer-risk-featured.png", "author": { "@type": "Person", "name": "Julian Mercer, M.S." }, "publisher": { "@type": "Organization", "name": "Telehealth FX" } },
    { "@type": "FAQPage", "mainEntity": [
      { "@type": "Question", "name": "Does semaglutide cause thyroid cancer in humans?", "acceptedAnswer": { "@type": "Answer", "text": "After 20+ years and millions of patients, no evidence of increased thyroid cancer risk in humans." } },
      { "@type": "Question", "name": "Can I take semaglutide with hypothyroidism?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Hypothyroidism involves follicular cells, not the C-cells in the warning. Safe to use with levothyroxine." } }
    ]}
  ]};
  return (<><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} /><BlogGLP1ThyroidCancerRisk /></>);
}
