import { LocationSpokane } from "../../../components/location-spokane";
export const metadata = {
  robots: { index: true, follow: true },
  title: "GLP-1 Weight Loss in Spokane | Telehealth FX",
  description: "quality-verified compounded Semaglutide prescribed by Washington-licensed physicians in Spokane. From $146/mo with overnight cold-pack delivery.",
  openGraph: {
    title: "GLP-1 Weight Loss in Spokane | Telehealth FX",
    description: "Clinical GLP-1 telehealth for Spokane, Washington residents. Washington-licensed physicians. From $146/mo.",
    url: "https://telehealthfx.com/locations/spokane/",
    siteName: "Telehealth FX",
    type: "website"
  },
  alternates: {
    canonical: 'https://telehealthfx.com/locations/spokane/'
  }
};
export default function SpokanePage() {
  const jsonLd = {"@context": "https://schema.org", "@graph": [{"@type": "Organization", "@id": "https://telehealthfx.com/#organization", "name": "Telehealth FX", "url": "https://telehealthfx.com", "logo": {"@type": "ImageObject", "url": "https://telehealthfx.com/logo.png"}, "sameAs": []}, {"@type": "WebSite", "@id": "https://telehealthfx.com/#website", "url": "https://telehealthfx.com", "name": "Telehealth FX", "publisher": {"@id": "https://telehealthfx.com/#organization"}}, {"@type": "BreadcrumbList", "@id": "https://telehealthfx.com/locations/spokane#breadcrumb", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "Home", "item": "https://telehealthfx.com"}, {"@type": "ListItem", "position": 2, "name": "Locations", "item": "https://telehealthfx.com/locations"}, {"@type": "ListItem", "position": 3, "name": "Spokane", "item": "https://telehealthfx.com/locations/spokane"}]}, {"@type": "MedicalWebPage", "@id": "https://telehealthfx.com/locations/spokane#webpage", "url": "https://telehealthfx.com/locations/spokane", "name": "GLP-1 Weight Loss in Spokane | Telehealth FX", "description": "quality-verified compounded Semaglutide and Tirzepatide prescribed by Washington-licensed physicians in Spokane. From $146/mo with overnight delivery.", "isPartOf": {"@id": "https://telehealthfx.com/#website"}, "breadcrumb": {"@id": "https://telehealthfx.com/locations/spokane#breadcrumb"}, "inLanguage": "en-US", "medicalAudience": {"@type": "MedicalAudience", "audienceType": "Patient"}, "lastReviewed": "2026-05-01", "reviewedBy": {"@type": "Organization", "name": "Telehealth FX Clinical Team"}}, {"@type": "MedicalClinic", "@id": "https://telehealthfx.com/locations/spokane#clinic", "name": "Telehealth FX - Spokane", "url": "https://telehealthfx.com/locations/spokane", "telephone": "+1-800-TELEHEALTH", "areaServed": {"@type": "City", "name": "Spokane", "containedInPlace": {"@type": "State", "name": "Washington"}}, "medicalSpecialty": "Endocrine", "isAcceptingNewPatients": true, "availableService": {"@type": "MedicalTherapy", "name": "GLP-1 Receptor Agonist Therapy", "alternateName": "Compounded Semaglutide / Tirzepatide", "medicineSystem": "WesternConventional", "relevantSpecialty": "Endocrine"}, "currenciesAccepted": "USD", "paymentAccepted": "Credit Card, HSA, FSA", "priceRange": "$146-$349/mo", "geo": {"@type": "GeoCoordinates", "latitude": 47.6588, "longitude": -117.426}}, {"@type": "Service", "@id": "https://telehealthfx.com/locations/spokane#service", "name": "GLP-1 Weight Loss Program - Spokane", "description": "Clinical telehealth weight loss program delivering compounded Semaglutide and Tirzepatide to Spokane, Washington residents. Includes physician evaluation, prescription, and cold-shipped medication.", "provider": {"@id": "https://telehealthfx.com/locations/spokane#clinic"}, "areaServed": {"@type": "City", "name": "Spokane", "containedInPlace": {"@type": "State", "name": "Washington"}}, "serviceType": "Telehealth Weight Management", "offers": {"@type": "Offer", "price": "146", "priceCurrency": "USD", "priceValidUntil": "2026-12-31", "availability": "https://schema.org/InStock", "url": "https://go.telehealthfx.com/start", "description": "Monthly compounded GLP-1 program with physician oversight"}}, {"@type": "FAQPage", "@id": "https://telehealthfx.com/locations/spokane#faq", "mainEntity": [{"@type": "Question", "name": "I live in Coeur d'Alene (Idaho). Which state?", "acceptedAnswer": {"@type": "Answer", "text": "Idaho. You'll be evaluated by an ID-licensed physician. We serve both WA and ID across the Inland Northwest."}}, {"@type": "Question", "name": "Do you deliver to Spokane Valley?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. All Spokane County and Kootenai County (ID) addresses."}}]}]};
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <LocationSpokane />
    </>
  );
}
