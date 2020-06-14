import React, { useEffect, useState } from "react";
import "./SCard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
const SCard = props => {
  return (
    <div className="sCard" id="sCard">
  
          <h1>{props.title}</h1>
          <h3>{props.status}</h3>
      
        </div>

    // <div className="sq">

    // </div>
  );
};

export default SCard;
