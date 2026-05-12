import { LocationBeaumont } from "../../../components/location-beaumont";
export const metadata = {
  title: "GLP-1 Weight Loss in Beaumont | Telehealth FX",
  description: "FDA-compliant compounded Semaglutide prescribed by Texas-licensed physicians in Beaumont. From $146/mo with overnight cold-pack delivery.",
  openGraph: {
    title: "GLP-1 Weight Loss in Beaumont | Telehealth FX",
    description: "Clinical GLP-1 telehealth for Beaumont, Texas residents. Texas-licensed physicians. From $146/mo.",
    url: "https://telehealthfx.com/locations/beaumont",
    siteName: "Telehealth FX",
    type: "website"
  },
  alternates: {
    canonical: "https://telehealthfx.com/locations/beaumont"
  }
};
export default function BeaumontPage() {
  const jsonLd = {"@context": "https://schema.org", "@graph": [{"@type": "Organization", "@id": "https://telehealthfx.com/#organization", "name": "Telehealth FX", "url": "https://telehealthfx.com", "logo": {"@type": "ImageObject", "url": "https://telehealthfx.com/logo.png"}, "sameAs": []}, {"@type": "WebSite", "@id": "https://telehealthfx.com/#website", "url": "https://telehealthfx.com", "name": "Telehealth FX", "publisher": {"@id": "https://telehealthfx.com/#organization"}}, {"@type": "BreadcrumbList", "@id": "https://telehealthfx.com/locations/beaumont#breadcrumb", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "Home", "item": "https://telehealthfx.com"}, {"@type": "ListItem", "position": 2, "name": "Locations", "item": "https://telehealthfx.com/locations"}, {"@type": "ListItem", "position": 3, "name": "Beaumont", "item": "https://telehealthfx.com/locations/beaumont"}]}, {"@type": "MedicalWebPage", "@id": "https://telehealthfx.com/locations/beaumont#webpage", "url": "https://telehealthfx.com/locations/beaumont", "name": "GLP-1 Weight Loss in Beaumont | Telehealth FX", "description": "FDA-compliant compounded Semaglutide and Tirzepatide prescribed by Texas-licensed physicians in Beaumont. From $146/mo with overnight delivery.", "isPartOf": {"@id": "https://telehealthfx.com/#website"}, "breadcrumb": {"@id": "https://telehealthfx.com/locations/beaumont#breadcrumb"}, "inLanguage": "en-US", "medicalAudience": {"@type": "MedicalAudience", "audienceType": "Patient"}, "lastReviewed": "2026-05-01", "reviewedBy": {"@type": "Organization", "name": "Telehealth FX Clinical Team"}}, {"@type": "MedicalClinic", "@id": "https://telehealthfx.com/locations/beaumont#clinic", "name": "Telehealth FX - Beaumont", "url": "https://telehealthfx.com/locations/beaumont", "telephone": "+1-800-TELEHEALTH", "areaServed": {"@type": "City", "name": "Beaumont", "containedInPlace": {"@type": "State", "name": "Texas"}}, "medicalSpecialty": "Endocrine", "isAcceptingNewPatients": true, "availableService": {"@type": "MedicalTherapy", "name": "GLP-1 Receptor Agonist Therapy", "alternateName": "Compounded Semaglutide / Tirzepatide", "medicineSystem": "WesternConventional", "relevantSpecialty": "Endocrine"}, "currenciesAccepted": "USD", "paymentAccepted": "Credit Card, HSA, FSA", "priceRange": "$146-$349/mo", "geo": {"@type": "GeoCoordinates", "latitude": 30.0802, "longitude": -94.1266}}, {"@type": "Service", "@id": "https://telehealthfx.com/locations/beaumont#service", "name": "GLP-1 Weight Loss Program - Beaumont", "description": "Clinical telehealth weight loss program delivering compounded Semaglutide and Tirzepatide to Beaumont, Texas residents. Includes physician evaluation, prescription, and cold-shipped medication.", "provider": {"@id": "https://telehealthfx.com/locations/beaumont#clinic"}, "areaServed": {"@type": "City", "name": "Beaumont", "containedInPlace": {"@type": "State", "name": "Texas"}}, "serviceType": "Telehealth Weight Management", "offers": {"@type": "Offer", "price": "146", "priceCurrency": "USD", "priceValidUntil": "2026-12-31", "availability": "https://schema.org/InStock", "url": "https://go.telehealthfx.com/start", "description": "Monthly compounded GLP-1 program with physician oversight"}}, {"@type": "FAQPage", "@id": "https://telehealthfx.com/locations/beaumont#faq", "mainEntity": [{"@type": "Question", "name": "I work rotating 12s at the refinery. When?", "acceptedAnswer": {"@type": "Answer", "text": "Anytime. Fully asynchronous—complete between shifts."}}, {"@type": "Question", "name": "Do you deliver to Port Arthur, Orange, and Nederland?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. All Jefferson, Orange, and Hardin County addresses."}}]}]};
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <LocationBeaumont />
    </>
  );
}
