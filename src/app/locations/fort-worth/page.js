import { LocationFortWorth } from '../../../components/location-fort-worth';

export const metadata = {
  title: "GLP-1 Weight Loss Prescriptions in Fort Worth | Telehealth FX",
  description: "Bypass the I-35W traffic and waitlists at Texas Health Resources. Access FDA-compliant compounded Semaglutide and Tirzepatide prescribed by Texas-licensed physicians.",
  openGraph: {
    title: "GLP-1 Weight Loss Prescriptions in Fort Worth | Telehealth FX",
    description: "Access U.S.-licensed compounded Semaglutide, delivered directly to your home in Fort Worth.",
    url: 'https://telehealthfx.com/locations/fort-worth',
    siteName: 'Telehealth FX',
    type: 'website',
  }
};

export default function FortWorthPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "MedicalClinic",
        "@id": "https://telehealthfx.com/locations/fort-worth#clinic",
        "name": "Telehealth FX - Fort Worth GLP-1 Prescribing",
        "url": "https://telehealthfx.com/locations/fort-worth",
        "logo": "https://telehealthfx.com/logo.png",
        "description": "Asynchronous medical weight loss clinic providing Texas-licensed physician evaluations and GLP-1 prescriptions for residents of Tarrant County, Parker County, Johnson County.",
        "areaServed": {
          "@type": "City",
          "name": "Fort Worth",
          "containedInPlace": {
            "@type": "State",
            "name": "Texas"
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
            "name": "Do I need to visit a physical clinic in Fort Worth to get a prescription?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "No. Under Texas Medical Board telehealth regulations, you can complete your entire medical intake asynchronously online. If approved by a Texas-licensed physician, your compounded Semaglutide or Tirzepatide is shipped directly to your home in Fort Worth."
            }
          },
          {
            "@type": "Question",
            "name": "Is Telehealth FX legally authorized to operate in Texas?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. We partner exclusively with physicians licensed by the Texas Medical Board, and our network utilizes FDA-registered 503A/503B pharmacies authorized to ship to all TX addresses."
            }
          },
          {
            "@type": "Question",
            "name": "Are there waitlists like at Texas Health Resources and Baylor Scott & White?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "No. By utilizing 503A compounding pharmacies, we completely bypass the retail shortages affecting local H-E-B Pharmacy and Tom Thumb pharmacies and the 6-month waitlists typical of major hospital metabolic centers in the area."
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
      <LocationFortWorth />
    </>
  );
}
