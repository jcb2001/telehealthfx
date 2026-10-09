import { CompareTelehealthFxVsMochiEs } from "@/components/compare-telehealth-fx-vs-mochi-es.jsx";

export const metadata = {
  robots: { index: true, follow: true },
  alternates: {
    canonical: 'https://telehealthfx.com/es/compare/telehealth-fx-vs-mochi-health-cost/',
    languages: {
      'en-US': 'https://telehealthfx.com/compare/telehealth-fx-vs-mochi-health-cost/',
      'es-US': 'https://telehealthfx.com/es/compare/telehealth-fx-vs-mochi-health-cost/',
      'x-default': 'https://telehealthfx.com/compare/telehealth-fx-vs-mochi-health-cost/',
    },
  },
  title: "Telehealth FX vs Mochi Health: Comparación de Precios de GLP-1 2026",
  description: "¿Cansado de pagar cuotas de membresía en Mochi Health? Telehealth FX ofrece semaglutida ($79/mes) y tirzepatida ($129/mes) con $0 en cuotas mensuales.",
  openGraph: {
    title: "Telehealth FX vs Mochi Health: Comparación de Precios de GLP-1 2026",
    description: "¿Cansado de pagar cuotas de membresía en Mochi Health? Telehealth FX ofrece semaglutida ($79/mes) y tirzepatida ($129/mes) con $0 en cuotas mensuales.",
    url: "https://telehealthfx.com/es/compare/telehealth-fx-vs-mochi-health-cost/",
    siteName: "Telehealth FX",
  },
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "MedicalWebPage",
        "name": metadata.title,
        "description": metadata.description,
        "url": "https://telehealthfx.com/es/compare/telehealth-fx-vs-mochi-health-cost/",
        "inLanguage": "es-US",
        "author": {
          "@type": "Person",
          "name": "Julian Mercer, M.S.",
          "jobTitle": "Líder de Economía Clínica de la Salud"
        },
        "publisher": {
          "@type": "Organization",
          "name": "Telehealth FX",
          "url": "https://telehealthfx.com"
        }
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <CompareTelehealthFxVsMochiEs />
    </>
  );
}
