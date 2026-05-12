import { EDNav } from "../../../components/medicine-ed.jsx";

export default function EDLayout({ children }) {
  return (
    <>
      {/* Hide the root GLP-1 header + spacer, replace with ED nav */}
      <style>{`
        #root-header { display: none !important; }
        #root-header-spacer { display: none !important; }
      `}</style>

      {/* Standalone ED header — no announcement bar */}
      <div style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50 }}>
        <EDNav />
      </div>
      <div style={{ height: 72 }} />

      {children}
    </>
  );
}
