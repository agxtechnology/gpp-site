import Link from "next/link";

export default function CTABanner() {
  return (
    <section
      id="cta-banner"
      className="relative py-20 md:py-28 bg-[#f4f0e6] dark:bg-gradient-to-br dark:from-[#0a0a0a] dark:via-[#0f0d08] dark:to-[#0a0a0a] transition-colors duration-300 overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10 dark:opacity-5 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#c9a84c] blur-[180px]" />
      </div>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c9a84c]/20 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c9a84c]/20 to-transparent" />

      <div className="relative max-w-4xl mx-auto px-6 text-center">
        <span className="text-[11px] tracking-[0.4em] uppercase text-[#b8943f] dark:text-[#c9a84c]/80 font-medium">
          Ready to Frame?
        </span>
        <h2
          id="cta-title"
          className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold text-neutral-900 dark:text-white tracking-tight"
        >
          Transform Your Memories
          <br />
          <span className="text-neutral-500 dark:text-white/50">Into Timeless Art</span>
        </h2>
        <p className="mt-6 text-sm md:text-base text-neutral-600 dark:text-white/40 max-w-xl mx-auto leading-relaxed">
          Visit our workshop studio today and experience the difference of authentic
          craftsmanship. Bespoke framing solutions crafted for every artwork and photograph.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="#contact"
            id="cta-primary"
            className="group relative px-10 py-4 bg-gradient-to-r from-[#c9a84c] to-[#b8943f] text-[#0a0a0a] text-xs tracking-[0.2em] uppercase font-semibold overflow-hidden transition-all duration-500 shadow-[0_4px_20px_rgba(201,168,76,0.25)] hover:shadow-[0_4px_30px_rgba(201,168,76,0.4)]"
          >
            <span className="relative z-10">Visit Our Studio</span>
            <div className="absolute inset-0 bg-gradient-to-r from-[#d4b55c] to-[#c9a84c] translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
          </Link>
          <a
            href="tel:+919876543210"
            id="cta-call"
            className="px-10 py-4 border border-neutral-300 dark:border-[#c9a84c]/20 text-neutral-700 dark:text-[#c9a84c]/80 text-xs tracking-[0.2em] uppercase font-medium hover:border-[#c9a84c] hover:text-[#b8943f] dark:hover:text-[#c9a84c] transition-all duration-300 bg-white/50 dark:bg-transparent backdrop-blur-sm"
          >
            Call Us Today
          </a>
        </div>
      </div>
    </section>
  );
}
