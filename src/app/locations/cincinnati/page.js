import { LocationCincinnati } from '../../../components/location-cincinnati';

export const metadata = {
  title: "GLP-1 Weight Loss Prescriptions in Cincinnati | Telehealth FX",
  description: "Access FDA-compliant compounded Semaglutide and Tirzepatide prescribed by Ohio-licensed physicians.",
  openGraph: {
    title: "GLP-1 Weight Loss Prescriptions in Cincinnati | Telehealth FX",
    description: "Access U.S.-licensed compounded Semaglutide, delivered directly to your home in Cincinnati.",
    url: 'https://telehealthfx.com/locations/cincinnati',
    siteName: 'Telehealth FX',
    type: 'website',
  }
};

export default function CincinnatiPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "MedicalClinic",
        "@id": "https://telehealthfx.com/locations/cincinnati#clinic",
        "name": "Telehealth FX - Cincinnati GLP-1 Prescribing",
        "url": "https://telehealthfx.com/locations/cincinnati",
        "logo": "https://telehealthfx.com/logo.png",
        "description": "Asynchronous medical weight loss clinic providing Ohio-licensed physician evaluations and GLP-1 prescriptions for residents of Cincinnati.",
        "areaServed": {
          "@type": "City",
          "name": "Cincinnati",
          "containedInPlace": {
            "@type": "State",
            "name": "Ohio"
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
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <LocationCincinnati />
    </>
  );
}
