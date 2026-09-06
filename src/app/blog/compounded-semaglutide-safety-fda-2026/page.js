import { BlogCompoundedSemaglutideSafety } from "../../../components/blog-compounded-semaglutide-safety-fda-2026.jsx";
export const metadata = {
  robots: { index: true, follow: true },
  alternates: {
    canonical: 'https://telehealthfx.com/blog/compounded-semaglutide-safety-fda-2026/',
  }, title: "Is Compounded Semaglutide Safe? FDA Rules & Pharmacy Standards (2026 Guide)", description: "Separating FDA enforcement facts from pharmaceutical PR. 503A vs 503B, USP 797 standards, semaglutide salt forms, and the 5 things you must verify before buying.", openGraph: { title: "Is Compounded Semaglutide Safe? What the FDA Actually Said", description: "FDA rules, pharmacy standards, and the 5-point verification checklist.", images: [{ url: "https://telehealthfx.com/assets/compounded-semaglutide-safety-fda-featured.png", width: 1200, height: 630 }] } };
export default function Page() {
  const jsonLd = { "@context": "https://schema.org", "@graph": [{ "@type": "MedicalWebPage",
    "description": metadata.description, "headline": "Is Compounded Semaglutide Safe?", "author": { "@type": "Person", "name": "Julian Mercer, M.S." }, "publisher": { "@type": "Organization", "name": "Telehealth FX" } }, { "@type": "FAQPage", "mainEntity": [{ "@type": "Question", "name": "Is compounded semaglutide FDA-approved?", "acceptedAnswer": { "@type": "Answer", "text": "No. Compounded medications are not FDA-approved — they are prepared by state-licensed pharmacies under Section 503A, the same framework for compounded thyroid and hormone medications." } }] }] };
  return (<><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} /><BlogCompoundedSemaglutideSafety /></>);
}
