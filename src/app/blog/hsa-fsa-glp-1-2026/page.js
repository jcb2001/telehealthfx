import { BlogHSAFSAGLP1 } from "../../../components/blog-hsa-fsa-glp-1-2026.jsx";

export const metadata = {
  alternates: {
    canonical: 'https://telehealthfx.com/blog/hsa-fsa-glp-1-2026/',
  },
  title: "Telehealth Weight Loss Programs That Accept HSA/FSA in 2026",
  description: "How to pay for GLP-1 medication with HSA or FSA pre-tax dollars. Eligible expenses, tax savings calculator, and FSA deadline strategies for semaglutide and tirzepatide.",
  openGraph: {
    title: "Pay for GLP-1 with HSA/FSA: Save Up to 37% (2026 Guide)",
    description: "Use pre-tax dollars for GLP-1 therapy. Eligible expenses, savings calculator, and provider guide.",
    images: [{ url: "https://telehealthfx.com/assets/hsa-fsa-glp1-featured.png", width: 1200, height: 630, alt: "HSA FSA GLP-1" }],
  },
};

export default function Page() {
  const jsonLd = { "@context": "https://schema.org", "@graph": [
    { "@type": "MedicalWebPage", "@id": "https://telehealthfx.com/blog/hsa-fsa-glp-1-2026/#article", "headline": "Telehealth Weight Loss Programs That Accept HSA/FSA in 2026", "image": "https://telehealthfx.com/assets/hsa-fsa-glp1-featured.png", "author": { "@type": "Person", "name": "Julian Mercer, M.S.", "url": "https://telehealthfx.com/about" }, "publisher": { "@type": "Organization", "name": "Telehealth FX" }, "mainEntityOfPage": { "@type": "WebPage", "@id": "https://telehealthfx.com/blog/hsa-fsa-glp-1-2026/" } },
    { "@type": "FAQPage", "@id": "https://telehealthfx.com/blog/hsa-fsa-glp-1-2026/#faq", "mainEntity": [
      { "@type": "Question", "name": "Can I use my HSA to pay for compounded semaglutide?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Compounded medications prescribed by a licensed clinician qualify as eligible medical expenses under IRS Publication 502." } },
      { "@type": "Question", "name": "Do I need a letter of medical necessity?", "acceptedAnswer": { "@type": "Answer", "text": "Most HSA administrators do not require one for prescribed medications. Some FSA plans may request one for weight loss drugs." } }
    ]}
  ]};
  return (<><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} /><BlogHSAFSAGLP1 /></>);
}
