import React from "react";
import "./App.css";
import Header from "./Header/Header";
import Home from "./Home/Home";
import ProjectPage from "./Project/ProjectPage";
import Experience from "./Experience/Experience";

function App() {
  return (
    <div className="app">
    <div className="main">
      <Header />
      <div className="body">
        <Home />
        <ProjectPage />
        <Experience />
      </div>
    </div>
    </div>
  );
}
export default App;
