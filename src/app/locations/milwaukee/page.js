import { LocationMilwaukee } from '../../../components/location-milwaukee';

export const metadata = {
  alternates: {
    canonical: 'https://telehealthfx.com/locations/milwaukee/',
  },
  title: "GLP-1 Weight Loss Prescriptions in Milwaukee | Telehealth FX",
  description: "Bypass the Marquette Interchange traffic and waitlists at Froedtert. Access FDA-compliant compounded Semaglutide and Tirzepatide prescribed by WI-licensed physicians.",
  openGraph: {
    title: "GLP-1 Weight Loss Prescriptions in Milwaukee | Telehealth FX",
    description: "Access U.S.-licensed compounded Semaglutide, delivered directly to your home in Brew City.",
    url: 'https://telehealthfx.com/locations/milwaukee',
    siteName: 'Telehealth FX',
    type: 'website',
  }
};

export default function MilwaukeePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "MedicalClinic",
        "@id": "https://telehealthfx.com/locations/milwaukee#clinic",
        "name": "Telehealth FX - Milwaukee GLP-1 Prescribing",
        "url": "https://telehealthfx.com/locations/milwaukee",
        "logo": "https://telehealthfx.com/logo.png",
        "description": "Asynchronous medical weight loss clinic providing Wisconsin-licensed physician evaluations and GLP-1 prescriptions for residents of Milwaukee County and surrounding suburbs.",
        "areaServed": {
          "@type": "City",
          "name": "Milwaukee",
          "containedInPlace": {
            "@type": "State",
            "name": "Wisconsin"
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
            "name": "Do I need to visit a physical clinic in Milwaukee to get a prescription?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "No. Under State of Wisconsin Medical Examining Board telehealth regulations, you can complete your entire medical intake asynchronously online. If approved by a Wisconsin-licensed physician, your compounded Semaglutide or Tirzepatide is shipped directly to your home anywhere in Greater Milwaukee."
            }
          },
          {
            "@type": "Question",
            "name": "Is Telehealth FX legally authorized to operate in Wisconsin?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. We partner exclusively with physicians licensed by the State of Wisconsin Medical Examining Board, and our network utilizes FDA-registered 503A/503B pharmacies authorized to ship to all Wisconsin addresses."
            }
          },
          {
            "@type": "Question",
            "name": "Are there waitlists like at Froedtert or Aurora Health Care?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "No. By utilizing 503A compounding pharmacies, we completely bypass the retail shortages affecting local Pick 'n Save pharmacies and the multi-month waitlists typical of major hospital metabolic centers in Brew City."
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
      <LocationMilwaukee />
    </>
  );
}
