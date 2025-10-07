import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import SendMessage from "../../components/SendMessage";
import Location from "./Location";

const Loader = () => {
  return (
    <div className="relative bg-lake_background">
      <Navbar path={"/fr/pure-house-on-the-lake/location"} change={true} />
      <Location />
      <SendMessage />
      <Footer path={"/fr/pure-house-on-the-lake/location"} />
    </div>
  );
};

export default Loader;
