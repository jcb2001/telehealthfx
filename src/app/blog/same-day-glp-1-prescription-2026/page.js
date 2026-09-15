import { BlogSameDayGLP1 } from "../../../components/blog-same-day-glp-1-prescription-2026.jsx";

export const metadata = {
  robots: { index: true, follow: true },
  alternates: {
    canonical: 'https://telehealthfx.com/blog/same-day-glp-1-prescription-2026/',
  },
  title: "Fastest Telehealth GLP-1 Delivery: 48-Hr Cold Shipping",
  description: "Compare delivery speeds across GLP-1 telehealth services. Telehealth FX delivers doctor-prescribed Semaglutide & Tirzepatide in 48 hours with zero extra fees.",
  openGraph: {
    title: "Fastest Telehealth GLP-1 Delivery: 48-Hr Cold Shipping",
    description: "Compare delivery speeds across GLP-1 telehealth services. Telehealth FX delivers doctor-prescribed Semaglutide & Tirzepatide in 48 hours with zero extra fees.",
    images: [{ url: "https://telehealthfx.com/assets/same-day-glp1-prescription-featured.png", width: 1200, height: 630, alt: "Fastest Telehealth GLP-1 Delivery" }],
  },
};

export default function Page() {
  const jsonLd = { "@context": "https://schema.org", "@graph": [
    { "@type": "MedicalWebPage",
    "description": metadata.description, "@id": "https://telehealthfx.com/blog/same-day-glp-1-prescription-2026/#article", "headline": "Same-Day GLP-1 Prescription Online: How Fast Can You Actually Start?", "image": "https://telehealthfx.com/assets/same-day-glp1-prescription-featured.png", "author": { "@type": "Person", "name": "Julian Mercer, M.S.", "url": "https://telehealthfx.com/about" }, "publisher": { "@type": "Organization", "name": "Telehealth FX" }, "mainEntityOfPage": { "@type": "WebPage", "@id": "https://telehealthfx.com/blog/same-day-glp-1-prescription-2026/" } },
    { "@type": "FAQPage", "@id": "https://telehealthfx.com/blog/same-day-glp-1-prescription-2026/#faq", "mainEntity": [
      { "@type": "Question", "name": "Can I get a GLP-1 prescription the same day I apply?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Many telehealth providers review and approve eligible patients the same day. Medication ships within 2-5 additional days." } },
      { "@type": "Question", "name": "Is a same-day prescription safe?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. A licensed clinician still reviews your complete medical history. Speed comes from eliminating administrative delays, not clinical shortcuts." } }
    ]}
  ]};
  return (<><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} /><BlogSameDayGLP1 /></>);
}
