import React, { useEffect, useState } from "react";
import "./ProjectPage.css";
import ProjectCard from "../Shared/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const ProjectPage = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 350,
    slidesToShow: 3.15,
    slidesToScroll: 1,
    swipeToSlide: true,
    // autoplay: true,
    initialSlide: 0,
    autoplaySpeed: 200,
    rows: 2,
    arrows: false,
    // arrows:false,

    // centerMode: true,
    // centerPadding:'3%',

    responsive: [
      {
        breakpoint: 720,
        settings: {
          slidesToShow: 1.1,
          slidesToScroll: 1
        }
      }
    ]
  };

  const projectsA = [
    {
      id: "p1",
      type: "Software",
      title: "riscVprocessor",
      description:
        "Developed a pipelined datapath block diagram and Verilog description supporting the entirety of RV32I instructions.w",
      imageURL: "riscV.PNG",

      link: "https://github.com/moelshabshiri/riscVprocessor"
    },

    {
      id: "p2",
      type: "App",
      title: "myWeek",
      description:
        "My Week is an app built using React Native and the Expo CLI that lets the user make a weekly schedule and create tasks for each day of the week.",
      imageURL: "myWeek.jpeg",
      link: "https://github.com/moelshabshiri/GoalApp"
    },
    {
      id: "p3",
      type: "Website",
      title: "KlickIt",
      description:
        "Worked with a team in developing the frontend of the website https://klickit.co. Collaborated with a team in developing online payment platforms for schools and companies using Angular using ASP.net MVC, Angular 8, SQL, and Git",
      imageURL: "KlickIt.PNG",
      link: "https://klickit.co"
    },
    {
      id: "p4",
      type: "Game",
      title: "Pacman",
      description: "Developing of Pacman using SFML libraries of C++.",
      imageURL: "Pacman.PNG",
      link: "https://www.youtube.com/watch?v=enqbzjWkZ6A&t=85s"
    },

    {
      id: "p5",
      type: "App",
      title: "GuessTheNumber",
      description:
        "Guess the Number is a game built using React Native where the user chooses a number and the AI would try to guess the number using cues from the user",
      imageURL: "Guess.jpeg",
      link: "https://github.com/moelshabshiri/GuessNumberApp"
    },
    {
      id: "p6",
      type: "Software",
      title: "Disk Analyzer Backendd",
      description: "Wrote the backend code of a Linux Disk Analyzer using C++",
      imageURL: "DiskAnalyzer.png",
      link: "https://github.com/moelshabshiri/LinuxDiskAnalyzer"
    },
    {
      id: "p7",
      type: "Software",
      title: "Synchronization Problem",
      description: "Unisex bathroom problem solved using pthreads, mutex locks and condition variables. Written in C",
      imageURL: "pthreads.png",
      link: "https://https://github.com/moelshabshiri/unisex-pthreads"
    },
    {
      id: "p8",
      type: "Website",
      title: "COVID19-QA",
      description: "This is a website that includes frequently asked questions about COVID-19 and their answers. It was built using React for frontend, NodeJS and ExpressJS for the backend, and MongoDB for the database.",
      imageURL: "covid.png",
      link: "https://github.com/moelshabshiri/COVID19-QA"
    }
  ];

  const [projects, setProjects] = useState(projectsA);

  const filterHandler = event => {
    const type = event.target.value;
    if (type == "All") {
      setProjects(projectsA);
    } else {
      const filteredProjects = projectsA.filter(item => item.type === type);
      setProjects(filteredProjects);
    }
    // console.log(skills);
    // console.log(why);
  };

  return (
    <div className="projectPage" id="projectPage">
      <h1 className="pageTitle">Projects</h1>
      <select onChange={filterHandler} class="selectPicker">
        <option value="All" onClick={filterHandler}>
          All
        </option>
        <option value="Website" onClick={filterHandler}>
          Website
        </option>
        <option value="App" onClick={filterHandler}>
          App
        </option>
        <option value="Game" onClick={filterHandler}>
          Game
        </option>
        <option value="Software" onClick={filterHandler}>
          Software
        </option>
      </select>

      <Slider className="slides" {...settings}>
        {projects.map(project => (
          <div className="slidesBody">
            <ProjectCard
              key={project.id}
              id={project.id}
              title={project.title}
              type={project.type}
              description={project.description}
              imageURL={project.imageURL}
              link={project.link}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ProjectPage;
