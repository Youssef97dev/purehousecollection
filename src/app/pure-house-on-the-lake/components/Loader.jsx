import Hero from "./Hero";
import Navbar from "./Navbar";

const Loader = () => {
  return (
    <div className="relative h-[300vh]">
      <Navbar path={"/fr/pure-house-on-the-lake"} />
      <Hero />
    </div>
  );
};

export default Loader;
