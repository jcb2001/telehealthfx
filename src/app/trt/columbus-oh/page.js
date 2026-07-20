import { TRTColumbus } from "../../../components/trt-columbus";
export const metadata = {
  title: "TRT & Testosterone Therapy in Columbus | From $79/mo | Telehealth FX",
  description: "Testosterone Replacement Therapy prescribed by Ohio-licensed physicians. From $79/mo with $95 comprehensive bloodwork. Injectable, oral, or topical TRT delivered to Columbus.",
  openGraph: {
    title: "TRT & Testosterone Therapy in Columbus | Telehealth FX",
    url: "https://telehealthfx.com/trt/columbus-oh",
    siteName: "Telehealth FX",
    type: "website"
  }
,
  alternates: {
    canonical: 'https://telehealthfx.com/trt/columbus-oh/'
  }
};
export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [{
      "@type": "MedicalClinic",
      "@id": "https://telehealthfx.com/trt/columbus-oh#clinic",
      "name": "Telehealth FX TRT - Columbus",
      "url": "https://telehealthfx.com/trt/columbus-oh",
      "areaServed": {
        "@type": "City",
        "name": "Columbus",
        "containedInPlace": { "@type": "State", "name": "Ohio" }
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
      <TRTColumbus />
    </>
  );
}
