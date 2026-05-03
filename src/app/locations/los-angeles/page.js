import { LocationLA } from '../../../components/location-la';

export const metadata = {
  title: "GLP-1 Weight Loss Prescriptions in Los Angeles | Telehealth FX",
  description: "Bypass the 405 traffic and waitlists at Cedars-Sinai. Access FDA-compliant compounded Semaglutide and Tirzepatide prescribed by California-licensed physicians and shipped overnight anywhere in Los Angeles.",
  openGraph: {
    title: "GLP-1 Weight Loss Prescriptions in Los Angeles | Telehealth FX",
    description: "Access U.S.-licensed compounded Semaglutide, delivered directly to your home in LA.",
    url: 'https://telehealthfx.com/locations/los-angeles',
    siteName: 'Telehealth FX',
    type: 'website',
  }
};

export default function LosAngelesPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "MedicalClinic",
        "@id": "https://telehealthfx.com/locations/los-angeles#clinic",
        "name": "Telehealth FX - Los Angeles GLP-1 Prescribing",
        "url": "https://telehealthfx.com/locations/los-angeles",
        "logo": "https://telehealthfx.com/logo.png",
        "description": "Asynchronous medical weight loss clinic providing California-licensed physician evaluations and GLP-1 prescriptions for residents of Los Angeles County.",
        "areaServed": {
          "@type": "City",
          "name": "Los Angeles",
          "containedInPlace": {
            "@type": "State",
            "name": "California"
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
            "name": "Do I need to visit a physical clinic in Los Angeles to get a prescription?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "No. Under California telehealth regulations, you can complete your entire medical intake asynchronously online. If approved by a California-licensed physician, your compounded Semaglutide or Tirzepatide is shipped directly to your home in LA."
            }
          },
          {
            "@type": "Question",
            "name": "Is Telehealth FX legally authorized to operate in California?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. We partner exclusively with physicians licensed by the Medical Board of California, and our network utilizes FDA-registered 503A/503B pharmacies authorized to ship to all Los Angeles addresses."
            }
          },
          {
            "@type": "Question",
            "name": "Are there waitlists like at UCLA Health or Cedars-Sinai?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "No. By utilizing 503A compounding pharmacies, we completely bypass the retail shortages affecting local LA pharmacies and the 6-month waitlists typical of major hospital metabolic centers."
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
      <LocationLA />
    </>
  );
}
