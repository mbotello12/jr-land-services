
import {
  BadgeCheck,
  Handshake,
  UserRound,
  ArrowUpRight,
} from "lucide-react";
import Link from "next/link";

const reasons = [
  {
    number: "01",
    icon: BadgeCheck,
    title: "Experience That Shows",
    description:
      "With 17+ years of hands-on field experience, James brings practical knowledge and attention to detail to every project.",
  },
  {
    number: "02",
    icon: UserRound,
    title: "Work Directly With James",
    description:
      "J&R is owner-operated. You'll have direct communication with James, not a revolving door of salespeople.",
  },
  {
    number: "03",
    icon: Handshake,
    title: "Straightforward Service",
    description:
      "Honest, fair pricing and a focus on doing the job right. No unnecessary runaround, just a practical approach to your property needs.",
  },
];

export default function WhyChooseJr() {
  return (
    <section className="relative overflow-hidden bg-forest px-6 py-20 text-white md:px-10 md:py-28">
      {/* Subtle background detail */}
      <div className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full border border-white/10" />
      <div className="pointer-events-none absolute -right-12 -top-12 h-56 w-56 rounded-full border border-white/10" />

      <div className="relative mx-auto max-w-7xl">
        {/* Heading */}
        <div className="grid gap-8 md:grid-cols-2 md:items-end">
          <div>
            <p className="mb-5 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.22em] text-tan">
              <span className="h-px w-8 bg-tan" />
              The J&R Difference
            </p>

            <h2 className="font-heading text-5xl font-bold uppercase leading-[0.95] sm:text-6xl md:text-7xl">
              Good Work.
              <br />
              <span className="text-tan">Good People.</span>
              <br />
              Done Right.
            </h2>
          </div>

          <p className="max-w-lg text-base leading-relaxed text-white/70 md:justify-self-end md:text-lg">
            Your property deserves more than a quick fix. J&R brings
            experience, personal attention, and a straightforward approach
            to every job.
          </p>
        </div>

        {/* Reasons */}
        <div className="mt-16 grid border-t border-white/20 md:mt-20 md:grid-cols-3">
          {reasons.map((reason) => {
            const Icon = reason.icon;

            return (
              <div
                key={reason.number}
                className="border-b border-white/20 py-9 md:border-b-0 md:border-r md:px-8 md:py-10 md:first:pl-0 md:last:border-r-0 md:last:pr-0"
              >
                <div className="flex items-center justify-between">
                  <span className="font-heading text-4xl font-bold text-tan/70">
                    {reason.number}
                  </span>

                  <Icon size={25} className="text-tan" strokeWidth={1.5} />
                </div>

                <h3 className="mt-8 font-heading text-3xl font-bold uppercase">
                  {reason.title}
                </h3>

                <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/65 md:text-base">
                  {reason.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Bottom statement */}
        <div className="mt-10 flex flex-col gap-5 border-t border-white/20 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-heading text-2xl font-semibold uppercase tracking-wide text-white/90 md:text-3xl">
            Your Property. Our Priority.
          </p>

          <Link
            href="tel:3613182522"
            className="group inline-flex items-center gap-3 text-sm font-bold uppercase tracking-wider text-tan transition hover:text-white"
          >
            Talk With James
            <ArrowUpRight
              size={20}
              className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
