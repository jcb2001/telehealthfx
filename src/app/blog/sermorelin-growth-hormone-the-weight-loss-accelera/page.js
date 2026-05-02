import { BlogSermorelinGrowthHormoneTheWeightLossAccelera } from "../../../components/blog-sermorelin-growth-hormone-the-weight-loss-accelera.jsx";

export const metadata = {
  title: "Sermorelin & Growth Hormone: The Weight Loss Accelerator",
  description: "Discover how Sermorelin safely restores natural growth hormone production to preserve lean muscle mass during rapid GLP-1 weight loss.",
  openGraph: {
    title: "Sermorelin & Growth Hormone: The Weight Loss Accelerator",
    description: "Discover how Sermorelin safely restores natural growth hormone production to preserve lean muscle mass during rapid GLP-1 weight loss.",
    images: [
      {
        url: "https://telehealthfx.com/assets/sermorelin_peptide_featured.png",
        width: 1024,
        height: 1024,
        alt: "Sermorelin Peptide Therapy",
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
        "@id": "https://telehealthfx.com/blog/sermorelin-growth-hormone-the-weight-loss-accelera/#article",
        "headline": "Sermorelin & Growth Hormone: The Weight Loss Accelerator",
        "description": "Discover how Sermorelin safely restores natural growth hormone production to preserve lean muscle mass during rapid GLP-1 weight loss.",
        "image": "https://telehealthfx.com/assets/sermorelin_peptide_featured.png",
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
          "@id": "https://telehealthfx.com/blog/sermorelin-growth-hormone-the-weight-loss-accelera/"
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
      <BlogSermorelinGrowthHormoneTheWeightLossAccelera />
    </>
  );
}
