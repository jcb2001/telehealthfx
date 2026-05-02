import { BlogWeightLossForMenWhyGlp1IsntJustForWomen } from "../../../components/blog-weight-loss-for-men-why-glp-1-isnt-just-for-women.jsx";

export const metadata = {
  title: "Weight Loss for Men: Why GLP-1 Isn't Just for Women",
  description: "A clinical guide explaining how visceral fat destroys male testosterone, and why GLP-1 is a targeted intervention for men's cardiovascular health.",
  openGraph: {
    title: "Weight Loss for Men: Why GLP-1 Isn't Just for Women",
    description: "A clinical guide explaining how visceral fat destroys male testosterone, and why GLP-1 is a targeted intervention for men's cardiovascular health.",
    images: [
      {
        url: "https://telehealthfx.com/assets/mens_health_featured.png",
        width: 1024,
        height: 1024,
        alt: "GLP-1 Weight Loss For Men",
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
        "@id": "https://telehealthfx.com/blog/weight-loss-for-men-why-glp-1-isnt-just-for-women/#article",
        "headline": "Weight Loss for Men: Why GLP-1 Isn't Just for Women",
        "description": "A clinical guide explaining how visceral fat destroys male testosterone, and why GLP-1 is a targeted intervention for men's cardiovascular health.",
        "image": "https://telehealthfx.com/assets/mens_health_featured.png",
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
          "@id": "https://telehealthfx.com/blog/weight-loss-for-men-why-glp-1-isnt-just-for-women/"
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
      <BlogWeightLossForMenWhyGlp1IsntJustForWomen />
    </>
  );
}
