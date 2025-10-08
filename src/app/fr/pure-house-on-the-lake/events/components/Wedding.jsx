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
          {"MARIAGES SPECTACULAIRES"}
        </h1>
        <p className="font-lora text-[12px] leading-[19.8px] lg:text-[15px] lg:leading-[24.74px]">
          {
            "Dans l’écrin naturel de Marrakech, nous avons orchestré certaines des célébrations nuptiales les plus éblouissantes et mémorables. Nos services spécialisés sont tout ce dont vous rêvez pour transformer votre jour tant attendu en un trésor de mémoire absolument unique. Quelle que soit l’envergure de votre événement, dès votre premier contact avec nous, nous œuvrons sans relâche pour insuffler vie à vos visions. Nous prenons en charge chaque détail — des préparatifs initiaux aux derniers réglages vous laissant libre de savourer l’essentiel en toute sérénité."
          }
        </p>
        <p className="font-lora text-[12px] leading-[19.8px] lg:text-[15px] lg:leading-[24.74px]">
          {
            "Optez pour un séjour sur place et célébrez tout sous notre toit — jusqu’à votre enterrement de vie de garçon ou un rituel spa lendemain de fête pour un repos élégant ! Comme pour tout grand événement, l’art culinaire est essentiel : nos chefs exécutifs se délectent à relever le défi de créer une expérience gastronomique entièrement sur mesure. Que vous collaboriez avec vos propres wedding planners — exigeant notre soutien ponctuel — ou préfériez une solution intégrale de A à Z, Art de la table & mixologie créative, Transport VIP et transferts fluides, Agencement scénique et musique immersive, Feux d’artifice spectaculaires & décors éphémères, Organisation de lune de miel sans intermédiaire."
          }
        </p>
      </div>
    </div>
  );
};

export default Wedding;
