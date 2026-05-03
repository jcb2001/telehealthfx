import { LocationAustin } from '../../../components/location-austin';

export const metadata = {
  title: "GLP-1 Weight Loss Prescriptions in Austin | Telehealth FX",
  description: "Bypass the I-35 traffic and waitlists at Ascension Seton. Access FDA-compliant compounded Semaglutide and Tirzepatide prescribed by Texas-licensed physicians.",
  openGraph: {
    title: "GLP-1 Weight Loss Prescriptions in Austin | Telehealth FX",
    description: "Access U.S.-licensed compounded Semaglutide, delivered directly to your home in Austin.",
    url: 'https://telehealthfx.com/locations/austin',
    siteName: 'Telehealth FX',
    type: 'website',
  }
};

export default function AustinPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "MedicalClinic",
        "@id": "https://telehealthfx.com/locations/austin#clinic",
        "name": "Telehealth FX - Austin GLP-1 Prescribing",
        "url": "https://telehealthfx.com/locations/austin",
        "logo": "https://telehealthfx.com/logo.png",
        "description": "Asynchronous medical weight loss clinic providing Texas-licensed physician evaluations and GLP-1 prescriptions for residents of Travis County, Silicon Hills, and Greater Austin.",
        "areaServed": {
          "@type": "City",
          "name": "Austin",
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
            "name": "Do I need to visit a physical clinic in Austin to get a prescription?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "No. Under Texas Medical Board telehealth regulations, you can complete your entire medical intake asynchronously online. If approved by a Texas-licensed physician, your compounded Semaglutide or Tirzepatide is shipped directly to your home in Austin."
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
            "name": "Are there waitlists like at Ascension Seton or St. David's?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "No. By utilizing 503A compounding pharmacies, we completely bypass the retail shortages affecting local H-E-B pharmacies and the 6-month waitlists typical of major hospital metabolic centers in Central Texas."
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
      <LocationAustin />
    </>
  );
}
