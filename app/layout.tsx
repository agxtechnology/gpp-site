import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ThemeProvider from "./components/ThemeProvider";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#faf8f5" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://gopalpicturepalace.com"),
  title: {
    default: "Gopal Picture Palace | Premium Glass Framing & Custom Photo Frames",
    template: "%s | Gopal Picture Palace",
  },
  description:
    "Gopal Picture Palace is a premier picture framing studio with over 25 years of excellence, specializing in custom photo frames, museum-grade UV & anti-reflective glass framing, wooden mouldings, canvas stretching, certificate framing, and art preservation.",
  keywords: [
    "glass framing",
    "photo frames",
    "custom picture framing",
    "picture framing shop near me",
    "photo framing shop",
    "Gopal Picture Palace",
    "custom photo frames",
    "wooden photo frames",
    "acrylic glass framing",
    "anti-reflective glass frames",
    "UV protection glass framing",
    "canvas stretching and framing",
    "certificate framing",
    "artwork preservation framing",
    "bespoke picture frames",
    "framing shop",
    "best photo frame maker",
    "wall art frames",
    "metal picture frames",
    "collage photo frames",
    "mirror framing",
    "diploma framing",
  ],
  authors: [{ name: "Gopal Picture Palace" }],
  creator: "Gopal Picture Palace",
  publisher: "Gopal Picture Palace",
  formatDetection: {
    email: false,
    address: true,
    telephone: true,
  },
  alternates: {
    canonical: "https://gopalpicturepalace.com",
  },
  openGraph: {
    title: "Gopal Picture Palace | Premium Glass Framing & Custom Photo Frames",
    description:
      "Handcrafted custom photo frames, museum-grade glass framing, and bespoke art preservation for over 25 years. Visit our studio for expert framing.",
    url: "https://gopalpicturepalace.com",
    siteName: "Gopal Picture Palace",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/service-photo-frames.jpg",
        width: 1200,
        height: 630,
        alt: "Gopal Picture Palace - Custom Photo Frames & Glass Framing",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gopal Picture Palace | Premium Glass Framing & Custom Photo Frames",
    description:
      "Handcrafted custom photo frames, museum-grade glass framing, and bespoke art preservation for over 25 years.",
    images: ["/service-photo-frames.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Gopal Picture Palace",
  image: "https://gopalpicturepalace.com/service-photo-frames.jpg",
  telephone: "+919876543210",
  url: "https://gopalpicturepalace.com",
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Main Market Road",
    addressLocality: "City Centre",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 28.6139,
    longitude: 77.209,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      opens: "10:00",
      closes: "20:30",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Sunday"],
      opens: "11:00",
      closes: "18:00",
    },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Framing Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Glass Framing",
          description: "Anti-reflective & UV protective glass framing for artwork and certificates.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Photo Frames",
          description: "Handcrafted wooden, metal, and acrylic custom photo frames.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Custom Framing",
          description: "Bespoke framing solutions tailored to paintings, canvases, and memories.",
        },
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        {/* Immediate zero-flicker theme initialization */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var stored = localStorage.getItem('gpp-theme');
                  var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                  if (stored === 'dark' || (!stored && prefersDark)) {
                    document.documentElement.classList.add('dark');
                  } else {
                    document.documentElement.classList.remove('dark');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
        {/* Search Engine Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-[#faf8f5] dark:bg-[#0a0a0a] text-neutral-900 dark:text-white transition-colors duration-300">
        <ThemeProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
