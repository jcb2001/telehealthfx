import React from 'react';
import { WeightLossSanDiego } from '../../../components/weight-loss-san-diego.jsx';

export const metadata = {
  title: "Medical Weight Loss Clinic San Diego | Semaglutide & GLP-1 | Telehealth FX",
  description: "Looking for a medical weight loss clinic in San Diego? Skip the traffic and 300% medspa markups. Get Semaglutide delivered overnight via Telehealth FX.",
  openGraph: {
    title: "Medical Weight Loss Clinic San Diego | Semaglutide & GLP-1",
    description: "Looking for a medical weight loss clinic in San Diego? Skip the traffic and 300% medspa markups. Get Semaglutide delivered overnight via Telehealth FX.",
    url: 'https://telehealthfx.com/weight-loss/san-diego',
    type: 'article',
  }
,
  alternates: {
    canonical: 'https://telehealthfx.com/weight-loss/san-diego/'
  }
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalOrganization",
    "name": "Telehealth FX - San Diego Weight Loss Hub",
    "url": "https://telehealthfx.com/weight-loss/san-diego",
    "description": "Premium telehealth weight loss clinic providing compounded Semaglutide and Tirzepatide to San Diego, California residents.",
    "areaServed": {
      "@type": "City",
      "name": "San Diego",
      "sameAs": "https://en.wikipedia.org/wiki/San_Diego"
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
      
        <WeightLossSanDiego />
      
    </>
  );
}
