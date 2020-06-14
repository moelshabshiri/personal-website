import React, { useEffect, useState } from "react";
import "./Experience.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import ECard from "../Shared/ECard";
const Experience = props => {
    console.log(props);
  return (

    <div className="experience" id="experiencePage">
        <h1>Experience</h1>
        <div className="experienceBody">
        <ECard />
        <ECard />
        <ECard />
        </div>
    </div>


  );
};

export default Experience;
