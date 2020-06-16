import React, { useEffect, useState } from "react";
import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
const Header = () => {
  return (
    <header className="header"  tabindex="1" >
      <nav className="nb"    >
        <img 
          className="logo"
          src={require("../assets/images/logo.png")}
          alt="Cover Photo"
        />
        <input type="checkbox" id="check" />
        <label for="check" className="checkbtn">
          <FontAwesomeIcon id="checkbtn1" color="white" size="5x" icon={faBars} />
          {/* <FontAwesomeIcon id="checkbtn2"color="white" size="5x" icon={faTimes} /> */}
        </label>

        <ul  className="headerUL">
          {/* <input type="checkbox" id="checkk" /> */}
          <li className="header" tabindex="1" >
            <a id="homePage" href="#homePage">
              Home
            </a>
          </li>

          <li>
            <a href="#projectPage">Projects</a>
          </li>
          <li>
            <a href="#experiencePage">Experience</a>
          </li>
          <li>
            <a href="#educationPage">Education</a>
          </li>
          <li>
            <a href="#skillsPage">Skills</a>
          </li>
          <li>
            <a href="#contactPage">Contact</a>
          </li>
          <li>
            <a className="button" href="#forget">
              Login
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
