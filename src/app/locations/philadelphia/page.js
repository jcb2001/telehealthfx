import { LocationPhiladelphia } from '../../../components/location-philadelphia';

export const metadata = {
  title: "GLP-1 Weight Loss Prescriptions in Philadelphia | Telehealth FX",
  description: "Bypass the Schuylkill Expressway traffic and waitlists at Penn Medicine. Access FDA-compliant compounded Semaglutide and Tirzepatide prescribed by PA-licensed physicians.",
  openGraph: {
    title: "GLP-1 Weight Loss Prescriptions in Philadelphia | Telehealth FX",
    description: "Access U.S.-licensed compounded Semaglutide, delivered directly to your home in Philadelphia.",
    url: 'https://telehealthfx.com/locations/philadelphia',
    siteName: 'Telehealth FX',
    type: 'website',
  }
};

export default function PhiladelphiaPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "MedicalClinic",
        "@id": "https://telehealthfx.com/locations/philadelphia#clinic",
        "name": "Telehealth FX - Philadelphia GLP-1 Prescribing",
        "url": "https://telehealthfx.com/locations/philadelphia",
        "logo": "https://telehealthfx.com/logo.png",
        "description": "Asynchronous medical weight loss clinic providing Pennsylvania-licensed physician evaluations and GLP-1 prescriptions for residents of Philadelphia County and the Delaware Valley.",
        "areaServed": {
          "@type": "City",
          "name": "Philadelphia",
          "containedInPlace": {
            "@type": "State",
            "name": "Pennsylvania"
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
            "name": "Do I need to visit a physical clinic in Philadelphia to get a prescription?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "No. Under Pennsylvania State Board of Medicine telehealth regulations, you can complete your entire medical intake asynchronously online. If approved by a PA-licensed physician, your compounded Semaglutide or Tirzepatide is shipped directly to your home in Philadelphia."
            }
          },
          {
            "@type": "Question",
            "name": "Is Telehealth FX legally authorized to operate in Pennsylvania?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. We partner exclusively with physicians licensed by the Pennsylvania State Board of Medicine, and our network utilizes FDA-registered 503A/503B pharmacies authorized to ship to all PA addresses."
            }
          },
          {
            "@type": "Question",
            "name": "Are there waitlists like at Penn Medicine or Jefferson Health?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "No. By utilizing 503A compounding pharmacies, we completely bypass the retail shortages affecting local Rite Aid and CVS pharmacies and the 6-month waitlists typical of major hospital metabolic centers in Center City."
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
      <LocationPhiladelphia />
    </>
  );
}
