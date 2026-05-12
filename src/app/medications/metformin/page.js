import { MetforminPage } from "../../../components/medicine-metformin.jsx";

export const metadata = {
  title: "Metformin for Longevity & Metabolic Health | Telehealth FX",
  description: "Metformin 500mg prescribed online for metabolic optimization, insulin sensitivity, and longevity. Physician-guided, discreet 30-day supply shipped free.",
  alternates: { canonical: 'https://telehealthfx.com/medications/metformin/' },
  openGraph: {
    title: "Metformin for Longevity & Metabolic Health | Telehealth FX",
    description: "Physician-guided Metformin for metabolic optimization and longevity. 500mg, 30-day supply, free discreet shipping.",
    url: "https://telehealthfx.com/medications/metformin/",
    siteName: "Telehealth FX",
    images: [{ url: "https://telehealthfx.com/assets/metformin-hero.png", width: 1024, height: 1024, alt: "Metformin for Longevity — Telehealth FX" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Metformin for Longevity | Telehealth FX",
    description: "Physician-guided Metformin for metabolic health and longevity. Free discreet shipping.",
    images: ["https://telehealthfx.com/assets/metformin-hero.png"],
  },
};

export default function Page() {
  return <MetforminPage />;
}
