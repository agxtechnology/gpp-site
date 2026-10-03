const testimonials = [
  {
    id: "testimonial-1",
    name: "Rajesh Kumar",
    role: "Art Collector",
    quote:
      "The glass framing quality at Gopal Picture Palace is unmatched. They framed my grandfather's portrait with such care — it looks museum-worthy. Highly recommended!",
    rating: 5,
  },
  {
    id: "testimonial-2",
    name: "Priya Sharma",
    role: "Interior Designer",
    quote:
      "I've been sourcing custom frames from GPP for all my projects. Their attention to detail and range of designs consistently impresses my clients. A true partner in design.",
    rating: 5,
  },
  {
    id: "testimonial-3",
    name: "Amit Patel",
    role: "Photographer",
    quote:
      "As a professional photographer, framing quality matters immensely. GPP's anti-reflective glass framing has transformed how my prints are showcased. Simply exceptional work.",
    rating: 5,
  },
];

export default function TestimonialsSection() {
  return (
    <section
      id="testimonials"
      className="relative py-24 md:py-32 bg-[#070707]"
    >
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-[10px] tracking-[0.4em] uppercase text-[#c9a84c]/70 font-light">
            Testimonials
          </span>
          <h2
            id="testimonials-title"
            className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight"
          >
            What Our Clients Say
          </h2>
          <div className="flex items-center justify-center gap-3 mt-6">
            <span className="h-[1px] w-12 bg-gradient-to-r from-transparent to-[#c9a84c]/40" />
            <span className="w-1.5 h-1.5 rotate-45 bg-[#c9a84c]/50" />
            <span className="h-[1px] w-12 bg-gradient-to-l from-transparent to-[#c9a84c]/40" />
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              id={testimonial.id}
              className="group relative p-8 md:p-10 bg-[#0e0e0e] border border-white/5 hover:border-[#c9a84c]/15 transition-all duration-500"
            >
              {/* Quote Mark */}
              <div className="text-5xl text-[#c9a84c]/10 font-serif leading-none mb-4">
                &ldquo;
              </div>

              <p className="text-sm text-white/45 leading-relaxed italic">
                {testimonial.quote}
              </p>

              <div className="mt-8 flex items-center gap-3">
                {/* Avatar placeholder */}
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#c9a84c]/20 to-[#c9a84c]/5 border border-[#c9a84c]/10 flex items-center justify-center">
                  <span className="text-xs font-semibold text-[#c9a84c]/60">
                    {testimonial.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </span>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-white/70">
                    {testimonial.name}
                  </h4>
                  <p className="text-[10px] tracking-[0.1em] uppercase text-white/30">
                    {testimonial.role}
                  </p>
                </div>
              </div>

              {/* Stars */}
              <div className="mt-4 flex gap-1">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <svg
                    key={i}
                    className="w-3 h-3 text-[#c9a84c]/50"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Decorative corner */}
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-white/5 group-hover:border-[#c9a84c]/15 transition-colors duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
