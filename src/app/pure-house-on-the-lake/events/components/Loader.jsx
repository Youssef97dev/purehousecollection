import Hero from "./Hero";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import SendMessage from "../../components/SendMessage";
import Wedding from "./Wedding";
import SectionEv from "./SectionEv";
import Experts from "./Experts";

const Loader = () => {
  return (
    <div className="relative bg-lake_background">
      <Navbar path={"/fr/pure-house-on-the-lake/events"} />
      <Hero />
      <Wedding />
      <SectionEv />
      <Experts />
      <SendMessage />
      <Footer path={"/fr/pure-house-on-the-lake/events"} />
    </div>
  );
};

export default Loader;
