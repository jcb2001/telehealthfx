import { LocationMacon } from "../../../components/location-macon";
export const metadata = {
  robots: { index: true, follow: true },
  title: "GLP-1 Weight Loss in Macon | Telehealth FX",
  description: "quality-verified compounded Semaglutide prescribed by Georgia-licensed physicians in Macon. From $146/mo with overnight cold-pack delivery.",
  openGraph: {
    title: "GLP-1 Weight Loss in Macon | Telehealth FX",
    description: "Clinical GLP-1 telehealth for Macon, Georgia residents. Georgia-licensed physicians. From $146/mo.",
    url: "https://telehealthfx.com/locations/macon",
    siteName: "Telehealth FX",
    type: "website"
  },
  alternates: {
    canonical: 'https://telehealthfx.com/locations/macon/'
  }
};
export default function MaconPage() {
  const jsonLd = {"@context": "https://schema.org", "@graph": [{"@type": "Organization", "@id": "https://telehealthfx.com/#organization", "name": "Telehealth FX", "url": "https://telehealthfx.com", "logo": {"@type": "ImageObject", "url": "https://telehealthfx.com/logo.png"}, "sameAs": []}, {"@type": "WebSite", "@id": "https://telehealthfx.com/#website", "url": "https://telehealthfx.com", "name": "Telehealth FX", "publisher": {"@id": "https://telehealthfx.com/#organization"}}, {"@type": "BreadcrumbList", "@id": "https://telehealthfx.com/locations/macon#breadcrumb", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "Home", "item": "https://telehealthfx.com"}, {"@type": "ListItem", "position": 2, "name": "Locations", "item": "https://telehealthfx.com/locations"}, {"@type": "ListItem", "position": 3, "name": "Macon", "item": "https://telehealthfx.com/locations/macon"}]}, {"@type": "MedicalWebPage", "@id": "https://telehealthfx.com/locations/macon#webpage", "url": "https://telehealthfx.com/locations/macon", "name": "GLP-1 Weight Loss in Macon | Telehealth FX", "description": "quality-verified compounded Semaglutide and Tirzepatide prescribed by Georgia-licensed physicians in Macon. From $146/mo with overnight delivery.", "isPartOf": {"@id": "https://telehealthfx.com/#website"}, "breadcrumb": {"@id": "https://telehealthfx.com/locations/macon#breadcrumb"}, "inLanguage": "en-US", "medicalAudience": {"@type": "MedicalAudience", "audienceType": "Patient"}, "lastReviewed": "2026-05-01", "reviewedBy": {"@type": "Organization", "name": "Telehealth FX Clinical Team"}}, {"@type": "MedicalClinic", "@id": "https://telehealthfx.com/locations/macon#clinic", "name": "Telehealth FX - Macon", "url": "https://telehealthfx.com/locations/macon", "telephone": "+1-800-TELEHEALTH", "areaServed": {"@type": "City", "name": "Macon", "containedInPlace": {"@type": "State", "name": "Georgia"}}, "medicalSpecialty": "Endocrine", "isAcceptingNewPatients": true, "availableService": {"@type": "MedicalTherapy", "name": "GLP-1 Receptor Agonist Therapy", "alternateName": "Compounded Semaglutide / Tirzepatide", "medicineSystem": "WesternConventional", "relevantSpecialty": "Endocrine"}, "currenciesAccepted": "USD", "paymentAccepted": "Credit Card, HSA, FSA", "priceRange": "$146-$349/mo", "geo": {"@type": "GeoCoordinates", "latitude": 32.8407, "longitude": -83.6324}}, {"@type": "Service", "@id": "https://telehealthfx.com/locations/macon#service", "name": "GLP-1 Weight Loss Program - Macon", "description": "Clinical telehealth weight loss program delivering compounded Semaglutide and Tirzepatide to Macon, Georgia residents. Includes physician evaluation, prescription, and cold-shipped medication.", "provider": {"@id": "https://telehealthfx.com/locations/macon#clinic"}, "areaServed": {"@type": "City", "name": "Macon", "containedInPlace": {"@type": "State", "name": "Georgia"}}, "serviceType": "Telehealth Weight Management", "offers": {"@type": "Offer", "price": "146", "priceCurrency": "USD", "priceValidUntil": "2026-12-31", "availability": "https://schema.org/InStock", "url": "https://go.telehealthfx.com/start", "description": "Monthly compounded GLP-1 program with physician oversight"}}, {"@type": "FAQPage", "@id": "https://telehealthfx.com/locations/macon#faq", "mainEntity": [{"@type": "Question", "name": "I work at Robins. Is this separate from my FEHB?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. Completely independent of your federal employee benefits."}}, {"@type": "Question", "name": "Do you deliver to Warner Robins and Perry?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. All Bibb, Houston, and Peach County addresses."}}]}]};
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <LocationMacon />
    </>
  );
}
