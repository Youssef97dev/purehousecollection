import Image from "next/image";

const Info = () => {
  return (
    <section className="w-full h-full px-6 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-8 items-center">
        {/* Left big image */}
        <div className="w-full h-full space-y-4">
          <h2 className="text-[31px] leading-[34px] font-light text-riad_primary border-b-[0.2px] border-riad_primary pb-6">
            Explore Marrakech Right Outside Your Door
          </h2>
          <p className="text-riad_primary text-[14px] leading-[21px] font-light">
            Benefiting from a privileged location in Marrakech, Pure House
            Marrakech offers air-conditioned rooms, a seasonal outdoor swimming
            pool, free Wi-Fi, and a garden.
            <br />
            <br />
            All rooms in this riad include a terrace. Their private bathroom
            comes with a shower and a hairdryer. Bed linen and towels are
            provided.
            <br />
            <br />A continental, Italian, and vegetarian breakfast is served
            daily.
            <br />
            <br />
            Located 500 meters from Jemaa el-Fna Square and less than 1 km from
            the Koutoubia Mosque, it features a terrace and a bar. Bahia Palace
            is less than 1 km away, and Majorelle Garden is 3.2 km away.
          </p>
        </div>

        {/* Right column */}

        <div className="relative w-full h-[400px] lg:h-[400px] overflow-hidden">
          <Image
            src="/riad/riad-info.jpg"
            alt="Luxury resort pool"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default Info;
