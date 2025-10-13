import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import SendMessage from "../../components/SendMessage";
import Hero from "./Hero";
import Intro from "./Intro";
import Shooting from "./Shooting";

const Loader = () => {
  return (
    <div className="relative bg-lake_background">
      <Navbar path={"/pure-house-on-the-lake/photoshooting"} change={true} />
      <Hero />
      <Intro />
      <Shooting />
      <SendMessage />
      <Footer path={"/pure-house-on-the-lake/photoshooting"} />
    </div>
  );
};

export default Loader;
