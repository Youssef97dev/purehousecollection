import React from "react";

const Book = () => {
  return (
    <section
      className="relative h-[70vh] bg-fixed bg-bottom bg-cover flex items-center justify-center"
      style={{ backgroundImage: "url('/lake/on-the-lake-large-3.jpg')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 h-full bg-black/20" />

      {/* Content */}
      <div className="relative text-center text-white  font-thin space-y-8">
        <div className="text-[25px] leading-[27.5px] sm:text-[30px] sm:leading-[33px] md:text-[35px] md:leading-[38px] mb-6 uppercase">
          Step inside, feel at home
        </div>
        <button className="px-6 py-3 border border-white text-white uppercase tracking-widest hover:bg-white/50 hover:text-black transition font-extralight text[13px] leading-[15px]">
          Book
        </button>
      </div>
    </section>
  );
};

export default Book;
