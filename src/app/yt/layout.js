export const metadata = {
  title: "Personalized Metabolic Health Program | Telehealth FX",
  description:
    "A clinician-guided program that supports appetite, metabolism, and long-term habits. Take a 2-minute health assessment to see if you qualify.",
  robots: { index: false, follow: true },
};

export default function GetStartedLayout({ children }) {
  return (
    <>
      <style>{`
        #root-header { display: none !important; }
        #root-header-spacer { display: none !important; }
        main + footer { display: none !important; }
      `}</style>
      {children}
    </>
  );
}
