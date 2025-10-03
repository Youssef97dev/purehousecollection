import Image from "next/image";
import React from "react";

const AboutTwo = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center gap-8 py-10 px-0 lg:px-48">
      <div className="w-full flex flex-col justify-center items-center gap-2 uppercase">
        <h1 className="font-vanitas tracking-wide text-[30px] lg:text-[32px] leading-[32px] text-center">
          {"Finca de Pure Sérénité"}
        </h1>
      </div>
      <p className="font-anagoThin text-[16px] leading-[27px] text-center px-5 lg:px-48">
        {
          "Notre ferme, Pure Farmhouse, est un lieu qui évoque un sentiment positif de confort et un espace où l’on fait l’expérience d’un profond bien-être."
        }
        <br />
        {
          "Pure Farmhouse incarne la pleine conscience, la simplicité et la connexion avec la nature. Il invite ses hôtes à se déconnecter du monde digital, à s’imprégner de la culture locale et à trouver la sérénité dans un cadre paisible qui favorise la détente, la réflexion et un mode de vie sain."
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
