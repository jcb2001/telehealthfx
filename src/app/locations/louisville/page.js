import { LocationLouisville } from '../../../components/location-louisville';

export const metadata = {
  title: "GLP-1 Weight Loss Prescriptions in Louisville | Telehealth FX",
  description: "Bypass the Watterson Expressway traffic and waitlists at Norton Healthcare. Access FDA-compliant compounded Semaglutide and Tirzepatide prescribed by KY-licensed physicians.",
  openGraph: {
    title: "GLP-1 Weight Loss Prescriptions in Louisville | Telehealth FX",
    description: "Access U.S.-licensed compounded Semaglutide, delivered directly to your home in Derby City.",
    url: 'https://telehealthfx.com/locations/louisville',
    siteName: 'Telehealth FX',
    type: 'website',
  }
};

export default function LouisvillePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "MedicalClinic",
        "@id": "https://telehealthfx.com/locations/louisville#clinic",
        "name": "Telehealth FX - Louisville GLP-1 Prescribing",
        "url": "https://telehealthfx.com/locations/louisville",
        "logo": "https://telehealthfx.com/logo.png",
        "description": "Asynchronous medical weight loss clinic providing Kentucky-licensed physician evaluations and GLP-1 prescriptions for residents of Jefferson County and the Kentuckiana region.",
        "areaServed": {
          "@type": "City",
          "name": "Louisville",
          "containedInPlace": {
            "@type": "State",
            "name": "Kentucky"
          }
        },
        "availableService": [
          {
            "@type": "MedicalTest",
            "name": "Asynchronous Metabolic Health Intake"
          },
          {
            "@type": "MedicalTherapy",
            "name": "GLP-1 Agonist Prescription"
          }
        ],
        "medicalSpecialty": "Endocrine",
        "isAcceptingNewPatients": true
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Do I need to visit a physical clinic in Louisville to get a prescription?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "No. Under Kentucky Board of Medical Licensure telehealth regulations, you can complete your entire medical intake asynchronously online. If approved by a Kentucky-licensed physician, your compounded Semaglutide or Tirzepatide is shipped directly to your home anywhere in Jefferson County."
            }
          },
          {
            "@type": "Question",
            "name": "Is Telehealth FX legally authorized to operate in Kentucky?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. We partner exclusively with physicians licensed by the Kentucky Board of Medical Licensure, and our network utilizes FDA-registered 503A/503B pharmacies authorized to ship to all Kentucky addresses."
            }
          },
          {
            "@type": "Question",
            "name": "Are there waitlists like at Norton Healthcare or UofL Health?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "No. By utilizing 503A compounding pharmacies, we completely bypass the retail shortages affecting local Kroger pharmacies and the multi-month waitlists typical of major hospital metabolic centers in Derby City."
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
      <LocationLouisville />
    </>
  );
}
