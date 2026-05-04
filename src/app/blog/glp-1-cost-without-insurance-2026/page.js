import { BlogGLP1CostWithoutInsurance } from "../../../components/blog-glp-1-cost-without-insurance-2026.jsx";

export const metadata = {
  title: "How Much Does GLP-1 Cost Without Insurance in 2026? The Real Price Breakdown",
  description: "Compare GLP-1 medication costs without insurance in 2026. Ozempic, Wegovy, Mounjaro, Zepbound, and compounded alternatives—real prices, hidden fees exposed, and savings strategies.",
  openGraph: {
    title: "How Much Does GLP-1 Cost Without Insurance in 2026? The Real Price Breakdown",
    description: "Compare GLP-1 medication costs without insurance in 2026. Ozempic, Wegovy, Mounjaro, Zepbound, and compounded alternatives—real prices, hidden fees exposed, and savings strategies.",
    images: [
      {
        url: "https://telehealthfx.com/assets/glp1-cost-without-insurance-featured.png",
        width: 1200,
        height: 630,
        alt: "GLP-1 Cost Without Insurance 2026",
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
        "@id": "https://telehealthfx.com/blog/glp-1-cost-without-insurance-2026/#article",
        "headline": "How Much Does GLP-1 Cost Without Insurance in 2026? The Real Price Breakdown",
        "description": "Compare GLP-1 medication costs without insurance in 2026. Ozempic, Wegovy, Mounjaro, Zepbound, and compounded alternatives—real prices, hidden fees exposed, and savings strategies.",
        "image": "https://telehealthfx.com/assets/glp1-cost-without-insurance-featured.png",
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
          "@id": "https://telehealthfx.com/blog/glp-1-cost-without-insurance-2026/"
        }
      },
      {
        "@type": "FAQPage",
        "@id": "https://telehealthfx.com/blog/glp-1-cost-without-insurance-2026/#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What is the cheapest GLP-1 medication without insurance?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Compounded semaglutide through a reputable telehealth provider is typically the most affordable option, ranging from $150–$300/month with all-inclusive pricing. Among branded options, Eli Lilly's Zepbound Self-Pay Journey program offers single-dose vials starting around $299/month."
            }
          },
          {
            "@type": "Question",
            "name": "Can I use GoodRx for compounded semaglutide?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "No. GoodRx coupons only apply to FDA-approved, commercially manufactured medications dispensed at retail pharmacies. Compounded medications are custom-prepared by compounding pharmacies and are not eligible for GoodRx discounts."
            }
          },
          {
            "@type": "Question",
            "name": "How much does GLP-1 therapy cost per year?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "At branded list prices, annual costs range from $11,600 (Ozempic) to $16,200 (Wegovy). Through compounded telehealth providers with transparent pricing, annual costs typically range from $1,800–$4,800."
            }
          },
          {
            "@type": "Question",
            "name": "Does insurance ever cover GLP-1 for weight loss?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Some commercial insurance plans cover Wegovy and Zepbound for weight management, but coverage is inconsistent and often requires prior authorization, step therapy, and a documented BMI of 30+ or 27+ with comorbidities. Medicare does not currently cover GLP-1 medications for weight loss."
            }
          }
        ]
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <BlogGLP1CostWithoutInsurance />
    </>
  );
}
