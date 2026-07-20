import { BlogSwitchGLP1Providers } from "../../../components/blog-switch-glp-1-providers-2026.jsx";
export const metadata = {
  robots: { index: true, follow: true },
  alternates: {
    canonical: 'https://telehealthfx.com/blog/switch-glp-1-providers-2026/',
  },
  title: "How to Switch Telehealth GLP-1 Providers Without Losing Your Prescription (2026)",
  description: "Step-by-step guide to switching GLP-1 telehealth providers without treatment gaps. Maintain your dose, avoid re-titration, and find a better provider.",
  openGraph: { title: "Switch GLP-1 Providers Without Losing Your Prescription", description: "Seamless transition guide. No gaps, no re-titration, no hidden fees.", images: [{ url: "https://telehealthfx.com/assets/switch-glp1-providers-featured.png", width: 1200, height: 630, alt: "Switch GLP-1 Providers" }] },
};
export default function Page() {
  const jsonLd = { "@context": "https://schema.org", "@graph": [
    { "@type": "MedicalWebPage", "@id": "https://telehealthfx.com/blog/switch-glp-1-providers-2026/#article", "headline": "How to Switch Telehealth GLP-1 Providers Without Losing Your Prescription", "image": "https://telehealthfx.com/assets/switch-glp1-providers-featured.png", "author": { "@type": "Person", "name": "Julian Mercer, M.S.", "url": "https://telehealthfx.com/about" }, "publisher": { "@type": "Organization", "name": "Telehealth FX" } },
    { "@type": "FAQPage", "@id": "https://telehealthfx.com/blog/switch-glp-1-providers-2026/#faq", "mainEntity": [
      { "@type": "Question", "name": "Will I have to start over at the lowest dose?", "acceptedAnswer": { "@type": "Answer", "text": "No. A new provider will continue at your current dose based on documented treatment history." } },
      { "@type": "Question", "name": "Can I transfer my prescription?", "acceptedAnswer": { "@type": "Answer", "text": "Your new provider writes a new prescription based on your history. No transfer from old provider needed." } }
    ]}
  ]};
  return (<><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} /><BlogSwitchGLP1Providers /></>);
}
