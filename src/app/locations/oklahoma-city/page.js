import { LocationOklahomaCity } from '../../../components/location-oklahoma-city';

export const metadata = {
  title: "GLP-1 Weight Loss Prescriptions in Oklahoma City | Telehealth FX",
  description: "Access FDA-compliant compounded Semaglutide and Tirzepatide prescribed by Oklahoma-licensed physicians.",
  openGraph: {
    title: "GLP-1 Weight Loss Prescriptions in Oklahoma City | Telehealth FX",
    description: "Access U.S.-licensed compounded Semaglutide, delivered directly to your home in Oklahoma City.",
    url: 'https://telehealthfx.com/locations/oklahoma-city',
    siteName: 'Telehealth FX',
    type: 'website',
  }
};

export default function OklahomaCityPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "MedicalClinic",
        "@id": "https://telehealthfx.com/locations/oklahoma-city#clinic",
        "name": "Telehealth FX - Oklahoma City GLP-1 Prescribing",
        "url": "https://telehealthfx.com/locations/oklahoma-city",
        "logo": "https://telehealthfx.com/logo.png",
        "description": "Asynchronous medical weight loss clinic providing Oklahoma-licensed physician evaluations and GLP-1 prescriptions for residents of Oklahoma City.",
        "areaServed": {
          "@type": "City",
          "name": "Oklahoma City",
          "containedInPlace": {
            "@type": "State",
            "name": "Oklahoma"
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
      <LocationOklahomaCity />
    </>
  );
}
