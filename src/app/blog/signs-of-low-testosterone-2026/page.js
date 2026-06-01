import { BlogSignsOfLowTestosterone2026 } from '@/components/blog-signs-of-low-testosterone-2026';

export const metadata = {
  title: "12 Signs of Low Testosterone Most Men Ignore (2026) | Telehealth FX",
  description: "Discover the 12 most common signs of clinically low testosterone (hypogonadism) that men often ignore, from brain fog to persistent fatigue.",
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    "name": "12 Signs of Low Testosterone Most Men Ignore (2026)",
    "description": "Discover the 12 most common signs of clinically low testosterone (hypogonadism) that men often ignore, from brain fog to persistent fatigue.",
    "publisher": {
      "@type": "Organization",
      "name": "Telehealth FX",
      "logo": {
        "@type": "ImageObject",
        "url": "https://telehealthfx.com/logo.png"
      }
    },
    "about": {
      "@type": "MedicalCondition",
      "name": "Hypogonadism"
    },
    "mainEntity": {
      "@type": "Product",
      "name": "Telehealth FX — TRT Program",
      "description": "Comprehensive, physician-managed testosterone replacement therapy including labs, medications, and ongoing clinical monitoring.",
      "image": "https://telehealthfx.com/assets/signs_low_testosterone.png",
      "offers": {
        "@type": "Offer",
        "url": "https://go.telehealthfx.com/testosterone",
        "priceCurrency": "USD",
        "price": "79.00",
        "availability": "https://schema.org/InStock",
        "shippingDetails": {
          "@type": "OfferShippingDetails",
          "shippingRate": {
            "@type": "MonetaryAmount",
            "value": "0.00",
            "currency": "USD"
          },
          "deliveryTime": {
            "@type": "ShippingDeliveryTime",
            "businessDays": {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"]
            }
          }
        },
        "hasMerchantReturnPolicy": {
          "@type": "MerchantReturnPolicy",
          "returnPolicyCategory": "https://schema.org/MerchantReturnNotPermitted",
          "merchantReturnLink": "https://telehealthfx.com/terms"
        }
      }
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <BlogSignsOfLowTestosterone2026 />
    </>
  );
}
