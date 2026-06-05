import React from 'react';
import { WeightLossNewYorkCity } from '../../../components/weight-loss-new-york.jsx';

export const metadata = {
  title: "Medical Weight Loss Clinic New York City | Semaglutide & GLP-1 | Telehealth FX",
  description: "Looking for a medical weight loss clinic in New York City? Skip the traffic and 300% medspa markups. Get Semaglutide delivered overnight via Telehealth FX.",
  openGraph: {
    title: "Medical Weight Loss Clinic New York City | Semaglutide & GLP-1",
    description: "Looking for a medical weight loss clinic in New York City? Skip the traffic and 300% medspa markups. Get Semaglutide delivered overnight via Telehealth FX.",
    url: 'https://telehealthfx.com/weight-loss/new-york',
    type: 'article',
  }
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalOrganization",
    "name": "Telehealth FX - New York City Weight Loss Hub",
    "url": "https://telehealthfx.com/weight-loss/new-york",
    "description": "Premium telehealth weight loss clinic providing compounded Semaglutide and Tirzepatide to New York City, New York residents.",
    "areaServed": {
      "@type": "City",
      "name": "New York City",
      "sameAs": "https://en.wikipedia.org/wiki/New_York_City"
    },
    "medicalSpecialty": "Weight Loss",
    "makesOffer": {
      "@type": "Offer",
      "itemOffered": {
        "@type": "Service",
        "name": "GLP-1 Telehealth Prescriptions"
      }
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
        <WeightLossNewYorkCity />
      
    </>
  );
}
