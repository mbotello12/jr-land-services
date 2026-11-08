import { ArrowUpRight, CheckCircle2, Phone, MapPin } from "lucide-react";

export default function ServicesEstimateCTA() {
  return (
    <section
      id="services-estimate"
      className="bg-cream px-6 py-20 md:px-10 md:py-28"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid overflow-hidden bg-forest lg:grid-cols-[1fr_0.9fr]">
          {/* Left: CTA message */}
          <div className="relative flex flex-col justify-center overflow-hidden px-7 py-14 text-white sm:px-10 md:px-14 md:py-20">
            <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full border border-white/10" />
            <div className="pointer-events-none absolute -right-10 -top-10 h-52 w-52 rounded-full border border-white/10" />

            <div className="relative">
              <p className="mb-5 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.22em] text-tan">
                <span className="h-px w-8 bg-tan" />
                Let's Get to Work
              </p>

              <h2 className="max-w-xl font-heading text-5xl font-bold uppercase leading-[0.92] sm:text-6xl md:text-7xl">
                Have a Project
                <br />
                <span className="text-tan">in Mind?</span>
              </h2>

              <p className="mt-7 max-w-lg text-base leading-relaxed text-white/75 md:text-lg">
                Whether it's a tree that needs attention, land that needs
                improving, or a yard that needs a fresh start, let's talk
                about what you have in mind.
              </p>

              <div className="mt-10 space-y-5">
                <div className="flex items-center gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/20 text-tan">
                    <Phone size={19} />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-white/50">
                      Call James Directly
                    </p>
                    <a
                      href="tel:3613182522"
                      className="mt-1 block text-lg font-bold text-white transition hover:text-tan"
                    >
                      (361) 318-2522
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/20 text-tan">
                    <MapPin size={19} />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-white/50">
                      Proudly Serving
                    </p>
                    <p className="mt-1 font-semibold text-white">
                      Beeville & Surrounding South Texas Communities
                    </p>
                  </div>
                </div>
              </div>

              <p className="mt-10 font-heading text-2xl font-semibold uppercase tracking-wide text-tan">
                Tree. Lawn. Land. Done Right.
              </p>
            </div>
          </div>

          {/* Right: Estimate request form */}
          <div className="bg-off-white px-7 py-12 text-espresso sm:px-10 md:px-14 md:py-16">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-pine">
              Start Your Project
            </p>

            <h3 className="mt-3 font-heading text-4xl font-bold uppercase leading-none sm:text-5xl">
              Request an Estimate
            </h3>

            <p className="mt-4 text-sm leading-relaxed text-espresso/65">
              Tell us a little about your project and James will have the
              information needed to follow up.
            </p>

            <form
              name="estimate-request"
              method="POST"
              data-netlify="true"
              netlify-honeypot="bot-field"
              className="mt-8 space-y-5"
            >
              <input
                type="hidden"
                name="form-name"
                value="estimate-request"
              />

              <div className="hidden">
                <label>
                  Don't fill this out:
                  <input name="bot-field" />
                </label>
              </div>

              <div>
                <label
                  htmlFor="services-name"
                  className="mb-2 block text-xs font-bold uppercase tracking-wider text-espresso/70"
                >
                  Your Name *
                </label>
                <input
                  id="services-name"
                  name="name"
                  type="text"
                  required
                  placeholder="Full name"
                  className="w-full border border-espresso/15 bg-white px-4 py-3.5 text-sm outline-none transition placeholder:text-espresso/35 focus:border-pine"
                />
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="services-phone"
                    className="mb-2 block text-xs font-bold uppercase tracking-wider text-espresso/70"
                  >
                    Phone *
                  </label>
                  <input
                    id="services-phone"
                    name="phone"
                    type="tel"
                    required
                    placeholder="(361) 000-0000"
                    className="w-full border border-espresso/15 bg-white px-4 py-3.5 text-sm outline-none transition placeholder:text-espresso/35 focus:border-pine"
                  />
                </div>

                <div>
                  <label
                    htmlFor="services-email"
                    className="mb-2 block text-xs font-bold uppercase tracking-wider text-espresso/70"
                  >
                    Email
                  </label>
                  <input
                    id="services-email"
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                    className="w-full border border-espresso/15 bg-white px-4 py-3.5 text-sm outline-none transition placeholder:text-espresso/35 focus:border-pine"
                  />
                </div>
              </div>
            
<div>
  <label
    htmlFor="services-location"
    className="mb-2 block text-xs font-bold uppercase tracking-wider text-espresso/70"
  >
    Project Location *
  </label>
  <input
    id="services-location"
    name="location"
    type="text"
    required
    placeholder="City or general location"
    className="w-full border border-espresso/15 bg-white px-4 py-3.5 text-sm outline-none transition placeholder:text-espresso/35 focus:border-pine"
  />
</div>

              <div>
                <label
                  htmlFor="services-service"
                  className="mb-2 block text-xs font-bold uppercase tracking-wider text-espresso/70"
                >
                  What Do You Need? *
                </label>
                <select
                  id="services-service"
                  name="service"
                  required
                  defaultValue=""
                  className="w-full border border-espresso/15 bg-white px-4 py-3.5 text-sm text-espresso/75 outline-none transition focus:border-pine"
                >
                  <option value="" disabled>
                    Select a service
                  </option>
                  <option value="Tree Trimming & Removal">
                    Tree Trimming & Removal
                  </option>
                  <option value="Land Improvements & Clearing">
                    Land Improvements & Clearing
                  </option>
                  <option value="Lawn Care & Landscaping">
                    Lawn Care & Landscaping
                  </option>
                  <option value="Other Project">Other Project</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="services-details"
                  className="mb-2 block text-xs font-bold uppercase tracking-wider text-espresso/70"
                >
                  Tell Us About Your Project
                </label>
                <textarea
                  id="services-details"
                  name="details"
                  rows={3}
                  placeholder="A few details about the work you need..."
                  className="w-full resize-y border border-espresso/15 bg-white px-4 py-3.5 text-sm outline-none transition placeholder:text-espresso/35 focus:border-pine"
                />
              </div>

              <button
                type="submit"
                className="group flex min-h-14 w-full items-center justify-center gap-3 bg-forest px-6 py-4 text-sm font-bold uppercase tracking-wider text-white transition hover:bg-pine"
              >
                Send Estimate Request
                <ArrowUpRight
                  size={19}
                  className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
                />
              </button>

              <p className="flex items-center justify-center gap-2 text-xs text-espresso/50">
                <CheckCircle2 size={14} className="text-pine" />
                Your project details go directly to J&R.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
