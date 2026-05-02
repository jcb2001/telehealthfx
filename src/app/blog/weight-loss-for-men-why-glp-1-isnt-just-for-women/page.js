import { BlogWeightLossForMenWhyGlp1IsntJustForWomen } from "../../../components/blog-weight-loss-for-men-why-glp-1-isnt-just-for-women.jsx";

export const metadata = {
  title: "Weight Loss for Men: Why GLP-1 Isn't Just for Women (2026 Clinical Guide)",
  description: "Comprehensive clinical breakdown of weight loss for men: why glp-1 isn't just for women (2026 clinical guide).",
  openGraph: {
    title: "Weight Loss for Men: Why GLP-1 Isn't Just for Women (2026 Clinical Guide)",
    description: "Comprehensive clinical breakdown of weight loss for men: why glp-1 isn't just for women (2026 clinical guide).",
    images: [
      {
        url: "https://telehealthfx.com/assets/ozempic-featured.png",
        width: 1200,
        height: 630,
        alt: "Weight Loss for Men: Why GLP-1 Isn't Just for Women (2026 Clinical Guide)",
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
        "@id": "https://telehealthfx.com/blog/weight-loss-for-men-why-glp-1-isnt-just-for-women/#article",
        "headline": "Weight Loss for Men: Why GLP-1 Isn't Just for Women (2026 Clinical Guide)",
        "description": "Comprehensive clinical breakdown of weight loss for men: why glp-1 isn't just for women (2026 clinical guide).",
        "image": "https://telehealthfx.com/assets/ozempic-featured.png",
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
          "@id": "https://telehealthfx.com/blog/weight-loss-for-men-why-glp-1-isnt-just-for-women/"
        }
      }
        ,{
        "@type": "VideoObject",
        "name": "TelehealthFX Medical Overview",
        "description": "Clinical overview and deep dive into metabolic health, GLP-1 medications, and weight loss science.",
        "thumbnailUrl": "https://img.youtube.com/vi/zBRQRzkmuXM/maxresdefault.jpg",
        "uploadDate": "2026-05-01T08:00:00+08:00",
        "embedUrl": "https://www.youtube.com/embed/zBRQRzkmuXM",
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
      <BlogWeightLossForMenWhyGlp1IsntJustForWomen />
    </>
  );
}
