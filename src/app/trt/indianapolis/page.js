import { TRTIndianapolis } from "../../../components/trt-indianapolis";
export const metadata = {
  title: "TRT & Testosterone Therapy in Indianapolis | From $79/mo | Telehealth FX",
  description: "Testosterone Replacement Therapy prescribed by Indiana-licensed physicians. From $79/mo with $95 comprehensive bloodwork. Injectable, oral, or topical TRT delivered to Indianapolis.",
  openGraph: {
    title: "TRT & Testosterone Therapy in Indianapolis | Telehealth FX",
    url: "https://telehealthfx.com/trt/indianapolis/",
    siteName: "Telehealth FX",
    type: "website"
  }
,
  alternates: {
    canonical: 'https://telehealthfx.com/trt/indianapolis/'
  }
};
export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [{
      "@type": "MedicalClinic",
      "@id": "https://telehealthfx.com/trt/indianapolis#clinic",
      "name": "Telehealth FX TRT - Indianapolis",
      "url": "https://telehealthfx.com/trt/indianapolis",
      "areaServed": {
        "@type": "City",
        "name": "Indianapolis",
        "containedInPlace": { "@type": "State", "name": "Indiana" }
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
      <TRTIndianapolis />
    </>
  );
}
