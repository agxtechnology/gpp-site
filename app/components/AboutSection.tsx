const stats = [
  { id: "stat-years", value: "25+", label: "Years of Excellence" },
  { id: "stat-frames", value: "50K+", label: "Frames Crafted" },
  { id: "stat-clients", value: "10K+", label: "Happy Clients" },
  { id: "stat-designs", value: "500+", label: "Unique Designs" },
];

export default function AboutSection() {
  return (
    <section id="about" className="relative py-24 md:py-32 bg-[#080808]">
      {/* Decorative gradient */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left - Content */}
          <div>
            <span className="text-[10px] tracking-[0.4em] uppercase text-[#c9a84c]/70 font-light">
              Our Story
            </span>
            <h2
              id="about-title"
              className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight"
            >
              Crafting Frames,
              <br />
              <span className="text-white/50">Creating Legacies</span>
            </h2>
            <div className="mt-6 space-y-4">
              <p className="text-sm md:text-base text-white/40 leading-relaxed">
                At <span className="text-[#c9a84c]/80 font-medium">Gopal Picture Palace</span>,
                we believe every picture tells a story, and every frame should honor
                that story. For over two decades, we have been the trusted name in
                premium glass framing and bespoke photo frame solutions.
              </p>
              <p className="text-sm md:text-base text-white/40 leading-relaxed">
                Our master craftsmen combine traditional artistry with modern
                techniques to create frames that don&apos;t just hold your memories
                — they elevate them. From museum-quality glass framing to
                hand-finished designer frames, every piece that leaves our
                workshop is a testament to our commitment to excellence.
              </p>
            </div>

            {/* Signature-like detail */}
            <div className="mt-8 flex items-center gap-4">
              <div className="w-12 h-[1px] bg-[#c9a84c]/40" />
              <span className="text-xs tracking-[0.2em] uppercase text-white/30">
                Since Generations
              </span>
            </div>
          </div>

          {/* Right - Stats */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat) => (
              <div
                key={stat.id}
                id={stat.id}
                className="group relative p-8 bg-[#0e0e0e] border border-white/5 hover:border-[#c9a84c]/15 transition-all duration-500"
              >
                <div className="text-3xl md:text-4xl font-bold text-white group-hover:text-[#c9a84c] transition-colors duration-500">
                  {stat.value}
                </div>
                <div className="mt-2 text-[10px] md:text-xs tracking-[0.15em] uppercase text-white/30">
                  {stat.label}
                </div>
                {/* Decorative corner */}
                <div className="absolute top-0 right-0 w-6 h-6 border-t border-r border-white/5 group-hover:border-[#c9a84c]/20 transition-colors duration-500" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
