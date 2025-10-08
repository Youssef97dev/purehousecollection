import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Shooting from "./components/Shooting";
import Intro from "./components/Intro";

const page = () => {
  return (
    <div className="relative">
      <Navbar path={"/fr/pure-farmhouse/photoshooting"} />
      <Intro />
      <Shooting />
      <div className="w-[60%] h-[1px] bg-farmhouse_text mx-auto"></div>
      <Footer />
    </div>
  );
};

export default page;
