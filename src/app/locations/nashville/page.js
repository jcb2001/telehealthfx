import { LocationNashville } from '../../../components/location-nashville';

export const metadata = {
  title: "GLP-1 Weight Loss Prescriptions in Nashville | Telehealth FX",
  description: "Access FDA-compliant compounded Semaglutide and Tirzepatide prescribed by Tennessee-licensed physicians.",
  openGraph: {
    title: "GLP-1 Weight Loss Prescriptions in Nashville | Telehealth FX",
    description: "Access U.S.-licensed compounded Semaglutide, delivered directly to your home in Nashville.",
    url: 'https://telehealthfx.com/locations/nashville',
    siteName: 'Telehealth FX',
    type: 'website',
  }
};

export default function NashvillePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "MedicalClinic",
        "@id": "https://telehealthfx.com/locations/nashville#clinic",
        "name": "Telehealth FX - Nashville GLP-1 Prescribing",
        "url": "https://telehealthfx.com/locations/nashville",
        "logo": "https://telehealthfx.com/logo.png",
        "description": "Asynchronous medical weight loss clinic providing Tennessee-licensed physician evaluations and GLP-1 prescriptions for residents of Nashville.",
        "areaServed": {
          "@type": "City",
          "name": "Nashville",
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
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <LocationNashville />
    </>
  );
}
