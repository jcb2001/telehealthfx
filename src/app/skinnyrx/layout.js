import Script from "next/script";

export const metadata = {
  title: "Personalized Weight Loss Program | SkinnyRx",
  description:
    "Doctor-designed GLP-1 weight loss programs personalized for your body. Take a free online assessment and get started with SkinnyRx today.",
  robots: { index: false, follow: true },
};

export default function SkinnyRxLayout({ children }) {
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
