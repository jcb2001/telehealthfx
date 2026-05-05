import { LocationAtlanta } from '../../../components/location-atlanta';

export const metadata = {
  alternates: {
    canonical: 'https://telehealthfx.com/locations/atlanta/',
  },
  title: "GLP-1 Weight Loss Prescriptions in Atlanta | Telehealth FX",
  description: "Access FDA-compliant compounded Semaglutide and Tirzepatide prescribed by Georgia-licensed physicians.",
  openGraph: {
    title: "GLP-1 Weight Loss Prescriptions in Atlanta | Telehealth FX",
    description: "Access U.S.-licensed compounded Semaglutide, delivered directly to your home in Atlanta.",
    url: 'https://telehealthfx.com/locations/atlanta',
    siteName: 'Telehealth FX',
    type: 'website',
  }
};

export default function AtlantaPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "MedicalClinic",
        "@id": "https://telehealthfx.com/locations/atlanta#clinic",
        "name": "Telehealth FX - Atlanta GLP-1 Prescribing",
        "url": "https://telehealthfx.com/locations/atlanta",
        "logo": "https://telehealthfx.com/logo.png",
        "description": "Asynchronous medical weight loss clinic providing Georgia-licensed physician evaluations and GLP-1 prescriptions for residents of Atlanta.",
        "areaServed": {
          "@type": "City",
          "name": "Atlanta",
          "containedInPlace": {
            "@type": "State",
            "name": "Georgia"
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
      <LocationAtlanta />
    </>
  );
}
