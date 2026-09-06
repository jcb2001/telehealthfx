import { TRTSanDiego } from "../../../components/trt-san-diego";
export const metadata = {
  title: "TRT & Testosterone Therapy in San Diego | From $79/mo | Telehealth FX",
  description: "Testosterone Replacement Therapy prescribed by California-licensed physicians. From $79/mo with $95 comprehensive bloodwork. Injectable, oral, or topical TRT delivered to San Diego.",
  openGraph: {
    title: "TRT & Testosterone Therapy in San Diego | Telehealth FX",
    url: "https://telehealthfx.com/trt/san-diego/",
    siteName: "Telehealth FX",
    type: "website"
  }
,
  alternates: {
    canonical: 'https://telehealthfx.com/trt/san-diego/'
  }
};
export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [{
      "@type": "MedicalClinic",
      "@id": "https://telehealthfx.com/trt/san-diego#clinic",
      "name": "Telehealth FX TRT - San Diego",
      "url": "https://telehealthfx.com/trt/san-diego",
      "areaServed": {
        "@type": "City",
        "name": "San Diego",
        "containedInPlace": { "@type": "State", "name": "California" }
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
      <TRTSanDiego />
    </>
  );
}
