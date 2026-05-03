import { LocationPortland } from '../../../components/location-portland';

export const metadata = {
  title: "GLP-1 Weight Loss Prescriptions in Portland | Telehealth FX",
  description: "Bypass the I-5 traffic and waitlists at OHSU. Access FDA-compliant compounded Semaglutide and Tirzepatide prescribed by Oregon-licensed physicians.",
  openGraph: {
    title: "GLP-1 Weight Loss Prescriptions in Portland | Telehealth FX",
    description: "Access U.S.-licensed compounded Semaglutide, delivered directly to your home in the Rose City.",
    url: 'https://telehealthfx.com/locations/portland',
    siteName: 'Telehealth FX',
    type: 'website',
  }
};

export default function PortlandPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "MedicalClinic",
        "@id": "https://telehealthfx.com/locations/portland#clinic",
        "name": "Telehealth FX - Portland GLP-1 Prescribing",
        "url": "https://telehealthfx.com/locations/portland",
        "logo": "https://telehealthfx.com/logo.png",
        "description": "Asynchronous medical weight loss clinic providing Oregon-licensed physician evaluations and GLP-1 prescriptions for residents of Multnomah County and Greater Portland.",
        "areaServed": {
          "@type": "City",
          "name": "Portland",
          "containedInPlace": {
            "@type": "State",
            "name": "Oregon"
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
            "name": "Do I need to visit a physical clinic in Portland to get a prescription?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "No. Under Oregon Medical Board telehealth regulations, you can complete your entire medical intake asynchronously online. If approved by an Oregon-licensed physician, your compounded Semaglutide or Tirzepatide is shipped directly to your home anywhere in Greater Portland."
            }
          },
          {
            "@type": "Question",
            "name": "Is Telehealth FX legally authorized to operate in Oregon?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. We partner exclusively with physicians licensed by the Oregon Medical Board, and our network utilizes FDA-registered 503A/503B pharmacies authorized to ship to all Oregon addresses."
            }
          },
          {
            "@type": "Question",
            "name": "Are there waitlists like at OHSU or Providence?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "No. By utilizing 503A compounding pharmacies, we completely bypass the retail shortages affecting local Fred Meyer pharmacies and the multi-month waitlists typical of major hospital metabolic centers in the Pacific Northwest."
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
      <LocationPortland />
    </>
  );
}
