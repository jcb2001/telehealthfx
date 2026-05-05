import { LocationBaltimore } from '../../../components/location-baltimore';

export const metadata = {
  alternates: {
    canonical: 'https://telehealthfx.com/locations/baltimore/',
  },
  title: "GLP-1 Weight Loss Prescriptions in Baltimore | Telehealth FX",
  description: "Bypass the I-695 Beltway traffic and waitlists at Johns Hopkins. Access FDA-compliant compounded Semaglutide and Tirzepatide prescribed by MD-licensed physicians.",
  openGraph: {
    title: "GLP-1 Weight Loss Prescriptions in Baltimore | Telehealth FX",
    description: "Access U.S.-licensed compounded Semaglutide, delivered directly to your home in Charm City.",
    url: 'https://telehealthfx.com/locations/baltimore',
    siteName: 'Telehealth FX',
    type: 'website',
  }
};

export default function BaltimorePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "MedicalClinic",
        "@id": "https://telehealthfx.com/locations/baltimore#clinic",
        "name": "Telehealth FX - Baltimore GLP-1 Prescribing",
        "url": "https://telehealthfx.com/locations/baltimore",
        "logo": "https://telehealthfx.com/logo.png",
        "description": "Asynchronous medical weight loss clinic providing Maryland-licensed physician evaluations and GLP-1 prescriptions for residents of Baltimore City and surrounding counties.",
        "areaServed": {
          "@type": "City",
          "name": "Baltimore",
          "containedInPlace": {
            "@type": "State",
            "name": "Maryland"
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
            "name": "Do I need to visit a physical clinic in Baltimore to get a prescription?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "No. Under Maryland Board of Physicians telehealth regulations, you can complete your entire medical intake asynchronously online. If approved by a Maryland-licensed physician, your compounded Semaglutide or Tirzepatide is shipped directly to your home anywhere in the Baltimore Metro area."
            }
          },
          {
            "@type": "Question",
            "name": "Is Telehealth FX legally authorized to operate in Maryland?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. We partner exclusively with physicians licensed by the Maryland Board of Physicians, and our network utilizes FDA-registered 503A/503B pharmacies authorized to ship to all Maryland addresses."
            }
          },
          {
            "@type": "Question",
            "name": "Are there waitlists like at Johns Hopkins or MedStar?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "No. By utilizing 503A compounding pharmacies, we completely bypass the retail shortages affecting local Giant pharmacies and the multi-month waitlists typical of major hospital metabolic centers in Charm City."
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
      <LocationBaltimore />
    </>
  );
}
