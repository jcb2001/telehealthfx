import { BlogBerberineExtraction } from "../../../components/blog-berberine-extraction.jsx";

export const metadata = {
  title: "The Berberine Extraction Process: Why 90% of Supplements Fail the Purity Test",
  description: "A clinical breakdown of the Berberine extraction process. We analyze solvent residues, heavy metal contamination, and the limits of botanical purity.",
  openGraph: {
    title: "The Berberine Extraction Process: Why 90% of Supplements Fail the Purity Test",
    description: "A clinical breakdown of the Berberine extraction process. We analyze solvent residues, heavy metal contamination, and the limits of botanical purity.",
    images: [
      {
        url: "https://telehealthfx.com/assets/berberine-extraction-featured.png",
        width: 1024,
        height: 1024,
        alt: "The Berberine Extraction Process",
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
        "@id": "https://telehealthfx.com/blog/berberine-extraction-process-purity-test/#article",
        "headline": "The Berberine Extraction Process: Why 90% of Supplements Fail the Purity Test",
        "description": "A clinical breakdown of the Berberine extraction process. We analyze solvent residues, heavy metal contamination, and the limits of botanical purity.",
        "image": "https://telehealthfx.com/assets/berberine-extraction-featured.png",
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
          "@id": "https://telehealthfx.com/blog/berberine-extraction-process-purity-test/"
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
      <BlogBerberineExtraction />
    </>
  );
}
