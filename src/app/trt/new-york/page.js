import { TRTNewYork } from "../../../components/trt-new-york";
export const metadata = {
  title: "TRT & Testosterone Therapy in New York City | From $79/mo | Telehealth FX",
  description: "Testosterone Replacement Therapy prescribed by New York-licensed physicians. From $79/mo with $95 comprehensive bloodwork. Injectable, oral, or topical TRT delivered to NYC.",
  openGraph: {
    title: "TRT & Testosterone Therapy in New York City | Telehealth FX",
    url: "https://telehealthfx.com/trt/new-york",
    siteName: "Telehealth FX",
    type: "website"
  }
};
export default function NewYorkTRTPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [{
      "@type": "MedicalClinic",
      "@id": "https://telehealthfx.com/trt/new-york#clinic",
      "name": "Telehealth FX TRT - New York City",
      "url": "https://telehealthfx.com/trt/new-york",
      "areaServed": {
        "@type": "City",
        "name": "New York",
        "containedInPlace": { "@type": "State", "name": "New York" }
      },
      "medicalSpecialty": "https://schema.org/Endocrine",
      "availableService": {
        "@type": "MedicalTherapy",
        "name": "Testosterone Replacement Therapy (TRT)",
        "drug": {
          "@type": "Drug",
          "nonProprietaryName": "Testosterone Cypionate"
        }
      },
      "isAcceptingNewPatients": true
    }]
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <TRTNewYork />
    </>
  );
}
