import Image from "next/image";
import React from "react";

const AboutTwo = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center gap-8 py-10">
      <div className="w-full flex flex-col justify-center items-center gap-2 uppercase">
        <h1 className="font-vanitas tracking-wide text-[28px] leading-[32px]">
          {"FINCA OF PURE SERENITY"}
        </h1>
      </div>
      <p className="font-anagoThin text-[16px] leading-[27px] px-96 text-center">
        {
          "Our farmhouse Pure Farmhouse is an environment that evokes a positive sense of comfort and a space where you experience a profound sense of well-being."
        }
        <br />
        {
          "Pure Farmhouse embraces mindfulness, simplicity, and a connection to nature. It encourages guests to disconnect from the digital world, immerse in local culture, and find serenity in a tranquil environment that promotes relaxation, reflection and a healthy lifestyle."
        }
      </p>
      <Image
        src="/farm/about-farm-two.jpg"
        alt="farm house"
        width={1000}
        height={1000}
        className="object-cover pb-4"
      />
    </div>
  );
};

export default AboutTwo;
