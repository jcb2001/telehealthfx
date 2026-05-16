import { TRTLosAngeles } from "../../../components/trt-los-angeles";
export const metadata = {
  title: "TRT & Testosterone Therapy in Los Angeles | From $79/mo | Telehealth FX",
  description: "Testosterone Replacement Therapy prescribed by California-licensed physicians. From $79/mo with $95 comprehensive bloodwork. Injectable, oral, or topical TRT delivered to Los Angeles.",
  openGraph: {
    title: "TRT & Testosterone Therapy in Los Angeles | Telehealth FX",
    url: "https://telehealthfx.com/trt/los-angeles",
    siteName: "Telehealth FX",
    type: "website"
  }
};
export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [{
      "@type": "MedicalClinic",
      "@id": "https://telehealthfx.com/trt/los-angeles#clinic",
      "name": "Telehealth FX TRT - Los Angeles",
      "url": "https://telehealthfx.com/trt/los-angeles",
      "areaServed": {
        "@type": "City",
        "name": "Los Angeles",
        "containedInPlace": { "@type": "State", "name": "California" }
      },
      "medicalSpecialty": "https://schema.org/Endocrine",
      "availableService": {
        "@type": "MedicalTherapy",
        "name": "Testosterone Replacement Therapy (TRT)",
        "drug": { "@type": "Drug", "nonProprietaryName": "Testosterone Cypionate" }
      },
      "isAcceptingNewPatients": true
    }]
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <TRTLosAngeles />
    </>
  );
}
