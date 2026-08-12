import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustStrip from "@/components/TrustStrip";
import About from "@/components/About";
import Focus from "@/components/Focus";
import Services from "@/components/Services";
import ResumeSection from "@/components/ResumeSection";
import ResumeShowcase from "@/components/ResumeShowcase";
import LinkedInSection from "@/components/LinkedInSection";
import ContentWriting from "@/components/ContentWriting";
import CreativeDesign from "@/components/CreativeDesign";
import AIContent from "@/components/AIContent";
import PersonalBranding from "@/components/PersonalBranding";
import WhyHania from "@/components/WhyHania";
import Process from "@/components/Process";
import Testimonial from "@/components/Testimonial";
import Gallery from "@/components/Gallery";
import CTA from "@/components/CTA";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-ivory">
      <Navbar />
      <Hero />
      <TrustStrip />
      <About />
      <Focus />
      <Services />
      <ResumeSection />
      <ResumeShowcase />
      <LinkedInSection />
      <ContentWriting />
      <CreativeDesign />
      <AIContent />
      <PersonalBranding />
      <WhyHania />
      <Process />
      <Testimonial />
      <Gallery />
      <CTA />
      <Contact />
      <Footer />
    </main>
  );
}
