import React from "react";
import Link from "next/link";

const Events = () => {
  return (
    <>
      <section
        className="relative h-[70vh] lg:hidden bg-bottom bg-cover flex items-center justify-center"
        style={{
          backgroundImage: "url('/lake/IMG_9217.jpeg')",
        }}
      >
        {/* Overlay 
      <div className="absolute inset-0 h-full bg-black/20" />*/}

        {/* Content 
      <div className="relative text-center text-white  font-thin space-y-10">
        <div className="text-[20px] leading-[27.5px] sm:text-[30px] sm:leading-[33px] md:text-[35px] md:leading-[38px] mb-6 uppercase">
          Experience simplicity with elegance
        </div>
        <div>
          <Link
            href="/pure-house-on-the-lake/events"
            className="px-6 py-3 border border-white text-white uppercase tracking-widest hover:bg-white/50 hover:text-black transition font-extralight text[13px] leading-[15px]"
          >
            Events
          </Link>
        </div>
      </div>*/}
      </section>

      <section
        className="relative h-[70vh] hidden bg-fixed bg-bottom bg-cover lg:flex items-center justify-center"
        style={{
          backgroundImage: "url('/lake/IMG_9356.jpeg')",
        }}
      >
        {/* Overlay 
      <div className="absolute inset-0 h-full bg-black/20" />*/}

        {/* Content 
      <div className="relative text-center text-white  font-thin space-y-10">
        <div className="text-[20px] leading-[27.5px] sm:text-[30px] sm:leading-[33px] md:text-[35px] md:leading-[38px] mb-6 uppercase">
          Experience simplicity with elegance
        </div>
        <div>
          <Link
            href="/pure-house-on-the-lake/events"
            className="px-6 py-3 border border-white text-white uppercase tracking-widest hover:bg-white/50 hover:text-black transition font-extralight text[13px] leading-[15px]"
          >
            Events
          </Link>
        </div>
      </div>*/}
      </section>
    </>
  );
};

export default Events;
