import React from "react";

import DrawerToggleButton from "./SideDrawer/DrawerToggleButton";
import { Link } from "react-router-dom";
import "../css/Responsive.css";

const Responsive = (props) => {
  return (
    <header className="toolbar">
      <nav className="toolbar-nav">
        <div className="toolbar-logo">
          <Link to="/">
            <i>Tanveer</i>
            <i> Ahamed</i>
          </Link>
        </div>
        <div className="spacer" />
        <div className="toolbar-nav-items">
          <ul>
            <Link to="/">
              <li className="ul-item">Home</li>
            </Link>
            <Link to="/about">
              <li className="ul-item">About</li>
            </Link>
            <Link to="/education">
              <li className="ul-item">Education</li>
            </Link>
            <Link to="/projects">
              <li className="ul-item">Projects</li>
            </Link>
            <Link to="/writings">
              <li className="ul-item">Writing</li>
            </Link>
            <Link to="/contact">
              <li className="ul-item">Contact Me</li>
            </Link>
          </ul>
        </div>
        <div>
          <DrawerToggleButton c={props.clickHandler} />
        </div>
      </nav>
    </header>
  );
};
export default Responsive;
