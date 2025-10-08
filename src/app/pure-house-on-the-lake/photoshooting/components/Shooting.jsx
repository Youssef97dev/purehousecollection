import React from "react";
import Image from "next/image";

const GalleryImage = [
  {
    image: "/lake/lake-shoot-1.jpg",
    class: "object-center",
  },
  {
    image: "/lake/lake-shoot-2.jpg",
    class: "object-center",
  },
  {
    image: "/lake/lake-shoot-3.jpg",
    class: "object-center",
  },
];

const Shooting = () => {
  return (
    <section className="px-6 py-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4  gap-5">
        {GalleryImage.map((category, index) => (
          <div key={index} className="flex flex-col">
            {/* Image */}
            <div className="relative w-full h-[65vh] ">
              <Image
                src={category.image}
                alt="Shoting Pure House On The Lake"
                fill
                className={`object-cover h-full ${category.class}`}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Shooting;
