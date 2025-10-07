import Hero from "./Hero";
import Footer from "../../components/Footer";
import Intro from "./Intro";
import Navbar from "../../components/Navbar";
import SendMessage from "../../components/SendMessage";
import About from "./About";

const Loader = () => {
  return (
    <div className="relative bg-lake_background">
      <Navbar path={"/fr/pure-house-on-the-lake/about"} />
      <Hero />
      <Intro />
      <About />
      <SendMessage />
      <Footer path={"/fr/pure-house-on-the-lake/about"} />
    </div>
  );
};

export default Loader;
