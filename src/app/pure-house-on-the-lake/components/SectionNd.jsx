import React from "react";

const SectionNd = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center gap-10 text-center text-lake_text  py-28 px-10 sm:px-32 md:px-40  xl:px-96  ">
      <h1 className="uppercase font-thin text-[20px] leading-[22px] sm:text-[24px] sm:leading-[26.4px] lg:text-[28px] lg:leading-[30.8px]">
        {"A warm embrace in every corner"}
      </h1>
      <p className="font-lora text-[13px] leading-[21.45px] sm:text-[14px] sm:leading-[23.1px] lg:text-[15px] lg:leading-[24.75px]">
        {
          "Each of The Pure House On The Lake's seven dwellings was placed with thoughtful intention: maximizing sweeping vistas, capturing optimal shade and shelter, and ensuring absolute seclusion. It’s a place where privacy cradles you, and the day's first sound connects you instantly to the earth's steady heartbeat."
        }
      </p>
    </div>
  );
};

export default SectionNd;
