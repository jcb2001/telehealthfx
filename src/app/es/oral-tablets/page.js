import { OralTabletsPageEs } from "@/components/oral-tablets-es.jsx";

export const metadata = {
  robots: { index: true, follow: true },
  title: "Tabletas Sublinguales de Semaglutida y Tirzepatida | Sin Agujas | Telehealth FX",
  description: "Tratamiento de pérdida de peso con tabletas orales disolubles de Semaglutida ($149/mes) y Tirzepatida ($199/mes). Cero agujas semanales, médicos certificados y envío exprés gratuito.",
  alternates: {
    canonical: 'https://telehealthfx.com/es/oral-tablets/',
    languages: {
      'en-US': 'https://telehealthfx.com/skinnyrx/',
      'es-US': 'https://telehealthfx.com/es/oral-tablets/',
      'x-default': 'https://telehealthfx.com/skinnyrx/',
    },
  },
  openGraph: {
    title: "Tabletas Sublinguales de Semaglutida y Tirzepatida | Sin Agujas | Telehealth FX",
    description: "Tratamiento de pérdida de peso con tabletas orales disolubles de Semaglutida ($149/mes) y Tirzepatida ($199/mes). Cero agujas semanales, médicos certificados y envío exprés gratuito.",
    url: 'https://telehealthfx.com/es/oral-tablets/',
    siteName: 'Telehealth FX',
  },
};

export default function Page() {
  return <OralTabletsPageEs />;
}
