import { BlogGLP1AlcoholGuidelines } from "../../../components/blog-glp1-alcohol-guidelines-2026.jsx";
export const metadata = {
  robots: { index: true, follow: true }, title: "GLP-1 and Alcohol: Can You Drink on Semaglutide? Safety & Interaction Guide (2026)", description: "Can you drink alcohol on semaglutide or tirzepatide? The 4 GLP-1/alcohol interactions, hypoglycemia risk, safe drinking guidelines, and why GLP-1 reduces alcohol desire." };
export default function Page() {
  const jsonLd = { "@context": "https://schema.org", "@type": "MedicalWebPage", "headline": "GLP-1 and Alcohol Guidelines", "author": { "@type": "Person", "name": "Julian Mercer, M.S." }, "publisher": { "@type": "Organization", "name": "Telehealth FX" } };
  return (<><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} /><BlogGLP1AlcoholGuidelines /></>);
}
