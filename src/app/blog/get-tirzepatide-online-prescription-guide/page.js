import { BlogGetTirzepatideOnline } from "../../../components/blog-get-tirzepatide-online.jsx";

export const metadata = {
  robots: { index: true, follow: true },
  alternates: {
    canonical: 'https://telehealthfx.com/blog/get-tirzepatide-online-prescription-guide/',
  },
  title: "Get Tirzepatide Online: Prescription & Dosing Guide (2026)",
  description: "How to get a tirzepatide prescription online safely. Access 503A compounding pharmacy delivery from $99 first month, $0 consult fees, and no memberships.",
  openGraph: {
    title: "Get Tirzepatide Online: Prescription & Dosing Guide (2026)",
    description: "How to get a tirzepatide prescription online safely. Access 503A compounding pharmacy delivery from $99 first month, $0 consult fees, and no memberships.",
    url: "https://telehealthfx.com/blog/get-tirzepatide-online-prescription-guide/",
    siteName: "Telehealth FX",
    images: [
      {
        url: "https://telehealthfx.com/assets/get-tirzepatide-online-featured.jpg",
        width: 1200,
        height: 675,
        alt: "Get Tirzepatide Online Prescription and Dosing Guide",
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
        "@id": "https://telehealthfx.com/blog/get-tirzepatide-online-prescription-guide/#webpage",
        "url": "https://telehealthfx.com/blog/get-tirzepatide-online-prescription-guide/",
        "name": "Get Tirzepatide Online: Prescription & Dosing Guide (2026)",
        "description": "How to get a tirzepatide prescription online safely. Access 503A compounding pharmacy delivery from $99 first month, $0 consult fees, and no memberships.",
        "isPartOf": {
          "@id": "https://telehealthfx.com/#website"
        },
        "inLanguage": "en-US",
        "lastReviewed": "2026-09-20",
        "reviewedBy": {
          "@type": "Organization",
          "name": "Telehealth FX Clinical Review Team"
        }
      },
      {
        "@type": "FAQPage",
        "@id": "https://telehealthfx.com/blog/get-tirzepatide-online-prescription-guide/#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Can you legally get Tirzepatide online without visiting a doctor in person?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. Telehealth FX connects patients directly with US board-certified physicians via asynchronous medical intake. Once approved, the prescription is dispensed and shipped directly by a licensed 503A compounding pharmacy."
            }
          },
          {
            "@type": "Question",
            "name": "How much does Tirzepatide cost online through Telehealth FX?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Telehealth FX offers an introductory promotional rate of $99 for your first month of compounded Tirzepatide. Subsequent months are locked at a flat $258/month across all doses with zero monthly membership fees and free cold shipping."
            }
          },
          {
            "@type": "Question",
            "name": "Can I transfer my existing Mounjaro or Zepbound prescription?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. Upload a photo of your existing prescription box or label during online intake to match your active dose without restarting titration at 2.5mg."
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
      <BlogGetTirzepatideOnline />
    </>
  );
}
