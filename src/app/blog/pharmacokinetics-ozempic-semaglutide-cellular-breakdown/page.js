import { BlogOzempicPharmacokinetics } from "../../../components/blog-ozempic-pharmacokinetics.jsx";

export const metadata = {
  title: "The Pharmacokinetics of Ozempic (Semaglutide): A Cellular Breakdown",
  description: "A clinical breakdown of Semaglutide pharmacokinetics. We analyze the DPP-4 enzyme, aminoisobutyric acid substitution, and the albumin transport mechanism.",
  openGraph: {
    title: "The Pharmacokinetics of Ozempic (Semaglutide): A Cellular Breakdown",
    description: "A clinical breakdown of Semaglutide pharmacokinetics. We analyze the DPP-4 enzyme, aminoisobutyric acid substitution, and the albumin transport mechanism.",
    images: [
      {
        url: "https://telehealthfx.com/assets/ozempic-pharmacokinetics-featured.png",
        width: 1024,
        height: 1024,
        alt: "The Pharmacokinetics of Semaglutide",
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
        "@id": "https://telehealthfx.com/blog/pharmacokinetics-ozempic-semaglutide-cellular-breakdown/#article",
        "headline": "The Pharmacokinetics of Ozempic (Semaglutide): A Cellular Breakdown",
        "description": "A clinical breakdown of Semaglutide pharmacokinetics. We analyze the DPP-4 enzyme, aminoisobutyric acid substitution, and the albumin transport mechanism.",
        "image": "https://telehealthfx.com/assets/ozempic-pharmacokinetics-featured.png",
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
          "@id": "https://telehealthfx.com/blog/pharmacokinetics-ozempic-semaglutide-cellular-breakdown/"
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
      <BlogOzempicPharmacokinetics />
    </>
  );
}
