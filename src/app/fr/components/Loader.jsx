"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { RiArrowDownSLine } from "react-icons/ri";

const Loader = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  return (
    <div className="relative bg-[#E6E1C9] h-screen">
      {/* Beige background with logo animation animation */}
      <div className="h-full flex flex-col items-center justify-start pt-24 lg:pt-10 gap-5">
        <div className="w-full flex flex-col justify-center items-center">
          <Image
            src="/logo-4.png" // Replace with your logo path
            alt="Logo"
            width={500}
            height={500}
            className="w-60 lg:w-72"
          />
          {/*<span className="font-tropic text-[14px]">{"Discover"}</span>
          <MdOutlineKeyboardArrowDown size={12} />*/}
        </div>
        <p className="px-8 lg:px-[24rem] font-robotoThin text-center text-[22px] lg:text-[25px] leading-[32px] lg:leading-[30px] text-[#79431d] pb-10 uppercase">{`Nous vivons pour inspirer et être inspirés, pour dépasser les étiquettes et les frontières. Nous trouvons la beauté là où les cultures se rencontrent, où la nature règne et où la créativité s’exprime librement.`}</p>

        <div className="w-full flex justify-center items-end gap-14 lg:gap-20">
          <Link href="#" className="">
            <Image
              src="/riad/riad-logo-black-v3.png" // Replace with your logo path
              alt="Logo"
              width={500}
              height={500}
              className="w-14 lg:w-16 animate-scale-3d"
            />
          </Link>

          <Link href="/fr/pure-farmhouse" className="">
            <Image
              src="/farm/farm-logo-black.png" // Replace with your logo path
              alt="Logo"
              width={500}
              height={500}
              className="w-14 lg:w-16 animate-scale-3d"
            />
          </Link>

          <Link href="#" className="">
            <Image
              src="/lake/lake-logo-black-v2.png" // Replace with your logo path
              alt="Logo"
              width={500}
              height={500}
              className="w-14 lg:w-16 animate-scale-3d delay-150"
            />
          </Link>
        </div>
      </div>

      <div className="absolute top-8 right-10">
        <div
          className="relative"
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        >
          <button
            className={`font-light tracking-widest flex justify-center items-center gap-2 pb-1 text-[#79431d]`}
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
    </div>
  );
};

export default Loader;
