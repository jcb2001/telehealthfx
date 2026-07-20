import { TRTPhiladelphia } from "../../../components/trt-philadelphia";
export const metadata = {
  title: "TRT & Testosterone Therapy in Philadelphia | From $79/mo | Telehealth FX",
  description: "Testosterone Replacement Therapy prescribed by Pennsylvania-licensed physicians. From $79/mo with $95 comprehensive bloodwork. Injectable, oral, or topical TRT delivered to Philadelphia.",
  openGraph: {
    title: "TRT & Testosterone Therapy in Philadelphia | Telehealth FX",
    url: "https://telehealthfx.com/trt/philadelphia",
    siteName: "Telehealth FX",
    type: "website"
  }
,
  alternates: {
    canonical: 'https://telehealthfx.com/trt/philadelphia/'
  }
};
export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [{
      "@type": "MedicalClinic",
      "@id": "https://telehealthfx.com/trt/philadelphia#clinic",
      "name": "Telehealth FX TRT - Philadelphia",
      "url": "https://telehealthfx.com/trt/philadelphia",
      "areaServed": {
        "@type": "City",
        "name": "Philadelphia",
        "containedInPlace": { "@type": "State", "name": "Pennsylvania" }
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
      <TRTPhiladelphia />
    </>
  );
}
