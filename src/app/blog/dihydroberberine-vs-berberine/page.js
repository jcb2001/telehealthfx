import { BlogDihydroberberineVsBerberine } from "../../../components/blog-dihydroberberine-vs-berberine.jsx";

export const metadata = {
  title: "Dihydroberberine (DHB) vs. Standard Berberine: The 5x Bioavailability Myth Explained",
  description: "A clinical breakdown of Dihydroberberine (DHB) vs standard Berberine. We analyze the pharmacokinetics and the 5x bioavailability marketing claims.",
  openGraph: {
    title: "Dihydroberberine (DHB) vs. Standard Berberine: The 5x Bioavailability Myth Explained",
    description: "A clinical breakdown of Dihydroberberine (DHB) vs standard Berberine. We analyze the pharmacokinetics and the 5x bioavailability marketing claims.",
    images: [
      {
        url: "https://telehealthfx.com/assets/dhb-bioavailability-featured.png",
        width: 1024,
        height: 1024,
        alt: "Dihydroberberine (DHB) vs. Standard Berberine",
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
        "@id": "https://telehealthfx.com/blog/dihydroberberine-vs-berberine/#article",
        "headline": "Dihydroberberine (DHB) vs. Standard Berberine: The 5x Bioavailability Myth Explained",
        "description": "A clinical breakdown of Dihydroberberine (DHB) vs standard Berberine. We analyze the pharmacokinetics and the 5x bioavailability marketing claims.",
        "image": "https://telehealthfx.com/assets/dhb-bioavailability-featured.png",
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
          "@id": "https://telehealthfx.com/blog/dihydroberberine-vs-berberine/"
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
      <BlogDihydroberberineVsBerberine />
    </>
  );
}