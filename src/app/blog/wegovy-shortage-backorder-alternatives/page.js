import { BlogWegovyShortageAlternatives } from "../../../components/blog-wegovy-shortage-backorder-alternatives.jsx";

export const metadata = {
  robots: { index: true, follow: true },
  title: "Wegovy in Stock Online: GLP-1 Shortage & Backorder Solutions",
  description: "Wondering where to find Wegovy in stock online? Avoid retail pharmacy waitlists with 503A compounded semaglutide shipped directly to your door without delay.",
  alternates: {
    canonical: 'https://telehealthfx.com/blog/wegovy-shortage-backorder-alternatives/',
  },
  openGraph: {
    title: "Wegovy in Stock Online: GLP-1 Shortage & Backorder Solutions",
    description: "Wondering where to find Wegovy in stock online? Avoid retail pharmacy waitlists with 503A compounded semaglutide shipped directly to your door without delay.",
    url: 'https://telehealthfx.com/blog/wegovy-shortage-backorder-alternatives/',
    siteName: 'Telehealth FX',
    images: [
      {
        url: "https://telehealthfx.com/assets/wegovy_stock_alternatives.jpg",
        width: 1200,
        height: 675,
        alt: "Wegovy In Stock Online GLP-1 Shortage Solutions",
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
        "@id": "https://telehealthfx.com/blog/wegovy-shortage-backorder-alternatives/#webpage",
        "url": "https://telehealthfx.com/blog/wegovy-shortage-backorder-alternatives/",
        "headline": "Wegovy in Stock Online: GLP-1 Shortage & Backorder Solutions",
        "description": "Wondering where to find Wegovy in stock online? Avoid retail pharmacy waitlists with 503A compounded semaglutide shipped directly to your door without delay.",
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
        "@id": "https://telehealthfx.com/blog/wegovy-shortage-backorder-alternatives/#faq",
        "mainEntity": [
        {
                "@type": "Question",
                "name": "Why are Wegovy starter doses constantly out of stock?",
                "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Manufacturer production constraints on patented auto-injector pen mechanisms create widespread national retail shortages, particularly for 0.25mg and 0.5mg starting doses."
                }
        },
        {
                "@type": "Question",
                "name": "How does 503A compounding bypass pen manufacturing shortages?",
                "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "503A compounding pharmacies prepare liquid semaglutide in multidose glass vials using sterile USP <797> protocols, removing reliance on proprietary plastic pen devices."
                }
        },
        {
                "@type": "Question",
                "name": "Will compounded semaglutide work the same as brand Wegovy?",
                "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Yes. Compounded semaglutide uses the active pharmaceutical ingredient (API) semaglutide base, providing equivalent receptor activation and gastric emptying deceleration."
                }
        },
        {
                "@type": "Question",
                "name": "How fast does Telehealth FX ship medication?",
                "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Once prescribed by our licensed physician, your medication is prepared and shipped in cold-chain insulated packaging with tracking, arriving within 2 business days."
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
      <BlogWegovyShortageAlternatives />
    </>
  );
}
