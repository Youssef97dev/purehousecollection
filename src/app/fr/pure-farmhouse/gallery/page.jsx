import React from "react";
import Navbar from "../components/Navbar";
import Gallery from "./components/Gallery";
import Footer from "../components/Footer";

const page = () => {
  return (
    <div className="relative">
      <Navbar path="/pure-farmhouse/gallery" />
      <Gallery />
      <div className="w-[60%] h-[1px] bg-farmhouse_text mx-auto"></div>
      <Footer />
    </div>
  );
};

export default page;
