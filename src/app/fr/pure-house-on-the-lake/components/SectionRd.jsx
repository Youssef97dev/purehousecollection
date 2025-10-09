import React from "react";
import Link from "next/link";
const SectionRd = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center gap-10 text-center text-lake_text  py-28 px-10 sm:px-32 md:px-40  xl:px-96  ">
      <h1 className="uppercase font-thin text-[20px] leading-[22px] sm:text-[24px] sm:leading-[26.4px] lg:text-[28px] lg:leading-[30.8px]">
        {"La sérénité façonnée avec soin"}
      </h1>
      <p className="font-lora text-[13px] leading-[21.45px] sm:text-[14px] sm:leading-[23.1px] lg:text-[15px] lg:leading-[24.75px]">
        {
          "Chaque événement est conçu comme une création unique, entièrement sur mesure pour répondre à vos exigences et désirs. Qu’il s’agisse de l’une de nos renommées célébrations de mariage pour couples internationaux, d’un séminaire d’entreprise raffiné, d’une joyeuse bat-mitsva ou d’un colloque élégant."
        }
      </p>
      <Link
        href="/fr/pure-house-on-the-lake/events"
        className="px-6 py-3 border border-lake_text text-lake_text uppercase tracking-widest hover:bg-lake_button hover:text-white transition font-extralight text[13px] leading-[15px]"
      >
        Evenements
      </Link>
    </div>
  );
};

export default SectionRd;
