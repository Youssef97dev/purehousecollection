import React from "react";
import Image from "next/image";
import Link from "next/link";

const GalleryImage = [
  {
    image:
      "https://res.cloudinary.com/dz7wroord/image/upload/v1760018827/PureHouseOnTheLake/IMG_9215_rx4fop.jpg",
    class: "object-center",
  },
  {
    image:
      "https://res.cloudinary.com/dz7wroord/image/upload/v1760018827/PureHouseOnTheLake/IMG_9216_ofrzle.jpg",
    class: "object-center",
  },
  {
    image:
      "https://res.cloudinary.com/dz7wroord/image/upload/v1760018827/PureHouseOnTheLake/IMG_9213_tpkt83.jpg",
    class: "object-center",
  },
  {
    image:
      "https://res.cloudinary.com/dz7wroord/image/upload/v1760018828/PureHouseOnTheLake/IMG_9217_lpyvj5.jpg",
    class: "object-center",
  },
  {
    image:
      "https://res.cloudinary.com/dz7wroord/image/upload/v1760018829/PureHouseOnTheLake/IMG_9358_sgssol.jpg",
    class: "object-center",
  },
  {
    image:
      "https://res.cloudinary.com/dz7wroord/image/upload/v1760018830/PureHouseOnTheLake/IMG_9407_dcvqqk.jpg",
    class: "object-center",
  },
  {
    image:
      "https://res.cloudinary.com/dz7wroord/image/upload/v1760018830/PureHouseOnTheLake/IMG_9362_vckvjw.jpg",
    class: "object-center",
  },
  {
    image:
      "https://res.cloudinary.com/dz7wroord/image/upload/v1759765784/PureHouseOnTheLake/lake-23_pkd4tn.jpg",
    class: "object-center",
  },
  {
    image:
      "https://res.cloudinary.com/dz7wroord/image/upload/v1759765784/PureHouseOnTheLake/lake-25_tevypz.jpg",
    class: "object-center",
  },
  {
    image:
      "https://res.cloudinary.com/dz7wroord/image/upload/v1759765792/PureHouseOnTheLake/lake-37_npii9v.jpg",
    class: "object-center",
  },
  {
    image:
      "https://res.cloudinary.com/dz7wroord/image/upload/v1759765800/PureHouseOnTheLake/lake-40_oxtnwg.jpg",
    class: "object-center",
  },
  {
    image:
      "https://res.cloudinary.com/dz7wroord/image/upload/v1759765798/PureHouseOnTheLake/lake-39_kcbn1w.jpg",
    class: "object-center",
  },
  {
    image:
      "https://res.cloudinary.com/dz7wroord/image/upload/v1759765791/PureHouseOnTheLake/lake-33_uz9gb3.jpg",
    class: "object-center",
  },
  {
    image:
      "https://res.cloudinary.com/dz7wroord/image/upload/v1759765791/PureHouseOnTheLake/lake-31_gvqtcz.jpg",
    class: "object-center",
  },
  {
    image:
      "https://res.cloudinary.com/dz7wroord/image/upload/v1759765784/PureHouseOnTheLake/lake-26_b191yh.jpg",
    class: "object-center",
  },
  {
    image:
      "https://res.cloudinary.com/dz7wroord/image/upload/v1759765777/PureHouseOnTheLake/lake-15_lyd03s.jpg",
    class: "object-center",
  },
  {
    image:
      "https://res.cloudinary.com/dz7wroord/image/upload/v1759765776/PureHouseOnTheLake/lake-5_e9lluo.jpg",
    class: "object-center",
  },
  {
    image:
      "https://res.cloudinary.com/dz7wroord/image/upload/v1759765776/PureHouseOnTheLake/lake-6_kfn1v1.jpg",
    class: "object-center",
  },
  {
    image:
      "https://res.cloudinary.com/dz7wroord/image/upload/v1759765776/PureHouseOnTheLake/lake-11_siqhxl.jpg",
    class: "object-center",
  },
  {
    image:
      "https://res.cloudinary.com/dz7wroord/image/upload/v1759765776/PureHouseOnTheLake/lake-1_elty8o.jpg",
    class: "object-center",
  },
  {
    image:
      "https://res.cloudinary.com/dz7wroord/image/upload/v1759765776/PureHouseOnTheLake/lake-8_fadumq.jpg",
    class: "object-center",
  },
  {
    image:
      "https://res.cloudinary.com/dz7wroord/image/upload/v1759765776/PureHouseOnTheLake/lake-4_heejht.jpg",
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
