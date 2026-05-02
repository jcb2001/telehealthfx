import { BlogTirzepatideVsSemaglutide } from "../../../components/blog-tirzepatide-vs-semaglutide.jsx";

export const metadata = {
  title: "Tirzepatide vs. Semaglutide: The Dual GIP/GLP-1 Agonist Mechanism",
  description: "A clinical breakdown of Tirzepatide's dual-agonist mechanism. We analyze GIP receptor activation, fat cell remodeling, and the SURMOUNT trial data.",
  openGraph: {
    title: "Tirzepatide vs. Semaglutide: The Dual GIP/GLP-1 Agonist Mechanism",
    description: "A clinical breakdown of Tirzepatide's dual-agonist mechanism. We analyze GIP receptor activation, fat cell remodeling, and the SURMOUNT trial data.",
    images: [
      {
        url: "https://telehealthfx.com/assets/tirzepatide-mechanism-featured.png",
        width: 1024,
        height: 1024,
        alt: "Tirzepatide vs. Semaglutide Dual Agonist Mechanism",
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
        "@id": "https://telehealthfx.com/blog/tirzepatide-vs-semaglutide-dual-agonist-mechanism/#article",
        "headline": "Tirzepatide vs. Semaglutide: The Dual GIP/GLP-1 Agonist Mechanism",
        "description": "A clinical breakdown of Tirzepatide's dual-agonist mechanism. We analyze GIP receptor activation, fat cell remodeling, and the SURMOUNT trial data.",
        "image": "https://telehealthfx.com/assets/tirzepatide-mechanism-featured.png",
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
          "@id": "https://telehealthfx.com/blog/tirzepatide-vs-semaglutide-dual-agonist-mechanism/"
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
      <BlogTirzepatideVsSemaglutide />
    </>
  );
}
