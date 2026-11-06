"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Phone } from "lucide-react";
import { motion } from "framer-motion";

const projects = [
  {
    number: "01",
    category: "Tree Services",
    title: "Tree Trimming & Removal",
    description: "A cleaner, safer property starts with proper tree care.",
    image: "/images/projects/tree-trimming.jpg",
    featured: true,
  },
  {
    number: "02",
    category: "Land Improvements",
    title: "Clearing & Site Preparation",
    description: "Making room for what's next.",
    image: "/images/projects/land-clearing.jpg",
    featured: false,
  },
  {
    number: "03",
    category: "Property Care",
    title: "Lawn & Landscaping",
    description: "Taking pride in the details that make a property stand out.",
    image: "/images/projects/landscaping.jpg",
    featured: false,
  },
];

export default function RecentWork() {
  return (
    <section className="bg-off-white px-5 py-24 sm:px-8 md:py-32">
      <div className="mx-auto max-w-7xl">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 flex flex-col justify-between gap-6 md:mb-16 md:flex-row md:items-end"
        >
          <div className="max-w-2xl">
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-10 bg-tan" />
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-pine sm:text-sm">
                A Look at the Work
              </p>
            </div>

            <h2 className="font-heading text-5xl font-bold uppercase leading-[0.95] text-forest sm:text-6xl md:text-7xl">
              The Work
              <span className="block text-pine/60">Speaks for Itself.</span>
            </h2>
          </div>

          <p className="max-w-md text-base leading-7 text-espresso/70">
            Every property is different. Take a look at the kind of work J&R
            brings to properties throughout the Beeville area.
          </p>
        </motion.div>

        {/* Project gallery */}
        <div className="grid gap-5 md:grid-cols-2 md:gap-6">
          {projects.map((project, index) => (
            <motion.article
              key={project.number}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.55, delay: index * 0.12 }}
              className={`group ${project.featured ? "md:row-span-2" : ""}`}
            >
              <div
                className={`relative overflow-hidden bg-cream ${
                  project.featured
                    ? "aspect-[4/5] md:h-full md:min-h-[620px]"
                    : "aspect-[16/9]"
                }`}
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes={
                    project.featured
                      ? "(max-width: 767px) 100vw, 50vw"
                      : "(max-width: 767px) 100vw, 50vw"
                  }
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />

                <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
                  <div className="mb-3 flex items-center gap-3">
                    <span className="h-px w-7 bg-tan" />
                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-tan">
                      {project.category}
                    </p>
                  </div>

                  <div className="flex items-end justify-between gap-4">
                    <div>
                      <h3 className="font-heading text-3xl font-bold uppercase leading-tight text-white sm:text-4xl">
                        {project.title}
                      </h3>
                      <p className="mt-2 max-w-sm text-sm leading-6 text-white/75">
                        {project.description}
                      </p>
                    </div>

                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/50 text-white transition-all duration-300 group-hover:border-tan group-hover:bg-tan group-hover:text-espresso">
                      <ArrowUpRight size={20} />
                    </span>
                  </div>
                </div>

                <span className="absolute right-5 top-5 font-heading text-2xl font-semibold text-white/80">
                  {project.number}
                </span>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Closing CTA */}
        <div className="mt-14 flex flex-col items-start justify-between gap-6 border-t border-forest/15 pt-8 sm:flex-row sm:items-center">
          <div>
            <h3 className="font-heading text-3xl font-bold uppercase text-forest sm:text-4xl">
              Have a Project in Mind?
            </h3>
            <p className="mt-2 text-sm leading-6 text-espresso/65">
              Let's talk about what J&R can do for your property.
            </p>
          </div>

          <Link
            href="tel:3613182522"
            className="inline-flex min-h-14 items-center justify-center gap-3 rounded-full bg-forest px-7 py-4 text-sm font-bold uppercase tracking-wide text-white transition hover:-translate-y-1 hover:bg-pine"
          >
            <Phone size={18} />
            Get a Free Estimate
          </Link>
        </div>
      </div>
    </section>
  );
}
