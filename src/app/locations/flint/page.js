import { LocationFlint } from "../../../components/location-flint";
export const metadata = {
  robots: { index: true, follow: true },
  title: "GLP-1 Weight Loss in Flint | Telehealth FX",
  description: "FDA-compliant compounded Semaglutide prescribed by Michigan-licensed physicians in Flint. From $146/mo with overnight cold-pack delivery.",
  openGraph: {
    title: "GLP-1 Weight Loss in Flint | Telehealth FX",
    description: "Clinical GLP-1 telehealth for Flint, Michigan residents. Michigan-licensed physicians. From $146/mo.",
    url: "https://telehealthfx.com/locations/flint",
    siteName: "Telehealth FX",
    type: "website"
  },
  alternates: {
    canonical: 'https://telehealthfx.com/locations/flint/'
  }
};
export default function FlintPage() {
  const jsonLd = {"@context": "https://schema.org", "@graph": [{"@type": "Organization", "@id": "https://telehealthfx.com/#organization", "name": "Telehealth FX", "url": "https://telehealthfx.com", "logo": {"@type": "ImageObject", "url": "https://telehealthfx.com/logo.png"}, "sameAs": []}, {"@type": "WebSite", "@id": "https://telehealthfx.com/#website", "url": "https://telehealthfx.com", "name": "Telehealth FX", "publisher": {"@id": "https://telehealthfx.com/#organization"}}, {"@type": "BreadcrumbList", "@id": "https://telehealthfx.com/locations/flint#breadcrumb", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "Home", "item": "https://telehealthfx.com"}, {"@type": "ListItem", "position": 2, "name": "Locations", "item": "https://telehealthfx.com/locations"}, {"@type": "ListItem", "position": 3, "name": "Flint", "item": "https://telehealthfx.com/locations/flint"}]}, {"@type": "MedicalWebPage", "@id": "https://telehealthfx.com/locations/flint#webpage", "url": "https://telehealthfx.com/locations/flint", "name": "GLP-1 Weight Loss in Flint | Telehealth FX", "description": "FDA-compliant compounded Semaglutide and Tirzepatide prescribed by Michigan-licensed physicians in Flint. From $146/mo with overnight delivery.", "isPartOf": {"@id": "https://telehealthfx.com/#website"}, "breadcrumb": {"@id": "https://telehealthfx.com/locations/flint#breadcrumb"}, "inLanguage": "en-US", "medicalAudience": {"@type": "MedicalAudience", "audienceType": "Patient"}, "lastReviewed": "2026-05-01", "reviewedBy": {"@type": "Organization", "name": "Telehealth FX Clinical Team"}}, {"@type": "MedicalClinic", "@id": "https://telehealthfx.com/locations/flint#clinic", "name": "Telehealth FX - Flint", "url": "https://telehealthfx.com/locations/flint", "telephone": "+1-800-TELEHEALTH", "areaServed": {"@type": "City", "name": "Flint", "containedInPlace": {"@type": "State", "name": "Michigan"}}, "medicalSpecialty": "Endocrine", "isAcceptingNewPatients": true, "availableService": {"@type": "MedicalTherapy", "name": "GLP-1 Receptor Agonist Therapy", "alternateName": "Compounded Semaglutide / Tirzepatide", "medicineSystem": "WesternConventional", "relevantSpecialty": "Endocrine"}, "currenciesAccepted": "USD", "paymentAccepted": "Credit Card, HSA, FSA", "priceRange": "$146-$349/mo", "geo": {"@type": "GeoCoordinates", "latitude": 43.0125, "longitude": -83.6875}}, {"@type": "Service", "@id": "https://telehealthfx.com/locations/flint#service", "name": "GLP-1 Weight Loss Program - Flint", "description": "Clinical telehealth weight loss program delivering compounded Semaglutide and Tirzepatide to Flint, Michigan residents. Includes physician evaluation, prescription, and cold-shipped medication.", "provider": {"@id": "https://telehealthfx.com/locations/flint#clinic"}, "areaServed": {"@type": "City", "name": "Flint", "containedInPlace": {"@type": "State", "name": "Michigan"}}, "serviceType": "Telehealth Weight Management", "offers": {"@type": "Offer", "price": "146", "priceCurrency": "USD", "priceValidUntil": "2026-12-31", "availability": "https://schema.org/InStock", "url": "https://go.telehealthfx.com/start", "description": "Monthly compounded GLP-1 program with physician oversight"}}, {"@type": "FAQPage", "@id": "https://telehealthfx.com/locations/flint#faq", "mainEntity": [{"@type": "Question", "name": "Is the water safe for mixing medication?", "acceptedAnswer": {"@type": "Answer", "text": "GLP-1 medications are injectable, not mixed with water. No water interaction."}}, {"@type": "Question", "name": "Do you deliver to Grand Blanc, Burton, and Fenton?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. All Genesee County addresses."}}]}]};
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <LocationFlint />
    </>
  );
}
