import { BlogIsCompoundedSemaglutideSafeWhatYouNeedToKn } from "../../../components/blog-is-compounded-semaglutide-safe-what-you-need-to-kn.jsx";

export const metadata = {
  title: "Is Compounded Semaglutide Safe? What You Need to Know (2026 Clinical Guide)",
  description: "Comprehensive clinical breakdown of is compounded semaglutide safe? what you need to know (2026 clinical guide).",
  openGraph: {
    title: "Is Compounded Semaglutide Safe? What You Need to Know (2026 Clinical Guide)",
    description: "Comprehensive clinical breakdown of is compounded semaglutide safe? what you need to know (2026 clinical guide).",
    images: [
      {
        url: "https://telehealthfx.com/assets/nad-therapy-featured.png",
        width: 1200,
        height: 630,
        alt: "Is Compounded Semaglutide Safe? What You Need to Know (2026 Clinical Guide)",
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
        "@id": "https://telehealthfx.com/blog/is-compounded-semaglutide-safe-what-you-need-to-kn/#article",
        "headline": "Is Compounded Semaglutide Safe? What You Need to Know (2026 Clinical Guide)",
        "description": "Comprehensive clinical breakdown of is compounded semaglutide safe? what you need to know (2026 clinical guide).",
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
          "@id": "https://telehealthfx.com/blog/is-compounded-semaglutide-safe-what-you-need-to-kn/"
        }
      }
        ,{
        "@type": "VideoObject",
        "name": "TelehealthFX Medical Overview",
        "description": "Clinical overview and deep dive into metabolic health, GLP-1 medications, and weight loss science.",
        "thumbnailUrl": "https://img.youtube.com/vi/qoRWs9FxAG0/maxresdefault.jpg",
        "uploadDate": "2026-05-01T08:00:00+08:00",
        "embedUrl": "https://www.youtube.com/embed/qoRWs9FxAG0",
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
      <BlogIsCompoundedSemaglutideSafeWhatYouNeedToKn />
    </>
  );
}
