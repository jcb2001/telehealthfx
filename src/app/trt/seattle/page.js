import { TRTSeattle } from "../../../components/trt-seattle";
export const metadata = {
  title: "TRT & Testosterone Therapy in Seattle | From $79/mo | Telehealth FX",
  description: "Testosterone Replacement Therapy prescribed by Washington-licensed physicians. From $79/mo with $95 comprehensive bloodwork. Injectable, oral, or topical TRT delivered to Seattle.",
  openGraph: {
    title: "TRT & Testosterone Therapy in Seattle | Telehealth FX",
    url: "https://telehealthfx.com/trt/seattle/",
    siteName: "Telehealth FX",
    type: "website"
  }
,
  alternates: {
    canonical: 'https://telehealthfx.com/trt/seattle/'
  }
};
export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [{
      "@type": "MedicalClinic",
      "@id": "https://telehealthfx.com/trt/seattle#clinic",
      "name": "Telehealth FX TRT - Seattle",
      "url": "https://telehealthfx.com/trt/seattle",
      "areaServed": {
        "@type": "City",
        "name": "Seattle",
        "containedInPlace": { "@type": "State", "name": "Washington" }
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
      <TRTSeattle />
    </>
  );
}
