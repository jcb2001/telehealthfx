import { LocationMemphis } from '../../../components/location-memphis';

export const metadata = {
  title: "GLP-1 Weight Loss Prescriptions in Memphis | Telehealth FX",
  description: "Bypass the I-240 traffic and waitlists at Baptist Memorial. Access FDA-compliant compounded Semaglutide and Tirzepatide prescribed by TN-licensed physicians.",
  openGraph: {
    title: "GLP-1 Weight Loss Prescriptions in Memphis | Telehealth FX",
    description: "Access U.S.-licensed compounded Semaglutide, delivered directly to your home in the Bluff City.",
    url: 'https://telehealthfx.com/locations/memphis',
    siteName: 'Telehealth FX',
    type: 'website',
  }
};

export default function MemphisPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "MedicalClinic",
        "@id": "https://telehealthfx.com/locations/memphis#clinic",
        "name": "Telehealth FX - Memphis GLP-1 Prescribing",
        "url": "https://telehealthfx.com/locations/memphis",
        "logo": "https://telehealthfx.com/logo.png",
        "description": "Asynchronous medical weight loss clinic providing Tennessee-licensed physician evaluations and GLP-1 prescriptions for residents of Shelby County and the Mid-South.",
        "areaServed": {
          "@type": "City",
          "name": "Memphis",
          "containedInPlace": {
            "@type": "State",
            "name": "Tennessee"
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
            "name": "Do I need to visit a physical clinic in Memphis to get a prescription?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "No. Under Tennessee Board of Medical Examiners telehealth regulations, you can complete your entire medical intake asynchronously online. If approved by a Tennessee-licensed physician, your compounded Semaglutide or Tirzepatide is shipped directly to your home anywhere in Shelby County."
            }
          },
          {
            "@type": "Question",
            "name": "Is Telehealth FX legally authorized to operate in Tennessee?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. We partner exclusively with physicians licensed by the Tennessee Board of Medical Examiners, and our network utilizes FDA-registered 503A/503B pharmacies authorized to ship to all Tennessee addresses."
            }
          },
          {
            "@type": "Question",
            "name": "Are there waitlists like at Baptist Memorial or Methodist?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "No. By utilizing 503A compounding pharmacies, we completely bypass the retail shortages affecting local Kroger pharmacies and the multi-month waitlists typical of major hospital metabolic centers in the Bluff City."
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
      <LocationMemphis />
    </>
  );
}
