import React from "react";
import Link from "next/link";

const About = () => {
  return (
    <>
      <section
        className="relative h-[70vh] hidden bg-fixed bg-bottom bg-cover lg:flex items-center justify-center"
        style={{
          backgroundImage: "url('/lake/yoga-6.jpg')",
        }}
      >
        {/* Overlay 
      <div className="absolute inset-0 h-full bg-black/20" />*/}

        {/* Content */}
        <div className="relative text-center text-white  font-thin space-y-12">
          {/*<div className="text-[20px] leading-[27.5px] sm:text-[30px] sm:leading-[33px] md:text-[35px] md:leading-[38px] mb-6 uppercase">
          A place to rest, connect, and belong
        </div>*/}
          {/*<div>
          <Link
            href="/pure-house-on-the-lake/about"
            className="px-6 py-3 border border-white text-white uppercase tracking-widest hover:bg-white/50 hover:text-black transition font-extralight text[13px] leading-[15px]"
          >
            About
          </Link>
        </div>*/}
        </div>
      </section>

      <section
        className="relative lg:hidden h-[70vh] bg-center bg-cover flex items-center justify-center"
        style={{
          backgroundImage: "url('/lake/lake-37.jpg')",
        }}
      >
        {/* Overlay 
      <div className="absolute inset-0 h-full bg-black/20" />*/}

        {/* Content */}
        <div className="relative text-center text-white  font-thin space-y-12">
          {/*<div className="text-[20px] leading-[27.5px] sm:text-[30px] sm:leading-[33px] md:text-[35px] md:leading-[38px] mb-6 uppercase">
          A place to rest, connect, and belong
        </div>*/}
          {/*<div>
          <Link
            href="/pure-house-on-the-lake/about"
            className="px-6 py-3 border border-white text-white uppercase tracking-widest hover:bg-white/50 hover:text-black transition font-extralight text[13px] leading-[15px]"
          >
            About
          </Link>
        </div>*/}
        </div>
      </section>
    </>
  );
};

export default About;
