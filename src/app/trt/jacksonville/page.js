import { TRTJacksonville } from "../../../components/trt-jacksonville";
export const metadata = {
  title: "TRT & Testosterone Therapy in Jacksonville | From $79/mo | Telehealth FX",
  description: "Testosterone Replacement Therapy prescribed by Florida-licensed physicians. From $79/mo with $95 comprehensive bloodwork. Injectable, oral, or topical TRT delivered to Jacksonville.",
  openGraph: {
    title: "TRT & Testosterone Therapy in Jacksonville | Telehealth FX",
    url: "https://telehealthfx.com/trt/jacksonville",
    siteName: "Telehealth FX",
    type: "website"
  }
,
  alternates: {
    canonical: 'https://telehealthfx.com/trt/jacksonville/'
  }
};
export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [{
      "@type": "MedicalClinic",
      "@id": "https://telehealthfx.com/trt/jacksonville#clinic",
      "name": "Telehealth FX TRT - Jacksonville",
      "url": "https://telehealthfx.com/trt/jacksonville",
      "areaServed": {
        "@type": "City",
        "name": "Jacksonville",
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
      <TRTJacksonville />
    </>
  );
}
