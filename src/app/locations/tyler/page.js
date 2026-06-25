import { LocationTyler } from "../../../components/location-tyler";
export const metadata = {
  title: "GLP-1 Weight Loss in Tyler | Telehealth FX",
  description: "FDA-compliant compounded Semaglutide prescribed by Texas-licensed physicians in Tyler. From $146/mo with overnight cold-pack delivery.",
  openGraph: {
    title: "GLP-1 Weight Loss in Tyler | Telehealth FX",
    description: "Clinical GLP-1 telehealth for Tyler, Texas residents. Texas-licensed physicians. From $146/mo.",
    url: "https://telehealthfx.com/locations/tyler",
    siteName: "Telehealth FX",
    type: "website"
  },
  alternates: {
    canonical: 'https://telehealthfx.com/locations/tyler/'
  }
};
export default function TylerPage() {
  const jsonLd = {"@context": "https://schema.org", "@graph": [{"@type": "Organization", "@id": "https://telehealthfx.com/#organization", "name": "Telehealth FX", "url": "https://telehealthfx.com", "logo": {"@type": "ImageObject", "url": "https://telehealthfx.com/logo.png"}, "sameAs": []}, {"@type": "WebSite", "@id": "https://telehealthfx.com/#website", "url": "https://telehealthfx.com", "name": "Telehealth FX", "publisher": {"@id": "https://telehealthfx.com/#organization"}}, {"@type": "BreadcrumbList", "@id": "https://telehealthfx.com/locations/tyler#breadcrumb", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "Home", "item": "https://telehealthfx.com"}, {"@type": "ListItem", "position": 2, "name": "Locations", "item": "https://telehealthfx.com/locations"}, {"@type": "ListItem", "position": 3, "name": "Tyler", "item": "https://telehealthfx.com/locations/tyler"}]}, {"@type": "MedicalWebPage", "@id": "https://telehealthfx.com/locations/tyler#webpage", "url": "https://telehealthfx.com/locations/tyler", "name": "GLP-1 Weight Loss in Tyler | Telehealth FX", "description": "FDA-compliant compounded Semaglutide and Tirzepatide prescribed by Texas-licensed physicians in Tyler. From $146/mo with overnight delivery.", "isPartOf": {"@id": "https://telehealthfx.com/#website"}, "breadcrumb": {"@id": "https://telehealthfx.com/locations/tyler#breadcrumb"}, "inLanguage": "en-US", "medicalAudience": {"@type": "MedicalAudience", "audienceType": "Patient"}, "lastReviewed": "2026-05-01", "reviewedBy": {"@type": "Organization", "name": "Telehealth FX Clinical Team"}}, {"@type": "MedicalClinic", "@id": "https://telehealthfx.com/locations/tyler#clinic", "name": "Telehealth FX - Tyler", "url": "https://telehealthfx.com/locations/tyler", "telephone": "+1-800-TELEHEALTH", "areaServed": {"@type": "City", "name": "Tyler", "containedInPlace": {"@type": "State", "name": "Texas"}}, "medicalSpecialty": "Endocrine", "isAcceptingNewPatients": true, "availableService": {"@type": "MedicalTherapy", "name": "GLP-1 Receptor Agonist Therapy", "alternateName": "Compounded Semaglutide / Tirzepatide", "medicineSystem": "WesternConventional", "relevantSpecialty": "Endocrine"}, "currenciesAccepted": "USD", "paymentAccepted": "Credit Card, HSA, FSA", "priceRange": "$146-$349/mo", "geo": {"@type": "GeoCoordinates", "latitude": 32.3513, "longitude": -95.3011}}, {"@type": "Service", "@id": "https://telehealthfx.com/locations/tyler#service", "name": "GLP-1 Weight Loss Program - Tyler", "description": "Clinical telehealth weight loss program delivering compounded Semaglutide and Tirzepatide to Tyler, Texas residents. Includes physician evaluation, prescription, and cold-shipped medication.", "provider": {"@id": "https://telehealthfx.com/locations/tyler#clinic"}, "areaServed": {"@type": "City", "name": "Tyler", "containedInPlace": {"@type": "State", "name": "Texas"}}, "serviceType": "Telehealth Weight Management", "offers": {"@type": "Offer", "price": "146", "priceCurrency": "USD", "priceValidUntil": "2026-12-31", "availability": "https://schema.org/InStock", "url": "https://go.telehealthfx.com/start", "description": "Monthly compounded GLP-1 program with physician oversight"}}, {"@type": "FAQPage", "@id": "https://telehealthfx.com/locations/tyler#faq", "mainEntity": [{"@type": "Question", "name": "I work at the hospital. Can I really get this faster than through my own employer?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. Our process bypasses your hospital's PBM Step Therapy entirely."}}, {"@type": "Question", "name": "Do you deliver to Longview, Jacksonville, and Whitehouse?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. All Smith, Gregg, and Cherokee County addresses."}}]}]};
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <LocationTyler />
    </>
  );
}
