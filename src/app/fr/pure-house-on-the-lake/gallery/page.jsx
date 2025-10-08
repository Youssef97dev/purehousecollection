import React from "react";
import Gallery from "./components/Gallery";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const page = () => {
  return (
    <div className="relative bg-white">
      <Navbar path={"/pure-house-on-the-lake/gallery"} change={true} />
      <Gallery />
      <Footer path={"/pure-house-on-the-lake/gallery"} />
    </div>
  );
};

export default page;
