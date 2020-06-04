import React, { useEffect, useState } from "react";
import "./ProjectCard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
const ProjectCard = props => {
    console.log(props);
  return (

    
    <li className="projectCard" id="projectCard">
      <img
        className="cardimg"
        src={require("../assets/images/facebook.jpg")}
        alt="Cover Photo"
      />
      <div className="details" id="details">
        <div className="title">
  <h1>{props.title}</h1>
          <h3>{props.type}</h3>
        </div>
        <div className="cardbody">
          <h6>
            {props.description}
          </h6>
          <a href="#forget">Explore</a>
        </div>
      </div>
    </li>
  );
};

export default ProjectCard;
