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
        "@type": "Article",
        "@id": "https://telehealthfx.com/blog/weight-loss-for-men-why-glp-1-isnt-just-for-women/#article",
        "headline": "Weight Loss for Men: Why GLP-1 Isn't Just for Women (2026 Clinical Guide)",
        "description": "Comprehensive clinical breakdown of weight loss for men: why glp-1 isn't just for women (2026 clinical guide).",
        "image": "https://telehealthfx.com/assets/ozempic-featured.png",
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
          "@id": "https://telehealthfx.com/blog/weight-loss-for-men-why-glp-1-isnt-just-for-women/"
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
