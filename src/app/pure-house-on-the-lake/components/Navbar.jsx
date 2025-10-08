"use client";
import { useEffect, useState } from "react";
import { Transition } from "@headlessui/react";
import Link from "next/link";
import Image from "next/image";
import { IoIosMenu, IoMdClose } from "react-icons/io";
import { RiArrowDownSLine } from "react-icons/ri";

const Navbar = ({ path, change = false }) => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`absolute md:fixed z-[60] w-full transition-colors duration-300 py-4 ${
        scrolled || change
          ? "bg-lake_background text-lake_text"
          : "bg-lake_background md:bg-transparent text-white"
      }`}
    >
      <div className="w-full flex justify-between items-center mx-auto px-5 lg:px-14">
        <div className="w-[80%] lg:w-[30%] flex justify-start items-center gap-10">
          <Link href="/pure-house-on-the-lake" className="hidden md:block">
            <Image
              src={
                scrolled || change
                  ? "/lake/pure-house-lake-brown.png"
                  : "/lake/pure-house-lake-white.png"
              }
              width={300}
              height={300}
              alt="Logo pure house on the lake"
              className={`w-full mb-1`}
            />
          </Link>
          <Link href="/pure-house-on-the-lake" className="block md:hidden">
            <Image
              src={"/lake/pure-house-lake-brown.png"}
              width={300}
              height={300}
              alt="Logo pure house on the lake"
              className={`w-[85%]`}
            />
          </Link>
        </div>
        <ul className="w-full lg:w-[50%] lg:flex hidden justify-end items-center gap-10 uppercase text-[12px] leading-[20.4px] font-montserrat font-normal tracking-widest">
          <li className="hover:opacity-80 transition-all duration-200 ease-in-out">
            <Link href="/pure-house-on-the-lake">{"Home"}</Link>
          </li>
          <li className="hover:opacity-80 transition-all duration-200 ease-in-out">
            <Link href="/pure-house-on-the-lake/about">{"About"}</Link>
          </li>
          <li className="hover:opacity-80 transition-all duration-200 ease-in-out">
            <Link href="/pure-house-on-the-lake/events">{"Events"}</Link>
          </li>
          <li className="hover:opacity-80 transition-all duration-200 ease-in-out">
            <Link href="/pure-house-on-the-lake/gallery">{"Gallery"}</Link>
          </li>
          <li className="hover:opacity-80 transition-all duration-200 ease-in-out">
            <Link href="/pure-house-on-the-lake/photoshooting">
              {"Photoshooting"}
            </Link>
          </li>
          <li className="hover:opacity-80 transition-all duration-200 ease-in-out">
            <Link href="/pure-house-on-the-lake/yoga-wellness">
              {"Yoga & Wellness"}
            </Link>
          </li>
        </ul>
        <div className="w-full lg:w-[20%] lg:flex hidden justify-center gap-3 items-center  text-white cursor-pointer">
          <Link
            href="https://www.sevenrooms.com/explore/lesalamamarrakech/reservations/create/search/"
            className={`tracking-[0.2em] text-[12px] leading-[34.4px] uppercase py-1 px-4  transition-all duration-300 ease-in-out border border-white text-white bg-lake_button hover:opacity-75 font-light`}
          >
            Book Now
          </Link>
          <div
            className="relative"
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          >
            <button
              className={`flex justify-center items-center gap-2 transition-all duration-200 ease-in-out ${
                scrolled || change ? "text-lake_text" : "text-white"
              }`}
            >
              <span className="text-[12px]">{"EN"}</span>
              <div className="">
                <RiArrowDownSLine size={18} />
              </div>
            </button>
            {isDropdownOpen && (
              <ul className="absolute rounded top-4 -left-0 bg-white text-lake_text text-[12px] mt-2 py-1 w-10 shadow-lg flex flex-col justify-center items-center">
                <li className="px-2 py-2 rounded-lg cursor-pointer hover:bg-riad_secondary transition-all duration-200 ease-in-out">
                  <Link rel="alternate" hreflang="en" href="#">
                    {"EN"}
                  </Link>
                </li>
                <li className="px-2 py-2 rounded-lg cursor-pointer hover:bg-riad_secondary transition-all duration-200 ease-in-out">
                  <Link rel="alternate" hreflang="fr" href={`${path}`}>
                    {"FR"}
                  </Link>
                </li>
              </ul>
            )}
          </div>
        </div>
        <div
          className={`w-[20%] pb-1 cursor-pointer flex justify-end items-center text-[30px] lg:text-[30px] text-lake_button lg:hidden`}
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <IoIosMenu />
        </div>
        {/* Full-screen mobile menu */}
        <Transition
          show={isOpen}
          enter="transition ease-out duration-700"
          enterFrom="transform translate-x-full opacity-0"
          enterTo="transform translate-x-0 opacity-100"
          leave="transition ease-in duration-500"
          leaveFrom="transform translate-x-0 opacity-100"
          leaveTo="transform translate-x-full opacity-0"
        >
          <div className="fixed top-0 left-0 z-10 w-full h-screen bg-lake_mobile flex flex-col items-left justify-start gap-16 py-6 px-6 uppercase">
            <div
              className="w-full flex justify-end items-center text-white text-[25px]"
              onClick={() => setIsOpen(false)}
            >
              <IoMdClose />
            </div>
            <ul
              onClick={() => setIsOpen(false)}
              className="space-y-6 text-white leading-[49px] text-[16px] flex flex-col justify-center items-center"
            >
              <li className="hover:opacity-80 transition-all duration-200 ease-in-out">
                <Link href="/pure-house-on-the-lake">{"Home"}</Link>
              </li>
              <li className="hover:opacity-80 transition-all duration-200 ease-in-out">
                <Link href="/pure-house-on-the-lake/about">{"About"}</Link>
              </li>
              <li className="hover:opacity-80 transition-all duration-200 ease-in-out">
                <Link href="/pure-house-on-the-lake/events">{"Events"}</Link>
              </li>
              <li className="hover:opacity-80 transition-all duration-200 ease-in-out">
                <Link href="/pure-house-on-the-lake/gallery">{"Gallery"}</Link>
              </li>
              <li className="hover:opacity-80 transition-all duration-200 ease-in-out">
                <Link href="/pure-house-on-the-lake/photoshooting">
                  {"Photoshooting"}
                </Link>
              </li>
              <li className="hover:opacity-80 transition-all duration-200 ease-in-out">
                <Link href="/pure-house-on-the-lake/yoga-wellness">
                  {"Yoga & Wellness"}
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className={`tracking-[0.2em] text-[12px] leading-[34px] py-3 px-4  rounded transition-all duration-300 ease-in-out border border-white text-white bg-lake_button hover:bg-opacity-80`}
                >
                  Book Now
                </Link>
              </li>
              <ul className="py-2 w-full flex justify-center items-start gap-3">
                <li className="px-2 rounded-lg cursor-pointer">
                  <Link href="#">
                    <Image
                      src="/english.png"
                      width={100}
                      height={100}
                      alt="le salama restaurant"
                      className="w-7 h-7 md:w-7 md:h-7"
                    />
                  </Link>
                </li>
                <li className="px-2 rounded-lg cursor-pointer">
                  <Link rel="alternate" hreflang="fr" href={`/fr${path}`}>
                    <Image
                      src="/france.png"
                      width={100}
                      height={100}
                      alt="le salama restaurant"
                      className="w-7 h-7 md:w-7 md:h-7"
                    />
                  </Link>
                </li>
              </ul>
            </ul>
          </div>
        </Transition>
      </div>
    </nav>
  );
};

export default Navbar;
