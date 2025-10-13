import Image from "next/image";

const SectionEv = () => {
  return (
    <div
      id="sectionev"
      className="w-full h-full flex md:flex-row-reverse flex-col justify-center items-center py-5 px-5 lg:px-28 gap-14"
    >
      <div className="relative w-full">
        <Image
          id="wedding-image"
          src="/lake/IMG_9215.jpeg"
          height={1000}
          width={1000}
          alt="Event Pure House On The Lake"
          priority
          className={`object-cover w-full h-full lg:h-screen`}
        />
        {/* Filter */}
      </div>
      <div className="w-full h-full flex flex-col justify-center items-center gap-4 text-center text-[#2E2E2C]">
        <h1 className="text-[18px] leading-[19.8px] sm:text-[20px] sm:leading-[22px] lg:text-[28px] lg:leading-[30.8px] font-thin text-center text-lake_button mb-5">
          {"STRAIGHT OUT OF YOUR DREAMS"}
        </h1>
        <p className="font-lora text-[12px] leading-[19.8px] lg:text-[15px] lg:leading-[24.74px]">
          {
            "As For the reception, dare to dream big! we can offer stunning scenery, guaranteed good weather, sublime sunsets, and an unmistakable energy, making it the perfect choice for your special day."
          }
        </p>
        <p className="font-lora text-[12px] leading-[19.8px] lg:text-[15px] lg:leading-[24.74px]">
          {
            "In addition to a vast range of event spaces, we also offer a selection of rooms and suites. This ensures your guests not only have a wonderful night but also the chance to sleep in luxury, wake up to a rejuvenating breakfast, and enjoy a plethora of amenities with the exemplary warm, professional service for which Marrakech is famous."
          }
        </p>
      </div>
    </div>
  );
};

export default SectionEv;
