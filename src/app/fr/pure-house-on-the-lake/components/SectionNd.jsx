import React from "react";

const SectionNd = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center gap-10 text-center text-lake_text  py-28 px-10 sm:px-32 md:px-40  xl:px-96  ">
      <h1 className="uppercase font-thin text-[20px] leading-[22px] sm:text-[24px] sm:leading-[26.4px] lg:text-[28px] lg:leading-[30.8px]">
        {"Une chaleureuse étreinte à chaque recoin"}
      </h1>
      <p className="font-lora text-[13px] leading-[21.45px] sm:text-[14px] sm:leading-[23.1px] lg:text-[15px] lg:leading-[24.75px]">
        {
          "Chacune des sept demeures de Pure House On The Lake a été conçue avec une intention réfléchie : maximiser les panoramas grandioses, capter l’ombre et l’abri idéaux, et garantir un retrait absolu. Ici, l’intimité vous enveloppe tel un berceau, et le premier son du jour vous relie instantanément au battement régulier de la terre."
        }
      </p>
    </div>
  );
};

export default SectionNd;
