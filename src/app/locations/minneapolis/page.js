import { LocationMinneapolis } from '../../../components/location-minneapolis';

export const metadata = {
  alternates: {
    canonical: 'https://telehealthfx.com/locations/minneapolis/',
  },
  title: "GLP-1 Weight Loss Prescriptions in Minneapolis | Telehealth FX",
  description: "Bypass winter waitlists and UnitedHealth Group formulary barriers. Access FDA-compliant compounded Semaglutide and Tirzepatide prescribed by Minnesota-licensed physicians.",
  openGraph: {
    title: "GLP-1 Weight Loss Prescriptions in Minneapolis | Telehealth FX",
    description: "Access U.S.-licensed compounded Semaglutide, delivered directly to your home in the Twin Cities.",
    url: 'https://telehealthfx.com/locations/minneapolis',
    siteName: 'Telehealth FX',
    type: 'website',
  }
};

export default function MinneapolisPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "MedicalClinic",
        "@id": "https://telehealthfx.com/locations/minneapolis#clinic",
        "name": "Telehealth FX - Minneapolis GLP-1 Prescribing",
        "url": "https://telehealthfx.com/locations/minneapolis",
        "logo": "https://telehealthfx.com/logo.png",
        "description": "Asynchronous medical weight loss clinic providing Minnesota-licensed physician evaluations and GLP-1 prescriptions for residents of the Twin Cities metro.",
        "areaServed": { "@type": "City", "name": "Minneapolis", "containedInPlace": { "@type": "State", "name": "Minnesota" } },
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
      <LocationMinneapolis />
    </>
  );
}
