import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center gap-8 py-10 px-0 lg:px-48">
      <div className="w-full flex flex-col justify-center items-center gap-2 uppercase">
        <h1 className="font-vanitas tracking-wide text-[30px] lg:text-[32px] leading-[32px] text-center">
          {"Pure Farmhouse L’Évasion Intemporelle"}
        </h1>
        <b className="tracking-wide text-[8px] lg:text-[9px] leading-[18px] uppercase">
          {"Retraite pour une vie authentique"}
        </b>
      </div>
      <p className="font-montserrat text-[15px] leading-[27px] text-center px-5">
        {
          "Plongez dans un sanctuaire de guérison entouré d’oliveraies et d’horizons infinis, où chaque détail invite à l’équilibre et à l’harmonie."
        }
      </p>
      <Image
        src="/farm/about-farmhouse.jpg"
        alt="farm house"
        width={1000}
        height={1000}
        className="object-cover pb-4 h-[60dvh] lg:h-[90dvh] px-5 lg:px-0"
      />
      <p className="px-14 lg:px-48 font-astrolove text-[70px] lg:text-[55px] leading-[40px] text-center text-farmhouse_text">
        {
          "Adoptez l art du slow living dans une finca ou l histoire la nature et le bien etre s unissent en parfaite harmonie"
        }
      </p>
    </div>
  );
};

export default About;
