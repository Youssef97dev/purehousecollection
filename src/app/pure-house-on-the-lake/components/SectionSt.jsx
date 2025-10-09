import React from "react";
import Link from "next/link";

const SectionSt = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center gap-10 text-center text-lake_text  py-28 px-10 sm:px-32 md:px-40  xl:px-96  ">
      <h1 className="uppercase font-thin text-[20px] leading-[22px] sm:text-[24px] sm:leading-[26.4px] lg:text-[28px] lg:leading-[30.8px]">
        {"A place to rest, connect, and belong"}
      </h1>
      <p className="font-lora text-[13px] leading-[21.45px] sm:text-[14px] sm:leading-[23.1px] lg:text-[15px] lg:leading-[24.75px]">
        {
          "At Pure house On The Lake, cradled by the vastness of the water and the ancient gaze of the Atlas Mountains, that feeling isn't just left to chance. It's nurtured. In the rhythm of gentle waves, the warmth of earth-toned walls, and the endless sky stretching above the serene lake, peace settles deep within, whispering that you are exactly where you need to be."
        }
      </p>
      <Link
        href="/pure-house-on-the-lake/about"
        className="px-6 py-3 border border-lake_text text-lake_text uppercase tracking-widest hover:bg-lake_mobile hover:text-white transition font-extralight text[13px] leading-[15px]"
      >
        About
      </Link>
    </div>
  );
};

export default SectionSt;
