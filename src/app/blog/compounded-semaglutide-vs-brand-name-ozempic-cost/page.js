import { BlogCompoundedSemaglutideVsOzempic } from "../../../components/blog-compounded-semaglutide-vs-ozempic.jsx";

export const metadata = {
  robots: { index: true, follow: true },
  alternates: {
    canonical: 'https://telehealthfx.com/blog/compounded-semaglutide-vs-brand-name-ozempic-cost/',
  },
  title: "Compounded Semaglutide vs Ozempic: 2026 Cost & Safety",
  description: "Compare compounded semaglutide to brand Ozempic. Discover how flat $146/month 503A pharmacy pricing saves $1,200/month compared to retail list prices.",
  openGraph: {
    title: "Compounded Semaglutide vs Ozempic: 2026 Cost & Safety",
    description: "Compare compounded semaglutide to brand Ozempic. Discover how flat $146/month 503A pharmacy pricing saves $1,200/month compared to retail list prices.",
    url: "https://telehealthfx.com/blog/compounded-semaglutide-vs-brand-name-ozempic-cost/",
    siteName: "Telehealth FX",
    images: [
      {
        url: "https://telehealthfx.com/assets/compounded-semaglutide-vs-ozempic-featured.jpg",
        width: 1200,
        height: 675,
        alt: "Compounded Semaglutide vs Brand Ozempic Cost and Safety Comparison",
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
        "name": metadata.title,
        "description": metadata.description,
        "url": "https://telehealthfx.com/blog/compounded-semaglutide-vs-brand-name-ozempic-cost/",
        "author": {
          "@type": "Person",
          "name": "Julian Mercer, M.S.",
          "jobTitle": "Lead Bio-Systems Analyst"
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
            "name": "Semaglutide",
            "sameAs": "https://www.wikidata.org/wiki/Q423082"
          }
        ]
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Is compounded semaglutide the same as Ozempic?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Compounded semaglutide uses the exact same active pharmaceutical molecule (semaglutide base) as brand Ozempic, prepared by state-licensed 503A compounding pharmacies pursuant to a patient-specific prescription."
            }
          },
          {
            "@type": "Question",
            "name": "Why is compounded semaglutide so much cheaper than Ozempic?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Brand-name Ozempic list prices ($950–$1,349/month) reflect commercial drug development costs and patented auto-injector devices. Compounding pharmacies dispense the active molecule in standard multi-dose sterile vials, saving patients over 80%."
            }
          },
          {
            "@type": "Question",
            "name": "Do I need insurance to get compounded semaglutide?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "No. Telehealth FX operates on a direct cash-pay model ($146/month flat with a $99 first-month promotion), completely bypassing insurance prior authorizations and formulary denials."
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
      <BlogCompoundedSemaglutideVsOzempic />
    </>
  );
}
