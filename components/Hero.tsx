
"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowRight, Phone } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative isolate flex h-[100vh] items-center overflow-hidden bg-forest md:min-h-screen">

      {/* Background image */}
      <Image
        src="/images/hero.jpg"
        alt="J&R property services in the Beeville, Texas area"
        fill
        priority
        sizes="75vw"
        className="object-cover object-[70%_40%]"
      />

      {/* Image overlays */}
      <div className="absolute inset-0 -z-0 bg-gradient-to-r from-forest/95 via-forest/75 to-forest/20" />
      <div className="absolute inset-0 -z-0 bg-gradient-to-t from-forest/70 via-transparent to-black/20" />

      {/* Hero content */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-18 pt-22 md:px-8 md:pb-24 md:pt-40">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <div className="mb-6 flex items-center gap-3">
            <span className="h-px w-10 bg-tan" />
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-tan sm:text-sm">
              Beeville, Texas · Property Services
            </p>
          </div>

          <h1 className="font-heading text-6xl font-bold uppercase leading-[0.88] tracking-tight text-white sm:text-7xl md:text-8xl lg:text-9xl">
            Tree.
            <br />
            Lawn.
            <br />
            Land.
            <span className="mt-2 block text-tan">Done Right.</span>
          </h1>

          <p className="mt-8 max-w-xl text-base leading-7 text-white/85 sm:text-lg sm:leading-8">
            From tree trimming to land clearing, get dependable property
            services from a local owner-operator with 17 years of
            hands-on experience.
          </p>

          {/* Actions */}
          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <Link
              href="tel:3613182522"
              className="group inline-flex min-h-14 items-center justify-center gap-3 rounded-full bg-tan px-7 py-4 text-sm font-bold uppercase tracking-wide text-espresso shadow-xl transition duration-300 hover:-translate-y-1 hover:bg-cream"
            >
              <Phone size={18} />
              Call for a Free Estimate
              <ArrowRight
                size={17}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>

            <Link
              href="#services"
              className="inline-flex min-h-14 items-center justify-center gap-2 rounded-full border border-white/40 bg-white/10 px-7 py-2 text-sm font-bold uppercase tracking-wide text-white backdrop-blur-sm transition hover:border-tan hover:bg-white/20"
            >
              Explore Our Services
            </Link>
          </div>

          {/* Experience marker */}
          <div className="mt-12 flex items-center gap-4 border-t border-white/20 pt-2">
            <div className="font-heading text-5xl font-bold text-tan">
              17<span className="text-3xl">+</span>
            </div>
            <div>
              <p className="text-sm font-bold uppercase tracking-wider text-white">
                Years of Experience
              </p>
              <p className="mt-1 text-xs text-white/65">
                Hands-on knowledge. Local service.
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <Link
        href="#services"
        aria-label="Scroll to services"
        className="absolute bottom-28 right-8 z-10 hidden flex-col items-center gap-2 text-white/70 transition hover:text-tan md:flex"
      >
        <span className="text-[10px] font-semibold uppercase tracking-[0.2em]">
          Discover More
        </span>
        <ArrowDown size={20} className="animate-bounce" />
      </Link>

    </section>
  );
}
