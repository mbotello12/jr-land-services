
"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    number: "01",
    title: "Tree Trimming & Removal",
    description:
      "Keep your property safe, clean, and looking its best with professional tree trimming, removal, and brush cleanup.",
    image: "/images/services/tree-work.png",
    href: "/services/tree-trimming",
  },
  {
    number: "02",
    title: "Land Improvements & Clearing",
    description:
      "From clearing overgrown land to preparing a property for its next project, get the groundwork done right.",
    image: "/images/services/land-clearing.png",
    href: "/services/land-improvements",
  },
  {
    number: "03",
    title: "Lawn Care & Landscaping",
    description:
      "Give your outdoor space the attention it deserves with dependable lawn care and landscaping services.",
    image: "/images/services/lawn-care.png",
    href: "/services/lawn-care",
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="bg-cream px-5 py-24 sm:px-8 md:py-32">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6 }}
          className="mb-12 max-w-2xl md:mb-16"
        >
          <div className="mb-5 flex items-center gap-3">
            <span className="h-px w-10 bg-tan" />
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-pine sm:text-sm">
              What We Do
            </p>
          </div>

          <h2 className="font-heading text-5xl font-bold uppercase leading-[0.95] text-forest sm:text-6xl md:text-7xl">
            Property Work.
            <span className="block text-pine/60">Done Right.</span>
          </h2>

          <p className="mt-6 max-w-xl text-base leading-7 text-espresso/75 sm:text-lg">
            Whether you need a few trees cleaned up or an entire property
            improved, J&R brings hands-on experience and attention to every job.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-3">
          {services.map((service, index) => (
            <motion.article
              key={service.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.55, delay: index * 0.12 }}
              className="group"
            >
              <Link href={service.href} className="block">
                <div className="relative aspect-[4/5] overflow-hidden bg-forest">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-forest via-forest/60 to-transparent" />

                  <div className="absolute inset-x-0 bottom-0 p-6 sm:p-7">
                    <div className="mb-4 flex items-center justify-between">
                      <span className="font-heading text-3xl font-semibold text-tan">
                        {service.number}
                      </span>
                      <span className="flex h-11 w-11 items-center justify-center rounded-full border border-white/40 text-white transition-all duration-300 group-hover:border-tan group-hover:bg-tan group-hover:text-espresso">
                        <ArrowUpRight size={20} />
                      </span>
                    </div>

                    <h3 className="font-heading text-3xl font-bold uppercase leading-tight text-white sm:text-4xl">
                      {service.title}
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-white/75">
                      {service.description}
                    </p>

                    <span className="mt-5 inline-block border-b border-tan pb-1 text-xs font-bold uppercase tracking-widest text-tan">
                      Explore Service
                    </span>
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-5 border-t border-forest/15 pt-8 sm:flex-row sm:items-center">
          <p className="max-w-lg text-sm leading-6 text-espresso/70">
            Not sure which service your property needs? Give James a call and
            let's talk about your project.
          </p>

          <Link
            href="tel:3613182522"
            className="inline-flex min-h-12 items-center justify-center rounded-full bg-forest px-7 py-3 text-sm font-bold uppercase tracking-wide text-white transition hover:bg-pine"
          >
            Call for a Free Estimate
          </Link>
        </div>
      </div>
    </section>
  );
}
