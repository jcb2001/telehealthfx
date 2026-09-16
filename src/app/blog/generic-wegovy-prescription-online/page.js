import { BlogGenericWegovyPrescription } from "../../../components/blog-generic-wegovy-prescription-online.jsx";

export const metadata = {
  robots: { index: true, follow: true },
  title: "Generic Wegovy Prescription: Online Compounded Alternatives",
  description: "Compare generic Wegovy prescription alternatives online. Discover affordable compounded semaglutide options from $99/month with fast digital medical approval.",
  alternates: {
    canonical: 'https://telehealthfx.com/blog/generic-wegovy-prescription-online/',
  },
  openGraph: {
    title: "Generic Wegovy Prescription: Online Compounded Alternatives",
    description: "Compare generic Wegovy prescription alternatives online. Discover affordable compounded semaglutide options from $99/month with fast digital medical approval.",
    url: 'https://telehealthfx.com/blog/generic-wegovy-prescription-online/',
    siteName: 'Telehealth FX',
    images: [
      {
        url: "https://telehealthfx.com/assets/generic_wegovy_rx.jpg",
        width: 1200,
        height: 675,
        alt: "Generic Wegovy Prescription Online Compounded Alternatives",
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
        "@id": "https://telehealthfx.com/blog/generic-wegovy-prescription-online/#webpage",
        "url": "https://telehealthfx.com/blog/generic-wegovy-prescription-online/",
        "headline": "Generic Wegovy Prescription: Online Compounded Alternatives",
        "description": "Compare generic Wegovy prescription alternatives online. Discover affordable compounded semaglutide options from $99/month with fast digital medical approval.",
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
        "@id": "https://telehealthfx.com/blog/generic-wegovy-prescription-online/#faq",
        "mainEntity": [
        {
                "@type": "Question",
                "name": "How does generic Wegovy compare to brand Wegovy?",
                "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Generic compounded Wegovy contains the active peptide semaglutide in bioequivalent base form, compounded pursuant to Section 503A of the FD&C Act by licensed compounding pharmacies."
                }
        },
        {
                "@type": "Question",
                "name": "Why is brand Wegovy frequently denied by insurance?",
                "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Over 70% of commercial health insurance plans exclude anti-obesity medications or mandate onerous multi-step trial requirements, prompting patients to choose transparent cash-pay compounding."
                }
        },
        {
                "@type": "Question",
                "name": "Do I need a prior authorization for compounded semaglutide?",
                "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "No. Telehealth FX operates on a direct cash-pay model that requires zero insurance involvement, zero prior authorizations, and zero pharmacy counter delays."
                }
        },
        {
                "@type": "Question",
                "name": "What injection supplies are included with my prescription?",
                "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Every delivery includes medical-grade 31-gauge sterile insulin syringes, alcohol prep wipes, a sharps disposal guide, and temperature-controlled insulated packaging."
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
      <BlogGenericWegovyPrescription />
    </>
  );
}
