import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import CTABanner from "../components/CTABanner";

export const metadata: Metadata = {
  title: "Frame Gallery & Moulding Portfolio | Gopal Picture Palace",
  description:
    "Browse our curated showcase of handcrafted picture frames, museum glass framing, wooden mouldings, ornate gold frames, and wall art displays created over 25+ years.",
  keywords: [
    "picture frame gallery",
    "custom frames portfolio",
    "framing moulding styles",
    "wooden photo frame designs",
    "ornate picture frames",
    "minimalist metal frames",
    "wall gallery inspiration",
    "Gopal Picture Palace frame collection",
  ],
  alternates: {
    canonical: "https://gopalpicturepalace.com/gallery",
  },
  openGraph: {
    title: "Frame Gallery & Moulding Portfolio | Gopal Picture Palace",
    description:
      "Explore 25+ years of custom framing artistry: handcrafted wooden frames, museum glass framing, and bespoke wall displays.",
    url: "https://gopalpicturepalace.com/gallery",
    siteName: "Gopal Picture Palace",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/service-photo-frames.jpg",
        width: 1200,
        height: 630,
        alt: "Gopal Picture Palace - Frame Gallery",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Frame Gallery & Moulding Portfolio | Gopal Picture Palace",
    description:
      "Curated collection of custom frames, museum glass, and bespoke mouldings with 25+ years of master craftsmanship.",
    images: ["/service-photo-frames.jpg"],
  },
};

const gallerySchema = {
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
          "name": "Gallery",
          "item": "https://gopalpicturepalace.com/gallery",
        },
      ],
    },
    {
      "@type": "ImageGallery",
      "@id": "https://gopalpicturepalace.com/gallery/#gallery",
      "name": "Gopal Picture Palace Frame Portfolio",
      "description":
        "Showcase of master handcrafted photo frames, glass framing, and custom moulding collections.",
    },
  ],
};

const galleryItems = [
  {
    title: "Museum Glass Anti-Reflective Framing",
    category: "Glass Framing",
    image: "/service-glass-framing.jpg",
  },
  {
    title: "Artisanal Hardwood Photo Frames",
    category: "Photo Frames",
    image: "/service-photo-frames.jpg",
  },
  {
    title: "Bespoke Canvas & Certificate Framing",
    category: "Custom Framing",
    image: "/service-custom-framing.jpg",
  },
  {
    title: "Heritage Handcrafted Master Workshop",
    category: "Studio Craftsmanship",
    image: "/hero-bg.jpg",
  },
];

export default function GalleryPage() {
  return (
    <div className="pt-24 min-h-screen bg-[#faf8f5] dark:bg-[#0a0a0a] transition-colors duration-300">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(gallerySchema) }}
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
              Gallery
            </li>
          </ol>
        </nav>

        <header className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[11px] tracking-[0.4em] uppercase text-[#b8943f] dark:text-[#c9a84c] font-semibold">
            25+ Years of Handcrafted Art
          </span>
          <h1 className="mt-3 text-4xl sm:text-5xl font-extrabold text-neutral-900 dark:text-white tracking-tight">
            Our Work & Design Gallery
          </h1>
          <p className="mt-4 text-neutral-600 dark:text-white/50 text-base leading-relaxed">
            Take a look at some of our finest framing creations, custom moulding finishes,
            and precision-mounted artworks crafted for discerning collectors and families.
          </p>
        </header>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 mb-20">
          {galleryItems.map((item, idx) => (
            <div
              key={idx}
              className="group relative bg-white dark:bg-[#111111] rounded-sm overflow-hidden border border-neutral-200/80 dark:border-white/5 shadow-md hover:shadow-2xl transition-all duration-500"
            >
              <div className="relative h-80 sm:h-96 w-full overflow-hidden bg-neutral-100 dark:bg-neutral-900">
                <Image
                  src={item.image}
                  alt={`${item.title} - Gopal Picture Palace`}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <span className="text-[10px] tracking-[0.2em] uppercase text-[#c9a84c] font-semibold">
                    {item.category}
                  </span>
                  <h3 className="mt-1 text-xl font-bold text-white drop-shadow">
                    {item.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <CTABanner />
    </div>
  );
}
