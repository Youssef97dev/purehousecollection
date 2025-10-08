import React from "react";

const Intro = () => {
  return (
    <div className="w-full flex justify-center items-center text-center font-light text-[#2E2E2C] text-[14px] leading-[23px] sm:text-[16px] sm:leading-[26.4px] lg:text-[20px] lg:leading-[33px] pt-16 pb-20 px-12 sm:px-32 md:px-40  xl:px-96 uppercase ">
      <h3>
        {
          "Vivez une expérience de sérénité intérieure au Pure House On The Lake Marrakech grâce aux cours quotidiens de yoga et de bien-être."
        }
        <br />
        {
          "Un coach en nutrition est également à votre disposition, et des retraites personnalisées peuvent être organisées sur demande, pour une durée de 2 à 6 jours."
        }
      </h3>
    </div>
  );
};

export default Intro;
