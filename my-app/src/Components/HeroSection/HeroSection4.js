import React from "react";
import "./HeroSection4.css";
import { useStateValue } from "../Data_Handler/StateProvider";

function HeroSection4({ id, image, title, price, rating }) {
  const [{ cart }, dispatch] = useStateValue();
  // console.log("cart is loaded >>> ", cart);
  const addToCart = () => {
    // dispatch the item into the data layer
    dispatch({
      type: "ADD_TO_CART",
      item: {
        id: id,
        image: image,
        title: title,
        price: price,
        rating: rating,
      },
    });
  };
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

      <button className="heroSection4__button" onClick={addToCart}>
        Add to Cart
      </button>
    </div>
  );
}
export default HeroSection4;
