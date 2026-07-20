import React from 'react';
import { WeightLossNashville } from '../../../components/weight-loss-nashville.jsx';

export const metadata = {
  title: "Medical Weight Loss Clinic Nashville | Semaglutide & GLP-1 | Telehealth FX",
  description: "Looking for a medical weight loss clinic in Nashville? Skip the traffic and 300% medspa markups. Get Semaglutide delivered overnight via Telehealth FX.",
  openGraph: {
    title: "Medical Weight Loss Clinic Nashville | Semaglutide & GLP-1",
    description: "Looking for a medical weight loss clinic in Nashville? Skip the traffic and 300% medspa markups. Get Semaglutide delivered overnight via Telehealth FX.",
    url: 'https://telehealthfx.com/weight-loss/nashville',
    type: 'article',
  }
,
  alternates: {
    canonical: 'https://telehealthfx.com/weight-loss/nashville/'
  }
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalOrganization",
    "name": "Telehealth FX - Nashville Weight Loss Hub",
    "url": "https://telehealthfx.com/weight-loss/nashville",
    "description": "Premium telehealth weight loss clinic providing compounded Semaglutide and Tirzepatide to Nashville, Tennessee residents.",
    "areaServed": {
      "@type": "City",
      "name": "Nashville",
      "sameAs": "https://en.wikipedia.org/wiki/Nashville"
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
      
        <WeightLossNashville />
      
    </>
  );
}
