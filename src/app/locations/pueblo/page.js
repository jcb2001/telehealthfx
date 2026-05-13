import { LocationPueblo } from "../../../components/location-pueblo";
export const metadata = {
  title: "GLP-1 Weight Loss in Pueblo | Telehealth FX",
  description: "FDA-compliant compounded Semaglutide prescribed by Colorado-licensed physicians in Pueblo. From $146/mo with overnight cold-pack delivery.",
  openGraph: {
    title: "GLP-1 Weight Loss in Pueblo | Telehealth FX",
    description: "Clinical GLP-1 telehealth for Pueblo, Colorado residents. Colorado-licensed physicians. From $146/mo.",
    url: "https://telehealthfx.com/locations/pueblo",
    siteName: "Telehealth FX",
    type: "website"
  },
  alternates: {
    canonical: "https://telehealthfx.com/locations/pueblo"
  }
};
export default function PuebloPage() {
  const jsonLd = {"@context": "https://schema.org", "@graph": [{"@type": "Organization", "@id": "https://telehealthfx.com/#organization", "name": "Telehealth FX", "url": "https://telehealthfx.com", "logo": {"@type": "ImageObject", "url": "https://telehealthfx.com/logo.png"}, "sameAs": []}, {"@type": "WebSite", "@id": "https://telehealthfx.com/#website", "url": "https://telehealthfx.com", "name": "Telehealth FX", "publisher": {"@id": "https://telehealthfx.com/#organization"}}, {"@type": "BreadcrumbList", "@id": "https://telehealthfx.com/locations/pueblo#breadcrumb", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "Home", "item": "https://telehealthfx.com"}, {"@type": "ListItem", "position": 2, "name": "Locations", "item": "https://telehealthfx.com/locations"}, {"@type": "ListItem", "position": 3, "name": "Pueblo", "item": "https://telehealthfx.com/locations/pueblo"}]}, {"@type": "MedicalWebPage", "@id": "https://telehealthfx.com/locations/pueblo#webpage", "url": "https://telehealthfx.com/locations/pueblo", "name": "GLP-1 Weight Loss in Pueblo | Telehealth FX", "description": "FDA-compliant compounded Semaglutide and Tirzepatide prescribed by Colorado-licensed physicians in Pueblo. From $146/mo with overnight delivery.", "isPartOf": {"@id": "https://telehealthfx.com/#website"}, "breadcrumb": {"@id": "https://telehealthfx.com/locations/pueblo#breadcrumb"}, "inLanguage": "en-US", "medicalAudience": {"@type": "MedicalAudience", "audienceType": "Patient"}, "lastReviewed": "2026-05-01", "reviewedBy": {"@type": "Organization", "name": "Telehealth FX Clinical Team"}}, {"@type": "MedicalClinic", "@id": "https://telehealthfx.com/locations/pueblo#clinic", "name": "Telehealth FX - Pueblo", "url": "https://telehealthfx.com/locations/pueblo", "telephone": "+1-800-TELEHEALTH", "areaServed": {"@type": "City", "name": "Pueblo", "containedInPlace": {"@type": "State", "name": "Colorado"}}, "medicalSpecialty": "Endocrine", "isAcceptingNewPatients": true, "availableService": {"@type": "MedicalTherapy", "name": "GLP-1 Receptor Agonist Therapy", "alternateName": "Compounded Semaglutide / Tirzepatide", "medicineSystem": "WesternConventional", "relevantSpecialty": "Endocrine"}, "currenciesAccepted": "USD", "paymentAccepted": "Credit Card, HSA, FSA", "priceRange": "$146-$349/mo", "geo": {"@type": "GeoCoordinates", "latitude": 38.2544, "longitude": -104.6091}}, {"@type": "Service", "@id": "https://telehealthfx.com/locations/pueblo#service", "name": "GLP-1 Weight Loss Program - Pueblo", "description": "Clinical telehealth weight loss program delivering compounded Semaglutide and Tirzepatide to Pueblo, Colorado residents. Includes physician evaluation, prescription, and cold-shipped medication.", "provider": {"@id": "https://telehealthfx.com/locations/pueblo#clinic"}, "areaServed": {"@type": "City", "name": "Pueblo", "containedInPlace": {"@type": "State", "name": "Colorado"}}, "serviceType": "Telehealth Weight Management", "offers": {"@type": "Offer", "price": "146", "priceCurrency": "USD", "priceValidUntil": "2026-12-31", "availability": "https://schema.org/InStock", "url": "https://go.telehealthfx.com/start", "description": "Monthly compounded GLP-1 program with physician oversight"}}, {"@type": "FAQPage", "@id": "https://telehealthfx.com/locations/pueblo#faq", "mainEntity": [{"@type": "Question", "name": "I work rotating shifts at the mill. When?", "acceptedAnswer": {"@type": "Answer", "text": "Anytime. Fully asynchronous—complete between shifts."}}, {"@type": "Question", "name": "Do you deliver to Pueblo West and Cañon City?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. All Pueblo and Fremont County addresses."}}]}]};
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <LocationPueblo />
    </>
  );
}
