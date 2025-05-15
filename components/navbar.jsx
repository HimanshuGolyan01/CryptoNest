import React from "react";
import Image from "next/image";

const Navbar = () => {
    return (
        <div className="flex flex-row justify-center gap-10 items-center w-full h-22 px-5 bg-black text-white">
            <div>
                <Image
                    src="/CryptoNestLogo.png"
                    alt="CryptoNest Logo"
                    width={100}
                    height={25}
                />
            </div>
            <div className="flex items-center gap-8 font-semibold text-sm">
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
