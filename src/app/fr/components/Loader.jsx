"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { RiArrowDownSLine } from "react-icons/ri";

const Loader = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  return (
    <div className="relative bg-[#E6E1C9] h-screen">
      <div className="absolute top-5 right-10">
        <div
          className="relative"
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        >
          <button
            className={`font-light tracking-widest flex justify-center items-center gap-2 pb-1 text-[#000000]`}
          >
            <span>{"Français"}</span>
            <div className="">
              <RiArrowDownSLine size={18} />
            </div>
          </button>
          {isDropdownOpen && (
            <ul className="absolute rounded top-8 bg-riad_background -left-9 mt-2 py-2 w-32 shadow-lg flex justify-center items-center">
              <li className="px-4 py-2 rounded-lg cursor-pointer hover:bg-riad_secondary">
                <Link href="/">
                  <Image
                    src="/english.png"
                    width={100}
                    height={100}
                    alt="le salama restaurant"
                    className="w-6 h-6 md:w-7 md:h-7"
                  />
                </Link>
              </li>
              <li className="px-4 py-2 rounded-lg cursor-pointer hover:bg-riad_secondary">
                <Link href="#">
                  <Image
                    src="/france.png"
                    width={100}
                    height={100}
                    alt="le salama restaurant"
                    className="w-6 h-6 md:w-7 md:h-7"
                  />
                </Link>
              </li>
            </ul>
          )}
        </div>
      </div>
      {/* Beige background with logo animation */}
      <div className="h-full flex flex-col items-center justify-between gap-5">
        <div className="w-full h-[75%] lg:h-full flex flex-col justify-end items-center pb-10 lg:pb-0">
          <Image
            src="/logo-pure-house-collection.png" // Replace with your logo path
            alt="Logo"
            width={500}
            height={500}
            className="w-80 lg:w-72"
          />
          {/*<span className="font-tropic text-[14px]">{"Discover"}</span>
          <MdOutlineKeyboardArrowDown size={12} />*/}
        </div>

        <div className="w-full h-[25%] lg:h-full flex flex-col justify-end items-center gap-3 lg:gap-6">
          <div className="w-full flex justify-center items-end gap-14">
            <Link href="https://purehousemarrakech.com/fr" className="">
              <Image
                src="/riad/riad-logo-black.png" // Replace with your logo path
                alt="Logo"
                width={500}
                height={500}
                className="w-[75px] lg:w-[80px] animate-scale-3d"
              />
            </Link>

            <Link href="https://purefarmhouse.com/fr" className="">
              <Image
                src="/farm/farm-logo-black.png" // Replace with your logo path
                alt="Logo"
                width={500}
                height={500}
                className="w-14 lg:w-16 animate-scale-3d"
              />
            </Link>

            <Link href="https://purehouseonthelake.com/fr" className="">
              <Image
                src="/lake/lake-logo-black-v2.png" // Replace with your logo path
                alt="Logo"
                width={500}
                height={500}
                className="w-14 lg:w-16 animate-scale-3d delay-150"
              />
            </Link>
          </div>
          <p className="px-4 pt-3 lg:px-[28.5rem] font-robotoThin text-center text-[23px] lg:text-[30px] leading-[32px] lg:leading-[30px] text-[#000000] pb-2 uppercase">{`Une maison loin de chez soi`}</p>
        </div>
      </div>
    </div>
  );
};

export default Loader;
