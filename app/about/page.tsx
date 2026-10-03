import type { Metadata } from "next";
import Link from "next/link";
import AboutSection from "../components/AboutSection";
import CTABanner from "../components/CTABanner";

export const metadata: Metadata = {
  title: "About Us | 25+ Years of Picture Framing Heritage | Gopal Picture Palace",
  description:
    "Learn about Gopal Picture Palace, a landmark framing studio celebrating over 25 years of master craftsmanship. Over 50,000 custom frames crafted for homes, galleries, and businesses.",
  keywords: [
    "about Gopal Picture Palace",
    "picture framing history",
    "25 years framing legacy",
    "master framers",
    "custom frame shop heritage",
    "photo frame craftsmen",
    "expert glass framers",
    "art preservation studio",
    "Gopal Picture Palace story",
  ],
  alternates: {
    canonical: "https://gopalpicturepalace.com/about",
  },
  openGraph: {
    title: "About Us | 25+ Years of Picture Framing Heritage | Gopal Picture Palace",
    description:
      "Celebrating over 25 years of master craftsmanship, preserving precious memories and artworks in timeless handcrafted frames.",
    url: "https://gopalpicturepalace.com/about",
    siteName: "Gopal Picture Palace",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/hero-bg.jpg",
        width: 1200,
        height: 630,
        alt: "Gopal Picture Palace Heritage Workshop",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us | 25+ Years of Picture Framing Heritage | Gopal Picture Palace",
    description:
      "25+ Years of excellence in master picture and glass framing. Trusted by thousands of families and artists.",
    images: ["/hero-bg.jpg"],
  },
};

const aboutSchema = {
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
          "name": "About Us",
          "item": "https://gopalpicturepalace.com/about",
        },
      ],
    },
    {
      "@type": "AboutPage",
      "@id": "https://gopalpicturepalace.com/about/#webpage",
      "url": "https://gopalpicturepalace.com/about",
      "name": "About Gopal Picture Palace",
      "mainEntity": {
        "@type": "Organization",
        "name": "Gopal Picture Palace",
        "foundingDate": "2001",
        "description":
          "Master picture framing studio with over 25 years of excellence and 50,000+ custom frames delivered.",
        "telephone": "+919876543210",
      },
    },
  ],
};

export default function AboutPage() {
  return (
    <div className="pt-24 min-h-screen bg-[#faf8f5] dark:bg-[#0a0a0a] transition-colors duration-300">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutSchema) }}
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
              About Us
            </li>
          </ol>
        </nav>

        <header className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[11px] tracking-[0.4em] uppercase text-[#b8943f] dark:text-[#c9a84c] font-semibold">
            Our 25-Year Heritage
          </span>
          <h1 className="mt-3 text-4xl sm:text-5xl font-extrabold text-neutral-900 dark:text-white tracking-tight">
            Crafting Legacy in Every Frame
          </h1>
          <p className="mt-4 text-neutral-600 dark:text-white/50 text-base leading-relaxed">
            Founded with a passion for preserving life&apos;s most cherished moments,
            Gopal Picture Palace has grown into a revered name in bespoke glass framing
            and photo frame design for over a quarter of a century.
          </p>
        </header>
      </div>

      <AboutSection />
      <CTABanner />
    </div>
  );
}
