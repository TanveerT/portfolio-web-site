import React from "react";
import photo from "../images/EDIT.jpg";
import "../css/Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="header-nav">
        <div className="header-photo-continer d">
          <img className="header-photo" src={photo} alt="profilepic" />
        </div>
        <div className="header-text d">
          <h1>
            <span className="">H</span>
            <span className="">i</span>
            <span className="">,</span>

            <br />
            <span className="">I</span>
            <span className="">'</span>
            <span className="">m</span>
            <span className="name f">T</span>
            <span className="name">a</span>
            <span className="name">n</span>
            <span className="name">v</span>
            <span className="name">e</span>
            <span className="name">e</span>
            <span className="name">r</span>
            <span className="name f">A</span>
            <span className="name">h</span>
            <span className="name">a</span>
            <span className="name">m</span>
            <span className="name">e</span>
            <span className="name">d</span>
          </h1>
        </div>
      </div>

      <div className="header-links">
        <ul className="header-lists">
          <li className="list-item">
            <a href="$">Education</a>
          </li>
          <li className="list-item">
            <a href="$">Projects</a>
          </li>
          <li className="list-item">
            <a href="$">Writing</a>
          </li>
          <li className="list-item">
            <a href="$">Contact me</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
