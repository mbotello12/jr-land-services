import Navbar from "@/components/NavBar";
import MobileCallBar from "@/components/MobileCallBar";
import Hero from "@/components/Hero";
import ServicesSection from "@/components/ServiceSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import RecentWork from "@/components/RecentWork";
import ServiceAreas from "@/components/ServiceArea";
import EstimateCTA from "@/components/EstimateCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="flex-1">
        <Hero />
        <ServicesSection />
        <WhyChooseUs />
        <RecentWork />
        <ServiceAreas />
        <EstimateCTA />
      </main>
      
      <Footer />
      <MobileCallBar />
    </>
  );
}
