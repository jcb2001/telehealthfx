import { LocationWilmington } from "../../../components/location-wilmington";
export const metadata = {
  robots: { index: true, follow: true },
  title: "GLP-1 Weight Loss in Wilmington | Telehealth FX",
  description: "quality-verified compounded Semaglutide prescribed by North Carolina-licensed physicians in Wilmington. From $146/mo with overnight cold-pack delivery.",
  openGraph: {
    title: "GLP-1 Weight Loss in Wilmington | Telehealth FX",
    description: "Clinical GLP-1 telehealth for Wilmington, North Carolina residents. North Carolina-licensed physicians. From $146/mo.",
    url: "https://telehealthfx.com/locations/wilmington",
    siteName: "Telehealth FX",
    type: "website"
  },
  alternates: {
    canonical: 'https://telehealthfx.com/locations/wilmington/'
  }
};
export default function WilmingtonPage() {
  const jsonLd = {"@context": "https://schema.org", "@graph": [{"@type": "Organization", "@id": "https://telehealthfx.com/#organization", "name": "Telehealth FX", "url": "https://telehealthfx.com", "logo": {"@type": "ImageObject", "url": "https://telehealthfx.com/logo.png"}, "sameAs": []}, {"@type": "WebSite", "@id": "https://telehealthfx.com/#website", "url": "https://telehealthfx.com", "name": "Telehealth FX", "publisher": {"@id": "https://telehealthfx.com/#organization"}}, {"@type": "BreadcrumbList", "@id": "https://telehealthfx.com/locations/wilmington#breadcrumb", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "Home", "item": "https://telehealthfx.com"}, {"@type": "ListItem", "position": 2, "name": "Locations", "item": "https://telehealthfx.com/locations"}, {"@type": "ListItem", "position": 3, "name": "Wilmington", "item": "https://telehealthfx.com/locations/wilmington"}]}, {"@type": "MedicalWebPage", "@id": "https://telehealthfx.com/locations/wilmington#webpage", "url": "https://telehealthfx.com/locations/wilmington", "name": "GLP-1 Weight Loss in Wilmington | Telehealth FX", "description": "quality-verified compounded Semaglutide and Tirzepatide prescribed by North Carolina-licensed physicians in Wilmington. From $146/mo with overnight delivery.", "isPartOf": {"@id": "https://telehealthfx.com/#website"}, "breadcrumb": {"@id": "https://telehealthfx.com/locations/wilmington#breadcrumb"}, "inLanguage": "en-US", "medicalAudience": {"@type": "MedicalAudience", "audienceType": "Patient"}, "lastReviewed": "2026-05-01", "reviewedBy": {"@type": "Organization", "name": "Telehealth FX Clinical Team"}}, {"@type": "MedicalClinic", "@id": "https://telehealthfx.com/locations/wilmington#clinic", "name": "Telehealth FX - Wilmington", "url": "https://telehealthfx.com/locations/wilmington", "telephone": "+1-800-TELEHEALTH", "areaServed": {"@type": "City", "name": "Wilmington", "containedInPlace": {"@type": "State", "name": "North Carolina"}}, "medicalSpecialty": "Endocrine", "isAcceptingNewPatients": true, "availableService": {"@type": "MedicalTherapy", "name": "GLP-1 Receptor Agonist Therapy", "alternateName": "Compounded Semaglutide / Tirzepatide", "medicineSystem": "WesternConventional", "relevantSpecialty": "Endocrine"}, "currenciesAccepted": "USD", "paymentAccepted": "Credit Card, HSA, FSA", "priceRange": "$146-$349/mo", "geo": {"@type": "GeoCoordinates", "latitude": 34.2257, "longitude": -77.9447}}, {"@type": "Service", "@id": "https://telehealthfx.com/locations/wilmington#service", "name": "GLP-1 Weight Loss Program - Wilmington", "description": "Clinical telehealth weight loss program delivering compounded Semaglutide and Tirzepatide to Wilmington, North Carolina residents. Includes physician evaluation, prescription, and cold-shipped medication.", "provider": {"@id": "https://telehealthfx.com/locations/wilmington#clinic"}, "areaServed": {"@type": "City", "name": "Wilmington", "containedInPlace": {"@type": "State", "name": "North Carolina"}}, "serviceType": "Telehealth Weight Management", "offers": {"@type": "Offer", "price": "146", "priceCurrency": "USD", "priceValidUntil": "2026-12-31", "availability": "https://schema.org/InStock", "url": "https://go.telehealthfx.com/start", "description": "Monthly compounded GLP-1 program with physician oversight"}}, {"@type": "FAQPage", "@id": "https://telehealthfx.com/locations/wilmington#faq", "mainEntity": [{"@type": "Question", "name": "My husband is at Camp Lejeune. I live in Wilmington. Which state?", "acceptedAnswer": {"@type": "Answer", "text": "North Carolina. Both are NC."}}, {"@type": "Question", "name": "Do you deliver to Wrightsville Beach and Leland?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. All New Hanover, Brunswick, and Pender County addresses."}}]}]};
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <LocationWilmington />
    </>
  );
}
