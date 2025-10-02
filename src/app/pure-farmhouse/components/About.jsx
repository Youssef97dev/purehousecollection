import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center gap-8 py-10">
      <div className="w-full flex flex-col justify-center items-center gap-2 uppercase">
        <h1 className="font-vanitas tracking-wide text-[32px] leading-[32px]">
          {"Pure Farmhouse THE TIMELESS ESCAPE"}
        </h1>
        <b className="tracking-wide text-[9px] leading-[18px]">
          {"RETREAT FOR SOULFUL LIVING"}
        </b>
      </div>
      <p className="font-anagoThin text-[16px] leading-[27px]">
        {
          "Step into a healing sanctuary surrounded by olive groves and endless skies, where every detail invites balance and harmony."
        }
      </p>
      <Image
        src="/farm/about-farm.jpg"
        alt="farm house"
        width={1000}
        height={1000}
        className="object-cover pb-4"
      />
      <p className="px-96 font-astrolove text-[55px] leading-[40px] text-center text-farmhouse_text">
        {
          "Embrace the art of slow living in a finca where history nature and wellbeing come together in perfect unity"
        }
      </p>
    </div>
  );
};

export default About;
