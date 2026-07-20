import React from 'react';
import { WeightLossSeattle } from '../../../components/weight-loss-seattle.jsx';

export const metadata = {
  title: "Medical Weight Loss Clinic Seattle | Semaglutide & GLP-1 | Telehealth FX",
  description: "Looking for a medical weight loss clinic in Seattle? Skip the traffic and 300% medspa markups. Get Semaglutide delivered overnight via Telehealth FX.",
  openGraph: {
    title: "Medical Weight Loss Clinic Seattle | Semaglutide & GLP-1",
    description: "Looking for a medical weight loss clinic in Seattle? Skip the traffic and 300% medspa markups. Get Semaglutide delivered overnight via Telehealth FX.",
    url: 'https://telehealthfx.com/weight-loss/seattle',
    type: 'article',
  }
,
  alternates: {
    canonical: 'https://telehealthfx.com/weight-loss/seattle/'
  }
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalOrganization",
    "name": "Telehealth FX - Seattle Weight Loss Hub",
    "url": "https://telehealthfx.com/weight-loss/seattle",
    "description": "Premium telehealth weight loss clinic providing compounded Semaglutide and Tirzepatide to Seattle, Washington residents.",
    "areaServed": {
      "@type": "City",
      "name": "Seattle",
      "sameAs": "https://en.wikipedia.org/wiki/Seattle"
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
      
        <WeightLossSeattle />
      
    </>
  );
}
