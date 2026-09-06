import { BlogOzempicAlternativesNoInsurance } from "../../../components/blog-ozempic-alternatives-no-insurance-2026.jsx";

export const metadata = {
  robots: { index: true, follow: true },
  alternates: {
    canonical: 'https://telehealthfx.com/blog/ozempic-alternatives-no-insurance-2026/',
  },
  title: "Ozempic Alternatives That Don't Require Insurance: Every Option Ranked (2026)",
  description: "Every Ozempic alternative available without insurance in 2026, ranked by efficacy and cost. Compounded semaglutide, tirzepatide, Zepbound vials, oral options, and more.",
  openGraph: {
    title: "Ozempic Alternatives Without Insurance: Every Option Ranked (2026)",
    description: "From compounded semaglutide to berberine — every pathway ranked by efficacy and cost.",
    images: [{ url: "https://telehealthfx.com/assets/ozempic-alternatives-no-insurance-featured.png", width: 1200, height: 630, alt: "Ozempic Alternatives" }],
  },
};

export default function Page() {
  const jsonLd = { "@context": "https://schema.org", "@graph": [
    { "@type": "MedicalWebPage",
    "description": metadata.description, "@id": "https://telehealthfx.com/blog/ozempic-alternatives-no-insurance-2026/#article", "headline": "Ozempic Alternatives That Don't Require Insurance (2026)", "image": "https://telehealthfx.com/assets/ozempic-alternatives-no-insurance-featured.png", "author": { "@type": "Person", "name": "Julian Mercer, M.S.", "url": "https://telehealthfx.com/about" }, "publisher": { "@type": "Organization", "name": "Telehealth FX" }, "mainEntityOfPage": { "@type": "WebPage", "@id": "https://telehealthfx.com/blog/ozempic-alternatives-no-insurance-2026/" } },
    { "@type": "FAQPage", "@id": "https://telehealthfx.com/blog/ozempic-alternatives-no-insurance-2026/#faq", "mainEntity": [
      { "@type": "Question", "name": "What is the cheapest oral semaglutide option?", "acceptedAnswer": { "@type": "Answer", "text": "Compounded semaglutide through all-inclusive telehealth ($150–$399/month) offers a more affordable compounded alternative." } },
      { "@type": "Question", "name": "Is compounded semaglutide the same as Ozempic?", "acceptedAnswer": { "@type": "Answer", "text": "The active molecule is identical. The difference is manufacturing: branded vs 503A compounded." } }
    ]}
  ]};
  return (<><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} /><BlogOzempicAlternativesNoInsurance /></>);
}
