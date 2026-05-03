import { LocationSanAntonio } from '../../../components/location-san-antonio';

export const metadata = {
  title: "GLP-1 Weight Loss Prescriptions in San Antonio | Telehealth FX",
  description: "Bypass the Loop 1604 traffic and waitlists at UT Health San Antonio. Access FDA-compliant compounded Semaglutide and Tirzepatide prescribed by Texas-licensed physicians.",
  openGraph: {
    title: "GLP-1 Weight Loss Prescriptions in San Antonio | Telehealth FX",
    description: "Access U.S.-licensed compounded Semaglutide, delivered directly to your home in San Antonio.",
    url: 'https://telehealthfx.com/locations/san-antonio',
    siteName: 'Telehealth FX',
    type: 'website',
  }
};

export default function SanAntonioPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "MedicalClinic",
        "@id": "https://telehealthfx.com/locations/san-antonio#clinic",
        "name": "Telehealth FX - San Antonio GLP-1 Prescribing",
        "url": "https://telehealthfx.com/locations/san-antonio",
        "logo": "https://telehealthfx.com/logo.png",
        "description": "Asynchronous medical weight loss clinic providing Texas-licensed physician evaluations and GLP-1 prescriptions for residents of Bexar County and Greater San Antonio.",
        "areaServed": {
          "@type": "City",
          "name": "San Antonio",
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
            "name": "Do I need to visit a physical clinic in San Antonio to get a prescription?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "No. Under Texas Medical Board telehealth regulations, you can complete your entire medical intake asynchronously online. If approved by a Texas-licensed physician, your compounded Semaglutide or Tirzepatide is shipped directly to your home in San Antonio."
            }
          },
          {
            "@type": "Question",
            "name": "Is Telehealth FX legally authorized to operate in Texas?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. We partner exclusively with physicians licensed by the Texas Medical Board, and our network utilizes FDA-registered 503A/503B pharmacies authorized to ship to all Texas addresses."
            }
          },
          {
            "@type": "Question",
            "name": "Are there waitlists like at UT Health San Antonio?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "No. By utilizing 503A compounding pharmacies, we completely bypass the retail shortages affecting local H-E-B pharmacies and the 6-month waitlists typical of major hospital metabolic centers in the Medical Center district."
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
      <LocationSanAntonio />
    </>
  );
}
