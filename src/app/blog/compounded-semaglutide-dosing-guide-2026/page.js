import { BlogCompoundedDosingGuide } from "../../../components/blog-compounded-dosing-guide-2026.jsx";
export const metadata = {
  robots: { index: true, follow: true }, title: "Compounded Semaglutide Dosing Guide: Vials, Titration & Storage (2026)", description: "How compounded semaglutide vials work vs Ozempic pens. Full titration schedule, custom dosing flexibility, storage instructions, and travel tips." ,
  alternates: {
    canonical: 'https://telehealthfx.com/blog/compounded-semaglutide-dosing-guide-2026/'
  }
};
export default function Page() {
  const jsonLd = { "@context": "https://schema.org", "@type": "MedicalWebPage",
    "description": metadata.description, "headline": "Compounded GLP-1 Dosing Guide", "author": { "@type": "Person", "name": "Julian Mercer, M.S." }, "publisher": { "@type": "Organization", "name": "Telehealth FX" } };
  return (<><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} /><BlogCompoundedDosingGuide /></>);
}
