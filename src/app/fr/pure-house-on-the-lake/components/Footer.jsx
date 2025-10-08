import Link from "next/link";
import Image from "next/image";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";

const Footer = ({ path }) => {
  return (
    <footer className="">
      <div className="max-w-6xl mx-auto px-4 py-10">
        {/* Top Links */}
        <div className="w-full flex flex-col lg:flex-row justify-around items-center gap-8 text-[15px] leading-[24.75px] tracking-widest text-[#B5A697] uppercase mb-10">
          <Link
            href="/fr/pure-house-on-the-lake/location"
            className="hover:text-gray-800"
          >
            Emplacement
          </Link>
          <Link
            href="/fr/pure-house-on-the-lake/about"
            className="hover:text-gray-800"
          >
            À propos
          </Link>
          <Link
            href="/fr/pure-house-on-the-lake/events"
            className="hover:text-gray-800"
          >
            Événements
          </Link>
          <Link
            href="/fr/pure-house-on-the-lake/gallery"
            className="hover:text-gray-800"
          >
            Galerie
          </Link>
        </div>

        {/* Social + Logo */}
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-16 lg:gap-6 py-10">
          {/* Social Icons */}
          <div className="flex space-x-6 text-white text-2xl">
            <Link
              href="https://www.instagram.com/pure_house_on_the_lake_/"
              className="bg-[#C3B6AD] p-3 rounded-full"
            >
              <FaInstagram />
            </Link>
            <Link href="#" className="bg-[#C3B6AD] p-3 rounded-full">
              <FaWhatsapp />
            </Link>
          </div>

          {/* Logo */}
          <div className="text-center md:text-right">
            <Link href="/fr/pure-house-on-the-lake">
              <Image
                src={"/lake/lake-logo-black-nav.png"}
                width={300}
                height={300}
                alt="Logo pure house on the lake"
                className={`mt-2 w-60`}
              />
            </Link>
          </div>
        </div>

        {/* Languages */}
        <div className="flex justify-center mt-10 space-x-6 text-xs uppercase tracking-widest text-[#B5A697]">
          <Link
            rel="alternate"
            hreflang="en"
            href={`${path}`}
            className="hover:text-gray-800"
          >
            English
          </Link>
          <Link
            rel="alternate"
            hreflang="fr"
            href="#"
            className="hover:text-gray-800"
          >
            Français
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
