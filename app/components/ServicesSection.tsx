import Image from "next/image";

const services = [
  {
    id: "glass-framing",
    title: "Glass Framing",
    description:
      "Premium anti-reflective and UV-protective glass framing to showcase and preserve your artwork, photographs, and certificates with crystal clarity.",
    image: "/service-glass-framing.jpg",
    features: ["Anti-Reflective Glass", "UV Protection", "Museum Quality"],
  },
  {
    id: "photo-frames",
    title: "Photo Frames",
    description:
      "An exquisite collection of handcrafted photo frames in wood, metal, and designer styles — from classic ornate to contemporary minimalist designs.",
    image: "/service-photo-frames.jpg",
    features: ["Wooden Frames", "Metal Frames", "Designer Collection"],
  },
  {
    id: "custom-framing",
    title: "Custom Framing",
    description:
      "Bespoke framing solutions tailored to your vision. From selecting the perfect moulding to matting and finishing — every detail crafted to perfection.",
    image: "/service-custom-framing.jpg",
    features: ["Bespoke Design", "Premium Matting", "Expert Finishing"],
  },
];

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="relative py-24 md:py-32 bg-[#faf8f5] dark:bg-[#0a0a0a] transition-colors duration-300 overflow-hidden"
    >
      {/* Subtle background pattern */}
      <div
        className="absolute inset-0 opacity-[0.03] dark:opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <span className="text-[11px] tracking-[0.4em] uppercase text-[#b8943f] dark:text-[#c9a84c]/80 font-medium">
            What We Offer
          </span>
          <h2
            id="services-title"
            className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold text-neutral-900 dark:text-white tracking-tight"
          >
            Our Services & Collections
          </h2>
          <div className="flex items-center justify-center gap-3 mt-6">
            <span className="h-[1px] w-12 bg-gradient-to-r from-transparent to-[#c9a84c]/50" />
            <span className="w-1.5 h-1.5 rotate-45 bg-[#c9a84c]" />
            <span className="h-[1px] w-12 bg-gradient-to-l from-transparent to-[#c9a84c]/50" />
          </div>
          <p className="mt-6 text-neutral-600 dark:text-white/50 max-w-xl mx-auto text-sm md:text-base leading-relaxed">
            From museum-grade glass framing to custom-designed photo frames, we bring
            decades of master craftsmanship and artistry to every piece.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div
              key={service.id}
              id={`service-card-${service.id}`}
              className="group relative bg-white dark:bg-[#111111] rounded-sm border border-neutral-200/80 dark:border-white/5 overflow-hidden shadow-sm hover:shadow-2xl dark:hover:shadow-[0_10px_30px_rgba(0,0,0,0.5)] hover:border-[#c9a84c]/40 dark:hover:border-[#c9a84c]/20 transition-all duration-500 flex flex-col"
            >
              {/* Image Container with sizes prop fixed */}
              <div className="relative h-64 md:h-72 overflow-hidden bg-neutral-100 dark:bg-neutral-900">
                <Image
                  src={service.image}
                  alt={`${service.title} - Gopal Picture Palace`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 400px"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent dark:from-[#111111] dark:via-transparent dark:to-transparent" />
                {/* Number */}
                <span className="absolute top-4 right-4 text-xs font-mono tracking-widest text-white/90 dark:text-white/40 drop-shadow">
                  0{index + 1}
                </span>
              </div>

              {/* Content */}
              <div className="p-6 md:p-8 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-neutral-900 dark:text-white tracking-wide group-hover:text-[#b8943f] dark:group-hover:text-[#c9a84c] transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-sm text-neutral-600 dark:text-white/50 leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Features */}
                <div className="mt-6 flex flex-wrap gap-2 pt-4 border-t border-neutral-100 dark:border-white/5">
                  {service.features.map((feature) => (
                    <span
                      key={feature}
                      className="text-[10px] tracking-[0.1em] uppercase px-3 py-1.5 rounded-sm border border-neutral-200 dark:border-white/10 text-neutral-600 dark:text-white/50 group-hover:border-[#c9a84c]/30 group-hover:text-[#b8943f] dark:group-hover:text-[#c9a84c]/80 transition-all duration-300"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
