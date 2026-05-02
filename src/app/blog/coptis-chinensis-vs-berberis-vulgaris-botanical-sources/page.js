import { BlogCoptisChinensis } from "../../../components/blog-coptis-chinensis.jsx";

export const metadata = {
  title: "Coptis Chinensis & Berberis Vulgaris: The Botanical Sources of Nature's Ozempic",
  description: "A clinical breakdown of Coptis Chinensis and Berberis Vulgaris. We analyze the isoquinoline alkaloids and the synergy of full-spectrum extracts.",
  openGraph: {
    title: "Coptis Chinensis & Berberis Vulgaris: The Botanical Sources of Nature's Ozempic",
    description: "A clinical breakdown of Coptis Chinensis and Berberis Vulgaris. We analyze the isoquinoline alkaloids and the synergy of full-spectrum extracts.",
    images: [
      {
        url: "https://telehealthfx.com/assets/coptis-chinensis-featured.png",
        width: 1024,
        height: 1024,
        alt: "Coptis Chinensis & Berberis Vulgaris Root Extract",
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
        "@id": "https://telehealthfx.com/blog/coptis-chinensis-vs-berberis-vulgaris-botanical-sources/#article",
        "headline": "Coptis Chinensis & Berberis Vulgaris: The Botanical Sources of Nature's Ozempic",
        "description": "A clinical breakdown of Coptis Chinensis and Berberis Vulgaris. We analyze the isoquinoline alkaloids and the synergy of full-spectrum extracts.",
        "image": "https://telehealthfx.com/assets/coptis-chinensis-featured.png",
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
          "@id": "https://telehealthfx.com/blog/coptis-chinensis-vs-berberis-vulgaris-botanical-sources/"
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
      <BlogCoptisChinensis />
    </>
  );
}
