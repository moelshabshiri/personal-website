import React, { useEffect, useState } from "react";
import "./Education.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import ECard from "../Shared/ECard";
const Education = props => {
    console.log(props);
  return (

    <div className="education" id="educationPage">
        <h1>Education</h1>
        <div className="educationBody">
        <ECard />
        <ECard />
        <ECard />
        </div>
    </div>


  );
};

export default Education;
