import React from "react";
import Image from "next/image";
import Link from "next/link";

const GalleryImage = [
  {
    image: "/farm/rooms/room-16.jpg",
    class: "object-center",
  },
  {
    image:
      "https://res.cloudinary.com/dttbjqpji/image/upload/v1760365925/farmhouse-9_q97htj.webp",
    class: "object-center",
  },
  {
    image:
      "https://res.cloudinary.com/dttbjqpji/image/upload/v1760365925/farmhouse-10_pnh8ci.webp",
    class: "object-center",
  },
  {
    image:
      "https://res.cloudinary.com/dttbjqpji/image/upload/v1760365930/farmhouse-28_kxm845.webp",
    class: "object-center",
  },
  {
    image:
      "https://res.cloudinary.com/dttbjqpji/image/upload/v1760365926/farmhouse-25_s90xmw.webp",
    class: "object-center",
  },
  {
    image:
      "https://res.cloudinary.com/dttbjqpji/image/upload/v1760365927/farmhouse-24_rrlxup.webp",
    class: "object-center",
  },
  {
    image:
      "https://res.cloudinary.com/dttbjqpji/image/upload/v1760365925/farmhouse-20_o1jha7.webp",
    class: "object-center",
  },
  {
    image:
      "https://res.cloudinary.com/dttbjqpji/image/upload/v1760365926/farmhouse-22_tvug8k.webp",
    class: "object-center",
  },
  {
    image:
      "https://res.cloudinary.com/dttbjqpji/image/upload/v1760365926/farmhouse-21_oft77d.webp",
    class: "object-center",
  },
  {
    image:
      "https://res.cloudinary.com/dttbjqpji/image/upload/v1760365925/farmhouse-16_wwrrkn.webp",
    class: "object-center",
  },
  {
    image:
      "https://res.cloudinary.com/dttbjqpji/image/upload/v1760365925/farmhouse-15_tggm7a.webp",
    class: "object-center",
  },
  {
    image: "/farm/farm-hero-mobile-2.webp",
    class: "object-center",
  },
  {
    image:
      "https://res.cloudinary.com/dttbjqpji/image/upload/v1760365925/farmhouse-14_aeyojq.webp",
    class: "object-center",
  },
  {
    image:
      "https://res.cloudinary.com/dttbjqpji/image/upload/v1760365923/farmhouse-6_pb4wfo.webp",
    class: "object-center",
  },
  {
    image:
      "https://res.cloudinary.com/dttbjqpji/image/upload/v1760365923/farmhouse-4_yredvd.webp",
    class: "object-center",
  },
  {
    image:
      "https://res.cloudinary.com/dttbjqpji/image/upload/v1760365925/farmhouse-13_muq4ya.webp",
    class: "object-center",
  },
  {
    image:
      "https://res.cloudinary.com/dttbjqpji/image/upload/v1760365930/farmhouse-1_afrs4t.webp",
    class: "object-center",
  },
  {
    image:
      "https://res.cloudinary.com/dttbjqpji/image/upload/v1760365924/farmhouse-5_moqtqk.webp",
    class: "object-center",
  },
  {
    image:
      "https://res.cloudinary.com/dttbjqpji/image/upload/v1760365923/farmhouse-7_phh1ak.webp",
    class: "object-center",
  },
  {
    image:
      "https://res.cloudinary.com/dttbjqpji/image/upload/v1760365924/farmhouse-8_eyu7yb.webp",
    class: "object-center",
  },
  {
    image:
      "https://res.cloudinary.com/dttbjqpji/image/upload/v1760365923/farmhouse-2_rsolnq.webp",
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
