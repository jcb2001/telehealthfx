import { EnclomipheneNav } from "../../../components/medicine-enclomiphene.jsx";

export default function EnclomipheneLayout({ children }) {
  return (
    <>
      <style>{`
        #root-header { display: none !important; }
        #root-header-spacer { display: none !important; }
      `}</style>
      <div style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50 }}>
        <EnclomipheneNav />
      </div>
      <div style={{ height: 72 }} />
      {children}
    </>
  );
}
