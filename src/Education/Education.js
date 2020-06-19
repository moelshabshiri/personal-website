import React, { useEffect, useState } from "react";
import "./Education.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import ECard from "../Shared/ECard";
const Education = props => {


  const education=[
    {
        id: 'e1',
        year: '2014-2017',
        title: 'Dhahran High School',
        description:
          'American Diploma',
        imageURL: 'education/DHS.png',
        
      },
      
      {
        id: 'e2',
        year: '2017-2021',
        title: 'American University in Cairo',
        description:
          'Computer Science',
        imageURL: 'education/AUC.jpg',
      },
     
  
]




  return (
    <div className="education" id="educationPage">
      <h1 className="pageTitle">Education</h1>
      <div className="educationBody">
      {education.map(education => (
        <ECard
          key={education.id}
          id={education.id}
          title={education.title}
          year={education.year}
          description={education.description}
          imageURL={education.imageURL}
        /> ))}
      </div>
    </div>
  );
};

export default Education;
