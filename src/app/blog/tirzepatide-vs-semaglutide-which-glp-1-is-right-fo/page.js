import { BlogTirzepatideVsSemaglutideWhichGlp1IsRightFo } from "../../../components/blog-tirzepatide-vs-semaglutide-which-glp-1-is-right-fo.jsx";

export const metadata = {
  title: "Tirzepatide vs. Semaglutide: Which GLP-1 is Right for You?",
  description: "A definitive clinical breakdown of the SURMOUNT-5 head-to-head trial. Compare side effects, cost-to-efficacy ratios, and the patient decision matrix.",
  openGraph: {
    title: "Tirzepatide vs. Semaglutide: Which GLP-1 is Right for You?",
    description: "A definitive clinical breakdown of the SURMOUNT-5 head-to-head trial. Compare side effects, cost-to-efficacy ratios, and the patient decision matrix.",
    images: [
      {
        url: "https://telehealthfx.com/assets/tirzepatide_vs_semaglutide_featured.png",
        width: 1024,
        height: 1024,
        alt: "Tirzepatide vs Semaglutide Comparison",
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
        "headline": "Tirzepatide vs. Semaglutide: Which GLP-1 is Right for You?",
        "description": "A definitive clinical breakdown of the SURMOUNT-5 head-to-head trial. Compare side effects, cost-to-efficacy ratios, and the patient decision matrix.",
        "image": "https://telehealthfx.com/assets/tirzepatide_vs_semaglutide_featured.png",
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
