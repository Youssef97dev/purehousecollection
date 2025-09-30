import Hero from "./Hero";
import Navbar from "./Navbar";

const Loader = () => {
  return (
    <div className="relative">
      <Navbar path={"/fr/pure-farmhouse"} />
      <Hero />
    </div>
  );
};

export default Loader;
