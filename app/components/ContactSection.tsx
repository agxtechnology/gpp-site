"use client";

import { useState } from "react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setFormData({ name: "", phone: "", email: "", service: "", message: "" });
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section
      id="contact"
      className="relative py-24 md:py-32 bg-[#faf8f5] dark:bg-[#0a0a0a] transition-colors duration-300"
    >
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neutral-300 dark:via-white/5 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left - Info */}
          <div>
            <span className="text-[11px] tracking-[0.4em] uppercase text-[#b8943f] dark:text-[#c9a84c]/80 font-medium">
              Visit Or Contact Us
            </span>
            <h2
              id="contact-title"
              className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold text-neutral-900 dark:text-white tracking-tight"
            >
              Bring Your Memories
              <br />
              <span className="text-neutral-500 dark:text-white/50">To Our Studio</span>
            </h2>
            <p className="mt-6 text-sm md:text-base text-neutral-600 dark:text-white/40 leading-relaxed max-w-md">
              Whether you need museum-grade glass framing for an original artwork,
              custom photo frames for your living space, or bulk framing for an exhibition,
              we welcome you to visit our studio or drop a message below.
            </p>

            {/* Contact Info */}
            <div className="mt-10 space-y-6">
              <div className="flex items-start gap-4">
                <div className="mt-1 w-9 h-9 rounded-full border border-neutral-300 dark:border-[#c9a84c]/30 flex items-center justify-center flex-shrink-0 bg-white dark:bg-white/5">
                  <svg className="w-4 h-4 text-[#b8943f] dark:text-[#c9a84c]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xs tracking-[0.15em] uppercase text-neutral-800 dark:text-white/70 font-semibold">
                    Studio Location
                  </h3>
                  <p className="mt-1 text-sm text-neutral-600 dark:text-white/40">
                    Gopal Picture Palace<br />
                    21/4, Chathurassa Mawatha,<br />
                    Kurunegala, Sri Lanka
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="mt-1 w-9 h-9 rounded-full border border-neutral-300 dark:border-[#c9a84c]/30 flex items-center justify-center flex-shrink-0 bg-white dark:bg-white/5">
                  <svg className="w-4 h-4 text-[#b8943f] dark:text-[#c9a84c]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xs tracking-[0.15em] uppercase text-neutral-800 dark:text-white/70 font-semibold">
                    Phone & WhatsApp
                  </h3>
                  <div className="mt-1 space-y-1">
                    <p className="text-sm text-neutral-600 dark:text-white/40">
                      <a href="tel:+94372226934" className="hover:text-[#b8943f] dark:hover:text-[#c9a84c] transition-colors">
                        037 2226934
                      </a>
                    </p>
                    <p className="text-sm text-neutral-600 dark:text-white/40">
                      <a href="tel:+94776729169" className="hover:text-[#b8943f] dark:hover:text-[#c9a84c] transition-colors">
                        077 6729169
                      </a>
                    </p>
                    <p className="text-sm text-neutral-600 dark:text-white/40">
                      <a href="tel:+94765570370" className="hover:text-[#b8943f] dark:hover:text-[#c9a84c] transition-colors">
                        076 5570370
                      </a>
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="mt-1 w-9 h-9 rounded-full border border-neutral-300 dark:border-[#c9a84c]/30 flex items-center justify-center flex-shrink-0 bg-white dark:bg-white/5">
                  <svg className="w-4 h-4 text-[#b8943f] dark:text-[#c9a84c]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xs tracking-[0.15em] uppercase text-neutral-800 dark:text-white/70 font-semibold">
                    Studio Timings
                  </h3>
                  <p className="mt-1 text-sm text-neutral-600 dark:text-white/40">
                    Monday – Saturday: 10:00 AM – 8:30 PM<br />
                    Sunday: Open for Walk-ins & Consultations
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Form */}
          <div className="bg-white dark:bg-[#0e0e0e] border border-neutral-200/80 dark:border-white/5 shadow-xl dark:shadow-none p-8 md:p-10 rounded-sm">
            <h3 className="text-xl font-semibold text-neutral-900 dark:text-white tracking-wide mb-6">
              Connect With Our Craftsmen
            </h3>

            {submitted && (
              <div className="mb-6 p-4 rounded-sm bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-300 dark:border-emerald-800 text-emerald-800 dark:text-emerald-200 text-sm">
                ✓ Thank you for reaching out! We will contact you shortly or welcome you to our store.
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label
                    htmlFor="contact-name"
                    className="block text-[10px] tracking-[0.15em] uppercase text-neutral-600 dark:text-white/50 mb-2 font-medium"
                  >
                    Your Name
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b border-neutral-300 dark:border-white/10 py-3 text-sm text-neutral-900 dark:text-white placeholder-neutral-400 dark:placeholder-white/20 focus:border-[#c9a84c] focus:outline-none transition-colors"
                    placeholder="E.g. Kamal Perera"
                  />
                </div>
                <div>
                  <label
                    htmlFor="contact-phone"
                    className="block text-[10px] tracking-[0.15em] uppercase text-neutral-600 dark:text-white/50 mb-2 font-medium"
                  >
                    Phone Number
                  </label>
                  <input
                    id="contact-phone"
                    name="phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b border-neutral-300 dark:border-white/10 py-3 text-sm text-neutral-900 dark:text-white placeholder-neutral-400 dark:placeholder-white/20 focus:border-[#c9a84c] focus:outline-none transition-colors"
                    placeholder="+94 77 672 9169"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="contact-email"
                  className="block text-[10px] tracking-[0.15em] uppercase text-neutral-600 dark:text-white/50 mb-2 font-medium"
                >
                  Email Address
                </label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b border-neutral-300 dark:border-white/10 py-3 text-sm text-neutral-900 dark:text-white placeholder-neutral-400 dark:placeholder-white/20 focus:border-[#c9a84c] focus:outline-none transition-colors"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label
                  htmlFor="contact-service"
                  className="block text-[10px] tracking-[0.15em] uppercase text-neutral-600 dark:text-white/50 mb-2 font-medium"
                >
                  Framing Service Needed
                </label>
                <select
                  id="contact-service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b border-neutral-300 dark:border-white/10 py-3 text-sm text-neutral-900 dark:text-white focus:border-[#c9a84c] focus:outline-none transition-colors cursor-pointer"
                >
                  <option value="" className="bg-white dark:bg-[#0e0e0e] text-neutral-900 dark:text-white">Select a service</option>
                  <option value="glass-framing" className="bg-white dark:bg-[#0e0e0e] text-neutral-900 dark:text-white">Glass Framing (Anti-Reflective / UV)</option>
                  <option value="photo-frames" className="bg-white dark:bg-[#0e0e0e] text-neutral-900 dark:text-white">Custom Photo Frames</option>
                  <option value="custom-framing" className="bg-white dark:bg-[#0e0e0e] text-neutral-900 dark:text-white">Bespoke Custom Framing</option>
                  <option value="canvas-stretching" className="bg-white dark:bg-[#0e0e0e] text-neutral-900 dark:text-white">Canvas Stretching & Art Framing</option>
                  <option value="certificate-framing" className="bg-white dark:bg-[#0e0e0e] text-neutral-900 dark:text-white">Certificates & Document Framing</option>
                  <option value="bulk-order" className="bg-white dark:bg-[#0e0e0e] text-neutral-900 dark:text-white">Bulk / Exhibition Framing</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="contact-message"
                  className="block text-[10px] tracking-[0.15em] uppercase text-neutral-600 dark:text-white/50 mb-2 font-medium"
                >
                  Message or Frame Dimensions
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b border-neutral-300 dark:border-white/10 py-3 text-sm text-neutral-900 dark:text-white placeholder-neutral-400 dark:placeholder-white/20 focus:border-[#c9a84c] focus:outline-none transition-colors resize-none"
                  placeholder="Share details such as photo size, artwork type, or specific framing preferences..."
                />
              </div>

              <button
                type="submit"
                id="contact-submit"
                className="w-full mt-4 py-4 bg-gradient-to-r from-[#c9a84c] to-[#b8943f] text-[#0a0a0a] text-xs tracking-[0.2em] uppercase font-bold hover:from-[#d4b55c] hover:to-[#c9a84c] transition-all duration-300 shadow-[0_2px_20px_rgba(201,168,76,0.2)]"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
