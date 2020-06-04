import React, { useEffect, useState } from "react";
import "./Home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
const Home = () => {
  return (
    <div>
      <img
        className="cover"
        src={require("../assets/images/home-cover.png")}
        alt="Cover Photo"
      />
      <div className="home">
        <img
          className="avatar"
          src={require("../assets/images/avatar.jpg")}
          alt="Cover Photo"
        />
      </div>
      <div className="info">
        <h1>Mohamed Elshabshiri</h1>
        <h3>Software Developer</h3>
      </div>
    </div>
  );
};

export default Home;
