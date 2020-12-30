import React, { useEffect, useState } from "react";
import "./Experience.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import ECard from "../Shared/ECard";
const Experience = props => {
  const experience = [
    {
      id: "ex1",
      year: "2020",
      job: "Full Stack Developer-Part-Time",
      title: "Z-Connect ",
      description: "Developed the website of the company https://zconnectegypt.web.app, Built the frontend using React, Bootstrap, HTML, and CSS, Built the backend using NodeJS and ExpressJS, Utilized MongoDB for the database",
      imageURL: "experience/Z Connects.png"
    },
    {
      id: "ex5",
      year: "2019",
      job: "Employee",
      title: "Saudi Aramco School",
      description: "Assisted teachers with their preparation of the next school year,	Used Excel to enter data of the students, Collaborated with colleagues in reorganizing the school’s library",
      imageURL: "experience/Aramco.png"
    },
    {
      id: "ex2",
      year: "2019",
      title: "VISA",
      job: "Brand Ambassador",
      description:
        "Assisting with VIP guests’ arrivals and departures, Greeting and registering guests on arrival to program or match day at the Visa hospitality desk, Escorting guests to vehicles and to the stadium and other destinations, Match day guidance and guiding guests safely and efficiently into and out of stadium, Assisting with ticket distribution, Clear communication to the guests on the transport vehicles",
      imageURL: "experience/VISA.png"
    },

    {
      id: "ex3",
      year: "2019",
      job: "Software Developer",
      title: "KlickIt",
      description: "Developed web applications using web technologies, Worked with a team in developing the frontend of the website https://klickit.co/,	Collaborated with a team in developing online payment platforms for schools and companies using Angular using ASP.net MVC, Angular 8, SQL, and Git,	Built an online ticketing platform using Angular using ASP.net MVC, Angular 8, SQL, and Git",
      imageURL: "experience/klickit.png"
    },
    {
      id: "ex4",
      year: "2019",
      job: "Historic Maps Processor",
      title: "American University in Cairo",
      description: "Read and sort maps according to the choreographic location, Coordinate the digitization of print maps, Rename digital files, Fill out the created metadata form, Coordinate the conservation of the damaged print maps",
      imageURL: 'education/AUC.jpg'
    }
  ];

  return (
    <div className="experience" id="experiencePage">
      <h1 className="pageTitle">Experience</h1>
      <div className="experienceBody">
        {experience.map(experience => (
          <ECard
            key={experience.id}
            id={experience.id}
            title={experience.title}
            job={experience.job}
            year={experience.year}
            description={experience.description}
            imageURL={experience.imageURL}
          />
        ))}
      </div>
    </div>
  );
};

export default Experience;
