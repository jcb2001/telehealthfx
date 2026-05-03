import { LocationDetroit } from '../../../components/location-detroit';

export const metadata = {
  title: "GLP-1 Weight Loss Prescriptions in Detroit | Telehealth FX",
  description: "Bypass the I-75 traffic and waitlists at Henry Ford Health. Access FDA-compliant compounded Semaglutide and Tirzepatide prescribed by MI-licensed physicians.",
  openGraph: {
    title: "GLP-1 Weight Loss Prescriptions in Detroit | Telehealth FX",
    description: "Access U.S.-licensed compounded Semaglutide, delivered directly to your home in Metro Detroit.",
    url: 'https://telehealthfx.com/locations/detroit',
    siteName: 'Telehealth FX',
    type: 'website',
  }
};

export default function DetroitPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "MedicalClinic",
        "@id": "https://telehealthfx.com/locations/detroit#clinic",
        "name": "Telehealth FX - Detroit GLP-1 Prescribing",
        "url": "https://telehealthfx.com/locations/detroit",
        "logo": "https://telehealthfx.com/logo.png",
        "description": "Asynchronous medical weight loss clinic providing Michigan-licensed physician evaluations and GLP-1 prescriptions for residents of Wayne, Oakland, and Macomb counties.",
        "areaServed": {
          "@type": "City",
          "name": "Detroit",
          "containedInPlace": {
            "@type": "State",
            "name": "Michigan"
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
            "name": "Do I need to visit a physical clinic in Detroit to get a prescription?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "No. Under Michigan Board of Medicine telehealth regulations, you can complete your entire medical intake asynchronously online. If approved by a Michigan-licensed physician, your compounded Semaglutide or Tirzepatide is shipped directly to your home anywhere in Metro Detroit."
            }
          },
          {
            "@type": "Question",
            "name": "Is Telehealth FX legally authorized to operate in Michigan?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. We partner exclusively with physicians licensed by the Michigan Board of Medicine, and our network utilizes FDA-registered 503A/503B pharmacies authorized to ship to all Michigan addresses."
            }
          },
          {
            "@type": "Question",
            "name": "Are there waitlists like at Henry Ford Health or Corewell?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "No. By utilizing 503A compounding pharmacies, we completely bypass the retail shortages affecting local Meijer pharmacies and the multi-month waitlists typical of major hospital metabolic centers in the Motor City."
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
      <LocationDetroit />
    </>
  );
}
