import { LocationChattanooga } from "../../../components/location-chattanooga";
export const metadata = {
  robots: { index: true, follow: true },
  title: "GLP-1 Weight Loss in Chattanooga | Telehealth FX",
  description: "quality-verified compounded Semaglutide prescribed by Tennessee-licensed physicians in Chattanooga. From $146/mo with overnight cold-pack delivery.",
  openGraph: {
    title: "GLP-1 Weight Loss in Chattanooga | Telehealth FX",
    description: "Clinical GLP-1 telehealth for Chattanooga, Tennessee residents. Tennessee-licensed physicians. From $146/mo.",
    url: "https://telehealthfx.com/locations/chattanooga",
    siteName: "Telehealth FX",
    type: "website"
  },
  alternates: {
    canonical: 'https://telehealthfx.com/locations/chattanooga/'
  }
};
export default function ChattanoogaPage() {
  const jsonLd = {"@context": "https://schema.org", "@graph": [{"@type": "Organization", "@id": "https://telehealthfx.com/#organization", "name": "Telehealth FX", "url": "https://telehealthfx.com", "logo": {"@type": "ImageObject", "url": "https://telehealthfx.com/logo.png"}, "sameAs": []}, {"@type": "WebSite", "@id": "https://telehealthfx.com/#website", "url": "https://telehealthfx.com", "name": "Telehealth FX", "publisher": {"@id": "https://telehealthfx.com/#organization"}}, {"@type": "BreadcrumbList", "@id": "https://telehealthfx.com/locations/chattanooga#breadcrumb", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "Home", "item": "https://telehealthfx.com"}, {"@type": "ListItem", "position": 2, "name": "Locations", "item": "https://telehealthfx.com/locations"}, {"@type": "ListItem", "position": 3, "name": "Chattanooga", "item": "https://telehealthfx.com/locations/chattanooga"}]}, {"@type": "MedicalWebPage", "@id": "https://telehealthfx.com/locations/chattanooga#webpage", "url": "https://telehealthfx.com/locations/chattanooga", "name": "GLP-1 Weight Loss in Chattanooga | Telehealth FX", "description": "quality-verified compounded Semaglutide and Tirzepatide prescribed by Tennessee-licensed physicians in Chattanooga. From $146/mo with overnight delivery.", "isPartOf": {"@id": "https://telehealthfx.com/#website"}, "breadcrumb": {"@id": "https://telehealthfx.com/locations/chattanooga#breadcrumb"}, "inLanguage": "en-US", "medicalAudience": {"@type": "MedicalAudience", "audienceType": "Patient"}, "lastReviewed": "2026-05-01", "reviewedBy": {"@type": "Organization", "name": "Telehealth FX Clinical Team"}}, {"@type": "MedicalClinic", "@id": "https://telehealthfx.com/locations/chattanooga#clinic", "name": "Telehealth FX - Chattanooga", "url": "https://telehealthfx.com/locations/chattanooga", "telephone": "+1-800-TELEHEALTH", "areaServed": {"@type": "City", "name": "Chattanooga", "containedInPlace": {"@type": "State", "name": "Tennessee"}}, "medicalSpecialty": "Endocrine", "isAcceptingNewPatients": true, "availableService": {"@type": "MedicalTherapy", "name": "GLP-1 Receptor Agonist Therapy", "alternateName": "Compounded Semaglutide / Tirzepatide", "medicineSystem": "WesternConventional", "relevantSpecialty": "Endocrine"}, "currenciesAccepted": "USD", "paymentAccepted": "Credit Card, HSA, FSA", "priceRange": "$146-$349/mo", "geo": {"@type": "GeoCoordinates", "latitude": 35.0456, "longitude": -85.3097}}, {"@type": "Service", "@id": "https://telehealthfx.com/locations/chattanooga#service", "name": "GLP-1 Weight Loss Program - Chattanooga", "description": "Clinical telehealth weight loss program delivering compounded Semaglutide and Tirzepatide to Chattanooga, Tennessee residents. Includes physician evaluation, prescription, and cold-shipped medication.", "provider": {"@id": "https://telehealthfx.com/locations/chattanooga#clinic"}, "areaServed": {"@type": "City", "name": "Chattanooga", "containedInPlace": {"@type": "State", "name": "Tennessee"}}, "serviceType": "Telehealth Weight Management", "offers": {"@type": "Offer", "price": "146", "priceCurrency": "USD", "priceValidUntil": "2026-12-31", "availability": "https://schema.org/InStock", "url": "https://go.telehealthfx.com/start", "description": "Monthly compounded GLP-1 program with physician oversight"}}, {"@type": "FAQPage", "@id": "https://telehealthfx.com/locations/chattanooga#faq", "mainEntity": [{"@type": "Question", "name": "I work at VW. Rotating shifts. When?", "acceptedAnswer": {"@type": "Answer", "text": "Anytime. Fully asynchronous."}}, {"@type": "Question", "name": "Do you deliver to Signal Mountain and Cleveland?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. All Hamilton, Bradley, and Catoosa (GA) County addresses."}}]}]};
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <LocationChattanooga />
    </>
  );
}
