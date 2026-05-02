import { BlogNextGenGlp1DrugsSurvodutideOrforglipronAmyc } from "../../../components/blog-next-gen-glp-1-drugs-survodutide-orforglipron-amyc.jsx";

export const metadata = {
  title: "Next-Gen GLP-1 Drugs: Survodutide, Orforglipron & Amycretin (2026 Pipeline) (2026 Clinical Guide)",
  description: "Comprehensive clinical breakdown of next-gen glp-1 drugs: survodutide, orforglipron & amycretin (2026 pipeline) (2026 clinical guide).",
  openGraph: {
    title: "Next-Gen GLP-1 Drugs: Survodutide, Orforglipron & Amycretin (2026 Pipeline) (2026 Clinical Guide)",
    description: "Comprehensive clinical breakdown of next-gen glp-1 drugs: survodutide, orforglipron & amycretin (2026 pipeline) (2026 clinical guide).",
    images: [
      {
        url: "https://telehealthfx.com/assets/glp1-ultimate-guide.png",
        width: 1200,
        height: 630,
        alt: "Next-Gen GLP-1 Drugs: Survodutide, Orforglipron & Amycretin (2026 Pipeline) (2026 Clinical Guide)",
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
        "@id": "https://telehealthfx.com/blog/next-gen-glp-1-drugs-survodutide-orforglipron-amyc/#article",
        "headline": "Next-Gen GLP-1 Drugs: Survodutide, Orforglipron & Amycretin (2026 Pipeline) (2026 Clinical Guide)",
        "description": "Comprehensive clinical breakdown of next-gen glp-1 drugs: survodutide, orforglipron & amycretin (2026 pipeline) (2026 clinical guide).",
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
          "@id": "https://telehealthfx.com/blog/next-gen-glp-1-drugs-survodutide-orforglipron-amyc/"
        }
      }
        ,{
        "@type": "VideoObject",
        "name": "TelehealthFX Medical Overview",
        "description": "Clinical overview and deep dive into metabolic health, GLP-1 medications, and weight loss science.",
        "thumbnailUrl": "https://img.youtube.com/vi/qtkJzol-YXc/maxresdefault.jpg",
        "uploadDate": "2026-05-01T08:00:00+08:00",
        "embedUrl": "https://www.youtube.com/embed/qtkJzol-YXc",
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
      <BlogNextGenGlp1DrugsSurvodutideOrforglipronAmyc />
    </>
  );
}
