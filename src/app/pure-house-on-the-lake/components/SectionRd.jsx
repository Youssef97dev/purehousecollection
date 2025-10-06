import React from "react";

const SectionRd = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center gap-10 text-center text-lake_text  py-28 px-10 sm:px-32 md:px-40  xl:px-96  ">
      <h1 className="uppercase font-thin text-[20px] leading-[22px] sm:text-[24px] sm:leading-[26.4px] lg:text-[28px] lg:leading-[30.8px]">
        {"Serenity crafted with care"}
      </h1>
      <p className="font-lora text-[13px] leading-[21.45px] sm:text-[14px] sm:leading-[23.1px] lg:text-[15px] lg:leading-[24.75px]">
        {
          "Each event is designed from the ground up to fit your requirements and preferences, whether it’s one of our renowned destination weddings for couples from around the world, a sophisticated company retreat, a delightful bat mitzvah, or a sleek business conference."
        }
      </p>
    </div>
  );
};

export default SectionRd;
