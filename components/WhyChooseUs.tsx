
"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check, Phone } from "lucide-react";
import { motion } from "framer-motion";

const reasons = [
  {
    number: "01",
    title: "Hands-On Experience",
    description:
      "James brings 17 years of hands-on field experience to every property and project.",
  },
  {
    number: "02",
    title: "Honest & Fair Pricing",
    description:
      "Know what to expect with straightforward conversations about your project and its cost.",
  },
  {
    number: "03",
    title: "Owner-Operator Service",
    description:
      "Work directly with James, from the first conversation to the finished job.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="overflow-hidden bg-forest px-5 py-24 text-white sm:px-8 md:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2 lg:gap-20">
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="relative"
        >
          <div className="relative aspect-[4/5] overflow-hidden bg-pine sm:aspect-[5/4] lg:aspect-[4/5]">
            <Image
              src="/images/projects/james-at-work.jpg"
              alt="James working on a J&R property project"
              fill
              sizes="(max-width: 1023px) 100vw, 50vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-forest/50 via-transparent to-transparent" />
          </div>

          <div className="absolute -bottom-6 right-5 bg-tan p-5 text-espresso shadow-xl sm:right-8 sm:p-7">
            <p className="font-heading text-6xl font-bold leading-none sm:text-7xl">
              17+
            </p>
            <p className="mt-2 text-xs font-bold uppercase tracking-widest">
              Years of Experience
            </p>
            <p className="mt-1 text-xs opacity-75">In the field</p>
          </div>

          <div className="absolute -left-3 -top-3 h-24 w-24 border-l-2 border-t-2 border-tan sm:-left-5 sm:-top-5" />
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="pt-5 lg:pt-0"
        >
          <div className="mb-5 flex items-center gap-3">
            <span className="h-px w-10 bg-tan" />
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-tan sm:text-sm">
              The J&R Difference
            </p>
          </div>

          <h2 className="font-heading text-5xl font-bold uppercase leading-[0.95] sm:text-6xl md:text-7xl">
            Good Work.
            <span className="block text-tan">Good People.</span>
            <span className="block">Done Right.</span>
          </h2>

          <p className="mt-7 max-w-xl text-base leading-7 text-white/70 sm:text-lg sm:leading-8">
            Your property deserves attention to detail and someone who takes
            pride in the finished result. J&R keeps it simple: honest service,
            hands-on experience, and work you can feel good about.
          </p>

          <div className="mt-10 space-y-7">
            {reasons.map((reason) => (
              <div
                key={reason.number}
                className="flex gap-5 border-b border-white/15 pb-7"
              >
                <span className="font-heading text-2xl font-semibold text-tan">
                  {reason.number}
                </span>

                <div>
                  <h3 className="font-heading text-2xl font-bold uppercase tracking-wide">
                    {reason.title}
                  </h3>
                  <p className="mt-2 max-w-md text-sm leading-6 text-white/65">
                    {reason.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link
              href="tel:3613182522"
              className="group inline-flex min-h-14 items-center justify-center gap-3 rounded-full bg-tan px-7 py-4 text-sm font-bold uppercase tracking-wide text-espresso transition hover:-translate-y-1 hover:bg-cream"
            >
              <Phone size={18} />
              Talk With James
              <ArrowRight
                size={17}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
