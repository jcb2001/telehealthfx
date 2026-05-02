import { BlogGlp1AndYourHeartTheSelectTrialCardiovascul } from "../../../components/blog-glp-1-and-your-heart-the-select-trial-cardiovascul.jsx";

export const metadata = {
  title: "GLP-1 and Your Heart: The SELECT Trial & Cardiovascular Protection (2026 Clinical Guide)",
  description: "Comprehensive clinical breakdown of glp-1 and your heart: the select trial & cardiovascular protection (2026 clinical guide).",
  openGraph: {
    title: "GLP-1 and Your Heart: The SELECT Trial & Cardiovascular Protection (2026 Clinical Guide)",
    description: "Comprehensive clinical breakdown of glp-1 and your heart: the select trial & cardiovascular protection (2026 clinical guide).",
    images: [
      {
        url: "https://telehealthfx.com/assets/nad-therapy-featured.png",
        width: 1200,
        height: 630,
        alt: "GLP-1 and Your Heart: The SELECT Trial & Cardiovascular Protection (2026 Clinical Guide)",
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
        "@id": "https://telehealthfx.com/blog/glp-1-and-your-heart-the-select-trial-cardiovascul/#article",
        "headline": "GLP-1 and Your Heart: The SELECT Trial & Cardiovascular Protection (2026 Clinical Guide)",
        "description": "Comprehensive clinical breakdown of glp-1 and your heart: the select trial & cardiovascular protection (2026 clinical guide).",
        "image": "https://telehealthfx.com/assets/nad-therapy-featured.png",
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
          "@id": "https://telehealthfx.com/blog/glp-1-and-your-heart-the-select-trial-cardiovascul/"
        }
      }
        ,{
        "@type": "VideoObject",
        "name": "TelehealthFX Medical Overview",
        "description": "Clinical overview and deep dive into metabolic health, GLP-1 medications, and weight loss science.",
        "thumbnailUrl": "https://img.youtube.com/vi/ZuTiZEFKZ5k/maxresdefault.jpg",
        "uploadDate": "2026-05-01T08:00:00+08:00",
        "embedUrl": "https://www.youtube.com/embed/ZuTiZEFKZ5k",
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
      <BlogGlp1AndYourHeartTheSelectTrialCardiovascul />
    </>
  );
}
