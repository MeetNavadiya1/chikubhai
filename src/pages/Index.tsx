import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import FlavorShowcase from "@/components/FlavorShowcase";
import WhyChooseUs from "@/components/WhyChooseUs";
import BulkPackaging from "@/components/BulkPackaging";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <FlavorShowcase />
        <WhyChooseUs />
        <BulkPackaging />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
