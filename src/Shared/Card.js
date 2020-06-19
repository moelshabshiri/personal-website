import React, { useEffect, useState } from "react";
import "./Card.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
const Card = props => {
  return (
    <div className="projectCard" id="projectCard">
      <div className="cardimg">
        <img className="cardimg__img"
          src={require(`../assets/images/${props.imageURL}`)}
          alt="Cover Photo"
        />
      </div>
      <div className="details" id="details">
        <div className="title">
          <div className="title__text">
          <h1>{props.title}</h1>
          <h3>{props.type}</h3>
          </div>
          <img src={require(`../assets/images/bn.png`)} alt="Cover Photo" />
        </div>
        <div className="cardbody">
          <p>{props.description}</p>
          <a href={props.link}  target="_blank">Explore</a>
        </div>
      </div>
    </div>

    // <div className="sq">

    // </div>
  );
};

export default Card;
