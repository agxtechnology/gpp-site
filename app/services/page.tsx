import type { Metadata } from "next";
import Link from "next/link";
import ServicesSection from "../components/ServicesSection";
import CTABanner from "../components/CTABanner";

export const metadata: Metadata = {
  title: "Framing Services & Custom Mouldings | Gopal Picture Palace",
  description:
    "Explore precision framing services at Gopal Picture Palace: UV & Anti-Reflective Glass Framing, Handcrafted Wooden Photo Frames, Canvas Stretching, Certificate & Jersey Framing backed by 25+ years of master craftsmanship.",
  keywords: [
    "glass framing services",
    "custom photo frames",
    "UV protective glass framing",
    "anti reflective picture glass",
    "wooden frame mouldings",
    "canvas stretching and framing",
    "certificate framing",
    "art preservation framing",
    "acrylic glass frames",
    "custom picture framing near me",
    "Gopal Picture Palace framing services",
  ],
  alternates: {
    canonical: "https://gopalpicturepalace.com/services",
  },
  openGraph: {
    title: "Framing Services & Custom Mouldings | Gopal Picture Palace",
    description:
      "25+ Years of excellence in museum-quality glass framing, custom wooden photo frames, canvas stretching, and art preservation.",
    url: "https://gopalpicturepalace.com/services",
    siteName: "Gopal Picture Palace",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/service-glass-framing.jpg",
        width: 1200,
        height: 630,
        alt: "Gopal Picture Palace - Framing Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Framing Services & Custom Mouldings | Gopal Picture Palace",
    description:
      "Museum-quality glass framing, custom wooden photo frames, and canvas stretching with 25+ years of craftsmanship.",
    images: ["/service-glass-framing.jpg"],
  },
};

const servicesSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://gopalpicturepalace.com",
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Services",
          "item": "https://gopalpicturepalace.com/services",
        },
      ],
    },
    {
      "@type": "Service",
      "name": "Glass Framing",
      "serviceType": "Picture Framing",
      "provider": {
        "@type": "LocalBusiness",
        "name": "Gopal Picture Palace",
      },
      "description":
        "Anti-reflective and UV-protective glass framing engineered to protect and showcase artwork with crystal clarity.",
      "offers": {
        "@type": "Offer",
        "priceCurrency": "INR",
        "priceSpecification": {
          "@type": "UnitPriceSpecification",
          "priceType": "https://schema.org/InvoicePrice",
        },
      },
    },
    {
      "@type": "Service",
      "name": "Custom Handcrafted Photo Frames",
      "serviceType": "Custom Framing",
      "provider": {
        "@type": "LocalBusiness",
        "name": "Gopal Picture Palace",
      },
      "description":
        "Bespoke wooden and metal photo frames custom-crafted to any dimensions with over 500 moulding designs.",
    },
  ],
};

export default function ServicesPage() {
  return (
    <div className="pt-24 min-h-screen bg-[#faf8f5] dark:bg-[#0a0a0a] transition-colors duration-300">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesSchema) }}
      />
      {/* Breadcrumb & Header */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-8">
        <nav aria-label="Breadcrumb" className="text-xs text-neutral-500 dark:text-white/40 mb-6">
          <ol className="flex items-center gap-2">
            <li>
              <Link href="/" className="hover:text-[#b8943f] dark:hover:text-[#c9a84c] transition-colors">
                Home
              </Link>
            </li>
            <li>/</li>
            <li className="text-neutral-900 dark:text-white font-medium" aria-current="page">
              Services
            </li>
          </ol>
        </nav>

        <header className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[11px] tracking-[0.4em] uppercase text-[#b8943f] dark:text-[#c9a84c] font-semibold">
            25+ Years of Master Artistry
          </span>
          <h1 className="mt-3 text-4xl sm:text-5xl font-extrabold text-neutral-900 dark:text-white tracking-tight">
            Premium Framing Solutions
          </h1>
          <p className="mt-4 text-neutral-600 dark:text-white/50 text-base leading-relaxed">
            Every memory, painting, and certificate holds distinctive emotional value.
            Our master craftsmen combine time-honoured techniques with precision materials
            to deliver museum-grade durability and aesthetic perfection.
          </p>
        </header>
      </div>

      <ServicesSection />
      <CTABanner />
    </div>
  );
}
