import { BlogBerberineForPcosWhatTheResearchActuallySays } from "../../../components/blog-berberine-for-pcos-what-the-research-actually-says.jsx";

export const metadata = {
  title: "Berberine for PCOS: What the Clinical Research Actually Says",
  description: "A clinical review of how Berberine addresses the root cause of PCOS: severe insulin resistance. Discover how AMPK activation compares to Metformin.",
  openGraph: {
    title: "Berberine for PCOS: What the Clinical Research Actually Says",
    description: "A clinical review of how Berberine addresses the root cause of PCOS: severe insulin resistance. Discover how AMPK activation compares to Metformin.",
    images: [
      {
        url: "https://telehealthfx.com/assets/berberine_pcos_featured.png",
        width: 1024,
        height: 1024,
        alt: "Berberine for PCOS Research",
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
        "headline": "Berberine for PCOS: What the Clinical Research Actually Says",
        "description": "A clinical review of how Berberine addresses the root cause of PCOS: severe insulin resistance. Discover how AMPK activation compares to Metformin.",
        "image": "https://telehealthfx.com/assets/berberine_pcos_featured.png",
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
