import { TRTDetroit } from "../../../components/trt-detroit";
export const metadata = {
  title: "TRT & Testosterone Therapy in Detroit | From $79/mo | Telehealth FX",
  description: "Testosterone Replacement Therapy prescribed by Michigan-licensed physicians. From $79/mo with $95 comprehensive bloodwork. Injectable, oral, or topical TRT delivered to Detroit.",
  openGraph: {
    title: "TRT & Testosterone Therapy in Detroit | Telehealth FX",
    url: "https://telehealthfx.com/trt/detroit",
    siteName: "Telehealth FX",
    type: "website"
  }
,
  alternates: {
    canonical: 'https://telehealthfx.com/trt/detroit/'
  }
};
export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [{
      "@type": "MedicalClinic",
      "@id": "https://telehealthfx.com/trt/detroit#clinic",
      "name": "Telehealth FX TRT - Detroit",
      "url": "https://telehealthfx.com/trt/detroit",
      "areaServed": {
        "@type": "City",
        "name": "Detroit",
        "containedInPlace": { "@type": "State", "name": "Michigan" }
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
      <TRTDetroit />
    </>
  );
}
