import About from "./About";
import Book from "./Book";
import Events from "./Events";
import Footer from "./Footer";
import Hero from "./Hero";
import Intro from "./Intro";
import Navbar from "./Navbar";
import SectionNd from "./SectionNd";
import SectionRd from "./SectionRd";
import SectionSt from "./SectionSt";
import SendMessage from "./SendMessage";

const Loader = () => {
  return (
    <div className="relative bg-lake_background">
      <Navbar path={"/fr/pure-house-on-the-lake"} />
      <Hero />
      <Intro />
      <About />
      <SectionSt />
      <Book />
      <SectionNd />
      <Events />
      <SectionRd />
      <SendMessage />
      <Footer />
    </div>
  );
};

export default Loader;
