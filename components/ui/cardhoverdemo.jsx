"use client"
import { HoverEffect } from "../ui/card-hover-effect";

export function CardHoverEffectDemo() {
  return (
    <div className="max-w-5xl mx-5 px-5 absolute z-50 top-[27rem] shadow-2xl border border-white lg:top-[45rem] " >
      <HoverEffect items={projects} />
    </div>
  );
}
export const projects = [
  {
    title: "Maximum Security",
    description:
      "Your assets are protected with cutting-edge security protocols."
  },
  {
    title: "Instant Transaction",
    description:
      "Execute your transactions in real-time, without delays.",
  },
  {
    title: "Optimized Fees",
    description:
      "Benefit from some of the lowest fees on the market.",
  },
  {
    title: "Premium Interface ",
    description:
      "An elegant, intuitive design that’s easy to use, even for beginners.",
  },
  {
    title: "Security",
    description:
      "your Accout data will be secure we will not share any personal data with third party",
  },
  {
    title: "Minimum brokerage",
    description:
      "We charged least brokerage in the market.",
  },
];
