
import type { Metadata } from "next";
import Navbar from "@/components/NavBar";
import Footer from "@/components/Footer";
import MobileCallBar from "@/components/MobileCallBar";
import ServicesHero from "@/components/services/ServicesHero";
import ServiceDetails from "@/components/services/ServiceDetails";
import WhyChooseJr from "@/components/services/WhyChooseJr";
import ServicesEstimateCTA from "@/components/services/ServicesEstimateCTA";

export const metadata: Metadata = {
  title: "Tree Trimming, Lawn Care & Land Services in Beeville, TX",
  description:
    "Explore J&R Tree, Lawn & Land Services in Beeville, TX. Tree trimming, tree removal, lawn care, landscaping, land clearing and property improvements.",
};

export default function ServicesPage() {
  return (
    <>
      <Navbar />

      <main>
        <ServicesHero />
        <ServiceDetails />
        <WhyChooseJr />
        <ServicesEstimateCTA />
      </main>

      <Footer />
      <MobileCallBar />
    </>
  );
}
