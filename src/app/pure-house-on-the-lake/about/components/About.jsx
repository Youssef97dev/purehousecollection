import React from "react";
import Image from "next/image";
import Link from "next/link";

const GalleryImage = [
  {
    image: "/lake/lake-33.jpg",
    class: "object-center",
  },
  {
    image: "/lake/lake-12.jpg",
    class: "object-center",
  },
  {
    image: "/lake/IMG_9407.jpeg",
    class: "object-center",
  },
  {
    image: "/lake/lake-28.jpg",
    class: "object-center",
  },
];

const About = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center text-center gap-20 px-5 lg:px-28 ">
      <Image
        src="/lake/on-the-lake-large-2.jpg"
        alt="About Pure House On The Lake"
        width={1500}
        height={1500}
        className="object-cover h-full lg:h-screen "
      />
      <div className="w-full flex flex-col justify-center items-center gap-10">
        <p className="font-lora lg:text-[15px] lg:leading-[24px] sm:text-[13px] sm:leading-[21.45px] text-[12px] leading-[19.8px] text-[#2E2E2C] px-0  sm:px-20 md:px-40 lg:px-64">
          {
            "Pure House on the Lake embodies the vision and passion of its founder, Nourdin Fakir. Nestled on the tranquil shores of Lake Lalla Takerkoust, just moments from the Agafay Desert, this hidden retreat offers a rare harmony between nature and refined comfort. Guided by our love for authentic hospitality, every detail from the serene lake views to the warm, elegant design reflects his dedication to creating an unforgettable stay. Here, guests are invited to slow down, reconnect, and experience the soulful beauty of Marrakech in its purest form."
          }
        </p>
        <Link
          href="#"
          className="tracking-widest rounded shadow-md text-[13px] leading-[15.6px] py-3 px-4 uppercase font-extralight text-white bg-lake_button hover:opacity-80 duration-200 transition-all ease-in-out"
        >
          {"Reserve a room"}
        </Link>
      </div>

      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4">
        {GalleryImage.map((category, index) => (
          <div key={index} className="flex flex-col">
            {/* Image */}
            <div className="relative w-full h-[65vh] lg:h-screen">
              <Image
                src={category.image}
                alt="Gallery Pure House On The Lake"
                fill
                className={`object-cover ${category.class}`}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
