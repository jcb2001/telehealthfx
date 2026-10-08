import { MedicationsDirectory } from "../../components/medications-directory.jsx";

export const metadata = {
  title: "Telehealth Medications & Longevity Treatments Directory | Telehealth FX",
  description: "Explore doctor-prescribed telehealth medications: Compounded Semaglutide ($79/mo), Tirzepatide ($129/mo), NAD+, Sermorelin, TRT, Bio-Identical HRT, and Dermatology.",
  alternates: {
    canonical: 'https://telehealthfx.com/medications/',
  },
};

export default function Page() {
  return <MedicationsDirectory />;
}
