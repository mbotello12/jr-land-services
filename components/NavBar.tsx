
"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, Phone, ChevronRight } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "About Us", href: "/about" },
  { label: "Service Areas", href: "/service-areas" },
];

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
        <Link href="/" className="relative z-50 flex items-center">
          <Image
            src="/images/logo.png"
            alt="J&R Tree, Lawn & Land Services"
            width={180}
            height={70}
            priority
            className="h-12 w-auto object-contain"
          />
        </Link>

        {/* Desktop navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-semibold text-white transition-colors hover:text-tan"
            >
              {link.label}
            </Link>
          ))}

          <Link
            href="tel:3613182522"
            className="flex items-center gap-2 rounded-full bg-tan px-5 py-3 text-sm font-bold text-espresso transition hover:bg-cream"
          >
            <Phone size={16} />
            Call for an Estimate
          </Link>
        </nav>

        {/* Mobile menu button */}
        <button
          type="button"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
          className="relative z-50 flex h-11 w-11 items-center justify-center rounded-full border border-white/30 bg-forest/70 text-white backdrop-blur-md md:hidden"
        >
          {menuOpen ? <X size={23} /> : <Menu size={23} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.22 }}
            className="absolute inset-x-0 top-0 z-40 border-b border-white/10 bg-forest px-6 pb-8 pt-24 shadow-2xl md:hidden"
          >
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center justify-between border-b border-white/10 py-4 text-lg font-semibold text-white"
                >
                  {link.label}
                  <ChevronRight size={18} className="text-tan" />
                </Link>
              ))}

              <Link
                href="tel:3613182522"
                onClick={() => setMenuOpen(false)}
                className="mt-5 flex items-center justify-center gap-2 rounded-full bg-tan px-5 py-4 font-bold text-espresso"
              >
                <Phone size={18} />
                Call James: (361) 318-2522
              </Link>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
