import type { Metadata } from "next";
import Link from "next/link";
import ContactSection from "../components/ContactSection";

export const metadata: Metadata = {
  title: "Contact & Visit Us | Gopal Picture Palace Framing Studio",
  description:
    "Visit Gopal Picture Palace for custom photo framing and museum glass framing consultations. Studio address, phone, WhatsApp support, and opening hours.",
  keywords: [
    "contact Gopal Picture Palace",
    "framing shop near me contact",
    "picture framing store phone number",
    "custom frame shop location",
    "framing workshop address",
    "Gopal Picture Palace timings",
    "photo frame makers contact",
  ],
  alternates: {
    canonical: "https://gopalpicturepalace.com/contact",
  },
  openGraph: {
    title: "Contact & Visit Us | Gopal Picture Palace Framing Studio",
    description:
      "Visit our framing workshop or connect with our master framers. 25+ years of custom framing excellence.",
    url: "https://gopalpicturepalace.com/contact",
    siteName: "Gopal Picture Palace",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/service-custom-framing.jpg",
        width: 1200,
        height: 630,
        alt: "Gopal Picture Palace - Contact Us",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact & Visit Us | Gopal Picture Palace Framing Studio",
    description:
      "Visit our studio for custom photo framing, glass framing, and expert consultations.",
    images: ["/service-custom-framing.jpg"],
  },
};

const contactSchema = {
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
          "name": "Contact",
          "item": "https://gopalpicturepalace.com/contact",
        },
      ],
    },
    {
      "@type": "ContactPage",
      "@id": "https://gopalpicturepalace.com/contact/#webpage",
      "url": "https://gopalpicturepalace.com/contact",
      "name": "Contact Gopal Picture Palace",
      "mainEntity": {
        "@type": "LocalBusiness",
        "name": "Gopal Picture Palace",
        "telephone": "+919876543210",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Main Market Road",
          "addressLocality": "City Centre",
          "addressCountry": "IN",
        },
        "openingHours": "Mo-Sa 10:00-20:30",
      },
    },
  ],
};

export default function ContactPage() {
  return (
    <div className="pt-24 min-h-screen bg-[#faf8f5] dark:bg-[#0a0a0a] transition-colors duration-300">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }}
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
              Contact
            </li>
          </ol>
        </nav>

        <header className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[11px] tracking-[0.4em] uppercase text-[#b8943f] dark:text-[#c9a84c] font-semibold">
            We Welcome Walk-Ins & Consultations
          </span>
          <h1 className="mt-3 text-4xl sm:text-5xl font-extrabold text-neutral-900 dark:text-white tracking-tight">
            Connect With Our Framing Studio
          </h1>
          <p className="mt-4 text-neutral-600 dark:text-white/50 text-base leading-relaxed">
            Have questions about frame mouldings, glass types, or custom sizes?
            Our experienced artisans are ready to help you choose the ideal frame.
          </p>
        </header>
      </div>

      <ContactSection />
    </div>
  );
}
