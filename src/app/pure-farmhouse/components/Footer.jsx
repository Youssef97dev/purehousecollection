import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { FaMailBulk } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-riad_background text-riad_primary px-6 py-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-around items-center md:items-center space-y-4 md:space-y-0">
        <div className="flex justify-center items-start">
          <Image
            src="/farm/farm-logo-black.png"
            alt="logo pure farmhouse"
            width={100}
            height={100}
            className="object-cover w-36"
          />
        </div>

        {/* Left Section */}
        <div className="flex flex-col justify-center items-center md:items-start space-y-4 text-[12px] text-riad_primary">
          <span>
            <FaLocationDot className="inline mr-1" />
            {"Lalla Takerkoust, Marrakech 40000 Morocco"}
          </span>
          <span>
            <FaMailBulk className="inline mr-1" />
            <Link href="mailto:reservations@purehousemarrakech.com">
              reservations@purehousemarrakech.com
            </Link>
          </span>
          <span>
            <FaWhatsapp className="inline mr-1" />
            <Link href="https://wa.me/212641173841">+212 641-173841</Link>
          </span>
        </div>

        {/* Center Section */}
        <div className="flex flex-col justify-center items-center md:items-start space-y-4 text-[12px] text-riad_primary">
          <span>
            <Link href="/pure-farmhouse">{"Home"}</Link>
          </span>
          <span>
            <Link href="/pure-farmhouse/gallery">{"Gallery"}</Link>
          </span>
          <span>
            <Link href="/pure-farmhouse/contact">{"Contact"}</Link>
          </span>
        </div>

        {/* Right Section */}
        <div className="flex flex-col justify-center items-center md:items-start space-y-4 text-[12px] text-riad_primary">
          <span>
            <Link href="https://www.instagram.com/pure.farmhouse/">
              {"Instagram"}
            </Link>
          </span>
          <span>
            <Link href="https://wa.me/212641173841">{"Whatsapp"}</Link>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
