import { LocationColumbia } from "../../../components/location-columbia";
export const metadata = {
  robots: { index: true, follow: true },
  title: "GLP-1 Weight Loss in Columbia | Telehealth FX",
  description: "quality-verified compounded Semaglutide prescribed by South Carolina-licensed physicians in Columbia. From $146/mo with overnight cold-pack delivery.",
  openGraph: {
    title: "GLP-1 Weight Loss in Columbia | Telehealth FX",
    description: "Clinical GLP-1 telehealth for Columbia, South Carolina residents. South Carolina-licensed physicians. From $146/mo.",
    url: "https://telehealthfx.com/locations/columbia",
    siteName: "Telehealth FX",
    type: "website"
  },
  alternates: {
    canonical: 'https://telehealthfx.com/locations/columbia/'
  }
};
export default function ColumbiaPage() {
  const jsonLd = {"@context": "https://schema.org", "@graph": [{"@type": "Organization", "@id": "https://telehealthfx.com/#organization", "name": "Telehealth FX", "url": "https://telehealthfx.com", "logo": {"@type": "ImageObject", "url": "https://telehealthfx.com/logo.png"}, "sameAs": []}, {"@type": "WebSite", "@id": "https://telehealthfx.com/#website", "url": "https://telehealthfx.com", "name": "Telehealth FX", "publisher": {"@id": "https://telehealthfx.com/#organization"}}, {"@type": "BreadcrumbList", "@id": "https://telehealthfx.com/locations/columbia#breadcrumb", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "Home", "item": "https://telehealthfx.com"}, {"@type": "ListItem", "position": 2, "name": "Locations", "item": "https://telehealthfx.com/locations"}, {"@type": "ListItem", "position": 3, "name": "Columbia", "item": "https://telehealthfx.com/locations/columbia"}]}, {"@type": "MedicalWebPage", "@id": "https://telehealthfx.com/locations/columbia#webpage", "url": "https://telehealthfx.com/locations/columbia", "name": "GLP-1 Weight Loss in Columbia | Telehealth FX", "description": "quality-verified compounded Semaglutide and Tirzepatide prescribed by South Carolina-licensed physicians in Columbia. From $146/mo with overnight delivery.", "isPartOf": {"@id": "https://telehealthfx.com/#website"}, "breadcrumb": {"@id": "https://telehealthfx.com/locations/columbia#breadcrumb"}, "inLanguage": "en-US", "medicalAudience": {"@type": "MedicalAudience", "audienceType": "Patient"}, "lastReviewed": "2026-05-01", "reviewedBy": {"@type": "Organization", "name": "Telehealth FX Clinical Team"}}, {"@type": "MedicalClinic", "@id": "https://telehealthfx.com/locations/columbia#clinic", "name": "Telehealth FX - Columbia", "url": "https://telehealthfx.com/locations/columbia", "telephone": "+1-800-TELEHEALTH", "areaServed": {"@type": "City", "name": "Columbia", "containedInPlace": {"@type": "State", "name": "South Carolina"}}, "medicalSpecialty": "Endocrine", "isAcceptingNewPatients": true, "availableService": {"@type": "MedicalTherapy", "name": "GLP-1 Receptor Agonist Therapy", "alternateName": "Compounded Semaglutide / Tirzepatide", "medicineSystem": "WesternConventional", "relevantSpecialty": "Endocrine"}, "currenciesAccepted": "USD", "paymentAccepted": "Credit Card, HSA, FSA", "priceRange": "$146-$349/mo", "geo": {"@type": "GeoCoordinates", "latitude": 34.0007, "longitude": -81.0348}}, {"@type": "Service", "@id": "https://telehealthfx.com/locations/columbia#service", "name": "GLP-1 Weight Loss Program - Columbia", "description": "Clinical telehealth weight loss program delivering compounded Semaglutide and Tirzepatide to Columbia, South Carolina residents. Includes physician evaluation, prescription, and cold-shipped medication.", "provider": {"@id": "https://telehealthfx.com/locations/columbia#clinic"}, "areaServed": {"@type": "City", "name": "Columbia", "containedInPlace": {"@type": "State", "name": "South Carolina"}}, "serviceType": "Telehealth Weight Management", "offers": {"@type": "Offer", "price": "146", "priceCurrency": "USD", "priceValidUntil": "2026-12-31", "availability": "https://schema.org/InStock", "url": "https://go.telehealthfx.com/start", "description": "Monthly compounded GLP-1 program with physician oversight"}}, {"@type": "FAQPage", "@id": "https://telehealthfx.com/locations/columbia#faq", "mainEntity": [{"@type": "Question", "name": "I'm active duty at Fort Jackson. Will this show up?", "acceptedAnswer": {"@type": "Answer", "text": "Telehealth FX is independent of TRICARE and your military records."}}, {"@type": "Question", "name": "Do you deliver to Lexington, Irmo, and Elgin?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. All Richland and Lexington County addresses."}}]}]};
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <LocationColumbia />
    </>
  );
}
