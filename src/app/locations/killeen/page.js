import { LocationKilleen } from "../../../components/location-killeen";
export const metadata = {
  robots: { index: true, follow: true },
  title: "GLP-1 Weight Loss in Killeen | Telehealth FX",
  description: "quality-verified compounded Semaglutide prescribed by Texas-licensed physicians in Killeen. From $146/mo with overnight cold-pack delivery.",
  openGraph: {
    title: "GLP-1 Weight Loss in Killeen | Telehealth FX",
    description: "Clinical GLP-1 telehealth for Killeen, Texas residents. Texas-licensed physicians. From $146/mo.",
    url: "https://telehealthfx.com/locations/killeen",
    siteName: "Telehealth FX",
    type: "website"
  },
  alternates: {
    canonical: 'https://telehealthfx.com/locations/killeen/'
  }
};
export default function KilleenPage() {
  const jsonLd = {"@context": "https://schema.org", "@graph": [{"@type": "Organization", "@id": "https://telehealthfx.com/#organization", "name": "Telehealth FX", "url": "https://telehealthfx.com", "logo": {"@type": "ImageObject", "url": "https://telehealthfx.com/logo.png"}, "sameAs": []}, {"@type": "WebSite", "@id": "https://telehealthfx.com/#website", "url": "https://telehealthfx.com", "name": "Telehealth FX", "publisher": {"@id": "https://telehealthfx.com/#organization"}}, {"@type": "BreadcrumbList", "@id": "https://telehealthfx.com/locations/killeen#breadcrumb", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "Home", "item": "https://telehealthfx.com"}, {"@type": "ListItem", "position": 2, "name": "Locations", "item": "https://telehealthfx.com/locations"}, {"@type": "ListItem", "position": 3, "name": "Killeen", "item": "https://telehealthfx.com/locations/killeen"}]}, {"@type": "MedicalWebPage", "@id": "https://telehealthfx.com/locations/killeen#webpage", "url": "https://telehealthfx.com/locations/killeen", "name": "GLP-1 Weight Loss in Killeen | Telehealth FX", "description": "quality-verified compounded Semaglutide and Tirzepatide prescribed by Texas-licensed physicians in Killeen. From $146/mo with overnight delivery.", "isPartOf": {"@id": "https://telehealthfx.com/#website"}, "breadcrumb": {"@id": "https://telehealthfx.com/locations/killeen#breadcrumb"}, "inLanguage": "en-US", "medicalAudience": {"@type": "MedicalAudience", "audienceType": "Patient"}, "lastReviewed": "2026-05-01", "reviewedBy": {"@type": "Organization", "name": "Telehealth FX Clinical Team"}}, {"@type": "MedicalClinic", "@id": "https://telehealthfx.com/locations/killeen#clinic", "name": "Telehealth FX - Killeen", "url": "https://telehealthfx.com/locations/killeen", "telephone": "+1-800-TELEHEALTH", "areaServed": {"@type": "City", "name": "Killeen", "containedInPlace": {"@type": "State", "name": "Texas"}}, "medicalSpecialty": "Endocrine", "isAcceptingNewPatients": true, "availableService": {"@type": "MedicalTherapy", "name": "GLP-1 Receptor Agonist Therapy", "alternateName": "Compounded Semaglutide / Tirzepatide", "medicineSystem": "WesternConventional", "relevantSpecialty": "Endocrine"}, "currenciesAccepted": "USD", "paymentAccepted": "Credit Card, HSA, FSA", "priceRange": "$146-$349/mo", "geo": {"@type": "GeoCoordinates", "latitude": 31.1171, "longitude": -97.7278}}, {"@type": "Service", "@id": "https://telehealthfx.com/locations/killeen#service", "name": "GLP-1 Weight Loss Program - Killeen", "description": "Clinical telehealth weight loss program delivering compounded Semaglutide and Tirzepatide to Killeen, Texas residents. Includes physician evaluation, prescription, and cold-shipped medication.", "provider": {"@id": "https://telehealthfx.com/locations/killeen#clinic"}, "areaServed": {"@type": "City", "name": "Killeen", "containedInPlace": {"@type": "State", "name": "Texas"}}, "serviceType": "Telehealth Weight Management", "offers": {"@type": "Offer", "price": "146", "priceCurrency": "USD", "priceValidUntil": "2026-12-31", "availability": "https://schema.org/InStock", "url": "https://go.telehealthfx.com/start", "description": "Monthly compounded GLP-1 program with physician oversight"}}, {"@type": "FAQPage", "@id": "https://telehealthfx.com/locations/killeen#faq", "mainEntity": [{"@type": "Question", "name": "My spouse is deployed. Can I start?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. Military spouses use Telehealth FX independently."}}, {"@type": "Question", "name": "Do you deliver on post?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. All Fort Cavazos and Killeen addresses."}}]}]};
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <LocationKilleen />
    </>
  );
}
