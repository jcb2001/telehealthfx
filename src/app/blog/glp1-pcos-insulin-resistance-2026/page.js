import { BlogGLP1PCOSInsulinResistance } from "../../../components/blog-glp1-pcos-insulin-resistance-2026.jsx";
export const metadata = {
  robots: { index: true, follow: true }, title: "GLP-1 and PCOS: How Semaglutide Addresses Insulin Resistance in Polycystic Ovary Syndrome (2026)", description: "GLP-1 targets insulin resistance — the root cause of PCOS. Clinical evidence on semaglutide for PCOS weight loss, androgen reduction, cycle restoration, and fertility." };
export default function Page() {
  const jsonLd = { "@context": "https://schema.org", "@type": "MedicalWebPage", "headline": "GLP-1 and PCOS Insulin Resistance", "author": { "@type": "Person", "name": "Julian Mercer, M.S." }, "publisher": { "@type": "Organization", "name": "Telehealth FX" } };
  return (<><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} /><BlogGLP1PCOSInsulinResistance /></>);
}
