import { BlogSemaglutideWithoutInsurance } from "../../../components/blog-semaglutide-without-insurance-cash-price.jsx";

export const metadata = {
  robots: { index: true, follow: true },
  title: "Semaglutide Without Insurance: Complete Cash Price Guide",
  description: "Get semaglutide without insurance from $99/mo. Review cash prices, online doctor access, and bypass denied insurance prior authorizations with zero hidden fees.",
  alternates: {
    canonical: 'https://telehealthfx.com/blog/semaglutide-without-insurance-cash-price/',
  },
  openGraph: {
    title: "Semaglutide Without Insurance: Complete Cash Price Guide",
    description: "Get semaglutide without insurance from $99/mo. Review cash prices, online doctor access, and bypass denied insurance prior authorizations with zero hidden fees.",
    url: 'https://telehealthfx.com/blog/semaglutide-without-insurance-cash-price/',
    siteName: 'Telehealth FX',
    images: [
      {
        url: "https://telehealthfx.com/assets/semaglutide_cash_price.jpg",
        width: 1200,
        height: 675,
        alt: "Semaglutide Without Insurance Complete Cash Price Guide",
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
        "@id": "https://telehealthfx.com/blog/semaglutide-without-insurance-cash-price/#webpage",
        "url": "https://telehealthfx.com/blog/semaglutide-without-insurance-cash-price/",
        "headline": "Semaglutide Without Insurance: Complete Cash Price Guide",
        "description": "Get semaglutide without insurance from $99/mo. Review cash prices, online doctor access, and bypass denied insurance prior authorizations with zero hidden fees.",
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
        "@id": "https://telehealthfx.com/blog/semaglutide-without-insurance-cash-price/#faq",
        "mainEntity": [
        {
                "@type": "Question",
                "name": "What is the typical cost for a month of GLP-1 without insurance?",
                "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Brand retail cash prices range between $1,000 and $1,349 per month. Through Telehealth FX, direct cash-pay compounded semaglutide starts at $99 for your first month promo (then $190–$199/mo) with Affirm financing from $25/mo."
                }
        },
        {
                "@type": "Question",
                "name": "Can I use HSA or FSA funds to pay for compounded semaglutide?",
                "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Yes. Physician-prescribed GLP-1 weight loss medications are eligible medical expenses under most HSA and FSA plans with a Letter of Medical Necessity."
                }
        },
        {
                "@type": "Question",
                "name": "Why do other telehealth companies charge monthly memberships?",
                "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Platforms like Ro and Hims often bill separate platform dues ($79-$99/mo) on top of medication. Telehealth FX bundles everything into one flat price."
                }
        },
        {
                "@type": "Question",
                "name": "Does Telehealth FX increase the price as my dose goes up?",
                "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "No. Our transparent cash pricing has zero membership fees and zero dose escalation penalties whether you are on starter 0.25mg or maximum 2.4mg maintenance."
                }
        },
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
      <BlogSemaglutideWithoutInsurance />
    </>
  );
}
