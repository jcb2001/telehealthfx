import { BlogTrtAndSleepApnea2026 } from '@/components/blog-trt-and-sleep-apnea-2026';

export const metadata = {
  title: "TRT and Sleep Apnea: Risk, Management, and Evidence | Telehealth FX",
  description: "Does TRT cause sleep apnea? Discover the modern clinical evidence, how weight loss on TRT can improve OSA, and safe management protocols.",
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    "name": "TRT and Sleep Apnea: Risk, Management, and Evidence",
    "description": "Does TRT cause sleep apnea? Discover the modern clinical evidence, how weight loss on TRT can improve OSA, and safe management protocols.",
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
      "image": "https://telehealthfx.com/assets/trt_sleep_apnea.png",
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
      <BlogTrtAndSleepApnea2026 />
    </>
  );
}
