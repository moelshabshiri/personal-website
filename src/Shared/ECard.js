import React, { useEffect, useState } from "react";
import "./ECard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
const ExperienceCard = props => {
  return (
    <div className="experienceCard" id="experienceCard">
      <div className="ecardimg">
        <img
          className="ecardimg__img"
          src={require(`../assets/images/${props.imageURL}`)}
          alt="Cover Photo"
        />
      </div>
      <div className="edetails" id="edetails">
        <div className="etitleMain">
          <div className="etitle">
            <h1>{props.title}</h1>
            <h3>{props.job}</h3>
            <h3>{props.year}</h3>
          </div>
          <img
            className="etitle__slide"
            src={require("../assets/images/next.png")}
            alt="Cover Photo"
          />
        </div>
        <div className="ecardbody">
          <h3>{props.description}</h3>
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;
