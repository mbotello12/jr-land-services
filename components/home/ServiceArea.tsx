"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, MapPin, Phone } from "lucide-react";

const areas = [
  {
    number: "01",
    name: "Beeville, TX",
    description: "Proudly serving our hometown.",
  },
  {
    number: "02",
    name: "Surrounding Communities",
    description: "Dependable property services close to home.",
  },
  {
    number: "03",
    name: "South Texas",
    description: "Helping property owners throughout the region.",
  },
];

export default function ServiceAreas() {
  return (
    <section className="overflow-hidden bg-cream px-5 py-24 sm:px-8 md:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-20">
          {/* Intro */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-10 bg-tan" />
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-pine sm:text-sm">
                Local Roots. Reliable Service.
              </p>
            </div>

            <h2 className="font-heading text-5xl font-bold uppercase leading-[0.95] text-forest sm:text-6xl md:text-7xl">
              Proud to Serve
              <span className="block text-pine/60">South Texas.</span>
            </h2>

            <p className="mt-7 max-w-lg text-base leading-7 text-espresso/75 sm:text-lg sm:leading-8">
              J&R Tree, Lawn & Land Services is based in Beeville, Texas,
              serving local property owners and surrounding communities.
              Whether it's tree work, lawn care, or a larger land project,
              James is ready to talk about your needs.
            </p>

            <Link
              href="tel:3613182522"
              className="mt-8 inline-flex min-h-14 items-center justify-center gap-3 rounded-full bg-forest px-7 py-4 text-sm font-bold uppercase tracking-wide text-white transition hover:-translate-y-1 hover:bg-pine"
            >
              <Phone size={18} />
              Call to Check Availability
            </Link>
          </motion.div>

          {/* Area list */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="relative bg-forest p-7 text-white sm:p-10 md:p-12"
          >
            <div className="absolute right-0 top-0 h-32 w-32 border-r border-t border-tan/30" />

            <div className="relative">
              <div className="mb-10 flex items-center gap-3">
                <MapPin size={19} className="text-tan" />
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-tan">
                  Where We Work
                </p>
              </div>

              <div className="space-y-0">
                {areas.map((area) => (
                  <div
                    key={area.number}
                    className="group flex gap-5 border-b border-white/15 py-7 first:pt-0 last:border-b-0 last:pb-0"
                  >
                    <span className="pt-1 font-heading text-xl font-semibold text-tan">
                      {area.number}
                    </span>

                    <div className="flex-1">
                      <h3 className="font-heading text-2xl font-bold uppercase sm:text-3xl">
                        {area.name}
                      </h3>
                      <p className="mt-2 text-sm leading-6 text-white/60">
                        {area.description}
                      </p>
                    </div>

                    <ArrowUpRight
                      size={20}
                      className="mt-1 shrink-0 text-tan transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                    />
                  </div>
                ))}
              </div>

              <div className="mt-10 border-t border-white/15 pt-7">
                <p className="text-sm leading-6 text-white/65">
                  Not sure if your property is within our service area?
                  Reach out and let's find out.
                </p>
                <a
                  href="tel:3613182522"
                  className="mt-4 inline-block font-bold tracking-wide text-tan transition hover:text-cream"
                >
                  (361) 318-2522
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
