import { TRTMiami } from "../../../components/trt-miami";
export const metadata = {
  title: "TRT & Testosterone Therapy in Miami | From $79/mo | Telehealth FX",
  description: "Testosterone Replacement Therapy prescribed by Florida-licensed physicians. From $79/mo with $95 comprehensive bloodwork. Injectable, oral, or topical TRT delivered to Miami.",
  openGraph: {
    title: "TRT & Testosterone Therapy in Miami | Telehealth FX",
    url: "https://telehealthfx.com/trt/miami",
    siteName: "Telehealth FX",
    type: "website"
  }
};
export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [{
      "@type": "MedicalClinic",
      "@id": "https://telehealthfx.com/trt/miami#clinic",
      "name": "Telehealth FX TRT - Miami",
      "url": "https://telehealthfx.com/trt/miami",
      "areaServed": {
        "@type": "City",
        "name": "Miami",
        "containedInPlace": { "@type": "State", "name": "Florida" }
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
      <TRTMiami />
    </>
  );
}
