import { HairPage } from "../../../components/medicine-hair.jsx";

export const metadata = {
  title: "Hair Loss Treatment Online | Telehealth FX",
  description: "Clinician-prescribed hair loss treatment online — Finasteride, Minoxidil, and custom compounded formulas. Free discreet shipping in plain packaging.",
  alternates: { canonical: 'https://telehealthfx.com/medications/hair-loss/' },
  openGraph: {
    title: "Hair Loss Treatment Online | Telehealth FX",
    description: "Clinician-prescribed Finasteride, Minoxidil, and custom compounds for hair loss. Free discreet shipping.",
    url: "https://telehealthfx.com/medications/hair-loss/",
    siteName: "Telehealth FX",
    images: [{ url: "https://telehealthfx.com/assets/hair-hero.png", width: 1024, height: 1024, alt: "Hair Loss Treatment — Telehealth FX" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hair Loss Treatment Online | Telehealth FX",
    description: "Clinician-prescribed hair loss treatment. Free discreet shipping.",
    images: ["https://telehealthfx.com/assets/hair-hero.png"],
  },
};

export default function Page() {
  return <HairPage />;
}
