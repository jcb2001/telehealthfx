import React from 'react';
import { notFound } from 'next/navigation';
import { KEYWORD_MAGNETS, KEYWORD_MAGNETS_BY_SLUG } from '../../../data/keyword-magnets';
import { KeywordMagnetTemplate } from '../../../components/keyword-magnet-template';

export function generateStaticParams() {
  return KEYWORD_MAGNETS.map((item) => ({
    slug: item.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const data = KEYWORD_MAGNETS_BY_SLUG[slug];

  if (!data) {
    return {
      title: 'Comparison & Clinical Guide | Telehealth FX',
      description: 'Compare doctor-prescribed GLP-1 weight loss and TRT hormone therapy options.',
    };
  }

  return {
    robots: { index: true, follow: true },
    title: data.title,
    description: data.metaDescription,
    alternates: {
      canonical: `https://telehealthfx.com/compare/${data.slug}/`,
    },
    openGraph: {
      title: data.title,
      description: data.metaDescription,
      url: `https://telehealthfx.com/compare/${data.slug}/`,
      siteName: 'Telehealth FX',
      type: 'article',
      images: [
        {
          url: 'https://telehealthfx.com/assets/Site%20Icon-modified.png',
          width: 1200,
          height: 630,
          alt: data.title,
        },
      ],
    },
  };
}

export default async function Page({ params }) {
  const { slug } = await params;
  const data = KEYWORD_MAGNETS_BY_SLUG[slug];

  if (!data) {
    notFound();
  }

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'MedicalWebPage',
        '@id': `https://telehealthfx.com/compare/${data.slug}/#webpage`,
        url: `https://telehealthfx.com/compare/${data.slug}/`,
        name: data.title,
        description: data.metaDescription,
        headline: data.h1,
        datePublished: '2026-06-01',
        dateModified: '2026-09-15',
        publisher: {
          '@type': 'MedicalOrganization',
          name: 'Telehealth FX',
          url: 'https://telehealthfx.com',
          logo: {
            '@type': 'ImageObject',
            url: 'https://telehealthfx.com/assets/Site%20Icon-modified.png',
          },
        },
        author: {
          '@type': 'Person',
          name: 'Julian Mercer, M.S.',
          jobTitle: 'Lead Bio-Systems Analyst',
          url: 'https://telehealthfx.com/about/',
        },
        medicalAudience: {
          '@type': 'MedicalAudience',
          audienceType: 'Patient',
        },
        about: [
          {
            '@type': 'MedicalTherapy',
            name: data.medication,
            offers: {
              '@type': 'Offer',
              price: data.price.replace(/[^0-9]/g, ''),
              priceCurrency: 'USD',
              availability: 'https://schema.org/InStock',
              url: data.ctaUrl,
            },
          },
        ],
      },
      {
        '@type': 'FAQPage',
        '@id': `https://telehealthfx.com/compare/${data.slug}/#faq`,
        mainEntity: [
          {
            '@type': 'Question',
            name: `How does Telehealth FX compare to ${data.competitorName || 'other clinics'}?`,
            acceptedAnswer: {
              '@type': 'Answer',
              text: `Telehealth FX provides all-inclusive pricing from ${data.price} with zero monthly membership fees, 24-hour clinician review, and express 48-hour cold-chain shipping from licensed 503A compounding pharmacies.`,
            },
          },
          {
            '@type': 'Question',
            name: `Can I transfer my current ${data.medication} dose without restarting?`,
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes. Upon verification of your current prescription or vial, our licensed clinicians will match your established maintenance dose directly to ensure continuity without an unnecessary titration reset.',
            },
          },
          {
            '@type': 'Question',
            name: 'Are these compounded medications legal and quality-verified?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes. All compounded medications are prepared exclusively by state-licensed 503A compounding pharmacies pursuant to patient-specific prescriptions under Section 503A of the FD&C Act, accompanied by HPLC certificates of analysis for high chemical purity.',
            },
          },
        ],
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <KeywordMagnetTemplate data={data} />
    </>
  );
}
