import React from "react";
import Image from "next/image";
import Link from "next/link";

const GalleryImage = [
  {
    image: "/farm/rooms/room-16.jpg",
    class: "object-center",
  },
  {
    image: "/farm/gallery/farmhouse-9.webp",
    class: "object-center",
  },
  {
    image: "/farm/gallery/farmhouse-10.webp",
    class: "object-center",
  },
  {
    image: "/farm/gallery/farmhouse-28.webp",
    class: "object-center",
  },
  {
    image: "/farm/gallery/farmhouse-25.webp",
    class: "object-center",
  },
  {
    image: "/farm/gallery/farmhouse-24.webp",
    class: "object-center",
  },
  {
    image: "/farm/gallery/farmhouse-20.webp",
    class: "object-center",
  },
  {
    image: "/farm/gallery/farmhouse-22.webp",
    class: "object-center",
  },
  {
    image: "/farm/gallery/farmhouse-21.webp",
    class: "object-center",
  },
  {
    image: "/farm/gallery/farmhouse-16.webp",
    class: "object-center",
  },
  {
    image: "/farm/gallery/farmhouse-15.webp",
    class: "object-center",
  },
  {
    image: "/farm/farm-hero-mobile-2.webp",
    class: "object-center",
  },
  {
    image: "/farm/gallery/farmhouse-14.webp",
    class: "object-center",
  },
  {
    image: "/farm/gallery/farmhouse-6.webp",
    class: "object-center",
  },
  {
    image: "/farm/gallery/farmhouse-4.webp",
    class: "object-center",
  },
  {
    image: "/farm/gallery/farmhouse-13.webp",
    class: "object-center",
  },
  {
    image: "/farm/gallery/farmhouse-1.webp",
    class: "object-center",
  },
  {
    image: "/farm/gallery/farmhouse-5.webp",
    class: "object-center",
  },
  {
    image: "/farm/gallery/farmhouse-7.webp",
    class: "object-center",
  },
  {
    image: "/farm/gallery/farmhouse-8.webp",
    class: "object-center",
  },
  {
    image: "/farm/gallery/farmhouse-2.webp",
    class: "object-center",
  },
];

const Gallery = () => {
  return (
    <section className="px-5 md:px-48 py-12 space-y-8 pt-28">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-5">
        {GalleryImage.map((category, index) => (
          <div key={index} className="flex flex-col">
            {/* Image */}
            <div className="relative w-full h-[65vh]">
              <Image
                src={category.image}
                alt="Gallery Pure Farm House"
                fill
                className={`object-cover ${category.class}`}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
