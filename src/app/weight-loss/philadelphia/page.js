import React from 'react';
import { WeightLossPhiladelphia } from '../../../components/weight-loss-philadelphia.jsx';
import { GenericPage } from '../../../components/generic-page.jsx';

export const metadata = {
  title: "Medical Weight Loss Clinic Philadelphia | Semaglutide & GLP-1 | Telehealth FX",
  description: "Looking for a medical weight loss clinic in Philadelphia? Skip the traffic and 300% medspa markups. Get Semaglutide delivered overnight via Telehealth FX.",
  openGraph: {
    title: "Medical Weight Loss Clinic Philadelphia | Semaglutide & GLP-1",
    description: "Looking for a medical weight loss clinic in Philadelphia? Skip the traffic and 300% medspa markups. Get Semaglutide delivered overnight via Telehealth FX.",
    url: 'https://telehealthfx.com/weight-loss/philadelphia',
    type: 'article',
  }
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalOrganization",
    "name": "Telehealth FX - Philadelphia Weight Loss Hub",
    "url": "https://telehealthfx.com/weight-loss/philadelphia",
    "description": "Premium telehealth weight loss clinic providing compounded Semaglutide and Tirzepatide to Philadelphia, Pennsylvania residents.",
    "areaServed": {
      "@type": "City",
      "name": "Philadelphia",
      "sameAs": "https://en.wikipedia.org/wiki/Philadelphia"
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
      <GenericPage hideHero={true}>
        <WeightLossPhiladelphia />
      </GenericPage>
    </>
  );
}
