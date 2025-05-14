import React from "react";
import Image from "next/image";

const Navbar = () => {
    return (
        <div className="flex flex-row justify-center gap-10 items-center w-full p-4 text-gray-800 px-5 py-1">
            <div>
                <Image
                    src="/CryptoNestLogo.png"
                    alt="CryptoNest Logo"
                    width={100}
                    height={40}
                    className="size-35"
                />
            </div>
            <div className="flex items-center gap-8 font-semibold">
            <div>Why us?</div>
            <div>Cryptos</div>
            <div>How it works?</div>
            <div>Testimonials</div>
            <div>FAQ</div>
            </div>
        </div>
    );
};

export default Navbar;
