import { EnclomiphenePage } from "../../../components/medicine-enclomiphene.jsx";

export const metadata = {
  title: "Enclomiphene (Oral TRT) | Boost Testosterone Naturally | Telehealth FX",
  description: "Enclomiphene prescribed online — oral testosterone optimization that boosts your body's own production up to 2.5x while preserving fertility. No injections, no creams.",
  alternates: { canonical: 'https://telehealthfx.com/medications/enclomiphene/' },
  openGraph: {
    title: "Enclomiphene (Oral TRT) | Telehealth FX",
    description: "Boost your testosterone up to 2.5x naturally — no injections, no fertility suppression. Enclomiphene prescribed online.",
    url: "https://telehealthfx.com/medications/enclomiphene/",
    siteName: "Telehealth FX",
    images: [{ url: "https://telehealthfx.com/assets/enclomiphene-hero.png", width: 1024, height: 1024, alt: "Enclomiphene Oral TRT — Telehealth FX" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Enclomiphene (Oral TRT) | Telehealth FX",
    description: "Boost testosterone naturally. No injections, no fertility suppression. Prescribed online.",
    images: ["https://telehealthfx.com/assets/enclomiphene-hero.png"],
  },
};

export default function Page() {
  return <EnclomiphenePage />;
}
