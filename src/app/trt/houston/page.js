import { TRTHouston } from "../../../components/trt-houston";
export const metadata = {
  title: "TRT & Testosterone Therapy in Houston | From $79/mo | Telehealth FX",
  description: "Testosterone Replacement Therapy prescribed by Texas-licensed physicians. From $79/mo with $95 comprehensive bloodwork. Injectable, oral, or topical TRT delivered to Houston.",
  openGraph: {
    title: "TRT & Testosterone Therapy in Houston | Telehealth FX",
    url: "https://telehealthfx.com/trt/houston",
    siteName: "Telehealth FX",
    type: "website"
  }
,
  alternates: {
    canonical: 'https://telehealthfx.com/trt/houston/'
  }
};
export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [{
      "@type": "MedicalClinic",
      "@id": "https://telehealthfx.com/trt/houston#clinic",
      "name": "Telehealth FX TRT - Houston",
      "url": "https://telehealthfx.com/trt/houston",
      "areaServed": {
        "@type": "City",
        "name": "Houston",
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
      <TRTHouston />
    </>
  );
}
