import React, { useEffect, useState } from "react";
import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
const Header = () => {
  return (
    <header className="header">
      <nav className="nb">
        <img
          className="logo"
          src={require("../assets/images/logo.png")}
          alt="Cover Photo"
        />
        <input type="checkbox" id="check" />
        <label for="check" className="checkbtn">
          <FontAwesomeIcon
            id="checkbtn1"
            color="white"
            size="5x"
            icon={faBars}
          />
        </label>

        <div className="headerUL">
          <a id="homePage" href="#homePage">
            <li className="headerLi">Home</li>
          </a>

          <a href="#projectPage">
            <li className="headerLi">Projects </li>
          </a>

          <a href="#experiencePage">
            <li className="headerLi">Experience</li>
          </a>

          <a href="#educationPage">
            <li className="headerLi">Education</li>
          </a>
          <a href="#skillsPage">
            <li className="headerLi">Skills</li>
          </a>
          <a href="#contactPage">
            <li className="headerLi">Contact</li>
          </a>
          {/* <li>
            <a className="button" href="#forget">
              Login
            </a>
          </li> */}
        </div>
      </nav>
    </header>
  );
};

export default Header;
