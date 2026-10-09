import { TirzepatidePage } from "../../../components/medicine-tirzepatide.jsx";

export const metadata = {
  title: "Compounded Tirzepatide Program | $129/mo Flat Rate | Telehealth FX",
  description: "Get doctor-prescribed compounded Tirzepatide for a flat $129/month across all doses. Dual GIP/GLP-1 agonist for maximum weight loss. 24-hour approval, free cold-chain shipping.",
  alternates: {
    canonical: 'https://telehealthfx.com/medications/tirzepatide/',
    languages: {
      'en-US': 'https://telehealthfx.com/medications/tirzepatide/',
      'es-US': 'https://telehealthfx.com/es/medications/tirzepatide/',
      'x-default': 'https://telehealthfx.com/medications/tirzepatide/',
    },
  },
};

export default function Page() {
  return <TirzepatidePage />;
}
