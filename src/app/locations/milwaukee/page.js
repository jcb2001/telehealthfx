import { LocationMilwaukee } from "../../../components/location-milwaukee";
export const metadata = {
  robots: { index: true, follow: true },
  title: "GLP-1 Weight Loss in Milwaukee | Telehealth FX",
  description: "FDA-compliant compounded Semaglutide prescribed by Unknown-licensed physicians in Milwaukee. From $146/mo with overnight cold-pack delivery.",
  openGraph: {
    title: "GLP-1 Weight Loss in Milwaukee | Telehealth FX",
    description: "Clinical GLP-1 telehealth for Milwaukee, Unknown residents. Unknown-licensed physicians. From $146/mo.",
    url: "https://telehealthfx.com/locations/milwaukee",
    siteName: "Telehealth FX",
    type: "website"
  },
  alternates: {
    canonical: 'https://telehealthfx.com/locations/milwaukee/'
  }
};
export default function MilwaukeePage() {
  const jsonLd = {"@context": "https://schema.org", "@graph": [{"@type": "Organization", "@id": "https://telehealthfx.com/#organization", "name": "Telehealth FX", "url": "https://telehealthfx.com", "logo": {"@type": "ImageObject", "url": "https://telehealthfx.com/logo.png"}, "sameAs": []}, {"@type": "WebSite", "@id": "https://telehealthfx.com/#website", "url": "https://telehealthfx.com", "name": "Telehealth FX", "publisher": {"@id": "https://telehealthfx.com/#organization"}}, {"@type": "BreadcrumbList", "@id": "https://telehealthfx.com/locations/milwaukee#breadcrumb", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "Home", "item": "https://telehealthfx.com"}, {"@type": "ListItem", "position": 2, "name": "Locations", "item": "https://telehealthfx.com/locations"}, {"@type": "ListItem", "position": 3, "name": "Milwaukee", "item": "https://telehealthfx.com/locations/milwaukee"}]}, {"@type": "MedicalWebPage", "@id": "https://telehealthfx.com/locations/milwaukee#webpage", "url": "https://telehealthfx.com/locations/milwaukee", "name": "GLP-1 Weight Loss in Milwaukee | Telehealth FX", "description": "FDA-compliant compounded Semaglutide and Tirzepatide prescribed by Unknown-licensed physicians in Milwaukee. From $146/mo with overnight delivery.", "isPartOf": {"@id": "https://telehealthfx.com/#website"}, "breadcrumb": {"@id": "https://telehealthfx.com/locations/milwaukee#breadcrumb"}, "inLanguage": "en-US", "medicalAudience": {"@type": "MedicalAudience", "audienceType": "Patient"}, "lastReviewed": "2026-05-01", "reviewedBy": {"@type": "Organization", "name": "Telehealth FX Clinical Team"}}, {"@type": "MedicalClinic", "@id": "https://telehealthfx.com/locations/milwaukee#clinic", "name": "Telehealth FX - Milwaukee", "url": "https://telehealthfx.com/locations/milwaukee", "telephone": "+1-800-TELEHEALTH", "areaServed": {"@type": "City", "name": "Milwaukee", "containedInPlace": {"@type": "State", "name": "Unknown"}}, "medicalSpecialty": "Endocrine", "isAcceptingNewPatients": true, "availableService": {"@type": "MedicalTherapy", "name": "GLP-1 Receptor Agonist Therapy", "alternateName": "Compounded Semaglutide / Tirzepatide", "medicineSystem": "WesternConventional", "relevantSpecialty": "Endocrine"}, "currenciesAccepted": "USD", "paymentAccepted": "Credit Card, HSA, FSA", "priceRange": "$146-$349/mo"}, {"@type": "Service", "@id": "https://telehealthfx.com/locations/milwaukee#service", "name": "GLP-1 Weight Loss Program - Milwaukee", "description": "Clinical telehealth weight loss program delivering compounded Semaglutide and Tirzepatide to Milwaukee, Unknown residents. Includes physician evaluation, prescription, and cold-shipped medication.", "provider": {"@id": "https://telehealthfx.com/locations/milwaukee#clinic"}, "areaServed": {"@type": "City", "name": "Milwaukee", "containedInPlace": {"@type": "State", "name": "Unknown"}}, "serviceType": "Telehealth Weight Management", "offers": {"@type": "Offer", "price": "146", "priceCurrency": "USD", "priceValidUntil": "2026-12-31", "availability": "https://schema.org/InStock", "url": "https://go.telehealthfx.com/start", "description": "Monthly compounded GLP-1 program with physician oversight"}}]};
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <LocationMilwaukee />
    </>
  );
}
