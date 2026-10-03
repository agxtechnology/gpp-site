"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Services", href: "#services" },
  { name: "Gallery", href: "#gallery" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-[#0a0a0a]/95 backdrop-blur-xl shadow-[0_4px_30px_rgba(0,0,0,0.3)] py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Name - centered on mobile, left on desktop */}
          <Link
            href="/"
            id="nav-brand"
            className="group flex items-center gap-3"
          >
            <span className="text-lg md:text-xl font-bold tracking-[0.2em] uppercase text-white/90 group-hover:text-[#c9a84c] transition-colors duration-300">
              GPP
            </span>
            <span className="hidden sm:block h-5 w-[1px] bg-white/20" />
            <span className="hidden sm:block text-xs tracking-[0.15em] uppercase text-white/50 font-light">
              Gopal Picture Palace
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                id={`nav-link-${link.name.toLowerCase()}`}
                className="relative px-4 py-2 text-sm tracking-[0.1em] uppercase text-white/70 hover:text-white transition-colors duration-300 group"
              >
                {link.name}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[1px] bg-gradient-to-r from-transparent via-[#c9a84c] to-transparent group-hover:w-3/4 transition-all duration-300" />
              </Link>
            ))}
            <Link
              href="#contact"
              id="nav-cta"
              className="ml-4 px-6 py-2.5 text-xs tracking-[0.15em] uppercase font-medium bg-gradient-to-r from-[#c9a84c] to-[#b8943f] text-[#0a0a0a] rounded-sm hover:from-[#d4b55c] hover:to-[#c9a84c] transition-all duration-300 shadow-[0_2px_15px_rgba(201,168,76,0.2)]"
            >
              Get a Quote
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            id="mobile-menu-toggle"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden relative w-10 h-10 flex items-center justify-center"
            aria-label="Toggle mobile menu"
          >
            <div className="flex flex-col gap-1.5 w-6">
              <span
                className={`block h-[1.5px] bg-white/80 transition-all duration-300 origin-center ${
                  isMobileMenuOpen
                    ? "rotate-45 translate-y-[4.5px]"
                    : ""
                }`}
              />
              <span
                className={`block h-[1.5px] bg-white/80 transition-all duration-300 ${
                  isMobileMenuOpen ? "opacity-0 scale-0" : ""
                }`}
              />
              <span
                className={`block h-[1.5px] bg-white/80 transition-all duration-300 origin-center ${
                  isMobileMenuOpen
                    ? "-rotate-45 -translate-y-[4.5px]"
                    : ""
                }`}
              />
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          id="mobile-menu"
          className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
            isMobileMenuOpen ? "max-h-[400px] opacity-100 mt-4" : "max-h-0 opacity-0"
          }`}
        >
          <div className="bg-[#111111]/95 backdrop-blur-xl rounded-lg border border-white/5 p-6 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                id={`mobile-nav-link-${link.name.toLowerCase()}`}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-4 py-3 text-sm tracking-[0.1em] uppercase text-white/70 hover:text-[#c9a84c] hover:bg-white/5 rounded-md transition-all duration-300"
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-3 border-t border-white/5">
              <Link
                href="#contact"
                id="mobile-nav-cta"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block text-center px-6 py-3 text-xs tracking-[0.15em] uppercase font-medium bg-gradient-to-r from-[#c9a84c] to-[#b8943f] text-[#0a0a0a] rounded-sm hover:from-[#d4b55c] hover:to-[#c9a84c] transition-all duration-300"
              >
                Get a Quote
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
