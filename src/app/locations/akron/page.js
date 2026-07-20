import { LocationAkron } from "../../../components/location-akron";
export const metadata = {
  robots: { index: true, follow: true },
  title: "GLP-1 Weight Loss in Akron | Telehealth FX",
  description: "FDA-compliant compounded Semaglutide prescribed by Ohio-licensed physicians in Akron. From $146/mo with overnight cold-pack delivery.",
  openGraph: {
    title: "GLP-1 Weight Loss in Akron | Telehealth FX",
    description: "Clinical GLP-1 telehealth for Akron, Ohio residents. Ohio-licensed physicians. From $146/mo.",
    url: "https://telehealthfx.com/locations/akron",
    siteName: "Telehealth FX",
    type: "website"
  },
  alternates: {
    canonical: 'https://telehealthfx.com/locations/akron/'
  }
};
export default function AkronPage() {
  const jsonLd = {"@context": "https://schema.org", "@graph": [{"@type": "Organization", "@id": "https://telehealthfx.com/#organization", "name": "Telehealth FX", "url": "https://telehealthfx.com", "logo": {"@type": "ImageObject", "url": "https://telehealthfx.com/logo.png"}, "sameAs": []}, {"@type": "WebSite", "@id": "https://telehealthfx.com/#website", "url": "https://telehealthfx.com", "name": "Telehealth FX", "publisher": {"@id": "https://telehealthfx.com/#organization"}}, {"@type": "BreadcrumbList", "@id": "https://telehealthfx.com/locations/akron#breadcrumb", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "Home", "item": "https://telehealthfx.com"}, {"@type": "ListItem", "position": 2, "name": "Locations", "item": "https://telehealthfx.com/locations"}, {"@type": "ListItem", "position": 3, "name": "Akron", "item": "https://telehealthfx.com/locations/akron"}]}, {"@type": "MedicalWebPage", "@id": "https://telehealthfx.com/locations/akron#webpage", "url": "https://telehealthfx.com/locations/akron", "name": "GLP-1 Weight Loss in Akron | Telehealth FX", "description": "FDA-compliant compounded Semaglutide and Tirzepatide prescribed by Ohio-licensed physicians in Akron. From $146/mo with overnight delivery.", "isPartOf": {"@id": "https://telehealthfx.com/#website"}, "breadcrumb": {"@id": "https://telehealthfx.com/locations/akron#breadcrumb"}, "inLanguage": "en-US", "medicalAudience": {"@type": "MedicalAudience", "audienceType": "Patient"}, "lastReviewed": "2026-05-01", "reviewedBy": {"@type": "Organization", "name": "Telehealth FX Clinical Team"}}, {"@type": "MedicalClinic", "@id": "https://telehealthfx.com/locations/akron#clinic", "name": "Telehealth FX - Akron", "url": "https://telehealthfx.com/locations/akron", "telephone": "+1-800-TELEHEALTH", "areaServed": {"@type": "City", "name": "Akron", "containedInPlace": {"@type": "State", "name": "Ohio"}}, "medicalSpecialty": "Endocrine", "isAcceptingNewPatients": true, "availableService": {"@type": "MedicalTherapy", "name": "GLP-1 Receptor Agonist Therapy", "alternateName": "Compounded Semaglutide / Tirzepatide", "medicineSystem": "WesternConventional", "relevantSpecialty": "Endocrine"}, "currenciesAccepted": "USD", "paymentAccepted": "Credit Card, HSA, FSA", "priceRange": "$146-$349/mo", "geo": {"@type": "GeoCoordinates", "latitude": 41.0814, "longitude": -81.519}}, {"@type": "Service", "@id": "https://telehealthfx.com/locations/akron#service", "name": "GLP-1 Weight Loss Program - Akron", "description": "Clinical telehealth weight loss program delivering compounded Semaglutide and Tirzepatide to Akron, Ohio residents. Includes physician evaluation, prescription, and cold-shipped medication.", "provider": {"@id": "https://telehealthfx.com/locations/akron#clinic"}, "areaServed": {"@type": "City", "name": "Akron", "containedInPlace": {"@type": "State", "name": "Ohio"}}, "serviceType": "Telehealth Weight Management", "offers": {"@type": "Offer", "price": "146", "priceCurrency": "USD", "priceValidUntil": "2026-12-31", "availability": "https://schema.org/InStock", "url": "https://go.telehealthfx.com/start", "description": "Monthly compounded GLP-1 program with physician oversight"}}, {"@type": "FAQPage", "@id": "https://telehealthfx.com/locations/akron#faq", "mainEntity": [{"@type": "Question", "name": "Should I just go to Cleveland Clinic's main campus?", "acceptedAnswer": {"@type": "Answer", "text": "Cleveland Clinic main campus has 16-20 week waits for endocrinology. Telehealth FX provides the same clinical evaluation without any drive or wait."}}, {"@type": "Question", "name": "Do you deliver to Cuyahoga Falls and Canton?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. All Summit, Stark, Portage, and Medina County addresses."}}]}]};
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <LocationAkron />
    </>
  );
}
