import { BlogGLP1MenOver50 } from "../../../components/blog-glp1-men-over-50-2026.jsx";
export const metadata = {
  robots: { index: true, follow: true }, title: "GLP-1 for Men Over 50: Testosterone, Visceral Fat & Cardiovascular Risk (2026)", description: "How GLP-1 breaks the visceral fat-testosterone cycle in men over 50. SELECT trial cardiovascular data, testosterone recovery, muscle preservation, and multi-organ protection." ,
  alternates: {
    canonical: 'https://telehealthfx.com/blog/glp1-men-over-50-2026/'
  }
};
export default function Page() {
  const jsonLd = { "@context": "https://schema.org", "@type": "MedicalWebPage",
    "description": metadata.description, "headline": "GLP-1 for Men Over 50", "author": { "@type": "Person", "name": "Julian Mercer, M.S." }, "publisher": { "@type": "Organization", "name": "Telehealth FX" } };
  return (<><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} /><BlogGLP1MenOver50 /></>);
}
