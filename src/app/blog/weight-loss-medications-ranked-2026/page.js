import { BlogWeightLossMedicationsRanked } from "../../../components/blog-weight-loss-medications-ranked-2026.jsx";
export const metadata = {
  robots: { index: true, follow: true },
  alternates: {
    canonical: 'https://telehealthfx.com/blog/weight-loss-medications-ranked-2026/',
  }, title: "Every Weight Loss Medication Ranked: GLP-1 Options (2026)", description: "All weight loss medications ranked by effectiveness: Tirzepatide (22.5%), Semaglutide (14.9%), Liraglutide (8%), Qsymia (7.8%), Contrave (5-6%), and more.", openGraph: { title: "Weight Loss Medications Ranked: Complete 2026 Guide", description: "From tirzepatide to orlistat. Every option ranked by clinical data." } };
export default function Page() {
  const jsonLd = { "@context": "https://schema.org", "@type": "MedicalWebPage",
    "description": metadata.description, "headline": "Weight Loss Medications Ranked 2026", "author": { "@type": "Person", "name": "Julian Mercer, M.S." }, "publisher": { "@type": "Organization", "name": "Telehealth FX" } };
  return (<><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} /><BlogWeightLossMedicationsRanked /></>);
}
