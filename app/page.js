import Image from "next/image";
import Navbar from "@/components/navbar";
import Hero from "@/components/hero-section";
import Features from "@/components/features";

export default function Home() {
  return (
    <div className="">
      <Navbar/>
      <Hero/>
      <Features/>
    </div>
  );
}
