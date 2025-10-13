import Image from "next/image";

const Experts = () => {
  return (
    <div
      id="experts"
      className="w-full h-full flex md:flex-row flex-col justify-center items-center py-5 px-5 lg:px-28 gap-14"
    >
      <div className="relative w-full">
        <Image
          id="expert-image"
          src="/lake/lake-22.jpg"
          height={1000}
          width={1000}
          alt="Experts Events Oure House On The Lake"
          priority
          className={`object-cover object-bottom w-full h-full lg:h-screen`}
        />
        {/* Filter */}
      </div>
      <div className="w-full h-full flex flex-col justify-center items-center gap-4 text-center text-[#2E2E2C]">
        <h1 className="text-[18px] leading-[19.8px] sm:text-[20px] sm:leading-[22px] lg:text-[28px] lg:leading-[30.8px] font-thin text-center text-lake_button mb-5">
          {"THE EVENT EXPERTS"}
        </h1>
        <p className="font-lora text-[12px] leading-[19.8px] lg:text-[15px] lg:leading-[24.74px]">
          {
            "At every step of your event preparations, a passionate and highly experienced team is at your disposal, dedicated to making your every wish come true."
          }
        </p>
        <p className="font-lora text-[12px] leading-[19.8px] lg:text-[15px] lg:leading-[24.74px]">
          {
            "We’ve assembled an incredibly talented team and a stellar roster of professionals we partner with. The goal is to make your event appear effortless, flow smoothly, and become a cherished memory for everyone who attends."
          }
        </p>
        <p className="font-lora text-[12px] leading-[19.8px] lg:text-[15px] lg:leading-[24.74px]">
          {
            "Each event is designed from the ground up to fit your requirements and weddings for couples from around the world, a sophisticated company retreat, a delightful bat mitzvah, or a sleek business conference. This also includes specialized catering, romantic fresh flower arrangements, brilliant DJs, elegant decorations, and comprehensive technical equipment to cover."
          }
        </p>
        <p className="font-lora text-[12px] leading-[19.8px] lg:text-[15px] lg:leading-[24.74px]">
          {
            "Whether it’s transporting your guests in style or making your arrival unforgettable, we have a fleet of S-Class limousines, Range Rovers, and Mercedes minibuses and coaches at your disposal. Meeting and exceeding your guest's expectations is our priority, they explain, which seems to be the key to their success."
          }
        </p>
      </div>
    </div>
  );
};

export default Experts;
