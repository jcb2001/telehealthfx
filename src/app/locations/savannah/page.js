import { LocationSavannah } from "../../../components/location-savannah";
export const metadata = {
  title: "GLP-1 Weight Loss in Savannah | Telehealth FX",
  description: "FDA-compliant compounded Semaglutide prescribed by Georgia-licensed physicians in Savannah. From $146/mo with overnight cold-pack delivery.",
  openGraph: {
    title: "GLP-1 Weight Loss in Savannah | Telehealth FX",
    description: "Clinical GLP-1 telehealth for Savannah, Georgia residents. Georgia-licensed physicians. From $146/mo.",
    url: "https://telehealthfx.com/locations/savannah",
    siteName: "Telehealth FX",
    type: "website"
  },
  alternates: {
    canonical: 'https://telehealthfx.com/locations/savannah/'
  }
};
export default function SavannahPage() {
  const jsonLd = {"@context": "https://schema.org", "@graph": [{"@type": "Organization", "@id": "https://telehealthfx.com/#organization", "name": "Telehealth FX", "url": "https://telehealthfx.com", "logo": {"@type": "ImageObject", "url": "https://telehealthfx.com/logo.png"}, "sameAs": []}, {"@type": "WebSite", "@id": "https://telehealthfx.com/#website", "url": "https://telehealthfx.com", "name": "Telehealth FX", "publisher": {"@id": "https://telehealthfx.com/#organization"}}, {"@type": "BreadcrumbList", "@id": "https://telehealthfx.com/locations/savannah#breadcrumb", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "Home", "item": "https://telehealthfx.com"}, {"@type": "ListItem", "position": 2, "name": "Locations", "item": "https://telehealthfx.com/locations"}, {"@type": "ListItem", "position": 3, "name": "Savannah", "item": "https://telehealthfx.com/locations/savannah"}]}, {"@type": "MedicalWebPage", "@id": "https://telehealthfx.com/locations/savannah#webpage", "url": "https://telehealthfx.com/locations/savannah", "name": "GLP-1 Weight Loss in Savannah | Telehealth FX", "description": "FDA-compliant compounded Semaglutide and Tirzepatide prescribed by Georgia-licensed physicians in Savannah. From $146/mo with overnight delivery.", "isPartOf": {"@id": "https://telehealthfx.com/#website"}, "breadcrumb": {"@id": "https://telehealthfx.com/locations/savannah#breadcrumb"}, "inLanguage": "en-US", "medicalAudience": {"@type": "MedicalAudience", "audienceType": "Patient"}, "lastReviewed": "2026-05-01", "reviewedBy": {"@type": "Organization", "name": "Telehealth FX Clinical Team"}}, {"@type": "MedicalClinic", "@id": "https://telehealthfx.com/locations/savannah#clinic", "name": "Telehealth FX - Savannah", "url": "https://telehealthfx.com/locations/savannah", "telephone": "+1-800-TELEHEALTH", "areaServed": {"@type": "City", "name": "Savannah", "containedInPlace": {"@type": "State", "name": "Georgia"}}, "medicalSpecialty": "Endocrine", "isAcceptingNewPatients": true, "availableService": {"@type": "MedicalTherapy", "name": "GLP-1 Receptor Agonist Therapy", "alternateName": "Compounded Semaglutide / Tirzepatide", "medicineSystem": "WesternConventional", "relevantSpecialty": "Endocrine"}, "currenciesAccepted": "USD", "paymentAccepted": "Credit Card, HSA, FSA", "priceRange": "$146-$349/mo", "geo": {"@type": "GeoCoordinates", "latitude": 32.0809, "longitude": -81.0912}}, {"@type": "Service", "@id": "https://telehealthfx.com/locations/savannah#service", "name": "GLP-1 Weight Loss Program - Savannah", "description": "Clinical telehealth weight loss program delivering compounded Semaglutide and Tirzepatide to Savannah, Georgia residents. Includes physician evaluation, prescription, and cold-shipped medication.", "provider": {"@id": "https://telehealthfx.com/locations/savannah#clinic"}, "areaServed": {"@type": "City", "name": "Savannah", "containedInPlace": {"@type": "State", "name": "Georgia"}}, "serviceType": "Telehealth Weight Management", "offers": {"@type": "Offer", "price": "146", "priceCurrency": "USD", "priceValidUntil": "2026-12-31", "availability": "https://schema.org/InStock", "url": "https://go.telehealthfx.com/start", "description": "Monthly compounded GLP-1 program with physician oversight"}}, {"@type": "FAQPage", "@id": "https://telehealthfx.com/locations/savannah#faq", "mainEntity": [{"@type": "Question", "name": "I work 12-hour crane shifts. When?", "acceptedAnswer": {"@type": "Answer", "text": "Anytime. Fully asynchronous."}}, {"@type": "Question", "name": "Do you deliver to Pooler, Richmond Hill, and Hinesville?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. All Chatham, Bryan, Effingham, and Liberty County addresses."}}]}]};
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <LocationSavannah />
    </>
  );
}
