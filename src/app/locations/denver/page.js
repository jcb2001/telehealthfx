import { LocationDenver } from '../../../components/location-denver';

export const metadata = {
  alternates: {
    canonical: 'https://telehealthfx.com/locations/denver/',
  },
  title: "GLP-1 Weight Loss Prescriptions in Denver | Telehealth FX",
  description: "Bypass the I-25 traffic and waitlists at UCHealth. Access FDA-compliant compounded Semaglutide and Tirzepatide prescribed by Colorado-licensed physicians.",
  openGraph: {
    title: "GLP-1 Weight Loss Prescriptions in Denver | Telehealth FX",
    description: "Access U.S.-licensed compounded Semaglutide, delivered directly to your home in Denver.",
    url: 'https://telehealthfx.com/locations/denver',
    siteName: 'Telehealth FX',
    type: 'website',
  }
};

export default function DenverPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "MedicalClinic",
        "@id": "https://telehealthfx.com/locations/denver#clinic",
        "name": "Telehealth FX - Denver GLP-1 Prescribing",
        "url": "https://telehealthfx.com/locations/denver",
        "logo": "https://telehealthfx.com/logo.png",
        "description": "Asynchronous medical weight loss clinic providing Colorado-licensed physician evaluations and GLP-1 prescriptions for residents of Denver County, Arapahoe County, Jefferson County.",
        "areaServed": {
          "@type": "City",
          "name": "Denver",
          "containedInPlace": {
            "@type": "State",
            "name": "Colorado"
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
            "name": "Do I need to visit a physical clinic in Denver to get a prescription?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "No. Under Colorado Medical Board telehealth regulations, you can complete your entire medical intake asynchronously online. If approved by a Colorado-licensed physician, your compounded Semaglutide or Tirzepatide is shipped directly to your home in Denver."
            }
          },
          {
            "@type": "Question",
            "name": "Is Telehealth FX legally authorized to operate in Colorado?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. We partner exclusively with physicians licensed by the Colorado Medical Board, and our network utilizes FDA-registered 503A/503B pharmacies authorized to ship to all CO addresses."
            }
          },
          {
            "@type": "Question",
            "name": "Are there waitlists like at UCHealth and Denver Health?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "No. By utilizing 503A compounding pharmacies, we completely bypass the retail shortages affecting local King Soopers Pharmacy pharmacies and the 6-month waitlists typical of major hospital metabolic centers in the area."
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
      <LocationDenver />
    </>
  );
}
