import React from "react";
import Navbar from "../../Navbar";
import LaunchYourTech from "./LaunchYourTech";
import Simple from "./Simple";
import CrtdAdvantage from "./CrtdAdvantage";
import Footer from "../../Footer";
const fresherJobs = () => {
  return (
    <div className="bg-white text-black ">
      <Navbar />
      <LaunchYourTech />
      <Simple/>
      <CrtdAdvantage/>
      <Footer/>
    </div>
  );
};


export default fresherJobs;
