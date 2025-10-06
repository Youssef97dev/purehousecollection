import React from "react";

const Events = () => {
  return (
    <section
      className="relative h-[70vh] bg-fixed bg-bottom bg-cover flex items-center justify-center"
      style={{
        backgroundImage: "url('/lake/purehouse-on-the-lake-events.jpg')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 h-full bg-black/20" />

      {/* Content */}
      <div className="relative text-center text-white  font-thin space-y-8">
        <div className="text-[25px] leading-[27.5px] sm:text-[30px] sm:leading-[33px] md:text-[35px] md:leading-[38px] mb-6 uppercase">
          Experience simplicity with elegance
        </div>
        <button className="px-6 py-3 border border-white text-white uppercase tracking-widest hover:bg-white/50 hover:text-black transition font-extralight text[13px] leading-[15px]">
          Events
        </button>
      </div>
    </section>
  );
};

export default Events;
