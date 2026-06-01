import { BlogTestosteroneAndErectileDysfunction2026 } from '@/components/blog-testosterone-and-erectile-dysfunction-2026';

export const metadata = {
  title: "Testosterone and Erectile Dysfunction: When Low T is the Cause | Telehealth FX",
  description: "Understand the clinical difference between vascular and hormonal ED, and why a combination of TRT and Tadalafil is often the most effective protocol.",
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    "name": "Testosterone and Erectile Dysfunction: When Low T is the Cause",
    "description": "Understand the clinical difference between vascular and hormonal ED, and why a combination of TRT and Tadalafil is often the most effective protocol.",
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
      "image": "https://telehealthfx.com/assets/testosterone_ed_cause.png",
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
      <BlogTestosteroneAndErectileDysfunction2026 />
    </>
  );
}
