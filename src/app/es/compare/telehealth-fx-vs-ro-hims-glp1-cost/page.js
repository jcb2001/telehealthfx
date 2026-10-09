import { CompareTelehealthFxVsRoHimsEs } from "@/components/compare-telehealth-fx-vs-ro-hims-es.jsx";

export const metadata = {
  robots: { index: true, follow: true },
  alternates: {
    canonical: 'https://telehealthfx.com/es/compare/telehealth-fx-vs-ro-hims-glp1-cost/',
    languages: {
      'en-US': 'https://telehealthfx.com/compare/telehealth-fx-vs-ro-hims-glp1-cost/',
      'es-US': 'https://telehealthfx.com/es/compare/telehealth-fx-vs-ro-hims-glp1-cost/',
      'x-default': 'https://telehealthfx.com/compare/telehealth-fx-vs-ro-hims-glp1-cost/',
    },
  },
  title: "Telehealth FX vs Ro y Hims: Comparación de Costos GLP-1 2026",
  description: "Compara los costos de medicamentos GLP-1 para bajar de peso entre Telehealth FX, Ro y Hims. Tarifa plana de $79 semaglutida y $129 tirzepatida sin membresías.",
  openGraph: {
    title: "Telehealth FX vs Ro y Hims: Comparación de Costos GLP-1 2026",
    description: "Compara los costos de medicamentos GLP-1 para bajar de peso entre Telehealth FX, Ro y Hims. Tarifa plana de $79 semaglutida y $129 tirzepatida sin membresías.",
    url: "https://telehealthfx.com/es/compare/telehealth-fx-vs-ro-hims-glp1-cost/",
    siteName: "Telehealth FX",
    images: [
      {
        url: "https://telehealthfx.com/assets/telehealthfx-vs-ro-hims-cost-featured.jpg",
        width: 1200,
        height: 675,
        alt: "Comparación de costos de pérdida de peso con GLP-1: Telehealth FX vs Ro y Hims",
      },
    ],
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
        "url": "https://telehealthfx.com/es/compare/telehealth-fx-vs-ro-hims-glp1-cost/",
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
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "¿Telehealth FX cobra tarifas mensuales de membresía como Ro?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "No. Telehealth FX cobra exactamente $0 en tarifas mensuales de membresía. Las consultas médicas, el apoyo clínico y la comunicación con el médico son completamente gratuitos. Solo pagas por el medicamento recetado ($79/mes para Semaglutida o $129/mes para Tirzepatida)."
            }
          },
          {
            "@type": "Question",
            "name": "¿Puedo transferir mi receta de GLP-1 de Ro o Hims sin reiniciar la dosis?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Sí. Nuestros médicos certificados pueden revisar su comprobante de prescripción previa y mantener su nivel actual de dosis sin obligarle a comenzar desde cero."
            }
          }
        ]
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <CompareTelehealthFxVsRoHimsEs />
    </>
  );
}
