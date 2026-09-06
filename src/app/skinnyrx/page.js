import SkinnyRxClient from "./skinnyrx-client";

export const metadata = {
  title: "SkinnyRx Program Review & Assessment | Telehealth FX",
  description: "Doctor-designed GLP-1 weight loss programs with licensed US clinicians. Take our free online health assessment to determine if you qualify today.",
  alternates: {
    canonical: 'https://telehealthfx.com/skinnyrx/',
  },
  openGraph: {
    title: "SkinnyRx Program Review & Assessment | Telehealth FX",
    description: "Doctor-designed GLP-1 weight loss programs with licensed US clinicians. Take our free online health assessment to determine if you qualify today.",
    url: 'https://telehealthfx.com/skinnyrx/',
    siteName: 'Telehealth FX',
  },
};

export default function Page() {
  return <SkinnyRxClient />;
}
