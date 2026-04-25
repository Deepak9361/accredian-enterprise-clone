import LeadForm from "@/components/LeadForm";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Companies from "@/components/Companies";
import Features from "@/components/Features";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Companies />
      <Features />
      <Testimonials />
      <CTA />
      <LeadForm />
      <Footer />
    </>
  );
}