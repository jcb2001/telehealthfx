import { BlogOzempicFaceLooseSkinPreventionTreatmentWhat } from "../../../components/blog-ozempic-face-loose-skin-prevention-treatment-what.jsx";

export const metadata = {
  title: "Ozempic Face & Loose Skin: Prevention, Treatment & What to Expect (2026 Clinical Guide)",
  description: "Comprehensive clinical breakdown of ozempic face & loose skin: prevention, treatment & what to expect (2026 clinical guide).",
  openGraph: {
    title: "Ozempic Face & Loose Skin: Prevention, Treatment & What to Expect (2026 Clinical Guide)",
    description: "Comprehensive clinical breakdown of ozempic face & loose skin: prevention, treatment & what to expect (2026 clinical guide).",
    images: [
      {
        url: "https://telehealthfx.com/assets/tirzepatide-semaglutide-featured.png",
        width: 1200,
        height: 630,
        alt: "Ozempic Face & Loose Skin: Prevention, Treatment & What to Expect (2026 Clinical Guide)",
      },
    ],
  },
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": "https://telehealthfx.com/blog/ozempic-face-loose-skin-prevention-treatment-what/#article",
        "headline": "Ozempic Face & Loose Skin: Prevention, Treatment & What to Expect (2026 Clinical Guide)",
        "description": "Comprehensive clinical breakdown of ozempic face & loose skin: prevention, treatment & what to expect (2026 clinical guide).",
        "image": "https://telehealthfx.com/assets/tirzepatide-semaglutide-featured.png",
        "author": {
          "@type": "Person",
          "name": "Julian Mercer, M.S.",
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
