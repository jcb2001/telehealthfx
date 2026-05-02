import { BlogTirzepatideVsSemaglutideWhichGlp1IsRightFo } from "../../../components/blog-tirzepatide-vs-semaglutide-which-glp-1-is-right-fo.jsx";

export const metadata = {
  title: "Tirzepatide vs. Semaglutide: Which GLP-1 Is Right for You? (2026 Clinical Guide)",
  description: "Comprehensive clinical breakdown of tirzepatide vs. semaglutide: which glp-1 is right for you? (2026 clinical guide).",
  openGraph: {
    title: "Tirzepatide vs. Semaglutide: Which GLP-1 Is Right for You? (2026 Clinical Guide)",
    description: "Comprehensive clinical breakdown of tirzepatide vs. semaglutide: which glp-1 is right for you? (2026 clinical guide).",
    images: [
      {
        url: "https://telehealthfx.com/assets/wegovy-label-featured.png",
        width: 1200,
        height: 630,
        alt: "Tirzepatide vs. Semaglutide: Which GLP-1 Is Right for You? (2026 Clinical Guide)",
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
        "@id": "https://telehealthfx.com/blog/tirzepatide-vs-semaglutide-which-glp-1-is-right-fo/#article",
        "headline": "Tirzepatide vs. Semaglutide: Which GLP-1 Is Right for You? (2026 Clinical Guide)",
        "description": "Comprehensive clinical breakdown of tirzepatide vs. semaglutide: which glp-1 is right for you? (2026 clinical guide).",
        "image": "https://telehealthfx.com/assets/wegovy-label-featured.png",
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
          "@id": "https://telehealthfx.com/blog/tirzepatide-vs-semaglutide-which-glp-1-is-right-fo/"
        }
      }
        ,{
        "@type": "VideoObject",
        "name": "TelehealthFX Medical Overview",
        "description": "Clinical overview and deep dive into metabolic health, GLP-1 medications, and weight loss science.",
        "thumbnailUrl": "https://img.youtube.com/vi/5Rq8KJKRzrk/maxresdefault.jpg",
        "uploadDate": "2026-05-01T08:00:00+08:00",
        "embedUrl": "https://www.youtube.com/embed/5Rq8KJKRzrk",
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
      <BlogTirzepatideVsSemaglutideWhichGlp1IsRightFo />
    </>
  );
}
