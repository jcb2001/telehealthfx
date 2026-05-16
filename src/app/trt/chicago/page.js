import { TRTChicago } from "../../../components/trt-chicago";
export const metadata = {
  title: "TRT & Testosterone Therapy in Chicago | From $79/mo | Telehealth FX",
  description: "Testosterone Replacement Therapy prescribed by Illinois-licensed physicians. From $79/mo with $95 comprehensive bloodwork. Injectable, oral, or topical TRT delivered to Chicago.",
  openGraph: {
    title: "TRT & Testosterone Therapy in Chicago | Telehealth FX",
    url: "https://telehealthfx.com/trt/chicago",
    siteName: "Telehealth FX",
    type: "website"
  }
};
export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [{
      "@type": "MedicalClinic",
      "@id": "https://telehealthfx.com/trt/chicago#clinic",
      "name": "Telehealth FX TRT - Chicago",
      "url": "https://telehealthfx.com/trt/chicago",
      "areaServed": {
        "@type": "City",
        "name": "Chicago",
        "containedInPlace": { "@type": "State", "name": "Illinois" }
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
      <TRTChicago />
    </>
  );
}
