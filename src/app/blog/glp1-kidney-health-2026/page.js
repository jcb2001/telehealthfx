import { BlogGLP1KidneyHealth } from "../../../components/blog-glp1-kidney-health-2026.jsx";
export const metadata = { title: "GLP-1 and Kidney Health: FLOW Trial Results — Semaglutide Protects Renal Function (2026)", description: "FLOW trial: semaglutide reduced major kidney events by 24%. How GLP-1 preserves GFR, reduces albuminuria, and protects kidney function in CKD patients." };
export default function Page() {
  const jsonLd = { "@context": "https://schema.org", "@type": "MedicalWebPage", "headline": "GLP-1 and Kidney Health", "author": { "@type": "Person", "name": "Julian Mercer, M.S." }, "publisher": { "@type": "Organization", "name": "Telehealth FX" } };
  return (<><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} /><BlogGLP1KidneyHealth /></>);
}
