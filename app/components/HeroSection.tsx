"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!heroRef.current) return;
      const scrollY = window.scrollY;
      const opacity = Math.max(0, 1 - scrollY / 700);
      const translateY = scrollY * 0.3;
      heroRef.current.style.transform = `translateY(${translateY}px)`;
      heroRef.current.style.opacity = `${opacity}`;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="hero-section"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero-bg.jpg"
          alt="Gopal Picture Palace workshop"
          fill
          className="object-cover"
          priority
          quality={90}
        />
        {/* Overlays */}
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/90" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-black/30" />
      </div>

      {/* Content */}
      <div
        ref={heroRef}
        className="relative z-10 text-center px-6 max-w-6xl mx-auto"
      >
        {/* Decorative line top */}
        <div className="flex items-center justify-center gap-4 mb-8 animate-fade-in-down">
          <span className="h-[1px] w-16 bg-gradient-to-r from-transparent to-[#c9a84c]/60" />
          <span className="text-[10px] sm:text-xs tracking-[0.4em] uppercase text-[#c9a84c]/80 font-light">
            Est. Since Generations
          </span>
          <span className="h-[1px] w-16 bg-gradient-to-l from-transparent to-[#c9a84c]/60" />
        </div>

        {/* Main Title - BIG like Antigravity */}
        <h1
          id="hero-title"
          className="animate-fade-in-up"
        >
          <span className="block text-[clamp(3rem,10vw,8rem)] font-bold leading-[0.9] tracking-tight text-white uppercase">
            Gopal
          </span>
          <span className="block text-[clamp(2rem,6vw,5rem)] font-light leading-[1.1] tracking-[0.3em] uppercase text-white/80 mt-2">
            Picture Palace
          </span>
        </h1>

        {/* Decorative diamond */}
        <div className="flex items-center justify-center gap-3 my-8 animate-fade-in">
          <span className="h-[1px] w-20 bg-gradient-to-r from-transparent to-[#c9a84c]/40" />
          <span className="w-2 h-2 rotate-45 border border-[#c9a84c]/50" />
          <span className="h-[1px] w-20 bg-gradient-to-l from-transparent to-[#c9a84c]/40" />
        </div>

        {/* Tagline */}
        <p
          id="hero-tagline"
          className="text-base sm:text-lg md:text-xl text-white/50 font-light tracking-wider max-w-2xl mx-auto leading-relaxed animate-fade-in"
        >
          Premium Glass Framing & Bespoke Photo Frames
          <br className="hidden sm:block" />
          <span className="text-white/30">—</span> Preserving Your Precious Memories in Art
        </p>

        {/* CTA Buttons */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up-delayed">
          <Link
            href="#services"
            id="hero-cta-primary"
            className="group relative px-10 py-4 bg-gradient-to-r from-[#c9a84c] to-[#b8943f] text-[#0a0a0a] text-xs tracking-[0.2em] uppercase font-semibold overflow-hidden transition-all duration-500 hover:shadow-[0_0_40px_rgba(201,168,76,0.3)]"
          >
            <span className="relative z-10">Explore Our Work</span>
            <div className="absolute inset-0 bg-gradient-to-r from-[#d4b55c] to-[#c9a84c] translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
          </Link>
          <Link
            href="#contact"
            id="hero-cta-secondary"
            className="px-10 py-4 border border-white/20 text-white/70 text-xs tracking-[0.2em] uppercase font-light hover:border-[#c9a84c]/50 hover:text-[#c9a84c] transition-all duration-500"
          >
            Contact Us
          </Link>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce-slow">
        <div className="flex flex-col items-center gap-2">
          <span className="text-[10px] tracking-[0.3em] uppercase text-white/30">
            Scroll
          </span>
          <div className="w-[1px] h-8 bg-gradient-to-b from-white/30 to-transparent" />
        </div>
      </div>
    </section>
  );
}
