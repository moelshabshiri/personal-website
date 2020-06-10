import React, { useEffect, useState } from "react";
import "./Experience.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import ExperienceCard from "../Shared/ExperienceCard";
const Experience = props => {
    console.log(props);
  return (

    <div className="experience" >
        <h1>Experience</h1>
        <div className="experienceBody">
        <ExperienceCard />
        <ExperienceCard />
        <ExperienceCard />
        </div>
    </div>


  );
};

export default Experience;
