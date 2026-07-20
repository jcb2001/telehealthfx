import { TRTAustin } from "../../../components/trt-austin";
export const metadata = {
  title: "TRT & Testosterone Therapy in Austin | From $79/mo | Telehealth FX",
  description: "Testosterone Replacement Therapy prescribed by Texas-licensed physicians. From $79/mo with $95 comprehensive bloodwork. Injectable, oral, or topical TRT delivered to Austin.",
  openGraph: {
    title: "TRT & Testosterone Therapy in Austin | Telehealth FX",
    url: "https://telehealthfx.com/trt/austin",
    siteName: "Telehealth FX",
    type: "website"
  }
,
  alternates: {
    canonical: 'https://telehealthfx.com/trt/austin/'
  }
};
export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [{
      "@type": "MedicalClinic",
      "@id": "https://telehealthfx.com/trt/austin#clinic",
      "name": "Telehealth FX TRT - Austin",
      "url": "https://telehealthfx.com/trt/austin",
      "areaServed": {
        "@type": "City",
        "name": "Austin",
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
      <TRTAustin />
    </>
  );
}
