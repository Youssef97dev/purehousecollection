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
            "Guests of all levels are invited to explore a wide range of practices, from yoga and pilates to body sculpting, breathwork, and sound-based meditation. Each session is guided by highly regarded instructors from the island, offering a complete mind–body experience designed to restore balance and promote overall well-being."
          }
          <br />
          {
            "Yoga and wellness sessions are complimentary for hotel guests, frequent practitioners, or those joining for a day experience."
          }
        </p>
        <Link
          href="#"
          className="tracking-widest rounded shadow-md text-[13px] leading-[15.6px] py-3 px-4 uppercase font-extralight text-white bg-lake_button hover:opacity-80 duration-200 transition-all ease-in-out"
        >
          {"Classes Schedule"}
        </Link>
      </div>

      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4">
        {yogaImage.map((category, index) => (
          <div key={index} className="flex flex-col">
            <div className="relative w-full h-[80vh]">
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
          <div className="relative w-full h-[80vh]">
            <Image
              src="https://res.cloudinary.com/dz7wroord/image/upload/v1759844859/PureHouseOnTheLake/yoga-4_edu3m6.jpg"
              alt="Yoga Pure House On The Lake"
              fill
              className={`object-cover object-right`}
            />
          </div>
        </div>
        <div className="flex flex-col justify-center items-start">
          <h1 className="text-[18px] leading-[19.8px] sm:text-[20px] sm:leading-[22px] font-thin text-lake_button mb-2">{`Yoga`}</h1>
          <p className="font-lora text-[12px] leading-[19.8px] lg:text-[15px] lg:leading-[24.74px] text-left text-[#2E2E2C] mb-6">
            {
              "Different styles stemming from the original philosophy and classical discipline. Stretching, strengthening and relaxing for body, mind and soul."
            }
          </p>
          <h1 className="text-[18px] leading-[19.8px] sm:text-[20px] sm:leading-[22px] font-thin text-lake_button mb-2">{`Pilates`}</h1>
          <p className="font-lora text-[12px] leading-[19.8px] lg:text-[15px] lg:leading-[24.74px] text-left text-[#2E2E2C] mb-6">
            {
              "Joseph Pilates’ classical method, learning to control the body with concentration and breathing. Perfect for maintaining or obtaining a good body posture."
            }
          </p>
          <h1 className="text-[18px] leading-[19.8px] sm:text-[20px] sm:leading-[22px] font-thin text-lake_button mb-2">{`Body Toning`}</h1>
          <p className="font-lora text-[12px] leading-[19.8px] lg:text-[15px] lg:leading-[24.74px] text-left text-[#2E2E2C] mb-6">
            {
              "Dynamic classes to strengthen and shape the body combining different techniques with weights, steps, stretching and relaxation."
            }
          </p>
          <h1 className="text-[18px] leading-[19.8px] sm:text-[20px] sm:leading-[22px] font-thin text-lake_button mb-2">{`Breathwork & Sound Meditation`}</h1>
          <p className="font-lora text-[12px] leading-[19.8px] lg:text-[15px] lg:leading-[24.74px] text-left text-[#2E2E2C] mb-6">
            {
              "An in-depth journey to self with breath and meditation to calm the mind and relax the body."
            }
          </p>
        </div>
      </div>
    </div>
  );
};

export default Yoga;
