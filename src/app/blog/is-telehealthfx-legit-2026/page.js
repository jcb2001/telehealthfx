import { BlogIsTelehealthFXLegit } from "../../../components/blog-is-telehealthfx-legit-2026.jsx";
export const metadata = {
  robots: { index: true, follow: true },
  alternates: {
    canonical: 'https://telehealthfx.com/blog/is-telehealthfx-legit-2026/',
  },
  title: "Is TelehealthFX Legit? Provider Verification, Pharmacy Licensing & What to Expect",
  description: "Is TelehealthFX legitimate? Verifiable provider licensing, 503A pharmacy credentials, transparent pricing, and a step-by-step patient experience walkthrough.",
  openGraph: { title: "Is TelehealthFX Legit? Full Verification Guide", description: "Licensed clinicians, verified pharmacy, transparent pricing. See for yourself.", images: [{ url: "https://telehealthfx.com/assets/is-telehealthfx-legit-featured.png", width: 1200, height: 630, alt: "Is TelehealthFX Legit" }] },
};
export default function Page() {
  const jsonLd = { "@context": "https://schema.org", "@graph": [
    { "@type": "MedicalWebPage",
    "description": metadata.description, "@id": "https://telehealthfx.com/blog/is-telehealthfx-legit-2026/#article", "headline": "Is TelehealthFX Legit?", "image": "https://telehealthfx.com/assets/is-telehealthfx-legit-featured.png", "author": { "@type": "Person", "name": "Julian Mercer, M.S.", "url": "https://telehealthfx.com/about" }, "publisher": { "@type": "Organization", "name": "Telehealth FX" } },
    { "@type": "FAQPage", "@id": "https://telehealthfx.com/blog/is-telehealthfx-legit-2026/#faq", "mainEntity": [
      { "@type": "Question", "name": "Is TelehealthFX FDA-approved?", "acceptedAnswer": { "@type": "Answer", "text": "TelehealthFX is a telehealth platform, not a drug manufacturer. Medications prescribed are well-established molecules compounded by licensed pharmacies." } },
      { "@type": "Question", "name": "Can I verify the pharmacy?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. You receive pharmacy name and license number to independently verify through your state Board of Pharmacy." } }
    ]}
  ]};
  return (<><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} /><BlogIsTelehealthFXLegit /></>);
}
