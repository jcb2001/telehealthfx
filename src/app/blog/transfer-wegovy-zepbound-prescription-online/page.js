import { BlogTransferWegovyOnline } from "../../../components/blog-transfer-wegovy-zepbound-prescription-online.jsx";

export const metadata = {
  robots: { index: true, follow: true },
  title: "Transfer Wegovy Prescription Online: Telehealth GLP-1 Care",
  description: "Transfer your Wegovy or Zepbound prescription online to Telehealth FX. Enjoy reliable 503A mail order delivery, flat monthly rates, and no pharmacy backorders.",
  alternates: {
    canonical: 'https://telehealthfx.com/blog/transfer-wegovy-zepbound-prescription-online/',
  },
  openGraph: {
    title: "Transfer Wegovy Prescription Online: Telehealth GLP-1 Care",
    description: "Transfer your Wegovy or Zepbound prescription online to Telehealth FX. Enjoy reliable 503A mail order delivery, flat monthly rates, and no pharmacy backorders.",
    url: 'https://telehealthfx.com/blog/transfer-wegovy-zepbound-prescription-online/',
    siteName: 'Telehealth FX',
    images: [
      {
        url: "https://telehealthfx.com/assets/transfer_wegovy_online.jpg",
        width: 1200,
        height: 675,
        alt: "Transfer Wegovy Prescription Online: Telehealth GLP-1 Care",
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
        "@id": "https://telehealthfx.com/blog/transfer-wegovy-zepbound-prescription-online/#webpage",
        "url": "https://telehealthfx.com/blog/transfer-wegovy-zepbound-prescription-online/",
        "headline": "Transfer Wegovy Prescription Online: Telehealth GLP-1 Care",
        "description": "Transfer your Wegovy or Zepbound prescription online to Telehealth FX. Enjoy reliable 503A mail order delivery, flat monthly rates, and no pharmacy backorders.",
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
        "@id": "https://telehealthfx.com/blog/transfer-wegovy-zepbound-prescription-online/#faq",
        "mainEntity": [
        {
          "@type": "Question",
          "name": "Can I transfer my existing Wegovy or Zepbound prescription to Telehealth FX?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. You can upload photos of your current prescription label or previous medical records. A licensed telehealth physician reviews your dosing history to transition you directly into compounded semaglutide or tirzepatide without resetting your titration."
          }
        },
        {
          "@type": "Question",
          "name": "Will I have to start over at the lowest starter dose when transferring?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. If you are already established on maintenance doses such as 1.0mg, 1.7mg, or 2.4mg of semaglutide (or 5mg to 15mg of tirzepatide), our doctors can match your current dose to ensure continuous therapeutic appetite suppression."
          }
        },
        {
          "@type": "Question",
          "name": "How does compounded semaglutide compare to brand Wegovy in cost?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "While brand Wegovy costs over $1,349 per month without insurance, Telehealth FX offers 503A compounded semaglutide starting at an introductory $99 first month promo, then $190 to $199 monthly with zero subscription fees, free doctor care, and free shipping."
          }
        },
        {
          "@type": "Question",
          "name": "How quickly will my medication arrive after prescription transfer?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Physician evaluation is completed within 24 hours. Once approved, your order is compounded and shipped via 2-day temperature-monitored cold-chain courier directly to your door."
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
      <BlogTransferWegovyOnline />
    </>
  );
}
