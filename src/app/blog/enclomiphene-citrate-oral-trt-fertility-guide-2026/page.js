import { BlogEnclomipheneOralTrt } from "../../../components/blog-enclomiphene-oral-trt.jsx";

export const metadata = {
  robots: { index: true, follow: true },
  title: "Enclomiphene Citrate: Oral TRT, Fertility & Dosage Guide (2026)",
  description: "Comprehensive clinical guide to enclomiphene citrate for oral testosterone therapy. Compare enclomiphene vs TRT injections, fertility preservation, and dosage protocols.",
  alternates: {
    canonical: 'https://telehealthfx.com/blog/enclomiphene-citrate-oral-trt-fertility-guide-2026/',
  },
  openGraph: {
    title: "Enclomiphene Citrate: Oral TRT, Fertility & Dosage Guide (2026)",
    description: "Comprehensive clinical guide to enclomiphene citrate for oral testosterone therapy. Compare enclomiphene vs TRT injections, fertility preservation, and dosage protocols.",
    url: 'https://telehealthfx.com/blog/enclomiphene-citrate-oral-trt-fertility-guide-2026/',
    siteName: 'Telehealth FX',
    images: [
      {
        url: "https://telehealthfx.com/assets/enclomiphene-oral-trt-featured.jpg",
        width: 1200,
        height: 675,
        alt: "Enclomiphene Citrate Oral TRT and Fertility Clinical Guide",
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
        "@id": "https://telehealthfx.com/blog/enclomiphene-citrate-oral-trt-fertility-guide-2026/#webpage",
        "url": "https://telehealthfx.com/blog/enclomiphene-citrate-oral-trt-fertility-guide-2026/",
        "headline": "Enclomiphene Citrate: Oral TRT, Fertility & Dosage Guide (2026)",
        "description": "Comprehensive clinical guide to enclomiphene citrate for oral testosterone therapy. Compare enclomiphene vs TRT injections, fertility preservation, and dosage protocols.",
        "datePublished": "2026-10-11",
        "dateModified": "2026-10-11",
        "image": "https://telehealthfx.com/assets/enclomiphene-oral-trt-featured.jpg",
        "author": {
          "@type": "Person",
          "name": "Julian Mercer, M.S.",
          "jobTitle": "Lead Bio-Systems Analyst",
          "url": "https://telehealthfx.com/about/"
        },
        "reviewedBy": {
          "@type": "Person",
          "name": "Marcus Vance, M.D.",
          "jobTitle": "Board-Certified Medical Director"
        },
        "publisher": {
          "@type": "Organization",
          "name": "Telehealth FX",
          "url": "https://telehealthfx.com"
        },
        "about": [
          {
            "@type": "Drug",
            "name": "Enclomiphene",
            "sameAs": "https://www.wikidata.org/wiki/Q25100085"
          },
          {
            "@type": "Drug",
            "name": "Testosterone",
            "sameAs": "https://www.wikidata.org/wiki/Q131872"
          }
        ]
      },
      {
        "@type": "FAQPage",
        "@id": "https://telehealthfx.com/blog/enclomiphene-citrate-oral-trt-fertility-guide-2026/#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Does enclomiphene citrate cause testicular shrinkage like TRT injections?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "No. Enclomiphene stimulates the pituitary gland to produce LH and FSH, which keeps the testes active and producing endogenous testosterone. Testicular volume and spermatogenesis are preserved or enhanced."
            }
          },
          {
            "@type": "Question",
            "name": "Can you take enclomiphene citrate if you plan on having children?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. Enclomiphene is widely considered the preferred medical therapy for young men with low testosterone who wish to maintain fertility, as it avoids the azoospermia caused by exogenous testosterone injections."
            }
          },
          {
            "@type": "Question",
            "name": "How much does enclomiphene cost through telehealth providers?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Compounded enclomiphene citrate programs start at $89 to $119 per month through specialized telehealth clinics, including home biomarker testing, physician oversight, and prescription fulfillment."
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
      <BlogEnclomipheneOralTrt />
    </>
  );
}
