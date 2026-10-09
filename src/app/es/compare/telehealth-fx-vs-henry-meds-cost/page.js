import { CompareTelehealthFxVsHenryMedsEs } from "@/components/compare-telehealth-fx-vs-henry-meds-es.jsx";

export const metadata = {
  robots: { index: true, follow: true },
  alternates: {
    canonical: 'https://telehealthfx.com/es/compare/telehealth-fx-vs-henry-meds-cost/',
    languages: {
      'en-US': 'https://telehealthfx.com/compare/telehealth-fx-vs-henry-meds-cost/',
      'es-US': 'https://telehealthfx.com/es/compare/telehealth-fx-vs-henry-meds-cost/',
      'x-default': 'https://telehealthfx.com/compare/telehealth-fx-vs-henry-meds-cost/',
    },
  },
  title: "Telehealth FX vs Henry Meds: Comparación de Precios GLP-1 2026",
  description: "Compara los precios de semaglutida y tirzepatida compuesta entre Telehealth FX y Henry Meds. Ahorra hasta $3,840 al año con tarifas planas de $79 y $129/mes.",
  openGraph: {
    title: "Telehealth FX vs Henry Meds: Comparación de Precios GLP-1 2026",
    description: "Compara los precios de semaglutida y tirzepatida compuesta entre Telehealth FX y Henry Meds. Ahorra hasta $3,840 al año con tarifas planas de $79 y $129/mes.",
    url: "https://telehealthfx.com/es/compare/telehealth-fx-vs-henry-meds-cost/",
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
        "url": "https://telehealthfx.com/es/compare/telehealth-fx-vs-henry-meds-cost/",
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
      <CompareTelehealthFxVsHenryMedsEs />
    </>
  );
}
