import { TRTSanAntonio } from "../../../components/trt-san-antonio";
export const metadata = {
  title: "TRT & Testosterone Therapy in San Antonio | From $79/mo | Telehealth FX",
  description: "Testosterone Replacement Therapy prescribed by Texas-licensed physicians. From $79/mo with $95 comprehensive bloodwork. Injectable, oral, or topical TRT delivered to San Antonio.",
  openGraph: {
    title: "TRT & Testosterone Therapy in San Antonio | Telehealth FX",
    url: "https://telehealthfx.com/trt/san-antonio",
    siteName: "Telehealth FX",
    type: "website"
  }
,
  alternates: {
    canonical: 'https://telehealthfx.com/trt/san-antonio/'
  }
};
export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [{
      "@type": "MedicalClinic",
      "@id": "https://telehealthfx.com/trt/san-antonio#clinic",
      "name": "Telehealth FX TRT - San Antonio",
      "url": "https://telehealthfx.com/trt/san-antonio",
      "areaServed": {
        "@type": "City",
        "name": "San Antonio",
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
      <TRTSanAntonio />
    </>
  );
}
