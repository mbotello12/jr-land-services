
import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowRight, Phone } from "lucide-react";

export default function ServicesHero() {
  return (
    <section className="relative flex min-h-[75svh] items-center overflow-hidden bg-forest md:min-h-[680px]">
      {/* Background image */}
      <Image
        src="/images/hero.jpg"
        alt="Property maintenance and outdoor services in Beeville, Texas"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />

      {/* Image overlays */}
      <div className="absolute inset-0 bg-espresso/55" />
      <div className="absolute inset-0 bg-gradient-to-r from-forest/95 via-forest/75 to-forest/20" />
      <div className="absolute inset-0 bg-gradient-to-t from-forest/70 via-transparent to-transparent" />

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-20 pt-36 md:px-10 md:pb-28 md:pt-44">
        <div className="max-w-3xl">
          <p className="mb-5 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.25em] text-tan md:text-sm">
            <span className="h-px w-8 bg-tan" />
            Property Services in Beeville, TX
          </p>

          <h1 className="font-heading text-5xl font-bold uppercase leading-[0.95] tracking-tight text-white sm:text-6xl md:text-7xl lg:text-8xl">
            One Call.
            <br />
            Three Ways to
            <br />
            <span className="text-tan">Get It Done.</span>
          </h1>

          <p className="mt-7 max-w-xl text-base leading-relaxed text-white/85 md:text-lg">
            From tree trimming and removal to lawn care and land improvements,
            J&R delivers dependable property services throughout Beeville and
            the surrounding South Texas communities.
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <Link
              href="tel:3613182522"
              className="inline-flex min-h-14 items-center justify-center gap-3 rounded-full bg-tan px-7 py-4 text-sm font-bold text-espresso transition hover:bg-white"
            >
              <Phone size={18} />
              Call for a Free Estimate
            </Link>

            <Link
              href="#service-categories"
              className="inline-flex min-h-14 items-center justify-center gap-3 rounded-full border border-white/40 px-7 py-4 text-sm font-bold text-white transition hover:border-tan hover:bg-white/10"
            >
              Explore Our Services
              <ArrowDown size={18} />
            </Link>
          </div>

          <div className="mt-10 flex items-center gap-3 text-sm text-white/75">
            <ArrowRight size={16} className="text-tan" />
            <span>
              Backed by 17+ years of hands-on field experience
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
