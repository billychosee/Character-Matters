import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import ServicesSection from "../components/ServicesSection";
import BooksSection from "../components/BooksSection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-black scroll-smooth">
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <BooksSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
