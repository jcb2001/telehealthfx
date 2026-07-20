import { BlogGLP1Sleep } from "../../../components/blog-glp1-sleep-quality-2026.jsx";
export const metadata = {
  robots: { index: true, follow: true }, title: "GLP-1 and Sleep: How Semaglutide Improves Sleep Quality (2026)", description: "GLP-1 improves sleep quality, reduces sleep apnea (63% AHI reduction), and creates a virtuous weight loss cycle. Clinical data on semaglutide and sleep." ,
  alternates: {
    canonical: 'https://telehealthfx.com/blog/glp1-sleep-quality-2026/'
  }
};
export default function Page() {
  const jsonLd = { "@context": "https://schema.org", "@type": "MedicalWebPage", "headline": "GLP-1 and Sleep Quality", "author": { "@type": "Person", "name": "Julian Mercer, M.S." }, "publisher": { "@type": "Organization", "name": "Telehealth FX" } };
  return (<><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} /><BlogGLP1Sleep /></>);
}
