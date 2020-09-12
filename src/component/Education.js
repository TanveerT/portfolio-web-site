import React from "react";
import Navbar from "./Navbar";
import Slider from "./Slider";
import "../css/Education.css";

const Education = (props) => {
  return (
    <div className="container">
      <Navbar />
      <Slider />
      <div className="card">
        <h1>Education</h1>
      </div>
    </div>
  );
};

export default Education;
