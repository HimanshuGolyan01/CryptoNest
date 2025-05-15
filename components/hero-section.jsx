import React from "react";
import { Spotlight } from "./ui/spotlight";
import { HeroHighlight } from "./ui/hero-highlight";
import { StarIcon, Globe } from "lucide-react";
import Image from "next/image";

const Hero = () => {
    return (
        <div className="relative flex items-center justify-center h-auto">
            <Spotlight />
            <div className="rounded-full border border-white absolute z-50 top-12 text-white px-5 py-3 font-bold text-sm md:text-base">
                Crypto, Controlled. Chaos, Cancelled.
            </div>
            <div className="absolute z-50 text-center px-4 top-32 md:top-40">
                <h1 className="text-4xl md:text-6xl font-bold leading-tight text-white">
                    Take Control Over Your <br /> Digital Assets
                </h1>
            </div>
            <div className="absolute z-50 text-center px-6 top-[18rem] md:top-[20rem] font-light text-white text-base md:text-lg">
                Cryptix offers a seamless, secure experience for managing your
                digital assets.
                <br />
                Instant transactions, optimized fees, and premium design.
            </div>
            <button className="bg-[#00FF9D] hover:brightness-110 text-black font-semibold text-sm md:text-base px-6 py-4 rounded-full flex items-center gap-3 shadow-[0_0_12px_#00FF9D] transition-all duration-300 absolute z-50 top-[27rem]">
                Get started now
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17 7L7 17M17 7H7m10 0v10"
                    />
                </svg>
            </button>
            <div className="absolute z-50 text-white font-semibold top-[34rem]">
                They trust Us
            </div>
            <div className="absolute z-50 text-white top-[37rem] flex gap-3">
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <Globe />
            </div>
            <div className="absolute top-[42rem] z-30 w-full h-screen mt-32 flex justify-center bg-black">
                <Image
                    src="/Dashboard.png"
                    alt="Dashboard"
                    width={1000}
                    height={500}
                    className="rounded-xl shadow-2xl absolute -top-30 border-2 border-[#23372f]"
                />
            </div>
            <HeroHighlight />
        </div>
    );
};

export default Hero;
