import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Gopal Picture Palace — Premium Glass Framing & Photo Frames",
  description:
    "Gopal Picture Palace offers premium glass framing, custom photo frames, and bespoke framing solutions. Preserving your precious memories in art since generations.",
  keywords: [
    "glass framing",
    "photo frames",
    "custom framing",
    "picture frames",
    "Gopal Picture Palace",
    "premium frames",
    "glass frames",
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#0a0a0a] text-white">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
