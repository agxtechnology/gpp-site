import Link from "next/link";

const footerLinks = {
  services: [
    { name: "Glass Framing", href: "/services" },
    { name: "Photo Frames", href: "/services" },
    { name: "Custom Framing", href: "/services" },
    { name: "Frame Gallery", href: "/gallery" },
  ],
  company: [
    { name: "About Us", href: "/about" },
    { name: "Our Services", href: "/services" },
    { name: "Frame Gallery", href: "/gallery" },
    { name: "Contact", href: "/contact" },
  ],
};

export default function Footer() {
  return (
    <footer
      id="site-footer"
      className="relative bg-[#f0ebe0] dark:bg-[#070707] text-neutral-600 dark:text-white/60 transition-colors duration-300"
    >
      {/* Decorative top border */}
      <div className="h-[1px] bg-gradient-to-r from-transparent via-[#c9a84c]/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block group">
              <h3 className="text-2xl font-black tracking-[0.2em] uppercase text-neutral-900 dark:text-white/90 group-hover:text-[#b8943f] dark:group-hover:text-[#c9a84c] transition-colors duration-300">
                Gopal Picture Palace
              </h3>
            </Link>
            <p className="mt-4 text-sm leading-7 max-w-sm text-neutral-600 dark:text-white/40">
              Crafting exquisite frames for over 25 years. We transform your precious
              memories and artworks into timeless masterpieces with premium glass framing
              and bespoke handcrafted photo frames.
            </p>
            <div className="mt-6 flex gap-4">
              {/* Phone Quick Link */}
              <a
                href="tel:+919876543210"
                id="footer-call"
                aria-label="Call Gopal Picture Palace"
                className="w-10 h-10 rounded-full border border-neutral-300 dark:border-white/10 flex items-center justify-center hover:border-[#c9a84c] hover:bg-[#c9a84c]/10 text-neutral-700 dark:text-white/70 hover:text-[#b8943f] dark:hover:text-[#c9a84c] transition-all duration-300"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
              </a>

              {/* Location Pin */}
              <a
                href="#contact"
                id="footer-location"
                aria-label="Location"
                className="w-10 h-10 rounded-full border border-neutral-300 dark:border-white/10 flex items-center justify-center hover:border-[#c9a84c] hover:bg-[#c9a84c]/10 text-neutral-700 dark:text-white/70 hover:text-[#b8943f] dark:hover:text-[#c9a84c] transition-all duration-300"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="text-xs tracking-[0.2em] uppercase text-[#b8943f] dark:text-[#c9a84c] font-semibold mb-6">
              Framing Services
            </h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-neutral-600 dark:text-white/40 hover:text-neutral-950 dark:hover:text-white transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs tracking-[0.2em] uppercase text-[#b8943f] dark:text-[#c9a84c] font-semibold mb-6">
              Quick Navigation
            </h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-neutral-600 dark:text-white/40 hover:text-neutral-950 dark:hover:text-white transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-neutral-300/80 dark:border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500 dark:text-white/30">
          <p>© {new Date().getFullYear()} Gopal Picture Palace. All rights reserved.</p>
          <p className="tracking-wider">Master Picture & Glass Framing Studio</p>
        </div>
      </div>
    </footer>
  );
}
