"use client"

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, MapPin, Phone, Mail } from "lucide-react";

const footerLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "About Us", href: "/about" },
  { label: "Service Areas", href: "/service-areas" },
];

const services = [
  "Tree Trimming & Removal",
  "Land Improvements & Clearing",
  "Lawn Care & Landscaping",
];

const currentYear: number = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="bg-[#172B22] px-5 pb-28 pt-16 text-white sm:px-8 md:pb-8 md:pt-20">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 border-b border-white/15 pb-12 md:grid-cols-2 lg:grid-cols-[1.3fr_0.8fr_1fr_1fr] lg:gap-10">
          {/* Brand */}
          <div>
            <Link href="/" className="inline-flex">
              <Image
                src="/images/logo.png"
                alt="J&R Tree, Lawn & Land Services"
                width={190}
                height={75}
                className="h-16 w-auto object-contain"
              />
            </Link>

            <p className="mt-5 max-w-xs text-sm leading-7 text-white/55">
              Reliable property services from a local owner-operator.
              Serving Beeville and surrounding South Texas communities.
            </p>

            <p className="mt-5 font-heading text-2xl font-bold uppercase tracking-wide text-tan">
              Tree. Lawn. Land. Done Right.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="mb-6 font-heading text-2xl font-bold uppercase tracking-wide">
              Explore
            </h3>

            <ul className="space-y-4">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 transition hover:text-tan"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-6 font-heading text-2xl font-bold uppercase tracking-wide">
              Our Services
            </h3>

            <ul className="space-y-4">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-sm leading-6 text-white/60">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-6 font-heading text-2xl font-bold uppercase tracking-wide">
              Get in Touch
            </h3>

            <div className="space-y-5">
              <a
                href="tel:3613182522"
                className="flex items-start gap-3 text-sm text-white/65 transition hover:text-tan"
              >
                <Phone size={18} className="mt-0.5 shrink-0 text-tan" />
                (361) 318-2522
              </a>

              <a
                href="mailto:jgm1988a@gmail.com"
                className="flex items-start gap-3 break-all text-sm text-white/65 transition hover:text-tan"
              >
                <Mail size={18} className="mt-0.5 shrink-0 text-tan" />
                jgm1988a@gmail.com
              </a>

              <div className="flex items-start gap-3 text-sm text-white/65">
                <MapPin size={18} className="mt-0.5 shrink-0 text-tan" />
                Beeville, Texas
              </div>
            </div>

            <Link
              href="#estimate"
              className="mt-7 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-tan transition hover:text-cream"
            >
              Request an Estimate
              <ArrowUpRight size={15} />
            </Link>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col gap-4 pt-7 text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {currentYear} J&R Tree, Lawn & Land Services.
            All rights reserved.
          </p>
          <p>Created by 
           <Link
              href="https://botellodevelopment"
              className="ml-2 inline-flex items-center gap-2 text-xs font-bold tracking-widest text-tan transition hover:text-cream"
            >
            bot.Ello Development
            </Link>
            </p>  
          <p className="uppercase tracking-widest">
            Proudly serving Beeville, TX & South Texas
          </p>
        </div>
      </div>
    </footer>
  );
}
