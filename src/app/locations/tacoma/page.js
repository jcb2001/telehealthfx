import { LocationTacoma } from "../../../components/location-tacoma";
export const metadata = {
  title: "GLP-1 Weight Loss in Tacoma | Telehealth FX",
  description: "FDA-compliant compounded Semaglutide prescribed by Washington-licensed physicians in Tacoma. From $146/mo with overnight cold-pack delivery.",
  openGraph: {
    title: "GLP-1 Weight Loss in Tacoma | Telehealth FX",
    description: "Clinical GLP-1 telehealth for Tacoma, Washington residents. Washington-licensed physicians. From $146/mo.",
    url: "https://telehealthfx.com/locations/tacoma",
    siteName: "Telehealth FX",
    type: "website"
  },
  alternates: {
    canonical: "https://telehealthfx.com/locations/tacoma"
  }
};
export default function TacomaPage() {
  const jsonLd = {"@context": "https://schema.org", "@graph": [{"@type": "Organization", "@id": "https://telehealthfx.com/#organization", "name": "Telehealth FX", "url": "https://telehealthfx.com", "logo": {"@type": "ImageObject", "url": "https://telehealthfx.com/logo.png"}, "sameAs": []}, {"@type": "WebSite", "@id": "https://telehealthfx.com/#website", "url": "https://telehealthfx.com", "name": "Telehealth FX", "publisher": {"@id": "https://telehealthfx.com/#organization"}}, {"@type": "BreadcrumbList", "@id": "https://telehealthfx.com/locations/tacoma#breadcrumb", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "Home", "item": "https://telehealthfx.com"}, {"@type": "ListItem", "position": 2, "name": "Locations", "item": "https://telehealthfx.com/locations"}, {"@type": "ListItem", "position": 3, "name": "Tacoma", "item": "https://telehealthfx.com/locations/tacoma"}]}, {"@type": "MedicalWebPage", "@id": "https://telehealthfx.com/locations/tacoma#webpage", "url": "https://telehealthfx.com/locations/tacoma", "name": "GLP-1 Weight Loss in Tacoma | Telehealth FX", "description": "FDA-compliant compounded Semaglutide and Tirzepatide prescribed by Washington-licensed physicians in Tacoma. From $146/mo with overnight delivery.", "isPartOf": {"@id": "https://telehealthfx.com/#website"}, "breadcrumb": {"@id": "https://telehealthfx.com/locations/tacoma#breadcrumb"}, "inLanguage": "en-US", "medicalAudience": {"@type": "MedicalAudience", "audienceType": "Patient"}, "lastReviewed": "2026-05-01", "reviewedBy": {"@type": "Organization", "name": "Telehealth FX Clinical Team"}}, {"@type": "MedicalClinic", "@id": "https://telehealthfx.com/locations/tacoma#clinic", "name": "Telehealth FX - Tacoma", "url": "https://telehealthfx.com/locations/tacoma", "telephone": "+1-800-TELEHEALTH", "areaServed": {"@type": "City", "name": "Tacoma", "containedInPlace": {"@type": "State", "name": "Washington"}}, "medicalSpecialty": "Endocrine", "isAcceptingNewPatients": true, "availableService": {"@type": "MedicalTherapy", "name": "GLP-1 Receptor Agonist Therapy", "alternateName": "Compounded Semaglutide / Tirzepatide", "medicineSystem": "WesternConventional", "relevantSpecialty": "Endocrine"}, "currenciesAccepted": "USD", "paymentAccepted": "Credit Card, HSA, FSA", "priceRange": "$146-$349/mo", "geo": {"@type": "GeoCoordinates", "latitude": 47.2529, "longitude": -122.4443}}, {"@type": "Service", "@id": "https://telehealthfx.com/locations/tacoma#service", "name": "GLP-1 Weight Loss Program - Tacoma", "description": "Clinical telehealth weight loss program delivering compounded Semaglutide and Tirzepatide to Tacoma, Washington residents. Includes physician evaluation, prescription, and cold-shipped medication.", "provider": {"@id": "https://telehealthfx.com/locations/tacoma#clinic"}, "areaServed": {"@type": "City", "name": "Tacoma", "containedInPlace": {"@type": "State", "name": "Washington"}}, "serviceType": "Telehealth Weight Management", "offers": {"@type": "Offer", "price": "146", "priceCurrency": "USD", "priceValidUntil": "2026-12-31", "availability": "https://schema.org/InStock", "url": "https://go.telehealthfx.com/start", "description": "Monthly compounded GLP-1 program with physician oversight"}}, {"@type": "FAQPage", "@id": "https://telehealthfx.com/locations/tacoma#faq", "mainEntity": [{"@type": "Question", "name": "My spouse is deployed. Can I start without them?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. Military spouses can use Telehealth FX independently."}}, {"@type": "Question", "name": "Do you deliver to Lakewood, Puyallup, and Olympia?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. All Pierce and Thurston County addresses."}}]}]};
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <LocationTacoma />
    </>
  );
}
