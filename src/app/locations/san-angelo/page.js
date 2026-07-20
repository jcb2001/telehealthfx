import { LocationSanAngelo } from "../../../components/location-san-angelo";
export const metadata = {
  robots: { index: true, follow: true },
  title: "GLP-1 Weight Loss in San Angelo | Telehealth FX",
  description: "FDA-compliant compounded Semaglutide prescribed by Texas-licensed physicians in San Angelo. From $146/mo with overnight cold-pack delivery.",
  openGraph: {
    title: "GLP-1 Weight Loss in San Angelo | Telehealth FX",
    description: "Clinical GLP-1 telehealth for San Angelo, Texas residents. Texas-licensed physicians. From $146/mo.",
    url: "https://telehealthfx.com/locations/san-angelo",
    siteName: "Telehealth FX",
    type: "website"
  },
  alternates: {
    canonical: 'https://telehealthfx.com/locations/san-angelo/'
  }
};
export default function SanAngeloPage() {
  const jsonLd = {"@context": "https://schema.org", "@graph": [{"@type": "Organization", "@id": "https://telehealthfx.com/#organization", "name": "Telehealth FX", "url": "https://telehealthfx.com", "logo": {"@type": "ImageObject", "url": "https://telehealthfx.com/logo.png"}, "sameAs": []}, {"@type": "WebSite", "@id": "https://telehealthfx.com/#website", "url": "https://telehealthfx.com", "name": "Telehealth FX", "publisher": {"@id": "https://telehealthfx.com/#organization"}}, {"@type": "BreadcrumbList", "@id": "https://telehealthfx.com/locations/san-angelo#breadcrumb", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "Home", "item": "https://telehealthfx.com"}, {"@type": "ListItem", "position": 2, "name": "Locations", "item": "https://telehealthfx.com/locations"}, {"@type": "ListItem", "position": 3, "name": "San Angelo", "item": "https://telehealthfx.com/locations/san-angelo"}]}, {"@type": "MedicalWebPage", "@id": "https://telehealthfx.com/locations/san-angelo#webpage", "url": "https://telehealthfx.com/locations/san-angelo", "name": "GLP-1 Weight Loss in San Angelo | Telehealth FX", "description": "FDA-compliant compounded Semaglutide and Tirzepatide prescribed by Texas-licensed physicians in San Angelo. From $146/mo with overnight delivery.", "isPartOf": {"@id": "https://telehealthfx.com/#website"}, "breadcrumb": {"@id": "https://telehealthfx.com/locations/san-angelo#breadcrumb"}, "inLanguage": "en-US", "medicalAudience": {"@type": "MedicalAudience", "audienceType": "Patient"}, "lastReviewed": "2026-05-01", "reviewedBy": {"@type": "Organization", "name": "Telehealth FX Clinical Team"}}, {"@type": "MedicalClinic", "@id": "https://telehealthfx.com/locations/san-angelo#clinic", "name": "Telehealth FX - San Angelo", "url": "https://telehealthfx.com/locations/san-angelo", "telephone": "+1-800-TELEHEALTH", "areaServed": {"@type": "City", "name": "San Angelo", "containedInPlace": {"@type": "State", "name": "Texas"}}, "medicalSpecialty": "Endocrine", "isAcceptingNewPatients": true, "availableService": {"@type": "MedicalTherapy", "name": "GLP-1 Receptor Agonist Therapy", "alternateName": "Compounded Semaglutide / Tirzepatide", "medicineSystem": "WesternConventional", "relevantSpecialty": "Endocrine"}, "currenciesAccepted": "USD", "paymentAccepted": "Credit Card, HSA, FSA", "priceRange": "$146-$349/mo", "geo": {"@type": "GeoCoordinates", "latitude": 31.4638, "longitude": -100.437}}, {"@type": "Service", "@id": "https://telehealthfx.com/locations/san-angelo#service", "name": "GLP-1 Weight Loss Program - San Angelo", "description": "Clinical telehealth weight loss program delivering compounded Semaglutide and Tirzepatide to San Angelo, Texas residents. Includes physician evaluation, prescription, and cold-shipped medication.", "provider": {"@id": "https://telehealthfx.com/locations/san-angelo#clinic"}, "areaServed": {"@type": "City", "name": "San Angelo", "containedInPlace": {"@type": "State", "name": "Texas"}}, "serviceType": "Telehealth Weight Management", "offers": {"@type": "Offer", "price": "146", "priceCurrency": "USD", "priceValidUntil": "2026-12-31", "availability": "https://schema.org/InStock", "url": "https://go.telehealthfx.com/start", "description": "Monthly compounded GLP-1 program with physician oversight"}}, {"@type": "FAQPage", "@id": "https://telehealthfx.com/locations/san-angelo#faq", "mainEntity": [{"@type": "Question", "name": "I work in a SCIF. Is this confidential?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. Completely independent of your military/intelligence employer."}}, {"@type": "Question", "name": "Do you deliver to Goodfellow and Christoval?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. All Tom Green County addresses."}}]}]};
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <LocationSanAngelo />
    </>
  );
}
