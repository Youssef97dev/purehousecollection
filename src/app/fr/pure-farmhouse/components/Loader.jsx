import About from "./About";
import AboutTwo from "./AboutTwo";
import Footer from "./Footer";
import Hero from "./Hero";
import Intro from "./Intro";
import Navbar from "./Navbar";
import Rooms from "./Rooms";

const Loader = () => {
  return (
    <div className="relative">
      <Navbar path={"/pure-farmhouse"} />
      <Hero />
      <Intro />
      <div className="w-20 h-[1px] bg-farmhouse_text mx-auto"></div>
      <About />
      <div className="w-20 h-[1px] bg-farmhouse_text mx-auto"></div>
      <AboutTwo />
      <div className="w-20 h-[1px] bg-farmhouse_text mx-auto"></div>
      <Rooms />
      <div className="w-[60%] h-[1px] bg-farmhouse_text mx-auto"></div>
      <Footer />
    </div>
  );
};

export default Loader;
