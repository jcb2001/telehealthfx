import { LocationHonolulu } from "../../../components/location-honolulu";
export const metadata = {
  robots: { index: true, follow: true },
  title: "GLP-1 Weight Loss in Honolulu | Telehealth FX",
  description: "quality-verified compounded Semaglutide prescribed by Hawaii-licensed physicians in Honolulu. From $146/mo with overnight cold-pack delivery.",
  openGraph: {
    title: "GLP-1 Weight Loss in Honolulu | Telehealth FX",
    description: "Clinical GLP-1 telehealth for Honolulu, Hawaii residents. Hawaii-licensed physicians. From $146/mo.",
    url: "https://telehealthfx.com/locations/honolulu/",
    siteName: "Telehealth FX",
    type: "website"
  },
  alternates: {
    canonical: 'https://telehealthfx.com/locations/honolulu/'
  }
};
export default function HonoluluPage() {
  const jsonLd = {"@context": "https://schema.org", "@graph": [{"@type": "Organization", "@id": "https://telehealthfx.com/#organization", "name": "Telehealth FX", "url": "https://telehealthfx.com", "logo": {"@type": "ImageObject", "url": "https://telehealthfx.com/logo.png"}, "sameAs": []}, {"@type": "WebSite", "@id": "https://telehealthfx.com/#website", "url": "https://telehealthfx.com", "name": "Telehealth FX", "publisher": {"@id": "https://telehealthfx.com/#organization"}}, {"@type": "BreadcrumbList", "@id": "https://telehealthfx.com/locations/honolulu#breadcrumb", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "Home", "item": "https://telehealthfx.com"}, {"@type": "ListItem", "position": 2, "name": "Locations", "item": "https://telehealthfx.com/locations"}, {"@type": "ListItem", "position": 3, "name": "Honolulu", "item": "https://telehealthfx.com/locations/honolulu"}]}, {"@type": "MedicalWebPage", "@id": "https://telehealthfx.com/locations/honolulu#webpage", "url": "https://telehealthfx.com/locations/honolulu", "name": "GLP-1 Weight Loss in Honolulu | Telehealth FX", "description": "quality-verified compounded Semaglutide and Tirzepatide prescribed by Hawaii-licensed physicians in Honolulu. From $146/mo with overnight delivery.", "isPartOf": {"@id": "https://telehealthfx.com/#website"}, "breadcrumb": {"@id": "https://telehealthfx.com/locations/honolulu#breadcrumb"}, "inLanguage": "en-US", "medicalAudience": {"@type": "MedicalAudience", "audienceType": "Patient"}, "lastReviewed": "2026-05-01", "reviewedBy": {"@type": "Organization", "name": "Telehealth FX Clinical Team"}}, {"@type": "MedicalClinic", "@id": "https://telehealthfx.com/locations/honolulu#clinic", "name": "Telehealth FX - Honolulu", "url": "https://telehealthfx.com/locations/honolulu", "telephone": "+1-800-TELEHEALTH", "areaServed": {"@type": "City", "name": "Honolulu", "containedInPlace": {"@type": "State", "name": "Hawaii"}}, "medicalSpecialty": "Endocrine", "isAcceptingNewPatients": true, "availableService": {"@type": "MedicalTherapy", "name": "GLP-1 Receptor Agonist Therapy", "alternateName": "Compounded Semaglutide / Tirzepatide", "medicineSystem": "WesternConventional", "relevantSpecialty": "Endocrine"}, "currenciesAccepted": "USD", "paymentAccepted": "Credit Card, HSA, FSA", "priceRange": "$146-$349/mo", "geo": {"@type": "GeoCoordinates", "latitude": 21.3069, "longitude": -157.8583}}, {"@type": "Service", "@id": "https://telehealthfx.com/locations/honolulu#service", "name": "GLP-1 Weight Loss Program - Honolulu", "description": "Clinical telehealth weight loss program delivering compounded Semaglutide and Tirzepatide to Honolulu, Hawaii residents. Includes physician evaluation, prescription, and cold-shipped medication.", "provider": {"@id": "https://telehealthfx.com/locations/honolulu#clinic"}, "areaServed": {"@type": "City", "name": "Honolulu", "containedInPlace": {"@type": "State", "name": "Hawaii"}}, "serviceType": "Telehealth Weight Management", "offers": {"@type": "Offer", "price": "146", "priceCurrency": "USD", "priceValidUntil": "2026-12-31", "availability": "https://schema.org/InStock", "url": "https://go.telehealthfx.com/start", "description": "Monthly compounded GLP-1 program with physician oversight"}}, {"@type": "FAQPage", "@id": "https://telehealthfx.com/locations/honolulu#faq", "mainEntity": [{"@type": "Question", "name": "Do you deliver to neighbor islands (Maui, Big Island, Kauai)?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. We deliver to all Hawaiian island addresses via USPS Priority Mail."}}, {"@type": "Question", "name": "I'm stationed at Schofield. Is this separate from TRICARE?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. Completely independent."}}]}]};
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <LocationHonolulu />
    </>
  );
}
