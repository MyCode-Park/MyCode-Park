import React from "react";
import "./BuyerForm.css";
import { Link } from "react-router-dom";

import logo from "../Pics/logo.png";

function BuyerForm() {
  return (
    <div className="buyerForm">
      <Link to="/login">
        <img src={logo} className="buyerForm__logo" />
      </Link>
      <div className="buyerForm__container">
        <h1>Sign In</h1>
        <form>
          <h5>E-mail</h5>
          <input type="text" />

          <h5>Password</h5>
          <input type="password" />

          <button>Sign In</button>

          <p>
            By signin-in you agree to Vellanmaiam's Condition of Use & Sale.
            Please see our Policy Notice, our Cookies Notice and our
            Interest-Based Ads Notice.
          </p>
        </form>
      </div>
    </div>
  );
}

export default BuyerForm;
