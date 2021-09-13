import React from "react";
import "./HeroSection4.css";

function HeroSection4({ image, title, price, rating, id }) {
  return (
    <div className="heroSection4">
      <img className="heroSection4__img" src={image} alt="" />

      <div className="heroSection4__name">
        <p>{title}</p>
      </div>
      <div className="heroSection4__price">
        <p>
          <small>From $</small>
          {price}
        </p>
      </div>
      <div className="heroSection4__rating">
        {Array(rating)
          .fill()
          .map((_, i) => (
            <p>⭐</p>
          ))}
        <p> {rating} reviews</p>
      </div>

      <button className="heroSection4__button">View Options</button>
    </div>
  );
}
export default HeroSection4;
