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
        "@type": "MedicalWebPage",
        "@id": "https://telehealthfx.com/blog/ozempic-face-loose-skin-prevention-treatment-what/#article",
        "headline": "Ozempic Face & Loose Skin: Prevention, Treatment & What to Expect (2026 Clinical Guide)",
        "description": "Comprehensive clinical breakdown of ozempic face & loose skin: prevention, treatment & what to expect (2026 clinical guide).",
        "image": "https://telehealthfx.com/assets/tirzepatide-semaglutide-featured.png",
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
        ,{
        "@type": "VideoObject",
        "name": "TelehealthFX Medical Overview",
        "description": "Clinical overview and deep dive into metabolic health, GLP-1 medications, and weight loss science.",
        "thumbnailUrl": "https://img.youtube.com/vi/LpEqo5mS0hs/maxresdefault.jpg",
        "uploadDate": "2026-05-01T08:00:00+08:00",
        "embedUrl": "https://www.youtube.com/embed/LpEqo5mS0hs",
        "publisher": {
          "@type": "Organization",
          "name": "TelehealthFX",
          "logo": {
            "@type": "ImageObject",
            "url": "https://telehealthfx.com/assets/logo.png"
          }
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
