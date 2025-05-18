import Image from "next/image";
import Navbar from "@/components/navbar";
import Hero from "@/components/hero-section";
import Features from "@/components/features";
import FaqSection from "@/components/faq";
import { Footer } from "@/components/footer-section";
export default function Home() {
  return (
    <div className="">
      <Navbar/>
      <Hero/>
      <Features/>
      <FaqSection/>
      <Footer/>
    </div>
  );
}
