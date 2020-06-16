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
          src={require("../assets/images/riscV.PNG")}
          alt="Cover Photo"
        />
      </div>

      <div className="edetails" id="edetails">
        <div className="etitleMain">
          <div className="etitle">
            <h1>VISA</h1>
            <h3>Brand Ambassador</h3>
          </div>
          {/* <div className="etitle__slide"> */}

          <img
            className="etitle__slide"
            src={require("../assets/images/next.png")}
            alt="Cover Photo"
          />
          {/* </div> */}
        </div>
        <div className="ecardbody">
          <h5>
            Assisting with VIP guests’ arrivals and departures, Greeting and
            registering guests on arrival to program or match day at the Visa
            hospitality desk Escorting guests to vehicles and to the stadium and
            other destinations, Match day guidance and guiding guests safely and
            efficiently into and out of stadium, Assisting with ticket
            distribution, Clear communication to the guests on the transport
            vehicles
          </h5>
          {/* <a href="#forget">Explore</a> */}
        </div>
      </div>
    </div>

    // <div className="sq">

    // </div>
  );
};

export default ExperienceCard;
