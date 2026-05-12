import { LocationDurham } from "../../../components/location-durham";
export const metadata = {
  title: "GLP-1 Weight Loss in Durham | Telehealth FX",
  description: "FDA-compliant compounded Semaglutide prescribed by North Carolina-licensed physicians in Durham. From $146/mo with overnight cold-pack delivery.",
  openGraph: {
    title: "GLP-1 Weight Loss in Durham | Telehealth FX",
    description: "Clinical GLP-1 telehealth for Durham, North Carolina residents. North Carolina-licensed physicians. From $146/mo.",
    url: "https://telehealthfx.com/locations/durham",
    siteName: "Telehealth FX",
    type: "website"
  },
  alternates: {
    canonical: "https://telehealthfx.com/locations/durham"
  }
};
export default function DurhamPage() {
  const jsonLd = {"@context": "https://schema.org", "@graph": [{"@type": "Organization", "@id": "https://telehealthfx.com/#organization", "name": "Telehealth FX", "url": "https://telehealthfx.com", "logo": {"@type": "ImageObject", "url": "https://telehealthfx.com/logo.png"}, "sameAs": []}, {"@type": "WebSite", "@id": "https://telehealthfx.com/#website", "url": "https://telehealthfx.com", "name": "Telehealth FX", "publisher": {"@id": "https://telehealthfx.com/#organization"}}, {"@type": "BreadcrumbList", "@id": "https://telehealthfx.com/locations/durham#breadcrumb", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "Home", "item": "https://telehealthfx.com"}, {"@type": "ListItem", "position": 2, "name": "Locations", "item": "https://telehealthfx.com/locations"}, {"@type": "ListItem", "position": 3, "name": "Durham", "item": "https://telehealthfx.com/locations/durham"}]}, {"@type": "MedicalWebPage", "@id": "https://telehealthfx.com/locations/durham#webpage", "url": "https://telehealthfx.com/locations/durham", "name": "GLP-1 Weight Loss in Durham | Telehealth FX", "description": "FDA-compliant compounded Semaglutide and Tirzepatide prescribed by North Carolina-licensed physicians in Durham. From $146/mo with overnight delivery.", "isPartOf": {"@id": "https://telehealthfx.com/#website"}, "breadcrumb": {"@id": "https://telehealthfx.com/locations/durham#breadcrumb"}, "inLanguage": "en-US", "medicalAudience": {"@type": "MedicalAudience", "audienceType": "Patient"}, "lastReviewed": "2026-05-01", "reviewedBy": {"@type": "Organization", "name": "Telehealth FX Clinical Team"}}, {"@type": "MedicalClinic", "@id": "https://telehealthfx.com/locations/durham#clinic", "name": "Telehealth FX - Durham", "url": "https://telehealthfx.com/locations/durham", "telephone": "+1-800-TELEHEALTH", "areaServed": {"@type": "City", "name": "Durham", "containedInPlace": {"@type": "State", "name": "North Carolina"}}, "medicalSpecialty": "Endocrine", "isAcceptingNewPatients": true, "availableService": {"@type": "MedicalTherapy", "name": "GLP-1 Receptor Agonist Therapy", "alternateName": "Compounded Semaglutide / Tirzepatide", "medicineSystem": "WesternConventional", "relevantSpecialty": "Endocrine"}, "currenciesAccepted": "USD", "paymentAccepted": "Credit Card, HSA, FSA", "priceRange": "$146-$349/mo", "geo": {"@type": "GeoCoordinates", "latitude": 35.994, "longitude": -78.8986}}, {"@type": "Service", "@id": "https://telehealthfx.com/locations/durham#service", "name": "GLP-1 Weight Loss Program - Durham", "description": "Clinical telehealth weight loss program delivering compounded Semaglutide and Tirzepatide to Durham, North Carolina residents. Includes physician evaluation, prescription, and cold-shipped medication.", "provider": {"@id": "https://telehealthfx.com/locations/durham#clinic"}, "areaServed": {"@type": "City", "name": "Durham", "containedInPlace": {"@type": "State", "name": "North Carolina"}}, "serviceType": "Telehealth Weight Management", "offers": {"@type": "Offer", "price": "146", "priceCurrency": "USD", "priceValidUntil": "2026-12-31", "availability": "https://schema.org/InStock", "url": "https://go.telehealthfx.com/start", "description": "Monthly compounded GLP-1 program with physician oversight"}}, {"@type": "FAQPage", "@id": "https://telehealthfx.com/locations/durham#faq", "mainEntity": [{"@type": "Question", "name": "I work in pharma. I know these drugs. Why can't I get them?", "acceptedAnswer": {"@type": "Answer", "text": "Your insurance's PBM restrictions exist regardless of your expertise. Telehealth FX bypasses the formulary."}}, {"@type": "Question", "name": "Do you deliver to Chapel Hill and Cary?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. All Durham, Orange, and Wake County addresses."}}]}]};
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <LocationDurham />
    </>
  );
}
