import { LocationCharlotte } from '../../../components/location-charlotte';

export const metadata = {
  title: "GLP-1 Weight Loss Prescriptions in Charlotte | Telehealth FX",
  description: "Bypass the I-77 traffic and waitlists at Atrium Health. Access FDA-compliant compounded Semaglutide and Tirzepatide prescribed by NC-licensed physicians.",
  openGraph: {
    title: "GLP-1 Weight Loss Prescriptions in Charlotte | Telehealth FX",
    description: "Access U.S.-licensed compounded Semaglutide, delivered directly to your home in Charlotte.",
    url: 'https://telehealthfx.com/locations/charlotte',
    siteName: 'Telehealth FX',
    type: 'website',
  }
};

export default function CharlottePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "MedicalClinic",
        "@id": "https://telehealthfx.com/locations/charlotte#clinic",
        "name": "Telehealth FX - Charlotte GLP-1 Prescribing",
        "url": "https://telehealthfx.com/locations/charlotte",
        "logo": "https://telehealthfx.com/logo.png",
        "description": "Asynchronous medical weight loss clinic providing North Carolina-licensed physician evaluations and GLP-1 prescriptions for residents of Mecklenburg County, Union County.",
        "areaServed": {
          "@type": "City",
          "name": "Charlotte",
          "containedInPlace": {
            "@type": "State",
            "name": "North Carolina"
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
            "name": "Do I need to visit a physical clinic in Charlotte to get a prescription?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "No. Under North Carolina Medical Board telehealth regulations, you can complete your entire medical intake asynchronously online. If approved by a North Carolina-licensed physician, your compounded Semaglutide or Tirzepatide is shipped directly to your home in Charlotte."
            }
          },
          {
            "@type": "Question",
            "name": "Is Telehealth FX legally authorized to operate in North Carolina?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. We partner exclusively with physicians licensed by the North Carolina Medical Board, and our network utilizes FDA-registered 503A/503B pharmacies authorized to ship to all NC addresses."
            }
          },
          {
            "@type": "Question",
            "name": "Are there waitlists like at Atrium Health and Novant Health?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "No. By utilizing 503A compounding pharmacies, we completely bypass the retail shortages affecting local Harris Teeter Pharmacy pharmacies and the 6-month waitlists typical of major hospital metabolic centers in the area."
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
      <LocationCharlotte />
    </>
  );
}
