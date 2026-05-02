import { BlogGlp1SideEffectsHowToManageNauseaFatigueMo } from "../../../components/blog-glp-1-side-effects-how-to-manage-nausea-fatigue-mo.jsx";

export const metadata = {
  title: "GLP-1 Side Effects: How to Manage Nausea, Fatigue & More (2026 Clinical Guide)",
  description: "Comprehensive clinical breakdown of glp-1 side effects: how to manage nausea, fatigue & more (2026 clinical guide).",
  openGraph: {
    title: "GLP-1 Side Effects: How to Manage Nausea, Fatigue & More (2026 Clinical Guide)",
    description: "Comprehensive clinical breakdown of glp-1 side effects: how to manage nausea, fatigue & more (2026 clinical guide).",
    images: [
      {
        url: "https://telehealthfx.com/assets/glp1-ultimate-guide.png",
        width: 1200,
        height: 630,
        alt: "GLP-1 Side Effects: How to Manage Nausea, Fatigue & More (2026 Clinical Guide)",
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
        "@id": "https://telehealthfx.com/blog/glp-1-side-effects-how-to-manage-nausea-fatigue-mo/#article",
        "headline": "GLP-1 Side Effects: How to Manage Nausea, Fatigue & More (2026 Clinical Guide)",
        "description": "Comprehensive clinical breakdown of glp-1 side effects: how to manage nausea, fatigue & more (2026 clinical guide).",
        "image": "https://telehealthfx.com/assets/glp1-ultimate-guide.png",
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
          "@id": "https://telehealthfx.com/blog/glp-1-side-effects-how-to-manage-nausea-fatigue-mo/"
        }
      }
        ,{
        "@type": "VideoObject",
        "name": "TelehealthFX Medical Overview",
        "description": "Clinical overview and deep dive into metabolic health, GLP-1 medications, and weight loss science.",
        "thumbnailUrl": "https://img.youtube.com/vi/H22n6UGPhf0/maxresdefault.jpg",
        "uploadDate": "2026-05-01T08:00:00+08:00",
        "embedUrl": "https://www.youtube.com/embed/H22n6UGPhf0",
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
      <BlogGlp1SideEffectsHowToManageNauseaFatigueMo />
    </>
  );
}
