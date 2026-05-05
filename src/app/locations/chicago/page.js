import { LocationChicago } from '../../../components/location-chicago';

export const metadata = {
  alternates: {
    canonical: 'https://telehealthfx.com/locations/chicago/',
  },
  title: "GLP-1 Weight Loss Prescriptions in Chicago | Telehealth FX",
  description: "Bypass the Kennedy Expressway traffic and waitlists at Northwestern Medicine. Access FDA-compliant compounded Semaglutide and Tirzepatide prescribed by Illinois-licensed physicians.",
  openGraph: {
    title: "GLP-1 Weight Loss Prescriptions in Chicago | Telehealth FX",
    description: "Access U.S.-licensed compounded Semaglutide, delivered directly to your home in Chicago.",
    url: 'https://telehealthfx.com/locations/chicago',
    siteName: 'Telehealth FX',
    type: 'website',
  }
};

export default function ChicagoPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "MedicalClinic",
        "@id": "https://telehealthfx.com/locations/chicago#clinic",
        "name": "Telehealth FX - Chicago GLP-1 Prescribing",
        "url": "https://telehealthfx.com/locations/chicago",
        "logo": "https://telehealthfx.com/logo.png",
        "description": "Asynchronous medical weight loss clinic providing Illinois-licensed physician evaluations and GLP-1 prescriptions for residents of Cook County and greater Chicago.",
        "areaServed": {
          "@type": "City",
          "name": "Chicago",
          "containedInPlace": {
            "@type": "State",
            "name": "Illinois"
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
            "name": "Do I need to visit a physical clinic in Chicago to get a prescription?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "No. Under Illinois telehealth regulations, you can complete your entire medical intake asynchronously online. If approved by an Illinois-licensed physician, your compounded Semaglutide or Tirzepatide is shipped directly to your home in Chicago."
            }
          },
          {
            "@type": "Question",
            "name": "Is Telehealth FX legally authorized to operate in Illinois?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. We partner exclusively with physicians licensed by the Illinois Department of Financial and Professional Regulation (IDFPR), and our network utilizes FDA-registered 503A/503B pharmacies authorized to ship to all Chicago addresses."
            }
          },
          {
            "@type": "Question",
            "name": "Are there waitlists like at Northwestern Memorial Hospital?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "No. By utilizing 503A compounding pharmacies, we completely bypass the retail shortages affecting local Walgreens pharmacies and the 6-month waitlists typical of major hospital metabolic centers in Chicago."
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
      <LocationChicago />
    </>
  );
}
