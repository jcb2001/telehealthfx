import { LocationDuluth } from "../../../components/location-duluth";
export const metadata = {
  title: "GLP-1 Weight Loss in Duluth | Telehealth FX",
  description: "FDA-compliant compounded Semaglutide prescribed by Minnesota-licensed physicians in Duluth. From $146/mo with overnight cold-pack delivery.",
  openGraph: {
    title: "GLP-1 Weight Loss in Duluth | Telehealth FX",
    description: "Clinical GLP-1 telehealth for Duluth, Minnesota residents. Minnesota-licensed physicians. From $146/mo.",
    url: "https://telehealthfx.com/locations/duluth",
    siteName: "Telehealth FX",
    type: "website"
  },
  alternates: {
    canonical: 'https://telehealthfx.com/locations/duluth/'
  }
};
export default function DuluthPage() {
  const jsonLd = {"@context": "https://schema.org", "@graph": [{"@type": "Organization", "@id": "https://telehealthfx.com/#organization", "name": "Telehealth FX", "url": "https://telehealthfx.com", "logo": {"@type": "ImageObject", "url": "https://telehealthfx.com/logo.png"}, "sameAs": []}, {"@type": "WebSite", "@id": "https://telehealthfx.com/#website", "url": "https://telehealthfx.com", "name": "Telehealth FX", "publisher": {"@id": "https://telehealthfx.com/#organization"}}, {"@type": "BreadcrumbList", "@id": "https://telehealthfx.com/locations/duluth#breadcrumb", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "Home", "item": "https://telehealthfx.com"}, {"@type": "ListItem", "position": 2, "name": "Locations", "item": "https://telehealthfx.com/locations"}, {"@type": "ListItem", "position": 3, "name": "Duluth", "item": "https://telehealthfx.com/locations/duluth"}]}, {"@type": "MedicalWebPage", "@id": "https://telehealthfx.com/locations/duluth#webpage", "url": "https://telehealthfx.com/locations/duluth", "name": "GLP-1 Weight Loss in Duluth | Telehealth FX", "description": "FDA-compliant compounded Semaglutide and Tirzepatide prescribed by Minnesota-licensed physicians in Duluth. From $146/mo with overnight delivery.", "isPartOf": {"@id": "https://telehealthfx.com/#website"}, "breadcrumb": {"@id": "https://telehealthfx.com/locations/duluth#breadcrumb"}, "inLanguage": "en-US", "medicalAudience": {"@type": "MedicalAudience", "audienceType": "Patient"}, "lastReviewed": "2026-05-01", "reviewedBy": {"@type": "Organization", "name": "Telehealth FX Clinical Team"}}, {"@type": "MedicalClinic", "@id": "https://telehealthfx.com/locations/duluth#clinic", "name": "Telehealth FX - Duluth", "url": "https://telehealthfx.com/locations/duluth", "telephone": "+1-800-TELEHEALTH", "areaServed": {"@type": "City", "name": "Duluth", "containedInPlace": {"@type": "State", "name": "Minnesota"}}, "medicalSpecialty": "Endocrine", "isAcceptingNewPatients": true, "availableService": {"@type": "MedicalTherapy", "name": "GLP-1 Receptor Agonist Therapy", "alternateName": "Compounded Semaglutide / Tirzepatide", "medicineSystem": "WesternConventional", "relevantSpecialty": "Endocrine"}, "currenciesAccepted": "USD", "paymentAccepted": "Credit Card, HSA, FSA", "priceRange": "$146-$349/mo", "geo": {"@type": "GeoCoordinates", "latitude": 46.7867, "longitude": -92.1005}}, {"@type": "Service", "@id": "https://telehealthfx.com/locations/duluth#service", "name": "GLP-1 Weight Loss Program - Duluth", "description": "Clinical telehealth weight loss program delivering compounded Semaglutide and Tirzepatide to Duluth, Minnesota residents. Includes physician evaluation, prescription, and cold-shipped medication.", "provider": {"@id": "https://telehealthfx.com/locations/duluth#clinic"}, "areaServed": {"@type": "City", "name": "Duluth", "containedInPlace": {"@type": "State", "name": "Minnesota"}}, "serviceType": "Telehealth Weight Management", "offers": {"@type": "Offer", "price": "146", "priceCurrency": "USD", "priceValidUntil": "2026-12-31", "availability": "https://schema.org/InStock", "url": "https://go.telehealthfx.com/start", "description": "Monthly compounded GLP-1 program with physician oversight"}}, {"@type": "FAQPage", "@id": "https://telehealthfx.com/locations/duluth#faq", "mainEntity": [{"@type": "Question", "name": "I drive the North Shore for work. Can I do this remotely?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. 100% asynchronous. Complete from anywhere with cell service."}}, {"@type": "Question", "name": "Do you deliver to Hermantown, Proctor, and Two Harbors?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. All St. Louis County addresses including the Iron Range."}}]}]};
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <LocationDuluth />
    </>
  );
}
