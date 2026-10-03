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

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    alert("Thank you for your enquiry! We will get back to you soon.");
    setFormData({ name: "", phone: "", email: "", service: "", message: "" });
  };

  return (
    <section id="contact" className="relative py-24 md:py-32 bg-[#0a0a0a]">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left - Info */}
          <div>
            <span className="text-[10px] tracking-[0.4em] uppercase text-[#c9a84c]/70 font-light">
              Get In Touch
            </span>
            <h2
              id="contact-title"
              className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight"
            >
              Let&apos;s Frame
              <br />
              <span className="text-white/50">Your Vision</span>
            </h2>
            <p className="mt-6 text-sm md:text-base text-white/40 leading-relaxed max-w-md">
              Whether you need a single custom frame or bulk orders for your
              business, we&apos;re here to help. Visit our workshop or send us a
              message.
            </p>

            {/* Contact Info */}
            <div className="mt-10 space-y-6">
              <div className="flex items-start gap-4">
                <div className="mt-1 w-8 h-8 rounded-full border border-[#c9a84c]/20 flex items-center justify-center flex-shrink-0">
                  <svg className="w-3.5 h-3.5 text-[#c9a84c]/60" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-xs tracking-[0.15em] uppercase text-white/60 font-medium">
                    Visit Us
                  </h4>
                  <p className="mt-1 text-sm text-white/35">
                    Gopal Picture Palace<br />
                    Main Market, Your City
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="mt-1 w-8 h-8 rounded-full border border-[#c9a84c]/20 flex items-center justify-center flex-shrink-0">
                  <svg className="w-3.5 h-3.5 text-[#c9a84c]/60" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-xs tracking-[0.15em] uppercase text-white/60 font-medium">
                    Call Us
                  </h4>
                  <p className="mt-1 text-sm text-white/35">
                    +91 XXXXX XXXXX
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="mt-1 w-8 h-8 rounded-full border border-[#c9a84c]/20 flex items-center justify-center flex-shrink-0">
                  <svg className="w-3.5 h-3.5 text-[#c9a84c]/60" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-xs tracking-[0.15em] uppercase text-white/60 font-medium">
                    Working Hours
                  </h4>
                  <p className="mt-1 text-sm text-white/35">
                    Mon - Sat: 10:00 AM - 8:00 PM<br />
                    Sunday: By Appointment
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Form */}
          <div className="bg-[#0e0e0e] border border-white/5 p-8 md:p-10">
            <h3 className="text-lg font-semibold text-white tracking-wide mb-8">
              Send an Enquiry
            </h3>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label
                    htmlFor="contact-name"
                    className="block text-[10px] tracking-[0.15em] uppercase text-white/40 mb-2"
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
                    className="w-full bg-transparent border-b border-white/10 py-3 text-sm text-white/80 placeholder-white/20 focus:border-[#c9a84c]/40 focus:outline-none transition-colors"
                    placeholder="Enter your name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="contact-phone"
                    className="block text-[10px] tracking-[0.15em] uppercase text-white/40 mb-2"
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
                    className="w-full bg-transparent border-b border-white/10 py-3 text-sm text-white/80 placeholder-white/20 focus:border-[#c9a84c]/40 focus:outline-none transition-colors"
                    placeholder="+91 XXXXX XXXXX"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="contact-email"
                  className="block text-[10px] tracking-[0.15em] uppercase text-white/40 mb-2"
                >
                  Email Address
                </label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b border-white/10 py-3 text-sm text-white/80 placeholder-white/20 focus:border-[#c9a84c]/40 focus:outline-none transition-colors"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label
                  htmlFor="contact-service"
                  className="block text-[10px] tracking-[0.15em] uppercase text-white/40 mb-2"
                >
                  Service Required
                </label>
                <select
                  id="contact-service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b border-white/10 py-3 text-sm text-white/80 focus:border-[#c9a84c]/40 focus:outline-none transition-colors appearance-none cursor-pointer"
                >
                  <option value="" className="bg-[#0e0e0e]">Select a service</option>
                  <option value="glass-framing" className="bg-[#0e0e0e]">Glass Framing</option>
                  <option value="photo-frames" className="bg-[#0e0e0e]">Photo Frames</option>
                  <option value="custom-framing" className="bg-[#0e0e0e]">Custom Framing</option>
                  <option value="restoration" className="bg-[#0e0e0e]">Frame Restoration</option>
                  <option value="bulk-order" className="bg-[#0e0e0e]">Bulk Order</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="contact-message"
                  className="block text-[10px] tracking-[0.15em] uppercase text-white/40 mb-2"
                >
                  Your Message
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b border-white/10 py-3 text-sm text-white/80 placeholder-white/20 focus:border-[#c9a84c]/40 focus:outline-none transition-colors resize-none"
                  placeholder="Tell us about your framing needs..."
                />
              </div>

              <button
                type="submit"
                id="contact-submit"
                className="w-full mt-4 py-4 bg-gradient-to-r from-[#c9a84c] to-[#b8943f] text-[#0a0a0a] text-xs tracking-[0.2em] uppercase font-semibold hover:from-[#d4b55c] hover:to-[#c9a84c] transition-all duration-500 shadow-[0_2px_20px_rgba(201,168,76,0.15)]"
              >
                Send Enquiry
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
