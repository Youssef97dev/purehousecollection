import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <div id="hero" className="relative w-full h-screen">
      <div className="w-full h-full hidden lg:block">
        <Image
          src="/lake/lake-event-hero-large.jpg"
          alt="About pure house on the lake"
          width={1500}
          height={1500}
          className={`w-full h-full object-cover`}
        />
      </div>

      <div className="w-full h-full block lg:hidden">
        <Image
          src="/lake/lake-event-hero-small.jpg"
          alt="About pure house on the lake"
          width={1500}
          height={1500}
          className={`w-full h-full object-cover`}
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 filter sepia contrast-125"></div>

      <h1 className="absolute top-0 w-full h-full flex justify-center items-center z-50 uppercase text-center text-[25px] leading-[27px] sm:text-[30px] sm:leading-[33px] lg:text-[35px] lg:leading-[38.5px] text-white">
        {"Offrir des événements spectaculaires"}
      </h1>

      <div className="absolute bottom-24 left-1/2 transform -translate-x-1/2 text-white z-50">
        <a href="#about">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 animate-bounce"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 15l7 7 7-7"
            />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default Hero;
