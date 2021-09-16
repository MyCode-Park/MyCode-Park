import React from "react";
import "./UserSelection.css";
import { Link } from "react-router-dom";

function UserSelection() {
  return (
    <div className="userSelection">
      <div>
        <h1>Welcome Back!</h1>
        <h1>Please choose your type of login</h1>
      </div>
      <div className="userSelection__seller">
        <Link to="/signInSeller" className="a">
          <h1>Seller Form</h1>
        </Link>
      </div>
      <div className="userSelection__buyer">
        <Link to="/buyerForm" className="a">
          <h1>Buyer Form</h1>
        </Link>
      </div>
    </div>
  );
}

export default UserSelection;
