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
          {"DIRECTEMENT SORTIS DE VOS RÊVES"}
        </h1>
        <p className="font-lora text-[12px] leading-[19.8px] lg:text-[15px] lg:leading-[24.74px]">
          {
            "Pour la réception, osez rêver en grand ! Nous vous offrons des décors naturels à couper le souffle, un temps clément assuré, des crépuscules sublimes, et une énergie envoûtante. Un lieu où chaque instant se pare de magie, faisant de Pure House On The Lake le choix absolu pour célébrer votre jour unique."
          }
        </p>
        <p className="font-lora text-[12px] leading-[19.8px] lg:text-[15px] lg:leading-[24.74px]">
          {
            "Au-delà de nos espaces événementiels d’exception, découvrez notre collection exclusive de chambres et suites. Ainsi, vos invités ne passeront pas seulement une soirée enchanteresse, mais savoureront une nuit royale avant de s’éveiller à un petit-déjeuner ressourçant. Ils profiteront également d’une pléthore d’équipements premium, le tout servi avec cette chaleur professionnelle légendaire qui fait la renommée de Marrakech — comme un écho gracieux à la magie de la veille."
          }
        </p>
      </div>
    </div>
  );
};

export default SectionEv;
