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
        "@type": "Article",
        "@id": "https://telehealthfx.com/blog/berberine-for-pcos-what-the-research-actually-says/#article",
        "headline": "Berberine for PCOS: What the Research Actually Says (2026 Clinical Guide)",
        "description": "Comprehensive clinical breakdown of berberine for pcos: what the research actually says (2026 clinical guide).",
        "image": "https://telehealthfx.com/assets/sermorelin-peptide-featured.png",
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
          "@id": "https://telehealthfx.com/blog/berberine-for-pcos-what-the-research-actually-says/"
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
