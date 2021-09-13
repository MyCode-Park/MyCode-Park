import React from "react";
import "./Checkout.css";
import Subtotal from "../Subtotal/Subtotal";
import Banner from "../Pics/AdBan.png";

function Checkout() {
  return (
    <div className="checkout">
      {/* Right Section */}
      <div className="checkout__left">
        <img className="checkout__ad" src={Banner} alt="" />
        <div className="checkout__title">
          <h2>Your shopping basket</h2>
        </div>
      </div>
      {/* Left section */}
      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
