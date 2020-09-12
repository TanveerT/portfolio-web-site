import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import photo from "../images/EDIT-min.jpg";
import "../css/Header.css";

const Header = () => {
  const [Loading, setLoading] = useState(false);
  console.log(Loading);

  return (
    <div className="header">
      <div className="header-nav">
        <div className="header-photo-continer d">
          <div
            className="img-skeleton"
            style={Loading ? { background: "black" } : { background: "white" }}
          >
            {Loading ? null : <Skeleton count={10} />}

            <img
              className="header-photo"
              onLoad={Loading ? null : setLoading(true)}
              src={photo}
              alt="profilepic"
            />
          </div>
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
          <Link to="/about">
            <li className="list-item">About</li>
          </Link>
          <Link to="/education">
            <li className="list-item">Education</li>
          </Link>
          <Link to="/projects">
            <li className="list-item">Projects</li>
          </Link>
          <Link to="/writings">
            <li className="list-item">Writing</li>
          </Link>
          <Link to="/contact">
            <li className="list-item">Contact Me</li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Header;
