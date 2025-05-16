'use client';
import React, { useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="w-full bg-black text-white px-5 py-4">
            <div className="flex justify-between items-center max-w-7xl mx-auto">
                <Image
                    src="/CryptoNestLogo.png"
                    alt="CryptoNest Logo"
                    width={100}
                    height={25}
                    className="object-contain"
                />

                <div className="hidden md:flex gap-8 font-semibold text-sm">
                    <div>Why us?</div>
                    <div>Cryptos</div>
                    <div>How it works?</div>
                    <div>Testimonials</div>
                    <div>FAQ</div>
                </div>

                <div className="md:hidden">
                    {isOpen ? (
                        <X onClick={() => setIsOpen(false)} className="w-6 h-6 cursor-pointer" />
                    ) : (
                        <Menu onClick={() => setIsOpen(true)} className="w-6 h-6 cursor-pointer" />
                    )}
                </div>
            </div>

            {isOpen && (
                <div className="flex flex-col md:hidden mt-4 space-y-4 font-medium text-sm">
                    <div>Why us?</div>
                    <div>Cryptos</div>
                    <div>How it works?</div>
                    <div>Testimonials</div>
                    <div>FAQ</div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
