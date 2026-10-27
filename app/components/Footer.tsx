import Link from "next/link";
import Image from "next/image";

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
              <div className="relative h-14 w-[220px]">
                <Image
                  src="/Golden Lotus GPP Luxury Logo.png"
                  alt="Gopal Picture Palace - Golden Lotus Logo"
                  fill
                  sizes="220px"
                  className="object-contain object-left"
                />
              </div>
            </Link>
            <p className="mt-4 text-sm leading-7 max-w-sm text-neutral-600 dark:text-white/40">
              Crafting exquisite frames for over 25 years. We transform your precious
              memories and artworks into timeless masterpieces with premium glass framing
              and bespoke handcrafted photo frames.
            </p>

            {/* Contact Quick Info */}
            <div className="mt-5 space-y-2">
              <p className="text-xs text-neutral-500 dark:text-white/30 flex items-center gap-2">
                <svg className="w-3.5 h-3.5 text-[#c9a84c] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
                21/4, Chathurassa Mawatha, Kurunegala
              </p>
              <p className="text-xs text-neutral-500 dark:text-white/30 flex items-center gap-2">
                <svg className="w-3.5 h-3.5 text-[#c9a84c] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
                037 2226934 / 077 6729169 / 076 5570370
              </p>
            </div>

            <div className="mt-6 flex gap-4">
              {/* Phone Quick Link */}
              <a
                href="tel:+94372226934"
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

              {/* WhatsApp Link */}
              <a
                href="https://wa.me/94776729169"
                id="footer-whatsapp"
                aria-label="WhatsApp"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-neutral-300 dark:border-white/10 flex items-center justify-center hover:border-[#25D366] hover:bg-[#25D366]/10 text-neutral-700 dark:text-white/70 hover:text-[#25D366] transition-all duration-300"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
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
          <p className="tracking-wider">Master Picture & Glass Framing Studio — Kurunegala</p>
        </div>
      </div>
    </footer>
  );
}
