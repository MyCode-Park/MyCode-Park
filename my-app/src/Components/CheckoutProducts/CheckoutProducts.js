import React from "react";
import "./CheckoutProducts.css";
import { useStateValue } from "../Data_Handler/StateProvider";

function CheckoutProducts({ id, image, title, price, rating }) {
  const [{ cart }, dispatch] = useStateValue();

  // Function to remove the item from the cart
  const removeFromCart = (e) => {
    e.preventDefault();
    dispatch({
      type: "REMOVE_FROM_CART",
      id: id,
    });
  };
  return (
    <div className="checkoutProducts">
      <img src={image} className="checkoutProducts__image" />
      <div className="checkoutProducts__info">
        <p className="checkoutProducts__title">{title}</p>
        <p className="checkoutProducts__pice">
          <small>$ </small>
          <strong>{price}</strong>
        </p>
        <div className="checkoutProducts__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>⭐</p>
            ))}
        </div>
        <button
          className="checkoutProducts__removeBtn"
          onClick={removeFromCart}
        >
          Remove from Cart
        </button>
      </div>
    </div>
  );
}

export default CheckoutProducts;
