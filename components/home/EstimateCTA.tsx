
"use client";

import { useState, type FormEvent } from "react";
import { ArrowRight, Phone } from "lucide-react";

const inputClass =
  "w-full rounded-sm border border-white/15 bg-white/10 px-4 py-4 text-sm text-white outline-none transition placeholder:text-white/40 focus:border-tan focus:ring-1 focus:ring-tan";

const labelClass =
  "mb-2 block text-xs font-bold uppercase tracking-widest text-white/75";

export default function EstimateCTA() {
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);
    const body = new URLSearchParams();

    formData.forEach((value, key) => {
      if (typeof value === "string") {
        body.append(key, value);
      }
    });

    setSubmitting(true);
    setError("");

    try {
      const response = await fetch("/__forms.html", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: body.toString(),
      });

      if (!response.ok) {
        throw new Error("Unable to submit your request.");
      }

      setSubmitted(true);
      form.reset();
    } catch {
      setError(
        "Something went wrong. Please call James directly at (361) 318-2522."
      );
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <section
      id="estimate"
      className="relative overflow-hidden bg-pine px-5 py-24 sm:px-8 md:py-32"
    >
      <div className="pointer-events-none absolute -right-20 -top-20 h-80 w-80 rounded-full border border-white/10" />
      <div className="pointer-events-none absolute -right-10 -top-10 h-60 w-60 rounded-full border border-white/10" />

      <div className="relative mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-20">
        <div>
          <div className="mb-5 flex items-center gap-3">
            <span className="h-px w-10 bg-tan" />
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-tan sm:text-sm">
              Let's Get to Work
            </p>
          </div>

          <h2 className="font-heading text-5xl font-bold uppercase leading-[0.95] text-white sm:text-6xl md:text-7xl">
            Your Property.
            <span className="block text-tan">Your Plans.</span>
            <span className="block">Let's Make It Happen.</span>
          </h2>

          <p className="mt-7 max-w-lg text-base leading-7 text-white/70 sm:text-lg sm:leading-8">
            Whether it's tree work, lawn care, or a bigger property project,
            James is ready to hear what you have in mind. Reach out today to
            discuss your project and request a free estimate.
          </p>

          <a
            href="tel:3613182522"
            className="mt-9 inline-flex items-center gap-3 text-lg font-bold text-tan transition hover:text-cream"
          >
            <Phone size={21} />
            (361) 318-2522
          </a>

          <p className="mt-2 text-xs uppercase tracking-widest text-white/45">
            Call James directly
          </p>
        </div>

        <div className="bg-forest p-6 shadow-2xl sm:p-9 md:p-10">
          {submitted ? (
            <div
              role="status"
              aria-live="polite"
              className="py-12 text-center"
            >
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-tan">
                Request Received
              </p>
              <h3 className="mt-4 font-heading text-4xl font-bold uppercase text-white sm:text-5xl">
                Thank You!
              </h3>
              <p className="mt-4 text-sm leading-6 text-white/65">
                Your estimate request has been submitted. James will be in
                touch soon.
              </p>
            </div>
          ) : (
            <>
              <div className="mb-8">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-tan">
                  Start Your Project
                </p>
                <h3 className="mt-2 font-heading text-4xl font-bold uppercase text-white sm:text-5xl">
                  Request an Estimate
                </h3>
                <p className="mt-3 text-sm leading-6 text-white/55">
                  Tell us a little about your project and James will follow up.
                </p>
              </div>

              <form
                name="estimate-request"
                method="POST"
                data-netlify="true"
                netlify-honeypot="bot-field"
                onSubmit={handleSubmit}
                className="space-y-5"
              >
                <input
                  type="hidden"
                  name="form-name"
                  value="estimate-request"
                />

                <div
                  className="absolute -left-[9999px]"
                  aria-hidden="true"
                >
                  <label htmlFor="bot-field">
                    Leave this field empty
                  </label>
                  <input
                    id="bot-field"
                    name="bot-field"
                    type="text"
                    tabIndex={-1}
                    autoComplete="off"
                  />
                </div>

                <div>
                  <label htmlFor="name" className={labelClass}>
                    Your Name *
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    required
                    placeholder="Full name"
                    className={inputClass}
                  />
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="phone" className={labelClass}>
                      Phone Number *
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      autoComplete="tel"
                      required
                      placeholder="(361) 555-0123"
                      className={inputClass}
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className={labelClass}>
                      Email Address
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      placeholder="you@example.com"
                      className={inputClass}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="location" className={labelClass}>
                    City or ZIP Code *
                  </label>
                  <input
                    id="location"
                    name="location"
                    type="text"
                    autoComplete="postal-code"
                    required
                    placeholder="Beeville, TX"
                    className={inputClass}
                  />
                </div>

                <div>
                  <label htmlFor="service" className={labelClass}>
                    What Do You Need? *
                  </label>
                  <select
                    id="service"
                    name="service"
                    required
                    defaultValue=""
                    className={`${inputClass} appearance-none`}
                  >
                    <option value="" disabled className="text-espresso">
                      Select a service
                    </option>
                    <option value="Tree Trimming & Removal" className="text-espresso">
                      Tree Trimming & Removal
                    </option>
                    <option value="Land Improvements & Clearing" className="text-espresso">
                      Land Improvements & Clearing
                    </option>
                    <option value="Lawn Care & Landscaping" className="text-espresso">
                      Lawn Care & Landscaping
                    </option>
                    <option value="Other Project" className="text-espresso">
                      Other Project
                    </option>
                  </select>
                </div>

                <div>
                  <label htmlFor="details" className={labelClass}>
                    Tell Us About Your Project
                    <span className="ml-2 font-normal normal-case tracking-normal text-white/40">
                      (Optional)
                    </span>
                  </label>
                  <textarea
                    id="details"
                    name="details"
                    rows={4}
                    placeholder="A few details about the work you'd like done..."
                    className={`${inputClass} resize-y`}
                  />
                </div>

                {error && (
                  <p role="alert" className="text-sm text-red-300">
                    {error}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={submitting}
                  className="group flex min-h-14 w-full items-center justify-center gap-3 rounded-full bg-tan px-6 py-4 text-sm font-bold uppercase tracking-wide text-espresso transition hover:bg-cream disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {submitting ? "Sending..." : "Submit Estimate Request"}
                  {!submitting && (
                    <ArrowRight
                      size={18}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  )}
                </button>

                <p className="text-center text-xs leading-5 text-white/40">
                  Prefer to talk? Call James directly at (361) 318-2522.
                </p>
              </form>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
