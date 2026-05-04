import { LocationTampa } from '../../../components/location-tampa';

export const metadata = {
  title: "GLP-1 Weight Loss Prescriptions in Tampa | Telehealth FX",
  description: "Bypass snowbird-season waitlists and MacDill AFB TRICARE delays. Access FDA-compliant compounded Semaglutide and Tirzepatide prescribed by Florida-licensed physicians.",
  openGraph: {
    title: "GLP-1 Weight Loss Prescriptions in Tampa | Telehealth FX",
    description: "Access U.S.-licensed compounded Semaglutide, delivered directly to your home in Tampa Bay.",
    url: 'https://telehealthfx.com/locations/tampa',
    siteName: 'Telehealth FX',
    type: 'website',
  }
};

export default function TampaPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "MedicalClinic",
        "@id": "https://telehealthfx.com/locations/tampa#clinic",
        "name": "Telehealth FX - Tampa GLP-1 Prescribing",
        "url": "https://telehealthfx.com/locations/tampa",
        "logo": "https://telehealthfx.com/logo.png",
        "description": "Asynchronous medical weight loss clinic providing Florida-licensed physician evaluations and GLP-1 prescriptions for residents of Tampa Bay.",
        "areaServed": { "@type": "City", "name": "Tampa", "containedInPlace": { "@type": "State", "name": "Florida" } },
        "availableService": [
          { "@type": "MedicalTest", "name": "Asynchronous Metabolic Health Intake" },
          { "@type": "MedicalTherapy", "name": "GLP-1 Agonist Prescription" }
        ],
        "medicalSpecialty": "Endocrine",
        "isAcceptingNewPatients": true
      }
    ]
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <LocationTampa />
    </>
  );
}
