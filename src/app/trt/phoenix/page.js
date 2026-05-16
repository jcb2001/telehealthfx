import { TRTPhoenix } from "../../../components/trt-phoenix";
export const metadata = {
  title: "TRT & Testosterone Therapy in Phoenix | From $79/mo | Telehealth FX",
  description: "Testosterone Replacement Therapy prescribed by Arizona-licensed physicians. From $79/mo with $95 comprehensive bloodwork. Injectable, oral, or topical TRT delivered to Phoenix.",
  openGraph: {
    title: "TRT & Testosterone Therapy in Phoenix | Telehealth FX",
    url: "https://telehealthfx.com/trt/phoenix",
    siteName: "Telehealth FX",
    type: "website"
  }
};
export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [{
      "@type": "MedicalClinic",
      "@id": "https://telehealthfx.com/trt/phoenix#clinic",
      "name": "Telehealth FX TRT - Phoenix",
      "url": "https://telehealthfx.com/trt/phoenix",
      "areaServed": {
        "@type": "City",
        "name": "Phoenix",
        "containedInPlace": { "@type": "State", "name": "Arizona" }
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
      <TRTPhoenix />
    </>
  );
}
