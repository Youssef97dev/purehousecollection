import React from "react";
import Image from "next/image";

const GalleryImage = [
  {
    image:
      "https://res.cloudinary.com/dz7wroord/image/upload/v1759417342/PureFarmHouse/farmhouse-26_ipyt5l.webp",
    class: "object-center",
  },
  {
    image:
      "https://res.cloudinary.com/dz7wroord/image/upload/v1759417342/PureFarmHouse/farmhouse-28_pvrfjn.webp",
    class: "object-center",
  },
  {
    image:
      "https://res.cloudinary.com/dz7wroord/image/upload/v1759417342/PureFarmHouse/farmhouse-25_y4ic2x.webp",
    class: "object-center",
  },
  {
    image:
      "https://res.cloudinary.com/dz7wroord/image/upload/v1759417341/PureFarmHouse/farmhouse-24_lgkmr3.webp",
    class: "object-center",
  },
  {
    image:
      "https://res.cloudinary.com/dz7wroord/image/upload/v1759417341/PureFarmHouse/farmhouse-20_kv20n0.webp",
    class: "object-center",
  },
  {
    image:
      "https://res.cloudinary.com/dz7wroord/image/upload/v1759417341/PureFarmHouse/farmhouse-22_ne9fl1.webp",
    class: "object-center",
  },
  {
    image:
      "https://res.cloudinary.com/dz7wroord/image/upload/v1759417341/PureFarmHouse/farmhouse-19_y5qeyq.webp",
    class: "object-center",
  },
  {
    image:
      "https://res.cloudinary.com/dz7wroord/image/upload/v1759417340/PureFarmHouse/farmhouse-17_wvk14n.webp",
    class: "object-center",
  },
  {
    image:
      "https://res.cloudinary.com/dz7wroord/image/upload/v1759417341/PureFarmHouse/farmhouse-23_vbfjhx.webp",
    class: "object-center",
  },
  {
    image:
      "https://res.cloudinary.com/dz7wroord/image/upload/v1759417341/PureFarmHouse/farmhouse-21_yfvxgq.webp",
    class: "object-center",
  },
  {
    image:
      "https://res.cloudinary.com/dz7wroord/image/upload/v1759417341/PureFarmHouse/farmhouse-16_uh8sjx.webp",
    class: "object-center",
  },
  {
    image:
      "https://res.cloudinary.com/dz7wroord/image/upload/v1759417340/PureFarmHouse/farmhouse-15_wzlrx8.webp",
    class: "object-center",
  },
  {
    image:
      "https://res.cloudinary.com/dz7wroord/image/upload/v1759417340/PureFarmHouse/farmhouse-18_pnims1.webp",
    class: "object-center",
  },
  {
    image:
      "https://res.cloudinary.com/dz7wroord/image/upload/v1759417340/PureFarmHouse/farmhouse-14_acq5hh.webp",
    class: "object-center",
  },
  {
    image:
      "https://res.cloudinary.com/dz7wroord/image/upload/v1759417339/PureFarmHouse/farmhouse-6_q7d1zg.webp",
    class: "object-center",
  },
  {
    image:
      "https://res.cloudinary.com/dz7wroord/image/upload/v1759417338/PureFarmHouse/farmhouse-4_kzm4ie.webp",
    class: "object-center",
  },
  {
    image:
      "https://res.cloudinary.com/dz7wroord/image/upload/v1759417340/PureFarmHouse/farmhouse-13_gbixib.webp",
    class: "object-center",
  },
  {
    image:
      "https://res.cloudinary.com/dz7wroord/image/upload/v1759417339/PureFarmHouse/farmhouse-1_iltk2a.webp",
    class: "object-center",
  },
  {
    image:
      "https://res.cloudinary.com/dz7wroord/image/upload/v1759417340/PureFarmHouse/farmhouse-12_maic7v.webp",
    class: "object-center",
  },
  {
    image:
      "https://res.cloudinary.com/dz7wroord/image/upload/v1759417339/PureFarmHouse/farmhouse-10_xrkhpv.webp",
    class: "object-center",
  },
  {
    image:
      "https://res.cloudinary.com/dz7wroord/image/upload/v1759417339/PureFarmHouse/farmhouse-11_ur7sbj.webp",
    class: "object-center",
  },
  {
    image:
      "https://res.cloudinary.com/dz7wroord/image/upload/v1759417339/PureFarmHouse/farmhouse-9_tcsbcp.webp",
    class: "object-center",
  },
  {
    image:
      "https://res.cloudinary.com/dz7wroord/image/upload/v1759417338/PureFarmHouse/farmhouse-5_bblxo4.webp",
    class: "object-center",
  },
  {
    image:
      "https://res.cloudinary.com/dz7wroord/image/upload/v1759417337/PureFarmHouse/farmhouse-7_aagvdc.webp",
    class: "object-center",
  },
  {
    image:
      "https://res.cloudinary.com/dz7wroord/image/upload/v1759417338/PureFarmHouse/farmhouse-8_lkdjlf.webp",
    class: "object-center",
  },
  {
    image:
      "https://res.cloudinary.com/dz7wroord/image/upload/v1759417337/PureFarmHouse/farmhouse-2_vlzky0.webp",
    class: "object-center",
  },
  {
    image:
      "https://res.cloudinary.com/dz7wroord/image/upload/v1759417335/PureFarmHouse/farmhouse-3_hsx8df.webp",
    class: "object-center",
  },
];

const Gallery = () => {
  return (
    <section className="px-5 md:px-48 py-12 space-y-8 pt-20">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-5">
        {GalleryImage.map((category, index) => (
          <div key={index} className="flex flex-col">
            {/* Image */}
            <div className="relative w-full h-full aspect-[9/16]">
              <Image
                src={category.image}
                alt="Galerie Pure Farm House"
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
