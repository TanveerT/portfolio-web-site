import React from "react";
import Navbar from "./Navbar";
import Slider from "./Slider";
import "../css/Projects.css";

const Projects = (props) => {
  return (
    <div className="container">
      <Navbar />
      <Slider />
      <div className="card">
        <h1>Projects</h1>
      </div>
    </div>
  );
};

export default Projects;
