import { BlogOzempicVsWegovy } from "../../../components/blog-ozempic-vs-wegovy-2026.jsx";
export const metadata = {
  alternates: {
    canonical: 'https://telehealthfx.com/blog/ozempic-vs-wegovy-2026/',
  }, title: "Ozempic vs Wegovy: Same Drug, Different Price — Which Should You Get? (2026)", description: "Ozempic and Wegovy are the same molecule (semaglutide). Compare doses, pricing, insurance coverage, and why compounded semaglutide bypasses both.", openGraph: { title: "Ozempic vs Wegovy: Same Drug, Different Price", description: "Complete comparison of doses, pricing, insurance, and the compounded alternative.", images: [{ url: "https://telehealthfx.com/assets/ozempic-vs-wegovy-featured.png", width: 1200, height: 630, alt: "Ozempic vs Wegovy" }] } };
export default function Page() {
  const jsonLd = { "@context": "https://schema.org", "@graph": [
    { "@type": "MedicalWebPage", "headline": "Ozempic vs Wegovy: Same Drug, Different Price", "image": "https://telehealthfx.com/assets/ozempic-vs-wegovy-featured.png", "author": { "@type": "Person", "name": "Julian Mercer, M.S.", "url": "https://telehealthfx.com/about" }, "publisher": { "@type": "Organization", "name": "Telehealth FX" } },
    { "@type": "FAQPage", "mainEntity": [
      { "@type": "Question", "name": "Are Ozempic and Wegovy really the same drug?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Both contain semaglutide by Novo Nordisk. The difference is FDA indication and max dose." } },
      { "@type": "Question", "name": "Which produces more weight loss?", "acceptedAnswer": { "@type": "Answer", "text": "At equivalent doses, identical. Wegovy's 2.4mg max produces slightly more than Ozempic's 2.0mg max." } }
    ]}
  ]};
  return (<><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} /><BlogOzempicVsWegovy /></>);
}
