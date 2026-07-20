import { TRTDenver } from "../../../components/trt-denver";
export const metadata = {
  title: "TRT & Testosterone Therapy in Denver | From $79/mo | Telehealth FX",
  description: "Testosterone Replacement Therapy prescribed by Colorado-licensed physicians. From $79/mo with $95 comprehensive bloodwork. Injectable, oral, or topical TRT delivered to Denver.",
  openGraph: {
    title: "TRT & Testosterone Therapy in Denver | Telehealth FX",
    url: "https://telehealthfx.com/trt/denver",
    siteName: "Telehealth FX",
    type: "website"
  }
,
  alternates: {
    canonical: 'https://telehealthfx.com/trt/denver/'
  }
};
export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [{
      "@type": "MedicalClinic",
      "@id": "https://telehealthfx.com/trt/denver#clinic",
      "name": "Telehealth FX TRT - Denver",
      "url": "https://telehealthfx.com/trt/denver",
      "areaServed": {
        "@type": "City",
        "name": "Denver",
        "containedInPlace": { "@type": "State", "name": "Colorado" }
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
      <TRTDenver />
    </>
  );
}
