import Script from "next/script";

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
      <Script
        id="revoffers-katalys"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `!function(w,d,e,u,v,n,t,s){if(w[u])return;n=w[u]=[];n.push=function(){Array.prototype.push.call(w[u],arguments)};t=d.createElement(e);t.async=!0;t.src=v;s=d.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,"script","_revoffers_track","https://js.katalys.com/js/KA-PECTXTXO70.js");`,
        }}
      />
      {children}
    </>
  );
}
