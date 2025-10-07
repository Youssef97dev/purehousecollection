import React from "react";

const Intro = () => {
  return (
    <div className="w-full flex justify-center items-center text-center font-light text-[#2E2E2C] text-[14px] leading-[23px] sm:text-[16px] sm:leading-[26.4px] lg:text-[20px] lg:leading-[33px] pt-16 pb-20 px-12 sm:px-32 md:px-40  xl:px-96 uppercase ">
      <h3>
        {
          "Experience inner peace at Boho House Marrakech, with the daily Yoga and Wellness classes."
        }
        <br />
        {
          "A nutrition coach is also available, and personalized retreats are organized on demand, between 2 and 6 days."
        }
      </h3>
    </div>
  );
};

export default Intro;
