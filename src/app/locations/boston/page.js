import { LocationBoston } from '../../../components/location-boston';

export const metadata = {
  alternates: {
    canonical: 'https://telehealthfx.com/locations/boston/',
  },
  title: "GLP-1 Weight Loss Prescriptions in Boston | Telehealth FX",
  description: "Bypass the Mass Pike traffic and waitlists at Mass General. Access FDA-compliant compounded Semaglutide and Tirzepatide prescribed by MA-licensed physicians.",
  openGraph: {
    title: "GLP-1 Weight Loss Prescriptions in Boston | Telehealth FX",
    description: "Access U.S.-licensed compounded Semaglutide, delivered directly to your home in Greater Boston.",
    url: 'https://telehealthfx.com/locations/boston',
    siteName: 'Telehealth FX',
    type: 'website',
  }
};

export default function BostonPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "MedicalClinic",
        "@id": "https://telehealthfx.com/locations/boston#clinic",
        "name": "Telehealth FX - Boston GLP-1 Prescribing",
        "url": "https://telehealthfx.com/locations/boston",
        "logo": "https://telehealthfx.com/logo.png",
        "description": "Asynchronous medical weight loss clinic providing Massachusetts-licensed physician evaluations and GLP-1 prescriptions for residents of Suffolk County and Greater Boston.",
        "areaServed": {
          "@type": "City",
          "name": "Boston",
          "containedInPlace": {
            "@type": "State",
            "name": "Massachusetts"
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
            "name": "Do I need to visit a physical clinic in Boston to get a prescription?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "No. Under Massachusetts Board of Registration in Medicine telehealth regulations, you can complete your entire medical intake asynchronously online. If approved by a Massachusetts-licensed physician, your compounded Semaglutide or Tirzepatide is shipped directly to your home anywhere in Greater Boston."
            }
          },
          {
            "@type": "Question",
            "name": "Is Telehealth FX legally authorized to operate in Massachusetts?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. We partner exclusively with physicians licensed by the Massachusetts Board of Registration in Medicine, and our network utilizes FDA-registered 503A/503B pharmacies authorized to ship to all Massachusetts addresses."
            }
          },
          {
            "@type": "Question",
            "name": "Are there waitlists like at Mass General or Brigham and Women's?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "No. By utilizing 503A compounding pharmacies, we completely bypass the retail shortages affecting local pharmacies and the multi-month waitlists typical of major hospital metabolic centers in Boston."
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
      <LocationBoston />
    </>
  );
}
