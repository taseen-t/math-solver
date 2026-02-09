import Navbar from "@/components/ui/navbar/Navbar";
import NewTool from "@/components/home/new-tool/NewTool";
import HeroSection from "@/components/home/hero/HeroSection";
import WhyChooseUs from "@/components/home/why-choose-us/WhyChooseUs";
import Testimonials from "@/components/home/testimonials/Testimonials";
import Faq from "@/components/home/faq/Faq";
import CtaSection from "@/components/home/cta/CtaSection";
import Footer from "@/components/home/footer/Footer";

const Home = () => {
  return (
    <div className="font-mon w-full h-full relative overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <NewTool />
      <WhyChooseUs />
      <Testimonials />
      <Faq />
      <CtaSection />
      <Footer />
    </div>
  );
};

export default Home;
