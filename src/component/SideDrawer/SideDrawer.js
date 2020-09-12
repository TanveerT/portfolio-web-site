import React from "react";
import "./sidedrawer.css";
import { Link } from "react-router-dom";
const SideDrawer = (props) => {
  let drawerClasses = "sidedrawer";
  if (props.show) {
    drawerClasses = "sidedrawer open";
  }

  return (
    <nav className={drawerClasses}>
      <ul>
        <Link to="/">
          <li className="ul-item">Home</li>
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
    </nav>
  );
};

export default SideDrawer;
