import { HairNav } from "../../../components/medicine-hair.jsx";

export default function HairLayout({ children }) {
  return (
    <>
      <style>{`
        #root-header { display: none !important; }
        #root-header-spacer { display: none !important; }
      `}</style>
      <div style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50 }}>
        <HairNav />
      </div>
      <div style={{ height: 72 }} />
      {children}
    </>
  );
}
