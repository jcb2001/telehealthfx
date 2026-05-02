import { BlogOzempicBabiesGlp1AndFertilityWhatWomenNeed } from "../../../components/blog-ozempic-babies-glp-1-and-fertility-what-women-need.jsx";

export const metadata = {
  title: "Ozempic Babies: GLP-1 and Fertility — What Women Need to Know (2026 Clinical Guide)",
  description: "Comprehensive clinical breakdown of ozempic babies: glp-1 and fertility — what women need to know (2026 clinical guide).",
  openGraph: {
    title: "Ozempic Babies: GLP-1 and Fertility — What Women Need to Know (2026 Clinical Guide)",
    description: "Comprehensive clinical breakdown of ozempic babies: glp-1 and fertility — what women need to know (2026 clinical guide).",
    images: [
      {
        url: "https://telehealthfx.com/assets/wegovy-label-featured.png",
        width: 1200,
        height: 630,
        alt: "Ozempic Babies: GLP-1 and Fertility — What Women Need to Know (2026 Clinical Guide)",
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
        "@id": "https://telehealthfx.com/blog/ozempic-babies-glp-1-and-fertility-what-women-need/#article",
        "headline": "Ozempic Babies: GLP-1 and Fertility — What Women Need to Know (2026 Clinical Guide)",
        "description": "Comprehensive clinical breakdown of ozempic babies: glp-1 and fertility — what women need to know (2026 clinical guide).",
        "image": "https://telehealthfx.com/assets/wegovy-label-featured.png",
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
          "@id": "https://telehealthfx.com/blog/ozempic-babies-glp-1-and-fertility-what-women-need/"
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
      <BlogOzempicBabiesGlp1AndFertilityWhatWomenNeed />
    </>
  );
}
