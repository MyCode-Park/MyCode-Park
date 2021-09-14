import React from "react";
import "./Checkout.css";
import Subtotal from "../Subtotal/Subtotal";
import Banner from "../Pics/AdBan.png";
import { useStateValue } from "../Data_Handler/StateProvider";
import CheckoutProducts from "../CheckoutProducts/CheckoutProducts";

function Checkout() {
  const [{ cart, user }, dispatch] = useStateValue();

  return (
    <div className="checkout">
      {/* Right Section */}
      <div className="checkout__left">
        <img className="checkout__ad" src={Banner} alt="" />
        {/* <h3> Hello</h3> */}
        <div className="checkout__title">
          <h2>Your shopping basket</h2>
          {cart.map((item) => (
            <CheckoutProducts
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              id={item.id}
              rating={item.rating}
            />
          ))}
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
