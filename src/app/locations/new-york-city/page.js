import { LocationNYC } from "../../../components/location-nyc.jsx";

export const metadata = {
  title: "GLP-1 Weight Loss Prescriptions in New York City | Telehealth FX",
  description: "Access U.S.-licensed, FDA-compliant compounded Semaglutide and Tirzepatide prescribed by NY-licensed physicians. Skip Manhattan medspa markups.",
  openGraph: {
    title: "GLP-1 Weight Loss Prescriptions in New York City | Telehealth FX",
    description: "Access U.S.-licensed, FDA-compliant compounded Semaglutide and Tirzepatide prescribed by NY-licensed physicians. Skip Manhattan medspa markups.",
    images: [
      {
        url: "https://telehealthfx.com/assets/logo.png",
        width: 1200,
        height: 630,
        alt: "Telehealth FX New York City",
      },
    ],
  },
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "MedicalClinic",
        "@id": "https://telehealthfx.com/locations/new-york-city/#clinic",
        "name": "Telehealth FX New York Services",
        "description": "Telehealth GLP-1 weight loss clinic serving New York City, Manhattan, Brooklyn, and surrounding boroughs.",
        "url": "https://telehealthfx.com/locations/new-york-city",
        "telephone": "+1-800-000-0000",
        "priceRange": "$146 - $258",
        "image": "https://telehealthfx.com/assets/logo.png",
        "areaServed": {
          "@type": "City",
          "name": "New York City"
        },
        "availableService": {
          "@type": "MedicalTest",
          "name": "GLP-1 Weight Loss Evaluation"
        }
      },
      {
        "@type": "FAQPage",
        "@id": "https://telehealthfx.com/locations/new-york-city/#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Do I need to visit a physical clinic in New York City to get a prescription?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "No. Telehealth FX connects you with NY-licensed physicians who can conduct your medical intake 100% online, bypassing the need for in-person Manhattan or Brooklyn clinic visits."
            }
          },
          {
            "@type": "Question",
            "name": "Are the prescribing doctors licensed in New York?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. Our platform strictly ensures that any prescriptions written for New York residents are done so by medical professionals fully licensed by the New York State Board of Medicine."
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
      <LocationNYC />
    </>
  );
}
