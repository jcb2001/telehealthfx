import "./globals.css";
import { Nav } from "../components/hero.jsx";
import { Footer } from "../components/sections-3.jsx";

export const metadata = {
  title: "Telehealth FX — GLP-1 clinical weight loss, delivered.",
  description: "GLP-1 clinical weight loss, delivered to your door. Get Semaglutide and Tirzepatide prescribed with 24-hour approval and transparent pricing.",
};

export default function RootLayout({ children }) {
  const masterSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["MedicalOrganization", "Organization"],
        "@id": "https://telehealthfx.com/#organization",
        "name": "Telehealth FX",
        "url": "https://telehealthfx.com",
        "logo": "https://telehealthfx.com/assets/Site%20Icon-modified.png",
        "image": "https://telehealthfx.com/assets/Site%20Icon-modified.png",
        "contactPoint": {
          "@type": "ContactPoint",
          "contactType": "customer support"
        },
        "areaServed": [
          {
            "@type": "Country",
            "name": "United States"
          }
        ],
        "medicalSpecialty": [
          "https://en.wikipedia.org/wiki/Weight_loss",
          "https://en.wikipedia.org/wiki/Bariatrics",
          "https://en.wikipedia.org/wiki/Telehealth"
        ],
        "alternateName": [
          "TelehealthFX",
          "Telehealth FX Online Clinic",
          "GLP-1 Telehealth Provider",
          "Weight Loss Clinic Online"
        ]
      },
      {
        "@type": "WebSite",
        "@id": "https://telehealthfx.com/#website",
        "url": "https://telehealthfx.com",
        "name": "Telehealth FX",
        "publisher": {
          "@id": "https://telehealthfx.com/#organization"
        }
      },
      {
        "@type": "Person",
        "@id": "https://telehealthfx.com/#julianmercer",
        "name": "Julian Mercer",
        "jobTitle": "Lead Bio-Systems Analyst",
        "worksFor": {
          "@id": "https://telehealthfx.com/#organization"
        },
        "description": "Lead Bio-Systems Analyst at Telehealth FX specializing in metabolic data modeling and pharmacokinetic protocols."
      },
      {
        "@type": "MedicalService",
        "@id": "https://telehealthfx.com/#service",
        "name": "Telehealth Weight Loss & GLP-1 Program - Telehealth FX",
        "provider": {
          "@id": "https://telehealthfx.com/#organization"
        },
        "areaServed": {
          "@type": "Country",
          "name": "United States"
        },
        "serviceType": "Medical Weight Management"
      },
      {
        "@type": "Product",
        "@id": "https://telehealthfx.com/#product-semaglutide",
        "name": "Compounded Semaglutide Program",
        "brand": {
          "@id": "https://telehealthfx.com/#organization"
        },
        "description": "Comprehensive metabolic health program including clinician consults and compounded Semaglutide medication.",
        "image": "https://telehealthfx.com/assets/Site%20Icon-modified.png",
        "sku": "SEM-01",
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "reviewCount": "218"
        },
        "offers": {
          "@type": "Offer",
          "price": "146.00",
          "priceCurrency": "USD",
          "availability": "https://schema.org/InStock",
          "url": "https://telehealthfx.com",
          "shippingDetails": {
            "@type": "OfferShippingDetails",
            "shippingRate": {
              "@type": "MonetaryAmount",
              "value": "0",
              "currency": "USD"
            },
            "shippingDestination": {
              "@type": "DefinedRegion",
              "addressCountry": "US"
            },
            "deliveryTime": {
              "@type": "ShippingDeliveryTime",
              "handlingTime": {
                "@type": "QuantitativeValue",
                "minValue": 0,
                "maxValue": 1,
                "unitCode": "d"
              },
              "transitTime": {
                "@type": "QuantitativeValue",
                "minValue": 1,
                "maxValue": 2,
                "unitCode": "d"
              }
            }
          },
          "hasMerchantReturnPolicy": {
            "@type": "MerchantReturnPolicy",
            "applicableCountry": "US",
            "returnPolicyCategory": "https://schema.org/MerchantReturnNotPermitted"
          }
        }
      },
      {
        "@type": "Product",
        "@id": "https://telehealthfx.com/#product-tirzepatide",
        "name": "Compounded Tirzepatide Program",
        "brand": {
          "@id": "https://telehealthfx.com/#organization"
        },
        "description": "Comprehensive metabolic health program including clinician consults and compounded Tirzepatide medication.",
        "image": "https://telehealthfx.com/assets/Site%20Icon-modified.png",
        "sku": "TIR-01",
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.8",
          "reviewCount": "142"
        },
        "offers": {
          "@type": "Offer",
          "price": "258.00",
          "priceCurrency": "USD",
          "availability": "https://schema.org/InStock",
          "url": "https://telehealthfx.com",
          "shippingDetails": {
            "@type": "OfferShippingDetails",
            "shippingRate": {
              "@type": "MonetaryAmount",
              "value": "0",
              "currency": "USD"
            },
            "shippingDestination": {
              "@type": "DefinedRegion",
              "addressCountry": "US"
            },
            "deliveryTime": {
              "@type": "ShippingDeliveryTime",
              "handlingTime": {
                "@type": "QuantitativeValue",
                "minValue": 0,
                "maxValue": 1,
                "unitCode": "d"
              },
              "transitTime": {
                "@type": "QuantitativeValue",
                "minValue": 1,
                "maxValue": 2,
                "unitCode": "d"
              }
            }
          },
          "hasMerchantReturnPolicy": {
            "@type": "MerchantReturnPolicy",
            "applicableCountry": "US",
            "returnPolicyCategory": "https://schema.org/MerchantReturnNotPermitted"
          }
        }
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://telehealthfx.com/#breadcrumb",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://telehealthfx.com/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Metabolic Health Articles",
            "item": "https://telehealthfx.com/blog"
          }
        ]
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
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(masterSchema) }} />
      </head>
      <body>
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
