import React from 'react';
import { KEYWORD_MAGNETS } from '../../data/keyword-magnets';
import { CompareDirectoryClient } from '../../components/compare-directory-client';

export const metadata = {
  robots: { index: true, follow: true },
  title: "Telehealth FX Comparisons & Clinical Guides (2026)",
  description: "Compare compounded semaglutide, tirzepatide, and TRT pricing across top telehealth providers. First-month promos from $99, Affirm financing, and 48-hr delivery.",
  alternates: {
    canonical: 'https://telehealthfx.com/compare/',
  },
  openGraph: {
    title: "Telehealth FX Comparisons & Clinical Guides (2026)",
    description: "Compare compounded semaglutide, tirzepatide, and TRT pricing across top telehealth providers. First-month promos from $99, Affirm financing, and 48-hr delivery.",
    url: 'https://telehealthfx.com/compare/',
    siteName: 'Telehealth FX',
  },
};

export default function CompareDirectoryPage() {
  return (
    <div style={{ paddingTop: '110px', minHeight: '80vh', backgroundColor: 'var(--bg)' }}>
      <CompareDirectoryClient magnets={KEYWORD_MAGNETS} />
    </div>
  );
}
