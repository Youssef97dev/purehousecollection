import Hero from "./Hero";
import Footer from "../../components/Footer";
import Intro from "./Intro";
import Navbar from "../../components/Navbar";
import SendMessage from "../../components/SendMessage";
import Yoga from "./Yoga";

const Loader = () => {
  return (
    <div className="relative bg-lake_background">
      <Navbar path={"/fr/pure-house-on-the-lake/yoga-wellness"} />
      <Hero />
      <Intro />
      <Yoga />
      <SendMessage />
      <Footer path={"/fr/pure-house-on-the-lake/yoga-wellness"} />
    </div>
  );
};

export default Loader;
