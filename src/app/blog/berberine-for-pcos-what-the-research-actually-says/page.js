import { BlogBerberineForPcosWhatTheResearchActuallySays } from "../../../components/blog-berberine-for-pcos-what-the-research-actually-says.jsx";

export const metadata = {
  title: "Berberine for PCOS: What the Research Actually Says (2026 Clinical Guide)",
  description: "Comprehensive clinical breakdown of berberine for pcos: what the research actually says (2026 clinical guide).",
  openGraph: {
    title: "Berberine for PCOS: What the Research Actually Says (2026 Clinical Guide)",
    description: "Comprehensive clinical breakdown of berberine for pcos: what the research actually says (2026 clinical guide).",
    images: [
      {
        url: "https://telehealthfx.com/assets/sermorelin-peptide-featured.png",
        width: 1200,
        height: 630,
        alt: "Berberine for PCOS: What the Research Actually Says (2026 Clinical Guide)",
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
        "@id": "https://telehealthfx.com/blog/berberine-for-pcos-what-the-research-actually-says/#article",
        "headline": "Berberine for PCOS: What the Research Actually Says (2026 Clinical Guide)",
        "description": "Comprehensive clinical breakdown of berberine for pcos: what the research actually says (2026 clinical guide).",
        "image": "https://telehealthfx.com/assets/sermorelin-peptide-featured.png",
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
          "@id": "https://telehealthfx.com/blog/berberine-for-pcos-what-the-research-actually-says/"
        }
      }
        ,{
        "@type": "VideoObject",
        "name": "TelehealthFX Medical Overview",
        "description": "Clinical overview and deep dive into metabolic health, GLP-1 medications, and weight loss science.",
        "thumbnailUrl": "https://img.youtube.com/vi/R4ZcU8uV-yA/maxresdefault.jpg",
        "uploadDate": "2026-05-01T08:00:00+08:00",
        "embedUrl": "https://www.youtube.com/embed/R4ZcU8uV-yA",
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
      <BlogBerberineForPcosWhatTheResearchActuallySays />
    </>
  );
}
