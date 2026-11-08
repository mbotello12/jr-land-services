
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";

const serviceDetails = [
  {
    number: "01",
    category: "Tree Care",
    title: "Tree Trimming & Removal",
    description:
      "Healthy, well-maintained trees make a difference in the safety and appearance of your property. Whether you need overgrown limbs trimmed back or a problem tree removed, J&R is ready to help.",
    image: "/images/services/tree-work.jpg",
    alt: "Tree trimming and removal work",
    features: [
      "Tree trimming and pruning",
      "Tree removal",
      "Brush and limb cleanup",
      "General tree maintenance",
    ],
    href: "/services/tree-trimming",
  },
  {
    number: "02",
    category: "Land Services",
    title: "Land Improvements & Clearing",
    description:
      "Make better use of your property with practical land improvements. From clearing unwanted brush to preparing a site or improving existing driveways and ponds, J&R can help move your project forward.",
    image: "/images/services/land-clearing.jpg",
    alt: "Land clearing and property improvement work",
    features: [
      "Brush removal and land clearing",
      "Site preparation",
      "Pond repair and improvements",
      "Driveway repair",
    ],
    href: "/services/land-improvements",
  },
  {
    number: "03",
    category: "Outdoor Care",
    title: "Lawn Care & Landscaping",
    description:
      "Your outdoor space is part of your property. Keep it looking its best with dependable lawn care and landscaping services tailored to your needs.",
    image: "/images/services/lawn-care.jpg",
    alt: "Lawn care and landscaping work",
    features: [
      "Lawn maintenance",
      "Landscaping",
      "Property cleanup",
      "General outdoor improvements",
    ],
    href: "/services/lawn-care",
  },
];

export default function ServiceDetails() {
  return (
    <section className="bg-off-white px-6 py-20 md:px-10 md:py-28">
      <div className="mx-auto max-w-7xl">
        {/* Section introduction */}
        <div className="mb-16 max-w-2xl md:mb-24">
          <p className="mb-4 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.22em] text-pine">
            <span className="h-px w-8 bg-tan" />
            How We Can Help
          </p>

          <h2 className="font-heading text-4xl font-bold uppercase leading-[0.95] text-espresso sm:text-5xl md:text-6xl">
            The Right Work.
            <br />
            <span className="text-pine">Done the Right Way.</span>
          </h2>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-espresso/70 md:text-lg">
            No two properties are exactly alike. We take the time to
            understand what your property needs and provide practical
            solutions to get the job done.
          </p>
        </div>

        {/* Individual service details */}
        <div className="space-y-20 md:space-y-28">
          {serviceDetails.map((service, index) => (
            <article
              key={service.number}
              className="grid items-center gap-9 md:grid-cols-2 md:gap-14 lg:gap-20"
            >
              {/* Image */}
              <div
                className={`relative aspect-[5/4] overflow-hidden bg-cream ${
                  index % 2 === 1 ? "md:order-2" : ""
                }`}
              >
                <Image
                  src={service.image}
                  alt={service.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 hover:scale-105"
                />

                <div className="absolute bottom-0 left-0 bg-forest px-6 py-4">
                  <span className="font-heading text-3xl font-bold text-tan">
                    {service.number}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div
                className={`${
                  index % 2 === 1 ? "md:order-1" : ""
                }`}
              >
                <p className="mb-4 text-xs font-bold uppercase tracking-[0.22em] text-pine">
                  {service.category}
                </p>

                <h3 className="font-heading text-4xl font-bold uppercase leading-[0.95] text-espresso sm:text-5xl">
                  {service.title}
                </h3>

                <p className="mt-6 text-base leading-relaxed text-espresso/70">
                  {service.description}
                </p>

                <ul className="mt-7 grid gap-3 sm:grid-cols-2">
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-3 text-sm font-medium text-espresso/80"
                    >
                      <Check
                        size={17}
                        className="mt-0.5 shrink-0 text-pine"
                      />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link
                  href={service.href}
                  className="group mt-9 inline-flex items-center gap-3 border-b border-tan pb-2 text-sm font-bold uppercase tracking-wider text-forest"
                >
                  Explore This Service
                  <ArrowRight
                    size={18}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
