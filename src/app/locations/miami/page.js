import { LocationMiami } from '../../../components/location-miami';

export const metadata = {
  title: "GLP-1 Weight Loss Prescriptions in Miami | Telehealth FX",
  description: "Access FDA-compliant compounded Semaglutide and Tirzepatide prescribed by Florida-licensed physicians.",
  openGraph: {
    title: "GLP-1 Weight Loss Prescriptions in Miami | Telehealth FX",
    description: "Access U.S.-licensed compounded Semaglutide, delivered directly to your home in Miami.",
    url: 'https://telehealthfx.com/locations/miami',
    siteName: 'Telehealth FX',
    type: 'website',
  }
};

export default function MiamiPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "MedicalClinic",
        "@id": "https://telehealthfx.com/locations/miami#clinic",
        "name": "Telehealth FX - Miami GLP-1 Prescribing",
        "url": "https://telehealthfx.com/locations/miami",
        "logo": "https://telehealthfx.com/logo.png",
        "description": "Asynchronous medical weight loss clinic providing Florida-licensed physician evaluations and GLP-1 prescriptions for residents of Miami.",
        "areaServed": {
          "@type": "City",
          "name": "Miami",
          "containedInPlace": {
            "@type": "State",
            "name": "Florida"
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
      <LocationMiami />
    </>
  );
}
