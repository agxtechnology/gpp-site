import type { Metadata } from "next";
import HeroSection from "./components/HeroSection";
import ServicesSection from "./components/ServicesSection";
import AboutSection from "./components/AboutSection";
import CTABanner from "./components/CTABanner";
import ContactSection from "./components/ContactSection";

export const metadata: Metadata = {
  title: "Gopal Picture Palace | 25+ Years of Premium Glass Framing & Custom Photo Frames",
  description:
    "Gopal Picture Palace brings 25+ years of master craftsmanship in custom wooden photo frames, anti-reflective & UV-protective glass framing, canvas stretching, and art preservation. Visit our framing studio today.",
  keywords: [
    "Gopal Picture Palace",
    "25 years framing experience",
    "picture framing shop",
    "glass framing store",
    "photo frames near me",
    "custom photo frames",
    "best photo frame maker",
    "wooden photo frames",
    "acrylic glass framing",
    "UV museum glass frames",
    "anti reflective glass framing",
    "bespoke wall art framing",
    "certificate framing",
    "canvas stretching shop",
    "frame repair and restoration",
  ],
  alternates: {
    canonical: "https://gopalpicturepalace.com",
  },
  openGraph: {
    title: "Gopal Picture Palace | 25+ Years of Premium Glass Framing & Custom Photo Frames",
    description:
      "Crafting exquisite custom photo frames and museum-grade glass framing for over 25 years. Preserving your precious memories in timeless art.",
    url: "https://gopalpicturepalace.com",
    siteName: "Gopal Picture Palace",
    locale: "en_LK",
    type: "website",
    images: [
      {
        url: "/service-photo-frames.jpg",
        width: 1200,
        height: 630,
        alt: "Gopal Picture Palace - 25+ Years of Excellence in Custom Framing",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gopal Picture Palace | 25+ Years of Premium Glass Framing & Custom Photo Frames",
    description:
      "Crafting exquisite custom photo frames and museum-grade glass framing for over 25 years.",
    images: ["/service-photo-frames.jpg"],
  },
};

const homeSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": "https://gopalpicturepalace.com/#website",
      "url": "https://gopalpicturepalace.com",
      "name": "Gopal Picture Palace",
      "description": "25+ Years of Premium Glass Framing & Custom Handcrafted Photo Frames",
      "publisher": {
        "@id": "https://gopalpicturepalace.com/#business",
      },
    },
    {
      "@type": "LocalBusiness",
      "@id": "https://gopalpicturepalace.com/#business",
      "name": "Gopal Picture Palace",
      "url": "https://gopalpicturepalace.com",
      "logo": "https://gopalpicturepalace.com/service-photo-frames.jpg",
      "image": "https://gopalpicturepalace.com/hero-bg.jpg",
      "description": "Premier picture and glass framing studio with 25+ years of master craftsmanship.",
      "telephone": "+94372226934",
      "priceRange": "$$",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "21/4, Chathurassa Mawatha",
        "addressLocality": "Kurunegala",
        "addressCountry": "LK",
      },
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
          "opens": "10:00",
          "closes": "20:30",
        },
      ],
    },
    {
      "@type": "FAQPage",
      "@id": "https://gopalpicturepalace.com/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How long has Gopal Picture Palace been in business?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Gopal Picture Palace has been proudly serving clients with master glass framing and custom photo framing for over 25 years with more than 50,000 frames crafted.",
          },
        },
        {
          "@type": "Question",
          "name": "What types of glass framing do you offer?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We offer premium anti-reflective glass, UV-protective museum glass, clear float glass, and shatter-resistant acrylic glass options for preserving valuable artworks and photos.",
          },
        },
        {
          "@type": "Question",
          "name": "Do you provide custom-sized photo frames?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, all our frames are custom-crafted to your exact artwork or photo dimensions, with hundreds of wooden, metal, and ornate moulding designs to choose from.",
          },
        },
      ],
    },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeSchema) }}
      />
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <CTABanner />
      <ContactSection />
    </>
  );
}
