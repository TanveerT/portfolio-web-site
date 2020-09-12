import React from "react";
import "./DrawerToggleButton.css";
const DrawerToggleButton = (props) => {
  return (
    <button className="toggle-button" onClick={props.c}>
      <div className="button-line"></div>
      <div className="button-line"></div>
      <div className="button-line"></div>
    </button>
  );
};

export default DrawerToggleButton;
