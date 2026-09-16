import { BlogBuySemaglutideOnline } from "../../../components/blog-buy-semaglutide-online-prescription.jsx";

export const metadata = {
  robots: { index: true, follow: true },
  title: "Buy Semaglutide Online: Doctor Prescription & Delivery",
  description: "Buy semaglutide online with physician consultation included. Get compounded semaglutide delivered to your home from $99 promo, then $190/mo with zero hidden fees.",
  alternates: {
    canonical: 'https://telehealthfx.com/blog/buy-semaglutide-online-prescription/',
  },
  openGraph: {
    title: "Buy Semaglutide Online: Doctor Prescription & Delivery",
    description: "Buy semaglutide online with physician consultation included. Get compounded semaglutide delivered to your home from $99 promo, then $190/mo with zero hidden fees.",
    url: 'https://telehealthfx.com/blog/buy-semaglutide-online-prescription/',
    siteName: 'Telehealth FX',
    images: [
      {
        url: "https://telehealthfx.com/assets/buy_semaglutide_online.jpg",
        width: 1200,
        height: 675,
        alt: "Buy Semaglutide Online Doctor Prescription and Delivery",
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
        "@id": "https://telehealthfx.com/blog/buy-semaglutide-online-prescription/#webpage",
        "url": "https://telehealthfx.com/blog/buy-semaglutide-online-prescription/",
        "headline": "Buy Semaglutide Online: Doctor Prescription & Delivery",
        "description": "Buy semaglutide online with physician consultation included. Get compounded semaglutide delivered to your home from $99 promo, then $190/mo with zero hidden fees.",
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
        "@id": "https://telehealthfx.com/blog/buy-semaglutide-online-prescription/#faq",
        "mainEntity": [
        {
                "@type": "Question",
                "name": "Can I buy semaglutide online without seeing a doctor in person?",
                "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Yes. In most US states, board-certified physicians can legally evaluate your medical history and prescribe semaglutide via secure asynchronous digital telemedicine."
                }
        },
        {
                "@type": "Question",
                "name": "How do I know the online semaglutide is genuine?",
                "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Telehealth FX dispenses exclusively through state-licensed 503A compounding pharmacies that provide Certificates of Analysis verifying sterile compounding under USP <797>."
                }
        },
        {
                "@type": "Question",
                "name": "How long does it take from order to delivery?",
                "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Physician evaluation typically takes 24 hours. Once approved, the pharmacy prepares and ships your medication via 2-day express cold-chain delivery."
                }
        },
        {
                "@type": "Question",
                "name": "What comes inside the starter delivery box?",
                "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Your box includes your semaglutide multidose vial, sterile 31G insulin syringes, alcohol pads, detailed titration instructions, and chilled refrigerant gel packs."
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
      <BlogBuySemaglutideOnline />
    </>
  );
}
