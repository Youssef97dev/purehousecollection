import React from "react";
import Image from "next/image";
import Link from "next/link";

const RoomsImage = [
  {
    image: "/farm/rooms/room-15.jpg",
    class: "object-bottom",
  },
  {
    image: "/farm/rooms/room-16.jpg",
    class: "object-center",
  },
  {
    image: "/farm/rooms/room-11.jpg",
    class: "object-center",
  },
  {
    image: "/farm/rooms/room-12.jpg",
    class: "object-center",
  },
  {
    image: "/farm/farm-hero-3.webp",
    class: "object-center",
  },
  {
    image: "/farm/farm-hero-5.webp",
    class: "object-left",
  },
  {
    image: "/farm/farm-hero-6.webp",
    class: "object-center",
  },
  {
    image: "/farm/rooms/room-13.jpg",
    class: "object-center",
  },
];

const Rooms = () => {
  return (
    <section className="px-5 lg:px-48 py-12 space-y-8">
      <h1 className="font-vanitas uppercase tracking-wide text-[30px] lg:text-[32px] leading-[32px] text-center">
        {"Galerie Pure Farmhouse"}
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {RoomsImage.map((category, index) => (
          <div key={index} className="flex flex-col">
            {/* Image */}
            <div className="relative w-full h-[65vh] lg:h-[80vh]">
              <Image
                src={category.image}
                alt="chmbres Pure Farm House"
                fill
                className={`object-cover ${category.class}`}
              />
            </div>

            {/* Text 
            <div className="mt-4 text-left">
              <p className="text-[10px] leading-[15.2px] text-riad_secondary uppercase">
                {category.subtitle}
              </p>
              <h3 className="mt-3 text-[22px] leading-[30.1px] text-riad_primary">
                {category.title}
              </h3>
              <div className="mt-4 w-full h-[1px] bg-riad_secondary mx-auto"></div>
              <div className="mt-2 text-right">
                <Link
                  href={category.link}
                  className="text-[10px] leading-[13px] text-riad_primary tracking-[0.3em] underline italic"
                >
                  {"VIEW MORE ➔"}
                </Link>
              </div>
            </div>*/}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Rooms;
