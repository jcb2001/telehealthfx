import { LocationDayton } from "../../../components/location-dayton";
export const metadata = {
  robots: { index: true, follow: true },
  title: "GLP-1 Weight Loss in Dayton | Telehealth FX",
  description: "quality-verified compounded Semaglutide prescribed by Ohio-licensed physicians in Dayton. From $146/mo with overnight cold-pack delivery.",
  openGraph: {
    title: "GLP-1 Weight Loss in Dayton | Telehealth FX",
    description: "Clinical GLP-1 telehealth for Dayton, Ohio residents. Ohio-licensed physicians. From $146/mo.",
    url: "https://telehealthfx.com/locations/dayton",
    siteName: "Telehealth FX",
    type: "website"
  },
  alternates: {
    canonical: 'https://telehealthfx.com/locations/dayton/'
  }
};
export default function DaytonPage() {
  const jsonLd = {"@context": "https://schema.org", "@graph": [{"@type": "Organization", "@id": "https://telehealthfx.com/#organization", "name": "Telehealth FX", "url": "https://telehealthfx.com", "logo": {"@type": "ImageObject", "url": "https://telehealthfx.com/logo.png"}, "sameAs": []}, {"@type": "WebSite", "@id": "https://telehealthfx.com/#website", "url": "https://telehealthfx.com", "name": "Telehealth FX", "publisher": {"@id": "https://telehealthfx.com/#organization"}}, {"@type": "BreadcrumbList", "@id": "https://telehealthfx.com/locations/dayton#breadcrumb", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "Home", "item": "https://telehealthfx.com"}, {"@type": "ListItem", "position": 2, "name": "Locations", "item": "https://telehealthfx.com/locations"}, {"@type": "ListItem", "position": 3, "name": "Dayton", "item": "https://telehealthfx.com/locations/dayton"}]}, {"@type": "MedicalWebPage", "@id": "https://telehealthfx.com/locations/dayton#webpage", "url": "https://telehealthfx.com/locations/dayton", "name": "GLP-1 Weight Loss in Dayton | Telehealth FX", "description": "quality-verified compounded Semaglutide and Tirzepatide prescribed by Ohio-licensed physicians in Dayton. From $146/mo with overnight delivery.", "isPartOf": {"@id": "https://telehealthfx.com/#website"}, "breadcrumb": {"@id": "https://telehealthfx.com/locations/dayton#breadcrumb"}, "inLanguage": "en-US", "medicalAudience": {"@type": "MedicalAudience", "audienceType": "Patient"}, "lastReviewed": "2026-05-01", "reviewedBy": {"@type": "Organization", "name": "Telehealth FX Clinical Team"}}, {"@type": "MedicalClinic", "@id": "https://telehealthfx.com/locations/dayton#clinic", "name": "Telehealth FX - Dayton", "url": "https://telehealthfx.com/locations/dayton", "telephone": "+1-800-TELEHEALTH", "areaServed": {"@type": "City", "name": "Dayton", "containedInPlace": {"@type": "State", "name": "Ohio"}}, "medicalSpecialty": "Endocrine", "isAcceptingNewPatients": true, "availableService": {"@type": "MedicalTherapy", "name": "GLP-1 Receptor Agonist Therapy", "alternateName": "Compounded Semaglutide / Tirzepatide", "medicineSystem": "WesternConventional", "relevantSpecialty": "Endocrine"}, "currenciesAccepted": "USD", "paymentAccepted": "Credit Card, HSA, FSA", "priceRange": "$146-$349/mo", "geo": {"@type": "GeoCoordinates", "latitude": 39.7589, "longitude": -84.1916}}, {"@type": "Service", "@id": "https://telehealthfx.com/locations/dayton#service", "name": "GLP-1 Weight Loss Program - Dayton", "description": "Clinical telehealth weight loss program delivering compounded Semaglutide and Tirzepatide to Dayton, Ohio residents. Includes physician evaluation, prescription, and cold-shipped medication.", "provider": {"@id": "https://telehealthfx.com/locations/dayton#clinic"}, "areaServed": {"@type": "City", "name": "Dayton", "containedInPlace": {"@type": "State", "name": "Ohio"}}, "serviceType": "Telehealth Weight Management", "offers": {"@type": "Offer", "price": "146", "priceCurrency": "USD", "priceValidUntil": "2026-12-31", "availability": "https://schema.org/InStock", "url": "https://go.telehealthfx.com/start", "description": "Monthly compounded GLP-1 program with physician oversight"}}, {"@type": "FAQPage", "@id": "https://telehealthfx.com/locations/dayton#faq", "mainEntity": [{"@type": "Question", "name": "I work at AFRL. Security clearance concerns?", "acceptedAnswer": {"@type": "Answer", "text": "None. GLP-1 medications are not controlled substances. Telehealth FX is independent of TRICARE and your military/civilian record."}}, {"@type": "Question", "name": "Do you deliver to Beavercreek, Centerville, and Xenia?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. All Montgomery, Greene, and Clark County addresses."}}]}]};
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <LocationDayton />
    </>
  );
}
