import { LocationShreveport } from "../../../components/location-shreveport";
export const metadata = {
  title: "GLP-1 Weight Loss in Shreveport | Telehealth FX",
  description: "FDA-compliant compounded Semaglutide prescribed by Louisiana-licensed physicians in Shreveport. From $146/mo with overnight cold-pack delivery.",
  openGraph: {
    title: "GLP-1 Weight Loss in Shreveport | Telehealth FX",
    description: "Clinical GLP-1 telehealth for Shreveport, Louisiana residents. Louisiana-licensed physicians. From $146/mo.",
    url: "https://telehealthfx.com/locations/shreveport",
    siteName: "Telehealth FX",
    type: "website"
  },
  alternates: {
    canonical: "https://telehealthfx.com/locations/shreveport"
  }
};
export default function ShreveportPage() {
  const jsonLd = {"@context": "https://schema.org", "@graph": [{"@type": "Organization", "@id": "https://telehealthfx.com/#organization", "name": "Telehealth FX", "url": "https://telehealthfx.com", "logo": {"@type": "ImageObject", "url": "https://telehealthfx.com/logo.png"}, "sameAs": []}, {"@type": "WebSite", "@id": "https://telehealthfx.com/#website", "url": "https://telehealthfx.com", "name": "Telehealth FX", "publisher": {"@id": "https://telehealthfx.com/#organization"}}, {"@type": "BreadcrumbList", "@id": "https://telehealthfx.com/locations/shreveport#breadcrumb", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "Home", "item": "https://telehealthfx.com"}, {"@type": "ListItem", "position": 2, "name": "Locations", "item": "https://telehealthfx.com/locations"}, {"@type": "ListItem", "position": 3, "name": "Shreveport", "item": "https://telehealthfx.com/locations/shreveport"}]}, {"@type": "MedicalWebPage", "@id": "https://telehealthfx.com/locations/shreveport#webpage", "url": "https://telehealthfx.com/locations/shreveport", "name": "GLP-1 Weight Loss in Shreveport | Telehealth FX", "description": "FDA-compliant compounded Semaglutide and Tirzepatide prescribed by Louisiana-licensed physicians in Shreveport. From $146/mo with overnight delivery.", "isPartOf": {"@id": "https://telehealthfx.com/#website"}, "breadcrumb": {"@id": "https://telehealthfx.com/locations/shreveport#breadcrumb"}, "inLanguage": "en-US", "medicalAudience": {"@type": "MedicalAudience", "audienceType": "Patient"}, "lastReviewed": "2026-05-01", "reviewedBy": {"@type": "Organization", "name": "Telehealth FX Clinical Team"}}, {"@type": "MedicalClinic", "@id": "https://telehealthfx.com/locations/shreveport#clinic", "name": "Telehealth FX - Shreveport", "url": "https://telehealthfx.com/locations/shreveport", "telephone": "+1-800-TELEHEALTH", "areaServed": {"@type": "City", "name": "Shreveport", "containedInPlace": {"@type": "State", "name": "Louisiana"}}, "medicalSpecialty": "Endocrine", "isAcceptingNewPatients": true, "availableService": {"@type": "MedicalTherapy", "name": "GLP-1 Receptor Agonist Therapy", "alternateName": "Compounded Semaglutide / Tirzepatide", "medicineSystem": "WesternConventional", "relevantSpecialty": "Endocrine"}, "currenciesAccepted": "USD", "paymentAccepted": "Credit Card, HSA, FSA", "priceRange": "$146-$349/mo", "geo": {"@type": "GeoCoordinates", "latitude": 32.5252, "longitude": -93.7502}}, {"@type": "Service", "@id": "https://telehealthfx.com/locations/shreveport#service", "name": "GLP-1 Weight Loss Program - Shreveport", "description": "Clinical telehealth weight loss program delivering compounded Semaglutide and Tirzepatide to Shreveport, Louisiana residents. Includes physician evaluation, prescription, and cold-shipped medication.", "provider": {"@id": "https://telehealthfx.com/locations/shreveport#clinic"}, "areaServed": {"@type": "City", "name": "Shreveport", "containedInPlace": {"@type": "State", "name": "Louisiana"}}, "serviceType": "Telehealth Weight Management", "offers": {"@type": "Offer", "price": "146", "priceCurrency": "USD", "priceValidUntil": "2026-12-31", "availability": "https://schema.org/InStock", "url": "https://go.telehealthfx.com/start", "description": "Monthly compounded GLP-1 program with physician oversight"}}, {"@type": "FAQPage", "@id": "https://telehealthfx.com/locations/shreveport#faq", "mainEntity": [{"@type": "Question", "name": "I'm at Barksdale. Will this affect my readiness?", "acceptedAnswer": {"@type": "Answer", "text": "No. GLP-1 medications are not controlled substances."}}, {"@type": "Question", "name": "Do you deliver to Bossier City and Minden?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. All Caddo, Bossier, and Webster Parish addresses."}}]}]};
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <LocationShreveport />
    </>
  );
}
