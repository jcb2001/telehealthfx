import { BlogGLP1MetabolicSyndrome } from "../../../components/blog-glp1-metabolic-syndrome-2026.jsx";
export const metadata = { title: "GLP-1 and Metabolic Syndrome: One Medication for Five Risk Factors (2026)", description: "Metabolic syndrome affects 1 in 3 adults. GLP-1 addresses all 5 criteria: waist circumference, triglycerides, HDL, blood pressure, and fasting glucose." };
export default function Page() {
  const jsonLd = { "@context": "https://schema.org", "@type": "MedicalWebPage", "headline": "GLP-1 and Metabolic Syndrome", "author": { "@type": "Person", "name": "Julian Mercer, M.S." }, "publisher": { "@type": "Organization", "name": "Telehealth FX" } };
  return (<><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} /><BlogGLP1MetabolicSyndrome /></>);
}
