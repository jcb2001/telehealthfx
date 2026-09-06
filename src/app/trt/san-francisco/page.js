import { TRTSanFrancisco } from "../../../components/trt-san-francisco";
export const metadata = {
  title: "TRT & Testosterone Therapy in San Francisco | From $79/mo | Telehealth FX",
  description: "Testosterone Replacement Therapy prescribed by California-licensed physicians. From $79/mo with $95 comprehensive bloodwork. Injectable, oral, or topical TRT delivered to San Francisco.",
  openGraph: {
    title: "TRT & Testosterone Therapy in San Francisco | Telehealth FX",
    url: "https://telehealthfx.com/trt/san-francisco/",
    siteName: "Telehealth FX",
    type: "website"
  }
,
  alternates: {
    canonical: 'https://telehealthfx.com/trt/san-francisco/'
  }
};
export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [{
      "@type": "MedicalClinic",
      "@id": "https://telehealthfx.com/trt/san-francisco#clinic",
      "name": "Telehealth FX TRT - San Francisco",
      "url": "https://telehealthfx.com/trt/san-francisco",
      "areaServed": {
        "@type": "City",
        "name": "San Francisco",
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
      <TRTSanFrancisco />
    </>
  );
}
