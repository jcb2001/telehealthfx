import { BlogGLP1ShortageUpdate2026 } from "../../../components/blog-glp-1-shortage-update-may-2026.jsx";

export const metadata = {
  robots: { index: true, follow: true },
  alternates: {
    canonical: 'https://telehealthfx.com/blog/glp-1-shortage-update-may-2026/',
  },
  title: "The GLP-1 Shortage Update (May 2026): Which Medications Are Available Right Now?",
  description: "Real-time GLP-1 medication availability tracker for May 2026. Ozempic, Wegovy, Mounjaro, Zepbound shortage status, pharmacy tips, and alternative access pathways.",
  openGraph: {
    title: "GLP-1 Shortage Update May 2026: Which Medications Are Available?",
    description: "Real-time availability tracker for Ozempic, Wegovy, Mounjaro, Zepbound, and compounded alternatives.",
    images: [{ url: "https://telehealthfx.com/assets/glp1-shortage-update-featured.png", width: 1200, height: 630, alt: "GLP-1 Shortage Update" }],
  },
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org", "@graph": [
      { "@type": "MedicalWebPage",
    "description": metadata.description, "@id": "https://telehealthfx.com/blog/glp-1-shortage-update-may-2026/#article", "headline": "The GLP-1 Shortage Update (May 2026): Which Medications Are Available Right Now?", "image": "https://telehealthfx.com/assets/glp1-shortage-update-featured.png", "author": { "@type": "Person", "name": "Julian Mercer, M.S.", "url": "https://telehealthfx.com/about" }, "publisher": { "@type": "Organization", "name": "Telehealth FX", "logo": { "@type": "ImageObject", "url": "https://telehealthfx.com/assets/logo.png" } }, "mainEntityOfPage": { "@type": "WebPage", "@id": "https://telehealthfx.com/blog/glp-1-shortage-update-may-2026/" } },
      { "@type": "FAQPage", "@id": "https://telehealthfx.com/blog/glp-1-shortage-update-may-2026/#faq", "mainEntity": [
        { "@type": "Question", "name": "Is Ozempic still in shortage in 2026?", "acceptedAnswer": { "@type": "Answer", "text": "The FDA resolved the semaglutide shortage in February 2025. Ozempic is widely available, though the 2 mg dose may have intermittent delays." } },
        { "@type": "Question", "name": "Can I still get compounded semaglutide?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, through licensed 503A pharmacies with a valid patient-specific prescription." } }
      ]}
    ]
  };
  return (<><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} /><BlogGLP1ShortageUpdate2026 /></>);
}
