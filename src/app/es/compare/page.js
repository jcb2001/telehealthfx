import React from 'react';
import { KEYWORD_MAGNETS } from '@/data/keyword-magnets';
import { CompareDirectoryClientEs } from '@/components/compare-directory-client-es';

export const metadata = {
  robots: { index: true, follow: true },
  title: "Comparativas y Guías Clínicas de Telesalud (2026) | Telehealth FX",
  description: "Compara precios de semaglutida ($79/mes), tirzepatida ($129/mes) y TRT frente a los principales proveedores de telemedicina. Sin tarifas de membresía y envío refrigerado en 48 horas.",
  alternates: {
    canonical: 'https://telehealthfx.com/es/compare/',
    languages: {
      'en-US': 'https://telehealthfx.com/compare/',
      'es-US': 'https://telehealthfx.com/es/compare/',
      'x-default': 'https://telehealthfx.com/compare/',
    },
  },
  openGraph: {
    title: "Comparativas y Guías Clínicas de Telesalud (2026) | Telehealth FX",
    description: "Compara precios de semaglutida ($79/mes), tirzepatida ($129/mes) y TRT frente a los principales proveedores de telemedicina. Sin tarifas de membresía y envío refrigerado en 48 horas.",
    url: 'https://telehealthfx.com/es/compare/',
    siteName: 'Telehealth FX',
  },
};

export default function CompareDirectoryPage() {
  return (
    <div style={{ paddingTop: '110px', minHeight: '80vh', backgroundColor: 'var(--bg)' }}>
      <CompareDirectoryClientEs magnets={KEYWORD_MAGNETS} />
    </div>
  );
}
