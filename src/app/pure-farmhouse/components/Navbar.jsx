"use client";
import { useEffect, useState } from "react";
import { Transition } from "@headlessui/react";
import Link from "next/link";
import Image from "next/image";
import { IoIosMenu, IoMdClose } from "react-icons/io";
import { RiArrowDownSLine } from "react-icons/ri";
import { MdLanguage } from "react-icons/md";

const Navbar = ({ path, change = false }) => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isClient, setIsClient] = useState(false);
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

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    isClient && (
      <nav
        className={`fixed z-50 w-full py-0 bg-farmhouse_background text-farmhouse_text border-b border-farmhouse_text`}
      >
        <div className="w-full flex justify-between lg:justify-center items-center mx-auto py-3 px-5 lg:px-10">
          <div className="w-full lg:hidden block">
            <Link href="/pure-farmhouse">
              <Image
                src="/farm/farm-logo-black.png"
                width={300}
                height={300}
                alt="Logo Pure Farm House"
                className={`w-14`}
              />
            </Link>
          </div>
          <ul className="w-full lg:flex hidden justify-center items-center gap-10 uppercase text-[12px] leading-[20.4px] font-montserrat font-normal tracking-widest">
            <li>
              <Link href="/pure-farmhouse">
                <Image
                  src="/farm/farm-logo-black.png"
                  width={300}
                  height={300}
                  alt="Logo Pure Farm House"
                  className={`w-16 lg:w-12`}
                />
              </Link>
            </li>
            <li className="hover:text-black">
              <Link href="/pure-farmhouse">{"Home"}</Link>
            </li>
            <li className="hover:text-black">
              <Link href="/pure-farmhouse/gallery">{"Gallery"}</Link>
            </li>
            <li className="hover:text-black">
              <Link href="/pure-farmhouse/contact">{"Contact"}</Link>
            </li>
            <li className="hover:text-black">
              <Link href="https://purehousemarrakech.com/">
                {"Pure House Medina"}
              </Link>
            </li>
            <li className="hover:text-black">
              <Link href="/pure-house-on-the-lake">
                {"Pure House On The Lake"}
              </Link>
            </li>
            <li>
              <div
                className="relative"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              >
                <button
                  className={`flex justify-center items-center gap-2 hover:text-black`}
                >
                  <span>{"EN"}</span>
                  <div className="">
                    <RiArrowDownSLine size={18} />
                  </div>
                </button>
                {isDropdownOpen && (
                  <ul className="absolute rounded top-4 -left-0 bg-white mt-2 py-1 w-10 shadow-lg flex flex-col justify-center items-center">
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
            </li>
          </ul>
          <div
            className={`pb-1 cursor-pointer w-full flex justify-end items-center text-[18px] lg:text-[30px] text-farmhouse_text lg:hidden`}
            onClick={() => setIsOpen((prev) => !prev)}
          >
            <IoIosMenu />
          </div>
          {/* Full-screen mobile menu */}
          <Transition
            show={isOpen}
            enter="transition ease-out duration-700"
            enterFrom="transform -translate-x-full opacity-0"
            enterTo="transform -translate-x-0 opacity-100"
            leave="transition ease-in duration-500"
            leaveFrom="transform -translate-x-0 opacity-100"
            leaveTo="transform -translate-x-full opacity-0"
          >
            <div className="fixed top-0 left-0 z-10 w-[80%] h-screen bg-farmhouse_background flex flex-col items-left justify-center gap-16  py-14 px-10">
              <ul
                onClick={() => setIsOpen(false)}
                className="space-y-8 text-farmhouse_text leading-[25px] text-[22px] font-vanitas uppercase"
              >
                <li className="hover:text-black">
                  <Link href="/pure-farmhouse">{"Home"}</Link>
                </li>
                <li className="hover:text-black">
                  <Link href="/pure-farmhouse/gallery">{"Gallery"}</Link>
                </li>
                <li className="hover:text-black">
                  <Link href="/pure-farmhouse/contact">{"contact"}</Link>
                </li>
                <li className="hover:text-black">
                  <Link href="https://purehousemarrakech.com/">
                    {"Pure House Medina"}
                  </Link>
                </li>
                <li className="hover:text-black">
                  <Link href="/pure-house-on-the-lake">
                    {"Pure House On The Lake"}
                  </Link>
                </li>
                <ul className="py-2 w-full flex justify-start items-start gap-3">
                  <li className="px-2 rounded-lg cursor-pointer">
                    <Link rel="alternate" hreflang="en" href="#">
                      {"EN"}
                    </Link>
                  </li>
                  <li className="px-2 rounded-lg cursor-pointer">
                    <Link rel="alternate" hreflang="fr" href={`${path}`}>
                      {"FR"}
                    </Link>
                  </li>
                </ul>
              </ul>
            </div>
          </Transition>
        </div>
      </nav>
    )
  );
};

export default Navbar;
