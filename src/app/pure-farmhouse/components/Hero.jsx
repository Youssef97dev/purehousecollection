"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const imagesLarge = [
  {
    src: "/farm/farm-hero-1.webp",
    class: "object-center",
  },
  {
    src: "/farm/farm-hero-3.webp",
    class: "object-center",
  },
  {
    src: "/farm/farm-hero-5.webp",
    class: "object-center",
  },
  {
    src: "/farm/farm-hero-6.webp",
    class: "object-bottom",
  },
  {
    src: "/farm/farm-hero-7.webp",
    class: "object-center",
  },
];

const imagesSmall = [
  {
    src: "/farm/farm-hero-mobile-1.webp",
    class: "object-center",
  },
  {
    src: "/farm/farm-hero-mobile-2.webp",
    class: "object-center",
  },
  {
    src: "/farm/farm-hero-mobile-3.webp",
    class: "object-top",
  },
  {
    src: "/farm/farm-hero-mobile-4.webp",
    class: "object-center",
  },
  {
    src: "/farm/farm-hero-mobile-5.webp",
    class: "object-bottom",
  },
];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % imagesLarge.length);
    }, 5000); // Change image every 3000ms

    return () => clearInterval(interval);
  }, []);

  return (
    <div id="hero" className="relative w-full h-[110dvh]">
      <div className="w-full h-full lg:block hidden">
        {imagesLarge.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={image.src}
              alt={`Image ${index + 1}`}
              width={1500}
              height={1500}
              className={`w-full h-full object-cover ${image.class}`}
            />
          </div>
        ))}
      </div>
      <div className="w-full h-full lg:hidden block">
        {imagesSmall.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={image.src}
              alt={`Image ${index + 1}`}
              width={1500}
              height={1500}
              className={`w-full h-full object-cover ${image.class}`}
            />
          </div>
        ))}
      </div>
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-10 top-0 w-full h-full flex justify-center items-center">
        <Image
          src="/farm/farm-logo-white.png"
          width={300}
          height={300}
          alt="Logo Pure Farm House"
          className={`w-36 lg:w-44`}
        />
      </div>

      <div className="absolute bottom-0 w-full bg-black bg-opacity-70 text-white text-center text-[14px] tracking-widest font-anagoThin py-2">
        <Link href="#" className="hover:underline">
          {"Book now for exclusive benefits"}
        </Link>
      </div>

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
