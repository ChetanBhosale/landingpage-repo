import { Metadata } from "next";
import Hero from "@/components/Hero";
import Brands from "@/components/Brands";
import Feature from "@/components/Features";
import About from "@/components/About";
import FeaturesTab from "@/components/FeaturesTab";
import FunFact from "@/components/FunFact";
import Integration from "@/components/Integration";
import CTA from "@/components/CTA";
import FAQ from "@/components/FAQ";
import Pricing from "@/components/Pricing";
import Contact from "@/components/Contact";
import Blog from "@/components/Blog";
import Testimonial from "@/components/Testimonial";

export const metadata: Metadata = {
  title: "ExuberantHR Consulting | Your Trusted Recruitment & HR Partner",
  description:
    "Welcome to ExuberantHR Consulting, a leading Recruitment and HR Consulting firm based in Pune, India. Since 2018, we specialize in Executive Search, Leadership Hiring, HR Consulting, and Training & Development, connecting top talent with leading companies.",
  keywords: [
    "ExuberantHR Consulting",
    "Recruitment",
    "HR Consulting",
    "Executive Search",
    "Leadership Hiring",
    "Permanent Staffing",
    "Contract Staffing",
    "Training & Development",
    "Pune",
    "India",
  ],
  icons : '/images/my-img/logo-png-final.png',
  // author: "ExuberantHR Consulting",
  // Add other metadata fields as needed
};


export default function Home() {
  return (
    <main>
      <Hero />
      <Brands />
      <Feature />
      <FeaturesTab />
      <About />
      <FunFact />
      <Integration />
      <CTA />
      <FAQ />
      <Testimonial />
      {/* <Pricing /> */}
      <Contact />
      {/* <Blog /> */}
    </main>
  );
}
