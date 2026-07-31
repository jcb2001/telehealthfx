import { LocationProvidence } from "../../../components/location-providence";
export const metadata = {
  robots: { index: true, follow: true },
  title: "GLP-1 Weight Loss in Providence | Telehealth FX",
  description: "quality-verified compounded Semaglutide prescribed by Rhode Island-licensed physicians in Providence. From $146/mo with overnight cold-pack delivery.",
  openGraph: {
    title: "GLP-1 Weight Loss in Providence | Telehealth FX",
    description: "Clinical GLP-1 telehealth for Providence, Rhode Island residents. Rhode Island-licensed physicians. From $146/mo.",
    url: "https://telehealthfx.com/locations/providence",
    siteName: "Telehealth FX",
    type: "website"
  },
  alternates: {
    canonical: 'https://telehealthfx.com/locations/providence/'
  }
};
export default function ProvidencePage() {
  const jsonLd = {"@context": "https://schema.org", "@graph": [{"@type": "Organization", "@id": "https://telehealthfx.com/#organization", "name": "Telehealth FX", "url": "https://telehealthfx.com", "logo": {"@type": "ImageObject", "url": "https://telehealthfx.com/logo.png"}, "sameAs": []}, {"@type": "WebSite", "@id": "https://telehealthfx.com/#website", "url": "https://telehealthfx.com", "name": "Telehealth FX", "publisher": {"@id": "https://telehealthfx.com/#organization"}}, {"@type": "BreadcrumbList", "@id": "https://telehealthfx.com/locations/providence#breadcrumb", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "Home", "item": "https://telehealthfx.com"}, {"@type": "ListItem", "position": 2, "name": "Locations", "item": "https://telehealthfx.com/locations"}, {"@type": "ListItem", "position": 3, "name": "Providence", "item": "https://telehealthfx.com/locations/providence"}]}, {"@type": "MedicalWebPage", "@id": "https://telehealthfx.com/locations/providence#webpage", "url": "https://telehealthfx.com/locations/providence", "name": "GLP-1 Weight Loss in Providence | Telehealth FX", "description": "quality-verified compounded Semaglutide and Tirzepatide prescribed by Rhode Island-licensed physicians in Providence. From $146/mo with overnight delivery.", "isPartOf": {"@id": "https://telehealthfx.com/#website"}, "breadcrumb": {"@id": "https://telehealthfx.com/locations/providence#breadcrumb"}, "inLanguage": "en-US", "medicalAudience": {"@type": "MedicalAudience", "audienceType": "Patient"}, "lastReviewed": "2026-05-01", "reviewedBy": {"@type": "Organization", "name": "Telehealth FX Clinical Team"}}, {"@type": "MedicalClinic", "@id": "https://telehealthfx.com/locations/providence#clinic", "name": "Telehealth FX - Providence", "url": "https://telehealthfx.com/locations/providence", "telephone": "+1-800-TELEHEALTH", "areaServed": {"@type": "City", "name": "Providence", "containedInPlace": {"@type": "State", "name": "Rhode Island"}}, "medicalSpecialty": "Endocrine", "isAcceptingNewPatients": true, "availableService": {"@type": "MedicalTherapy", "name": "GLP-1 Receptor Agonist Therapy", "alternateName": "Compounded Semaglutide / Tirzepatide", "medicineSystem": "WesternConventional", "relevantSpecialty": "Endocrine"}, "currenciesAccepted": "USD", "paymentAccepted": "Credit Card, HSA, FSA", "priceRange": "$146-$349/mo", "geo": {"@type": "GeoCoordinates", "latitude": 41.824, "longitude": -71.4128}}, {"@type": "Service", "@id": "https://telehealthfx.com/locations/providence#service", "name": "GLP-1 Weight Loss Program - Providence", "description": "Clinical telehealth weight loss program delivering compounded Semaglutide and Tirzepatide to Providence, Rhode Island residents. Includes physician evaluation, prescription, and cold-shipped medication.", "provider": {"@id": "https://telehealthfx.com/locations/providence#clinic"}, "areaServed": {"@type": "City", "name": "Providence", "containedInPlace": {"@type": "State", "name": "Rhode Island"}}, "serviceType": "Telehealth Weight Management", "offers": {"@type": "Offer", "price": "146", "priceCurrency": "USD", "priceValidUntil": "2026-12-31", "availability": "https://schema.org/InStock", "url": "https://go.telehealthfx.com/start", "description": "Monthly compounded GLP-1 program with physician oversight"}}, {"@type": "FAQPage", "@id": "https://telehealthfx.com/locations/providence#faq", "mainEntity": [{"@type": "Question", "name": "I work at CVS. Is this a conflict?", "acceptedAnswer": {"@type": "Answer", "text": "No. Telehealth FX is independent of your employer and your employer's PBM."}}, {"@type": "Question", "name": "Do you deliver to Cranston, Warwick, and East Providence?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. All Rhode Island addresses."}}]}]};
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <LocationProvidence />
    </>
  );
}
