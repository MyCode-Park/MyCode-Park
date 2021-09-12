import React from "react";
import "./HeroSection2.css";
function HeroSection2({ image, info, title }) {
  return (
    <div className="heroSection2">
      <img className="heroSection2__img" src={image} alt="" />
      <div className="heroSection2__info">
        <p>{info}</p>
      </div>
      <div className="heroSection2__name">
        <p>{title}</p>
      </div>
      <button className="heroSection2__button">Shop Now</button>
    </div>
  );
}
export default HeroSection2;
