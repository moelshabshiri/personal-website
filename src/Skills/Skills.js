import React, { useEffect, useState } from "react";
import "./Skills.css";
import SCard from "../Shared/SCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { send } from "emailjs-com";
const Skills = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 350,
    slidesToShow: 5.2,
    rows: 2,
    slidesToScroll: 1,
    initialSlide: 0,
    // centerMode: true,
    centerPadding: 0,
    arrows: false,
    swipeToSlide: true
  };

  const skillsA = [
    { id: "s1", title: "C++", status: "Good", type: "Programming" },
    { id: "s2", title: "C", status: "Good", type: "Programming" },
    {
      id: "s3",
      title: "Javascript",
      status: "Good",
      type: "Programming"
    },
    {
      id: "s4",
      title: "Typescript",
      status: "Good",
      type: "Programming"
    },
    { id: "s5", title: "React", status: "Good", type: "Programming" },
    {
      id: "s6",
      title: "React Native",
      status: "Good",
      type: "Programming"
    },
    { id: "s7", title: "Angular", status: "Good", type: "Programming" },
    { id: "s8", title: "HTML", status: "Good", type: "Programming" },
    { id: "s9", title: "CSS", status: "Good", type: "Programming" },
    { id: "s10", title: "NodeJS", status: "Good", type: "Programming" },
    { id: "s11", title: "ExpressJS", status: "Good", type: "Programming" },
    { id: "s12", title: "SQL", status: "Good", type: "Database" },
    { id: "s13", title: "MongoDB", status: "Good", type: "Database" },
    {
      id: "s14",
      title: "MIPS Assembly Language",
      status: "Good",
      type: "Hardware Description Languag"
    },
    {
      id: "s15",
      title: "RISC V",
      status: "Good",
      type: "Hardware Description Language"
    },
    {
      id: "s16",
      title: "Verilog",
      status: "Good",
      type: "Hardware Description Language"
    },
    { id: "s17", title: "Windows", status: "Good", type: "Operating System" },
    { id: "s18", title: "Linux", status: "Good", type: "Operating System" },
    { id: "s19", title: "Git", status: "Good", type: "Version Control System" },
    {
      id: "s20",
      title: "GitHub",
      status: "Good",
      type: "Version Control System"
    },
    { id: "s21", title: "Visual Studio", status: "Good", type: "Software" },
    {
      id: "s22",
      title: "Visual Studio Code",
      status: "Good",
      type: "Software"
    },
    { id: "s23", title: "Gimp", status: "Good", type: "Software" },
    {
      id: "s24",
      title: "Adobe Premire Pro",
      status: "Good",
      type: "Software"
    },
    {
      id: "s25",
      title: "Microsoft Word",
      status: "Good",
      type: "Software"
    },
    {
      id: "s26",
      title: "Microsoft PowerPoint",
      status: "Good",
      type: "Software"
    },
    {
      id: "s27",
      title: "Microsoft Excel",
      status: "Good",
      type: "Software"
    },
    {
      id: "s28",
      title: "Microsoft Outlook",
      status: "Good",
      type: "Software"
    },
    { id: "s29", title: "English", status: "Fluent", type: "Language" },
    { id: "s30", title: "Arabic", status: "Fluent", type: "Language" },
    { id: "s31", title: "Spanish", status: "Basic", type: "Language" }
  ];

  const [skills, setSkills] = useState(skillsA);

  const filterHandler = event => {
    const type = event.target.value;
    if (type == "All") {
      setSkills(skillsA);
    } else {
      const filteredSkills = skillsA.filter(item => item.type === type);
      setSkills(filteredSkills);
    }
    // console.log(skills);
    // console.log(why);
  };

  return (
    <div className="projectPage" id="skillsPage">
      <h1 className="pageTitle">Skills and Languages</h1>
      <div className="filterButtons">
        <button value="All" onClick={filterHandler}>
          All
        </button>
        <button value="Programming" onClick={filterHandler}>
          Programming
        </button>

        <button value="Database" onClick={filterHandler}>
          Databases
        </button>
        <button value="Operating System" onClick={filterHandler}>
          Operating Systems
        </button>
        <button value="Version Control System" onClick={filterHandler}>
          Version Control Systems
        </button>
        <button value="Software" onClick={filterHandler}>
          Softwares
        </button>
        <button value="Language" onClick={filterHandler}>
          Languages
        </button>
      </div>
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
