import { LocationCharleston } from "../../../components/location-charleston";
export const metadata = {
  title: "GLP-1 Weight Loss in Charleston | Telehealth FX",
  description: "FDA-compliant compounded Semaglutide prescribed by South Carolina-licensed physicians in Charleston. From $146/mo with overnight cold-pack delivery.",
  openGraph: {
    title: "GLP-1 Weight Loss in Charleston | Telehealth FX",
    description: "Clinical GLP-1 telehealth for Charleston, South Carolina residents. South Carolina-licensed physicians. From $146/mo.",
    url: "https://telehealthfx.com/locations/charleston",
    siteName: "Telehealth FX",
    type: "website"
  },
  alternates: {
    canonical: 'https://telehealthfx.com/locations/charleston/'
  }
};
export default function CharlestonPage() {
  const jsonLd = {"@context": "https://schema.org", "@graph": [{"@type": "Organization", "@id": "https://telehealthfx.com/#organization", "name": "Telehealth FX", "url": "https://telehealthfx.com", "logo": {"@type": "ImageObject", "url": "https://telehealthfx.com/logo.png"}, "sameAs": []}, {"@type": "WebSite", "@id": "https://telehealthfx.com/#website", "url": "https://telehealthfx.com", "name": "Telehealth FX", "publisher": {"@id": "https://telehealthfx.com/#organization"}}, {"@type": "BreadcrumbList", "@id": "https://telehealthfx.com/locations/charleston#breadcrumb", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "Home", "item": "https://telehealthfx.com"}, {"@type": "ListItem", "position": 2, "name": "Locations", "item": "https://telehealthfx.com/locations"}, {"@type": "ListItem", "position": 3, "name": "Charleston", "item": "https://telehealthfx.com/locations/charleston"}]}, {"@type": "MedicalWebPage", "@id": "https://telehealthfx.com/locations/charleston#webpage", "url": "https://telehealthfx.com/locations/charleston", "name": "GLP-1 Weight Loss in Charleston | Telehealth FX", "description": "FDA-compliant compounded Semaglutide and Tirzepatide prescribed by South Carolina-licensed physicians in Charleston. From $146/mo with overnight delivery.", "isPartOf": {"@id": "https://telehealthfx.com/#website"}, "breadcrumb": {"@id": "https://telehealthfx.com/locations/charleston#breadcrumb"}, "inLanguage": "en-US", "medicalAudience": {"@type": "MedicalAudience", "audienceType": "Patient"}, "lastReviewed": "2026-05-01", "reviewedBy": {"@type": "Organization", "name": "Telehealth FX Clinical Team"}}, {"@type": "MedicalClinic", "@id": "https://telehealthfx.com/locations/charleston#clinic", "name": "Telehealth FX - Charleston", "url": "https://telehealthfx.com/locations/charleston", "telephone": "+1-800-TELEHEALTH", "areaServed": {"@type": "City", "name": "Charleston", "containedInPlace": {"@type": "State", "name": "South Carolina"}}, "medicalSpecialty": "Endocrine", "isAcceptingNewPatients": true, "availableService": {"@type": "MedicalTherapy", "name": "GLP-1 Receptor Agonist Therapy", "alternateName": "Compounded Semaglutide / Tirzepatide", "medicineSystem": "WesternConventional", "relevantSpecialty": "Endocrine"}, "currenciesAccepted": "USD", "paymentAccepted": "Credit Card, HSA, FSA", "priceRange": "$146-$349/mo", "geo": {"@type": "GeoCoordinates", "latitude": 32.7765, "longitude": -79.9311}}, {"@type": "Service", "@id": "https://telehealthfx.com/locations/charleston#service", "name": "GLP-1 Weight Loss Program - Charleston", "description": "Clinical telehealth weight loss program delivering compounded Semaglutide and Tirzepatide to Charleston, South Carolina residents. Includes physician evaluation, prescription, and cold-shipped medication.", "provider": {"@id": "https://telehealthfx.com/locations/charleston#clinic"}, "areaServed": {"@type": "City", "name": "Charleston", "containedInPlace": {"@type": "State", "name": "South Carolina"}}, "serviceType": "Telehealth Weight Management", "offers": {"@type": "Offer", "price": "146", "priceCurrency": "USD", "priceValidUntil": "2026-12-31", "availability": "https://schema.org/InStock", "url": "https://go.telehealthfx.com/start", "description": "Monthly compounded GLP-1 program with physician oversight"}}, {"@type": "FAQPage", "@id": "https://telehealthfx.com/locations/charleston#faq", "mainEntity": [{"@type": "Question", "name": "I work at Boeing. Shift schedule. When?", "acceptedAnswer": {"@type": "Answer", "text": "Anytime. Fully asynchronous."}}, {"@type": "Question", "name": "Do you deliver to Mt Pleasant, Summerville, and Goose Creek?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. All Charleston, Berkeley, and Dorchester County addresses."}}]}]};
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <LocationCharleston />
    </>
  );
}
