import React,{ useState, useEffect, Fragment }  from "react";
import "./App.css";
import Header from "./Header/Header";
import Home from "./Home/Home";
import ProjectPage from "./Project/ProjectPage";
import Experience from "./Experience/Experience";
import Education from "./Education/Education";
import Skills from "./Skills/Skills";
import Contact from "./Contact/Contact";

function App() {
  const [users, setusers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();

  // useEffect(() => {
  //   const sendRequest = async () => {
  //     setIsLoading(true);
  //     try {
  //       const response = await fetch("http://localhost:5000/users/");

  //       const responseData = await response.json();

  //       if (!response.ok) {
  //         throw new Error(responseData.message);
  //       }

  //       setusers(responseData);
  //     } catch (err) {
  //       setError(err.message);
  //     }
  //     setIsLoading(false);
  //   };
  //   sendRequest();
  // }, []);

  // console.log(users[0]);

  return (
    <div className="app">
    <div className="main">
      <Header />
      <div className="body">
        <Home />
        <ProjectPage />
        <Experience />
        <Education />
        <Skills />
        <Contact />
      </div>
    </div>
    </div>
  );
}
export default App;
