import { LocationSiouxFalls } from "../../../components/location-sioux-falls";
export const metadata = {
  robots: { index: true, follow: true },
  title: "GLP-1 Weight Loss in Sioux Falls | Telehealth FX",
  description: "quality-verified compounded Semaglutide prescribed by South Dakota-licensed physicians in Sioux Falls. From $146/mo with overnight cold-pack delivery.",
  openGraph: {
    title: "GLP-1 Weight Loss in Sioux Falls | Telehealth FX",
    description: "Clinical GLP-1 telehealth for Sioux Falls, South Dakota residents. South Dakota-licensed physicians. From $146/mo.",
    url: "https://telehealthfx.com/locations/sioux-falls/",
    siteName: "Telehealth FX",
    type: "website"
  },
  alternates: {
    canonical: 'https://telehealthfx.com/locations/sioux-falls/'
  }
};
export default function SiouxFallsPage() {
  const jsonLd = {"@context": "https://schema.org", "@graph": [{"@type": "Organization", "@id": "https://telehealthfx.com/#organization", "name": "Telehealth FX", "url": "https://telehealthfx.com", "logo": {"@type": "ImageObject", "url": "https://telehealthfx.com/logo.png"}, "sameAs": []}, {"@type": "WebSite", "@id": "https://telehealthfx.com/#website", "url": "https://telehealthfx.com", "name": "Telehealth FX", "publisher": {"@id": "https://telehealthfx.com/#organization"}}, {"@type": "BreadcrumbList", "@id": "https://telehealthfx.com/locations/sioux-falls#breadcrumb", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "Home", "item": "https://telehealthfx.com"}, {"@type": "ListItem", "position": 2, "name": "Locations", "item": "https://telehealthfx.com/locations"}, {"@type": "ListItem", "position": 3, "name": "Sioux Falls", "item": "https://telehealthfx.com/locations/sioux-falls"}]}, {"@type": "MedicalWebPage", "@id": "https://telehealthfx.com/locations/sioux-falls#webpage", "url": "https://telehealthfx.com/locations/sioux-falls", "name": "GLP-1 Weight Loss in Sioux Falls | Telehealth FX", "description": "quality-verified compounded Semaglutide and Tirzepatide prescribed by South Dakota-licensed physicians in Sioux Falls. From $146/mo with overnight delivery.", "isPartOf": {"@id": "https://telehealthfx.com/#website"}, "breadcrumb": {"@id": "https://telehealthfx.com/locations/sioux-falls#breadcrumb"}, "inLanguage": "en-US", "medicalAudience": {"@type": "MedicalAudience", "audienceType": "Patient"}, "lastReviewed": "2026-05-01", "reviewedBy": {"@type": "Organization", "name": "Telehealth FX Clinical Team"}}, {"@type": "MedicalClinic", "@id": "https://telehealthfx.com/locations/sioux-falls#clinic", "name": "Telehealth FX - Sioux Falls", "url": "https://telehealthfx.com/locations/sioux-falls", "telephone": "+1-800-TELEHEALTH", "areaServed": {"@type": "City", "name": "Sioux Falls", "containedInPlace": {"@type": "State", "name": "South Dakota"}}, "medicalSpecialty": "Endocrine", "isAcceptingNewPatients": true, "availableService": {"@type": "MedicalTherapy", "name": "GLP-1 Receptor Agonist Therapy", "alternateName": "Compounded Semaglutide / Tirzepatide", "medicineSystem": "WesternConventional", "relevantSpecialty": "Endocrine"}, "currenciesAccepted": "USD", "paymentAccepted": "Credit Card, HSA, FSA", "priceRange": "$146-$349/mo", "geo": {"@type": "GeoCoordinates", "latitude": 43.546, "longitude": -96.7313}}, {"@type": "Service", "@id": "https://telehealthfx.com/locations/sioux-falls#service", "name": "GLP-1 Weight Loss Program - Sioux Falls", "description": "Clinical telehealth weight loss program delivering compounded Semaglutide and Tirzepatide to Sioux Falls, South Dakota residents. Includes physician evaluation, prescription, and cold-shipped medication.", "provider": {"@id": "https://telehealthfx.com/locations/sioux-falls#clinic"}, "areaServed": {"@type": "City", "name": "Sioux Falls", "containedInPlace": {"@type": "State", "name": "South Dakota"}}, "serviceType": "Telehealth Weight Management", "offers": {"@type": "Offer", "price": "146", "priceCurrency": "USD", "priceValidUntil": "2026-12-31", "availability": "https://schema.org/InStock", "url": "https://go.telehealthfx.com/start", "description": "Monthly compounded GLP-1 program with physician oversight"}}, {"@type": "FAQPage", "@id": "https://telehealthfx.com/locations/sioux-falls#faq", "mainEntity": [{"@type": "Question", "name": "I work at the Smithfield plant. When do I do the intake?", "acceptedAnswer": {"@type": "Answer", "text": "Anytime. Fully asynchronous—no appointment."}}, {"@type": "Question", "name": "Do you deliver to Brandon and Harrisburg?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. All Minnehaha and Lincoln County addresses."}}]}]};
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <LocationSiouxFalls />
    </>
  );
}
