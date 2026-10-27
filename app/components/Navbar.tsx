"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useTheme } from "./ThemeProvider";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Gallery", href: "/gallery" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on desktop resize and lock body scroll when open
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <nav
        id="main-navbar"
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          isScrolled
            ? "bg-[#faf8f5]/95 dark:bg-[#0a0a0a]/95 backdrop-blur-xl border-b border-neutral-200/80 dark:border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.06)] dark:shadow-[0_4px_30px_rgba(0,0,0,0.4)] py-2"
            : "bg-gradient-to-b from-black/60 via-black/20 to-transparent py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Logo */}
            <Link
              href="/"
              id="nav-brand"
              className="group flex items-center gap-3 relative z-10"
              aria-label="Gopal Picture Palace Home"
            >
              <div
                className={`relative transition-all duration-500 ${
                  isScrolled ? "h-10 w-[140px] md:h-12 md:w-[180px]" : "h-12 w-[160px] md:h-14 md:w-[200px]"
                }`}
              >
                <Image
                  src="/Golden Lotus GPP Luxury Logo.png"
                  alt="Gopal Picture Palace - Golden Lotus Logo"
                  fill
                  sizes="200px"
                  className={`object-contain object-left transition-all duration-500 ${
                    isScrolled
                      ? "brightness-100 dark:brightness-100"
                      : "brightness-0 invert drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]"
                  }`}
                  priority
                />
              </div>
            </Link>

            {/* Desktop Navigation Links & Controls */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  id={`nav-link-${link.name.toLowerCase()}`}
                  className={`relative px-4 py-2 text-sm tracking-[0.1em] uppercase transition-colors duration-300 group ${
                    isScrolled
                      ? "text-neutral-700 dark:text-white/70 hover:text-neutral-950 dark:hover:text-white"
                      : "text-white/70 hover:text-white drop-shadow-[0_1px_3px_rgba(0,0,0,0.6)]"
                  }`}
                >
                  {link.name}
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[1px] bg-gradient-to-r from-transparent via-[#c9a84c] to-transparent group-hover:w-3/4 transition-all duration-300" />
                </Link>
              ))}

              {/* Theme Toggle Button */}
              <button
                id="theme-toggle-btn"
                onClick={toggleTheme}
                className={`ml-3 p-2.5 rounded-full transition-all duration-300 border ${
                  isScrolled
                    ? "border-neutral-200 dark:border-white/10 text-neutral-800 dark:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-white/5 hover:border-[#c9a84c]/50"
                    : "border-white/20 text-white hover:bg-white/10 hover:border-[#c9a84c]/60"
                }`}
                title={`Switch to ${theme === "dark" ? "Light" : "Dark"} Mode`}
                aria-label={`Switch to ${theme === "dark" ? "Light" : "Dark"} Mode`}
              >
                {theme === "dark" ? (
                  // Sun icon for dark mode (click to switch to light)
                  <svg
                    className="w-4 h-4 text-[#c9a84c] transition-transform duration-500 hover:rotate-90"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                    />
                  </svg>
                ) : (
                  // Moon icon for light mode (click to switch to dark)
                  <svg
                    className="w-4 h-4 text-[#b8943f] transition-transform duration-500 hover:-rotate-12"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                    />
                  </svg>
                )}
              </button>

              {/* Direct Store Contact CTA */}
              <Link
                href="#contact"
                id="nav-contact-cta"
                className="ml-3 px-5 py-2 text-xs tracking-[0.15em] uppercase font-semibold bg-gradient-to-r from-[#c9a84c] to-[#b8943f] text-[#0a0a0a] rounded-sm hover:from-[#d4b55c] hover:to-[#c9a84c] transition-all duration-300 shadow-[0_2px_15px_rgba(201,168,76,0.25)] hover:shadow-[0_2px_20px_rgba(201,168,76,0.4)]"
              >
                Visit Store
              </Link>
            </div>

            {/* Mobile Controls: Theme Toggle & Full Fluid Hamburger */}
            <div className="flex md:hidden items-center gap-2">
              <button
                id="mobile-theme-toggle"
                onClick={toggleTheme}
                className={`p-2 rounded-full border transition-all ${
                  isScrolled
                    ? "border-neutral-200 dark:border-white/10 text-neutral-800 dark:text-white"
                    : "border-white/20 text-white"
                }`}
                aria-label="Toggle theme"
              >
                {theme === "dark" ? (
                  <svg className="w-4 h-4 text-[#c9a84c]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                ) : (
                  <svg className="w-4 h-4 text-[#b8943f]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                  </svg>
                )}
              </button>

              <button
                id="mobile-menu-toggle"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={`w-10 h-10 flex items-center justify-center rounded-sm transition-colors ${
                  isScrolled
                    ? "text-neutral-900 dark:text-white"
                    : "text-white"
                }`}
                aria-label="Toggle mobile menu"
                aria-expanded={isMobileMenuOpen}
              >
                <div className="flex flex-col gap-1.5 w-6">
                  <span
                    className={`block h-[2px] transition-all duration-300 origin-center ${
                      isScrolled
                        ? "bg-neutral-900 dark:bg-white"
                        : "bg-white"
                    } ${isMobileMenuOpen ? "rotate-45 translate-y-[5px]" : ""}`}
                  />
                  <span
                    className={`block h-[2px] transition-all duration-300 ${
                      isScrolled
                        ? "bg-neutral-900 dark:bg-white"
                        : "bg-white"
                    } ${isMobileMenuOpen ? "opacity-0 scale-0" : ""}`}
                  />
                  <span
                    className={`block h-[2px] transition-all duration-300 origin-center ${
                      isScrolled
                        ? "bg-neutral-900 dark:bg-white"
                        : "bg-white"
                    } ${isMobileMenuOpen ? "-rotate-45 -translate-y-[5px]" : ""}`}
                  />
                </div>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* FULL FLUID MOBILE MENU OVERLAY */}
      <div
        id="full-fluid-mobile-menu"
        className={`fixed inset-0 z-50 w-full h-[100dvh] bg-[#faf8f5]/98 dark:bg-[#0a0a0a]/98 backdrop-blur-2xl transition-all duration-500 flex flex-col justify-between p-6 sm:p-10 ${
          isMobileMenuOpen
            ? "opacity-100 pointer-events-auto translate-y-0"
            : "opacity-0 pointer-events-none -translate-y-4"
        }`}
      >
        {/* Mobile Menu Header */}
        <div className="flex items-center justify-between border-b border-neutral-200/80 dark:border-white/10 pb-5">
          <Link
            href="/"
            onClick={() => setIsMobileMenuOpen(false)}
            className="flex items-center gap-3"
          >
            <div className="relative h-10 w-[140px]">
              <Image
                src="/Golden Lotus GPP Luxury Logo.png"
                alt="Gopal Picture Palace"
                fill
                sizes="140px"
                className="object-contain object-left"
              />
            </div>
          </Link>

          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className="w-10 h-10 flex items-center justify-center rounded-full border border-neutral-200 dark:border-white/10 text-neutral-800 dark:text-white hover:bg-neutral-100 dark:hover:bg-white/10 transition-colors"
            aria-label="Close menu"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Fluid Navigation Links */}
        <div className="flex flex-col justify-center gap-6 my-auto py-6">
          {navLinks.map((link, idx) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="group flex items-center justify-between text-2xl sm:text-3xl font-light tracking-[0.15em] uppercase text-neutral-800 dark:text-white/80 hover:text-[#b8943f] dark:hover:text-[#c9a84c] transition-colors py-2 border-b border-neutral-100 dark:border-white/5"
            >
              <span>{link.name}</span>
              <span className="text-xs font-mono text-neutral-400 dark:text-white/30 group-hover:text-[#c9a84c] transition-colors">
                0{idx + 1}
              </span>
            </Link>
          ))}
        </div>

        {/* Fluid Footer Actions & Info */}
        <div className="pt-6 border-t border-neutral-200/80 dark:border-white/10 space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-xs tracking-[0.15em] uppercase text-neutral-500 dark:text-white/50">
              Appearance
            </span>
            <button
              onClick={toggleTheme}
              className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-neutral-200 dark:border-white/10 text-xs font-medium text-neutral-800 dark:text-white/80 hover:border-[#c9a84c]/50"
            >
              <span>{theme === "dark" ? "☀️ Light Mode" : "🌙 Dark Mode"}</span>
            </button>
          </div>

          <Link
            href="#contact"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block w-full py-4 text-center text-xs tracking-[0.2em] uppercase font-bold bg-gradient-to-r from-[#c9a84c] to-[#b8943f] text-[#0a0a0a] rounded-sm hover:from-[#d4b55c] hover:to-[#c9a84c] transition-all shadow-[0_2px_15px_rgba(201,168,76,0.25)]"
          >
            Visit Studio / Contact
          </Link>
        </div>
      </div>
    </>
  );
}
