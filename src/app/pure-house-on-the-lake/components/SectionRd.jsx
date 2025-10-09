import React from "react";
import Link from "next/link";

const SectionRd = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center gap-10 text-center text-lake_text  py-28 px-10 sm:px-32 md:px-40  xl:px-96  ">
      <h1 className="uppercase font-thin text-[20px] leading-[22px] sm:text-[24px] sm:leading-[26.4px] lg:text-[28px] lg:leading-[30.8px]">
        {"Experience simplicity with elegance"}
      </h1>
      <p className="font-lora text-[13px] leading-[21.45px] sm:text-[14px] sm:leading-[23.1px] lg:text-[15px] lg:leading-[24.75px]">
        {
          "Each event is designed from the ground up to fit your requirements and preferences, whether it’s one of our renowned destination weddings for couples from around the world, a sophisticated company retreat, a delightful bat mitzvah, or a sleek business conference."
        }
      </p>
      <Link
        href="/pure-house-on-the-lake/events"
        className="px-6 py-3 border border-lake_text text-lake_text uppercase tracking-widest hover:bg-lake_button hover:text-white transition font-extralight text[13px] leading-[15px]"
      >
        Events
      </Link>
    </div>
  );
};

export default SectionRd;
