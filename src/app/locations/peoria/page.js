import { LocationPeoria } from "../../../components/location-peoria";
export const metadata = {
  robots: { index: true, follow: true },
  title: "GLP-1 Weight Loss in Peoria | Telehealth FX",
  description: "FDA-compliant compounded Semaglutide prescribed by Illinois-licensed physicians in Peoria. From $146/mo with overnight cold-pack delivery.",
  openGraph: {
    title: "GLP-1 Weight Loss in Peoria | Telehealth FX",
    description: "Clinical GLP-1 telehealth for Peoria, Illinois residents. Illinois-licensed physicians. From $146/mo.",
    url: "https://telehealthfx.com/locations/peoria",
    siteName: "Telehealth FX",
    type: "website"
  },
  alternates: {
    canonical: 'https://telehealthfx.com/locations/peoria/'
  }
};
export default function PeoriaPage() {
  const jsonLd = {"@context": "https://schema.org", "@graph": [{"@type": "Organization", "@id": "https://telehealthfx.com/#organization", "name": "Telehealth FX", "url": "https://telehealthfx.com", "logo": {"@type": "ImageObject", "url": "https://telehealthfx.com/logo.png"}, "sameAs": []}, {"@type": "WebSite", "@id": "https://telehealthfx.com/#website", "url": "https://telehealthfx.com", "name": "Telehealth FX", "publisher": {"@id": "https://telehealthfx.com/#organization"}}, {"@type": "BreadcrumbList", "@id": "https://telehealthfx.com/locations/peoria#breadcrumb", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "Home", "item": "https://telehealthfx.com"}, {"@type": "ListItem", "position": 2, "name": "Locations", "item": "https://telehealthfx.com/locations"}, {"@type": "ListItem", "position": 3, "name": "Peoria", "item": "https://telehealthfx.com/locations/peoria"}]}, {"@type": "MedicalWebPage", "@id": "https://telehealthfx.com/locations/peoria#webpage", "url": "https://telehealthfx.com/locations/peoria", "name": "GLP-1 Weight Loss in Peoria | Telehealth FX", "description": "FDA-compliant compounded Semaglutide and Tirzepatide prescribed by Illinois-licensed physicians in Peoria. From $146/mo with overnight delivery.", "isPartOf": {"@id": "https://telehealthfx.com/#website"}, "breadcrumb": {"@id": "https://telehealthfx.com/locations/peoria#breadcrumb"}, "inLanguage": "en-US", "medicalAudience": {"@type": "MedicalAudience", "audienceType": "Patient"}, "lastReviewed": "2026-05-01", "reviewedBy": {"@type": "Organization", "name": "Telehealth FX Clinical Team"}}, {"@type": "MedicalClinic", "@id": "https://telehealthfx.com/locations/peoria#clinic", "name": "Telehealth FX - Peoria", "url": "https://telehealthfx.com/locations/peoria", "telephone": "+1-800-TELEHEALTH", "areaServed": {"@type": "City", "name": "Peoria", "containedInPlace": {"@type": "State", "name": "Illinois"}}, "medicalSpecialty": "Endocrine", "isAcceptingNewPatients": true, "availableService": {"@type": "MedicalTherapy", "name": "GLP-1 Receptor Agonist Therapy", "alternateName": "Compounded Semaglutide / Tirzepatide", "medicineSystem": "WesternConventional", "relevantSpecialty": "Endocrine"}, "currenciesAccepted": "USD", "paymentAccepted": "Credit Card, HSA, FSA", "priceRange": "$146-$349/mo", "geo": {"@type": "GeoCoordinates", "latitude": 40.6936, "longitude": -89.589}}, {"@type": "Service", "@id": "https://telehealthfx.com/locations/peoria#service", "name": "GLP-1 Weight Loss Program - Peoria", "description": "Clinical telehealth weight loss program delivering compounded Semaglutide and Tirzepatide to Peoria, Illinois residents. Includes physician evaluation, prescription, and cold-shipped medication.", "provider": {"@id": "https://telehealthfx.com/locations/peoria#clinic"}, "areaServed": {"@type": "City", "name": "Peoria", "containedInPlace": {"@type": "State", "name": "Illinois"}}, "serviceType": "Telehealth Weight Management", "offers": {"@type": "Offer", "price": "146", "priceCurrency": "USD", "priceValidUntil": "2026-12-31", "availability": "https://schema.org/InStock", "url": "https://go.telehealthfx.com/start", "description": "Monthly compounded GLP-1 program with physician oversight"}}, {"@type": "FAQPage", "@id": "https://telehealthfx.com/locations/peoria#faq", "mainEntity": [{"@type": "Question", "name": "I work at Caterpillar. Is this separate?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. Telehealth FX is independent of your CAT benefits."}}, {"@type": "Question", "name": "Do you deliver to East Peoria, Morton, and Bloomington?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. All Peoria, Tazewell, and McLean County addresses."}}]}]};
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <LocationPeoria />
    </>
  );
}
