import React from "react";

const Quots = (props) => {
  // console.log(props.quote.quote);
  return (
    <div className="slider-quot quot">
      <h1>{props.quote.quote} </h1>
      <p>{props.quote.author}</p>
    </div>
  );
};

export default Quots;
