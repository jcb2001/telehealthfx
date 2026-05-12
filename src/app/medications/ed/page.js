import { EDPage } from "../../../components/medicine-ed.jsx";

export const metadata = {
  title: "Erectile Dysfunction Treatment Online | Telehealth FX",
  description: "Discreet, affordable erectile dysfunction treatment prescribed online by licensed clinicians. Sildenafil, Tadalafil, and custom compounded options. Free shipping in plain packaging.",
  alternates: {
    canonical: 'https://telehealthfx.com/medications/ed/',
  },
  openGraph: {
    title: "Erectile Dysfunction Treatment Online | Telehealth FX",
    description: "Discreet, affordable ED medication prescribed by licensed clinicians. Sildenafil, Tadalafil, and custom compounded formulas — shipped free in plain packaging.",
    url: "https://telehealthfx.com/medications/ed/",
    siteName: "Telehealth FX",
    images: [
      {
        url: "https://telehealthfx.com/assets/ed-hero.png",
        width: 1024,
        height: 1024,
        alt: "Erectile Dysfunction Treatment — Telehealth FX",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Erectile Dysfunction Treatment Online | Telehealth FX",
    description: "Discreet, affordable ED treatment from licensed clinicians. Free shipping in plain packaging.",
    images: ["https://telehealthfx.com/assets/ed-hero.png"],
  },
};

export default function Page() {
  return <EDPage />;
}
