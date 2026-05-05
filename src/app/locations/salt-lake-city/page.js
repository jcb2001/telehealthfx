import { LocationSaltLakeCity } from '../../../components/location-salt-lake-city';

export const metadata = {
  alternates: {
    canonical: 'https://telehealthfx.com/locations/salt-lake-city/',
  },
  title: "GLP-1 Weight Loss Prescriptions in Salt Lake City | Telehealth FX",
  description: "Access FDA-compliant compounded Semaglutide and Tirzepatide prescribed by Utah-licensed physicians.",
  openGraph: {
    title: "GLP-1 Weight Loss Prescriptions in Salt Lake City | Telehealth FX",
    description: "Access U.S.-licensed compounded Semaglutide, delivered directly to your home in Salt Lake City.",
    url: 'https://telehealthfx.com/locations/salt-lake-city',
    siteName: 'Telehealth FX',
    type: 'website',
  }
};

export default function SaltLakeCityPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "MedicalClinic",
        "@id": "https://telehealthfx.com/locations/salt-lake-city#clinic",
        "name": "Telehealth FX - Salt Lake City GLP-1 Prescribing",
        "url": "https://telehealthfx.com/locations/salt-lake-city",
        "logo": "https://telehealthfx.com/logo.png",
        "description": "Asynchronous medical weight loss clinic providing Utah-licensed physician evaluations and GLP-1 prescriptions for residents of Salt Lake City.",
        "areaServed": {
          "@type": "City",
          "name": "Salt Lake City",
          "containedInPlace": {
            "@type": "State",
            "name": "Utah"
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
      <LocationSaltLakeCity />
    </>
  );
}
