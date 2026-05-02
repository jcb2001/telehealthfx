import { BlogOzempicFaceLooseSkinPreventionTreatmentWhat } from "../../../components/blog-ozempic-face-loose-skin-prevention-treatment-what.jsx";

export const metadata = {
  title: "Ozempic Face & Loose Skin: Prevention and Treatment",
  description: "A rigid 7-step clinical framework to protect your collagen elasticity, and a realistic overview of post-weight-loss treatment options.",
  openGraph: {
    title: "Ozempic Face & Loose Skin: Prevention and Treatment",
    description: "A rigid 7-step clinical framework to protect your collagen elasticity, and a realistic overview of post-weight-loss treatment options.",
    images: [
      {
        url: "https://telehealthfx.com/assets/loose_skin_featured.png",
        width: 1024,
        height: 1024,
        alt: "Loose Skin Prevention",
      },
    ],
  },
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "MedicalWebPage",
        "@id": "https://telehealthfx.com/blog/ozempic-face-loose-skin-prevention-treatment-what/#article",
        "headline": "Ozempic Face & Loose Skin: Prevention and Treatment",
        "description": "A rigid 7-step clinical framework to protect your collagen elasticity, and a realistic overview of post-weight-loss treatment options.",
        "image": "https://telehealthfx.com/assets/loose_skin_featured.png",
        "author": {
          "@type": "Person",
          "name": "Julian Mercer, M.S.",
          "url": "https://telehealthfx.com/about",
          "jobTitle": "Lead Bio-Systems Analyst"
        },
        "publisher": {
          "@type": "Organization",
          "name": "Telehealth FX",
          "logo": {
            "@type": "ImageObject",
            "url": "https://telehealthfx.com/assets/logo.png"
          }
        },
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": "https://telehealthfx.com/blog/ozempic-face-loose-skin-prevention-treatment-what/"
        }
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <BlogOzempicFaceLooseSkinPreventionTreatmentWhat />
    </>
  );
}
