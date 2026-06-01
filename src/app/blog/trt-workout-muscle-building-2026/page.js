import { BlogTrtWorkoutMuscleBuilding2026 } from '@/components/blog-trt-workout-muscle-building-2026';

export const metadata = {
  title: "Working Out on TRT: Maximizing Muscle Growth and Recovery | Telehealth FX",
  description: "How to optimize your training frequency, volume, and nutrition to maximize muscle growth and take advantage of your new hormonal baseline on TRT.",
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    "name": "Working Out on TRT: Maximizing Muscle Growth and Recovery",
    "description": "How to optimize your training frequency, volume, and nutrition to maximize muscle growth and take advantage of your new hormonal baseline on TRT.",
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
      "image": "https://telehealthfx.com/assets/trt_workout_muscle.png",
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
      <BlogTrtWorkoutMuscleBuilding2026 />
    </>
  );
}
