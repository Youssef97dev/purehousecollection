import React from "react";
import Image from "next/image";
import Link from "next/link";

const GalleryImage = [
  {
    image: "/lake/IMG_9215.jpeg",
    class: "object-center",
  },
  {
    image: "/lake/gallery/lake-41.jpg",
    class: "object-center",
  },
  {
    image: "/lake/IMG_9213.jpeg",
    class: "object-center",
  },
  {
    image: "/lake/IMG_9217.jpeg",
    class: "object-center",
  },
  {
    image: "/lake/IMG_9358.jpeg",
    class: "object-center",
  },
  {
    image: "/lake/IMG_9407.jpeg",
    class: "object-center",
  },
  {
    image: "/lake/gallery/lake-42.jpg",
    class: "object-center",
  },
  {
    image: "/lake/on-the-lake-small-1.jpg",
    class: "object-center",
  },
  {
    image: "/lake/gallery/lake-25.jpg",
    class: "object-center",
  },
  {
    image: "/lake/lake-37.jpg",
    class: "object-center",
  },
  {
    image: "/lake/gallery/lake-40.jpg",
    class: "object-center",
  },
  {
    image: "/lake/lake-33.jpg",
    class: "object-center",
  },
  {
    image: "/lake/gallery/lake-31.jpg",
    class: "object-center",
  },
  {
    image: "/lake/gallery/lake-26.jpg",
    class: "object-center",
  },
  {
    image: "/lake/gallery/lake-15.jpg",
    class: "object-center",
  },
  {
    image: "/lake/gallery/lake-5.jpg",
    class: "object-center",
  },
  {
    image: "/lake/gallery/lake-6.jpg",
    class: "object-center",
  },
];

const Gallery = () => {
  return (
    <section className="px-5 md:px-14 py-12 space-y-8 pt-28">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4  gap-5">
        {GalleryImage.map((category, index) => (
          <div key={index} className="flex flex-col">
            {/* Image */}
            <div className="relative w-full h-[65vh] ">
              <Image
                src={category.image}
                alt="Gallery Pure House On The Lake"
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

export default Gallery;
