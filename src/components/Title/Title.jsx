import React from "react";
import "./Title.css";

const Title = ({ subTilte, title}) => {
  return (
    <>
      <div className="title">
        <p>{subTilte}</p>
        <h2>{title}</h2>
      </div>
    </>
  );
};

export default Title;
