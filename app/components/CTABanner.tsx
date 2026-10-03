import Link from "next/link";

export default function CTABanner() {
  return (
    <section
      id="cta-banner"
      className="relative py-20 md:py-28 bg-gradient-to-br from-[#0a0a0a] via-[#0f0d08] to-[#0a0a0a] overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#c9a84c] blur-[200px]" />
      </div>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c9a84c]/20 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c9a84c]/20 to-transparent" />

      <div className="relative max-w-4xl mx-auto px-6 text-center">
        <span className="text-[10px] tracking-[0.4em] uppercase text-[#c9a84c]/70 font-light">
          Ready to Frame?
        </span>
        <h2
          id="cta-title"
          className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight"
        >
          Transform Your Memories
          <br />
          <span className="text-white/50">Into Timeless Art</span>
        </h2>
        <p className="mt-6 text-sm md:text-base text-white/40 max-w-xl mx-auto leading-relaxed">
          Visit our workshop today and experience the difference of expert
          craftsmanship. Custom framing solutions for every budget.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="#contact"
            id="cta-primary"
            className="group relative px-12 py-4 bg-gradient-to-r from-[#c9a84c] to-[#b8943f] text-[#0a0a0a] text-xs tracking-[0.2em] uppercase font-semibold overflow-hidden transition-all duration-500 hover:shadow-[0_0_50px_rgba(201,168,76,0.25)]"
          >
            <span className="relative z-10">Get a Free Quote</span>
            <div className="absolute inset-0 bg-gradient-to-r from-[#d4b55c] to-[#c9a84c] translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
          </Link>
          <a
            href="tel:+91XXXXXXXXXX"
            id="cta-call"
            className="px-12 py-4 border border-[#c9a84c]/20 text-[#c9a84c]/70 text-xs tracking-[0.2em] uppercase font-light hover:border-[#c9a84c]/50 hover:text-[#c9a84c] transition-all duration-500"
          >
            Call Now
          </a>
        </div>
      </div>
    </section>
  );
}
