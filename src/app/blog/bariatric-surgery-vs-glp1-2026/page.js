import { BlogBariatricVsGLP1 } from "../../../components/blog-bariatric-surgery-vs-glp1-2026.jsx";
export const metadata = {
  robots: { index: true, follow: true }, title: "Bariatric Surgery vs GLP-1: Which Produces Better Long-Term Results? (2026)", description: "Gastric sleeve 25-30% weight loss vs tirzepatide 22.5%. Cost $25K vs $199/mo. Risk, recovery, reversibility comparison. Complete decision guide." ,
  alternates: {
    canonical: 'https://telehealthfx.com/blog/bariatric-surgery-vs-glp1-2026/'
  }
};
export default function Page() {
  const jsonLd = { "@context": "https://schema.org", "@type": "MedicalWebPage",
    "description": metadata.description, "headline": "Bariatric Surgery vs GLP-1", "author": { "@type": "Person", "name": "Julian Mercer, M.S." }, "publisher": { "@type": "Organization", "name": "Telehealth FX" } };
  return (<><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} /><BlogBariatricVsGLP1 /></>);
}
