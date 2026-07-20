import { BlogGLP1AndPregnancy } from "../../../components/blog-glp-1-and-pregnancy-fertility-safety-2026.jsx";

export const metadata = {
  robots: { index: true, follow: true },
  alternates: {
    canonical: 'https://telehealthfx.com/blog/glp-1-and-pregnancy-fertility-safety-2026/',
  },
  title: "GLP-1 Medications and Pregnancy: Fertility, the Ozempic Baby Phenomenon, and When to Stop",
  description: "GLP-1 and pregnancy safety guide. Ozempic babies explained, washout periods for semaglutide and tirzepatide, contraception interactions, and pre-conception planning strategies.",
  openGraph: {
    title: "GLP-1 and Pregnancy: Fertility, Safety, and When to Stop",
    description: "Ozempic babies explained. Washout periods, contraception interactions, and pre-conception planning for GLP-1 patients.",
    images: [{ url: "https://telehealthfx.com/assets/glp1-pregnancy-featured.png", width: 1200, height: 630, alt: "GLP-1 and Pregnancy Safety" }],
  },
};

export default function Page() {
  const jsonLd = { "@context": "https://schema.org", "@graph": [
    { "@type": "MedicalWebPage", "@id": "https://telehealthfx.com/blog/glp-1-and-pregnancy-fertility-safety-2026/#article", "headline": "GLP-1 Medications and Pregnancy: Fertility, the Ozempic Baby Phenomenon, and When to Stop", "image": "https://telehealthfx.com/assets/glp1-pregnancy-featured.png", "author": { "@type": "Person", "name": "Julian Mercer, M.S.", "url": "https://telehealthfx.com/about" }, "publisher": { "@type": "Organization", "name": "Telehealth FX" }, "mainEntityOfPage": { "@type": "WebPage", "@id": "https://telehealthfx.com/blog/glp-1-and-pregnancy-fertility-safety-2026/" } },
    { "@type": "FAQPage", "@id": "https://telehealthfx.com/blog/glp-1-and-pregnancy-fertility-safety-2026/#faq", "mainEntity": [
      { "@type": "Question", "name": "What should I do if I get pregnant while on semaglutide?", "acceptedAnswer": { "@type": "Answer", "text": "Stop taking the medication immediately and contact your healthcare provider for risk assessment." } },
      { "@type": "Question", "name": "How long after stopping Ozempic can I try to get pregnant?", "acceptedAnswer": { "@type": "Answer", "text": "Novo Nordisk recommends at least 2 months before a planned pregnancy to allow near-complete drug clearance." } },
      { "@type": "Question", "name": "Can GLP-1 medications affect oral birth control?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. GLP-1 agonists slow gastric emptying, potentially reducing absorption and efficacy of oral contraceptive pills." } }
    ]}
  ]};
  return (<><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} /><BlogGLP1AndPregnancy /></>);
}
