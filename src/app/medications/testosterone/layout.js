import { TestosteroneNav } from "../../../components/medicine-testosterone.jsx";

export default function TestosteroneLayout({ children }) {
  return (
    <>
      {/* Override the fixed header from root layout: hide the GLP-1 bar + default nav */}
      <style>{`
        body > div:first-of-type { display: none !important; }
        body > div:nth-of-type(2) { height: 0 !important; }
      `}</style>

      {/* Standalone TRT header — no announcement bar */}
      <div style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50 }}>
        <TestosteroneNav />
      </div>
      <div style={{ height: 72 }} />

      {children}
    </>
  );
}
