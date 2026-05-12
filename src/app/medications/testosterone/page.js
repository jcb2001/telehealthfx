import { TestosteronePage } from "../../../components/medicine-testosterone.jsx";

export const metadata = {
  title: "Testosterone Therapy (TRT) | From $79/mo | Telehealth FX",
  description: "Get prescribed Testosterone Replacement Therapy (TRT) online — injectable, oral, or topical. From $79/mo with licensed clinicians, free discreet shipping, and a price match guarantee.",
  alternates: {
    canonical: 'https://telehealthfx.com/medications/testosterone/',
  },
  openGraph: {
    title: "Testosterone Therapy (TRT) | From $79/mo | Telehealth FX",
    description: "Personalized TRT prescribed by licensed clinicians — injectable, oral, or topical. From $79/mo with free discreet shipping and a price match guarantee.",
    url: "https://telehealthfx.com/medications/testosterone/",
    siteName: "Telehealth FX",
    images: [
      {
        url: "https://telehealthfx.com/assets/trt-hero.png",
        width: 1024,
        height: 1024,
        alt: "Testosterone Replacement Therapy — Telehealth FX",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Testosterone Therapy (TRT) | From $79/mo | Telehealth FX",
    description: "Personalized TRT from licensed clinicians. Injectable, oral, or topical — from $79/mo with free discreet shipping.",
    images: ["https://telehealthfx.com/assets/trt-hero.png"],
  },
};

export default function Page() {
  return <TestosteronePage />;
}
