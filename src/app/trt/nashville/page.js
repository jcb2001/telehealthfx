import { TRTNashville } from "../../../components/trt-nashville";
export const metadata = {
  title: "TRT & Testosterone Therapy in Nashville | From $79/mo | Telehealth FX",
  description: "Testosterone Replacement Therapy prescribed by Tennessee-licensed physicians. From $79/mo with $95 comprehensive bloodwork. Injectable, oral, or topical TRT delivered to Nashville.",
  openGraph: {
    title: "TRT & Testosterone Therapy in Nashville | Telehealth FX",
    url: "https://telehealthfx.com/trt/nashville",
    siteName: "Telehealth FX",
    type: "website"
  }
};
export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [{
      "@type": "MedicalClinic",
      "@id": "https://telehealthfx.com/trt/nashville#clinic",
      "name": "Telehealth FX TRT - Nashville",
      "url": "https://telehealthfx.com/trt/nashville",
      "areaServed": {
        "@type": "City",
        "name": "Nashville",
        "containedInPlace": { "@type": "State", "name": "Tennessee" }
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
      <TRTNashville />
    </>
  );
}
