import React from "react";
import { CardHoverEffectDemo } from "./ui/cardhoverdemo";
import { BentoGridDemo } from "./ui/bentogriddemo";
const Features = () => {
    return (
        <div className="absolute z-50 top-[95rem] w-full bg-black py-20">
            <div className="text-white text-4xl font-bold text-center max-w-4xl mx-auto px-4">
                Simplicity, performance, and security, empowering you to
                navigate the digital world with confidence and agility.
            </div>

            <div className="text-3xl font-bold text-white text-center mt-12">
                Why Choose Cryptix?
            </div>

            <div className="text-lg font-light text-white text-center mt-2 mb-16">
                Benefits designed to provide a seamless, secure, and accessible
                experience for all users.
            </div>
            <div className="flex justify-center border  py-[20rem]  mx-auto">
                <CardHoverEffectDemo/>
            </div>
            <div className="absolute text-3xl font-bold text-white z-50 text-center pl-[57rem]">
                How It Works
            </div>
            <div className="absolute z-50 text-1xl font-thin text-gray-400 pl-[45rem] top-[67rem]">
                A simple, fast, and secure platform to manage your cryptocurrencies in just a few steps.
            </div>
            <div>
                <BentoGridDemo/>
            </div>
        </div>
    );
};

export default Features;
