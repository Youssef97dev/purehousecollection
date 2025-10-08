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
          src="https://res.cloudinary.com/dz7wroord/image/upload/v1753457348/dar_ouzguita/yuo_jjfawh.jpg"
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
          {"LES EXPERTS EN ÉVÉNEMENTS"}
        </h1>
        <p className="font-lora text-[12px] leading-[19.8px] lg:text-[15px] lg:leading-[24.74px]">
          {
            "À chaque étape de la préparation de votre événement, une équipe passionnée et chevronnée se tient à vos côtés. Dévouée et à l’écoute, elle œuvre sans relâche pour donner vie à vos rêves les plus secrets, transformant chaque souhait en réalité."
          }
        </p>
        <p className="font-lora text-[12px] leading-[19.8px] lg:text-[15px] lg:leading-[24.74px]">
          {
            "Nous avons réuni une équipe d’exception et un réseau de partenaires triés sur le volet. Notre mission ? Donner à votre événement une délicate légèreté, faire en sorte que chaque instant fuse avec grâce, et transformer l’expérience en joyau de mémoire pour tous vos proches."
          }
        </p>
        <p className="font-lora text-[12px] leading-[19.8px] lg:text-[15px] lg:leading-[24.74px]">
          {
            "Chaque événement est une création sur-mesure pensée pour épouser vos désirs, qu’il s’agisse de célébrations de mariage pour couples internationaux, d’un séminaire d’entreprise raffiné, d’une bat-mitsva joyeuse ou d’un colloque élégant. Notre offre inclut également, Une restauration spécialisée (halal/kasher sur demande), Des compositions florales romantiques à la fraîcheur poétique, Des DJs d’exception maîtrisant l’art de l’ambiance, Une scénographie épurée et des décors élégants, Un écosystème technique complet pour l’intégralité des besoins."
          }
        </p>
        <p className="font-lora text-[12px] leading-[19.8px] lg:text-[15px] lg:leading-[24.74px]">
          {
            "Qu’il s’agisse de transporter vos invités avec élégance ou de transformer votre arrivée en instant mémorable, nous mettons à votre disposition une flotte exclusive : limousines Classe S, Range Rovers, et minibus Mercedes au design épuré. Rencontrer — et dépasser — les attentes de vos proches est notre priorité absolue. Cette exigence silencieuse, portée par chaque membre de notre équipe, est le cœur battant de notre succès."
          }
        </p>
      </div>
    </div>
  );
};

export default Experts;
