import "./globals.css";
import { Nav } from "../components/hero.jsx";
import { Footer } from "../components/sections-3.jsx";
import { AnnouncementBar } from "../components/announcement-bar.jsx";
import { GoogleAnalytics } from "@next/third-parties/google";

export const metadata = {
  title: "Telehealth FX — GLP-1 clinical weight loss, delivered.",
  description: "GLP-1 clinical weight loss, delivered to your door. Get Semaglutide and Tirzepatide prescribed with 24-hour approval and transparent pricing.",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  other: {
    'msvalidate.01': '9FFB4D7F7707ADCC4DFBEB0032E2BFFB',
  },
};

export default function RootLayout({ children }) {
  const globalSchema = {
    "@context": "https://schema.org",
    "@graph": [
      // ── Organization ──
      {
        "@type": ["MedicalOrganization", "Organization"],
        "@id": "https://telehealthfx.com/#organization",
        "name": "Telehealth FX",
        "url": "https://telehealthfx.com",
        "logo": "https://telehealthfx.com/assets/Site%20Icon-modified.png",
        "image": "https://telehealthfx.com/assets/Site%20Icon-modified.png",
        "contactPoint": { "@type": "ContactPoint", "contactType": "customer support" },
        "areaServed": [{ "@type": "Country", "name": "United States" }],
        "medicalSpecialty": [
          "http://schema.org/DietNutrition",
          "http://schema.org/Endocrine",
          "http://schema.org/Urologic",
          "http://schema.org/Dermatology",
          "http://schema.org/PrimaryCare"
        ],
        "alternateName": [
          "TelehealthFX",
          "Telehealth FX Online Clinic",
          "GLP-1 Telehealth Provider",
          "Weight Loss Clinic Online",
          "Online TRT Clinic",
          "Men's Health Telehealth"
        ]
      },
      // ── WebSite ──
      {
        "@type": "WebSite",
        "@id": "https://telehealthfx.com/#website",
        "url": "https://telehealthfx.com",
        "name": "Telehealth FX",
        "publisher": { "@id": "https://telehealthfx.com/#organization" }
      },
      // ── Person ──
      {
        "@type": "Person",
        "@id": "https://telehealthfx.com/#julianmercer",
        "name": "Julian Mercer",
        "jobTitle": "Lead Bio-Systems Analyst",
        "worksFor": { "@id": "https://telehealthfx.com/#organization" },
        "description": "Lead Bio-Systems Analyst at Telehealth FX specializing in metabolic data modeling and pharmacokinetic protocols."
      }
    ]
  };

  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Instrument+Serif:ital@0;1&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet" />
        <link rel="icon" type="image/png" href="/favicon.png?v=3" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(globalSchema) }} />
      </head>
      <body>
        <GoogleAnalytics gaId="G-Z7XPF8WRQ8" />
        <div id="root-header" style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50 }}>
          <AnnouncementBar />
          <Nav />
        </div>
        <div id="root-header-spacer" style={{ height: 112 }} />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
