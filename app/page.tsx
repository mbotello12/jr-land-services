import Navbar from "@/components/NavBar";
import MobileCallBar from "@/components/MobileCallBar";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="flex-1">
        <Hero />
        <section className="flex min-h-screen items-center justify-center px-6">
          <div className="text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-pine">
              Beeville, Texas
            </p>
            <h1 className="font-heading text-5xl font-bold uppercase text-forest md:text-7xl">
              J&R Services
            </h1>
            <p className="mt-4 text-espresso/70">
              Our new homepage is coming together.
            </p>
          </div>
        </section>
      </main>

      <MobileCallBar />
    </>
  );
}
