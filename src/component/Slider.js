import React, { useState, useEffect, useRef } from "react";
import { quots } from "../data/quots.js";
import Quote from "./Quots.js";
import "../css/Slider.css";
const Slider = (props) => {
  const [count, setCount] = useState(0);
  const loadRef = useRef(null);

  useEffect(() => {
    let id;
    const move = () => {
      var width = 1;
      id = setInterval(frame, 70);
      function frame() {
        if (width >= 100) {
          clearInterval(id);
        } else {
          width = width + 1;
          loadRef.current.style.width = width + "%";
        }
      }
    };
    move();
    let timer = setTimeout(() => {
      if (count < quots.length - 1) setCount(count + 1);
      else {
        setCount(0);
      }
    }, 7000);
    return () => {
      clearInterval(id);
      clearTimeout(timer);
    };
  }, [count]);

  return (
    <div className="slider-continer">
      <Quote quote={quots[count]} />

      <div className="loding-indicator">
        <div ref={loadRef} className="loading"></div>
      </div>
    </div>
  );
};

export default Slider;
