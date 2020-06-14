import React, { useEffect, useState } from "react";
import "./Skills.css";
import SCard from "../Shared/SCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const settings = {
  dots: true,
  infinite: true,
  speed: 350,
  slidesToShow: 5,
  slidesToScroll: 1,
  initialSlide: 0,
  centerMode: true,
  centerPadding: 0
};

const skills = [
  { id: "s1", title: "C++", status: "Good" },
  { id: "s2", title: "C", status: "Good" },
  { id: "s3", title: "Javascript", status: "Good" },
  { id: "s4", title: "Typescript", status: "Good" },
  { id: "s5", title: "React", status: "Good" },
  { id: "s6", title: "Angular", status: "Good" }
];

const Skills = () => {
  return (
    <div className="projectPage" id="skillsPage">
      <h1>Skills</h1>

      <Slider className="slides" {...settings}>
        {skills.map(skill => (
          <div className="slidesBody">
            <SCard
              key={skill.id}
              id={skill.id}
              title={skill.title}
              status={skill.status}
            />  
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Skills;
