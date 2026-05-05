import { LocationNewYork } from '../../../components/location-new-york';

export const metadata = {
  alternates: {
    canonical: 'https://telehealthfx.com/locations/new-york/',
  },
  title: "GLP-1 Weight Loss Prescriptions in New York | Telehealth FX",
  description: "Access FDA-compliant compounded Semaglutide and Tirzepatide prescribed by New York-licensed physicians.",
  openGraph: {
    title: "GLP-1 Weight Loss Prescriptions in New York | Telehealth FX",
    description: "Access U.S.-licensed compounded Semaglutide, delivered directly to your home in New York.",
    url: 'https://telehealthfx.com/locations/new-york',
    siteName: 'Telehealth FX',
    type: 'website',
  }
};

export default function NewYorkPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "MedicalClinic",
        "@id": "https://telehealthfx.com/locations/new-york#clinic",
        "name": "Telehealth FX - New York GLP-1 Prescribing",
        "url": "https://telehealthfx.com/locations/new-york",
        "logo": "https://telehealthfx.com/logo.png",
        "description": "Asynchronous medical weight loss clinic providing New York-licensed physician evaluations and GLP-1 prescriptions for residents of New York.",
        "areaServed": {
          "@type": "City",
          "name": "New York",
          "containedInPlace": {
            "@type": "State",
            "name": "New York"
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
      <LocationNewYork />
    </>
  );
}
