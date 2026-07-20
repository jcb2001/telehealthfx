import { BlogGLP1FattyLiver } from "../../../components/blog-glp1-fatty-liver-2026.jsx";
export const metadata = {
  robots: { index: true, follow: true }, title: "GLP-1 and Fatty Liver Disease: How Semaglutide Reverses NAFLD/MASH (2026)", description: "Semaglutide resolved MASH in 59% of patients. How GLP-1 reduces liver fat, normalizes ALT/AST, and may prevent liver failure." ,
  alternates: {
    canonical: 'https://telehealthfx.com/blog/glp1-fatty-liver-2026/'
  }
};
export default function Page() {
  const jsonLd = { "@context": "https://schema.org", "@type": "MedicalWebPage", "headline": "GLP-1 and Fatty Liver Disease", "author": { "@type": "Person", "name": "Julian Mercer, M.S." }, "publisher": { "@type": "Organization", "name": "Telehealth FX" } };
  return (<><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} /><BlogGLP1FattyLiver /></>);
}
