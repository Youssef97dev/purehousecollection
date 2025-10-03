import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Contact from "./components/Contact";
import FormContact from "./components/FormContact";

const page = () => {
  return (
    <div className="relative">
      <Navbar path="/pure-farmhouse/contact" />
      <Contact />
      <div className="w-full h-[1px] bg-farmhouse_text mx-auto"></div>
      <FormContact />
      <div className="w-full h-[1px] bg-farmhouse_text mx-auto"></div>
      <Footer />
    </div>
  );
};

export default page;
