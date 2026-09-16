import { BlogTirzepatideCashPrice } from "../../../components/blog-tirzepatide-cash-price-telehealth-no-insurance.jsx";

export const metadata = {
  robots: { index: true, follow: true },
  title: "Tirzepatide Without Insurance: Affordable Cash-Pay Rates",
  description: "Find affordable tirzepatide without insurance. Access compounded tirzepatide from $99/mo promo, including physician consults, supplies, and free cold delivery.",
  alternates: {
    canonical: 'https://telehealthfx.com/blog/tirzepatide-cash-price-telehealth-no-insurance/',
  },
  openGraph: {
    title: "Tirzepatide Without Insurance: Affordable Cash-Pay Rates",
    description: "Find affordable tirzepatide without insurance. Access compounded tirzepatide from $99/mo promo, including physician consults, supplies, and free cold delivery.",
    url: 'https://telehealthfx.com/blog/tirzepatide-cash-price-telehealth-no-insurance/',
    siteName: 'Telehealth FX',
    images: [
      {
        url: "https://telehealthfx.com/assets/tirzepatide_no_insurance.jpg",
        width: 1200,
        height: 675,
        alt: "Tirzepatide Without Insurance Telehealth Cash Price Guide",
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
        "@id": "https://telehealthfx.com/blog/tirzepatide-cash-price-telehealth-no-insurance/#webpage",
        "url": "https://telehealthfx.com/blog/tirzepatide-cash-price-telehealth-no-insurance/",
        "headline": "Tirzepatide Without Insurance: Affordable Cash-Pay Rates",
        "description": "Find affordable tirzepatide without insurance. Access compounded tirzepatide from $99/mo promo, including physician consults, supplies, and free cold delivery.",
        "datePublished": "2026-09-16",
        "dateModified": "2026-09-16",
        "author": {
          "@type": "Person",
          "name": "Julian Mercer, M.S.",
          "jobTitle": "Lead Bio-Systems Analyst",
          "url": "https://telehealthfx.com/about/"
        },
        "speakable": {
          "@type": "SpeakableSpecification",
          "cssSelector": [".direct-answer-snippet", "h1"]
        },
        "publisher": {
          "@type": "Organization",
          "name": "Telehealth FX",
          "url": "https://telehealthfx.com"
        }
      },
      {
        "@type": "FAQPage",
        "@id": "https://telehealthfx.com/blog/tirzepatide-cash-price-telehealth-no-insurance/#faq",
        "mainEntity": [
        {
                "@type": "Question",
                "name": "Why is tirzepatide more expensive than semaglutide?",
                "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Tirzepatide is a more complex 39-amino-acid synthetic peptide that co-activates two separate incretin receptors (GIP and GLP-1), offering higher clinical weight loss rates."
                }
        },
        {
                "@type": "Question",
                "name": "Does Telehealth FX require blood work before prescribing?",
                "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Our board-certified clinicians review your comprehensive medical history asynchronously and order lab panels only when clinically indicated, avoiding unnecessary out-of-pocket costs."
                }
        },
        {
                "@type": "Question",
                "name": "How does compounded tirzepatide arrive?",
                "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "It arrives via express 2-day courier in insulated temperature-controlled packaging maintaining 36\u00b0F to 46\u00b0F, containing your medication vial and administration supplies."
                }
        },
        {
                "@type": "Question",
                "name": "Can men benefit from combining tirzepatide with TRT?",
                "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Yes. Combining GLP-1 fat loss with our $79/mo physician-supervised TRT helps preserve metabolically active lean muscle mass and energy levels."
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
      <BlogTirzepatideCashPrice />
    </>
  );
}
