import { LocationJacksonville } from '../../../components/location-jacksonville';

export const metadata = {
  title: "GLP-1 Weight Loss Prescriptions in Jacksonville | Telehealth FX",
  description: "Bypass the I-95 traffic and waitlists at Baptist Health. Access FDA-compliant compounded Semaglutide and Tirzepatide prescribed by Florida-licensed physicians.",
  openGraph: {
    title: "GLP-1 Weight Loss Prescriptions in Jacksonville | Telehealth FX",
    description: "Access U.S.-licensed compounded Semaglutide, delivered directly to your home in Jacksonville.",
    url: 'https://telehealthfx.com/locations/jacksonville',
    siteName: 'Telehealth FX',
    type: 'website',
  }
};

export default function JacksonvillePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "MedicalClinic",
        "@id": "https://telehealthfx.com/locations/jacksonville#clinic",
        "name": "Telehealth FX - Jacksonville GLP-1 Prescribing",
        "url": "https://telehealthfx.com/locations/jacksonville",
        "logo": "https://telehealthfx.com/logo.png",
        "description": "Asynchronous medical weight loss clinic providing Florida-licensed physician evaluations and GLP-1 prescriptions for residents of Duval County, St. Johns County, Clay County.",
        "areaServed": {
          "@type": "City",
          "name": "Jacksonville",
          "containedInPlace": {
            "@type": "State",
            "name": "Florida"
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
            "name": "Do I need to visit a physical clinic in Jacksonville to get a prescription?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "No. Under Florida Board of Medicine telehealth regulations, you can complete your entire medical intake asynchronously online. If approved by a Florida-licensed physician, your compounded Semaglutide or Tirzepatide is shipped directly to your home in Jacksonville."
            }
          },
          {
            "@type": "Question",
            "name": "Is Telehealth FX legally authorized to operate in Florida?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. We partner exclusively with physicians licensed by the Florida Board of Medicine, and our network utilizes FDA-registered 503A/503B pharmacies authorized to ship to all FL addresses."
            }
          },
          {
            "@type": "Question",
            "name": "Are there waitlists like at Baptist Health and Mayo Clinic?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "No. By utilizing 503A compounding pharmacies, we completely bypass the retail shortages affecting local Publix Pharmacy pharmacies and the 6-month waitlists typical of major hospital metabolic centers in the area."
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
      <LocationJacksonville />
    </>
  );
}
