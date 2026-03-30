import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import ArtistsSection from "@/components/ArtistsSection";
import GallerySection from "@/components/GallerySection";
import WhatsAppBooking from "@/components/WhatsAppBooking";
import TestimonialsSection from "@/components/TestimonialsSection";
import AfterCareSection from "@/components/AfterCareSection";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <ArtistsSection />
      <GallerySection />
      <WhatsAppBooking />
      <TestimonialsSection />
      <AfterCareSection />
      <FAQSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
