import { TestosteroneNav } from "../../../components/medicine-testosterone.jsx";

export default function TestosteroneLayout({ children }) {
  return (
    <>
      {/* Hide the root GLP-1 header + spacer, replace with TRT nav */}
      <style>{`
        #root-header { display: none !important; }
        #root-header-spacer { display: none !important; }
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
