import React from "react";
import Navbar from "../../Navbar";
import LaunchYourTech from "./LaunchYourTech";
import LAunchYourTech from "./LaunchYourTech";
import Simple from "./Simple";
import CrtdAdvantage from "./CrtdAdvantage";
const fresherJobs = () => {
  return (
    <div className="bg-white text-black ">
      <Navbar />
      <LaunchYourTech />
      <Simple/>
      <CrtdAdvantage/>
    </div>
  );
};

export default fresherJobs;
