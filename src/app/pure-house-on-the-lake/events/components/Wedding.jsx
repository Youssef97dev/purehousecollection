import Image from "next/image";

const Wedding = () => {
  return (
    <div
      id="wedding"
      className="w-full h-full flex md:flex-row flex-col justify-center items-center py-5 px-5 lg:px-28 gap-14"
    >
      <div className="relative w-full">
        <Image
          id="wedding-image"
          src="https://res.cloudinary.com/dz7wroord/image/upload/v1759765800/PureHouseOnTheLake/lake-42_tokd9q.jpg"
          height={1000}
          width={1000}
          alt="Wedding Pure House on the lake"
          priority
          className={`object-cover object-bottom w-full h-full lg:h-screen`}
        />
        {/* Filter */}
      </div>
      <div className="w-full h-full flex flex-col justify-center items-center gap-4 text-center text-[#2E2E2C]">
        <h1 className="text-[18px] leading-[19.8px] sm:text-[20px] sm:leading-[22px] lg:text-[28px] lg:leading-[30.8px] font-thin text-center text-lake_button mb-5">
          {"SPECTACULAR WEDDINGS"}
        </h1>
        <p className="font-lora text-[12px] leading-[19.8px] lg:text-[15px] lg:leading-[24.74px]">
          {
            "Set against the natural backdrop we have orchestrated some of the most spectacular and memorable luxury weddings in Marrakech. Our specialist wedding services are all you need to transform your dream day into a truly special occasion you will treasure forever. Regardless of the size of your event, from the moment you contact us, we work tirelessly to bring your ideas to life, taking care of everything from preparation to last-minute details, allowing you to relax and focus on what truly matters."
          }
        </p>
        <p className="font-lora text-[12px] leading-[19.8px] lg:text-[15px] lg:leading-[24.74px]">
          {
            "Opt to stay at our venue and host your ceremony and celebrations here — even your bachelor party or a day-after spa ritual to recover in style! As with any great event, food is vitally important, and our executive chefs relish the challenge of tailoring a gastronomic experience to your tastes. Whether you choose to work with your own wedding planners and require our assistance or prefer a total event solution, we cover every detail — from food, travel, and drinks to arrangements, music, fireworks, decoration, and even honeymoon planning and execution."
          }
        </p>
      </div>
    </div>
  );
};

export default Wedding;
