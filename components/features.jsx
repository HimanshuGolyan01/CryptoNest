import React from "react";
import { CardHoverEffectDemo } from "./ui/cardhoverdemo";
import { BentoGridDemo } from "./ui/bentogriddemo";

const Features = () => {
    return (
        <div className="relative z-50 w-full bg-black py-20 px-4 md:py-[10rem] lg:py-[30rem]">
            <div className="text-white text-2xl md:text-3xl font-bold text-center max-w-5xl mx-auto]">
                Simplicity, performance, and security, empowering you to
                navigate the digital world with confidence and agility.
            </div>

            <div className="text-lg md:text-xl font-bold text-white text-center mt-10 md:mt-20">
                Why Choose Cryptix?
            </div>

            <div className="text-base md:text-lg font-light text-white text-center mb-15">
                Benefits designed to provide a seamless, secure, and accessible
                experience for all users.
            </div>

            <div className="flex justify-center py-20">
                <CardHoverEffectDemo />
            </div>

            <div className="text-2xl md:text-3xl font-bold text-white text-center mt-[77rem] md:mt-[35rem] lg:mt-[25rem]  ">
                How It Works
            </div>

            <div className="text-base md:text-lg font-light text-gray-400 text-center mb-10 max-w-3xl mx-auto">
                A simple, fast, and secure platform to manage your cryptocurrencies in just a few steps.
            </div>

            <div>
                <BentoGridDemo />
            </div>
        </div>
    );
};

export default Features;
