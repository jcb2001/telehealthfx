import { TRTCharlotte } from "../../../components/trt-charlotte";
export const metadata = {
  title: "TRT & Testosterone Therapy in Charlotte | From $79/mo | Telehealth FX",
  description: "Testosterone Replacement Therapy prescribed by North Carolina-licensed physicians. From $79/mo with $95 comprehensive bloodwork. Injectable, oral, or topical TRT delivered to Charlotte.",
  openGraph: {
    title: "TRT & Testosterone Therapy in Charlotte | Telehealth FX",
    url: "https://telehealthfx.com/trt/charlotte/",
    siteName: "Telehealth FX",
    type: "website"
  }
,
  alternates: {
    canonical: 'https://telehealthfx.com/trt/charlotte/'
  }
};
export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [{
      "@type": "MedicalClinic",
      "@id": "https://telehealthfx.com/trt/charlotte#clinic",
      "name": "Telehealth FX TRT - Charlotte",
      "url": "https://telehealthfx.com/trt/charlotte",
      "areaServed": {
        "@type": "City",
        "name": "Charlotte",
        "containedInPlace": { "@type": "State", "name": "North Carolina" }
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
      <TRTCharlotte />
    </>
  );
}
