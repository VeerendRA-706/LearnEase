import React from "react";
import "./Hero.css";
import RArrow from "../../assets/right-arrow.png";

const Hero = () => {
  return (
    <>
      <div className="hero container">
        <div className="hero-text">
          <h1>We Ensure better education for a better World</h1>
          <p>
            Our Cutting-edge curriculum is desigend to enpover student with the
            knowledge,skills,and experiences needed to excel in the dynamic
            field of education
          </p>
          <button className="btn">
            Explore more <img src={RArrow} alt="" />
          </button>
        </div>
      </div>
    </>
  );
};

export default Hero;
