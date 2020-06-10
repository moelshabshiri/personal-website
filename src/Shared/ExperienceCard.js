import React, { useEffect, useState } from "react";
import "./ExperienceCard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
const ExperienceCard = props => {
  console.log(props);
  return (
    <div className="experienceCard" id="experienceCard">
      <div className="ecardimg">      <img
        
        src={require("../assets/images/facebook.jpg")}
        alt="Cover Photo"
      />
      </div>

      <div className="edetails" id="edetails">
        <div className="etitle">
          <h1>Teeeeeee</h1>
          <h3>Type</h3>
        </div>
        <div className="ecardbody">
          <h6>State plays an important role in any React application, and hence it is very important that developers are careful when they are working with it.
The initial step of writing state are quite simple, we create a constructor method inside the class’s render and initialize the state inside it.
Then, when you want the state and this.props inside the setState method like this:</h6>
          <a href="#forget">Explore</a>
        </div>
      </div>
    </div>

    // <div className="sq">

    // </div>
  );
};

export default ExperienceCard;
