const stats = [
  { id: "stat-years", value: "25+", label: "Years of Excellence" },
  { id: "stat-frames", value: "50K+", label: "Frames Crafted" },
  { id: "stat-clients", value: "10K+", label: "Happy Clients" },
  { id: "stat-designs", value: "500+", label: "Unique Moulding Styles" },
];

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative py-24 md:py-32 bg-[#f6f2e9] dark:bg-[#080808] transition-colors duration-300"
    >
      {/* Decorative gradient */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neutral-300 dark:via-white/5 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left - Content */}
          <div>
            <span className="text-[11px] tracking-[0.4em] uppercase text-[#b8943f] dark:text-[#c9a84c]/80 font-medium">
              Our Legacy & Story
            </span>
            <h2
              id="about-title"
              className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold text-neutral-900 dark:text-white tracking-tight leading-tight"
            >
              Crafting Frames,
              <br />
              <span className="text-neutral-500 dark:text-white/50">Preserving Legacies</span>
            </h2>
            <div className="mt-6 space-y-4">
              <p className="text-sm md:text-base text-neutral-600 dark:text-white/50 leading-relaxed">
                At <strong className="text-neutral-900 dark:text-[#c9a84c] font-semibold">Gopal Picture Palace</strong>,
                we believe every picture, artwork, and certificate carries an invaluable memory,
                and deserves to be framed with perfection. For over two decades, our studio
                has been the region&apos;s trusted destination for precision glass framing and custom photo frames.
              </p>
              <p className="text-sm md:text-base text-neutral-600 dark:text-white/50 leading-relaxed">
                Our master artisans combine traditional hand-finishing techniques with advanced UV-protective
                and anti-reflective glass technologies. From delicate archival watercolours and family portraits to
                grand wall galleries, every frame is meticulously built to withstand time and elevate beauty.
              </p>
            </div>

            {/* Signature detail */}
            <div className="mt-8 flex items-center gap-4">
              <div className="w-12 h-[1px] bg-[#c9a84c]" />
              <span className="text-xs tracking-[0.2em] uppercase text-neutral-500 dark:text-white/40 font-medium">
                25+ Years of Master Craftsmanship
              </span>
            </div>
          </div>

          {/* Right - Stats */}
          <div className="grid grid-cols-2 gap-5 sm:gap-6">
            {stats.map((stat) => (
              <div
                key={stat.id}
                id={stat.id}
                className="group relative p-7 sm:p-8 bg-white dark:bg-[#0e0e0e] rounded-sm border border-neutral-200/80 dark:border-white/5 shadow-sm hover:shadow-xl dark:hover:border-[#c9a84c]/20 transition-all duration-300"
              >
                <div className="text-3xl md:text-4xl font-black text-neutral-900 dark:text-white group-hover:text-[#b8943f] dark:group-hover:text-[#c9a84c] transition-colors duration-300">
                  {stat.value}
                </div>
                <div className="mt-2 text-[11px] md:text-xs tracking-[0.12em] uppercase text-neutral-500 dark:text-white/40 font-medium">
                  {stat.label}
                </div>
                {/* Decorative corner */}
                <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-neutral-200 dark:border-white/10 group-hover:border-[#c9a84c] transition-colors duration-300" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
