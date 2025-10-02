import Image from "next/image";
import React from "react";

const AboutTwo = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center gap-8 py-10 px-0 lg:px-48">
      <div className="w-full flex flex-col justify-center items-center gap-2 uppercase">
        <h1 className="font-vanitas tracking-wide text-[30px] lg:text-[32px] leading-[32px] text-center">
          {"FINCA OF PURE SERENITY"}
        </h1>
      </div>
      <p className="font-anagoThin text-[16px] leading-[27px] text-center px-5 lg:px-48">
        {
          "Our farmhouse Pure Farmhouse is an environment that evokes a positive sense of comfort and a space where you experience a profound sense of well-being."
        }
        <br />
        {
          "Pure Farmhouse embraces mindfulness, simplicity, and a connection to nature. It encourages guests to disconnect from the digital world, immerse in local culture, and find serenity in a tranquil environment that promotes relaxation, reflection and a healthy lifestyle."
        }
      </p>
      <Image
        src="/farm/about-farm-two.png"
        alt="farm house"
        width={1000}
        height={1000}
        className="object-cover pb-4 h-[60dvh] lg:h-[90dvh] px-5 lg:px-0"
      />
    </div>
  );
};

export default AboutTwo;
