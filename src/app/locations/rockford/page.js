import { LocationRockford } from "../../../components/location-rockford";
export const metadata = {
  robots: { index: true, follow: true },
  title: "GLP-1 Weight Loss in Rockford | Telehealth FX",
  description: "quality-verified compounded Semaglutide prescribed by Illinois-licensed physicians in Rockford. From $146/mo with overnight cold-pack delivery.",
  openGraph: {
    title: "GLP-1 Weight Loss in Rockford | Telehealth FX",
    description: "Clinical GLP-1 telehealth for Rockford, Illinois residents. Illinois-licensed physicians. From $146/mo.",
    url: "https://telehealthfx.com/locations/rockford",
    siteName: "Telehealth FX",
    type: "website"
  },
  alternates: {
    canonical: 'https://telehealthfx.com/locations/rockford/'
  }
};
export default function RockfordPage() {
  const jsonLd = {"@context": "https://schema.org", "@graph": [{"@type": "Organization", "@id": "https://telehealthfx.com/#organization", "name": "Telehealth FX", "url": "https://telehealthfx.com", "logo": {"@type": "ImageObject", "url": "https://telehealthfx.com/logo.png"}, "sameAs": []}, {"@type": "WebSite", "@id": "https://telehealthfx.com/#website", "url": "https://telehealthfx.com", "name": "Telehealth FX", "publisher": {"@id": "https://telehealthfx.com/#organization"}}, {"@type": "BreadcrumbList", "@id": "https://telehealthfx.com/locations/rockford#breadcrumb", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "Home", "item": "https://telehealthfx.com"}, {"@type": "ListItem", "position": 2, "name": "Locations", "item": "https://telehealthfx.com/locations"}, {"@type": "ListItem", "position": 3, "name": "Rockford", "item": "https://telehealthfx.com/locations/rockford"}]}, {"@type": "MedicalWebPage", "@id": "https://telehealthfx.com/locations/rockford#webpage", "url": "https://telehealthfx.com/locations/rockford", "name": "GLP-1 Weight Loss in Rockford | Telehealth FX", "description": "quality-verified compounded Semaglutide and Tirzepatide prescribed by Illinois-licensed physicians in Rockford. From $146/mo with overnight delivery.", "isPartOf": {"@id": "https://telehealthfx.com/#website"}, "breadcrumb": {"@id": "https://telehealthfx.com/locations/rockford#breadcrumb"}, "inLanguage": "en-US", "medicalAudience": {"@type": "MedicalAudience", "audienceType": "Patient"}, "lastReviewed": "2026-05-01", "reviewedBy": {"@type": "Organization", "name": "Telehealth FX Clinical Team"}}, {"@type": "MedicalClinic", "@id": "https://telehealthfx.com/locations/rockford#clinic", "name": "Telehealth FX - Rockford", "url": "https://telehealthfx.com/locations/rockford", "telephone": "+1-800-TELEHEALTH", "areaServed": {"@type": "City", "name": "Rockford", "containedInPlace": {"@type": "State", "name": "Illinois"}}, "medicalSpecialty": "Endocrine", "isAcceptingNewPatients": true, "availableService": {"@type": "MedicalTherapy", "name": "GLP-1 Receptor Agonist Therapy", "alternateName": "Compounded Semaglutide / Tirzepatide", "medicineSystem": "WesternConventional", "relevantSpecialty": "Endocrine"}, "currenciesAccepted": "USD", "paymentAccepted": "Credit Card, HSA, FSA", "priceRange": "$146-$349/mo", "geo": {"@type": "GeoCoordinates", "latitude": 42.2711, "longitude": -89.094}}, {"@type": "Service", "@id": "https://telehealthfx.com/locations/rockford#service", "name": "GLP-1 Weight Loss Program - Rockford", "description": "Clinical telehealth weight loss program delivering compounded Semaglutide and Tirzepatide to Rockford, Illinois residents. Includes physician evaluation, prescription, and cold-shipped medication.", "provider": {"@id": "https://telehealthfx.com/locations/rockford#clinic"}, "areaServed": {"@type": "City", "name": "Rockford", "containedInPlace": {"@type": "State", "name": "Illinois"}}, "serviceType": "Telehealth Weight Management", "offers": {"@type": "Offer", "price": "146", "priceCurrency": "USD", "priceValidUntil": "2026-12-31", "availability": "https://schema.org/InStock", "url": "https://go.telehealthfx.com/start", "description": "Monthly compounded GLP-1 program with physician oversight"}}, {"@type": "FAQPage", "@id": "https://telehealthfx.com/locations/rockford#faq", "mainEntity": [{"@type": "Question", "name": "I work rotating shifts at Collins. When?", "acceptedAnswer": {"@type": "Answer", "text": "Anytime. Fully asynchronous."}}, {"@type": "Question", "name": "Do you deliver to Belvidere, Loves Park, and Machesney Park?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. All Winnebago, Boone, and Ogle County addresses."}}]}]};
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <LocationRockford />
    </>
  );
}
