import Navbar from "@/components/NavBar";
import MobileCallBar from "@/components/MobileCallBar";
import Hero from "@/components/Hero";
import ServicesSection from "@/components/ServiceSection";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="flex-1">
        <Hero />
        <ServicesSection />
       
      </main>

      <MobileCallBar />
    </>
  );
}
