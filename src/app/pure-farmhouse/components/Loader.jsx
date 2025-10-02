import About from "./About";
import AboutTwo from "./AboutTwo";
import Hero from "./Hero";
import Intro from "./Intro";
import Navbar from "./Navbar";

const Loader = () => {
  return (
    <div className="relative">
      <Navbar path={"/fr/pure-farmhouse"} />
      <Hero />
      <Intro />
      <div className="w-20 h-[1px] bg-farmhouse_text mx-auto"></div>
      <About />
      <div className="w-20 h-[1px] bg-farmhouse_text mx-auto"></div>
      <AboutTwo />
    </div>
  );
};

export default Loader;
