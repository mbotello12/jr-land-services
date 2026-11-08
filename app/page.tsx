import Navbar from "@/components/NavBar";
import MobileCallBar from "@/components/MobileCallBar";
import Hero from "@/components/home/Hero";
import ServicesSection from "@/components/home/ServiceSection";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import RecentWork from "@/components/home/RecentWork";
import ServiceAreas from "@/components/home/ServiceArea";
import EstimateCTA from "@/components/home/EstimateCTA";
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
