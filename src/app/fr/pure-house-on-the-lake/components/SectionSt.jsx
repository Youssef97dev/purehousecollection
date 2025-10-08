import React from "react";

const SectionSt = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center gap-10 text-center text-lake_text  py-28 px-10 sm:px-32 md:px-40  xl:px-96  ">
      <h1 className="uppercase font-thin text-[20px] leading-[22px] sm:text-[24px] sm:leading-[26.4px] lg:text-[28px] lg:leading-[30.8px]">
        {
          "Vivez les vibrations pures du lac Lalla Takerkoust et du désert d’Agafay"
        }
      </h1>
      <p className="font-lora text-[13px] leading-[21.45px] sm:text-[14px] sm:leading-[23.1px] lg:text-[15px] lg:leading-[24.75px]">
        {
          "À Pure House On The Lake, bercé par l’immensité de l’eau et le regard ancestral des montagnes de l’Atlas, ce sentiment n’est pas laissé au hasard. Il est cultivé. Au rythme des vagues paisibles, dans la chaleur des murs aux tons terreux et sous le ciel infini surplombant le lac serein, la paix s’installe en profondeur, vous chuchotant que vous êtes précisément là où vous devez être."
        }
      </p>
    </div>
  );
};

export default SectionSt;
