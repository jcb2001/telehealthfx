import { LocationPhoenix } from '../../../components/location-phoenix';

export const metadata = {
  title: "GLP-1 Weight Loss Prescriptions in Phoenix | Telehealth FX",
  description: "Bypass the Loop 101 traffic and waitlists at Banner Health. Access FDA-compliant compounded Semaglutide and Tirzepatide prescribed by Arizona-licensed physicians.",
  openGraph: {
    title: "GLP-1 Weight Loss Prescriptions in Phoenix | Telehealth FX",
    description: "Access U.S.-licensed compounded Semaglutide, delivered directly to your home in Phoenix.",
    url: 'https://telehealthfx.com/locations/phoenix',
    siteName: 'Telehealth FX',
    type: 'website',
  }
};

export default function PhoenixPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "MedicalClinic",
        "@id": "https://telehealthfx.com/locations/phoenix#clinic",
        "name": "Telehealth FX - Phoenix GLP-1 Prescribing",
        "url": "https://telehealthfx.com/locations/phoenix",
        "logo": "https://telehealthfx.com/logo.png",
        "description": "Asynchronous medical weight loss clinic providing Arizona-licensed physician evaluations and GLP-1 prescriptions for residents of Maricopa County and the Greater Phoenix area.",
        "areaServed": {
          "@type": "City",
          "name": "Phoenix",
          "containedInPlace": {
            "@type": "State",
            "name": "Arizona"
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
            "name": "Do I need to visit a physical clinic in Phoenix to get a prescription?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "No. Under Arizona Medical Board telehealth regulations, you can complete your entire medical intake asynchronously online. If approved by an Arizona-licensed physician, your compounded Semaglutide or Tirzepatide is shipped directly to your home in Phoenix."
            }
          },
          {
            "@type": "Question",
            "name": "Is Telehealth FX legally authorized to operate in Arizona?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. We partner exclusively with physicians licensed by the Arizona Medical Board, and our network utilizes FDA-registered 503A/503B pharmacies authorized to ship to all Arizona addresses."
            }
          },
          {
            "@type": "Question",
            "name": "Are there waitlists like at Banner Health or Mayo Clinic?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "No. By utilizing 503A compounding pharmacies, we completely bypass the retail shortages affecting local Fry's pharmacies and the 6-month waitlists typical of major hospital metabolic centers in the Valley."
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
      <LocationPhoenix />
    </>
  );
}
