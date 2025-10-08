import React from "react";
import Image from "next/image";
import Link from "next/link";

const yogaImage = [
  {
    image:
      "https://res.cloudinary.com/dz7wroord/image/upload/v1759844859/PureHouseOnTheLake/yoga-2_lre0g9.jpg",
    class: "object-left",
  },
  {
    image:
      "https://res.cloudinary.com/dz7wroord/image/upload/v1759844859/PureHouseOnTheLake/yoga-3_nwsbpr.jpg",
    class: "object-center",
  },
];

const Yoga = () => {
  return (
    <div
      id="yoga"
      className="w-full flex flex-col justify-center items-center text-center gap-20 px-5 lg:px-28 "
    >
      <Image
        src="https://res.cloudinary.com/dz7wroord/image/upload/v1759846002/PureHouseOnTheLake/yoga-6_1_bcuphl.jpg"
        alt="Yoga Pure House On The Lake"
        width={1500}
        height={1500}
        className="object-cover h-full lg:h-screen "
      />
      <div className="w-full flex flex-col justify-center items-center gap-10">
        <p className="font-lora lg:text-[15px] lg:leading-[24px] sm:text-[13px] sm:leading-[21.45px] text-[12px] leading-[19.8px] text-[#2E2E2C] px-0  sm:px-20 md:px-40 lg:px-64">
          {
            "Quel que soit votre niveau, vous êtes invités à découvrir une large gamme de pratiques : yoga, pilates, renforcement corporel, exercices de respiration et méditations sonores. Chaque séance est encadrée par des instructeurs réputés, offrant une expérience complète corps–esprit, conçue pour restaurer l’équilibre et favoriser le bien-être global."
          }
          <br />
          {
            "Les cours de yoga et de bien-être sont inclus dans le séjour de nos hôtes, et accessibles aussi bien aux membres réguliers qu’aux visiteurs souhaitant vivre une expérience à la journée."
          }
        </p>
        <Link
          href="#"
          className="tracking-widest rounded shadow-md text-[13px] leading-[15.6px] py-3 px-4 uppercase font-extralight text-white bg-lake_button hover:opacity-80 duration-200 transition-all ease-in-out"
        >
          {"L'horaire des cours"}
        </Link>
      </div>

      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4">
        {yogaImage.map((category, index) => (
          <div key={index} className="flex flex-col">
            <div className="relative w-full h-[55vh]">
              <Image
                src={category.image}
                alt="Yoga Pure House On The Lake"
                fill
                className={`object-cover w-full h-full ${category.class}`}
              />
            </div>
          </div>
        ))}
        <div className="flex flex-col">
          <div className="relative w-full h-[55vh] lg:h-[80vh]">
            <Image
              src="https://res.cloudinary.com/dz7wroord/image/upload/v1759844859/PureHouseOnTheLake/yoga-4_edu3m6.jpg"
              alt="Yoga Pure House On The Lake"
              fill
              className={`object-cover `}
            />
          </div>
        </div>
        <div className="flex flex-col justify-center items-start">
          <h1 className="text-[18px] leading-[19.8px] sm:text-[20px] sm:leading-[22px] font-thin text-lake_button mb-2">{`Yoga`}</h1>
          <p className="font-lora text-[12px] leading-[19.8px] lg:text-[15px] lg:leading-[24.74px] text-left text-[#2E2E2C] mb-6">
            {
              "Différents styles inspirés de la philosophie originelle et de la discipline classique. Étirements, renforcement et relaxation pour le corps, l’esprit et l’âme."
            }
          </p>
          <h1 className="text-[18px] leading-[19.8px] sm:text-[20px] sm:leading-[22px] font-thin text-lake_button mb-2">{`Pilates`}</h1>
          <p className="font-lora text-[12px] leading-[19.8px] lg:text-[15px] lg:leading-[24.74px] text-left text-[#2E2E2C] mb-6">
            {
              "La méthode classique de Joseph Pilates, qui enseigne à contrôler le corps grâce à la concentration et à la respiration. Idéale pour conserver ou acquérir une bonne posture."
            }
          </p>
          <h1 className="text-[18px] leading-[19.8px] sm:text-[20px] sm:leading-[22px] font-thin text-lake_button mb-2">{`Tonification du corps`}</h1>
          <p className="font-lora text-[12px] leading-[19.8px] lg:text-[15px] lg:leading-[24.74px] text-left text-[#2E2E2C] mb-6">
            {
              "Cours dynamiques pour renforcer et sculpter le corps, associant différentes techniques avec poids, steps, étirements et relaxation."
            }
          </p>
          <h1 className="text-[18px] leading-[19.8px] sm:text-[20px] sm:leading-[22px] font-thin text-lake_button mb-2">{`Respiration & Méditation`}</h1>
          <p className="font-lora text-[12px] leading-[19.8px] lg:text-[15px] lg:leading-[24.74px] text-left text-[#2E2E2C] mb-6">
            {
              "Un voyage intérieur profond, guidé par la respiration et la méditation, pour apaiser l’esprit et détendre le corps."
            }
          </p>
        </div>
      </div>
    </div>
  );
};

export default Yoga;
