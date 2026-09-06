import { BlogSemaglutideMusclePreservation } from "../../../components/blog-semaglutide-muscle-preservation-2026.jsx";
export const metadata = {
  robots: { index: true, follow: true }, title: "Semaglutide and Muscle Preservation: The Complete Protein & Resistance Training Protocol (2026)", description: "25-40% of GLP-1 weight loss is lean mass. The complete evidence-based protocol to cut muscle loss in half: protein targets, resistance training, and monitoring." ,
  alternates: {
    canonical: 'https://telehealthfx.com/blog/semaglutide-muscle-preservation-2026/'
  }
};
export default function Page() {
  const jsonLd = { "@context": "https://schema.org", "@type": "MedicalWebPage",
    "description": metadata.description, "headline": "Semaglutide and Muscle Preservation", "author": { "@type": "Person", "name": "Julian Mercer, M.S." }, "publisher": { "@type": "Organization", "name": "Telehealth FX" } };
  return (<><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} /><BlogSemaglutideMusclePreservation /></>);
}
