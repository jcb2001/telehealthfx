import { TRTDallas } from "../../../components/trt-dallas";
export const metadata = {
  title: "TRT & Testosterone Therapy in Dallas | From $79/mo | Telehealth FX",
  description: "Testosterone Replacement Therapy prescribed by Texas-licensed physicians. From $79/mo with $95 comprehensive bloodwork. Injectable, oral, or topical TRT delivered to Dallas.",
  openGraph: {
    title: "TRT & Testosterone Therapy in Dallas | Telehealth FX",
    url: "https://telehealthfx.com/trt/dallas",
    siteName: "Telehealth FX",
    type: "website"
  }
,
  alternates: {
    canonical: 'https://telehealthfx.com/trt/dallas/'
  }
};
export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [{
      "@type": "MedicalClinic",
      "@id": "https://telehealthfx.com/trt/dallas#clinic",
      "name": "Telehealth FX TRT - Dallas",
      "url": "https://telehealthfx.com/trt/dallas",
      "areaServed": {
        "@type": "City",
        "name": "Dallas",
        "containedInPlace": { "@type": "State", "name": "Texas" }
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
      <TRTDallas />
    </>
  );
}
