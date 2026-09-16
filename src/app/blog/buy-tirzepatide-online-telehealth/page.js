import { BlogBuyTirzepatideOnline } from "../../../components/blog-buy-tirzepatide-online-telehealth.jsx";

export const metadata = {
  robots: { index: true, follow: true },
  title: "Buy Tirzepatide Online: Telehealth Prescription Delivery",
  description: "Buy tirzepatide online through licensed telehealth doctors. Access dual GIP/GLP-1 therapy from $99 promo, then $214/mo with cold delivery and zero waitlists.",
  alternates: {
    canonical: 'https://telehealthfx.com/blog/buy-tirzepatide-online-telehealth/',
  },
  openGraph: {
    title: "Buy Tirzepatide Online: Telehealth Prescription Delivery",
    description: "Buy tirzepatide online through licensed telehealth doctors. Access dual GIP/GLP-1 therapy from $99 promo, then $214/mo with cold delivery and zero waitlists.",
    url: 'https://telehealthfx.com/blog/buy-tirzepatide-online-telehealth/',
    siteName: 'Telehealth FX',
    images: [
      {
        url: "https://telehealthfx.com/assets/buy_tirzepatide_telehealth.jpg",
        width: 1200,
        height: 675,
        alt: "Buy Tirzepatide Online Telehealth Prescription Delivery",
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
        "@id": "https://telehealthfx.com/blog/buy-tirzepatide-online-telehealth/#webpage",
        "url": "https://telehealthfx.com/blog/buy-tirzepatide-online-telehealth/",
        "headline": "Buy Tirzepatide Online: Telehealth Prescription Delivery",
        "description": "Buy tirzepatide online through licensed telehealth doctors. Access dual GIP/GLP-1 therapy from $99 promo, then $214/mo with cold delivery and zero waitlists.",
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
        "@id": "https://telehealthfx.com/blog/buy-tirzepatide-online-telehealth/#faq",
        "mainEntity": [
        {
                "@type": "Question",
                "name": "Is buying tirzepatide online legal in the US?",
                "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Yes. Telehealth FX connects patients with licensed physicians who prescribe compounded tirzepatide through state-licensed 503A compounding pharmacies pursuant to 21 U.S.C. \u00a7 353a."
                }
        },
        {
                "@type": "Question",
                "name": "What makes tirzepatide more potent than semaglutide?",
                "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Tirzepatide's dual agonism stimulates both glucose-dependent insulinotropic polypeptide (GIP) and GLP-1 receptors, producing superior metabolic regulation and up to 20.9% weight loss."
                }
        },
        {
                "@type": "Question",
                "name": "Are there hidden subscription fees for tirzepatide?",
                "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "None. Telehealth FX offers $99 for your first month promo (then $214–$299/mo) covering your clinical review, medication, supplies, and shipping with zero recurring club fees."
                }
        },
        {
                "@type": "Question",
                "name": "How is compounded tirzepatide injected?",
                "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "It is self-administered once weekly into subcutaneous abdominal or thigh tissue using an ultra-fine 31-gauge insulin syringe that is virtually painless."
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
      <BlogBuyTirzepatideOnline />
    </>
  );
}
